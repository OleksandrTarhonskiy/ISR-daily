import React  from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';

const NewsCard = ({
  title,
  photo,
  desc,
}) => (
  <Container>
    <Row>
      <Col lg="5">
        <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
        <img className="img-fluid" src={photo} alt="image"/>
        <a><Mask overlay="white-slight"/></a>
       </View>
      </Col>
      <Col lg="7">
        <h3 className="font-weight-bold mb-3 p-0"><strong>{title}</strong></h3>
        <p>{desc}</p>
        <p>19/08/2018</p>
        <Button color="success" size="md" className="waves-light ">Read more</Button>
      </Col>
    </Row>
    <hr className="my-5"/>
  </Container>
);

export default NewsCard;