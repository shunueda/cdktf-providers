// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_communities_auto_cloud_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerBgpCommunitiesAutoCloudConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * BGP communities auto cloud configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_communities_auto_cloud_config#auto_cloud_enabled ControllerBgpCommunitiesAutoCloudConfig#auto_cloud_enabled}
  */
  readonly autoCloudEnabled: boolean | cdktf.IResolvable;
  /**
  * Community prefix for auto cloud BGP communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_communities_auto_cloud_config#community_prefix ControllerBgpCommunitiesAutoCloudConfig#community_prefix}
  */
  readonly communityPrefix: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_communities_auto_cloud_config#id ControllerBgpCommunitiesAutoCloudConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_communities_auto_cloud_config aviatrix_controller_bgp_communities_auto_cloud_config}
*/
export class ControllerBgpCommunitiesAutoCloudConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_bgp_communities_auto_cloud_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerBgpCommunitiesAutoCloudConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerBgpCommunitiesAutoCloudConfig to import
  * @param importFromId The id of the existing ControllerBgpCommunitiesAutoCloudConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_communities_auto_cloud_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerBgpCommunitiesAutoCloudConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_bgp_communities_auto_cloud_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_communities_auto_cloud_config aviatrix_controller_bgp_communities_auto_cloud_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerBgpCommunitiesAutoCloudConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerBgpCommunitiesAutoCloudConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_bgp_communities_auto_cloud_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCloudEnabled = config.autoCloudEnabled;
    this._communityPrefix = config.communityPrefix;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_cloud_enabled - computed: false, optional: false, required: true
  private _autoCloudEnabled?: boolean | cdktf.IResolvable; 
  public get autoCloudEnabled() {
    return this.getBooleanAttribute('auto_cloud_enabled');
  }
  public set autoCloudEnabled(value: boolean | cdktf.IResolvable) {
    this._autoCloudEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCloudEnabledInput() {
    return this._autoCloudEnabled;
  }

  // community_prefix - computed: false, optional: false, required: true
  private _communityPrefix?: number; 
  public get communityPrefix() {
    return this.getNumberAttribute('community_prefix');
  }
  public set communityPrefix(value: number) {
    this._communityPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityPrefixInput() {
    return this._communityPrefix;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_cloud_enabled: cdktf.booleanToTerraform(this._autoCloudEnabled),
      community_prefix: cdktf.numberToTerraform(this._communityPrefix),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_cloud_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoCloudEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      community_prefix: {
        value: cdktf.numberToHclTerraform(this._communityPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
