// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerBonjourprofilePolicylistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#adom ObjectWirelesscontrollerBonjourprofilePolicylist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#bonjour_profile ObjectWirelesscontrollerBonjourprofilePolicylist#bonjour_profile}
  */
  readonly bonjourProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#description ObjectWirelesscontrollerBonjourprofilePolicylist#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#from_vlan ObjectWirelesscontrollerBonjourprofilePolicylist#from_vlan}
  */
  readonly fromVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#id ObjectWirelesscontrollerBonjourprofilePolicylist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#policy_id ObjectWirelesscontrollerBonjourprofilePolicylist#policy_id}
  */
  readonly policyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#scopetype ObjectWirelesscontrollerBonjourprofilePolicylist#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#services ObjectWirelesscontrollerBonjourprofilePolicylist#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#to_vlan ObjectWirelesscontrollerBonjourprofilePolicylist#to_vlan}
  */
  readonly toVlan?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist fortimanager_object_wirelesscontroller_bonjourprofile_policylist}
*/
export class ObjectWirelesscontrollerBonjourprofilePolicylist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_bonjourprofile_policylist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerBonjourprofilePolicylist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerBonjourprofilePolicylist to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerBonjourprofilePolicylist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerBonjourprofilePolicylist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_bonjourprofile_policylist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_bonjourprofile_policylist fortimanager_object_wirelesscontroller_bonjourprofile_policylist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerBonjourprofilePolicylistConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerBonjourprofilePolicylistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_bonjourprofile_policylist',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._bonjourProfile = config.bonjourProfile;
    this._description = config.description;
    this._fromVlan = config.fromVlan;
    this._id = config.id;
    this._policyId = config.policyId;
    this._scopetype = config.scopetype;
    this._services = config.services;
    this._toVlan = config.toVlan;
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

  // bonjour_profile - computed: false, optional: false, required: true
  private _bonjourProfile?: string; 
  public get bonjourProfile() {
    return this.getStringAttribute('bonjour_profile');
  }
  public set bonjourProfile(value: string) {
    this._bonjourProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bonjourProfileInput() {
    return this._bonjourProfile;
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

  // from_vlan - computed: true, optional: true, required: false
  private _fromVlan?: string; 
  public get fromVlan() {
    return this.getStringAttribute('from_vlan');
  }
  public set fromVlan(value: string) {
    this._fromVlan = value;
  }
  public resetFromVlan() {
    this._fromVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromVlanInput() {
    return this._fromVlan;
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

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
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

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // to_vlan - computed: true, optional: true, required: false
  private _toVlan?: string; 
  public get toVlan() {
    return this.getStringAttribute('to_vlan');
  }
  public set toVlan(value: string) {
    this._toVlan = value;
  }
  public resetToVlan() {
    this._toVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toVlanInput() {
    return this._toVlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      bonjour_profile: cdktf.stringToTerraform(this._bonjourProfile),
      description: cdktf.stringToTerraform(this._description),
      from_vlan: cdktf.stringToTerraform(this._fromVlan),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.numberToTerraform(this._policyId),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      to_vlan: cdktf.stringToTerraform(this._toVlan),
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
      bonjour_profile: {
        value: cdktf.stringToHclTerraform(this._bonjourProfile),
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
      from_vlan: {
        value: cdktf.stringToHclTerraform(this._fromVlan),
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
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      to_vlan: {
        value: cdktf.stringToHclTerraform(this._toVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
