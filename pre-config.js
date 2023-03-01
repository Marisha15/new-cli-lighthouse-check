module.exports = async browser => {
  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({
    'user-agent':
      'Cypress/2.1.0 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
  });
  await page.goto('https://master.independer.nl');

  await page.evaluate(() => {
    const inputModel = {"personen":[{"wensenId":0,"id":0,"geboortedatum":"1993-01-12T22:00:00.000Z","geslacht":1,"soortVerzekerde":"Aanvrager"}],"adres":{"postcode":"1033 SC","land":"Nederland"},"gezin":{"familyMeeverzekeren":false,"familySetFromIntro":true,"medeverzekerdenPartner":"niemand","medeverzekerdenKinderen":"geenkinderen"},"sog":{},"prefillen":{},"wensen":[{"id":0,"eigenRisico":385,"dekkingen":{}}],"filters":{"typeVerzekering":{"values":{}},"klantcijfer":{"value":"alle"},"duurzaamheidsscore":{"value":"alle"},"typePolis":{"value":"alle"},"eigenschappen":{"values":{}},"ziekenhuisKeuze":{"values":{}},"appscore":{"value":0},"termijnbetalingEigenRisico":{"values":{}},"zorgaanbieders":{"values":{"filteredBasisIds":[],"data":[]}},"medicijnen":{"values":{"aanvrager":[],"filterData":[]}}},"betalingstermijn":"Maand","betaalwijze":"Automatischeafschrijving","risicoProductModuleInfo":{}};

    sessionStorage.setItem('zorgverzekering.input', JSON.stringify(inputModel));

    sessionStorage.getItem('zorgverzekering.input')
  })
};
