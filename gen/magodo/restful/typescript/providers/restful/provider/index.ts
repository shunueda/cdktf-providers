// https://registry.terraform.io/providers/magodo/restful/0.24.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestfulProviderConfig {
  /**
  * The base URL of the API provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#base_url RestfulProvider#base_url}
  */
  readonly baseUrl: string;
  /**
  * The client configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#client RestfulProvider#client}
  */
  readonly client?: RestfulProviderClient;
  /**
  * The method used to create the resource. Possible values are `PUT` and `POST`. Defaults to `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#create_method RestfulProvider#create_method}
  */
  readonly createMethod?: string;
  /**
  * The method used to delete the resource. Possible values are `DELETE` and `POST`. Defaults to `DELETE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#delete_method RestfulProvider#delete_method}
  */
  readonly deleteMethod?: string;
  /**
  * The header parameters that are applied to each request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#header RestfulProvider#header}
  */
  readonly header?: { [key: string]: string };
  /**
  * Whether to use a JSON Merge Patch as the request body in the PATCH update? Defaults to `false`. This is only effective when `update_method` is set to `PATCH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#merge_patch_disabled RestfulProvider#merge_patch_disabled}
  */
  readonly mergePatchDisabled?: boolean | cdktf.IResolvable;
  /**
  * The query parameters that are applied to each request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#query RestfulProvider#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The OpenAPI security scheme that is be used for auth. Only one of `http`, `apikey` and `oauth2` can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#security RestfulProvider#security}
  */
  readonly security?: RestfulProviderSecurity;
  /**
  * The method used to update the resource. Possible values are `PUT` and `PATCH`. Defaults to `PUT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#update_method RestfulProvider#update_method}
  */
  readonly updateMethod?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#alias RestfulProvider#alias}
  */
  readonly alias?: string;
}
export interface RestfulProviderClientCertificates {
  /**
  * The client certificate for mTLS. Conflicts with `certificate_file`. Requires `key_file` or `key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#certificate RestfulProvider#certificate}
  */
  readonly certificate?: string;
  /**
  * The path of the client certificate file for mTLS. Conflicts with `certificate`. Requires `key_file` or `key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#certificate_file RestfulProvider#certificate_file}
  */
  readonly certificateFile?: string;
  /**
  * The client private key for mTLS. Conflicts with `key_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#key RestfulProvider#key}
  */
  readonly key?: string;
  /**
  * The path of the client private key file for mTLS. Conflicts with `key`. Requires `certificate_file` or `certificate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#key_file RestfulProvider#key_file}
  */
  readonly keyFile?: string;
}

