
export const Header = (props) => {
  return (
    <header id="header">
      <div className="container-fluid intro-text" style={{ width: '100%', padding: '0px' }}>
        <div class="homePage">
        {/* <img src="img/logos/white/fullLogo.png" style={{style:100,width:100}}/> */}
              <img src="img/logos/white/fullLogo.png" style={{height:100, marginBottom:150}}/>
          <div class="textChangeContainer">
            <div className="changeText" >
             <span style={{fontWeight:100, fontSize:25}}> WE BUILD </span>&nbsp;
                        <span class="txt-rotate " data-period="2000"
                data-rotate='[ "WEBSITES.", "BRANDS.", "STATERGIES." ]'></span>
            </div>
          </div>
          <p className="textChangeContainerMiddle">that <span>defy</span> expectations</p>
          <p class="textChangeContainerBelow element ">
             {/* <span class=""> TECHNIC DESIGNS </span>  */}
            
                    </p>
          <br />
        </div>
      </div>
    </header>
  );
}


