// https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#allowed_ip_ranges Cluster#allowed_ip_ranges}
  */
  readonly allowedIpRanges?: ClusterAllowedIpRanges[] | cdktf.IResolvable;
  /**
  * Backup retention period. For example, "7d", "2w", or "3m".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#backup_retention_period Cluster#backup_retention_period}
  */
  readonly backupRetentionPeriod?: string;
  /**
  * Backup schedule time in 24 hour cron expression format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#backup_schedule_time Cluster#backup_schedule_time}
  */
  readonly backupScheduleTime?: string;
  /**
  * Cloud provider. For example, "aws", "azure", "gcp" or "bah:aws", "bah:gcp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#cloud_provider Cluster#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Cluster architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#cluster_architecture Cluster#cluster_architecture}
  */
  readonly clusterArchitecture: ClusterClusterArchitecture;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#cluster_name Cluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Is authentication handled by the cloud service provider. Available for AWS only, See [Authentication](https://www.enterprisedb.com/docs/biganimal/latest/getting_started/creating_a_cluster/#authentication) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#csp_auth Cluster#csp_auth}
  */
  readonly cspAuth?: boolean | cdktf.IResolvable;
  /**
  * Instance type. For example, "azure:Standard_D2s_v3", "aws:c6i.large" or "gcp:e2-highcpu-4".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#instance_type Cluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Custom maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#maintenance_window Cluster#maintenance_window}
  */
  readonly maintenanceWindow?: ClusterMaintenanceWindow;
  /**
  * Password for the user edb_admin. It must be 12 characters or more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#password Cluster#password}
  */
  readonly password: string;
  /**
  * Pause cluster. If true it will put the cluster on pause and set the phase as paused, if false it will resume the cluster and set the phase as healthy. Pausing a cluster allows you to save on compute costs without losing data or cluster configuration settings. While paused, clusters aren't upgraded or patched, but changes are applied when the cluster resumes. Pausing a high availability cluster shuts down all cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#pause Cluster#pause}
  */
  readonly pause?: boolean | cdktf.IResolvable;
  /**
  * Cloud provider subscription/account ID, need to be specified when cluster is deployed on BigAnimal's cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#pe_allowed_principal_ids Cluster#pe_allowed_principal_ids}
  */
  readonly peAllowedPrincipalIds?: string[];
  /**
  * Pg bouncer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#pg_bouncer Cluster#pg_bouncer}
  */
  readonly pgBouncer?: ClusterPgBouncer;
  /**
  * Database configuration parameters. See [Modifying database configuration parameters](https://www.enterprisedb.com/docs/biganimal/latest/using_cluster/03_modifying_your_cluster/05_db_configuration_parameters/) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#pg_config Cluster#pg_config}
  */
  readonly pgConfig?: ClusterPgConfig[] | cdktf.IResolvable;
  /**
  * Postgres type. For example, "epas", "pgextended", or "postgres".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#pg_type Cluster#pg_type}
  */
  readonly pgType: string;
  /**
  * Postgres version. See [Supported Postgres types and versions](https://www.enterprisedb.com/docs/biganimal/latest/overview/05_database_version_policy/#supported-postgres-types-and-versions) for supported Postgres types and versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#pg_version Cluster#pg_version}
  */
  readonly pgVersion: string;
  /**
  * Is pgvector extension enabled. Adds support for vector storage and vector similarity search to Postgres.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#pgvector Cluster#pgvector}
  */
  readonly pgvector?: boolean | cdktf.IResolvable;
  /**
  * Is postGIS extension enabled. PostGIS extends the capabilities of the PostgreSQL relational database by adding support storing, indexing and querying geographic data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#post_gis Cluster#post_gis}
  */
  readonly postGis?: boolean | cdktf.IResolvable;
  /**
  * Is private networking enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#private_networking Cluster#private_networking}
  */
  readonly privateNetworking?: boolean | cdktf.IResolvable;
  /**
  * BigAnimal Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#project_id Cluster#project_id}
  */
  readonly projectId: string;
  /**
  * Is read only connection enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#read_only_connections Cluster#read_only_connections}
  */
  readonly readOnlyConnections?: boolean | cdktf.IResolvable;
  /**
  * Region to deploy the cluster. See [Supported regions](https://www.enterprisedb.com/docs/biganimal/latest/overview/03a_region_support/) for supported regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#region Cluster#region}
  */
  readonly region: string;
  /**
  * A Google Cloud Service Account is used for logs. If you leave this blank, then you will be unable to access log details for this cluster. Required when cluster is deployed on BigAnimal's cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#service_account_ids Cluster#service_account_ids}
  */
  readonly serviceAccountIds?: string[];
  /**
  * Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#storage Cluster#storage}
  */
  readonly storage: ClusterStorage;
  /**
  * Enable to grant superuser access to the edb_admin role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#superuser_access Cluster#superuser_access}
  */
  readonly superuserAccess?: boolean | cdktf.IResolvable;
  /**
  * Assign existing tags or create tags to assign to this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#tags Cluster#tags}
  */
  readonly tags?: ClusterTags[] | cdktf.IResolvable;
  /**
  * Transparent Data Encryption (TDE) key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#transparent_data_encryption Cluster#transparent_data_encryption}
  */
  readonly transparentDataEncryption?: ClusterTransparentDataEncryption;
  /**
  * Enable to take a snapshot of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#volume_snapshot_backup Cluster#volume_snapshot_backup}
  */
  readonly volumeSnapshotBackup?: boolean | cdktf.IResolvable;
  /**
  * Use a separate storage volume for Write-Ahead Logs (Recommended for high write workloads)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#wal_storage Cluster#wal_storage}
  */
  readonly walStorage?: ClusterWalStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#timeouts Cluster#timeouts}
  */
  readonly timeouts?: ClusterTimeouts;
}
export interface ClusterAllowedIpRanges {
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#cidr_block Cluster#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Description of CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#description Cluster#description}
  */
  readonly description: string;
}