export function restfulProviderClientCertificatesToTerraform(struct?: RestfulProviderClientCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_file: cdktf.stringToTerraform(struct!.certificateFile),
    key: cdktf.stringToTerraform(struct!.key),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function restfulProviderClientCertificatesToHclTerraform(struct?: RestfulProviderClientCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_file: {
      value: cdktf.stringToHclTerraform(struct!.certificateFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderClientRetry {
  /**
  * The maximum allowed retries. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#count RestfulProvider#count}
  */
  readonly count?: number;
  /**
  * The maximum allowed retry wait time. Defaults to `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#max_wait_in_sec RestfulProvider#max_wait_in_sec}
  */
  readonly maxWaitInSec?: number;
  /**
  * The status codes that will retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#status_codes RestfulProvider#status_codes}
  */
  readonly statusCodes: number[];
  /**
  * The initial retry wait time between two retries in second, if there is no `Retry-After` in the response header, or the `Retry-After` is less than this. The wait time will be increased in capped exponential backoff with jitter, at most up to `max_wait_in_sec` (if not null). Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#wait_in_sec RestfulProvider#wait_in_sec}
  */
  readonly waitInSec?: number;
}

export function restfulProviderClientRetryToTerraform(struct?: RestfulProviderClientRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    max_wait_in_sec: cdktf.numberToTerraform(struct!.maxWaitInSec),
    status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.statusCodes),
    wait_in_sec: cdktf.numberToTerraform(struct!.waitInSec),
  }
}


export function restfulProviderClientRetryToHclTerraform(struct?: RestfulProviderClientRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.maxWaitInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.statusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    wait_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.waitInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderClient {
  /**
  * The client certificates for mTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#certificates RestfulProvider#certificates}
  */
  readonly certificates?: RestfulProviderClientCertificates[] | cdktf.IResolvable;
  /**
  * Save cookies during API contracting. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#cookie_enabled RestfulProvider#cookie_enabled}
  */
  readonly cookieEnabled?: boolean | cdktf.IResolvable;
  /**
  * The retry option for the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#retry RestfulProvider#retry}
  */
  readonly retry?: RestfulProviderClientRetry;
  /**
  * The list of certificate file paths of root certificate authorities that clients use when verifying server certificates. If not specified, TLS uses the host's root CA set. Conflicts with `root_ca_certificate_files`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#root_ca_certificate_files RestfulProvider#root_ca_certificate_files}
  */
  readonly rootCaCertificateFiles?: string[];
  /**
  * The list of certificates of root certificate authorities that clients use when verifying server certificates. If not specified, TLS uses the host's root CA set. Conflicts with `root_ca_certificate_files`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#root_ca_certificates RestfulProvider#root_ca_certificates}
  */
  readonly rootCaCertificates?: string[];
  /**
  * Whether a client verifies the server's certificate chain and host name. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#tls_insecure_skip_verify RestfulProvider#tls_insecure_skip_verify}
  */
  readonly tlsInsecureSkipVerify?: boolean | cdktf.IResolvable;
}

export function restfulProviderClientToTerraform(struct?: RestfulProviderClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates: cdktf.listMapper(restfulProviderClientCertificatesToTerraform, false)(struct!.certificates),
    cookie_enabled: cdktf.booleanToTerraform(struct!.cookieEnabled),
    retry: restfulProviderClientRetryToTerraform(struct!.retry),
    root_ca_certificate_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootCaCertificateFiles),
    root_ca_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootCaCertificates),
    tls_insecure_skip_verify: cdktf.booleanToTerraform(struct!.tlsInsecureSkipVerify),
  }
}


