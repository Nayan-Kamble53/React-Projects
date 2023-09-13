import Card from './Card';

function Tours({tours, removeTour, removeallTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>

            <div className='cards'>
                {
                    tours.map((tour) => { 
                        return <Card key={tour.id} {...tour} removeTour={removeTour} removeallTour={removeallTour}></Card> 
                        //{...tour} means passing the copy of tour 
                        //pass removeTour too, to connect the function
                        //whenever we use .map we have to pass a unique key
                    })
                }
            </div>
        </div>
    )
}

export default Tours;