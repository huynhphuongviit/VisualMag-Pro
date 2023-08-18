import { format } from 'date-fns';

export default ({ app }, inject) => {
  inject('formatDate', format);
};
