import React, {useState, useEffect, Component} from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'
import Note from './components/Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES'

// Samedi 20 autout reunion + neuvaine pere moto
const roar = (message) => {
  console.log(message);
}



class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      notes: []
    }
  }

  submit(){
    const { notes, text } = this.state;
    //const newNote = { text };

    notes.push({ text });

    this.setState({ notes });
    
    bake_cookie(cookie_key, this.state.notes)
  }

  componentDidMount() {
    
    this.setState({ notes:  read_cookie(cookie_key) })
  }

  clear(){
    delete_cookie(cookie_key);
    this.setState({ notes: [] })
  }
    render(){
      return(
        <div>
          <h2>Note to self</h2>
         <Form>
           <FormControl onChange={event => this.setState({ text: event.target.value })}/>
           {' '}
           <Button onClick={() => this.submit()}>Submit</Button>
         </Form>
         {
          this.state.notes.map((note, index) => {
            return (
              <Note key={index} note={note}/>
            )
          })
         }
         <hr/>
         <Button onClick={() => this.clear()}>Clear Notes</Button>
        </div>
      )
    }

}

  

export default App;
