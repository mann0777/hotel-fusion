import Header1 from "../components/Header1"
import Hotel from "../components/Hotel"

const Hotels = () => {
  return (
    <>
        <Header1/>
        <div className="m-5">
        <Hotel id={1}/>
        <Hotel id={2}/>
        
    </div>
    </>
  )
}

export default Hotels