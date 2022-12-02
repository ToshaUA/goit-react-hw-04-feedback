import PropTypes from 'prop-types';
import { Paragraph, StatisticsColumn } from './Statistics.stylde';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentag,
}) => (
  <StatisticsColumn>
    <Paragraph>Good: {good} </Paragraph>
    <Paragraph>Neutral: {neutral} </Paragraph>
    <Paragraph>Bad: {bad}</Paragraph>
    <Paragraph>Total: {total}</Paragraph>
    <Paragraph>Positive Feedback: {positiveFeedbackPercentag}%</Paragraph>
  </StatisticsColumn>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentag: PropTypes.number.isRequired,
};
