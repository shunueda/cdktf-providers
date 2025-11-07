// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability configuration for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#availability Cluster#availability}
  */
  readonly availability: ClusterAvailability;
  /**
  * The Cloud Service Provider where the cluster will be hosted. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#cloud_provider Cluster#cloud_provider}
  */
  readonly cloudProvider: ClusterCloudProvider;
  /**
  * The configuration type of the cluster. This field is deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#configuration_type Cluster#configuration_type}
  */
  readonly configurationType?: string;
  /**
  * Configuration for the Couchbase Server running on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#couchbase_server Cluster#couchbase_server}
  */
  readonly couchbaseServer?: ClusterCouchbaseServer;
  /**
  * Description of the cluster (up to 1024 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * EnablePrivateDNSResolution signals that the cluster should have hostnames that are hosted in a public DNS zone that resolve to a private DNS address. This exists to support the use case of customers connecting from their own data centers where it is not possible to make use of a Cloud Service Provider DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#enable_private_dns_resolution Cluster#enable_private_dns_resolution}
  */
  readonly enablePrivateDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * The If-Match header value used for optimistic concurrency control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#if_match Cluster#if_match}
  */
  readonly ifMatch?: string;
  /**
  * The name of the cluster (up to 256 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * The GUID4 ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#organization_id Cluster#organization_id}
  */
  readonly organizationId: string;
  /**
  * The GUID4 ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#project_id Cluster#project_id}
  */
  readonly projectId: string;
  /**
  * Configuration for the Service Groups in the cluster. Each Service Group represents a set of nodes with the same configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#service_groups Cluster#service_groups}
  */
  readonly serviceGroups: ClusterServiceGroups[] | cdktf.IResolvable;
  /**
  * Support configuration for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#support Cluster#support}
  */
  readonly support: ClusterSupport;
  /**
  * The Cloud Services Provider's availability zones for the cluster.For single availability zone clusters, only 1 zone is allowed in list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#zones Cluster#zones}
  */
  readonly zones?: string[];
}
export interface ClusterAudit {
}

