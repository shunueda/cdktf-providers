// https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/sanitized_db_snapshots
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTessellSanitizedDbSnapshotsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the parent AvailabilityMachine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/sanitized_db_snapshots#availability_machine_id DataTessellSanitizedDbSnapshots#availability_machine_id}
  */
  readonly availabilityMachineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/sanitized_db_snapshots#id DataTessellSanitizedDbSnapshots#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether the backup is captured manually
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/sanitized_db_snapshots#manual DataTessellSanitizedDbSnapshots#manual}
  */
  readonly manual?: boolean | cdktf.IResolvable;
  /**
  * Name of the DB Snapshot to filter with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/sanitized_db_snapshots#name DataTessellSanitizedDbSnapshots#name}
  */
  readonly name?: string;
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegions {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegionsToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegionsToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegionsOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfig {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfig {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_configured_manually - computed: true, optional: false, required: false
  public get availabilityConfiguredManually() {
    return this.getBooleanAttribute('availability_configured_manually');
  }

  // cloud_availability_config - computed: true, optional: false, required: false
  private _cloudAvailabilityConfig = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigCloudAvailabilityConfigList(this, "cloud_availability_config", false);
  public get cloudAvailabilityConfig() {
    return this._cloudAvailabilityConfig;
  }

  // dap_id - computed: true, optional: false, required: false
  public get dapId() {
    return this.getStringAttribute('dap_id');
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegions {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegionsToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegionsToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegionsOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailability {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabases {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabasesToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabasesToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabasesOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfo {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfoToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfoToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sanitization_schedule - computed: true, optional: false, required: false
  public get sanitizationSchedule() {
    return this.getStringAttribute('sanitization_schedule');
  }

  // sanitization_schedule_id - computed: true, optional: false, required: false
  public get sanitizationScheduleId() {
    return this.getStringAttribute('sanitization_schedule_id');
  }

  // sanitization_script - computed: true, optional: false, required: false
  public get sanitizationScript() {
    return this.getStringAttribute('sanitization_script');
  }

  // sanitization_script_id - computed: true, optional: false, required: false
  public get sanitizationScriptId() {
    return this.getStringAttribute('sanitization_script_id');
  }

  // script_version - computed: true, optional: false, required: false
  public get scriptVersion() {
    return this.getStringAttribute('script_version');
  }

  // source_snapshot_id - computed: true, optional: false, required: false
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfoOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWith {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWithToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWithToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWithList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWithOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellSanitizedDbSnapshotsSanitizedDbSnapshots {
}

export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsToTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsToHclTerraform(struct?: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellSanitizedDbSnapshotsSanitizedDbSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_config - computed: true, optional: false, required: false
  private _availabilityConfig = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsAvailabilityConfigList(this, "availability_config", false);
  public get availabilityConfig() {
    return this._availabilityConfig;
  }

  // backup_status - computed: true, optional: false, required: false
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }

  // cloud_availability - computed: true, optional: false, required: false
  private _cloudAvailability = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsCloudAvailabilityList(this, "cloud_availability", false);
  public get cloudAvailability() {
    return this._cloudAvailability;
  }

  // databases - computed: true, optional: false, required: false
  private _databases = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manual - computed: true, optional: false, required: false
  public get manual() {
    return this.getBooleanAttribute('manual');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sanitization_info - computed: true, optional: false, required: false
  private _sanitizationInfo = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSanitizationInfoList(this, "sanitization_info", false);
  public get sanitizationInfo() {
    return this._sanitizationInfo;
  }

  // shared_with - computed: true, optional: false, required: false
  private _sharedWith = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsSharedWithList(this, "shared_with", false);
  public get sharedWith() {
    return this._sharedWith;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_time - computed: true, optional: false, required: false
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsOutputReference {
    return new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/sanitized_db_snapshots tessell_sanitized_db_snapshots}
*/
export class DataTessellSanitizedDbSnapshots extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_sanitized_db_snapshots";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTessellSanitizedDbSnapshots resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTessellSanitizedDbSnapshots to import
  * @param importFromId The id of the existing DataTessellSanitizedDbSnapshots that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/sanitized_db_snapshots#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTessellSanitizedDbSnapshots to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_sanitized_db_snapshots", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.29/docs/data-sources/sanitized_db_snapshots tessell_sanitized_db_snapshots} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTessellSanitizedDbSnapshotsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTessellSanitizedDbSnapshotsConfig) {
    super(scope, id, {
      terraformResourceType: 'tessell_sanitized_db_snapshots',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.29',
        providerVersionConstraint: '0.0.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityMachineId = config.availabilityMachineId;
    this._id = config.id;
    this._manual = config.manual;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_machine_id - computed: false, optional: false, required: true
  private _availabilityMachineId?: string; 
  public get availabilityMachineId() {
    return this.getStringAttribute('availability_machine_id');
  }
  public set availabilityMachineId(value: string) {
    this._availabilityMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityMachineIdInput() {
    return this._availabilityMachineId;
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

  // manual - computed: false, optional: true, required: false
  private _manual?: boolean | cdktf.IResolvable; 
  public get manual() {
    return this.getBooleanAttribute('manual');
  }
  public set manual(value: boolean | cdktf.IResolvable) {
    this._manual = value;
  }
  public resetManual() {
    this._manual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual;
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

  // sanitized_db_snapshots - computed: true, optional: false, required: false
  private _sanitizedDbSnapshots = new DataTessellSanitizedDbSnapshotsSanitizedDbSnapshotsList(this, "sanitized_db_snapshots", false);
  public get sanitizedDbSnapshots() {
    return this._sanitizedDbSnapshots;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_machine_id: cdktf.stringToTerraform(this._availabilityMachineId),
      id: cdktf.stringToTerraform(this._id),
      manual: cdktf.booleanToTerraform(this._manual),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_machine_id: {
        value: cdktf.stringToHclTerraform(this._availabilityMachineId),
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
      manual: {
        value: cdktf.booleanToHclTerraform(this._manual),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
