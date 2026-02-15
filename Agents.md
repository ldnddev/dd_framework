# Agents.md - Guidelines for AI Coding in the DD Framework

## Overview

The DD Framework is a modular front-end framework designed for building responsive, accessible web components. It uses SCSS for styling, JavaScript for interactivity, and HTML templates for structure. Components are compiled via Grunt and must be wrapped in the `dd-section` component for proper layout and styling. The only component that is exempt from this is `dd-hero`.

This document provides guidelines for AI agents (like myself) to ensure consistent, maintainable code when working with this framework.

## File Structure

The framework follows a specific directory structure:

- `source/scss/`: SCSS source files
  - `style.scss`: Main entry point importing all partials
  - `partials/`: Core utilities (_variables.scss, _mixins.scss, etc.)
  - `components/`: Component-specific styles (_dd_component.scss)
  - `elements/`: Base element styles
  - `regions/`: Layout region styles
  - `layouts/`: Page layout styles
  - `drupal-components/`: CMS-specific component styles
- `source/js/`: JavaScript source files
  - `main.js`: Main entry point initializing libraries like AOS
  - `components/`: Component-specific JavaScript (_dd_component.js)
  - `vendors/`: Third-party libraries
- `web/templates/`: HTML component templates
  - `components/`: Reusable component HTML
  - `elements/`: Element HTML
  - `layouts/`: Layout HTML
- `web/pages/`: Example pages demonstrating components
- `Gruntfile.js`: Build configuration
- `package.json`: Dependencies and scripts

## Build Process

The framework uses Lando for creating the local development environment and Grunt for compilation:
**All npm commands run inside the environment must start with 'lando' (eg. lando grunt build)**
- **SCSS Compilation**: `grunt-dart-sass` compiles `source/scss/style.scss` to `web/assets/css/style.css` (expanded) and `style.min.css` (compressed)
- **JavaScript Concatenation/Uglification**: Combines `source/js/vendors/**/*.js`, `source/js/components/*.js`, and `source/js/main.js` into `web/assets/js/main.js` and `main.min.js`
- **Watch Mode**: `grunt watch` monitors changes and rebuilds automatically
- **BrowserSync**: `grunt browserSync` for live reloading during development
- **Favicon Generation**: `grunt realFavicon` generates favicons from `source/favicon/favicon.png`

Run `grunt` for a full build, or `grunt watch` for development.

## Component Creation

### HTML Structure
- All components must be wrapped in a `dd-section` element for proper layout except for `dd-hero`
- All availible components live in `/web/templates/components/`
- Use BEM methodology: `.dd-component`, `.dd-component__element`, `.dd-component--modifier`
- Prefix all custom classes with `dd-`
- Components go in `web/templates/components/`
- Use semantic HTML elements where possible

### SCSS Structure
- Create `_dd_component.scss` in `source/scss/components/`
- Import in `style.scss` under the components block
- Use `@use` for imports (modern SCSS)
- Follow BEM: `.dd-component { &__element { & .-modifier {} } }`
- Use variables from `partials/_variables.scss`
- Include mixins from `partials/_mixins.scss`

### JavaScript Structure
- Create `_dd_component.js` in `source/js/components/`
- Use vanilla JavaScript
- Initialize on DOMContentLoaded or via event listeners
- Follow the pattern in existing components (e.g., modal, tabs)
- Ensure accessibility (ARIA attributes, keyboard navigation)

### Adding a New Component
1. Create HTML template in `web/templates/components/dd-newcomponent.html`
2. Create SCSS file `source/scss/components/_dd_newcomponent.scss` and import in `style.scss`
3. Create JS file `source/js/components/_dd_newcomponent.js` if needed
4. Add example/demo in `web/pages/dd-newcomponent.html`
5. Test build with `lando grunt build`

## Coding Standards

- **Indentation**: Use 2 spaces, never tabs, in all files (SCSS, JS, HTML, PHP, TWIG)
- **Naming**: BEM methodology with `dd-` prefix
- **SCSS**: Use `@use` instead of `@import`, follow existing variable/mixin usage
- **JavaScript**: Clean, readable code; use modern ES6+ features where appropriate
- **HTML**: Semantic, accessible markup
- **Accessibility**: Ensure WCAG compliance; use Axe for testing

## Testing

- **Visual Regression**: Use BackstopJS (`backstop test`) to ensure UI consistency
- **Accessibility**: Run Axe audits on components
- **Cross-browser**: Test in supported browsers (defined in project requirements)

## Deployment

- Compiled assets go to `web/assets/`
- Use version control (Git) for all changes
- Follow semantic versioning in `package.json`
- Deploy `web/` directory to production

## Best Practices

- Always wrap components in `dd-section`
- Maintain consistency with existing components
- Document any new components with comments
- Test thoroughly before committing
- Use the framework's color variables for consistency (see Agent-UI-Colors.md for WCAG notes)

This framework is designed to be maintainable and scalable. Follow these guidelines to ensure AI-generated code integrates seamlessly.
