const Item = ({ item, drag, idx, itemImgObj }) => {
    return (
            <div className="unranked-cell">
                <img key={idx} id={`item-${item.id}`} src={itemImgObj.image} alt="Movie posters"
                    style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
                />
            </div>
            )
   
}

export default Item;