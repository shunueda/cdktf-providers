// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesSendEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address of the cc recipient can support up to 20 cc recipients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#bcc SesSendEmail#bcc}
  */
  readonly bcc?: string[];
  /**
  * Cc recipient email address, up to 20 people can be copied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#cc SesSendEmail#cc}
  */
  readonly cc?: string[];
  /**
  * Recipient email addresses. You can send an email to up to 50 recipients at a time. Note: the email content will display all recipient addresses. To send one-to-one emails to several recipients, please call the API multiple times to send the emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#destination SesSendEmail#destination}
  */
  readonly destination: string[];
  /**
  * Sender address. Enter a sender address, for example, noreply@mail.qcloud.com.To display the sender name, enter the address in the following format:Sender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#from_email_address SesSendEmail#from_email_address}
  */
  readonly fromEmailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#id SesSendEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reply-to address. You can enter a valid personal email address that can receive emails. If this parameter is left empty, reply emails will fail to be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#reply_to_addresses SesSendEmail#reply_to_addresses}
  */
  readonly replyToAddresses?: string;
  /**
  * Email subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#subject SesSendEmail#subject}
  */
  readonly subject: string;
  /**
  * Email triggering type. 0 (default): non-trigger-based, suitable for marketing emails and non-immediate emails;1: trigger-based, suitable for immediate emails such as emails containing verification codes.If the size of an email exceeds a specified value,the system will automatically choose the non-trigger-based type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#trigger_type SesSendEmail#trigger_type}
  */
  readonly triggerType?: number;
  /**
  * Unsubscribe link option.  0: Do not add unsubscribe link; 1: English 2: Simplified Chinese;  3: Traditional Chinese; 4: Spanish; 5: French;  6: German; 7: Japanese; 8: Korean;  9: Arabic; 10: Thai.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#unsubscribe SesSendEmail#unsubscribe}
  */
  readonly unsubscribe?: string;
  /**
  * attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#attachments SesSendEmail#attachments}
  */
  readonly attachments?: SesSendEmailAttachments[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#template SesSendEmail#template}
  */
  readonly template?: SesSendEmailTemplate;
}
export interface SesSendEmailAttachments {
  /**
  * Base64-encoded attachment content. You can send attachments of up to 4 MB in the total size.Note: The TencentCloud API supports a request packet of up to 8 MB in size, and the size of the attachmentcontent will increase by 1.5 times after Base64 encoding. Therefore, you need to keep the total size of allattachments below 4 MB. If the entire request exceeds 8 MB, the API will return an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#content SesSendEmail#content}
  */
  readonly content: string;
  /**
  * Attachment name, which cannot exceed 255 characters. Some attachment types are not supported. For details, see [Attachment Types.](https://www.tencentcloud.com/document/product/1084/42373?has_map=1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#file_name SesSendEmail#file_name}
  */
  readonly fileName: string;
}

export function sesSendEmailAttachmentsToTerraform(struct?: SesSendEmailAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function sesSendEmailAttachmentsToHclTerraform(struct?: SesSendEmailAttachments | cdktf.IResolvable): any {
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

export class SesSendEmailAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SesSendEmailAttachments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SesSendEmailAttachments | cdktf.IResolvable | undefined) {
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

export class SesSendEmailAttachmentsList extends cdktf.ComplexList {
  public internalValue? : SesSendEmailAttachments[] | cdktf.IResolvable

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
  public get(index: number): SesSendEmailAttachmentsOutputReference {
    return new SesSendEmailAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesSendEmailTemplate {
  /**
  * Variable parameters in the template. Please use json.dump to format the JSON object into a string type.The object is a set of key-value pairs. Each key denotes a variable, which is represented by {{key}}. The key will be replaced with the correspondingvalue (represented by {{value}}) when sending the email.Note: The parameter value cannot be data of a complex type such as HTML.Example: {name:xxx,age:xx}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#template_data SesSendEmail#template_data}
  */
  readonly templateData: string;
  /**
  * Template ID. If you do not have any template, please create one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#template_id SesSendEmail#template_id}
  */
  readonly templateId: number;
}

export function sesSendEmailTemplateToTerraform(struct?: SesSendEmailTemplateOutputReference | SesSendEmailTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_data: cdktf.stringToTerraform(struct!.templateData),
    template_id: cdktf.numberToTerraform(struct!.templateId),
  }
}


export function sesSendEmailTemplateToHclTerraform(struct?: SesSendEmailTemplateOutputReference | SesSendEmailTemplate): any {
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

export class SesSendEmailTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesSendEmailTemplate | undefined {
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

  public set internalValue(value: SesSendEmailTemplate | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email tencentcloud_ses_send_email}
*/
export class SesSendEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ses_send_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SesSendEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesSendEmail to import
  * @param importFromId The id of the existing SesSendEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesSendEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ses_send_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ses_send_email tencentcloud_ses_send_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesSendEmailConfig
  */
  public constructor(scope: Construct, id: string, config: SesSendEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ses_send_email',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bcc = config.bcc;
    this._cc = config.cc;
    this._destination = config.destination;
    this._fromEmailAddress = config.fromEmailAddress;
    this._id = config.id;
    this._replyToAddresses = config.replyToAddresses;
    this._subject = config.subject;
    this._triggerType = config.triggerType;
    this._unsubscribe = config.unsubscribe;
    this._attachments.internalValue = config.attachments;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bcc - computed: false, optional: true, required: false
  private _bcc?: string[]; 
  public get bcc() {
    return cdktf.Fn.tolist(this.getListAttribute('bcc'));
  }
  public set bcc(value: string[]) {
    this._bcc = value;
  }
  public resetBcc() {
    this._bcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bccInput() {
    return this._bcc;
  }

  // cc - computed: false, optional: true, required: false
  private _cc?: string[]; 
  public get cc() {
    return cdktf.Fn.tolist(this.getListAttribute('cc'));
  }
  public set cc(value: string[]) {
    this._cc = value;
  }
  public resetCc() {
    this._cc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccInput() {
    return this._cc;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string[]; 
  public get destination() {
    return cdktf.Fn.tolist(this.getListAttribute('destination'));
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: number; 
  public get triggerType() {
    return this.getNumberAttribute('trigger_type');
  }
  public set triggerType(value: number) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
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
  private _attachments = new SesSendEmailAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: SesSendEmailAttachments[] | cdktf.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new SesSendEmailTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: SesSendEmailTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bcc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bcc),
      cc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cc),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      from_email_address: cdktf.stringToTerraform(this._fromEmailAddress),
      id: cdktf.stringToTerraform(this._id),
      reply_to_addresses: cdktf.stringToTerraform(this._replyToAddresses),
      subject: cdktf.stringToTerraform(this._subject),
      trigger_type: cdktf.numberToTerraform(this._triggerType),
      unsubscribe: cdktf.stringToTerraform(this._unsubscribe),
      attachments: cdktf.listMapper(sesSendEmailAttachmentsToTerraform, true)(this._attachments.internalValue),
      template: sesSendEmailTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bcc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bcc),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cc),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      trigger_type: {
        value: cdktf.numberToHclTerraform(this._triggerType),
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
        value: cdktf.listMapperHcl(sesSendEmailAttachmentsToHclTerraform, true)(this._attachments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesSendEmailAttachmentsList",
      },
      template: {
        value: sesSendEmailTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesSendEmailTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
