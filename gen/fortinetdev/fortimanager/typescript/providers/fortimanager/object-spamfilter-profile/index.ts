// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSpamfilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#adom ObjectSpamfilterProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#comment ObjectSpamfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#external ObjectSpamfilterProfile#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#flow_based ObjectSpamfilterProfile#flow_based}
  */
  readonly flowBased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#id ObjectSpamfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#name ObjectSpamfilterProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#options ObjectSpamfilterProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#replacemsg_group ObjectSpamfilterProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#scopetype ObjectSpamfilterProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_bwl_table ObjectSpamfilterProfile#spam_bwl_table}
  */
  readonly spamBwlTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_bword_table ObjectSpamfilterProfile#spam_bword_table}
  */
  readonly spamBwordTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_bword_threshold ObjectSpamfilterProfile#spam_bword_threshold}
  */
  readonly spamBwordThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_filtering ObjectSpamfilterProfile#spam_filtering}
  */
  readonly spamFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_iptrust_table ObjectSpamfilterProfile#spam_iptrust_table}
  */
  readonly spamIptrustTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_log ObjectSpamfilterProfile#spam_log}
  */
  readonly spamLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_log_fortiguard_response ObjectSpamfilterProfile#spam_log_fortiguard_response}
  */
  readonly spamLogFortiguardResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_mheader_table ObjectSpamfilterProfile#spam_mheader_table}
  */
  readonly spamMheaderTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#spam_rbl_table ObjectSpamfilterProfile#spam_rbl_table}
  */
  readonly spamRblTable?: string;
  /**
  * gmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#gmail ObjectSpamfilterProfile#gmail}
  */
  readonly gmail?: ObjectSpamfilterProfileGmail;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#imap ObjectSpamfilterProfile#imap}
  */
  readonly imap?: ObjectSpamfilterProfileImap;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#mapi ObjectSpamfilterProfile#mapi}
  */
  readonly mapi?: ObjectSpamfilterProfileMapi;
  /**
  * msn_hotmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#msn_hotmail ObjectSpamfilterProfile#msn_hotmail}
  */
  readonly msnHotmail?: ObjectSpamfilterProfileMsnHotmail;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#pop3 ObjectSpamfilterProfile#pop3}
  */
  readonly pop3?: ObjectSpamfilterProfilePop3;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#smtp ObjectSpamfilterProfile#smtp}
  */
  readonly smtp?: ObjectSpamfilterProfileSmtp;
}
export interface ObjectSpamfilterProfileGmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#log ObjectSpamfilterProfile#log}
  */
  readonly log?: string;
}

export function objectSpamfilterProfileGmailToTerraform(struct?: ObjectSpamfilterProfileGmailOutputReference | ObjectSpamfilterProfileGmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function objectSpamfilterProfileGmailToHclTerraform(struct?: ObjectSpamfilterProfileGmailOutputReference | ObjectSpamfilterProfileGmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSpamfilterProfileGmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSpamfilterProfileGmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSpamfilterProfileGmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
    }
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }
}
export interface ObjectSpamfilterProfileImap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#action ObjectSpamfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#log ObjectSpamfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#tag_msg ObjectSpamfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#tag_type ObjectSpamfilterProfile#tag_type}
  */
  readonly tagType?: string[];
}

export function objectSpamfilterProfileImapToTerraform(struct?: ObjectSpamfilterProfileImapOutputReference | ObjectSpamfilterProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagType),
  }
}


