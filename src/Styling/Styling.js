import styled from "styled-components";

const Container=styled.div`

`


const Header=styled.div`
width: 100%;
font-size: 28px;
background-color: midnightblue;
padding: 1% 0% 1% 2%;
color: white;

`
const Search=styled.form`
width: 100%;
margin: 1% 5% 5% 10% ;

button:hover{
    background-color: silver;
}

`
const Searchby=styled.select`
width:10% ;
padding: 7px;
border: 1px solid gray;
font-size: 17px;
`

const Searchoption=styled.option`
`

const InputField=styled.input`
width: 40%;
padding: 7px;
font-size:18px;
border: 1px solid gray;
`

const Submit=styled.button`
width:6%;
background-color: white;
border: 1px solid gray;
padding: 8px;
font-size: 17px;

`



const Weathercontainer=styled.div`
width: 50%;
margin-left: 10%;

`

const Infocity=styled.div`
width: 100%;
height: 100px;


h1{
    color: gray;
    font-weight: lighter;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 30px;
}

h4{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: gray;
    font-weight: lighter;
}

`

const Blockweather=styled.div`
width: 100%;
height: 100px;
`

const Currenticon=styled.img`
width: 100px;
float: left;
`
const Divtemp=styled.div`
width: 120px;
float: left;
padding: 2%;
button{
    border: none;
    background-color: white;
    text-decoration: none;
    float: left;
    font-size: 20px;
}
.underlined {
  text-decoration: underline;
}
h1{
    float: left;
    font-size: 60px;
}
p{
    float: Left;
    font-size: 20px;
}
`

const InfoTemp=styled.div`
width: 20%px;
float: right;
margin-right: 5%;
padding: 2%;
`

const Horizental=styled.div`
  display: flex;
  justify-content: space-between;
`
const Div=styled.div`

.active{
    border: 1px solid black;
}

`

const Weatherdisplay=styled.div`
  flex-basis: 30%;
  padding: 10px;
  margin-bottom: 10px;

  p{
  margin: 0;
  font-weight: bold;
}
p:first-child {
  font-size: 18px;
  text-align: center;
  color: gray;
}

p:not(:first-child) {
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
  color: gray;
}

.icon{
    height: 100px;
}


` 

const Graph=styled.div`
width: 100%;

`

export{
    Container,
    Header,
    Search,
    Searchby,
    Searchoption,
    InputField,
    Submit,
    Weathercontainer,
    Infocity,
    Blockweather,
    Weatherdisplay,
    Horizental,
    Currenticon,
    Divtemp,
    InfoTemp,
    Graph,
    Div

    
}