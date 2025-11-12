// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSmartTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#color ManagementSmartTask#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#comments ManagementSmartTask#comments}
  */
  readonly comments?: string;
  /**
  * Per SmartTask custom data in JSON format.<br>When the trigger is fired, the trigger data is converted to JSON. The custom data is then concatenated to the trigger data JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#custom_data ManagementSmartTask#custom_data}
  */
  readonly customData?: string;
  /**
  * Description of the SmartTask's functionality and options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#description ManagementSmartTask#description}
  */
  readonly description?: string;
  /**
  * Whether the SmartTask is enabled and will run when triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#enabled ManagementSmartTask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If the action fails to execute, whether to treat the execution failure as an error, or continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#fail_open ManagementSmartTask#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#id ManagementSmartTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#ignore_errors ManagementSmartTask#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#ignore_warnings ManagementSmartTask#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#name ManagementSmartTask#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#tags ManagementSmartTask#tags}
  */
  readonly tags?: string[];
  /**
  * Trigger type associated with the SmartTask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#trigger ManagementSmartTask#trigger}
  */
  readonly trigger?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#action ManagementSmartTask#action}
  */
  readonly action?: ManagementSmartTaskAction;
}
export interface ManagementSmartTaskActionRunScript {
  /**
  * Repository script that is executed when the trigger is fired.,  identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#repository_script ManagementSmartTask#repository_script}
  */
  readonly repositoryScript?: string;
  /**
  * Targets to execute the script on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#targets ManagementSmartTask#targets}
  */
  readonly targets?: string[];
  /**
  * Script execution time-out in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#time_out ManagementSmartTask#time_out}
  */
  readonly timeOut?: number;
}

export function managementSmartTaskActionRunScriptToTerraform(struct?: ManagementSmartTaskActionRunScriptOutputReference | ManagementSmartTaskActionRunScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_script: cdktf.stringToTerraform(struct!.repositoryScript),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
    time_out: cdktf.numberToTerraform(struct!.timeOut),
  }
}


