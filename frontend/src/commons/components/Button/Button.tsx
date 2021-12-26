import { MouseEventHandler } from 'react';

interface IProps {
  btnText: string;
  click: MouseEventHandler;
  align: string;
}
function YellowButton(props: IProps) {
  const { btnText, click } = props;

  /**
   * Returns className on the basis of alignment property
   * @returns classname
   */
  const getClassName = () => {
    let className = 'button';
    if (props.align === 'center') {
      className += ' center';
    } else if (props.align === 'right') {
      className += ' right';
    }
    return className;
  };

  return (
    <button type="button" className={getClassName()} onClick={click}>
      {btnText}
    </button>
  );
}
YellowButton.defaultProps = {
  btnText: 'Reset',
  click: {},
  align: '',
};
export { YellowButton };
