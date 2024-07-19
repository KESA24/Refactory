const { Given, When, Then } = require('@cucumber/cucumber')
const { assertThat, is } = require('hamjest')
const Person = require('../../src/shouty.js')


Given('Lucy is located {int} metres from Sean', function (distance) {
    // Write code here that turns the phrase above into concrete actions
    // console.log(distance);
    // return 'pending'

    this.lucy = new Person
    this.sean = new Person
    this.lucy.moveTo(distance)

  })
   
  When('Sean shouts {string}', function (message) {
    // Write code here that turns the phrase above into concrete actions
    this.sean.shout(message)
    this.message = message
    // return 'pending'
  })
   
  Then('Lucy hears Sean\'s message', function () {
    // Write code here that turns the phrase above into concrete actions
    assertThat(this.lucy.messagesHeard(), is([this.message]))

    // return 'pending'

  })
  