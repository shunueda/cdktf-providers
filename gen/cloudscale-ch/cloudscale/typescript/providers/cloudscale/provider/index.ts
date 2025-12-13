// https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudscaleProviderConfig {
  /**
  * The token for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs#token CloudscaleProvider#token}
  */
  readonly token: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs#alias CloudscaleProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs cloudscale}
*/
export class CloudscaleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudscale";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudscaleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudscaleProvider to import
  * @param importFromId The id of the existing CloudscaleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudscaleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudscale", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs cloudscale} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudscaleProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudscaleProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudscale',
      terraformGeneratorMetadata: {
        providerName: 'cloudscale',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      terraformProviderSource: 'cloudscale-ch/cloudscale'
    });
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
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
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
