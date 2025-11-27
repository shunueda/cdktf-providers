// https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdxProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs#adx_endpoint AdxProvider#adx_endpoint}
  */
  readonly adxEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs#client_id AdxProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs#client_secret AdxProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs#lazy_init AdxProvider#lazy_init}
  */
  readonly lazyInit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs#tenant_id AdxProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs#alias AdxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs adx}
*/
export class AdxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdxProvider to import
  * @param importFromId The id of the existing AdxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs adx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AdxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'adx',
      terraformGeneratorMetadata: {
        providerName: 'adx',
        providerVersion: '0.0.35',
        providerVersionConstraint: '0.0.35'
      },
      terraformProviderSource: 'favoretti/adx'
    });
    this._adxEndpoint = config.adxEndpoint;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._lazyInit = config.lazyInit;
    this._tenantId = config.tenantId;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adx_endpoint - computed: false, optional: true, required: false
  private _adxEndpoint?: string; 
  public get adxEndpoint() {
    return this._adxEndpoint;
  }
  public set adxEndpoint(value: string | undefined) {
    this._adxEndpoint = value;
  }
  public resetAdxEndpoint() {
    this._adxEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adxEndpointInput() {
    return this._adxEndpoint;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // lazy_init - computed: false, optional: true, required: false
  private _lazyInit?: boolean | cdktf.IResolvable; 
  public get lazyInit() {
    return this._lazyInit;
  }
  public set lazyInit(value: boolean | cdktf.IResolvable | undefined) {
    this._lazyInit = value;
  }
  public resetLazyInit() {
    this._lazyInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lazyInitInput() {
    return this._lazyInit;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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
      adx_endpoint: cdktf.stringToTerraform(this._adxEndpoint),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      lazy_init: cdktf.booleanToTerraform(this._lazyInit),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adx_endpoint: {
        value: cdktf.stringToHclTerraform(this._adxEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lazy_init: {
        value: cdktf.booleanToHclTerraform(this._lazyInit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
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
