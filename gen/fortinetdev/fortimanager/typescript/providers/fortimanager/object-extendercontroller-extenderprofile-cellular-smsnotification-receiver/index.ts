// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#adom ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#alert ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA#alert}
  */
  readonly alert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#extender_profile ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#id ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#name ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#phone_number ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#scopetype ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#status ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver fortimanager_object_extendercontroller_extenderprofile_cellular_smsnotification_receiver}
*/
export class ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extendercontroller_extenderprofile_cellular_smsnotification_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA to import
  * @param importFromId The id of the existing ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extendercontroller_extenderprofile_cellular_smsnotification_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_smsnotification_receiver fortimanager_object_extendercontroller_extenderprofile_cellular_smsnotification_receiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtendercontrollerExtenderprofileCellularSmsnotificationReceiverAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extendercontroller_extenderprofile_cellular_smsnotification_receiver',
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
    this._alert = config.alert;
    this._extenderProfile = config.extenderProfile;
    this._id = config.id;
    this._name = config.name;
    this._phoneNumber = config.phoneNumber;
    this._scopetype = config.scopetype;
    this._status = config.status;
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

  // alert - computed: true, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return cdktf.Fn.tolist(this.getListAttribute('alert'));
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // extender_profile - computed: false, optional: false, required: true
  private _extenderProfile?: string; 
  public get extenderProfile() {
    return this.getStringAttribute('extender_profile');
  }
  public set extenderProfile(value: string) {
    this._extenderProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderProfileInput() {
    return this._extenderProfile;
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

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      alert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alert),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
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
      alert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
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
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
