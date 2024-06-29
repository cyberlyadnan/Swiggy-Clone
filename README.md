<!-- Redux store setup :

1. make store.js file
	import configureStore
	store = configureStore({name:"cart",reducer:{cart:cartSlice}})
	export store

2 . make slice for cart
	import createSlice
	pass name = "cart",initialState = [], reducers={additem:function.........pass function as key value pair} inside

3. connect it to the react app.
	inside app.js
	import provider 
	wrap whole project inside provider and pass store={yourstorename} as props -->




















<!-- Context In React -->
<!-- configure the conext
make file 
imoort createContext
pass data {} to store
export


wrap the app with 
filename.provider and value as props -->




reacting testing library use 
jest testing library
jest uses babel


















install react-testing-library
install jest
install jest-babel dependencies
make babel.config.js file
go to parcel babel documentation
make .parcelrc file then disable parcel transpilation in parcel
jest configuration >> npx jest --init
intsall dependecies for jest vesion > 28 : npm install --save-dev jest-environment-jsdom
make directory names - __test__ >> __ __ are called dunders

