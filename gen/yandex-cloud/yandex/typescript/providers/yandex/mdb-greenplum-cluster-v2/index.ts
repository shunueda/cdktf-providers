// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbGreenplumClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Cloud storage settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#cloud_storage MdbGreenplumClusterV2#cloud_storage}
  */
  readonly cloudStorage?: MdbGreenplumClusterV2CloudStorage;
  /**
  * Greenplum® and Odyssey® configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#cluster_config MdbGreenplumClusterV2#cluster_config}
  */
  readonly clusterConfig?: MdbGreenplumClusterV2ClusterConfig;
  /**
  * Greenplum® cluster configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#config MdbGreenplumClusterV2#config}
  */
  readonly config: MdbGreenplumClusterV2ConfigA;
  /**
  * Determines whether the cluster is protected from being deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#deletion_protection MdbGreenplumClusterV2#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the Greenplum® cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#description MdbGreenplumClusterV2#description}
  */
  readonly description?: string;
  /**
  * Deployment environment of the Greenplum® cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#environment MdbGreenplumClusterV2#environment}
  */
  readonly environment: string;
  /**
  * ID of the folder that the Greenplum® cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#folder_id MdbGreenplumClusterV2#folder_id}
  */
  readonly folderId?: string;
  /**
  * Host groups hosting VMs of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#host_group_ids MdbGreenplumClusterV2#host_group_ids}
  */
  readonly hostGroupIds?: string[];
  /**
  * ID of the Greenplum® cluster resource to return.
  * 
  *  To get the cluster ID, use a [ClusterService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#id MdbGreenplumClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Custom labels for the Greenplum® cluster as `key:value` pairs. Maximum 64 labels per resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#labels MdbGreenplumClusterV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Cloud logging configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#logging MdbGreenplumClusterV2#logging}
  */
  readonly logging?: MdbGreenplumClusterV2Logging;
  /**
  * A Greenplum® cluster maintenance window. Should be defined by either one of the two options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#maintenance_window MdbGreenplumClusterV2#maintenance_window}
  */
  readonly maintenanceWindow?: MdbGreenplumClusterV2MaintenanceWindow;
  /**
  * Configuration of the Greenplum® master subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#master_config MdbGreenplumClusterV2#master_config}
  */
  readonly masterConfig?: MdbGreenplumClusterV2MasterConfig;
  /**
  * Number of hosts in the master subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#master_host_count MdbGreenplumClusterV2#master_host_count}
  */
  readonly masterHostCount?: number;
  /**
  * Host groups hosting VMs of the master subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#master_host_group_ids MdbGreenplumClusterV2#master_host_group_ids}
  */
  readonly masterHostGroupIds?: string[];
  /**
  * Name of the Greenplum® cluster.
  *  The name is unique within the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#name MdbGreenplumClusterV2#name}
  */
  readonly name: string;
  /**
  * ID of the cloud network that the cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#network_id MdbGreenplumClusterV2#network_id}
  */
  readonly networkId: string;
  /**
  * The cluster will be created from the specified backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#restore MdbGreenplumClusterV2#restore}
  */
  readonly restore?: MdbGreenplumClusterV2Restore;
  /**
  * User security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#security_group_ids MdbGreenplumClusterV2#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Configuration of the Greenplum® segment subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#segment_config MdbGreenplumClusterV2#segment_config}
  */
  readonly segmentConfig?: MdbGreenplumClusterV2SegmentConfig;
  /**
  * Number of hosts in the segment subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#segment_host_count MdbGreenplumClusterV2#segment_host_count}
  */
  readonly segmentHostCount?: number;
  /**
  * Host groups hosting VMs of the segment subcluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#segment_host_group_ids MdbGreenplumClusterV2#segment_host_group_ids}
  */
  readonly segmentHostGroupIds?: string[];
  /**
  * Number of segments per host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#segment_in_host MdbGreenplumClusterV2#segment_in_host}
  */
  readonly segmentInHost?: number;
  /**
  * Service account that will be used to access a Yandex Cloud resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#service_account_id MdbGreenplumClusterV2#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#timeouts MdbGreenplumClusterV2#timeouts}
  */
  readonly timeouts?: MdbGreenplumClusterV2Timeouts;
  /**
  * Owner user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#user_name MdbGreenplumClusterV2#user_name}
  */
  readonly userName: string;
  /**
  * Owner user password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#user_password MdbGreenplumClusterV2#user_password}
  */
  readonly userPassword: string;
}
export interface MdbGreenplumClusterV2CloudStorage {
  /**
  * enable Cloud Storage for cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#enable MdbGreenplumClusterV2#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function mdbGreenplumClusterV2CloudStorageToTerraform(struct?: MdbGreenplumClusterV2CloudStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function mdbGreenplumClusterV2CloudStorageToHclTerraform(struct?: MdbGreenplumClusterV2CloudStorage | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterV2CloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2CloudStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2CloudStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
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
}
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart {
  /**
  * hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#hours MdbGreenplumClusterV2#hours}
  */
  readonly hours?: number;
  /**
  * minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#minutes MdbGreenplumClusterV2#minutes}
  */
  readonly minutes?: number;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
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

  // minutes - computed: true, optional: true, required: false
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
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum {
  /**
  * Maximum duration of the `ANALYZE` operation, in seconds. The default value is `36000`. As soon as this period expires, the `ANALYZE` operation will be forced to terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#analyze_timeout MdbGreenplumClusterV2#analyze_timeout}
  */
  readonly analyzeTimeout?: number;
  /**
  * Time when analyze will start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#start MdbGreenplumClusterV2#start}
  */
  readonly start?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart;
  /**
  * Maximum duration of the `VACUUM` operation, in seconds. The default value is `36000`. As soon as this period expires, the `VACUUM` operation will be forced to terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#vacuum_timeout MdbGreenplumClusterV2#vacuum_timeout}
  */
  readonly vacuumTimeout?: number;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyze_timeout: cdktf.numberToTerraform(struct!.analyzeTimeout),
    start: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartToTerraform(struct!.start),
    vacuum_timeout: cdktf.numberToTerraform(struct!.vacuumTimeout),
  }
}


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable): any {
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
    start: {
      value: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartToHclTerraform(struct!.start),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart",
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

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzeTimeout = this._analyzeTimeout;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    if (this._vacuumTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vacuumTimeout = this._vacuumTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzeTimeout = undefined;
      this._start.internalValue = undefined;
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
      this._start.internalValue = value.start;
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

  // start - computed: true, optional: true, required: false
  private _start = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }
  public putStart(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
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
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle {
  /**
  * Use query killer or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#enable MdbGreenplumClusterV2#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Ignore these users when considering queries to terminate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#ignore_users MdbGreenplumClusterV2#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Maximum duration for this type of queries (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#max_age MdbGreenplumClusterV2#max_age}
  */
  readonly maxAge?: number;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle | cdktf.IResolvable): any {
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
      type: "set",
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

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('ignore_users'));
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
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction {
  /**
  * Use query killer or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#enable MdbGreenplumClusterV2#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Ignore these users when considering queries to terminate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#ignore_users MdbGreenplumClusterV2#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Maximum duration for this type of queries (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#max_age MdbGreenplumClusterV2#max_age}
  */
  readonly maxAge?: number;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction | cdktf.IResolvable): any {
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
      type: "set",
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

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('ignore_users'));
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
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning {
  /**
  * Use query killer or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#enable MdbGreenplumClusterV2#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Ignore these users when considering queries to terminate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#ignore_users MdbGreenplumClusterV2#ignore_users}
  */
  readonly ignoreUsers?: string[];
  /**
  * Maximum duration for this type of queries (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#max_age MdbGreenplumClusterV2#max_age}
  */
  readonly maxAge?: number;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning | cdktf.IResolvable): any {
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
      type: "set",
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

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('ignore_users'));
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
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts {
  /**
  * Configuration of script that kills long running queries that are in `idle` state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#idle MdbGreenplumClusterV2#idle}
  */
  readonly idle?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle;
  /**
  * Configuration of script that kills long running queries that are in `idle in transaction` state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#idle_in_transaction MdbGreenplumClusterV2#idle_in_transaction}
  */
  readonly idleInTransaction?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction;
  /**
  * Configuration of script that kills long running queries (in any state).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#long_running MdbGreenplumClusterV2#long_running}
  */
  readonly longRunning?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleToTerraform(struct!.idle),
    idle_in_transaction: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionToTerraform(struct!.idleInTransaction),
    long_running: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningToTerraform(struct!.longRunning),
  }
}


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle",
    },
    idle_in_transaction: {
      value: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionToHclTerraform(struct!.idleInTransaction),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction",
    },
    long_running: {
      value: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningToHclTerraform(struct!.longRunning),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._idleInTransaction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleInTransaction = this._idleInTransaction?.internalValue;
    }
    if (this._longRunning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longRunning = this._longRunning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
      this._idleInTransaction.internalValue = undefined;
      this._longRunning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
      this._idleInTransaction.internalValue = value.idleInTransaction;
      this._longRunning.internalValue = value.longRunning;
    }
  }

  // idle - computed: true, optional: true, required: false
  private _idle = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // idle_in_transaction - computed: true, optional: true, required: false
  private _idleInTransaction = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionOutputReference(this, "idle_in_transaction");
  public get idleInTransaction() {
    return this._idleInTransaction;
  }
  public putIdleInTransaction(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction) {
    this._idleInTransaction.internalValue = value;
  }
  public resetIdleInTransaction() {
    this._idleInTransaction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionInput() {
    return this._idleInTransaction.internalValue;
  }

  // long_running - computed: true, optional: true, required: false
  private _longRunning = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningOutputReference(this, "long_running");
  public get longRunning() {
    return this._longRunning;
  }
  public putLongRunning(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning) {
    this._longRunning.internalValue = value;
  }
  public resetLongRunning() {
    this._longRunning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longRunningInput() {
    return this._longRunning.internalValue;
  }
}
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts {
  /**
  * hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#hours MdbGreenplumClusterV2#hours}
  */
  readonly hours?: number;
  /**
  * minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#minutes MdbGreenplumClusterV2#minutes}
  */
  readonly minutes?: number;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
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

  // minutes - computed: true, optional: true, required: false
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

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsList extends cdktf.ComplexList {
  public internalValue? : MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts[] | cdktf.IResolvable

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
  public get(index: number): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsOutputReference {
    return new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes {
  /**
  * Time when start "table_sizes" script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#starts MdbGreenplumClusterV2#starts}
  */
  readonly starts?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts[] | cdktf.IResolvable;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    starts: cdktf.listMapper(mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsToTerraform, false)(struct!.starts),
  }
}


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    starts: {
      value: cdktf.listMapperHcl(mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsToHclTerraform, false)(struct!.starts),
      isBlock: true,
      type: "set",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._starts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.starts = this._starts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._starts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._starts.internalValue = value.starts;
    }
  }

  // starts - computed: true, optional: true, required: false
  private _starts = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsList(this, "starts", true);
  public get starts() {
    return this._starts;
  }
  public putStarts(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts[] | cdktf.IResolvable) {
    this._starts.internalValue = value;
  }
  public resetStarts() {
    this._starts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsInput() {
    return this._starts.internalValue;
  }
}
export interface MdbGreenplumClusterV2ClusterConfigBackgroundActivities {
  /**
  * Configuration for `ANALYZE` and `VACUUM` operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#analyze_and_vacuum MdbGreenplumClusterV2#analyze_and_vacuum}
  */
  readonly analyzeAndVacuum?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum;
  /**
  * Configuration for long running queries killer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#query_killer_scripts MdbGreenplumClusterV2#query_killer_scripts}
  */
  readonly queryKillerScripts?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts;
  /**
  * Enables scripts that collects tables sizes to `*_sizes` tables in `mdb_toolkit` schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#table_sizes MdbGreenplumClusterV2#table_sizes}
  */
  readonly tableSizes?: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes;
}

export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyze_and_vacuum: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumToTerraform(struct!.analyzeAndVacuum),
    query_killer_scripts: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsToTerraform(struct!.queryKillerScripts),
    table_sizes: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesToTerraform(struct!.tableSizes),
  }
}


