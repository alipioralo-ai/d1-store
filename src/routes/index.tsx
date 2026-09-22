import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Shield,
  BadgeCheck,
  Store,
  Headset,
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { featured, products, type Series, type Product } from "@/data/catalog";
import { soles, waLink, WA_DISPLAY, STORE_NAME, STORE_ADDRESS, STORE_MAPS } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const WA_PREVENTA = waLink(
  "Hola, quiero información sobre la preventa del iPhone 18 Pro Max / iPhone Dúo",
);

function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <Hero />
      <TrustBar />
      <PreventaGrid />
      <Catalog />
      <PriceTable />
      <Visit />
      <Cta />
      <Footer />
      <a
        href={WA_PREVENTA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-primary text-bg shadow-lg transition hover:scale-105"
        aria-label={`WhatsApp ${WA_DISPLAY}`}
      >
        <MessageCircle className="size-7" strokeWidth={2.2} />
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/15 bg-bg/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2.5 text-fg no-underline">
          <span className="grid size-10 place-items-center rounded-xl bg-primary text-sm font-extrabold text-bg">
            D1
          </span>
          <span className="leading-tight">
            <strong className="block text-lg font-extrabold tracking-tight">D1 STORE</strong>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Cusco
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          <a href="#preventa" className="hover:text-primary">
            Preventa
          </a>
          <a href="#modelos" className="hover:text-primary">
            Modelos
          </a>
          <a href="#precios" className="hover:text-primary">
            Precios
          </a>
          <a href="#tienda" className="hover:text-primary">
            Tienda
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={WA_PREVENTA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-sm font-semibold text-muted hover:text-primary md:flex"
          >
            <Phone className="size-4 text-primary" />
            {WA_DISPLAY}
          </a>
          <a
            href={WA_PREVENTA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-bg"
          >
            Contactar
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-16 pt-12 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-primary/10" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Preventa oficial abierta
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            iPhone 18 Pro Max
            <span className="mt-1 block text-primary">& iPhone Dúo</span>
          </h1>
          <p className="mb-8 max-w-md text-lg text-muted">
            Fotos oficiales de cada modelo. Equipos nuevos sellados, 1 año de garantía internacional
            y tienda física en Cusco.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="#preventa"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-bg shadow-lg"
            >
              Ver preventa
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#modelos"
              className="inline-flex items-center rounded-xl border border-border px-5 py-3 font-semibold text-fg"
            >
              Ver todos los iPhone
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-1.5">
              <Shield className="size-4 text-primary" /> Garantía internacional
            </li>
            <li className="flex items-center gap-1.5">
              <Store className="size-4 text-primary" /> Tienda física en Cusco
            </li>
            <li className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-primary" /> Originales sellados
            </li>
          </ul>
        </div>

        <div className="grid gap-4">
          <HeroCard
            badge="Preventa"
            title="iPhone 18 Pro Max"
            spec="256 GB · eSIM · Burgundy"
            preventa={6499}
            contra={6999}
            image="/phones/18-pro-max-burgundy.png"
            alt="iPhone 18 Pro Max oficial, acabado burgundy"
          />
          <HeroCard
            badge="Preventa"
            title="iPhone Dúo"
            spec="256 GB · Star White · Plegable"
            preventa={8290}
            contra={8790}
            image="/phones/duo-star-white.png"
            alt="iPhone Dúo oficial Star White"
          />
        </div>
      </div>
    </section>
  );
}

function HeroCard({
  badge,
  title,
  spec,
  preventa,
  contra,
  image,
  alt,
}: {
  badge: string;
  title: string;
  spec: string;
  preventa: number;
  contra: number;
  image: string;
  alt: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-primary/25 bg-surface/80">
      <span className="absolute right-3 top-3 z-10 rounded-md bg-primary px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-bg">
        {badge}
      </span>
      <div className="flex items-center">
        <div className="relative grid place-items-center p-3">
          <img src={image} alt={alt} className="h-40 w-auto object-contain sm:h-48" />
        </div>
        <div className="p-4 pr-12">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mb-3 text-sm text-muted">{spec}</p>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Preventa</p>
              <p className="text-xl font-extrabold">{soles(preventa)}</p>
            </div>
            <div>
              <p className="text-xs text-muted">Contra entrega</p>
              <p className="text-sm text-muted line-through">{soles(contra)}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function TrustBar() {
  const items = [
    { icon: Shield, label: "1 año de garantía internacional" },
    { icon: BadgeCheck, label: "Nuevos sellados" },
    { icon: Store, label: "Tienda física en Cusco · IMA SUMAQ 265" },
    { icon: Headset, label: "Asesoría personalizada" },
  ];
  return (
    <div className="border-y border-primary/15 bg-primary/5 px-4 py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted">
        {items.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2">
            <Icon className="size-5 text-primary" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function PreventaGrid() {
  return (
    <section id="preventa" className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight">
          Preventa <span className="text-primary">iPhone 18</span> & Dúo
        </h2>
        <p className="mx-auto max-w-lg text-muted">
          Fotos oficiales de Apple. Reserva ahora con precio especial de preventa.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function Catalog() {
  const [tab, setTab] = useState<"all" | Series>("all");
  const list = useMemo(
    () => products.filter((p) => p.series === "17" || p.series === "16" || p.series === "15"),
    [],
  );
  const shown = tab === "all" ? list : list.filter((p) => p.series === tab);

  return (
    <section id="modelos" className="bg-bg px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight">
            Más modelos <span className="text-primary">iPhone</span>
          </h2>
          <p className="text-muted">Stock inmediato. Precios por unidad y por volumen.</p>
        </header>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(
            [
              ["all", "Todos"],
              ["17", "iPhone 17"],
              ["16", "iPhone 16"],
              ["15", "iPhone 15"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={
                tab === id
                  ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-bg"
                  : "rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted hover:border-primary hover:text-primary"
              }
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p }: { product: Product }) {
  const msg = waLink(`Hola, quiero consultar ${p.name} ${p.storage}`);
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/70 transition hover:border-primary/40">
      {p.tag && (
        <span
          className={
            p.tag === "preventa"
              ? "absolute right-3 top-3 z-10 rounded-md bg-primary px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-bg"
              : "absolute right-3 top-3 z-10 rounded-md border border-primary/40 bg-bg/80 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-primary"
          }
        >
          {p.tag === "preventa" ? "Preventa" : "Nuevo"}
        </span>
      )}
      <div className="relative flex h-52 items-center justify-center">
        <img src={p.image} alt={`${p.name} ${p.storage}`} className="h-44 w-auto object-contain" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-bold">{p.name}</h3>
        <p className="mb-4 text-sm text-muted">{p.storage}</p>
        <div className="mt-auto flex items-end justify-between border-t border-border pt-3">
          <div>
            <p className="text-xl font-extrabold">{soles(p.preventa ?? p.unit ?? 0)}</p>
            <p className="text-xs font-medium text-primary">{p.preventa ? "Preventa" : "Unidad"}</p>
          </div>
          <p className="text-right text-xs text-muted">
            {p.contra && (
              <>
                Contra entrega
                <br />
                <strong className="text-fg">{soles(p.contra)}</strong>
              </>
            )}
            {p.bulk3 && p.bulk10 && (
              <>
                +3: <strong className="text-fg">{soles(p.bulk3)}</strong>
                <br />
                +10: <strong className="text-fg">{soles(p.bulk10)}</strong>
              </>
            )}
          </p>
        </div>
        <a
          href={msg}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block rounded-lg border border-primary/30 bg-primary/10 py-2.5 text-center text-sm font-semibold text-primary hover:bg-primary hover:text-bg"
        >
          {p.preventa ? "Reservar ahora" : "Consultar"}
        </a>
      </div>
    </article>
  );
}

function PriceTable() {
  const rows = products.filter((p) => p.preventa && p.contra);
  return (
    <section id="precios" className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight">
          Lista de <span className="text-primary">precios</span>
        </h2>
        <p className="text-muted">iPhone 18 Pro · Pro Max · Dúo</p>
      </header>
      <div className="overflow-x-auto rounded-2xl border border-primary/20">
        <table className="w-full min-w-2xl text-left text-sm">
          <thead className="bg-primary/15 text-xs uppercase tracking-wide text-primary">
            <tr>
              <th className="px-4 py-3 font-bold">Modelo</th>
              <th className="px-4 py-3 font-bold">Contra entrega</th>
              <th className="px-4 py-3 font-bold">Preventa</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id} className="border-t border-border text-muted hover:bg-primary/5">
                <td className="px-4 py-3 font-medium text-fg">
                  {p.name} {p.storage}
                </td>
                <td className="px-4 py-3 font-bold text-fg">{soles(p.contra!)}</td>
                <td className="px-4 py-3 font-bold text-primary">{soles(p.preventa!)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="tienda" className="px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 text-3xl font-extrabold tracking-tight">
          Tienda física en <span className="text-primary">Cusco</span>
        </h2>
        <p className="mb-6 text-muted">
          Visítanos, prueba los equipos y retíralos el mismo día.
        </p>
        <p className="text-lg font-extrabold">{STORE_NAME}</p>
        <p className="mt-1 text-muted">{STORE_ADDRESS}</p>
        <a
          href={STORE_MAPS}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 font-semibold text-primary hover:bg-primary hover:text-bg"
        >
          <MapPin className="size-4" />
          Cómo llegar
        </a>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contacto" className="px-4 py-20 text-center">
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight">¿Listo para reservar?</h2>
      <p className="mx-auto mb-3 max-w-md text-lg text-muted">
        Te asesoramos por WhatsApp o en nuestra tienda de Cusco. Preventa con precio especial
        por tiempo limitado.
      </p>
      <p className="mb-8">
        <a
          href={WA_PREVENTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-primary hover:underline"
        >
          <Phone className="size-5" />
          {WA_DISPLAY}
        </a>
      </p>
      <a
        href={WA_PREVENTA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-bg"
      >
        <MessageCircle className="size-5" />
        Escribir por WhatsApp
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-bg px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-2 text-lg font-extrabold">D1 STORE CUSCO</p>
          <p className="max-w-xs text-sm text-muted">
            iPhone originales y sellados con garantía internacional. Tienda física en Cusco.
          </p>
        </div>
        <div>
          <p className="mb-3 font-bold">Productos</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="#preventa" className="hover:text-primary">
                Preventa iPhone 18
              </a>
            </li>
            <li>
              <a href="#modelos" className="hover:text-primary">
                iPhone 17 / 16 / 15
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-bold">Servicios</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>Tienda física en Cusco</li>
            <li>Garantía internacional</li>
            <li>Asesoría personalizada</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-bold">Contacto</p>
          <a
            href={WA_PREVENTA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <Phone className="size-4" />
            {WA_DISPLAY}
          </a>
          <p className="mt-3 text-sm font-semibold text-fg">{STORE_NAME}</p>
          <p className="mt-1 text-sm text-muted">{STORE_ADDRESS}</p>
          <a
            href={STORE_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <MapPin className="size-3.5" />
            Cómo llegar
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-sm text-muted">
        © 2026 D1 Store Cusco · Original · Seguro · Siempre contigo
      </p>
    </footer>
  );
}
