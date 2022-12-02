import { GlobalStyle, Container } from 'style/Global.styled';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  counterNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  counterBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    if (total !== 0) return Math.floor((good / total) * 100);
    return 0;
  };

  render() {
    const countTotalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentag =
      this.countPositiveFeedbackPercentage(countTotalFeedback);
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            counterGood={this.counterGood}
            counterNeutral={this.counterNeutral}
            counterBad={this.counterBad}
          />
        </Section>

        {countTotalFeedback !== 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              positiveFeedbackPercentag={positiveFeedbackPercentag}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}

        <GlobalStyle />
      </Container>
    );
  }
}
