// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#backup_id Restore#backup_id}
  */
  readonly backupId: string;
  /**
  * The configuration of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#config Restore#config}
  */
  readonly config: RestoreConfigA;
  /**
  * The name of the restore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#name Restore#name}
  */
  readonly name: string;
  /**
  * The ID of the project. You can get the project ID from [tidbcloud_projects datasource](../data-sources/projects.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#project_id Restore#project_id}
  */
  readonly projectId: string;
}
export interface RestoreCluster {
}

export function restoreClusterToTerraform(struct?: RestoreCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function restoreClusterToHclTerraform(struct?: RestoreCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RestoreClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RestoreCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestoreCluster | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface RestoreConfigComponentsTidb {
  /**
  * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the [tidbcloud_cluster_specs datasource](./cluster_specs.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#node_quantity Restore#node_quantity}
  */
  readonly nodeQuantity: number;
  /**
  * The size of the TiDB component in the cluster, You can get the available node size of each region from the [tidbcloud_cluster_specs datasource](./cluster_specs.md).
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
  *   - Can not modify node_size of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#node_size Restore#node_size}
  */
  readonly nodeSize: string;
}

export function restoreConfigComponentsTidbToTerraform(struct?: RestoreConfigComponentsTidb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_quantity: cdktf.numberToTerraform(struct!.nodeQuantity),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
  }
}


export function restoreConfigComponentsTidbToHclTerraform(struct?: RestoreConfigComponentsTidb | cdktf.IResolvable): any {
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

export class RestoreConfigComponentsTidbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RestoreConfigComponentsTidb | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestoreConfigComponentsTidb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeQuantity = undefined;
      this._nodeSize = undefined;
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
    }
  }

  // node_quantity - computed: false, optional: false, required: true
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

  // node_size - computed: false, optional: false, required: true
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
export interface RestoreConfigComponentsTiflash {
  /**
  * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the [tidbcloud_cluster_specs datasource](./cluster_specs.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#node_quantity Restore#node_quantity}
  */
  readonly nodeQuantity: number;
  /**
  * The size of the TiFlash component in the cluster, You can get the available node size of each region from the [tidbcloud_cluster_specs datasource](./cluster_specs.md).
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
  *   - Can not modify node_size of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#node_size Restore#node_size}
  */
  readonly nodeSize: string;
  /**
  * The storage size of a node in the cluster. You can get the minimum and maximum of storage size from the [tidbcloud_cluster_specs datasource](./cluster_specs.md).
  *   - Can not modify storage_size_gib of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#storage_size_gib Restore#storage_size_gib}
  */
  readonly storageSizeGib: number;
}

export function restoreConfigComponentsTiflashToTerraform(struct?: RestoreConfigComponentsTiflash | cdktf.IResolvable): any {
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


export function restoreConfigComponentsTiflashToHclTerraform(struct?: RestoreConfigComponentsTiflash | cdktf.IResolvable): any {
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

export class RestoreConfigComponentsTiflashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RestoreConfigComponentsTiflash | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RestoreConfigComponentsTiflash | cdktf.IResolvable | undefined) {
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

  // node_quantity - computed: false, optional: false, required: true
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

  // node_size - computed: false, optional: false, required: true
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

  // storage_size_gib - computed: false, optional: false, required: true
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
export interface RestoreConfigComponentsTikv {
  /**
  * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the [tidbcloud_cluster_specs datasource](./cluster_specs.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#node_quantity Restore#node_quantity}
  */
  readonly nodeQuantity: number;
  /**
  * The size of the TiKV component in the cluster, You can get the available node size of each region from the [tidbcloud_cluster_specs datasource](./cluster_specs.md).
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
  *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
  *   - Can not modify node_size of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#node_size Restore#node_size}
  */
  readonly nodeSize: string;
  /**
  * The storage size of a node in the cluster. You can get the minimum and maximum of storage size from the [tidbcloud_cluster_specs datasource](./cluster_specs.md).
  *   - Can not modify storage_size_gib of an existing cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#storage_size_gib Restore#storage_size_gib}
  */
  readonly storageSizeGib: number;
}

export function restoreConfigComponentsTikvToTerraform(struct?: RestoreConfigComponentsTikv | cdktf.IResolvable): any {
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


export function restoreConfigComponentsTikvToHclTerraform(struct?: RestoreConfigComponentsTikv | cdktf.IResolvable): any {
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

export class RestoreConfigComponentsTikvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RestoreConfigComponentsTikv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RestoreConfigComponentsTikv | cdktf.IResolvable | undefined) {
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

  // node_quantity - computed: false, optional: false, required: true
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

  // node_size - computed: false, optional: false, required: true
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

  // storage_size_gib - computed: false, optional: false, required: true
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
export interface RestoreConfigComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#tidb Restore#tidb}
  */
  readonly tidb: RestoreConfigComponentsTidb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#tiflash Restore#tiflash}
  */
  readonly tiflash?: RestoreConfigComponentsTiflash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#tikv Restore#tikv}
  */
  readonly tikv: RestoreConfigComponentsTikv;
}

export function restoreConfigComponentsToTerraform(struct?: RestoreConfigComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tidb: restoreConfigComponentsTidbToTerraform(struct!.tidb),
    tiflash: restoreConfigComponentsTiflashToTerraform(struct!.tiflash),
    tikv: restoreConfigComponentsTikvToTerraform(struct!.tikv),
  }
}


export function restoreConfigComponentsToHclTerraform(struct?: RestoreConfigComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tidb: {
      value: restoreConfigComponentsTidbToHclTerraform(struct!.tidb),
      isBlock: true,
      type: "struct",
      storageClassType: "RestoreConfigComponentsTidb",
    },
    tiflash: {
      value: restoreConfigComponentsTiflashToHclTerraform(struct!.tiflash),
      isBlock: true,
      type: "struct",
      storageClassType: "RestoreConfigComponentsTiflash",
    },
    tikv: {
      value: restoreConfigComponentsTikvToHclTerraform(struct!.tikv),
      isBlock: true,
      type: "struct",
      storageClassType: "RestoreConfigComponentsTikv",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RestoreConfigComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RestoreConfigComponents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RestoreConfigComponents | cdktf.IResolvable | undefined) {
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

  // tidb - computed: false, optional: false, required: true
  private _tidb = new RestoreConfigComponentsTidbOutputReference(this, "tidb");
  public get tidb() {
    return this._tidb;
  }
  public putTidb(value: RestoreConfigComponentsTidb) {
    this._tidb.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tidbInput() {
    return this._tidb.internalValue;
  }

  // tiflash - computed: false, optional: true, required: false
  private _tiflash = new RestoreConfigComponentsTiflashOutputReference(this, "tiflash");
  public get tiflash() {
    return this._tiflash;
  }
  public putTiflash(value: RestoreConfigComponentsTiflash) {
    this._tiflash.internalValue = value;
  }
  public resetTiflash() {
    this._tiflash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiflashInput() {
    return this._tiflash.internalValue;
  }

  // tikv - computed: false, optional: false, required: true
  private _tikv = new RestoreConfigComponentsTikvOutputReference(this, "tikv");
  public get tikv() {
    return this._tikv;
  }
  public putTikv(value: RestoreConfigComponentsTikv) {
    this._tikv.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tikvInput() {
    return this._tikv.internalValue;
  }
}
export interface RestoreConfigIpAccessListStruct {
  /**
  * The IP address or CIDR range that you want to add to the cluster's IP access list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#cidr Restore#cidr}
  */
  readonly cidr: string;
  /**
  * Description that explains the purpose of the entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#description Restore#description}
  */
  readonly description: string;
}

export function restoreConfigIpAccessListStructToTerraform(struct?: RestoreConfigIpAccessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function restoreConfigIpAccessListStructToHclTerraform(struct?: RestoreConfigIpAccessListStruct | cdktf.IResolvable): any {
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

export class RestoreConfigIpAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RestoreConfigIpAccessListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RestoreConfigIpAccessListStruct | cdktf.IResolvable | undefined) {
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

export class RestoreConfigIpAccessListStructList extends cdktf.ComplexList {
  public internalValue? : RestoreConfigIpAccessListStruct[] | cdktf.IResolvable

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
  public get(index: number): RestoreConfigIpAccessListStructOutputReference {
    return new RestoreConfigIpAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RestoreConfigA {
  /**
  * The components of the cluster.
  *   - For a Serverless Tier cluster, the components value can not be set.  - For a Dedicated Tier cluster, the components value must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#components Restore#components}
  */
  readonly components: RestoreConfigComponents;
  /**
  * A list of IP addresses and Classless Inter-Domain Routing (CIDR) addresses that are allowed to access the TiDB Cloud cluster via [standard connection](https://docs.pingcap.com/tidbcloud/connect-to-tidb-cluster#connect-via-standard-connection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#ip_access_list Restore#ip_access_list}
  */
  readonly ipAccessList?: RestoreConfigIpAccessListStruct[] | cdktf.IResolvable;
  /**
  * The TiDB port for connection. The port must be in the range of 1024-65535 except 10080, 4000 in default.
  *   - For a Serverless Tier cluster, only port 4000 is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#port Restore#port}
  */
  readonly port?: number;
  /**
  * The root password to access the cluster. It must be 8-64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#root_password Restore#root_password}
  */
  readonly rootPassword: string;
}

export function restoreConfigAToTerraform(struct?: RestoreConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: restoreConfigComponentsToTerraform(struct!.components),
    ip_access_list: cdktf.listMapper(restoreConfigIpAccessListStructToTerraform, false)(struct!.ipAccessList),
    port: cdktf.numberToTerraform(struct!.port),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
  }
}


export function restoreConfigAToHclTerraform(struct?: RestoreConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: restoreConfigComponentsToHclTerraform(struct!.components),
      isBlock: true,
      type: "struct",
      storageClassType: "RestoreConfigComponents",
    },
    ip_access_list: {
      value: cdktf.listMapperHcl(restoreConfigIpAccessListStructToHclTerraform, false)(struct!.ipAccessList),
      isBlock: true,
      type: "list",
      storageClassType: "RestoreConfigIpAccessListStructList",
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

export class RestoreConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RestoreConfigA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RestoreConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._ipAccessList.internalValue = undefined;
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
      this._port = value.port;
      this._rootPassword = value.rootPassword;
    }
  }

  // components - computed: false, optional: false, required: true
  private _components = new RestoreConfigComponentsOutputReference(this, "components");
  public get components() {
    return this._components;
  }
  public putComponents(value: RestoreConfigComponents) {
    this._components.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // ip_access_list - computed: false, optional: true, required: false
  private _ipAccessList = new RestoreConfigIpAccessListStructList(this, "ip_access_list", false);
  public get ipAccessList() {
    return this._ipAccessList;
  }
  public putIpAccessList(value: RestoreConfigIpAccessListStruct[] | cdktf.IResolvable) {
    this._ipAccessList.internalValue = value;
  }
  public resetIpAccessList() {
    this._ipAccessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessListInput() {
    return this._ipAccessList.internalValue;
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

  // root_password - computed: false, optional: false, required: true
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore tidbcloud_restore}
*/
export class Restore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_restore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Restore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Restore to import
  * @param importFromId The id of the existing Restore that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Restore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_restore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/resources/restore tidbcloud_restore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestoreConfig
  */
  public constructor(scope: Construct, id: string, config: RestoreConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_restore',
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
    this._backupId = config.backupId;
    this._config.internalValue = config.config;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster - computed: true, optional: false, required: false
  private _cluster = new RestoreClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // config - computed: false, optional: false, required: true
  private _config = new RestoreConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: RestoreConfigA) {
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

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktf.stringToTerraform(this._backupId),
      config: restoreConfigAToTerraform(this._config.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: restoreConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RestoreConfigA",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
