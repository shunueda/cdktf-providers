// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_max_as_limit_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerBgpMaxAsLimitConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_max_as_limit_config#id ControllerBgpMaxAsLimitConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum AS path limit allowed by transit gateways when handling BGP/Peering route propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_max_as_limit_config#max_as_limit ControllerBgpMaxAsLimitConfig#max_as_limit}
  */
  readonly maxAsLimit: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_max_as_limit_config aviatrix_controller_bgp_max_as_limit_config}
*/
export class ControllerBgpMaxAsLimitConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_bgp_max_as_limit_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerBgpMaxAsLimitConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerBgpMaxAsLimitConfig to import
  * @param importFromId The id of the existing ControllerBgpMaxAsLimitConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_max_as_limit_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerBgpMaxAsLimitConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_bgp_max_as_limit_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_bgp_max_as_limit_config aviatrix_controller_bgp_max_as_limit_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerBgpMaxAsLimitConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerBgpMaxAsLimitConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_bgp_max_as_limit_config',
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
    this._id = config.id;
    this._maxAsLimit = config.maxAsLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_as_limit - computed: false, optional: false, required: true
  private _maxAsLimit?: number; 
  public get maxAsLimit() {
    return this.getNumberAttribute('max_as_limit');
  }
  public set maxAsLimit(value: number) {
    this._maxAsLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAsLimitInput() {
    return this._maxAsLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_as_limit: cdktf.numberToTerraform(this._maxAsLimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_as_limit: {
        value: cdktf.numberToHclTerraform(this._maxAsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
