# react-custom-hooks

Custom hooks they are a mechanism to reuse stateful logic. Building your own Hooks lets you extract component logic into reusable functions.


## useWindowSize
<p>This hook is fired when your website reaches every breakpoint</p>

```sh
const windowSize = useWindowSize();
# if you are on desktop 
# windowSize = { 
#   isMobile: false,
#   isTablet: false,
#   isDesktop: true,
#   isHD: false
# }

# if you are on mobile device 
# windowSize = {
#   isMobile: true,
#   isTablet: false,
#   isDesktop: false,
#   isHD: false
# }
```

## useSafeDispatch

<p align="start">
    This hook helps you resolve this warning when using dispatch.
    <img width="70%" src="https://miro.medium.com/max/1172/1*LNooQtqru3ZavWrnxNs2mQ.png" />
</p>

```sh
  const [state, unsafeDispatch] = useReducer(reducer, {...});

  const dispatch = useSafeDispatch(unsafeDispatch);
  dispatch({type: ..., data})
```