export function clusterAllowedIpRangesToTerraform(struct?: ClusterAllowedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function clusterAllowedIpRangesToHclTerraform(struct?: ClusterAllowedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAllowedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAllowedIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAllowedIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
    }
  }

  // cidr_block - computed: true, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // description - computed: true, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class ClusterAllowedIpRangesList extends cdktf.ComplexList {
  public internalValue? : ClusterAllowedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): ClusterAllowedIpRangesOutputReference {
    return new ClusterAllowedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterClusterArchitecture {
  /**
  * Cluster architecture ID. For example, "single" or "ha".For Extreme High Availability clusters, please use the [biganimal_pgd](https://registry.terraform.io/providers/EnterpriseDB/biganimal/latest/docs/resources/pgd) resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Node count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#nodes Cluster#nodes}
  */
  readonly nodes: number;
}

export function clusterClusterArchitectureToTerraform(struct?: ClusterClusterArchitecture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    nodes: cdktf.numberToTerraform(struct!.nodes),
  }
}


export function clusterClusterArchitectureToHclTerraform(struct?: ClusterClusterArchitecture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes: {
      value: cdktf.numberToHclTerraform(struct!.nodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterClusterArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterClusterArchitecture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterClusterArchitecture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._nodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._nodes = value.nodes;
    }
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

  // nodes - computed: false, optional: false, required: true
  private _nodes?: number; 
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }
  public set nodes(value: number) {
    this._nodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }
}
export interface ClusterMaintenanceWindow {
  /**
  * Is maintenance window enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#is_enabled Cluster#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * The day of week, 0 represents Sunday, 1 is Monday, and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#start_day Cluster#start_day}
  */
  readonly startDay?: number;
  /**
  * Start time. "hh:mm", for example: "23:59".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#start_time Cluster#start_time}
  */
  readonly startTime?: string;
}

