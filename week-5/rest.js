/** REST API INTRO
 * REST is a way of communicating, using a combination of URLS and what are called "verbs" to make stuff happen 
 * You use REST all the time when serving the rest, but most people are only aware of the URL portion
 * Typically in a browser, humans make a request to a URL then html/css are returned 
 * Machines can also make request to url and ask for resources, the typical return is formatted in JSON
 * i.e the Twitter app will make a request to the Twitter api and its formatted before its returned to you 
 * Combining HTTP verb with URL, an api can do many things
 * When a set of URL is designed to interact with a backend framework in this manner, its called a REST API
 * 
 */

/** REST DETAILED
 * REpresentational State Transfer (An abstraction)
 * REST is not HTTP
 * REST is an architectural style, with a set of constraints applied to the style
 * REST requires 6 constraints 
 * Client-Server: Separation of concern, allow for UI to independent of server, one backend can service many frontends 
 * Stateless: Communication between client and server must be stateless. This means that each request from client to server must contain all the necessary information to complete the transaction
 * Cache: When we build our API, it must not ignore caching.
 * Uniform Interface: In order have efficient caching in a network, components must be able to communicate via a uniform interface. 
 *  =>  Identification of resources: This means that any information that can be named can be a resource (image, document, a concept like a person or even a collection of other resources)
 *  => Manipulation of resources through representation: A resource can be represented in many different ways. For example as HTML, XML, JSON or even as a JPEG file.
 *  => Self Descriptive Messages: This means that a resource can be described in a request message as well as the server can respond with descriptive state messages.  I.E HTTP Headers / Response Code
 *  => Hypermedia must be the engine of the app: This really just means that the application should be driven by links, allowing clients to discover resources via hyperlinks.
 * Layered System: In a layered system, intermediaries, such as proxies can be placed between client and server utilising the web’s uniform interface.
 */

 /** HOW TO BUILD REST API
 * Use HTTP Properly
 * Build a Uniform Interface: Map your concepts to resources and assign the appropriate identifers A simple example would be a user database service. In such a service we can name two resources; user and users (collection resource). These resources could be identified with the /users and /user/{id} URIs in your API interface.
 * Drive your API with Hyperlinks: Use links to connect your resources 
 * Be aare of the REST architecture: For me, the main take away from building a RESTful API is that how important it is to understand the Internet and its underlying architecture.
 */

/** HTTP VERBS
 * GET 
 * POST 
 * PUT
 * DELETE
 */

/** CRUD
 * CREATE
 * READ
 * UPDATE
 * DELETE
 */