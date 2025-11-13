// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enum: "AWS" "GCP", The cloud provider on which your TiDB cluster is hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#cloud_provider Cluster#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Enum: "DEDICATED" "DEVELOPER", The cluster type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#cluster_type Cluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * The configuration of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#config Cluster#config}
  */
  readonly config: ClusterConfigA;
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * The ID of the project. You can get the project ID from [tidbcloud_projects datasource](../data-sources/projects.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#project_id Cluster#project_id}
  */
  readonly projectId: string;
  /**
  * the region value should match the cloud provider's region code. You can get the complete list of available regions from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#region Cluster#region}
  */
  readonly region: string;
}
export interface ClusterConfigComponentsTidb {
  /**
  * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#node_quantity Cluster#node_quantity}
  */
  readonly nodeQuantity: number;
  /**
  * The size of the TiDB component in the cluster, You can get the available node size of each region from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
  *   - Can not modify node_size of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#node_size Cluster#node_size}
  */
  readonly nodeSize: string;
}

export function clusterConfigComponentsTidbToTerraform(struct?: ClusterConfigComponentsTidb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_quantity: cdktf.numberToTerraform(struct!.nodeQuantity),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
  }
}


export function clusterConfigComponentsTidbToHclTerraform(struct?: ClusterConfigComponentsTidb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_quantity: {
      value: cdktf.numberToHclTerraform(struct!.nodeQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterConfigComponentsTidbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterConfigComponentsTidb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeQuantity = this._nodeQuantity;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigComponentsTidb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeQuantity = undefined;
      this._nodeSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeQuantity = value.nodeQuantity;
      this._nodeSize = value.nodeSize;
    }
  }

  // node_quantity - computed: true, optional: false, required: true
  private _nodeQuantity?: number; 
  public get nodeQuantity() {
    return this.getNumberAttribute('node_quantity');
  }
  public set nodeQuantity(value: number) {
    this._nodeQuantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeQuantityInput() {
    return this._nodeQuantity;
  }

  // node_size - computed: true, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }
}
export interface ClusterConfigComponentsTiflash {
  /**
  * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *   - TiFlash do not support decreasing node quantity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#node_quantity Cluster#node_quantity}
  */
  readonly nodeQuantity: number;
  /**
  * The size of the TiFlash component in the cluster, You can get the available node size of each region from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *   - Can not modify node_size of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#node_size Cluster#node_size}
  */
  readonly nodeSize: string;
  /**
  * The storage size of a node in the cluster. You can get the minimum and maximum of storage size from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *   - Can not modify storage_size_gib of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#storage_size_gib Cluster#storage_size_gib}
  */
  readonly storageSizeGib: number;
}

export function clusterConfigComponentsTiflashToTerraform(struct?: ClusterConfigComponentsTiflash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_quantity: cdktf.numberToTerraform(struct!.nodeQuantity),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    storage_size_gib: cdktf.numberToTerraform(struct!.storageSizeGib),
  }
}


