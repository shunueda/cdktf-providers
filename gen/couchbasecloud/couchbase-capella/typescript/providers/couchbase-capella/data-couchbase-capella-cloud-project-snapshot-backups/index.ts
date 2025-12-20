// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups#organization_id DataCouchbaseCapellaCloudProjectSnapshotBackups#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups#page DataCouchbaseCapellaCloudProjectSnapshotBackups#page}
  */
  readonly page?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups#per_page DataCouchbaseCapellaCloudProjectSnapshotBackups#per_page}
  */
  readonly perPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups#project_id DataCouchbaseCapellaCloudProjectSnapshotBackups#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups#sort_by DataCouchbaseCapellaCloudProjectSnapshotBackups#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups#sort_direction DataCouchbaseCapellaCloudProjectSnapshotBackups#sort_direction}
  */
  readonly sortDirection?: string;
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefs {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefsToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefsToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefs | undefined) {
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

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getStringAttribute('last');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getStringAttribute('previous');
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPages {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPagesToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPagesToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last - computed: true, optional: false, required: false
  public get last() {
    return this.getNumberAttribute('last');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getNumberAttribute('next');
  }

  // page - computed: true, optional: false, required: false
  public get page() {
    return this.getNumberAttribute('page');
  }

  // per_page - computed: true, optional: false, required: false
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getNumberAttribute('previous');
  }

  // total_items - computed: true, optional: false, required: false
  public get totalItems() {
    return this.getNumberAttribute('total_items');
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsCursor {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsCursorToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsCursorToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsCursor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsCursor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hrefs - computed: true, optional: false, required: false
  private _hrefs = new DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorHrefsOutputReference(this, "hrefs");
  public get hrefs() {
    return this._hrefs;
  }

  // pages - computed: true, optional: false, required: false
  private _pages = new DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorPagesOutputReference(this, "pages");
  public get pages() {
    return this._pages;
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmek {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmekToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmekToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmek | undefined) {
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

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmekList extends cdktf.ComplexList {

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
  public get(index: number): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmekOutputReference {
    return new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopies {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopiesToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopiesToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopiesList extends cdktf.ComplexList {

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
  public get(index: number): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopiesOutputReference {
    return new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgress {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgressToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgressToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServer {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServerToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServerToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshot {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_service - computed: true, optional: false, required: false
  public get appService() {
    return this.getStringAttribute('app_service');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cmek - computed: true, optional: false, required: false
  private _cmek = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCmekList(this, "cmek", true);
  public get cmek() {
    return this._cmek;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cross_region_copies - computed: true, optional: false, required: false
  private _crossRegionCopies = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotCrossRegionCopiesList(this, "cross_region_copies", true);
  public get crossRegionCopies() {
    return this._crossRegionCopies;
  }

  // database_size - computed: true, optional: false, required: false
  public get databaseSize() {
    return this.getNumberAttribute('database_size');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // progress - computed: true, optional: false, required: false
  private _progress = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotProgressOutputReference(this, "progress");
  public get progress() {
    return this._progress;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // server - computed: true, optional: false, required: false
  private _server = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmek {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmekToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmekToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmek | undefined) {
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

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmekList extends cdktf.ComplexList {

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
  public get(index: number): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmekOutputReference {
    return new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopies {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopiesToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopiesToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopiesList extends cdktf.ComplexList {

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
  public get(index: number): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopiesOutputReference {
    return new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgress {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgressToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgressToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServer {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServerToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServerToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshot {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_service - computed: true, optional: false, required: false
  public get appService() {
    return this.getStringAttribute('app_service');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cmek - computed: true, optional: false, required: false
  private _cmek = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCmekList(this, "cmek", true);
  public get cmek() {
    return this._cmek;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cross_region_copies - computed: true, optional: false, required: false
  private _crossRegionCopies = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotCrossRegionCopiesList(this, "cross_region_copies", true);
  public get crossRegionCopies() {
    return this._crossRegionCopies;
  }

  // database_size - computed: true, optional: false, required: false
  public get databaseSize() {
    return this.getNumberAttribute('database_size');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // progress - computed: true, optional: false, required: false
  private _progress = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotProgressOutputReference(this, "progress");
  public get progress() {
    return this._progress;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // server - computed: true, optional: false, required: false
  private _server = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCouchbaseCapellaCloudProjectSnapshotBackupsData {
}

export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataToTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCouchbaseCapellaCloudProjectSnapshotBackupsDataToHclTerraform(struct?: DataCouchbaseCapellaCloudProjectSnapshotBackupsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCouchbaseCapellaCloudProjectSnapshotBackupsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCouchbaseCapellaCloudProjectSnapshotBackupsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // creation_date_time - computed: true, optional: false, required: false
  public get creationDateTime() {
    return this.getStringAttribute('creation_date_time');
  }

  // current_status - computed: true, optional: false, required: false
  public get currentStatus() {
    return this.getStringAttribute('current_status');
  }

  // most_recent_snapshot - computed: true, optional: false, required: false
  private _mostRecentSnapshot = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataMostRecentSnapshotOutputReference(this, "most_recent_snapshot");
  public get mostRecentSnapshot() {
    return this._mostRecentSnapshot;
  }

  // oldest_snapshot - computed: true, optional: false, required: false
  private _oldestSnapshot = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOldestSnapshotOutputReference(this, "oldest_snapshot");
  public get oldestSnapshot() {
    return this._oldestSnapshot;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataCouchbaseCapellaCloudProjectSnapshotBackupsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOutputReference {
    return new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups couchbase-capella_cloud_project_snapshot_backups}
*/
export class DataCouchbaseCapellaCloudProjectSnapshotBackups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_cloud_project_snapshot_backups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCouchbaseCapellaCloudProjectSnapshotBackups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCouchbaseCapellaCloudProjectSnapshotBackups to import
  * @param importFromId The id of the existing DataCouchbaseCapellaCloudProjectSnapshotBackups that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCouchbaseCapellaCloudProjectSnapshotBackups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_cloud_project_snapshot_backups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/cloud_project_snapshot_backups couchbase-capella_cloud_project_snapshot_backups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCouchbaseCapellaCloudProjectSnapshotBackupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCouchbaseCapellaCloudProjectSnapshotBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_cloud_project_snapshot_backups',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
    this._page = config.page;
    this._perPage = config.perPage;
    this._projectId = config.projectId;
    this._sortBy = config.sortBy;
    this._sortDirection = config.sortDirection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cursor - computed: true, optional: false, required: false
  private _cursor = new DataCouchbaseCapellaCloudProjectSnapshotBackupsCursorOutputReference(this, "cursor");
  public get cursor() {
    return this._cursor;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataCouchbaseCapellaCloudProjectSnapshotBackupsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // per_page - computed: false, optional: true, required: false
  private _perPage?: number; 
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }
  public set perPage(value: number) {
    this._perPage = value;
  }
  public resetPerPage() {
    this._perPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPageInput() {
    return this._perPage;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
      page: cdktf.numberToTerraform(this._page),
      per_page: cdktf.numberToTerraform(this._perPage),
      project_id: cdktf.stringToTerraform(this._projectId),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_direction: cdktf.stringToTerraform(this._sortDirection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_page: {
        value: cdktf.numberToHclTerraform(this._perPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_direction: {
        value: cdktf.stringToHclTerraform(this._sortDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
