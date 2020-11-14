import React from 'react'
import styled from 'styled-components'


export default function Todo(props) {

const TodoCon = styled.div`
width:400px;
height:80px;
background: rgb(58,125,238);
background: linear-gradient(90deg, rgba(58,125,238,1) 16%, rgba(229,106,253,1) 72%);
display:flex;
align-items:center;
justify-content:center;
border-radius:5px;
color:#fff;
font-size:20px;
padding:10px 20px;
margin:5px;
filter:${props => props.gray ? "blur(4px)" : "blur(0px)"};
cursor:pointer

`




    return (
        <>
            <TodoCon onClick={()=>props.tog(props.id)} gray={props.dis}>{props.children}</TodoCon>
        </>
    )
}
