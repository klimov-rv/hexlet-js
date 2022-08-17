import _ from 'lodash';

export default function getFileInfo(domainString) {
  let domainScheme = 'http';
  if (domainString.startsWith('https')) {
    domainScheme = 'https';
  } else {
    domainScheme = 'http';
  }
  const domainName = _.first(_.last(domainString.split('//')).split('/'));
  const domainInfo = { scheme: domainScheme, name: domainName };

  return domainInfo;
}
