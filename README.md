
![image 91](https://github.com/aszab1/travelistik/assets/145586216/b1cf662f-a31b-4d8f-964e-2828738c73e6)

# ReadMe - Travelistik

**Description**

Traveslistik is a full-stack web application that allows users to view, like, and review travel inspirations, as well as create their own with recommendations. There is also a personal "bucket list" board feature to save future destinations. The travel inspirations primarily feature my own photos of various destinations I have personally visited. 

**Deployment link**

The project was deployed on Heroku, link can be found below: [Travelistik](https://travelistik-9cac9bf0df28.herokuapp.com/)

**Getting Started/Code Installation**



* Clone or download the repository
* Install all necessary dependencies by running ‘npm i’ in Terminal
* Start the backend server by running  ‘python manage.py runserver’ in virtualenvs
* Go to frontend folder using cd frontend terminal command
* Run the frontend using npm run dev

**Timeframe & Working Team **

I had 10 days to create a full stack application using Python and Django in the back-end, and JavaScript and React front-end. 

**Technologies Used**

Front-end



* React
* React Router
* JavaScript
* Sass/SCSS
* Bootstrap
* Chakra UI

Back-end



* Python
* Django
* Django REST Framework
* Django-Environ
* Psycopg2
* Simple JWT

**Brief**

Technical Requirements



* Build a full-stack application by making your own backend and your own front-end
* Use a Python Django API using Django REST Framework to serve your data from a Postgres database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Have a visually impressive design
* Be deployed online so it's publicly accessible.

Necessary Deliverables



* A working app hosted on the internet
* A link to your hosted working app in the URL section of your Github repo
* A git repository hosted on Github, with a link to your hosted project, 
* A readme.md file.

**Planning**

After reviewing the project brief, I began the planning process by creating a wireframe in Excalidraw to outline the user interface and components. This helped visualise and define the intended user stories and interactions upfront. As seen below, the wireframe maps out elements like the loading page, login, register, inspirations gallery and boards.




![jfmYJLqLv8LL9I07oaW4yvJmjmZRpvCTEL7HuZV1Xry_wnvDJ50la98aFShiRKsN5GwH1bLsHPkSNl3in873cCXCdWVTLd-cKYwn9oi3JX0N9sM2_m5vZsYSTJAf71hNX69iru_jKUmfUtE_HCKRWJk](https://github.com/aszab1/travelistik/assets/145586216/1eae0fb0-35ea-445c-bdf1-721c45ba0b48)

<img width="442" alt="mE81TZQOsRngSIulNMABfMq1bBtsC0rrQCHRUwzKufViceSvOxjYAGebNLgRNsjKXrW-v-qkGYxpLlAVgFxlBa8OO8JwVgi7tdSigGwl54490wcGgFuRGemd2JA0kv0MWpGLYXvX9ZGcWUKrQpyU0NA" src="https://github.com/aszab1/travelistik/assets/145586216/e9912c0d-0c4c-4e4f-883f-6114af186ed3">




Next, I designed a database entity relationship diagram (ERD) in Quick Database Diagrams. The ERD models the core entities needed for the application data along with their relationships. This includes entities like Users, Inspirations, Boards, Places, Categories, Reviews and more. A key design decision was to incorporate Likes directly within the Inspiration table rather than as a separate model



<img width="703" alt="JZd_sTafBP-bIn9ynGWmSWH31cxw4YPVCP48nVZFVBz_MfAVYzdriBnXkNceqOSUEDNljFRmHIf3BuV41jPT5eq-sLjYeU4zSTd3yW8Tzyt3z-3jl3l8D2kkMWVZgZgbCQ58ce0Qge3VU809OY3xD60" src="https://github.com/aszab1/travelistik/assets/145586216/cd16d91c-046f-4b8e-8bc7-bd8a78957039">



The relationships defined allow tracing Inspirations and Boards back to owning Users. Places can be associated with Categories. Inspiration content can also connect to Places and Reviews. Finally, Reviews and Likes are both linked to Users as well. Overall, the ERD formalises the data structure required for the major features, ensures appropriate foreign key links between entities, and informs database and API design. With planning completed, I could proceed confidently into development, building out the backend model definitions and API endpoints to match the designs.

**Build/Code Process**

I started with the back-end of the application, using Python and Django.The initial phase involved setting up a git repository with a development branch and incorporating all necessary dependencies.

I then defined the Models representing core entities like Users, Inspirations, Places, Categories and Boards.

The Inspiration model has the following key attributes and relationships: 



* places - A many-to-many relationship with Place models allowing an inspiration to link to multiple places
* owner - A foreign key to a User model to represent the user that created the inspiration
* likes - A many-to-many relationship with User models to allow users to like an inspiration
* reviews - A many-to-many relationship with Review models to allow reviews to be attached to an inspiration





<img width="423" alt="f2kDOMmXgstjfImiAocz2Gsk54l0Yxu4zV97LBPVCMx4TNPn4zADF_S0vtaoESIWJTeVTxrEX1ibk3smaFDUnmx5C-C_qKq9uyiZdZBB_EOkUW9M7uosGUDtQiO-k2A2___MEXYnkI-d71ajzH_4Xvc" src="https://github.com/aszab1/travelistik/assets/145586216/58b957ef-e9d8-4df6-85b4-6d21390392c4">

After registering the model in admin and adding it to the project settings, I created API endpoints for CRUD operations along with permissions and serializers to shape the data layer.





<img width="452" alt="xvEU3GtsSEYHlOf-MkOZHHOuc9F-XBL_TZkL1wXzayDcXki9z-8wKITwZiIiSXOmi459jJvj1V6GjGder1OuKp49_VZSIfDD_s5ojyqxKOgxWjG0pPdQ-TxaEqeajBxLpWqqtK36GX4X-ZgAUXlY0e8" src="https://github.com/aszab1/travelistik/assets/145586216/13339e6a-b14b-452c-9dd6-4dffde605234">

The URL patterns are the following: 


<img width="428" alt="sTaMR4mj-HdIERfVHTc6W0w_wS4INQXQnixxf94SpWj4vETuEYaefLXApwHlYGIDpTyPr8LP4hmprY-HKGd4PVO2WIHdzJZLno_M2Qbgt1Af4WbZFSoGMPGAn_og0do3LbSbQBgQQUZCcOAjALC47oo" src="https://github.com/aszab1/travelistik/assets/145586216/2ea2d6e9-e3ab-412f-99bf-93c0348b991d">




With a predefined API /inspirations/ in the project URLs: 



<img width="485" alt="2eZwNQh1LS_DsvxrtbNfc85cXPD0R1PNp8GNngPA7-5CtheMc9KHo9I_O7TDErHCQZGxcso1LVuriAmRS_dzgrRKUAmDU7-4NHhaXO_sTFoEC_22WRqw8sqwOKRy3FFzNZbNSSiKR5t6xcoi7JWonRw" src="https://github.com/aszab1/travelistik/assets/145586216/77edb76c-e821-4926-8604-aba017391d64">



I have added the following serializers. The  InspirationGetSerializer was created later on, to speed up the front-ends ‘home page’ and not load the places data, only in the single view.



<img width="486" alt="X-Y5jNYSB_UOb5gAmHrrCsjoUj54V0oX3l5rzVtanxM2LgQInghkaGlAIcR6MDnqb19NfJIxSOq6TqFd_-oXfiT7TONg_NhiTA6ST-7yWaKU5SOHzVJ7KI_P_j4egPc3dbHf4mCNyPTCWfGde2ankcg" src="https://github.com/aszab1/travelistik/assets/145586216/e38642ab-65d4-40d1-abf5-05037f7c3cb2">


After integrating other models in a similar fashion, I populated the backend data stored in Neon. This data consists of 15 destinations, with landmarks, restaurant and bar recommendations from the Places and Categories models. 

By the third day, I was ready to seed the database and transition to front-end development.

 

<img width="178" alt="kN7smjrPq9R3Utr3azGqnhERGdhoPRgNql4crVeSvw8DEsBzN3BneDTbjN38rfNlybDD-4DfAONh8y8q59IrMwXUfTfw8ZE7gUT44Ordwh6oc--GDZS6wPfr-AaXmYDfna5YsOTNYqhsSEY3k7WUo40" src="https://github.com/aszab1/travelistik/assets/145586216/eeeebe5a-715a-49e4-bb6a-c71da3ee857d">


Initial steps included installing dependencies and creating foundational components: Register, Login, and Logout, along with their authentication functionality and path configuration in main.jsx.

User experience flow was: post-registration, users are navigated to the login page and subsequently to the home page, which uses backend data to display inspirations.




<img width="456" alt="L-A27jjPnvlPMUVSrPT8Fe6Vci-W6laF_lC88Zls6x88yLLbN5UBmY8Ucs8ZYK64k6BJJDkPFWeNMBDeNO2MwWr3i4UUXh-2X9nNm8MOoo_lulKIRTU-DhvIX_N8Sq7W1-dRIPsHJoxfDiDEB7GWvuE" src="https://github.com/aszab1/travelistik/assets/145586216/afb7db93-7b00-487b-96bc-8e5244a2e751">





<img width="380" alt="TuInmkLfPvs8lJlQ3h1mxjMqtNKA7Mxd5OAfE2WBHi4qHi06UbVKAUxnamyjyS6EPvrSw6ktFRjl4cNedARGQB6AGLaWz0LvfarSP0y_OUCBQgTxs7j4xuqstSlZgkksmAw1635I2H0EYs0YXRYlyho" src="https://github.com/aszab1/travelistik/assets/145586216/46a12938-b714-4030-ae15-a8661df37344">




![bLMjIRTaylBOuxmA5Lwe46KTZwOa89tM5hwVWBCg92ve2XlFlCpB-qhYTGidQbpF9aMf5RWckBho5FCnA6BTWSQhBUUfzZEIJ3RyGI9ckdgHA8bYL269mNzRA8S0TsW0I6cd5vA0PpdRtR0s28chvKM](https://github.com/aszab1/travelistik/assets/145586216/fbb5a9d7-d8e7-4d9f-a391-b179d934d27c)



* The inspirations are mapped over to display the image, city and country. 

    
![lHcqy4Z33hqNWiOYNK74LmcyeQ_ui93x2EDqFr5YI3xxOAFNJ-7pWdPUKZl4HSeUxWX02C0kTnC8loIJSeYahXwW0zO2vh6tp4EfPlylgwTl5eO8aEhB_hl2CKx84R4tc8iYXByjDrPxdsdx7Qdp38g](https://github.com/aszab1/travelistik/assets/145586216/b26627eb-bc93-4687-a530-503e7d261700)



I am using Chakra to display the inspiration cards in a container / grid format. The sidebar facilitates the creation of new inspirations.
Inspiration cards incorporate buttons enabling users to like inspirations and open review forms 


    
![yAvl2yWUoe__We-9JX7j1gPL-4sPUakrHsLb2wITBOEEG7FdTqwn1w2FkPrDWEZnE-e3GxksIuvWcIJSzhZUv6nTdg0DbwgBcb_GauvEsSEK0qRUpUhPe3R4W8-79DoLNKwHH4QXLqGFvB9D8Ka0aL8](https://github.com/aszab1/travelistik/assets/145586216/8e4f0bbe-6f7c-419c-889c-2af9c04fa287)





Clicking “review” sets the selectedInspirationId and opens the review form modal. Besides the inspirationId it takes the isOpen and onClose props.
Handling likes updates state and makes a backend API call to update the DB




<img width="738" alt="NrqqPyYbcGOrMVQZ8Xazsf-15kSut4pe_eIAcHhNYnUDtbCeFpEBBXpQ0AzAqx7AwrZz2xPUGszPLfPOUL9JRylz19p3WsWIZYTX1T3Rg1rRcIznZqseJ75wYdxtdslNpoOCEVTiNuO2fOuAJFm9DXI" src="https://github.com/aszab1/travelistik/assets/145586216/c8757652-155c-47d5-8592-a0b6068b7792">



Once the user clicks on a single card it directs them to SingleInspiration.jsx: 


![AcTqvugMKuEVOl2Y1kZK4Nbzqt10JEYfCFXidMcL37eGRYwYCVAs-f5xfeUwhbzyX0Bx0joG4RHyW_D6PxbM_LiZZe0gFMptQpZJR8Ad1nW8ICnqV4j0gsf6kHdHH5sW_E9cgy58bBS38EyWUIaC4fg](https://github.com/aszab1/travelistik/assets/145586216/fe38f6ef-cd38-4cd1-aacd-dec9a74ce8c3)



It’s using the back-end’s data and its relationship to places and categories. 

Users are able to add their own travel inspirations on the home page (from the sidebar), including image upload, with CRUD functionality.




![mN3n6NRMT8sO0qiwXhuV8jUt_NHBneQiMZzEsZG6HpMMdGHSK_Es9id8YCu8O2LwMRlsbwV3-Qgop5bfS3AcxDbD9m7u6zrVDLzaNsTK63Nx0Ol8ZybxTGBUjUFbO81x3fVZx87U-6Lq1-MSwE81sTc](https://github.com/aszab1/travelistik/assets/145586216/61a7c9c7-f70c-4b8a-822c-50ab807b1cc5)


Newly added inspirations appear on the home page, and for inspirations created by users, editing and deletion options are available on the single inspiration page.

The App component manages the rendering of different sections based on the current page using React Router. If the user is on the loading page ('/'), it displays the login and registration. Otherwise, it renders the navigation bar, main content, and a loading indicator during navigation transitions. 

The Board component acts as a personal 'bucket list,' where users can add their wishlist. These boards are private, visible only to the creating user.

A user without a board is prompted to create one, and upon creation, the option to add more boards is presented.




![ODqDHoY0UBW9TDPjMUS_Kd___UrxX0-PJKRq754oWviinPI6fEvcgZcZSFVbsJOTGIZYIWiBSAB-H2QUlpmAQgak967c20Z4y3gg8QfRJBhK9XSL9EZcJ37--D7lnQbCDBqKA5LN0f6aYrfVf1Yml2Y](https://github.com/aszab1/travelistik/assets/145586216/4f55e4b6-7d9f-4541-bab6-fa3a1893ee22)




![h_6isxiOMu-4pVsStTcisU7stld6jbDVrjiFusw-GbTa9MnOcWBR-RhfDV3iWz7W_5cyyl-RfQLaZbqwclm0ayHmqLQ5HnsdsDU91VFZmHCaZESxFbOfslZor-KUMB2iwfvE9bM8_aOe54RNc0wFeu0](https://github.com/aszab1/travelistik/assets/145586216/f8a0f493-1db5-4b45-bfc2-6bbe555377b7)




![P4gyr-lytwC5d6TWYEdSNaiOeouT8xfhQSEIxbOY_Zcdtk6kXlYSR85gY_qJOfTsFkR2MllP_p7TTHp1iMf1i-wR2R3azbvqWs01ogJZMxI3q-lqey7l7YMwXQZKwgG99cn_-3x9BeYETxLt8kf-SsY](https://github.com/aszab1/travelistik/assets/145586216/7e5aaa32-6086-463b-85fa-007d0c1b7630)




The logout link on the NavBar will take the users back to the loading page.

 

**Challenges**

One significant challenge was implementing proper authentication flows between the React frontend and Django backend. I configured varying permission rules in Django for different API endpoints, requiring the React code to correctly supply authentication credentials - specifically a valid JWT token in the authorization HTTP header. I ran into issues sending likes to the backend and accessing secured board management APIs without the proper token-based authorization in place.

Another significant challenge involved the UI layout, specifically the arrangement of cards and the sidebar within the container and grid system provided by Chakra UI. Achieving the desired aesthetic and functional design required careful tweaking and a deep understanding of Chakra’s layout capabilities.

**Wins**

Gaining exposure to building an entire web application by myself- from database modelling though component rendering.

Gaining experience in backend development using Python and Django, enhancing my understanding of server-side programming and API creation. 

Demonstrating ability in database architecture by designing and implementing a relational model that effectively supports complex data relationships.

Improving skills in frontend development with React, particularly in creating dynamic user interfaces and integrating them with backend services.

**Key Learnings/Takeaways**

I am more confident with the full-stack flow of the application, even though I used different backend programming languages in Project 3. 

I found Python / Django straight forward, and enjoyed creating the back-end. 

I have also learnt how to use Chakra.

**Bugs**

I was unable to finish the like and review functionality for the inspirations on the home page due to time constraint. 

While I have the backend APIs working to submit likes and reviews (visible when inspecting the database), the frontend integration – fetching this data and displaying it – was not accomplished within the project timeline.

**Future Improvements**



* Firstly, as mentioned in the Bugs section, I would like to finish the like and review functionality 
* Allowing users to add Place entities with a category-based dropdown selector when they create a new inspiration
* Expand personal Board so users could add places / categories to their bucket list as well as having a to-do-list and notes section
