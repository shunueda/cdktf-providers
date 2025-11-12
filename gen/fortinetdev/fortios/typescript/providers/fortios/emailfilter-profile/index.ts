// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailfilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#comment EmailfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#external EmailfilterProfile#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#feature_set EmailfilterProfile#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#get_all_tables EmailfilterProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#id EmailfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#name EmailfilterProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#options EmailfilterProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#replacemsg_group EmailfilterProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_bal_table EmailfilterProfile#spam_bal_table}
  */
  readonly spamBalTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_bwl_table EmailfilterProfile#spam_bwl_table}
  */
  readonly spamBwlTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_bword_table EmailfilterProfile#spam_bword_table}
  */
  readonly spamBwordTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_bword_threshold EmailfilterProfile#spam_bword_threshold}
  */
  readonly spamBwordThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_filtering EmailfilterProfile#spam_filtering}
  */
  readonly spamFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_iptrust_table EmailfilterProfile#spam_iptrust_table}
  */
  readonly spamIptrustTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_log EmailfilterProfile#spam_log}
  */
  readonly spamLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_log_fortiguard_response EmailfilterProfile#spam_log_fortiguard_response}
  */
  readonly spamLogFortiguardResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_mheader_table EmailfilterProfile#spam_mheader_table}
  */
  readonly spamMheaderTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#spam_rbl_table EmailfilterProfile#spam_rbl_table}
  */
  readonly spamRblTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#vdomparam EmailfilterProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * file_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#file_filter EmailfilterProfile#file_filter}
  */
  readonly fileFilter?: EmailfilterProfileFileFilter;
  /**
  * gmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#gmail EmailfilterProfile#gmail}
  */
  readonly gmail?: EmailfilterProfileGmail;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#imap EmailfilterProfile#imap}
  */
  readonly imap?: EmailfilterProfileImap;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#mapi EmailfilterProfile#mapi}
  */
  readonly mapi?: EmailfilterProfileMapi;
  /**
  * msn_hotmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#msn_hotmail EmailfilterProfile#msn_hotmail}
  */
  readonly msnHotmail?: EmailfilterProfileMsnHotmail;
  /**
  * other_webmails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#other_webmails EmailfilterProfile#other_webmails}
  */
  readonly otherWebmails?: EmailfilterProfileOtherWebmails;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#pop3 EmailfilterProfile#pop3}
  */
  readonly pop3?: EmailfilterProfilePop3;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#smtp EmailfilterProfile#smtp}
  */
  readonly smtp?: EmailfilterProfileSmtp;
  /**
  * yahoo_mail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#yahoo_mail EmailfilterProfile#yahoo_mail}
  */
  readonly yahooMail?: EmailfilterProfileYahooMail;
}
export interface EmailfilterProfileFileFilterEntriesFileType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#name EmailfilterProfile#name}
  */
  readonly name?: string;
}

