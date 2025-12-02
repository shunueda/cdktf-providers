// https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmcProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs#client_id VmcProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs#client_secret VmcProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs#csp_url VmcProvider#csp_url}
  */
  readonly cspUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs#org_id VmcProvider#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs#refresh_token VmcProvider#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs#vmc_url VmcProvider#vmc_url}
  */
  readonly vmcUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs#alias VmcProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs vmc}
*/
export class VmcProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmcProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmcProvider to import
  * @param importFromId The id of the existing VmcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs vmc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VmcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vmc',
      terraformGeneratorMetadata: {
        providerName: 'vmc',
        providerVersion: '1.15.6',
        providerVersionConstraint: '1.15.6'
      },
      terraformProviderSource: 'vmware/vmc'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._cspUrl = config.cspUrl;
    this._orgId = config.orgId;
    this._refreshToken = config.refreshToken;
    this._vmcUrl = config.vmcUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // csp_url - computed: false, optional: true, required: false
  private _cspUrl?: string; 
  public get cspUrl() {
    return this._cspUrl;
  }
  public set cspUrl(value: string | undefined) {
    this._cspUrl = value;
  }
  public resetCspUrl() {
    this._cspUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspUrlInput() {
    return this._cspUrl;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string | undefined) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this._refreshToken;
  }
  public set refreshToken(value: string | undefined) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // vmc_url - computed: false, optional: true, required: false
  private _vmcUrl?: string; 
  public get vmcUrl() {
    return this._vmcUrl;
  }
  public set vmcUrl(value: string | undefined) {
    this._vmcUrl = value;
  }
  public resetVmcUrl() {
    this._vmcUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcUrlInput() {
    return this._vmcUrl;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      csp_url: cdktf.stringToTerraform(this._cspUrl),
      org_id: cdktf.stringToTerraform(this._orgId),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      vmc_url: cdktf.stringToTerraform(this._vmcUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      csp_url: {
        value: cdktf.stringToHclTerraform(this._cspUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token: {
        value: cdktf.stringToHclTerraform(this._refreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmc_url: {
        value: cdktf.stringToHclTerraform(this._vmcUrl),
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
