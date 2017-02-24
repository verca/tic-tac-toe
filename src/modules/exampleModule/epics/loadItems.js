import { Observable } from 'rxjs';
import Actions from '../actions/basicActions';
import { fetchItems } from '../utils/apiCalls';

// This epic handles LOAD_ITEMS action: calls
// ajax get request and processes data or errors
export default action$ => action$
  .ofType(Actions.LOAD_ITEMS)
  .mergeMap((/* action */) => fetchItems())
  .map(response => Actions.displayItems(response.data))
  .catch(failedAction => Observable.of({
    type: 'PROCESS_AJAX_ERROR',
    payload: failedAction,
  }));
