// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbGreenplumClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets whether the master hosts should get a public IP address on creation. Changing this parameter for an existing host is not supported at the moment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#assign_public_ip MdbGreenplumCluster#assign_public_ip}
  */
  readonly assignPublicIp: boolean | cdktf.IResolvable;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#deletion_protection MdbGreenplumCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#description MdbGreenplumCluster#description}
  */
  readonly description?: string;
  /**
  * Deployment environment of the Greenplum cluster. (PRODUCTION, PRESTABLE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#environment MdbGreenplumCluster#environment}
  */
  readonly environment: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#folder_id MdbGreenplumCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Greenplum cluster config. Detail info in `Greenplum cluster settings` block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#greenplum_config MdbGreenplumCluster#greenplum_config}
  */
  readonly greenplumConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#id MdbGreenplumCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#labels MdbGreenplumCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Number of hosts in master subcluster (1 or 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#master_host_count MdbGreenplumCluster#master_host_count}
  */
  readonly masterHostCount: number;
  /**
  * A list of IDs of the host groups to place master subclusters' VMs of the cluster on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#master_host_group_ids MdbGreenplumCluster#master_host_group_ids}
  */
  readonly masterHostGroupIds?: string[];
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#name MdbGreenplumCluster#name}
  */
  readonly name: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#network_id MdbGreenplumCluster#network_id}
  */
  readonly networkId: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#security_group_ids MdbGreenplumCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Number of hosts in segment subcluster (from 1 to 32).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#segment_host_count MdbGreenplumCluster#segment_host_count}
  */
  readonly segmentHostCount: number;
  /**
  * A list of IDs of the host groups to place segment subclusters' VMs of the cluster on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#segment_host_group_ids MdbGreenplumCluster#segment_host_group_ids}
  */
  readonly segmentHostGroupIds?: string[];
  /**
  * Number of segments on segment host (not more then 1 + RAM/8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#segment_in_host MdbGreenplumCluster#segment_in_host}
  */
  readonly segmentInHost: number;
  /**
  * ID of service account to use with Yandex Cloud resources (e.g. S3, Cloud Logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#service_account_id MdbGreenplumCluster#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * The ID of the subnet, to which the hosts belongs. The subnet must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#subnet_id MdbGreenplumCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Greenplum cluster admin user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#user_name MdbGreenplumCluster#user_name}
  */
  readonly userName: string;
  /**
  * Greenplum cluster admin password name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#user_password MdbGreenplumCluster#user_password}
  */
  readonly userPassword: string;
  /**
  * Version of the Greenplum cluster. (`6.28`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#version MdbGreenplumCluster#version}
  */
  readonly version: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#zone MdbGreenplumCluster#zone}
  */
  readonly zone: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#access MdbGreenplumCluster#access}
  */
  readonly access?: MdbGreenplumClusterAccess;
  /**
  * background_activities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#background_activities MdbGreenplumCluster#background_activities}
  */
  readonly backgroundActivities?: MdbGreenplumClusterBackgroundActivities[] | cdktf.IResolvable;
  /**
  * backup_window_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#backup_window_start MdbGreenplumCluster#backup_window_start}
  */
  readonly backupWindowStart?: MdbGreenplumClusterBackupWindowStart;
  /**
  * cloud_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#cloud_storage MdbGreenplumCluster#cloud_storage}
  */
  readonly cloudStorage?: MdbGreenplumClusterCloudStorage;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#logging MdbGreenplumCluster#logging}
  */
  readonly logging?: MdbGreenplumClusterLogging;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#maintenance_window MdbGreenplumCluster#maintenance_window}
  */
  readonly maintenanceWindow?: MdbGreenplumClusterMaintenanceWindow;
  /**
  * master_subcluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#master_subcluster MdbGreenplumCluster#master_subcluster}
  */
  readonly masterSubcluster: MdbGreenplumClusterMasterSubcluster;
  /**
  * pooler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pooler_config MdbGreenplumCluster#pooler_config}
  */
  readonly poolerConfig?: MdbGreenplumClusterPoolerConfig;
  /**
  * pxf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pxf_config MdbGreenplumCluster#pxf_config}
  */
  readonly pxfConfig?: MdbGreenplumClusterPxfConfig;
  /**
  * segment_subcluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#segment_subcluster MdbGreenplumCluster#segment_subcluster}
  */
  readonly segmentSubcluster: MdbGreenplumClusterSegmentSubcluster;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#timeouts MdbGreenplumCluster#timeouts}
  */
  readonly timeouts?: MdbGreenplumClusterTimeouts;
}
export interface MdbGreenplumClusterMasterHosts {
}

