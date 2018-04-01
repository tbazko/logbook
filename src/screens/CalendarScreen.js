import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
} from 'native-base'

export const CALENDAR_SCREEN = {
  screen: 'stats.Calendars',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
};

export default function CalendarScreen() {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Calendars</Title>
        </Body>
        <Right />
      </Header>
      <Content />
    </Container>
  )
}