export function clusterMaintenanceWindowToTerraform(struct?: ClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    start_day: cdktf.numberToTerraform(struct!.startDay),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function clusterMaintenanceWindowToHclTerraform(struct?: ClusterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_day: {
      value: cdktf.numberToHclTerraform(struct!.startDay),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._startDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDay = this._startDay;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._startDay = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._startDay = value.startDay;
      this._startTime = value.startTime;
    }
  }

  // is_enabled - computed: true, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // start_day - computed: true, optional: true, required: false
  private _startDay?: number; 
  public get startDay() {
    return this.getNumberAttribute('start_day');
  }
  public set startDay(value: number) {
    this._startDay = value;
  }
  public resetStartDay() {
    this._startDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
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
}
export interface ClusterPgBouncerSettings {
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#operation Cluster#operation}
  */
  readonly operation: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#value Cluster#value}
  */
  readonly value: string;
}

export function clusterPgBouncerSettingsToTerraform(struct?: ClusterPgBouncerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterPgBouncerSettingsToHclTerraform(struct?: ClusterPgBouncerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class ClusterPgBouncerSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterPgBouncerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPgBouncerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // operation - computed: true, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterPgBouncerSettingsList extends cdktf.ComplexList {
  public internalValue? : ClusterPgBouncerSettings[] | cdktf.IResolvable

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
  public get(index: number): ClusterPgBouncerSettingsOutputReference {
    return new ClusterPgBouncerSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterPgBouncer {
  /**
  * Is pg bouncer enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#is_enabled Cluster#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * PgBouncer Configuration Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#settings Cluster#settings}
  */
  readonly settings?: ClusterPgBouncerSettings[] | cdktf.IResolvable;
}

export function clusterPgBouncerToTerraform(struct?: ClusterPgBouncer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    settings: cdktf.listMapper(clusterPgBouncerSettingsToTerraform, false)(struct!.settings),
  }
}


export function clusterPgBouncerToHclTerraform(struct?: ClusterPgBouncer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: cdktf.listMapperHcl(clusterPgBouncerSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "ClusterPgBouncerSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPgBouncerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterPgBouncer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPgBouncer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._settings.internalValue = value.settings;
    }
  }

  // is_enabled - computed: true, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new ClusterPgBouncerSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ClusterPgBouncerSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface ClusterPgConfig {
  /**
  * GUC name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * GUC value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#value Cluster#value}
  */
  readonly value: string;
}

export function clusterPgConfigToTerraform(struct?: ClusterPgConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterPgConfigToHclTerraform(struct?: ClusterPgConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ClusterPgConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterPgConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPgConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterPgConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterPgConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterPgConfigOutputReference {
    return new ClusterPgConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterStorage {
  /**
  * IOPS for the selected volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#iops Cluster#iops}
  */
  readonly iops?: string;
  /**
  * Size of the volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#size Cluster#size}
  */
  readonly size: string;
  /**
  * Throughput is automatically calculated by BigAnimal based on the IOPS input if it's not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#throughput Cluster#throughput}
  */
  readonly throughput?: string;
  /**
  * Volume properties in accordance with the selected volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#volume_properties Cluster#volume_properties}
  */
  readonly volumeProperties: string;
  /**
  * Volume type. For Azure: "azurepremiumstorage" or "ultradisk". For AWS: "gp3", "io2", or "io2-block-express". For Google Cloud: only "pd-ssd".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#volume_type Cluster#volume_type}
  */
  readonly volumeType: string;
}

export function clusterStorageToTerraform(struct?: ClusterStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.stringToTerraform(struct!.iops),
    size: cdktf.stringToTerraform(struct!.size),
    throughput: cdktf.stringToTerraform(struct!.throughput),
    volume_properties: cdktf.stringToTerraform(struct!.volumeProperties),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function clusterStorageToHclTerraform(struct?: ClusterStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.stringToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.stringToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_properties: {
      value: cdktf.stringToHclTerraform(struct!.volumeProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeProperties = this._volumeProperties;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._throughput = undefined;
      this._volumeProperties = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._throughput = value.throughput;
      this._volumeProperties = value.volumeProperties;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: string; 
  public get iops() {
    return this.getStringAttribute('iops');
  }
  public set iops(value: string) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: string; 
  public get throughput() {
    return this.getStringAttribute('throughput');
  }
  public set throughput(value: string) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_properties - computed: false, optional: false, required: true
  private _volumeProperties?: string; 
  public get volumeProperties() {
    return this.getStringAttribute('volume_properties');
  }
  public set volumeProperties(value: string) {
    this._volumeProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePropertiesInput() {
    return this._volumeProperties;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface ClusterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#tag_name Cluster#tag_name}
  */
  readonly tagName: string;
}

export function clusterTagsToTerraform(struct?: ClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function clusterTagsToHclTerraform(struct?: ClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagName = value.tagName;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // tag_name - computed: true, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}

export class ClusterTagsList extends cdktf.ComplexList {
  public internalValue? : ClusterTags[] | cdktf.IResolvable

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
  public get(index: number): ClusterTagsOutputReference {
    return new ClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTransparentDataEncryption {
  /**
  * Transparent Data Encryption (TDE) key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#key_id Cluster#key_id}
  */
  readonly keyId: string;
}

export function clusterTransparentDataEncryptionToTerraform(struct?: ClusterTransparentDataEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function clusterTransparentDataEncryptionToHclTerraform(struct?: ClusterTransparentDataEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTransparentDataEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTransparentDataEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTransparentDataEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface ClusterWalStorage {
  /**
  * IOPS for the selected volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#iops Cluster#iops}
  */
  readonly iops?: string;
  /**
  * Size of the volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#size Cluster#size}
  */
  readonly size: string;
  /**
  * Throughput is automatically calculated by BigAnimal based on the IOPS input if it's not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#throughput Cluster#throughput}
  */
  readonly throughput?: string;
  /**
  * Volume properties in accordance with the selected volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#volume_properties Cluster#volume_properties}
  */
  readonly volumeProperties: string;
  /**
  * Volume type. For Azure: "azurepremiumstorage" or "ultradisk". For AWS: "gp3", "io2", or "io2-block-express". For Google Cloud: only "pd-ssd".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#volume_type Cluster#volume_type}
  */
  readonly volumeType: string;
}

export function clusterWalStorageToTerraform(struct?: ClusterWalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.stringToTerraform(struct!.iops),
    size: cdktf.stringToTerraform(struct!.size),
    throughput: cdktf.stringToTerraform(struct!.throughput),
    volume_properties: cdktf.stringToTerraform(struct!.volumeProperties),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function clusterWalStorageToHclTerraform(struct?: ClusterWalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.stringToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.stringToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_properties: {
      value: cdktf.stringToHclTerraform(struct!.volumeProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterWalStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterWalStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeProperties = this._volumeProperties;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterWalStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._throughput = undefined;
      this._volumeProperties = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._throughput = value.throughput;
      this._volumeProperties = value.volumeProperties;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: string; 
  public get iops() {
    return this.getStringAttribute('iops');
  }
  public set iops(value: string) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: string; 
  public get throughput() {
    return this.getStringAttribute('throughput');
  }
  public set throughput(value: string) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_properties - computed: false, optional: false, required: true
  private _volumeProperties?: string; 
  public get volumeProperties() {
    return this.getStringAttribute('volume_properties');
  }
  public set volumeProperties(value: string) {
    this._volumeProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePropertiesInput() {
    return this._volumeProperties;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface ClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#delete Cluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#update Cluster#update}
  */
  readonly update?: string;
}

export function clusterTimeoutsToTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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


export function clusterTimeoutsToHclTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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

export class ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster biganimal_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "biganimal_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "biganimal_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/cluster biganimal_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'biganimal_cluster',
      terraformGeneratorMetadata: {
        providerName: 'biganimal',
        providerVersion: '3.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedIpRanges.internalValue = config.allowedIpRanges;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupScheduleTime = config.backupScheduleTime;
    this._cloudProvider = config.cloudProvider;
    this._clusterArchitecture.internalValue = config.clusterArchitecture;
    this._clusterName = config.clusterName;
    this._cspAuth = config.cspAuth;
    this._instanceType = config.instanceType;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._password = config.password;
    this._pause = config.pause;
    this._peAllowedPrincipalIds = config.peAllowedPrincipalIds;
    this._pgBouncer.internalValue = config.pgBouncer;
    this._pgConfig.internalValue = config.pgConfig;
    this._pgType = config.pgType;
    this._pgVersion = config.pgVersion;
    this._pgvector = config.pgvector;
    this._postGis = config.postGis;
    this._privateNetworking = config.privateNetworking;
    this._projectId = config.projectId;
    this._readOnlyConnections = config.readOnlyConnections;
    this._region = config.region;
    this._serviceAccountIds = config.serviceAccountIds;
    this._storage.internalValue = config.storage;
    this._superuserAccess = config.superuserAccess;
    this._tags.internalValue = config.tags;
    this._transparentDataEncryption.internalValue = config.transparentDataEncryption;
    this._volumeSnapshotBackup = config.volumeSnapshotBackup;
    this._walStorage.internalValue = config.walStorage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ip_ranges - computed: true, optional: true, required: false
  private _allowedIpRanges = new ClusterAllowedIpRangesList(this, "allowed_ip_ranges", true);
  public get allowedIpRanges() {
    return this._allowedIpRanges;
  }
  public putAllowedIpRanges(value: ClusterAllowedIpRanges[] | cdktf.IResolvable) {
    this._allowedIpRanges.internalValue = value;
  }
  public resetAllowedIpRanges() {
    this._allowedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangesInput() {
    return this._allowedIpRanges.internalValue;
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: string; 
  public get backupRetentionPeriod() {
    return this.getStringAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: string) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // backup_schedule_time - computed: true, optional: true, required: false
  private _backupScheduleTime?: string; 
  public get backupScheduleTime() {
    return this.getStringAttribute('backup_schedule_time');
  }
  public set backupScheduleTime(value: string) {
    this._backupScheduleTime = value;
  }
  public resetBackupScheduleTime() {
    this._backupScheduleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleTimeInput() {
    return this._backupScheduleTime;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cluster_architecture - computed: false, optional: false, required: true
  private _clusterArchitecture = new ClusterClusterArchitectureOutputReference(this, "cluster_architecture");
  public get clusterArchitecture() {
    return this._clusterArchitecture;
  }
  public putClusterArchitecture(value: ClusterClusterArchitecture) {
    this._clusterArchitecture.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArchitectureInput() {
    return this._clusterArchitecture.internalValue;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csp_auth - computed: true, optional: true, required: false
  private _cspAuth?: boolean | cdktf.IResolvable; 
  public get cspAuth() {
    return this.getBooleanAttribute('csp_auth');
  }
  public set cspAuth(value: boolean | cdktf.IResolvable) {
    this._cspAuth = value;
  }
  public resetCspAuth() {
    this._cspAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAuthInput() {
    return this._cspAuth;
  }

  // faraway_replica_ids - computed: true, optional: false, required: false
  public get farawayReplicaIds() {
    return cdktf.Fn.tolist(this.getListAttribute('faraway_replica_ids'));
  }

  // first_recoverability_point_at - computed: true, optional: false, required: false
  public get firstRecoverabilityPointAt() {
    return this.getStringAttribute('first_recoverability_point_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new ClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: ClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pause - computed: false, optional: true, required: false
  private _pause?: boolean | cdktf.IResolvable; 
  public get pause() {
    return this.getBooleanAttribute('pause');
  }
  public set pause(value: boolean | cdktf.IResolvable) {
    this._pause = value;
  }
  public resetPause() {
    this._pause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause;
  }

  // pe_allowed_principal_ids - computed: true, optional: true, required: false
  private _peAllowedPrincipalIds?: string[]; 
  public get peAllowedPrincipalIds() {
    return cdktf.Fn.tolist(this.getListAttribute('pe_allowed_principal_ids'));
  }
  public set peAllowedPrincipalIds(value: string[]) {
    this._peAllowedPrincipalIds = value;
  }
  public resetPeAllowedPrincipalIds() {
    this._peAllowedPrincipalIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peAllowedPrincipalIdsInput() {
    return this._peAllowedPrincipalIds;
  }

  // pg_bouncer - computed: true, optional: true, required: false
  private _pgBouncer = new ClusterPgBouncerOutputReference(this, "pg_bouncer");
  public get pgBouncer() {
    return this._pgBouncer;
  }
  public putPgBouncer(value: ClusterPgBouncer) {
    this._pgBouncer.internalValue = value;
  }
  public resetPgBouncer() {
    this._pgBouncer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgBouncerInput() {
    return this._pgBouncer.internalValue;
  }

  // pg_config - computed: false, optional: true, required: false
  private _pgConfig = new ClusterPgConfigList(this, "pg_config", true);
  public get pgConfig() {
    return this._pgConfig;
  }
  public putPgConfig(value: ClusterPgConfig[] | cdktf.IResolvable) {
    this._pgConfig.internalValue = value;
  }
  public resetPgConfig() {
    this._pgConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgConfigInput() {
    return this._pgConfig.internalValue;
  }

  // pg_identity - computed: true, optional: false, required: false
  public get pgIdentity() {
    return this.getStringAttribute('pg_identity');
  }

  // pg_type - computed: false, optional: false, required: true
  private _pgType?: string; 
  public get pgType() {
    return this.getStringAttribute('pg_type');
  }
  public set pgType(value: string) {
    this._pgType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgTypeInput() {
    return this._pgType;
  }

  // pg_version - computed: false, optional: false, required: true
  private _pgVersion?: string; 
  public get pgVersion() {
    return this.getStringAttribute('pg_version');
  }
  public set pgVersion(value: string) {
    this._pgVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgVersionInput() {
    return this._pgVersion;
  }

  // pgvector - computed: false, optional: true, required: false
  private _pgvector?: boolean | cdktf.IResolvable; 
  public get pgvector() {
    return this.getBooleanAttribute('pgvector');
  }
  public set pgvector(value: boolean | cdktf.IResolvable) {
    this._pgvector = value;
  }
  public resetPgvector() {
    this._pgvector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgvectorInput() {
    return this._pgvector;
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // post_gis - computed: false, optional: true, required: false
  private _postGis?: boolean | cdktf.IResolvable; 
  public get postGis() {
    return this.getBooleanAttribute('post_gis');
  }
  public set postGis(value: boolean | cdktf.IResolvable) {
    this._postGis = value;
  }
  public resetPostGis() {
    this._postGis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postGisInput() {
    return this._postGis;
  }

  // private_link_service_alias - computed: true, optional: false, required: false
  public get privateLinkServiceAlias() {
    return this.getStringAttribute('private_link_service_alias');
  }

  // private_link_service_name - computed: true, optional: false, required: false
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }

  // private_networking - computed: false, optional: true, required: false
  private _privateNetworking?: boolean | cdktf.IResolvable; 
  public get privateNetworking() {
    return this.getBooleanAttribute('private_networking');
  }
  public set privateNetworking(value: boolean | cdktf.IResolvable) {
    this._privateNetworking = value;
  }
  public resetPrivateNetworking() {
    this._privateNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkingInput() {
    return this._privateNetworking;
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

  // read_only_connections - computed: true, optional: true, required: false
  private _readOnlyConnections?: boolean | cdktf.IResolvable; 
  public get readOnlyConnections() {
    return this.getBooleanAttribute('read_only_connections');
  }
  public set readOnlyConnections(value: boolean | cdktf.IResolvable) {
    this._readOnlyConnections = value;
  }
  public resetReadOnlyConnections() {
    this._readOnlyConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyConnectionsInput() {
    return this._readOnlyConnections;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resizing_pvc - computed: true, optional: false, required: false
  public get resizingPvc() {
    return this.getListAttribute('resizing_pvc');
  }

  // ro_connection_uri - computed: true, optional: false, required: false
  public get roConnectionUri() {
    return this.getStringAttribute('ro_connection_uri');
  }

  // service_account_ids - computed: true, optional: true, required: false
  private _serviceAccountIds?: string[]; 
  public get serviceAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_ids'));
  }
  public set serviceAccountIds(value: string[]) {
    this._serviceAccountIds = value;
  }
  public resetServiceAccountIds() {
    this._serviceAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdsInput() {
    return this._serviceAccountIds;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new ClusterStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: ClusterStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // superuser_access - computed: true, optional: true, required: false
  private _superuserAccess?: boolean | cdktf.IResolvable; 
  public get superuserAccess() {
    return this.getBooleanAttribute('superuser_access');
  }
  public set superuserAccess(value: boolean | cdktf.IResolvable) {
    this._superuserAccess = value;
  }
  public resetSuperuserAccess() {
    this._superuserAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superuserAccessInput() {
    return this._superuserAccess;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ClusterTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transparent_data_encryption - computed: false, optional: true, required: false
  private _transparentDataEncryption = new ClusterTransparentDataEncryptionOutputReference(this, "transparent_data_encryption");
  public get transparentDataEncryption() {
    return this._transparentDataEncryption;
  }
  public putTransparentDataEncryption(value: ClusterTransparentDataEncryption) {
    this._transparentDataEncryption.internalValue = value;
  }
  public resetTransparentDataEncryption() {
    this._transparentDataEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentDataEncryptionInput() {
    return this._transparentDataEncryption.internalValue;
  }

  // transparent_data_encryption_action - computed: true, optional: false, required: false
  public get transparentDataEncryptionAction() {
    return this.getStringAttribute('transparent_data_encryption_action');
  }

  // volume_snapshot_backup - computed: false, optional: true, required: false
  private _volumeSnapshotBackup?: boolean | cdktf.IResolvable; 
  public get volumeSnapshotBackup() {
    return this.getBooleanAttribute('volume_snapshot_backup');
  }
  public set volumeSnapshotBackup(value: boolean | cdktf.IResolvable) {
    this._volumeSnapshotBackup = value;
  }
  public resetVolumeSnapshotBackup() {
    this._volumeSnapshotBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotBackupInput() {
    return this._volumeSnapshotBackup;
  }

  // wal_storage - computed: false, optional: true, required: false
  private _walStorage = new ClusterWalStorageOutputReference(this, "wal_storage");
  public get walStorage() {
    return this._walStorage;
  }
  public putWalStorage(value: ClusterWalStorage) {
    this._walStorage.internalValue = value;
  }
  public resetWalStorage() {
    this._walStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walStorageInput() {
    return this._walStorage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTimeouts) {
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
      allowed_ip_ranges: cdktf.listMapper(clusterAllowedIpRangesToTerraform, false)(this._allowedIpRanges.internalValue),
      backup_retention_period: cdktf.stringToTerraform(this._backupRetentionPeriod),
      backup_schedule_time: cdktf.stringToTerraform(this._backupScheduleTime),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cluster_architecture: clusterClusterArchitectureToTerraform(this._clusterArchitecture.internalValue),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      csp_auth: cdktf.booleanToTerraform(this._cspAuth),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      maintenance_window: clusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      password: cdktf.stringToTerraform(this._password),
      pause: cdktf.booleanToTerraform(this._pause),
      pe_allowed_principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peAllowedPrincipalIds),
      pg_bouncer: clusterPgBouncerToTerraform(this._pgBouncer.internalValue),
      pg_config: cdktf.listMapper(clusterPgConfigToTerraform, false)(this._pgConfig.internalValue),
      pg_type: cdktf.stringToTerraform(this._pgType),
      pg_version: cdktf.stringToTerraform(this._pgVersion),
      pgvector: cdktf.booleanToTerraform(this._pgvector),
      post_gis: cdktf.booleanToTerraform(this._postGis),
      private_networking: cdktf.booleanToTerraform(this._privateNetworking),
      project_id: cdktf.stringToTerraform(this._projectId),
      read_only_connections: cdktf.booleanToTerraform(this._readOnlyConnections),
      region: cdktf.stringToTerraform(this._region),
      service_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccountIds),
      storage: clusterStorageToTerraform(this._storage.internalValue),
      superuser_access: cdktf.booleanToTerraform(this._superuserAccess),
      tags: cdktf.listMapper(clusterTagsToTerraform, false)(this._tags.internalValue),
      transparent_data_encryption: clusterTransparentDataEncryptionToTerraform(this._transparentDataEncryption.internalValue),
      volume_snapshot_backup: cdktf.booleanToTerraform(this._volumeSnapshotBackup),
      wal_storage: clusterWalStorageToTerraform(this._walStorage.internalValue),
      timeouts: clusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ip_ranges: {
        value: cdktf.listMapperHcl(clusterAllowedIpRangesToHclTerraform, false)(this._allowedIpRanges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterAllowedIpRangesList",
      },
      backup_retention_period: {
        value: cdktf.stringToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_schedule_time: {
        value: cdktf.stringToHclTerraform(this._backupScheduleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_architecture: {
        value: clusterClusterArchitectureToHclTerraform(this._clusterArchitecture.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterClusterArchitecture",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_auth: {
        value: cdktf.booleanToHclTerraform(this._cspAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window: {
        value: clusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterMaintenanceWindow",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause: {
        value: cdktf.booleanToHclTerraform(this._pause),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pe_allowed_principal_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peAllowedPrincipalIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pg_bouncer: {
        value: clusterPgBouncerToHclTerraform(this._pgBouncer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterPgBouncer",
      },
      pg_config: {
        value: cdktf.listMapperHcl(clusterPgConfigToHclTerraform, false)(this._pgConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterPgConfigList",
      },
      pg_type: {
        value: cdktf.stringToHclTerraform(this._pgType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pg_version: {
        value: cdktf.stringToHclTerraform(this._pgVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgvector: {
        value: cdktf.booleanToHclTerraform(this._pgvector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      post_gis: {
        value: cdktf.booleanToHclTerraform(this._postGis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_networking: {
        value: cdktf.booleanToHclTerraform(this._privateNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_connections: {
        value: cdktf.booleanToHclTerraform(this._readOnlyConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage: {
        value: clusterStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterStorage",
      },
      superuser_access: {
        value: cdktf.booleanToHclTerraform(this._superuserAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(clusterTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterTagsList",
      },
      transparent_data_encryption: {
        value: clusterTransparentDataEncryptionToHclTerraform(this._transparentDataEncryption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTransparentDataEncryption",
      },
      volume_snapshot_backup: {
        value: cdktf.booleanToHclTerraform(this._volumeSnapshotBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wal_storage: {
        value: clusterWalStorageToHclTerraform(this._walStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterWalStorage",
      },
      timeouts: {
        value: clusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
