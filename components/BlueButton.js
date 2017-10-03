export default class BlueButton extends Component {
  render() {
    return (
      <TouchableOpacity style={{backgroundColor:'blue'}} onPress={() => this.props.onPress()}>
        <Text style={{color:'white'}}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}