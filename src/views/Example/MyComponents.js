import React from 'react';
import ChildComponent from './ChildComponent';

import AddComponent from './AddComponent';
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 'abcJob1', title: 'Developes', salary: '500' },
      { id: 'abcJob2', title: 'Testers', salary: '500' },
      { id: 'abcJob3', title: 'Project', salary: '400' },
    ],
  };

  addNewJob = (job) => {
    console.log('check new job from parent:', job);
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currentJobs,
    });
  };

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs=currentJobs.filter(item => item.id !== job.id)
    this.setState({
      arrJobs:currentJobs
    })
  }
  render() {
    console.log('call render:', this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
        // name={this.state.firstName}
        // age={'25'}
        // address={'Ha Noi'}
        // arrJobs={this.state.arrJobs}
        arrJobs={this.state.arrJobs}
        deleteJob={this.deleteJob}/>
      </>
    );
  }
}

export default MyComponent;
