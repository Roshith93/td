
export const Header = (props) => {
  return (
    <header id="header">
      <div className="container-fluid intro-text" style={{ width: '100%', padding: '0px' }}>
        <div class="homePage">
          <div class="textChangeContainer">
            <p className="changeText">
              WE BUILD &nbsp;
                        <span class="txt-rotate whiteColorBig" data-period="2000"
                data-rotate='[ "WEBSITES.", "BRANDS.", "STATERGIES." ]'></span>
            </p>
          </div>
          <p className="textChangeContainerMiddle">that <span>defy</span> expectations</p>
          <p class="textChangeContainerBelow element ">
             <span class="whiteColorSmall"> TECHNICAL DESIGNS </span> 
            
                    </p>
          <br />
        </div>
      </div>
    </header>
  );
}


