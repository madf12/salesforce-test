module.exports = (connect) => {
  return new Promise((resolve, reject) => {
    connect.query('SELECT Name, Email, Phone, Title FROM Contact', (err, data) => {
      if (err) {
        reject({error: {err}});
      } else {
        let result = [];
        for (let i of data.records) {
          const {Name, Email, Phone, Title} = i;
          result.push({Name, Email, Phone, Title});
        }
        resolve({result});
      }
    });
  });
}
