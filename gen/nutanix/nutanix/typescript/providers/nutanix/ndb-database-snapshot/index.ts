// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbDatabaseSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#expiry_date_timezone NdbDatabaseSnapshot#expiry_date_timezone}
  */
  readonly expiryDateTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#name NdbDatabaseSnapshot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#remove_schedule_in_days NdbDatabaseSnapshot#remove_schedule_in_days}
  */
  readonly removeScheduleInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#replicate_to_clusters NdbDatabaseSnapshot#replicate_to_clusters}
  */
  readonly replicateToClusters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#time_machine_id NdbDatabaseSnapshot#time_machine_id}
  */
  readonly timeMachineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#time_machine_name NdbDatabaseSnapshot#time_machine_name}
  */
  readonly timeMachineName?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#tags NdbDatabaseSnapshot#tags}
  */
  readonly tags?: NdbDatabaseSnapshotTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#timeouts NdbDatabaseSnapshot#timeouts}
  */
  readonly timeouts?: NdbDatabaseSnapshotTimeouts;
}
export interface NdbDatabaseSnapshotLcmConfigExpiryDetails {
}

export function ndbDatabaseSnapshotLcmConfigExpiryDetailsToTerraform(struct?: NdbDatabaseSnapshotLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseSnapshotLcmConfigExpiryDetailsToHclTerraform(struct?: NdbDatabaseSnapshotLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseSnapshotLcmConfigExpiryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseSnapshotLcmConfigExpiryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseSnapshotLcmConfigExpiryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_database - computed: true, optional: false, required: false
  public get deleteDatabase() {
    return this.getBooleanAttribute('delete_database');
  }

  // delete_time_machine - computed: true, optional: false, required: false
  public get deleteTimeMachine() {
    return this.getBooleanAttribute('delete_time_machine');
  }

  // delete_vm - computed: true, optional: false, required: false
  public get deleteVm() {
    return this.getBooleanAttribute('delete_vm');
  }

  // effective_timestamp - computed: true, optional: false, required: false
  public get effectiveTimestamp() {
    return this.getStringAttribute('effective_timestamp');
  }

  // expire_in_days - computed: true, optional: false, required: false
  public get expireInDays() {
    return this.getNumberAttribute('expire_in_days');
  }

  // expiry_date_timezone - computed: true, optional: false, required: false
  public get expiryDateTimezone() {
    return this.getStringAttribute('expiry_date_timezone');
  }

  // expiry_timestamp - computed: true, optional: false, required: false
  public get expiryTimestamp() {
    return this.getStringAttribute('expiry_timestamp');
  }

  // remind_before_in_days - computed: true, optional: false, required: false
  public get remindBeforeInDays() {
    return this.getNumberAttribute('remind_before_in_days');
  }

  // user_created - computed: true, optional: false, required: false
  public get userCreated() {
    return this.getBooleanAttribute('user_created');
  }
}

export class NdbDatabaseSnapshotLcmConfigExpiryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseSnapshotLcmConfigExpiryDetailsOutputReference {
    return new NdbDatabaseSnapshotLcmConfigExpiryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseSnapshotLcmConfigPostDeleteCommand {
}

export function ndbDatabaseSnapshotLcmConfigPostDeleteCommandToTerraform(struct?: NdbDatabaseSnapshotLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseSnapshotLcmConfigPostDeleteCommandToHclTerraform(struct?: NdbDatabaseSnapshotLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseSnapshotLcmConfigPostDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseSnapshotLcmConfigPostDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseSnapshotLcmConfigPostDeleteCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }
}

export class NdbDatabaseSnapshotLcmConfigPostDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseSnapshotLcmConfigPostDeleteCommandOutputReference {
    return new NdbDatabaseSnapshotLcmConfigPostDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseSnapshotLcmConfigPreDeleteCommand {
}

export function ndbDatabaseSnapshotLcmConfigPreDeleteCommandToTerraform(struct?: NdbDatabaseSnapshotLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseSnapshotLcmConfigPreDeleteCommandToHclTerraform(struct?: NdbDatabaseSnapshotLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseSnapshotLcmConfigPreDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseSnapshotLcmConfigPreDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseSnapshotLcmConfigPreDeleteCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }
}

export class NdbDatabaseSnapshotLcmConfigPreDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseSnapshotLcmConfigPreDeleteCommandOutputReference {
    return new NdbDatabaseSnapshotLcmConfigPreDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseSnapshotLcmConfigRefreshDetails {
}

export function ndbDatabaseSnapshotLcmConfigRefreshDetailsToTerraform(struct?: NdbDatabaseSnapshotLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseSnapshotLcmConfigRefreshDetailsToHclTerraform(struct?: NdbDatabaseSnapshotLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseSnapshotLcmConfigRefreshDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseSnapshotLcmConfigRefreshDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseSnapshotLcmConfigRefreshDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_refresh_date - computed: true, optional: false, required: false
  public get lastRefreshDate() {
    return this.getStringAttribute('last_refresh_date');
  }

  // next_refresh_date - computed: true, optional: false, required: false
  public get nextRefreshDate() {
    return this.getStringAttribute('next_refresh_date');
  }

  // refresh_date_timezone - computed: true, optional: false, required: false
  public get refreshDateTimezone() {
    return this.getStringAttribute('refresh_date_timezone');
  }

  // refresh_in_days - computed: true, optional: false, required: false
  public get refreshInDays() {
    return this.getNumberAttribute('refresh_in_days');
  }

  // refresh_in_hours - computed: true, optional: false, required: false
  public get refreshInHours() {
    return this.getNumberAttribute('refresh_in_hours');
  }

  // refresh_in_months - computed: true, optional: false, required: false
  public get refreshInMonths() {
    return this.getNumberAttribute('refresh_in_months');
  }

  // refresh_time - computed: true, optional: false, required: false
  public get refreshTime() {
    return this.getStringAttribute('refresh_time');
  }
}

export class NdbDatabaseSnapshotLcmConfigRefreshDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseSnapshotLcmConfigRefreshDetailsOutputReference {
    return new NdbDatabaseSnapshotLcmConfigRefreshDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseSnapshotLcmConfig {
}

export function ndbDatabaseSnapshotLcmConfigToTerraform(struct?: NdbDatabaseSnapshotLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseSnapshotLcmConfigToHclTerraform(struct?: NdbDatabaseSnapshotLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseSnapshotLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseSnapshotLcmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseSnapshotLcmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiry_details - computed: true, optional: false, required: false
  private _expiryDetails = new NdbDatabaseSnapshotLcmConfigExpiryDetailsList(this, "expiry_details", false);
  public get expiryDetails() {
    return this._expiryDetails;
  }

  // post_delete_command - computed: true, optional: false, required: false
  private _postDeleteCommand = new NdbDatabaseSnapshotLcmConfigPostDeleteCommandList(this, "post_delete_command", false);
  public get postDeleteCommand() {
    return this._postDeleteCommand;
  }

  // pre_delete_command - computed: true, optional: false, required: false
  private _preDeleteCommand = new NdbDatabaseSnapshotLcmConfigPreDeleteCommandList(this, "pre_delete_command", false);
  public get preDeleteCommand() {
    return this._preDeleteCommand;
  }

  // refresh_details - computed: true, optional: false, required: false
  private _refreshDetails = new NdbDatabaseSnapshotLcmConfigRefreshDetailsList(this, "refresh_details", false);
  public get refreshDetails() {
    return this._refreshDetails;
  }
}

export class NdbDatabaseSnapshotLcmConfigList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseSnapshotLcmConfigOutputReference {
    return new NdbDatabaseSnapshotLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseSnapshotProperties {
}

export function ndbDatabaseSnapshotPropertiesToTerraform(struct?: NdbDatabaseSnapshotProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbDatabaseSnapshotPropertiesToHclTerraform(struct?: NdbDatabaseSnapshotProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbDatabaseSnapshotPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseSnapshotProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseSnapshotProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getBooleanAttribute('secure');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbDatabaseSnapshotPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbDatabaseSnapshotPropertiesOutputReference {
    return new NdbDatabaseSnapshotPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseSnapshotTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#tag_id NdbDatabaseSnapshot#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#tag_name NdbDatabaseSnapshot#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#value NdbDatabaseSnapshot#value}
  */
  readonly value?: string;
}

export function ndbDatabaseSnapshotTagsToTerraform(struct?: NdbDatabaseSnapshotTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_id: cdktf.stringToTerraform(struct!.tagId),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbDatabaseSnapshotTagsToHclTerraform(struct?: NdbDatabaseSnapshotTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_id: {
      value: cdktf.stringToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
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

export class NdbDatabaseSnapshotTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbDatabaseSnapshotTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseSnapshotTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagId = undefined;
      this._tagName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagId = value.tagId;
      this._tagName = value.tagName;
      this._value = value.value;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // tag_id - computed: true, optional: true, required: false
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  public resetTagId() {
    this._tagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
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

export class NdbDatabaseSnapshotTagsList extends cdktf.ComplexList {
  public internalValue? : NdbDatabaseSnapshotTags[] | cdktf.IResolvable

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
  public get(index: number): NdbDatabaseSnapshotTagsOutputReference {
    return new NdbDatabaseSnapshotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbDatabaseSnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#create NdbDatabaseSnapshot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#delete NdbDatabaseSnapshot#delete}
  */
  readonly delete?: string;
}

export function ndbDatabaseSnapshotTimeoutsToTerraform(struct?: NdbDatabaseSnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ndbDatabaseSnapshotTimeoutsToHclTerraform(struct?: NdbDatabaseSnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbDatabaseSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NdbDatabaseSnapshotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbDatabaseSnapshotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot nutanix_ndb_database_snapshot}
*/
export class NdbDatabaseSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_database_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbDatabaseSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbDatabaseSnapshot to import
  * @param importFromId The id of the existing NdbDatabaseSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbDatabaseSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_database_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_database_snapshot nutanix_ndb_database_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbDatabaseSnapshotConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NdbDatabaseSnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_database_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expiryDateTimezone = config.expiryDateTimezone;
    this._name = config.name;
    this._removeScheduleInDays = config.removeScheduleInDays;
    this._replicateToClusters = config.replicateToClusters;
    this._timeMachineId = config.timeMachineId;
    this._timeMachineName = config.timeMachineName;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_info_version - computed: true, optional: false, required: false
  public get appInfoVersion() {
    return this.getStringAttribute('app_info_version');
  }

  // applicable_types - computed: true, optional: false, required: false
  public get applicableTypes() {
    return this.getListAttribute('applicable_types');
  }

  // database_node_id - computed: true, optional: false, required: false
  public get databaseNodeId() {
    return this.getStringAttribute('database_node_id');
  }

  // database_snapshot - computed: true, optional: false, required: false
  public get databaseSnapshot() {
    return this.getBooleanAttribute('database_snapshot');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // dbserver_id - computed: true, optional: false, required: false
  public get dbserverId() {
    return this.getStringAttribute('dbserver_id');
  }

  // dbserver_ip - computed: true, optional: false, required: false
  public get dbserverIp() {
    return this.getStringAttribute('dbserver_ip');
  }

  // dbserver_name - computed: true, optional: false, required: false
  public get dbserverName() {
    return this.getStringAttribute('dbserver_name');
  }

  // dbserver_storage_metadata_version - computed: true, optional: false, required: false
  public get dbserverStorageMetadataVersion() {
    return this.getNumberAttribute('dbserver_storage_metadata_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expiry_date_timezone - computed: false, optional: true, required: false
  private _expiryDateTimezone?: string; 
  public get expiryDateTimezone() {
    return this.getStringAttribute('expiry_date_timezone');
  }
  public set expiryDateTimezone(value: string) {
    this._expiryDateTimezone = value;
  }
  public resetExpiryDateTimezone() {
    this._expiryDateTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDateTimezoneInput() {
    return this._expiryDateTimezone;
  }

  // from_timestamp - computed: true, optional: false, required: false
  public get fromTimestamp() {
    return this.getStringAttribute('from_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lcm_config - computed: true, optional: false, required: false
  private _lcmConfig = new NdbDatabaseSnapshotLcmConfigList(this, "lcm_config", false);
  public get lcmConfig() {
    return this._lcmConfig;
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

  // nx_cluster_id - computed: true, optional: false, required: false
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }

  // parent_snapshot - computed: true, optional: false, required: false
  public get parentSnapshot() {
    return this.getBooleanAttribute('parent_snapshot');
  }

  // parent_snapshot_id - computed: true, optional: false, required: false
  public get parentSnapshotId() {
    return this.getStringAttribute('parent_snapshot_id');
  }

  // processed - computed: true, optional: false, required: false
  public get processed() {
    return this.getBooleanAttribute('processed');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbDatabaseSnapshotPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }

  // remove_schedule_in_days - computed: false, optional: true, required: false
  private _removeScheduleInDays?: number; 
  public get removeScheduleInDays() {
    return this.getNumberAttribute('remove_schedule_in_days');
  }
  public set removeScheduleInDays(value: number) {
    this._removeScheduleInDays = value;
  }
  public resetRemoveScheduleInDays() {
    this._removeScheduleInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeScheduleInDaysInput() {
    return this._removeScheduleInDays;
  }

  // replicate_to_clusters - computed: false, optional: true, required: false
  private _replicateToClusters?: string[]; 
  public get replicateToClusters() {
    return this.getListAttribute('replicate_to_clusters');
  }
  public set replicateToClusters(value: string[]) {
    this._replicateToClusters = value;
  }
  public resetReplicateToClusters() {
    this._replicateToClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateToClustersInput() {
    return this._replicateToClusters;
  }

  // replicated_snapshots - computed: true, optional: false, required: false
  public get replicatedSnapshots() {
    return this.getListAttribute('replicated_snapshots');
  }

  // santized - computed: true, optional: false, required: false
  public get santized() {
    return this.getBooleanAttribute('santized');
  }

  // santized_from_snapshot_id - computed: true, optional: false, required: false
  public get santizedFromSnapshotId() {
    return this.getStringAttribute('santized_from_snapshot_id');
  }

  // santized_snapshots - computed: true, optional: false, required: false
  public get santizedSnapshots() {
    return this.getStringAttribute('santized_snapshots');
  }

  // snapshot_family - computed: true, optional: false, required: false
  public get snapshotFamily() {
    return this.getStringAttribute('snapshot_family');
  }

  // snapshot_size - computed: true, optional: false, required: false
  public get snapshotSize() {
    return this.getNumberAttribute('snapshot_size');
  }

  // snapshot_timestamp - computed: true, optional: false, required: false
  public get snapshotTimestamp() {
    return this.getStringAttribute('snapshot_timestamp');
  }

  // snapshot_timestamp_date - computed: true, optional: false, required: false
  public get snapshotTimestampDate() {
    return this.getNumberAttribute('snapshot_timestamp_date');
  }

  // snapshot_uuid - computed: true, optional: false, required: false
  public get snapshotUuid() {
    return this.getStringAttribute('snapshot_uuid');
  }

  // software_database_snapshot - computed: true, optional: false, required: false
  public get softwareDatabaseSnapshot() {
    return this.getBooleanAttribute('software_database_snapshot');
  }

  // software_snapshot - computed: true, optional: false, required: false
  public get softwareSnapshot() {
    return this.getStringAttribute('software_snapshot');
  }

  // software_snapshot_id - computed: true, optional: false, required: false
  public get softwareSnapshotId() {
    return this.getStringAttribute('software_snapshot_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_machine_id - computed: false, optional: true, required: false
  private _timeMachineId?: string; 
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
  }
  public set timeMachineId(value: string) {
    this._timeMachineId = value;
  }
  public resetTimeMachineId() {
    this._timeMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineIdInput() {
    return this._timeMachineId;
  }

  // time_machine_name - computed: false, optional: true, required: false
  private _timeMachineName?: string; 
  public get timeMachineName() {
    return this.getStringAttribute('time_machine_name');
  }
  public set timeMachineName(value: string) {
    this._timeMachineName = value;
  }
  public resetTimeMachineName() {
    this._timeMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineNameInput() {
    return this._timeMachineName;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // to_timestamp - computed: true, optional: false, required: false
  public get toTimestamp() {
    return this.getStringAttribute('to_timestamp');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NdbDatabaseSnapshotTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbDatabaseSnapshotTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NdbDatabaseSnapshotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NdbDatabaseSnapshotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expiry_date_timezone: cdktf.stringToTerraform(this._expiryDateTimezone),
      name: cdktf.stringToTerraform(this._name),
      remove_schedule_in_days: cdktf.numberToTerraform(this._removeScheduleInDays),
      replicate_to_clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicateToClusters),
      time_machine_id: cdktf.stringToTerraform(this._timeMachineId),
      time_machine_name: cdktf.stringToTerraform(this._timeMachineName),
      tags: cdktf.listMapper(ndbDatabaseSnapshotTagsToTerraform, true)(this._tags.internalValue),
      timeouts: ndbDatabaseSnapshotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expiry_date_timezone: {
        value: cdktf.stringToHclTerraform(this._expiryDateTimezone),
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
      remove_schedule_in_days: {
        value: cdktf.numberToHclTerraform(this._removeScheduleInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replicate_to_clusters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicateToClusters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_machine_id: {
        value: cdktf.stringToHclTerraform(this._timeMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_machine_name: {
        value: cdktf.stringToHclTerraform(this._timeMachineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(ndbDatabaseSnapshotTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbDatabaseSnapshotTagsList",
      },
      timeouts: {
        value: ndbDatabaseSnapshotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NdbDatabaseSnapshotTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