export function managementSmartTaskActionRunScriptToHclTerraform(struct?: ManagementSmartTaskActionRunScriptOutputReference | ManagementSmartTaskActionRunScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_script: {
      value: cdktf.stringToHclTerraform(struct!.repositoryScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    time_out: {
      value: cdktf.numberToHclTerraform(struct!.timeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSmartTaskActionRunScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSmartTaskActionRunScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryScript = this._repositoryScript;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._timeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOut = this._timeOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSmartTaskActionRunScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryScript = undefined;
      this._targets = undefined;
      this._timeOut = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryScript = value.repositoryScript;
      this._targets = value.targets;
      this._timeOut = value.timeOut;
    }
  }

  // repository_script - computed: false, optional: true, required: false
  private _repositoryScript?: string; 
  public get repositoryScript() {
    return this.getStringAttribute('repository_script');
  }
  public set repositoryScript(value: string) {
    this._repositoryScript = value;
  }
  public resetRepositoryScript() {
    this._repositoryScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryScriptInput() {
    return this._repositoryScript;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return cdktf.Fn.tolist(this.getListAttribute('targets'));
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // time_out - computed: false, optional: true, required: false
  private _timeOut?: number; 
  public get timeOut() {
    return this.getNumberAttribute('time_out');
  }
  public set timeOut(value: number) {
    this._timeOut = value;
  }
  public resetTimeOut() {
    this._timeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutInput() {
    return this._timeOut;
  }
}
export interface ManagementSmartTaskActionSendMailMailSettings {
  /**
  * What file should be attached to the mail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#attachment ManagementSmartTask#attachment}
  */
  readonly attachment?: string;
  /**
  * A comma separated list of bcc recipient mail addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#bcc_recipients ManagementSmartTask#bcc_recipients}
  */
  readonly bccRecipients?: string;
  /**
  * The email body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#body ManagementSmartTask#body}
  */
  readonly body?: string;
  /**
  * A comma separated list of cc recipient mail addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#cc_recipients ManagementSmartTask#cc_recipients}
  */
  readonly ccRecipients?: string;
  /**
  * A comma separated list of recipient mail addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#recipients ManagementSmartTask#recipients}
  */
  readonly recipients?: string;
  /**
  * An email address to send the mail from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#sender_email ManagementSmartTask#sender_email}
  */
  readonly senderEmail?: string;
  /**
  * The email subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#subject ManagementSmartTask#subject}
  */
  readonly subject?: string;
}

export function managementSmartTaskActionSendMailMailSettingsToTerraform(struct?: ManagementSmartTaskActionSendMailMailSettingsOutputReference | ManagementSmartTaskActionSendMailMailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachment: cdktf.stringToTerraform(struct!.attachment),
    bcc_recipients: cdktf.stringToTerraform(struct!.bccRecipients),
    body: cdktf.stringToTerraform(struct!.body),
    cc_recipients: cdktf.stringToTerraform(struct!.ccRecipients),
    recipients: cdktf.stringToTerraform(struct!.recipients),
    sender_email: cdktf.stringToTerraform(struct!.senderEmail),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function managementSmartTaskActionSendMailMailSettingsToHclTerraform(struct?: ManagementSmartTaskActionSendMailMailSettingsOutputReference | ManagementSmartTaskActionSendMailMailSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachment: {
      value: cdktf.stringToHclTerraform(struct!.attachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bcc_recipients: {
      value: cdktf.stringToHclTerraform(struct!.bccRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cc_recipients: {
      value: cdktf.stringToHclTerraform(struct!.ccRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.stringToHclTerraform(struct!.recipients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender_email: {
      value: cdktf.stringToHclTerraform(struct!.senderEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSmartTaskActionSendMailMailSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSmartTaskActionSendMailMailSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachment = this._attachment;
    }
    if (this._bccRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.bccRecipients = this._bccRecipients;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._ccRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccRecipients = this._ccRecipients;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._senderEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderEmail = this._senderEmail;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSmartTaskActionSendMailMailSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attachment = undefined;
      this._bccRecipients = undefined;
      this._body = undefined;
      this._ccRecipients = undefined;
      this._recipients = undefined;
      this._senderEmail = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attachment = value.attachment;
      this._bccRecipients = value.bccRecipients;
      this._body = value.body;
      this._ccRecipients = value.ccRecipients;
      this._recipients = value.recipients;
      this._senderEmail = value.senderEmail;
      this._subject = value.subject;
    }
  }

  // attachment - computed: false, optional: true, required: false
  private _attachment?: string; 
  public get attachment() {
    return this.getStringAttribute('attachment');
  }
  public set attachment(value: string) {
    this._attachment = value;
  }
  public resetAttachment() {
    this._attachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment;
  }

  // bcc_recipients - computed: false, optional: true, required: false
  private _bccRecipients?: string; 
  public get bccRecipients() {
    return this.getStringAttribute('bcc_recipients');
  }
  public set bccRecipients(value: string) {
    this._bccRecipients = value;
  }
  public resetBccRecipients() {
    this._bccRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bccRecipientsInput() {
    return this._bccRecipients;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // cc_recipients - computed: false, optional: true, required: false
  private _ccRecipients?: string; 
  public get ccRecipients() {
    return this.getStringAttribute('cc_recipients');
  }
  public set ccRecipients(value: string) {
    this._ccRecipients = value;
  }
  public resetCcRecipients() {
    this._ccRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccRecipientsInput() {
    return this._ccRecipients;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string; 
  public get recipients() {
    return this.getStringAttribute('recipients');
  }
  public set recipients(value: string) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // sender_email - computed: false, optional: true, required: false
  private _senderEmail?: string; 
  public get senderEmail() {
    return this.getStringAttribute('sender_email');
  }
  public set senderEmail(value: string) {
    this._senderEmail = value;
  }
  public resetSenderEmail() {
    this._senderEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderEmailInput() {
    return this._senderEmail;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ManagementSmartTaskActionSendMailSmtpServer {
  /**
  * Object name. Must be unique in the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#name ManagementSmartTask#name}
  */
  readonly name?: string;
}

export function managementSmartTaskActionSendMailSmtpServerToTerraform(struct?: ManagementSmartTaskActionSendMailSmtpServerOutputReference | ManagementSmartTaskActionSendMailSmtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function managementSmartTaskActionSendMailSmtpServerToHclTerraform(struct?: ManagementSmartTaskActionSendMailSmtpServerOutputReference | ManagementSmartTaskActionSendMailSmtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSmartTaskActionSendMailSmtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSmartTaskActionSendMailSmtpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSmartTaskActionSendMailSmtpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getStringAttribute('encryption');
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface ManagementSmartTaskActionSendMail {
  /**
  * mail_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#mail_settings ManagementSmartTask#mail_settings}
  */
  readonly mailSettings: ManagementSmartTaskActionSendMailMailSettings;
  /**
  * smtp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#smtp_server ManagementSmartTask#smtp_server}
  */
  readonly smtpServer?: ManagementSmartTaskActionSendMailSmtpServer;
}

export function managementSmartTaskActionSendMailToTerraform(struct?: ManagementSmartTaskActionSendMailOutputReference | ManagementSmartTaskActionSendMail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mail_settings: managementSmartTaskActionSendMailMailSettingsToTerraform(struct!.mailSettings),
    smtp_server: managementSmartTaskActionSendMailSmtpServerToTerraform(struct!.smtpServer),
  }
}


export function managementSmartTaskActionSendMailToHclTerraform(struct?: ManagementSmartTaskActionSendMailOutputReference | ManagementSmartTaskActionSendMail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mail_settings: {
      value: managementSmartTaskActionSendMailMailSettingsToHclTerraform(struct!.mailSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSmartTaskActionSendMailMailSettingsList",
    },
    smtp_server: {
      value: managementSmartTaskActionSendMailSmtpServerToHclTerraform(struct!.smtpServer),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSmartTaskActionSendMailSmtpServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSmartTaskActionSendMailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSmartTaskActionSendMail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mailSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailSettings = this._mailSettings?.internalValue;
    }
    if (this._smtpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpServer = this._smtpServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSmartTaskActionSendMail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mailSettings.internalValue = undefined;
      this._smtpServer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mailSettings.internalValue = value.mailSettings;
      this._smtpServer.internalValue = value.smtpServer;
    }
  }

  // mail_settings - computed: false, optional: false, required: true
  private _mailSettings = new ManagementSmartTaskActionSendMailMailSettingsOutputReference(this, "mail_settings");
  public get mailSettings() {
    return this._mailSettings;
  }
  public putMailSettings(value: ManagementSmartTaskActionSendMailMailSettings) {
    this._mailSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mailSettingsInput() {
    return this._mailSettings.internalValue;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer = new ManagementSmartTaskActionSendMailSmtpServerOutputReference(this, "smtp_server");
  public get smtpServer() {
    return this._smtpServer;
  }
  public putSmtpServer(value: ManagementSmartTaskActionSendMailSmtpServer) {
    this._smtpServer.internalValue = value;
  }
  public resetSmtpServer() {
    this._smtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer.internalValue;
  }
}
export interface ManagementSmartTaskActionSendWebRequest {
  /**
  * The SHA1 fingerprint of the URL's SSL certificate. Used to trust servers with self-signed SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#fingerprint ManagementSmartTask#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Option to send to the web request via a proxy other than the Management's Server proxy (if defined).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#override_proxy ManagementSmartTask#override_proxy}
  */
  readonly overrideProxy?: boolean | cdktf.IResolvable;
  /**
  * URL of the proxy used to send the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#proxy_url ManagementSmartTask#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Shared secret that can be used by the target server to identify the Management Server.<br>The value will be sent as part of the request in the "X-chkp-shared-secret" header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#shared_secret ManagementSmartTask#shared_secret}
  */
  readonly sharedSecret?: string;
  /**
  * Web Request time-out in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#time_out ManagementSmartTask#time_out}
  */
  readonly timeOut?: number;
  /**
  * URL used for the web request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#url ManagementSmartTask#url}
  */
  readonly url?: string;
}

export function managementSmartTaskActionSendWebRequestToTerraform(struct?: ManagementSmartTaskActionSendWebRequestOutputReference | ManagementSmartTaskActionSendWebRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    override_proxy: cdktf.booleanToTerraform(struct!.overrideProxy),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
    time_out: cdktf.numberToTerraform(struct!.timeOut),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function managementSmartTaskActionSendWebRequestToHclTerraform(struct?: ManagementSmartTaskActionSendWebRequestOutputReference | ManagementSmartTaskActionSendWebRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.overrideProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_out: {
      value: cdktf.numberToHclTerraform(struct!.timeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSmartTaskActionSendWebRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSmartTaskActionSendWebRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._overrideProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProxy = this._overrideProxy;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    if (this._timeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOut = this._timeOut;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSmartTaskActionSendWebRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fingerprint = undefined;
      this._overrideProxy = undefined;
      this._proxyUrl = undefined;
      this._sharedSecret = undefined;
      this._timeOut = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fingerprint = value.fingerprint;
      this._overrideProxy = value.overrideProxy;
      this._proxyUrl = value.proxyUrl;
      this._sharedSecret = value.sharedSecret;
      this._timeOut = value.timeOut;
      this._url = value.url;
    }
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // override_proxy - computed: false, optional: true, required: false
  private _overrideProxy?: boolean | cdktf.IResolvable; 
  public get overrideProxy() {
    return this.getBooleanAttribute('override_proxy');
  }
  public set overrideProxy(value: boolean | cdktf.IResolvable) {
    this._overrideProxy = value;
  }
  public resetOverrideProxy() {
    this._overrideProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProxyInput() {
    return this._overrideProxy;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // time_out - computed: false, optional: true, required: false
  private _timeOut?: number; 
  public get timeOut() {
    return this.getNumberAttribute('time_out');
  }
  public set timeOut(value: number) {
    this._timeOut = value;
  }
  public resetTimeOut() {
    this._timeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutInput() {
    return this._timeOut;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ManagementSmartTaskAction {
  /**
  * run_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#run_script ManagementSmartTask#run_script}
  */
  readonly runScript?: ManagementSmartTaskActionRunScript;
  /**
  * send_mail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#send_mail ManagementSmartTask#send_mail}
  */
  readonly sendMail?: ManagementSmartTaskActionSendMail;
  /**
  * send_web_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#send_web_request ManagementSmartTask#send_web_request}
  */
  readonly sendWebRequest?: ManagementSmartTaskActionSendWebRequest;
}

export function managementSmartTaskActionToTerraform(struct?: ManagementSmartTaskActionOutputReference | ManagementSmartTaskAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    run_script: managementSmartTaskActionRunScriptToTerraform(struct!.runScript),
    send_mail: managementSmartTaskActionSendMailToTerraform(struct!.sendMail),
    send_web_request: managementSmartTaskActionSendWebRequestToTerraform(struct!.sendWebRequest),
  }
}


export function managementSmartTaskActionToHclTerraform(struct?: ManagementSmartTaskActionOutputReference | ManagementSmartTaskAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    run_script: {
      value: managementSmartTaskActionRunScriptToHclTerraform(struct!.runScript),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSmartTaskActionRunScriptList",
    },
    send_mail: {
      value: managementSmartTaskActionSendMailToHclTerraform(struct!.sendMail),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSmartTaskActionSendMailList",
    },
    send_web_request: {
      value: managementSmartTaskActionSendWebRequestToHclTerraform(struct!.sendWebRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSmartTaskActionSendWebRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSmartTaskActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSmartTaskAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runScript = this._runScript?.internalValue;
    }
    if (this._sendMail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendMail = this._sendMail?.internalValue;
    }
    if (this._sendWebRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendWebRequest = this._sendWebRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSmartTaskAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runScript.internalValue = undefined;
      this._sendMail.internalValue = undefined;
      this._sendWebRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runScript.internalValue = value.runScript;
      this._sendMail.internalValue = value.sendMail;
      this._sendWebRequest.internalValue = value.sendWebRequest;
    }
  }

  // run_script - computed: false, optional: true, required: false
  private _runScript = new ManagementSmartTaskActionRunScriptOutputReference(this, "run_script");
  public get runScript() {
    return this._runScript;
  }
  public putRunScript(value: ManagementSmartTaskActionRunScript) {
    this._runScript.internalValue = value;
  }
  public resetRunScript() {
    this._runScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runScriptInput() {
    return this._runScript.internalValue;
  }

  // send_mail - computed: false, optional: true, required: false
  private _sendMail = new ManagementSmartTaskActionSendMailOutputReference(this, "send_mail");
  public get sendMail() {
    return this._sendMail;
  }
  public putSendMail(value: ManagementSmartTaskActionSendMail) {
    this._sendMail.internalValue = value;
  }
  public resetSendMail() {
    this._sendMail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMailInput() {
    return this._sendMail.internalValue;
  }

  // send_web_request - computed: false, optional: true, required: false
  private _sendWebRequest = new ManagementSmartTaskActionSendWebRequestOutputReference(this, "send_web_request");
  public get sendWebRequest() {
    return this._sendWebRequest;
  }
  public putSendWebRequest(value: ManagementSmartTaskActionSendWebRequest) {
    this._sendWebRequest.internalValue = value;
  }
  public resetSendWebRequest() {
    this._sendWebRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendWebRequestInput() {
    return this._sendWebRequest.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task checkpoint_management_smart_task}
*/
export class ManagementSmartTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_smart_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSmartTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSmartTask to import
  * @param importFromId The id of the existing ManagementSmartTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSmartTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_smart_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_smart_task checkpoint_management_smart_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSmartTaskConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementSmartTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_smart_task',
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
    this._color = config.color;
    this._comments = config.comments;
    this._customData = config.customData;
    this._description = config.description;
    this._enabled = config.enabled;
    this._failOpen = config.failOpen;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._tags = config.tags;
    this._trigger = config.trigger;
    this._action.internalValue = config.action;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
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

  // trigger - computed: false, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // action - computed: false, optional: true, required: false
  private _action = new ManagementSmartTaskActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ManagementSmartTaskAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      custom_data: cdktf.stringToTerraform(this._customData),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fail_open: cdktf.booleanToTerraform(this._failOpen),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      trigger: cdktf.stringToTerraform(this._trigger),
      action: managementSmartTaskActionToTerraform(this._action.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      custom_data: {
        value: cdktf.stringToHclTerraform(this._customData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fail_open: {
        value: cdktf.booleanToHclTerraform(this._failOpen),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: managementSmartTaskActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSmartTaskActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
