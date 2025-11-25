// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbGreenplumClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Greenplum cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#cluster_id DataYandexMdbGreenplumCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#folder_id DataYandexMdbGreenplumCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#greenplum_config DataYandexMdbGreenplumCluster#greenplum_config}
  */
  readonly greenplumConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#id DataYandexMdbGreenplumCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of IDs of the host groups to place master subclusters' VMs of the cluster on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#master_host_group_ids DataYandexMdbGreenplumCluster#master_host_group_ids}
  */
  readonly masterHostGroupIds?: string[];
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#name DataYandexMdbGreenplumCluster#name}
  */
  readonly name?: string;
  /**
  * A list of IDs of the host groups to place segment subclusters' VMs of the cluster on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#segment_host_group_ids DataYandexMdbGreenplumCluster#segment_host_group_ids}
  */
  readonly segmentHostGroupIds?: string[];
  /**
  * background_activities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#background_activities DataYandexMdbGreenplumCluster#background_activities}
  */
  readonly backgroundActivities?: DataYandexMdbGreenplumClusterBackgroundActivities[] | cdktf.IResolvable;
  /**
  * pooler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pooler_config DataYandexMdbGreenplumCluster#pooler_config}
  */
  readonly poolerConfig?: DataYandexMdbGreenplumClusterPoolerConfig;
  /**
  * pxf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pxf_config DataYandexMdbGreenplumCluster#pxf_config}
  */
  readonly pxfConfig?: DataYandexMdbGreenplumClusterPxfConfig[] | cdktf.IResolvable;
}
export interface DataYandexMdbGreenplumClusterAccess {
}

export function dataYandexMdbGreenplumClusterAccessToTerraform(struct?: DataYandexMdbGreenplumClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterAccessToHclTerraform(struct?: DataYandexMdbGreenplumClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_lens - computed: true, optional: false, required: false
  public get dataLens() {
    return this.getBooleanAttribute('data_lens');
  }

  // data_transfer - computed: true, optional: false, required: false
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }

  // web_sql - computed: true, optional: false, required: false
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }

  // yandex_query - computed: true, optional: false, required: false
  public get yandexQuery() {
    return this.getBooleanAttribute('yandex_query');
  }
}

export class DataYandexMdbGreenplumClusterAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterAccessOutputReference {
    return new DataYandexMdbGreenplumClusterAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterBackupWindowStart {
}

export function dataYandexMdbGreenplumClusterBackupWindowStartToTerraform(struct?: DataYandexMdbGreenplumClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterBackupWindowStartToHclTerraform(struct?: DataYandexMdbGreenplumClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterBackupWindowStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterBackupWindowStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}

export class DataYandexMdbGreenplumClusterBackupWindowStartList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterBackupWindowStartOutputReference {
    return new DataYandexMdbGreenplumClusterBackupWindowStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterCloudStorage {
}

export function dataYandexMdbGreenplumClusterCloudStorageToTerraform(struct?: DataYandexMdbGreenplumClusterCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterCloudStorageToHclTerraform(struct?: DataYandexMdbGreenplumClusterCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterCloudStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterCloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}

export class DataYandexMdbGreenplumClusterCloudStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterCloudStorageOutputReference {
    return new DataYandexMdbGreenplumClusterCloudStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterLogging {
}

export function dataYandexMdbGreenplumClusterLoggingToTerraform(struct?: DataYandexMdbGreenplumClusterLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterLoggingToHclTerraform(struct?: DataYandexMdbGreenplumClusterLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_center_enabled - computed: true, optional: false, required: false
  public get commandCenterEnabled() {
    return this.getBooleanAttribute('command_center_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // greenplum_enabled - computed: true, optional: false, required: false
  public get greenplumEnabled() {
    return this.getBooleanAttribute('greenplum_enabled');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // pooler_enabled - computed: true, optional: false, required: false
  public get poolerEnabled() {
    return this.getBooleanAttribute('pooler_enabled');
  }
}

export class DataYandexMdbGreenplumClusterLoggingList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterLoggingOutputReference {
    return new DataYandexMdbGreenplumClusterLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterMaintenanceWindow {
}

export function dataYandexMdbGreenplumClusterMaintenanceWindowToTerraform(struct?: DataYandexMdbGreenplumClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterMaintenanceWindowToHclTerraform(struct?: DataYandexMdbGreenplumClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexMdbGreenplumClusterMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterMaintenanceWindowOutputReference {
    return new DataYandexMdbGreenplumClusterMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterMasterHosts {
}

export function dataYandexMdbGreenplumClusterMasterHostsToTerraform(struct?: DataYandexMdbGreenplumClusterMasterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterMasterHostsToHclTerraform(struct?: DataYandexMdbGreenplumClusterMasterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterMasterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterMasterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterMasterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class DataYandexMdbGreenplumClusterMasterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterMasterHostsOutputReference {
    return new DataYandexMdbGreenplumClusterMasterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterMasterSubclusterResources {
}

export function dataYandexMdbGreenplumClusterMasterSubclusterResourcesToTerraform(struct?: DataYandexMdbGreenplumClusterMasterSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterMasterSubclusterResourcesToHclTerraform(struct?: DataYandexMdbGreenplumClusterMasterSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterMasterSubclusterResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterMasterSubclusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterMasterSubclusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type_id - computed: true, optional: false, required: false
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }

  // resource_preset_id - computed: true, optional: false, required: false
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
}

export class DataYandexMdbGreenplumClusterMasterSubclusterResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterMasterSubclusterResourcesOutputReference {
    return new DataYandexMdbGreenplumClusterMasterSubclusterResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterMasterSubcluster {
}

export function dataYandexMdbGreenplumClusterMasterSubclusterToTerraform(struct?: DataYandexMdbGreenplumClusterMasterSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterMasterSubclusterToHclTerraform(struct?: DataYandexMdbGreenplumClusterMasterSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterMasterSubclusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterMasterSubcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterMasterSubcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexMdbGreenplumClusterMasterSubclusterResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
}

export class DataYandexMdbGreenplumClusterMasterSubclusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterMasterSubclusterOutputReference {
    return new DataYandexMdbGreenplumClusterMasterSubclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterSegmentHosts {
}

export function dataYandexMdbGreenplumClusterSegmentHostsToTerraform(struct?: DataYandexMdbGreenplumClusterSegmentHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterSegmentHostsToHclTerraform(struct?: DataYandexMdbGreenplumClusterSegmentHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterSegmentHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterSegmentHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterSegmentHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class DataYandexMdbGreenplumClusterSegmentHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterSegmentHostsOutputReference {
    return new DataYandexMdbGreenplumClusterSegmentHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterSegmentSubclusterResources {
}

export function dataYandexMdbGreenplumClusterSegmentSubclusterResourcesToTerraform(struct?: DataYandexMdbGreenplumClusterSegmentSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterSegmentSubclusterResourcesToHclTerraform(struct?: DataYandexMdbGreenplumClusterSegmentSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterSegmentSubclusterResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterSegmentSubclusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterSegmentSubclusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type_id - computed: true, optional: false, required: false
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }

  // resource_preset_id - computed: true, optional: false, required: false
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
}

export class DataYandexMdbGreenplumClusterSegmentSubclusterResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterSegmentSubclusterResourcesOutputReference {
    return new DataYandexMdbGreenplumClusterSegmentSubclusterResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterSegmentSubcluster {
}

export function dataYandexMdbGreenplumClusterSegmentSubclusterToTerraform(struct?: DataYandexMdbGreenplumClusterSegmentSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterSegmentSubclusterToHclTerraform(struct?: DataYandexMdbGreenplumClusterSegmentSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterSegmentSubclusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterSegmentSubcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterSegmentSubcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexMdbGreenplumClusterSegmentSubclusterResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
}

export class DataYandexMdbGreenplumClusterSegmentSubclusterList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterSegmentSubclusterOutputReference {
    return new DataYandexMdbGreenplumClusterSegmentSubclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#analyze_timeout DataYandexMdbGreenplumCluster#analyze_timeout}
  */
  readonly analyzeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#start_time DataYandexMdbGreenplumCluster#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#vacuum_timeout DataYandexMdbGreenplumCluster#vacuum_timeout}
  */
  readonly vacuumTimeout?: number;
}

export function dataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumToTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyze_timeout: cdktf.numberToTerraform(struct!.analyzeTimeout),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    vacuum_timeout: cdktf.numberToTerraform(struct!.vacuumTimeout),
  }
}


export function dataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumToHclTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analyze_timeout: {
      value: cdktf.numberToHclTerraform(struct!.analyzeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vacuum_timeout: {
      value: cdktf.numberToHclTerraform(struct!.vacuumTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzeTimeout = this._analyzeTimeout;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._vacuumTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vacuumTimeout = this._vacuumTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzeTimeout = undefined;
      this._startTime = undefined;
      this._vacuumTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzeTimeout = value.analyzeTimeout;
      this._startTime = value.startTime;
      this._vacuumTimeout = value.vacuumTimeout;
    }
  }

  // analyze_timeout - computed: true, optional: true, required: false
  private _analyzeTimeout?: number; 
  public get analyzeTimeout() {
    return this.getNumberAttribute('analyze_timeout');
  }
  public set analyzeTimeout(value: number) {
    this._analyzeTimeout = value;
  }
  public resetAnalyzeTimeout() {
    this._analyzeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeTimeoutInput() {
    return this._analyzeTimeout;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // vacuum_timeout - computed: true, optional: true, required: false
  private _vacuumTimeout?: number; 
  public get vacuumTimeout() {
    return this.getNumberAttribute('vacuum_timeout');
  }
  public set vacuumTimeout(value: number) {
    this._vacuumTimeout = value;
  }
  public resetVacuumTimeout() {
    this._vacuumTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vacuumTimeoutInput() {
    return this._vacuumTimeout;
  }
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumOutputReference {
    return new DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#enable DataYandexMdbGreenplumCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#ignore_users DataYandexMdbGreenplumCluster#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#max_age DataYandexMdbGreenplumCluster#max_age}
  */
  readonly maxAge?: number;
}

export function dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleToTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    ignore_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreUsers),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleToHclTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ignoreUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUsers = this._ignoreUsers;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._ignoreUsers = undefined;
      this._maxAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._ignoreUsers = value.ignoreUsers;
      this._maxAge = value.maxAge;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ignore_users - computed: true, optional: true, required: false
  private _ignoreUsers?: string[]; 
  public get ignoreUsers() {
    return this.getListAttribute('ignore_users');
  }
  public set ignoreUsers(value: string[]) {
    this._ignoreUsers = value;
  }
  public resetIgnoreUsers() {
    this._ignoreUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUsersInput() {
    return this._ignoreUsers;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdle[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleOutputReference {
    return new DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#enable DataYandexMdbGreenplumCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#ignore_users DataYandexMdbGreenplumCluster#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#max_age DataYandexMdbGreenplumCluster#max_age}
  */
  readonly maxAge?: number;
}

export function dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionToTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    ignore_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreUsers),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionToHclTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ignoreUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUsers = this._ignoreUsers;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._ignoreUsers = undefined;
      this._maxAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._ignoreUsers = value.ignoreUsers;
      this._maxAge = value.maxAge;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ignore_users - computed: true, optional: true, required: false
  private _ignoreUsers?: string[]; 
  public get ignoreUsers() {
    return this.getListAttribute('ignore_users');
  }
  public set ignoreUsers(value: string[]) {
    this._ignoreUsers = value;
  }
  public resetIgnoreUsers() {
    this._ignoreUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUsersInput() {
    return this._ignoreUsers;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionOutputReference {
    return new DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#enable DataYandexMdbGreenplumCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#ignore_users DataYandexMdbGreenplumCluster#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#max_age DataYandexMdbGreenplumCluster#max_age}
  */
  readonly maxAge?: number;
}

export function dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningToTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    ignore_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreUsers),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningToHclTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ignoreUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUsers = this._ignoreUsers;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._ignoreUsers = undefined;
      this._maxAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._ignoreUsers = value.ignoreUsers;
      this._maxAge = value.maxAge;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ignore_users - computed: true, optional: true, required: false
  private _ignoreUsers?: string[]; 
  public get ignoreUsers() {
    return this.getListAttribute('ignore_users');
  }
  public set ignoreUsers(value: string[]) {
    this._ignoreUsers = value;
  }
  public resetIgnoreUsers() {
    this._ignoreUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUsersInput() {
    return this._ignoreUsers;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningOutputReference {
    return new DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterBackgroundActivities {
  /**
  * analyze_and_vacuum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#analyze_and_vacuum DataYandexMdbGreenplumCluster#analyze_and_vacuum}
  */
  readonly analyzeAndVacuum?: DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum[] | cdktf.IResolvable;
  /**
  * query_killer_idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#query_killer_idle DataYandexMdbGreenplumCluster#query_killer_idle}
  */
  readonly queryKillerIdle?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdle[] | cdktf.IResolvable;
  /**
  * query_killer_idle_in_transaction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#query_killer_idle_in_transaction DataYandexMdbGreenplumCluster#query_killer_idle_in_transaction}
  */
  readonly queryKillerIdleInTransaction?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction[] | cdktf.IResolvable;
  /**
  * query_killer_long_running block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#query_killer_long_running DataYandexMdbGreenplumCluster#query_killer_long_running}
  */
  readonly queryKillerLongRunning?: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning[] | cdktf.IResolvable;
}

export function dataYandexMdbGreenplumClusterBackgroundActivitiesToTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyze_and_vacuum: cdktf.listMapper(dataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumToTerraform, true)(struct!.analyzeAndVacuum),
    query_killer_idle: cdktf.listMapper(dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleToTerraform, true)(struct!.queryKillerIdle),
    query_killer_idle_in_transaction: cdktf.listMapper(dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionToTerraform, true)(struct!.queryKillerIdleInTransaction),
    query_killer_long_running: cdktf.listMapper(dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningToTerraform, true)(struct!.queryKillerLongRunning),
  }
}


export function dataYandexMdbGreenplumClusterBackgroundActivitiesToHclTerraform(struct?: DataYandexMdbGreenplumClusterBackgroundActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analyze_and_vacuum: {
      value: cdktf.listMapperHcl(dataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumToHclTerraform, true)(struct!.analyzeAndVacuum),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumList",
    },
    query_killer_idle: {
      value: cdktf.listMapperHcl(dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleToHclTerraform, true)(struct!.queryKillerIdle),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleList",
    },
    query_killer_idle_in_transaction: {
      value: cdktf.listMapperHcl(dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionToHclTerraform, true)(struct!.queryKillerIdleInTransaction),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionList",
    },
    query_killer_long_running: {
      value: cdktf.listMapperHcl(dataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningToHclTerraform, true)(struct!.queryKillerLongRunning),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterBackgroundActivities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzeAndVacuum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzeAndVacuum = this._analyzeAndVacuum?.internalValue;
    }
    if (this._queryKillerIdle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryKillerIdle = this._queryKillerIdle?.internalValue;
    }
    if (this._queryKillerIdleInTransaction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryKillerIdleInTransaction = this._queryKillerIdleInTransaction?.internalValue;
    }
    if (this._queryKillerLongRunning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryKillerLongRunning = this._queryKillerLongRunning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterBackgroundActivities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzeAndVacuum.internalValue = undefined;
      this._queryKillerIdle.internalValue = undefined;
      this._queryKillerIdleInTransaction.internalValue = undefined;
      this._queryKillerLongRunning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzeAndVacuum.internalValue = value.analyzeAndVacuum;
      this._queryKillerIdle.internalValue = value.queryKillerIdle;
      this._queryKillerIdleInTransaction.internalValue = value.queryKillerIdleInTransaction;
      this._queryKillerLongRunning.internalValue = value.queryKillerLongRunning;
    }
  }

  // analyze_and_vacuum - computed: false, optional: true, required: false
  private _analyzeAndVacuum = new DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumList(this, "analyze_and_vacuum", false);
  public get analyzeAndVacuum() {
    return this._analyzeAndVacuum;
  }
  public putAnalyzeAndVacuum(value: DataYandexMdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum[] | cdktf.IResolvable) {
    this._analyzeAndVacuum.internalValue = value;
  }
  public resetAnalyzeAndVacuum() {
    this._analyzeAndVacuum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeAndVacuumInput() {
    return this._analyzeAndVacuum.internalValue;
  }

  // query_killer_idle - computed: false, optional: true, required: false
  private _queryKillerIdle = new DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleList(this, "query_killer_idle", false);
  public get queryKillerIdle() {
    return this._queryKillerIdle;
  }
  public putQueryKillerIdle(value: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdle[] | cdktf.IResolvable) {
    this._queryKillerIdle.internalValue = value;
  }
  public resetQueryKillerIdle() {
    this._queryKillerIdle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryKillerIdleInput() {
    return this._queryKillerIdle.internalValue;
  }

  // query_killer_idle_in_transaction - computed: false, optional: true, required: false
  private _queryKillerIdleInTransaction = new DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionList(this, "query_killer_idle_in_transaction", false);
  public get queryKillerIdleInTransaction() {
    return this._queryKillerIdleInTransaction;
  }
  public putQueryKillerIdleInTransaction(value: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction[] | cdktf.IResolvable) {
    this._queryKillerIdleInTransaction.internalValue = value;
  }
  public resetQueryKillerIdleInTransaction() {
    this._queryKillerIdleInTransaction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryKillerIdleInTransactionInput() {
    return this._queryKillerIdleInTransaction.internalValue;
  }

  // query_killer_long_running - computed: false, optional: true, required: false
  private _queryKillerLongRunning = new DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningList(this, "query_killer_long_running", false);
  public get queryKillerLongRunning() {
    return this._queryKillerLongRunning;
  }
  public putQueryKillerLongRunning(value: DataYandexMdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning[] | cdktf.IResolvable) {
    this._queryKillerLongRunning.internalValue = value;
  }
  public resetQueryKillerLongRunning() {
    this._queryKillerLongRunning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryKillerLongRunningInput() {
    return this._queryKillerLongRunning.internalValue;
  }
}

export class DataYandexMdbGreenplumClusterBackgroundActivitiesList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbGreenplumClusterBackgroundActivities[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbGreenplumClusterBackgroundActivitiesOutputReference {
    return new DataYandexMdbGreenplumClusterBackgroundActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterPoolerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pool_client_idle_timeout DataYandexMdbGreenplumCluster#pool_client_idle_timeout}
  */
  readonly poolClientIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pool_idle_in_transaction_timeout DataYandexMdbGreenplumCluster#pool_idle_in_transaction_timeout}
  */
  readonly poolIdleInTransactionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pool_size DataYandexMdbGreenplumCluster#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pooling_mode DataYandexMdbGreenplumCluster#pooling_mode}
  */
  readonly poolingMode?: string;
}

export function dataYandexMdbGreenplumClusterPoolerConfigToTerraform(struct?: DataYandexMdbGreenplumClusterPoolerConfigOutputReference | DataYandexMdbGreenplumClusterPoolerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_client_idle_timeout: cdktf.numberToTerraform(struct!.poolClientIdleTimeout),
    pool_idle_in_transaction_timeout: cdktf.numberToTerraform(struct!.poolIdleInTransactionTimeout),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    pooling_mode: cdktf.stringToTerraform(struct!.poolingMode),
  }
}


export function dataYandexMdbGreenplumClusterPoolerConfigToHclTerraform(struct?: DataYandexMdbGreenplumClusterPoolerConfigOutputReference | DataYandexMdbGreenplumClusterPoolerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_client_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.poolClientIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_idle_in_transaction_timeout: {
      value: cdktf.numberToHclTerraform(struct!.poolIdleInTransactionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pooling_mode: {
      value: cdktf.stringToHclTerraform(struct!.poolingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterPoolerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterPoolerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolClientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolClientIdleTimeout = this._poolClientIdleTimeout;
    }
    if (this._poolIdleInTransactionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolIdleInTransactionTimeout = this._poolIdleInTransactionTimeout;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._poolingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolingMode = this._poolingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterPoolerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._poolClientIdleTimeout = undefined;
      this._poolIdleInTransactionTimeout = undefined;
      this._poolSize = undefined;
      this._poolingMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._poolClientIdleTimeout = value.poolClientIdleTimeout;
      this._poolIdleInTransactionTimeout = value.poolIdleInTransactionTimeout;
      this._poolSize = value.poolSize;
      this._poolingMode = value.poolingMode;
    }
  }

  // pool_client_idle_timeout - computed: false, optional: true, required: false
  private _poolClientIdleTimeout?: number; 
  public get poolClientIdleTimeout() {
    return this.getNumberAttribute('pool_client_idle_timeout');
  }
  public set poolClientIdleTimeout(value: number) {
    this._poolClientIdleTimeout = value;
  }
  public resetPoolClientIdleTimeout() {
    this._poolClientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolClientIdleTimeoutInput() {
    return this._poolClientIdleTimeout;
  }

  // pool_idle_in_transaction_timeout - computed: false, optional: true, required: false
  private _poolIdleInTransactionTimeout?: number; 
  public get poolIdleInTransactionTimeout() {
    return this.getNumberAttribute('pool_idle_in_transaction_timeout');
  }
  public set poolIdleInTransactionTimeout(value: number) {
    this._poolIdleInTransactionTimeout = value;
  }
  public resetPoolIdleInTransactionTimeout() {
    this._poolIdleInTransactionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdleInTransactionTimeoutInput() {
    return this._poolIdleInTransactionTimeout;
  }

  // pool_size - computed: false, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // pooling_mode - computed: false, optional: true, required: false
  private _poolingMode?: string; 
  public get poolingMode() {
    return this.getStringAttribute('pooling_mode');
  }
  public set poolingMode(value: string) {
    this._poolingMode = value;
  }
  public resetPoolingMode() {
    this._poolingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolingModeInput() {
    return this._poolingMode;
  }
}
export interface DataYandexMdbGreenplumClusterPxfConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#connection_timeout DataYandexMdbGreenplumCluster#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#max_threads DataYandexMdbGreenplumCluster#max_threads}
  */
  readonly maxThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pool_allow_core_thread_timeout DataYandexMdbGreenplumCluster#pool_allow_core_thread_timeout}
  */
  readonly poolAllowCoreThreadTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pool_core_size DataYandexMdbGreenplumCluster#pool_core_size}
  */
  readonly poolCoreSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pool_max_size DataYandexMdbGreenplumCluster#pool_max_size}
  */
  readonly poolMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#pool_queue_capacity DataYandexMdbGreenplumCluster#pool_queue_capacity}
  */
  readonly poolQueueCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#upload_timeout DataYandexMdbGreenplumCluster#upload_timeout}
  */
  readonly uploadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#xms DataYandexMdbGreenplumCluster#xms}
  */
  readonly xms?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#xmx DataYandexMdbGreenplumCluster#xmx}
  */
  readonly xmx?: number;
}

export function dataYandexMdbGreenplumClusterPxfConfigToTerraform(struct?: DataYandexMdbGreenplumClusterPxfConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    max_threads: cdktf.numberToTerraform(struct!.maxThreads),
    pool_allow_core_thread_timeout: cdktf.booleanToTerraform(struct!.poolAllowCoreThreadTimeout),
    pool_core_size: cdktf.numberToTerraform(struct!.poolCoreSize),
    pool_max_size: cdktf.numberToTerraform(struct!.poolMaxSize),
    pool_queue_capacity: cdktf.numberToTerraform(struct!.poolQueueCapacity),
    upload_timeout: cdktf.numberToTerraform(struct!.uploadTimeout),
    xms: cdktf.numberToTerraform(struct!.xms),
    xmx: cdktf.numberToTerraform(struct!.xmx),
  }
}


export function dataYandexMdbGreenplumClusterPxfConfigToHclTerraform(struct?: DataYandexMdbGreenplumClusterPxfConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_threads: {
      value: cdktf.numberToHclTerraform(struct!.maxThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_allow_core_thread_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.poolAllowCoreThreadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_core_size: {
      value: cdktf.numberToHclTerraform(struct!.poolCoreSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_max_size: {
      value: cdktf.numberToHclTerraform(struct!.poolMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_queue_capacity: {
      value: cdktf.numberToHclTerraform(struct!.poolQueueCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_timeout: {
      value: cdktf.numberToHclTerraform(struct!.uploadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xms: {
      value: cdktf.numberToHclTerraform(struct!.xms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xmx: {
      value: cdktf.numberToHclTerraform(struct!.xmx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterPxfConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterPxfConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._maxThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThreads = this._maxThreads;
    }
    if (this._poolAllowCoreThreadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolAllowCoreThreadTimeout = this._poolAllowCoreThreadTimeout;
    }
    if (this._poolCoreSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolCoreSize = this._poolCoreSize;
    }
    if (this._poolMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolMaxSize = this._poolMaxSize;
    }
    if (this._poolQueueCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolQueueCapacity = this._poolQueueCapacity;
    }
    if (this._uploadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadTimeout = this._uploadTimeout;
    }
    if (this._xms !== undefined) {
      hasAnyValues = true;
      internalValueResult.xms = this._xms;
    }
    if (this._xmx !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmx = this._xmx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterPxfConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionTimeout = undefined;
      this._maxThreads = undefined;
      this._poolAllowCoreThreadTimeout = undefined;
      this._poolCoreSize = undefined;
      this._poolMaxSize = undefined;
      this._poolQueueCapacity = undefined;
      this._uploadTimeout = undefined;
      this._xms = undefined;
      this._xmx = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionTimeout = value.connectionTimeout;
      this._maxThreads = value.maxThreads;
      this._poolAllowCoreThreadTimeout = value.poolAllowCoreThreadTimeout;
      this._poolCoreSize = value.poolCoreSize;
      this._poolMaxSize = value.poolMaxSize;
      this._poolQueueCapacity = value.poolQueueCapacity;
      this._uploadTimeout = value.uploadTimeout;
      this._xms = value.xms;
      this._xmx = value.xmx;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // max_threads - computed: false, optional: true, required: false
  private _maxThreads?: number; 
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }
  public set maxThreads(value: number) {
    this._maxThreads = value;
  }
  public resetMaxThreads() {
    this._maxThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadsInput() {
    return this._maxThreads;
  }

  // pool_allow_core_thread_timeout - computed: false, optional: true, required: false
  private _poolAllowCoreThreadTimeout?: boolean | cdktf.IResolvable; 
  public get poolAllowCoreThreadTimeout() {
    return this.getBooleanAttribute('pool_allow_core_thread_timeout');
  }
  public set poolAllowCoreThreadTimeout(value: boolean | cdktf.IResolvable) {
    this._poolAllowCoreThreadTimeout = value;
  }
  public resetPoolAllowCoreThreadTimeout() {
    this._poolAllowCoreThreadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolAllowCoreThreadTimeoutInput() {
    return this._poolAllowCoreThreadTimeout;
  }

  // pool_core_size - computed: false, optional: true, required: false
  private _poolCoreSize?: number; 
  public get poolCoreSize() {
    return this.getNumberAttribute('pool_core_size');
  }
  public set poolCoreSize(value: number) {
    this._poolCoreSize = value;
  }
  public resetPoolCoreSize() {
    this._poolCoreSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolCoreSizeInput() {
    return this._poolCoreSize;
  }

  // pool_max_size - computed: false, optional: true, required: false
  private _poolMaxSize?: number; 
  public get poolMaxSize() {
    return this.getNumberAttribute('pool_max_size');
  }
  public set poolMaxSize(value: number) {
    this._poolMaxSize = value;
  }
  public resetPoolMaxSize() {
    this._poolMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolMaxSizeInput() {
    return this._poolMaxSize;
  }

  // pool_queue_capacity - computed: false, optional: true, required: false
  private _poolQueueCapacity?: number; 
  public get poolQueueCapacity() {
    return this.getNumberAttribute('pool_queue_capacity');
  }
  public set poolQueueCapacity(value: number) {
    this._poolQueueCapacity = value;
  }
  public resetPoolQueueCapacity() {
    this._poolQueueCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolQueueCapacityInput() {
    return this._poolQueueCapacity;
  }

  // upload_timeout - computed: false, optional: true, required: false
  private _uploadTimeout?: number; 
  public get uploadTimeout() {
    return this.getNumberAttribute('upload_timeout');
  }
  public set uploadTimeout(value: number) {
    this._uploadTimeout = value;
  }
  public resetUploadTimeout() {
    this._uploadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTimeoutInput() {
    return this._uploadTimeout;
  }

  // xms - computed: false, optional: true, required: false
  private _xms?: number; 
  public get xms() {
    return this.getNumberAttribute('xms');
  }
  public set xms(value: number) {
    this._xms = value;
  }
  public resetXms() {
    this._xms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmsInput() {
    return this._xms;
  }

  // xmx - computed: false, optional: true, required: false
  private _xmx?: number; 
  public get xmx() {
    return this.getNumberAttribute('xmx');
  }
  public set xmx(value: number) {
    this._xmx = value;
  }
  public resetXmx() {
    this._xmx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmxInput() {
    return this._xmx;
  }
}

export class DataYandexMdbGreenplumClusterPxfConfigList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbGreenplumClusterPxfConfig[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbGreenplumClusterPxfConfigOutputReference {
    return new DataYandexMdbGreenplumClusterPxfConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster yandex_mdb_greenplum_cluster}
*/
export class DataYandexMdbGreenplumCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_greenplum_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMdbGreenplumCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMdbGreenplumCluster to import
  * @param importFromId The id of the existing DataYandexMdbGreenplumCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMdbGreenplumCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_greenplum_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_greenplum_cluster yandex_mdb_greenplum_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbGreenplumClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbGreenplumClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_greenplum_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._folderId = config.folderId;
    this._greenplumConfig = config.greenplumConfig;
    this._id = config.id;
    this._masterHostGroupIds = config.masterHostGroupIds;
    this._name = config.name;
    this._segmentHostGroupIds = config.segmentHostGroupIds;
    this._backgroundActivities.internalValue = config.backgroundActivities;
    this._poolerConfig.internalValue = config.poolerConfig;
    this._pxfConfig.internalValue = config.pxfConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: false, required: false
  private _access = new DataYandexMdbGreenplumClusterAccessList(this, "access", false);
  public get access() {
    return this._access;
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // backup_window_start - computed: true, optional: false, required: false
  private _backupWindowStart = new DataYandexMdbGreenplumClusterBackupWindowStartList(this, "backup_window_start", false);
  public get backupWindowStart() {
    return this._backupWindowStart;
  }

  // cloud_storage - computed: true, optional: false, required: false
  private _cloudStorage = new DataYandexMdbGreenplumClusterCloudStorageList(this, "cloud_storage", false);
  public get cloudStorage() {
    return this._cloudStorage;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // greenplum_config - computed: true, optional: true, required: false
  private _greenplumConfig?: { [key: string]: string }; 
  public get greenplumConfig() {
    return this.getStringMapAttribute('greenplum_config');
  }
  public set greenplumConfig(value: { [key: string]: string }) {
    this._greenplumConfig = value;
  }
  public resetGreenplumConfig() {
    this._greenplumConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenplumConfigInput() {
    return this._greenplumConfig;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // logging - computed: true, optional: false, required: false
  private _logging = new DataYandexMdbGreenplumClusterLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataYandexMdbGreenplumClusterMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // master_host_count - computed: true, optional: false, required: false
  public get masterHostCount() {
    return this.getNumberAttribute('master_host_count');
  }

  // master_host_group_ids - computed: true, optional: true, required: false
  private _masterHostGroupIds?: string[]; 
  public get masterHostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('master_host_group_ids'));
  }
  public set masterHostGroupIds(value: string[]) {
    this._masterHostGroupIds = value;
  }
  public resetMasterHostGroupIds() {
    this._masterHostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHostGroupIdsInput() {
    return this._masterHostGroupIds;
  }

  // master_hosts - computed: true, optional: false, required: false
  private _masterHosts = new DataYandexMdbGreenplumClusterMasterHostsList(this, "master_hosts", false);
  public get masterHosts() {
    return this._masterHosts;
  }

  // master_subcluster - computed: true, optional: false, required: false
  private _masterSubcluster = new DataYandexMdbGreenplumClusterMasterSubclusterList(this, "master_subcluster", false);
  public get masterSubcluster() {
    return this._masterSubcluster;
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // segment_host_count - computed: true, optional: false, required: false
  public get segmentHostCount() {
    return this.getNumberAttribute('segment_host_count');
  }

  // segment_host_group_ids - computed: true, optional: true, required: false
  private _segmentHostGroupIds?: string[]; 
  public get segmentHostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('segment_host_group_ids'));
  }
  public set segmentHostGroupIds(value: string[]) {
    this._segmentHostGroupIds = value;
  }
  public resetSegmentHostGroupIds() {
    this._segmentHostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentHostGroupIdsInput() {
    return this._segmentHostGroupIds;
  }

  // segment_hosts - computed: true, optional: false, required: false
  private _segmentHosts = new DataYandexMdbGreenplumClusterSegmentHostsList(this, "segment_hosts", false);
  public get segmentHosts() {
    return this._segmentHosts;
  }

  // segment_in_host - computed: true, optional: false, required: false
  public get segmentInHost() {
    return this.getNumberAttribute('segment_in_host');
  }

  // segment_subcluster - computed: true, optional: false, required: false
  private _segmentSubcluster = new DataYandexMdbGreenplumClusterSegmentSubclusterList(this, "segment_subcluster", false);
  public get segmentSubcluster() {
    return this._segmentSubcluster;
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // background_activities - computed: false, optional: true, required: false
  private _backgroundActivities = new DataYandexMdbGreenplumClusterBackgroundActivitiesList(this, "background_activities", false);
  public get backgroundActivities() {
    return this._backgroundActivities;
  }
  public putBackgroundActivities(value: DataYandexMdbGreenplumClusterBackgroundActivities[] | cdktf.IResolvable) {
    this._backgroundActivities.internalValue = value;
  }
  public resetBackgroundActivities() {
    this._backgroundActivities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundActivitiesInput() {
    return this._backgroundActivities.internalValue;
  }

  // pooler_config - computed: false, optional: true, required: false
  private _poolerConfig = new DataYandexMdbGreenplumClusterPoolerConfigOutputReference(this, "pooler_config");
  public get poolerConfig() {
    return this._poolerConfig;
  }
  public putPoolerConfig(value: DataYandexMdbGreenplumClusterPoolerConfig) {
    this._poolerConfig.internalValue = value;
  }
  public resetPoolerConfig() {
    this._poolerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolerConfigInput() {
    return this._poolerConfig.internalValue;
  }

  // pxf_config - computed: false, optional: true, required: false
  private _pxfConfig = new DataYandexMdbGreenplumClusterPxfConfigList(this, "pxf_config", false);
  public get pxfConfig() {
    return this._pxfConfig;
  }
  public putPxfConfig(value: DataYandexMdbGreenplumClusterPxfConfig[] | cdktf.IResolvable) {
    this._pxfConfig.internalValue = value;
  }
  public resetPxfConfig() {
    this._pxfConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxfConfigInput() {
    return this._pxfConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      greenplum_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._greenplumConfig),
      id: cdktf.stringToTerraform(this._id),
      master_host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masterHostGroupIds),
      name: cdktf.stringToTerraform(this._name),
      segment_host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._segmentHostGroupIds),
      background_activities: cdktf.listMapper(dataYandexMdbGreenplumClusterBackgroundActivitiesToTerraform, true)(this._backgroundActivities.internalValue),
      pooler_config: dataYandexMdbGreenplumClusterPoolerConfigToTerraform(this._poolerConfig.internalValue),
      pxf_config: cdktf.listMapper(dataYandexMdbGreenplumClusterPxfConfigToTerraform, true)(this._pxfConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      greenplum_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._greenplumConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_host_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._masterHostGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_host_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._segmentHostGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      background_activities: {
        value: cdktf.listMapperHcl(dataYandexMdbGreenplumClusterBackgroundActivitiesToHclTerraform, true)(this._backgroundActivities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbGreenplumClusterBackgroundActivitiesList",
      },
      pooler_config: {
        value: dataYandexMdbGreenplumClusterPoolerConfigToHclTerraform(this._poolerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbGreenplumClusterPoolerConfigList",
      },
      pxf_config: {
        value: cdktf.listMapperHcl(dataYandexMdbGreenplumClusterPxfConfigToHclTerraform, true)(this._pxfConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbGreenplumClusterPxfConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
