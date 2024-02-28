import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GithubService } from './github.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { FormsModule } from '@angular/forms';
import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

class MockGithubService {
  static getUserRepos(getUserRepos: any): import("rxjs").Observable<any> {
    throw new Error('Method not implemented.');
  }
  getUser(username: string) {
    return of({
      "html_url": "https://github.com/izadoranetz",
      "name": "Izadora Netz",
      "company": "Banco do Brasil SA",
      "bio": "👩💻 UX/UI Designer, illustrator and web dev",
    });
  }

  getUserRepos(username: string) {
    return of([
      {
        "id": 559740642,
        "node_id": "R_kgDOIVz24g",
        "name": "01-fundamentos-reactjs",
        "full_name": "izadoranetz/01-fundamentos-reactjs",
        "private": false,
        "owner": {
          "login": "izadoranetz",
          "id": 10082957,
          "node_id": "MDQ6VXNlcjEwMDgyOTU3",
          "avatar_url": "https://avatars.githubusercontent.com/u/10082957?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/izadoranetz",
          "html_url": "https://github.com/izadoranetz",
          "followers_url": "https://api.github.com/users/izadoranetz/followers",
          "following_url": "https://api.github.com/users/izadoranetz/following{/other_user}",
          "gists_url": "https://api.github.com/users/izadoranetz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/izadoranetz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/izadoranetz/subscriptions",
          "organizations_url": "https://api.github.com/users/izadoranetz/orgs",
          "repos_url": "https://api.github.com/users/izadoranetz/repos",
          "events_url": "https://api.github.com/users/izadoranetz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/izadoranetz/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/izadoranetz/01-fundamentos-reactjs",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs",
        "forks_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/forks",
        "keys_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/teams",
        "hooks_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/hooks",
        "issue_events_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/issues/events{/number}",
        "events_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/events",
        "assignees_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/assignees{/user}",
        "branches_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/branches{/branch}",
        "tags_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/tags",
        "blobs_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/languages",
        "stargazers_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/stargazers",
        "contributors_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/contributors",
        "subscribers_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/subscribers",
        "subscription_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/subscription",
        "commits_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/contents/{+path}",
        "compare_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/merges",
        "archive_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/downloads",
        "issues_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/issues{/number}",
        "pulls_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/labels{/name}",
        "releases_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/releases{/id}",
        "deployments_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs/deployments",
        "created_at": "2022-10-31T01:48:59Z",
        "updated_at": "2022-11-16T12:56:18Z",
        "pushed_at": "2022-12-20T12:42:58Z",
        "git_url": "git://github.com/izadoranetz/01-fundamentos-reactjs.git",
        "ssh_url": "git@github.com:izadoranetz/01-fundamentos-reactjs.git",
        "clone_url": "https://github.com/izadoranetz/01-fundamentos-reactjs.git",
        "svn_url": "https://github.com/izadoranetz/01-fundamentos-reactjs",
        "homepage": null,
        "size": 49,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [
    
        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      },
      {
        "id": 589772668,
        "node_id": "R_kgDOIyc3fA",
        "name": "01-fundamentos-reactjs-ts",
        "full_name": "izadoranetz/01-fundamentos-reactjs-ts",
        "private": false,
        "owner": {
          "login": "izadoranetz",
          "id": 10082957,
          "node_id": "MDQ6VXNlcjEwMDgyOTU3",
          "avatar_url": "https://avatars.githubusercontent.com/u/10082957?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/izadoranetz",
          "html_url": "https://github.com/izadoranetz",
          "followers_url": "https://api.github.com/users/izadoranetz/followers",
          "following_url": "https://api.github.com/users/izadoranetz/following{/other_user}",
          "gists_url": "https://api.github.com/users/izadoranetz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/izadoranetz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/izadoranetz/subscriptions",
          "organizations_url": "https://api.github.com/users/izadoranetz/orgs",
          "repos_url": "https://api.github.com/users/izadoranetz/repos",
          "events_url": "https://api.github.com/users/izadoranetz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/izadoranetz/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/izadoranetz/01-fundamentos-reactjs-ts",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts",
        "forks_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/forks",
        "keys_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/teams",
        "hooks_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/hooks",
        "issue_events_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/issues/events{/number}",
        "events_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/events",
        "assignees_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/assignees{/user}",
        "branches_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/branches{/branch}",
        "tags_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/tags",
        "blobs_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/languages",
        "stargazers_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/stargazers",
        "contributors_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/contributors",
        "subscribers_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/subscribers",
        "subscription_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/subscription",
        "commits_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/contents/{+path}",
        "compare_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/merges",
        "archive_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/downloads",
        "issues_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/issues{/number}",
        "pulls_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/labels{/name}",
        "releases_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/releases{/id}",
        "deployments_url": "https://api.github.com/repos/izadoranetz/01-fundamentos-reactjs-ts/deployments",
        "created_at": "2023-01-16T22:36:31Z",
        "updated_at": "2023-01-16T22:36:40Z",
        "pushed_at": "2023-01-16T22:36:36Z",
        "git_url": "git://github.com/izadoranetz/01-fundamentos-reactjs-ts.git",
        "ssh_url": "git@github.com:izadoranetz/01-fundamentos-reactjs-ts.git",
        "clone_url": "https://github.com/izadoranetz/01-fundamentos-reactjs-ts.git",
        "svn_url": "https://github.com/izadoranetz/01-fundamentos-reactjs-ts",
        "homepage": null,
        "size": 31,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "TypeScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [
    
        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
      }]);}
}

describe('AppComponent', () => {
  let component: AppComponent;
  let githubService: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        UserProfileComponent,
        RepositoryListComponent
      ],
      providers: [
        GithubService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GithubService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title as 'Buscador do Github'`, () => {
    expect(component.title).toEqual('Buscador do Github');
  });

  it('should render title in h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Buscador do Github');
  });

  it('should call getUserInfo method when search is called', fakeAsync(() => {
    spyOn(component, 'getUserInfo');
    component.username = 'test'; // set username
    component.search();
    tick();
    expect(component.getUserInfo).toHaveBeenCalled();
  }));

    it('should call getUserRepos method when search is called', fakeAsync(() => {
    spyOn(component, 'getUserRepos');
    component.username = 'test'; // set username
    component.search();
    tick();
    expect(component.getUserRepos).toHaveBeenCalled();
  }));

  it('should call githubService.getUser with the correct username', () => {
    spyOn(githubService, 'getUser').and.callThrough();
    const username = 'testuser';
    component.getUserInfo(username);
    expect((githubService as any)['getUser']).toHaveBeenCalledWith(username);
  });

  it('should call githubService.getUserRepos with the correct username', () => {
    spyOn(githubService, 'getUserRepos').and.returnValue(of(MockGithubService.getUserRepos));

    const username = 'testuser';
    component.getUserRepos(username);
    expect((githubService as any)['getUserRepos']).toHaveBeenCalledWith(username);
  });
});
