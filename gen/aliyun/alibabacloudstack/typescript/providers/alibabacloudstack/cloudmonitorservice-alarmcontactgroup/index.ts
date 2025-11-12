// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudmonitorserviceAlarmcontactgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup#alarm_contact_group_name CloudmonitorserviceAlarmcontactgroup#alarm_contact_group_name}
  */
  readonly alarmContactGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup#contacts CloudmonitorserviceAlarmcontactgroup#contacts}
  */
  readonly contacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup#describe CloudmonitorserviceAlarmcontactgroup#describe}
  */
  readonly describe: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup#enable_subscribed CloudmonitorserviceAlarmcontactgroup#enable_subscribed}
  */
  readonly enableSubscribed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup#id CloudmonitorserviceAlarmcontactgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup alibabacloudstack_cloudmonitorservice_alarmcontactgroup}
*/
export class CloudmonitorserviceAlarmcontactgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cloudmonitorservice_alarmcontactgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudmonitorserviceAlarmcontactgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudmonitorserviceAlarmcontactgroup to import
  * @param importFromId The id of the existing CloudmonitorserviceAlarmcontactgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudmonitorserviceAlarmcontactgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cloudmonitorservice_alarmcontactgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cloudmonitorservice_alarmcontactgroup alibabacloudstack_cloudmonitorservice_alarmcontactgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudmonitorserviceAlarmcontactgroupConfig
  */
  public constructor(scope: Construct, id: string, config: CloudmonitorserviceAlarmcontactgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cloudmonitorservice_alarmcontactgroup',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmContactGroupName = config.alarmContactGroupName;
    this._contacts = config.contacts;
    this._describe = config.describe;
    this._enableSubscribed = config.enableSubscribed;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_contact_group_name - computed: false, optional: false, required: true
  private _alarmContactGroupName?: string; 
  public get alarmContactGroupName() {
    return this.getStringAttribute('alarm_contact_group_name');
  }
  public set alarmContactGroupName(value: string) {
    this._alarmContactGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmContactGroupNameInput() {
    return this._alarmContactGroupName;
  }

  // contacts - computed: false, optional: true, required: false
  private _contacts?: string[]; 
  public get contacts() {
    return cdktf.Fn.tolist(this.getListAttribute('contacts'));
  }
  public set contacts(value: string[]) {
    this._contacts = value;
  }
  public resetContacts() {
    this._contacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactsInput() {
    return this._contacts;
  }

  // describe - computed: false, optional: false, required: true
  private _describe?: string; 
  public get describe() {
    return this.getStringAttribute('describe');
  }
  public set describe(value: string) {
    this._describe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describeInput() {
    return this._describe;
  }

  // enable_subscribed - computed: true, optional: true, required: false
  private _enableSubscribed?: boolean | cdktf.IResolvable; 
  public get enableSubscribed() {
    return this.getBooleanAttribute('enable_subscribed');
  }
  public set enableSubscribed(value: boolean | cdktf.IResolvable) {
    this._enableSubscribed = value;
  }
  public resetEnableSubscribed() {
    this._enableSubscribed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSubscribedInput() {
    return this._enableSubscribed;
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
      alarm_contact_group_name: cdktf.stringToTerraform(this._alarmContactGroupName),
      contacts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contacts),
      describe: cdktf.stringToTerraform(this._describe),
      enable_subscribed: cdktf.booleanToTerraform(this._enableSubscribed),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_contact_group_name: {
        value: cdktf.stringToHclTerraform(this._alarmContactGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contacts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contacts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      describe: {
        value: cdktf.stringToHclTerraform(this._describe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_subscribed: {
        value: cdktf.booleanToHclTerraform(this._enableSubscribed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
