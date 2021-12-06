import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarouselChocolateComponent } from "../app/carousel-chocolate/carousel-chocolate.component";
import { HomeComponent } from "../app/home/home.component";
import { QuizComponent } from "./quiz/quiz.component";
import { LoadingComponent } from "./loading/loading.component";
import { EnjoyChocolateComponent } from "./enjoy-chocolate/enjoy-chocolate.component";
import { OutOfOrderComponent } from "./out-of-order/out-of-order.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "carousel",
    component: CarouselChocolateComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "quiz",
    component: QuizComponent,
  },
  {
    path: "loading",
    component: LoadingComponent,
  },
  {
    path: "enjoy",
    component: EnjoyChocolateComponent,
  },
  {
    path: "outOfOrder",
    component: OutOfOrderComponent,
  },
  {
    path: "**",
    component: OutOfOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
