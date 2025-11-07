// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerManagedswitchVlanAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan#adom ObjectSwitchcontrollerManagedswitchVlanA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan#assignment_priority ObjectSwitchcontrollerManagedswitchVlanA#assignment_priority}
  */
  readonly assignmentPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan#id ObjectSwitchcontrollerManagedswitchVlanA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan#managed_switch ObjectSwitchcontrollerManagedswitchVlanA#managed_switch}
  */
  readonly managedSwitch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan#scopetype ObjectSwitchcontrollerManagedswitchVlanA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan#vlan_name ObjectSwitchcontrollerManagedswitchVlanA#vlan_name}
  */
  readonly vlanName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan fortimanager_object_switchcontroller_managedswitch_vlan}
*/
export class ObjectSwitchcontrollerManagedswitchVlanA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_managedswitch_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerManagedswitchVlanA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerManagedswitchVlanA to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerManagedswitchVlanA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerManagedswitchVlanA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_managedswitch_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch_vlan fortimanager_object_switchcontroller_managedswitch_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerManagedswitchVlanAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerManagedswitchVlanAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_managedswitch_vlan',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._assignmentPriority = config.assignmentPriority;
    this._id = config.id;
    this._managedSwitch = config.managedSwitch;
    this._scopetype = config.scopetype;
    this._vlanName = config.vlanName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // assignment_priority - computed: false, optional: true, required: false
  private _assignmentPriority?: number; 
  public get assignmentPriority() {
    return this.getNumberAttribute('assignment_priority');
  }
  public set assignmentPriority(value: number) {
    this._assignmentPriority = value;
  }
  public resetAssignmentPriority() {
    this._assignmentPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentPriorityInput() {
    return this._assignmentPriority;
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

  // managed_switch - computed: false, optional: false, required: true
  private _managedSwitch?: string; 
  public get managedSwitch() {
    return this.getStringAttribute('managed_switch');
  }
  public set managedSwitch(value: string) {
    this._managedSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSwitchInput() {
    return this._managedSwitch;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      assignment_priority: cdktf.numberToTerraform(this._assignmentPriority),
      id: cdktf.stringToTerraform(this._id),
      managed_switch: cdktf.stringToTerraform(this._managedSwitch),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      vlan_name: cdktf.stringToTerraform(this._vlanName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_priority: {
        value: cdktf.numberToHclTerraform(this._assignmentPriority),
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
      managed_switch: {
        value: cdktf.stringToHclTerraform(this._managedSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_name: {
        value: cdktf.stringToHclTerraform(this._vlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
