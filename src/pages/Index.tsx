import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Monitor, ShoppingCart, Sparkles, Wrench, Code, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Custom websites that perfectly align with your brand and goals, built with modern technologies.",
  },
  {
    icon: Mail,
    title: "Email Marketing Solutions",
    description: "Strategic email campaigns that drive engagement and conversions using platforms like Mailchimp and Klaviyo.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Professional online stores built with Shopify or WooCommerce that drive sales and growth.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Regular updates, bug fixes, and performance monitoring to keep your site running smoothly.",
  },
  {
    icon: Code,
    title: "Custom Web Features",
    description: "Integration with CRMs, booking systems, and other third-party tools to enhance functionality.",
  },
  {
    icon: PaintBucket,
    title: "Branding & Identity",
    description: "Complete branding solutions including logo design, color palettes, and brand guidelines.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary relative overflow-hidden">
        {/* SVG Background */}
        <div className="absolute inset-0 w-full h-[400%]" style={{ top: '-150%' }}>
          <img 
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYW5pbWF0ZWQtc2hlbGxzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzc0IiBoZWlnaHQ9IjE5OTEiIHZpZXdCb3g9IjAgMCAxNzc0IDE5OTEiIGZpbGw9Im5vbmUiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIHNsaWNlIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIj4gPGRlZnMgZGF0YS1hc3Ryby1jaWQtYnp1NXA3N3U9IiI+IDxmaWx0ZXIgaWQ9ImZpbHRlciIgZGF0YS1hc3Ryby1jaWQtYnp1NXA3N3U9IiI+IDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMwIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIi8+IDwvZmlsdGVyPiA8bWFzayBpZD0iZ2xvdy1tYXNrIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIj4gPGVsbGlwc2UgY3g9IjUwJSIgY3k9IjE4JSIgcng9IjQ1JSIgcnk9IjIwJSIgZmlsbD0id2hpdGUiIGZpbHRlcj0idXJsKCNmaWx0ZXIpIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIi8+IDwvbWFzaz4gPC9kZWZzPiA8ZyBzdHlsZT0iLS1pOjMiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiPiA8cGF0aCBjbGFzcz0ic2hlbGwtZ2xvdyIgc3Ryb2tlPSIjNUQ4REY1IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04MDQuNTQ5IDI3LjAyM2M0OS41NDMtMzMuNzkzIDExNC43MjctMzMuNzkzIDE2NC4yNjkgMGw3MzkuOTIyIDUwNC42OWExNDUuNzY0IDE0NS43NjQgMCAwIDEgNjMuNjMgMTIwLjQxN3Y2ODcuMTNjMCA0OC4xOS0yMy44MiA5My4yNy02My42MyAxMjAuNDJsLTczOS45MjIgNTA0LjY5Yy00OS41NDIgMzMuNzktMTE0LjcyNiAzMy43OS0xNjQuMjY5IDBMNjQuNjI2IDE0NTkuNjhDMjQuODE2IDE0MzIuNTMgMSAxMzg3LjQ1IDEgMTMzOS4yNlY2NTIuMTNhMTQ1Ljc2MSAxNDUuNzYxIDAgMCAxIDYzLjYyNi0xMjAuNDE3TDgwNC41NSAyNy4wMjNaIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIi8+IDxwYXRoIHN0cm9rZT0iIzVEOERGNSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNODA0LjU0OSAyNy4wMjNjNDkuNTQzLTMzLjc5MyAxMTQuNzI3LTMzLjc5MyAxNjQuMjY5IDBsNzM5LjkyMiA1MDQuNjlhMTQ1Ljc2NCAxNDUuNzY0IDAgMCAxIDYzLjYzIDEyMC40MTd2Njg3LjEzYzAgNDguMTktMjMuODIgOTMuMjctNjMuNjMgMTIwLjQybC03MzkuOTIyIDUwNC42OWMtNDkuNTQyIDMzLjc5LTExNC43MjYgMzMuNzktMTY0LjI2OSAwTDY0LjYyNiAxNDU5LjY4QzI0LjgxNiAxNDMyLjUzIDEgMTM4Ny40NSAxIDEzMzkuMjZWNjUyLjEzYTE0NS43NjEgMTQ1Ljc2MSAwIDAgMSA2My42MjYtMTIwLjQxN0w4MDQuNTUgMjcuMDIzWiIgZGF0YS1hc3Ryby1jaWQtYnp1NXA3N3U9IiIvPiA8L2c+IDxnIHN0eWxlPSItLWk6MiIgZGF0YS1hc3Ryby1jaWQtYnp1NXA3N3U9IiI+IDxwYXRoIGNsYXNzPSJzaGVsbC1nbG93IiBzdHJva2U9IiM1RDhERjUiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTgzMC45MiAzMzQuMjdjMzMuODQzLTIzLjA4NCA3OC4zNzEtMjMuMDg0IDExMi4yMTUgMGw1MDUuNDU1IDM0NC43NjRhOTkuNTggOTkuNTggMCAwIDEgNDMuNDYgODIuMjU5djQ2OS4zOTdjMCAzMi45MS0xNi4yNyA2My43MS00My40NiA4Mi4yNmwtNTA1LjQ1NSAzNDQuNzZjLTMzLjg0NCAyMy4wOC03OC4zNzIgMjMuMDgtMTEyLjIxNSAwbC01MDUuNDU2LTM0NC43NkE5OS41ODggOTkuNTg4IDAgMCAxIDI4MiAxMjMwLjY5Vjc2MS4yOTNhOTkuNTczIDk5LjU3MyAwIDAgMSA0My40NjQtODIuMjU5TDgzMC45MiAzMzQuMjdaIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIi8+IDxwYXRoIHN0cm9rZT0iIzVEOERGNSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNODMwLjkyIDMzNC4yN2MzMy44NDMtMjMuMDg0IDc4LjM3MS0yMy4wODQgMTEyLjIxNSAwbDUwNS40NTUgMzQ0Ljc2NGE5OS41OCA5OS41OCAwIDAgMSA0My40NiA4Mi4yNTl2NDY5LjM5N2MwIDMyLjkxLTE2LjI3IDYzLjcxLTQzLjQ2IDgyLjI2bC01MDUuNDU1IDM0NC43NmMtMzMuODQ0IDIzLjA4LTc4LjM3MiAyMy4wOC0xMTIuMjE1IDBsLTUwNS40NTYtMzQ0Ljc2QTk5LjU4OCA5OS41ODggMCAwIDEgMjgyIDEyMzAuNjlWNzYxLjI5M2E5OS41NzMgOTkuNTczIDAgMCAxIDQzLjQ2NC04Mi4yNTlMODMwLjkyIDMzNC4yN1oiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiLz4gPC9nPiA8ZyBzdHlsZT0iLS1pOjEiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiPiA8cGF0aCBjbGFzcz0ic2hlbGwtZ2xvdyIgc3Ryb2tlPSIjNUQ4REY1IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04NDIuMTk5IDU1Ni4yNGMyNi43MTgtMTguMjM4IDYxLjg4NC0xOC4yMzggODguNjAyIDBsMzI2LjkxOSAyMjMuMTU2YTc4LjU3OCA3OC41NzggMCAwIDEgMzQuMjggNjQuOTAxVjExNDYuN2MwIDI1Ljk3LTEyLjgzIDUwLjI2LTM0LjI4IDY0LjlsLTMyNi45MTggMjIzLjE2Yy0yNi43MTkgMTguMjQtNjEuODg1IDE4LjI0LTg4LjYwMyAwTDUxNS4yNzggMTIxMS42QTc4LjU3NiA3OC41NzYgMCAwIDEgNDgxIDExNDYuN1Y4NDQuMjk3YTc4LjU4MiA3OC41ODIgMCAwIDEgMzQuMjc4LTY0LjkwMUw4NDIuMTk5IDU1Ni4yNFoiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiLz4gPHBhdGggc3Ryb2tlPSIjNUQ4REY1IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04NDIuMTk5IDU1Ni4yNGMyNi43MTgtMTguMjM4IDYxLjg4NC0xOC4yMzggODguNjAyIDBsMzI2LjkxOSAyMjMuMTU2YTc4LjU3OCA3OC41NzggMCAwIDEgMzQuMjggNjQuOTAxVjExNDYuN2MwIDI1Ljk3LTEyLjgzIDUwLjI2LTM0LjI4IDY0LjlsLTMyNi45MTggMjIzLjE2Yy0yNi43MTkgMTguMjQtNjEuODg1IDE4LjI0LTg4LjYwMyAwTDUxNS4yNzggMTIxMS42QTc4LjU3NiA3OC41NzYgMCAwIDEgNDgxIDExNDYuN1Y4NDQuMjk3YTc4LjU4MiA3OC41ODIgMCAwIDEgMzQuMjc4LTY0LjkwMUw4NDIuMTk5IDU1Ni4yNFoiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiLz4gPC9nPiA8L3N2Zz4="
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-fade-down">
              We Build Websites That
              <span className="text-accent block mt-2">Drive Results</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 animate-fade-up">
              Transform your online presence with our expert web design and development services. 
              We create stunning, functional websites that help your business grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/work">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#0EA5E9] opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
                  <service.icon className="h-12 w-12 text-[#0EA5E9]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* SVG Background */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYW5pbWF0ZWQtc2hlbGxzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzc0IiBoZWlnaHQ9IjE5OTEiIHZpZXdCb3g9IjAgMCAxNzc0IDE5OTEiIGZpbGw9Im5vbmUiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIHNsaWNlIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIj4gPGRlZnMgZGF0YS1hc3Ryby1jaWQtYnp1NXA3N3U9IiI+IDxmaWx0ZXIgaWQ9ImZpbHRlciIgZGF0YS1hc3Ryby1jaWQtYnp1NXA3N3U9IiI+IDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMwIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIi8+IDwvZmlsdGVyPiA8bWFzayBpZD0iZ2xvdy1tYXNrIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIj4gPGVsbGlwc2UgY3g9IjUwJSIgY3k9IjE4JSIgcng9IjQ1JSIgcnk9IjIwJSIgZmlsbD0id2hpdGUiIGZpbHRlcj0idXJsKCNmaWx0ZXIpIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIi8+IDwvbWFzaz4gPC9kZWZzPiA8ZyBzdHlsZT0iLS1pOjMiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiPiA8cGF0aCBjbGFzcz0ic2hlbGwtZ2xvdyIgc3Ryb2tlPSIjNUQ4REY1IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04MDQuNTQ5IDI3LjAyM2M0OS41NDMtMzMuNzkzIDExNC43MjctMzMuNzkzIDE2NC4yNjkgMGw3MzkuOTIyIDUwNC42OWExNDUuNzY0IDE0NS43NjQgMCAwIDEgNjMuNjMgMTIwLjQxN3Y2ODcuMTNjMCA0OC4xOS0yMy44MiA5My4yNy02My42MyAxMjAuNDJsLTczOS45MjIgNTA0LjY5Yy00OS41NDIgMzMuNzktMTE0LjcyNiAzMy43OS0xNjQuMjY5IDBMNjQuNjI2IDE0NTkuNjhDMjQuODE2IDE0MzIuNTMgMSAxMzg3LjQ1IDEgMTMzOS4yNlY2NTIuMTNhMTQ1Ljc2MSAxNDUuNzYxIDAgMCAxIDYzLjYyNi0xMjAuNDE3TDgwNC41NSAyNy4wMjNaIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIi8+IDxwYXRoIHN0cm9rZT0iIzVEOERGNSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNODA0LjU0OSAyNy4wMjNjNDkuNTQzLTMzLjc5MyAxMTQuNzI3LTMzLjc5MyAxNjQuMjY5IDBsNzM5LjkyMiA1MDQuNjlhMTQ1Ljc2NCAxNDUuNzY0IDAgMCAxIDYzLjYzIDEyMC40MTd2Njg3LjEzYzAgNDguMTktMjMuODIgOTMuMjctNjMuNjMgMTIwLjQybC03MzkuOTIyIDUwNC42OWMtNDkuNTQyIDMzLjc5LTExNC43MjYgMzMuNzktMTY0LjI2OSAwTDY0LjYyNiAxNDU5LjY4QzI0LjgxNiAxNDMyLjUzIDEgMTM4Ny40NSAxIDEzMzkuMjZWNjUyLjEzYTE0NS43NjEgMTQ1Ljc2MSAwIDAgMSA2My42MjYtMTIwLjQxN0w4MDQuNTUgMjcuMDIzWiIgZGF0YS1hc3Ryby1jaWQtYnp1NXA3N3U9IiIvPiA8L2c+IDxnIHN0eWxlPSItLWk6MiIgZGF0YS1hc3Ryby1jaWQtYnp1NXA3N3U9IiI+IDxwYXRoIGNsYXNzPSJzaGVsbC1nbG93IiBzdHJva2U9IiM1RDhERjUiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTgzMC45MiAzMzQuMjdjMzMuODQzLTIzLjA4NCA3OC4zNzEtMjMuMDg0IDExMi4yMTUgMGw1MDUuNDU1IDM0NC43NjRhOTkuNTggOTkuNTggMCAwIDEgNDMuNDYgODIuMjU5djQ2OS4zOTdjMCAzMi45MS0xNi4yNyA2My43MS00My40NiA4Mi4yNmwtNTA1LjQ1NSAzNDQuNzZjLTMzLjg0NCAyMy4wOC03OC4zNzIgMjMuMDgtMTEyLjIxNSAwbC01MDUuNDU2LTM0NC43NkE5OS41ODggOTkuNTg4IDAgMCAxIDI4MiAxMjMwLjY5Vjc2MS4yOTNhOTkuNTczIDk5LjU3MyAwIDAgMSA0My40NjQtODIuMjU5TDgzMC45MiAzMzQuMjdaIiBkYXRhLWFzdHJvLWNpZC1ienU1cDc3dT0iIi8+IDxwYXRoIHN0cm9rZT0iIzVEOERGNSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNODMwLjkyIDMzNC4yN2MzMy44NDMtMjMuMDg0IDc4LjM3MS0yMy4wODQgMTEyLjIxNSAwbDUwNS40NTUgMzQ0Ljc2NGE5OS41OCA5OS41OCAwIDAgMSA0My40NiA4Mi4yNTl2NDY5LjM5N2MwIDMyLjkxLTE2LjI3IDYzLjcxLTQzLjQ2IDgyLjI2bC01MDUuNDU1IDM0NC43NmMtMzMuODQ0IDIzLjA4LTc4LjM3MiAyMy4wOC0xMTIuMjE1IDBsLTUwNS40NTYtMzQ0Ljc2QTk5LjU4OCA5OS41ODggMCAwIDEgMjgyIDEyMzAuNjlWNzYxLjI5M2E5OS41NzMgOTkuNTczIDAgMCAxIDQzLjQ2NC04Mi4yNTlMODMwLjkyIDMzNC4yN1oiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiLz4gPC9nPiA8ZyBzdHlsZT0iLS1pOjEiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiPiA8cGF0aCBjbGFzcz0ic2hlbGwtZ2xvdyIgc3Ryb2tlPSIjNUQ4REY1IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04NDIuMTk5IDU1Ni4yNGMyNi43MTgtMTguMjM4IDYxLjg4NC0xOC4yMzggODguNjAyIDBsMzI2LjkxOSAyMjMuMTU2YTc4LjU3OCA3OC41NzggMCAwIDEgMzQuMjggNjQuOTAxVjExNDYuN2MwIDI1Ljk3LTEyLjgzIDUwLjI2LTM0LjI4IDY0LjlsLTMyNi45MTggMjIzLjE2Yy0yNi43MTkgMTguMjQtNjEuODg1IDE4LjI0LTg4LjYwMyAwTDUxNS4yNzggMTIxMS42QTc4LjU3NiA3OC41NzYgMCAwIDEgNDgxIDExNDYuN1Y4NDQuMjk3YTc4LjU4MiA3OC41ODIgMCAwIDEgMzQuMjc4LTY0LjkwMUw4NDIuMTk5IDU1Ni4yNFoiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiLz4gPHBhdGggc3Ryb2tlPSIjNUQ4REY1IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04NDIuMTk5IDU1Ni4yNGMyNi43MTgtMTguMjM4IDYxLjg4NC0xOC4yMzggODguNjAyIDBsMzI2LjkxOSAyMjMuMTU2YTc4LjU3OCA3OC41NzggMCAwIDEgMzQuMjggNjQuOTAxVjExNDYuN2MwIDI1Ljk3LTEyLjgzIDUwLjI2LTM0LjI4IDY0LjlsLTMyNi45MTggMjIzLjE2Yy0yNi43MTkgMTguMjQtNjEuODg1IDE4LjI0LTg4LjYwMyAwTDUxNS4yNzggMTIxMS42QTc4LjU3NiA3OC41NzYgMCAwIDEgNDgxIDExNDYuN1Y4NDQuMjk3YTc4LjU4MiA3OC41ODIgMCAwIDEgMzQuMjc4LTY0LjkwMUw4NDIuMTk5IDU1Ni4yNFoiIGRhdGEtYXN0cm8tY2lkLWJ6dTVwNzd1PSIiLz4gPC9nPiA8L3N2Zz4="
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto relative">
              Let's create something amazing together. Our team is ready to help you achieve your digital goals.
            </p>
            <Button size="lg" variant="secondary" className="relative">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
