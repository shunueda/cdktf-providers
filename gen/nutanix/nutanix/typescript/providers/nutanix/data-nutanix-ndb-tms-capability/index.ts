// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_tms_capability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixNdbTmsCapabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_tms_capability#id DataNutanixNdbTmsCapability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_tms_capability#time_machine_id DataNutanixNdbTmsCapability#time_machine_id}
  */
  readonly timeMachineId: string;
}
export interface DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfo {
}

export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfoToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfoToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // info - computed: true, optional: false, required: false
  private _info = new cdktf.StringMap(this, "info");
  public get info() {
    return this._info;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }

  // unknown_time_range - computed: true, optional: false, required: false
  public get unknownTimeRange() {
    return this.getBooleanAttribute('unknown_time_range');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfoOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfo {
}

export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfoToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfoToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getListAttribute('operations');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfoOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadata {
}

export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_directly - computed: true, optional: false, required: false
  public get createdDirectly() {
    return this.getBooleanAttribute('created_directly');
  }

  // curation_retry_count - computed: true, optional: false, required: false
  public get curationRetryCount() {
    return this.getNumberAttribute('curation_retry_count');
  }

  // deregister_info - computed: true, optional: false, required: false
  private _deregisterInfo = new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataDeregisterInfoList(this, "deregister_info", false);
  public get deregisterInfo() {
    return this._deregisterInfo;
  }

  // info - computed: true, optional: false, required: false
  private _info = new cdktf.StringMap(this, "info");
  public get info() {
    return this._info;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }

  // updated_directly - computed: true, optional: false, required: false
  public get updatedDirectly() {
    return this.getBooleanAttribute('updated_directly');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogs {
}

export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_node_id - computed: true, optional: false, required: false
  public get databaseNodeId() {
    return this.getStringAttribute('database_node_id');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // era_log_drive_id - computed: true, optional: false, required: false
  public get eraLogDriveId() {
    return this.getStringAttribute('era_log_drive_id');
  }

  // from_time - computed: true, optional: false, required: false
  public get fromTime() {
    return this.getStringAttribute('from_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // log_copy_operation_id - computed: true, optional: false, required: false
  public get logCopyOperationId() {
    return this.getStringAttribute('log_copy_operation_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // to_time - computed: true, optional: false, required: false
  public get toTime() {
    return this.getStringAttribute('to_time');
  }

  // unprocessed - computed: true, optional: false, required: false
  public get unprocessed() {
    return this.getBooleanAttribute('unprocessed');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRanges {
}

export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRangesToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRangesToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getStringAttribute('first');
  }

  // second - computed: true, optional: false, required: false
  public get second() {
    return this.getStringAttribute('second');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRangesOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRanges {
}

export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRangesToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRangesToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first - computed: true, optional: false, required: false
  public get first() {
    return this.getStringAttribute('first');
  }

  // second - computed: true, optional: false, required: false
  public get second() {
    return this.getStringAttribute('second');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRangesOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilityContinuousRegion {
}

export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilityContinuousRegionToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilityContinuousRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilityContinuousRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilityContinuousRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_logs - computed: true, optional: false, required: false
  private _dbLogs = new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionDbLogsList(this, "db_logs", false);
  public get dbLogs() {
    return this._dbLogs;
  }

  // from_time - computed: true, optional: false, required: false
  public get fromTime() {
    return this.getStringAttribute('from_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // partial_ranges - computed: true, optional: false, required: false
  public get partialRanges() {
    return this.getBooleanAttribute('partial_ranges');
  }

  // processed_ranges - computed: true, optional: false, required: false
  private _processedRanges = new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionProcessedRangesList(this, "processed_ranges", false);
  public get processedRanges() {
    return this._processedRanges;
  }

  // snapshot_ids - computed: true, optional: false, required: false
  public get snapshotIds() {
    return this.getListAttribute('snapshot_ids');
  }

  // snapshots - computed: true, optional: false, required: false
  public get snapshots() {
    return this.getStringAttribute('snapshots');
  }

  // sub_range - computed: true, optional: false, required: false
  public get subRange() {
    return this.getBooleanAttribute('sub_range');
  }

  // time_range_and_databases - computed: true, optional: false, required: false
  public get timeRangeAndDatabases() {
    return this.getStringAttribute('time_range_and_databases');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // to_time - computed: true, optional: false, required: false
  public get toTime() {
    return this.getStringAttribute('to_time');
  }

  // unknown_time_ranges - computed: true, optional: false, required: false
  public get unknownTimeRanges() {
    return this.getStringAttribute('unknown_time_ranges');
  }

  // unprocessed_ranges - computed: true, optional: false, required: false
  private _unprocessedRanges = new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionUnprocessedRangesList(this, "unprocessed_ranges", false);
  public get unprocessedRanges() {
    return this._unprocessedRanges;
  }
}

export class DataNutanixNdbTmsCapabilityCapabilityContinuousRegionList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilityContinuousRegionOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetails {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetailsToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetailsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetails | undefined) {
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

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetailsOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommand {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommandToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommandToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommand | undefined) {
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

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommandOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommand {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommandToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommandToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommand | undefined) {
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

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommandOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetails {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetailsToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetailsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetails | undefined) {
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

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetailsOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfig {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiry_details - computed: true, optional: false, required: false
  private _expiryDetails = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigExpiryDetailsList(this, "expiry_details", false);
  public get expiryDetails() {
    return this._expiryDetails;
  }

  // post_delete_command - computed: true, optional: false, required: false
  private _postDeleteCommand = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPostDeleteCommandList(this, "post_delete_command", false);
  public get postDeleteCommand() {
    return this._postDeleteCommand;
  }

  // pre_delete_command - computed: true, optional: false, required: false
  private _preDeleteCommand = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigPreDeleteCommandList(this, "pre_delete_command", false);
  public get preDeleteCommand() {
    return this._preDeleteCommand;
  }

  // refresh_details - computed: true, optional: false, required: false
  private _refreshDetails = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigRefreshDetailsList(this, "refresh_details", false);
  public get refreshDetails() {
    return this._refreshDetails;
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParam {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParamToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParamToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_cache_size - computed: true, optional: false, required: false
  public get effectiveCacheSize() {
    return this.getStringAttribute('effective_cache_size');
  }

  // maintenance_work_mem - computed: true, optional: false, required: false
  public get maintenanceWorkMem() {
    return this.getStringAttribute('maintenance_work_mem');
  }

  // max_parallel_workers_per_gather - computed: true, optional: false, required: false
  public get maxParallelWorkersPerGather() {
    return this.getStringAttribute('max_parallel_workers_per_gather');
  }

  // max_worker_processes - computed: true, optional: false, required: false
  public get maxWorkerProcesses() {
    return this.getStringAttribute('max_worker_processes');
  }

  // shared_buffers - computed: true, optional: false, required: false
  public get sharedBuffers() {
    return this.getStringAttribute('shared_buffers');
  }

  // work_mem - computed: true, optional: false, required: false
  public get workMem() {
    return this.getStringAttribute('work_mem');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParamOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorage {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorageToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorageToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorageOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisks {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisksToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisksToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisksOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisks {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisksToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisksToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisksOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorage {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage - computed: true, optional: false, required: false
  private _archiveStorage = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageArchiveStorageList(this, "archive_storage", false);
  public get archiveStorage() {
    return this._archiveStorage;
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // log_disks - computed: true, optional: false, required: false
  private _logDisks = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageLogDisksList(this, "log_disks", false);
  public get logDisks() {
    return this._logDisks;
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmProperties {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmPropertiesToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmPropertiesToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dirty_background_ratio - computed: true, optional: false, required: false
  public get dirtyBackgroundRatio() {
    return this.getNumberAttribute('dirty_background_ratio');
  }

  // dirty_expire_centisecs - computed: true, optional: false, required: false
  public get dirtyExpireCentisecs() {
    return this.getNumberAttribute('dirty_expire_centisecs');
  }

  // dirty_ratio - computed: true, optional: false, required: false
  public get dirtyRatio() {
    return this.getNumberAttribute('dirty_ratio');
  }

  // dirty_writeback_centisecs - computed: true, optional: false, required: false
  public get dirtyWritebackCentisecs() {
    return this.getNumberAttribute('dirty_writeback_centisecs');
  }

  // nr_hugepages - computed: true, optional: false, required: false
  public get nrHugepages() {
    return this.getNumberAttribute('nr_hugepages');
  }

  // overcommit_memory - computed: true, optional: false, required: false
  public get overcommitMemory() {
    return this.getNumberAttribute('overcommit_memory');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmPropertiesOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigs {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_db_param - computed: true, optional: false, required: false
  private _bpgDbParam = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsBpgDbParamList(this, "bpg_db_param", false);
  public get bpgDbParam() {
    return this._bpgDbParam;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // vm_properties - computed: true, optional: false, required: false
  private _vmProperties = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsVmPropertiesList(this, "vm_properties", false);
  public get vmProperties() {
    return this._vmProperties;
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfo {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_configs - computed: true, optional: false, required: false
  private _bpgConfigs = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoBpgConfigsList(this, "bpg_configs", false);
  public get bpgConfigs() {
    return this._bpgConfigs;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadata {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // async - computed: true, optional: false, required: false
  public get async() {
    return this.getBooleanAttribute('async');
  }

  // curation_retry_count - computed: true, optional: false, required: false
  public get curationRetryCount() {
    return this.getNumberAttribute('curation_retry_count');
  }

  // deregister_info - computed: true, optional: false, required: false
  private _deregisterInfo = new cdktf.StringMap(this, "deregister_info");
  public get deregisterInfo() {
    return this._deregisterInfo;
  }

  // from_timestamp - computed: true, optional: false, required: false
  public get fromTimestamp() {
    return this.getStringAttribute('from_timestamp');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // last_replication_retyr_source_snapshot_id - computed: true, optional: false, required: false
  public get lastReplicationRetyrSourceSnapshotId() {
    return this.getStringAttribute('last_replication_retyr_source_snapshot_id');
  }

  // operations_using_snapshot - computed: true, optional: false, required: false
  public get operationsUsingSnapshot() {
    return this.getListAttribute('operations_using_snapshot');
  }

  // replication_retry_count - computed: true, optional: false, required: false
  public get replicationRetryCount() {
    return this.getNumberAttribute('replication_retry_count');
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }

  // stand_by - computed: true, optional: false, required: false
  public get standBy() {
    return this.getBooleanAttribute('stand_by');
  }

  // to_timestamp - computed: true, optional: false, required: false
  public get toTimestamp() {
    return this.getStringAttribute('to_timestamp');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsProperties {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsPropertiesToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsPropertiesToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsProperties | undefined) {
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

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsPropertiesOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshotsTags {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsTagsToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsTagsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshotsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshotsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshotsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsTagsOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapabilitySnapshots {
}

export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsToTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilitySnapshotsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapabilitySnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapabilitySnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapabilitySnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // from_timestamp - computed: true, optional: false, required: false
  public get fromTimestamp() {
    return this.getStringAttribute('from_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lcm_config - computed: true, optional: false, required: false
  private _lcmConfig = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsLcmConfigList(this, "lcm_config", false);
  public get lcmConfig() {
    return this._lcmConfig;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nx_cluster_id - computed: true, optional: false, required: false
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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
  private _properties = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // time_machine_id - computed: true, optional: false, required: false
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
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
}

export class DataNutanixNdbTmsCapabilityCapabilitySnapshotsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilitySnapshotsOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilitySnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityCapability {
}

export function dataNutanixNdbTmsCapabilityCapabilityToTerraform(struct?: DataNutanixNdbTmsCapabilityCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityCapabilityToHclTerraform(struct?: DataNutanixNdbTmsCapabilityCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityCapabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityCapability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityCapability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continuous_region - computed: true, optional: false, required: false
  private _continuousRegion = new DataNutanixNdbTmsCapabilityCapabilityContinuousRegionList(this, "continuous_region", false);
  public get continuousRegion() {
    return this._continuousRegion;
  }

  // database_ids - computed: true, optional: false, required: false
  public get databaseIds() {
    return this.getListAttribute('database_ids');
  }

  // databases_continuous_region - computed: true, optional: false, required: false
  public get databasesContinuousRegion() {
    return this.getStringAttribute('databases_continuous_region');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new DataNutanixNdbTmsCapabilityCapabilitySnapshotsList(this, "snapshots", false);
  public get snapshots() {
    return this._snapshots;
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }

  // time_unit_number - computed: true, optional: false, required: false
  public get timeUnitNumber() {
    return this.getStringAttribute('time_unit_number');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataNutanixNdbTmsCapabilityCapabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityCapabilityOutputReference {
    return new DataNutanixNdbTmsCapabilityCapabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetails {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetailsToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetailsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetails | undefined) {
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

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetailsOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommand {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommandToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommandToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommand | undefined) {
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

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommandOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommand {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommandToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommandToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommand | undefined) {
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

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommandList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommandOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetails {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetailsToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetailsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetails | undefined) {
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

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetailsOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfig {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiry_details - computed: true, optional: false, required: false
  private _expiryDetails = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigExpiryDetailsList(this, "expiry_details", false);
  public get expiryDetails() {
    return this._expiryDetails;
  }

  // post_delete_command - computed: true, optional: false, required: false
  private _postDeleteCommand = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPostDeleteCommandList(this, "post_delete_command", false);
  public get postDeleteCommand() {
    return this._postDeleteCommand;
  }

  // pre_delete_command - computed: true, optional: false, required: false
  private _preDeleteCommand = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigPreDeleteCommandList(this, "pre_delete_command", false);
  public get preDeleteCommand() {
    return this._preDeleteCommand;
  }

  // refresh_details - computed: true, optional: false, required: false
  private _refreshDetails = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigRefreshDetailsList(this, "refresh_details", false);
  public get refreshDetails() {
    return this._refreshDetails;
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParam {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParamToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParamToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective_cache_size - computed: true, optional: false, required: false
  public get effectiveCacheSize() {
    return this.getStringAttribute('effective_cache_size');
  }

  // maintenance_work_mem - computed: true, optional: false, required: false
  public get maintenanceWorkMem() {
    return this.getStringAttribute('maintenance_work_mem');
  }

  // max_parallel_workers_per_gather - computed: true, optional: false, required: false
  public get maxParallelWorkersPerGather() {
    return this.getStringAttribute('max_parallel_workers_per_gather');
  }

  // max_worker_processes - computed: true, optional: false, required: false
  public get maxWorkerProcesses() {
    return this.getStringAttribute('max_worker_processes');
  }

  // shared_buffers - computed: true, optional: false, required: false
  public get sharedBuffers() {
    return this.getStringAttribute('shared_buffers');
  }

  // work_mem - computed: true, optional: false, required: false
  public get workMem() {
    return this.getStringAttribute('work_mem');
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParamList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParamOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorage {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorageToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorageToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorageOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisks {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisksToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisksToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisksOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisks {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisksToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisksToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisksOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorage {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage - computed: true, optional: false, required: false
  private _archiveStorage = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageArchiveStorageList(this, "archive_storage", false);
  public get archiveStorage() {
    return this._archiveStorage;
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // log_disks - computed: true, optional: false, required: false
  private _logDisks = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageLogDisksList(this, "log_disks", false);
  public get logDisks() {
    return this._logDisks;
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmProperties {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmPropertiesToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmPropertiesToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dirty_background_ratio - computed: true, optional: false, required: false
  public get dirtyBackgroundRatio() {
    return this.getNumberAttribute('dirty_background_ratio');
  }

  // dirty_expire_centisecs - computed: true, optional: false, required: false
  public get dirtyExpireCentisecs() {
    return this.getNumberAttribute('dirty_expire_centisecs');
  }

  // dirty_ratio - computed: true, optional: false, required: false
  public get dirtyRatio() {
    return this.getNumberAttribute('dirty_ratio');
  }

  // dirty_writeback_centisecs - computed: true, optional: false, required: false
  public get dirtyWritebackCentisecs() {
    return this.getNumberAttribute('dirty_writeback_centisecs');
  }

  // nr_hugepages - computed: true, optional: false, required: false
  public get nrHugepages() {
    return this.getNumberAttribute('nr_hugepages');
  }

  // overcommit_memory - computed: true, optional: false, required: false
  public get overcommitMemory() {
    return this.getNumberAttribute('overcommit_memory');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmPropertiesOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigs {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_db_param - computed: true, optional: false, required: false
  private _bpgDbParam = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsBpgDbParamList(this, "bpg_db_param", false);
  public get bpgDbParam() {
    return this._bpgDbParam;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // vm_properties - computed: true, optional: false, required: false
  private _vmProperties = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsVmPropertiesList(this, "vm_properties", false);
  public get vmProperties() {
    return this._vmProperties;
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfo {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpg_configs - computed: true, optional: false, required: false
  private _bpgConfigs = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoBpgConfigsList(this, "bpg_configs", false);
  public get bpgConfigs() {
    return this._bpgConfigs;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadata {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // async - computed: true, optional: false, required: false
  public get async() {
    return this.getBooleanAttribute('async');
  }

  // curation_retry_count - computed: true, optional: false, required: false
  public get curationRetryCount() {
    return this.getNumberAttribute('curation_retry_count');
  }

  // deregister_info - computed: true, optional: false, required: false
  private _deregisterInfo = new cdktf.StringMap(this, "deregister_info");
  public get deregisterInfo() {
    return this._deregisterInfo;
  }

  // from_timestamp - computed: true, optional: false, required: false
  public get fromTimestamp() {
    return this.getStringAttribute('from_timestamp');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // last_replication_retry_source_snapshot_id - computed: true, optional: false, required: false
  public get lastReplicationRetrySourceSnapshotId() {
    return this.getStringAttribute('last_replication_retry_source_snapshot_id');
  }

  // last_replication_retry_timestamp - computed: true, optional: false, required: false
  public get lastReplicationRetryTimestamp() {
    return this.getStringAttribute('last_replication_retry_timestamp');
  }

  // operations_using_snapshot - computed: true, optional: false, required: false
  public get operationsUsingSnapshot() {
    return this.getListAttribute('operations_using_snapshot');
  }

  // replication_retry_count - computed: true, optional: false, required: false
  public get replicationRetryCount() {
    return this.getNumberAttribute('replication_retry_count');
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }

  // stand_by - computed: true, optional: false, required: false
  public get standBy() {
    return this.getBooleanAttribute('stand_by');
  }

  // to_timestamp - computed: true, optional: false, required: false
  public get toTimestamp() {
    return this.getStringAttribute('to_timestamp');
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotProperties {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotPropertiesToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotPropertiesToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotProperties | undefined) {
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

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotPropertiesOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshotTags {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotTagsToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotTagsToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshotTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshotTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotTagsOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastContinuousSnapshot {
}

export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotToTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastContinuousSnapshotToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastContinuousSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastContinuousSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastContinuousSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // from_timestamp - computed: true, optional: false, required: false
  public get fromTimestamp() {
    return this.getStringAttribute('from_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lcm_config - computed: true, optional: false, required: false
  private _lcmConfig = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotLcmConfigList(this, "lcm_config", false);
  public get lcmConfig() {
    return this._lcmConfig;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nx_cluster_id - computed: true, optional: false, required: false
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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
  private _properties = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // time_machine_id - computed: true, optional: false, required: false
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
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
}

export class DataNutanixNdbTmsCapabilityLastContinuousSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastContinuousSnapshotOutputReference {
    return new DataNutanixNdbTmsCapabilityLastContinuousSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfo {
}

export function dataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfoToTerraform(struct?: DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfoToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getListAttribute('operations');
  }
}

export class DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfoOutputReference {
    return new DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastDbLogMetadata {
}

export function dataNutanixNdbTmsCapabilityLastDbLogMetadataToTerraform(struct?: DataNutanixNdbTmsCapabilityLastDbLogMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastDbLogMetadataToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastDbLogMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastDbLogMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastDbLogMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastDbLogMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_directly - computed: true, optional: false, required: false
  public get createdDirectly() {
    return this.getBooleanAttribute('created_directly');
  }

  // curation_retry_count - computed: true, optional: false, required: false
  public get curationRetryCount() {
    return this.getNumberAttribute('curation_retry_count');
  }

  // deregister_info - computed: true, optional: false, required: false
  private _deregisterInfo = new DataNutanixNdbTmsCapabilityLastDbLogMetadataDeregisterInfoList(this, "deregister_info", false);
  public get deregisterInfo() {
    return this._deregisterInfo;
  }

  // info - computed: true, optional: false, required: false
  private _info = new cdktf.StringMap(this, "info");
  public get info() {
    return this._info;
  }

  // secure_info - computed: true, optional: false, required: false
  private _secureInfo = new cdktf.StringMap(this, "secure_info");
  public get secureInfo() {
    return this._secureInfo;
  }

  // updated_directly - computed: true, optional: false, required: false
  public get updatedDirectly() {
    return this.getBooleanAttribute('updated_directly');
  }
}

export class DataNutanixNdbTmsCapabilityLastDbLogMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastDbLogMetadataOutputReference {
    return new DataNutanixNdbTmsCapabilityLastDbLogMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNdbTmsCapabilityLastDbLog {
}

export function dataNutanixNdbTmsCapabilityLastDbLogToTerraform(struct?: DataNutanixNdbTmsCapabilityLastDbLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNdbTmsCapabilityLastDbLogToHclTerraform(struct?: DataNutanixNdbTmsCapabilityLastDbLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNdbTmsCapabilityLastDbLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNdbTmsCapabilityLastDbLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNdbTmsCapabilityLastDbLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_node_id - computed: true, optional: false, required: false
  public get databaseNodeId() {
    return this.getStringAttribute('database_node_id');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // era_log_drive_id - computed: true, optional: false, required: false
  public get eraLogDriveId() {
    return this.getStringAttribute('era_log_drive_id');
  }

  // from_time - computed: true, optional: false, required: false
  public get fromTime() {
    return this.getStringAttribute('from_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_copy_operation_id - computed: true, optional: false, required: false
  public get logCopyOperationId() {
    return this.getStringAttribute('log_copy_operation_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixNdbTmsCapabilityLastDbLogMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // to_time - computed: true, optional: false, required: false
  public get toTime() {
    return this.getStringAttribute('to_time');
  }

  // unprocessed - computed: true, optional: false, required: false
  public get unprocessed() {
    return this.getBooleanAttribute('unprocessed');
  }
}

export class DataNutanixNdbTmsCapabilityLastDbLogList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNdbTmsCapabilityLastDbLogOutputReference {
    return new DataNutanixNdbTmsCapabilityLastDbLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_tms_capability nutanix_ndb_tms_capability}
*/
export class DataNutanixNdbTmsCapability extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_tms_capability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixNdbTmsCapability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixNdbTmsCapability to import
  * @param importFromId The id of the existing DataNutanixNdbTmsCapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_tms_capability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixNdbTmsCapability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_tms_capability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/ndb_tms_capability nutanix_ndb_tms_capability} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixNdbTmsCapabilityConfig
  */
  public constructor(scope: Construct, id: string, config: DataNutanixNdbTmsCapabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_tms_capability',
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
    this._id = config.id;
    this._timeMachineId = config.timeMachineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capability - computed: true, optional: false, required: false
  private _capability = new DataNutanixNdbTmsCapabilityCapabilityList(this, "capability", false);
  public get capability() {
    return this._capability;
  }

  // capability_reset_time - computed: true, optional: false, required: false
  public get capabilityResetTime() {
    return this.getStringAttribute('capability_reset_time');
  }

  // database_ids - computed: true, optional: false, required: false
  public get databaseIds() {
    return this.getListAttribute('database_ids');
  }

  // heal_with_reset_capability - computed: true, optional: false, required: false
  public get healWithResetCapability() {
    return this.getBooleanAttribute('heal_with_reset_capability');
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

  // last_continuous_snapshot - computed: true, optional: false, required: false
  private _lastContinuousSnapshot = new DataNutanixNdbTmsCapabilityLastContinuousSnapshotList(this, "last_continuous_snapshot", false);
  public get lastContinuousSnapshot() {
    return this._lastContinuousSnapshot;
  }

  // last_continuous_snapshot_time - computed: true, optional: false, required: false
  public get lastContinuousSnapshotTime() {
    return this.getStringAttribute('last_continuous_snapshot_time');
  }

  // last_db_log - computed: true, optional: false, required: false
  private _lastDbLog = new DataNutanixNdbTmsCapabilityLastDbLogList(this, "last_db_log", false);
  public get lastDbLog() {
    return this._lastDbLog;
  }

  // log_catchup_start_time - computed: true, optional: false, required: false
  public get logCatchupStartTime() {
    return this.getStringAttribute('log_catchup_start_time');
  }

  // log_time_info - computed: true, optional: false, required: false
  private _logTimeInfo = new cdktf.StringMap(this, "log_time_info");
  public get logTimeInfo() {
    return this._logTimeInfo;
  }

  // nx_cluster_association_type - computed: true, optional: false, required: false
  public get nxClusterAssociationType() {
    return this.getStringAttribute('nx_cluster_association_type');
  }

  // nx_cluster_id - computed: true, optional: false, required: false
  public get nxClusterId() {
    return this.getStringAttribute('nx_cluster_id');
  }

  // output_time_zone - computed: true, optional: false, required: false
  public get outputTimeZone() {
    return this.getStringAttribute('output_time_zone');
  }

  // overall_continuous_range_end_time - computed: true, optional: false, required: false
  public get overallContinuousRangeEndTime() {
    return this.getStringAttribute('overall_continuous_range_end_time');
  }

  // sla_id - computed: true, optional: false, required: false
  public get slaId() {
    return this.getStringAttribute('sla_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getBooleanAttribute('source');
  }

  // time_machine_id - computed: false, optional: false, required: true
  private _timeMachineId?: string; 
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
  }
  public set timeMachineId(value: string) {
    this._timeMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineIdInput() {
    return this._timeMachineId;
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
      id: cdktf.stringToTerraform(this._id),
      time_machine_id: cdktf.stringToTerraform(this._timeMachineId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_machine_id: {
        value: cdktf.stringToHclTerraform(this._timeMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