export function clusterAuditToTerraform(struct?: ClusterAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterAuditToHclTerraform(struct?: ClusterAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface ClusterAvailability {
  /**
  * The availability type of the cluster. Can be 'single' for Single Node or 'multi' for Multi Node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#type Cluster#type}
  */
  readonly type: string;
}

export function clusterAvailabilityToTerraform(struct?: ClusterAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterAvailabilityToHclTerraform(struct?: ClusterAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ClusterAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
export interface ClusterCloudProvider {
  /**
  * The CIDR block for the cluster's network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#cidr Cluster#cidr}
  */
  readonly cidr: string;
  /**
  * The region where the cluster will be hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#region Cluster#region}
  */
  readonly region: string;
  /**
  * The Cloud Service Provider type. Currently supporting AWS, GCP and Azure. For Single Node cluster, only the AWS type Cloud Service Provider is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#type Cluster#type}
  */
  readonly type: string;
}

export function clusterCloudProviderToTerraform(struct?: ClusterCloudProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterCloudProviderToHclTerraform(struct?: ClusterCloudProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ClusterCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterCloudProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._region = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._region = value.region;
      this._type = value.type;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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
export interface ClusterCouchbaseServer {
  /**
  * The version of Couchbase Server to run on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#version Cluster#version}
  */
  readonly version?: string;
}

export function clusterCouchbaseServerToTerraform(struct?: ClusterCouchbaseServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function clusterCouchbaseServerToHclTerraform(struct?: ClusterCouchbaseServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCouchbaseServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterCouchbaseServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCouchbaseServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
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
}
export interface ClusterServiceGroupsNodeCompute {
  /**
  * The number of CPU cores for the node. The value must be between 1 and 128.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#cpu Cluster#cpu}
  */
  readonly cpu: number;
  /**
  * The amount of RAM in MB for the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#ram Cluster#ram}
  */
  readonly ram: number;
}

export function clusterServiceGroupsNodeComputeToTerraform(struct?: ClusterServiceGroupsNodeCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    ram: cdktf.numberToTerraform(struct!.ram),
  }
}


export function clusterServiceGroupsNodeComputeToHclTerraform(struct?: ClusterServiceGroupsNodeCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram: {
      value: cdktf.numberToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServiceGroupsNodeComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterServiceGroupsNodeCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServiceGroupsNodeCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._ram = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._ram = value.ram;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }
}
export interface ClusterServiceGroupsNodeDisk {
  /**
  * Enable or disable automatic disk expansion.  This can only be set for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#autoexpansion Cluster#autoexpansion}
  */
  readonly autoexpansion?: boolean | cdktf.IResolvable;
  /**
  * The number of IOPS for the disk. Only applicable for AWS and Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#iops Cluster#iops}
  */
  readonly iops?: number;
  /**
  * The size of the disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#storage Cluster#storage}
  */
  readonly storage?: number;
  /**
  * The type of disk to use. For AWS: gp3 or io2, for Azure: Premium or UltraSSD, for GCP: pd-ssd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#type Cluster#type}
  */
  readonly type: string;
}

export function clusterServiceGroupsNodeDiskToTerraform(struct?: ClusterServiceGroupsNodeDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoexpansion: cdktf.booleanToTerraform(struct!.autoexpansion),
    iops: cdktf.numberToTerraform(struct!.iops),
    storage: cdktf.numberToTerraform(struct!.storage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterServiceGroupsNodeDiskToHclTerraform(struct?: ClusterServiceGroupsNodeDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoexpansion: {
      value: cdktf.booleanToHclTerraform(struct!.autoexpansion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.numberToHclTerraform(struct!.storage),
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

export class ClusterServiceGroupsNodeDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterServiceGroupsNodeDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoexpansion !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoexpansion = this._autoexpansion;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServiceGroupsNodeDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoexpansion = undefined;
      this._iops = undefined;
      this._storage = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoexpansion = value.autoexpansion;
      this._iops = value.iops;
      this._storage = value.storage;
      this._type = value.type;
    }
  }

  // autoexpansion - computed: true, optional: true, required: false
  private _autoexpansion?: boolean | cdktf.IResolvable; 
  public get autoexpansion() {
    return this.getBooleanAttribute('autoexpansion');
  }
  public set autoexpansion(value: boolean | cdktf.IResolvable) {
    this._autoexpansion = value;
  }
  public resetAutoexpansion() {
    this._autoexpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoexpansionInput() {
    return this._autoexpansion;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
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
export interface ClusterServiceGroupsNode {
  /**
  * Compute resources configuration for the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#compute Cluster#compute}
  */
  readonly compute: ClusterServiceGroupsNodeCompute;
  /**
  * The 'storage' and 'IOPS' fields are required for AWS. For Azure, only the 'disktype' field is required. For the Ultra disk type, you can provide storage, IOPS, and auto-expansion fields. For Premium type, you can only provide the auto-expansion field, others cannot be set. In the case of GCP, only 'pd ssd' disk type is available, and you cannot set the 'IOPS' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#disk Cluster#disk}
  */
  readonly disk: ClusterServiceGroupsNodeDisk;
}

export function clusterServiceGroupsNodeToTerraform(struct?: ClusterServiceGroupsNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute: clusterServiceGroupsNodeComputeToTerraform(struct!.compute),
    disk: clusterServiceGroupsNodeDiskToTerraform(struct!.disk),
  }
}


export function clusterServiceGroupsNodeToHclTerraform(struct?: ClusterServiceGroupsNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute: {
      value: clusterServiceGroupsNodeComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterServiceGroupsNodeCompute",
    },
    disk: {
      value: clusterServiceGroupsNodeDiskToHclTerraform(struct!.disk),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterServiceGroupsNodeDisk",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServiceGroupsNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterServiceGroupsNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServiceGroupsNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compute.internalValue = undefined;
      this._disk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compute.internalValue = value.compute;
      this._disk.internalValue = value.disk;
    }
  }

  // compute - computed: false, optional: false, required: true
  private _compute = new ClusterServiceGroupsNodeComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: ClusterServiceGroupsNodeCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // disk - computed: false, optional: false, required: true
  private _disk = new ClusterServiceGroupsNodeDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ClusterServiceGroupsNodeDisk) {
    this._disk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }
}
export interface ClusterServiceGroups {
  /**
  * Node configuration for this Service Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#node Cluster#node}
  */
  readonly nodeAttribute: ClusterServiceGroupsNode;
  /**
  * The number of nodes in this Service Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#num_of_nodes Cluster#num_of_nodes}
  */
  readonly numOfNodes: number;
  /**
  * The list of Couchbase Services to run on the nodes in this Service Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#services Cluster#services}
  */
  readonly services: string[];
}

export function clusterServiceGroupsToTerraform(struct?: ClusterServiceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: clusterServiceGroupsNodeToTerraform(struct!.nodeAttribute),
    num_of_nodes: cdktf.numberToTerraform(struct!.numOfNodes),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function clusterServiceGroupsToHclTerraform(struct?: ClusterServiceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: clusterServiceGroupsNodeToHclTerraform(struct!.nodeAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterServiceGroupsNode",
    },
    num_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServiceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterServiceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    if (this._numOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfNodes = this._numOfNodes;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServiceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node.internalValue = undefined;
      this._numOfNodes = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node.internalValue = value.nodeAttribute;
      this._numOfNodes = value.numOfNodes;
      this._services = value.services;
    }
  }

  // node - computed: false, optional: false, required: true
  private _node = new ClusterServiceGroupsNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: ClusterServiceGroupsNode) {
    this._node.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // num_of_nodes - computed: false, optional: false, required: true
  private _numOfNodes?: number; 
  public get numOfNodes() {
    return this.getNumberAttribute('num_of_nodes');
  }
  public set numOfNodes(value: number) {
    this._numOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfNodesInput() {
    return this._numOfNodes;
  }

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}

export class ClusterServiceGroupsList extends cdktf.ComplexList {
  public internalValue? : ClusterServiceGroups[] | cdktf.IResolvable

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
  public get(index: number): ClusterServiceGroupsOutputReference {
    return new ClusterServiceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSupport {
  /**
  * The support plan options include 'Basic', 'Developer Pro', or 'Enterprise'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#plan Cluster#plan}
  */
  readonly plan: string;
  /**
  * The timezone for support coverage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#timezone Cluster#timezone}
  */
  readonly timezone?: string;
}

export function clusterSupportToTerraform(struct?: ClusterSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plan: cdktf.stringToTerraform(struct!.plan),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function clusterSupportToHclTerraform(struct?: ClusterSupport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plan: {
      value: cdktf.stringToHclTerraform(struct!.plan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterSupport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSupport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plan = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plan = value.plan;
      this._timezone = value.timezone;
    }
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster couchbase-capella_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster couchbase-capella_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_cluster',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availability.internalValue = config.availability;
    this._cloudProvider.internalValue = config.cloudProvider;
    this._configurationType = config.configurationType;
    this._couchbaseServer.internalValue = config.couchbaseServer;
    this._description = config.description;
    this._enablePrivateDnsResolution = config.enablePrivateDnsResolution;
    this._ifMatch = config.ifMatch;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._serviceGroups.internalValue = config.serviceGroups;
    this._support.internalValue = config.support;
    this._zones = config.zones;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_id - computed: true, optional: false, required: false
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new ClusterAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }

  // availability - computed: false, optional: false, required: true
  private _availability = new ClusterAvailabilityOutputReference(this, "availability");
  public get availability() {
    return this._availability;
  }
  public putAvailability(value: ClusterAvailability) {
    this._availability.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability.internalValue;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider = new ClusterCloudProviderOutputReference(this, "cloud_provider");
  public get cloudProvider() {
    return this._cloudProvider;
  }
  public putCloudProvider(value: ClusterCloudProvider) {
    this._cloudProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider.internalValue;
  }

  // configuration_type - computed: true, optional: true, required: false
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  public resetConfigurationType() {
    this._configurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // couchbase_server - computed: true, optional: true, required: false
  private _couchbaseServer = new ClusterCouchbaseServerOutputReference(this, "couchbase_server");
  public get couchbaseServer() {
    return this._couchbaseServer;
  }
  public putCouchbaseServer(value: ClusterCouchbaseServer) {
    this._couchbaseServer.internalValue = value;
  }
  public resetCouchbaseServer() {
    this._couchbaseServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get couchbaseServerInput() {
    return this._couchbaseServer.internalValue;
  }

  // current_state - computed: true, optional: false, required: false
  public get currentState() {
    return this.getStringAttribute('current_state');
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

  // enable_private_dns_resolution - computed: true, optional: true, required: false
  private _enablePrivateDnsResolution?: boolean | cdktf.IResolvable; 
  public get enablePrivateDnsResolution() {
    return this.getBooleanAttribute('enable_private_dns_resolution');
  }
  public set enablePrivateDnsResolution(value: boolean | cdktf.IResolvable) {
    this._enablePrivateDnsResolution = value;
  }
  public resetEnablePrivateDnsResolution() {
    this._enablePrivateDnsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateDnsResolutionInput() {
    return this._enablePrivateDnsResolution;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_match - computed: false, optional: true, required: false
  private _ifMatch?: string; 
  public get ifMatch() {
    return this.getStringAttribute('if_match');
  }
  public set ifMatch(value: string) {
    this._ifMatch = value;
  }
  public resetIfMatch() {
    this._ifMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifMatchInput() {
    return this._ifMatch;
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

  // service_groups - computed: false, optional: false, required: true
  private _serviceGroups = new ClusterServiceGroupsList(this, "service_groups", true);
  public get serviceGroups() {
    return this._serviceGroups;
  }
  public putServiceGroups(value: ClusterServiceGroups[] | cdktf.IResolvable) {
    this._serviceGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupsInput() {
    return this._serviceGroups.internalValue;
  }

  // support - computed: false, optional: false, required: true
  private _support = new ClusterSupportOutputReference(this, "support");
  public get support() {
    return this._support;
  }
  public putSupport(value: ClusterSupport) {
    this._support.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportInput() {
    return this._support.internalValue;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability: clusterAvailabilityToTerraform(this._availability.internalValue),
      cloud_provider: clusterCloudProviderToTerraform(this._cloudProvider.internalValue),
      configuration_type: cdktf.stringToTerraform(this._configurationType),
      couchbase_server: clusterCouchbaseServerToTerraform(this._couchbaseServer.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enable_private_dns_resolution: cdktf.booleanToTerraform(this._enablePrivateDnsResolution),
      if_match: cdktf.stringToTerraform(this._ifMatch),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_groups: cdktf.listMapper(clusterServiceGroupsToTerraform, false)(this._serviceGroups.internalValue),
      support: clusterSupportToTerraform(this._support.internalValue),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability: {
        value: clusterAvailabilityToHclTerraform(this._availability.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterAvailability",
      },
      cloud_provider: {
        value: clusterCloudProviderToHclTerraform(this._cloudProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterCloudProvider",
      },
      configuration_type: {
        value: cdktf.stringToHclTerraform(this._configurationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      couchbase_server: {
        value: clusterCouchbaseServerToHclTerraform(this._couchbaseServer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterCouchbaseServer",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_private_dns_resolution: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateDnsResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      if_match: {
        value: cdktf.stringToHclTerraform(this._ifMatch),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_groups: {
        value: cdktf.listMapperHcl(clusterServiceGroupsToHclTerraform, false)(this._serviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterServiceGroupsList",
      },
      support: {
        value: clusterSupportToHclTerraform(this._support.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterSupport",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
