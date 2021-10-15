import React, { forwardRef, useContext } from 'react';
import classnames from 'classnames';
import RcForm from 'rc-field-form';
import type { FormInstance } from 'rc-field-form';
import { FormProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { FormContext } from './FormContext';
import { CellGroup } from '../cell';

const Form = forwardRef<FormInstance, FormProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('form', prefixCls);

  const { className, style, layout, footer, children, border, inset, colon, ...formProps } = props;

  return (
    <FormContext.Provider
      value={{
        layout,
        colon,
      }}
    >
      <RcForm className={classnames(bem(), className)} style={style} ref={ref} {...formProps}>
        <CellGroup border={border} inset={inset}>
          {children}
        </CellGroup>
        {footer && <div className={classnames(bem('footer'))}>{footer}</div>}
      </RcForm>
    </FormContext.Provider>
  );
});

export default Form;