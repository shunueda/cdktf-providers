// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectEmailfilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#adom ObjectEmailfilterProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#comment ObjectEmailfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#external ObjectEmailfilterProfile#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#feature_set ObjectEmailfilterProfile#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#id ObjectEmailfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#name ObjectEmailfilterProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#options ObjectEmailfilterProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#replacemsg_group ObjectEmailfilterProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#scopetype ObjectEmailfilterProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_bal_table ObjectEmailfilterProfile#spam_bal_table}
  */
  readonly spamBalTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_bwl_table ObjectEmailfilterProfile#spam_bwl_table}
  */
  readonly spamBwlTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_bword_table ObjectEmailfilterProfile#spam_bword_table}
  */
  readonly spamBwordTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_bword_threshold ObjectEmailfilterProfile#spam_bword_threshold}
  */
  readonly spamBwordThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_filtering ObjectEmailfilterProfile#spam_filtering}
  */
  readonly spamFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_iptrust_table ObjectEmailfilterProfile#spam_iptrust_table}
  */
  readonly spamIptrustTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_log ObjectEmailfilterProfile#spam_log}
  */
  readonly spamLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_log_fortiguard_response ObjectEmailfilterProfile#spam_log_fortiguard_response}
  */
  readonly spamLogFortiguardResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_mheader_table ObjectEmailfilterProfile#spam_mheader_table}
  */
  readonly spamMheaderTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#spam_rbl_table ObjectEmailfilterProfile#spam_rbl_table}
  */
  readonly spamRblTable?: string;
  /**
  * file_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#file_filter ObjectEmailfilterProfile#file_filter}
  */
  readonly fileFilter?: ObjectEmailfilterProfileFileFilter;
  /**
  * gmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#gmail ObjectEmailfilterProfile#gmail}
  */
  readonly gmail?: ObjectEmailfilterProfileGmail;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#imap ObjectEmailfilterProfile#imap}
  */
  readonly imap?: ObjectEmailfilterProfileImap;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#mapi ObjectEmailfilterProfile#mapi}
  */
  readonly mapi?: ObjectEmailfilterProfileMapi;
  /**
  * msn_hotmail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#msn_hotmail ObjectEmailfilterProfile#msn_hotmail}
  */
  readonly msnHotmail?: ObjectEmailfilterProfileMsnHotmail;
  /**
  * other_webmails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#other_webmails ObjectEmailfilterProfile#other_webmails}
  */
  readonly otherWebmails?: ObjectEmailfilterProfileOtherWebmails;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#pop3 ObjectEmailfilterProfile#pop3}
  */
  readonly pop3?: ObjectEmailfilterProfilePop3;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#smtp ObjectEmailfilterProfile#smtp}
  */
  readonly smtp?: ObjectEmailfilterProfileSmtp;
}
export interface ObjectEmailfilterProfileFileFilterEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#action ObjectEmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#comment ObjectEmailfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#encryption ObjectEmailfilterProfile#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#file_type ObjectEmailfilterProfile#file_type}
  */
  readonly fileType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#filter ObjectEmailfilterProfile#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#password_protected ObjectEmailfilterProfile#password_protected}
  */
  readonly passwordProtected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#protocol ObjectEmailfilterProfile#protocol}
  */
  readonly protocol?: string[];
}

export function objectEmailfilterProfileFileFilterEntriesToTerraform(struct?: ObjectEmailfilterProfileFileFilterEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    file_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileType),
    filter: cdktf.stringToTerraform(struct!.filter),
    password_protected: cdktf.stringToTerraform(struct!.passwordProtected),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
  }
}


