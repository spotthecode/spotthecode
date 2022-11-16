import Link from 'next/link'

function NavigationBar() {
  return (
    <>
      
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">spotthecode</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span /> 
            <span />
          </label>
        </div>
        <div className="nav-links">
          <Link href='/'>home</Link>
          <Link href='/Practices'>practices</Link>
          <Link href='/Blogs'>blogs</Link>
          <Link href='/tutorials/Videos'>tutorials</Link>
          <Link href='/About'>about</Link>
          
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
