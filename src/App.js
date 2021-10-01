import './App.css';
import Navbar from './Components/Navbar';
import Car from './Components/Car';

function App() {
    return (
        <div className="App" >
            <Navbar />
            <Car />
            <div className="container">
                <div class="card text-center my-3">
                    <div class="card-body">
                        <h5 class="card-title" > HacktoberFest 2021 </h5>
                        <p class="card-text" > "Welcome Software Geeks, Let's expand our open source community and help each other to grow. Everyone who has an interest in contributing to Open Source Softwares and Projects, and those who want to increase their networking can join this group." </p>
                    </div>
                </div>
                <div class="card text-center my-3">
                    <div class="card-body">
                        <h5 class="card-title" > What is Hacktober Fest ? </h5>
                        <p class="card-text"> In this event, we are going to contribute to open - source software via GitHub or GitLab as per personal preference.Please make sure that you have registered your GitHub or GitLab account on the Hacktoberfest website.We highly recommend using GitHub
                            for the registration. </p>
                        <a href="https://github.com/"
                            class="btn btn-dark"> Make Github Profile Now  </a> &nbsp;
                        <a href="https://hacktoberfest.digitalocean.com/"
                            class="btn btn-success"> Register at HacktoberFest </a>
                    </div>
                </div>
                <div class="card text-center my-3">
                    <div class="card-body">
                        <h5 class="card-title" > What you need do ? </h5>
                        <p class="card-text" > You just need to make a pull request on the GitHub repository you want and
                            if
                            the maintainer of that repository accepts your pull request by giving the tag - "hacktoberfest-accepted"
                            then your pull request will be counted as a valid request and you have to make at least four(4) pull request to qualify.After that,
                            if you are in the first 50, 000 contributors then you will receive a T - shirt and Stickers as Developer Swag by Digital Ocean. </p>
                        <p class="card-text" > If you want to participate and want to contibute to open - source then you can join our event where we will give you four repository to contibute and
                            if you successfully able to contribute then we will accept your pull request and then you will get a chance to win T - Shirt and Stickers.Looking forward to seeing you in our community. </p>
                    </div>
                </div>
                <div class="card text-center my-3">
                    <div class="card-body">

                        <h5 class="card-title" > I don 't Know About Open Source and Github. How can I do?</h5>
                        <p class="card-text" > We will guide you step by step
                            for the first time.We will show you how to make pull request and other stuff.</p>
                        <p class="card-text" > After learning those, you are on your own.The first 50 % of the participants those will successfully complete the whole procedure will be the winner and we will accept their pull request and they will have the chance to get T - shirt and Stickers.</p>
                        <a href="https://forms.gle/MPSmR6K28uNNv4bf8"
                            class="btn btn-warning"> Fill the Form </a>
                    </div>
                </div>

                <p className="text-muted" > For more information about the procedure of selection, kindly contact our mantainers: Mr.Arshad @9827053173, Mr.Om Verma @+ 916281704551, Mr.Sutanu @+ 918927134674 </p>
            </div>
        </div>
    );
}

export default App;