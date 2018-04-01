import React from 'react'
import Chart from 'modules/Chart'
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Body,
} from 'native-base'

export const CHART_SCREEN = {
  screen: 'stats.Chart',
  title: 'Charts',
  navigatorStyle: {
    navBarHidden: true,
  },
}

export default function ChartScreen() {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>{CHART_SCREEN.title}</Title>
        </Body>
        <Right />
      </Header>

      <Chart />

    </Container>
  )
}
