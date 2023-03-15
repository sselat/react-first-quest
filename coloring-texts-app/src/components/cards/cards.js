import TextCard from "../textCard/textCard"

const cardsTitle = ['Elden Ring', 'Dark Souls 3', 'Sekiro Shadow\'s die twice']


const Cards = () => {
    return (
        <div>
            <h2>From Software</h2>

            <div>
                {
                    cardsTitle.map((title, index) => (
                        <TextCard key={title}>
                            <h3>{index} - {title}</h3>
                        </TextCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards