// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MscSubSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#contact_ids MscSubSubscription#contact_ids}
  */
  readonly contactIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#email_status MscSubSubscription#email_status}
  */
  readonly emailStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#id MscSubSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#item_name MscSubSubscription#item_name}
  */
  readonly itemName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#pmsg_status MscSubSubscription#pmsg_status}
  */
  readonly pmsgStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#sms_status MscSubSubscription#sms_status}
  */
  readonly smsStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#tts_status MscSubSubscription#tts_status}
  */
  readonly ttsStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#webhook_ids MscSubSubscription#webhook_ids}
  */
  readonly webhookIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#webhook_status MscSubSubscription#webhook_status}
  */
  readonly webhookStatus?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription alicloud_msc_sub_subscription}
*/
export class MscSubSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_msc_sub_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MscSubSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MscSubSubscription to import
  * @param importFromId The id of the existing MscSubSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MscSubSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_msc_sub_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/msc_sub_subscription alicloud_msc_sub_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MscSubSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: MscSubSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_msc_sub_subscription',
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
    this._contactIds = config.contactIds;
    this._emailStatus = config.emailStatus;
    this._id = config.id;
    this._itemName = config.itemName;
    this._pmsgStatus = config.pmsgStatus;
    this._smsStatus = config.smsStatus;
    this._ttsStatus = config.ttsStatus;
    this._webhookIds = config.webhookIds;
    this._webhookStatus = config.webhookStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // contact_ids - computed: true, optional: true, required: false
  private _contactIds?: string[]; 
  public get contactIds() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_ids'));
  }
  public set contactIds(value: string[]) {
    this._contactIds = value;
  }
  public resetContactIds() {
    this._contactIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdsInput() {
    return this._contactIds;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_status - computed: false, optional: true, required: false
  private _emailStatus?: number; 
  public get emailStatus() {
    return this.getNumberAttribute('email_status');
  }
  public set emailStatus(value: number) {
    this._emailStatus = value;
  }
  public resetEmailStatus() {
    this._emailStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailStatusInput() {
    return this._emailStatus;
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

  // item_name - computed: false, optional: false, required: true
  private _itemName?: string; 
  public get itemName() {
    return this.getStringAttribute('item_name');
  }
  public set itemName(value: string) {
    this._itemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemNameInput() {
    return this._itemName;
  }

  // pmsg_status - computed: false, optional: true, required: false
  private _pmsgStatus?: number; 
  public get pmsgStatus() {
    return this.getNumberAttribute('pmsg_status');
  }
  public set pmsgStatus(value: number) {
    this._pmsgStatus = value;
  }
  public resetPmsgStatus() {
    this._pmsgStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmsgStatusInput() {
    return this._pmsgStatus;
  }

  // sms_status - computed: false, optional: true, required: false
  private _smsStatus?: number; 
  public get smsStatus() {
    return this.getNumberAttribute('sms_status');
  }
  public set smsStatus(value: number) {
    this._smsStatus = value;
  }
  public resetSmsStatus() {
    this._smsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsStatusInput() {
    return this._smsStatus;
  }

  // tts_status - computed: false, optional: true, required: false
  private _ttsStatus?: number; 
  public get ttsStatus() {
    return this.getNumberAttribute('tts_status');
  }
  public set ttsStatus(value: number) {
    this._ttsStatus = value;
  }
  public resetTtsStatus() {
    this._ttsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttsStatusInput() {
    return this._ttsStatus;
  }

  // webhook_ids - computed: false, optional: true, required: false
  private _webhookIds?: string[]; 
  public get webhookIds() {
    return this.getListAttribute('webhook_ids');
  }
  public set webhookIds(value: string[]) {
    this._webhookIds = value;
  }
  public resetWebhookIds() {
    this._webhookIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookIdsInput() {
    return this._webhookIds;
  }

  // webhook_status - computed: false, optional: true, required: false
  private _webhookStatus?: number; 
  public get webhookStatus() {
    return this.getNumberAttribute('webhook_status');
  }
  public set webhookStatus(value: number) {
    this._webhookStatus = value;
  }
  public resetWebhookStatus() {
    this._webhookStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookStatusInput() {
    return this._webhookStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactIds),
      email_status: cdktf.numberToTerraform(this._emailStatus),
      id: cdktf.stringToTerraform(this._id),
      item_name: cdktf.stringToTerraform(this._itemName),
      pmsg_status: cdktf.numberToTerraform(this._pmsgStatus),
      sms_status: cdktf.numberToTerraform(this._smsStatus),
      tts_status: cdktf.numberToTerraform(this._ttsStatus),
      webhook_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webhookIds),
      webhook_status: cdktf.numberToTerraform(this._webhookStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email_status: {
        value: cdktf.numberToHclTerraform(this._emailStatus),
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
      item_name: {
        value: cdktf.stringToHclTerraform(this._itemName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pmsg_status: {
        value: cdktf.numberToHclTerraform(this._pmsgStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sms_status: {
        value: cdktf.numberToHclTerraform(this._smsStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tts_status: {
        value: cdktf.numberToHclTerraform(this._ttsStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webhook_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webhookIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      webhook_status: {
        value: cdktf.numberToHclTerraform(this._webhookStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
