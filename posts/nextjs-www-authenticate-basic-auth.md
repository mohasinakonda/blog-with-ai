---
title: "How to Use the WWW-Authenticate Header in Next.js to Protect Routes with Basic Auth"
date: "2025-06-26"

excerpt: "Learn how to secure your entire Next.js application using the WWW-Authenticate header and HTTP Basic Authentication. This guide shows you how to trigger the browser’s native login popup using Next.js middleware."
tags:
  [
    "HTTP",
    "Authentication",
    "WWW-Authentication"
  ]
category: "Authentication"
keywords:
  [
   	"WWW-Authenticate header in Next.js",
	  "Basic Auth in Next.js middleware",
		"Protect routes in Next.js",
	  "Next.js authentication popup",
	  "Next.js secure staging site"
  ]
author: "Hazrat Akonda"
---

Want to protect your staging site or sensitive information or route? this is right article for you.

In modern web applications, protecting sensitive routes is crucial. While OAuth and session-based logins are common, sometimes you just need a simple authentication method—especially for internal tools, staging sites, or admin panels.

This is where the WWW-Authenticate header and Basic Authentication come in handy.

In this post, we’ll walk through how to use WWW-Authenticate in Next.js to trigger the browser’s native login popup and secure every route.

## What Is WWW-Authenticate?

The WWW-Authenticate response header is part of the HTTP authentication framework. When a browser receives a 401 Unauthorized status along with this header, it automatically prompts the user with a login dialog.

```http
  HTTP/1.1 401 Unauthorized
  WWW-Authenticate: Basic realm="Secure Area"
```

### When Should You Use Basic Auth in Next.js?

    •	Securing staging environments
    •	Protecting internal dashboards
    •	Quick protection without building a full login system
    •	When deploying to Vercel or similar platforms

## How to Implement WWW-Authenticate in Next.js

```ts copy
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const authHeader = req.headers.get("authorization");

	if (!authHeader) {
		return new NextResponse("Authentication required", {
			status: 401,
			headers: {
				"WWW-Authenticate": 'Basic realm="Secure Area"',
			},
		});
	}

	const [username, password] = atob(authHeader.split(" ")[1] || "").split(":");
	const validUser = process.env.AUTH_USER || "admin";
	const validPass = process.env.AUTH_PASSWORD || "password";

	if (username !== validUser || password !== validPass) {
		return new NextResponse("Invalid credentials", {
			status: 401,
			headers: {
				"WWW-Authenticate": 'Basic realm="Secure Area"',
			},
		});
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/:path*"], // Apply to all routes
};
```

### Add environment variables

```env
AUTH_USER=admin
AUTH_PASSWORD=secret

```
