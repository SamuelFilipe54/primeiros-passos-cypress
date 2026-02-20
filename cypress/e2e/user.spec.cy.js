  import userData from '../fixtures/userData.json'
  import LoginPage from '../pages/loginPage.js'
  import DashboardPage from '../pages/dashboardPage.js'
  import MenuPage from '../pages/menuPage.js'
  import MyInfoPage from '../pages/myInfoPage.js'

  const Chance = require('chance')

  const chance = new Chance()
  const loginPage = new LoginPage 
  const dashboard = new DashboardPage
  const menuPage = new MenuPage
  const myInfoPage = new MyInfoPage


  describe('Orange HRM Tests', () => {

    it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboard.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeId(chance.natural({ min: 1111111111, max: 9999999999 }),chance.natural(), chance.natural(), '2031-04-06')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    myInfoPage.fillCustomFields('123')
  })

})