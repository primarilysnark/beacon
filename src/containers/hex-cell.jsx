import { connect } from 'react-redux';
import { setActiveTile } from '../actions';
import HexCell from '../components/hex-cell';

function mapStateToProps({ map, tiles }, ownProps) {
  const routes = [];
  const edges = {
    bottomLeft: false,
    bottomRight: false,
    centerLeft: false,
    centerRight: false,
    topLeft: false,
    topRight: false,
  };

  const systems = map.systems.filter(system => system.coordinates.x === ownProps.coordinates.x && system.coordinates.y === ownProps.coordinates.y && system.coordinates.z === ownProps.coordinates.z);

  for (let routeIndex = 0; routeIndex < map.routes.length; routeIndex++) {
    const route = map.routes[routeIndex];
    let pastPoint = route.points[0];

    for (let pointIndex = 1; pointIndex < route.points.length; pointIndex++) {
      const currentPoint = route.points[pointIndex];
      const hasDirectionalX = ((pastPoint.x >= ownProps.coordinates.x && ownProps.coordinates.x > currentPoint.x) ||
        (pastPoint.x < ownProps.coordinates.x && ownProps.coordinates.x <= currentPoint.x));
      const hasDirectionalY = ((pastPoint.y >= ownProps.coordinates.y && ownProps.coordinates.y > currentPoint.y) ||
        (pastPoint.y < ownProps.coordinates.y && ownProps.coordinates.y <= currentPoint.y));
      const hasDirectionalZ = ((pastPoint.z >= ownProps.coordinates.z && ownProps.coordinates.z > currentPoint.z) ||
        (pastPoint.z < ownProps.coordinates.z && ownProps.coordinates.z <= currentPoint.z));
      const isXBound = pastPoint.x === currentPoint.x && pastPoint.x === ownProps.coordinates.x;
      const isYBound = pastPoint.y === currentPoint.y && pastPoint.y === ownProps.coordinates.y;
      const isZBound = pastPoint.z === currentPoint.z && pastPoint.z === ownProps.coordinates.z;

      edges.bottomLeft = edges.bottomLeft || (isYBound && hasDirectionalX);
      edges.bottomRight = edges.bottomRight || (isXBound && hasDirectionalY);
      edges.centerLeft = edges.centerLeft || (isZBound && hasDirectionalX);
      edges.centerRight = edges.centerRight || (isZBound && hasDirectionalY);
      edges.topLeft = edges.topLeft || (isXBound && hasDirectionalZ);
      edges.topRight = edges.topRight || (isYBound && hasDirectionalZ);

      pastPoint = route.points[pointIndex];
    }
  }

  return {
    center: map.center,
    edges,
    routes,
    tile: systems.length ? systems[0] : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveTile: (coordinates) => dispatch(setActiveTile(coordinates)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HexCell);
