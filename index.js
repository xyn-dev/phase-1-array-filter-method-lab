function findMatching(drivers, string) {
    return drivers.filter(driver =>
      driver.toLowerCase() === string.toLowerCase()
    );
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }