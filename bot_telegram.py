import PySimpleGUI as sg
from pyrogram import Client
import threading

# Layout da interface
layout = [
    [sg.Text('API ID'), sg.Input(key='API_ID')],
    [sg.Text('API HASH'), sg.Input(key='API_HASH')],
    [sg.Text('Bot Token'), sg.Input(key='BOT_TOKEN')],
    [sg.Text('Chat ID'), sg.Input(key='CHAT_ID')],
    [sg.Text('Mensagem'), sg.Input(key='MESSAGE')],
    [sg.Button('Enviar Mensagem'), sg.Exit()]
]

window = sg.Window('Bot Telegram - Pyrogram + PySimpleGUI', layout)

# Função para enviar mensagem

def send_message(api_id, api_hash, bot_token, chat_id, message):
    app = Client("bot", api_id=api_id, api_hash=api_hash, bot_token=bot_token)
    with app:
        app.send_message(chat_id, message)

def main():
    while True:
        event, values = window.read()
        if event in (sg.WIN_CLOSED, 'Exit'):
            break
        if event == 'Enviar Mensagem':
            api_id = values['API_ID']
            api_hash = values['API_HASH']
            bot_token = values['BOT_TOKEN']
            chat_id = values['CHAT_ID']
            message = values['MESSAGE']
            # Envia mensagem em thread separada para não travar GUI
            threading.Thread(target=send_message, args=(api_id, api_hash, bot_token, chat_id, message), daemon=True).start()
            sg.popup('Mensagem enviada (ou em envio)!')
    window.close()

if __name__ == '__main__':
    main() 