export function objectSpamfilterProfileImapToHclTerraform(struct?: ObjectSpamfilterProfileImapOutputReference | ObjectSpamfilterProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_msg: {
      value: cdktf.stringToHclTerraform(struct!.tagMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSpamfilterProfileImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSpamfilterProfileImap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._tagMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMsg = this._tagMsg;
    }
    if (this._tagType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagType = this._tagType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSpamfilterProfileImap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._tagMsg = undefined;
      this._tagType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._tagMsg = value.tagMsg;
      this._tagType = value.tagType;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // tag_msg - computed: false, optional: true, required: false
  private _tagMsg?: string; 
  public get tagMsg() {
    return this.getStringAttribute('tag_msg');
  }
  public set tagMsg(value: string) {
    this._tagMsg = value;
  }
  public resetTagMsg() {
    this._tagMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMsgInput() {
    return this._tagMsg;
  }

  // tag_type - computed: true, optional: true, required: false
  private _tagType?: string[]; 
  public get tagType() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_type'));
  }
  public set tagType(value: string[]) {
    this._tagType = value;
  }
  public resetTagType() {
    this._tagType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }
}
export interface ObjectSpamfilterProfileMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#action ObjectSpamfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#log ObjectSpamfilterProfile#log}
  */
  readonly log?: string;
}

export function objectSpamfilterProfileMapiToTerraform(struct?: ObjectSpamfilterProfileMapiOutputReference | ObjectSpamfilterProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function objectSpamfilterProfileMapiToHclTerraform(struct?: ObjectSpamfilterProfileMapiOutputReference | ObjectSpamfilterProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSpamfilterProfileMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSpamfilterProfileMapi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSpamfilterProfileMapi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }
}
export interface ObjectSpamfilterProfileMsnHotmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#log ObjectSpamfilterProfile#log}
  */
  readonly log?: string;
}

export function objectSpamfilterProfileMsnHotmailToTerraform(struct?: ObjectSpamfilterProfileMsnHotmailOutputReference | ObjectSpamfilterProfileMsnHotmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function objectSpamfilterProfileMsnHotmailToHclTerraform(struct?: ObjectSpamfilterProfileMsnHotmailOutputReference | ObjectSpamfilterProfileMsnHotmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSpamfilterProfileMsnHotmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSpamfilterProfileMsnHotmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSpamfilterProfileMsnHotmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
    }
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }
}
export interface ObjectSpamfilterProfilePop3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#action ObjectSpamfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#log ObjectSpamfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#tag_msg ObjectSpamfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#tag_type ObjectSpamfilterProfile#tag_type}
  */
  readonly tagType?: string[];
}

export function objectSpamfilterProfilePop3ToTerraform(struct?: ObjectSpamfilterProfilePop3OutputReference | ObjectSpamfilterProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagType),
  }
}


export function objectSpamfilterProfilePop3ToHclTerraform(struct?: ObjectSpamfilterProfilePop3OutputReference | ObjectSpamfilterProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_msg: {
      value: cdktf.stringToHclTerraform(struct!.tagMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSpamfilterProfilePop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSpamfilterProfilePop3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._tagMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMsg = this._tagMsg;
    }
    if (this._tagType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagType = this._tagType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSpamfilterProfilePop3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._tagMsg = undefined;
      this._tagType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._tagMsg = value.tagMsg;
      this._tagType = value.tagType;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // tag_msg - computed: false, optional: true, required: false
  private _tagMsg?: string; 
  public get tagMsg() {
    return this.getStringAttribute('tag_msg');
  }
  public set tagMsg(value: string) {
    this._tagMsg = value;
  }
  public resetTagMsg() {
    this._tagMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMsgInput() {
    return this._tagMsg;
  }

  // tag_type - computed: true, optional: true, required: false
  private _tagType?: string[]; 
  public get tagType() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_type'));
  }
  public set tagType(value: string[]) {
    this._tagType = value;
  }
  public resetTagType() {
    this._tagType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }
}
export interface ObjectSpamfilterProfileSmtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#action ObjectSpamfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#hdrip ObjectSpamfilterProfile#hdrip}
  */
  readonly hdrip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#local_override ObjectSpamfilterProfile#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#log ObjectSpamfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#tag_msg ObjectSpamfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#tag_type ObjectSpamfilterProfile#tag_type}
  */
  readonly tagType?: string[];
}

export function objectSpamfilterProfileSmtpToTerraform(struct?: ObjectSpamfilterProfileSmtpOutputReference | ObjectSpamfilterProfileSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    hdrip: cdktf.stringToTerraform(struct!.hdrip),
    local_override: cdktf.stringToTerraform(struct!.localOverride),
    log: cdktf.stringToTerraform(struct!.log),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagType),
  }
}


