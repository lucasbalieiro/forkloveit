
import DynamicMoldure from "@/app/components/DynamicMoldure";


export default function ViewMessage() {
    return (
        <div className='moldure-container'>
          <DynamicMoldure
            message={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}
            sender="Ass: Paulo"
            destination="Para: INDT"
          />
      </div>
    )
}