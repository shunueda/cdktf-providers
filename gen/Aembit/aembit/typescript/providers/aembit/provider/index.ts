// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AembitProviderConfig {
  /**
  * The Aembit Trust Provider Client ID to use for authentication to the Aembit Cloud Tenant instance (recommended).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs#client_id AembitProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The Aembit Resource Set to use for resources associated with this Terraform Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs#resource_set_id AembitProvider#resource_set_id}
  */
  readonly resourceSetId?: string;
  /**
  * Tenant ID of the specific Aembit Cloud instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs#tenant AembitProvider#tenant}
  */
  readonly tenant?: string;
  /**
  * Access Token to use for authentication to the Aembit Cloud Tenant instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs#token AembitProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs#alias AembitProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs aembit}
*/
export class AembitProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AembitProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AembitProvider to import
  * @param importFromId The id of the existing AembitProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AembitProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs aembit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AembitProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AembitProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      terraformProviderSource: 'Aembit/aembit'
    });
    this._clientId = config.clientId;
    this._resourceSetId = config.resourceSetId;
    this._tenant = config.tenant;
    this._token = config.token;
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

  // resource_set_id - computed: false, optional: true, required: false
  private _resourceSetId?: string; 
  public get resourceSetId() {
    return this._resourceSetId;
  }
  public set resourceSetId(value: string | undefined) {
    this._resourceSetId = value;
  }
  public resetResourceSetId() {
    this._resourceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdInput() {
    return this._resourceSetId;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      resource_set_id: cdktf.stringToTerraform(this._resourceSetId),
      tenant: cdktf.stringToTerraform(this._tenant),
      token: cdktf.stringToTerraform(this._token),
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
      resource_set_id: {
        value: cdktf.stringToHclTerraform(this._resourceSetId),
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
