type Componente = {
    new(...args: any[]): {
        render(): any
    }
}

export default function logRender<C extends Componente>(componente: C) {
    return class extends componente {
        render() {
            console.log('Renderizando o componente...')
            const resultado: any = super.render()
            console.log('Renderização concluída')
            return resultado
        }
    }
}