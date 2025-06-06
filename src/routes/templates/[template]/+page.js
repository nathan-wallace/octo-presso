export const prerender = true;

export function load({ params }) {
  return { template: params.template };
}
