import os from 'os'
export function greet () {
    console.log(`Привет, юзер. Вижу ты зашел с ${os.type()}`)
}