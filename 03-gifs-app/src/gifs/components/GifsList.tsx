interface GifsListProps {
    gifs: string[]
   }

export const GifsList = ({ gifs }: GifsListProps) => {
    return (
        <div className="gifs-container">
            {
                gifs.map((gif) => (
                    <div key={gif} className="gif-card">
                        <img src={gif} alt="Gif" />
                    </div>
                ))
            }
        </div>
    )
}