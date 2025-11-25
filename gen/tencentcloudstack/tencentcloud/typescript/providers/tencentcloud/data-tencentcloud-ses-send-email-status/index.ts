// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSesSendEmailStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status#id DataTencentcloudSesSendEmailStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The MessageId field returned by the SendMail API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status#message_id DataTencentcloudSesSendEmailStatus#message_id}
  */
  readonly messageId?: string;
  /**
  * Date sent. This parameter is required. You can only query the sending status for a single date at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status#request_date DataTencentcloudSesSendEmailStatus#request_date}
  */
  readonly requestDate: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status#result_output_file DataTencentcloudSesSendEmailStatus#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Recipient email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status#to_email_address DataTencentcloudSesSendEmailStatus#to_email_address}
  */
  readonly toEmailAddress?: string;
}
export interface DataTencentcloudSesSendEmailStatusEmailStatusListStruct {
}

export function dataTencentcloudSesSendEmailStatusEmailStatusListStructToTerraform(struct?: DataTencentcloudSesSendEmailStatusEmailStatusListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSesSendEmailStatusEmailStatusListStructToHclTerraform(struct?: DataTencentcloudSesSendEmailStatusEmailStatusListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSesSendEmailStatusEmailStatusListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudSesSendEmailStatusEmailStatusListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSesSendEmailStatusEmailStatusListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deliver_message - computed: true, optional: false, required: false
  public get deliverMessage() {
    return this.getStringAttribute('deliver_message');
  }

  // deliver_status - computed: true, optional: false, required: false
  public get deliverStatus() {
    return this.getNumberAttribute('deliver_status');
  }

  // deliver_time - computed: true, optional: false, required: false
  public get deliverTime() {
    return this.getNumberAttribute('deliver_time');
  }

  // from_email_address - computed: true, optional: false, required: false
  public get fromEmailAddress() {
    return this.getStringAttribute('from_email_address');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getStringAttribute('message_id');
  }

  // request_time - computed: true, optional: false, required: false
  public get requestTime() {
    return this.getNumberAttribute('request_time');
  }

  // send_status - computed: true, optional: false, required: false
  public get sendStatus() {
    return this.getNumberAttribute('send_status');
  }

  // to_email_address - computed: true, optional: false, required: false
  public get toEmailAddress() {
    return this.getStringAttribute('to_email_address');
  }

  // user_clicked - computed: true, optional: false, required: false
  public get userClicked() {
    return this.getBooleanAttribute('user_clicked');
  }

  // user_complainted - computed: true, optional: false, required: false
  public get userComplainted() {
    return this.getBooleanAttribute('user_complainted');
  }

  // user_opened - computed: true, optional: false, required: false
  public get userOpened() {
    return this.getBooleanAttribute('user_opened');
  }

  // user_unsubscribed - computed: true, optional: false, required: false
  public get userUnsubscribed() {
    return this.getBooleanAttribute('user_unsubscribed');
  }
}

export class DataTencentcloudSesSendEmailStatusEmailStatusListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudSesSendEmailStatusEmailStatusListStructOutputReference {
    return new DataTencentcloudSesSendEmailStatusEmailStatusListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status tencentcloud_ses_send_email_status}
*/
export class DataTencentcloudSesSendEmailStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ses_send_email_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSesSendEmailStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSesSendEmailStatus to import
  * @param importFromId The id of the existing DataTencentcloudSesSendEmailStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSesSendEmailStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ses_send_email_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_email_status tencentcloud_ses_send_email_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSesSendEmailStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSesSendEmailStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ses_send_email_status',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._messageId = config.messageId;
    this._requestDate = config.requestDate;
    this._resultOutputFile = config.resultOutputFile;
    this._toEmailAddress = config.toEmailAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_status_list - computed: true, optional: false, required: false
  private _emailStatusList = new DataTencentcloudSesSendEmailStatusEmailStatusListStructList(this, "email_status_list", false);
  public get emailStatusList() {
    return this._emailStatusList;
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

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // request_date - computed: false, optional: false, required: true
  private _requestDate?: string; 
  public get requestDate() {
    return this.getStringAttribute('request_date');
  }
  public set requestDate(value: string) {
    this._requestDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDateInput() {
    return this._requestDate;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // to_email_address - computed: false, optional: true, required: false
  private _toEmailAddress?: string; 
  public get toEmailAddress() {
    return this.getStringAttribute('to_email_address');
  }
  public set toEmailAddress(value: string) {
    this._toEmailAddress = value;
  }
  public resetToEmailAddress() {
    this._toEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEmailAddressInput() {
    return this._toEmailAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      message_id: cdktf.stringToTerraform(this._messageId),
      request_date: cdktf.stringToTerraform(this._requestDate),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      to_email_address: cdktf.stringToTerraform(this._toEmailAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_id: {
        value: cdktf.stringToHclTerraform(this._messageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_date: {
        value: cdktf.stringToHclTerraform(this._requestDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_email_address: {
        value: cdktf.stringToHclTerraform(this._toEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
