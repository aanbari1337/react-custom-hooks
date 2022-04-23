# react-custom-hooks

Custom hooks they are a mechanism to reuse stateful logic. Building your own Hooks lets you extract component logic into reusable functions.


## useWindowSize

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