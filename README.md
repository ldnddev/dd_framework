<a href="https://framework.ldnddev.com" target="_blank"><img src="https://i.imgur.com/PQ9ljGe.png" width="75px" /></a>
# ldnddev Framework

### Project Description
This project is an ongoing WIP for a full framework that can be used on all
ldnddev websites. This framework should include simple styling to allow for
full creative control.

### Setup local development
The following steps will help in setting up the local environment for this
project.
```bash
cd ~/projects/
git clone git@bitbucket.org:ldnddev/framework.ldnddev.com.git
cd ~/projects/framework.ldnddev.com
```
Start your local env.
```bash
lando rebuild -y
```

## Local dev tooling commands
```bash
lando grunt build
lando grunt dev
lando grunt favicon
lando grunt sync
```
`lando grunt dev` will build, watch and sync.

----

## Contributing
For major changes, create a branch that you will work in. Once fully tested,
the branch can be merged into master.

## Updating NPM package
Once updates have been approved and merged into master, they can be merged
into the npm-package branch. This branch has a few minor edits to allow for
projects to pull in and override where needed. Be sure to update the following file
were needed.
### Increment the version number.
```bash
package.json
```
### Add new components
```bash
/source/scss/dd-framework.scss
```
*You will need to add any newly created components to this file so they will be
part of the build process.*


You can then submit the package via the following command.
```bash
lando npm publish --access public
```
----
The `./web` directory contains a PHP-based component library and demo site for the ldnddev Framework, a modular CSS/SCSS framework designed for building websites with reusable UI components. Here's a breakdown of its structure and purpose:

## Overall Architecture
- **Framework Type**: Atomic design-based CSS framework with PHP components
- **Build System**: Uses Grunt for SCSS compilation, JS concatenation/minification, and asset management
- **Technology Stack**: PHP (server-side), SCSS (styling), JavaScript (interactivity), HTML5

## Key Directories and Files

### Core Structure
- **`index.php`**: Main documentation page explaining the framework's atomic structure (components, elements, layouts, regions, vendors)
- **`includes/`**: Shared PHP includes like `head.php` (HTML head with meta tags and CSS link), `header.php` (site header with logo and navigation), `footer.php`, and `navigation.php`

### Components (`components/`)
Reusable UI modules, each in separate PHP files:
- **Layout Components**: `dd-section.php`, `dd-grid.php`, `dd-alternating.php`
- **Content Components**: `dd-hero.php` (hero banners with images and CTAs), `dd-card.php`, `dd-blockquote.php`
- **Interactive Components**: `dd-tabs.php` (tabbed content with accessibility features), `dd-accordion.php`, `dd-search.php`
- **Feedback Components**: `dd-alert-*.php` (success, error, warning, info alerts)
- **Utility Components**: `dd-cta.php`, `dd-banner.php`, `dd-milestones.php`

Example from `dd-tabs.php`:
```php
<div class="dd-tabs" data-id="001">
  <div class="dd-tabs__navigation">
    <button class="dd-tabs__menu-item -active" role="tab">Link 1</button>
    <!-- More tabs -->
  </div>
  <div class="dd-tabs__items">
    <div class="dd-tabs__item -active" role="tabpanel">Tab content</div>
  </div>
</div>
```

### Elements (`elements/`)
Basic UI elements:
- `dd-buttons.php`: Button styles and variants
- `dd-forms.php`: Form inputs, selects, etc.

### Layouts (`layouts/`)
Page-specific layouts:
- Header variants (`dd-header-a.php`, `dd-header-b.php`)
- Footer variants (`dd-footer-*.php`)

### Assets (`assets/`)
Compiled and static assets:
- **`css/`**: Compiled SCSS (`style.css`, `style.min.css` with sourcemaps)
- **`js/`**: Concatenated JS (`main.js`, `main.min.js`)
- **`vendors/`**: Third-party libraries (FontAwesome, Slick carousel, Colorbox, AOS animations, Axe accessibility testing)
- **`webfonts/`**: FontAwesome font files
- **`imgs/`**, **`favicon/`**: Static images and favicons

### Pages (`pages/`)
Demo pages for each component (e.g., `dd-tabs.php` shows the tabs component in action)

### MJML Builder (`mjmlbuilder/`)
A separate TypeScript-based email template builder using GrapesJS, with components for MJML email templates.

## Build and Development
The framework uses Grunt tasks defined in the root `Gruntfile.js`:
- `lando grunt build`: Compiles SCSS, concatenates JS, copies vendors
- `lando grunt dev`: Builds + watches files + BrowserSync for live reloading
- `lando grunt favicon`: Generates favicons from source image

## Key Features
- **Responsive Grid System**: Uses classes like `dd-g` (grid), `dd-u-1-1` (full width), `dd-u-lg-12-24` (half width on large screens)
- **Accessibility**: ARIA attributes, semantic HTML, screen reader support
- **Modular SCSS**: Atomic structure with components, elements, regions, partials
- **Vendor Integration**: FontAwesome icons, AOS animations, accessibility testing with Axe
- **Component Variants**: BEM-style classes with modifiers (e.g., `dd-button -primary`)

----

### Change Log
*01152025*
* Added new version of fontawesome

*08012024*
* Added [AOS](https://michalsnik.github.io/aos/) for animations
* Removed dark theme so it can be added only when needed

----

## Software Requirements
- [Docker](https://docs.docker.com/get-docker/)
- [Lando](https://github.com/lando/lando/releases)
- [GIT](https://git-scm.com/downloads)
- [GitKraken](https://www.gitkraken.com/download) -optional


## License
- [MIT](https://choosealicense.com/licenses/mit/)
