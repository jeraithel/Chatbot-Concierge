import React, { Component } from 'react'
import API from '../utils/api'
// import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { SubmitBtn } from '../components/Button/button'
import { Container, Row, Col } from '../components/Grid'
import ActivityCard from '../components/ActivityCards'
import '../components/Slider/style.css'
import '../pages/activities.css'
import List from '../components/List/index'
import Card from '../components/Card/index'
import CitySearch from '../components/CitySearch/citysearch'
// import { set } from 'mongoose';



class Activities extends Component {

  constructor() {
    super()

    this.state = {
        events: [],
        approved: false,
        ages: 1,
        duration: 1,
        location: 1,
        activityLevel: 1,
        price: 1,
        city: "",
        showEvents: false,
        myRef: React.createRef()
    }
  }

  componentDidMount() {
    this.getSubmissions();
  }

  getSubmissions = () => {
    API.getSubmissions()
      .then(res =>
        this.setState({
          events: res.data
        })
      )
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let activity = this.state
    let ages = activity.ages
    let location = activity.location
    let duration = activity.duration
    let level = activity.activityLevel
    let price = activity.price

    API.getSubmissions(ages, location, duration, level, price)
    this.show()
  }


  show() {
    this.setState({
      showEvents: true
    })
  }
  // scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop) 


  render() {
    return (
      <div className="Wrapper">
        <Container>
        <CitySearch />
          <Row >
            <Col size="md-3">
              <h1 className="titleQ">WHAT TYPE OF ACTIVITY SHOULD WE PLAN?</h1>
            </Col>
            <Col size="md-2">
              <h6 className="descriptionsRight">Kids</h6><br></br>
              <h6 className="descriptionsRight">An hour</h6><br></br>
              <h6 className="descriptionsRight">Indoors</h6><br></br>
              <h6 className="descriptionsRight">Sloth</h6><br></br>
              <h6 className="descriptionsRight">Budget Friendly</h6><br></br>
            </Col>

            <Col size="md-5">
              <p className="questions">Kid Friendly?</p>
              <Slider
                    min={0}
                    max={2}
                    value={this.state.ages}
                    orientation="horizontal"
                    onChange={(value) => { this.setState({ ages: value }) }}
                />
              <p className="questions">Duration?</p>
              <Slider
                    min={0}
                    max={2}
                    value={this.state.duration}
                    orientation="horizontal"
                    onChange={(value) => { this.setState({ duration: value }) }}
                />
              <p className="questions">Location?</p>
              <Slider
                    min={0}
                    max={2}
                    value={this.state.location}
                    orientation="horizontal"
                    onChange={(value) => { this.setState({ location: value }) }}
                />
              <p className="questions">Activity Level?</p>
              <Slider
                    min={0}
                    max={2}
                    value={this.state.activityLevel}
                    orientation="horizontal"
                    onChange={(value) => { this.setState({ activityLevel: value }) }}
                />
              <p className="questions">Price?</p>
              <Slider
                    min={0}
                    max={2}
                    value={this.state.price}
                    orientation="horizontal"
                    onChange={(value) => { this.setState({ price: value }) }}
                />
              <SubmitBtn handleFormSubmit = {this.handleFormSubmit} ></SubmitBtn>
            </Col>
            <Col size="md-2">
              <h6 className="descriptionsLeft">Cocktails</h6><br></br>
              <h6 className="descriptionsLeft">All day</h6><br></br>
              <h6 className="descriptionsLeft">Outdoors</h6><br></br>
              <h6 className="descriptionsLeft">Cheetah</h6><br></br>
              <h6 className="descriptionsLeft">Living Large</h6><br></br>
            </Col>

          </Row>
          {this.state.showEvents ?
            <Card ref={this.myRef} >
              {this.state.events.length ? (
                <List>
                  {this.state.events.map(event => (
                    <ActivityCard
                      key={event.id}
                      title={event.title}
                      city={event.city}
                      ages={event.ages}
                      duration={event.duration}
                      location={event.location}
                      activityLevel={event.activityLevel}
                      price={event.price}
                      description={event.description}
                      link={event.link}
                      image={event.image}
                    />
                  ))}
                </List>
              ) : (
                  <h5 className="text-center">No activites matched your request. Please try again.</h5>
                )}
            </Card>
            : null
          }
        </Container>
      </div>
    )
  }
}






export default Activities