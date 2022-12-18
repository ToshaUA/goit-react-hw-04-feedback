import { GlobalStyle, Container } from 'style/Global.styled';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickHandle = e => {
    const name = e.currentTarget.name;
    if (name === 'good') setGood(good + 1);
    if (name === 'neutral') setNeutral(neutral + 1);
    if (name === 'bad') setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = total => {
    if (total !== 0) return Math.floor((good / total) * 100);
    return 0;
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentag =
    countPositiveFeedbackPercentage(totalFeedback);

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onClickHandle}
        />
      </Section>

      {countTotalFeedback !== 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedbackPercentag={positiveFeedbackPercentag}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback!" />
      )}

      <GlobalStyle />
    </Container>
  );
};
