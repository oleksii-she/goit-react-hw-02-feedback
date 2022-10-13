import React, { Component } from 'react';
import { Conteiner } from './conteiner.styled';

import { Notification } from './notification/notification';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = options => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = 0;
    total += neutral;
    total += bad;
    total += good;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()); //вычисление процентов
  }

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <Conteiner>
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Conteiner>
    );
  }
}
