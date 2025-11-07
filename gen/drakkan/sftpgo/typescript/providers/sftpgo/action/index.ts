// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#description Action#description}
  */
  readonly description?: string;
  /**
  * Unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#name Action#name}
  */
  readonly name: string;
  /**
  * Configuration options specific for the action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#options Action#options}
  */
  readonly options?: ActionOptions;
  /**
  * Action type. 1 = HTTP, 2 = Command, 3 = Email, 4 = Backup, 5 = User quota reset, 6 = Folder quota reset, 7 = Transfer quota reset, 8 = Data retention check, 9 = Filesystem, 11 = Password expiration check, 12 = User expiration check, 13 = Identity Provider account check, 14 = User inactivity check, 15 = Rotate log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#type Action#type}
  */
  readonly type: number;
}
export interface ActionOptionsCmdConfigEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#key Action#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#value Action#value}
  */
  readonly value: string;
}

export function actionOptionsCmdConfigEnvVarsToTerraform(struct?: ActionOptionsCmdConfigEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function actionOptionsCmdConfigEnvVarsToHclTerraform(struct?: ActionOptionsCmdConfigEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsCmdConfigEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsCmdConfigEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsCmdConfigEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActionOptionsCmdConfigEnvVarsList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsCmdConfigEnvVars[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsCmdConfigEnvVarsOutputReference {
    return new ActionOptionsCmdConfigEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsCmdConfig {
  /**
  * Command line arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#args Action#args}
  */
  readonly args?: string[];
  /**
  * Absolute path to the command to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#cmd Action#cmd}
  */
  readonly cmd: string;
  /**
  * Environment variables to set for the external command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#env_vars Action#env_vars}
  */
  readonly envVars?: ActionOptionsCmdConfigEnvVars[] | cdktf.IResolvable;
  /**
  * Time limit for the command in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#timeout Action#timeout}
  */
  readonly timeout: number;
}

export function actionOptionsCmdConfigToTerraform(struct?: ActionOptionsCmdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    cmd: cdktf.stringToTerraform(struct!.cmd),
    env_vars: cdktf.listMapper(actionOptionsCmdConfigEnvVarsToTerraform, false)(struct!.envVars),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function actionOptionsCmdConfigToHclTerraform(struct?: ActionOptionsCmdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_vars: {
      value: cdktf.listMapperHcl(actionOptionsCmdConfigEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsCmdConfigEnvVarsList",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsCmdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsCmdConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsCmdConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._cmd = undefined;
      this._envVars.internalValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._cmd = value.cmd;
      this._envVars.internalValue = value.envVars;
      this._timeout = value.timeout;
    }
  }

  // args - computed: true, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // cmd - computed: true, optional: false, required: true
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // env_vars - computed: true, optional: true, required: false
  private _envVars = new ActionOptionsCmdConfigEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: ActionOptionsCmdConfigEnvVars[] | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // timeout - computed: true, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ActionOptionsEmailConfig {
  /**
  * Paths to attach. The total size is limited to 10 MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#attachments Action#attachments}
  */
  readonly attachments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#bcc Action#bcc}
  */
  readonly bcc?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#body Action#body}
  */
  readonly body: string;
  /**
  * Optional content type. 0 means text/plain, 1 means text/html. If omitted, text/plain is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#content_type Action#content_type}
  */
  readonly contentType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#recipients Action#recipients}
  */
  readonly recipients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#subject Action#subject}
  */
  readonly subject: string;
}

export function actionOptionsEmailConfigToTerraform(struct?: ActionOptionsEmailConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attachments),
    bcc: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bcc),
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.numberToTerraform(struct!.contentType),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function actionOptionsEmailConfigToHclTerraform(struct?: ActionOptionsEmailConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attachments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bcc: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bcc),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.numberToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ActionOptionsEmailConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsEmailConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachments = this._attachments;
    }
    if (this._bcc !== undefined) {
      hasAnyValues = true;
      internalValueResult.bcc = this._bcc;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsEmailConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachments = undefined;
      this._bcc = undefined;
      this._body = undefined;
      this._contentType = undefined;
      this._recipients = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachments = value.attachments;
      this._bcc = value.bcc;
      this._body = value.body;
      this._contentType = value.contentType;
      this._recipients = value.recipients;
      this._subject = value.subject;
    }
  }

  // attachments - computed: true, optional: true, required: false
  private _attachments?: string[]; 
  public get attachments() {
    return this.getListAttribute('attachments');
  }
  public set attachments(value: string[]) {
    this._attachments = value;
  }
  public resetAttachments() {
    this._attachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments;
  }

  // bcc - computed: true, optional: true, required: false
  private _bcc?: string[]; 
  public get bcc() {
    return this.getListAttribute('bcc');
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

  // body - computed: true, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: number; 
  public get contentType() {
    return this.getNumberAttribute('content_type');
  }
  public set contentType(value: number) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // recipients - computed: true, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // subject - computed: true, optional: false, required: true
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
}
export interface ActionOptionsFsConfigCompress {
  /**
  * Full path to the zip file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#name Action#name}
  */
  readonly name: string;
  /**
  * Paths to include in the compressed archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#paths Action#paths}
  */
  readonly paths: string[];
}

export function actionOptionsFsConfigCompressToTerraform(struct?: ActionOptionsFsConfigCompress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function actionOptionsFsConfigCompressToHclTerraform(struct?: ActionOptionsFsConfigCompress | cdktf.IResolvable): any {
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
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsFsConfigCompressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsFsConfigCompress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsFsConfigCompress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._paths = value.paths;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // paths - computed: true, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}
export interface ActionOptionsFsConfigCopy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#key Action#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#value Action#value}
  */
  readonly value: string;
}

export function actionOptionsFsConfigCopyToTerraform(struct?: ActionOptionsFsConfigCopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function actionOptionsFsConfigCopyToHclTerraform(struct?: ActionOptionsFsConfigCopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsFsConfigCopyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsFsConfigCopy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsFsConfigCopy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActionOptionsFsConfigCopyList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsFsConfigCopy[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsFsConfigCopyOutputReference {
    return new ActionOptionsFsConfigCopyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsFsConfigMetadataCheckMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#key Action#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#value Action#value}
  */
  readonly value?: string;
}

export function actionOptionsFsConfigMetadataCheckMetadataToTerraform(struct?: ActionOptionsFsConfigMetadataCheckMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function actionOptionsFsConfigMetadataCheckMetadataToHclTerraform(struct?: ActionOptionsFsConfigMetadataCheckMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsFsConfigMetadataCheckMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsFsConfigMetadataCheckMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsFsConfigMetadataCheckMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ActionOptionsFsConfigMetadataCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#metadata Action#metadata}
  */
  readonly metadata: ActionOptionsFsConfigMetadataCheckMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#path Action#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#timeout Action#timeout}
  */
  readonly timeout?: number;
}

export function actionOptionsFsConfigMetadataCheckToTerraform(struct?: ActionOptionsFsConfigMetadataCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: actionOptionsFsConfigMetadataCheckMetadataToTerraform(struct!.metadata),
    path: cdktf.stringToTerraform(struct!.path),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function actionOptionsFsConfigMetadataCheckToHclTerraform(struct?: ActionOptionsFsConfigMetadataCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: actionOptionsFsConfigMetadataCheckMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsFsConfigMetadataCheckMetadata",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsFsConfigMetadataCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsFsConfigMetadataCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsFsConfigMetadataCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._path = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._path = value.path;
      this._timeout = value.timeout;
    }
  }

  // metadata - computed: true, optional: false, required: true
  private _metadata = new ActionOptionsFsConfigMetadataCheckMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ActionOptionsFsConfigMetadataCheckMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: true, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ActionOptionsFsConfigPgpPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#key Action#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#value Action#value}
  */
  readonly value: string;
}

export function actionOptionsFsConfigPgpPathsToTerraform(struct?: ActionOptionsFsConfigPgpPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function actionOptionsFsConfigPgpPathsToHclTerraform(struct?: ActionOptionsFsConfigPgpPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsFsConfigPgpPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsFsConfigPgpPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsFsConfigPgpPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActionOptionsFsConfigPgpPathsList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsFsConfigPgpPaths[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsFsConfigPgpPathsOutputReference {
    return new ActionOptionsFsConfigPgpPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsFsConfigPgp {
  /**
  * 1 = Encrypt, 2 = Decrypt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#mode Action#mode}
  */
  readonly mode: number;
  /**
  * SFTPGo secret formatted as string: "$<status>$<key>$<additional data length>$<additional data><payload>".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#passphrase Action#passphrase}
  */
  readonly passphrase?: string;
  /**
  * SFTPGo secret formatted as string: "$<status>$<key>$<additional data length>$<additional data><payload>".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#password Action#password}
  */
  readonly password?: string;
  /**
  * Paths to encrypt or decrypt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#paths Action#paths}
  */
  readonly paths: ActionOptionsFsConfigPgpPaths[] | cdktf.IResolvable;
  /**
  * SFTPGo secret formatted as string: "$<status>$<key>$<additional data length>$<additional data><payload>".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#private_key Action#private_key}
  */
  readonly privateKey?: string;
  /**
  * Algorithms to use. 0 = Default (widely implemented algorithms), 1 = RFC 4880, 2 = RFC 9580. Don't set to use the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#profile Action#profile}
  */
  readonly profile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#public_key Action#public_key}
  */
  readonly publicKey?: string;
}

export function actionOptionsFsConfigPgpToTerraform(struct?: ActionOptionsFsConfigPgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    password: cdktf.stringToTerraform(struct!.password),
    paths: cdktf.listMapper(actionOptionsFsConfigPgpPathsToTerraform, false)(struct!.paths),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    profile: cdktf.numberToTerraform(struct!.profile),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function actionOptionsFsConfigPgpToHclTerraform(struct?: ActionOptionsFsConfigPgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(actionOptionsFsConfigPgpPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsFsConfigPgpPathsList",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.numberToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsFsConfigPgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsFsConfigPgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsFsConfigPgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._passphrase = undefined;
      this._password = undefined;
      this._paths.internalValue = undefined;
      this._privateKey = undefined;
      this._profile = undefined;
      this._publicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._passphrase = value.passphrase;
      this._password = value.password;
      this._paths.internalValue = value.paths;
      this._privateKey = value.privateKey;
      this._profile = value.profile;
      this._publicKey = value.publicKey;
    }
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // paths - computed: true, optional: false, required: true
  private _paths = new ActionOptionsFsConfigPgpPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: ActionOptionsFsConfigPgpPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: number; 
  public get profile() {
    return this.getNumberAttribute('profile');
  }
  public set profile(value: number) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}
export interface ActionOptionsFsConfigRenames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#key Action#key}
  */
  readonly key: string;
  /**
  * Update modification time. This setting is not recursive and only applies to storage providers that support changing modification times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#update_modtime Action#update_modtime}
  */
  readonly updateModtime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#value Action#value}
  */
  readonly value: string;
}

export function actionOptionsFsConfigRenamesToTerraform(struct?: ActionOptionsFsConfigRenames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    update_modtime: cdktf.booleanToTerraform(struct!.updateModtime),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function actionOptionsFsConfigRenamesToHclTerraform(struct?: ActionOptionsFsConfigRenames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_modtime: {
      value: cdktf.booleanToHclTerraform(struct!.updateModtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsFsConfigRenamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsFsConfigRenames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._updateModtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateModtime = this._updateModtime;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsFsConfigRenames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._updateModtime = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._updateModtime = value.updateModtime;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // update_modtime - computed: true, optional: true, required: false
  private _updateModtime?: boolean | cdktf.IResolvable; 
  public get updateModtime() {
    return this.getBooleanAttribute('update_modtime');
  }
  public set updateModtime(value: boolean | cdktf.IResolvable) {
    this._updateModtime = value;
  }
  public resetUpdateModtime() {
    this._updateModtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateModtimeInput() {
    return this._updateModtime;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActionOptionsFsConfigRenamesList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsFsConfigRenames[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsFsConfigRenamesOutputReference {
    return new ActionOptionsFsConfigRenamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsFsConfig {
  /**
  * Configuration for paths to compress as zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#compress Action#compress}
  */
  readonly compress?: ActionOptionsFsConfigCompress;
  /**
  * Paths to copy. The key is the source path, the value is the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#copy Action#copy}
  */
  readonly copy?: ActionOptionsFsConfigCopy[] | cdktf.IResolvable;
  /**
  * Paths to delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#deletes Action#deletes}
  */
  readonly deletes?: string[];
  /**
  * Paths to check for existence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#exist Action#exist}
  */
  readonly exist?: string[];
  /**
  * Actions triggered by filesystem events, such as uploads or downloads, use the filesystem associated with the user. By specifying a folder, you can control which filesystem is used. This is especially useful for events that aren't tied to a user, such as scheduled tasks and advanced workflows. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#folder Action#folder}
  */
  readonly folder?: string;
  /**
  * This action verifies whether the metadata key matches the configured value or is absent for the specified path. Optionally, it can retry periodically until the specified timeout (in seconds) is reached. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#metadata_check Action#metadata_check}
  */
  readonly metadataCheck?: ActionOptionsFsConfigMetadataCheck;
  /**
  * Directories paths to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#mkdirs Action#mkdirs}
  */
  readonly mkdirs?: string[];
  /**
  * Configuration for PGP actions. Either a password or a key pair is required. For encryption, the public key is required, and the private, if provided, will be used for signing. For decryption, the private key is required, and the public key, if provided, will be used for signature verification. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#pgp Action#pgp}
  */
  readonly pgp?: ActionOptionsFsConfigPgp;
  /**
  * Paths to rename. The key is the source path, the value is the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#renames Action#renames}
  */
  readonly renames?: ActionOptionsFsConfigRenames[] | cdktf.IResolvable;
  /**
  * By specifying a target folder, you can use a different filesystem for target paths than the one associated with the user who triggered the action. This is useful for moving files to another storage backend, such as a different S3 bucket or an external SFTP server, accessing restricted areas of the same storage backend, supporting scheduled actions, or enabling more advanced workflows. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#target_folder Action#target_folder}
  */
  readonly targetFolder?: string;
  /**
  * 1 = Rename, 2 = Delete, 3 = Mkdir, 4 = Exist, 5 = Compress, 6 = Copy, 7 = PGP (Available in the Enterprise edition), 8 Metadata Check (Available in the Enterprise edition).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#type Action#type}
  */
  readonly type: number;
}

export function actionOptionsFsConfigToTerraform(struct?: ActionOptionsFsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compress: actionOptionsFsConfigCompressToTerraform(struct!.compress),
    copy: cdktf.listMapper(actionOptionsFsConfigCopyToTerraform, false)(struct!.copy),
    deletes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deletes),
    exist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exist),
    folder: cdktf.stringToTerraform(struct!.folder),
    metadata_check: actionOptionsFsConfigMetadataCheckToTerraform(struct!.metadataCheck),
    mkdirs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mkdirs),
    pgp: actionOptionsFsConfigPgpToTerraform(struct!.pgp),
    renames: cdktf.listMapper(actionOptionsFsConfigRenamesToTerraform, false)(struct!.renames),
    target_folder: cdktf.stringToTerraform(struct!.targetFolder),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function actionOptionsFsConfigToHclTerraform(struct?: ActionOptionsFsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compress: {
      value: actionOptionsFsConfigCompressToHclTerraform(struct!.compress),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsFsConfigCompress",
    },
    copy: {
      value: cdktf.listMapperHcl(actionOptionsFsConfigCopyToHclTerraform, false)(struct!.copy),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsFsConfigCopyList",
    },
    deletes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deletes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_check: {
      value: actionOptionsFsConfigMetadataCheckToHclTerraform(struct!.metadataCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsFsConfigMetadataCheck",
    },
    mkdirs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mkdirs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pgp: {
      value: actionOptionsFsConfigPgpToHclTerraform(struct!.pgp),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsFsConfigPgp",
    },
    renames: {
      value: cdktf.listMapperHcl(actionOptionsFsConfigRenamesToHclTerraform, false)(struct!.renames),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsFsConfigRenamesList",
    },
    target_folder: {
      value: cdktf.stringToHclTerraform(struct!.targetFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsFsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsFsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress?.internalValue;
    }
    if (this._copy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copy = this._copy?.internalValue;
    }
    if (this._deletes !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletes = this._deletes;
    }
    if (this._exist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exist = this._exist;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._metadataCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCheck = this._metadataCheck?.internalValue;
    }
    if (this._mkdirs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mkdirs = this._mkdirs;
    }
    if (this._pgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgp = this._pgp?.internalValue;
    }
    if (this._renames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renames = this._renames?.internalValue;
    }
    if (this._targetFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFolder = this._targetFolder;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsFsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compress.internalValue = undefined;
      this._copy.internalValue = undefined;
      this._deletes = undefined;
      this._exist = undefined;
      this._folder = undefined;
      this._metadataCheck.internalValue = undefined;
      this._mkdirs = undefined;
      this._pgp.internalValue = undefined;
      this._renames.internalValue = undefined;
      this._targetFolder = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compress.internalValue = value.compress;
      this._copy.internalValue = value.copy;
      this._deletes = value.deletes;
      this._exist = value.exist;
      this._folder = value.folder;
      this._metadataCheck.internalValue = value.metadataCheck;
      this._mkdirs = value.mkdirs;
      this._pgp.internalValue = value.pgp;
      this._renames.internalValue = value.renames;
      this._targetFolder = value.targetFolder;
      this._type = value.type;
    }
  }

  // compress - computed: true, optional: true, required: false
  private _compress = new ActionOptionsFsConfigCompressOutputReference(this, "compress");
  public get compress() {
    return this._compress;
  }
  public putCompress(value: ActionOptionsFsConfigCompress) {
    this._compress.internalValue = value;
  }
  public resetCompress() {
    this._compress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress.internalValue;
  }

  // copy - computed: true, optional: true, required: false
  private _copy = new ActionOptionsFsConfigCopyList(this, "copy", false);
  public get copy() {
    return this._copy;
  }
  public putCopy(value: ActionOptionsFsConfigCopy[] | cdktf.IResolvable) {
    this._copy.internalValue = value;
  }
  public resetCopy() {
    this._copy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyInput() {
    return this._copy.internalValue;
  }

  // deletes - computed: true, optional: true, required: false
  private _deletes?: string[]; 
  public get deletes() {
    return this.getListAttribute('deletes');
  }
  public set deletes(value: string[]) {
    this._deletes = value;
  }
  public resetDeletes() {
    this._deletes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletesInput() {
    return this._deletes;
  }

  // exist - computed: true, optional: true, required: false
  private _exist?: string[]; 
  public get exist() {
    return this.getListAttribute('exist');
  }
  public set exist(value: string[]) {
    this._exist = value;
  }
  public resetExist() {
    this._exist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existInput() {
    return this._exist;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // metadata_check - computed: true, optional: true, required: false
  private _metadataCheck = new ActionOptionsFsConfigMetadataCheckOutputReference(this, "metadata_check");
  public get metadataCheck() {
    return this._metadataCheck;
  }
  public putMetadataCheck(value: ActionOptionsFsConfigMetadataCheck) {
    this._metadataCheck.internalValue = value;
  }
  public resetMetadataCheck() {
    this._metadataCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataCheckInput() {
    return this._metadataCheck.internalValue;
  }

  // mkdirs - computed: true, optional: true, required: false
  private _mkdirs?: string[]; 
  public get mkdirs() {
    return this.getListAttribute('mkdirs');
  }
  public set mkdirs(value: string[]) {
    this._mkdirs = value;
  }
  public resetMkdirs() {
    this._mkdirs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mkdirsInput() {
    return this._mkdirs;
  }

  // pgp - computed: true, optional: true, required: false
  private _pgp = new ActionOptionsFsConfigPgpOutputReference(this, "pgp");
  public get pgp() {
    return this._pgp;
  }
  public putPgp(value: ActionOptionsFsConfigPgp) {
    this._pgp.internalValue = value;
  }
  public resetPgp() {
    this._pgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpInput() {
    return this._pgp.internalValue;
  }

  // renames - computed: true, optional: true, required: false
  private _renames = new ActionOptionsFsConfigRenamesList(this, "renames", false);
  public get renames() {
    return this._renames;
  }
  public putRenames(value: ActionOptionsFsConfigRenames[] | cdktf.IResolvable) {
    this._renames.internalValue = value;
  }
  public resetRenames() {
    this._renames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renamesInput() {
    return this._renames.internalValue;
  }

  // target_folder - computed: true, optional: true, required: false
  private _targetFolder?: string; 
  public get targetFolder() {
    return this.getStringAttribute('target_folder');
  }
  public set targetFolder(value: string) {
    this._targetFolder = value;
  }
  public resetTargetFolder() {
    this._targetFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFolderInput() {
    return this._targetFolder;
  }

  // type - computed: true, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ActionOptionsHttpConfigHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#key Action#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#value Action#value}
  */
  readonly value: string;
}

export function actionOptionsHttpConfigHeadersToTerraform(struct?: ActionOptionsHttpConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function actionOptionsHttpConfigHeadersToHclTerraform(struct?: ActionOptionsHttpConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsHttpConfigHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsHttpConfigHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsHttpConfigHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActionOptionsHttpConfigHeadersList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsHttpConfigHeaders[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsHttpConfigHeadersOutputReference {
    return new ActionOptionsHttpConfigHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsHttpConfigPartsHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#key Action#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#value Action#value}
  */
  readonly value: string;
}

export function actionOptionsHttpConfigPartsHeadersToTerraform(struct?: ActionOptionsHttpConfigPartsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function actionOptionsHttpConfigPartsHeadersToHclTerraform(struct?: ActionOptionsHttpConfigPartsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsHttpConfigPartsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsHttpConfigPartsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsHttpConfigPartsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActionOptionsHttpConfigPartsHeadersList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsHttpConfigPartsHeaders[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsHttpConfigPartsHeadersOutputReference {
    return new ActionOptionsHttpConfigPartsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsHttpConfigParts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#body Action#body}
  */
  readonly body?: string;
  /**
  * Path to the file to be sent as an attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#filepath Action#filepath}
  */
  readonly filepath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#headers Action#headers}
  */
  readonly headers?: ActionOptionsHttpConfigPartsHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#name Action#name}
  */
  readonly name: string;
}

export function actionOptionsHttpConfigPartsToTerraform(struct?: ActionOptionsHttpConfigParts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    filepath: cdktf.stringToTerraform(struct!.filepath),
    headers: cdktf.listMapper(actionOptionsHttpConfigPartsHeadersToTerraform, false)(struct!.headers),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function actionOptionsHttpConfigPartsToHclTerraform(struct?: ActionOptionsHttpConfigParts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filepath: {
      value: cdktf.stringToHclTerraform(struct!.filepath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(actionOptionsHttpConfigPartsHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsHttpConfigPartsHeadersList",
    },
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

export class ActionOptionsHttpConfigPartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsHttpConfigParts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._filepath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filepath = this._filepath;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsHttpConfigParts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._filepath = undefined;
      this._headers.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._filepath = value.filepath;
      this._headers.internalValue = value.headers;
      this._name = value.name;
    }
  }

  // body - computed: true, optional: true, required: false
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

  // filepath - computed: true, optional: true, required: false
  private _filepath?: string; 
  public get filepath() {
    return this.getStringAttribute('filepath');
  }
  public set filepath(value: string) {
    this._filepath = value;
  }
  public resetFilepath() {
    this._filepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filepathInput() {
    return this._filepath;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new ActionOptionsHttpConfigPartsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ActionOptionsHttpConfigPartsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // name - computed: true, optional: false, required: true
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
}

export class ActionOptionsHttpConfigPartsList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsHttpConfigParts[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsHttpConfigPartsOutputReference {
    return new ActionOptionsHttpConfigPartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsHttpConfigQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#key Action#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#value Action#value}
  */
  readonly value: string;
}

export function actionOptionsHttpConfigQueryParametersToTerraform(struct?: ActionOptionsHttpConfigQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function actionOptionsHttpConfigQueryParametersToHclTerraform(struct?: ActionOptionsHttpConfigQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsHttpConfigQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsHttpConfigQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsHttpConfigQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ActionOptionsHttpConfigQueryParametersList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsHttpConfigQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsHttpConfigQueryParametersOutputReference {
    return new ActionOptionsHttpConfigQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsHttpConfig {
  /**
  * Request body for POST/PUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#body Action#body}
  */
  readonly body?: string;
  /**
  * HTTP endpoint to invoke.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#endpoint Action#endpoint}
  */
  readonly endpoint: string;
  /**
  * Headers to add to the HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#headers Action#headers}
  */
  readonly headers?: ActionOptionsHttpConfigHeaders[] | cdktf.IResolvable;
  /**
  * HTTP method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#method Action#method}
  */
  readonly method: string;
  /**
  * Multipart requests allow to combine one or more sets of data into a single body. For each part, you can set a file path or a body as text. Placeholders are supported in file path, body, header values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#parts Action#parts}
  */
  readonly parts?: ActionOptionsHttpConfigParts[] | cdktf.IResolvable;
  /**
  * SFTPGo secret formatted as string: "$<status>$<key>$<additional data length>$<additional data><payload>".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#password Action#password}
  */
  readonly password?: string;
  /**
  * Query parameters to add to the HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#query_parameters Action#query_parameters}
  */
  readonly queryParameters?: ActionOptionsHttpConfigQueryParameters[] | cdktf.IResolvable;
  /**
  * If enabled any certificate presented by the server and any host name in that certificate are accepted. In this mode, TLS is susceptible to machine-in-the-middle attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#skip_tls_verify Action#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Time limit for the request in seconds. Ignored for multipart requests with files as attachments. For non multipart requests is required Ignored for multipart requests with files as attachments otherwise required and must be between 1 and 120
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#timeout Action#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#username Action#username}
  */
  readonly username?: string;
}

export function actionOptionsHttpConfigToTerraform(struct?: ActionOptionsHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    headers: cdktf.listMapper(actionOptionsHttpConfigHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    parts: cdktf.listMapper(actionOptionsHttpConfigPartsToTerraform, false)(struct!.parts),
    password: cdktf.stringToTerraform(struct!.password),
    query_parameters: cdktf.listMapper(actionOptionsHttpConfigQueryParametersToTerraform, false)(struct!.queryParameters),
    skip_tls_verify: cdktf.booleanToTerraform(struct!.skipTlsVerify),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function actionOptionsHttpConfigToHclTerraform(struct?: ActionOptionsHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(actionOptionsHttpConfigHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsHttpConfigHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parts: {
      value: cdktf.listMapperHcl(actionOptionsHttpConfigPartsToHclTerraform, false)(struct!.parts),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsHttpConfigPartsList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(actionOptionsHttpConfigQueryParametersToHclTerraform, false)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsHttpConfigQueryParametersList",
    },
    skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsHttpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._parts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parts = this._parts?.internalValue;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    if (this._skipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTlsVerify = this._skipTlsVerify;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsHttpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._endpoint = undefined;
      this._headers.internalValue = undefined;
      this._method = undefined;
      this._parts.internalValue = undefined;
      this._password = undefined;
      this._queryParameters.internalValue = undefined;
      this._skipTlsVerify = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._endpoint = value.endpoint;
      this._headers.internalValue = value.headers;
      this._method = value.method;
      this._parts.internalValue = value.parts;
      this._password = value.password;
      this._queryParameters.internalValue = value.queryParameters;
      this._skipTlsVerify = value.skipTlsVerify;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // body - computed: true, optional: true, required: false
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

  // endpoint - computed: true, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new ActionOptionsHttpConfigHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ActionOptionsHttpConfigHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // method - computed: true, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // parts - computed: true, optional: true, required: false
  private _parts = new ActionOptionsHttpConfigPartsList(this, "parts", false);
  public get parts() {
    return this._parts;
  }
  public putParts(value: ActionOptionsHttpConfigParts[] | cdktf.IResolvable) {
    this._parts.internalValue = value;
  }
  public resetParts() {
    this._parts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partsInput() {
    return this._parts.internalValue;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // query_parameters - computed: true, optional: true, required: false
  private _queryParameters = new ActionOptionsHttpConfigQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: ActionOptionsHttpConfigQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }

  // skip_tls_verify - computed: true, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ActionOptionsIdpConfig {
  /**
  * 0 means create or update the account, 1 means create the account if it doesn't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#mode Action#mode}
  */
  readonly mode: number;
  /**
  * SFTPGo admin template in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#template_admin Action#template_admin}
  */
  readonly templateAdmin?: string;
  /**
  * SFTPGo user template in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#template_user Action#template_user}
  */
  readonly templateUser?: string;
}

export function actionOptionsIdpConfigToTerraform(struct?: ActionOptionsIdpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    template_admin: cdktf.stringToTerraform(struct!.templateAdmin),
    template_user: cdktf.stringToTerraform(struct!.templateUser),
  }
}


export function actionOptionsIdpConfigToHclTerraform(struct?: ActionOptionsIdpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_admin: {
      value: cdktf.stringToHclTerraform(struct!.templateAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_user: {
      value: cdktf.stringToHclTerraform(struct!.templateUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsIdpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsIdpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._templateAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateAdmin = this._templateAdmin;
    }
    if (this._templateUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateUser = this._templateUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsIdpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._templateAdmin = undefined;
      this._templateUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._templateAdmin = value.templateAdmin;
      this._templateUser = value.templateUser;
    }
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // template_admin - computed: true, optional: true, required: false
  private _templateAdmin?: string; 
  public get templateAdmin() {
    return this.getStringAttribute('template_admin');
  }
  public set templateAdmin(value: string) {
    this._templateAdmin = value;
  }
  public resetTemplateAdmin() {
    this._templateAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateAdminInput() {
    return this._templateAdmin;
  }

  // template_user - computed: true, optional: true, required: false
  private _templateUser?: string; 
  public get templateUser() {
    return this.getStringAttribute('template_user');
  }
  public set templateUser(value: string) {
    this._templateUser = value;
  }
  public resetTemplateUser() {
    this._templateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUserInput() {
    return this._templateUser;
  }
}
export interface ActionOptionsPwdExpirationConfig {
  /**
  * An email notification will be generated for users whose password expires in a number of days less than or equal to this threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#threshold Action#threshold}
  */
  readonly threshold: number;
}

export function actionOptionsPwdExpirationConfigToTerraform(struct?: ActionOptionsPwdExpirationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function actionOptionsPwdExpirationConfigToHclTerraform(struct?: ActionOptionsPwdExpirationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsPwdExpirationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsPwdExpirationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsPwdExpirationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: true, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface ActionOptionsRetentionConfigFolders {
  /**
  * If enabled, empty directories will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#delete_empty_dirs Action#delete_empty_dirs}
  */
  readonly deleteEmptyDirs?: boolean | cdktf.IResolvable;
  /**
  * Path for which to apply the retention rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#path Action#path}
  */
  readonly path: string;
  /**
  * Retention as hours. 0 as retention means excluding the specified path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#retention Action#retention}
  */
  readonly retention: number;
}

export function actionOptionsRetentionConfigFoldersToTerraform(struct?: ActionOptionsRetentionConfigFolders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_empty_dirs: cdktf.booleanToTerraform(struct!.deleteEmptyDirs),
    path: cdktf.stringToTerraform(struct!.path),
    retention: cdktf.numberToTerraform(struct!.retention),
  }
}


export function actionOptionsRetentionConfigFoldersToHclTerraform(struct?: ActionOptionsRetentionConfigFolders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_empty_dirs: {
      value: cdktf.booleanToHclTerraform(struct!.deleteEmptyDirs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsRetentionConfigFoldersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionOptionsRetentionConfigFolders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteEmptyDirs !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteEmptyDirs = this._deleteEmptyDirs;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsRetentionConfigFolders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteEmptyDirs = undefined;
      this._path = undefined;
      this._retention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteEmptyDirs = value.deleteEmptyDirs;
      this._path = value.path;
      this._retention = value.retention;
    }
  }

  // delete_empty_dirs - computed: true, optional: true, required: false
  private _deleteEmptyDirs?: boolean | cdktf.IResolvable; 
  public get deleteEmptyDirs() {
    return this.getBooleanAttribute('delete_empty_dirs');
  }
  public set deleteEmptyDirs(value: boolean | cdktf.IResolvable) {
    this._deleteEmptyDirs = value;
  }
  public resetDeleteEmptyDirs() {
    this._deleteEmptyDirs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEmptyDirsInput() {
    return this._deleteEmptyDirs;
  }

  // path - computed: true, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // retention - computed: true, optional: false, required: true
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }
}

export class ActionOptionsRetentionConfigFoldersList extends cdktf.ComplexList {
  public internalValue? : ActionOptionsRetentionConfigFolders[] | cdktf.IResolvable

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
  public get(index: number): ActionOptionsRetentionConfigFoldersOutputReference {
    return new ActionOptionsRetentionConfigFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionOptionsRetentionConfig {
  /**
  * Virtual folder name. If set, files will be moved there instead of being deleted. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#archive_folder Action#archive_folder}
  */
  readonly archiveFolder?: string;
  /**
  * The base path where archived files will be stored. Placeholders are supported. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#archive_path Action#archive_path}
  */
  readonly archivePath?: string;
  /**
  * Folders to apply data retention rules to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#folders Action#folders}
  */
  readonly folders?: ActionOptionsRetentionConfigFolders[] | cdktf.IResolvable;
}

export function actionOptionsRetentionConfigToTerraform(struct?: ActionOptionsRetentionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_folder: cdktf.stringToTerraform(struct!.archiveFolder),
    archive_path: cdktf.stringToTerraform(struct!.archivePath),
    folders: cdktf.listMapper(actionOptionsRetentionConfigFoldersToTerraform, false)(struct!.folders),
  }
}


export function actionOptionsRetentionConfigToHclTerraform(struct?: ActionOptionsRetentionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_folder: {
      value: cdktf.stringToHclTerraform(struct!.archiveFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_path: {
      value: cdktf.stringToHclTerraform(struct!.archivePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folders: {
      value: cdktf.listMapperHcl(actionOptionsRetentionConfigFoldersToHclTerraform, false)(struct!.folders),
      isBlock: true,
      type: "list",
      storageClassType: "ActionOptionsRetentionConfigFoldersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsRetentionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsRetentionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveFolder = this._archiveFolder;
    }
    if (this._archivePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivePath = this._archivePath;
    }
    if (this._folders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.folders = this._folders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsRetentionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveFolder = undefined;
      this._archivePath = undefined;
      this._folders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveFolder = value.archiveFolder;
      this._archivePath = value.archivePath;
      this._folders.internalValue = value.folders;
    }
  }

  // archive_folder - computed: true, optional: true, required: false
  private _archiveFolder?: string; 
  public get archiveFolder() {
    return this.getStringAttribute('archive_folder');
  }
  public set archiveFolder(value: string) {
    this._archiveFolder = value;
  }
  public resetArchiveFolder() {
    this._archiveFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveFolderInput() {
    return this._archiveFolder;
  }

  // archive_path - computed: true, optional: true, required: false
  private _archivePath?: string; 
  public get archivePath() {
    return this.getStringAttribute('archive_path');
  }
  public set archivePath(value: string) {
    this._archivePath = value;
  }
  public resetArchivePath() {
    this._archivePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivePathInput() {
    return this._archivePath;
  }

  // folders - computed: true, optional: true, required: false
  private _folders = new ActionOptionsRetentionConfigFoldersList(this, "folders", false);
  public get folders() {
    return this._folders;
  }
  public putFolders(value: ActionOptionsRetentionConfigFolders[] | cdktf.IResolvable) {
    this._folders.internalValue = value;
  }
  public resetFolders() {
    this._folders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foldersInput() {
    return this._folders.internalValue;
  }
}
export interface ActionOptionsUserInactivityConfig {
  /**
  * Inactivity in days, since the last login before deleting the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#delete_threshold Action#delete_threshold}
  */
  readonly deleteThreshold?: number;
  /**
  * Inactivity in days, since the last login before disabling the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#disable_threshold Action#disable_threshold}
  */
  readonly disableThreshold?: number;
}

export function actionOptionsUserInactivityConfigToTerraform(struct?: ActionOptionsUserInactivityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_threshold: cdktf.numberToTerraform(struct!.deleteThreshold),
    disable_threshold: cdktf.numberToTerraform(struct!.disableThreshold),
  }
}


export function actionOptionsUserInactivityConfigToHclTerraform(struct?: ActionOptionsUserInactivityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_threshold: {
      value: cdktf.numberToHclTerraform(struct!.deleteThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_threshold: {
      value: cdktf.numberToHclTerraform(struct!.disableThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsUserInactivityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptionsUserInactivityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteThreshold = this._deleteThreshold;
    }
    if (this._disableThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableThreshold = this._disableThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptionsUserInactivityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteThreshold = undefined;
      this._disableThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteThreshold = value.deleteThreshold;
      this._disableThreshold = value.disableThreshold;
    }
  }

  // delete_threshold - computed: true, optional: true, required: false
  private _deleteThreshold?: number; 
  public get deleteThreshold() {
    return this.getNumberAttribute('delete_threshold');
  }
  public set deleteThreshold(value: number) {
    this._deleteThreshold = value;
  }
  public resetDeleteThreshold() {
    this._deleteThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteThresholdInput() {
    return this._deleteThreshold;
  }

  // disable_threshold - computed: true, optional: true, required: false
  private _disableThreshold?: number; 
  public get disableThreshold() {
    return this.getNumberAttribute('disable_threshold');
  }
  public set disableThreshold(value: number) {
    this._disableThreshold = value;
  }
  public resetDisableThreshold() {
    this._disableThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableThresholdInput() {
    return this._disableThreshold;
  }
}
export interface ActionOptions {
  /**
  * External command action configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#cmd_config Action#cmd_config}
  */
  readonly cmdConfig?: ActionOptionsCmdConfig;
  /**
  * Email action configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#email_config Action#email_config}
  */
  readonly emailConfig?: ActionOptionsEmailConfig;
  /**
  * Filesystem action configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#fs_config Action#fs_config}
  */
  readonly fsConfig?: ActionOptionsFsConfig;
  /**
  * HTTP action configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#http_config Action#http_config}
  */
  readonly httpConfig?: ActionOptionsHttpConfig;
  /**
  * Identity Provider account check action configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#idp_config Action#idp_config}
  */
  readonly idpConfig?: ActionOptionsIdpConfig;
  /**
  * Password expiration action configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#pwd_expiration_config Action#pwd_expiration_config}
  */
  readonly pwdExpirationConfig?: ActionOptionsPwdExpirationConfig;
  /**
  * Data retention action configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#retention_config Action#retention_config}
  */
  readonly retentionConfig?: ActionOptionsRetentionConfig;
  /**
  * User inactivity check configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#user_inactivity_config Action#user_inactivity_config}
  */
  readonly userInactivityConfig?: ActionOptionsUserInactivityConfig;
}

export function actionOptionsToTerraform(struct?: ActionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd_config: actionOptionsCmdConfigToTerraform(struct!.cmdConfig),
    email_config: actionOptionsEmailConfigToTerraform(struct!.emailConfig),
    fs_config: actionOptionsFsConfigToTerraform(struct!.fsConfig),
    http_config: actionOptionsHttpConfigToTerraform(struct!.httpConfig),
    idp_config: actionOptionsIdpConfigToTerraform(struct!.idpConfig),
    pwd_expiration_config: actionOptionsPwdExpirationConfigToTerraform(struct!.pwdExpirationConfig),
    retention_config: actionOptionsRetentionConfigToTerraform(struct!.retentionConfig),
    user_inactivity_config: actionOptionsUserInactivityConfigToTerraform(struct!.userInactivityConfig),
  }
}


export function actionOptionsToHclTerraform(struct?: ActionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd_config: {
      value: actionOptionsCmdConfigToHclTerraform(struct!.cmdConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsCmdConfig",
    },
    email_config: {
      value: actionOptionsEmailConfigToHclTerraform(struct!.emailConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsEmailConfig",
    },
    fs_config: {
      value: actionOptionsFsConfigToHclTerraform(struct!.fsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsFsConfig",
    },
    http_config: {
      value: actionOptionsHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsHttpConfig",
    },
    idp_config: {
      value: actionOptionsIdpConfigToHclTerraform(struct!.idpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsIdpConfig",
    },
    pwd_expiration_config: {
      value: actionOptionsPwdExpirationConfigToHclTerraform(struct!.pwdExpirationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsPwdExpirationConfig",
    },
    retention_config: {
      value: actionOptionsRetentionConfigToHclTerraform(struct!.retentionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsRetentionConfig",
    },
    user_inactivity_config: {
      value: actionOptionsUserInactivityConfigToHclTerraform(struct!.userInactivityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionOptionsUserInactivityConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdConfig = this._cmdConfig?.internalValue;
    }
    if (this._emailConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailConfig = this._emailConfig?.internalValue;
    }
    if (this._fsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsConfig = this._fsConfig?.internalValue;
    }
    if (this._httpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfig = this._httpConfig?.internalValue;
    }
    if (this._idpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpConfig = this._idpConfig?.internalValue;
    }
    if (this._pwdExpirationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwdExpirationConfig = this._pwdExpirationConfig?.internalValue;
    }
    if (this._retentionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionConfig = this._retentionConfig?.internalValue;
    }
    if (this._userInactivityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInactivityConfig = this._userInactivityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmdConfig.internalValue = undefined;
      this._emailConfig.internalValue = undefined;
      this._fsConfig.internalValue = undefined;
      this._httpConfig.internalValue = undefined;
      this._idpConfig.internalValue = undefined;
      this._pwdExpirationConfig.internalValue = undefined;
      this._retentionConfig.internalValue = undefined;
      this._userInactivityConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmdConfig.internalValue = value.cmdConfig;
      this._emailConfig.internalValue = value.emailConfig;
      this._fsConfig.internalValue = value.fsConfig;
      this._httpConfig.internalValue = value.httpConfig;
      this._idpConfig.internalValue = value.idpConfig;
      this._pwdExpirationConfig.internalValue = value.pwdExpirationConfig;
      this._retentionConfig.internalValue = value.retentionConfig;
      this._userInactivityConfig.internalValue = value.userInactivityConfig;
    }
  }

  // cmd_config - computed: true, optional: true, required: false
  private _cmdConfig = new ActionOptionsCmdConfigOutputReference(this, "cmd_config");
  public get cmdConfig() {
    return this._cmdConfig;
  }
  public putCmdConfig(value: ActionOptionsCmdConfig) {
    this._cmdConfig.internalValue = value;
  }
  public resetCmdConfig() {
    this._cmdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdConfigInput() {
    return this._cmdConfig.internalValue;
  }

  // email_config - computed: true, optional: true, required: false
  private _emailConfig = new ActionOptionsEmailConfigOutputReference(this, "email_config");
  public get emailConfig() {
    return this._emailConfig;
  }
  public putEmailConfig(value: ActionOptionsEmailConfig) {
    this._emailConfig.internalValue = value;
  }
  public resetEmailConfig() {
    this._emailConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigInput() {
    return this._emailConfig.internalValue;
  }

  // fs_config - computed: true, optional: true, required: false
  private _fsConfig = new ActionOptionsFsConfigOutputReference(this, "fs_config");
  public get fsConfig() {
    return this._fsConfig;
  }
  public putFsConfig(value: ActionOptionsFsConfig) {
    this._fsConfig.internalValue = value;
  }
  public resetFsConfig() {
    this._fsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsConfigInput() {
    return this._fsConfig.internalValue;
  }

  // http_config - computed: true, optional: true, required: false
  private _httpConfig = new ActionOptionsHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: ActionOptionsHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // idp_config - computed: true, optional: true, required: false
  private _idpConfig = new ActionOptionsIdpConfigOutputReference(this, "idp_config");
  public get idpConfig() {
    return this._idpConfig;
  }
  public putIdpConfig(value: ActionOptionsIdpConfig) {
    this._idpConfig.internalValue = value;
  }
  public resetIdpConfig() {
    this._idpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigInput() {
    return this._idpConfig.internalValue;
  }

  // pwd_expiration_config - computed: true, optional: true, required: false
  private _pwdExpirationConfig = new ActionOptionsPwdExpirationConfigOutputReference(this, "pwd_expiration_config");
  public get pwdExpirationConfig() {
    return this._pwdExpirationConfig;
  }
  public putPwdExpirationConfig(value: ActionOptionsPwdExpirationConfig) {
    this._pwdExpirationConfig.internalValue = value;
  }
  public resetPwdExpirationConfig() {
    this._pwdExpirationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdExpirationConfigInput() {
    return this._pwdExpirationConfig.internalValue;
  }

  // retention_config - computed: true, optional: true, required: false
  private _retentionConfig = new ActionOptionsRetentionConfigOutputReference(this, "retention_config");
  public get retentionConfig() {
    return this._retentionConfig;
  }
  public putRetentionConfig(value: ActionOptionsRetentionConfig) {
    this._retentionConfig.internalValue = value;
  }
  public resetRetentionConfig() {
    this._retentionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionConfigInput() {
    return this._retentionConfig.internalValue;
  }

  // user_inactivity_config - computed: true, optional: true, required: false
  private _userInactivityConfig = new ActionOptionsUserInactivityConfigOutputReference(this, "user_inactivity_config");
  public get userInactivityConfig() {
    return this._userInactivityConfig;
  }
  public putUserInactivityConfig(value: ActionOptionsUserInactivityConfig) {
    this._userInactivityConfig.internalValue = value;
  }
  public resetUserInactivityConfig() {
    this._userInactivityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInactivityConfigInput() {
    return this._userInactivityConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action sftpgo_action}
*/
export class Action extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Action resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Action to import
  * @param importFromId The id of the existing Action that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Action to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/action sftpgo_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionConfig
  */
  public constructor(scope: Construct, id: string, config: ActionConfig) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_action',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._options.internalValue = config.options;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // options - computed: true, optional: true, required: false
  private _options = new ActionOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ActionOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      options: actionOptionsToTerraform(this._options.internalValue),
      type: cdktf.numberToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      options: {
        value: actionOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionOptions",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
