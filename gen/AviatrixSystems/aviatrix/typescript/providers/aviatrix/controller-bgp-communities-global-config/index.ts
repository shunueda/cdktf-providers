// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_bgp_communities_global_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerBgpCommunitiesGlobalConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * BGP communities global configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_bgp_communities_global_config#bgp_communities_global ControllerBgpCommunitiesGlobalConfig#bgp_communities_global}
  */
  readonly bgpCommunitiesGlobal: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_bgp_communities_global_config#id ControllerBgpCommunitiesGlobalConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_bgp_communities_global_config aviatrix_controller_bgp_communities_global_config}
*/
export class ControllerBgpCommunitiesGlobalConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_bgp_communities_global_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerBgpCommunitiesGlobalConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerBgpCommunitiesGlobalConfig to import
  * @param importFromId The id of the existing ControllerBgpCommunitiesGlobalConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_bgp_communities_global_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerBgpCommunitiesGlobalConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_bgp_communities_global_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_bgp_communities_global_config aviatrix_controller_bgp_communities_global_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerBgpCommunitiesGlobalConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerBgpCommunitiesGlobalConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_bgp_communities_global_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpCommunitiesGlobal = config.bgpCommunitiesGlobal;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_communities_global - computed: false, optional: false, required: true
  private _bgpCommunitiesGlobal?: boolean | cdktf.IResolvable; 
  public get bgpCommunitiesGlobal() {
    return this.getBooleanAttribute('bgp_communities_global');
  }
  public set bgpCommunitiesGlobal(value: boolean | cdktf.IResolvable) {
    this._bgpCommunitiesGlobal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpCommunitiesGlobalInput() {
    return this._bgpCommunitiesGlobal;
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
      bgp_communities_global: cdktf.booleanToTerraform(this._bgpCommunitiesGlobal),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_communities_global: {
        value: cdktf.booleanToHclTerraform(this._bgpCommunitiesGlobal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
