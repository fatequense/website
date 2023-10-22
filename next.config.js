/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/aluno/opcoes',
          destination: '/aluno/opcoes/perfil',
        },
      ],
    }
  },
}

module.exports = nextConfig
