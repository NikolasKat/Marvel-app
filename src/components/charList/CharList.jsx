import "./charList.scss";

const CharList = () => {
   return (
      <div className="char__list">
         <ul className="char__grid">
            <li className="char__item">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
            <li className="char__item char__item_selected">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
            <li className="char__item">
               <img alt="abyss" /> {/*src={abyss}*/}
               <div className="char__name">Abyss</div>
            </li>
         </ul>
         <button className="button button__main button__long">
            <div className="inner">load more</div>
         </button>
      </div>
   );
};

export default CharList;
