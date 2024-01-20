import React from "react";
import img2 from "../images/img2.jpg";
import img7 from "../images/img7.jpg";
import problem from "../images/problem.jpg";
import works from "../images/works.jpg";
import empower from "../images/empower.jpg";
import collaborate from "../images/collaborate.jpg";
import { Link } from "react-router-dom";

const Learnmore = () => {
  return (
    <div>
      {/* <header>
        <div class="nav container">
          <a href="#" class="logo">
            Anna <span>Daata</span>
          </a>
          <a href="#" class="login">
            Sign Up
          </a>
        </div>
      </header> */}
      <section class="home" id="home">
        <div class="home-text container">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/dy8jeyhgzgpaqbfd9r54"
            alt="Food"
          />
          <div>
            <h2 class="home-title">Anna Daata</h2>
            <span class="home-subtitle">The Zero - Hunger Initiative</span>
          </div>
        </div>
      </section>
      <section class="about container" id="about">
        <div class="contentBx">
          <h2 class="titleText" style={{ color: "white" }}>
            Bridging the Gap Between Excess and Necessity
          </h2>
          <p class="title-text" style={{ color: "white" }}>
            In a world where food wastage and hunger coexist, the need for
            innovative solutions becomes paramount. The Zero Hunger Initiative
            is a groundbreaking project aimed at addressing this paradox by
            creating a bridge between surplus food in restaurants and the
            critical needs of slums and other impoverished areas. This
            initiative not only tackles food wastage but also strives to make a
            meaningful impact on communities struggling with hunger.
          </p>
          <Link to="/login" class="btn2">
            Log in
          </Link>
        </div>
        <div class="imgBx">
          <img
            src="https://media.licdn.com/dms/image/D4E12AQGZN3PxH4quRA/article-cover_image-shrink_720_1280/0/1698593727046?e=2147483647&v=beta&t=Gl3kRN2TKRCGhNlUqmz4Xc6VmZoEyyzTyQmElQjMUlQ"
            alt=""
            class="Bridge the Gap"
          />
        </div>
      </section>
      <div class="post container">
        <div class="post-box tech">
          <img src={problem} alt="" class="problem-img" />
          <Link to="/" class="post-title">
            The Problem:
          </Link>
          <p class="post-description">
            The global food industry produces an astonishing amount of surplus
            food daily. Simultaneously, millions of people worldwide face hunger
            and malnutrition. The stark contrast between excess and scarcity is
            a pressing issue that demands attention. The Zero Hunger Initiative
            recognizes this problem and endeavors to turn surplus into
            sustenance for those in need.
          </p>
        </div>
        <div class="post-box food">
          <img src={works} alt="" class="post-img" />
          <Link to="/" class="post-title">
            How It Works:
          </Link>
          <p class="post-description">
            The concept is simple yet powerful. Partnering with restaurants,
            cafes, and other food establishments, the Zero Hunger Initiative
            establishes a network to collect and redistribute surplus, unused,
            or unsold food. Instead of letting it go to waste, these
            establishments can choose to contribute to the cause, providing a
            lifeline to those struggling to put food on the table
          </p>
        </div>
        <div class="post-box food">
          <img src={collaborate} alt="" class="post-img" />
          <Link to="/" class="post-title">
            Collaboration with Restaurants:
          </Link>
          <p class="post-description">
            Restaurants play a crucial role in the success of the Zero Hunger
            Initiative. By joining hands with us, they not only reduce their
            environmental impact but also actively participate in giving back to
            the community. Through streamlined logistics, we ensure that excess
            food is collected promptly and redistributed to locations where it
            is needed the most.
          </p>
        </div>
        <div class="post-box tech">
          <img src={img7} alt="" class="post-img" />
          <Link to="/" class="post-title">
            Technology and Logistics:
          </Link>
          <p class="post-description">
            To make the process efficient and scalable, the Zero Hunger
            Initiative leverages technology. A user-friendly app connects
            restaurants with the initiative, allowing them to schedule food
            pickups. The logistics team ensures that the food is transported
            safely and reaches its destination in a timely manner. This
            integration of technology not only streamlines the process but also
            minimizes food wastage in the collection and distribution stages.
          </p>
        </div>
        <div class="post-box news">
          <img src={empower} alt="" class="post-img" />
          <Link to="/" class="post-title">
            Empowering Communities:
          </Link>
          <p class="post-description">
            The surplus food, once collected, is directed towards slums,
            orphanages, and other needy places. This process not only helps
            alleviate hunger but also fosters a sense of community and
            solidarity. By redistributing nutritious meals, the Zero Hunger
            Initiative contributes to the well-being and development of
            communities that have long been overlooked.
          </p>
        </div>
      </div>
      <section class="about container" id="about">
        <div class="contentBx">
          <h2 class="titleText" style={{ color: "black" }}>
            We Believe, We Can
          </h2>
          <p class="title-text" style={{ color: "black" }}>
            The Zero Hunger Initiative stands as a testament to what can be
            achieved when we bridge the gap between excess and necessity. By
            redefining the role of surplus food, this project not only fights
            hunger but also fosters a sense of shared responsibility. Join us in
            making a difference – together, we can create a world where no one
            goes to bed hungry.
          </p>
          <Link to="/login" class="btn2">
            Log in
          </Link>
        </div>
        <div class="imgBx">
          <img src={img2} alt="" class="Conclusion" />
        </div>
      </section>
    </div>
  );
};
export default Learnmore;
