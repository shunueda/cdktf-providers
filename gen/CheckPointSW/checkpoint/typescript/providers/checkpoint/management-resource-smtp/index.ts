// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementResourceSmtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Rule Base will be rechecked with the new resolved IP address for mail delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#check_rulebase_with_new_destination ManagementResourceSmtp#check_rulebase_with_new_destination}
  */
  readonly checkRulebaseWithNewDestination?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#color ManagementResourceSmtp#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#comments ManagementResourceSmtp#comments}
  */
  readonly comments?: string;
  /**
  * MX record resolving is used to set the destination IP address of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#deliver_messages_using_dns_mx_records ManagementResourceSmtp#deliver_messages_using_dns_mx_records}
  */
  readonly deliverMessagesUsingDnsMxRecords?: boolean | cdktf.IResolvable;
  /**
  * The Rule Base will be rechecked with the new resolved IP address for error mail delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#error_check_rulebase_with_new_destination ManagementResourceSmtp#error_check_rulebase_with_new_destination}
  */
  readonly errorCheckRulebaseWithNewDestination?: boolean | cdktf.IResolvable;
  /**
  * MX record resolving will be used to set the source IP address of the connection used to send the error message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#error_deliver_messages_using_dns_mx_records ManagementResourceSmtp#error_deliver_messages_using_dns_mx_records}
  */
  readonly errorDeliverMessagesUsingDnsMxRecords?: boolean | cdktf.IResolvable;
  /**
  * Error mail delivery happens if the SMTP security server is unable to deliver the message within the abandon time, and Notify Sender on Error is checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#error_mail_delivery_server ManagementResourceSmtp#error_mail_delivery_server}
  */
  readonly errorMailDeliveryServer?: string;
  /**
  * Determines if an action specified in the Action 2 and CVP categories taken as a result of a resource definition is logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#exception_track ManagementResourceSmtp#exception_track}
  */
  readonly exceptionTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#id ManagementResourceSmtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#ignore_errors ManagementResourceSmtp#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#ignore_warnings ManagementResourceSmtp#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Specify the server to which mail is forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#mail_delivery_server ManagementResourceSmtp#mail_delivery_server}
  */
  readonly mailDeliveryServer?: string;
  /**
  * Set the Match properties for the SMTP resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#match ManagementResourceSmtp#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#name ManagementResourceSmtp#name}
  */
  readonly name: string;
  /**
  * Enable error mail delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#notify_sender_on_error ManagementResourceSmtp#notify_sender_on_error}
  */
  readonly notifySenderOnError?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#tags ManagementResourceSmtp#tags}
  */
  readonly tags?: string[];
  /**
  * action_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#action_1 ManagementResourceSmtp#action_1}
  */
  readonly action1?: ManagementResourceSmtpAction1;
  /**
  * action_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#action_2 ManagementResourceSmtp#action_2}
  */
  readonly action2?: ManagementResourceSmtpAction2;
  /**
  * cvp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#cvp ManagementResourceSmtp#cvp}
  */
  readonly cvp?: ManagementResourceSmtpCvp;
}
export interface ManagementResourceSmtpAction1CustomField {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#field ManagementResourceSmtp#field}
  */
  readonly field?: string;
  /**
  * Original field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#original ManagementResourceSmtp#original}
  */
  readonly original?: string;
  /**
  * Replacement field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#rewritten ManagementResourceSmtp#rewritten}
  */
  readonly rewritten?: string;
}

export function managementResourceSmtpAction1CustomFieldToTerraform(struct?: ManagementResourceSmtpAction1CustomFieldOutputReference | ManagementResourceSmtpAction1CustomField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    original: cdktf.stringToTerraform(struct!.original),
    rewritten: cdktf.stringToTerraform(struct!.rewritten),
  }
}


