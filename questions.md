# A couple of things that I am trying to solve

- Hide the keyboard on a form - `NewDeck` and `AddCard` components;
- Delete all and delete Deck is not working properly... not sure why... but need to check this
- Quiz Header, need to check on how to make it better and prettier
- Refactor the way I design the Button with TouchableOpacity so that I can use it all over my app
- Get a description of the Deck in
- Check why alert is not working properly
- Modal is not working well for addCard
- Redux dev tools
- NewDeck component is telling check state after trying to submit a deck with an existing name
- redux-devtools-extension to work with react native

## Trying got design a TouchableOpacity that works:

```js
//The component
const TouchableOpacityComponent = ({ name, onPress, ...props }) => (
  <TouchableOpacity onPress={() => onPress(name)} {...props} />
);

//Rendering that component in my UI
<TouchableOpacityComponent
  style={styles.btnContainer}
  name="incorrect"
  onPress={name => this.responseHandler(name)}
>
  <Ionicons name="ios-close-circle" color={"red"} size={25} />
</TouchableOpacityComponent>;

//The responseHandler is not working as I wanted

 responseHandler(name) {
    console.log(name);
  }
```
