// https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact#email_list Contact#email_list}
  */
  readonly emailList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact#integrations Contact#integrations}
  */
  readonly integrations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact#name Contact#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact#phonecall_list Contact#phonecall_list}
  */
  readonly phonecallList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact#push_notification_profiles Contact#push_notification_profiles}
  */
  readonly pushNotificationProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact#sms_list Contact#sms_list}
  */
  readonly smsList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact uptime_contact}
*/
export class Contact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Contact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Contact to import
  * @param importFromId The id of the existing Contact that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Contact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/contact uptime_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactConfig
  */
  public constructor(scope: Construct, id: string, config: ContactConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_contact',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.17.1',
        providerVersionConstraint: '2.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailList = config.emailList;
    this._integrations = config.integrations;
    this._name = config.name;
    this._phonecallList = config.phonecallList;
    this._pushNotificationProfiles = config.pushNotificationProfiles;
    this._smsList = config.smsList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_list - computed: true, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return cdktf.Fn.tolist(this.getListAttribute('email_list'));
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // integrations - computed: true, optional: true, required: false
  private _integrations?: string[]; 
  public get integrations() {
    return cdktf.Fn.tolist(this.getListAttribute('integrations'));
  }
  public set integrations(value: string[]) {
    this._integrations = value;
  }
  public resetIntegrations() {
    this._integrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // phonecall_list - computed: true, optional: true, required: false
  private _phonecallList?: string[]; 
  public get phonecallList() {
    return cdktf.Fn.tolist(this.getListAttribute('phonecall_list'));
  }
  public set phonecallList(value: string[]) {
    this._phonecallList = value;
  }
  public resetPhonecallList() {
    this._phonecallList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phonecallListInput() {
    return this._phonecallList;
  }

  // push_notification_profiles - computed: true, optional: true, required: false
  private _pushNotificationProfiles?: string[]; 
  public get pushNotificationProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('push_notification_profiles'));
  }
  public set pushNotificationProfiles(value: string[]) {
    this._pushNotificationProfiles = value;
  }
  public resetPushNotificationProfiles() {
    this._pushNotificationProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushNotificationProfilesInput() {
    return this._pushNotificationProfiles;
  }

  // sms_list - computed: true, optional: true, required: false
  private _smsList?: string[]; 
  public get smsList() {
    return cdktf.Fn.tolist(this.getListAttribute('sms_list'));
  }
  public set smsList(value: string[]) {
    this._smsList = value;
  }
  public resetSmsList() {
    this._smsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsListInput() {
    return this._smsList;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailList),
      integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrations),
      name: cdktf.stringToTerraform(this._name),
      phonecall_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._phonecallList),
      push_notification_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pushNotificationProfiles),
      sms_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smsList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      integrations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrations),
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
      phonecall_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._phonecallList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      push_notification_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pushNotificationProfiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sms_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smsList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
