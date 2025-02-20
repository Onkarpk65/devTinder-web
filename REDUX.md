## Installing ReduxToolkit and React Redux 

```javascript

npm install @reduxjs/toolkit
// This package is for configuring the store

```

```javascript

npm install react-redux
// This package is for providing the store to our whole app

```

## We can install both two packages at once:
- like this 
- npm install @reduxjs/toolkit react-redux 
- *This way we can install multiple packages at the same time* 
- npm install @reduxjs/toolkit react-redux axios daisui etc


## Configuring Redux Toolkit (Store)
-   create a utils folder
-   create an appStore file 
-   create a store in it , now store is created by calling a method or a function known as *configureStore()* 
-   now, *configureStore()* comes from '@redux/toolkit'
-   configureStore takes an object.
-   reducer: {}


```javascript
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {},
});

export default appStore;
//This is how we create a store in redux
```

## Configuring Redux Toolkit (Provider)
- Once the store is created , we have to provide this store in our App
- How ?
- Go to the root application file, in our case it is App.jsx file 
- import { Provider } from 'react-redux'
- Wrap all the code inside App Component inside a Provider Component 

```javascript
import { Provider } from "react-redux"

const App = () => {
  return (
  <>
  <Provider store = {appStore}>  
    <BrowserRouter basename="/">
      <Routes>
        <Route path = '/' element = {<Body/>}>
          <Route path = '/login' element = {<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>    
  </>
  )
}
// This is how we provide the store to our App
```
## Store consists of slices, we can make different slices in different files 
- We make userSlice.jsx 
- create a slice by using a method *createSlice()*
- now create slice comes from "@reduxjs/toolkit"
- it takes an object as a slice
- name of the slice,
- initialState of it,
- reducers Object 

```javascript

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
            //Here the addUser mthod gives us the value of initialState, and whatever we return from it will update the state
        },
        
        removeUser: () => {
            return null;
        }
    }
})

//Exporting Actions
export const {addUser, removeUser} = userSlice.actions;

//Exporting reducer
export default userSlice.reducer;
// Now the setup of reduxstore, provider, userSlice, actions, reducers is done
```

- We export actions, that we have created in our slice.
- Now the setup of reduxstore, provider, userSlice, actions, reducers is done
- The last step is to add the slice / reducer to the *appStore*

```javascript

import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;

```

## Storing data in Redux Store, with the help of useDispatch() Hook 

- Here, we dispatch an action by calling the use Dispatch() Hook 

```javascript
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
const dispatch = useDispatch();
dispatch(addUser(res.data));
```

## Subscribing to the store 
- for subscribing there is a new hook which redux gives us named as *useSelector()*
- we write it like 
- useSelector(store => and in store what we are suscribed to ? )
- useSelector(store => store.user )
- user is the name of the slice that we have created

## Navigating to Different Route 
- For navigating react-router-dom gives us a hook 
- *useNaviage()*

```javascript
const navigate = useNavigate();
return navigate('/');
```