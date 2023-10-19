import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { api } from './api'
import { profileSchema } from './validations/profile'
import { authSchema, loginResponseSchema } from './validations/auth'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 2, // 2 horas
  },
  jwt: {
    maxAge: 60 * 60 * 2, // 2 horas
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { username, password } = authSchema.parse(credentials)

        try {
          const { token } = await api(loginResponseSchema, '/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          })

          return { id: '', accessToken: token }
        } catch (e) {
          console.error(e)

          return null
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session: jwtSession }) {
      if (trigger === 'update' && jwtSession?.picture) {
        token.picture = jwtSession.picture

        return token
      }

      if (!user) return token

      const profile = await api(profileSchema, '/api/student/profile', {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })

      return {
        accessToken: user.accessToken,
        ra: profile.ra,
        name: profile.name,
        email: profile.institutionalEmail,
        picture: profile.photoUrl,
      }
    },

    async session({ session, token }) {
      if (!token) return session

      session.user.ra = token.ra
      session.user.name = token.name as string
      session.user.email = token.email as string
      session.user.picture = token.picture as string
      session.user.accessToken = token.accessToken

      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}
