// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerLldpprofileCustomtlvsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#adom ObjectSwitchcontrollerLldpprofileCustomtlvs#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#id ObjectSwitchcontrollerLldpprofileCustomtlvs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#information_string ObjectSwitchcontrollerLldpprofileCustomtlvs#information_string}
  */
  readonly informationString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#lldp_profile ObjectSwitchcontrollerLldpprofileCustomtlvs#lldp_profile}
  */
  readonly lldpProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#name ObjectSwitchcontrollerLldpprofileCustomtlvs#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#oui ObjectSwitchcontrollerLldpprofileCustomtlvs#oui}
  */
  readonly oui?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#scopetype ObjectSwitchcontrollerLldpprofileCustomtlvs#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#subtype ObjectSwitchcontrollerLldpprofileCustomtlvs#subtype}
  */
  readonly subtype?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs fortimanager_object_switchcontroller_lldpprofile_customtlvs}
*/
export class ObjectSwitchcontrollerLldpprofileCustomtlvs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_lldpprofile_customtlvs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerLldpprofileCustomtlvs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerLldpprofileCustomtlvs to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerLldpprofileCustomtlvs that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerLldpprofileCustomtlvs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_lldpprofile_customtlvs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_lldpprofile_customtlvs fortimanager_object_switchcontroller_lldpprofile_customtlvs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerLldpprofileCustomtlvsConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerLldpprofileCustomtlvsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_lldpprofile_customtlvs',
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
    this._informationString = config.informationString;
    this._lldpProfile = config.lldpProfile;
    this._name = config.name;
    this._oui = config.oui;
    this._scopetype = config.scopetype;
    this._subtype = config.subtype;
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

  // information_string - computed: false, optional: true, required: false
  private _informationString?: string; 
  public get informationString() {
    return this.getStringAttribute('information_string');
  }
  public set informationString(value: string) {
    this._informationString = value;
  }
  public resetInformationString() {
    this._informationString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationStringInput() {
    return this._informationString;
  }

  // lldp_profile - computed: false, optional: false, required: true
  private _lldpProfile?: string; 
  public get lldpProfile() {
    return this.getStringAttribute('lldp_profile');
  }
  public set lldpProfile(value: string) {
    this._lldpProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpProfileInput() {
    return this._lldpProfile;
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

  // oui - computed: true, optional: true, required: false
  private _oui?: string; 
  public get oui() {
    return this.getStringAttribute('oui');
  }
  public set oui(value: string) {
    this._oui = value;
  }
  public resetOui() {
    this._oui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouiInput() {
    return this._oui;
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

  // subtype - computed: false, optional: true, required: false
  private _subtype?: number; 
  public get subtype() {
    return this.getNumberAttribute('subtype');
  }
  public set subtype(value: number) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      information_string: cdktf.stringToTerraform(this._informationString),
      lldp_profile: cdktf.stringToTerraform(this._lldpProfile),
      name: cdktf.stringToTerraform(this._name),
      oui: cdktf.stringToTerraform(this._oui),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      subtype: cdktf.numberToTerraform(this._subtype),
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
      information_string: {
        value: cdktf.stringToHclTerraform(this._informationString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_profile: {
        value: cdktf.stringToHclTerraform(this._lldpProfile),
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
      oui: {
        value: cdktf.stringToHclTerraform(this._oui),
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
      subtype: {
        value: cdktf.numberToHclTerraform(this._subtype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
