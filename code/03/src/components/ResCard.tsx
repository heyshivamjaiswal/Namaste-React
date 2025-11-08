


export type resData = {
    data:{
          name: string
          cuisines: string[],
          deliveryTime: number,
          avgRating: string;
    }
}


export function ResCard({resData}: {resData: resData}){
     
    const {name , cuisines , avgRating ,deliveryTime }  = resData?.data
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src='https://wallpaperaccess.com/full/767048.jpg'/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>400 FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
} 