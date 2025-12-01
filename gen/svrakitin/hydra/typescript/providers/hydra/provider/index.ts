// https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HydraProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#endpoint HydraProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#alias HydraProvider#alias}
  */
  readonly alias?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#authentication HydraProvider#authentication}
  */
  readonly authentication?: HydraProviderAuthentication;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#retry_policy HydraProvider#retry_policy}
  */
  readonly retryPolicy?: HydraProviderRetryPolicy;
}
export interface HydraProviderAuthenticationBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#password HydraProvider#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#username HydraProvider#username}
  */
  readonly username: string;
}

export function hydraProviderAuthenticationBasicToTerraform(struct?: HydraProviderAuthenticationBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function hydraProviderAuthenticationBasicToHclTerraform(struct?: HydraProviderAuthenticationBasic): any {
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

export interface HydraProviderAuthenticationHttpHeader {
  /**
  * Name of the HTTP header to send for authorization.  Defaults to Authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#name HydraProvider#name}
  */
  readonly name?: string;
  /**
  * Value presented in the configured HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#value HydraProvider#value}
  */
  readonly value: string;
}

export function hydraProviderAuthenticationHttpHeaderToTerraform(struct?: HydraProviderAuthenticationHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hydraProviderAuthenticationHttpHeaderToHclTerraform(struct?: HydraProviderAuthenticationHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export interface HydraProviderAuthenticationOauth2 {
  /**
  * Audience for an issued access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#audience HydraProvider#audience}
  */
  readonly audience?: string[];
  /**
  * Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#client_id HydraProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#client_secret HydraProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Scopes for an issued access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#scopes HydraProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * Token endpoint to request an access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#token_endpoint HydraProvider#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function hydraProviderAuthenticationOauth2ToTerraform(struct?: HydraProviderAuthenticationOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audience),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function hydraProviderAuthenticationOauth2ToHclTerraform(struct?: HydraProviderAuthenticationOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audience),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HydraProviderAuthenticationTls {
  /**
  * PEM-encoded client certificate for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#certificate HydraProvider#certificate}
  */
  readonly certificate: string;
  /**
  * Controls whether a client verifies the server's certificate chain and host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#insecure_skip_verify HydraProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * PEM-encoded client certificate key for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#key HydraProvider#key}
  */
  readonly key: string;
}

export function hydraProviderAuthenticationTlsToTerraform(struct?: HydraProviderAuthenticationTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function hydraProviderAuthenticationTlsToHclTerraform(struct?: HydraProviderAuthenticationTls): any {
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
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HydraProviderAuthentication {
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#basic HydraProvider#basic}
  */
  readonly basic?: HydraProviderAuthenticationBasic;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#http_header HydraProvider#http_header}
  */
  readonly httpHeader?: HydraProviderAuthenticationHttpHeader;
  /**
  * oauth2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#oauth2 HydraProvider#oauth2}
  */
  readonly oauth2?: HydraProviderAuthenticationOauth2;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#tls HydraProvider#tls}
  */
  readonly tls?: HydraProviderAuthenticationTls;
}

export function hydraProviderAuthenticationToTerraform(struct?: HydraProviderAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: hydraProviderAuthenticationBasicToTerraform(struct!.basic),
    http_header: hydraProviderAuthenticationHttpHeaderToTerraform(struct!.httpHeader),
    oauth2: hydraProviderAuthenticationOauth2ToTerraform(struct!.oauth2),
    tls: hydraProviderAuthenticationTlsToTerraform(struct!.tls),
  }
}


export function hydraProviderAuthenticationToHclTerraform(struct?: HydraProviderAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: hydraProviderAuthenticationBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "list",
      storageClassType: "HydraProviderAuthenticationBasicList",
    },
    http_header: {
      value: hydraProviderAuthenticationHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "HydraProviderAuthenticationHttpHeaderList",
    },
    oauth2: {
      value: hydraProviderAuthenticationOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "list",
      storageClassType: "HydraProviderAuthenticationOauth2List",
    },
    tls: {
      value: hydraProviderAuthenticationTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "HydraProviderAuthenticationTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HydraProviderRetryPolicy {
  /**
  * Enable or disable retry behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#enabled HydraProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum time to spend retrying requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#max_elapsed_time HydraProvider#max_elapsed_time}
  */
  readonly maxElapsedTime?: string;
  /**
  * Maximum interval between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#max_interval HydraProvider#max_interval}
  */
  readonly maxInterval?: string;
  /**
  * Randomization factor to add jitter to retry intervals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#randomization_factor HydraProvider#randomization_factor}
  */
  readonly randomizationFactor?: number;
}

export function hydraProviderRetryPolicyToTerraform(struct?: HydraProviderRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_elapsed_time: cdktf.stringToTerraform(struct!.maxElapsedTime),
    max_interval: cdktf.stringToTerraform(struct!.maxInterval),
    randomization_factor: cdktf.numberToTerraform(struct!.randomizationFactor),
  }
}


export function hydraProviderRetryPolicyToHclTerraform(struct?: HydraProviderRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_elapsed_time: {
      value: cdktf.stringToHclTerraform(struct!.maxElapsedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    randomization_factor: {
      value: cdktf.numberToHclTerraform(struct!.randomizationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs hydra}
*/
export class HydraProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hydra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HydraProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HydraProvider to import
  * @param importFromId The id of the existing HydraProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HydraProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hydra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs hydra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HydraProviderConfig
  */
  public constructor(scope: Construct, id: string, config: HydraProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'hydra',
      terraformGeneratorMetadata: {
        providerName: 'hydra',
        providerVersion: '0.5.4',
        providerVersionConstraint: '0.5.4'
      },
      terraformProviderSource: 'svrakitin/hydra'
    });
    this._endpoint = config.endpoint;
    this._alias = config.alias;
    this._authentication = config.authentication;
    this._retryPolicy = config.retryPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication?: HydraProviderAuthentication; 
  public get authentication() {
    return this._authentication;
  }
  public set authentication(value: HydraProviderAuthentication | undefined) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: HydraProviderRetryPolicy; 
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public set retryPolicy(value: HydraProviderRetryPolicy | undefined) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      alias: cdktf.stringToTerraform(this._alias),
      authentication: hydraProviderAuthenticationToTerraform(this._authentication),
      retry_policy: hydraProviderRetryPolicyToTerraform(this._retryPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      authentication: {
        value: hydraProviderAuthenticationToHclTerraform(this._authentication),
        isBlock: true,
        type: "list",
        storageClassType: "HydraProviderAuthenticationList",
      },
      retry_policy: {
        value: hydraProviderRetryPolicyToHclTerraform(this._retryPolicy),
        isBlock: true,
        type: "list",
        storageClassType: "HydraProviderRetryPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
