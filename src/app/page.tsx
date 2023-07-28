import Link from "next/link";


export default function Home() {

  return (
    <>
    <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold text-indigo-700 mb-4">Seja bem-vindo ao ForkLoveIt!</h1>
    
    <h2 className="text-xl font-bold">Como Funciona?</h2>
    <p className="text-lg mb-6">
      Aqui, o amor e a tecnologia se unem para criar conexões românticas <span>❤️</span>.
    </p>
    
    <h3 className="text-xl font-bold"><Link href="/elegantech">Correio Elegantech</Link> - O Cupido Moderno</h3>
    <p className="text-lg mb-6">
      No Correio Elegantech, nosso Cupido digital usa a magia da tecnologia para enviar mensagens amorosas para o nosso Forklift, o ForkLoveIt! Escreva uma mensagem de amor, diga para quem é destinada e deixe o resto com o nosso CupidoTech. <span>💘</span>
    </p>

    <Link href="/elegantech" 
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >ESCREVA SUA MENSAGEM AQUI</Link>
  </div>
    </>
  )

}