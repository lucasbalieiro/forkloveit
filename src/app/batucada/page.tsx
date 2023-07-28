export default function Batucada() {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLNT6it3kpstTL3GxxYWnuJUzSEXOJ1-dq&jct=XaOmYPHIc2uNHyoDw3JFp8YXcPchrw"
          >
            Colabore com a Batucada Colaborativa clicando aqui! 🎉
          </a>
        </h1>
  
        <h3 className="text-xl font-bold">Veja abaixo as músicas que já estão na fila:</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Batucada Colaborativa"
            id="ytplayer"
            src="https://www.youtube.com/embed/?listType=playlist&list=PLNT6it3kpstTL3GxxYWnuJUzSEXOJ1-dq"
            allowFullScreen
          />
        </div>
  
        <p className="mt-4 text-lg">
          A Batucada Colaborativa está fervendo! 🔥 Não perca essa festa de ritmo e
          energia. Envie suas músicas favoritas e vamos juntos criar a maior
          batucada da Roça! 🎶🥁
        </p>
  
        <p className="mt-2 text-lg">
          A música não tem fronteiras, e aqui a diversão é garantida. Então,
          solte o som e deixe a batucada rolar solta! 🎵😎
        </p>
      </div>
    );
  }
  