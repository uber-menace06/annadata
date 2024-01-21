import React from "react";
import img2 from "../images/img2.jpg";
import img7 from "../images/img7.jpg";
import problem from "../images/problem.jpg";
import works from "../images/works.jpg";
import empower from "../images/empower.jpg";
import collaborate from "../images/collaborate.jpg";
import { Link } from "react-router-dom";
import './Learnmore.css'

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
      <section class="about container" id="about">
        <div class="contentBx">
          <h2 class="titleText" style={{ color: "white" }}>
            Bridging the Gap Between Excess and Necessity
          </h2>
          <p class="title-text" style={{ color: "white" }}>
            In response to the coexistence of food wastage and hunger,
            the Zero Hunger Initiative pioneers innovative solutions by
            bridging surplus restaurant food with critical needs in impoverished areas.
            This groundbreaking project not only addresses food wastage but also makes a
            meaningful impact on communities struggling with hunger. AnnaDaata acts as a crucial link,
            seamlessly connecting individuals, organizations, restaurants, and marketplace
            contributors to those in need, fostering a community-driven effort to combat hunger
            and reduce food waste. Join us in building a network where every contributor plays a vital role
            in ensuring a hunger-free future for all.
          </p>
        </div>
        <div class="w-[50%]">
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
          <Link to="/" class="post-title my-1">
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
          <img src={works} alt="" class="post-img my-2" />
          <Link to="/" class="post-title">
            How It Works:
          </Link>
          <p class="post-description">
            The concept is simple yet powerful. AnnaDaata connects contributors
            through our platform, scheduling pickups for surplus food.
            Efficient logistics distribute to strategically placed kiosks,
            providing secure access for those in need. Join our community-driven
            network to combat hunger collaboratively. Every contributor,
            big or small, plays a crucial role in ensuring no one goes hungry.
          </p>
        </div>
        <div class="post-box tech">
          <img src={img7} alt="" class="post-img my-2" />
          <Link to="/" class="post-title">
            Technology and Logistics:
          </Link>
          <p class="post-description">
            AnnaDaata employs innovative solutions to seamlessly connect
            food contributors with those in need. Leveraging advanced logistics,
            our platform ensures efficient scheduling, collection, and distribution of
            surplus food to strategically positioned kiosks. This harmonious integration
            of technology and logistics forms the backbone of our initiative,
            facilitating a swift and impactful response to the urgent challenges of hunger and food waste.
          </p>
        </div>
        <div class="post-box news">
          <img src="https://th.bing.com/th/id/OIP.0JuXJ-WkdBPdAMZnFANohAAAAA?rs=1&pid=ImgDetMain" alt="Empowering Communities" class="post-img" />
          <Link to="/" class="post-title">
            Empowering Communities:
          </Link>
          <p class="post-description">
            AnnaDaata empowers communities through collaboration,
            connecting contributors and those in need to combat hunger.
            Our platform creates a network where everyone contributes to
            building a stronger, more resilient community, addressing the
            critical issue of hunger together.
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
