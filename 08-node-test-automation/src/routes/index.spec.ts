describe('routes', () => {
  let allRoutes: Array<any>;

  beforeEach(() => {
    const getRoutes = (length: number) => ({
      ...Array.from({ length }, (_, i) => ({
        method: `method-${i}`,
        route: `/route-${i}`,
        controller: () => {},
      })),
    });

    const routes1 = getRoutes(1);
    const routes2 = getRoutes(2);
    const routes3 = getRoutes(3);
    const routes4 = getRoutes(4);

    allRoutes = [routes1, routes2, routes3, routes4];
  });

  test('allRoutes contain all routes to be used', () => {
    allRoutes.forEach((route: any, index) => {
      const object = {
        method: `method-${index}`,
        route: `/route-${index}`,
        controller: () => {},
      };

      expect(JSON.stringify(route[index])).toEqual(JSON.stringify(object));
    });
  });
});
