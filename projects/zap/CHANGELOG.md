# Changelog

## 0.0.0-alpha.8

- **Fixed**: Checkbox shape and size are now working correctly.
- **Fixed**: Input help text global styling is now working as expected.
- **Fixed**: Tooltip content element is now removed from the DOM on initialization, only visible on hover.
- **Fixed**: Global style for padding is fixed across all components.
- **Feature**: Checkbox `id` made required; shows warning if user does not provide `id`.
- **Feature**: Accessibility-related features such as `role`, `aria`, and `aria-labels` added to Checkbox.
- **Enhanced**: Accordion accessibility improved with additional `role`, `aria`, and `aria-labels` support.

## 0.0.0-alpha.7

- Fixed: Tooltip content position adjusted; now wrap removed as it will be based on user preference.
- Fixed: Global stylings are now working
- Enhanced: Added check for valid `sizeValue` in `getSizeVariables` function
- Fixed: Compact size for `select` now works with icon; removed `chip` padding Y for compact select.
- Fixed: Scrollarea is now working with date picker calendar

## 0.0.0-alpha.6

- Latest release of alpha version
- Fixed: Swipe is disabled for component only toast elements
- Enhanced: Removed padding and marging from title and text elements of toast component

## 0.0.0-alpha.5

- Fixed: Maximum width of `18.75rem` used for toast text element starting from screen size sm
- Fixed: Minimum width of `25rem` used for toast component starting from screen size sm
- New: Added support for custom `duration` of the toast component

## 0.0.0-alpha.4

- Fixed: Resolved console error related to Angular Control Value Accessor implementation
- Fixed: Resolved Tailwind plugin configuration issues in demo application
- Enhanced: Added customization support for dialog component's close and confirm button text
- New: Introduced toast component with notification functionality
- New: Toast service added with animated notification functionality. Currently implemented for toast components, with plans to extend to alerts in future releases

## 0.0.0-alpha.3

- Latest release of alpha version

## 0.0.0-alpha.2

- Fixed issue with `tailwind` base plugin not being able to find the css

# 0.0.0-alpha.1

- Alpha release
