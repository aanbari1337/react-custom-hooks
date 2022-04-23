# react-custom-hooks

Custom hooks they are a mechanism to reuse stateful logic. Building your own Hooks lets you extract component logic into reusable functions.


## useWindowSize
<p>This hook is executed when your website reaches every breakpoint</p>

```js
const windowSize = useWindowSize();
//  if you are on desktop 
//  windowSize = { 
//    isMobile: false,
//    isTablet: false,
//    isDesktop: true,
//    isHD: false
//  }

//  if you are on mobile device 
//  windowSize = {
//    isMobile: true,
//    isTablet: false,
//    isDesktop: false,
//    isHD: false
//  }
```

## useSafeDispatch

<p align="start">
    This hook helps you resolve this warning when using dispatch.
    <img width="70%" src="https://miro.medium.com/max/1172/1*LNooQtqru3ZavWrnxNs2mQ.png" />
</p>

```js
const [state, unsafeDispatch] = React.useReducer(reducer, initialState);

const dispatch = useSafeDispatch(unsafeDispatch);
dispatch({type: ..., data})
```

## useInput

```js
const emailValidator = (value) => value.include('@') // just to keep things simple

const [email, handleChangeEmail, validEmail] = useInput(emailValidator);

return (
    ...
    <div className={styles.form__group}>
        <label>Email</label>
        <Input
            type="email"
            name="email"    
            onChange={handleChangeEmail}
            value={email}
        />
    {!validEmail && <div className={styles.error}>Invalid Email</div>}
)
```

