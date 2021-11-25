import React from 'react'

import firstGameImg from "../../assets/img/home_1.jpg"

import { ContainerStyles } from "../../components/container/styles"
import { styles } from "./styles"

export const About = () => {
    return(
        <div style={ Object.assign({}, ContainerStyles.container, styles.container) }>
            <header style={ styles.header }>
                <h1>Sobre nós</h1>

                <p>
                    Somos uma equipe de Rugby da Cidade de Taubaté.
                    Uma familia, um time. Conheça nossa história...
                </p>
            </header>

            <div style={ styles.timeStepLeft }>
                <span style={ styles.timeStepDate }><i>Inicio - Fevereiro de 2017</i></span>

                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e 
                    de impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
                    desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro 
                    de modelos de tipos. 
                </p>
            </div>

            <div style={ styles.timeStepRight }>
                <span style={ styles.timeStepDate }><i>O primeiro jogo - Março de 2017</i></span>

                <img style={ Object.assign({}, ContainerStyles.containerImg, styles.timeStepImg) } src={firstGameImg} alt="Primeiro Jogo" />

                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e 
                    de impresso.
                </p>
            </div>
        </div>
    )
}