/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall react_native
 */

'use strict';

class ResourceNotFoundError extends Error {
  resourcePath: string;

  constructor(resourcePath: string) {
    super(`The resource \`${resourcePath}\` was not found.`);
    this.resourcePath = resourcePath;
  }
}

module.exports = ResourceNotFoundError;
