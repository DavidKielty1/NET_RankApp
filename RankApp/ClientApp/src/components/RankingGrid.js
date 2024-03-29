﻿
const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];

    function createCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;

        function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
            if (rankNum > 0) {
                var item = items.find(o => o.ranking === rankNum);
                cellCollection.push(<div key={`rank-${rankNum}`}  id={`rank-${rankNum}`} className="rank-cell" onDrop={drop} onDragOver={allowDrop}>
                    {
                        (item != null) ? <img id={`rank-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={drag} alt="movie poster" />
                            : null}
                </div>)
            }
            else  {
                cellCollection.push(<div key={`rank-${rankNum}`}  className="row-label">
                    <h4>{rowLabel}</h4>
                </div>)
            }
        }

        for (var a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1) + a - rowNum);

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Top Tier";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionMiddle;
                label = "Middle Tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
                label = "Bottom Tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
                label = "Worst Tier";
            }
            pushCellMarkupToArr(currCollection, rankNum, label);
        }
    }

    function createCellsForRows() {
        const maxRows = 4;
        for (var row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }

    function createRowsForGrid() {
        rankingGrid.push(<div key="1" className="rank-row top-tier">{cellCollectionTop}</div>)
        rankingGrid.push(<div key="2" className="rank-row middle-tier">{cellCollectionMiddle}</div>)
        rankingGrid.push(<div key="3" className="rank-row bottom-tier">{cellCollectionBottom}</div>)
        rankingGrid.push(<div key="4" className="rank-row worst-tier">{cellCollectionWorst}</div>)

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();
    }

    return ( 
        <div className="rankings">
            {createRankingGrid() }
        </div>
    )
}

export default RankingGrid;