import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from 'react-mdl';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTabs: 0 };
  }
  toggleCategories() {
    if (this.state.activeTabs === 0) {
      return (
        <div className='projectsGrid'>
          <div>
            <Card shadow={5} style={{ minWidth: '400', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/9Jczt2FmAyFW8FZF7k/giphy.gif) center / cover'
                }}
              />
              <CardText>KSL Alerts scrapes KSL's classifieds from a set of queries and pulls the data into the frontend to display to the user. Tools and languages we as a team used: JavaScript, React, Node.js, Express, Request, Cheerio, and MongoDB.</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton className="share" />
              </CardMenu>
            </Card>
          </div>
          <div>
            <Card shadow={5} style={{ minWidth: '400', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/9Jczt2FmAyFW8FZF7k/giphy.gif) center / cover'
                }}
              />
              <CardText>This was my frist React Application</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton className="share" />
              </CardMenu>
            </Card>
          </div>
          <div>
            <Card shadow={5} style={{ minWidth: '400', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/9Jczt2FmAyFW8FZF7k/giphy.gif) center / cover'
                }}
              />
              <CardText>This was my frist React Application</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton className="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTabs === 1) {
      return (
        <div className='projectsGrid'>
              <div>
            <Card shadow={5} style={{ minWidth: '400', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/9Jczt2FmAyFW8FZF7k/giphy.gif) center / cover'
                }}
              />
              <CardText>This was my frist React Application</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton className="share" />
              </CardMenu>
            </Card>
          </div>
          <div>
            <Card shadow={5} style={{ minWidth: '400', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/9Jczt2FmAyFW8FZF7k/giphy.gif) center / cover'
                }}
              />
              <CardText>This was my frist React Application</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton className="share" />
              </CardMenu>
            </Card>
          </div>
          <div>
            <Card shadow={5} style={{ minWidth: '400', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/9Jczt2FmAyFW8FZF7k/giphy.gif) center / cover'
                }}
              />
              <CardText>This was my frist React Application</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton className="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTabs === 2) {
      return (
        <div>
          <h1>This is a Note Taking Project I worked on</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTabs={this.state.activeTabs}
          onChange={tabId => this.setState({ activeTabs: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
          <Tab>React Project</Tab>
          <Tab>MongoDB Project</Tab>
        </Tabs>
  
          <Grid>
            <Cell col="12">
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    );
  }
}