export function mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigBackgroundActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analyze_and_vacuum: {
      value: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumToHclTerraform(struct!.analyzeAndVacuum),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum",
    },
    query_killer_scripts: {
      value: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsToHclTerraform(struct!.queryKillerScripts),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts",
    },
    table_sizes: {
      value: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesToHclTerraform(struct!.tableSizes),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigBackgroundActivities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzeAndVacuum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzeAndVacuum = this._analyzeAndVacuum?.internalValue;
    }
    if (this._queryKillerScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryKillerScripts = this._queryKillerScripts?.internalValue;
    }
    if (this._tableSizes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableSizes = this._tableSizes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzeAndVacuum.internalValue = undefined;
      this._queryKillerScripts.internalValue = undefined;
      this._tableSizes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzeAndVacuum.internalValue = value.analyzeAndVacuum;
      this._queryKillerScripts.internalValue = value.queryKillerScripts;
      this._tableSizes.internalValue = value.tableSizes;
    }
  }

  // analyze_and_vacuum - computed: true, optional: true, required: false
  private _analyzeAndVacuum = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumOutputReference(this, "analyze_and_vacuum");
  public get analyzeAndVacuum() {
    return this._analyzeAndVacuum;
  }
  public putAnalyzeAndVacuum(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum) {
    this._analyzeAndVacuum.internalValue = value;
  }
  public resetAnalyzeAndVacuum() {
    this._analyzeAndVacuum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeAndVacuumInput() {
    return this._analyzeAndVacuum.internalValue;
  }

  // query_killer_scripts - computed: true, optional: true, required: false
  private _queryKillerScripts = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsOutputReference(this, "query_killer_scripts");
  public get queryKillerScripts() {
    return this._queryKillerScripts;
  }
  public putQueryKillerScripts(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts) {
    this._queryKillerScripts.internalValue = value;
  }
  public resetQueryKillerScripts() {
    this._queryKillerScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryKillerScriptsInput() {
    return this._queryKillerScripts.internalValue;
  }

  // table_sizes - computed: true, optional: true, required: false
  private _tableSizes = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesOutputReference(this, "table_sizes");
  public get tableSizes() {
    return this._tableSizes;
  }
  public putTableSizes(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes) {
    this._tableSizes.internalValue = value;
  }
  public resetTableSizes() {
    this._tableSizes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSizesInput() {
    return this._tableSizes.internalValue;
  }
}
export interface MdbGreenplumClusterV2ClusterConfigGreenplumConfig {
  /**
  * https://docs.vmware.com/en/VMware-Tanzu-Greenplum/6/greenplum-database/GUID-ref_guide-config_params-guc-list.html#gp_add_column_inherits_table_setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_add_column_inherits_table_setting MdbGreenplumClusterV2#gp_add_column_inherits_table_setting}
  */
  readonly gpAddColumnInheritsTableSetting?: boolean | cdktf.IResolvable;
  /**
  * Specifies the mode for triggering automatic statistics collection after DML.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_autostats_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_autostats_mode MdbGreenplumClusterV2#gp_autostats_mode}
  */
  readonly gpAutostatsMode?: string;
  /**
  * Specifies the threshold for automatic statistics collection when gp_autostats_mode is set to on_change.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_autostats_on_change_threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_autostats_on_change_threshold MdbGreenplumClusterV2#gp_autostats_on_change_threshold}
  */
  readonly gpAutostatsOnChangeThreshold?: number;
  /**
  * Define amount of working processes in segment, that keeping in warm cash after end of query for usage again in next queries.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_cached_segworkers_threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_cached_segworkers_threshold MdbGreenplumClusterV2#gp_cached_segworkers_threshold}
  */
  readonly gpCachedSegworkersThreshold?: number;
  /**
  * Controls whether the Greenplum Database Global Deadlock Detector is enabled to manage concurrent UPDATE and DELETE operations on heap tables to improve performance. See Inserting, Updating, and Deleting Datain the Greenplum Database Administrator Guide. The default is off, the Global Deadlock Detector is deactivated.
  *  If the Global Deadlock Detector is deactivated (the default), Greenplum Database runs concurrent update and delete operations on a heap table serially.
  *  If the Global Deadlock Detector is enabled, concurrent updates are permitted and the Global Deadlock Detector determines when a deadlock exists, and breaks the deadlock by cancelling one or more backend processes associated with the youngest transaction(s) involved.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_enable_global_deadlock_detector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_enable_global_deadlock_detector MdbGreenplumClusterV2#gp_enable_global_deadlock_detector}
  */
  readonly gpEnableGlobalDeadlockDetector?: boolean | cdktf.IResolvable;
  /**
  * Forces ZSTD lib use Greenplum memory allocation system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_enable_zstd_memory_accounting MdbGreenplumClusterV2#gp_enable_zstd_memory_accounting}
  */
  readonly gpEnableZstdMemoryAccounting?: boolean | cdktf.IResolvable;
  /**
  * Specifies the executing interval (in seconds) of the global deadlock detector background worker process.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_global_deadlock_detector_period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_global_deadlock_detector_period MdbGreenplumClusterV2#gp_global_deadlock_detector_period}
  */
  readonly gpGlobalDeadlockDetectorPeriod?: number;
  /**
  * Specifies the total maximum uncompressed size of a query execution plan multiplied by the number of Motion operators (slices) in the plan.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_max_plan_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_max_plan_size MdbGreenplumClusterV2#gp_max_plan_size}
  */
  readonly gpMaxPlanSize?: number;
  /**
  * Max amount of slice-processes for one query in one segment.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_max_slices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_max_slices MdbGreenplumClusterV2#gp_max_slices}
  */
  readonly gpMaxSlices?: number;
  /**
  * Identifies the maximum percentage of system memory resources to allocate to resource groups on each Greenplum Database segment node.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_resource_group_memory_limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_resource_group_memory_limit MdbGreenplumClusterV2#gp_resource_group_memory_limit}
  */
  readonly gpResourceGroupMemoryLimit?: number;
  /**
  * Set memory limit (in MB) for working process. If a query executor process consumes more than this configured amount, then the process will not be cached for use in subsequent queries after the process completes.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#gp_vmem_protect_segworker_cache_limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_vmem_protect_segworker_cache_limit MdbGreenplumClusterV2#gp_vmem_protect_segworker_cache_limit}
  */
  readonly gpVmemProtectSegworkerCacheLimit?: number;
  /**
  * Specifies whether the temporary files created, when a hash aggregation or hash join operation spills to disk, are compressed.
  *  https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_workfile_compression MdbGreenplumClusterV2#gp_workfile_compression}
  */
  readonly gpWorkfileCompression?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of temporary spill files (also known as workfiles) allowed per query per segment.
  *  Spill files are created when executing a query that requires more memory than it is allocated.
  *  The current query is terminated when the limit is exceeded.
  *  Set the value to 0 (zero) to allow an unlimited number of spill files. master session reload
  *  https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_files_per_query
  *  Default value is 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_workfile_limit_files_per_query MdbGreenplumClusterV2#gp_workfile_limit_files_per_query}
  */
  readonly gpWorkfileLimitFilesPerQuery?: number;
  /**
  * Sets the maximum disk size an individual query is allowed to use for creating temporary spill files at each segment.
  *  The default value is 0, which means a limit is not enforced.
  *  https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_workfile_limit_per_query MdbGreenplumClusterV2#gp_workfile_limit_per_query}
  */
  readonly gpWorkfileLimitPerQuery?: number;
  /**
  * Sets the maximum total disk size that all running queries are allowed to use for creating temporary spill files at each segment.
  *  The default value is 0, which means a limit is not enforced.
  *  https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#gp_workfile_limit_per_segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#gp_workfile_limit_per_segment MdbGreenplumClusterV2#gp_workfile_limit_per_segment}
  */
  readonly gpWorkfileLimitPerSegment?: number;
  /**
  * Max time (in ms) which session can idle in open transaction
  *  https://postgrespro.ru/docs/postgrespro/current/runtime-config-client#GUC-IDLE-IN-TRANSACTION-SESSION-TIMEOUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#idle_in_transaction_session_timeout MdbGreenplumClusterV2#idle_in_transaction_session_timeout}
  */
  readonly idleInTransactionSessionTimeout?: number;
  /**
  * Max time (in ms) which query will wait lock free on object
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#lock_timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#lock_timeout MdbGreenplumClusterV2#lock_timeout}
  */
  readonly lockTimeout?: number;
  /**
  * Controls which SQL statements are logged. DDL logs all data definition commands like CREATE, ALTER, and DROP commands.
  *  MOD logs all DDL statements, plus INSERT, UPDATE, DELETE, TRUNCATE, and COPY FROM.
  *  PREPARE and EXPLAIN ANALYZE statements are also logged if their contained command is of an appropriate type.
  *  https://docs.greenplum.org/6-5/ref_guide/config_params/guc-list.html#log_statement
  *  Default value is ddl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#log_statement MdbGreenplumClusterV2#log_statement}
  */
  readonly logStatement?: string;
  /**
  * Maximum number of inbound connections on master segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#max_connections MdbGreenplumClusterV2#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Sets the maximum number of transactions that can be in the "prepared" state simultaneously
  *  https://www.postgresql.org/docs/9.6/runtime-config-resource.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#max_prepared_transactions MdbGreenplumClusterV2#max_prepared_transactions}
  */
  readonly maxPreparedTransactions?: number;
  /**
  * Specify the maximum size of WAL files that replication slots are allowed to retain in the pg_wal directory at checkpoint time.
  *  https://www.postgresql.org/docs/current/runtime-config-replication.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#max_slot_wal_keep_size MdbGreenplumClusterV2#max_slot_wal_keep_size}
  */
  readonly maxSlotWalKeepSize?: number;
  /**
  * Sets the maximum memory limit for a query. Helps avoid out-of-memory errors on a segment host during query processing as a result of setting statement_mem too high.
  *  Taking into account the configuration of a single segment host, calculate max_statement_mem as follows:
  *  (seghost_physical_memory) / (average_number_concurrent_queries)
  *  When changing both max_statement_mem and statement_mem, max_statement_mem must be changed first, or listed first in the postgresql.conf file.
  *  https://greenplum.docs.pivotal.io/6-19/ref_guide/config_params/guc-list.html#max_statement_mem
  *  Default value is 2097152000 (2000MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#max_statement_mem MdbGreenplumClusterV2#max_statement_mem}
  */
  readonly maxStatementMem?: number;
  /**
  * Percent of utilized Greenplum Database vmem that triggers the termination of queries.
  *  https://techdocs.broadcom.com/us/en/vmware-tanzu/data-solutions/tanzu-greenplum/6/greenplum-database/ref_guide-config_params-guc-list.html#runaway_detector_activation_percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#runaway_detector_activation_percent MdbGreenplumClusterV2#runaway_detector_activation_percent}
  */
  readonly runawayDetectorActivationPercent?: number;
}

export function mdbGreenplumClusterV2ClusterConfigGreenplumConfigToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigGreenplumConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gp_add_column_inherits_table_setting: cdktf.booleanToTerraform(struct!.gpAddColumnInheritsTableSetting),
    gp_autostats_mode: cdktf.stringToTerraform(struct!.gpAutostatsMode),
    gp_autostats_on_change_threshold: cdktf.numberToTerraform(struct!.gpAutostatsOnChangeThreshold),
    gp_cached_segworkers_threshold: cdktf.numberToTerraform(struct!.gpCachedSegworkersThreshold),
    gp_enable_global_deadlock_detector: cdktf.booleanToTerraform(struct!.gpEnableGlobalDeadlockDetector),
    gp_enable_zstd_memory_accounting: cdktf.booleanToTerraform(struct!.gpEnableZstdMemoryAccounting),
    gp_global_deadlock_detector_period: cdktf.numberToTerraform(struct!.gpGlobalDeadlockDetectorPeriod),
    gp_max_plan_size: cdktf.numberToTerraform(struct!.gpMaxPlanSize),
    gp_max_slices: cdktf.numberToTerraform(struct!.gpMaxSlices),
    gp_resource_group_memory_limit: cdktf.numberToTerraform(struct!.gpResourceGroupMemoryLimit),
    gp_vmem_protect_segworker_cache_limit: cdktf.numberToTerraform(struct!.gpVmemProtectSegworkerCacheLimit),
    gp_workfile_compression: cdktf.booleanToTerraform(struct!.gpWorkfileCompression),
    gp_workfile_limit_files_per_query: cdktf.numberToTerraform(struct!.gpWorkfileLimitFilesPerQuery),
    gp_workfile_limit_per_query: cdktf.numberToTerraform(struct!.gpWorkfileLimitPerQuery),
    gp_workfile_limit_per_segment: cdktf.numberToTerraform(struct!.gpWorkfileLimitPerSegment),
    idle_in_transaction_session_timeout: cdktf.numberToTerraform(struct!.idleInTransactionSessionTimeout),
    lock_timeout: cdktf.numberToTerraform(struct!.lockTimeout),
    log_statement: cdktf.stringToTerraform(struct!.logStatement),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_prepared_transactions: cdktf.numberToTerraform(struct!.maxPreparedTransactions),
    max_slot_wal_keep_size: cdktf.numberToTerraform(struct!.maxSlotWalKeepSize),
    max_statement_mem: cdktf.numberToTerraform(struct!.maxStatementMem),
    runaway_detector_activation_percent: cdktf.numberToTerraform(struct!.runawayDetectorActivationPercent),
  }
}


export function mdbGreenplumClusterV2ClusterConfigGreenplumConfigToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigGreenplumConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gp_add_column_inherits_table_setting: {
      value: cdktf.booleanToHclTerraform(struct!.gpAddColumnInheritsTableSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gp_autostats_mode: {
      value: cdktf.stringToHclTerraform(struct!.gpAutostatsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gp_autostats_on_change_threshold: {
      value: cdktf.numberToHclTerraform(struct!.gpAutostatsOnChangeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_cached_segworkers_threshold: {
      value: cdktf.numberToHclTerraform(struct!.gpCachedSegworkersThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_enable_global_deadlock_detector: {
      value: cdktf.booleanToHclTerraform(struct!.gpEnableGlobalDeadlockDetector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gp_enable_zstd_memory_accounting: {
      value: cdktf.booleanToHclTerraform(struct!.gpEnableZstdMemoryAccounting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gp_global_deadlock_detector_period: {
      value: cdktf.numberToHclTerraform(struct!.gpGlobalDeadlockDetectorPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_max_plan_size: {
      value: cdktf.numberToHclTerraform(struct!.gpMaxPlanSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_max_slices: {
      value: cdktf.numberToHclTerraform(struct!.gpMaxSlices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_resource_group_memory_limit: {
      value: cdktf.numberToHclTerraform(struct!.gpResourceGroupMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_vmem_protect_segworker_cache_limit: {
      value: cdktf.numberToHclTerraform(struct!.gpVmemProtectSegworkerCacheLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_workfile_compression: {
      value: cdktf.booleanToHclTerraform(struct!.gpWorkfileCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gp_workfile_limit_files_per_query: {
      value: cdktf.numberToHclTerraform(struct!.gpWorkfileLimitFilesPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_workfile_limit_per_query: {
      value: cdktf.numberToHclTerraform(struct!.gpWorkfileLimitPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gp_workfile_limit_per_segment: {
      value: cdktf.numberToHclTerraform(struct!.gpWorkfileLimitPerSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_in_transaction_session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleInTransactionSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lock_timeout: {
      value: cdktf.numberToHclTerraform(struct!.lockTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_statement: {
      value: cdktf.stringToHclTerraform(struct!.logStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_prepared_transactions: {
      value: cdktf.numberToHclTerraform(struct!.maxPreparedTransactions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_slot_wal_keep_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSlotWalKeepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_statement_mem: {
      value: cdktf.numberToHclTerraform(struct!.maxStatementMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runaway_detector_activation_percent: {
      value: cdktf.numberToHclTerraform(struct!.runawayDetectorActivationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2ClusterConfigGreenplumConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigGreenplumConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpAddColumnInheritsTableSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpAddColumnInheritsTableSetting = this._gpAddColumnInheritsTableSetting;
    }
    if (this._gpAutostatsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpAutostatsMode = this._gpAutostatsMode;
    }
    if (this._gpAutostatsOnChangeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpAutostatsOnChangeThreshold = this._gpAutostatsOnChangeThreshold;
    }
    if (this._gpCachedSegworkersThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpCachedSegworkersThreshold = this._gpCachedSegworkersThreshold;
    }
    if (this._gpEnableGlobalDeadlockDetector !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpEnableGlobalDeadlockDetector = this._gpEnableGlobalDeadlockDetector;
    }
    if (this._gpEnableZstdMemoryAccounting !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpEnableZstdMemoryAccounting = this._gpEnableZstdMemoryAccounting;
    }
    if (this._gpGlobalDeadlockDetectorPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpGlobalDeadlockDetectorPeriod = this._gpGlobalDeadlockDetectorPeriod;
    }
    if (this._gpMaxPlanSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpMaxPlanSize = this._gpMaxPlanSize;
    }
    if (this._gpMaxSlices !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpMaxSlices = this._gpMaxSlices;
    }
    if (this._gpResourceGroupMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpResourceGroupMemoryLimit = this._gpResourceGroupMemoryLimit;
    }
    if (this._gpVmemProtectSegworkerCacheLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpVmemProtectSegworkerCacheLimit = this._gpVmemProtectSegworkerCacheLimit;
    }
    if (this._gpWorkfileCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpWorkfileCompression = this._gpWorkfileCompression;
    }
    if (this._gpWorkfileLimitFilesPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpWorkfileLimitFilesPerQuery = this._gpWorkfileLimitFilesPerQuery;
    }
    if (this._gpWorkfileLimitPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpWorkfileLimitPerQuery = this._gpWorkfileLimitPerQuery;
    }
    if (this._gpWorkfileLimitPerSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpWorkfileLimitPerSegment = this._gpWorkfileLimitPerSegment;
    }
    if (this._idleInTransactionSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleInTransactionSessionTimeout = this._idleInTransactionSessionTimeout;
    }
    if (this._lockTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockTimeout = this._lockTimeout;
    }
    if (this._logStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStatement = this._logStatement;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPreparedTransactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreparedTransactions = this._maxPreparedTransactions;
    }
    if (this._maxSlotWalKeepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSlotWalKeepSize = this._maxSlotWalKeepSize;
    }
    if (this._maxStatementMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStatementMem = this._maxStatementMem;
    }
    if (this._runawayDetectorActivationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.runawayDetectorActivationPercent = this._runawayDetectorActivationPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigGreenplumConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gpAddColumnInheritsTableSetting = undefined;
      this._gpAutostatsMode = undefined;
      this._gpAutostatsOnChangeThreshold = undefined;
      this._gpCachedSegworkersThreshold = undefined;
      this._gpEnableGlobalDeadlockDetector = undefined;
      this._gpEnableZstdMemoryAccounting = undefined;
      this._gpGlobalDeadlockDetectorPeriod = undefined;
      this._gpMaxPlanSize = undefined;
      this._gpMaxSlices = undefined;
      this._gpResourceGroupMemoryLimit = undefined;
      this._gpVmemProtectSegworkerCacheLimit = undefined;
      this._gpWorkfileCompression = undefined;
      this._gpWorkfileLimitFilesPerQuery = undefined;
      this._gpWorkfileLimitPerQuery = undefined;
      this._gpWorkfileLimitPerSegment = undefined;
      this._idleInTransactionSessionTimeout = undefined;
      this._lockTimeout = undefined;
      this._logStatement = undefined;
      this._maxConnections = undefined;
      this._maxPreparedTransactions = undefined;
      this._maxSlotWalKeepSize = undefined;
      this._maxStatementMem = undefined;
      this._runawayDetectorActivationPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gpAddColumnInheritsTableSetting = value.gpAddColumnInheritsTableSetting;
      this._gpAutostatsMode = value.gpAutostatsMode;
      this._gpAutostatsOnChangeThreshold = value.gpAutostatsOnChangeThreshold;
      this._gpCachedSegworkersThreshold = value.gpCachedSegworkersThreshold;
      this._gpEnableGlobalDeadlockDetector = value.gpEnableGlobalDeadlockDetector;
      this._gpEnableZstdMemoryAccounting = value.gpEnableZstdMemoryAccounting;
      this._gpGlobalDeadlockDetectorPeriod = value.gpGlobalDeadlockDetectorPeriod;
      this._gpMaxPlanSize = value.gpMaxPlanSize;
      this._gpMaxSlices = value.gpMaxSlices;
      this._gpResourceGroupMemoryLimit = value.gpResourceGroupMemoryLimit;
      this._gpVmemProtectSegworkerCacheLimit = value.gpVmemProtectSegworkerCacheLimit;
      this._gpWorkfileCompression = value.gpWorkfileCompression;
      this._gpWorkfileLimitFilesPerQuery = value.gpWorkfileLimitFilesPerQuery;
      this._gpWorkfileLimitPerQuery = value.gpWorkfileLimitPerQuery;
      this._gpWorkfileLimitPerSegment = value.gpWorkfileLimitPerSegment;
      this._idleInTransactionSessionTimeout = value.idleInTransactionSessionTimeout;
      this._lockTimeout = value.lockTimeout;
      this._logStatement = value.logStatement;
      this._maxConnections = value.maxConnections;
      this._maxPreparedTransactions = value.maxPreparedTransactions;
      this._maxSlotWalKeepSize = value.maxSlotWalKeepSize;
      this._maxStatementMem = value.maxStatementMem;
      this._runawayDetectorActivationPercent = value.runawayDetectorActivationPercent;
    }
  }

  // gp_add_column_inherits_table_setting - computed: true, optional: true, required: false
  private _gpAddColumnInheritsTableSetting?: boolean | cdktf.IResolvable; 
  public get gpAddColumnInheritsTableSetting() {
    return this.getBooleanAttribute('gp_add_column_inherits_table_setting');
  }
  public set gpAddColumnInheritsTableSetting(value: boolean | cdktf.IResolvable) {
    this._gpAddColumnInheritsTableSetting = value;
  }
  public resetGpAddColumnInheritsTableSetting() {
    this._gpAddColumnInheritsTableSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpAddColumnInheritsTableSettingInput() {
    return this._gpAddColumnInheritsTableSetting;
  }

  // gp_autostats_mode - computed: true, optional: true, required: false
  private _gpAutostatsMode?: string; 
  public get gpAutostatsMode() {
    return this.getStringAttribute('gp_autostats_mode');
  }
  public set gpAutostatsMode(value: string) {
    this._gpAutostatsMode = value;
  }
  public resetGpAutostatsMode() {
    this._gpAutostatsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpAutostatsModeInput() {
    return this._gpAutostatsMode;
  }

  // gp_autostats_on_change_threshold - computed: true, optional: true, required: false
  private _gpAutostatsOnChangeThreshold?: number; 
  public get gpAutostatsOnChangeThreshold() {
    return this.getNumberAttribute('gp_autostats_on_change_threshold');
  }
  public set gpAutostatsOnChangeThreshold(value: number) {
    this._gpAutostatsOnChangeThreshold = value;
  }
  public resetGpAutostatsOnChangeThreshold() {
    this._gpAutostatsOnChangeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpAutostatsOnChangeThresholdInput() {
    return this._gpAutostatsOnChangeThreshold;
  }

  // gp_cached_segworkers_threshold - computed: true, optional: true, required: false
  private _gpCachedSegworkersThreshold?: number; 
  public get gpCachedSegworkersThreshold() {
    return this.getNumberAttribute('gp_cached_segworkers_threshold');
  }
  public set gpCachedSegworkersThreshold(value: number) {
    this._gpCachedSegworkersThreshold = value;
  }
  public resetGpCachedSegworkersThreshold() {
    this._gpCachedSegworkersThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpCachedSegworkersThresholdInput() {
    return this._gpCachedSegworkersThreshold;
  }

  // gp_enable_global_deadlock_detector - computed: true, optional: true, required: false
  private _gpEnableGlobalDeadlockDetector?: boolean | cdktf.IResolvable; 
  public get gpEnableGlobalDeadlockDetector() {
    return this.getBooleanAttribute('gp_enable_global_deadlock_detector');
  }
  public set gpEnableGlobalDeadlockDetector(value: boolean | cdktf.IResolvable) {
    this._gpEnableGlobalDeadlockDetector = value;
  }
  public resetGpEnableGlobalDeadlockDetector() {
    this._gpEnableGlobalDeadlockDetector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpEnableGlobalDeadlockDetectorInput() {
    return this._gpEnableGlobalDeadlockDetector;
  }

  // gp_enable_zstd_memory_accounting - computed: true, optional: true, required: false
  private _gpEnableZstdMemoryAccounting?: boolean | cdktf.IResolvable; 
  public get gpEnableZstdMemoryAccounting() {
    return this.getBooleanAttribute('gp_enable_zstd_memory_accounting');
  }
  public set gpEnableZstdMemoryAccounting(value: boolean | cdktf.IResolvable) {
    this._gpEnableZstdMemoryAccounting = value;
  }
  public resetGpEnableZstdMemoryAccounting() {
    this._gpEnableZstdMemoryAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpEnableZstdMemoryAccountingInput() {
    return this._gpEnableZstdMemoryAccounting;
  }

  // gp_global_deadlock_detector_period - computed: true, optional: true, required: false
  private _gpGlobalDeadlockDetectorPeriod?: number; 
  public get gpGlobalDeadlockDetectorPeriod() {
    return this.getNumberAttribute('gp_global_deadlock_detector_period');
  }
  public set gpGlobalDeadlockDetectorPeriod(value: number) {
    this._gpGlobalDeadlockDetectorPeriod = value;
  }
  public resetGpGlobalDeadlockDetectorPeriod() {
    this._gpGlobalDeadlockDetectorPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpGlobalDeadlockDetectorPeriodInput() {
    return this._gpGlobalDeadlockDetectorPeriod;
  }

  // gp_max_plan_size - computed: true, optional: true, required: false
  private _gpMaxPlanSize?: number; 
  public get gpMaxPlanSize() {
    return this.getNumberAttribute('gp_max_plan_size');
  }
  public set gpMaxPlanSize(value: number) {
    this._gpMaxPlanSize = value;
  }
  public resetGpMaxPlanSize() {
    this._gpMaxPlanSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpMaxPlanSizeInput() {
    return this._gpMaxPlanSize;
  }

  // gp_max_slices - computed: true, optional: true, required: false
  private _gpMaxSlices?: number; 
  public get gpMaxSlices() {
    return this.getNumberAttribute('gp_max_slices');
  }
  public set gpMaxSlices(value: number) {
    this._gpMaxSlices = value;
  }
  public resetGpMaxSlices() {
    this._gpMaxSlices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpMaxSlicesInput() {
    return this._gpMaxSlices;
  }

  // gp_resource_group_memory_limit - computed: true, optional: true, required: false
  private _gpResourceGroupMemoryLimit?: number; 
  public get gpResourceGroupMemoryLimit() {
    return this.getNumberAttribute('gp_resource_group_memory_limit');
  }
  public set gpResourceGroupMemoryLimit(value: number) {
    this._gpResourceGroupMemoryLimit = value;
  }
  public resetGpResourceGroupMemoryLimit() {
    this._gpResourceGroupMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpResourceGroupMemoryLimitInput() {
    return this._gpResourceGroupMemoryLimit;
  }

  // gp_vmem_protect_segworker_cache_limit - computed: true, optional: true, required: false
  private _gpVmemProtectSegworkerCacheLimit?: number; 
  public get gpVmemProtectSegworkerCacheLimit() {
    return this.getNumberAttribute('gp_vmem_protect_segworker_cache_limit');
  }
  public set gpVmemProtectSegworkerCacheLimit(value: number) {
    this._gpVmemProtectSegworkerCacheLimit = value;
  }
  public resetGpVmemProtectSegworkerCacheLimit() {
    this._gpVmemProtectSegworkerCacheLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpVmemProtectSegworkerCacheLimitInput() {
    return this._gpVmemProtectSegworkerCacheLimit;
  }

  // gp_workfile_compression - computed: true, optional: true, required: false
  private _gpWorkfileCompression?: boolean | cdktf.IResolvable; 
  public get gpWorkfileCompression() {
    return this.getBooleanAttribute('gp_workfile_compression');
  }
  public set gpWorkfileCompression(value: boolean | cdktf.IResolvable) {
    this._gpWorkfileCompression = value;
  }
  public resetGpWorkfileCompression() {
    this._gpWorkfileCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpWorkfileCompressionInput() {
    return this._gpWorkfileCompression;
  }

  // gp_workfile_limit_files_per_query - computed: true, optional: true, required: false
  private _gpWorkfileLimitFilesPerQuery?: number; 
  public get gpWorkfileLimitFilesPerQuery() {
    return this.getNumberAttribute('gp_workfile_limit_files_per_query');
  }
  public set gpWorkfileLimitFilesPerQuery(value: number) {
    this._gpWorkfileLimitFilesPerQuery = value;
  }
  public resetGpWorkfileLimitFilesPerQuery() {
    this._gpWorkfileLimitFilesPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpWorkfileLimitFilesPerQueryInput() {
    return this._gpWorkfileLimitFilesPerQuery;
  }

  // gp_workfile_limit_per_query - computed: true, optional: true, required: false
  private _gpWorkfileLimitPerQuery?: number; 
  public get gpWorkfileLimitPerQuery() {
    return this.getNumberAttribute('gp_workfile_limit_per_query');
  }
  public set gpWorkfileLimitPerQuery(value: number) {
    this._gpWorkfileLimitPerQuery = value;
  }
  public resetGpWorkfileLimitPerQuery() {
    this._gpWorkfileLimitPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpWorkfileLimitPerQueryInput() {
    return this._gpWorkfileLimitPerQuery;
  }

  // gp_workfile_limit_per_segment - computed: true, optional: true, required: false
  private _gpWorkfileLimitPerSegment?: number; 
  public get gpWorkfileLimitPerSegment() {
    return this.getNumberAttribute('gp_workfile_limit_per_segment');
  }
  public set gpWorkfileLimitPerSegment(value: number) {
    this._gpWorkfileLimitPerSegment = value;
  }
  public resetGpWorkfileLimitPerSegment() {
    this._gpWorkfileLimitPerSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpWorkfileLimitPerSegmentInput() {
    return this._gpWorkfileLimitPerSegment;
  }

  // idle_in_transaction_session_timeout - computed: true, optional: true, required: false
  private _idleInTransactionSessionTimeout?: number; 
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }
  public set idleInTransactionSessionTimeout(value: number) {
    this._idleInTransactionSessionTimeout = value;
  }
  public resetIdleInTransactionSessionTimeout() {
    this._idleInTransactionSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionSessionTimeoutInput() {
    return this._idleInTransactionSessionTimeout;
  }

  // lock_timeout - computed: true, optional: true, required: false
  private _lockTimeout?: number; 
  public get lockTimeout() {
    return this.getNumberAttribute('lock_timeout');
  }
  public set lockTimeout(value: number) {
    this._lockTimeout = value;
  }
  public resetLockTimeout() {
    this._lockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTimeoutInput() {
    return this._lockTimeout;
  }

  // log_statement - computed: true, optional: true, required: false
  private _logStatement?: string; 
  public get logStatement() {
    return this.getStringAttribute('log_statement');
  }
  public set logStatement(value: string) {
    this._logStatement = value;
  }
  public resetLogStatement() {
    this._logStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatementInput() {
    return this._logStatement;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_prepared_transactions - computed: true, optional: true, required: false
  private _maxPreparedTransactions?: number; 
  public get maxPreparedTransactions() {
    return this.getNumberAttribute('max_prepared_transactions');
  }
  public set maxPreparedTransactions(value: number) {
    this._maxPreparedTransactions = value;
  }
  public resetMaxPreparedTransactions() {
    this._maxPreparedTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedTransactionsInput() {
    return this._maxPreparedTransactions;
  }

  // max_slot_wal_keep_size - computed: true, optional: true, required: false
  private _maxSlotWalKeepSize?: number; 
  public get maxSlotWalKeepSize() {
    return this.getNumberAttribute('max_slot_wal_keep_size');
  }
  public set maxSlotWalKeepSize(value: number) {
    this._maxSlotWalKeepSize = value;
  }
  public resetMaxSlotWalKeepSize() {
    this._maxSlotWalKeepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSlotWalKeepSizeInput() {
    return this._maxSlotWalKeepSize;
  }

  // max_statement_mem - computed: true, optional: true, required: false
  private _maxStatementMem?: number; 
  public get maxStatementMem() {
    return this.getNumberAttribute('max_statement_mem');
  }
  public set maxStatementMem(value: number) {
    this._maxStatementMem = value;
  }
  public resetMaxStatementMem() {
    this._maxStatementMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStatementMemInput() {
    return this._maxStatementMem;
  }

  // runaway_detector_activation_percent - computed: true, optional: true, required: false
  private _runawayDetectorActivationPercent?: number; 
  public get runawayDetectorActivationPercent() {
    return this.getNumberAttribute('runaway_detector_activation_percent');
  }
  public set runawayDetectorActivationPercent(value: number) {
    this._runawayDetectorActivationPercent = value;
  }
  public resetRunawayDetectorActivationPercent() {
    this._runawayDetectorActivationPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runawayDetectorActivationPercentInput() {
    return this._runawayDetectorActivationPercent;
  }
}
export interface MdbGreenplumClusterV2ClusterConfigPool {
  /**
  * Client pool idle timeout, in seconds.
  * 
  *  Drop stale client connection after this much seconds of idleness, which is not in transaction.
  * 
  *  Set to zero to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#client_idle_timeout MdbGreenplumClusterV2#client_idle_timeout}
  */
  readonly clientIdleTimeout?: number;
  /**
  * Client pool idle in transaction timeout, in seconds.
  * 
  *  Drop client connection in transaction after this much seconds of idleness.
  * 
  *  Set to zero to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#idle_in_transaction_timeout MdbGreenplumClusterV2#idle_in_transaction_timeout}
  */
  readonly idleInTransactionTimeout?: number;
  /**
  * Route server pool mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#mode MdbGreenplumClusterV2#mode}
  */
  readonly mode?: string;
  /**
  * The number of servers in the server pool. Clients are placed in a wait queue when all servers are busy.
  * 
  *  Set to zero to disable the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#size MdbGreenplumClusterV2#size}
  */
  readonly size?: number;
}

export function mdbGreenplumClusterV2ClusterConfigPoolToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_idle_timeout: cdktf.numberToTerraform(struct!.clientIdleTimeout),
    idle_in_transaction_timeout: cdktf.numberToTerraform(struct!.idleInTransactionTimeout),
    mode: cdktf.stringToTerraform(struct!.mode),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function mdbGreenplumClusterV2ClusterConfigPoolToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.clientIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_in_transaction_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleInTransactionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2ClusterConfigPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdleTimeout = this._clientIdleTimeout;
    }
    if (this._idleInTransactionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleInTransactionTimeout = this._idleInTransactionTimeout;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdleTimeout = undefined;
      this._idleInTransactionTimeout = undefined;
      this._mode = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdleTimeout = value.clientIdleTimeout;
      this._idleInTransactionTimeout = value.idleInTransactionTimeout;
      this._mode = value.mode;
      this._size = value.size;
    }
  }

  // client_idle_timeout - computed: true, optional: true, required: false
  private _clientIdleTimeout?: number; 
  public get clientIdleTimeout() {
    return this.getNumberAttribute('client_idle_timeout');
  }
  public set clientIdleTimeout(value: number) {
    this._clientIdleTimeout = value;
  }
  public resetClientIdleTimeout() {
    this._clientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdleTimeoutInput() {
    return this._clientIdleTimeout;
  }

  // idle_in_transaction_timeout - computed: true, optional: true, required: false
  private _idleInTransactionTimeout?: number; 
  public get idleInTransactionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_timeout');
  }
  public set idleInTransactionTimeout(value: number) {
    this._idleInTransactionTimeout = value;
  }
  public resetIdleInTransactionTimeout() {
    this._idleInTransactionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionTimeoutInput() {
    return this._idleInTransactionTimeout;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface MdbGreenplumClusterV2ClusterConfigPxfConfig {
  /**
  * Timeout for connection to the Apache Tomcat® server when making read requests.
  * 
  *  Specify values in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#connection_timeout MdbGreenplumClusterV2#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Maximum number of the Apache Tomcat® threads.
  * 
  *  To prevent situations when requests get stuck or fail due to running out of memory or malfunctioning of the Java garbage collector, specify the number of the Apache Tomcat® threads. Learn more about adjusting the number of threads in the [VMware Greenplum® Platform Extension Framework](https://docs.vmware.com/en/VMware-Greenplum-Platform-Extension-Framework/6.9/greenplum-platform-extension-framework/cfg_mem.html) documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#max_threads MdbGreenplumClusterV2#max_threads}
  */
  readonly maxThreads?: number;
  /**
  * Determines whether the timeout for core streaming threads is permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#pool_allow_core_thread_timeout MdbGreenplumClusterV2#pool_allow_core_thread_timeout}
  */
  readonly poolAllowCoreThreadTimeout?: boolean | cdktf.IResolvable;
  /**
  * Number of core streaming threads per pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#pool_core_size MdbGreenplumClusterV2#pool_core_size}
  */
  readonly poolCoreSize?: number;
  /**
  * Maximum allowed number of core streaming threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#pool_max_size MdbGreenplumClusterV2#pool_max_size}
  */
  readonly poolMaxSize?: number;
  /**
  * Maximum number of requests you can add to a pool queue for core streaming threads.
  * 
  *  If `0`, no pool queue is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#pool_queue_capacity MdbGreenplumClusterV2#pool_queue_capacity}
  */
  readonly poolQueueCapacity?: number;
  /**
  * Timeout for connection to the Apache Tomcat® server when making write requests.
  * 
  *  Specify the values in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#upload_timeout MdbGreenplumClusterV2#upload_timeout}
  */
  readonly uploadTimeout?: number;
  /**
  * Maximum size, in megabytes, of the JVM heap for the PXF daemon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#xms MdbGreenplumClusterV2#xms}
  */
  readonly xms?: number;
  /**
  * Initial size, in megabytes, of the JVM heap for the PXF daemon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#xmx MdbGreenplumClusterV2#xmx}
  */
  readonly xmx?: number;
}

export function mdbGreenplumClusterV2ClusterConfigPxfConfigToTerraform(struct?: MdbGreenplumClusterV2ClusterConfigPxfConfig | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterV2ClusterConfigPxfConfigToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfigPxfConfig | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterV2ClusterConfigPxfConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfigPxfConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfigPxfConfig | cdktf.IResolvable | undefined) {
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

  // connection_timeout - computed: true, optional: true, required: false
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

  // max_threads - computed: true, optional: true, required: false
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

  // pool_allow_core_thread_timeout - computed: true, optional: true, required: false
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

  // pool_core_size - computed: true, optional: true, required: false
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

  // pool_max_size - computed: true, optional: true, required: false
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

  // pool_queue_capacity - computed: true, optional: true, required: false
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

  // upload_timeout - computed: true, optional: true, required: false
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

  // xms - computed: true, optional: true, required: false
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

  // xmx - computed: true, optional: true, required: false
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
export interface MdbGreenplumClusterV2ClusterConfig {
  /**
  * Managed Greenplum® background tasks configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#background_activities MdbGreenplumClusterV2#background_activities}
  */
  readonly backgroundActivities?: MdbGreenplumClusterV2ClusterConfigBackgroundActivities;
  /**
  * package: yandex.cloud.mdb.greenplum.v1
  * filename: yandex/cloud/mdb/greenplum/v1/cluster_service.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#greenplum_config MdbGreenplumClusterV2#greenplum_config}
  */
  readonly greenplumConfig?: MdbGreenplumClusterV2ClusterConfigGreenplumConfig;
  /**
  * Odyssey® pool settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#pool MdbGreenplumClusterV2#pool}
  */
  readonly pool?: MdbGreenplumClusterV2ClusterConfigPool;
  /**
  * package: yandex.cloud.mdb.greenplum.v1
  * filename: yandex/cloud/mdb/greenplum/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#pxf_config MdbGreenplumClusterV2#pxf_config}
  */
  readonly pxfConfig?: MdbGreenplumClusterV2ClusterConfigPxfConfig;
}

export function mdbGreenplumClusterV2ClusterConfigToTerraform(struct?: MdbGreenplumClusterV2ClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_activities: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesToTerraform(struct!.backgroundActivities),
    greenplum_config: mdbGreenplumClusterV2ClusterConfigGreenplumConfigToTerraform(struct!.greenplumConfig),
    pool: mdbGreenplumClusterV2ClusterConfigPoolToTerraform(struct!.pool),
    pxf_config: mdbGreenplumClusterV2ClusterConfigPxfConfigToTerraform(struct!.pxfConfig),
  }
}


export function mdbGreenplumClusterV2ClusterConfigToHclTerraform(struct?: MdbGreenplumClusterV2ClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_activities: {
      value: mdbGreenplumClusterV2ClusterConfigBackgroundActivitiesToHclTerraform(struct!.backgroundActivities),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigBackgroundActivities",
    },
    greenplum_config: {
      value: mdbGreenplumClusterV2ClusterConfigGreenplumConfigToHclTerraform(struct!.greenplumConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigGreenplumConfig",
    },
    pool: {
      value: mdbGreenplumClusterV2ClusterConfigPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigPool",
    },
    pxf_config: {
      value: mdbGreenplumClusterV2ClusterConfigPxfConfigToHclTerraform(struct!.pxfConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ClusterConfigPxfConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2ClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundActivities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundActivities = this._backgroundActivities?.internalValue;
    }
    if (this._greenplumConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greenplumConfig = this._greenplumConfig?.internalValue;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    if (this._pxfConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pxfConfig = this._pxfConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2ClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundActivities.internalValue = undefined;
      this._greenplumConfig.internalValue = undefined;
      this._pool.internalValue = undefined;
      this._pxfConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundActivities.internalValue = value.backgroundActivities;
      this._greenplumConfig.internalValue = value.greenplumConfig;
      this._pool.internalValue = value.pool;
      this._pxfConfig.internalValue = value.pxfConfig;
    }
  }

  // background_activities - computed: true, optional: true, required: false
  private _backgroundActivities = new MdbGreenplumClusterV2ClusterConfigBackgroundActivitiesOutputReference(this, "background_activities");
  public get backgroundActivities() {
    return this._backgroundActivities;
  }
  public putBackgroundActivities(value: MdbGreenplumClusterV2ClusterConfigBackgroundActivities) {
    this._backgroundActivities.internalValue = value;
  }
  public resetBackgroundActivities() {
    this._backgroundActivities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundActivitiesInput() {
    return this._backgroundActivities.internalValue;
  }

  // greenplum_config - computed: true, optional: true, required: false
  private _greenplumConfig = new MdbGreenplumClusterV2ClusterConfigGreenplumConfigOutputReference(this, "greenplum_config");
  public get greenplumConfig() {
    return this._greenplumConfig;
  }
  public putGreenplumConfig(value: MdbGreenplumClusterV2ClusterConfigGreenplumConfig) {
    this._greenplumConfig.internalValue = value;
  }
  public resetGreenplumConfig() {
    this._greenplumConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenplumConfigInput() {
    return this._greenplumConfig.internalValue;
  }

  // pool - computed: true, optional: true, required: false
  private _pool = new MdbGreenplumClusterV2ClusterConfigPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: MdbGreenplumClusterV2ClusterConfigPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // pxf_config - computed: true, optional: true, required: false
  private _pxfConfig = new MdbGreenplumClusterV2ClusterConfigPxfConfigOutputReference(this, "pxf_config");
  public get pxfConfig() {
    return this._pxfConfig;
  }
  public putPxfConfig(value: MdbGreenplumClusterV2ClusterConfigPxfConfig) {
    this._pxfConfig.internalValue = value;
  }
  public resetPxfConfig() {
    this._pxfConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxfConfigInput() {
    return this._pxfConfig.internalValue;
  }
}
export interface MdbGreenplumClusterV2ConfigAccess {
  /**
  * Allows data export from the cluster to DataLens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#data_lens MdbGreenplumClusterV2#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allows access for DataTransfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#data_transfer MdbGreenplumClusterV2#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Allows SQL queries to the cluster databases from the management console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#web_sql MdbGreenplumClusterV2#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
  /**
  * Allow access for YandexQuery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#yandex_query MdbGreenplumClusterV2#yandex_query}
  */
  readonly yandexQuery?: boolean | cdktf.IResolvable;
}

export function mdbGreenplumClusterV2ConfigAccessToTerraform(struct?: MdbGreenplumClusterV2ConfigAccess | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterV2ConfigAccessToHclTerraform(struct?: MdbGreenplumClusterV2ConfigAccess | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterV2ConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ConfigAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MdbGreenplumClusterV2ConfigAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLens = undefined;
      this._dataTransfer = undefined;
      this._webSql = undefined;
      this._yandexQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLens = value.dataLens;
      this._dataTransfer = value.dataTransfer;
      this._webSql = value.webSql;
      this._yandexQuery = value.yandexQuery;
    }
  }

  // data_lens - computed: true, optional: true, required: false
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

  // data_transfer - computed: true, optional: true, required: false
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

  // web_sql - computed: true, optional: true, required: false
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

  // yandex_query - computed: true, optional: true, required: false
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
export interface MdbGreenplumClusterV2ConfigA {
  /**
  * Access policy for external services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#access MdbGreenplumClusterV2#access}
  */
  readonly access?: MdbGreenplumClusterV2ConfigAccess;
  /**
  * Determines whether the cluster has a public IP address.
  * 
  *  After the cluster has been created, this setting cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#assign_public_ip MdbGreenplumClusterV2#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Retention policy of automated backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#backup_retain_period_days MdbGreenplumClusterV2#backup_retain_period_days}
  */
  readonly backupRetainPeriodDays?: number;
  /**
  * Time to start the daily backup, in the UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#backup_window_start MdbGreenplumClusterV2#backup_window_start}
  */
  readonly backupWindowStart?: string;
  /**
  * ID of the subnet the cluster belongs to. This subnet should be a part of the cloud network the cluster belongs to (see [Cluster.network_id]).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#subnet_id MdbGreenplumClusterV2#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Version of the Greenplum® server software.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#version MdbGreenplumClusterV2#version}
  */
  readonly version?: string;
  /**
  * ID of the availability zone the cluster belongs to.
  *  To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#zone_id MdbGreenplumClusterV2#zone_id}
  */
  readonly zoneId: string;
}

export function mdbGreenplumClusterV2ConfigAToTerraform(struct?: MdbGreenplumClusterV2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: mdbGreenplumClusterV2ConfigAccessToTerraform(struct!.access),
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    backup_retain_period_days: cdktf.numberToTerraform(struct!.backupRetainPeriodDays),
    backup_window_start: cdktf.stringToTerraform(struct!.backupWindowStart),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    version: cdktf.stringToTerraform(struct!.version),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function mdbGreenplumClusterV2ConfigAToHclTerraform(struct?: MdbGreenplumClusterV2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: mdbGreenplumClusterV2ConfigAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2ConfigAccess",
    },
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_retain_period_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetainPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_window_start: {
      value: cdktf.stringToHclTerraform(struct!.backupWindowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
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
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2ConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2ConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._backupRetainPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetainPeriodDays = this._backupRetainPeriodDays;
    }
    if (this._backupWindowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindowStart = this._backupWindowStart;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2ConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access.internalValue = undefined;
      this._assignPublicIp = undefined;
      this._backupRetainPeriodDays = undefined;
      this._backupWindowStart = undefined;
      this._subnetId = undefined;
      this._version = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access.internalValue = value.access;
      this._assignPublicIp = value.assignPublicIp;
      this._backupRetainPeriodDays = value.backupRetainPeriodDays;
      this._backupWindowStart = value.backupWindowStart;
      this._subnetId = value.subnetId;
      this._version = value.version;
      this._zoneId = value.zoneId;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access = new MdbGreenplumClusterV2ConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbGreenplumClusterV2ConfigAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // backup_retain_period_days - computed: true, optional: true, required: false
  private _backupRetainPeriodDays?: number; 
  public get backupRetainPeriodDays() {
    return this.getNumberAttribute('backup_retain_period_days');
  }
  public set backupRetainPeriodDays(value: number) {
    this._backupRetainPeriodDays = value;
  }
  public resetBackupRetainPeriodDays() {
    this._backupRetainPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetainPeriodDaysInput() {
    return this._backupRetainPeriodDays;
  }

  // backup_window_start - computed: true, optional: true, required: false
  private _backupWindowStart?: string; 
  public get backupWindowStart() {
    return this.getStringAttribute('backup_window_start');
  }
  public set backupWindowStart(value: string) {
    this._backupWindowStart = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // version - computed: true, optional: true, required: false
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface MdbGreenplumClusterV2Logging {
  /**
  * send Yandex Command Center logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#command_center_enabled MdbGreenplumClusterV2#command_center_enabled}
  */
  readonly commandCenterEnabled?: boolean | cdktf.IResolvable;
  /**
  * package: yandex.cloud.mdb.greenplum.v1
  * filename: yandex/cloud/mdb/greenplum/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#enabled MdbGreenplumClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * package: yandex.cloud.mdb.greenplum.v1
  * filename: yandex/cloud/mdb/greenplum/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#folder_id MdbGreenplumClusterV2#folder_id}
  */
  readonly folderId?: string;
  /**
  * send Greenplum logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#greenplum_enabled MdbGreenplumClusterV2#greenplum_enabled}
  */
  readonly greenplumEnabled?: boolean | cdktf.IResolvable;
  /**
  * package: yandex.cloud.mdb.greenplum.v1
  * filename: yandex/cloud/mdb/greenplum/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#log_group_id MdbGreenplumClusterV2#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * send Pooler logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#pooler_enabled MdbGreenplumClusterV2#pooler_enabled}
  */
  readonly poolerEnabled?: boolean | cdktf.IResolvable;
}

export function mdbGreenplumClusterV2LoggingToTerraform(struct?: MdbGreenplumClusterV2Logging | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterV2LoggingToHclTerraform(struct?: MdbGreenplumClusterV2Logging | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterV2LoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2Logging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MdbGreenplumClusterV2Logging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commandCenterEnabled = undefined;
      this._enabled = undefined;
      this._folderId = undefined;
      this._greenplumEnabled = undefined;
      this._logGroupId = undefined;
      this._poolerEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commandCenterEnabled = value.commandCenterEnabled;
      this._enabled = value.enabled;
      this._folderId = value.folderId;
      this._greenplumEnabled = value.greenplumEnabled;
      this._logGroupId = value.logGroupId;
      this._poolerEnabled = value.poolerEnabled;
    }
  }

  // command_center_enabled - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // greenplum_enabled - computed: true, optional: true, required: false
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

  // log_group_id - computed: true, optional: true, required: false
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

  // pooler_enabled - computed: true, optional: true, required: false
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
export interface MdbGreenplumClusterV2MaintenanceWindowAnytime {
}

export function mdbGreenplumClusterV2MaintenanceWindowAnytimeToTerraform(struct?: MdbGreenplumClusterV2MaintenanceWindowAnytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mdbGreenplumClusterV2MaintenanceWindowAnytimeToHclTerraform(struct?: MdbGreenplumClusterV2MaintenanceWindowAnytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MdbGreenplumClusterV2MaintenanceWindowAnytimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2MaintenanceWindowAnytime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2MaintenanceWindowAnytime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow {
  /**
  * Day of the week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#day MdbGreenplumClusterV2#day}
  */
  readonly day?: string;
  /**
  * Hour of the day in the UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#hour MdbGreenplumClusterV2#hour}
  */
  readonly hour?: number;
}

export function mdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowToTerraform(struct?: MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
  }
}


export function mdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowToHclTerraform(struct?: MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
    }
  }

  // day - computed: true, optional: true, required: false
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

  // hour - computed: true, optional: true, required: false
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
}
export interface MdbGreenplumClusterV2MaintenanceWindow {
  /**
  * An any-time maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#anytime MdbGreenplumClusterV2#anytime}
  */
  readonly anytime?: MdbGreenplumClusterV2MaintenanceWindowAnytime;
  /**
  * A weekly maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#weekly_maintenance_window MdbGreenplumClusterV2#weekly_maintenance_window}
  */
  readonly weeklyMaintenanceWindow?: MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow;
}

export function mdbGreenplumClusterV2MaintenanceWindowToTerraform(struct?: MdbGreenplumClusterV2MaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anytime: mdbGreenplumClusterV2MaintenanceWindowAnytimeToTerraform(struct!.anytime),
    weekly_maintenance_window: mdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowToTerraform(struct!.weeklyMaintenanceWindow),
  }
}


export function mdbGreenplumClusterV2MaintenanceWindowToHclTerraform(struct?: MdbGreenplumClusterV2MaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anytime: {
      value: mdbGreenplumClusterV2MaintenanceWindowAnytimeToHclTerraform(struct!.anytime),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2MaintenanceWindowAnytime",
    },
    weekly_maintenance_window: {
      value: mdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowToHclTerraform(struct!.weeklyMaintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2MaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2MaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anytime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anytime = this._anytime?.internalValue;
    }
    if (this._weeklyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyMaintenanceWindow = this._weeklyMaintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2MaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anytime.internalValue = undefined;
      this._weeklyMaintenanceWindow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anytime.internalValue = value.anytime;
      this._weeklyMaintenanceWindow.internalValue = value.weeklyMaintenanceWindow;
    }
  }

  // anytime - computed: true, optional: true, required: false
  private _anytime = new MdbGreenplumClusterV2MaintenanceWindowAnytimeOutputReference(this, "anytime");
  public get anytime() {
    return this._anytime;
  }
  public putAnytime(value: MdbGreenplumClusterV2MaintenanceWindowAnytime) {
    this._anytime.internalValue = value;
  }
  public resetAnytime() {
    this._anytime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anytimeInput() {
    return this._anytime.internalValue;
  }

  // weekly_maintenance_window - computed: true, optional: true, required: false
  private _weeklyMaintenanceWindow = new MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowOutputReference(this, "weekly_maintenance_window");
  public get weeklyMaintenanceWindow() {
    return this._weeklyMaintenanceWindow;
  }
  public putWeeklyMaintenanceWindow(value: MdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow) {
    this._weeklyMaintenanceWindow.internalValue = value;
  }
  public resetWeeklyMaintenanceWindow() {
    this._weeklyMaintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowInput() {
    return this._weeklyMaintenanceWindow.internalValue;
  }
}
export interface MdbGreenplumClusterV2MasterConfigResources {
  /**
  * Volume of the storage used by the host, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#disk_size MdbGreenplumClusterV2#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#disk_type_id MdbGreenplumClusterV2#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * ID of the preset for computational resources allocated to a host.
  * 
  *  Available presets are listed in the [documentation](/docs/managed-greenplum/concepts/instance-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#resource_preset_id MdbGreenplumClusterV2#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function mdbGreenplumClusterV2MasterConfigResourcesToTerraform(struct?: MdbGreenplumClusterV2MasterConfigResources | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterV2MasterConfigResourcesToHclTerraform(struct?: MdbGreenplumClusterV2MasterConfigResources | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterV2MasterConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2MasterConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MdbGreenplumClusterV2MasterConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: true, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbGreenplumClusterV2MasterConfig {
  /**
  * Computational resources allocated to Greenplum® master subcluster hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#resources MdbGreenplumClusterV2#resources}
  */
  readonly resources?: MdbGreenplumClusterV2MasterConfigResources;
}

export function mdbGreenplumClusterV2MasterConfigToTerraform(struct?: MdbGreenplumClusterV2MasterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: mdbGreenplumClusterV2MasterConfigResourcesToTerraform(struct!.resources),
  }
}


export function mdbGreenplumClusterV2MasterConfigToHclTerraform(struct?: MdbGreenplumClusterV2MasterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: mdbGreenplumClusterV2MasterConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2MasterConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2MasterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2MasterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2MasterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new MdbGreenplumClusterV2MasterConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbGreenplumClusterV2MasterConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbGreenplumClusterV2Monitoring {
}

export function mdbGreenplumClusterV2MonitoringToTerraform(struct?: MdbGreenplumClusterV2Monitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mdbGreenplumClusterV2MonitoringToHclTerraform(struct?: MdbGreenplumClusterV2Monitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MdbGreenplumClusterV2MonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdbGreenplumClusterV2Monitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2Monitoring | undefined) {
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

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MdbGreenplumClusterV2MonitoringList extends cdktf.ComplexList {

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
  public get(index: number): MdbGreenplumClusterV2MonitoringOutputReference {
    return new MdbGreenplumClusterV2MonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdbGreenplumClusterV2PlannedOperation {
}

export function mdbGreenplumClusterV2PlannedOperationToTerraform(struct?: MdbGreenplumClusterV2PlannedOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mdbGreenplumClusterV2PlannedOperationToHclTerraform(struct?: MdbGreenplumClusterV2PlannedOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MdbGreenplumClusterV2PlannedOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2PlannedOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2PlannedOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delayed_until - computed: true, optional: false, required: false
  public get delayedUntil() {
    return this.getStringAttribute('delayed_until');
  }

  // info - computed: true, optional: false, required: false
  public get info() {
    return this.getStringAttribute('info');
  }
}
export interface MdbGreenplumClusterV2Restore {
  /**
  * ID of the backup to create a cluster from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#backup_id MdbGreenplumClusterV2#backup_id}
  */
  readonly backupId: string;
  /**
  * List of databases and tables to restore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#restore_only MdbGreenplumClusterV2#restore_only}
  */
  readonly restoreOnly?: string[];
  /**
  * Timestamp of the moment to which the Greenplum cluster should be restored. (Format: `2006-01-02T15:04:05` - UTC). When not set, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#time MdbGreenplumClusterV2#time}
  */
  readonly time?: string;
}

export function mdbGreenplumClusterV2RestoreToTerraform(struct?: MdbGreenplumClusterV2Restore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    restore_only: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restoreOnly),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function mdbGreenplumClusterV2RestoreToHclTerraform(struct?: MdbGreenplumClusterV2Restore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_only: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restoreOnly),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2RestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2Restore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._restoreOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreOnly = this._restoreOnly;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2Restore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupId = undefined;
      this._restoreOnly = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupId = value.backupId;
      this._restoreOnly = value.restoreOnly;
      this._time = value.time;
    }
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // restore_only - computed: false, optional: true, required: false
  private _restoreOnly?: string[]; 
  public get restoreOnly() {
    return cdktf.Fn.tolist(this.getListAttribute('restore_only'));
  }
  public set restoreOnly(value: string[]) {
    this._restoreOnly = value;
  }
  public resetRestoreOnly() {
    this._restoreOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreOnlyInput() {
    return this._restoreOnly;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface MdbGreenplumClusterV2SegmentConfigResources {
  /**
  * Volume of the storage used by the host, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#disk_size MdbGreenplumClusterV2#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage used by the host: `network-hdd`, `network-ssd` or `local-ssd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#disk_type_id MdbGreenplumClusterV2#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * ID of the preset for computational resources allocated to a host.
  * 
  *  Available presets are listed in the [documentation](/docs/managed-greenplum/concepts/instance-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#resource_preset_id MdbGreenplumClusterV2#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function mdbGreenplumClusterV2SegmentConfigResourcesToTerraform(struct?: MdbGreenplumClusterV2SegmentConfigResources | cdktf.IResolvable): any {
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


export function mdbGreenplumClusterV2SegmentConfigResourcesToHclTerraform(struct?: MdbGreenplumClusterV2SegmentConfigResources | cdktf.IResolvable): any {
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

export class MdbGreenplumClusterV2SegmentConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2SegmentConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MdbGreenplumClusterV2SegmentConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: true, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbGreenplumClusterV2SegmentConfig {
  /**
  * Computational resources allocated to Greenplum® segment subcluster hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#resources MdbGreenplumClusterV2#resources}
  */
  readonly resources?: MdbGreenplumClusterV2SegmentConfigResources;
}

export function mdbGreenplumClusterV2SegmentConfigToTerraform(struct?: MdbGreenplumClusterV2SegmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: mdbGreenplumClusterV2SegmentConfigResourcesToTerraform(struct!.resources),
  }
}


export function mdbGreenplumClusterV2SegmentConfigToHclTerraform(struct?: MdbGreenplumClusterV2SegmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: mdbGreenplumClusterV2SegmentConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbGreenplumClusterV2SegmentConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbGreenplumClusterV2SegmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2SegmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2SegmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new MdbGreenplumClusterV2SegmentConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbGreenplumClusterV2SegmentConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface MdbGreenplumClusterV2Timeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#create MdbGreenplumClusterV2#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#delete MdbGreenplumClusterV2#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#read MdbGreenplumClusterV2#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#update MdbGreenplumClusterV2#update}
  */
  readonly update?: string;
}

export function mdbGreenplumClusterV2TimeoutsToTerraform(struct?: MdbGreenplumClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mdbGreenplumClusterV2TimeoutsToHclTerraform(struct?: MdbGreenplumClusterV2Timeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class MdbGreenplumClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbGreenplumClusterV2Timeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbGreenplumClusterV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2 yandex_mdb_greenplum_cluster_v2}
*/
export class MdbGreenplumClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_greenplum_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbGreenplumClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbGreenplumClusterV2 to import
  * @param importFromId The id of the existing MdbGreenplumClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbGreenplumClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_greenplum_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/mdb_greenplum_cluster_v2 yandex_mdb_greenplum_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbGreenplumClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: MdbGreenplumClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_greenplum_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudStorage.internalValue = config.cloudStorage;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._config.internalValue = config.config;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._hostGroupIds = config.hostGroupIds;
    this._id = config.id;
    this._labels = config.labels;
    this._logging.internalValue = config.logging;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._masterConfig.internalValue = config.masterConfig;
    this._masterHostCount = config.masterHostCount;
    this._masterHostGroupIds = config.masterHostGroupIds;
    this._name = config.name;
    this._networkId = config.networkId;
    this._restore.internalValue = config.restore;
    this._securityGroupIds = config.securityGroupIds;
    this._segmentConfig.internalValue = config.segmentConfig;
    this._segmentHostCount = config.segmentHostCount;
    this._segmentHostGroupIds = config.segmentHostGroupIds;
    this._segmentInHost = config.segmentInHost;
    this._serviceAccountId = config.serviceAccountId;
    this._timeouts.internalValue = config.timeouts;
    this._userName = config.userName;
    this._userPassword = config.userPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_storage - computed: true, optional: true, required: false
  private _cloudStorage = new MdbGreenplumClusterV2CloudStorageOutputReference(this, "cloud_storage");
  public get cloudStorage() {
    return this._cloudStorage;
  }
  public putCloudStorage(value: MdbGreenplumClusterV2CloudStorage) {
    this._cloudStorage.internalValue = value;
  }
  public resetCloudStorage() {
    this._cloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageInput() {
    return this._cloudStorage.internalValue;
  }

  // cluster_config - computed: true, optional: true, required: false
  private _clusterConfig = new MdbGreenplumClusterV2ClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: MdbGreenplumClusterV2ClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new MdbGreenplumClusterV2ConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MdbGreenplumClusterV2ConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

  // description - computed: true, optional: true, required: false
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

  // host_group_ids - computed: true, optional: true, required: false
  private _hostGroupIds?: string[]; 
  public get hostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_group_ids'));
  }
  public set hostGroupIds(value: string[]) {
    this._hostGroupIds = value;
  }
  public resetHostGroupIds() {
    this._hostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdsInput() {
    return this._hostGroupIds;
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

  // labels - computed: true, optional: true, required: false
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

  // logging - computed: true, optional: true, required: false
  private _logging = new MdbGreenplumClusterV2LoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: MdbGreenplumClusterV2Logging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new MdbGreenplumClusterV2MaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbGreenplumClusterV2MaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // master_config - computed: true, optional: true, required: false
  private _masterConfig = new MdbGreenplumClusterV2MasterConfigOutputReference(this, "master_config");
  public get masterConfig() {
    return this._masterConfig;
  }
  public putMasterConfig(value: MdbGreenplumClusterV2MasterConfig) {
    this._masterConfig.internalValue = value;
  }
  public resetMasterConfig() {
    this._masterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig.internalValue;
  }

  // master_host_count - computed: true, optional: true, required: false
  private _masterHostCount?: number; 
  public get masterHostCount() {
    return this.getNumberAttribute('master_host_count');
  }
  public set masterHostCount(value: number) {
    this._masterHostCount = value;
  }
  public resetMasterHostCount() {
    this._masterHostCount = undefined;
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

  // monitoring - computed: true, optional: false, required: false
  private _monitoring = new MdbGreenplumClusterV2MonitoringList(this, "monitoring", true);
  public get monitoring() {
    return this._monitoring;
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

  // planned_operation - computed: true, optional: false, required: false
  private _plannedOperation = new MdbGreenplumClusterV2PlannedOperationOutputReference(this, "planned_operation");
  public get plannedOperation() {
    return this._plannedOperation;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new MdbGreenplumClusterV2RestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: MdbGreenplumClusterV2Restore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // security_group_ids - computed: true, optional: true, required: false
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

  // segment_config - computed: true, optional: true, required: false
  private _segmentConfig = new MdbGreenplumClusterV2SegmentConfigOutputReference(this, "segment_config");
  public get segmentConfig() {
    return this._segmentConfig;
  }
  public putSegmentConfig(value: MdbGreenplumClusterV2SegmentConfig) {
    this._segmentConfig.internalValue = value;
  }
  public resetSegmentConfig() {
    this._segmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentConfigInput() {
    return this._segmentConfig.internalValue;
  }

  // segment_host_count - computed: true, optional: true, required: false
  private _segmentHostCount?: number; 
  public get segmentHostCount() {
    return this.getNumberAttribute('segment_host_count');
  }
  public set segmentHostCount(value: number) {
    this._segmentHostCount = value;
  }
  public resetSegmentHostCount() {
    this._segmentHostCount = undefined;
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

  // segment_in_host - computed: true, optional: true, required: false
  private _segmentInHost?: number; 
  public get segmentInHost() {
    return this.getNumberAttribute('segment_in_host');
  }
  public set segmentInHost(value: number) {
    this._segmentInHost = value;
  }
  public resetSegmentInHost() {
    this._segmentInHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInHostInput() {
    return this._segmentInHost;
  }

  // service_account_id - computed: true, optional: true, required: false
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbGreenplumClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbGreenplumClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_storage: mdbGreenplumClusterV2CloudStorageToTerraform(this._cloudStorage.internalValue),
      cluster_config: mdbGreenplumClusterV2ClusterConfigToTerraform(this._clusterConfig.internalValue),
      config: mdbGreenplumClusterV2ConfigAToTerraform(this._config.internalValue),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroupIds),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logging: mdbGreenplumClusterV2LoggingToTerraform(this._logging.internalValue),
      maintenance_window: mdbGreenplumClusterV2MaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      master_config: mdbGreenplumClusterV2MasterConfigToTerraform(this._masterConfig.internalValue),
      master_host_count: cdktf.numberToTerraform(this._masterHostCount),
      master_host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masterHostGroupIds),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      restore: mdbGreenplumClusterV2RestoreToTerraform(this._restore.internalValue),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      segment_config: mdbGreenplumClusterV2SegmentConfigToTerraform(this._segmentConfig.internalValue),
      segment_host_count: cdktf.numberToTerraform(this._segmentHostCount),
      segment_host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._segmentHostGroupIds),
      segment_in_host: cdktf.numberToTerraform(this._segmentInHost),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      timeouts: mdbGreenplumClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_storage: {
        value: mdbGreenplumClusterV2CloudStorageToHclTerraform(this._cloudStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2CloudStorage",
      },
      cluster_config: {
        value: mdbGreenplumClusterV2ClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2ClusterConfig",
      },
      config: {
        value: mdbGreenplumClusterV2ConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2ConfigA",
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
      host_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      logging: {
        value: mdbGreenplumClusterV2LoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2Logging",
      },
      maintenance_window: {
        value: mdbGreenplumClusterV2MaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2MaintenanceWindow",
      },
      master_config: {
        value: mdbGreenplumClusterV2MasterConfigToHclTerraform(this._masterConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2MasterConfig",
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
      restore: {
        value: mdbGreenplumClusterV2RestoreToHclTerraform(this._restore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2Restore",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      segment_config: {
        value: mdbGreenplumClusterV2SegmentConfigToHclTerraform(this._segmentConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2SegmentConfig",
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
      timeouts: {
        value: mdbGreenplumClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbGreenplumClusterV2Timeouts",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
