import React from 'react';
import './searchBox.scss';
import {Link} from 'react-router-dom';

interface IProps{
    search: string;
    data: any[];
    unclicked: Function;
    noResult?:boolean;
}



const SearchBox: React.FC<IProps>=(props)=>{

    if(props.data === undefined){
        return(
            <div className="search">
                <div className="rowSearch">
                    <span className="heading">{"Search Results for "+ props.search}</span>
                    <div className="failed">Loading... please wait</div>
                    <span className="cancel" onClick={()=>props.unclicked()}>Cancel</span>
                </div>
            </div>
        )
    }

    if(props.data.length<1){
        return(
            <div className="search">
                <div className="rowSearch">
                    <span className="heading">{"Search Results for "+ props.search}</span>
                    <div className="failed">{props.noResult?"No results found":"Loading... please wait"}</div>
                    <span className="cancel" onClick={()=>props.unclicked()}>Cancel</span>
                </div>
            </div>
        )
    }

    if(props.data[0].sys.country===undefined){
        return(
            <div className="search">
                <div className="rowSearch">
                    <span className="heading">{"Search Results for "+ props.search}</span>
                    <div className="failed">Loading... please wait</div>
                    <span className="cancel" onClick={()=>props.unclicked()}>Cancel</span>
                </div>
            </div>
        )
    }

    return(
        <div className="search">
            <div className="rowSearch">
                <span className="heading">{"Search Results for "+ props.search}</span>
                <div className="result">
                    {props.data.map(item=>(
                        <Link className="data" onClick={()=>props.unclicked()} to={"/search/"+item.coord.lat+"/"+item.coord.lon}>{item.name+", "+item.sys.country}</Link>
                    ))}
                </div>
                <span className="cancel" onClick={()=>props.unclicked()}>Cancel</span>
            </div>
        </div>
    )
    
}

export default SearchBox;