export function emailfilterProfileFileFilterEntriesFileTypeToTerraform(struct?: EmailfilterProfileFileFilterEntriesFileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function emailfilterProfileFileFilterEntriesFileTypeToHclTerraform(struct?: EmailfilterProfileFileFilterEntriesFileType | cdktf.IResolvable): any {
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

export class EmailfilterProfileFileFilterEntriesFileTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmailfilterProfileFileFilterEntriesFileType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailfilterProfileFileFilterEntriesFileType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class EmailfilterProfileFileFilterEntriesFileTypeList extends cdktf.ComplexList {
  public internalValue? : EmailfilterProfileFileFilterEntriesFileType[] | cdktf.IResolvable

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
  public get(index: number): EmailfilterProfileFileFilterEntriesFileTypeOutputReference {
    return new EmailfilterProfileFileFilterEntriesFileTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmailfilterProfileFileFilterEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#action EmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#comment EmailfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#filter EmailfilterProfile#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#password_protected EmailfilterProfile#password_protected}
  */
  readonly passwordProtected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#protocol EmailfilterProfile#protocol}
  */
  readonly protocol?: string;
  /**
  * file_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#file_type EmailfilterProfile#file_type}
  */
  readonly fileType?: EmailfilterProfileFileFilterEntriesFileType[] | cdktf.IResolvable;
}

export function emailfilterProfileFileFilterEntriesToTerraform(struct?: EmailfilterProfileFileFilterEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    filter: cdktf.stringToTerraform(struct!.filter),
    password_protected: cdktf.stringToTerraform(struct!.passwordProtected),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    file_type: cdktf.listMapper(emailfilterProfileFileFilterEntriesFileTypeToTerraform, true)(struct!.fileType),
  }
}


export function emailfilterProfileFileFilterEntriesToHclTerraform(struct?: EmailfilterProfileFileFilterEntries | cdktf.IResolvable): any {
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_protected: {
      value: cdktf.stringToHclTerraform(struct!.passwordProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktf.listMapperHcl(emailfilterProfileFileFilterEntriesFileTypeToHclTerraform, true)(struct!.fileType),
      isBlock: true,
      type: "set",
      storageClassType: "EmailfilterProfileFileFilterEntriesFileTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailfilterProfileFileFilterEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmailfilterProfileFileFilterEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._passwordProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordProtected = this._passwordProtected;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._fileType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailfilterProfileFileFilterEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._filter = undefined;
      this._passwordProtected = undefined;
      this._protocol = undefined;
      this._fileType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._filter = value.filter;
      this._passwordProtected = value.passwordProtected;
      this._protocol = value.protocol;
      this._fileType.internalValue = value.fileType;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // password_protected - computed: false, optional: true, required: false
  private _passwordProtected?: string; 
  public get passwordProtected() {
    return this.getStringAttribute('password_protected');
  }
  public set passwordProtected(value: string) {
    this._passwordProtected = value;
  }
  public resetPasswordProtected() {
    this._passwordProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordProtectedInput() {
    return this._passwordProtected;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType = new EmailfilterProfileFileFilterEntriesFileTypeList(this, "file_type", true);
  public get fileType() {
    return this._fileType;
  }
  public putFileType(value: EmailfilterProfileFileFilterEntriesFileType[] | cdktf.IResolvable) {
    this._fileType.internalValue = value;
  }
  public resetFileType() {
    this._fileType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType.internalValue;
  }
}

export class EmailfilterProfileFileFilterEntriesList extends cdktf.ComplexList {
  public internalValue? : EmailfilterProfileFileFilterEntries[] | cdktf.IResolvable

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
  public get(index: number): EmailfilterProfileFileFilterEntriesOutputReference {
    return new EmailfilterProfileFileFilterEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmailfilterProfileFileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log EmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#scan_archive_contents EmailfilterProfile#scan_archive_contents}
  */
  readonly scanArchiveContents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#status EmailfilterProfile#status}
  */
  readonly status?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#entries EmailfilterProfile#entries}
  */
  readonly entries?: EmailfilterProfileFileFilterEntries[] | cdktf.IResolvable;
}

export function emailfilterProfileFileFilterToTerraform(struct?: EmailfilterProfileFileFilterOutputReference | EmailfilterProfileFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    scan_archive_contents: cdktf.stringToTerraform(struct!.scanArchiveContents),
    status: cdktf.stringToTerraform(struct!.status),
    entries: cdktf.listMapper(emailfilterProfileFileFilterEntriesToTerraform, true)(struct!.entries),
  }
}


export function emailfilterProfileFileFilterToHclTerraform(struct?: EmailfilterProfileFileFilterOutputReference | EmailfilterProfileFileFilter): any {
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
    scan_archive_contents: {
      value: cdktf.stringToHclTerraform(struct!.scanArchiveContents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entries: {
      value: cdktf.listMapperHcl(emailfilterProfileFileFilterEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "EmailfilterProfileFileFilterEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailfilterProfileFileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfileFileFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._scanArchiveContents !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanArchiveContents = this._scanArchiveContents;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailfilterProfileFileFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._scanArchiveContents = undefined;
      this._status = undefined;
      this._entries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._scanArchiveContents = value.scanArchiveContents;
      this._status = value.status;
      this._entries.internalValue = value.entries;
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

  // scan_archive_contents - computed: false, optional: true, required: false
  private _scanArchiveContents?: string; 
  public get scanArchiveContents() {
    return this.getStringAttribute('scan_archive_contents');
  }
  public set scanArchiveContents(value: string) {
    this._scanArchiveContents = value;
  }
  public resetScanArchiveContents() {
    this._scanArchiveContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanArchiveContentsInput() {
    return this._scanArchiveContents;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new EmailfilterProfileFileFilterEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: EmailfilterProfileFileFilterEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}
export interface EmailfilterProfileGmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log EmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log_all EmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function emailfilterProfileGmailToTerraform(struct?: EmailfilterProfileGmailOutputReference | EmailfilterProfileGmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
  }
}


export function emailfilterProfileGmailToHclTerraform(struct?: EmailfilterProfileGmailOutputReference | EmailfilterProfileGmail): any {
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
    log_all: {
      value: cdktf.stringToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailfilterProfileGmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfileGmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailfilterProfileGmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._logAll = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._logAll = value.logAll;
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

  // log_all - computed: true, optional: true, required: false
  private _logAll?: string; 
  public get logAll() {
    return this.getStringAttribute('log_all');
  }
  public set logAll(value: string) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }
}
export interface EmailfilterProfileImap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#action EmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log EmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log_all EmailfilterProfile#log_all}
  */
  readonly logAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#tag_msg EmailfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#tag_type EmailfilterProfile#tag_type}
  */
  readonly tagType?: string;
}

export function emailfilterProfileImapToTerraform(struct?: EmailfilterProfileImapOutputReference | EmailfilterProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.stringToTerraform(struct!.tagType),
  }
}


export function emailfilterProfileImapToHclTerraform(struct?: EmailfilterProfileImapOutputReference | EmailfilterProfileImap): any {
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
    log_all: {
      value: cdktf.stringToHclTerraform(struct!.logAll),
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

export class EmailfilterProfileImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfileImap | undefined {
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
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
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

  public set internalValue(value: EmailfilterProfileImap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._logAll = undefined;
      this._tagMsg = undefined;
      this._tagType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._logAll = value.logAll;
      this._tagMsg = value.tagMsg;
      this._tagType = value.tagType;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log_all - computed: true, optional: true, required: false
  private _logAll?: string; 
  public get logAll() {
    return this.getStringAttribute('log_all');
  }
  public set logAll(value: string) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // tag_msg - computed: true, optional: true, required: false
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
export interface EmailfilterProfileMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#action EmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log EmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log_all EmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function emailfilterProfileMapiToTerraform(struct?: EmailfilterProfileMapiOutputReference | EmailfilterProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
  }
}


export function emailfilterProfileMapiToHclTerraform(struct?: EmailfilterProfileMapiOutputReference | EmailfilterProfileMapi): any {
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
    log_all: {
      value: cdktf.stringToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailfilterProfileMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfileMapi | undefined {
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
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailfilterProfileMapi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._logAll = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._logAll = value.logAll;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log_all - computed: true, optional: true, required: false
  private _logAll?: string; 
  public get logAll() {
    return this.getStringAttribute('log_all');
  }
  public set logAll(value: string) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }
}
export interface EmailfilterProfileMsnHotmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log EmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log_all EmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function emailfilterProfileMsnHotmailToTerraform(struct?: EmailfilterProfileMsnHotmailOutputReference | EmailfilterProfileMsnHotmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
  }
}


export function emailfilterProfileMsnHotmailToHclTerraform(struct?: EmailfilterProfileMsnHotmailOutputReference | EmailfilterProfileMsnHotmail): any {
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
    log_all: {
      value: cdktf.stringToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailfilterProfileMsnHotmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfileMsnHotmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailfilterProfileMsnHotmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._logAll = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._logAll = value.logAll;
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

  // log_all - computed: true, optional: true, required: false
  private _logAll?: string; 
  public get logAll() {
    return this.getStringAttribute('log_all');
  }
  public set logAll(value: string) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }
}
export interface EmailfilterProfileOtherWebmails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log_all EmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function emailfilterProfileOtherWebmailsToTerraform(struct?: EmailfilterProfileOtherWebmailsOutputReference | EmailfilterProfileOtherWebmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.stringToTerraform(struct!.logAll),
  }
}


export function emailfilterProfileOtherWebmailsToHclTerraform(struct?: EmailfilterProfileOtherWebmailsOutputReference | EmailfilterProfileOtherWebmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_all: {
      value: cdktf.stringToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailfilterProfileOtherWebmailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfileOtherWebmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailfilterProfileOtherWebmails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAll = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAll = value.logAll;
    }
  }

  // log_all - computed: true, optional: true, required: false
  private _logAll?: string; 
  public get logAll() {
    return this.getStringAttribute('log_all');
  }
  public set logAll(value: string) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }
}
export interface EmailfilterProfilePop3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#action EmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log EmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log_all EmailfilterProfile#log_all}
  */
  readonly logAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#tag_msg EmailfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#tag_type EmailfilterProfile#tag_type}
  */
  readonly tagType?: string;
}

export function emailfilterProfilePop3ToTerraform(struct?: EmailfilterProfilePop3OutputReference | EmailfilterProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.stringToTerraform(struct!.tagType),
  }
}


export function emailfilterProfilePop3ToHclTerraform(struct?: EmailfilterProfilePop3OutputReference | EmailfilterProfilePop3): any {
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
    log_all: {
      value: cdktf.stringToHclTerraform(struct!.logAll),
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

export class EmailfilterProfilePop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfilePop3 | undefined {
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
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
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

  public set internalValue(value: EmailfilterProfilePop3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._logAll = undefined;
      this._tagMsg = undefined;
      this._tagType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._logAll = value.logAll;
      this._tagMsg = value.tagMsg;
      this._tagType = value.tagType;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log_all - computed: true, optional: true, required: false
  private _logAll?: string; 
  public get logAll() {
    return this.getStringAttribute('log_all');
  }
  public set logAll(value: string) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // tag_msg - computed: true, optional: true, required: false
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
export interface EmailfilterProfileSmtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#action EmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#hdrip EmailfilterProfile#hdrip}
  */
  readonly hdrip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#local_override EmailfilterProfile#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log EmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log_all EmailfilterProfile#log_all}
  */
  readonly logAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#tag_msg EmailfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#tag_type EmailfilterProfile#tag_type}
  */
  readonly tagType?: string;
}

export function emailfilterProfileSmtpToTerraform(struct?: EmailfilterProfileSmtpOutputReference | EmailfilterProfileSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    hdrip: cdktf.stringToTerraform(struct!.hdrip),
    local_override: cdktf.stringToTerraform(struct!.localOverride),
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.stringToTerraform(struct!.tagType),
  }
}


export function emailfilterProfileSmtpToHclTerraform(struct?: EmailfilterProfileSmtpOutputReference | EmailfilterProfileSmtp): any {
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
    log_all: {
      value: cdktf.stringToHclTerraform(struct!.logAll),
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

export class EmailfilterProfileSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfileSmtp | undefined {
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
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
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

  public set internalValue(value: EmailfilterProfileSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._hdrip = undefined;
      this._localOverride = undefined;
      this._log = undefined;
      this._logAll = undefined;
      this._tagMsg = undefined;
      this._tagType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._hdrip = value.hdrip;
      this._localOverride = value.localOverride;
      this._log = value.log;
      this._logAll = value.logAll;
      this._tagMsg = value.tagMsg;
      this._tagType = value.tagType;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // hdrip - computed: true, optional: true, required: false
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

  // local_override - computed: true, optional: true, required: false
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

  // log_all - computed: true, optional: true, required: false
  private _logAll?: string; 
  public get logAll() {
    return this.getStringAttribute('log_all');
  }
  public set logAll(value: string) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // tag_msg - computed: true, optional: true, required: false
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
export interface EmailfilterProfileYahooMail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log EmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#log_all EmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function emailfilterProfileYahooMailToTerraform(struct?: EmailfilterProfileYahooMailOutputReference | EmailfilterProfileYahooMail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
  }
}


export function emailfilterProfileYahooMailToHclTerraform(struct?: EmailfilterProfileYahooMailOutputReference | EmailfilterProfileYahooMail): any {
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
    log_all: {
      value: cdktf.stringToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmailfilterProfileYahooMailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmailfilterProfileYahooMail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailfilterProfileYahooMail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._logAll = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._logAll = value.logAll;
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

  // log_all - computed: true, optional: true, required: false
  private _logAll?: string; 
  public get logAll() {
    return this.getStringAttribute('log_all');
  }
  public set logAll(value: string) {
    this._logAll = value;
  }
  public resetLogAll() {
    this._logAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile fortios_emailfilter_profile}
*/
export class EmailfilterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_emailfilter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailfilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailfilterProfile to import
  * @param importFromId The id of the existing EmailfilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailfilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_emailfilter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/emailfilter_profile fortios_emailfilter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailfilterProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EmailfilterProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_emailfilter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._featureSet = config.featureSet;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._options = config.options;
    this._replacemsgGroup = config.replacemsgGroup;
    this._spamBalTable = config.spamBalTable;
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
    this._fileFilter.internalValue = config.fileFilter;
    this._gmail.internalValue = config.gmail;
    this._imap.internalValue = config.imap;
    this._mapi.internalValue = config.mapi;
    this._msnHotmail.internalValue = config.msnHotmail;
    this._otherWebmails.internalValue = config.otherWebmails;
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

  // external - computed: true, optional: true, required: false
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

  // feature_set - computed: true, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
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

  // name - computed: true, optional: true, required: false
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

  // spam_bal_table - computed: false, optional: true, required: false
  private _spamBalTable?: number; 
  public get spamBalTable() {
    return this.getNumberAttribute('spam_bal_table');
  }
  public set spamBalTable(value: number) {
    this._spamBalTable = value;
  }
  public resetSpamBalTable() {
    this._spamBalTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamBalTableInput() {
    return this._spamBalTable;
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

  // spam_bword_threshold - computed: true, optional: true, required: false
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

  // spam_filtering - computed: true, optional: true, required: false
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

  // spam_log - computed: true, optional: true, required: false
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

  // spam_log_fortiguard_response - computed: true, optional: true, required: false
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

  // file_filter - computed: false, optional: true, required: false
  private _fileFilter = new EmailfilterProfileFileFilterOutputReference(this, "file_filter");
  public get fileFilter() {
    return this._fileFilter;
  }
  public putFileFilter(value: EmailfilterProfileFileFilter) {
    this._fileFilter.internalValue = value;
  }
  public resetFileFilter() {
    this._fileFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterInput() {
    return this._fileFilter.internalValue;
  }

  // gmail - computed: false, optional: true, required: false
  private _gmail = new EmailfilterProfileGmailOutputReference(this, "gmail");
  public get gmail() {
    return this._gmail;
  }
  public putGmail(value: EmailfilterProfileGmail) {
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
  private _imap = new EmailfilterProfileImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: EmailfilterProfileImap) {
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
  private _mapi = new EmailfilterProfileMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: EmailfilterProfileMapi) {
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
  private _msnHotmail = new EmailfilterProfileMsnHotmailOutputReference(this, "msn_hotmail");
  public get msnHotmail() {
    return this._msnHotmail;
  }
  public putMsnHotmail(value: EmailfilterProfileMsnHotmail) {
    this._msnHotmail.internalValue = value;
  }
  public resetMsnHotmail() {
    this._msnHotmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msnHotmailInput() {
    return this._msnHotmail.internalValue;
  }

  // other_webmails - computed: false, optional: true, required: false
  private _otherWebmails = new EmailfilterProfileOtherWebmailsOutputReference(this, "other_webmails");
  public get otherWebmails() {
    return this._otherWebmails;
  }
  public putOtherWebmails(value: EmailfilterProfileOtherWebmails) {
    this._otherWebmails.internalValue = value;
  }
  public resetOtherWebmails() {
    this._otherWebmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherWebmailsInput() {
    return this._otherWebmails.internalValue;
  }

  // pop3 - computed: false, optional: true, required: false
  private _pop3 = new EmailfilterProfilePop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: EmailfilterProfilePop3) {
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
  private _smtp = new EmailfilterProfileSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: EmailfilterProfileSmtp) {
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
  private _yahooMail = new EmailfilterProfileYahooMailOutputReference(this, "yahoo_mail");
  public get yahooMail() {
    return this._yahooMail;
  }
  public putYahooMail(value: EmailfilterProfileYahooMail) {
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
      feature_set: cdktf.stringToTerraform(this._featureSet),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.stringToTerraform(this._options),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      spam_bal_table: cdktf.numberToTerraform(this._spamBalTable),
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
      file_filter: emailfilterProfileFileFilterToTerraform(this._fileFilter.internalValue),
      gmail: emailfilterProfileGmailToTerraform(this._gmail.internalValue),
      imap: emailfilterProfileImapToTerraform(this._imap.internalValue),
      mapi: emailfilterProfileMapiToTerraform(this._mapi.internalValue),
      msn_hotmail: emailfilterProfileMsnHotmailToTerraform(this._msnHotmail.internalValue),
      other_webmails: emailfilterProfileOtherWebmailsToTerraform(this._otherWebmails.internalValue),
      pop3: emailfilterProfilePop3ToTerraform(this._pop3.internalValue),
      smtp: emailfilterProfileSmtpToTerraform(this._smtp.internalValue),
      yahoo_mail: emailfilterProfileYahooMailToTerraform(this._yahooMail.internalValue),
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
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
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
      spam_bal_table: {
        value: cdktf.numberToHclTerraform(this._spamBalTable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      file_filter: {
        value: emailfilterProfileFileFilterToHclTerraform(this._fileFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfileFileFilterList",
      },
      gmail: {
        value: emailfilterProfileGmailToHclTerraform(this._gmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfileGmailList",
      },
      imap: {
        value: emailfilterProfileImapToHclTerraform(this._imap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfileImapList",
      },
      mapi: {
        value: emailfilterProfileMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfileMapiList",
      },
      msn_hotmail: {
        value: emailfilterProfileMsnHotmailToHclTerraform(this._msnHotmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfileMsnHotmailList",
      },
      other_webmails: {
        value: emailfilterProfileOtherWebmailsToHclTerraform(this._otherWebmails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfileOtherWebmailsList",
      },
      pop3: {
        value: emailfilterProfilePop3ToHclTerraform(this._pop3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfilePop3List",
      },
      smtp: {
        value: emailfilterProfileSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfileSmtpList",
      },
      yahoo_mail: {
        value: emailfilterProfileYahooMailToHclTerraform(this._yahooMail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmailfilterProfileYahooMailList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
