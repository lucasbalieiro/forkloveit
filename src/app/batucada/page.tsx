export default function Batucada() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">
                <a target="_blank" href="https://www.youtube.com/playlist?list=PLNT6it3kpstTL3GxxYWnuJUzSEXOJ1-dq&jct=XaOmYPHIc2uNHyoDw3JFp8YXcPchrw" >  Colabore com a playlist clicando aqui </a>
            </h1>

            <h3 className="text-xl font-bold">Veja abaixo as que já estão na fila</h3>
            <div className="aspect-w-16 aspect-h-9">
            <iframe id="ytplayer"
                src="https://www.youtube.com/embed/?listType=playlist&list=PLNT6it3kpstTL3GxxYWnuJUzSEXOJ1-dq"
                 allowFullScreen />
            </div>
        </div>


    )
}