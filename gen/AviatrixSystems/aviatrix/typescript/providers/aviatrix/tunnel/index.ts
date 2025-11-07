// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Peering HA is enabled. Valid inputs: true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/tunnel#enable_ha Tunnel#enable_ha}
  */
  readonly enableHa?: boolean | cdktf.IResolvable;
  /**
  * The first VPC Container name to make a peer pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/tunnel#gw_name1 Tunnel#gw_name1}
  */
  readonly gwName1: string;
  /**
  * The second VPC Container name to make a peer pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/tunnel#gw_name2 Tunnel#gw_name2}
  */
  readonly gwName2: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/tunnel#id Tunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/tunnel aviatrix_tunnel}
*/
export class Tunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tunnel to import
  * @param importFromId The id of the existing Tunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/tunnel aviatrix_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TunnelConfig
  */
  public constructor(scope: Construct, id: string, config: TunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableHa = config.enableHa;
    this._gwName1 = config.gwName1;
    this._gwName2 = config.gwName2;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_ha - computed: false, optional: true, required: false
  private _enableHa?: boolean | cdktf.IResolvable; 
  public get enableHa() {
    return this.getBooleanAttribute('enable_ha');
  }
  public set enableHa(value: boolean | cdktf.IResolvable) {
    this._enableHa = value;
  }
  public resetEnableHa() {
    this._enableHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHaInput() {
    return this._enableHa;
  }

  // gw_name1 - computed: false, optional: false, required: true
  private _gwName1?: string; 
  public get gwName1() {
    return this.getStringAttribute('gw_name1');
  }
  public set gwName1(value: string) {
    this._gwName1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwName1Input() {
    return this._gwName1;
  }

  // gw_name2 - computed: false, optional: false, required: true
  private _gwName2?: string; 
  public get gwName2() {
    return this.getStringAttribute('gw_name2');
  }
  public set gwName2(value: string) {
    this._gwName2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwName2Input() {
    return this._gwName2;
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

  // peering_hastatus - computed: true, optional: false, required: false
  public get peeringHastatus() {
    return this.getStringAttribute('peering_hastatus');
  }

  // peering_link - computed: true, optional: false, required: false
  public get peeringLink() {
    return this.getStringAttribute('peering_link');
  }

  // peering_state - computed: true, optional: false, required: false
  public get peeringState() {
    return this.getStringAttribute('peering_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_ha: cdktf.booleanToTerraform(this._enableHa),
      gw_name1: cdktf.stringToTerraform(this._gwName1),
      gw_name2: cdktf.stringToTerraform(this._gwName2),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_ha: {
        value: cdktf.booleanToHclTerraform(this._enableHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gw_name1: {
        value: cdktf.stringToHclTerraform(this._gwName1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_name2: {
        value: cdktf.stringToHclTerraform(this._gwName2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