export function mdbGreenplumClusterMasterHostsToTerraform(struct?: MdbGreenplumClusterMasterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mdbGreenplumClusterMasterHostsToHclTerraform(struct?: MdbGreenplumClusterMasterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MdbGreenplumClusterMasterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterMasterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterMasterHosts | undefined) {
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

export class MdbGreenplumClusterMasterHostsList extends cdktf.ComplexList {

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
  public get(index: number): MdbGreenplumClusterMasterHostsOutputReference {
    return new MdbGreenplumClusterMasterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterSegmentHosts {
}

export function mdbGreenplumClusterSegmentHostsToTerraform(struct?: MdbGreenplumClusterSegmentHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mdbGreenplumClusterSegmentHostsToHclTerraform(struct?: MdbGreenplumClusterSegmentHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MdbGreenplumClusterSegmentHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterSegmentHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterSegmentHosts | undefined) {
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

export class MdbGreenplumClusterSegmentHostsList extends cdktf.ComplexList {

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
  public get(index: number): MdbGreenplumClusterSegmentHostsOutputReference {
    return new MdbGreenplumClusterSegmentHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterAccess {
  /**
  * Allow access for [Yandex DataLens](https://yandex.cloud/services/datalens).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#data_lens MdbGreenplumCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allow access for [DataTransfer](https://yandex.cloud/services/data-transfer)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#data_transfer MdbGreenplumCluster#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Allows access for [SQL queries in the management console](https://yandex.cloud/docs/managed-mysql/operations/web-sql-query).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#web_sql MdbGreenplumCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
  /**
  * Allow access for [Yandex Query](https://yandex.cloud/services/query)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#yandex_query MdbGreenplumCluster#yandex_query}
  */
  readonly yandexQuery?: boolean | cdktf.IResolvable;
}

export function mdbGreenplumClusterAccessToTerraform(struct?: MdbGreenplumClusterAccessOutputReference | MdbGreenplumClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    data_transfer: cdktf.booleanToTerraform(struct!.dataTransfer),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
    yandex_query: cdktf.booleanToTerraform(struct!.yandexQuery),
  }
}


export function mdbGreenplumClusterAccessToHclTerraform(struct?: MdbGreenplumClusterAccessOutputReference | MdbGreenplumClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_lens: {
      value: cdktf.booleanToHclTerraform(struct!.dataLens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.dataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_sql: {
      value: cdktf.booleanToHclTerraform(struct!.webSql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    yandex_query: {
      value: cdktf.booleanToHclTerraform(struct!.yandexQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLens !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLens = this._dataLens;
    }
    if (this._dataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransfer = this._dataTransfer;
    }
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    if (this._yandexQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.yandexQuery = this._yandexQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLens = undefined;
      this._dataTransfer = undefined;
      this._webSql = undefined;
      this._yandexQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLens = value.dataLens;
      this._dataTransfer = value.dataTransfer;
      this._webSql = value.webSql;
      this._yandexQuery = value.yandexQuery;
    }
  }

  // data_lens - computed: false, optional: true, required: false
  private _dataLens?: boolean | cdktf.IResolvable; 
  public get dataLens() {
    return this.getBooleanAttribute('data_lens');
  }
  public set dataLens(value: boolean | cdktf.IResolvable) {
    this._dataLens = value;
  }
  public resetDataLens() {
    this._dataLens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLensInput() {
    return this._dataLens;
  }

  // data_transfer - computed: false, optional: true, required: false
  private _dataTransfer?: boolean | cdktf.IResolvable; 
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }
  public set dataTransfer(value: boolean | cdktf.IResolvable) {
    this._dataTransfer = value;
  }
  public resetDataTransfer() {
    this._dataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferInput() {
    return this._dataTransfer;
  }

  // web_sql - computed: false, optional: true, required: false
  private _webSql?: boolean | cdktf.IResolvable; 
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }
  public set webSql(value: boolean | cdktf.IResolvable) {
    this._webSql = value;
  }
  public resetWebSql() {
    this._webSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSqlInput() {
    return this._webSql;
  }

  // yandex_query - computed: false, optional: true, required: false
  private _yandexQuery?: boolean | cdktf.IResolvable; 
  public get yandexQuery() {
    return this.getBooleanAttribute('yandex_query');
  }
  public set yandexQuery(value: boolean | cdktf.IResolvable) {
    this._yandexQuery = value;
  }
  public resetYandexQuery() {
    this._yandexQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yandexQueryInput() {
    return this._yandexQuery;
  }
}
export interface MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum {
  /**
  * Maximum duration of the `ANALYZE` operation, in seconds. The default value is `36000`. As soon as this period expires, the `ANALYZE` operation will be forced to terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#analyze_timeout MdbGreenplumCluster#analyze_timeout}
  */
  readonly analyzeTimeout?: number;
  /**
  * Time of day in 'HH:MM' format when scripts should run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#start_time MdbGreenplumCluster#start_time}
  */
  readonly startTime?: string;
  /**
  * Maximum duration of the `VACUUM` operation, in seconds. The default value is `36000`. As soon as this period expires, the `VACUUM` operation will be forced to terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#vacuum_timeout MdbGreenplumCluster#vacuum_timeout}
  */
  readonly vacuumTimeout?: number;
}

export function mdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumToTerraform(struct?: MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumToHclTerraform(struct?: MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable | undefined) {
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

  // analyze_timeout - computed: false, optional: true, required: false
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

  // start_time - computed: false, optional: true, required: false
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

  // vacuum_timeout - computed: false, optional: true, required: false
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

export class MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumList extends cdktf.ComplexList {
  public internalValue? : MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum[] | cdktf.IResolvable

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
  public get(index: number): MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumOutputReference {
    return new MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterBackgroundActivitiesQueryKillerIdle {
  /**
  * Flag that indicates whether script is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#enable MdbGreenplumCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * List of users to ignore when considering queries to terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#ignore_users MdbGreenplumCluster#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Maximum duration for this type of queries (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#max_age MdbGreenplumCluster#max_age}
  */
  readonly maxAge?: number;
}

export function mdbGreenplumClusterBackgroundActivitiesQueryKillerIdleToTerraform(struct?: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdle | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterBackgroundActivitiesQueryKillerIdleToHclTerraform(struct?: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdle | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterBackgroundActivitiesQueryKillerIdle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdle | cdktf.IResolvable | undefined) {
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

  // enable - computed: false, optional: true, required: false
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

  // ignore_users - computed: false, optional: true, required: false
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

  // max_age - computed: false, optional: true, required: false
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

export class MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleList extends cdktf.ComplexList {
  public internalValue? : MdbGreenplumClusterBackgroundActivitiesQueryKillerIdle[] | cdktf.IResolvable

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
  public get(index: number): MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleOutputReference {
    return new MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction {
  /**
  * Flag that indicates whether script is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#enable MdbGreenplumCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * List of users to ignore when considering queries to terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#ignore_users MdbGreenplumCluster#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Maximum duration for this type of queries (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#max_age MdbGreenplumCluster#max_age}
  */
  readonly maxAge?: number;
}

export function mdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionToTerraform(struct?: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionToHclTerraform(struct?: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction | cdktf.IResolvable | undefined) {
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

  // enable - computed: false, optional: true, required: false
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

  // ignore_users - computed: false, optional: true, required: false
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

  // max_age - computed: false, optional: true, required: false
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

export class MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionList extends cdktf.ComplexList {
  public internalValue? : MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction[] | cdktf.IResolvable

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
  public get(index: number): MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionOutputReference {
    return new MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning {
  /**
  * Flag that indicates whether script is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#enable MdbGreenplumCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * List of users to ignore when considering queries to terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#ignore_users MdbGreenplumCluster#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Maximum duration for this type of queries (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#max_age MdbGreenplumCluster#max_age}
  */
  readonly maxAge?: number;
}

export function mdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningToTerraform(struct?: MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningToHclTerraform(struct?: MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning | cdktf.IResolvable | undefined) {
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

  // enable - computed: false, optional: true, required: false
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

  // ignore_users - computed: false, optional: true, required: false
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

  // max_age - computed: false, optional: true, required: false
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

export class MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningList extends cdktf.ComplexList {
  public internalValue? : MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning[] | cdktf.IResolvable

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
  public get(index: number): MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningOutputReference {
    return new MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterBackgroundActivities {
  /**
  * analyze_and_vacuum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#analyze_and_vacuum MdbGreenplumCluster#analyze_and_vacuum}
  */
  readonly analyzeAndVacuum?: MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum[] | cdktf.IResolvable;
  /**
  * query_killer_idle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#query_killer_idle MdbGreenplumCluster#query_killer_idle}
  */
  readonly queryKillerIdle?: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdle[] | cdktf.IResolvable;
  /**
  * query_killer_idle_in_transaction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#query_killer_idle_in_transaction MdbGreenplumCluster#query_killer_idle_in_transaction}
  */
  readonly queryKillerIdleInTransaction?: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction[] | cdktf.IResolvable;
  /**
  * query_killer_long_running block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#query_killer_long_running MdbGreenplumCluster#query_killer_long_running}
  */
  readonly queryKillerLongRunning?: MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning[] | cdktf.IResolvable;
}

export function mdbGreenplumClusterBackgroundActivitiesToTerraform(struct?: MdbGreenplumClusterBackgroundActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyze_and_vacuum: cdktf.listMapper(mdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumToTerraform, true)(struct!.analyzeAndVacuum),
    query_killer_idle: cdktf.listMapper(mdbGreenplumClusterBackgroundActivitiesQueryKillerIdleToTerraform, true)(struct!.queryKillerIdle),
    query_killer_idle_in_transaction: cdktf.listMapper(mdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionToTerraform, true)(struct!.queryKillerIdleInTransaction),
    query_killer_long_running: cdktf.listMapper(mdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningToTerraform, true)(struct!.queryKillerLongRunning),
  }
}


export function mdbGreenplumClusterBackgroundActivitiesToHclTerraform(struct?: MdbGreenplumClusterBackgroundActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analyze_and_vacuum: {
      value: cdktf.listMapperHcl(mdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumToHclTerraform, true)(struct!.analyzeAndVacuum),
      isBlock: true,
      type: "list",
      storageClassType: "MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumList",
    },
    query_killer_idle: {
      value: cdktf.listMapperHcl(mdbGreenplumClusterBackgroundActivitiesQueryKillerIdleToHclTerraform, true)(struct!.queryKillerIdle),
      isBlock: true,
      type: "list",
      storageClassType: "MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleList",
    },
    query_killer_idle_in_transaction: {
      value: cdktf.listMapperHcl(mdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionToHclTerraform, true)(struct!.queryKillerIdleInTransaction),
      isBlock: true,
      type: "list",
      storageClassType: "MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionList",
    },
    query_killer_long_running: {
      value: cdktf.listMapperHcl(mdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningToHclTerraform, true)(struct!.queryKillerLongRunning),
      isBlock: true,
      type: "list",
      storageClassType: "MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterBackgroundActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterBackgroundActivities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterBackgroundActivities | cdktf.IResolvable | undefined) {
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
  private _analyzeAndVacuum = new MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuumList(this, "analyze_and_vacuum", false);
  public get analyzeAndVacuum() {
    return this._analyzeAndVacuum;
  }
  public putAnalyzeAndVacuum(value: MdbGreenplumClusterBackgroundActivitiesAnalyzeAndVacuum[] | cdktf.IResolvable) {
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
  private _queryKillerIdle = new MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleList(this, "query_killer_idle", false);
  public get queryKillerIdle() {
    return this._queryKillerIdle;
  }
  public putQueryKillerIdle(value: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdle[] | cdktf.IResolvable) {
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
  private _queryKillerIdleInTransaction = new MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransactionList(this, "query_killer_idle_in_transaction", false);
  public get queryKillerIdleInTransaction() {
    return this._queryKillerIdleInTransaction;
  }
  public putQueryKillerIdleInTransaction(value: MdbGreenplumClusterBackgroundActivitiesQueryKillerIdleInTransaction[] | cdktf.IResolvable) {
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
  private _queryKillerLongRunning = new MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunningList(this, "query_killer_long_running", false);
  public get queryKillerLongRunning() {
    return this._queryKillerLongRunning;
  }
  public putQueryKillerLongRunning(value: MdbGreenplumClusterBackgroundActivitiesQueryKillerLongRunning[] | cdktf.IResolvable) {
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

export class MdbGreenplumClusterBackgroundActivitiesList extends cdktf.ComplexList {
  public internalValue? : MdbGreenplumClusterBackgroundActivities[] | cdktf.IResolvable

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
  public get(index: number): MdbGreenplumClusterBackgroundActivitiesOutputReference {
    return new MdbGreenplumClusterBackgroundActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterBackupWindowStart {
  /**
  * The hour at which backup will be started (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#hours MdbGreenplumCluster#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which backup will be started (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#minutes MdbGreenplumCluster#minutes}
  */
  readonly minutes?: number;
}

export function mdbGreenplumClusterBackupWindowStartToTerraform(struct?: MdbGreenplumClusterBackupWindowStartOutputReference | MdbGreenplumClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function mdbGreenplumClusterBackupWindowStartToHclTerraform(struct?: MdbGreenplumClusterBackupWindowStartOutputReference | MdbGreenplumClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterBackupWindowStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterBackupWindowStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface MdbGreenplumClusterCloudStorage {
  /**
  * Whether to use cloud storage or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#enable MdbGreenplumCluster#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function mdbGreenplumClusterCloudStorageToTerraform(struct?: MdbGreenplumClusterCloudStorageOutputReference | MdbGreenplumClusterCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function mdbGreenplumClusterCloudStorageToHclTerraform(struct?: MdbGreenplumClusterCloudStorageOutputReference | MdbGreenplumClusterCloudStorage): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterCloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterCloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
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
}
export interface MdbGreenplumClusterLogging {
  /**
  * Deliver Yandex Command Center's logs to Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#command_center_enabled MdbGreenplumCluster#command_center_enabled}
  */
  readonly commandCenterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Flag that indicates whether log delivery to Cloud Logging is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#enabled MdbGreenplumCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ID of folder to which deliver logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#folder_id MdbGreenplumCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Deliver Greenplum's logs to Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#greenplum_enabled MdbGreenplumCluster#greenplum_enabled}
  */
  readonly greenplumEnabled?: boolean | cdktf.IResolvable;
  /**
  * Cloud Logging group ID to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#log_group_id MdbGreenplumCluster#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Deliver connection pooler's logs to Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pooler_enabled MdbGreenplumCluster#pooler_enabled}
  */
  readonly poolerEnabled?: boolean | cdktf.IResolvable;
}

export function mdbGreenplumClusterLoggingToTerraform(struct?: MdbGreenplumClusterLoggingOutputReference | MdbGreenplumClusterLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_center_enabled: cdktf.booleanToTerraform(struct!.commandCenterEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    greenplum_enabled: cdktf.booleanToTerraform(struct!.greenplumEnabled),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    pooler_enabled: cdktf.booleanToTerraform(struct!.poolerEnabled),
  }
}


export function mdbGreenplumClusterLoggingToHclTerraform(struct?: MdbGreenplumClusterLoggingOutputReference | MdbGreenplumClusterLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_center_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.commandCenterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greenplum_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.greenplumEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pooler_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.poolerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandCenterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandCenterEnabled = this._commandCenterEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._greenplumEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.greenplumEnabled = this._greenplumEnabled;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._poolerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolerEnabled = this._poolerEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandCenterEnabled = undefined;
      this._enabled = undefined;
      this._folderId = undefined;
      this._greenplumEnabled = undefined;
      this._logGroupId = undefined;
      this._poolerEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandCenterEnabled = value.commandCenterEnabled;
      this._enabled = value.enabled;
      this._folderId = value.folderId;
      this._greenplumEnabled = value.greenplumEnabled;
      this._logGroupId = value.logGroupId;
      this._poolerEnabled = value.poolerEnabled;
    }
  }

  // command_center_enabled - computed: false, optional: true, required: false
  private _commandCenterEnabled?: boolean | cdktf.IResolvable; 
  public get commandCenterEnabled() {
    return this.getBooleanAttribute('command_center_enabled');
  }
  public set commandCenterEnabled(value: boolean | cdktf.IResolvable) {
    this._commandCenterEnabled = value;
  }
  public resetCommandCenterEnabled() {
    this._commandCenterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandCenterEnabledInput() {
    return this._commandCenterEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // folder_id - computed: false, optional: true, required: false
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

  // greenplum_enabled - computed: false, optional: true, required: false
  private _greenplumEnabled?: boolean | cdktf.IResolvable; 
  public get greenplumEnabled() {
    return this.getBooleanAttribute('greenplum_enabled');
  }
  public set greenplumEnabled(value: boolean | cdktf.IResolvable) {
    this._greenplumEnabled = value;
  }
  public resetGreenplumEnabled() {
    this._greenplumEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenplumEnabledInput() {
    return this._greenplumEnabled;
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // pooler_enabled - computed: false, optional: true, required: false
  private _poolerEnabled?: boolean | cdktf.IResolvable; 
  public get poolerEnabled() {
    return this.getBooleanAttribute('pooler_enabled');
  }
  public set poolerEnabled(value: boolean | cdktf.IResolvable) {
    this._poolerEnabled = value;
  }
  public resetPoolerEnabled() {
    this._poolerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolerEnabledInput() {
    return this._poolerEnabled;
  }
}
export interface MdbGreenplumClusterMaintenanceWindow {
  /**
  * Day of the week (in `DDD` format). Allowed values: `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#day MdbGreenplumCluster#day}
  */
  readonly day?: string;
  /**
  * Hour of the day in UTC (in `HH` format). Allowed value is between 0 and 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#hour MdbGreenplumCluster#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either `ANYTIME` or `WEEKLY`. A day and hour of window need to be specified with weekly window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#type MdbGreenplumCluster#type}
  */
  readonly type: string;
}

export function mdbGreenplumClusterMaintenanceWindowToTerraform(struct?: MdbGreenplumClusterMaintenanceWindowOutputReference | MdbGreenplumClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mdbGreenplumClusterMaintenanceWindowToHclTerraform(struct?: MdbGreenplumClusterMaintenanceWindowOutputReference | MdbGreenplumClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MdbGreenplumClusterMasterSubclusterResources {
  /**
  * Volume of the storage available to a host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#disk_size MdbGreenplumCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of Greenplum hosts - environment default is used if missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#disk_type_id MdbGreenplumCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * The ID of the preset for computational resources available to a host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/ru/docs/managed-greenplum/concepts/instance-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#resource_preset_id MdbGreenplumCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbGreenplumClusterMasterSubclusterResourcesToTerraform(struct?: MdbGreenplumClusterMasterSubclusterResourcesOutputReference | MdbGreenplumClusterMasterSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function mdbGreenplumClusterMasterSubclusterResourcesToHclTerraform(struct?: MdbGreenplumClusterMasterSubclusterResourcesOutputReference | MdbGreenplumClusterMasterSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterMasterSubclusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterMasterSubclusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterMasterSubclusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbGreenplumClusterMasterSubcluster {
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#resources MdbGreenplumCluster#resources}
  */
  readonly resources: MdbGreenplumClusterMasterSubclusterResources;
}

export function mdbGreenplumClusterMasterSubclusterToTerraform(struct?: MdbGreenplumClusterMasterSubclusterOutputReference | MdbGreenplumClusterMasterSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: mdbGreenplumClusterMasterSubclusterResourcesToTerraform(struct!.resources),
  }
}


export function mdbGreenplumClusterMasterSubclusterToHclTerraform(struct?: MdbGreenplumClusterMasterSubclusterOutputReference | MdbGreenplumClusterMasterSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: mdbGreenplumClusterMasterSubclusterResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "MdbGreenplumClusterMasterSubclusterResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterMasterSubclusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterMasterSubcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterMasterSubcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbGreenplumClusterMasterSubclusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbGreenplumClusterMasterSubclusterResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbGreenplumClusterPoolerConfig {
  /**
  * Value for `pool_client_idle_timeout` [parameter in Odyssey](https://github.com/yandex/odyssey/blob/master/docs/configuration/rules.md#pool_client_idle_timeout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pool_client_idle_timeout MdbGreenplumCluster#pool_client_idle_timeout}
  */
  readonly poolClientIdleTimeout?: number;
  /**
  * Value for `pool_idle_in_transaction_timeout` [parameter in Odyssey](https://github.com/yandex/odyssey/blob/master/docs/configuration/rules.md#pool_idle_in_transaction_timeout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pool_idle_in_transaction_timeout MdbGreenplumCluster#pool_idle_in_transaction_timeout}
  */
  readonly poolIdleInTransactionTimeout?: number;
  /**
  * Value for `pool_size` [parameter in Odyssey](https://github.com/yandex/odyssey/blob/master/docs/configuration/rules.md#pool_size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pool_size MdbGreenplumCluster#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Mode that the connection pooler is working in. See descriptions of all modes in the [documentation for Odyssey](https://github.com/yandex/odyssey/blob/master/docs/configuration/rules.md#pool).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pooling_mode MdbGreenplumCluster#pooling_mode}
  */
  readonly poolingMode?: string;
}

export function mdbGreenplumClusterPoolerConfigToTerraform(struct?: MdbGreenplumClusterPoolerConfigOutputReference | MdbGreenplumClusterPoolerConfig): any {
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


export function mdbGreenplumClusterPoolerConfigToHclTerraform(struct?: MdbGreenplumClusterPoolerConfigOutputReference | MdbGreenplumClusterPoolerConfig): any {
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

export class MdbGreenplumClusterPoolerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterPoolerConfig | undefined {
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

  public set internalValue(value: MdbGreenplumClusterPoolerConfig | undefined) {
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
export interface MdbGreenplumClusterPxfConfig {
  /**
  * The Tomcat server connection timeout for read operations in seconds. Value is between 5 and 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#connection_timeout MdbGreenplumCluster#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * The maximum number of PXF tomcat threads. Value is between 1 and 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#max_threads MdbGreenplumCluster#max_threads}
  */
  readonly maxThreads?: number;
  /**
  * Identifies whether or not core streaming threads are allowed to time out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pool_allow_core_thread_timeout MdbGreenplumCluster#pool_allow_core_thread_timeout}
  */
  readonly poolAllowCoreThreadTimeout?: boolean | cdktf.IResolvable;
  /**
  * The number of core streaming threads. Value is between 1 and 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pool_core_size MdbGreenplumCluster#pool_core_size}
  */
  readonly poolCoreSize?: number;
  /**
  * The maximum allowed number of core streaming threads. Value is between 1 and 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pool_max_size MdbGreenplumCluster#pool_max_size}
  */
  readonly poolMaxSize?: number;
  /**
  * The capacity of the core streaming thread pool queue. Value is positive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#pool_queue_capacity MdbGreenplumCluster#pool_queue_capacity}
  */
  readonly poolQueueCapacity?: number;
  /**
  * The Tomcat server connection timeout for write operations in seconds. Value is between 5 and 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#upload_timeout MdbGreenplumCluster#upload_timeout}
  */
  readonly uploadTimeout?: number;
  /**
  * Maximum JVM heap size for PXF daemon. Value is between 64 and 16384.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#xms MdbGreenplumCluster#xms}
  */
  readonly xms?: number;
  /**
  * Initial JVM heap size for PXF daemon. Value is between 64 and 16384.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#xmx MdbGreenplumCluster#xmx}
  */
  readonly xmx?: number;
}

export function mdbGreenplumClusterPxfConfigToTerraform(struct?: MdbGreenplumClusterPxfConfigOutputReference | MdbGreenplumClusterPxfConfig): any {
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


export function mdbGreenplumClusterPxfConfigToHclTerraform(struct?: MdbGreenplumClusterPxfConfigOutputReference | MdbGreenplumClusterPxfConfig): any {
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

export class MdbGreenplumClusterPxfConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterPxfConfig | undefined {
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

  public set internalValue(value: MdbGreenplumClusterPxfConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface MdbGreenplumClusterSegmentSubclusterResources {
  /**
  * Volume of the storage available to a host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#disk_size MdbGreenplumCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Type of the storage of Greenplum hosts - environment default is used if missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#disk_type_id MdbGreenplumCluster#disk_type_id}
  */
  readonly diskTypeId: string;
  /**
  * The ID of the preset for computational resources available to a host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/ru/docs/managed-greenplum/concepts/instance-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#resource_preset_id MdbGreenplumCluster#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbGreenplumClusterSegmentSubclusterResourcesToTerraform(struct?: MdbGreenplumClusterSegmentSubclusterResourcesOutputReference | MdbGreenplumClusterSegmentSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function mdbGreenplumClusterSegmentSubclusterResourcesToHclTerraform(struct?: MdbGreenplumClusterSegmentSubclusterResourcesOutputReference | MdbGreenplumClusterSegmentSubclusterResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterSegmentSubclusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterSegmentSubclusterResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterSegmentSubclusterResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: false, optional: false, required: true
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbGreenplumClusterSegmentSubcluster {
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#resources MdbGreenplumCluster#resources}
  */
  readonly resources: MdbGreenplumClusterSegmentSubclusterResources;
}

export function mdbGreenplumClusterSegmentSubclusterToTerraform(struct?: MdbGreenplumClusterSegmentSubclusterOutputReference | MdbGreenplumClusterSegmentSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: mdbGreenplumClusterSegmentSubclusterResourcesToTerraform(struct!.resources),
  }
}


export function mdbGreenplumClusterSegmentSubclusterToHclTerraform(struct?: MdbGreenplumClusterSegmentSubclusterOutputReference | MdbGreenplumClusterSegmentSubcluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: mdbGreenplumClusterSegmentSubclusterResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "MdbGreenplumClusterSegmentSubclusterResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterSegmentSubclusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MdbGreenplumClusterSegmentSubcluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterSegmentSubcluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbGreenplumClusterSegmentSubclusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbGreenplumClusterSegmentSubclusterResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbGreenplumClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#create MdbGreenplumCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#delete MdbGreenplumCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#update MdbGreenplumCluster#update}
  */
  readonly update?: string;
}

export function mdbGreenplumClusterTimeoutsToTerraform(struct?: MdbGreenplumClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mdbGreenplumClusterTimeoutsToHclTerraform(struct?: MdbGreenplumClusterTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster yandex_mdb_greenplum_cluster}
*/
export class MdbGreenplumCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_greenplum_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbGreenplumCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbGreenplumCluster to import
  * @param importFromId The id of the existing MdbGreenplumCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbGreenplumCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_greenplum_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/mdb_greenplum_cluster yandex_mdb_greenplum_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbGreenplumClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MdbGreenplumClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_greenplum_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignPublicIp = config.assignPublicIp;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._greenplumConfig = config.greenplumConfig;
    this._id = config.id;
    this._labels = config.labels;
    this._masterHostCount = config.masterHostCount;
    this._masterHostGroupIds = config.masterHostGroupIds;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._segmentHostCount = config.segmentHostCount;
    this._segmentHostGroupIds = config.segmentHostGroupIds;
    this._segmentInHost = config.segmentInHost;
    this._serviceAccountId = config.serviceAccountId;
    this._subnetId = config.subnetId;
    this._userName = config.userName;
    this._userPassword = config.userPassword;
    this._version = config.version;
    this._zone = config.zone;
    this._access.internalValue = config.access;
    this._backgroundActivities.internalValue = config.backgroundActivities;
    this._backupWindowStart.internalValue = config.backupWindowStart;
    this._cloudStorage.internalValue = config.cloudStorage;
    this._logging.internalValue = config.logging;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._masterSubcluster.internalValue = config.masterSubcluster;
    this._poolerConfig.internalValue = config.poolerConfig;
    this._pxfConfig.internalValue = config.pxfConfig;
    this._segmentSubcluster.internalValue = config.segmentSubcluster;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_public_ip - computed: false, optional: false, required: true
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // master_host_count - computed: false, optional: false, required: true
  private _masterHostCount?: number; 
  public get masterHostCount() {
    return this.getNumberAttribute('master_host_count');
  }
  public set masterHostCount(value: number) {
    this._masterHostCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHostCountInput() {
    return this._masterHostCount;
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
  private _masterHosts = new MdbGreenplumClusterMasterHostsList(this, "master_hosts", false);
  public get masterHosts() {
    return this._masterHosts;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // segment_host_count - computed: false, optional: false, required: true
  private _segmentHostCount?: number; 
  public get segmentHostCount() {
    return this.getNumberAttribute('segment_host_count');
  }
  public set segmentHostCount(value: number) {
    this._segmentHostCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentHostCountInput() {
    return this._segmentHostCount;
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
  private _segmentHosts = new MdbGreenplumClusterSegmentHostsList(this, "segment_hosts", false);
  public get segmentHosts() {
    return this._segmentHosts;
  }

  // segment_in_host - computed: false, optional: false, required: true
  private _segmentInHost?: number; 
  public get segmentInHost() {
    return this.getNumberAttribute('segment_in_host');
  }
  public set segmentInHost(value: number) {
    this._segmentInHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInHostInput() {
    return this._segmentInHost;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // access - computed: false, optional: true, required: false
  private _access = new MdbGreenplumClusterAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbGreenplumClusterAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // background_activities - computed: false, optional: true, required: false
  private _backgroundActivities = new MdbGreenplumClusterBackgroundActivitiesList(this, "background_activities", false);
  public get backgroundActivities() {
    return this._backgroundActivities;
  }
  public putBackgroundActivities(value: MdbGreenplumClusterBackgroundActivities[] | cdktf.IResolvable) {
    this._backgroundActivities.internalValue = value;
  }
  public resetBackgroundActivities() {
    this._backgroundActivities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundActivitiesInput() {
    return this._backgroundActivities.internalValue;
  }

  // backup_window_start - computed: false, optional: true, required: false
  private _backupWindowStart = new MdbGreenplumClusterBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbGreenplumClusterBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // cloud_storage - computed: false, optional: true, required: false
  private _cloudStorage = new MdbGreenplumClusterCloudStorageOutputReference(this, "cloud_storage");
  public get cloudStorage() {
    return this._cloudStorage;
  }
  public putCloudStorage(value: MdbGreenplumClusterCloudStorage) {
    this._cloudStorage.internalValue = value;
  }
  public resetCloudStorage() {
    this._cloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageInput() {
    return this._cloudStorage.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new MdbGreenplumClusterLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: MdbGreenplumClusterLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MdbGreenplumClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbGreenplumClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // master_subcluster - computed: false, optional: false, required: true
  private _masterSubcluster = new MdbGreenplumClusterMasterSubclusterOutputReference(this, "master_subcluster");
  public get masterSubcluster() {
    return this._masterSubcluster;
  }
  public putMasterSubcluster(value: MdbGreenplumClusterMasterSubcluster) {
    this._masterSubcluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSubclusterInput() {
    return this._masterSubcluster.internalValue;
  }

  // pooler_config - computed: false, optional: true, required: false
  private _poolerConfig = new MdbGreenplumClusterPoolerConfigOutputReference(this, "pooler_config");
  public get poolerConfig() {
    return this._poolerConfig;
  }
  public putPoolerConfig(value: MdbGreenplumClusterPoolerConfig) {
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
  private _pxfConfig = new MdbGreenplumClusterPxfConfigOutputReference(this, "pxf_config");
  public get pxfConfig() {
    return this._pxfConfig;
  }
  public putPxfConfig(value: MdbGreenplumClusterPxfConfig) {
    this._pxfConfig.internalValue = value;
  }
  public resetPxfConfig() {
    this._pxfConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxfConfigInput() {
    return this._pxfConfig.internalValue;
  }

  // segment_subcluster - computed: false, optional: false, required: true
  private _segmentSubcluster = new MdbGreenplumClusterSegmentSubclusterOutputReference(this, "segment_subcluster");
  public get segmentSubcluster() {
    return this._segmentSubcluster;
  }
  public putSegmentSubcluster(value: MdbGreenplumClusterSegmentSubcluster) {
    this._segmentSubcluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentSubclusterInput() {
    return this._segmentSubcluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbGreenplumClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbGreenplumClusterTimeouts) {
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
      assign_public_ip: cdktf.booleanToTerraform(this._assignPublicIp),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      greenplum_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._greenplumConfig),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      master_host_count: cdktf.numberToTerraform(this._masterHostCount),
      master_host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masterHostGroupIds),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      segment_host_count: cdktf.numberToTerraform(this._segmentHostCount),
      segment_host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._segmentHostGroupIds),
      segment_in_host: cdktf.numberToTerraform(this._segmentInHost),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      access: mdbGreenplumClusterAccessToTerraform(this._access.internalValue),
      background_activities: cdktf.listMapper(mdbGreenplumClusterBackgroundActivitiesToTerraform, true)(this._backgroundActivities.internalValue),
      backup_window_start: mdbGreenplumClusterBackupWindowStartToTerraform(this._backupWindowStart.internalValue),
      cloud_storage: mdbGreenplumClusterCloudStorageToTerraform(this._cloudStorage.internalValue),
      logging: mdbGreenplumClusterLoggingToTerraform(this._logging.internalValue),
      maintenance_window: mdbGreenplumClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      master_subcluster: mdbGreenplumClusterMasterSubclusterToTerraform(this._masterSubcluster.internalValue),
      pooler_config: mdbGreenplumClusterPoolerConfigToTerraform(this._poolerConfig.internalValue),
      pxf_config: mdbGreenplumClusterPxfConfigToTerraform(this._pxfConfig.internalValue),
      segment_subcluster: mdbGreenplumClusterSegmentSubclusterToTerraform(this._segmentSubcluster.internalValue),
      timeouts: mdbGreenplumClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_public_ip: {
        value: cdktf.booleanToHclTerraform(this._assignPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      master_host_count: {
        value: cdktf.numberToHclTerraform(this._masterHostCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      segment_host_count: {
        value: cdktf.numberToHclTerraform(this._segmentHostCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      segment_host_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._segmentHostGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      segment_in_host: {
        value: cdktf.numberToHclTerraform(this._segmentInHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_password: {
        value: cdktf.stringToHclTerraform(this._userPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access: {
        value: mdbGreenplumClusterAccessToHclTerraform(this._access.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterAccessList",
      },
      background_activities: {
        value: cdktf.listMapperHcl(mdbGreenplumClusterBackgroundActivitiesToHclTerraform, true)(this._backgroundActivities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterBackgroundActivitiesList",
      },
      backup_window_start: {
        value: mdbGreenplumClusterBackupWindowStartToHclTerraform(this._backupWindowStart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterBackupWindowStartList",
      },
      cloud_storage: {
        value: mdbGreenplumClusterCloudStorageToHclTerraform(this._cloudStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterCloudStorageList",
      },
      logging: {
        value: mdbGreenplumClusterLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterLoggingList",
      },
      maintenance_window: {
        value: mdbGreenplumClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterMaintenanceWindowList",
      },
      master_subcluster: {
        value: mdbGreenplumClusterMasterSubclusterToHclTerraform(this._masterSubcluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterMasterSubclusterList",
      },
      pooler_config: {
        value: mdbGreenplumClusterPoolerConfigToHclTerraform(this._poolerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterPoolerConfigList",
      },
      pxf_config: {
        value: mdbGreenplumClusterPxfConfigToHclTerraform(this._pxfConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterPxfConfigList",
      },
      segment_subcluster: {
        value: mdbGreenplumClusterSegmentSubclusterToHclTerraform(this._segmentSubcluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MdbGreenplumClusterSegmentSubclusterList",
      },
      timeouts: {
        value: mdbGreenplumClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
