import React from 'react'

function ServicesItems() {
    return (
        <div>

            <div class="card card-cascade narrower">

                <div class="view view-cascade gradient-card-header purple-gradient">


                    <h2 class="card-header-title">Ally Cook</h2>

                    <h5 class="mb-0 pb-3 pt-2">Follow me</h5>


                    <a type="button" class="btn-floating"><i class="fab fa-facebook-f"></i></a>

                    <a type="button" class="btn-floating"><i class="fab fa-twitter"></i></a>

                    <a type="button" class="btn-floating"><i class="fab fa-google-plus-g"></i></a>

                </div>


                <div class="card-body card-body-cascade text-center">


                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
                        Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos
                        laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi.</p>

                </div>

            </div>



            <div class="card card-cascade wider">


                <div class="view view-cascade gradient-card-header peach-gradient">

                    <h2 class="card-header-title mb-3">News Title</h2>

                    <p class="mb-0"><i class="fas fa-calendar mr-2"></i>26.07.2017</p>

                </div>


                <div class="card-body card-body-cascade text-center">


                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex minis
                        recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus
                        non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</p>

                    <a href="#!" class="orange-text d-flex flex-row-reverse p-2">
                        <h5 class="waves-effect waves-light">Read more<i class="fas fa-angle-double-right ml-2"></i></h5>
                    </a>

                </div>


            </div>

            <div class="card card-cascade">


                <div class="view view-cascade gradient-card-header blue-gradient">


                    <h2 class="card-header-title mb-3">Marta</h2>

                    <p class="card-header-subtitle mb-0">Deserve for her own card</p>

                </div>


                <div class="card-body card-body-cascade text-center">


                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
                        Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos
                        laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                        laboriosam.</p>

                    <hr />


                    <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"> </i></a>

                    <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"> </i></a>

                    <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"> </i></a>

                    <a class="px-2 fa-lg email-ic"><i class="fas fa-envelope"> </i></a>

                </div>

            </div>
        </div>
    )
}

export default ServicesItems
