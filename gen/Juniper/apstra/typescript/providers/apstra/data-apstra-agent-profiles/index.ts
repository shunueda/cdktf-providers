// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/agent_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraAgentProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter to select only Agent Profiles configured with (or without) Username and Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/agent_profiles#has_credentials DataApstraAgentProfiles#has_credentials}
  */
  readonly hasCredentials?: boolean | cdktf.IResolvable;
  /**
  * Filter to select only Agent Profiles for the specified platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/agent_profiles#platform DataApstraAgentProfiles#platform}
  */
  readonly platform?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/agent_profiles apstra_agent_profiles}
*/
export class DataApstraAgentProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_agent_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraAgentProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraAgentProfiles to import
  * @param importFromId The id of the existing DataApstraAgentProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/agent_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraAgentProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_agent_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/agent_profiles apstra_agent_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraAgentProfilesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraAgentProfilesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_agent_profiles',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hasCredentials = config.hasCredentials;
    this._platform = config.platform;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // has_credentials - computed: false, optional: true, required: false
  private _hasCredentials?: boolean | cdktf.IResolvable; 
  public get hasCredentials() {
    return this.getBooleanAttribute('has_credentials');
  }
  public set hasCredentials(value: boolean | cdktf.IResolvable) {
    this._hasCredentials = value;
  }
  public resetHasCredentials() {
    this._hasCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasCredentialsInput() {
    return this._hasCredentials;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      has_credentials: cdktf.booleanToTerraform(this._hasCredentials),
      platform: cdktf.stringToTerraform(this._platform),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      has_credentials: {
        value: cdktf.booleanToHclTerraform(this._hasCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
