import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
    userId!: string;
    profileDetails!: any;
    profileSubscription!: Subscription;
    reposCount = 0;

    constructor(
        private route: ActivatedRoute,
        private snackBarService: SnackBarService,
        private serv: CommonService
    ) { }

    ngOnInit(): void {
        this.profileSubscription = this.route.queryParams
        .subscribe(params => {
            this.userId = params['userId'];
            this.fetchUserDetails();
        });
    }

    fetchUserDetails() {
        this.serv.fetchUserDetails(this.userId)
        .subscribe((response: any) => {
            this.profileDetails = response;
        }, (error) => {
            this.snackBarService.showError(error);
        });
    }

    updateRepoCount(count: number) {
        this.reposCount = count;
    }

    ngOnDestroy() {
        this.profileSubscription.unsubscribe();
    }

}