// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user_accelerator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnUserAcceleratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * ELB to include into the VPN User Accelerator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user_accelerator#elb_name VpnUserAccelerator#elb_name}
  */
  readonly elbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user_accelerator#id VpnUserAccelerator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user_accelerator aviatrix_vpn_user_accelerator}
*/
export class VpnUserAccelerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_vpn_user_accelerator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnUserAccelerator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnUserAccelerator to import
  * @param importFromId The id of the existing VpnUserAccelerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user_accelerator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnUserAccelerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_vpn_user_accelerator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user_accelerator aviatrix_vpn_user_accelerator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnUserAcceleratorConfig
  */
  public constructor(scope: Construct, id: string, config: VpnUserAcceleratorConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_vpn_user_accelerator',
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
    this._elbName = config.elbName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // elb_name - computed: false, optional: false, required: true
  private _elbName?: string; 
  public get elbName() {
    return this.getStringAttribute('elb_name');
  }
  public set elbName(value: string) {
    this._elbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elbNameInput() {
    return this._elbName;
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
      elb_name: cdktf.stringToTerraform(this._elbName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      elb_name: {
        value: cdktf.stringToHclTerraform(this._elbName),
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
