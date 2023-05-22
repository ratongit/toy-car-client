import usetitle from "../hooks/UseTitle";

const Blog = () => {
       usetitle('blog')
    return (
        <div className="mx-20">
       <h1 className="text-3xl text-white mt-14"><span className="font-semibold text-red-400">Question :1</span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1> 






       <p className='text-sky-200 text-lg my-20'><span className="font-lg"> Answer :</span>
       
       Access token is help user  to access protected resources on a server. It is obtained during the authentication process start. It provides a seamless way access .
       
       <br />
       
Access tokens, obtained during authentication, allow clients to access protected resources, while refresh tokens provide a means to obtain new access tokens after expiration. For client-side storage, it is recommended to securely store access tokens in HTTP-only cookies and store refresh tokens in secure HTTP-only cookies flag set for HTTPS-only .
       </p>   

       <h1 className="text-3xl text-white "><span className="font-semibold text-red-400">Question :2</span>Compare SQL and NoSQL databases?</h1>     

       <p className='text-sky-200 text-lg my-20'><span className="font-lg"> Answer :</span>SQL databases are structured and organized like tables with rows and columns, similar to spreadsheets, making it easier to understand and work with. NoSQL databases are more flexible and can store different types of data, like documents, key-value pairs, and graphs, but may require more complex querying and data modeling.


</p>     
       <h1 className="text-3xl text-white "><span className="font-semibold text-red-400">Question :3</span>What is express js? What is Nest JS ?</h1>   
       <p className='text-sky-200 text-lg my-20 '><span className="font-lg "> Answer :</span>Express.js is a  framework for Node.js, making it easier to build web servers. it is  handle HTTP requests and responses.
<br />
Nest.js is a powerful and scalable Node.js framework that builds on top of Express.js, providing additional features and a modular structure for building structured and maintainable server-side applications.




<h1 className="text-3xl text-white mt-20 "><span className="font-semibold text-red-400">Question : 4</span>What is MongoDB aggregate and how does it work ?</h1>
</p>     
       <p className='text-sky-200 text-lg my-20'><span className="font-lg"> Answer :</span>The aggregate function is like a toolbox we can use to do clever stuff with our data. It helps us group, sort, and analyze information in different ways. We can think of it as a chain of steps we put together to get helpful insights from our data.




</p>     


        </div>
    );
};

export default Blog;