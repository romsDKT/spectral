import * as path from '@stoplight/path';

import { Document } from '../../../document';
import { isAsyncApiv2 } from '../../../formats';
import { readParsable } from '../../../fs/reader';
import { Spectral } from '../../../index';
import * as Parsers from '../../../parsers';
import { httpAndFileResolver } from '../../../resolvers/http-and-file';

describe('streetlights', () => {
  const streetlights = path.join(__dirname, './__fixtures__/streetlights.yaml');

  const s = new Spectral({ resolver: httpAndFileResolver });
  s.registerFormat('aas2', isAsyncApiv2);

  test('can be linted', async () => {
    await s.loadRuleset('spectral:aas');

    const document = new Document(await readParsable(streetlights, { encoding: 'utf8' }), Parsers.Yaml, streetlights);

    const results = await s.run(document);

    expect(results).toEqual([
      expect.objectContaining({
        code: 'asyncapi-info-contact',
        path: ['info'],
      }),
    ]);
  });
});
