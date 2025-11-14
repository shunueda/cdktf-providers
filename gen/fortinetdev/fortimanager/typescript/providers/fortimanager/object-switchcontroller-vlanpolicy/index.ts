// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerVlanpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#adom ObjectSwitchcontrollerVlanpolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#allowed_vlans ObjectSwitchcontrollerVlanpolicy#allowed_vlans}
  */
  readonly allowedVlans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#allowed_vlans_all ObjectSwitchcontrollerVlanpolicy#allowed_vlans_all}
  */
  readonly allowedVlansAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#description ObjectSwitchcontrollerVlanpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#discard_mode ObjectSwitchcontrollerVlanpolicy#discard_mode}
  */
  readonly discardMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#id ObjectSwitchcontrollerVlanpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#name ObjectSwitchcontrollerVlanpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#scopetype ObjectSwitchcontrollerVlanpolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#untagged_vlans ObjectSwitchcontrollerVlanpolicy#untagged_vlans}
  */
  readonly untaggedVlans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#vlan ObjectSwitchcontrollerVlanpolicy#vlan}
  */
  readonly vlan?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy fortimanager_object_switchcontroller_vlanpolicy}
*/
export class ObjectSwitchcontrollerVlanpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_vlanpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerVlanpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerVlanpolicy to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerVlanpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerVlanpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_vlanpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_vlanpolicy fortimanager_object_switchcontroller_vlanpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerVlanpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerVlanpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_vlanpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._allowedVlans = config.allowedVlans;
    this._allowedVlansAll = config.allowedVlansAll;
    this._description = config.description;
    this._discardMode = config.discardMode;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._untaggedVlans = config.untaggedVlans;
    this._vlan = config.vlan;
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

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
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
      adom: cdktf.stringToTerraform(this._adom),
      allowed_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedVlans),
      allowed_vlans_all: cdktf.stringToTerraform(this._allowedVlansAll),
      description: cdktf.stringToTerraform(this._description),
      discard_mode: cdktf.stringToTerraform(this._discardMode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      untagged_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._untaggedVlans),
      vlan: cdktf.stringToTerraform(this._vlan),
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
      discard_mode: {
        value: cdktf.stringToHclTerraform(this._discardMode),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      untagged_vlans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._untaggedVlans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
