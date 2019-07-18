const snapshot = (obj) => {
  let fin = obj.finances[0]

  let keys = Object.keys(fin)
  let values = Object.values(fin)

  keys = keys.splice(1)
  values = values.splice(1)
  let v = values.map(x => parseInt(x))

   let data = {
       labels: keys,
       datasets: [{
         data: v,
         backgroundColor: [
         '#06AED5',
         '#FF6384',
         '#FFCE56',
         '#41D3BD',
         '#36A2EB'
         ],
         hoverBackgroundColor: [
         '#06AED5',
         '#FF6384',
         '#FFCE56',
         '#41D3BD',
         '#36A2EB'
         ]
      }]
   }
  return data
}

const threeYearSnap = (obj) => {
  let fin = obj.finances

  let sorted = fin.sort((a,b) => a.year - b.year)
  let three = []

  for (let i = sorted.length-1; i > 0; i--) {
    if (three.length <= 3 ){
      three.push(sorted[i])
    }
  }

  three = three.sort((a, b) => a.year - b.year)
  let years = three.map(x => x.year)
  let revs = three.map(x => x.rev)
  let exps = three.map(x => x.exp)

  let data = {
    labels: years,
    datasets: [{
      label: "Revenue",
      backgroundColor: "#06AED5",
      data: revs
    }, {
       label: "Expenses",
       backgroundColor: "#FF6384",
       data: exps
    }]
  }
  return data
}

const balanceSnap = (obj) => {
  let fin = obj.finances

  let sorted = fin.sort((a, b) => a.year - b.year)
  let three = []

  for (let i = sorted.length - 1; i > 0; i--) {
    if (three.length <= 3) {
      three.push(sorted[i])
    }
  }

  three = three.sort((a, b) => a.year - b.year)
  let years = three.map(x => x.year)
  let revs = three.map(x => x.rev)
  let ast = three.map(x => x.assets)
  let libs = three.map(x => x.lib)
  let eqs = three.map(x => x.eq)

  let data = {
    labels: years,
    datasets: [{
       label: "Revenue",
       type: "line",
       borderColor: "#06AED5",
       data: revs,
       fill: true
    }, {
      label: "Assets",
      type: "bar",
      backgroundColor: "#FFCE56",
      data: ast
    }, {
      label: "Liabilities",
      type: "bar",
      backgroundColor: "#41D3BD",
      data: libs
   }, {
        label: "Equity",
        type: "bar",
        backgroundColor: "#3e95cd",
        data: eqs
   }]
  }
  return data
}

export { snapshot, threeYearSnap, balanceSnap }
