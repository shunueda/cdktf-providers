// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_gateway_keepalive_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerGatewayKeepaliveConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_gateway_keepalive_config#id ControllerGatewayKeepaliveConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Gateway keepalive speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_gateway_keepalive_config#keepalive_speed ControllerGatewayKeepaliveConfig#keepalive_speed}
  */
  readonly keepaliveSpeed: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_gateway_keepalive_config aviatrix_controller_gateway_keepalive_config}
*/
export class ControllerGatewayKeepaliveConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_gateway_keepalive_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerGatewayKeepaliveConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerGatewayKeepaliveConfig to import
  * @param importFromId The id of the existing ControllerGatewayKeepaliveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_gateway_keepalive_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerGatewayKeepaliveConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_gateway_keepalive_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_gateway_keepalive_config aviatrix_controller_gateway_keepalive_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerGatewayKeepaliveConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerGatewayKeepaliveConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_gateway_keepalive_config',
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
    this._id = config.id;
    this._keepaliveSpeed = config.keepaliveSpeed;
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

  // keepalive_speed - computed: false, optional: false, required: true
  private _keepaliveSpeed?: string; 
  public get keepaliveSpeed() {
    return this.getStringAttribute('keepalive_speed');
  }
  public set keepaliveSpeed(value: string) {
    this._keepaliveSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveSpeedInput() {
    return this._keepaliveSpeed;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      keepalive_speed: cdktf.stringToTerraform(this._keepaliveSpeed),
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
      keepalive_speed: {
        value: cdktf.stringToHclTerraform(this._keepaliveSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
