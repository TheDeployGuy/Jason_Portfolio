import React, { Component } from 'react';

class ExperienceSection extends Component {
  render() {
    return (
    <section>
        <div className="header-content" id="experience">
            <h1>Experience</h1>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <img alt="exp1" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" className="circularImage" />
                </div>
                <div className="col-md-8 leftAlign">
                    <h2>Cloud Deployment and Operations Automation Engineer - Devops</h2>
                    <p>I am part of the SmartCloud Team for Social Business. I am working as a Cloud Deployment and Operations Automation Engineer(DevOps)</p>

                    Some of the projects I am involved in:
                    <ul>
                        <li>Managing and Deploying cloud environment into VMware and Softlayer</li>
                        <li>Developed scripts to automate tasks for these cloud environments to allow for faster debugging leading to less downtime of the environments</li>
                        <li>Lead Development on Cloud deployment automation used to deploy over 20+ cloud environments</li>
                    </ul>

                    Achievements:
                    <ul>
                        <li>Fully automated the deployments of several production environments into SoftLayer/VMware, this effort saved 2-4 days of manual work each week.</li>
                        <li>Completely refactored existing deployment and operations code making it easier to manage and extend, saving development and implementation time.</li>
                        <li>Automated Build promotion process saving 10+ hours of manual effort monthly</li>
                    </ul>
                    <h5>Technologies involved: Python, Java, bash, Perl, PHP, Chef, RunDeck, Jenkins, RTC</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-4 col-md-4 rightAlign">
                    <h2>Experience 2</h2>
                    <p>Experience Description</p>
                </div>
                <div className="col-md-4">
                    <img alt="exp2" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" className="circularImage" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img alt="exp3" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" className="circularImage" />
                </div>
                <div className="col-md-8 leftAlign">
                    <h2>Experience 3</h2>
                    <p>Experience Description</p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default ExperienceSection;