export function managementResourceSmtpAction1CustomFieldToHclTerraform(struct?: ManagementResourceSmtpAction1CustomFieldOutputReference | ManagementResourceSmtpAction1CustomField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original: {
      value: cdktf.stringToHclTerraform(struct!.original),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewritten: {
      value: cdktf.stringToHclTerraform(struct!.rewritten),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceSmtpAction1CustomFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceSmtpAction1CustomField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._original !== undefined) {
      hasAnyValues = true;
      internalValueResult.original = this._original;
    }
    if (this._rewritten !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritten = this._rewritten;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceSmtpAction1CustomField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._original = undefined;
      this._rewritten = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._original = value.original;
      this._rewritten = value.rewritten;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // original - computed: false, optional: true, required: false
  private _original?: string; 
  public get original() {
    return this.getStringAttribute('original');
  }
  public set original(value: string) {
    this._original = value;
  }
  public resetOriginal() {
    this._original = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalInput() {
    return this._original;
  }

  // rewritten - computed: false, optional: true, required: false
  private _rewritten?: string; 
  public get rewritten() {
    return this.getStringAttribute('rewritten');
  }
  public set rewritten(value: string) {
    this._rewritten = value;
  }
  public resetRewritten() {
    this._rewritten = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewrittenInput() {
    return this._rewritten;
  }
}
export interface ManagementResourceSmtpAction1Recipient {
  /**
  * Original field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#original ManagementResourceSmtp#original}
  */
  readonly original?: string;
  /**
  * Replacement field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#rewritten ManagementResourceSmtp#rewritten}
  */
  readonly rewritten?: string;
}

export function managementResourceSmtpAction1RecipientToTerraform(struct?: ManagementResourceSmtpAction1RecipientOutputReference | ManagementResourceSmtpAction1Recipient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    original: cdktf.stringToTerraform(struct!.original),
    rewritten: cdktf.stringToTerraform(struct!.rewritten),
  }
}


export function managementResourceSmtpAction1RecipientToHclTerraform(struct?: ManagementResourceSmtpAction1RecipientOutputReference | ManagementResourceSmtpAction1Recipient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    original: {
      value: cdktf.stringToHclTerraform(struct!.original),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewritten: {
      value: cdktf.stringToHclTerraform(struct!.rewritten),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceSmtpAction1RecipientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceSmtpAction1Recipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._original !== undefined) {
      hasAnyValues = true;
      internalValueResult.original = this._original;
    }
    if (this._rewritten !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritten = this._rewritten;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceSmtpAction1Recipient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._original = undefined;
      this._rewritten = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._original = value.original;
      this._rewritten = value.rewritten;
    }
  }

  // original - computed: false, optional: true, required: false
  private _original?: string; 
  public get original() {
    return this.getStringAttribute('original');
  }
  public set original(value: string) {
    this._original = value;
  }
  public resetOriginal() {
    this._original = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalInput() {
    return this._original;
  }

  // rewritten - computed: false, optional: true, required: false
  private _rewritten?: string; 
  public get rewritten() {
    return this.getStringAttribute('rewritten');
  }
  public set rewritten(value: string) {
    this._rewritten = value;
  }
  public resetRewritten() {
    this._rewritten = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewrittenInput() {
    return this._rewritten;
  }
}
export interface ManagementResourceSmtpAction1Sender {
  /**
  * Original field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#original ManagementResourceSmtp#original}
  */
  readonly original?: string;
  /**
  * Replacement field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#rewritten ManagementResourceSmtp#rewritten}
  */
  readonly rewritten?: string;
}

export function managementResourceSmtpAction1SenderToTerraform(struct?: ManagementResourceSmtpAction1SenderOutputReference | ManagementResourceSmtpAction1Sender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    original: cdktf.stringToTerraform(struct!.original),
    rewritten: cdktf.stringToTerraform(struct!.rewritten),
  }
}


export function managementResourceSmtpAction1SenderToHclTerraform(struct?: ManagementResourceSmtpAction1SenderOutputReference | ManagementResourceSmtpAction1Sender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    original: {
      value: cdktf.stringToHclTerraform(struct!.original),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewritten: {
      value: cdktf.stringToHclTerraform(struct!.rewritten),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceSmtpAction1SenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceSmtpAction1Sender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._original !== undefined) {
      hasAnyValues = true;
      internalValueResult.original = this._original;
    }
    if (this._rewritten !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritten = this._rewritten;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceSmtpAction1Sender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._original = undefined;
      this._rewritten = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._original = value.original;
      this._rewritten = value.rewritten;
    }
  }

  // original - computed: false, optional: true, required: false
  private _original?: string; 
  public get original() {
    return this.getStringAttribute('original');
  }
  public set original(value: string) {
    this._original = value;
  }
  public resetOriginal() {
    this._original = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalInput() {
    return this._original;
  }

  // rewritten - computed: false, optional: true, required: false
  private _rewritten?: string; 
  public get rewritten() {
    return this.getStringAttribute('rewritten');
  }
  public set rewritten(value: string) {
    this._rewritten = value;
  }
  public resetRewritten() {
    this._rewritten = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewrittenInput() {
    return this._rewritten;
  }
}
export interface ManagementResourceSmtpAction1 {
  /**
  * custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#custom_field ManagementResourceSmtp#custom_field}
  */
  readonly customField?: ManagementResourceSmtpAction1CustomField;
  /**
  * recipient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#recipient ManagementResourceSmtp#recipient}
  */
  readonly recipient?: ManagementResourceSmtpAction1Recipient;
  /**
  * sender block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#sender ManagementResourceSmtp#sender}
  */
  readonly sender?: ManagementResourceSmtpAction1Sender;
}

export function managementResourceSmtpAction1ToTerraform(struct?: ManagementResourceSmtpAction1OutputReference | ManagementResourceSmtpAction1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_field: managementResourceSmtpAction1CustomFieldToTerraform(struct!.customField),
    recipient: managementResourceSmtpAction1RecipientToTerraform(struct!.recipient),
    sender: managementResourceSmtpAction1SenderToTerraform(struct!.sender),
  }
}


export function managementResourceSmtpAction1ToHclTerraform(struct?: ManagementResourceSmtpAction1OutputReference | ManagementResourceSmtpAction1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_field: {
      value: managementResourceSmtpAction1CustomFieldToHclTerraform(struct!.customField),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementResourceSmtpAction1CustomFieldList",
    },
    recipient: {
      value: managementResourceSmtpAction1RecipientToHclTerraform(struct!.recipient),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementResourceSmtpAction1RecipientList",
    },
    sender: {
      value: managementResourceSmtpAction1SenderToHclTerraform(struct!.sender),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementResourceSmtpAction1SenderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceSmtpAction1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceSmtpAction1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customField = this._customField?.internalValue;
    }
    if (this._recipient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipient = this._recipient?.internalValue;
    }
    if (this._sender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sender = this._sender?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceSmtpAction1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customField.internalValue = undefined;
      this._recipient.internalValue = undefined;
      this._sender.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customField.internalValue = value.customField;
      this._recipient.internalValue = value.recipient;
      this._sender.internalValue = value.sender;
    }
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField = new ManagementResourceSmtpAction1CustomFieldOutputReference(this, "custom_field");
  public get customField() {
    return this._customField;
  }
  public putCustomField(value: ManagementResourceSmtpAction1CustomField) {
    this._customField.internalValue = value;
  }
  public resetCustomField() {
    this._customField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField.internalValue;
  }

  // recipient - computed: false, optional: true, required: false
  private _recipient = new ManagementResourceSmtpAction1RecipientOutputReference(this, "recipient");
  public get recipient() {
    return this._recipient;
  }
  public putRecipient(value: ManagementResourceSmtpAction1Recipient) {
    this._recipient.internalValue = value;
  }
  public resetRecipient() {
    this._recipient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient.internalValue;
  }

  // sender - computed: false, optional: true, required: false
  private _sender = new ManagementResourceSmtpAction1SenderOutputReference(this, "sender");
  public get sender() {
    return this._sender;
  }
  public putSender(value: ManagementResourceSmtpAction1Sender) {
    this._sender.internalValue = value;
  }
  public resetSender() {
    this._sender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderInput() {
    return this._sender.internalValue;
  }
}
export interface ManagementResourceSmtpAction2 {
  /**
  * The MIME email headers can consist of 8 or 7 bit characters (7 ASCII and 8 for sending Binary characters) in order to encode mail data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#allowed_characters ManagementResourceSmtp#allowed_characters}
  */
  readonly allowedCharacters?: string;
  /**
  * Restrict the size (in kb) of incoming email attachments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#mail_capacity ManagementResourceSmtp#mail_capacity}
  */
  readonly mailCapacity?: number;
  /**
  * Strip activeX tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#strip_activex_tags ManagementResourceSmtp#strip_activex_tags}
  */
  readonly stripActivexTags?: boolean | cdktf.IResolvable;
  /**
  * Strip JAVA applets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#strip_applet_tags ManagementResourceSmtp#strip_applet_tags}
  */
  readonly stripAppletTags?: boolean | cdktf.IResolvable;
  /**
  * Strips file attachments of the specified name from the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#strip_file_by_name ManagementResourceSmtp#strip_file_by_name}
  */
  readonly stripFileByName?: string;
  /**
  * Strip ftp links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#strip_ftp_links ManagementResourceSmtp#strip_ftp_links}
  */
  readonly stripFtpLinks?: boolean | cdktf.IResolvable;
  /**
  * Specifies the MIME type to strip from the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#strip_mime_of_type ManagementResourceSmtp#strip_mime_of_type}
  */
  readonly stripMimeOfType?: string;
  /**
  * Strip ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#strip_port_strings ManagementResourceSmtp#strip_port_strings}
  */
  readonly stripPortStrings?: boolean | cdktf.IResolvable;
  /**
  * Strip JAVA scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#strip_script_tags ManagementResourceSmtp#strip_script_tags}
  */
  readonly stripScriptTags?: boolean | cdktf.IResolvable;
}

export function managementResourceSmtpAction2ToTerraform(struct?: ManagementResourceSmtpAction2OutputReference | ManagementResourceSmtpAction2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_characters: cdktf.stringToTerraform(struct!.allowedCharacters),
    mail_capacity: cdktf.numberToTerraform(struct!.mailCapacity),
    strip_activex_tags: cdktf.booleanToTerraform(struct!.stripActivexTags),
    strip_applet_tags: cdktf.booleanToTerraform(struct!.stripAppletTags),
    strip_file_by_name: cdktf.stringToTerraform(struct!.stripFileByName),
    strip_ftp_links: cdktf.booleanToTerraform(struct!.stripFtpLinks),
    strip_mime_of_type: cdktf.stringToTerraform(struct!.stripMimeOfType),
    strip_port_strings: cdktf.booleanToTerraform(struct!.stripPortStrings),
    strip_script_tags: cdktf.booleanToTerraform(struct!.stripScriptTags),
  }
}


export function managementResourceSmtpAction2ToHclTerraform(struct?: ManagementResourceSmtpAction2OutputReference | ManagementResourceSmtpAction2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_characters: {
      value: cdktf.stringToHclTerraform(struct!.allowedCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_capacity: {
      value: cdktf.numberToHclTerraform(struct!.mailCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strip_activex_tags: {
      value: cdktf.booleanToHclTerraform(struct!.stripActivexTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_applet_tags: {
      value: cdktf.booleanToHclTerraform(struct!.stripAppletTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_file_by_name: {
      value: cdktf.stringToHclTerraform(struct!.stripFileByName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_ftp_links: {
      value: cdktf.booleanToHclTerraform(struct!.stripFtpLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_mime_of_type: {
      value: cdktf.stringToHclTerraform(struct!.stripMimeOfType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_port_strings: {
      value: cdktf.booleanToHclTerraform(struct!.stripPortStrings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_script_tags: {
      value: cdktf.booleanToHclTerraform(struct!.stripScriptTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceSmtpAction2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceSmtpAction2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCharacters = this._allowedCharacters;
    }
    if (this._mailCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailCapacity = this._mailCapacity;
    }
    if (this._stripActivexTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripActivexTags = this._stripActivexTags;
    }
    if (this._stripAppletTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripAppletTags = this._stripAppletTags;
    }
    if (this._stripFileByName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripFileByName = this._stripFileByName;
    }
    if (this._stripFtpLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripFtpLinks = this._stripFtpLinks;
    }
    if (this._stripMimeOfType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripMimeOfType = this._stripMimeOfType;
    }
    if (this._stripPortStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripPortStrings = this._stripPortStrings;
    }
    if (this._stripScriptTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripScriptTags = this._stripScriptTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceSmtpAction2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCharacters = undefined;
      this._mailCapacity = undefined;
      this._stripActivexTags = undefined;
      this._stripAppletTags = undefined;
      this._stripFileByName = undefined;
      this._stripFtpLinks = undefined;
      this._stripMimeOfType = undefined;
      this._stripPortStrings = undefined;
      this._stripScriptTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCharacters = value.allowedCharacters;
      this._mailCapacity = value.mailCapacity;
      this._stripActivexTags = value.stripActivexTags;
      this._stripAppletTags = value.stripAppletTags;
      this._stripFileByName = value.stripFileByName;
      this._stripFtpLinks = value.stripFtpLinks;
      this._stripMimeOfType = value.stripMimeOfType;
      this._stripPortStrings = value.stripPortStrings;
      this._stripScriptTags = value.stripScriptTags;
    }
  }

  // allowed_characters - computed: false, optional: true, required: false
  private _allowedCharacters?: string; 
  public get allowedCharacters() {
    return this.getStringAttribute('allowed_characters');
  }
  public set allowedCharacters(value: string) {
    this._allowedCharacters = value;
  }
  public resetAllowedCharacters() {
    this._allowedCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCharactersInput() {
    return this._allowedCharacters;
  }

  // mail_capacity - computed: false, optional: true, required: false
  private _mailCapacity?: number; 
  public get mailCapacity() {
    return this.getNumberAttribute('mail_capacity');
  }
  public set mailCapacity(value: number) {
    this._mailCapacity = value;
  }
  public resetMailCapacity() {
    this._mailCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailCapacityInput() {
    return this._mailCapacity;
  }

  // strip_activex_tags - computed: false, optional: true, required: false
  private _stripActivexTags?: boolean | cdktf.IResolvable; 
  public get stripActivexTags() {
    return this.getBooleanAttribute('strip_activex_tags');
  }
  public set stripActivexTags(value: boolean | cdktf.IResolvable) {
    this._stripActivexTags = value;
  }
  public resetStripActivexTags() {
    this._stripActivexTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripActivexTagsInput() {
    return this._stripActivexTags;
  }

  // strip_applet_tags - computed: false, optional: true, required: false
  private _stripAppletTags?: boolean | cdktf.IResolvable; 
  public get stripAppletTags() {
    return this.getBooleanAttribute('strip_applet_tags');
  }
  public set stripAppletTags(value: boolean | cdktf.IResolvable) {
    this._stripAppletTags = value;
  }
  public resetStripAppletTags() {
    this._stripAppletTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripAppletTagsInput() {
    return this._stripAppletTags;
  }

  // strip_file_by_name - computed: false, optional: true, required: false
  private _stripFileByName?: string; 
  public get stripFileByName() {
    return this.getStringAttribute('strip_file_by_name');
  }
  public set stripFileByName(value: string) {
    this._stripFileByName = value;
  }
  public resetStripFileByName() {
    this._stripFileByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripFileByNameInput() {
    return this._stripFileByName;
  }

  // strip_ftp_links - computed: false, optional: true, required: false
  private _stripFtpLinks?: boolean | cdktf.IResolvable; 
  public get stripFtpLinks() {
    return this.getBooleanAttribute('strip_ftp_links');
  }
  public set stripFtpLinks(value: boolean | cdktf.IResolvable) {
    this._stripFtpLinks = value;
  }
  public resetStripFtpLinks() {
    this._stripFtpLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripFtpLinksInput() {
    return this._stripFtpLinks;
  }

  // strip_mime_of_type - computed: false, optional: true, required: false
  private _stripMimeOfType?: string; 
  public get stripMimeOfType() {
    return this.getStringAttribute('strip_mime_of_type');
  }
  public set stripMimeOfType(value: string) {
    this._stripMimeOfType = value;
  }
  public resetStripMimeOfType() {
    this._stripMimeOfType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripMimeOfTypeInput() {
    return this._stripMimeOfType;
  }

  // strip_port_strings - computed: false, optional: true, required: false
  private _stripPortStrings?: boolean | cdktf.IResolvable; 
  public get stripPortStrings() {
    return this.getBooleanAttribute('strip_port_strings');
  }
  public set stripPortStrings(value: boolean | cdktf.IResolvable) {
    this._stripPortStrings = value;
  }
  public resetStripPortStrings() {
    this._stripPortStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripPortStringsInput() {
    return this._stripPortStrings;
  }

  // strip_script_tags - computed: false, optional: true, required: false
  private _stripScriptTags?: boolean | cdktf.IResolvable; 
  public get stripScriptTags() {
    return this.getBooleanAttribute('strip_script_tags');
  }
  public set stripScriptTags(value: boolean | cdktf.IResolvable) {
    this._stripScriptTags = value;
  }
  public resetStripScriptTags() {
    this._stripScriptTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripScriptTagsInput() {
    return this._stripScriptTags;
  }
}
export interface ManagementResourceSmtpCvp {
  /**
  * Configures the CVP server to inspect but not modify content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#allowed_to_modify_content ManagementResourceSmtp#allowed_to_modify_content}
  */
  readonly allowedToModifyContent?: boolean | cdktf.IResolvable;
  /**
  * Select to enable the Content Vectoring Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#enable_cvp ManagementResourceSmtp#enable_cvp}
  */
  readonly enableCvp?: boolean | cdktf.IResolvable;
  /**
  * Designates when the CVP server returns data to the Security Gateway security server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#reply_order ManagementResourceSmtp#reply_order}
  */
  readonly replyOrder?: string;
  /**
  * The UID or Name of the CVP server, make sure the CVP server is already be defined as an OPSEC Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#server ManagementResourceSmtp#server}
  */
  readonly server?: string;
}

export function managementResourceSmtpCvpToTerraform(struct?: ManagementResourceSmtpCvpOutputReference | ManagementResourceSmtpCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_to_modify_content: cdktf.booleanToTerraform(struct!.allowedToModifyContent),
    enable_cvp: cdktf.booleanToTerraform(struct!.enableCvp),
    reply_order: cdktf.stringToTerraform(struct!.replyOrder),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function managementResourceSmtpCvpToHclTerraform(struct?: ManagementResourceSmtpCvpOutputReference | ManagementResourceSmtpCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_to_modify_content: {
      value: cdktf.booleanToHclTerraform(struct!.allowedToModifyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cvp: {
      value: cdktf.booleanToHclTerraform(struct!.enableCvp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reply_order: {
      value: cdktf.stringToHclTerraform(struct!.replyOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceSmtpCvpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceSmtpCvp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedToModifyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedToModifyContent = this._allowedToModifyContent;
    }
    if (this._enableCvp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCvp = this._enableCvp;
    }
    if (this._replyOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyOrder = this._replyOrder;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceSmtpCvp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedToModifyContent = undefined;
      this._enableCvp = undefined;
      this._replyOrder = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedToModifyContent = value.allowedToModifyContent;
      this._enableCvp = value.enableCvp;
      this._replyOrder = value.replyOrder;
      this._server = value.server;
    }
  }

  // allowed_to_modify_content - computed: false, optional: true, required: false
  private _allowedToModifyContent?: boolean | cdktf.IResolvable; 
  public get allowedToModifyContent() {
    return this.getBooleanAttribute('allowed_to_modify_content');
  }
  public set allowedToModifyContent(value: boolean | cdktf.IResolvable) {
    this._allowedToModifyContent = value;
  }
  public resetAllowedToModifyContent() {
    this._allowedToModifyContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToModifyContentInput() {
    return this._allowedToModifyContent;
  }

  // enable_cvp - computed: false, optional: true, required: false
  private _enableCvp?: boolean | cdktf.IResolvable; 
  public get enableCvp() {
    return this.getBooleanAttribute('enable_cvp');
  }
  public set enableCvp(value: boolean | cdktf.IResolvable) {
    this._enableCvp = value;
  }
  public resetEnableCvp() {
    this._enableCvp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCvpInput() {
    return this._enableCvp;
  }

  // reply_order - computed: false, optional: true, required: false
  private _replyOrder?: string; 
  public get replyOrder() {
    return this.getStringAttribute('reply_order');
  }
  public set replyOrder(value: string) {
    this._replyOrder = value;
  }
  public resetReplyOrder() {
    this._replyOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyOrderInput() {
    return this._replyOrder;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp checkpoint_management_resource_smtp}
*/
export class ManagementResourceSmtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_resource_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementResourceSmtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementResourceSmtp to import
  * @param importFromId The id of the existing ManagementResourceSmtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementResourceSmtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_resource_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_smtp checkpoint_management_resource_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementResourceSmtpConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementResourceSmtpConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_resource_smtp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkRulebaseWithNewDestination = config.checkRulebaseWithNewDestination;
    this._color = config.color;
    this._comments = config.comments;
    this._deliverMessagesUsingDnsMxRecords = config.deliverMessagesUsingDnsMxRecords;
    this._errorCheckRulebaseWithNewDestination = config.errorCheckRulebaseWithNewDestination;
    this._errorDeliverMessagesUsingDnsMxRecords = config.errorDeliverMessagesUsingDnsMxRecords;
    this._errorMailDeliveryServer = config.errorMailDeliveryServer;
    this._exceptionTrack = config.exceptionTrack;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._mailDeliveryServer = config.mailDeliveryServer;
    this._match = config.match;
    this._name = config.name;
    this._notifySenderOnError = config.notifySenderOnError;
    this._tags = config.tags;
    this._action1.internalValue = config.action1;
    this._action2.internalValue = config.action2;
    this._cvp.internalValue = config.cvp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_rulebase_with_new_destination - computed: false, optional: true, required: false
  private _checkRulebaseWithNewDestination?: boolean | cdktf.IResolvable; 
  public get checkRulebaseWithNewDestination() {
    return this.getBooleanAttribute('check_rulebase_with_new_destination');
  }
  public set checkRulebaseWithNewDestination(value: boolean | cdktf.IResolvable) {
    this._checkRulebaseWithNewDestination = value;
  }
  public resetCheckRulebaseWithNewDestination() {
    this._checkRulebaseWithNewDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRulebaseWithNewDestinationInput() {
    return this._checkRulebaseWithNewDestination;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // deliver_messages_using_dns_mx_records - computed: false, optional: true, required: false
  private _deliverMessagesUsingDnsMxRecords?: boolean | cdktf.IResolvable; 
  public get deliverMessagesUsingDnsMxRecords() {
    return this.getBooleanAttribute('deliver_messages_using_dns_mx_records');
  }
  public set deliverMessagesUsingDnsMxRecords(value: boolean | cdktf.IResolvable) {
    this._deliverMessagesUsingDnsMxRecords = value;
  }
  public resetDeliverMessagesUsingDnsMxRecords() {
    this._deliverMessagesUsingDnsMxRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverMessagesUsingDnsMxRecordsInput() {
    return this._deliverMessagesUsingDnsMxRecords;
  }

  // error_check_rulebase_with_new_destination - computed: false, optional: true, required: false
  private _errorCheckRulebaseWithNewDestination?: boolean | cdktf.IResolvable; 
  public get errorCheckRulebaseWithNewDestination() {
    return this.getBooleanAttribute('error_check_rulebase_with_new_destination');
  }
  public set errorCheckRulebaseWithNewDestination(value: boolean | cdktf.IResolvable) {
    this._errorCheckRulebaseWithNewDestination = value;
  }
  public resetErrorCheckRulebaseWithNewDestination() {
    this._errorCheckRulebaseWithNewDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCheckRulebaseWithNewDestinationInput() {
    return this._errorCheckRulebaseWithNewDestination;
  }

  // error_deliver_messages_using_dns_mx_records - computed: false, optional: true, required: false
  private _errorDeliverMessagesUsingDnsMxRecords?: boolean | cdktf.IResolvable; 
  public get errorDeliverMessagesUsingDnsMxRecords() {
    return this.getBooleanAttribute('error_deliver_messages_using_dns_mx_records');
  }
  public set errorDeliverMessagesUsingDnsMxRecords(value: boolean | cdktf.IResolvable) {
    this._errorDeliverMessagesUsingDnsMxRecords = value;
  }
  public resetErrorDeliverMessagesUsingDnsMxRecords() {
    this._errorDeliverMessagesUsingDnsMxRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDeliverMessagesUsingDnsMxRecordsInput() {
    return this._errorDeliverMessagesUsingDnsMxRecords;
  }

  // error_mail_delivery_server - computed: false, optional: true, required: false
  private _errorMailDeliveryServer?: string; 
  public get errorMailDeliveryServer() {
    return this.getStringAttribute('error_mail_delivery_server');
  }
  public set errorMailDeliveryServer(value: string) {
    this._errorMailDeliveryServer = value;
  }
  public resetErrorMailDeliveryServer() {
    this._errorMailDeliveryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMailDeliveryServerInput() {
    return this._errorMailDeliveryServer;
  }

  // exception_track - computed: false, optional: true, required: false
  private _exceptionTrack?: string; 
  public get exceptionTrack() {
    return this.getStringAttribute('exception_track');
  }
  public set exceptionTrack(value: string) {
    this._exceptionTrack = value;
  }
  public resetExceptionTrack() {
    this._exceptionTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTrackInput() {
    return this._exceptionTrack;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // mail_delivery_server - computed: false, optional: true, required: false
  private _mailDeliveryServer?: string; 
  public get mailDeliveryServer() {
    return this.getStringAttribute('mail_delivery_server');
  }
  public set mailDeliveryServer(value: string) {
    this._mailDeliveryServer = value;
  }
  public resetMailDeliveryServer() {
    this._mailDeliveryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailDeliveryServerInput() {
    return this._mailDeliveryServer;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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

  // notify_sender_on_error - computed: false, optional: true, required: false
  private _notifySenderOnError?: boolean | cdktf.IResolvable; 
  public get notifySenderOnError() {
    return this.getBooleanAttribute('notify_sender_on_error');
  }
  public set notifySenderOnError(value: boolean | cdktf.IResolvable) {
    this._notifySenderOnError = value;
  }
  public resetNotifySenderOnError() {
    this._notifySenderOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySenderOnErrorInput() {
    return this._notifySenderOnError;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // action_1 - computed: false, optional: true, required: false
  private _action1 = new ManagementResourceSmtpAction1OutputReference(this, "action_1");
  public get action1() {
    return this._action1;
  }
  public putAction1(value: ManagementResourceSmtpAction1) {
    this._action1.internalValue = value;
  }
  public resetAction1() {
    this._action1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action1Input() {
    return this._action1.internalValue;
  }

  // action_2 - computed: false, optional: true, required: false
  private _action2 = new ManagementResourceSmtpAction2OutputReference(this, "action_2");
  public get action2() {
    return this._action2;
  }
  public putAction2(value: ManagementResourceSmtpAction2) {
    this._action2.internalValue = value;
  }
  public resetAction2() {
    this._action2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action2Input() {
    return this._action2.internalValue;
  }

  // cvp - computed: false, optional: true, required: false
  private _cvp = new ManagementResourceSmtpCvpOutputReference(this, "cvp");
  public get cvp() {
    return this._cvp;
  }
  public putCvp(value: ManagementResourceSmtpCvp) {
    this._cvp.internalValue = value;
  }
  public resetCvp() {
    this._cvp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvpInput() {
    return this._cvp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_rulebase_with_new_destination: cdktf.booleanToTerraform(this._checkRulebaseWithNewDestination),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      deliver_messages_using_dns_mx_records: cdktf.booleanToTerraform(this._deliverMessagesUsingDnsMxRecords),
      error_check_rulebase_with_new_destination: cdktf.booleanToTerraform(this._errorCheckRulebaseWithNewDestination),
      error_deliver_messages_using_dns_mx_records: cdktf.booleanToTerraform(this._errorDeliverMessagesUsingDnsMxRecords),
      error_mail_delivery_server: cdktf.stringToTerraform(this._errorMailDeliveryServer),
      exception_track: cdktf.stringToTerraform(this._exceptionTrack),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      mail_delivery_server: cdktf.stringToTerraform(this._mailDeliveryServer),
      match: cdktf.hashMapper(cdktf.stringToTerraform)(this._match),
      name: cdktf.stringToTerraform(this._name),
      notify_sender_on_error: cdktf.booleanToTerraform(this._notifySenderOnError),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      action_1: managementResourceSmtpAction1ToTerraform(this._action1.internalValue),
      action_2: managementResourceSmtpAction2ToTerraform(this._action2.internalValue),
      cvp: managementResourceSmtpCvpToTerraform(this._cvp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_rulebase_with_new_destination: {
        value: cdktf.booleanToHclTerraform(this._checkRulebaseWithNewDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deliver_messages_using_dns_mx_records: {
        value: cdktf.booleanToHclTerraform(this._deliverMessagesUsingDnsMxRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_check_rulebase_with_new_destination: {
        value: cdktf.booleanToHclTerraform(this._errorCheckRulebaseWithNewDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_deliver_messages_using_dns_mx_records: {
        value: cdktf.booleanToHclTerraform(this._errorDeliverMessagesUsingDnsMxRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_mail_delivery_server: {
        value: cdktf.stringToHclTerraform(this._errorMailDeliveryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_track: {
        value: cdktf.stringToHclTerraform(this._exceptionTrack),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mail_delivery_server: {
        value: cdktf.stringToHclTerraform(this._mailDeliveryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._match),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_sender_on_error: {
        value: cdktf.booleanToHclTerraform(this._notifySenderOnError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      action_1: {
        value: managementResourceSmtpAction1ToHclTerraform(this._action1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceSmtpAction1List",
      },
      action_2: {
        value: managementResourceSmtpAction2ToHclTerraform(this._action2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceSmtpAction2List",
      },
      cvp: {
        value: managementResourceSmtpCvpToHclTerraform(this._cvp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceSmtpCvpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
