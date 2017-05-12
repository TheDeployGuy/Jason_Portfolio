import React, { Component } from 'react';

class ExperienceSection extends Component {
  render() {
    return (
    <section>
        <div className="header-content" id="EXPERIENCES">
            <h1>Experience</h1>
            <hr/>
            <div className="row">
                <div className="col-md-3">
                    <img alt="exp1" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" className="circularImage" />
                </div>
                <div className="col-md-9 leftAlign">
                    <h2>Cloud Deployment Automation Engineer - Devops</h2>
                    <p>I am part of the SmartCloud Team for Social Business. I am working as a Cloud Deployment Automation Engineer(DevOps)</p>

                    <p>Some of the projects I am involved in:</p>
                    <ul>
                        <li>Managing and Deploying cloud environment into VMware and Softlayer</li>
                        <li>Developed scripts to automate tasks for these cloud environments to allow for faster debugging leading to less downtime of the environments</li>
                        <li>Lead Development on Cloud deployment automation used to deploy over 20+ cloud environments</li>
                    </ul>

                    <p>Achievements:</p>
                    <ul>
                        <li>Automated the deployments of production environments into SoftLayer & VMware. This effort saved 2-4 days of manual work every week.</li>
                        <li>Refactored existing distributive deployment automation to be non-distributive. This involved refactoring legacy code and working with many application development teams.</li>
                        <li>Automated Build promotion process saving 10+ hours of manual effort monthly</li>
                    </ul>
                    <p><b>Technologies involved: Python, Java, bash, Perl, PHP, Chef, RunDeck, Jenkins, RTC</b></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img alt="exp2" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97200&w=200&h=200" className="circularImage" />
                </div>
                <div className="col-md-9 leftAlign">
                    <h2>ICT Software Engineer for Connections Cloud</h2>
                    <p>As part of the DevOps team for Connections Cloud my responsibilities involved:</p>
                    <ul>
                        <li>Providing System Admin support for test and production environments</li>
                        <li>Developing automation tools using Java, Selenium and Python. </li>
                    </ul>

                    <p>Achievements</p>
                    <ul>
                        <li>Developed collection system in python to sort logs fetched from many data centres.</li>
                        <li>Developed automation to deploy and test cloud environments using Python and Java.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default ExperienceSection;
