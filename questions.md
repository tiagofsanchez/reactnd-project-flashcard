# A couple of things that I am trying to solve

- Hide the keyboard on a form - `NewDeck` and `AddCard` components; [Almost done - For ADDCARD is done]
- Delete all and delete Deck are not working properly... not sure why... but need to check this [Almost done - For delete All is done]
- Quiz Header, need to check on how to make it better and prettier
- Refactor the way I design the Button with TouchableOpacity so that I can use it all over my app
- Get a description of the Deck in
- Check why alert is not working properly
- Modal is not working well for addCard
- Redux dev tools
- NewDeck component is telling check state after trying to submit a deck with an existing name
  I thought this would be solving that... but it didn't

```js
  componentDidMount() {
    this.setState({
      titleExisting: false,
      errorMessage: false,
      title: ""
    });
  }
```

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

## To do's

- README file
- If there is not deck, show something nice

QUIZ changes:

- QUIZ with no header as I hate it [DONE]
- Text on the QUIZ [DONE]
- at the end of the QUIZ start a new QUIZ if you want [DONE]

NEWDECK:

- Submit button should be "CREATE NEW DECK" [DONE]
- Route the user to the NEW DECK VIEW [DONE]

NOTIFICATIONS:

- Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day. [DONE]

- delete deck is not working properly
