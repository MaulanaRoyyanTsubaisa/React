// import { Card, CardBody, CardHeader, CardFooter, Button, Divider } from "@heroui/react";
import React from "react";
import { Button } from "@heroui/react";


class Footer extends React.Component {
  state = {
    message: "Hello"
  }

  changeMessage = () => {
    this.setState({ message: "Hello World" })
  }
  render() {
    return (
      <footer>
        <h3 className="font-extrabold">Ini adalah footer</h3>
        <p data-testid="state-message">{this.state.message}</p>
        <Button data-testid="change-message-btn" onClick={this.changeMessage}>Change Message</Button>
      </footer>
    );
  }
}
export default Footer;

// const Footer = (props) => {
//   return (

//     changeMessage = () => { this.setState({ message: "Hello World" }) }
  
//     <Card className="max-w-[400px]">
//       <CardHeader className="font-bold text-large">
//         {props.day} ({(props.numberOfActivities)})
//       </CardHeader>
//       <Divider />
//       <CardBody>
//         <ul className="list-decimal list-inside">
//           <li>Senin</li>
//           <li>Senin</li>
//           <li>Senin</li>
//         </ul>
//       </CardBody>
//       <CardFooter>
//         <Button>Finish</Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default Footer;