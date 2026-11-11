import { useEffect, useState } from 'react';
import { getPageRoot } from '../preserved/runtime/script_main.CV1Flg4e.mjs';
import '../blog/blog.css';

const articleIds = {
  'why-most-digital-marketing-campaigns-fail': 'UJFXqFJXK',
  'the-psychology-behind-high-converting-branding': 'GGaoHRHkm',
  'design-that-sells-the-psychology-behind-branding': 'nI6B2ilpa',
  'media-planning-101-spend-smarter-not-more': 'p7FK4Ib4y',
};

export default function BlogArticlePage({ slug }) {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let cancelled = false;
    getPageRoot({ routeId: 'ATgWMpgqY', collectionItemId: articleIds[slug], pathVariables: { nClQrfiKc: slug }, localeId: 'default', shouldResolveInitialRouteContentState: true })
      .then(async element => {
        // Load the record before mounting its suspense-driven original page.
        const [{ default: collection }, { w: QueryClient }] = await Promise.all([
          import('../preserved/runtime/N5uSTgBOG64ym794xUT6NJYMx38wx4OBNwfcOk5w21I.5KAXWGTe.mjs'),
          import('../preserved/runtime/framer.GwocWY3_.mjs'),
        ]);
        await new QueryClient().query({
          from: { data: collection, type: 'Collection' },
          select: ['ADNxV3iO3','b2lMkWBjR','sALosFwHN','QJxM7lSBx','IHKBaxBWg','kCzl04ujD','qwUWsuEzF'].map(name => ({ name, type: 'Identifier' })),
          where: { left: { name: 'nClQrfiKc', type: 'Identifier' }, operator: '==', right: { type: 'LiteralValue', value: slug }, type: 'BinaryOperation' },
        }, 'default');
        if (!cancelled) setPage(element);
      })
      .catch(reason => { if (!cancelled) setError(reason); });
    return () => { cancelled = true; };
  }, [slug]);
  if (error) throw error;
  return page;
}
