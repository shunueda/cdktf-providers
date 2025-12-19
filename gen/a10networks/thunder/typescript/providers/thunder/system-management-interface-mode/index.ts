// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_management_interface_mode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemManagementInterfaceModeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set management interface in dedicated mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_management_interface_mode#dedicated SystemManagementInterfaceModeA#dedicated}
  */
  readonly dedicated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_management_interface_mode#id SystemManagementInterfaceModeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set management interface in non-dedicated mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_management_interface_mode#non_dedicated SystemManagementInterfaceModeA#non_dedicated}
  */
  readonly nonDedicated?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_management_interface_mode thunder_system_management_interface_mode}
*/
export class SystemManagementInterfaceModeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_management_interface_mode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemManagementInterfaceModeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemManagementInterfaceModeA to import
  * @param importFromId The id of the existing SystemManagementInterfaceModeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_management_interface_mode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemManagementInterfaceModeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_management_interface_mode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_management_interface_mode thunder_system_management_interface_mode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemManagementInterfaceModeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemManagementInterfaceModeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_management_interface_mode',
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
    this._dedicated = config.dedicated;
    this._id = config.id;
    this._nonDedicated = config.nonDedicated;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated - computed: false, optional: true, required: false
  private _dedicated?: number; 
  public get dedicated() {
    return this.getNumberAttribute('dedicated');
  }
  public set dedicated(value: number) {
    this._dedicated = value;
  }
  public resetDedicated() {
    this._dedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated;
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

  // non_dedicated - computed: false, optional: true, required: false
  private _nonDedicated?: number; 
  public get nonDedicated() {
    return this.getNumberAttribute('non_dedicated');
  }
  public set nonDedicated(value: number) {
    this._nonDedicated = value;
  }
  public resetNonDedicated() {
    this._nonDedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonDedicatedInput() {
    return this._nonDedicated;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated: cdktf.numberToTerraform(this._dedicated),
      id: cdktf.stringToTerraform(this._id),
      non_dedicated: cdktf.numberToTerraform(this._nonDedicated),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated: {
        value: cdktf.numberToHclTerraform(this._dedicated),
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
      non_dedicated: {
        value: cdktf.numberToHclTerraform(this._nonDedicated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
