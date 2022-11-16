import Practices from "../practices";

const CSS = () => {
  return (
    <>
      <Practices />

        <div className="layout">
          <div className="side-bar ">
            <h2 className=" tittle text-center">CONTENTS</h2>

              <h3>1.INTRODUCTION</h3>
              <a href="#">What is css?</a> <br/>
              <a href="#">Types of css?</a>

              <h3>2.SELECTORS</h3>
              <a href="#">Syntax</a> <br/>
              <a href="#">Selector</a>

              <h3>3.STYLINGS</h3>
              <a href="#">Color</a> <br/>
              <a href="#">Box Model</a><br/>
              <a href="#">Background</a><br/>
              <a href="#">Position</a><br/>
              <a href="#">Display</a><br/>
              <a href="#">Text Formatting</a><br/>
              <a href="#">Text Units</a><br/>

              <h3>4.TRANSITIONS AND ANIMATIONS</h3>
              <a href="#">Transformations</a> <br/>
              <a href="#">Transitions</a> <br/>
              <a href="#">Animation</a> <br/>

              <h3>5.FLEXBOX AND GRID</h3>
              <a href="#">Media Queries</a> <br/>
              <a href="#">Flex Box</a> <br/>
              <a href="#">Grid</a> <br/>
              
          </div>

          <div className="body"> main body</div>
        </div>
    </>
  );
};

export default CSS;
