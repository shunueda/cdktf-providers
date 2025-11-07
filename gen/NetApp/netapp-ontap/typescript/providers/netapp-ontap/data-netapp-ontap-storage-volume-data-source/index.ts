// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_volume_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapStorageVolumeDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_volume_data_source#cx_profile_name DataNetappOntapStorageVolumeDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * The name of the volume to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_volume_data_source#name DataNetappOntapStorageVolumeDataSource#name}
  */
  readonly name: string;
  /**
  * Name of the svm to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_volume_data_source#svm_name DataNetappOntapStorageVolumeDataSource#svm_name}
  */
  readonly svmName: string;
}
export interface DataNetappOntapStorageVolumeDataSourceAggregates {
}

export function dataNetappOntapStorageVolumeDataSourceAggregatesToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceAggregates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceAggregatesToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceAggregates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceAggregatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceAggregates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceAggregates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNetappOntapStorageVolumeDataSourceAggregatesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapStorageVolumeDataSourceAggregatesOutputReference {
    return new DataNetappOntapStorageVolumeDataSourceAggregatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetappOntapStorageVolumeDataSourceAnalytics {
}

export function dataNetappOntapStorageVolumeDataSourceAnalyticsToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceAnalyticsToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataNetappOntapStorageVolumeDataSourceAutosize {
}

export function dataNetappOntapStorageVolumeDataSourceAutosizeToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceAutosize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceAutosizeToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceAutosize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceAutosizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceAutosize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceAutosize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grow_threshold - computed: true, optional: false, required: false
  public get growThreshold() {
    return this.getNumberAttribute('grow_threshold');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // shrink_threshold - computed: true, optional: false, required: false
  public get shrinkThreshold() {
    return this.getNumberAttribute('shrink_threshold');
  }

  // size_unit - computed: true, optional: false, required: false
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
}
export interface DataNetappOntapStorageVolumeDataSourceEfficiency {
}

export function dataNetappOntapStorageVolumeDataSourceEfficiencyToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceEfficiency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceEfficiencyToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceEfficiency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceEfficiencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceEfficiency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceEfficiency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compaction - computed: true, optional: false, required: false
  public get compaction() {
    return this.getStringAttribute('compaction');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // dedupe - computed: true, optional: false, required: false
  public get dedupe() {
    return this.getStringAttribute('dedupe');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
}
export interface DataNetappOntapStorageVolumeDataSourceNas {
}

export function dataNetappOntapStorageVolumeDataSourceNasToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceNas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceNasToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceNas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceNasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceNas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceNas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_policy_name - computed: true, optional: false, required: false
  public get exportPolicyName() {
    return this.getStringAttribute('export_policy_name');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // junction_path - computed: true, optional: false, required: false
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
  }

  // security_style - computed: true, optional: false, required: false
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }

  // unix_permissions - computed: true, optional: false, required: false
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
}
export interface DataNetappOntapStorageVolumeDataSourceSnaplock {
}

export function dataNetappOntapStorageVolumeDataSourceSnaplockToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceSnaplock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceSnaplockToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceSnaplock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceSnaplockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceSnaplock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceSnaplock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataNetappOntapStorageVolumeDataSourceSpaceLogicalSpace {
}

export function dataNetappOntapStorageVolumeDataSourceSpaceLogicalSpaceToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceSpaceLogicalSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceSpaceLogicalSpaceToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceSpaceLogicalSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceSpaceLogicalSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceSpaceLogicalSpace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceSpaceLogicalSpace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforcement - computed: true, optional: false, required: false
  public get enforcement() {
    return this.getBooleanAttribute('enforcement');
  }

  // reporting - computed: true, optional: false, required: false
  public get reporting() {
    return this.getBooleanAttribute('reporting');
  }
}
export interface DataNetappOntapStorageVolumeDataSourceSpace {
}

