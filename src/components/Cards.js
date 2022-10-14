import { useState } from 'react'
import Card from './Card'
import cardImagesSet1 from './cardImages';


function Cards(){

   
    const [items, setItems] = useState(cardImagesSet1);
    const [prev, setPrev] = useState(-1);
    const [counter,setCounter]=useState(0);

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
            setCounter( counter+1)
            if(counter ===(cardImagesSet1.length/2)){
                window.alert("Congratulations..!! You won the Game. click on Ok to start Over")
                window.location.reload(false);
                
            }
           console.log(counter,cardImagesSet1.length)
            
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
          
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }

            <h2>score : {counter}</h2>
        </div>
    )
}

export default Cards