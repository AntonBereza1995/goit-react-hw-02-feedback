import React from 'react';
// import s from './Feedback.module.css';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = name => {
    return this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    // const total = this.state.good + this.state.neutral + this.state.bad;
    // console.log(total);
    // return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage = Math.round(
      (good * 100) / (good + this.state.neutral + this.state.bad),
    );
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leaven feedback">
          <FeedbackOptions
            options={[Object.keys(this.state)]}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
