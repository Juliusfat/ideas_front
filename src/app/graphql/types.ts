export type Idea = {
    id: number;
    created: Date;
    updated: Date;
    idea: string;
    description: string;
    author: User;
    upvotes: number;
    downvotes: number;
    comments: Comment[];
}

export type Comment = {
    id: number;
    created: string;
    comment: string;
}

export type User = {
    id: number;
    username: string;
    created: string;
    bookmarks: Idea[];
    ideas: Idea[];
    comments: Comment[];
}

export type Auth = {
    username: string;
    token: string;
}

export type Query = {
    users(page: number): User[];
    user(username: string): User;
    whoami: User;
    comment(id: number): Comment;
    ideas(page: number, newest: boolean): Idea[];
    idea(id: number): Idea;
}

export type Mutation = {
    login(username: string, password: string): Auth;
    register(username: string, password: string): Auth;
    createComment(idea: number, comment: string): Comment;
    deleteComment(id: number): Comment;
    createIdea(idea: string, description: string): Idea;
    updateIdea(id: number, idea: string, description: string): Idea;
    deleteIdea(id: number): Idea;
    upvote(id: number): Idea;
    downvote(id: number): Idea;
    bookmark(id: number): User;
    unbookmark(id: number): User;
  }