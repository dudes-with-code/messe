type NewUser = {
  lastName: string,
  firstName: string,
  mail: string,
  picture: string,
  interests: {
    webDevelopment: boolean,
    cyberSecurity: boolean,
    mobileDev: boolean,
    design: boolean,
    dataScience: boolean,
    coding: boolean,
  },
  company: {
    isAssociated: boolean,
    companyName: string,
    companyEmail: string
  }
}

export default NewUser