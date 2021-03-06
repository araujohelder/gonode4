'use strict'

const Antl = use('Antl')

class Projects {
  get rules () {
    return {
      title: 'required',
      description: 'required'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Projects
