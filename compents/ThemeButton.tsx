import { useEffect, useState,useRef,useContext} from 'react';
import { ThemeContent } from '@/App';
function ThemeButton() {
  const [show, setshow] = useState(false);
  useEffect(() => {
      if (myref && myref.current && show) {
          myref.current.style.background = theme.light.background;
          myref.current.style.color = theme.light.foreground;
          myref.current.style.padding = '20px 20px';
      } else if (myref && myref.current && !show) {
          myref.current.style.background = theme.dark.background;
          myref.current.style.color = theme.light.background;
      }
  }, [show]);
  const myref = useRef<HTMLHRElement>(null);
  const theme = useContext(ThemeContent);
  const change = (evt: React.MouseEvent) => {
      setshow(true);
      setTimeout(() => {
          setshow(false);
      }, 1000);
  };
  return (
      <div className="btn_div">
          <h1 ref={myref} style={{ background: theme.dark.background, color: theme.light.background }}>
              hello vite
          </h1>
          <button onClick={change}>点我增加</button>
          {show ? <span></span> : ''}
      </div>
  );
}

export default ThemeButton