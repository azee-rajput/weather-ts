import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './navBar.scss';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import {Search} from '@styled-icons/evil/Search';
import PopUp from '../popUp/popUp';
import SearchBox from '../search/searchBox';
import api from '../../../api';

interface IState{
    changed: boolean;
}

interface IClick{
    clicked: boolean;
}

interface ISearch{
    search:string;
}

interface IPop{
    pop:boolean;
}

interface IData{
    data:any;
    code: string;
    count: number;
}

interface IMsg{
    msg:JSX.Element;
}

const NavBar: React.FC=()=>{

    const [state, setState]= useState<IState>({changed:false});
    const [click, setClick] = useState<IClick>({clicked: false});
    const [search, setSearch] = useState<ISearch>({ search:""});
    const [getPop, setPop] = useState<IPop>({pop:false});
    const [data,setData] = useState<IData>({data:"", code:"", count:0});
    const [msg, setMsg] = useState<IMsg>({msg:<span></span>})

    let msg1 = <p>Sorry. This service is not available right now.</p>
    let msg2 = <p>Developed by: <a href="https://findazee.herokuapp.com/" target="_blank" rel="noopener noreferrer">Abdul Zahir</a></p>

    function popUp(msg: JSX.Element){
        setPop({pop:true});
        setMsg({msg:msg})
    }

    function popDown(){
        setPop({pop:false});
    }

    function entering(e:KeyboardEvent){
        if(e.charCode===13){
            e.preventDefault();
            clicked();
          }
    }

    function changed(e:ChangeEvent<HTMLInputElement>){
        setSearch({search: e.target.value});
        
        if(e.target.value===null||e.target.value===""||e.target.value===undefined){
            setState({...state, changed: false})
        }else{
            setState({...state, changed: true});
        }
    }

    function clicked(){
        if(state.changed){
            setClick({
                clicked: true
            })
            api.find(data=>setData({data:data, code: data.cod, count: data.count}), search.search);
        }
    }

    function unclicked(){
        setClick({clicked: false});
        setData({data:"", code:"", count:0});
    }

    return(
        <Container fluid className="navBar">
            <Row className="navRow">
                <Col sm={{span:7}} className="searchArea">
                    <span className="searchIcon" ><Search size="30"/></span>
                    <input type="text" className="searchBox" placeholder="Search new place"
                    onChange={(e)=>changed(e)} onKeyPress={(e)=>entering(e)} />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            All places
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/">Service unavailable</Dropdown.Item>
                            <Dropdown.Item href="/">Service unavailable</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm={{span:5}} className="profileArea">
                    <span className="noti" onClick={()=>popUp(msg1)}>Notifications</span>
                    <span className="places" onClick={()=>popUp(msg1)}>Places</span>
                    <img className="image" src={require("../../../image/myAvatar.png")} alt="profile" onClick={()=>popUp(msg2)}/>
                </Col>
            </Row>
            {getPop.pop?<PopUp message={msg.msg} pop={()=>popDown()}/>:null}

            {click.clicked?
            <SearchBox search={search.search} data={data.data.list} 
            noResult ={data.code==="200"&&data.count===0} 
            unclicked={()=>unclicked()}/> :null}
        </Container>
    )
}

export default NavBar;