export function clusterConfigComponentsTiflashToHclTerraform(struct?: ClusterConfigComponentsTiflash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_quantity: {
      value: cdktf.numberToHclTerraform(struct!.nodeQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size_gib: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterConfigComponentsTiflashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterConfigComponentsTiflash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeQuantity = this._nodeQuantity;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._storageSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeGib = this._storageSizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigComponentsTiflash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeQuantity = undefined;
      this._nodeSize = undefined;
      this._storageSizeGib = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeQuantity = value.nodeQuantity;
      this._nodeSize = value.nodeSize;
      this._storageSizeGib = value.storageSizeGib;
    }
  }

  // node_quantity - computed: true, optional: false, required: true
  private _nodeQuantity?: number; 
  public get nodeQuantity() {
    return this.getNumberAttribute('node_quantity');
  }
  public set nodeQuantity(value: number) {
    this._nodeQuantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeQuantityInput() {
    return this._nodeQuantity;
  }

  // node_size - computed: true, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // storage_size_gib - computed: true, optional: false, required: true
  private _storageSizeGib?: number; 
  public get storageSizeGib() {
    return this.getNumberAttribute('storage_size_gib');
  }
  public set storageSizeGib(value: number) {
    this._storageSizeGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGibInput() {
    return this._storageSizeGib;
  }
}
export interface ClusterConfigComponentsTikv {
  /**
  * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *   - TiKV do not support decreasing node quantity.
  *   - The node_quantity of TiKV must be a multiple of 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#node_quantity Cluster#node_quantity}
  */
  readonly nodeQuantity: number;
  /**
  * The size of the TiKV component in the cluster, You can get the available node size of each region from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
  *   - Can not modify node_size of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#node_size Cluster#node_size}
  */
  readonly nodeSize: string;
  /**
  * The storage size of a node in the cluster. You can get the minimum and maximum of storage size from the [tidbcloud_cluster_specs datasource](../data-sources/cluster_specs.md).
  *   - Can not modify storage_size_gib of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#storage_size_gib Cluster#storage_size_gib}
  */
  readonly storageSizeGib: number;
}

export function clusterConfigComponentsTikvToTerraform(struct?: ClusterConfigComponentsTikv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_quantity: cdktf.numberToTerraform(struct!.nodeQuantity),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    storage_size_gib: cdktf.numberToTerraform(struct!.storageSizeGib),
  }
}


export function clusterConfigComponentsTikvToHclTerraform(struct?: ClusterConfigComponentsTikv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_quantity: {
      value: cdktf.numberToHclTerraform(struct!.nodeQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size_gib: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterConfigComponentsTikvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterConfigComponentsTikv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeQuantity = this._nodeQuantity;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._storageSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeGib = this._storageSizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigComponentsTikv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeQuantity = undefined;
      this._nodeSize = undefined;
      this._storageSizeGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeQuantity = value.nodeQuantity;
      this._nodeSize = value.nodeSize;
      this._storageSizeGib = value.storageSizeGib;
    }
  }

  // node_quantity - computed: true, optional: false, required: true
  private _nodeQuantity?: number; 
  public get nodeQuantity() {
    return this.getNumberAttribute('node_quantity');
  }
  public set nodeQuantity(value: number) {
    this._nodeQuantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeQuantityInput() {
    return this._nodeQuantity;
  }

  // node_size - computed: true, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // storage_size_gib - computed: true, optional: false, required: true
  private _storageSizeGib?: number; 
  public get storageSizeGib() {
    return this.getNumberAttribute('storage_size_gib');
  }
  public set storageSizeGib(value: number) {
    this._storageSizeGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGibInput() {
    return this._storageSizeGib;
  }
}
export interface ClusterConfigComponents {
  /**
  * The TiDB component of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#tidb Cluster#tidb}
  */
  readonly tidb: ClusterConfigComponentsTidb;
  /**
  * The TiFlash component of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#tiflash Cluster#tiflash}
  */
  readonly tiflash?: ClusterConfigComponentsTiflash;
  /**
  * The TiKV component of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#tikv Cluster#tikv}
  */
  readonly tikv: ClusterConfigComponentsTikv;
}

export function clusterConfigComponentsToTerraform(struct?: ClusterConfigComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tidb: clusterConfigComponentsTidbToTerraform(struct!.tidb),
    tiflash: clusterConfigComponentsTiflashToTerraform(struct!.tiflash),
    tikv: clusterConfigComponentsTikvToTerraform(struct!.tikv),
  }
}


export function clusterConfigComponentsToHclTerraform(struct?: ClusterConfigComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tidb: {
      value: clusterConfigComponentsTidbToHclTerraform(struct!.tidb),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterConfigComponentsTidb",
    },
    tiflash: {
      value: clusterConfigComponentsTiflashToHclTerraform(struct!.tiflash),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterConfigComponentsTiflash",
    },
    tikv: {
      value: clusterConfigComponentsTikvToHclTerraform(struct!.tikv),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterConfigComponentsTikv",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterConfigComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterConfigComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tidb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tidb = this._tidb?.internalValue;
    }
    if (this._tiflash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tiflash = this._tiflash?.internalValue;
    }
    if (this._tikv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tikv = this._tikv?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tidb.internalValue = undefined;
      this._tiflash.internalValue = undefined;
      this._tikv.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tidb.internalValue = value.tidb;
      this._tiflash.internalValue = value.tiflash;
      this._tikv.internalValue = value.tikv;
    }
  }

  // tidb - computed: true, optional: false, required: true
  private _tidb = new ClusterConfigComponentsTidbOutputReference(this, "tidb");
  public get tidb() {
    return this._tidb;
  }
  public putTidb(value: ClusterConfigComponentsTidb) {
    this._tidb.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tidbInput() {
    return this._tidb.internalValue;
  }

  // tiflash - computed: true, optional: true, required: false
  private _tiflash = new ClusterConfigComponentsTiflashOutputReference(this, "tiflash");
  public get tiflash() {
    return this._tiflash;
  }
  public putTiflash(value: ClusterConfigComponentsTiflash) {
    this._tiflash.internalValue = value;
  }
  public resetTiflash() {
    this._tiflash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiflashInput() {
    return this._tiflash.internalValue;
  }

  // tikv - computed: true, optional: false, required: true
  private _tikv = new ClusterConfigComponentsTikvOutputReference(this, "tikv");
  public get tikv() {
    return this._tikv;
  }
  public putTikv(value: ClusterConfigComponentsTikv) {
    this._tikv.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tikvInput() {
    return this._tikv.internalValue;
  }
}
export interface ClusterConfigIpAccessListStruct {
  /**
  * The IP address or CIDR range that you want to add to the cluster's IP access list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#cidr Cluster#cidr}
  */
  readonly cidr: string;
  /**
  * Description that explains the purpose of the entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#description Cluster#description}
  */
  readonly description: string;
}

export function clusterConfigIpAccessListStructToTerraform(struct?: ClusterConfigIpAccessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function clusterConfigIpAccessListStructToHclTerraform(struct?: ClusterConfigIpAccessListStruct | cdktf.IResolvable): any {
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

export class ClusterConfigIpAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterConfigIpAccessListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigIpAccessListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._description = value.description;
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

  // description - computed: false, optional: false, required: true
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

export class ClusterConfigIpAccessListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterConfigIpAccessListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterConfigIpAccessListStructOutputReference {
    return new ClusterConfigIpAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterConfigA {
  /**
  * The components of the cluster.
  *   - For a Serverless Tier cluster, the components value can not be set.  - For a Dedicated Tier cluster, the components value must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#components Cluster#components}
  */
  readonly components?: ClusterConfigComponents;
  /**
  * A list of IP addresses and Classless Inter-Domain Routing (CIDR) addresses that are allowed to access the TiDB Cloud cluster via [standard connection](https://docs.pingcap.com/tidbcloud/connect-to-tidb-cluster#connect-via-standard-connection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#ip_access_list Cluster#ip_access_list}
  */
  readonly ipAccessList?: ClusterConfigIpAccessListStruct[] | cdktf.IResolvable;
  /**
  * lag that indicates whether the cluster is paused. true means to pause the cluster, and false means to resume the cluster.
  *   - The cluster can be paused only when the cluster_status is "AVAILABLE".  - The cluster can be resumed only when the cluster_status is "PAUSED".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#paused Cluster#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The TiDB port for connection. The port must be in the range of 1024-65535 except 10080, 4000 in default.
  *   - For a Serverless Tier cluster, only port 4000 is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: number;
  /**
  * The root password to access the cluster. It must be 8-64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#root_password Cluster#root_password}
  */
  readonly rootPassword?: string;
}

export function clusterConfigAToTerraform(struct?: ClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: clusterConfigComponentsToTerraform(struct!.components),
    ip_access_list: cdktf.listMapper(clusterConfigIpAccessListStructToTerraform, false)(struct!.ipAccessList),
    paused: cdktf.booleanToTerraform(struct!.paused),
    port: cdktf.numberToTerraform(struct!.port),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
  }
}


export function clusterConfigAToHclTerraform(struct?: ClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: clusterConfigComponentsToHclTerraform(struct!.components),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterConfigComponents",
    },
    ip_access_list: {
      value: cdktf.listMapperHcl(clusterConfigIpAccessListStructToHclTerraform, false)(struct!.ipAccessList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterConfigIpAccessListStructList",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._ipAccessList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAccessList = this._ipAccessList?.internalValue;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._ipAccessList.internalValue = undefined;
      this._paused = undefined;
      this._port = undefined;
      this._rootPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._ipAccessList.internalValue = value.ipAccessList;
      this._paused = value.paused;
      this._port = value.port;
      this._rootPassword = value.rootPassword;
    }
  }

  // components - computed: true, optional: true, required: false
  private _components = new ClusterConfigComponentsOutputReference(this, "components");
  public get components() {
    return this._components;
  }
  public putComponents(value: ClusterConfigComponents) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // ip_access_list - computed: false, optional: true, required: false
  private _ipAccessList = new ClusterConfigIpAccessListStructList(this, "ip_access_list", false);
  public get ipAccessList() {
    return this._ipAccessList;
  }
  public putIpAccessList(value: ClusterConfigIpAccessListStruct[] | cdktf.IResolvable) {
    this._ipAccessList.internalValue = value;
  }
  public resetIpAccessList() {
    this._ipAccessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessListInput() {
    return this._ipAccessList.internalValue;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }
}
export interface ClusterStatusConnectionStringsStandard {
}

export function clusterStatusConnectionStringsStandardToTerraform(struct?: ClusterStatusConnectionStringsStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterStatusConnectionStringsStandardToHclTerraform(struct?: ClusterStatusConnectionStringsStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterStatusConnectionStringsStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterStatusConnectionStringsStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterStatusConnectionStringsStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface ClusterStatusConnectionStringsVpcPeering {
}

export function clusterStatusConnectionStringsVpcPeeringToTerraform(struct?: ClusterStatusConnectionStringsVpcPeering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterStatusConnectionStringsVpcPeeringToHclTerraform(struct?: ClusterStatusConnectionStringsVpcPeering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterStatusConnectionStringsVpcPeeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterStatusConnectionStringsVpcPeering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterStatusConnectionStringsVpcPeering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface ClusterStatusConnectionStrings {
}

export function clusterStatusConnectionStringsToTerraform(struct?: ClusterStatusConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterStatusConnectionStringsToHclTerraform(struct?: ClusterStatusConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterStatusConnectionStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterStatusConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterStatusConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_user - computed: true, optional: false, required: false
  public get defaultUser() {
    return this.getStringAttribute('default_user');
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new ClusterStatusConnectionStringsStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }

  // vpc_peering - computed: true, optional: false, required: false
  private _vpcPeering = new ClusterStatusConnectionStringsVpcPeeringOutputReference(this, "vpc_peering");
  public get vpcPeering() {
    return this._vpcPeering;
  }
}
export interface ClusterStatus {
}

export function clusterStatusToTerraform(struct?: ClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterStatusToHclTerraform(struct?: ClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_status - computed: true, optional: false, required: false
  public get clusterStatus() {
    return this.getStringAttribute('cluster_status');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new ClusterStatusConnectionStringsOutputReference(this, "connection_strings");
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // tidb_version - computed: true, optional: false, required: false
  public get tidbVersion() {
    return this.getStringAttribute('tidb_version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster tidbcloud_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/cluster tidbcloud_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._clusterType = config.clusterType;
    this._config.internalValue = config.config;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // config - computed: false, optional: false, required: true
  private _config = new ClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ClusterConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: false, required: false
  private _status = new ClusterStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      config: clusterConfigAToTerraform(this._config.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: clusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterConfigA",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
