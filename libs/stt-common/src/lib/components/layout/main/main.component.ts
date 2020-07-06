import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { SpinnerService, AuthService, TokenService } from '../../../services';
import { WithSubsComponent } from '../../subscriptions.component';
import { LinkData } from '../../../models';

@Component({
  selector: 'stt-main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends WithSubsComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  public username = '';
  public schoolName = '';
  public showLoader = false;
  public linkData: LinkData[];

  constructor(
    private spinnerService: SpinnerService,
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private media: MediaMatcher,
    private tokenService: TokenService,
    private route: ActivatedRoute
  ) {
    super();
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQuery.onchange = () => changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.linkData = Object.values(this.route.snapshot.data);

    this.username = this.tokenService.getUsername();
    this.schoolName = this.tokenService.getSchoolName();
    this.subs.push(
      this.spinnerService.status.subscribe((val: boolean) => {
        this.showLoader = val;
        this.changeDetectorRef.detectChanges();
      })
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.mobileQuery.onchange = null;
    this.changeDetectorRef.detach();
  }
}
