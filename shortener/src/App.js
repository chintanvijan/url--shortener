import logo from './logo.svg';
import React, { useState } from 'react';

// import './static/css/main.css';
// import 'Searchs_130.png';

function App() {
  const [name,setName] = useState('undefined');

  function copy_text(e) {
    /* Get the text field */

    var copyText = document.getElementById("search");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    
  }
  


  function formHandler(e){
     e.preventDefault();
    // setName('Chintan');
    console.log('Here');
    let link = document.getElementById('search').value;

   console.log(link);
   

        fetch('/post-link?link='+link, {
          method: 'GET',
          headers: {

            Accept: 'application/json',
            'Content-Type': 'application/json',
           
          }
          
        })
        .then((response) => response.json())
            .then((response) => {
              setName(response.generated_link);
              console.log(response);
              return response;
            })
            .catch((error) => {
              console.error(error);
            });



  }

  if(name==='undefined'){
    return (
      <div className="s130">
            <form onSubmit={formHandler} >
           
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </div>
                  <input id="search" type="text" placeholder="Paste the link to be shortened ..." name="link"/>
                </div>
                <div className="input-field second-wrap">
                  <button className="btn-search" type="submit">SHORTEN</button>
                </div>
              </div>
             
            </form>
            
          </div>
    );
  }else{

    return (
      <div className="s130">
            
           <form>
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </div>
                  <input id="search" type="text" placeholder="Paste the link to be shortened ..." name="link" value={name} />
                </div>
                <div className="input-field second-wrap">
                  <button className="btn-search" type="button" onClick={copy_text}>COPY</button>
                </div>
              </div>
             
           </form>
            
          </div>
          );

  }
}

export default App;
//action="/post-link"