export function objectEmailfilterProfileFileFilterEntriesToHclTerraform(struct?: ObjectEmailfilterProfileFileFilterEntries | cdktf.IResolvable): any {
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
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectEmailfilterProfileFileFilterEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectEmailfilterProfileFileFilterEntries | cdktf.IResolvable | undefined {
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
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectEmailfilterProfileFileFilterEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._encryption = undefined;
      this._fileType = undefined;
      this._filter = undefined;
      this._passwordProtected = undefined;
      this._protocol = undefined;
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
      this._encryption = value.encryption;
      this._fileType = value.fileType;
      this._filter = value.filter;
      this._passwordProtected = value.passwordProtected;
      this._protocol = value.protocol;
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

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // file_type - computed: true, optional: true, required: false
  private _fileType?: string[]; 
  public get fileType() {
    return cdktf.Fn.tolist(this.getListAttribute('file_type'));
  }
  public set fileType(value: string[]) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ObjectEmailfilterProfileFileFilterEntriesList extends cdktf.ComplexList {
  public internalValue? : ObjectEmailfilterProfileFileFilterEntries[] | cdktf.IResolvable

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
  public get(index: number): ObjectEmailfilterProfileFileFilterEntriesOutputReference {
    return new ObjectEmailfilterProfileFileFilterEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectEmailfilterProfileFileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log ObjectEmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#scan_archive_contents ObjectEmailfilterProfile#scan_archive_contents}
  */
  readonly scanArchiveContents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#status ObjectEmailfilterProfile#status}
  */
  readonly status?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#entries ObjectEmailfilterProfile#entries}
  */
  readonly entries?: ObjectEmailfilterProfileFileFilterEntries[] | cdktf.IResolvable;
}

export function objectEmailfilterProfileFileFilterToTerraform(struct?: ObjectEmailfilterProfileFileFilterOutputReference | ObjectEmailfilterProfileFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    scan_archive_contents: cdktf.stringToTerraform(struct!.scanArchiveContents),
    status: cdktf.stringToTerraform(struct!.status),
    entries: cdktf.listMapper(objectEmailfilterProfileFileFilterEntriesToTerraform, true)(struct!.entries),
  }
}


export function objectEmailfilterProfileFileFilterToHclTerraform(struct?: ObjectEmailfilterProfileFileFilterOutputReference | ObjectEmailfilterProfileFileFilter): any {
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
      value: cdktf.listMapperHcl(objectEmailfilterProfileFileFilterEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectEmailfilterProfileFileFilterEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectEmailfilterProfileFileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectEmailfilterProfileFileFilter | undefined {
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

  public set internalValue(value: ObjectEmailfilterProfileFileFilter | undefined) {
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
  private _entries = new ObjectEmailfilterProfileFileFilterEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ObjectEmailfilterProfileFileFilterEntries[] | cdktf.IResolvable) {
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
export interface ObjectEmailfilterProfileGmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log ObjectEmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log_all ObjectEmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function objectEmailfilterProfileGmailToTerraform(struct?: ObjectEmailfilterProfileGmailOutputReference | ObjectEmailfilterProfileGmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
  }
}


export function objectEmailfilterProfileGmailToHclTerraform(struct?: ObjectEmailfilterProfileGmailOutputReference | ObjectEmailfilterProfileGmail): any {
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

export class ObjectEmailfilterProfileGmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectEmailfilterProfileGmail | undefined {
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

  public set internalValue(value: ObjectEmailfilterProfileGmail | undefined) {
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

  // log - computed: true, optional: true, required: false
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
export interface ObjectEmailfilterProfileImap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#action ObjectEmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log ObjectEmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log_all ObjectEmailfilterProfile#log_all}
  */
  readonly logAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#tag_msg ObjectEmailfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#tag_type ObjectEmailfilterProfile#tag_type}
  */
  readonly tagType?: string[];
}

export function objectEmailfilterProfileImapToTerraform(struct?: ObjectEmailfilterProfileImapOutputReference | ObjectEmailfilterProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagType),
  }
}


export function objectEmailfilterProfileImapToHclTerraform(struct?: ObjectEmailfilterProfileImapOutputReference | ObjectEmailfilterProfileImap): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectEmailfilterProfileImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectEmailfilterProfileImap | undefined {
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

  public set internalValue(value: ObjectEmailfilterProfileImap | undefined) {
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

  // log - computed: true, optional: true, required: false
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
export interface ObjectEmailfilterProfileMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#action ObjectEmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log ObjectEmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log_all ObjectEmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function objectEmailfilterProfileMapiToTerraform(struct?: ObjectEmailfilterProfileMapiOutputReference | ObjectEmailfilterProfileMapi): any {
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


export function objectEmailfilterProfileMapiToHclTerraform(struct?: ObjectEmailfilterProfileMapiOutputReference | ObjectEmailfilterProfileMapi): any {
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

export class ObjectEmailfilterProfileMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectEmailfilterProfileMapi | undefined {
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

  public set internalValue(value: ObjectEmailfilterProfileMapi | undefined) {
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

  // log_all - computed: false, optional: true, required: false
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
export interface ObjectEmailfilterProfileMsnHotmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log ObjectEmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log_all ObjectEmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function objectEmailfilterProfileMsnHotmailToTerraform(struct?: ObjectEmailfilterProfileMsnHotmailOutputReference | ObjectEmailfilterProfileMsnHotmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
  }
}


export function objectEmailfilterProfileMsnHotmailToHclTerraform(struct?: ObjectEmailfilterProfileMsnHotmailOutputReference | ObjectEmailfilterProfileMsnHotmail): any {
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

export class ObjectEmailfilterProfileMsnHotmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectEmailfilterProfileMsnHotmail | undefined {
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

  public set internalValue(value: ObjectEmailfilterProfileMsnHotmail | undefined) {
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

  // log - computed: true, optional: true, required: false
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
export interface ObjectEmailfilterProfileOtherWebmails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log_all ObjectEmailfilterProfile#log_all}
  */
  readonly logAll?: string;
}

export function objectEmailfilterProfileOtherWebmailsToTerraform(struct?: ObjectEmailfilterProfileOtherWebmailsOutputReference | ObjectEmailfilterProfileOtherWebmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.stringToTerraform(struct!.logAll),
  }
}


export function objectEmailfilterProfileOtherWebmailsToHclTerraform(struct?: ObjectEmailfilterProfileOtherWebmailsOutputReference | ObjectEmailfilterProfileOtherWebmails): any {
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

export class ObjectEmailfilterProfileOtherWebmailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectEmailfilterProfileOtherWebmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectEmailfilterProfileOtherWebmails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAll = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAll = value.logAll;
    }
  }

  // log_all - computed: false, optional: true, required: false
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
export interface ObjectEmailfilterProfilePop3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#action ObjectEmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log ObjectEmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log_all ObjectEmailfilterProfile#log_all}
  */
  readonly logAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#tag_msg ObjectEmailfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#tag_type ObjectEmailfilterProfile#tag_type}
  */
  readonly tagType?: string[];
}

export function objectEmailfilterProfilePop3ToTerraform(struct?: ObjectEmailfilterProfilePop3OutputReference | ObjectEmailfilterProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    log_all: cdktf.stringToTerraform(struct!.logAll),
    tag_msg: cdktf.stringToTerraform(struct!.tagMsg),
    tag_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagType),
  }
}


export function objectEmailfilterProfilePop3ToHclTerraform(struct?: ObjectEmailfilterProfilePop3OutputReference | ObjectEmailfilterProfilePop3): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectEmailfilterProfilePop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectEmailfilterProfilePop3 | undefined {
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

  public set internalValue(value: ObjectEmailfilterProfilePop3 | undefined) {
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

  // log - computed: true, optional: true, required: false
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
export interface ObjectEmailfilterProfileSmtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#action ObjectEmailfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#hdrip ObjectEmailfilterProfile#hdrip}
  */
  readonly hdrip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#local_override ObjectEmailfilterProfile#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log ObjectEmailfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#log_all ObjectEmailfilterProfile#log_all}
  */
  readonly logAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#tag_msg ObjectEmailfilterProfile#tag_msg}
  */
  readonly tagMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#tag_type ObjectEmailfilterProfile#tag_type}
  */
  readonly tagType?: string[];
}

export function objectEmailfilterProfileSmtpToTerraform(struct?: ObjectEmailfilterProfileSmtpOutputReference | ObjectEmailfilterProfileSmtp): any {
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
    tag_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagType),
  }
}


export function objectEmailfilterProfileSmtpToHclTerraform(struct?: ObjectEmailfilterProfileSmtpOutputReference | ObjectEmailfilterProfileSmtp): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectEmailfilterProfileSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectEmailfilterProfileSmtp | undefined {
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

  public set internalValue(value: ObjectEmailfilterProfileSmtp | undefined) {
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

  // log - computed: true, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile fortimanager_object_emailfilter_profile}
*/
export class ObjectEmailfilterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_emailfilter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectEmailfilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectEmailfilterProfile to import
  * @param importFromId The id of the existing ObjectEmailfilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectEmailfilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_emailfilter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_profile fortimanager_object_emailfilter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectEmailfilterProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectEmailfilterProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_emailfilter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._featureSet = config.featureSet;
    this._id = config.id;
    this._name = config.name;
    this._options = config.options;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scopetype = config.scopetype;
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
    this._fileFilter.internalValue = config.fileFilter;
    this._gmail.internalValue = config.gmail;
    this._imap.internalValue = config.imap;
    this._mapi.internalValue = config.mapi;
    this._msnHotmail.internalValue = config.msnHotmail;
    this._otherWebmails.internalValue = config.otherWebmails;
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

  // spam_bal_table - computed: false, optional: true, required: false
  private _spamBalTable?: string; 
  public get spamBalTable() {
    return this.getStringAttribute('spam_bal_table');
  }
  public set spamBalTable(value: string) {
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

  // file_filter - computed: false, optional: true, required: false
  private _fileFilter = new ObjectEmailfilterProfileFileFilterOutputReference(this, "file_filter");
  public get fileFilter() {
    return this._fileFilter;
  }
  public putFileFilter(value: ObjectEmailfilterProfileFileFilter) {
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
  private _gmail = new ObjectEmailfilterProfileGmailOutputReference(this, "gmail");
  public get gmail() {
    return this._gmail;
  }
  public putGmail(value: ObjectEmailfilterProfileGmail) {
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
  private _imap = new ObjectEmailfilterProfileImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: ObjectEmailfilterProfileImap) {
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
  private _mapi = new ObjectEmailfilterProfileMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: ObjectEmailfilterProfileMapi) {
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
  private _msnHotmail = new ObjectEmailfilterProfileMsnHotmailOutputReference(this, "msn_hotmail");
  public get msnHotmail() {
    return this._msnHotmail;
  }
  public putMsnHotmail(value: ObjectEmailfilterProfileMsnHotmail) {
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
  private _otherWebmails = new ObjectEmailfilterProfileOtherWebmailsOutputReference(this, "other_webmails");
  public get otherWebmails() {
    return this._otherWebmails;
  }
  public putOtherWebmails(value: ObjectEmailfilterProfileOtherWebmails) {
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
  private _pop3 = new ObjectEmailfilterProfilePop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: ObjectEmailfilterProfilePop3) {
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
  private _smtp = new ObjectEmailfilterProfileSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: ObjectEmailfilterProfileSmtp) {
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
      feature_set: cdktf.stringToTerraform(this._featureSet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      spam_bal_table: cdktf.stringToTerraform(this._spamBalTable),
      spam_bwl_table: cdktf.stringToTerraform(this._spamBwlTable),
      spam_bword_table: cdktf.stringToTerraform(this._spamBwordTable),
      spam_bword_threshold: cdktf.numberToTerraform(this._spamBwordThreshold),
      spam_filtering: cdktf.stringToTerraform(this._spamFiltering),
      spam_iptrust_table: cdktf.stringToTerraform(this._spamIptrustTable),
      spam_log: cdktf.stringToTerraform(this._spamLog),
      spam_log_fortiguard_response: cdktf.stringToTerraform(this._spamLogFortiguardResponse),
      spam_mheader_table: cdktf.stringToTerraform(this._spamMheaderTable),
      spam_rbl_table: cdktf.stringToTerraform(this._spamRblTable),
      file_filter: objectEmailfilterProfileFileFilterToTerraform(this._fileFilter.internalValue),
      gmail: objectEmailfilterProfileGmailToTerraform(this._gmail.internalValue),
      imap: objectEmailfilterProfileImapToTerraform(this._imap.internalValue),
      mapi: objectEmailfilterProfileMapiToTerraform(this._mapi.internalValue),
      msn_hotmail: objectEmailfilterProfileMsnHotmailToTerraform(this._msnHotmail.internalValue),
      other_webmails: objectEmailfilterProfileOtherWebmailsToTerraform(this._otherWebmails.internalValue),
      pop3: objectEmailfilterProfilePop3ToTerraform(this._pop3.internalValue),
      smtp: objectEmailfilterProfileSmtpToTerraform(this._smtp.internalValue),
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
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
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
      spam_bal_table: {
        value: cdktf.stringToHclTerraform(this._spamBalTable),
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
      file_filter: {
        value: objectEmailfilterProfileFileFilterToHclTerraform(this._fileFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectEmailfilterProfileFileFilterList",
      },
      gmail: {
        value: objectEmailfilterProfileGmailToHclTerraform(this._gmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectEmailfilterProfileGmailList",
      },
      imap: {
        value: objectEmailfilterProfileImapToHclTerraform(this._imap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectEmailfilterProfileImapList",
      },
      mapi: {
        value: objectEmailfilterProfileMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectEmailfilterProfileMapiList",
      },
      msn_hotmail: {
        value: objectEmailfilterProfileMsnHotmailToHclTerraform(this._msnHotmail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectEmailfilterProfileMsnHotmailList",
      },
      other_webmails: {
        value: objectEmailfilterProfileOtherWebmailsToHclTerraform(this._otherWebmails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectEmailfilterProfileOtherWebmailsList",
      },
      pop3: {
        value: objectEmailfilterProfilePop3ToHclTerraform(this._pop3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectEmailfilterProfilePop3List",
      },
      smtp: {
        value: objectEmailfilterProfileSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectEmailfilterProfileSmtpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
