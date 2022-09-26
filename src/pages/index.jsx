import React, { useEffect, useState } from 'react'
import './index.css'

export default function Index() {

    const [valorUser, setValorUser] = useState(0)
    const [valorComputador, setValorComputador] = useState(0)
    const [result, setResult] = useState("Resultado...")
    const [computerPoint, setComputerPoint] = useState(0)
    const [userPoint, setUserPoint] = useState(0)

    useEffect(()=>{
        setValorUser(0)
        setValorComputador(0)
    }, [])

    const pedraUser = ()=>{
        setValorUser(1)

        function aleCod(max, min){
            return Math.floor(Math.random()*(max - min) + min)
        }
        
        const codigo = aleCod(1, 4)
        setValorComputador(codigo)

        if(codigo===1){
            setComputerPoint(computerPoint+0.5)
            setUserPoint(userPoint+0.5)
            return setResult("Empate!")
        }
        if(codigo===2){
            setComputerPoint(computerPoint+1)
            return setResult("Você perdeu!")
        }
        if(codigo===3){
            setUserPoint(userPoint+1)
            return setResult("Você ganhou!")
        }
    }
    const papelUser = async ()=>{
        setValorUser(2)

        function aleCod(max, min){
            return Math.floor(Math.random()*(max - min) + min)
        }
        
        const codigo = await aleCod(1, 4)
        setValorComputador(codigo)

        if(codigo===1){
            setUserPoint(userPoint+1)
            return setResult("Você ganhou!")
        }
        if(codigo===2){
            setComputerPoint(computerPoint+0.5)
            setUserPoint(userPoint+0.5)
            return setResult("Empate!")
        }
        if(codigo===3){
            setComputerPoint(computerPoint+1)
            return setResult("Você perdeu!")
        }
    }
    const tesouraUser = async ()=>{
        setValorUser(3)

        function aleCod(max, min){
            return Math.floor(Math.random()*(max - min) + min)
        }
        
        const codigo = await aleCod(1, 4)
        setValorComputador(codigo)

        if(codigo===1){
            setComputerPoint(computerPoint+1)
            return setResult("Você perdeu!")
            
        }
        if(codigo===2){
            setUserPoint(userPoint+1)
            return setResult("Você ganhou!")
        }
        if(codigo===3){
            setComputerPoint(computerPoint+0.5)
            setUserPoint(userPoint+0.5)
            return setResult("Empate!")
        }
    }
    const novojogo = ()=>{
        setValorUser(0)
        setValorComputador(0)
        setComputerPoint(0)
        setUserPoint(0)
        return setResult("Resultados...")
    }

  return (
    <div className='fullContent'>
        <header className="headerClass">
            <div className="setMenu">
                <button className='jogar' onClick={novojogo}>Jogar</button>
                <i className="fa-solid fa-screwdriver-wrench setSize"></i>
            </div>
        </header>
        <div className="content">
            <section className='sectionShose'>
                <div className="itemS">
                    <i className="fa-solid fa-gem itemCenter item2" onClick={pedraUser}></i>
                    <i className="fa-solid fa-scroll itemCenter item2" onClick={papelUser}></i>
                    <i className="fa-solid fa-scissors itemCenter item2" onClick={tesouraUser}></i>
                </div>
                <div className="escolhido">
                    {/* <i class="fa-solid fa-scissors itemCenterEscolha"></i> */}
                    {valorUser===0 && (<i className='itemCenterEscolha'>Faça a Sua Escolha</i>)}
                    {valorUser===1 && (<i className='fa-solid fa-gem itemCenterEscolha'></i>)}
                    {valorUser===2 && (<i className='fa-solid fa-scroll itemCenterEscolha'></i>)}
                    {valorUser===3 && (<i className='fa-solid fa-scissors itemCenterEscolha'></i>)}
                </div>
            </section>
            <section className="sectionallShose">
                <div className="itemS">
                    <i className="fa-solid fa-gem itemCenter"></i>
                    <i className="fa-solid fa-scroll itemCenter"></i>
                    <i className="fa-solid fa-scissors itemCenter"></i>
                </div>
                <div className="escolhido">
                    {valorComputador===0 && (<i className='itemCenterEscolha'>Escolha do Computador</i>)}
                    {valorComputador===1 && (<i className='fa-solid fa-gem itemCenterEscolha'></i>)}
                    {valorComputador===2 && (<i className='fa-solid fa-scroll itemCenterEscolha'></i>)}
                    {valorComputador===3 && (<i className='fa-solid fa-scissors itemCenterEscolha'></i>)}
                </div>
            </section>
        </div>
        <div className="content">
            <section className='sectionShose'>
                <div className="itemS">
                    {userPoint}
                </div>
            </section>
            <section className="sectionallShose">
                <div className="itemS">
                    {computerPoint}
                </div>
            </section>
        </div>
        <section className="result">
            <p className='resultP'>{result}</p>
            <button className='jogarNovamente' onClick={novojogo}>Jogar Novamente...</button>
        </section>
    </div>
  )
}
