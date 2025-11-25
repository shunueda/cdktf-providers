// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimewebCloudProviderConfig {
  /**
  * Secret API token from https://timeweb.cloud/my/api-keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs#token TimewebCloudProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs#alias TimewebCloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs timeweb-cloud}
*/
export class TimewebCloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timeweb-cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TimewebCloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TimewebCloudProvider to import
  * @param importFromId The id of the existing TimewebCloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TimewebCloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timeweb-cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs timeweb-cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimewebCloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TimewebCloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'timeweb-cloud',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.7',
        providerVersionConstraint: '1.6.7'
      },
      terraformProviderSource: 'timeweb-cloud/timeweb-cloud'
    });
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
