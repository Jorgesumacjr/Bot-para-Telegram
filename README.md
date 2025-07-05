# Painel Administrativo - Bot Telegram

Um painel administrativo moderno e responsivo para gerenciar bots do Telegram, desenvolvido com HTML, CSS e JavaScript.

## 🚀 Funcionalidades

### Dashboard
- **Estatísticas em tempo real**: Usuários ativos, mensagens enviadas, uptime e crescimento
- **Ações rápidas**: Envio de mensagens, broadcast e exportação de dados
- **Indicador de status**: Mostra se o bot está online ou offline

### Gerenciamento de Mensagens
- **Envio de mensagens**: Interface simples para enviar mensagens para chats específicos
- **Histórico de mensagens**: Lista das mensagens enviadas recentemente
- **Status de entrega**: Indica se a mensagem foi enviada com sucesso

### Configurações
- **Configuração do bot**: Campos para API ID, API Hash e Bot Token
- **Controles do bot**: Botões para iniciar, parar e reiniciar o bot
- **Teste de conexão**: Verifica se as configurações estão corretas

### Logs do Sistema
- **Visualização de logs**: Logs organizados por tipo (info, success, warning, error)
- **Exportação**: Possibilidade de exportar logs para arquivo de texto
- **Limpeza**: Opção para limpar logs antigos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Estilização com gradientes, animações e design responsivo
- **JavaScript**: Funcionalidades interativas e dinâmicas
- **Font Awesome**: Ícones modernos e profissionais
- **Pyrogram**: Biblioteca Python para integração com Telegram

## 📁 Estrutura do Projeto

```
bot_telegram/
├── index.html          # Interface principal do painel
├── style.css           # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── bot_telegram.py     # Bot Python com Pyrogram
├── requirements.txt    # Dependências Python
└── README.md          # Documentação
```

## 🚀 Como Usar

### 1. Configuração do Bot Telegram

1. Crie um bot no Telegram através do [@BotFather](https://t.me/botfather)
2. Obtenha o **Bot Token**
3. Crie uma aplicação no [my.telegram.org](https://my.telegram.org)
4. Obtenha o **API ID** e **API Hash**

### 2. Instalação das Dependências

```bash
# Instalar dependências Python
pip install -r requirements.txt
```

### 3. Execução

#### Opção 1: Interface Web (Recomendado)
1. Abra o arquivo `index.html` em seu navegador
2. Navegue até a seção "Configurações"
3. Preencha as credenciais do bot
4. Use a seção "Mensagens" para enviar mensagens

#### Opção 2: Interface Python
```bash
python bot_telegram.py
```

### 4. Configuração Inicial

1. **API ID**: Digite o ID da sua aplicação Telegram
2. **API Hash**: Digite o hash da sua aplicação Telegram
3. **Bot Token**: Digite o token do seu bot
4. **Chat ID**: Digite o ID do chat onde deseja enviar mensagens

## 🎨 Características do Design

### Visual Clean e Moderno
- **Gradientes suaves**: Cores modernas e profissionais
- **Animações**: Transições suaves e feedback visual
- **Cards**: Layout em cards para melhor organização
- **Responsivo**: Funciona em desktop, tablet e mobile

### Interface Intuitiva
- **Sidebar de navegação**: Acesso rápido a todas as seções
- **Indicadores visuais**: Status do bot e notificações
- **Formulários organizados**: Campos bem estruturados
- **Botões com ícones**: Identificação visual rápida

## 🔧 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `style.css`:

```css
/* Cores principais */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #48bb78;
    --warning-color: #ed8936;
    --error-color: #f56565;
}
```

### Funcionalidades
Para adicionar novas funcionalidades:

1. **Novas seções**: Adicione no HTML e CSS
2. **Novas funções**: Implemente no JavaScript
3. **Integração com Python**: Modifique o arquivo `bot_telegram.py`

## 📱 Responsividade

O painel é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com sidebar fixa
- **Tablet**: Sidebar colapsável
- **Mobile**: Layout em coluna única

## 🔒 Segurança

### Recomendações
- **Não compartilhe** suas credenciais do Telegram
- **Use HTTPS** em produção
- **Valide inputs** antes de enviar
- **Implemente autenticação** para uso em produção

### Armazenamento
- As configurações são armazenadas localmente
- Considere usar um banco de dados para produção
- Implemente criptografia para dados sensíveis

## 🐛 Solução de Problemas

### Bot não conecta
1. Verifique se o API ID e API Hash estão corretos
2. Confirme se o Bot Token é válido
3. Teste a conexão usando o botão "Testar Conexão"

### Mensagens não são enviadas
1. Verifique se o Chat ID está correto
2. Confirme se o bot tem permissões no chat
3. Verifique se o bot está ativo

### Interface não carrega
1. Verifique se todos os arquivos estão na mesma pasta
2. Confirme se o navegador suporta JavaScript
3. Verifique o console do navegador para erros

## 📈 Próximas Funcionalidades

- [ ] **Autenticação de usuários**
- [ ] **Múltiplos bots**
- [ ] **Agendamento de mensagens**
- [ ] **Relatórios detalhados**
- [ ] **Integração com APIs externas**
- [ ] **Sistema de notificações push**
- [ ] **Backup automático**
- [ ] **Temas personalizáveis**

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente suas mudanças
4. Teste todas as funcionalidades
5. Envie um pull request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas:

- **Issues**: Abra uma issue no GitHub
- **Email**: [seu-email@exemplo.com]
- **Telegram**: [@seu-usuario]

---

**Desenvolvido com ❤️ para a comunidade Telegram** 