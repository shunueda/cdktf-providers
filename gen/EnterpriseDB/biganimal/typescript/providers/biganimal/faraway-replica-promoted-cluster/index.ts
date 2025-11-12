// https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FarawayReplicaPromotedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#allowed_ip_ranges FarawayReplicaPromotedCluster#allowed_ip_ranges}
  */
  readonly allowedIpRanges?: FarawayReplicaPromotedClusterAllowedIpRanges[] | cdktf.IResolvable;
  /**
  * Backup retention period. For example, "7d", "2w", or "3m".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#backup_retention_period FarawayReplicaPromotedCluster#backup_retention_period}
  */
  readonly backupRetentionPeriod?: string;
  /**
  * Backup schedule time in 24 hour cron expression format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#backup_schedule_time FarawayReplicaPromotedCluster#backup_schedule_time}
  */
  readonly backupScheduleTime?: string;
  /**
  * Cluster architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#cluster_architecture FarawayReplicaPromotedCluster#cluster_architecture}
  */
  readonly clusterArchitecture: FarawayReplicaPromotedClusterClusterArchitecture;
  /**
  * Name of the faraway replica cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#cluster_name FarawayReplicaPromotedCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Is authentication handled by the cloud service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#csp_auth FarawayReplicaPromotedCluster#csp_auth}
  */
  readonly cspAuth?: boolean | cdktf.IResolvable;
  /**
  * Instance type. For example, "azure:Standard_D2s_v3", "aws:c6i.large" or "gcp:e2-highcpu-4".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#instance_type FarawayReplicaPromotedCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Password for the user edb_admin. It must be 12 characters or more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#password FarawayReplicaPromotedCluster#password}
  */
  readonly password: string;
  /**
  * Cloud provider subscription/account ID, need to be specified when cluster is deployed on BigAnimal's cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#pe_allowed_principal_ids FarawayReplicaPromotedCluster#pe_allowed_principal_ids}
  */
  readonly peAllowedPrincipalIds?: string[];
  /**
  * Database configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#pg_config FarawayReplicaPromotedCluster#pg_config}
  */
  readonly pgConfig?: FarawayReplicaPromotedClusterPgConfig[] | cdktf.IResolvable;
  /**
  * Is private networking enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#private_networking FarawayReplicaPromotedCluster#private_networking}
  */
  readonly privateNetworking?: boolean | cdktf.IResolvable;
  /**
  * BigAnimal Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#project_id FarawayReplicaPromotedCluster#project_id}
  */
  readonly projectId?: string;
  /**
  * Region to deploy the cluster. See [Supported regions](https://www.enterprisedb.com/docs/biganimal/latest/overview/03a_region_support/) for supported regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#region FarawayReplicaPromotedCluster#region}
  */
  readonly region: string;
  /**
  * A Google Cloud Service Account is used for logs. If you leave this blank, then you will be unable to access log details for this cluster. Required when cluster is deployed on BigAnimal's cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#service_account_ids FarawayReplicaPromotedCluster#service_account_ids}
  */
  readonly serviceAccountIds?: string[];
  /**
  * Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#storage FarawayReplicaPromotedCluster#storage}
  */
  readonly storage: FarawayReplicaPromotedClusterStorage;
  /**
  * Assign existing tags or create tags to assign to this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#tags FarawayReplicaPromotedCluster#tags}
  */
  readonly tags?: FarawayReplicaPromotedClusterTags[] | cdktf.IResolvable;
  /**
  * Transparent Data Encryption (TDE) key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#transparent_data_encryption FarawayReplicaPromotedCluster#transparent_data_encryption}
  */
  readonly transparentDataEncryption?: FarawayReplicaPromotedClusterTransparentDataEncryption;
  /**
  * Enable to take a snapshot of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#volume_snapshot_backup FarawayReplicaPromotedCluster#volume_snapshot_backup}
  */
  readonly volumeSnapshotBackup?: boolean | cdktf.IResolvable;
  /**
  * Use a separate storage volume for Write-Ahead Logs (Recommended for high write workloads)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#wal_storage FarawayReplicaPromotedCluster#wal_storage}
  */
  readonly walStorage?: FarawayReplicaPromotedClusterWalStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#timeouts FarawayReplicaPromotedCluster#timeouts}
  */
  readonly timeouts?: FarawayReplicaPromotedClusterTimeouts;
}
export interface FarawayReplicaPromotedClusterAllowedIpRanges {
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#cidr_block FarawayReplicaPromotedCluster#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Description of CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#description FarawayReplicaPromotedCluster#description}
  */
  readonly description: string;
}

