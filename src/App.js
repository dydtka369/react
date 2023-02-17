import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //useState 사용할시에 추가
function Nav(props) {
  let Lis = []
  for(let i=0; i<props.topics.length; i++){ //topics 숫자 만큼 반복
    let t = props.topics[i];
    Lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id)); // 태그에 속서으로 넘겨서 문자가 되었기 떄문에 number로 숫자 변환해줌
      }}>{t.title}</a>
      </li>)
  } //key 값을 줘서 반복문 안에서 고유하게 만들어줘야됨, 자동으로 생성한 테그인 경우에는 리액트가 추적을 해야되서 키값이 있어야됨
  
  return  <nav>
  <ul>
    {Lis}
  </ul>
</nav>
}
function Aricle (props){
  return   <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function Header(props) {
  return  <header>
  <h1><a href='/' onClick={function(event){
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
  </header>
}
function Create() {
  return <article>
    <h2>Create</h2>
  </article>
}
function App() {
  // let _mode = useState('WELCOME');
  // let mode = _mode[0];
  // let setMode = _mode[1];
  let [mode, setMode] = useState('WELCOME'); //이름은 자기 마음대로 설정 가능, mode에 있는WELCOME은 state에 있는 초기값 , setMode는 state에 있는 함수를 바꿀떄
  let [id, setID] =useState(null); 
  let topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ]
  let content = null;
  if (mode == 'WELCOME'){
    content =    <Aricle title="Welcome" body="Hello, web"></Aricle>
  } else if(mode == 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content =   <Aricle title={title} body={body}></Aricle>
  } else if(mood === 'CREATE') {
    content = <Create></Create>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={function(){
       setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={function(_id){
       setMode('READ'); // 값을 바꿈
       setID(_id);
      }}></Nav>
     {content}  
     <a href='/create' onClick={function(event){
      event.preventDefault();
      setMode('CREATE');
     }}>Create</a>
    </div>
  );
}

export default App;
