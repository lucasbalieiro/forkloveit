
import DynamicMoldure from "@/app/components/DynamicMoldure";


export default function ViewMessage() {
    return (
        <div className='moldure-container'>
          <DynamicMoldure
            message={"Mió que isso, só dois disso!"}
            sender="Ass: Paulo"
            destination="Para: INDT"
          />
      </div>
    )
}