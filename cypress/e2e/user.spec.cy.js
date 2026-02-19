  import userData from '../fixtures/userData.json'
  import LoginPage from '../pages/loginPage.js'
  import DashboardPage from '../pages/dashboardPage.js'
  import MenuPage from '../pages/menuPage.js'
  import MyInfoPage from '../pages/myInfoPage.js'

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
    myInfoPage.fillPersonalDetails('firstNameTest', 'lastNameTest')
    myInfoPage.fillEmployeeId('employerId', 'otherId', '12345', '2026-19-09')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    myInfoPage.fillCustomFields('123')
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkLoginFail()
   })
})