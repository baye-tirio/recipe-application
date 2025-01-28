import { useEffect,useState } from 'react';
import Card from './Card'
export default  function CardList ({data}) {
    return (
        <section className="cards">
         {
            data.map((recipe,index) => {
                return <Card key = {recipe.id} recipe = {recipe} isLast = {(index+1 === data.length)?true:false} />
            })
         }
      </section>
    )
}