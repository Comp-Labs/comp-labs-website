import React from 'react';
import clsx from 'clsx';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import Button from "@mui/joy/Button";
import { CssVarsProvider } from '@mui/joy/styles';
function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}) {
  const element = (
    // <CssVarsProvider>
    // <Button
    //   color="neutral"
    //   onClick={() => { }}
    //   size="sm"
    //   variant="plain"
    // >
      <NavbarNavLink
        className={clsx(
          isDropdownItem ? 'dropdown__link' : 'navbar__item navbar__link',
          className,
        )}
        isDropdownLink={isDropdownItem}
        {...props}
      />
    // </Button>
    // </CssVarsProvider>
  );
  if (isDropdownItem) {
    return <li>{element}</li>;
  }
  return element;
}
function DefaultNavbarItemMobile({ className, isDropdownItem, ...props }) {
  return (
    <li className="menu__list-item">
      <NavbarNavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}
export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? 'menu__link--active' : 'navbar__link--active')
      }
    />
  );
}
