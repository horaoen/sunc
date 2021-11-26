import Button, { ButtonType, ButtonSize } from "components/Button/button";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <Button disabled>hello</Button>
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        disabled={true}
      >
        hello large
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
        baidu
      </Button>
    </div>
  );
};

export default App;
