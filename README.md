# IoT Frontend - Dashboard de Monitoramento

Frontend interativo para monitoramento de umidade e temperatura em tempo real. Construído com HTML5, JavaScript puro e Tailwind CSS.

## 📋 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Backend API rodando (em `http://localhost:5000` durante desenvolvimento ou em `https://iot-projeto-backend.onrender.com` em produção)
- Conexão com internet

## 🚀 Instalação e Uso

### Opção 1: Desenvolvimento Local

#### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/iot-frontend.git
cd iot-frontend
```

#### 2. Configurar URL da API

Edite o arquivo `config.js` e atualize a URL do backend:

```javascript
const API_CONFIG = {
  development: {
    apiBaseUrl: 'http://localhost:5000/api'
  },
  production: {
    apiBaseUrl: 'https://iot-projeto-backend.onrender.com/api'
  }
};
```

#### 3. Servir localmente

Você pode usar qualquer servidor HTTP local:

**Com Python:**
```bash
python -m http.server 8000
```

**Com Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Com Live Server (VS Code):**
- Instale a extensão "Live Server"
- Clique com direito em `index.html` → "Open with Live Server"

Acesse: `http://localhost:8000`

### Opção 2: Deploy no Netlify

#### 1. Fazer push para o GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

#### 2. Conectar ao Netlify

- Acesse [netlify.com](https://netlify.com)
- Clique em "New site from Git"
- Selecione seu repositório
- Configure:
  - **Build command:** (deixe em branco - é um site estático)
  - **Publish directory:** `.` (raiz do projeto)

#### 3. Adicionar variáveis de ambiente

No dashboard do Netlify, em "Site settings" → "Build & deploy" → "Environment":

```
REACT_APP_API_URL=https://iot-projeto-backend.onrender.com/api
```

#### 4. Deploy

Clique em "Deploy site". Netlify fará o deploy automático a cada push no main.

## 📁 Estrutura do Projeto

```
iot-frontend/
├── index.html           # Página de login
├── dashboard.html       # Dashboard principal
├── telaUsuario.html     # Gerenciamento de usuários (admin)
├── app.js              # Lógica principal (dashboard e login)
├── usuario.js          # Lógica de gerenciamento de usuários
├── config.js           # Configuração de URLs da API
├── style.css           # Estilos globais
├── assets/
│   └── logo-silo.jpeg  # Logo do sistema
│   └── silos.jpeg      # Background
├── .gitignore          # Arquivos a ignorar no Git
└── README.md           # Este arquivo
```

## 🔑 Funcionalidades

### Página de Login (index.html)
- Autenticação de usuários
- Validação de email e senha
- Salvamento de sessão no localStorage

### Dashboard (dashboard.html)
- **Gráficos em tempo real** - Visualização de umidade e temperatura
- **Filtros avançados** - Por data, limite de registros
- **Estatísticas** - Médias, totais, período
- **Exportação** - Gráfico em PNG e dados em CSV
- **Paginação** - Navegação entre registros
- **Alertas** - Notificação de condições críticas

### Gerenciamento de Usuários (telaUsuario.html)
- ✅ Listar usuários
- ✅ Criar novo usuário
- ✅ Editar usuário existente
- ✅ Deletar usuário
- ✅ Controle de permissões (Admin only)

## 🔧 Configuração da API

O projeto usa arquivo `config.js` para gerenciar URLs dinâmicas.

### Desenvolvimento
```javascript
// Automaticamente detecta localhost e usa:
http://localhost:5000/api
```

### Produção
```javascript
// Use variável de ambiente ou defina manualmente:
REACT_APP_API_URL=https://iot-projeto-backend.onrender.com/api
```

## 🔒 Segurança

- ✅ Autenticação via JWT (armazenado em localStorage)
- ✅ Senhas hasheadas no backend (bcrypt)
- ✅ CORS configurado corretamente
- ✅ Validação de email no frontend
- ✅ Proteção de rotas (redirect se não logado)

## 🚨 Troubleshooting

### "Erro ao carregar os dados"
- Verifique se o backend está rodando
- Confirme que a URL da API em `config.js` está correta
- Verifique o console do navegador (F12) para mais detalhes

### CORS Error
- Certifique-se que o backend tem CORS habilitado
- Atualize `FRONTEND_URL` no `.env` do backend

### Usuário não consegue fazer login
- Verifique se o usuário existe no banco de dados
- Confirme que a senha está correta
- Verifique os logs do backend

### Botão de usuários não aparece
- Apenas usuários com role "Administrador" veem este botão
- Atualize a função do usuário no banco de dados

## 📱 Responsividade

O projeto é fully responsive e funciona em:
- ✅ Desktop (1920px+)
- ✅ Tablets (768px - 1024px)
- ✅ Mobile (até 767px)

## 🎨 Customização

### Cores
Edite `style.css` - variáveis em `:root`

```css
:root {
  --primary-dark: #254021;
  --primary-medium: #335918;
  --primary: #5F8C1B;
  --accent: #F2CF63;
}
```

### Limites de Alerta
Edite `app.js`:

```javascript
const ALERT_CONFIG = {
    humidity: { min: 60, max: 70 },
    temperature: { min: 18, max: 30 },
};
```

## 📊 API Endpoints Esperados

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/login` | Autenticar usuário |
| GET | `/api/data` | Obter dados de sensores |
| GET | `/api/users` | Listar usuários |
| POST | `/api/users` | Criar usuário |
| PUT | `/api/users/{id}` | Editar usuário |
| DELETE | `/api/users/{id}` | Deletar usuário |

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Feito com ❤️ para monitoramento inteligente de ambientes**
