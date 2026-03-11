export const Contact = ()=>{
    return(
        <div class="h11">
            <>
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque illum mollitia officiis perspiciatis consectetur ullam voluptatibus neque qui rerum eveniet commodi at sed, architecto eos minima quam magni adipisci laborum! Vitae aliquid tenetur assumenda atque quibusdam illum possimus eligendi dolores fugit quis, quos culpa at dolorum pariatur cum qui amet quidem modi nulla voluptate reprehenderit dicta dolorem. In, vel fugiat? Rem earum ipsam ex error, temporibus quaerat in tempore minus beatae rerum dignissimos. Sed quas inventore rerum asperiores atque quod, accusantium nobis eaque pariatur ullam beatae optio quae, saepe numquam porro consectetur facere sequi recusandae iste rem aspernatur unde?</p>
            <form class="ff1">
            <div class="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required></input>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required></input>
            </div>

            <div class="form-group">
                <label>Contact</label>
                <input type="tel" placeholder="Enter your contact number" required></input>
            </div>

            <div class="form-group">
                <label>Message</label>
                <textarea placeholder="Write your message" required></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
           </> 
        </div>
    )
}