import React from 'react';
import { PullRefresh, List, useSetState } from 'react-vant';
import type { ListInstance } from 'react-vant/es/list/PropsType';
import useRequest from '@ahooksjs/use-request';
import { ParamsType, ProListProps, ProListInstance } from './PropsType';

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

const ProList = <DataType extends Record<string, unknown>, Params extends ParamsType = ParamsType>(
  props: ProListProps<DataType, Params>,
  ref,
) => {
  const listRef = React.useRef<ListInstance>(null);
  const pagi = React.useRef({ pageSize: 10, current: props.initialPage ?? 1 });
  const req = useRequest(props.request, { manual: !props.request });
  const [state, updateState] = useSetState({ loading: false, done: false, list: [] });

  const reload = () => {
    updateState({ loading: false, done: false, list: [] });
    pagi.current = { pageSize: 10, current: props.initialPage ?? 1 };
  };

  const loadmore = () => {
    req.run({ ...props.params, ...pagi.current });
  };

  React.useImperativeHandle(ref, () => ({
    reload: () => null,
  }));

  return (
    <PullRefresh onRefresh={reload} {...props.pullRefresh}>
      <List ref={listRef} finished={state.done} onLoad={loadmore}>
        {state.list.length ? state.list.map(props.row) : null}
      </List>
    </PullRefresh>
  );
};

export default React.forwardRef<ProListInstance>(ProList);