
// import { defineConfig } from 'cypress'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/')
  })
})
describe('The About Page',() => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/about')
  })
})
describe('The Contact Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/contact')
  })
})