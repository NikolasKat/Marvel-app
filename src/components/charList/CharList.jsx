import { Component } from "react";
import { PersonAddIcon } from "@primer/octicons-react";

import Spinner from "../spinner/Spinner";
import ErrorMassage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";

import "./charList.scss";

class CharList extends Component {
   state = {
      charList: [],
      loading: true,
      error: false,
   };

   onError = () => {
      this.setState({
         loading: false,
         error: true,
      });
   };

   onCharListLoaded = (charList) => {
      this.setState({
         charList,
         loading: false,
      });
   };

   marvelService = new MarvelService();

   componentDidMount() {
      this.marvelService
         .getAllCharacters()
         .then(this.onCharListLoaded)
         .catch(this.onError);
   }

   renderList(arr) {
      const items = arr.map((item) => {
         let imgStyle = { objectFit: "cover" };
         if (
            item.thumbnail ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
         ) {
            imgStyle = { objectFit: "unset" };
         }

         return (
            <li
               className="char__item"
               key={item.id}
               onClick={() => this.props.onCharSelected(item.id)}
            >
               <img src={item.thumbnail} alt={item.name} style={imgStyle} />
               <div className="char__name">{item.name}</div>
            </li>
         );
      });

      return <ul className="char__grid">{items}</ul>;
   }

   render() {
      const { charList, loading, error } = this.state;
      const item = this.renderList(charList);

      const contentComp = !(loading || error) ? item : null;
      const errorComp = error ? <ErrorMassage /> : null;
      const loadingComp = loading ? <Spinner /> : null;

      return (
         <div className="char__list">
            {errorComp}
            {loadingComp}
            {contentComp}
            <button className="button button__main button__long">
               <div className="inner">
                  load more <PersonAddIcon size={24} fill="#ffffff" />
               </div>
            </button>
         </div>
      );
   }
}

export default CharList;
