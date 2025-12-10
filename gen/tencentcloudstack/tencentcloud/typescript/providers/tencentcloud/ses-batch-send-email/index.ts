// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesBatchSendEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to add an ad tag. 0: Add no tag; 1: Add before the subject; 2: Add after the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#ad_location SesBatchSendEmail#ad_location}
  */
  readonly adLocation?: number;
  /**
  * Sender address. Enter a sender address such as noreply@mail.qcloud.com. To display the sender name, enter the address in the following format:sender &amp;amp;lt;email address&amp;amp;gt;. For example:Tencent Cloud team &amp;amp;lt;noreply@mail.qcloud.com&amp;amp;gt;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#from_email_address SesBatchSendEmail#from_email_address}
  */
  readonly fromEmailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#id SesBatchSendEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Recipient group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#receiver_id SesBatchSendEmail#receiver_id}
  */
  readonly receiverId: number;
  /**
  * Reply-to address. You can enter a valid personal email address that can receive emails. If this parameter is left empty, reply emails will fail to be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#reply_to_addresses SesBatchSendEmail#reply_to_addresses}
  */
  readonly replyToAddresses?: string;
  /**
  * Email subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#subject SesBatchSendEmail#subject}
  */
  readonly subject: string;
  /**
  * Task type. 1: immediate; 2: scheduled; 3: recurring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#task_type SesBatchSendEmail#task_type}
  */
  readonly taskType: number;
  /**
  * Unsubscribe link option.  0: Do not add unsubscribe link; 1: English 2: Simplified Chinese;  3: Traditional Chinese; 4: Spanish; 5: French;  6: German; 7: Japanese; 8: Korean;  9: Arabic; 10: Thai.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#unsubscribe SesBatchSendEmail#unsubscribe}
  */
  readonly unsubscribe?: string;
  /**
  * attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#attachments SesBatchSendEmail#attachments}
  */
  readonly attachments?: SesBatchSendEmailAttachments[] | cdktf.IResolvable;
  /**
  * cycle_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#cycle_param SesBatchSendEmail#cycle_param}
  */
  readonly cycleParam?: SesBatchSendEmailCycleParam;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#template SesBatchSendEmail#template}
  */
  readonly template?: SesBatchSendEmailTemplate;
  /**
  * timed_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#timed_param SesBatchSendEmail#timed_param}
  */
  readonly timedParam?: SesBatchSendEmailTimedParam;
}
export interface SesBatchSendEmailAttachments {
  /**
  * Base64-encoded attachment content. You can send attachments of up to 4 MB in the total size.Note: The TencentCloud API supports a request packet of up to 8 MB in size, and the size of the attachmentcontent will increase by 1.5 times after Base64 encoding. Therefore, you need to keep the total size of allattachments below 4 MB. If the entire request exceeds 8 MB, the API will return an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#content SesBatchSendEmail#content}
  */
  readonly content: string;
  /**
  * Attachment name, which cannot exceed 255 characters. Some attachment types are not supported. For details, see [Attachment Types.](https://www.tencentcloud.com/document/product/1084/42373?has_map=1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#file_name SesBatchSendEmail#file_name}
  */
  readonly fileName: string;
}

export function sesBatchSendEmailAttachmentsToTerraform(struct?: SesBatchSendEmailAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function sesBatchSendEmailAttachmentsToHclTerraform(struct?: SesBatchSendEmailAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesBatchSendEmailAttachmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SesBatchSendEmailAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesBatchSendEmailAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._fileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._fileName = value.fileName;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}

export class SesBatchSendEmailAttachmentsList extends cdktf.ComplexList {
  public internalValue? : SesBatchSendEmailAttachments[] | cdktf.IResolvable

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
  public get(index: number): SesBatchSendEmailAttachmentsOutputReference {
    return new SesBatchSendEmailAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesBatchSendEmailCycleParam {
  /**
  * Start time of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#begin_time SesBatchSendEmail#begin_time}
  */
  readonly beginTime: string;
  /**
  * Task recurrence in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#interval_time SesBatchSendEmail#interval_time}
  */
  readonly intervalTime: number;
  /**
  * Specifies whether to end the cycle. This parameter is used to update the task. Valid values: 0: No; 1: Yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#term_cycle SesBatchSendEmail#term_cycle}
  */
  readonly termCycle?: number;
}

export function sesBatchSendEmailCycleParamToTerraform(struct?: SesBatchSendEmailCycleParamOutputReference | SesBatchSendEmailCycleParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_time: cdktf.stringToTerraform(struct!.beginTime),
    interval_time: cdktf.numberToTerraform(struct!.intervalTime),
    term_cycle: cdktf.numberToTerraform(struct!.termCycle),
  }
}


export function sesBatchSendEmailCycleParamToHclTerraform(struct?: SesBatchSendEmailCycleParamOutputReference | SesBatchSendEmailCycleParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_time: {
      value: cdktf.stringToHclTerraform(struct!.beginTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_time: {
      value: cdktf.numberToHclTerraform(struct!.intervalTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    term_cycle: {
      value: cdktf.numberToHclTerraform(struct!.termCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesBatchSendEmailCycleParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesBatchSendEmailCycleParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginTime = this._beginTime;
    }
    if (this._intervalTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalTime = this._intervalTime;
    }
    if (this._termCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.termCycle = this._termCycle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesBatchSendEmailCycleParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beginTime = undefined;
      this._intervalTime = undefined;
      this._termCycle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beginTime = value.beginTime;
      this._intervalTime = value.intervalTime;
      this._termCycle = value.termCycle;
    }
  }

  // begin_time - computed: false, optional: false, required: true
  private _beginTime?: string; 
  public get beginTime() {
    return this.getStringAttribute('begin_time');
  }
  public set beginTime(value: string) {
    this._beginTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginTimeInput() {
    return this._beginTime;
  }

  // interval_time - computed: false, optional: false, required: true
  private _intervalTime?: number; 
  public get intervalTime() {
    return this.getNumberAttribute('interval_time');
  }
  public set intervalTime(value: number) {
    this._intervalTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalTimeInput() {
    return this._intervalTime;
  }

  // term_cycle - computed: false, optional: true, required: false
  private _termCycle?: number; 
  public get termCycle() {
    return this.getNumberAttribute('term_cycle');
  }
  public set termCycle(value: number) {
    this._termCycle = value;
  }
  public resetTermCycle() {
    this._termCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termCycleInput() {
    return this._termCycle;
  }
}
export interface SesBatchSendEmailTemplate {
  /**
  * Variable parameters in the template. Please use json.dump to format the JSON object into a string type.The object is a set of key-value pairs. Each key denotes a variable, which is represented by {{key}}. The key will be replaced with the correspondingvalue (represented by {{value}}) when sending the email.Note: The parameter value cannot be data of a complex type such as HTML.Example: {name:xxx,age:xx}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#template_data SesBatchSendEmail#template_data}
  */
  readonly templateData: string;
  /**
  * Template ID. If you do not have any template, please create one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#template_id SesBatchSendEmail#template_id}
  */
  readonly templateId: number;
}

export function sesBatchSendEmailTemplateToTerraform(struct?: SesBatchSendEmailTemplateOutputReference | SesBatchSendEmailTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_data: cdktf.stringToTerraform(struct!.templateData),
    template_id: cdktf.numberToTerraform(struct!.templateId),
  }
}


export function sesBatchSendEmailTemplateToHclTerraform(struct?: SesBatchSendEmailTemplateOutputReference | SesBatchSendEmailTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_data: {
      value: cdktf.stringToHclTerraform(struct!.templateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.numberToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesBatchSendEmailTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesBatchSendEmailTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateData = this._templateData;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesBatchSendEmailTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateData = undefined;
      this._templateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateData = value.templateData;
      this._templateId = value.templateId;
    }
  }

  // template_data - computed: false, optional: false, required: true
  private _templateData?: string; 
  public get templateData() {
    return this.getStringAttribute('template_data');
  }
  public set templateData(value: string) {
    this._templateData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDataInput() {
    return this._templateData;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}
export interface SesBatchSendEmailTimedParam {
  /**
  * Start time of a scheduled sending task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#begin_time SesBatchSendEmail#begin_time}
  */
  readonly beginTime: string;
}

export function sesBatchSendEmailTimedParamToTerraform(struct?: SesBatchSendEmailTimedParamOutputReference | SesBatchSendEmailTimedParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_time: cdktf.stringToTerraform(struct!.beginTime),
  }
}


export function sesBatchSendEmailTimedParamToHclTerraform(struct?: SesBatchSendEmailTimedParamOutputReference | SesBatchSendEmailTimedParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_time: {
      value: cdktf.stringToHclTerraform(struct!.beginTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesBatchSendEmailTimedParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesBatchSendEmailTimedParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginTime = this._beginTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesBatchSendEmailTimedParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beginTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beginTime = value.beginTime;
    }
  }

  // begin_time - computed: false, optional: false, required: true
  private _beginTime?: string; 
  public get beginTime() {
    return this.getStringAttribute('begin_time');
  }
  public set beginTime(value: string) {
    this._beginTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginTimeInput() {
    return this._beginTime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email tencentcloud_ses_batch_send_email}
*/
export class SesBatchSendEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ses_batch_send_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SesBatchSendEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesBatchSendEmail to import
  * @param importFromId The id of the existing SesBatchSendEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesBatchSendEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ses_batch_send_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ses_batch_send_email tencentcloud_ses_batch_send_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesBatchSendEmailConfig
  */
  public constructor(scope: Construct, id: string, config: SesBatchSendEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ses_batch_send_email',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adLocation = config.adLocation;
    this._fromEmailAddress = config.fromEmailAddress;
    this._id = config.id;
    this._receiverId = config.receiverId;
    this._replyToAddresses = config.replyToAddresses;
    this._subject = config.subject;
    this._taskType = config.taskType;
    this._unsubscribe = config.unsubscribe;
    this._attachments.internalValue = config.attachments;
    this._cycleParam.internalValue = config.cycleParam;
    this._template.internalValue = config.template;
    this._timedParam.internalValue = config.timedParam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_location - computed: false, optional: true, required: false
  private _adLocation?: number; 
  public get adLocation() {
    return this.getNumberAttribute('ad_location');
  }
  public set adLocation(value: number) {
    this._adLocation = value;
  }
  public resetAdLocation() {
    this._adLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adLocationInput() {
    return this._adLocation;
  }

  // from_email_address - computed: false, optional: false, required: true
  private _fromEmailAddress?: string; 
  public get fromEmailAddress() {
    return this.getStringAttribute('from_email_address');
  }
  public set fromEmailAddress(value: string) {
    this._fromEmailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailAddressInput() {
    return this._fromEmailAddress;
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

  // receiver_id - computed: false, optional: false, required: true
  private _receiverId?: number; 
  public get receiverId() {
    return this.getNumberAttribute('receiver_id');
  }
  public set receiverId(value: number) {
    this._receiverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIdInput() {
    return this._receiverId;
  }

  // reply_to_addresses - computed: false, optional: true, required: false
  private _replyToAddresses?: string; 
  public get replyToAddresses() {
    return this.getStringAttribute('reply_to_addresses');
  }
  public set replyToAddresses(value: string) {
    this._replyToAddresses = value;
  }
  public resetReplyToAddresses() {
    this._replyToAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToAddressesInput() {
    return this._replyToAddresses;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: number; 
  public get taskType() {
    return this.getNumberAttribute('task_type');
  }
  public set taskType(value: number) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // unsubscribe - computed: false, optional: true, required: false
  private _unsubscribe?: string; 
  public get unsubscribe() {
    return this.getStringAttribute('unsubscribe');
  }
  public set unsubscribe(value: string) {
    this._unsubscribe = value;
  }
  public resetUnsubscribe() {
    this._unsubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsubscribeInput() {
    return this._unsubscribe;
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments = new SesBatchSendEmailAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: SesBatchSendEmailAttachments[] | cdktf.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // cycle_param - computed: false, optional: true, required: false
  private _cycleParam = new SesBatchSendEmailCycleParamOutputReference(this, "cycle_param");
  public get cycleParam() {
    return this._cycleParam;
  }
  public putCycleParam(value: SesBatchSendEmailCycleParam) {
    this._cycleParam.internalValue = value;
  }
  public resetCycleParam() {
    this._cycleParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleParamInput() {
    return this._cycleParam.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new SesBatchSendEmailTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: SesBatchSendEmailTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // timed_param - computed: false, optional: true, required: false
  private _timedParam = new SesBatchSendEmailTimedParamOutputReference(this, "timed_param");
  public get timedParam() {
    return this._timedParam;
  }
  public putTimedParam(value: SesBatchSendEmailTimedParam) {
    this._timedParam.internalValue = value;
  }
  public resetTimedParam() {
    this._timedParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedParamInput() {
    return this._timedParam.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_location: cdktf.numberToTerraform(this._adLocation),
      from_email_address: cdktf.stringToTerraform(this._fromEmailAddress),
      id: cdktf.stringToTerraform(this._id),
      receiver_id: cdktf.numberToTerraform(this._receiverId),
      reply_to_addresses: cdktf.stringToTerraform(this._replyToAddresses),
      subject: cdktf.stringToTerraform(this._subject),
      task_type: cdktf.numberToTerraform(this._taskType),
      unsubscribe: cdktf.stringToTerraform(this._unsubscribe),
      attachments: cdktf.listMapper(sesBatchSendEmailAttachmentsToTerraform, true)(this._attachments.internalValue),
      cycle_param: sesBatchSendEmailCycleParamToTerraform(this._cycleParam.internalValue),
      template: sesBatchSendEmailTemplateToTerraform(this._template.internalValue),
      timed_param: sesBatchSendEmailTimedParamToTerraform(this._timedParam.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_location: {
        value: cdktf.numberToHclTerraform(this._adLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      from_email_address: {
        value: cdktf.stringToHclTerraform(this._fromEmailAddress),
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
      receiver_id: {
        value: cdktf.numberToHclTerraform(this._receiverId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reply_to_addresses: {
        value: cdktf.stringToHclTerraform(this._replyToAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.numberToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsubscribe: {
        value: cdktf.stringToHclTerraform(this._unsubscribe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachments: {
        value: cdktf.listMapperHcl(sesBatchSendEmailAttachmentsToHclTerraform, true)(this._attachments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesBatchSendEmailAttachmentsList",
      },
      cycle_param: {
        value: sesBatchSendEmailCycleParamToHclTerraform(this._cycleParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesBatchSendEmailCycleParamList",
      },
      template: {
        value: sesBatchSendEmailTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesBatchSendEmailTemplateList",
      },
      timed_param: {
        value: sesBatchSendEmailTimedParamToHclTerraform(this._timedParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesBatchSendEmailTimedParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
