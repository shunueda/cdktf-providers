// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpamfilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#comment SpamfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#external SpamfilterProfile#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#flow_based SpamfilterProfile#flow_based}
  */
  readonly flowBased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#get_all_tables SpamfilterProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#id SpamfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#name SpamfilterProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#options SpamfilterProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#replacemsg_group SpamfilterProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_bwl_table SpamfilterProfile#spam_bwl_table}
  */
  readonly spamBwlTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_bword_table SpamfilterProfile#spam_bword_table}
  */
  readonly spamBwordTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_bword_threshold SpamfilterProfile#spam_bword_threshold}
  */
  readonly spamBwordThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_filtering SpamfilterProfile#spam_filtering}
  */
  readonly spamFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_iptrust_table SpamfilterProfile#spam_iptrust_table}
  */
  readonly spamIptrustTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_log SpamfilterProfile#spam_log}
  */
  readonly spamLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_log_fortiguard_response SpamfilterProfile#spam_log_fortiguard_response}
  */
  readonly spamLogFortiguardResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_mheader_table SpamfilterProfile#spam_mheader_table}
  */
  readonly spamMheaderTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#spam_rbl_table SpamfilterProfile#spam_rbl_table}
  */
  readonly spamRblTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#vdomparam SpamfilterProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * gmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#gmail SpamfilterProfile#gmail}
  */
  readonly gmail?: SpamfilterProfileGmail;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#imap SpamfilterProfile#imap}
  */
  readonly imap?: SpamfilterProfileImap;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#mapi SpamfilterProfile#mapi}
  */
  readonly mapi?: SpamfilterProfileMapi;
  /**
  * msn_hotmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#msn_hotmail SpamfilterProfile#msn_hotmail}
  */
  readonly msnHotmail?: SpamfilterProfileMsnHotmail;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#pop3 SpamfilterProfile#pop3}
  */
  readonly pop3?: SpamfilterProfilePop3;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#smtp SpamfilterProfile#smtp}
  */
  readonly smtp?: SpamfilterProfileSmtp;
  /**
  * yahoo_mail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#yahoo_mail SpamfilterProfile#yahoo_mail}
  */
  readonly yahooMail?: SpamfilterProfileYahooMail;
}
export interface SpamfilterProfileGmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#log SpamfilterProfile#log}
  */
  readonly log?: string;
}

export function spamfilterProfileGmailToTerraform(struct?: SpamfilterProfileGmailOutputReference | SpamfilterProfileGmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function spamfilterProfileGmailToHclTerraform(struct?: SpamfilterProfileGmailOutputReference | SpamfilterProfileGmail): any {
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

export class SpamfilterProfileGmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpamfilterProfileGmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpamfilterProfileGmail | undefined) {
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
export interface SpamfilterProfileImap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#action SpamfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#log SpamfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#tag_msg SpamfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#tag_type SpamfilterProfile#tag_type}
  */
  readonly tagType?: string;
}

export function spamfilterProfileImapToTerraform(struct?: SpamfilterProfileImapOutputReference | SpamfilterProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.stringToTerraform(struct!.tagType),
  }
}


