import React from 'react'

import firstGameImg from "../../assets/img/home_1.jpg"

import { ContainerStyles } from "../../components/container/styles"

export const About = () => {
    return(
        <div style={ ContainerStyles.container }>
            <header>
                <h1>Sobre nós</h1>

                <p>
                    Somos uma equipe de Rugby da Cidade de Taubaté.
                    Uma familia, um time. Conheça nossa história...
                </p>
            </header>

            <div className="time-step time-left">
                <span>Inicio - Fevereiro de 2017</span>

                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e 
                    de impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
                    desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro 
                    de modelos de tipos. 
                </p>
            </div>

            <div className="time-step time-right">
                <span>O primeiro jogo</span>

                <img style={ ContainerStyles.containerImg } src={firstGameImg} alt="Primeiro Jogo" />
            </div>
        </div>
    )
}