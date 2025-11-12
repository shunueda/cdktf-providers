// https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#cloud Group#cloud}
  */
  readonly cloud?: GroupCloud;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#config_version Group#config_version}
  */
  readonly configVersion?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#deploying_worker_count Group#deploying_worker_count}
  */
  readonly deployingWorkerCount?: number;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#estimated_ingest_rate Group#estimated_ingest_rate}
  */
  readonly estimatedIngestRate?: number;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#git Group#git}
  */
  readonly git?: GroupGit;
  /**
  * Group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#incompatible_worker_count Group#incompatible_worker_count}
  */
  readonly incompatibleWorkerCount?: number;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#inherits Group#inherits}
  */
  readonly inherits?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#is_fleet Group#is_fleet}
  */
  readonly isFleet?: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#is_search Group#is_search}
  */
  readonly isSearch?: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#lookup_deployments Group#lookup_deployments}
  */
  readonly lookupDeployments?: GroupLookupDeployments[] | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#name Group#name}
  */
  readonly name?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#on_prem Group#on_prem}
  */
  readonly onPrem?: boolean | cdktf.IResolvable;
  /**
  * Cribl Product. must be one of ["stream", "edge"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#product Group#product}
  */
  readonly product: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#provisioned Group#provisioned}
  */
  readonly provisioned?: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#streamtags Group#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#tags Group#tags}
  */
  readonly tags?: string;
  /**
  * must be "lake_access"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#type Group#type}
  */
  readonly type?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#upgrade_version Group#upgrade_version}
  */
  readonly upgradeVersion?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#worker_count Group#worker_count}
  */
  readonly workerCount?: number;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#worker_remote_access Group#worker_remote_access}
  */
  readonly workerRemoteAccess?: boolean | cdktf.IResolvable;
}
export interface GroupCloud {
  /**
  * must be one of ["aws", "azure"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#provider Group#provider}
  */
  readonly provider?: string;
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#region Group#region}
  */
  readonly region?: string;
}

export function groupCloudToTerraform(struct?: GroupCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function groupCloudToHclTerraform(struct?: GroupCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._region = value.region;
    }
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface GroupGitLog {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#author_email Group#author_email}
  */
  readonly authorEmail?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#author_name Group#author_name}
  */
  readonly authorName?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#date Group#date}
  */
  readonly date: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#hash Group#hash}
  */
  readonly hash: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#message Group#message}
  */
  readonly message: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#short Group#short}
  */
  readonly short: string;
}

export function groupGitLogToTerraform(struct?: GroupGitLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author_email: cdktf.stringToTerraform(struct!.authorEmail),
    author_name: cdktf.stringToTerraform(struct!.authorName),
    date: cdktf.stringToTerraform(struct!.date),
    hash: cdktf.stringToTerraform(struct!.hash),
    message: cdktf.stringToTerraform(struct!.message),
    short: cdktf.stringToTerraform(struct!.short),
  }
}


