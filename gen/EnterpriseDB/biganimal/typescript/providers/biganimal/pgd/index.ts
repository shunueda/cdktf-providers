// https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PgdConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cluster_name Pgd#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Cluster data groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#data_groups Pgd#data_groups}
  */
  readonly dataGroups: PgdDataGroups[] | cdktf.IResolvable;
  /**
  * Show the most recent cluster when there are multiple clusters with the same name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#most_recent Pgd#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Password for the user edb_admin. It must be 12 characters or more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#password Pgd#password}
  */
  readonly password: string;
  /**
  * Pause cluster. If true it will put the cluster on pause and set the phase as paused, if false it will resume the cluster and set the phase as healthy. Pausing a cluster allows you to save on compute costs without losing data or cluster configuration settings. While paused, clusters aren't upgraded or patched, but changes are applied when the cluster resumes. Pausing a Postgres Distributed(PGD) cluster shuts down all cluster nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#pause Pgd#pause}
  */
  readonly pause?: boolean | cdktf.IResolvable;
  /**
  * BigAnimal Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#project_id Pgd#project_id}
  */
  readonly projectId?: string;
  /**
  * Assign existing tags or create tags to assign to this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#tags Pgd#tags}
  */
  readonly tags?: PgdTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#witness_groups Pgd#witness_groups}
  */
  readonly witnessGroups?: PgdWitnessGroups[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#timeouts Pgd#timeouts}
  */
  readonly timeouts?: PgdTimeouts;
}
export interface PgdDataGroupsAllowedIpRanges {
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cidr_block Pgd#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Description of CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#description Pgd#description}
  */
  readonly description: string;
}

export function pgdDataGroupsAllowedIpRangesToTerraform(struct?: PgdDataGroupsAllowedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function pgdDataGroupsAllowedIpRangesToHclTerraform(struct?: PgdDataGroupsAllowedIpRanges | cdktf.IResolvable): any {
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

export class PgdDataGroupsAllowedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgdDataGroupsAllowedIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgdDataGroupsAllowedIpRanges | cdktf.IResolvable | undefined) {
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

export class PgdDataGroupsAllowedIpRangesList extends cdktf.ComplexList {
  public internalValue? : PgdDataGroupsAllowedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): PgdDataGroupsAllowedIpRangesOutputReference {
    return new PgdDataGroupsAllowedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgdDataGroupsCloudProvider {
  /**
  * Data group cloud provider id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cloud_provider_id Pgd#cloud_provider_id}
  */
  readonly cloudProviderId: string;
}

export function pgdDataGroupsCloudProviderToTerraform(struct?: PgdDataGroupsCloudProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_id: cdktf.stringToTerraform(struct!.cloudProviderId),
  }
}


export function pgdDataGroupsCloudProviderToHclTerraform(struct?: PgdDataGroupsCloudProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdDataGroupsCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsCloudProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderId = this._cloudProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdDataGroupsCloudProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProviderId = value.cloudProviderId;
    }
  }

  // cloud_provider_id - computed: false, optional: false, required: true
  private _cloudProviderId?: string; 
  public get cloudProviderId() {
    return this.getStringAttribute('cloud_provider_id');
  }
  public set cloudProviderId(value: string) {
    this._cloudProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderIdInput() {
    return this._cloudProviderId;
  }
}
export interface PgdDataGroupsClusterArchitecture {
  /**
  * Cluster architecture ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cluster_architecture_id Pgd#cluster_architecture_id}
  */
  readonly clusterArchitectureId: string;
  /**
  * Node count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#nodes Pgd#nodes}
  */
  readonly nodes: number;
}

export function pgdDataGroupsClusterArchitectureToTerraform(struct?: PgdDataGroupsClusterArchitecture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_architecture_id: cdktf.stringToTerraform(struct!.clusterArchitectureId),
    nodes: cdktf.numberToTerraform(struct!.nodes),
  }
}


export function pgdDataGroupsClusterArchitectureToHclTerraform(struct?: PgdDataGroupsClusterArchitecture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_architecture_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterArchitectureId),
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

export class PgdDataGroupsClusterArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsClusterArchitecture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArchitectureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArchitectureId = this._clusterArchitectureId;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdDataGroupsClusterArchitecture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArchitectureId = undefined;
      this._nodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArchitectureId = value.clusterArchitectureId;
      this._nodes = value.nodes;
    }
  }

  // cluster_architecture_id - computed: false, optional: false, required: true
  private _clusterArchitectureId?: string; 
  public get clusterArchitectureId() {
    return this.getStringAttribute('cluster_architecture_id');
  }
  public set clusterArchitectureId(value: string) {
    this._clusterArchitectureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArchitectureIdInput() {
    return this._clusterArchitectureId;
  }

  // cluster_architecture_name - computed: true, optional: false, required: false
  public get clusterArchitectureName() {
    return this.getStringAttribute('cluster_architecture_name');
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

  // witness_nodes - computed: true, optional: false, required: false
  public get witnessNodes() {
    return this.getNumberAttribute('witness_nodes');
  }
}
export interface PgdDataGroupsInstanceType {
  /**
  * Data group instance type id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#instance_type_id Pgd#instance_type_id}
  */
  readonly instanceTypeId: string;
}

export function pgdDataGroupsInstanceTypeToTerraform(struct?: PgdDataGroupsInstanceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type_id: cdktf.stringToTerraform(struct!.instanceTypeId),
  }
}


