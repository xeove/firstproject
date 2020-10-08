import React, {useState} from 'react';
import styles from './User.module.css';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i + ' ');
    }

    let portion = 10
    let portionCount = Math.ceil(pagesCount / portion);
    let [currentPortionNumber, setCurrentPortionNumber] = useState(1);
    let leftPortionPageNumber = (currentPortionNumber - 1) * portion + 1;
    let rightPortionPageNumber = currentPortionNumber * portion;

    return <div>
        { currentPortionNumber > 1 && <button onClick={ () => { setCurrentPortionNumber(currentPortionNumber - 1) }}> prev </button>}
        <div className={styles.pages}>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}
            { currentPortionNumber < portionCount  && <button onClick={ () => { setCurrentPortionNumber(currentPortionNumber + 1) }}> next </button>}
        </div>
    </div>
}

export default Paginator;