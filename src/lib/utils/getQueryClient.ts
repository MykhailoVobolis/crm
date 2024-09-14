import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

// Функція використовується на сервері і створює квері клієнт лише один раз на запит.
// Вона гарантує що дані не будуть розподілятися між різними користувачами та запитами.
const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;
export default getQueryClient;