export function farawayReplicaPromotedClusterAllowedIpRangesToTerraform(struct?: FarawayReplicaPromotedClusterAllowedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function farawayReplicaPromotedClusterAllowedIpRangesToHclTerraform(struct?: FarawayReplicaPromotedClusterAllowedIpRanges | cdktf.IResolvable): any {
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

export class FarawayReplicaPromotedClusterAllowedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FarawayReplicaPromotedClusterAllowedIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FarawayReplicaPromotedClusterAllowedIpRanges | cdktf.IResolvable | undefined) {
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

export class FarawayReplicaPromotedClusterAllowedIpRangesList extends cdktf.ComplexList {
  public internalValue? : FarawayReplicaPromotedClusterAllowedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): FarawayReplicaPromotedClusterAllowedIpRangesOutputReference {
    return new FarawayReplicaPromotedClusterAllowedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FarawayReplicaPromotedClusterClusterArchitecture {
  /**
  * Cluster architecture ID. For example, "single" or "ha".For Extreme High Availability clusters, please use the [biganimal_pgd](https://registry.terraform.io/providers/EnterpriseDB/biganimal/latest/docs/resources/pgd) resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#id FarawayReplicaPromotedCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Node count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#nodes FarawayReplicaPromotedCluster#nodes}
  */
  readonly nodes: number;
}

export function farawayReplicaPromotedClusterClusterArchitectureToTerraform(struct?: FarawayReplicaPromotedClusterClusterArchitecture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    nodes: cdktf.numberToTerraform(struct!.nodes),
  }
}


export function farawayReplicaPromotedClusterClusterArchitectureToHclTerraform(struct?: FarawayReplicaPromotedClusterClusterArchitecture | cdktf.IResolvable): any {
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

export class FarawayReplicaPromotedClusterClusterArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FarawayReplicaPromotedClusterClusterArchitecture | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FarawayReplicaPromotedClusterClusterArchitecture | cdktf.IResolvable | undefined) {
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
export interface FarawayReplicaPromotedClusterPgConfig {
  /**
  * GUC name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#name FarawayReplicaPromotedCluster#name}
  */
  readonly name: string;
  /**
  * GUC value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#value FarawayReplicaPromotedCluster#value}
  */
  readonly value: string;
}

export function farawayReplicaPromotedClusterPgConfigToTerraform(struct?: FarawayReplicaPromotedClusterPgConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function farawayReplicaPromotedClusterPgConfigToHclTerraform(struct?: FarawayReplicaPromotedClusterPgConfig | cdktf.IResolvable): any {
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

export class FarawayReplicaPromotedClusterPgConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FarawayReplicaPromotedClusterPgConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FarawayReplicaPromotedClusterPgConfig | cdktf.IResolvable | undefined) {
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

export class FarawayReplicaPromotedClusterPgConfigList extends cdktf.ComplexList {
  public internalValue? : FarawayReplicaPromotedClusterPgConfig[] | cdktf.IResolvable

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
  public get(index: number): FarawayReplicaPromotedClusterPgConfigOutputReference {
    return new FarawayReplicaPromotedClusterPgConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FarawayReplicaPromotedClusterStorage {
  /**
  * IOPS for the selected volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#iops FarawayReplicaPromotedCluster#iops}
  */
  readonly iops?: string;
  /**
  * Size of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#size FarawayReplicaPromotedCluster#size}
  */
  readonly size?: string;
  /**
  * Throughput.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#throughput FarawayReplicaPromotedCluster#throughput}
  */
  readonly throughput?: string;
  /**
  * Volume properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#volume_properties FarawayReplicaPromotedCluster#volume_properties}
  */
  readonly volumeProperties: string;
  /**
  * Volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#volume_type FarawayReplicaPromotedCluster#volume_type}
  */
  readonly volumeType: string;
}

export function farawayReplicaPromotedClusterStorageToTerraform(struct?: FarawayReplicaPromotedClusterStorage | cdktf.IResolvable): any {
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


export function farawayReplicaPromotedClusterStorageToHclTerraform(struct?: FarawayReplicaPromotedClusterStorage | cdktf.IResolvable): any {
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

export class FarawayReplicaPromotedClusterStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FarawayReplicaPromotedClusterStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FarawayReplicaPromotedClusterStorage | cdktf.IResolvable | undefined) {
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

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
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
export interface FarawayReplicaPromotedClusterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#tag_name FarawayReplicaPromotedCluster#tag_name}
  */
  readonly tagName: string;
}

export function farawayReplicaPromotedClusterTagsToTerraform(struct?: FarawayReplicaPromotedClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function farawayReplicaPromotedClusterTagsToHclTerraform(struct?: FarawayReplicaPromotedClusterTags | cdktf.IResolvable): any {
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

export class FarawayReplicaPromotedClusterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FarawayReplicaPromotedClusterTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FarawayReplicaPromotedClusterTags | cdktf.IResolvable | undefined) {
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

export class FarawayReplicaPromotedClusterTagsList extends cdktf.ComplexList {
  public internalValue? : FarawayReplicaPromotedClusterTags[] | cdktf.IResolvable

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
  public get(index: number): FarawayReplicaPromotedClusterTagsOutputReference {
    return new FarawayReplicaPromotedClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FarawayReplicaPromotedClusterTransparentDataEncryption {
  /**
  * Transparent Data Encryption (TDE) key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#key_id FarawayReplicaPromotedCluster#key_id}
  */
  readonly keyId: string;
}

export function farawayReplicaPromotedClusterTransparentDataEncryptionToTerraform(struct?: FarawayReplicaPromotedClusterTransparentDataEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function farawayReplicaPromotedClusterTransparentDataEncryptionToHclTerraform(struct?: FarawayReplicaPromotedClusterTransparentDataEncryption | cdktf.IResolvable): any {
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

export class FarawayReplicaPromotedClusterTransparentDataEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FarawayReplicaPromotedClusterTransparentDataEncryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FarawayReplicaPromotedClusterTransparentDataEncryption | cdktf.IResolvable | undefined) {
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
export interface FarawayReplicaPromotedClusterWalStorage {
  /**
  * IOPS for the selected volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#iops FarawayReplicaPromotedCluster#iops}
  */
  readonly iops?: string;
  /**
  * Size of the volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#size FarawayReplicaPromotedCluster#size}
  */
  readonly size: string;
  /**
  * Throughput is automatically calculated by BigAnimal based on the IOPS input if it's not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#throughput FarawayReplicaPromotedCluster#throughput}
  */
  readonly throughput?: string;
  /**
  * Volume properties in accordance with the selected volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#volume_properties FarawayReplicaPromotedCluster#volume_properties}
  */
  readonly volumeProperties: string;
  /**
  * Volume type. For Azure: "azurepremiumstorage" or "ultradisk". For AWS: "gp3", "io2", or "io2-block-express". For Google Cloud: only "pd-ssd".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#volume_type FarawayReplicaPromotedCluster#volume_type}
  */
  readonly volumeType: string;
}

export function farawayReplicaPromotedClusterWalStorageToTerraform(struct?: FarawayReplicaPromotedClusterWalStorage | cdktf.IResolvable): any {
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


export function farawayReplicaPromotedClusterWalStorageToHclTerraform(struct?: FarawayReplicaPromotedClusterWalStorage | cdktf.IResolvable): any {
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

export class FarawayReplicaPromotedClusterWalStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FarawayReplicaPromotedClusterWalStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FarawayReplicaPromotedClusterWalStorage | cdktf.IResolvable | undefined) {
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
export interface FarawayReplicaPromotedClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#create FarawayReplicaPromotedCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#delete FarawayReplicaPromotedCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#update FarawayReplicaPromotedCluster#update}
  */
  readonly update?: string;
}

export function farawayReplicaPromotedClusterTimeoutsToTerraform(struct?: FarawayReplicaPromotedClusterTimeouts | cdktf.IResolvable): any {
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


export function farawayReplicaPromotedClusterTimeoutsToHclTerraform(struct?: FarawayReplicaPromotedClusterTimeouts | cdktf.IResolvable): any {
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

export class FarawayReplicaPromotedClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FarawayReplicaPromotedClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FarawayReplicaPromotedClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster biganimal_faraway_replica_promoted_cluster}
*/
export class FarawayReplicaPromotedCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "biganimal_faraway_replica_promoted_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FarawayReplicaPromotedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FarawayReplicaPromotedCluster to import
  * @param importFromId The id of the existing FarawayReplicaPromotedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FarawayReplicaPromotedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "biganimal_faraway_replica_promoted_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/faraway_replica_promoted_cluster biganimal_faraway_replica_promoted_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FarawayReplicaPromotedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: FarawayReplicaPromotedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'biganimal_faraway_replica_promoted_cluster',
      terraformGeneratorMetadata: {
        providerName: 'biganimal',
        providerVersion: '3.1.1',
        providerVersionConstraint: '3.1.1'
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
    this._clusterArchitecture.internalValue = config.clusterArchitecture;
    this._clusterName = config.clusterName;
    this._cspAuth = config.cspAuth;
    this._instanceType = config.instanceType;
    this._password = config.password;
    this._peAllowedPrincipalIds = config.peAllowedPrincipalIds;
    this._pgConfig.internalValue = config.pgConfig;
    this._privateNetworking = config.privateNetworking;
    this._projectId = config.projectId;
    this._region = config.region;
    this._serviceAccountIds = config.serviceAccountIds;
    this._storage.internalValue = config.storage;
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
  private _allowedIpRanges = new FarawayReplicaPromotedClusterAllowedIpRangesList(this, "allowed_ip_ranges", true);
  public get allowedIpRanges() {
    return this._allowedIpRanges;
  }
  public putAllowedIpRanges(value: FarawayReplicaPromotedClusterAllowedIpRanges[] | cdktf.IResolvable) {
    this._allowedIpRanges.internalValue = value;
  }
  public resetAllowedIpRanges() {
    this._allowedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangesInput() {
    return this._allowedIpRanges.internalValue;
  }

  // backup_retention_period - computed: false, optional: true, required: false
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

  // can_add_faraway_replica - computed: true, optional: false, required: false
  public get canAddFarawayReplica() {
    return this.getBooleanAttribute('can_add_faraway_replica');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_architecture - computed: false, optional: false, required: true
  private _clusterArchitecture = new FarawayReplicaPromotedClusterClusterArchitectureOutputReference(this, "cluster_architecture");
  public get clusterArchitecture() {
    return this._clusterArchitecture;
  }
  public putClusterArchitecture(value: FarawayReplicaPromotedClusterClusterArchitecture) {
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

  // csp_auth - computed: false, optional: true, required: false
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

  // pg_config - computed: false, optional: true, required: false
  private _pgConfig = new FarawayReplicaPromotedClusterPgConfigList(this, "pg_config", true);
  public get pgConfig() {
    return this._pgConfig;
  }
  public putPgConfig(value: FarawayReplicaPromotedClusterPgConfig[] | cdktf.IResolvable) {
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

  // pg_type - computed: true, optional: false, required: false
  public get pgType() {
    return this.getStringAttribute('pg_type');
  }

  // pg_version - computed: true, optional: false, required: false
  public get pgVersion() {
    return this.getStringAttribute('pg_version');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // storage - computed: false, optional: false, required: true
  private _storage = new FarawayReplicaPromotedClusterStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: FarawayReplicaPromotedClusterStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new FarawayReplicaPromotedClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FarawayReplicaPromotedClusterTags[] | cdktf.IResolvable) {
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
  private _transparentDataEncryption = new FarawayReplicaPromotedClusterTransparentDataEncryptionOutputReference(this, "transparent_data_encryption");
  public get transparentDataEncryption() {
    return this._transparentDataEncryption;
  }
  public putTransparentDataEncryption(value: FarawayReplicaPromotedClusterTransparentDataEncryption) {
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
  private _walStorage = new FarawayReplicaPromotedClusterWalStorageOutputReference(this, "wal_storage");
  public get walStorage() {
    return this._walStorage;
  }
  public putWalStorage(value: FarawayReplicaPromotedClusterWalStorage) {
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
  private _timeouts = new FarawayReplicaPromotedClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FarawayReplicaPromotedClusterTimeouts) {
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
      allowed_ip_ranges: cdktf.listMapper(farawayReplicaPromotedClusterAllowedIpRangesToTerraform, false)(this._allowedIpRanges.internalValue),
      backup_retention_period: cdktf.stringToTerraform(this._backupRetentionPeriod),
      backup_schedule_time: cdktf.stringToTerraform(this._backupScheduleTime),
      cluster_architecture: farawayReplicaPromotedClusterClusterArchitectureToTerraform(this._clusterArchitecture.internalValue),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      csp_auth: cdktf.booleanToTerraform(this._cspAuth),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      password: cdktf.stringToTerraform(this._password),
      pe_allowed_principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peAllowedPrincipalIds),
      pg_config: cdktf.listMapper(farawayReplicaPromotedClusterPgConfigToTerraform, false)(this._pgConfig.internalValue),
      private_networking: cdktf.booleanToTerraform(this._privateNetworking),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      service_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccountIds),
      storage: farawayReplicaPromotedClusterStorageToTerraform(this._storage.internalValue),
      tags: cdktf.listMapper(farawayReplicaPromotedClusterTagsToTerraform, false)(this._tags.internalValue),
      transparent_data_encryption: farawayReplicaPromotedClusterTransparentDataEncryptionToTerraform(this._transparentDataEncryption.internalValue),
      volume_snapshot_backup: cdktf.booleanToTerraform(this._volumeSnapshotBackup),
      wal_storage: farawayReplicaPromotedClusterWalStorageToTerraform(this._walStorage.internalValue),
      timeouts: farawayReplicaPromotedClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ip_ranges: {
        value: cdktf.listMapperHcl(farawayReplicaPromotedClusterAllowedIpRangesToHclTerraform, false)(this._allowedIpRanges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FarawayReplicaPromotedClusterAllowedIpRangesList",
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
      cluster_architecture: {
        value: farawayReplicaPromotedClusterClusterArchitectureToHclTerraform(this._clusterArchitecture.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FarawayReplicaPromotedClusterClusterArchitecture",
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pe_allowed_principal_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peAllowedPrincipalIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pg_config: {
        value: cdktf.listMapperHcl(farawayReplicaPromotedClusterPgConfigToHclTerraform, false)(this._pgConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FarawayReplicaPromotedClusterPgConfigList",
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
        value: farawayReplicaPromotedClusterStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FarawayReplicaPromotedClusterStorage",
      },
      tags: {
        value: cdktf.listMapperHcl(farawayReplicaPromotedClusterTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FarawayReplicaPromotedClusterTagsList",
      },
      transparent_data_encryption: {
        value: farawayReplicaPromotedClusterTransparentDataEncryptionToHclTerraform(this._transparentDataEncryption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FarawayReplicaPromotedClusterTransparentDataEncryption",
      },
      volume_snapshot_backup: {
        value: cdktf.booleanToHclTerraform(this._volumeSnapshotBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wal_storage: {
        value: farawayReplicaPromotedClusterWalStorageToHclTerraform(this._walStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FarawayReplicaPromotedClusterWalStorage",
      },
      timeouts: {
        value: farawayReplicaPromotedClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FarawayReplicaPromotedClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
