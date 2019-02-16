import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Examples    from './views/Examples/Examples';
import DeleteLink  from './views/Examples/DeleteLink';
import EditLink    from './views/Examples/EditLink';



class ExampleRouter extends Component {

  render() {
    console.log("this is");
    return (
        <Switch>
        <Route path='/examples'    component={Examples} exact />
          <Route path='/examples/delete/:id' component={DeleteLink} />
          <Route path='/examples/edit/:id' component={EditLink} />
      </Switch>
    );
  }

}


export default ExampleRouter;