export function restfulProviderClientToHclTerraform(struct?: RestfulProviderClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates: {
      value: cdktf.listMapperHcl(restfulProviderClientCertificatesToHclTerraform, false)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "RestfulProviderClientCertificatesList",
    },
    cookie_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cookieEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry: {
      value: restfulProviderClientRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "RestfulProviderClientRetry",
    },
    root_ca_certificate_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rootCaCertificateFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    root_ca_certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rootCaCertificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsInsecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurityApikey {
  /**
  * Specifies how is the API Key is sent. Possible values are `query`, `header` and `cookie`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#in RestfulProvider#in}
  */
  readonly in: string;
  /**
  * The API Key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#name RestfulProvider#name}
  */
  readonly name: string;
  /**
  * The API Key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#value RestfulProvider#value}
  */
  readonly value: string;
}

export function restfulProviderSecurityApikeyToTerraform(struct?: RestfulProviderSecurityApikey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.stringToTerraform(struct!.in),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function restfulProviderSecurityApikeyToHclTerraform(struct?: RestfulProviderSecurityApikey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurityHttpBasic {
  /**
  * The password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#password RestfulProvider#password}
  */
  readonly password: string;
  /**
  * The username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#username RestfulProvider#username}
  */
  readonly username: string;
}

export function restfulProviderSecurityHttpBasicToTerraform(struct?: RestfulProviderSecurityHttpBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function restfulProviderSecurityHttpBasicToHclTerraform(struct?: RestfulProviderSecurityHttpBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurityHttpToken {
  /**
  * The auth scheme. Defaults to `Bearer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#scheme RestfulProvider#scheme}
  */
  readonly scheme?: string;
  /**
  * The value of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#token RestfulProvider#token}
  */
  readonly token: string;
}

export function restfulProviderSecurityHttpTokenToTerraform(struct?: RestfulProviderSecurityHttpToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheme: cdktf.stringToTerraform(struct!.scheme),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function restfulProviderSecurityHttpTokenToHclTerraform(struct?: RestfulProviderSecurityHttpToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurityHttp {
  /**
  * Basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#basic RestfulProvider#basic}
  */
  readonly basic?: RestfulProviderSecurityHttpBasic;
  /**
  * Auth token (e.g. Bearer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#token RestfulProvider#token}
  */
  readonly token?: RestfulProviderSecurityHttpToken;
}

export function restfulProviderSecurityHttpToTerraform(struct?: RestfulProviderSecurityHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: restfulProviderSecurityHttpBasicToTerraform(struct!.basic),
    token: restfulProviderSecurityHttpTokenToTerraform(struct!.token),
  }
}


export function restfulProviderSecurityHttpToHclTerraform(struct?: RestfulProviderSecurityHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: restfulProviderSecurityHttpBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "struct",
      storageClassType: "RestfulProviderSecurityHttpBasic",
    },
    token: {
      value: restfulProviderSecurityHttpTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "struct",
      storageClassType: "RestfulProviderSecurityHttpToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurityOauth2ClientCredentials {
  /**
  * The application's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#client_id RestfulProvider#client_id}
  */
  readonly clientId: string;
  /**
  * The application's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#client_secret RestfulProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The additional parameters for requests to the token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#endpoint_params RestfulProvider#endpoint_params}
  */
  readonly endpointParams?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Specifies how is th client ID & secret sent. Possible values are `params` and `header`. If absent, the style used will be auto detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#in RestfulProvider#in}
  */
  readonly in?: string;
  /**
  * The optional requested permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#scopes RestfulProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token URL to be used for this flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#token_url RestfulProvider#token_url}
  */
  readonly tokenUrl: string;
}

export function restfulProviderSecurityOauth2ClientCredentialsToTerraform(struct?: RestfulProviderSecurityOauth2ClientCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    endpoint_params: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.endpointParams),
    in: cdktf.stringToTerraform(struct!.in),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function restfulProviderSecurityOauth2ClientCredentialsToHclTerraform(struct?: RestfulProviderSecurityOauth2ClientCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_params: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.endpointParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurityOauth2Password {
  /**
  * The application's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#client_id RestfulProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The application's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#client_secret RestfulProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Specifies how is th client ID & secret sent. Possible values are `params` and `header`. If absent, the style used will be auto detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#in RestfulProvider#in}
  */
  readonly in?: string;
  /**
  * The password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#password RestfulProvider#password}
  */
  readonly password: string;
  /**
  * The optional requested permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#scopes RestfulProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token URL to be used for this flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#token_url RestfulProvider#token_url}
  */
  readonly tokenUrl: string;
  /**
  * The username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#username RestfulProvider#username}
  */
  readonly username: string;
}

export function restfulProviderSecurityOauth2PasswordToTerraform(struct?: RestfulProviderSecurityOauth2Password | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    in: cdktf.stringToTerraform(struct!.in),
    password: cdktf.stringToTerraform(struct!.password),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function restfulProviderSecurityOauth2PasswordToHclTerraform(struct?: RestfulProviderSecurityOauth2Password | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurityOauth2RefreshToken {
  /**
  * The application's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#client_id RestfulProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The application's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#client_secret RestfulProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Specifies how is th client ID & secret sent. Possible values are `params` and `header`. If absent, the style used will be auto detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#in RestfulProvider#in}
  */
  readonly in?: string;
  /**
  * The refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#refresh_token RestfulProvider#refresh_token}
  */
  readonly refreshToken: string;
  /**
  * The optional requested permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#scopes RestfulProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of the access token. Defaults to "Bearer".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#token_type RestfulProvider#token_type}
  */
  readonly tokenType?: string;
  /**
  * The token URL to be used for this flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#token_url RestfulProvider#token_url}
  */
  readonly tokenUrl: string;
}

export function restfulProviderSecurityOauth2RefreshTokenToTerraform(struct?: RestfulProviderSecurityOauth2RefreshToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    in: cdktf.stringToTerraform(struct!.in),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_type: cdktf.stringToTerraform(struct!.tokenType),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function restfulProviderSecurityOauth2RefreshTokenToHclTerraform(struct?: RestfulProviderSecurityOauth2RefreshToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_type: {
      value: cdktf.stringToHclTerraform(struct!.tokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurityOauth2 {
  /**
  * [Client credentials](https://www.rfc-editor.org/rfc/rfc6749#section-4.4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#client_credentials RestfulProvider#client_credentials}
  */
  readonly clientCredentials?: RestfulProviderSecurityOauth2ClientCredentials;
  /**
  * [Resource owner password credential](https://www.rfc-editor.org/rfc/rfc6749#section-4.3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#password RestfulProvider#password}
  */
  readonly password?: RestfulProviderSecurityOauth2Password;
  /**
  * [Refresh token](https://www.rfc-editor.org/rfc/rfc6749#section-6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#refresh_token RestfulProvider#refresh_token}
  */
  readonly refreshToken?: RestfulProviderSecurityOauth2RefreshToken;
}

export function restfulProviderSecurityOauth2ToTerraform(struct?: RestfulProviderSecurityOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_credentials: restfulProviderSecurityOauth2ClientCredentialsToTerraform(struct!.clientCredentials),
    password: restfulProviderSecurityOauth2PasswordToTerraform(struct!.password),
    refresh_token: restfulProviderSecurityOauth2RefreshTokenToTerraform(struct!.refreshToken),
  }
}


export function restfulProviderSecurityOauth2ToHclTerraform(struct?: RestfulProviderSecurityOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_credentials: {
      value: restfulProviderSecurityOauth2ClientCredentialsToHclTerraform(struct!.clientCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "RestfulProviderSecurityOauth2ClientCredentials",
    },
    password: {
      value: restfulProviderSecurityOauth2PasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "RestfulProviderSecurityOauth2Password",
    },
    refresh_token: {
      value: restfulProviderSecurityOauth2RefreshTokenToHclTerraform(struct!.refreshToken),
      isBlock: true,
      type: "struct",
      storageClassType: "RestfulProviderSecurityOauth2RefreshToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface RestfulProviderSecurity {
  /**
  * Configuration for the API Key authentication scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#apikey RestfulProvider#apikey}
  */
  readonly apikey?: RestfulProviderSecurityApikey[] | cdktf.IResolvable;
  /**
  * Configuration for the HTTP authentication scheme. Exactly one of `basic` and `token` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#http RestfulProvider#http}
  */
  readonly http?: RestfulProviderSecurityHttp;
  /**
  * Configuration for the OAuth2 authentication scheme. Exactly one of `password`, `client_credentials` and `refresh_token` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#oauth2 RestfulProvider#oauth2}
  */
  readonly oauth2?: RestfulProviderSecurityOauth2;
}

export function restfulProviderSecurityToTerraform(struct?: RestfulProviderSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apikey: cdktf.listMapper(restfulProviderSecurityApikeyToTerraform, false)(struct!.apikey),
    http: restfulProviderSecurityHttpToTerraform(struct!.http),
    oauth2: restfulProviderSecurityOauth2ToTerraform(struct!.oauth2),
  }
}


export function restfulProviderSecurityToHclTerraform(struct?: RestfulProviderSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apikey: {
      value: cdktf.listMapperHcl(restfulProviderSecurityApikeyToHclTerraform, false)(struct!.apikey),
      isBlock: true,
      type: "set",
      storageClassType: "RestfulProviderSecurityApikeyList",
    },
    http: {
      value: restfulProviderSecurityHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "RestfulProviderSecurityHttp",
    },
    oauth2: {
      value: restfulProviderSecurityOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "RestfulProviderSecurityOauth2",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs restful}
*/
export class RestfulProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "restful";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestfulProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestfulProvider to import
  * @param importFromId The id of the existing RestfulProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestfulProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "restful", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magodo/restful/0.24.0/docs restful} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestfulProviderConfig
  */
  public constructor(scope: Construct, id: string, config: RestfulProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'restful',
      terraformGeneratorMetadata: {
        providerName: 'restful',
        providerVersion: '0.24.0',
        providerVersionConstraint: '0.24.0'
      },
      terraformProviderSource: 'magodo/restful'
    });
    this._baseUrl = config.baseUrl;
    this._client = config.client;
    this._createMethod = config.createMethod;
    this._deleteMethod = config.deleteMethod;
    this._header = config.header;
    this._mergePatchDisabled = config.mergePatchDisabled;
    this._query = config.query;
    this._security = config.security;
    this._updateMethod = config.updateMethod;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // client - computed: false, optional: true, required: false
  private _client?: RestfulProviderClient; 
  public get client() {
    return this._client;
  }
  public set client(value: RestfulProviderClient | undefined) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // create_method - computed: false, optional: true, required: false
  private _createMethod?: string; 
  public get createMethod() {
    return this._createMethod;
  }
  public set createMethod(value: string | undefined) {
    this._createMethod = value;
  }
  public resetCreateMethod() {
    this._createMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMethodInput() {
    return this._createMethod;
  }

  // delete_method - computed: false, optional: true, required: false
  private _deleteMethod?: string; 
  public get deleteMethod() {
    return this._deleteMethod;
  }
  public set deleteMethod(value: string | undefined) {
    this._deleteMethod = value;
  }
  public resetDeleteMethod() {
    this._deleteMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMethodInput() {
    return this._deleteMethod;
  }

  // header - computed: false, optional: true, required: false
  private _header?: { [key: string]: string }; 
  public get header() {
    return this._header;
  }
  public set header(value: { [key: string]: string } | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // merge_patch_disabled - computed: false, optional: true, required: false
  private _mergePatchDisabled?: boolean | cdktf.IResolvable; 
  public get mergePatchDisabled() {
    return this._mergePatchDisabled;
  }
  public set mergePatchDisabled(value: boolean | cdktf.IResolvable | undefined) {
    this._mergePatchDisabled = value;
  }
  public resetMergePatchDisabled() {
    this._mergePatchDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergePatchDisabledInput() {
    return this._mergePatchDisabled;
  }

  // query - computed: false, optional: true, required: false
  private _query?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get query() {
    return this._query;
  }
  public set query(value: { [key: string]: string[] } | cdktf.IResolvable | undefined) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // security - computed: false, optional: true, required: false
  private _security?: RestfulProviderSecurity; 
  public get security() {
    return this._security;
  }
  public set security(value: RestfulProviderSecurity | undefined) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // update_method - computed: false, optional: true, required: false
  private _updateMethod?: string; 
  public get updateMethod() {
    return this._updateMethod;
  }
  public set updateMethod(value: string | undefined) {
    this._updateMethod = value;
  }
  public resetUpdateMethod() {
    this._updateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMethodInput() {
    return this._updateMethod;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_url: cdktf.stringToTerraform(this._baseUrl),
      client: restfulProviderClientToTerraform(this._client),
      create_method: cdktf.stringToTerraform(this._createMethod),
      delete_method: cdktf.stringToTerraform(this._deleteMethod),
      header: cdktf.hashMapper(cdktf.stringToTerraform)(this._header),
      merge_patch_disabled: cdktf.booleanToTerraform(this._mergePatchDisabled),
      query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._query),
      security: restfulProviderSecurityToTerraform(this._security),
      update_method: cdktf.stringToTerraform(this._updateMethod),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client: {
        value: restfulProviderClientToHclTerraform(this._client),
        isBlock: true,
        type: "struct",
        storageClassType: "RestfulProviderClient",
      },
      create_method: {
        value: cdktf.stringToHclTerraform(this._createMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_method: {
        value: cdktf.stringToHclTerraform(this._deleteMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._header),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      merge_patch_disabled: {
        value: cdktf.booleanToHclTerraform(this._mergePatchDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._query),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      security: {
        value: restfulProviderSecurityToHclTerraform(this._security),
        isBlock: true,
        type: "struct",
        storageClassType: "RestfulProviderSecurity",
      },
      update_method: {
        value: cdktf.stringToHclTerraform(this._updateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
