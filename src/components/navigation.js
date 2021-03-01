import {useEffect} from 'react'
export const Navigation = (props) => {
  const navButton = document.querySelector('.collapsed')
  const toggler = document.querySelector('#bs-example-navbar-collapse-1')

  useEffect(() => {
    if(navButton){
      navButton.addEventListener('click', function(){
        toggler.classList.toggle('collapse')
      })
    }
  })

  return (
    <nav id='menu' className='navbar navbar-expand-lg navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top' id="logo">

            <img src="img/logos/black/ref.png" alt="Techincal Design Logo" className="img-fluid d-inline-block align-middle mr-2" style={{width:"40px"}}/>
            <span class="text-uppercase font-weight-bold"> Technical designs</span>
           
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right' id="togglers">
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> */}
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li> */}
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
