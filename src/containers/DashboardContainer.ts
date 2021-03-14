import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux';
import { loadingSelector, peopleSelector } from '../redux/store/dashboard';

import Dashboard from '../components/Dashboard/Dashboard';

import { State } from '../redux/store/root';
import { fetchPeople, removePeople } from '../redux/actions/dashboard';
import { DispatchType } from '../utils/schemas/common';
import { tokenSelector, nameSelector } from '../redux/store/common';
import { removeAuthToken } from '../redux/actions/common';
import { Person } from '../utils/schemas/dashboard';

interface DashboardStateProps {
  people: Person | null;
  loading: boolean;
  token: string | null;
  userName: string | null;
}

interface DashboardDispatchProps {
  removePeopleFunc: () => void;
  fetchPeopleFunc: () => void;
  removeTokenFunc: () => void;
}

export interface DashboardProps extends DashboardStateProps, DashboardDispatchProps {}

const mapStateToProps: MapStateToProps<DashboardStateProps, DashboardProps, State> = (state) => {
  return {
    people: peopleSelector(state),
    loading: loadingSelector(state),
    token: tokenSelector(state),
    userName: nameSelector(state),
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<DashboardDispatchProps, unknown> = (dispatch: DispatchType) => {
  return {
    removePeopleFunc: () => dispatch(removePeople()),
    fetchPeopleFunc: () => dispatch(fetchPeople()),
    removeTokenFunc: () => dispatch(removeAuthToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
