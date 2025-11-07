// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolterraProviderConfig {
  /**
  * The volt API CA Cert for api operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#api_ca_cert VolterraProvider#api_ca_cert}
  */
  readonly apiCaCert?: string;
  /**
  * The volt API cert for api operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#api_cert VolterraProvider#api_cert}
  */
  readonly apiCert?: string;
  /**
  * The volt API key for api operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#api_key VolterraProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Absolute path to p12 file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#api_p12_file VolterraProvider#api_p12_file}
  */
  readonly apiP12File?: string;
  /**
  * The tenant values, used only when vesenv is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#tenant VolterraProvider#tenant}
  */
  readonly tenant?: string;
  /**
  * The volt API test flag .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#test VolterraProvider#test}
  */
  readonly test?: boolean | cdktf.IResolvable;
  /**
  * The Volt API call timeout value, by default its 20s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#timeout VolterraProvider#timeout}
  */
  readonly timeout?: string;
  /**
  * The volt API server url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#url VolterraProvider#url}
  */
  readonly url?: string;
  /**
  * The vesenv flag for itnernal use .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#vesenv VolterraProvider#vesenv}
  */
  readonly vesenv?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#alias VolterraProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs volterra}
*/
export class VolterraProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolterraProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolterraProvider to import
  * @param importFromId The id of the existing VolterraProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolterraProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs volterra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolterraProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VolterraProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'volterra',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      terraformProviderSource: 'volterraedge/volterra'
    });
    this._apiCaCert = config.apiCaCert;
    this._apiCert = config.apiCert;
    this._apiKey = config.apiKey;
    this._apiP12File = config.apiP12File;
    this._tenant = config.tenant;
    this._test = config.test;
    this._timeout = config.timeout;
    this._url = config.url;
    this._vesenv = config.vesenv;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_ca_cert - computed: false, optional: true, required: false
  private _apiCaCert?: string; 
  public get apiCaCert() {
    return this._apiCaCert;
  }
  public set apiCaCert(value: string | undefined) {
    this._apiCaCert = value;
  }
  public resetApiCaCert() {
    this._apiCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCaCertInput() {
    return this._apiCaCert;
  }

  // api_cert - computed: false, optional: true, required: false
  private _apiCert?: string; 
  public get apiCert() {
    return this._apiCert;
  }
  public set apiCert(value: string | undefined) {
    this._apiCert = value;
  }
  public resetApiCert() {
    this._apiCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCertInput() {
    return this._apiCert;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_p12_file - computed: false, optional: true, required: false
  private _apiP12File?: string; 
  public get apiP12File() {
    return this._apiP12File;
  }
  public set apiP12File(value: string | undefined) {
    this._apiP12File = value;
  }
  public resetApiP12File() {
    this._apiP12File = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiP12FileInput() {
    return this._apiP12File;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this._tenant;
  }
  public set tenant(value: string | undefined) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // test - computed: false, optional: true, required: false
  private _test?: boolean | cdktf.IResolvable; 
  public get test() {
    return this._test;
  }
  public set test(value: boolean | cdktf.IResolvable | undefined) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: string | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // vesenv - computed: false, optional: true, required: false
  private _vesenv?: boolean | cdktf.IResolvable; 
  public get vesenv() {
    return this._vesenv;
  }
  public set vesenv(value: boolean | cdktf.IResolvable | undefined) {
    this._vesenv = value;
  }
  public resetVesenv() {
    this._vesenv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vesenvInput() {
    return this._vesenv;
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
      api_ca_cert: cdktf.stringToTerraform(this._apiCaCert),
      api_cert: cdktf.stringToTerraform(this._apiCert),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_p12_file: cdktf.stringToTerraform(this._apiP12File),
      tenant: cdktf.stringToTerraform(this._tenant),
      test: cdktf.booleanToTerraform(this._test),
      timeout: cdktf.stringToTerraform(this._timeout),
      url: cdktf.stringToTerraform(this._url),
      vesenv: cdktf.booleanToTerraform(this._vesenv),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_ca_cert: {
        value: cdktf.stringToHclTerraform(this._apiCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_cert: {
        value: cdktf.stringToHclTerraform(this._apiCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_p12_file: {
        value: cdktf.stringToHclTerraform(this._apiP12File),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test: {
        value: cdktf.booleanToHclTerraform(this._test),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vesenv: {
        value: cdktf.booleanToHclTerraform(this._vesenv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
