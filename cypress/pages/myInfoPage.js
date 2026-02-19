class MyInfo {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField:'[name="lastName"]',
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
        return selectors
    }
    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    fillEmployeeId(employerId, otherId, driveLicenseNumber, licenseExpiryDate){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employerId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driveLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    fillStatus(){
        cy.get(this.selectorsList().genericListGrid).eq(0).click()
        cy.get(this.selectorsList().selectNationalityGrid).click()
        cy.get(this.selectorsList().genericListGrid).eq(1).click()
        cy.get(this.selectorsList().selectMaritalStatusGrid).click()
    }
    fillCustomFields(testFild){
         cy.get(this.selectorsList().genericListGrid).eq(2).click()
         cy.get(this.selectorsList().bloodTypeGrid).click()
         cy.get(this.selectorsList().genericField).eq(9).clear().type(testFild)
    }
    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get(this.selectorsList().saveSucessAlert)
        cy.get(this.selectorsList().saveButton).eq(1).click()
        cy.get(this.selectorsList().saveSucessAlert)
    }
}

export default MyInfo