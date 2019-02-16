import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Examples    from '@v/Examples/Examples';
import DeleteLink  from '@v/Examples/DeleteLink';
import EditLink    from '@v/Examples/EditLink';



class ExampleRouter extends Component {

  render() {
    console.log("this is");
    return (
        <Switch>
          <Route path='/'    component={Examples} exact />
          <Route path='/examples'    component={Examples} exact />
          <Route path='/examples/delete/:id' component={DeleteLink} />
          <Route path='/examples/edit/:id' component={EditLink} />
      </Switch>
    );
  }

}


export default ExampleRouter;
