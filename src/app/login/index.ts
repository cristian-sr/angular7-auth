<h1>Hi {{currentUser.firstName}}!</h1>
<p>You're logged in with Angular 7!!</p>
<h3>All registered users:</h3>
<ul>
    <li *ngFor="let user of users">
        {{user.username}} ({{user.firstName}} {{user.lastName}})
        - <a (click)="deleteUser(user.id)" class="text-danger">Delete</a>
    </li>
</ul>