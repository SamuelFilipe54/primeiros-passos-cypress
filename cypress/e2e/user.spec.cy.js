  import userData from '../fixtures/userData.json'

  describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header',
    dashboardGrid: '.orangehrm-upgrade-layout',
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input',
    dateField: '.oxd-date-input',
    dateCloseButton: '.--close',
    genericListGrid: '.oxd-select-text',
    selectNationalityGrid: ':nth-child(27)',
    selectMaritalStatusGrid: '.oxd-select-dropdown > :nth-child(3)',
    saveButton: '[type=submit]',
    saveSucessAlert: '.oxd-toast-close',
    bloodTypeGrid: '.oxd-select-dropdown > :nth-child(9)'
  }

    it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('employerId')
    cy.get(selectorsList.genericField).eq(5).clear().type('otherId')
    cy.get(selectorsList.genericField).eq(6).clear().type('12345')
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-17-02')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericListGrid).eq(0).click()
    cy.get(selectorsList.selectNationalityGrid).click()
    cy.get(selectorsList.genericListGrid).eq(1).click()
    cy.get(selectorsList.selectMaritalStatusGrid).click()
    cy.get(selectorsList.dateField).eq(1).find('input').clear().type('2001-14-02')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get(selectorsList.saveSucessAlert)
    cy.get(selectorsList.genericListGrid).eq(2).click()
    cy.get(selectorsList.bloodTypeGrid).click()
    cy.get(selectorsList.genericField).eq(9).clear().type('123')
    cy.get(selectorsList.saveButton).eq(1).click()
    cy.get(selectorsList.saveSucessAlert)
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
})
})