import { Card, CardBody, CardHeader, CardFooter, Button, Divider } from "@heroui/react";

const Footer = (props) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="font-bold text-large">
        {props.day} ({(props.numberOfActivities)})
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="list-decimal list-inside">
          <li>Senin</li>
          <li>Senin</li>
          <li>Senin</li>
        </ul>
      </CardBody>
      <CardFooter>
        <Button>Finish</Button>
      </CardFooter>
    </Card>
  );
};
export default Footer;