export function objectSpamfilterProfileSmtpToHclTerraform(struct?: ObjectSpamfilterProfileSmtpOutputReference | ObjectSpamfilterProfileSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdrip: {
      value: cdktf.stringToHclTerraform(struct!.hdrip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_override: {
      value: cdktf.stringToHclTerraform(struct!.localOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_msg: {
      value: cdktf.stringToHclTerraform(struct!.tagMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSpamfilterProfileSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSpamfilterProfileSmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._hdrip !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrip = this._hdrip;
    }
    if (this._localOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOverride = this._localOverride;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._tagMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMsg = this._tagMsg;
    }
    if (this._tagType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagType = this._tagType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSpamfilterProfileSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._hdrip = undefined;
      this._localOverride = undefined;
      this._log = undefined;
      this._tagMsg = undefined;
      this._tagType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._hdrip = value.hdrip;
      this._localOverride = value.localOverride;
      this._log = value.log;
      this._tagMsg = value.tagMsg;
      this._tagType = value.tagType;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // hdrip - computed: false, optional: true, required: false
  private _hdrip?: string; 
  public get hdrip() {
    return this.getStringAttribute('hdrip');
  }
  public set hdrip(value: string) {
    this._hdrip = value;
  }
  public resetHdrip() {
    this._hdrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdripInput() {
    return this._hdrip;
  }

  // local_override - computed: false, optional: true, required: false
  private _localOverride?: string; 
  public get localOverride() {
    return this.getStringAttribute('local_override');
  }
  public set localOverride(value: string) {
    this._localOverride = value;
  }
  public resetLocalOverride() {
    this._localOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOverrideInput() {
    return this._localOverride;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // tag_msg - computed: false, optional: true, required: false
  private _tagMsg?: string; 
  public get tagMsg() {
    return this.getStringAttribute('tag_msg');
  }
  public set tagMsg(value: string) {
    this._tagMsg = value;
  }
  public resetTagMsg() {
    this._tagMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMsgInput() {
    return this._tagMsg;
  }

  // tag_type - computed: true, optional: true, required: false
  private _tagType?: string[]; 
  public get tagType() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_type'));
  }
  public set tagType(value: string[]) {
    this._tagType = value;
  }
  public resetTagType() {
    this._tagType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile fortimanager_object_spamfilter_profile}
*/
export class ObjectSpamfilterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_spamfilter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSpamfilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSpamfilterProfile to import
  * @param importFromId The id of the existing ObjectSpamfilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSpamfilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_spamfilter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_spamfilter_profile fortimanager_object_spamfilter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSpamfilterProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSpamfilterProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_spamfilter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._comment = config.comment;
    this._external = config.external;
    this._flowBased = config.flowBased;
    this._id = config.id;
    this._name = config.name;
    this._options = config.options;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scopetype = config.scopetype;
    this._spamBwlTable = config.spamBwlTable;
    this._spamBwordTable = config.spamBwordTable;
    this._spamBwordThreshold = config.spamBwordThreshold;
    this._spamFiltering = config.spamFiltering;
    this._spamIptrustTable = config.spamIptrustTable;
    this._spamLog = config.spamLog;
    this._spamLogFortiguardResponse = config.spamLogFortiguardResponse;
    this._spamMheaderTable = config.spamMheaderTable;
    this._spamRblTable = config.spamRblTable;
    this._gmail.internalValue = config.gmail;
    this._imap.internalValue = config.imap;
    this._mapi.internalValue = config.mapi;
    this._msnHotmail.internalValue = config.msnHotmail;
    this._pop3.internalValue = config.pop3;
    this._smtp.internalValue = config.smtp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // external - computed: false, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // flow_based - computed: false, optional: true, required: false
  private _flowBased?: string; 
  public get flowBased() {
    return this.getStringAttribute('flow_based');
  }
  public set flowBased(value: string) {
    this._flowBased = value;
  }
  public resetFlowBased() {
    this._flowBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowBasedInput() {
    return this._flowBased;
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

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // spam_bwl_table - computed: false, optional: true, required: false
  private _spamBwlTable?: string; 
  public get spamBwlTable() {
    return this.getStringAttribute('spam_bwl_table');
  }
  public set spamBwlTable(value: string) {
    this._spamBwlTable = value;
  }
  public resetSpamBwlTable() {
    this._spamBwlTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamBwlTableInput() {
    return this._spamBwlTable;
  }

  // spam_bword_table - computed: false, optional: true, required: false
  private _spamBwordTable?: string; 
  public get spamBwordTable() {
    return this.getStringAttribute('spam_bword_table');
  }
  public set spamBwordTable(value: string) {
    this._spamBwordTable = value;
  }
  public resetSpamBwordTable() {
    this._spamBwordTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamBwordTableInput() {
    return this._spamBwordTable;
  }

  // spam_bword_threshold - computed: false, optional: true, required: false
  private _spamBwordThreshold?: number; 
  public get spamBwordThreshold() {
    return this.getNumberAttribute('spam_bword_threshold');
  }
  public set spamBwordThreshold(value: number) {
    this._spamBwordThreshold = value;
  }
  public resetSpamBwordThreshold() {
    this._spamBwordThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamBwordThresholdInput() {
    return this._spamBwordThreshold;
  }

  // spam_filtering - computed: false, optional: true, required: false
  private _spamFiltering?: string; 
  public get spamFiltering() {
    return this.getStringAttribute('spam_filtering');
  }
  public set spamFiltering(value: string) {
    this._spamFiltering = value;
  }
  public resetSpamFiltering() {
    this._spamFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamFilteringInput() {
    return this._spamFiltering;
  }

  // spam_iptrust_table - computed: false, optional: true, required: false
  private _spamIptrustTable?: string; 
  public get spamIptrustTable() {
    return this.getStringAttribute('spam_iptrust_table');
  }
  public set spamIptrustTable(value: string) {
    this._spamIptrustTable = value;
  }
  public resetSpamIptrustTable() {
    this._spamIptrustTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamIptrustTableInput() {
    return this._spamIptrustTable;
  }

  // spam_log - computed: false, optional: true, required: false
  private _spamLog?: string; 
  public get spamLog() {
    return this.getStringAttribute('spam_log');
  }
  public set spamLog(value: string) {
    this._spamLog = value;
  }
  public resetSpamLog() {
    this._spamLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamLogInput() {
    return this._spamLog;
  }

  // spam_log_fortiguard_response - computed: false, optional: true, required: false
  private _spamLogFortiguardResponse?: string; 
  public get spamLogFortiguardResponse() {
    return this.getStringAttribute('spam_log_fortiguard_response');
  }
  public set spamLogFortiguardResponse(value: string) {
    this._spamLogFortiguardResponse = value;
  }
  public resetSpamLogFortiguardResponse() {
    this._spamLogFortiguardResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamLogFortiguardResponseInput() {
    return this._spamLogFortiguardResponse;
  }

  // spam_mheader_table - computed: false, optional: true, required: false
  private _spamMheaderTable?: string; 
  public get spamMheaderTable() {
    return this.getStringAttribute('spam_mheader_table');
  }
  public set spamMheaderTable(value: string) {
    this._spamMheaderTable = value;
  }
  public resetSpamMheaderTable() {
    this._spamMheaderTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamMheaderTableInput() {
    return this._spamMheaderTable;
  }

  // spam_rbl_table - computed: false, optional: true, required: false
  private _spamRblTable?: string; 
  public get spamRblTable() {
    return this.getStringAttribute('spam_rbl_table');
  }
  public set spamRblTable(value: string) {
    this._spamRblTable = value;
  }
  public resetSpamRblTable() {
    this._spamRblTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamRblTableInput() {
    return this._spamRblTable;
  }

  // gmail - computed: false, optional: true, required: false
  private _gmail = new ObjectSpamfilterProfileGmailOutputReference(this, "gmail");
  public get gmail() {
    return this._gmail;
  }
  public putGmail(value: ObjectSpamfilterProfileGmail) {
    this._gmail.internalValue = value;
  }
  public resetGmail() {
    this._gmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmailInput() {
    return this._gmail.internalValue;
  }

  // imap - computed: false, optional: true, required: false
  private _imap = new ObjectSpamfilterProfileImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: ObjectSpamfilterProfileImap) {
    this._imap.internalValue = value;
  }
  public resetImap() {
    this._imap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInput() {
    return this._imap.internalValue;
  }

  // mapi - computed: false, optional: true, required: false
  private _mapi = new ObjectSpamfilterProfileMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: ObjectSpamfilterProfileMapi) {
    this._mapi.internalValue = value;
  }
  public resetMapi() {
    this._mapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapiInput() {
    return this._mapi.internalValue;
  }

  // msn_hotmail - computed: false, optional: true, required: false
  private _msnHotmail = new ObjectSpamfilterProfileMsnHotmailOutputReference(this, "msn_hotmail");
  public get msnHotmail() {
    return this._msnHotmail;
  }
  public putMsnHotmail(value: ObjectSpamfilterProfileMsnHotmail) {
    this._msnHotmail.internalValue = value;
  }
  public resetMsnHotmail() {
    this._msnHotmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msnHotmailInput() {
    return this._msnHotmail.internalValue;
  }

  // pop3 - computed: false, optional: true, required: false
  private _pop3 = new ObjectSpamfilterProfilePop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: ObjectSpamfilterProfilePop3) {
    this._pop3.internalValue = value;
  }
  public resetPop3() {
    this._pop3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3Input() {
    return this._pop3.internalValue;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp = new ObjectSpamfilterProfileSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: ObjectSpamfilterProfileSmtp) {
    this._smtp.internalValue = value;
  }
  public resetSmtp() {
    this._smtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      external: cdktf.stringToTerraform(this._external),
      flow_based: cdktf.stringToTerraform(this._flowBased),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      spam_bwl_table: cdktf.stringToTerraform(this._spamBwlTable),
      spam_bword_table: cdktf.stringToTerraform(this._spamBwordTable),
      spam_bword_threshold: cdktf.numberToTerraform(this._spamBwordThreshold),
      spam_filtering: cdktf.stringToTerraform(this._spamFiltering),
      spam_iptrust_table: cdktf.stringToTerraform(this._spamIptrustTable),
      spam_log: cdktf.stringToTerraform(this._spamLog),
      spam_log_fortiguard_response: cdktf.stringToTerraform(this._spamLogFortiguardResponse),
      spam_mheader_table: cdktf.stringToTerraform(this._spamMheaderTable),
      spam_rbl_table: cdktf.stringToTerraform(this._spamRblTable),
      gmail: objectSpamfilterProfileGmailToTerraform(this._gmail.internalValue),
      imap: objectSpamfilterProfileImapToTerraform(this._imap.internalValue),
      mapi: objectSpamfilterProfileMapiToTerraform(this._mapi.internalValue),
      msn_hotmail: objectSpamfilterProfileMsnHotmailToTerraform(this._msnHotmail.internalValue),
      pop3: objectSpamfilterProfilePop3ToTerraform(this._pop3.internalValue),
      smtp: objectSpamfilterProfileSmtpToTerraform(this._smtp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.stringToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_based: {
        value: cdktf.stringToHclTerraform(this._flowBased),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_bwl_table: {
        value: cdktf.stringToHclTerraform(this._spamBwlTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_bword_table: {
        value: cdktf.stringToHclTerraform(this._spamBwordTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_bword_threshold: {
        value: cdktf.numberToHclTerraform(this._spamBwordThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spam_filtering: {
        value: cdktf.stringToHclTerraform(this._spamFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_iptrust_table: {
        value: cdktf.stringToHclTerraform(this._spamIptrustTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_log: {
        value: cdktf.stringToHclTerraform(this._spamLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_log_fortiguard_response: {
        value: cdktf.stringToHclTerraform(this._spamLogFortiguardResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_mheader_table: {
        value: cdktf.stringToHclTerraform(this._spamMheaderTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_rbl_table: {
        value: cdktf.stringToHclTerraform(this._spamRblTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gmail: {
        value: objectSpamfilterProfileGmailToHclTerraform(this._gmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSpamfilterProfileGmailList",
      },
      imap: {
        value: objectSpamfilterProfileImapToHclTerraform(this._imap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSpamfilterProfileImapList",
      },
      mapi: {
        value: objectSpamfilterProfileMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSpamfilterProfileMapiList",
      },
      msn_hotmail: {
        value: objectSpamfilterProfileMsnHotmailToHclTerraform(this._msnHotmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSpamfilterProfileMsnHotmailList",
      },
      pop3: {
        value: objectSpamfilterProfilePop3ToHclTerraform(this._pop3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSpamfilterProfilePop3List",
      },
      smtp: {
        value: objectSpamfilterProfileSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSpamfilterProfileSmtpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
