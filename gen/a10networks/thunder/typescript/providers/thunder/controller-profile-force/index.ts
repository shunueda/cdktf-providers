// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile_force
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerProfileForceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * forcefully deregister thunder from harmony controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile_force#deregister ControllerProfileForceA#deregister}
  */
  readonly deregister?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile_force#id ControllerProfileForceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile_force thunder_controller_profile_force}
*/
export class ControllerProfileForceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_controller_profile_force";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerProfileForceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerProfileForceA to import
  * @param importFromId The id of the existing ControllerProfileForceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile_force#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerProfileForceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_controller_profile_force", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/controller_profile_force thunder_controller_profile_force} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerProfileForceAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ControllerProfileForceAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_controller_profile_force',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deregister = config.deregister;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deregister - computed: false, optional: true, required: false
  private _deregister?: number; 
  public get deregister() {
    return this.getNumberAttribute('deregister');
  }
  public set deregister(value: number) {
    this._deregister = value;
  }
  public resetDeregister() {
    this._deregister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterInput() {
    return this._deregister;
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
      deregister: cdktf.numberToTerraform(this._deregister),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deregister: {
        value: cdktf.numberToHclTerraform(this._deregister),
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
