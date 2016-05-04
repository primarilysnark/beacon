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

  for (let routeIndex = 0; routeIndex < map.routes.length; routeIndex++) {
    const route = map.routes[routeIndex];
    let pastPoint = route.points[0];

    for (let pointIndex = 1; pointIndex < route.points.length; pointIndex++) {
      const currentPoint = route.points[pointIndex];
      const hasSharedX = (pastPoint.x <= ownProps.coordinates.x && ownProps.coordinates.x <= route.points[pointIndex].x) ||
        (pastPoint.x >= ownProps.coordinates.x && ownProps.coordinates.x >= route.points[pointIndex].x);
      const hasSharedY = (pastPoint.y <= ownProps.coordinates.y && ownProps.coordinates.y <= route.points[pointIndex].y) ||
        (pastPoint.y >= ownProps.coordinates.y && ownProps.coordinates.y >= route.points[pointIndex].y);
      const hasSharedZ = (pastPoint.z <= ownProps.coordinates.z && ownProps.coordinates.z <= route.points[pointIndex].z) ||
        (pastPoint.z >= ownProps.coordinates.z && ownProps.coordinates.z >= route.points[pointIndex].z);
      const isXBound = pastPoint.x === currentPoint.x && pastPoint.x === ownProps.coordinates.x;
      const isYBound = pastPoint.y === currentPoint.y && pastPoint.y === ownProps.coordinates.y;
      const isZBound = pastPoint.z === currentPoint.z && pastPoint.z === ownProps.coordinates.z;

      edges.bottomLeft = edges.bottomLeft || (isYBound &&
        hasSharedX &&
        hasSharedZ &&
        ownProps.coordinates.x !== currentPoint.x &&
        ownProps.coordinates.z !== currentPoint.z);

      edges.bottomRight = edges.bottomRight || (isXBound &&
        hasSharedY &&
        hasSharedZ &&
        ownProps.coordinates.y !== currentPoint.y &&
        ownProps.coordinates.z !== currentPoint.z);

      edges.centerLeft = edges.centerLeft || (isZBound &&
        hasSharedX &&
        hasSharedY &&
        ownProps.coordinates.x !== currentPoint.x &&
        ownProps.coordinates.y !== currentPoint.y);

      edges.centerRight = edges.centerRight || (isZBound &&
        hasSharedX &&
        hasSharedY &&
        ownProps.coordinates.x !== pastPoint.x &&
        ownProps.coordinates.y !== pastPoint.y);

      edges.topLeft = edges.topLeft || (isXBound &&
        hasSharedY &&
        hasSharedZ &&
        ownProps.coordinates.y !== pastPoint.y &&
        ownProps.coordinates.z !== pastPoint.z);

      edges.topRight = edges.topRight || (isYBound &&
        hasSharedX &&
        hasSharedZ &&
        ownProps.coordinates.x !== pastPoint.x &&
        ownProps.coordinates.z !== pastPoint.z);

      pastPoint = route.points[pointIndex];
    }
  }

  return {
    center: map.center,
    edges,
    routes,
    tiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveTile: (coordinates) => dispatch(setActiveTile(coordinates)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HexCell);
