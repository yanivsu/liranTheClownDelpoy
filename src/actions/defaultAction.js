import { getApi, postApi, putApi } from "../helpers/apiUtils";
import * as enums from "../helpers/enums";
//----------------- Async Action functions ----------//

export function loadInitData() {
  return function (dispatch) {
    return getApi(enums.serverEnums.API + enums.serverEnums.GETDATA)
      .then(({ data }) => {
        dispatch({
          type: enums.compassEnums.COMPASS_FETCH_DATA,
          payload: data,
        });
      })
      .catch((error) => console.log("loadData Error no data", error.message));
  };
}
