import { Component, OnInit, AfterViewInit,TemplateRef } from '@angular/core';

//import service
import {SanPhamService} from '../shared/Sanpham.service';

//import toastr
import { ToastrService } from 'ngx-toastr';

//import ngx-modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {map} from 'rxjs/operators';
import {Response} from '@angular/http';
import {sanpham} from '../models/sanpham.class';
import {SelectItem} from 'primeng/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: [],
  providers: [MessageService]
})
export class SanPhamComponent implements OnInit, AfterViewInit {
  public loading = false;
  public sanphams: sanpham[];
  selectedsanpham: sanpham;
    
  displayDialog: boolean;
  displayDownloadDialog: boolean;
  sortOptions: SelectItem[];

    msgs: Message[] = [];
    
    sortKey: string;

    sortField: string;

    sortOrder: number;


  constructor(private service: SanPhamService, private toastr: ToastrService, private messageService: MessageService ) { }
  images: any[];
  ngOnInit() {
    this.loadData();
    this.sortOptions = [
      {label: 'Tải nhiều nhất', value: '!soluottai'},
      {label: 'Tải ít nhất', value: 'soluottai'},
      {label: 'Tên', value: 'ten'}
  ];
  this.images = [];
  this.images.push({source:'https://img.atpsoftware.vn/2017/03/quang-cao-zalo23.jpeg', alt:'Description for Image 1', title:'Title 1'});
  this.images.push({source:'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D7999%252C4500%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2019-02%252Fe796d060-35ee-11e9-a99f-df6db4ff5dcf%26client%3Da1acac3e1b3290917d92%26signature%3D3e3dd579728303bc88d8ccf8c903ca85c472a6be&client=amp-blogside-v2&signature=32881b4d218cb3eeb892f8f1bf77520b05a2ab2c', alt:'Description for Image 2', title:'Title 2'});
  this.images.push({source:'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2837182/1160/771/m1/fpnw/wm0/sky_background_with_sun1-.jpg?1497313685&s=202c7f0a5ff106d7d6e05b638390a626', alt:'Description for Image 3', title:'Title 3'});
  this.images.push({source:'https://webdoctor.vn/wp-content/uploads/2018/06/Photoshop.jpg', alt:'Description for Image 4', title:'Title 4'});
  this.images.push({source:'https://images.gog.com/bbba2ce5901fe222dc2493997192189215e5c8e3b576dc37ed1c1023764ee995.jpg', title:'Title 5'});
  this.images.push({source:'https://about.gitlab.com/images/blogimages/gitlab-blog-cover.png', title:'Title 6'});
  this.images.push({source:'https://wallpapersite.com/images/wallpapers/mileena-3840x2160-mortal-kombat-x-pc-games-xbox-one-ps4-26.jpg', alt:'Description for Image 7', title:'Title 7'});
  this.images.push({source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_v-OuuaMi8UwMtBdC9aCMc9nTUAx3zKBjRRlxVUeBqxc8PhB', alt:'Description for Image 8', title:'Title 8'});
  this.images.push({source:'http://s1.picswalls.com/wallpapers/2015/12/12/beautiful-background_124413827_294.jpg', alt:'Description for Image 9', title:'Title 9'});
  this.images.push({source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyZNGcz5iiG86qKkiaEQ8yIP4MlaQEg89OVKfbnrlhsAhmhkm', alt:'Description for Image 10', title:'Title 10'});
  }
  

  public ngAfterViewInit(): void {
    //mở rộng 1 hàng
    //this.grid.expandRow(0);
  }

  
  //thay đổi dữ liệu khi chuyển trang

  //load dữ liệu 
  loadData(): any {
    this.loading=true;
    this.service.getsanphamsSmall().pipe(map((data:Response)=>{
        return data.json() as sanpham[];
    })).toPromise().then(
      x=>{
        this.sanphams = x;
        this.sanphams.reverse();
        this.loading = false;
      }
    );
    
  }
  
  selectsanpham(event: Event, sanpham: sanpham) {
    this.selectedsanpham = sanpham;
    this.displayDialog = true;
    event.preventDefault();
  }

  handleClick(event:Event, sanpham: sanpham)
  {
    this.selectedsanpham = sanpham;
    this.displayDownloadDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
      this.selectedsanpham = null;
  }
    
  showSuccess() {
    this.selectedsanpham.soluottai++;
    this.service.putsanphams(this.selectedsanpham).subscribe(()=>{
      this.messageService.add({severity:'success', summary: 'Tải thành công', detail:'Bạn đã tải ứng dụng ' + this.selectedsanpham.ten});
    })
    
}

onSortChange(event) {
  let value = event.value;

  if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  }
  else {
      this.sortOrder = 1;
      this.sortField = value;
  }
}
}
