// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerVlanpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#allowed_vlans SwitchcontrollerVlanpolicy#allowed_vlans}
  */
  readonly allowedVlans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#allowed_vlans_all SwitchcontrollerVlanpolicy#allowed_vlans_all}
  */
  readonly allowedVlansAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#description SwitchcontrollerVlanpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#device_name SwitchcontrollerVlanpolicy#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#device_vdom SwitchcontrollerVlanpolicy#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#discard_mode SwitchcontrollerVlanpolicy#discard_mode}
  */
  readonly discardMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#fortilink SwitchcontrollerVlanpolicy#fortilink}
  */
  readonly fortilink?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#id SwitchcontrollerVlanpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#name SwitchcontrollerVlanpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#untagged_vlans SwitchcontrollerVlanpolicy#untagged_vlans}
  */
  readonly untaggedVlans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#vlan SwitchcontrollerVlanpolicy#vlan}
  */
  readonly vlan?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy fmgdevice_switchcontroller_vlanpolicy}
*/
export class SwitchcontrollerVlanpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_vlanpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerVlanpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerVlanpolicy to import
  * @param importFromId The id of the existing SwitchcontrollerVlanpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerVlanpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_vlanpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_vlanpolicy fmgdevice_switchcontroller_vlanpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerVlanpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerVlanpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_vlanpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedVlans = config.allowedVlans;
    this._allowedVlansAll = config.allowedVlansAll;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._discardMode = config.discardMode;
    this._fortilink = config.fortilink;
    this._id = config.id;
    this._name = config.name;
    this._untaggedVlans = config.untaggedVlans;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_vlans - computed: true, optional: true, required: false
  private _allowedVlans?: string[]; 
  public get allowedVlans() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_vlans'));
  }
  public set allowedVlans(value: string[]) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // allowed_vlans_all - computed: true, optional: true, required: false
  private _allowedVlansAll?: string; 
  public get allowedVlansAll() {
    return this.getStringAttribute('allowed_vlans_all');
  }
  public set allowedVlansAll(value: string) {
    this._allowedVlansAll = value;
  }
  public resetAllowedVlansAll() {
    this._allowedVlansAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansAllInput() {
    return this._allowedVlansAll;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // discard_mode - computed: true, optional: true, required: false
  private _discardMode?: string; 
  public get discardMode() {
    return this.getStringAttribute('discard_mode');
  }
  public set discardMode(value: string) {
    this._discardMode = value;
  }
  public resetDiscardMode() {
    this._discardMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardModeInput() {
    return this._discardMode;
  }

  // fortilink - computed: true, optional: true, required: false
  private _fortilink?: string[]; 
  public get fortilink() {
    return cdktf.Fn.tolist(this.getListAttribute('fortilink'));
  }
  public set fortilink(value: string[]) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // untagged_vlans - computed: true, optional: true, required: false
  private _untaggedVlans?: string[]; 
  public get untaggedVlans() {
    return cdktf.Fn.tolist(this.getListAttribute('untagged_vlans'));
  }
  public set untaggedVlans(value: string[]) {
    this._untaggedVlans = value;
  }
  public resetUntaggedVlans() {
    this._untaggedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedVlansInput() {
    return this._untaggedVlans;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: string[]; 
  public get vlan() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan'));
  }
  public set vlan(value: string[]) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedVlans),
      allowed_vlans_all: cdktf.stringToTerraform(this._allowedVlansAll),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      discard_mode: cdktf.stringToTerraform(this._discardMode),
      fortilink: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fortilink),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      untagged_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._untaggedVlans),
      vlan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_vlans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedVlans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_vlans_all: {
        value: cdktf.stringToHclTerraform(this._allowedVlansAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discard_mode: {
        value: cdktf.stringToHclTerraform(this._discardMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fortilink),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untagged_vlans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._untaggedVlans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vlan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
