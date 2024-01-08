import React from 'react'
import Image from 'react-bootstrap/Image';






function corousel() {
  return (
    <div> 
        
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
    <Image src="https://miro.medium.com/v2/resize:fit:5120/1*PRNkIbLdQbbjEz2UlIbGXg.jpeg" fluid />;

    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <Image src="https://cdn0.vox-cdn.com/uploads/chorus_asset/file/6002015/firewatch_150615_05.0.png" fluid />;

    </div>
    <div class="carousel-item active "data-bs-interval="1000">
    <Image src="https://i.redd.it/firewatch-has-the-most-beautiful-scenery-in-my-opinion-v0-e7i55tn54uub1.jpg?width=3000&format=pjpg&auto=webp&s=dfcb8bbe5eedd1666a6b44e592f28a45c2b5a07d" fluid />;

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</div>
  )
}

export default corousel

