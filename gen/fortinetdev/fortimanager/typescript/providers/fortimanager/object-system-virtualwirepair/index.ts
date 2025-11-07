// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemVirtualwirepairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#adom ObjectSystemVirtualwirepair#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#id ObjectSystemVirtualwirepair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#member ObjectSystemVirtualwirepair#member}
  */
  readonly member?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#name ObjectSystemVirtualwirepair#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#outer_vlan_id ObjectSystemVirtualwirepair#outer_vlan_id}
  */
  readonly outerVlanId?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#poweroff_bypass ObjectSystemVirtualwirepair#poweroff_bypass}
  */
  readonly poweroffBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#poweron_bypass ObjectSystemVirtualwirepair#poweron_bypass}
  */
  readonly poweronBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#scopetype ObjectSystemVirtualwirepair#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#vlan_filter ObjectSystemVirtualwirepair#vlan_filter}
  */
  readonly vlanFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#wildcard_vlan ObjectSystemVirtualwirepair#wildcard_vlan}
  */
  readonly wildcardVlan?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair fortimanager_object_system_virtualwirepair}
*/
export class ObjectSystemVirtualwirepair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_virtualwirepair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemVirtualwirepair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemVirtualwirepair to import
  * @param importFromId The id of the existing ObjectSystemVirtualwirepair that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemVirtualwirepair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_virtualwirepair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_virtualwirepair fortimanager_object_system_virtualwirepair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemVirtualwirepairConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemVirtualwirepairConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_virtualwirepair',
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
    this._id = config.id;
    this._member = config.member;
    this._name = config.name;
    this._outerVlanId = config.outerVlanId;
    this._poweroffBypass = config.poweroffBypass;
    this._poweronBypass = config.poweronBypass;
    this._scopetype = config.scopetype;
    this._vlanFilter = config.vlanFilter;
    this._wildcardVlan = config.wildcardVlan;
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

  // member - computed: true, optional: true, required: false
  private _member?: string[]; 
  public get member() {
    return cdktf.Fn.tolist(this.getListAttribute('member'));
  }
  public set member(value: string[]) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
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

  // outer_vlan_id - computed: true, optional: true, required: false
  private _outerVlanId?: number[]; 
  public get outerVlanId() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('outer_vlan_id')));
  }
  public set outerVlanId(value: number[]) {
    this._outerVlanId = value;
  }
  public resetOuterVlanId() {
    this._outerVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerVlanIdInput() {
    return this._outerVlanId;
  }

  // poweroff_bypass - computed: true, optional: true, required: false
  private _poweroffBypass?: string; 
  public get poweroffBypass() {
    return this.getStringAttribute('poweroff_bypass');
  }
  public set poweroffBypass(value: string) {
    this._poweroffBypass = value;
  }
  public resetPoweroffBypass() {
    this._poweroffBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poweroffBypassInput() {
    return this._poweroffBypass;
  }

  // poweron_bypass - computed: true, optional: true, required: false
  private _poweronBypass?: string; 
  public get poweronBypass() {
    return this.getStringAttribute('poweron_bypass');
  }
  public set poweronBypass(value: string) {
    this._poweronBypass = value;
  }
  public resetPoweronBypass() {
    this._poweronBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poweronBypassInput() {
    return this._poweronBypass;
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

  // vlan_filter - computed: false, optional: true, required: false
  private _vlanFilter?: string; 
  public get vlanFilter() {
    return this.getStringAttribute('vlan_filter');
  }
  public set vlanFilter(value: string) {
    this._vlanFilter = value;
  }
  public resetVlanFilter() {
    this._vlanFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanFilterInput() {
    return this._vlanFilter;
  }

  // wildcard_vlan - computed: true, optional: true, required: false
  private _wildcardVlan?: string; 
  public get wildcardVlan() {
    return this.getStringAttribute('wildcard_vlan');
  }
  public set wildcardVlan(value: string) {
    this._wildcardVlan = value;
  }
  public resetWildcardVlan() {
    this._wildcardVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardVlanInput() {
    return this._wildcardVlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      member: cdktf.listMapper(cdktf.stringToTerraform, false)(this._member),
      name: cdktf.stringToTerraform(this._name),
      outer_vlan_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._outerVlanId),
      poweroff_bypass: cdktf.stringToTerraform(this._poweroffBypass),
      poweron_bypass: cdktf.stringToTerraform(this._poweronBypass),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      vlan_filter: cdktf.stringToTerraform(this._vlanFilter),
      wildcard_vlan: cdktf.stringToTerraform(this._wildcardVlan),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._member),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outer_vlan_id: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._outerVlanId),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      poweroff_bypass: {
        value: cdktf.stringToHclTerraform(this._poweroffBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poweron_bypass: {
        value: cdktf.stringToHclTerraform(this._poweronBypass),
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
      vlan_filter: {
        value: cdktf.stringToHclTerraform(this._vlanFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard_vlan: {
        value: cdktf.stringToHclTerraform(this._wildcardVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
