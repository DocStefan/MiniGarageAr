// import React from 'react'

import "../styles/Questions.css"
import formasdepago from '../assets/formasdepago.webp'
import delivery from '../assets/delivery.webp'
import pickup from '../assets/pickup.webp'
import tiempollegada from '../assets/tiempollegada.webp'
import confirmacion from '../assets/confirmacion.webp'
import fondopreguntas from '../assets/fondopreguntas.webp'
import plusquestion from '../assets/plusquestion.webp'
import minusquestion from '../assets/minusquestion.webp'
import useResponsiveDetect from "../customHooks/responsiveDetect"
import { useState } from "react"
import { useScroll } from "../customHooks/useScroll"

function Questions() {

  const screen = useResponsiveDetect()

  const scrollTo = useScroll()

  interface questionData {

    Tittle: string,
    img: string,
    Answer: React.ReactNode,
    ClassStatus: string,
    isActive?: boolean
    FirstRender: boolean

  }

  const [questionStatusManager, setQuestionStatusManager] = useState<questionData[]>([{ Tittle: "¿Cuales son sus formas de pago?", img: formasdepago, Answer: (<>Podés pagar por transferencia.<br />Una vez que la hagas, mandanos el comprobante por Instagram y listo, ¡confirmamos tu compra!</>), ClassStatus: "QuestionContainerUnactive", FirstRender: true },
  { Tittle: "¿Realizan envios a todo el pais?", img: delivery, Answer: <>¡Sí! Realizamos envíos a todo el país. <br />Podés elegir el servicio de mensajería que prefieras.</>, ClassStatus: "QuestionContainerUnactive", FirstRender: true },
  { Tittle: "¿Tienen puntos de retiro?", img: pickup, Answer: <>¡Sí! Tenemos 2 puntos de retiro. <br />Laprida 3102, Villa Martelli <br />Belgrano 3165, Munro</>, ClassStatus: "QuestionContainerUnactive", FirstRender: true },
  { Tittle: "¿En cuanto tiempo llega mi compra?", img: tiempollegada, Answer: <>Tu compra se despacha al día siguiente de la confirmación del pago. <br />El tiempo de entrega dependerá del servicio de mensajería elegido.</>, ClassStatus: "QuestionContainerUnactive", FirstRender: true },
  { Tittle: "¿Como confirmo mi compra?", img: confirmacion, Answer: <>Una vez realizado tu pedido, deberás enviar el comprobante de pago a nuestra cuenta de Instagram para confirmar tu compra.</>, ClassStatus: "QuestionContainerUnactive", FirstRender: true }

  ])

  const questionToogle = (val: number) => {
    setQuestionStatusManager(prev => {
      const clickedQuestion = prev[val]

      if (clickedQuestion.isActive) {
        return prev.map(data => ({
          ...data,
          ClassStatus: "QuestionContainerUnactive",
          isActive: false,
          FirstRender: true
        }))
      }

      return prev.map((data, index) => {
        if (val === index) {
          return {
            ...data,
            ClassStatus: "QuestionContainerUnactive QuestionContainerActive",
            isActive: true,
            FirstRender: false
          }
        }

        return {
          ...data,
          ClassStatus: "QuestionContainerUnactive QuestionContainerWitnessActive",
          isActive: false,
          FirstRender: false
        }
      })
    })
  }

  if (screen === "MOBILE" || screen === "TABLET") {

    return (

      <div className="MainQuestions-Mobile" id="Questions" onClick={() => {scrollTo("Questions")}} style={{ backgroundImage: `url("${fondopreguntas}")` }}>

        <div className="MainQuestionsContainer">

          <div className="TittleContainer">Preguntas frecuentes</div>

          {questionStatusManager.map((data, index) => {

            return (

              <div className={data.ClassStatus} onClick={() => { questionToogle(index) }}>

                <div className={data.FirstRender ? "QuestionLogo" : data.isActive ? "QuestionLogo" : "QuestionLogo HalfElementWitnessActive"}><div className="QuestionLogoMark"><img className="QuestionLogoPic" src={data.img}></img></div></div>

                <div className={data.FirstRender ? "QuestionTittle" : data.isActive ? "QuestionTittle" : "QuestionTittle HalfElementWitnessActive"}><span className="QuestionTittleSpan">{data.Tittle}</span></div>

                <div className={data.FirstRender ? "QuestionOpenSymbol" : data.isActive ? "QuestionOpenSymbol" : "QuestionOpenSymbol HalfElementWitnessActive"}><img className="QuestionSymbolPic" src={data.isActive ? minusquestion : plusquestion}></img></div>

                <div className={data.FirstRender ? "QuestionAnswer" : data.isActive ? "QuestionAnswer" : "QuestionAnswer HalfElementWitnessActive"}><span className="QuestionAnswerText" style={{ marginBottom: data.isActive ? "4.5%" : "0%" }}>{data.Answer}</span></div>

              </div>

            )

          })}

        </div>

      </div>

    )

  } else {

    return (

      <div className="MainQuestions-Mobile" id="Questions" onClick={() => {scrollTo("Questions")}} style={{ backgroundImage: `url("${fondopreguntas}")` }}>

        <div className="MainQuestionsContainer">

          <div className="TittleContainer">Preguntas frecuentes</div>

          <div className="QuestionsDataContainer">



            {questionStatusManager.map((data, index) => (
              <div
                className={`QuestionContainer ${data.isActive ? "QuestionContainerActive" : ""}`}
                key={index}
                onClick={() => questionToogle(index)}
              >
                <div className="QuestionLogo">
                  <div className="QuestionLogoMark">
                    <img
                      className="QuestionLogoPic"
                      src={data.img}
                      alt=""
                    />
                  </div>
                </div>

                <div className="QuestionTittle">
                  <span className="QuestionTittleSpan">
                    {data.Tittle}
                  </span>
                </div>

                <div className="QuestionOpenSymbol">
                  <img
                    className="QuestionSymbolPic"
                    src={data.isActive ? minusquestion : plusquestion}
                    alt=""
                  />
                </div>

                <div className="QuestionAnswer">
                  <span className="QuestionAnswerText">
                    {data.Answer}
                  </span>
                </div>
              </div>
            ))}


          </div>

        </div>

      </div>

    )

  }

}

export default Questions