// Navegação entre seções
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item a');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class de todos os itens
            navItems.forEach(nav => nav.parentElement.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Adiciona active class ao item clicado
            this.parentElement.classList.add('active');
            
            // Mostra a seção correspondente
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});

// Função para enviar mensagem
function sendMessage() {
    const chatId = document.getElementById('chatId').value;
    const messageText = document.getElementById('messageText').value;
    
    if (!chatId || !messageText) {
        showNotification('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    // Simulação de envio de mensagem
    showNotification('Mensagem enviada com sucesso!', 'success');
    
    // Adiciona mensagem à lista de mensagens recentes
    addMessageToList(chatId, messageText);
    
    // Limpa o formulário
    clearForm();
}

// Função para limpar formulário
function clearForm() {
    document.getElementById('chatId').value = '';
    document.getElementById('messageText').value = '';
}

// Função para adicionar mensagem à lista
function addMessageToList(chatId, message) {
    const messageList = document.querySelector('.message-list');
    const messageItem = document.createElement('div');
    messageItem.className = 'message-item';
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    messageItem.innerHTML = `
        <div class="message-header">
            <span class="chat-id">${chatId}</span>
            <span class="timestamp">${timeString}</span>
        </div>
        <div class="message-content">
            ${message}
        </div>
        <div class="message-status sent">
            <i class="fas fa-check"></i>
            Enviada
        </div>
    `;
    
    messageList.insertBefore(messageItem, messageList.firstChild);
}

// Função para salvar configurações
function saveSettings() {
    const apiId = document.getElementById('apiId').value;
    const apiHash = document.getElementById('apiHash').value;
    const botToken = document.getElementById('botToken').value;
    
    if (!apiId || !apiHash || !botToken) {
        showNotification('Por favor, preencha todas as configurações', 'error');
        return;
    }
    
    // Simulação de salvamento
    showNotification('Configurações salvas com sucesso!', 'success');
    
    // Aqui você pode adicionar código para salvar as configurações
    // localStorage.setItem('botConfig', JSON.stringify({
    //     apiId, apiHash, botToken
    // }));
}

// Função para testar conexão
function testConnection() {
    showNotification('Testando conexão...', 'info');
    
    // Simulação de teste de conexão
    setTimeout(() => {
        showNotification('Conexão estabelecida com sucesso!', 'success');
    }, 2000);
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    // Remove notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Cria nova notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Adiciona estilos inline para a notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    // Define cores baseadas no tipo
    const colors = {
        success: '#48bb78',
        error: '#f56565',
        warning: '#ed8936',
        info: '#4299e1'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Remove a notificação após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Função para obter ícone da notificação
function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Adiciona estilos CSS para animações das notificações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);

// Função para abrir modal de nova mensagem (placeholder)
function openMessageModal() {
    // Navega para a seção de mensagens
    document.querySelector('a[href="#messages"]').click();
    
    // Foca no campo de mensagem
    setTimeout(() => {
        document.getElementById('messageText').focus();
    }, 300);
}

// Atualização de estatísticas em tempo real (simulação)
function updateStats() {
    const statNumbers = document.querySelectorAll('.stat-info h3');
    
    statNumbers.forEach(stat => {
        const currentValue = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const newValue = currentValue + Math.floor(Math.random() * 10);
        
        // Animação de contagem
        animateNumber(stat, currentValue, newValue);
    });
}

// Função para animar números
function animateNumber(element, start, end) {
    const duration = 1000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Atualiza estatísticas a cada 30 segundos
setInterval(updateStats, 30000);

// Adiciona funcionalidade de busca nos logs
function filterLogs(level) {
    const logEntries = document.querySelectorAll('.log-entry');
    
    logEntries.forEach(entry => {
        if (level === 'all' || entry.classList.contains(level)) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
}

// Adiciona funcionalidade de exportar logs
function exportLogs() {
    const logEntries = document.querySelectorAll('.log-entry');
    let logContent = '';
    
    logEntries.forEach(entry => {
        logContent += entry.textContent + '\n';
    });
    
    const blob = new Blob([logContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bot-logs.txt';
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Logs exportados com sucesso!', 'success');
}

// Adiciona funcionalidade de limpar logs
function clearLogs() {
    const logContainer = document.querySelector('.log-container');
    logContainer.innerHTML = '';
    showNotification('Logs limpos com sucesso!', 'success');
}

// Adiciona listeners para botões de controle do bot
document.addEventListener('DOMContentLoaded', function() {
    // Botão Iniciar Bot
    const startButton = document.querySelector('.btn-success');
    if (startButton) {
        startButton.addEventListener('click', function() {
            showNotification('Iniciando bot...', 'info');
            setTimeout(() => {
                showNotification('Bot iniciado com sucesso!', 'success');
                document.querySelector('.status-dot').classList.add('online');
            }, 2000);
        });
    }
    
    // Botão Parar Bot
    const stopButton = document.querySelector('.btn-danger');
    if (stopButton) {
        stopButton.addEventListener('click', function() {
            showNotification('Parando bot...', 'warning');
            setTimeout(() => {
                showNotification('Bot parado com sucesso!', 'success');
                document.querySelector('.status-dot').classList.remove('online');
            }, 1000);
        });
    }
    
    // Botão Reiniciar Bot
    const restartButton = document.querySelector('.btn-warning');
    if (restartButton) {
        restartButton.addEventListener('click', function() {
            showNotification('Reiniciando bot...', 'info');
            setTimeout(() => {
                showNotification('Bot reiniciado com sucesso!', 'success');
            }, 3000);
        });
    }
}); 