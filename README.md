# Источник
https://reactcommunity.org/react-transition-group/transition


### Установка
`
npm install react-transition-group
`
### Импорт
`
import {CSSTransition} from 'react-transition-group'; 
`

###  Оборачиваем в данный тег код который будем удалять из разметки 
`<CSSTransition>  </CSSTransition>`

```

function Main(props) {
    let [visible, setVisible] = useState(false)
    function setVisibleP() {
        if (!visible) {
            setVisible(true)
        }
        else setVisible(false)
    }
    return (
        <div className=" text-4xl font-medium text-pink-300"  >
            <button className=" transition-transform mt-10 ml-5 border-pink-300 border-2 rounded-md hover:scale-125" onClick={setVisibleP}>Hello</button>
            <CSSTransition in ={visible}  classNames= "alert" timeout={300} unmountOnExit>
            <div className="w-fit  mt-10 ml-5 p-5 text-center  border-2 border-pink-300">Параграф который появляется</div>
            </CSSTransition>
        </div>
    )
}

export default Main;

```

### CSS стили для блока с классом alert

```
.alert-enter {
    opacity: 0;
    transform: scale(0.9);
}

.alert-enter-active {
    opacity: 1;
    transform:  translateX(0);
    transition: opacity 300ms, transform 300ms;
}
.alert-exit {
    opacity: 1;
}
.alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
}
```