export function dataNetappOntapStorageVolumeDataSourceSpaceToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceSpaceToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceSpace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceSpace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logical_space - computed: true, optional: false, required: false
  private _logicalSpace = new DataNetappOntapStorageVolumeDataSourceSpaceLogicalSpaceOutputReference(this, "logical_space");
  public get logicalSpace() {
    return this._logicalSpace;
  }

  // percent_snapshot_space - computed: true, optional: false, required: false
  public get percentSnapshotSpace() {
    return this.getNumberAttribute('percent_snapshot_space');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // size_unit - computed: true, optional: false, required: false
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
}
export interface DataNetappOntapStorageVolumeDataSourceTiering {
}

export function dataNetappOntapStorageVolumeDataSourceTieringToTerraform(struct?: DataNetappOntapStorageVolumeDataSourceTiering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageVolumeDataSourceTieringToHclTerraform(struct?: DataNetappOntapStorageVolumeDataSourceTiering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageVolumeDataSourceTieringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageVolumeDataSourceTiering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageVolumeDataSourceTiering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // minimum_cooling_days - computed: true, optional: false, required: false
  public get minimumCoolingDays() {
    return this.getNumberAttribute('minimum_cooling_days');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_volume_data_source netapp-ontap_storage_volume_data_source}
*/
export class DataNetappOntapStorageVolumeDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_storage_volume_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapStorageVolumeDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapStorageVolumeDataSource to import
  * @param importFromId The id of the existing DataNetappOntapStorageVolumeDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_volume_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapStorageVolumeDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_storage_volume_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_volume_data_source netapp-ontap_storage_volume_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapStorageVolumeDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapStorageVolumeDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_storage_volume_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._name = config.name;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregates - computed: true, optional: false, required: false
  private _aggregates = new DataNetappOntapStorageVolumeDataSourceAggregatesList(this, "aggregates", false);
  public get aggregates() {
    return this._aggregates;
  }

  // analytics - computed: true, optional: false, required: false
  private _analytics = new DataNetappOntapStorageVolumeDataSourceAnalyticsOutputReference(this, "analytics");
  public get analytics() {
    return this._analytics;
  }

  // autosize - computed: true, optional: false, required: false
  private _autosize = new DataNetappOntapStorageVolumeDataSourceAutosizeOutputReference(this, "autosize");
  public get autosize() {
    return this._autosize;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // efficiency - computed: true, optional: false, required: false
  private _efficiency = new DataNetappOntapStorageVolumeDataSourceEfficiencyOutputReference(this, "efficiency");
  public get efficiency() {
    return this._efficiency;
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
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

  // nas - computed: true, optional: false, required: false
  private _nas = new DataNetappOntapStorageVolumeDataSourceNasOutputReference(this, "nas");
  public get nas() {
    return this._nas;
  }

  // qos_policy_group - computed: true, optional: false, required: false
  public get qosPolicyGroup() {
    return this.getStringAttribute('qos_policy_group');
  }

  // snaplock - computed: true, optional: false, required: false
  private _snaplock = new DataNetappOntapStorageVolumeDataSourceSnaplockOutputReference(this, "snaplock");
  public get snaplock() {
    return this._snaplock;
  }

  // snapshot_locking_enabled - computed: true, optional: false, required: false
  public get snapshotLockingEnabled() {
    return this.getBooleanAttribute('snapshot_locking_enabled');
  }

  // snapshot_policy - computed: true, optional: false, required: false
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }

  // space - computed: true, optional: false, required: false
  private _space = new DataNetappOntapStorageVolumeDataSourceSpaceOutputReference(this, "space");
  public get space() {
    return this._space;
  }

  // space_guarantee - computed: true, optional: false, required: false
  public get spaceGuarantee() {
    return this.getStringAttribute('space_guarantee');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // tiering - computed: true, optional: false, required: false
  private _tiering = new DataNetappOntapStorageVolumeDataSourceTieringOutputReference(this, "tiering");
  public get tiering() {
    return this._tiering;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
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
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