export function groupGitLogToHclTerraform(struct?: GroupGitLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author_email: {
      value: cdktf.stringToHclTerraform(struct!.authorEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    author_name: {
      value: cdktf.stringToHclTerraform(struct!.authorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short: {
      value: cdktf.stringToHclTerraform(struct!.short),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupGitLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupGitLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorEmail = this._authorEmail;
    }
    if (this._authorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorName = this._authorName;
    }
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._short !== undefined) {
      hasAnyValues = true;
      internalValueResult.short = this._short;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGitLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorEmail = undefined;
      this._authorName = undefined;
      this._date = undefined;
      this._hash = undefined;
      this._message = undefined;
      this._short = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorEmail = value.authorEmail;
      this._authorName = value.authorName;
      this._date = value.date;
      this._hash = value.hash;
      this._message = value.message;
      this._short = value.short;
    }
  }

  // author_email - computed: false, optional: true, required: false
  private _authorEmail?: string; 
  public get authorEmail() {
    return this.getStringAttribute('author_email');
  }
  public set authorEmail(value: string) {
    this._authorEmail = value;
  }
  public resetAuthorEmail() {
    this._authorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorEmailInput() {
    return this._authorEmail;
  }

  // author_name - computed: false, optional: true, required: false
  private _authorName?: string; 
  public get authorName() {
    return this.getStringAttribute('author_name');
  }
  public set authorName(value: string) {
    this._authorName = value;
  }
  public resetAuthorName() {
    this._authorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorNameInput() {
    return this._authorName;
  }

  // date - computed: false, optional: false, required: true
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // short - computed: false, optional: false, required: true
  private _short?: string; 
  public get short() {
    return this.getStringAttribute('short');
  }
  public set short(value: string) {
    this._short = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortInput() {
    return this._short;
  }
}

export class GroupGitLogList extends cdktf.ComplexList {
  public internalValue? : GroupGitLog[] | cdktf.IResolvable

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
  public get(index: number): GroupGitLogOutputReference {
    return new GroupGitLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupGit {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#commit Group#commit}
  */
  readonly commit?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#local_changes Group#local_changes}
  */
  readonly localChanges?: number;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#log Group#log}
  */
  readonly log?: GroupGitLog[] | cdktf.IResolvable;
}

export function groupGitToTerraform(struct?: GroupGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit: cdktf.stringToTerraform(struct!.commit),
    local_changes: cdktf.numberToTerraform(struct!.localChanges),
    log: cdktf.listMapper(groupGitLogToTerraform, false)(struct!.log),
  }
}


export function groupGitToHclTerraform(struct?: GroupGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_changes: {
      value: cdktf.numberToHclTerraform(struct!.localChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.listMapperHcl(groupGitLogToHclTerraform, false)(struct!.log),
      isBlock: true,
      type: "list",
      storageClassType: "GroupGitLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupGit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._localChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.localChanges = this._localChanges;
    }
    if (this._log?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupGit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commit = undefined;
      this._localChanges = undefined;
      this._log.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commit = value.commit;
      this._localChanges = value.localChanges;
      this._log.internalValue = value.log;
    }
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // local_changes - computed: false, optional: true, required: false
  private _localChanges?: number; 
  public get localChanges() {
    return this.getNumberAttribute('local_changes');
  }
  public set localChanges(value: number) {
    this._localChanges = value;
  }
  public resetLocalChanges() {
    this._localChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localChangesInput() {
    return this._localChanges;
  }

  // log - computed: false, optional: true, required: false
  private _log = new GroupGitLogList(this, "log", false);
  public get log() {
    return this._log;
  }
  public putLog(value: GroupGitLog[] | cdktf.IResolvable) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }
}
export interface GroupLookupDeploymentsLookups {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#deployed_version Group#deployed_version}
  */
  readonly deployedVersion?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#file Group#file}
  */
  readonly file: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#version Group#version}
  */
  readonly version?: string;
}

export function groupLookupDeploymentsLookupsToTerraform(struct?: GroupLookupDeploymentsLookups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployed_version: cdktf.stringToTerraform(struct!.deployedVersion),
    file: cdktf.stringToTerraform(struct!.file),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function groupLookupDeploymentsLookupsToHclTerraform(struct?: GroupLookupDeploymentsLookups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployed_version: {
      value: cdktf.stringToHclTerraform(struct!.deployedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupLookupDeploymentsLookupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupLookupDeploymentsLookups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployedVersion = this._deployedVersion;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupLookupDeploymentsLookups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployedVersion = undefined;
      this._file = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployedVersion = value.deployedVersion;
      this._file = value.file;
      this._version = value.version;
    }
  }

  // deployed_version - computed: false, optional: true, required: false
  private _deployedVersion?: string; 
  public get deployedVersion() {
    return this.getStringAttribute('deployed_version');
  }
  public set deployedVersion(value: string) {
    this._deployedVersion = value;
  }
  public resetDeployedVersion() {
    this._deployedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployedVersionInput() {
    return this._deployedVersion;
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class GroupLookupDeploymentsLookupsList extends cdktf.ComplexList {
  public internalValue? : GroupLookupDeploymentsLookups[] | cdktf.IResolvable

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
  public get(index: number): GroupLookupDeploymentsLookupsOutputReference {
    return new GroupLookupDeploymentsLookupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupLookupDeployments {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#context Group#context}
  */
  readonly context: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#lookups Group#lookups}
  */
  readonly lookups: GroupLookupDeploymentsLookups[] | cdktf.IResolvable;
}

export function groupLookupDeploymentsToTerraform(struct?: GroupLookupDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    lookups: cdktf.listMapper(groupLookupDeploymentsLookupsToTerraform, false)(struct!.lookups),
  }
}


export function groupLookupDeploymentsToHclTerraform(struct?: GroupLookupDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookups: {
      value: cdktf.listMapperHcl(groupLookupDeploymentsLookupsToHclTerraform, false)(struct!.lookups),
      isBlock: true,
      type: "list",
      storageClassType: "GroupLookupDeploymentsLookupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupLookupDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupLookupDeployments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._lookups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookups = this._lookups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupLookupDeployments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._lookups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._lookups.internalValue = value.lookups;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // lookups - computed: false, optional: false, required: true
  private _lookups = new GroupLookupDeploymentsLookupsList(this, "lookups", false);
  public get lookups() {
    return this._lookups;
  }
  public putLookups(value: GroupLookupDeploymentsLookups[] | cdktf.IResolvable) {
    this._lookups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupsInput() {
    return this._lookups.internalValue;
  }
}

export class GroupLookupDeploymentsList extends cdktf.ComplexList {
  public internalValue? : GroupLookupDeployments[] | cdktf.IResolvable

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
  public get(index: number): GroupLookupDeploymentsOutputReference {
    return new GroupLookupDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group criblio_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.18.21/docs/resources/group criblio_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_group',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.18.21',
        providerVersionConstraint: '1.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud.internalValue = config.cloud;
    this._configVersion = config.configVersion;
    this._deployingWorkerCount = config.deployingWorkerCount;
    this._description = config.description;
    this._estimatedIngestRate = config.estimatedIngestRate;
    this._git.internalValue = config.git;
    this._id = config.id;
    this._incompatibleWorkerCount = config.incompatibleWorkerCount;
    this._inherits = config.inherits;
    this._isFleet = config.isFleet;
    this._isSearch = config.isSearch;
    this._lookupDeployments.internalValue = config.lookupDeployments;
    this._name = config.name;
    this._onPrem = config.onPrem;
    this._product = config.product;
    this._provisioned = config.provisioned;
    this._streamtags = config.streamtags;
    this._tags = config.tags;
    this._type = config.type;
    this._upgradeVersion = config.upgradeVersion;
    this._workerCount = config.workerCount;
    this._workerRemoteAccess = config.workerRemoteAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud - computed: true, optional: true, required: false
  private _cloud = new GroupCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: GroupCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // config_version - computed: false, optional: true, required: false
  private _configVersion?: string; 
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }
  public set configVersion(value: string) {
    this._configVersion = value;
  }
  public resetConfigVersion() {
    this._configVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVersionInput() {
    return this._configVersion;
  }

  // deploying_worker_count - computed: false, optional: true, required: false
  private _deployingWorkerCount?: number; 
  public get deployingWorkerCount() {
    return this.getNumberAttribute('deploying_worker_count');
  }
  public set deployingWorkerCount(value: number) {
    this._deployingWorkerCount = value;
  }
  public resetDeployingWorkerCount() {
    this._deployingWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployingWorkerCountInput() {
    return this._deployingWorkerCount;
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

  // estimated_ingest_rate - computed: true, optional: true, required: false
  private _estimatedIngestRate?: number; 
  public get estimatedIngestRate() {
    return this.getNumberAttribute('estimated_ingest_rate');
  }
  public set estimatedIngestRate(value: number) {
    this._estimatedIngestRate = value;
  }
  public resetEstimatedIngestRate() {
    this._estimatedIngestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedIngestRateInput() {
    return this._estimatedIngestRate;
  }

  // git - computed: false, optional: true, required: false
  private _git = new GroupGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: GroupGit) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // incompatible_worker_count - computed: false, optional: true, required: false
  private _incompatibleWorkerCount?: number; 
  public get incompatibleWorkerCount() {
    return this.getNumberAttribute('incompatible_worker_count');
  }
  public set incompatibleWorkerCount(value: number) {
    this._incompatibleWorkerCount = value;
  }
  public resetIncompatibleWorkerCount() {
    this._incompatibleWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incompatibleWorkerCountInput() {
    return this._incompatibleWorkerCount;
  }

  // inherits - computed: false, optional: true, required: false
  private _inherits?: string; 
  public get inherits() {
    return this.getStringAttribute('inherits');
  }
  public set inherits(value: string) {
    this._inherits = value;
  }
  public resetInherits() {
    this._inherits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritsInput() {
    return this._inherits;
  }

  // is_fleet - computed: true, optional: true, required: false
  private _isFleet?: boolean | cdktf.IResolvable; 
  public get isFleet() {
    return this.getBooleanAttribute('is_fleet');
  }
  public set isFleet(value: boolean | cdktf.IResolvable) {
    this._isFleet = value;
  }
  public resetIsFleet() {
    this._isFleet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFleetInput() {
    return this._isFleet;
  }

  // is_search - computed: false, optional: true, required: false
  private _isSearch?: boolean | cdktf.IResolvable; 
  public get isSearch() {
    return this.getBooleanAttribute('is_search');
  }
  public set isSearch(value: boolean | cdktf.IResolvable) {
    this._isSearch = value;
  }
  public resetIsSearch() {
    this._isSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSearchInput() {
    return this._isSearch;
  }

  // lookup_deployments - computed: false, optional: true, required: false
  private _lookupDeployments = new GroupLookupDeploymentsList(this, "lookup_deployments", false);
  public get lookupDeployments() {
    return this._lookupDeployments;
  }
  public putLookupDeployments(value: GroupLookupDeployments[] | cdktf.IResolvable) {
    this._lookupDeployments.internalValue = value;
  }
  public resetLookupDeployments() {
    this._lookupDeployments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupDeploymentsInput() {
    return this._lookupDeployments.internalValue;
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

  // on_prem - computed: true, optional: true, required: false
  private _onPrem?: boolean | cdktf.IResolvable; 
  public get onPrem() {
    return this.getBooleanAttribute('on_prem');
  }
  public set onPrem(value: boolean | cdktf.IResolvable) {
    this._onPrem = value;
  }
  public resetOnPrem() {
    this._onPrem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremInput() {
    return this._onPrem;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // provisioned - computed: true, optional: true, required: false
  private _provisioned?: boolean | cdktf.IResolvable; 
  public get provisioned() {
    return this.getBooleanAttribute('provisioned');
  }
  public set provisioned(value: boolean | cdktf.IResolvable) {
    this._provisioned = value;
  }
  public resetProvisioned() {
    this._provisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedInput() {
    return this._provisioned;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // upgrade_version - computed: false, optional: true, required: false
  private _upgradeVersion?: string; 
  public get upgradeVersion() {
    return this.getStringAttribute('upgrade_version');
  }
  public set upgradeVersion(value: string) {
    this._upgradeVersion = value;
  }
  public resetUpgradeVersion() {
    this._upgradeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeVersionInput() {
    return this._upgradeVersion;
  }

  // worker_count - computed: false, optional: true, required: false
  private _workerCount?: number; 
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
  public set workerCount(value: number) {
    this._workerCount = value;
  }
  public resetWorkerCount() {
    this._workerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerCountInput() {
    return this._workerCount;
  }

  // worker_remote_access - computed: true, optional: true, required: false
  private _workerRemoteAccess?: boolean | cdktf.IResolvable; 
  public get workerRemoteAccess() {
    return this.getBooleanAttribute('worker_remote_access');
  }
  public set workerRemoteAccess(value: boolean | cdktf.IResolvable) {
    this._workerRemoteAccess = value;
  }
  public resetWorkerRemoteAccess() {
    this._workerRemoteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerRemoteAccessInput() {
    return this._workerRemoteAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: groupCloudToTerraform(this._cloud.internalValue),
      config_version: cdktf.stringToTerraform(this._configVersion),
      deploying_worker_count: cdktf.numberToTerraform(this._deployingWorkerCount),
      description: cdktf.stringToTerraform(this._description),
      estimated_ingest_rate: cdktf.numberToTerraform(this._estimatedIngestRate),
      git: groupGitToTerraform(this._git.internalValue),
      id: cdktf.stringToTerraform(this._id),
      incompatible_worker_count: cdktf.numberToTerraform(this._incompatibleWorkerCount),
      inherits: cdktf.stringToTerraform(this._inherits),
      is_fleet: cdktf.booleanToTerraform(this._isFleet),
      is_search: cdktf.booleanToTerraform(this._isSearch),
      lookup_deployments: cdktf.listMapper(groupLookupDeploymentsToTerraform, false)(this._lookupDeployments.internalValue),
      name: cdktf.stringToTerraform(this._name),
      on_prem: cdktf.booleanToTerraform(this._onPrem),
      product: cdktf.stringToTerraform(this._product),
      provisioned: cdktf.booleanToTerraform(this._provisioned),
      streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streamtags),
      tags: cdktf.stringToTerraform(this._tags),
      type: cdktf.stringToTerraform(this._type),
      upgrade_version: cdktf.stringToTerraform(this._upgradeVersion),
      worker_count: cdktf.numberToTerraform(this._workerCount),
      worker_remote_access: cdktf.booleanToTerraform(this._workerRemoteAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: groupCloudToHclTerraform(this._cloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupCloud",
      },
      config_version: {
        value: cdktf.stringToHclTerraform(this._configVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploying_worker_count: {
        value: cdktf.numberToHclTerraform(this._deployingWorkerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      estimated_ingest_rate: {
        value: cdktf.numberToHclTerraform(this._estimatedIngestRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      git: {
        value: groupGitToHclTerraform(this._git.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupGit",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incompatible_worker_count: {
        value: cdktf.numberToHclTerraform(this._incompatibleWorkerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inherits: {
        value: cdktf.stringToHclTerraform(this._inherits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_fleet: {
        value: cdktf.booleanToHclTerraform(this._isFleet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_search: {
        value: cdktf.booleanToHclTerraform(this._isSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lookup_deployments: {
        value: cdktf.listMapperHcl(groupLookupDeploymentsToHclTerraform, false)(this._lookupDeployments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupLookupDeploymentsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_prem: {
        value: cdktf.booleanToHclTerraform(this._onPrem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned: {
        value: cdktf.booleanToHclTerraform(this._provisioned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      streamtags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._streamtags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_version: {
        value: cdktf.stringToHclTerraform(this._upgradeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_count: {
        value: cdktf.numberToHclTerraform(this._workerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_remote_access: {
        value: cdktf.booleanToHclTerraform(this._workerRemoteAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
