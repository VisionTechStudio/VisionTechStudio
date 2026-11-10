import { useEffect, useState } from 'react';
import { getPageRoot } from './runtime/script_main.CV1Flg4e.mjs';

/** The original export is already a React tree, including all Framer motion providers.
 * Render that tree without replacing its markup, layout, content, or interactions.
 */
export default function PreservedPage({ routeId }) {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let cancelled = false;
    getPageRoot({ routeId, localeId: 'default', shouldResolveInitialRouteContentState: true })
      .then(element => { if (!cancelled) setPage(element); })
      .catch(reason => { if (!cancelled) setError(reason); });
    return () => { cancelled = true; };
  }, [routeId]);
  if (error) throw error;
  return <>{page}</>;
}
