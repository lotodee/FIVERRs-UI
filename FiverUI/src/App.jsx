import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./app.scss"
import Home from "./pages/home/Home"
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/gigs/Gigs"
import MyGigs from "./pages/myGigs/MyGigs"
import Order from "./pages/orders/Orders"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"

import Add from "./pages/add/Add"
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import Footer from './components/footer/Footer'

const App = () => {

const Layout = ()=>{
  return(
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          
          element:<Home/>
        },
        {
          path:'/gigs',
          element:<Gigs />
        },
        {
          path:'/gig/:id',
          element:<Gig/>
        },
        {
          path:'/orders',
          element:<Order/>
        },
        {
          path:'/mygigs',
          element:<MyGigs/>
        },
        {
          path:'/add',
          element:<Add/>
        },
        {
          path:'/message/:id',
          element:<Message/>
        },
        {
          path:'/messages',

          element:
          <Messages/>
        },
     

      ]
    }
  ])
  return (
    <div>
      {/* <Navbar/>
      <h1 style={{fontSize:`20px` , marginTop:`40px`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita eos autem, velit exercitationem labore laudantium, vel, amet optio nesciunt id accusamus nisi quis? Perspiciatis quia, sequi esse molestias ducimus iste optio autem nam, expedita voluptates iusto? Quidem numquam asperiores non ut repellendus impedit nisi harum. Repudiandae id temporibus magni labore, sapiente veritatis repellat laborum commodi porro aliquid harum saepe dolorum, minus ratione, error obcaecati autem consequatur illo iste. Dolorum rerum vitae earum, est deleniti perferendis sit similique asperiores, error dolorem odio incidunt porro fugiat aliquid. Possimus mollitia quod quo expedita. Quam recusandae voluptatum aliquam consequuntur! Quo quisquam, repudiandae excepturi, ipsam itaque saepe molestias quasi in reiciendis asperiores dicta impedit numquam tempora aliquid repellendus officiis laudantium nulla iusto? Magnam cupiditate vitae minima quaerat eveniet veniam illo assumenda reiciendis distinctio, fuga iste quo saepe, nihil labore porro consectetur dignissimos? Necessitatibus a voluptate, nesciunt nam quod excepturi repudiandae quam doloribus accusamus eaque dolorum atque voluptatibus doloremque itaque vero eligendi enim velit ullam! Nulla ad accusantium enim voluptas suscipit explicabo nobis dolores quibusdam eligendi obcaecati hic iste perspiciatis rem a eum nihil repudiandae veniam, saepe consequuntur? Exercitationem ut aperiam officia praesentium molestiae, dolores enim architecto veniam eaque tempora earum numquam quibusdam magni cupiditate ullam molestias quod adipisci! Laborum nostrum tenetur numquam architecto, quia fugit corrupti hic nesciunt. Illo aliquid omnis repudiandae molestias. Cumque sequi tempora itaque, illum non consectetur facilis est unde? Molestiae explicabo non, alias voluptates esse quis, laudantium earum iure repellat voluptatibus rem deserunt? Vitae voluptatum quia ad quasi corrupti repudiandae quis voluptas id, veritatis fuga! Rerum hic error ipsa tempora amet, expedita provident facilis quas quis voluptatibus veritatis, iure sint nesciunt quo molestiae rem nisi recusandae odit deleniti maxime libero blanditiis. Blanditiis, corporis. Quaerat delectus minus quidem repellendus, iusto consectetur blanditiis commodi voluptatem corporis. Commodi a corrupti labore eius alias sunt quo mollitia ratione blanditiis est deserunt excepturi enim architecto doloremque adipisci aliquam, aspernatur ea eum illo. Doloremque reprehenderit libero assumenda magni expedita culpa ex sapiente dicta. Quibusdam rerum praesentium, ipsam officiis nihil sequi quod excepturi quis veritatis ex? Eum obcaecati fugiat in saepe recusandae eligendi, adipisci, quis facere deserunt non quia incidunt esse aspernatur dolores molestias. Ab, perspiciatis magnam commodi minus tempore quos recusandae fuga aperiam sequi libero. Corporis culpa adipisci sed accusamus voluptates praesentium minima quidem, assumenda beatae eveniet atque perferendis repellat reprehenderit quia ullam similique aliquid doloremque dolores voluptatum hic eligendi. Consectetur ipsam iure magnam exercitationem tenetur nihil voluptatibus, ex possimus temporibus laborum maiores labore? Mollitia aperiam doloremque laboriosam officia magni repudiandae id voluptatibus consequuntur quia dignissimos quo voluptates unde, deleniti ratione autem possimus pariatur architecto esse perspiciatis. Quibusdam nihil maiores accusamus cumque expedita, odio similique nam? Nulla eius amet maxime provident facilis voluptate dolorum pariatur deserunt delectus blanditiis culpa, tempore perspiciatis nam aut aliquam illo ab repudiandae adipisci exercitationem? Nesciunt dicta hic incidunt asperiores sed soluta consequatur sunt. Eveniet consequuntur debitis odio doloremque quibusdam repellat explicabo et molestias perferendis adipisci sapiente, optio aspernatur itaque pariatur quod enim porro, culpa amet officia expedita mollitia obcaecati ea ipsam a? Modi voluptate aspernatur beatae eos autem consequuntur id consectetur laudantium adipisci possimus. Commodi repellendus a aspernatur harum deleniti magni doloremque at, magnam nulla ab rerum quaerat minima expedita ex, hic ea perferendis dicta odio error, impedit earum vitae enim consectetur. Unde ducimus quaerat eius aut vitae cumque ratione, quos laborum laboriosam dolorum, dolore ex odio eos fugit magnam? Praesentium nulla et similique, aperiam optio distinctio, vitae quisquam deserunt reprehenderit officia laboriosam repellendus animi omnis. Ex totam ducimus molestiae similique provident corrupti voluptas reprehenderit iure eum obcaecati dignissimos iste, sed at! Magni, consequatur. Veritatis sed totam, dolorum, perferendis adipisci cupiditate voluptatibus blanditiis consectetur facere mollitia in sint molestiae harum deserunt aut distinctio. Explicabo molestias voluptatibus officia? Autem velit incidunt quia, facilis eveniet labore quae ipsum esse suscipit doloribus voluptatem, consequatur distinctio aut, dolorem repellendus? Rerum excepturi sequi non? Rerum vitae ipsam sint eveniet quae, ullam adipisci expedita excepturi delectus magnam voluptatem blanditiis at libero explicabo, soluta non praesentium voluptate veniam. Nesciunt a nam et aliquam voluptate dicta, magni corrupti ab amet ea ullam sit beatae impedit ipsam optio. Deserunt sed qui labore laudantium veniam possimus explicabo nesciunt aperiam. Tempora tempore nesciunt eligendi commodi dolores impedit quo cupiditate autem deleniti quibusdam, at atque? Aspernatur possimus blanditiis eos atque, reiciendis ab sint tempora harum libero minus consequuntur. A fugit atque deleniti libero illo nesciunt, nemo iste vel in tempore quis incidunt facere facilis assumenda ipsam porro voluptates provident nihil aspernatur necessitatibus. Ullam error odio natus accusamus, unde quo! Quisquam doloribus sit ab voluptate pariatur alias! Ducimus sapiente sed porro nihil nemo aliquam laborum, ratione, rem laboriosam repellendus nisi cumque cum illum eligendi doloribus assumenda beatae. Alias deserunt minus aliquam delectus id perferendis ut! Ullam, quae. Qui tempore, tempora aspernatur, incidunt nihil dolorum obcaecati soluta facilis, laborum quae rerum rem sequi veniam laboriosam exercitationem assumenda consequuntur? Voluptates illum exercitationem tempora excepturi ducimus voluptatum necessitatibus optio libero, accusamus voluptatem nulla consectetur dignissimos vero numquam, delectus at dolorum quibusdam, vel labore! Enim, doloremque, exercitationem excepturi dicta sed soluta necessitatibus autem, ex eum magni dignissimos. Possimus sequi cumque reiciendis, asperiores reprehenderit veniam officia error omnis praesentium unde illo alias labore, facere consequuntur aut enim animi harum tempore fugit? Minus quas iste vel inventore dolore, magni cum adipisci doloremque dolorum voluptas aspernatur repellat ipsa accusantium incidunt itaque ab quia? Inventore necessitatibus ex at, est minus nesciunt vel nobis eveniet magni fugiat omnis atque. Quo voluptas doloribus, illum corporis quis sunt cumque labore assumenda laborum veritatis ipsum numquam esse optio. Veritatis similique expedita officia harum? Accusamus perferendis quas quos aut dignissimos sequi odit fuga voluptates tempora rerum ipsam maxime, laborum temporibus omnis. Eius molestiae, reiciendis veritatis quasi vel error! Nostrum odio veritatis quam? Blanditiis sapiente voluptas omnis nam incidunt optio iure distinctio fugit voluptatibus et ut culpa, nobis natus deserunt at autem ducimus velit quaerat atque delectus repudiandae! Ex libero et repellendus fugiat asperiores, neque autem eos perferendis excepturi totam assumenda dicta eaque quibusdam rerum exercitationem id cum nihil? Quas suscipit sint commodi iste consequatur nulla ut ullam.</h1>
      */}
      <RouterProvider router={router}/>
    </div>
  )
}

export default App 