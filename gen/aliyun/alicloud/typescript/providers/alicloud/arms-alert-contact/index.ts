// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArmsAlertContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact#alert_contact_name ArmsAlertContact#alert_contact_name}
  */
  readonly alertContactName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact#ding_robot_webhook_url ArmsAlertContact#ding_robot_webhook_url}
  */
  readonly dingRobotWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact#email ArmsAlertContact#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact#id ArmsAlertContact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact#phone_num ArmsAlertContact#phone_num}
  */
  readonly phoneNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact#system_noc ArmsAlertContact#system_noc}
  */
  readonly systemNoc?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact alicloud_arms_alert_contact}
*/
export class ArmsAlertContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_arms_alert_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArmsAlertContact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArmsAlertContact to import
  * @param importFromId The id of the existing ArmsAlertContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArmsAlertContact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_arms_alert_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/arms_alert_contact alicloud_arms_alert_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArmsAlertContactConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ArmsAlertContactConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_arms_alert_contact',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertContactName = config.alertContactName;
    this._dingRobotWebhookUrl = config.dingRobotWebhookUrl;
    this._email = config.email;
    this._id = config.id;
    this._phoneNum = config.phoneNum;
    this._systemNoc = config.systemNoc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_contact_name - computed: false, optional: true, required: false
  private _alertContactName?: string; 
  public get alertContactName() {
    return this.getStringAttribute('alert_contact_name');
  }
  public set alertContactName(value: string) {
    this._alertContactName = value;
  }
  public resetAlertContactName() {
    this._alertContactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertContactNameInput() {
    return this._alertContactName;
  }

  // ding_robot_webhook_url - computed: false, optional: true, required: false
  private _dingRobotWebhookUrl?: string; 
  public get dingRobotWebhookUrl() {
    return this.getStringAttribute('ding_robot_webhook_url');
  }
  public set dingRobotWebhookUrl(value: string) {
    this._dingRobotWebhookUrl = value;
  }
  public resetDingRobotWebhookUrl() {
    this._dingRobotWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dingRobotWebhookUrlInput() {
    return this._dingRobotWebhookUrl;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // phone_num - computed: false, optional: true, required: false
  private _phoneNum?: string; 
  public get phoneNum() {
    return this.getStringAttribute('phone_num');
  }
  public set phoneNum(value: string) {
    this._phoneNum = value;
  }
  public resetPhoneNum() {
    this._phoneNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumInput() {
    return this._phoneNum;
  }

  // system_noc - computed: false, optional: true, required: false
  private _systemNoc?: boolean | cdktf.IResolvable; 
  public get systemNoc() {
    return this.getBooleanAttribute('system_noc');
  }
  public set systemNoc(value: boolean | cdktf.IResolvable) {
    this._systemNoc = value;
  }
  public resetSystemNoc() {
    this._systemNoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNocInput() {
    return this._systemNoc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_contact_name: cdktf.stringToTerraform(this._alertContactName),
      ding_robot_webhook_url: cdktf.stringToTerraform(this._dingRobotWebhookUrl),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      phone_num: cdktf.stringToTerraform(this._phoneNum),
      system_noc: cdktf.booleanToTerraform(this._systemNoc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_contact_name: {
        value: cdktf.stringToHclTerraform(this._alertContactName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ding_robot_webhook_url: {
        value: cdktf.stringToHclTerraform(this._dingRobotWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      phone_num: {
        value: cdktf.stringToHclTerraform(this._phoneNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_noc: {
        value: cdktf.booleanToHclTerraform(this._systemNoc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
