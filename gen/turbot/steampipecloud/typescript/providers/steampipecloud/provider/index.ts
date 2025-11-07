// https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SteampipecloudProviderConfig {
  /**
  * Sets the Steampipe Cloud host. This is used when connecting to Steampipe Cloud workspaces. The default is https://cloud.steampipe.io, you only need to set this if you are connecting to a remote Steampipe Cloud database that is NOT hosted in https://cloud.steampipe.io, such as a dev/test instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs#host SteampipecloudProvider#host}
  */
  readonly host?: string;
  /**
  * Sets the Steampipe Cloud authentication token. This is used when connecting to Steampipe Cloud workspaces. You can manage your API tokens from the Settings page for your user account in Steampipe Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs#token SteampipecloudProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs#alias SteampipecloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs steampipecloud}
*/
export class SteampipecloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "steampipecloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SteampipecloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SteampipecloudProvider to import
  * @param importFromId The id of the existing SteampipecloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SteampipecloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "steampipecloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs steampipecloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SteampipecloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SteampipecloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'steampipecloud',
      terraformGeneratorMetadata: {
        providerName: 'steampipecloud',
        providerVersion: '0.11.0'
      },
      terraformProviderSource: 'turbot/steampipecloud'
    });
    this._host = config.host;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
      host: cdktf.stringToTerraform(this._host),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
