// https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Curl2ProviderConfig {
  /**
  * Use to disable the TLS verification. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#disable_tls Curl2Provider#disable_tls}
  */
  readonly disableTls?: boolean | cdktf.IResolvable;
  /**
  * Request Timeout in milliseconds. Defaults to 0, no timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#timeout_ms Curl2Provider#timeout_ms}
  */
  readonly timeoutMs?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#alias Curl2Provider#alias}
  */
  readonly alias?: string;
  /**
  * auth0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#auth0 Curl2Provider#auth0}
  */
  readonly auth0?: Curl2ProviderAuth0;
  /**
  * azure_ad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#azure_ad Curl2Provider#azure_ad}
  */
  readonly azureAd?: Curl2ProviderAzureAd;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#retry Curl2Provider#retry}
  */
  readonly retry?: Curl2ProviderRetry;
}
export interface Curl2ProviderAuth0 {
  /**
  * Application's Client ID. You can also set it as ENV variable `AUTH0_CLIENT_ID`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#client_id Curl2Provider#client_id}
  */
  readonly clientId?: string;
  /**
  * Application's Client Secret. You can also set it as ENV variable `AUTH0_CLIENT_SECRET`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#client_secret Curl2Provider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Auth0 domain URL in the format `https://<your-tenant-name>.auth0.com`. You can also set it as ENV variable `AUTH0_DOMAIN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#domain Curl2Provider#domain}
  */
  readonly domain?: string;
}

export function curl2ProviderAuth0ToTerraform(struct?: Curl2ProviderAuth0 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function curl2ProviderAuth0ToHclTerraform(struct?: Curl2ProviderAuth0 | cdktf.IResolvable): any {
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
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface Curl2ProviderAzureAd {
  /**
  * Application ID of an Azure service principal. You can also set it as ENV variable `AZURE_CLIENT_ID`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#client_id Curl2Provider#client_id}
  */
  readonly clientId?: string;
  /**
  * Password of the Azure service principal. You can also set it as ENV variable `AZURE_CLIENT_SECRET`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#client_secret Curl2Provider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * ID of the application's Azure AD tenant. You can also set it as ENV variable `AZURE_TENANT_ID`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#tenant_id Curl2Provider#tenant_id}
  */
  readonly tenantId?: string;
}

export function curl2ProviderAzureAdToTerraform(struct?: Curl2ProviderAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function curl2ProviderAzureAdToHclTerraform(struct?: Curl2ProviderAzureAd | cdktf.IResolvable): any {
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface Curl2ProviderRetry {
  /**
  * The maximum delay between retry requests in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#max_delay_ms Curl2Provider#max_delay_ms}
  */
  readonly maxDelayMs?: number;
  /**
  * The minimum delay between retry requests in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#min_delay_ms Curl2Provider#min_delay_ms}
  */
  readonly minDelayMs?: number;
  /**
  * The number of times the request is to be retried. For example, if 2 is specified, the request will be tried a maximum of 3 times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#retry_attempts Curl2Provider#retry_attempts}
  */
  readonly retryAttempts?: number;
}

export function curl2ProviderRetryToTerraform(struct?: Curl2ProviderRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_delay_ms: cdktf.numberToTerraform(struct!.maxDelayMs),
    min_delay_ms: cdktf.numberToTerraform(struct!.minDelayMs),
    retry_attempts: cdktf.numberToTerraform(struct!.retryAttempts),
  }
}


export function curl2ProviderRetryToHclTerraform(struct?: Curl2ProviderRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_delay_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_delay_ms: {
      value: cdktf.numberToHclTerraform(struct!.minDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.retryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs curl2}
*/
export class Curl2Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "curl2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Curl2Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Curl2Provider to import
  * @param importFromId The id of the existing Curl2Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Curl2Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "curl2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs curl2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Curl2ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Curl2ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'curl2',
      terraformGeneratorMetadata: {
        providerName: 'curl2',
        providerVersion: '1.6.1'
      },
      terraformProviderSource: 'mehulgohil/curl2'
    });
    this._disableTls = config.disableTls;
    this._timeoutMs = config.timeoutMs;
    this._alias = config.alias;
    this._auth0 = config.auth0;
    this._azureAd = config.azureAd;
    this._retry = config.retry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_tls - computed: false, optional: true, required: false
  private _disableTls?: boolean | cdktf.IResolvable; 
  public get disableTls() {
    return this._disableTls;
  }
  public set disableTls(value: boolean | cdktf.IResolvable | undefined) {
    this._disableTls = value;
  }
  public resetDisableTls() {
    this._disableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsInput() {
    return this._disableTls;
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this._timeoutMs;
  }
  public set timeoutMs(value: number | undefined) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
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

  // auth0 - computed: false, optional: true, required: false
  private _auth0?: Curl2ProviderAuth0; 
  public get auth0() {
    return this._auth0;
  }
  public set auth0(value: Curl2ProviderAuth0 | undefined) {
    this._auth0 = value;
  }
  public resetAuth0() {
    this._auth0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auth0Input() {
    return this._auth0;
  }

  // azure_ad - computed: false, optional: true, required: false
  private _azureAd?: Curl2ProviderAzureAd; 
  public get azureAd() {
    return this._azureAd;
  }
  public set azureAd(value: Curl2ProviderAzureAd | undefined) {
    this._azureAd = value;
  }
  public resetAzureAd() {
    this._azureAd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdInput() {
    return this._azureAd;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: Curl2ProviderRetry; 
  public get retry() {
    return this._retry;
  }
  public set retry(value: Curl2ProviderRetry | undefined) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_tls: cdktf.booleanToTerraform(this._disableTls),
      timeout_ms: cdktf.numberToTerraform(this._timeoutMs),
      alias: cdktf.stringToTerraform(this._alias),
      auth0: curl2ProviderAuth0ToTerraform(this._auth0),
      azure_ad: curl2ProviderAzureAdToTerraform(this._azureAd),
      retry: curl2ProviderRetryToTerraform(this._retry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_tls: {
        value: cdktf.booleanToHclTerraform(this._disableTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout_ms: {
        value: cdktf.numberToHclTerraform(this._timeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth0: {
        value: curl2ProviderAuth0ToHclTerraform(this._auth0),
        isBlock: true,
        type: "struct",
        storageClassType: "Curl2ProviderAuth0",
      },
      azure_ad: {
        value: curl2ProviderAzureAdToHclTerraform(this._azureAd),
        isBlock: true,
        type: "struct",
        storageClassType: "Curl2ProviderAzureAd",
      },
      retry: {
        value: curl2ProviderRetryToHclTerraform(this._retry),
        isBlock: true,
        type: "struct",
        storageClassType: "Curl2ProviderRetry",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
