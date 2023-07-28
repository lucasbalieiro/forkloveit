'use client'

import { useState, FormEvent } from 'react'
import { sendMessage } from "@/app/services/elegantech";

export default function Elegantech() {
    const [disableButon, setDisableButton] = useState(false)
    const [submitButtonText, setSubmitButtonText] = useState<"Enviar" | "Enviando">("Enviar")
    const [textareaValue, setTextareaValue] = useState('')
    const [destination, setDestination] = useState('')
    const [sender, setSender] = useState('')


    function handleCalculationOfRemainingCharacters() {
        return 100 - textareaValue.length
    }

    async function handleSubmit(e: FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        setDisableButton(true)
        setSubmitButtonText("Enviando")

        const response = await sendMessage(
            {destination: destination, sender: sender, message: textareaValue}
        )

        if (response.ok) {
            alert("Mensagem enviada! Aguarde que agora eh com a gente!")
            setDestination("")
            setSender("")
            setTextareaValue("")
            
        }else {
            alert ("Oops, tivemos um probleminha. Chama o bombeiro!")
        }

        setSubmitButtonText("Enviar")
        setDisableButton(false)

    }


    return (
        <form className='m-4'>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="sender" className="block text-sm font-medium leading-6 text-gray-900">
                                Qual seu nome?
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        value={sender}
                                        onChange={(e) => setSender(e.target.value)}
                                        required
                                        type="text"
                                        name="sender"
                                        id="sender"
                                        autoComplete="sender"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Digite o nome aqui ..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="destination" className="block text-sm font-medium leading-6 text-gray-900">
                                Pra quem você vai enviar?
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        required
                                        type="text"
                                        name="destination"
                                        id="destination"
                                        autoComplete="destination"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Digite o nome aqui ..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Qual vai ser a mensagem?
                            </label>
                            <div className="mt-2">
                                <textarea
                                    required
                                    value={textareaValue}
                                    onChange={(e) => setTextareaValue(e.target.value)}
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder='Arrasa na mensagem. Distribua carinho!'
                                    maxLength={100}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">{`Você tem ${handleCalculationOfRemainingCharacters()} caracteres para se expressar!!!.`}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button disabled={disableButon} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancelar
                </button>
                <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e) => {
                        handleSubmit(e)
                    }}
                    disabled={disableButon}
                >
                    {submitButtonText}
                </button>
            </div>
        </form>
    )
}
