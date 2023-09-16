import Item from './item'

const ItemCollection = ({ items, drag, imgArr }) => {
    return (
        <div className="items-not-ranked">
        {
            items.map((item, idx) =>
                (item.ranking === 0) ?
                    <Item key={idx} item={item} drag={drag} itemImgObj={imgArr.find(o => o.id === item.imageId)} /> : null
            )}
        </div>
    )
    
}
export default ItemCollection;