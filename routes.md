# Route Structure

## Main Routes

- `/` - Home page
- `/gastronomia/tapas` - Tapas Españolas page
- `/gastronomia/cortes` - Cortes Finos page
- `/gastronomia/vinos` - Carta de Vinos page
- `/gastronomia/tacos` - Tacos Gourmet page

## Component Structure

All gastronomy pages are lazy-loaded using React.lazy():
```tsx
const TapasPage = React.lazy(() => import('./pages/gastronomia/tapas'));
const CortesPage = React.lazy(() => import('./pages/gastronomia/cortes'));
const TacosPage = React.lazy(() => import('./pages/gastronomia/tacos'));
const VinosPage = React.lazy(() => import('./pages/gastronomia/vinos'));
```

## Navigation

Navigation is handled through React Router's `Link` component for client-side routing:
```tsx
<Link to="/gastronomia/tapas">Tapas Españolas</Link>
```

## Loading States

A Suspense fallback is provided for lazy-loaded routes:
```tsx
<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
  <Routes>
    <Route path="/gastronomia/tapas" element={<TapasPage />} />
    ...
  </Routes>
</Suspense>
```