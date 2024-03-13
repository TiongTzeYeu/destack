# Destack 🔌 Embrace design. Own the stack.

Build landing pages visually right in your React or Next.js projects. Deploy them zero further configuration!

**🏭 Examples:** [prettyfunnels.com](https://www.prettyfunnels.com/landing), [getdestack.com](https://www.getdestack.com/)

# Announcements

📣 [10/10/2023] Destack v3 is in beta. This release is an rewrite of the editor from scratch. Check it out at [destack-starter-beta](https://github.com/LiveDuo/destack-starter-beta). More at [pull/103](https://github.com/LiveDuo/destack/pull/103) and [issues/104](https://github.com/LiveDuo/destack/issues/104).

📣 [13/06/2023] Three more themes have been added [Preline](https://preline.co/), [Flow Bite](https://flowbite.com/) and [Flow Rift](https://flowrift.com/).

📣 [04/02/2023] Version 2 has just been released on NPM. Try it out with destack@2 or destack@latest.

📣 [17/12/2022] Destack v2 is now in beta. It's a major rewrite that comes new custom page builder based on Craft.js. Check it out at [destack-starter-beta](https://github.com/LiveDuo/destack-starter-beta). More at [pull/62](https://github.com/LiveDuo/destack/pull/62) and [issues/22](https://github.com/LiveDuo/destack/issues/22).

📣 [11/10/2022] Destack now supports multiple themes. Two new themes have been added [Meraki UI](https://merakiui.com/) and [Hyper UI](https://www.hyperui.dev/).

[![Tutorial](https://raw.githubusercontent.com/LiveDuo/destack/main/assets/youtube/craft.jpg)](https://www.youtube.com/watch?v=JTfUCCGaUd4 "Tutorial")

# What's Destack?

It's a tool to build landing pages within your [React](https://reactjs.org/) or [Next.js](https://nextjs.org/) projects. Destack includes multiple components from [Tailblocks](https://tailblocks.cc/), [Meraki UI](https://merakiui.com/), [Hyper UI](https://www.hyperui.dev/), [Preline](https://preline.co/), [Flow Bite](https://flowbite.com/) and [Flow Rift](https://flowrift.com/).. It also supports image uploads and form submissions.

*Destack helps you stop worrying about marketing pages so you can focus on your project.*

# Themes

Destack now supports theme selection.

<table border="0">

 <tr>
    <td width="48%">
    <img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/themes/screenshot-craft.png"/>
    Theme selection
</td>
    <td width="48%"><img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/themes/screenshot-meraki-ui.png"/>Meraki UI (<a href="https://merakiui.com/components">Components</a>)</td>
 </tr>
  <tr>
    <td width="48%"><img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/themes/screenshot-hyper-ui.png"/>Hyper UI (<a href="https://www.hyperui.dev/components/marketing">Components</a>)</td>
    <td width="48%"><img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/themes/screenshot-tailblocks.png"/>Tailblocks (<a href="https://tailblocks.cc/">Components</a>)</td>
 </tr>
  <tr>
    <td width="48%"><img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/themes/screenshot-preline.png"/>Preline (<a href="https://preline.co/examples.html">Components</a>)</td>
    <td width="48%"><img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/themes/screenshot-flowrift.png"/>Flow Rift (<a href="https://flowrift.com/">Components</a>)</td>
 </tr>
 <tr>
    <td width="48%"><img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/themes/screenshot-flowbite.png"/>Flow Bite (<a href="https://flowbite.com/blocks/">Components</a>)</td>
 </tr>
</table>


### Contribute (add a new theme)

There are many open source Tailwind themes that Destack can support. If you want to help adding a new theme create a new topic in [discussions](https://github.com/LiveDuo/destack/discussions) or reach out to me on [twitter](https://twitter.com/andreas_tzionis).

# Features

#### 🧱 Powerful Blocks

There are hundreds of well designed and heavily functional blocks from [Tailblocks](https://tailblocks.cc/), [Meraki UI](https://merakiui.com/), [Hyper UI](https://www.hyperui.dev/), [Preline](https://preline.co/), [Flow Bite](https://flowbite.com/) and [Flow Rift](https://flowrift.com/).. Supports Tailwind's theme colors ie. Red, Yellow, Green, Blue, Indigo, Purple & Pink.

#### 🃏 Delightful Builder

Powered by [Craft.js](https://craft.js.org/), a minimal page-builder framework. The builder was created with simplicity in mind and aims to be quickest way to build a landing page for a side-project.

#### 🕹 Data Ownership

Destack stores all your assets on Github, Bitbucket etc through the editor. There are no external dependencies to manage or worry about.

#### 🏞 Assets & Forms Support

Stores the images uploaded in the editor in your repository & displays them when needed on production. Also supports HTML and API form submission out of the box.

#### 👩🏻‍💻 Easy Setup & Deployment

Works existing & new [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) projects. Requires minimal setup and no extra configuration to deploy your landing pages to production.

# Getting Started

### With a new Next.js project:

- Fork the [destack-starter](https://github.com/LiveDuo/destack-starter) project

- OR deploy a project to Vercel: [<img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/deploy/vercel_big.png" width="92">](https://vercel.com/new/git/external?repository-url=https://github.com/LiveDuo/destack-starter&project-name=destack-starter&repository-name=destack-starter)

- OR preview it online with Gitpod: [<img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/deploy/gitpod_big.png" width="92">](https://gitpod.io/#https://github.com/LiveDuo/destack-starter)

### With an existing Next.js project:

##### 1. Install Destack on your Next.js project

```sh
npm i destack
```

##### 2. Setup the builder endpoint

Create `pages/api/builder/handle.js` and add the following:
```js
export { handleEditor as default, config } from 'destack/build/server'
```

##### 3. Then create a new page

On any Next.js page you want to setup Destack:
```js
export { getStaticProps } from 'destack/build/server'
export { ContentProvider as default } from 'destack'
```

<details>
<summary>How to use the legacy page-builder (Grapesjs)</summary>
<br>

```js
import { ContentProviderGrapes } from 'destack'
import 'grapesjs/dist/css/grapes.min.css'

export { getStaticProps } from 'destack/build/server'

export default function Page(props) { 
    return (
        <div style={{height: '100%'}}>
            <span>Hello world</span>
            <ContentProviderGrapes {...props}/>
        </div>)
}
```
</details>

### With a new React.js project:

- Fork the [destack-react-starter](https://github.com/LiveDuo/destack-react-starter) project

- OR deploy a project to Vercel: [<img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/deploy/vercel_big.png" width="92">](https://vercel.com/new/git/external?repository-url=https://github.com/LiveDuo/destack-react-starter&project-name=destack-react-starter&repository-name=destack-react-starter)

- OR preview it online with Gitpod: [<img src="https://raw.githubusercontent.com/LiveDuo/destack/main/assets/deploy/gitpod_big.png" width="92">](https://gitpod.io/#https://github.com/LiveDuo/destack-react-starter)

### With an existing React.js project:

##### 1. Install Destack on your React.js project

```sh
npm i destack
```

##### 2. Setup the builder endpoint

In `package.json`:
- Replace the "start" script with `destack -d \"react-scripts start\"`
- Then, replace the "build" script with `destack -b \"react-scripts build\"`

##### 3. Then create a new page

In any React.js component you want to setup Destack:
```js
export { ContentProviderReact as default } from 'destack'

```

<details>
<summary>How to use the legacy page-builder (Grapesjs)</summary>
<br>

```js
import 'grapesjs/dist/css/grapes.min.css'

import { ContentProviderReact } from 'destack'

const App = () => {
  return (
    <div style={{ height: '100%' }}>
      <span>Hello world</span>
      <ContentProviderReact />
    </div>
  )
}
export default App
```
</details>

# How it works

🛠 Destack is composed of two main components, the first is a React component that shows the editor or the generated page and the second is a Next.js API route that saves your progress to your repository.

👨‍💻 When you run the project in `development` (ie. with `npm run dev`) the React component understands it from the `NODE_ENV` environment variable and shows you the editor where you can create your landing page visually. 

💡 Every change you make goes to the API route which updates a `default.json` file. That file contains the HTML for your landing page and it remembers how you structure your page so you can come back later to update it. 

🚀 When is time to go in `production` (ie. do `npm run build`  or deploy to Vercel) the React component reads `NODE_ENV` again and statically generates the HTML version of the page you build in the editor from the `default.json` file Destack created for you earlier.

> Note: The above description is for Next.js. In React.js, the `destack -b` script creates an API route similar to the one described above that handles template changes and file uploads in development. In production the `destack -d` script copies `default.json` to the `public` folder and builds a static version of the page.

More on the project's architecture [here](assets/design/overview.md).

# How to's & guides

### Adding an HTML form

- Drop a block that contains a form
- Click on the form & head to components settings
- Add form URL & check `async` if don't want a redirection
- To handle a `async` forms you can create an API route
  - Next.js: Create a file in [api/submit.js](https://github.com/LiveDuo/destack/blob/main/dev/nextjs-project/pages/api/submit.js)
  - React.js: You will need a seperate Node.js server listening on `/api/submit`

### Uploading images

- Drop a block that contains an image or use image block
- Click on an image to open the upload modal
- Select the image you want to update and click on it to add it to the page
- Note: Images are uploaded to `public/uploaded` with their original filenames

# Multi-page Support

### Next.js

Create a new page file in `pages` folder of the Next.js project and import `destack` as described in [#with-an-existing-nextjs-project](#with-an-existing-nextjs-project) to various pages.

### React.js

Install a routing library such as `react-router-dom` or `router-tutorial` in the React.js project and import `destack` as described in [#with-a-new-reactjs-project](#with-a-new-reactjs-project) to various routes. For more info check out [destack-react-starter](https://github.com/LiveDuo/destack-react-starter).

# Contributing to the project
  See [CONTRIBUTING.md](CONTRIBUTING.md)
<br>

# How this project came to existence

This project was nothing that was planned and design in depth in advance. Instead it was evolved out of the need and enjoyment of using some amazing tools and prototype quickly. These projects heavily improved my developer life and a few of my friends'.

> Next.js 🅧 ➕ Tailwind CSS 🍃 ➕ Craft.js 🧶 = 💣💣

Please go and show these projects some love (⭐️). 

Don't forget to check out [Tailblocks](https://tailblocks.cc/), [Meraki UI](https://merakiui.com/), [Hyper UI](https://www.hyperui.dev/), [Preline](https://preline.co/), [Flow Bite](https://flowbite.com/) and [Flow Rift](https://flowrift.com/)., without their amazing open sourced components none of this would have been possible.  

# Contributors
<a href="https://github.com/liveduo/destack/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LiveDuo/destack" />
</a>  

Made with [contributors-img](https://contrib.rocks).  

# Upcoming Tasks
- [ ] Add admin UI as a Next.js route






## Instrument of develop New Themes
- lib/theme store all the functional blocks (eg.HyperUI, Preline, Flowbite) and their components.  
- Add new theme changes in lib\theme.

1. Open folder for create new functional blocks and components file

2. Then, Initialize new themes in const theme in lib\client\craft\store\index.tsx and lib\client\vanilla\editor.tsx


## Develop a export button
- The export button will appear after click the preview button.
- When users click the button, it triggers the handleExport function, which exports the content of the components to an HTML file.

- By developing this export button, it contains two files to be modified.

# In lib/client/vanilla/editor.tsx
1. Initialize a const handleExport in Function Editor

const handleExport = () => {
    const html = document.documentElement.outerHTML;
    const blob = new Blob([html], {type: 'text/html'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'page.html');
   link.click();
};
 

2. Add a button after click the preview button

   {isPreview && (
            <button
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 ml-6 mr-6 rounded-md flex items-center"
            style={{ marginLeft: isPreview ? 'auto' : '' }}
            onClick={() => handleExport()}
          >
            <ComputerDesktopIcon className="h-4 w-4 mr-2" />
            Export
          </button>
          )}

# In lib/build/browser/index.js
1. Initialize a const handleExport in Function Editor
 
const handleExport = () => {
    const html = document.documentElement.outerHTML;
    const blob = new Blob([html], {type: 'text/html'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'page.html');
   link.click();
};

2. Add a button after click the preview button

isPreview &&   /* @__PURE__ */ React__default["default"].createElement(
    "button",
    {
      className: "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 ml-6 mr-6 rounded-md flex items-center",
      style: { marginLeft: isPreview ? "auto" : "" },
      onClick:() => handleExport(true)
    },
    /* @__PURE__ */ React__default["default"].createElement(PencilIcon$1, { className: "h-4 w-4 mr-2" }),
    "Export"
  )


## Below is a brief of some important file.         
## 1. lib\client\craft\store\index.tsx 
- This file is about a React context setup for managing themes and components within a UI development environment.
- It provide functionalities to select themes, fetch components data, and maintain state related to themes and components.


## 2. lib\client\vanilla\editor.tsx
- This file is created a react component named Editor.

- The Editor component to provide a comprehensive interface for building and editing UI components visually, with features like drag-and-drop, component manipulation, and previewing.

1. Theme Selection: Users can select different themes from a dropdown menu, which dynamically loads components associated with the selected theme.

2. Category Display: Components are categorized, and each category can be expanded or collapsed by clicking on its header. Components within each category are displayed as draggable images.

3. Canvas Area: This is where users can drag and drop components to build their web page. Components can be dropped onto the canvas, and their corresponding HTML markup is added to the canvas.

4. Preview Mode: Users can toggle between an editing mode and a preview mode. In preview mode, the editor interface is hidden, and users can view their web page as it would appear to visitors.

5. Component Manipulation: Users can manipulate components on the canvas, such as moving them up or down in the stacking order, deleting them, or editing their properties.

6. Dialogs for Element Editing: Dialogs are provided for editing specific types of elements, such as images, buttons, links, and SVG elements.

7. Event Handling: Various event handlers are used to respond to user interactions, such as mouse movements, clicks, drag-and-drop actions, etc.


## 3. e2e\dev\dev.spec.ts 
- This file is to testing that the project with drag-and-drop functionality and interaction with various UI components. 

# Test 1 - Should contain the editor
   - It navigates to the homepage.
   - It checks whether the editor element with the ID `#editor` exists on the page.

# Test 2 - Should drag and drop a component
   - It navigates to the homepage.
   - It clicks on a category to open it.
   - It drags an image component from the category and drops it onto the editor.
   - It verifies the appearance of a specific text after the drop.
   - It hovers over the dropped component and triggers a delete action.

# Test 3 - Should add an image to renderer
   - It navigates to the homepage.
   - It clicks on a category to open it.
   - It drags an image component from the category and drops it onto the editor.
   - It interacts with the image dialog, replacing the image with a new one.
   - It verifies the presence of the uploaded image.
   - It removes the dropped component and the uploaded image afterward.


## 4. dev\nextjs-project\data\default.html 
- This file contains the HTML and CSS for landing page.
- When adding a new component to a form, default.html automatically generates code for that component.
- When a component is removed from a form, the code is automatically removed from default.html.


## 5. llib/build/browser/index.js
The file sets up a collection management system within a React application, featuring components for managing and rendering collections of items. It includes utility functions that establish a focus scope, confining focus within a specific container. 

Furthermore, the page handles dialogs for image uploading and replacement, managing the state for various button properties like URL, email, submission URL, submission method, etc.

Lastly, the code incorporates an editor interface for designing web pages. The main component renders the editor interface and encompasses functionalities such as loading themes, page content, and saving content. 