export function pgdDataGroupsInstanceTypeToHclTerraform(struct?: PgdDataGroupsInstanceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdDataGroupsInstanceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsInstanceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypeId = this._instanceTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdDataGroupsInstanceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceTypeId = value.instanceTypeId;
    }
  }

  // instance_type_id - computed: false, optional: false, required: true
  private _instanceTypeId?: string; 
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }
  public set instanceTypeId(value: string) {
    this._instanceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeIdInput() {
    return this._instanceTypeId;
  }
}
export interface PgdDataGroupsMaintenanceWindow {
  /**
  * Is maintenance window enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#is_enabled Pgd#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Start day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#start_day Pgd#start_day}
  */
  readonly startDay: number;
  /**
  * Start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#start_time Pgd#start_time}
  */
  readonly startTime: string;
}

export function pgdDataGroupsMaintenanceWindowToTerraform(struct?: PgdDataGroupsMaintenanceWindow | cdktf.IResolvable): any {
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


export function pgdDataGroupsMaintenanceWindowToHclTerraform(struct?: PgdDataGroupsMaintenanceWindow | cdktf.IResolvable): any {
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

export class PgdDataGroupsMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsMaintenanceWindow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgdDataGroupsMaintenanceWindow | cdktf.IResolvable | undefined) {
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

  // is_enabled - computed: false, optional: false, required: true
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

  // start_day - computed: false, optional: false, required: true
  private _startDay?: number; 
  public get startDay() {
    return this.getNumberAttribute('start_day');
  }
  public set startDay(value: number) {
    this._startDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDayInput() {
    return this._startDay;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface PgdDataGroupsPgConfig {
  /**
  * GUC name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#name Pgd#name}
  */
  readonly name: string;
  /**
  * GUC value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#value Pgd#value}
  */
  readonly value: string;
}

export function pgdDataGroupsPgConfigToTerraform(struct?: PgdDataGroupsPgConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pgdDataGroupsPgConfigToHclTerraform(struct?: PgdDataGroupsPgConfig | cdktf.IResolvable): any {
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

export class PgdDataGroupsPgConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgdDataGroupsPgConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgdDataGroupsPgConfig | cdktf.IResolvable | undefined) {
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

export class PgdDataGroupsPgConfigList extends cdktf.ComplexList {
  public internalValue? : PgdDataGroupsPgConfig[] | cdktf.IResolvable

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
  public get(index: number): PgdDataGroupsPgConfigOutputReference {
    return new PgdDataGroupsPgConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgdDataGroupsPgType {
  /**
  * Data group pg type id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#pg_type_id Pgd#pg_type_id}
  */
  readonly pgTypeId: string;
}

export function pgdDataGroupsPgTypeToTerraform(struct?: PgdDataGroupsPgType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pg_type_id: cdktf.stringToTerraform(struct!.pgTypeId),
  }
}


export function pgdDataGroupsPgTypeToHclTerraform(struct?: PgdDataGroupsPgType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pg_type_id: {
      value: cdktf.stringToHclTerraform(struct!.pgTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdDataGroupsPgTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsPgType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pgTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgTypeId = this._pgTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdDataGroupsPgType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pgTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pgTypeId = value.pgTypeId;
    }
  }

  // pg_type_id - computed: false, optional: false, required: true
  private _pgTypeId?: string; 
  public get pgTypeId() {
    return this.getStringAttribute('pg_type_id');
  }
  public set pgTypeId(value: string) {
    this._pgTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgTypeIdInput() {
    return this._pgTypeId;
  }
}
export interface PgdDataGroupsPgVersion {
  /**
  * Data group pg version id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#pg_version_id Pgd#pg_version_id}
  */
  readonly pgVersionId: string;
}

export function pgdDataGroupsPgVersionToTerraform(struct?: PgdDataGroupsPgVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pg_version_id: cdktf.stringToTerraform(struct!.pgVersionId),
  }
}


export function pgdDataGroupsPgVersionToHclTerraform(struct?: PgdDataGroupsPgVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pg_version_id: {
      value: cdktf.stringToHclTerraform(struct!.pgVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdDataGroupsPgVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsPgVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pgVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgVersionId = this._pgVersionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdDataGroupsPgVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pgVersionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pgVersionId = value.pgVersionId;
    }
  }

  // pg_version_id - computed: false, optional: false, required: true
  private _pgVersionId?: string; 
  public get pgVersionId() {
    return this.getStringAttribute('pg_version_id');
  }
  public set pgVersionId(value: string) {
    this._pgVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgVersionIdInput() {
    return this._pgVersionId;
  }
}
export interface PgdDataGroupsRegion {
  /**
  * Data group region id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#region_id Pgd#region_id}
  */
  readonly regionId: string;
}

export function pgdDataGroupsRegionToTerraform(struct?: PgdDataGroupsRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.stringToTerraform(struct!.regionId),
  }
}


export function pgdDataGroupsRegionToHclTerraform(struct?: PgdDataGroupsRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdDataGroupsRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdDataGroupsRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionId = value.regionId;
    }
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }
}
export interface PgdDataGroupsStorage {
  /**
  * IOPS for the selected volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#iops Pgd#iops}
  */
  readonly iops?: string;
  /**
  * Size of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#size Pgd#size}
  */
  readonly size?: string;
  /**
  * Throughput.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#throughput Pgd#throughput}
  */
  readonly throughput?: string;
  /**
  * Volume properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#volume_properties Pgd#volume_properties}
  */
  readonly volumeProperties: string;
  /**
  * Volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#volume_type Pgd#volume_type}
  */
  readonly volumeType: string;
}

export function pgdDataGroupsStorageToTerraform(struct?: PgdDataGroupsStorage | cdktf.IResolvable): any {
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


export function pgdDataGroupsStorageToHclTerraform(struct?: PgdDataGroupsStorage | cdktf.IResolvable): any {
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

export class PgdDataGroupsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgdDataGroupsStorage | cdktf.IResolvable | undefined) {
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
export interface PgdDataGroupsWalStorage {
  /**
  * IOPS for the selected volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#iops Pgd#iops}
  */
  readonly iops?: string;
  /**
  * Size of the volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#size Pgd#size}
  */
  readonly size: string;
  /**
  * Throughput is automatically calculated by BigAnimal based on the IOPS input if it's not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#throughput Pgd#throughput}
  */
  readonly throughput?: string;
  /**
  * Volume properties in accordance with the selected volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#volume_properties Pgd#volume_properties}
  */
  readonly volumeProperties: string;
  /**
  * Volume type. For Azure: "azurepremiumstorage" or "ultradisk". For AWS: "gp3", "io2", or "io2-block-express". For Google Cloud: only "pd-ssd".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#volume_type Pgd#volume_type}
  */
  readonly volumeType: string;
}

export function pgdDataGroupsWalStorageToTerraform(struct?: PgdDataGroupsWalStorage | cdktf.IResolvable): any {
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


export function pgdDataGroupsWalStorageToHclTerraform(struct?: PgdDataGroupsWalStorage | cdktf.IResolvable): any {
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

export class PgdDataGroupsWalStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdDataGroupsWalStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgdDataGroupsWalStorage | cdktf.IResolvable | undefined) {
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
export interface PgdDataGroups {
  /**
  * Allowed IP ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#allowed_ip_ranges Pgd#allowed_ip_ranges}
  */
  readonly allowedIpRanges?: PgdDataGroupsAllowedIpRanges[] | cdktf.IResolvable;
  /**
  * Backup retention period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#backup_retention_period Pgd#backup_retention_period}
  */
  readonly backupRetentionPeriod: string;
  /**
  * Backup schedule time in 24 hour cron expression format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#backup_schedule_time Pgd#backup_schedule_time}
  */
  readonly backupScheduleTime?: string;
  /**
  * Cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cloud_provider Pgd#cloud_provider}
  */
  readonly cloudProvider: PgdDataGroupsCloudProvider;
  /**
  * Cluster architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cluster_architecture Pgd#cluster_architecture}
  */
  readonly clusterArchitecture: PgdDataGroupsClusterArchitecture;
  /**
  * Type of the Specified Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cluster_type Pgd#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Is authentication handled by the cloud service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#csp_auth Pgd#csp_auth}
  */
  readonly cspAuth: boolean | cdktf.IResolvable;
  /**
  * Instance type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#instance_type Pgd#instance_type}
  */
  readonly instanceType: PgdDataGroupsInstanceType;
  /**
  * Custom maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#maintenance_window Pgd#maintenance_window}
  */
  readonly maintenanceWindow: PgdDataGroupsMaintenanceWindow;
  /**
  * Cloud provider subscription/account ID, need to be specified when cluster is deployed on BigAnimal's cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#pe_allowed_principal_ids Pgd#pe_allowed_principal_ids}
  */
  readonly peAllowedPrincipalIds?: string[];
  /**
  * Database configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#pg_config Pgd#pg_config}
  */
  readonly pgConfig: PgdDataGroupsPgConfig[] | cdktf.IResolvable;
  /**
  * Postgres type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#pg_type Pgd#pg_type}
  */
  readonly pgType: PgdDataGroupsPgType;
  /**
  * Postgres version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#pg_version Pgd#pg_version}
  */
  readonly pgVersion: PgdDataGroupsPgVersion;
  /**
  * Is private networking enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#private_networking Pgd#private_networking}
  */
  readonly privateNetworking: boolean | cdktf.IResolvable;
  /**
  * Is read-only connections enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#read_only_connections Pgd#read_only_connections}
  */
  readonly readOnlyConnections?: boolean | cdktf.IResolvable;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#region Pgd#region}
  */
  readonly region: PgdDataGroupsRegion;
  /**
  * A Google Cloud Service Account is used for logs. If you leave this blank, then you will be unable to access log details for this cluster. Required when cluster is deployed on BigAnimal's cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#service_account_ids Pgd#service_account_ids}
  */
  readonly serviceAccountIds?: string[];
  /**
  * Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#storage Pgd#storage}
  */
  readonly storage: PgdDataGroupsStorage;
  /**
  * Use a separate storage volume for Write-Ahead Logs (Recommended for high write workloads)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#wal_storage Pgd#wal_storage}
  */
  readonly walStorage?: PgdDataGroupsWalStorage;
}

export function pgdDataGroupsToTerraform(struct?: PgdDataGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_ranges: cdktf.listMapper(pgdDataGroupsAllowedIpRangesToTerraform, false)(struct!.allowedIpRanges),
    backup_retention_period: cdktf.stringToTerraform(struct!.backupRetentionPeriod),
    backup_schedule_time: cdktf.stringToTerraform(struct!.backupScheduleTime),
    cloud_provider: pgdDataGroupsCloudProviderToTerraform(struct!.cloudProvider),
    cluster_architecture: pgdDataGroupsClusterArchitectureToTerraform(struct!.clusterArchitecture),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    csp_auth: cdktf.booleanToTerraform(struct!.cspAuth),
    instance_type: pgdDataGroupsInstanceTypeToTerraform(struct!.instanceType),
    maintenance_window: pgdDataGroupsMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    pe_allowed_principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.peAllowedPrincipalIds),
    pg_config: cdktf.listMapper(pgdDataGroupsPgConfigToTerraform, false)(struct!.pgConfig),
    pg_type: pgdDataGroupsPgTypeToTerraform(struct!.pgType),
    pg_version: pgdDataGroupsPgVersionToTerraform(struct!.pgVersion),
    private_networking: cdktf.booleanToTerraform(struct!.privateNetworking),
    read_only_connections: cdktf.booleanToTerraform(struct!.readOnlyConnections),
    region: pgdDataGroupsRegionToTerraform(struct!.region),
    service_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountIds),
    storage: pgdDataGroupsStorageToTerraform(struct!.storage),
    wal_storage: pgdDataGroupsWalStorageToTerraform(struct!.walStorage),
  }
}


export function pgdDataGroupsToHclTerraform(struct?: PgdDataGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ip_ranges: {
      value: cdktf.listMapperHcl(pgdDataGroupsAllowedIpRangesToHclTerraform, false)(struct!.allowedIpRanges),
      isBlock: true,
      type: "set",
      storageClassType: "PgdDataGroupsAllowedIpRangesList",
    },
    backup_retention_period: {
      value: cdktf.stringToHclTerraform(struct!.backupRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_schedule_time: {
      value: cdktf.stringToHclTerraform(struct!.backupScheduleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider: {
      value: pgdDataGroupsCloudProviderToHclTerraform(struct!.cloudProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsCloudProvider",
    },
    cluster_architecture: {
      value: pgdDataGroupsClusterArchitectureToHclTerraform(struct!.clusterArchitecture),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsClusterArchitecture",
    },
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csp_auth: {
      value: cdktf.booleanToHclTerraform(struct!.cspAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_type: {
      value: pgdDataGroupsInstanceTypeToHclTerraform(struct!.instanceType),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsInstanceType",
    },
    maintenance_window: {
      value: pgdDataGroupsMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsMaintenanceWindow",
    },
    pe_allowed_principal_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.peAllowedPrincipalIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pg_config: {
      value: cdktf.listMapperHcl(pgdDataGroupsPgConfigToHclTerraform, false)(struct!.pgConfig),
      isBlock: true,
      type: "set",
      storageClassType: "PgdDataGroupsPgConfigList",
    },
    pg_type: {
      value: pgdDataGroupsPgTypeToHclTerraform(struct!.pgType),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsPgType",
    },
    pg_version: {
      value: pgdDataGroupsPgVersionToHclTerraform(struct!.pgVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsPgVersion",
    },
    private_networking: {
      value: cdktf.booleanToHclTerraform(struct!.privateNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_connections: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: pgdDataGroupsRegionToHclTerraform(struct!.region),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsRegion",
    },
    service_account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    storage: {
      value: pgdDataGroupsStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsStorage",
    },
    wal_storage: {
      value: pgdDataGroupsWalStorageToHclTerraform(struct!.walStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdDataGroupsWalStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdDataGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgdDataGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpRanges = this._allowedIpRanges?.internalValue;
    }
    if (this._backupRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPeriod = this._backupRetentionPeriod;
    }
    if (this._backupScheduleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupScheduleTime = this._backupScheduleTime;
    }
    if (this._cloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider?.internalValue;
    }
    if (this._clusterArchitecture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArchitecture = this._clusterArchitecture?.internalValue;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._cspAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.cspAuth = this._cspAuth;
    }
    if (this._instanceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._peAllowedPrincipalIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.peAllowedPrincipalIds = this._peAllowedPrincipalIds;
    }
    if (this._pgConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgConfig = this._pgConfig?.internalValue;
    }
    if (this._pgType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgType = this._pgType?.internalValue;
    }
    if (this._pgVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgVersion = this._pgVersion?.internalValue;
    }
    if (this._privateNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworking = this._privateNetworking;
    }
    if (this._readOnlyConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyConnections = this._readOnlyConnections;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._serviceAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountIds = this._serviceAccountIds;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._walStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.walStorage = this._walStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdDataGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIpRanges.internalValue = undefined;
      this._backupRetentionPeriod = undefined;
      this._backupScheduleTime = undefined;
      this._cloudProvider.internalValue = undefined;
      this._clusterArchitecture.internalValue = undefined;
      this._clusterType = undefined;
      this._cspAuth = undefined;
      this._instanceType.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._peAllowedPrincipalIds = undefined;
      this._pgConfig.internalValue = undefined;
      this._pgType.internalValue = undefined;
      this._pgVersion.internalValue = undefined;
      this._privateNetworking = undefined;
      this._readOnlyConnections = undefined;
      this._region.internalValue = undefined;
      this._serviceAccountIds = undefined;
      this._storage.internalValue = undefined;
      this._walStorage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIpRanges.internalValue = value.allowedIpRanges;
      this._backupRetentionPeriod = value.backupRetentionPeriod;
      this._backupScheduleTime = value.backupScheduleTime;
      this._cloudProvider.internalValue = value.cloudProvider;
      this._clusterArchitecture.internalValue = value.clusterArchitecture;
      this._clusterType = value.clusterType;
      this._cspAuth = value.cspAuth;
      this._instanceType.internalValue = value.instanceType;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._peAllowedPrincipalIds = value.peAllowedPrincipalIds;
      this._pgConfig.internalValue = value.pgConfig;
      this._pgType.internalValue = value.pgType;
      this._pgVersion.internalValue = value.pgVersion;
      this._privateNetworking = value.privateNetworking;
      this._readOnlyConnections = value.readOnlyConnections;
      this._region.internalValue = value.region;
      this._serviceAccountIds = value.serviceAccountIds;
      this._storage.internalValue = value.storage;
      this._walStorage.internalValue = value.walStorage;
    }
  }

  // allowed_ip_ranges - computed: true, optional: true, required: false
  private _allowedIpRanges = new PgdDataGroupsAllowedIpRangesList(this, "allowed_ip_ranges", true);
  public get allowedIpRanges() {
    return this._allowedIpRanges;
  }
  public putAllowedIpRanges(value: PgdDataGroupsAllowedIpRanges[] | cdktf.IResolvable) {
    this._allowedIpRanges.internalValue = value;
  }
  public resetAllowedIpRanges() {
    this._allowedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangesInput() {
    return this._allowedIpRanges.internalValue;
  }

  // backup_retention_period - computed: false, optional: false, required: true
  private _backupRetentionPeriod?: string; 
  public get backupRetentionPeriod() {
    return this.getStringAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: string) {
    this._backupRetentionPeriod = value;
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
  private _cloudProvider = new PgdDataGroupsCloudProviderOutputReference(this, "cloud_provider");
  public get cloudProvider() {
    return this._cloudProvider;
  }
  public putCloudProvider(value: PgdDataGroupsCloudProvider) {
    this._cloudProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider.internalValue;
  }

  // cluster_architecture - computed: false, optional: false, required: true
  private _clusterArchitecture = new PgdDataGroupsClusterArchitectureOutputReference(this, "cluster_architecture");
  public get clusterArchitecture() {
    return this._clusterArchitecture;
  }
  public putClusterArchitecture(value: PgdDataGroupsClusterArchitecture) {
    this._clusterArchitecture.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArchitectureInput() {
    return this._clusterArchitecture.internalValue;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_type - computed: true, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csp_auth - computed: false, optional: false, required: true
  private _cspAuth?: boolean | cdktf.IResolvable; 
  public get cspAuth() {
    return this.getBooleanAttribute('csp_auth');
  }
  public set cspAuth(value: boolean | cdktf.IResolvable) {
    this._cspAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAuthInput() {
    return this._cspAuth;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType = new PgdDataGroupsInstanceTypeOutputReference(this, "instance_type");
  public get instanceType() {
    return this._instanceType;
  }
  public putInstanceType(value: PgdDataGroupsInstanceType) {
    this._instanceType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType.internalValue;
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // maintenance_window - computed: false, optional: false, required: true
  private _maintenanceWindow = new PgdDataGroupsMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: PgdDataGroupsMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
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

  // pg_config - computed: false, optional: false, required: true
  private _pgConfig = new PgdDataGroupsPgConfigList(this, "pg_config", true);
  public get pgConfig() {
    return this._pgConfig;
  }
  public putPgConfig(value: PgdDataGroupsPgConfig[] | cdktf.IResolvable) {
    this._pgConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgConfigInput() {
    return this._pgConfig.internalValue;
  }

  // pg_type - computed: false, optional: false, required: true
  private _pgType = new PgdDataGroupsPgTypeOutputReference(this, "pg_type");
  public get pgType() {
    return this._pgType;
  }
  public putPgType(value: PgdDataGroupsPgType) {
    this._pgType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgTypeInput() {
    return this._pgType.internalValue;
  }

  // pg_version - computed: false, optional: false, required: true
  private _pgVersion = new PgdDataGroupsPgVersionOutputReference(this, "pg_version");
  public get pgVersion() {
    return this._pgVersion;
  }
  public putPgVersion(value: PgdDataGroupsPgVersion) {
    this._pgVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgVersionInput() {
    return this._pgVersion.internalValue;
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

  // private_networking - computed: false, optional: false, required: true
  private _privateNetworking?: boolean | cdktf.IResolvable; 
  public get privateNetworking() {
    return this.getBooleanAttribute('private_networking');
  }
  public set privateNetworking(value: boolean | cdktf.IResolvable) {
    this._privateNetworking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkingInput() {
    return this._privateNetworking;
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
  private _region = new PgdDataGroupsRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: PgdDataGroupsRegion) {
    this._region.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // resizing_pvc - computed: true, optional: false, required: false
  public get resizingPvc() {
    return cdktf.Fn.tolist(this.getListAttribute('resizing_pvc'));
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

  // storage - computed: false, optional: false, required: true
  private _storage = new PgdDataGroupsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: PgdDataGroupsStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // wal_storage - computed: false, optional: true, required: false
  private _walStorage = new PgdDataGroupsWalStorageOutputReference(this, "wal_storage");
  public get walStorage() {
    return this._walStorage;
  }
  public putWalStorage(value: PgdDataGroupsWalStorage) {
    this._walStorage.internalValue = value;
  }
  public resetWalStorage() {
    this._walStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walStorageInput() {
    return this._walStorage.internalValue;
  }
}

export class PgdDataGroupsList extends cdktf.ComplexList {
  public internalValue? : PgdDataGroups[] | cdktf.IResolvable

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
  public get(index: number): PgdDataGroupsOutputReference {
    return new PgdDataGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgdTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#tag_name Pgd#tag_name}
  */
  readonly tagName: string;
}

export function pgdTagsToTerraform(struct?: PgdTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function pgdTagsToHclTerraform(struct?: PgdTags | cdktf.IResolvable): any {
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

export class PgdTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgdTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgdTags | cdktf.IResolvable | undefined) {
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

export class PgdTagsList extends cdktf.ComplexList {
  public internalValue? : PgdTags[] | cdktf.IResolvable

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
  public get(index: number): PgdTagsOutputReference {
    return new PgdTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgdWitnessGroupsCloudProvider {
  /**
  * Cloud provider id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cloud_provider_id Pgd#cloud_provider_id}
  */
  readonly cloudProviderId?: string;
}

export function pgdWitnessGroupsCloudProviderToTerraform(struct?: PgdWitnessGroupsCloudProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_id: cdktf.stringToTerraform(struct!.cloudProviderId),
  }
}


export function pgdWitnessGroupsCloudProviderToHclTerraform(struct?: PgdWitnessGroupsCloudProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdWitnessGroupsCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdWitnessGroupsCloudProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderId = this._cloudProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdWitnessGroupsCloudProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProviderId = value.cloudProviderId;
    }
  }

  // cloud_provider_id - computed: true, optional: true, required: false
  private _cloudProviderId?: string; 
  public get cloudProviderId() {
    return this.getStringAttribute('cloud_provider_id');
  }
  public set cloudProviderId(value: string) {
    this._cloudProviderId = value;
  }
  public resetCloudProviderId() {
    this._cloudProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderIdInput() {
    return this._cloudProviderId;
  }
}
export interface PgdWitnessGroupsClusterArchitecture {
}

export function pgdWitnessGroupsClusterArchitectureToTerraform(struct?: PgdWitnessGroupsClusterArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pgdWitnessGroupsClusterArchitectureToHclTerraform(struct?: PgdWitnessGroupsClusterArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PgdWitnessGroupsClusterArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdWitnessGroupsClusterArchitecture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdWitnessGroupsClusterArchitecture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_architecture_id - computed: true, optional: false, required: false
  public get clusterArchitectureId() {
    return this.getStringAttribute('cluster_architecture_id');
  }

  // cluster_architecture_name - computed: true, optional: false, required: false
  public get clusterArchitectureName() {
    return this.getStringAttribute('cluster_architecture_name');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }

  // witness_nodes - computed: true, optional: false, required: false
  public get witnessNodes() {
    return this.getNumberAttribute('witness_nodes');
  }
}
export interface PgdWitnessGroupsInstanceType {
}

export function pgdWitnessGroupsInstanceTypeToTerraform(struct?: PgdWitnessGroupsInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pgdWitnessGroupsInstanceTypeToHclTerraform(struct?: PgdWitnessGroupsInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PgdWitnessGroupsInstanceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdWitnessGroupsInstanceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdWitnessGroupsInstanceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type_id - computed: true, optional: false, required: false
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }
}
export interface PgdWitnessGroupsMaintenanceWindow {
  /**
  * Is maintenance window enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#is_enabled Pgd#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * The day of week, 0 represents Sunday, 1 is Monday, and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#start_day Pgd#start_day}
  */
  readonly startDay?: number;
  /**
  * Start time. "hh:mm", for example: "23:59".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#start_time Pgd#start_time}
  */
  readonly startTime?: string;
}

export function pgdWitnessGroupsMaintenanceWindowToTerraform(struct?: PgdWitnessGroupsMaintenanceWindow | cdktf.IResolvable): any {
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


export function pgdWitnessGroupsMaintenanceWindowToHclTerraform(struct?: PgdWitnessGroupsMaintenanceWindow | cdktf.IResolvable): any {
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

export class PgdWitnessGroupsMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdWitnessGroupsMaintenanceWindow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgdWitnessGroupsMaintenanceWindow | cdktf.IResolvable | undefined) {
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
export interface PgdWitnessGroupsRegion {
  /**
  * Region id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#region_id Pgd#region_id}
  */
  readonly regionId: string;
}

export function pgdWitnessGroupsRegionToTerraform(struct?: PgdWitnessGroupsRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.stringToTerraform(struct!.regionId),
  }
}


export function pgdWitnessGroupsRegionToHclTerraform(struct?: PgdWitnessGroupsRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdWitnessGroupsRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdWitnessGroupsRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdWitnessGroupsRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regionId = value.regionId;
    }
  }

  // region_id - computed: true, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }
}
export interface PgdWitnessGroupsStorage {
}

export function pgdWitnessGroupsStorageToTerraform(struct?: PgdWitnessGroupsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pgdWitnessGroupsStorageToHclTerraform(struct?: PgdWitnessGroupsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PgdWitnessGroupsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdWitnessGroupsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdWitnessGroupsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getStringAttribute('iops');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getStringAttribute('throughput');
  }

  // volume_properties - computed: true, optional: false, required: false
  public get volumeProperties() {
    return this.getStringAttribute('volume_properties');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface PgdWitnessGroups {
  /**
  * Witness Group cloud provider id. It can be set during creation only and can be different than the cloud provider of the data groups. Once set, cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#cloud_provider Pgd#cloud_provider}
  */
  readonly cloudProvider?: PgdWitnessGroupsCloudProvider;
  /**
  * Custom maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#maintenance_window Pgd#maintenance_window}
  */
  readonly maintenanceWindow?: PgdWitnessGroupsMaintenanceWindow;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#region Pgd#region}
  */
  readonly region: PgdWitnessGroupsRegion;
}

export function pgdWitnessGroupsToTerraform(struct?: PgdWitnessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: pgdWitnessGroupsCloudProviderToTerraform(struct!.cloudProvider),
    maintenance_window: pgdWitnessGroupsMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    region: pgdWitnessGroupsRegionToTerraform(struct!.region),
  }
}


export function pgdWitnessGroupsToHclTerraform(struct?: PgdWitnessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: pgdWitnessGroupsCloudProviderToHclTerraform(struct!.cloudProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdWitnessGroupsCloudProvider",
    },
    maintenance_window: {
      value: pgdWitnessGroupsMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdWitnessGroupsMaintenanceWindow",
    },
    region: {
      value: pgdWitnessGroupsRegionToHclTerraform(struct!.region),
      isBlock: true,
      type: "struct",
      storageClassType: "PgdWitnessGroupsRegion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgdWitnessGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgdWitnessGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgdWitnessGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._region.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProvider.internalValue = value.cloudProvider;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._region.internalValue = value.region;
    }
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider = new PgdWitnessGroupsCloudProviderOutputReference(this, "cloud_provider");
  public get cloudProvider() {
    return this._cloudProvider;
  }
  public putCloudProvider(value: PgdWitnessGroupsCloudProvider) {
    this._cloudProvider.internalValue = value;
  }
  public resetCloudProvider() {
    this._cloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider.internalValue;
  }

  // cluster_architecture - computed: true, optional: false, required: false
  private _clusterArchitecture = new PgdWitnessGroupsClusterArchitectureOutputReference(this, "cluster_architecture");
  public get clusterArchitecture() {
    return this._clusterArchitecture;
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // instance_type - computed: true, optional: false, required: false
  private _instanceType = new PgdWitnessGroupsInstanceTypeOutputReference(this, "instance_type");
  public get instanceType() {
    return this._instanceType;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new PgdWitnessGroupsMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: PgdWitnessGroupsMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // region - computed: true, optional: false, required: true
  private _region = new PgdWitnessGroupsRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: PgdWitnessGroupsRegion) {
    this._region.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new PgdWitnessGroupsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
}

export class PgdWitnessGroupsList extends cdktf.ComplexList {
  public internalValue? : PgdWitnessGroups[] | cdktf.IResolvable

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
  public get(index: number): PgdWitnessGroupsOutputReference {
    return new PgdWitnessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgdTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#create Pgd#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#delete Pgd#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#update Pgd#update}
  */
  readonly update?: string;
}

export function pgdTimeoutsToTerraform(struct?: PgdTimeouts | cdktf.IResolvable): any {
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


export function pgdTimeoutsToHclTerraform(struct?: PgdTimeouts | cdktf.IResolvable): any {
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

export class PgdTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgdTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgdTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd biganimal_pgd}
*/
export class Pgd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "biganimal_pgd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pgd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pgd to import
  * @param importFromId The id of the existing Pgd that should be imported. Refer to the {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pgd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "biganimal_pgd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/resources/pgd biganimal_pgd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PgdConfig
  */
  public constructor(scope: Construct, id: string, config: PgdConfig) {
    super(scope, id, {
      terraformResourceType: 'biganimal_pgd',
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
    this._clusterName = config.clusterName;
    this._dataGroups.internalValue = config.dataGroups;
    this._mostRecent = config.mostRecent;
    this._password = config.password;
    this._pause = config.pause;
    this._projectId = config.projectId;
    this._tags.internalValue = config.tags;
    this._witnessGroups.internalValue = config.witnessGroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // data_groups - computed: false, optional: false, required: true
  private _dataGroups = new PgdDataGroupsList(this, "data_groups", false);
  public get dataGroups() {
    return this._dataGroups;
  }
  public putDataGroups(value: PgdDataGroups[] | cdktf.IResolvable) {
    this._dataGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataGroupsInput() {
    return this._dataGroups.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new PgdTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: PgdTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // witness_groups - computed: true, optional: true, required: false
  private _witnessGroups = new PgdWitnessGroupsList(this, "witness_groups", false);
  public get witnessGroups() {
    return this._witnessGroups;
  }
  public putWitnessGroups(value: PgdWitnessGroups[] | cdktf.IResolvable) {
    this._witnessGroups.internalValue = value;
  }
  public resetWitnessGroups() {
    this._witnessGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get witnessGroupsInput() {
    return this._witnessGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PgdTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PgdTimeouts) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      data_groups: cdktf.listMapper(pgdDataGroupsToTerraform, false)(this._dataGroups.internalValue),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      password: cdktf.stringToTerraform(this._password),
      pause: cdktf.booleanToTerraform(this._pause),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(pgdTagsToTerraform, false)(this._tags.internalValue),
      witness_groups: cdktf.listMapper(pgdWitnessGroupsToTerraform, false)(this._witnessGroups.internalValue),
      timeouts: pgdTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_groups: {
        value: cdktf.listMapperHcl(pgdDataGroupsToHclTerraform, false)(this._dataGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PgdDataGroupsList",
      },
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(pgdTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PgdTagsList",
      },
      witness_groups: {
        value: cdktf.listMapperHcl(pgdWitnessGroupsToHclTerraform, false)(this._witnessGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PgdWitnessGroupsList",
      },
      timeouts: {
        value: pgdTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PgdTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
