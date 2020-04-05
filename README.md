# we-use-cookies-banner
A light &amp; flexible npm package for making your website GDPR compliant. Built as a polymer v2 web component! 🔥  

<br/>

# Usage
_(Note: Not yet ready for usage)_

This light & flexible component can be used in _ANY_ website. That means regardless of whether you use React, Angular, Vue, vanilla JavaScript, etc... you can easily use this library!


First, install the npm package in your project:
```
npm install we-use-cookies-banner --save
```

Then add the component in the root HTML file for your site:
```
<we-use-cookies-banner/>
```

The banner exposes various component attributes for customization. All attributes are optional and have default values.

---

- `lock-to` - Whether the banner should be locked to the top or bottom of the window.
   
   ### Valid values: `bottom` | `top` 

   ### Default value: `bottom` 

---

- `privacy-policy` - The url for the "Privacy Policy" link in the text.

   ### Default value: `https://gdpr.eu/wp-content/uploads/2019/01/Our-Company-Privacy-Policy.pdf` 

---

- `text` - The message of text displayed in the banner. 

    ### Default value: `This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy. \n \n If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.` 

---

- `accept-button-label` - The label on the accept button.

- ### Default value: `Accept`

---

- `decline-button-label` - The label on the decline button.

- ### Default value: `Decline`

---

- `show-decline-button` - Whether to show or hide the decline button.

- ### Default value: `true`

---

<br/>


# Customizing Styles

By defining these css classes in your code you can override the default css styles of the component.

- `we-use-cookies-banner-container`
- `we-use-cookies-banner-text`
- `we-use-cookies-banner-accept-btn`
- `we-use-cookies-banner-decline-btn`

<br/>

# Disclaimer
Having a "we use cookies" banner on your site is one step towards being GDPR compliant, but really it's about more than just the banner. Being fully GDPR compliant involves proper handling of your users' data, and it's on you to do that properly!

<br/>

# Contributing
We'd love to have open-source contributors working on this project with us! Feel free to clone this repository and navigate into the `project` directory to see the full source code for this project. More details for working on this project can be found in the README file there.  

<br/>

# Scaffolding
This project was proudly intialized using the [easy-wc yeoman generator](https://github.com/Westbrook/generator-easy-wc). 🔥