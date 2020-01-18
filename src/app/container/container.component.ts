import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent implements OnInit {
  data = [
    {
      id: 1,
      name: "Mikael Araya",
      phoneNumber: "0912556677",
      emailAddress: "mikaelaraya12@gmail.com"
    },
    {
      id: 2,
      name: "Meseret Abebe",
      phoneNumber: "09127564646",
      emailAddress: "mesi12@gmail.com"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
