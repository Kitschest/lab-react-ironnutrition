import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food}) { 
    //console.log(food)
  const {name, image, calories, servings} = food
  return (
    <Col>
      <Card
        title={name} // food.(del nom propietat)food.(nom del prop). valor
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings}</b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;