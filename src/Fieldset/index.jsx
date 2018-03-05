import React                from 'react';
import PropTypes            from 'prop-types';

import Css                  from '../hoc/Css';
import Label                from '../Label';
import IconWithTooltip      from '../IconWithTooltip';
import Text                 from '../Text';

const Fieldset = ( {
    children,
    className,
    cssMap,
    errorMessage,
    errorMessageIsVisible,
    errorMessagePosition,
    hasError,
    isDisabled,
    label,
    onMouseOver,
    onMouseOut } ) =>

{
    const childrenText = typeof children === 'string' ?
        <Text>{ children }</Text> : children;

    return (
        <Css cssMap = { cssMap }>
            <fieldset
                className   = { className }
                onMouseOver = { onMouseOver }
                onMouseOut  = { onMouseOut }>
                { label &&
                    <Label element = "legend">
                        <IconWithTooltip
                            iconType         = "error"
                            iconPosition     = "right"
                            message          = { errorMessage }
                            tooltipIsVisible = { errorMessageIsVisible }
                            tooltipPosition  = { errorMessagePosition }
                            iconIsVisible    = { !isDisabled &&
                                                 !!errorMessage &&
                                                 hasError }>
                            { label }
                        </IconWithTooltip>
                    </Label>
                }
                { childrenText }
            </fieldset>
        </Css>
    );
};

Fieldset.propTypes =
{
    /**
     *  Fieldset label string or JSX node
     */
    label                 : PropTypes.node,
    /**
     *  Display as error/invalid
     */
    hasError              : PropTypes.bool,
    /**
     *  Tooltip message text (string or JSX)
     */
    errorMessage          : PropTypes.node,
    /**
    *  Display as disabled
    */
    isDisabled            : PropTypes.bool,
    /**
     *  Error Tooltip is displayed
     */
    errorMessageIsVisible : PropTypes.bool,
    /**
     *  Fieldset content (usually Checkboxes or Radios)
     */
    children              : PropTypes.node,
    /**
     *  onMouseOver callback function : ( e ) => { ... }
     */
    onMouseOver           : PropTypes.func,
    /**
     *  onMouseOut callback function : ( e ) => { ... }
     */
    onMouseOut            : PropTypes.func,

    /**
    *  Error message position relative to the icon
    */
    errorMessagePosition : PropTypes.oneOf( [
        'left',
        'right',
        'top',
        'bottom',
        'topLeft',
        'topRight'
    ] )
};

Fieldset.defaultProps =
{
    infoMessage           : '',
    hasError              : false,
    errorMessageIsVisible : false,
    errorMessagePosition  : 'top',
    cssMap                : require( './fieldset.css' )
};

export default Fieldset;
