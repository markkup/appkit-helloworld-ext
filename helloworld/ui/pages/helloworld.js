export default class HelloWorldPage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  componentWillMount() {
    this.setState({greetings: Module.data.greetings || []})
  }
  
  render() {
    let replace = Module._ctxt.options.$get("replace");
    if (!replace || replace == "")
      replace = "World";

    return (
      <ScrollView style={styles.container}>
        { this.state.greetings.map((g, i) => {
            return <Text key={i}>{g.hello + " " + replace}</Text>;
          })
        }
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
})