export function spamfilterProfileImapToHclTerraform(struct?: SpamfilterProfileImapOutputReference | SpamfilterProfileImap): any {
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
      value: cdktf.stringToHclTerraform(struct!.tagType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpamfilterProfileImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpamfilterProfileImap | undefined {
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

  public set internalValue(value: SpamfilterProfileImap | undefined) {
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

  // tag_type - computed: false, optional: true, required: false
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
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
export interface SpamfilterProfileMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#action SpamfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#log SpamfilterProfile#log}
  */
  readonly log?: string;
}

export function spamfilterProfileMapiToTerraform(struct?: SpamfilterProfileMapiOutputReference | SpamfilterProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function spamfilterProfileMapiToHclTerraform(struct?: SpamfilterProfileMapiOutputReference | SpamfilterProfileMapi): any {
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

export class SpamfilterProfileMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpamfilterProfileMapi | undefined {
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

  public set internalValue(value: SpamfilterProfileMapi | undefined) {
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
export interface SpamfilterProfileMsnHotmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#log SpamfilterProfile#log}
  */
  readonly log?: string;
}

export function spamfilterProfileMsnHotmailToTerraform(struct?: SpamfilterProfileMsnHotmailOutputReference | SpamfilterProfileMsnHotmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function spamfilterProfileMsnHotmailToHclTerraform(struct?: SpamfilterProfileMsnHotmailOutputReference | SpamfilterProfileMsnHotmail): any {
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

export class SpamfilterProfileMsnHotmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpamfilterProfileMsnHotmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpamfilterProfileMsnHotmail | undefined) {
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
export interface SpamfilterProfilePop3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#action SpamfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#log SpamfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#tag_msg SpamfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#tag_type SpamfilterProfile#tag_type}
  */
  readonly tagType?: string;
}

export function spamfilterProfilePop3ToTerraform(struct?: SpamfilterProfilePop3OutputReference | SpamfilterProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.stringToTerraform(struct!.tagType),
  }
}


export function spamfilterProfilePop3ToHclTerraform(struct?: SpamfilterProfilePop3OutputReference | SpamfilterProfilePop3): any {
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
      value: cdktf.stringToHclTerraform(struct!.tagType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpamfilterProfilePop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpamfilterProfilePop3 | undefined {
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

  public set internalValue(value: SpamfilterProfilePop3 | undefined) {
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

  // tag_type - computed: false, optional: true, required: false
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
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
export interface SpamfilterProfileSmtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#action SpamfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#hdrip SpamfilterProfile#hdrip}
  */
  readonly hdrip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#local_override SpamfilterProfile#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#log SpamfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#tag_msg SpamfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#tag_type SpamfilterProfile#tag_type}
  */
  readonly tagType?: string;
}

export function spamfilterProfileSmtpToTerraform(struct?: SpamfilterProfileSmtpOutputReference | SpamfilterProfileSmtp): any {
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
    tag_type: cdktf.stringToTerraform(struct!.tagType),
  }
}


export function spamfilterProfileSmtpToHclTerraform(struct?: SpamfilterProfileSmtpOutputReference | SpamfilterProfileSmtp): any {
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
      value: cdktf.stringToHclTerraform(struct!.tagType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpamfilterProfileSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpamfilterProfileSmtp | undefined {
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

  public set internalValue(value: SpamfilterProfileSmtp | undefined) {
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

  // tag_type - computed: false, optional: true, required: false
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
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
export interface SpamfilterProfileYahooMail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#log SpamfilterProfile#log}
  */
  readonly log?: string;
}

export function spamfilterProfileYahooMailToTerraform(struct?: SpamfilterProfileYahooMailOutputReference | SpamfilterProfileYahooMail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function spamfilterProfileYahooMailToHclTerraform(struct?: SpamfilterProfileYahooMailOutputReference | SpamfilterProfileYahooMail): any {
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

export class SpamfilterProfileYahooMailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpamfilterProfileYahooMail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpamfilterProfileYahooMail | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile fortios_spamfilter_profile}
*/
export class SpamfilterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_spamfilter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpamfilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpamfilterProfile to import
  * @param importFromId The id of the existing SpamfilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpamfilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_spamfilter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/spamfilter_profile fortios_spamfilter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpamfilterProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SpamfilterProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_spamfilter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._external = config.external;
    this._flowBased = config.flowBased;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._options = config.options;
    this._replacemsgGroup = config.replacemsgGroup;
    this._spamBwlTable = config.spamBwlTable;
    this._spamBwordTable = config.spamBwordTable;
    this._spamBwordThreshold = config.spamBwordThreshold;
    this._spamFiltering = config.spamFiltering;
    this._spamIptrustTable = config.spamIptrustTable;
    this._spamLog = config.spamLog;
    this._spamLogFortiguardResponse = config.spamLogFortiguardResponse;
    this._spamMheaderTable = config.spamMheaderTable;
    this._spamRblTable = config.spamRblTable;
    this._vdomparam = config.vdomparam;
    this._gmail.internalValue = config.gmail;
    this._imap.internalValue = config.imap;
    this._mapi.internalValue = config.mapi;
    this._msnHotmail.internalValue = config.msnHotmail;
    this._pop3.internalValue = config.pop3;
    this._smtp.internalValue = config.smtp;
    this._yahooMail.internalValue = config.yahooMail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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

  // spam_bwl_table - computed: false, optional: true, required: false
  private _spamBwlTable?: number; 
  public get spamBwlTable() {
    return this.getNumberAttribute('spam_bwl_table');
  }
  public set spamBwlTable(value: number) {
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
  private _spamBwordTable?: number; 
  public get spamBwordTable() {
    return this.getNumberAttribute('spam_bword_table');
  }
  public set spamBwordTable(value: number) {
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
  private _spamIptrustTable?: number; 
  public get spamIptrustTable() {
    return this.getNumberAttribute('spam_iptrust_table');
  }
  public set spamIptrustTable(value: number) {
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
  private _spamMheaderTable?: number; 
  public get spamMheaderTable() {
    return this.getNumberAttribute('spam_mheader_table');
  }
  public set spamMheaderTable(value: number) {
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
  private _spamRblTable?: number; 
  public get spamRblTable() {
    return this.getNumberAttribute('spam_rbl_table');
  }
  public set spamRblTable(value: number) {
    this._spamRblTable = value;
  }
  public resetSpamRblTable() {
    this._spamRblTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamRblTableInput() {
    return this._spamRblTable;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // gmail - computed: false, optional: true, required: false
  private _gmail = new SpamfilterProfileGmailOutputReference(this, "gmail");
  public get gmail() {
    return this._gmail;
  }
  public putGmail(value: SpamfilterProfileGmail) {
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
  private _imap = new SpamfilterProfileImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: SpamfilterProfileImap) {
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
  private _mapi = new SpamfilterProfileMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: SpamfilterProfileMapi) {
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
  private _msnHotmail = new SpamfilterProfileMsnHotmailOutputReference(this, "msn_hotmail");
  public get msnHotmail() {
    return this._msnHotmail;
  }
  public putMsnHotmail(value: SpamfilterProfileMsnHotmail) {
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
  private _pop3 = new SpamfilterProfilePop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: SpamfilterProfilePop3) {
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
  private _smtp = new SpamfilterProfileSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: SpamfilterProfileSmtp) {
    this._smtp.internalValue = value;
  }
  public resetSmtp() {
    this._smtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp.internalValue;
  }

  // yahoo_mail - computed: false, optional: true, required: false
  private _yahooMail = new SpamfilterProfileYahooMailOutputReference(this, "yahoo_mail");
  public get yahooMail() {
    return this._yahooMail;
  }
  public putYahooMail(value: SpamfilterProfileYahooMail) {
    this._yahooMail.internalValue = value;
  }
  public resetYahooMail() {
    this._yahooMail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yahooMailInput() {
    return this._yahooMail.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      external: cdktf.stringToTerraform(this._external),
      flow_based: cdktf.stringToTerraform(this._flowBased),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.stringToTerraform(this._options),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      spam_bwl_table: cdktf.numberToTerraform(this._spamBwlTable),
      spam_bword_table: cdktf.numberToTerraform(this._spamBwordTable),
      spam_bword_threshold: cdktf.numberToTerraform(this._spamBwordThreshold),
      spam_filtering: cdktf.stringToTerraform(this._spamFiltering),
      spam_iptrust_table: cdktf.numberToTerraform(this._spamIptrustTable),
      spam_log: cdktf.stringToTerraform(this._spamLog),
      spam_log_fortiguard_response: cdktf.stringToTerraform(this._spamLogFortiguardResponse),
      spam_mheader_table: cdktf.numberToTerraform(this._spamMheaderTable),
      spam_rbl_table: cdktf.numberToTerraform(this._spamRblTable),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      gmail: spamfilterProfileGmailToTerraform(this._gmail.internalValue),
      imap: spamfilterProfileImapToTerraform(this._imap.internalValue),
      mapi: spamfilterProfileMapiToTerraform(this._mapi.internalValue),
      msn_hotmail: spamfilterProfileMsnHotmailToTerraform(this._msnHotmail.internalValue),
      pop3: spamfilterProfilePop3ToTerraform(this._pop3.internalValue),
      smtp: spamfilterProfileSmtpToTerraform(this._smtp.internalValue),
      yahoo_mail: spamfilterProfileYahooMailToTerraform(this._yahooMail.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_bwl_table: {
        value: cdktf.numberToHclTerraform(this._spamBwlTable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spam_bword_table: {
        value: cdktf.numberToHclTerraform(this._spamBwordTable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: cdktf.numberToHclTerraform(this._spamIptrustTable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: cdktf.numberToHclTerraform(this._spamMheaderTable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spam_rbl_table: {
        value: cdktf.numberToHclTerraform(this._spamRblTable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gmail: {
        value: spamfilterProfileGmailToHclTerraform(this._gmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpamfilterProfileGmailList",
      },
      imap: {
        value: spamfilterProfileImapToHclTerraform(this._imap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpamfilterProfileImapList",
      },
      mapi: {
        value: spamfilterProfileMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpamfilterProfileMapiList",
      },
      msn_hotmail: {
        value: spamfilterProfileMsnHotmailToHclTerraform(this._msnHotmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpamfilterProfileMsnHotmailList",
      },
      pop3: {
        value: spamfilterProfilePop3ToHclTerraform(this._pop3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpamfilterProfilePop3List",
      },
      smtp: {
        value: spamfilterProfileSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpamfilterProfileSmtpList",
      },
      yahoo_mail: {
        value: spamfilterProfileYahooMailToHclTerraform(this._yahooMail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpamfilterProfileYahooMailList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
