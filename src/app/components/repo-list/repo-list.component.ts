import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-repo-list',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
    @Input() userId!: string;
    @Output() repoCountFetched = new EventEmitter<number>();
    repos = <any>[];
    subRepos = <any>[];
    repoSubscription!: Subscription;
    MAX_ITEMS_PER_PAGE = 1;
    lowValue: number = 0;
    highValue: number = this.MAX_ITEMS_PER_PAGE;

    constructor(
        private snackBarService: SnackBarService,
        private serv: CommonService
    ) {}

    ngOnInit(): void {
        this.fetchRepos();
    }

    fetchRepos() {
        this.repoSubscription = this.serv.getRepos(this.userId)
        .subscribe((repos) => {
            this.repos = repos as Array<any>;
            if (this.repos.length < this.MAX_ITEMS_PER_PAGE) {
                this.highValue = this.repos.length;
            }
            this.updateSubRepos();
            this.repoCountFetched.emit(this.repos.length);
        }, (error) => {
            this.snackBarService.showError(error);
        });
    }

    public getPaginatorData(event: PageEvent): PageEvent {
        this.lowValue = event.pageIndex * event.pageSize;
        this.highValue = this.lowValue + event.pageSize;
        this.updateSubRepos();
        return event;
    }

    updateSubRepos() {
        this.subRepos = (this.repos as Array<any>).slice(this.lowValue, this.highValue);
    }

    ngOnDestroy() {
        this.repoSubscription.unsubscribe();
    }
}