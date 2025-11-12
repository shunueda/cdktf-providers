// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataplatformClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability zone to create cluster in. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#availability_zone DataplatformCluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * ID of the cluster template. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#cluster_template_id DataplatformCluster#cluster_template_id}
  */
  readonly clusterTemplateId?: string;
  /**
  * Product configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#configs DataplatformCluster#configs}
  */
  readonly configs: DataplatformClusterConfigs;
  /**
  * Cluster description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#description DataplatformCluster#description}
  */
  readonly description?: string;
  /**
  * Floating IP pool ID. Use `auto` for autoselect. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#floating_ip_pool DataplatformCluster#floating_ip_pool}
  */
  readonly floatingIpPool?: string;
  /**
  * Enables multi az support. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#multiaz DataplatformCluster#multiaz}
  */
  readonly multiaz?: boolean | cdktf.IResolvable;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#name DataplatformCluster#name}
  */
  readonly name: string;
  /**
  * ID of the cluster network. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#network_id DataplatformCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Cluster pod groups. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#pod_groups DataplatformCluster#pod_groups}
  */
  readonly podGroups?: DataplatformClusterPodGroups[] | cdktf.IResolvable;
  /**
  * Name of the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#product_name DataplatformCluster#product_name}
  */
  readonly productName: string;
  /**
  * Version of the product. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#product_version DataplatformCluster#product_version}
  */
  readonly productVersion: string;
  /**
  * The region in which to obtain the Data platform client. If omitted, the `region` argument of the provider is used. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#region DataplatformCluster#region}
  */
  readonly region?: string;
  /**
  * ID of the cluster stack. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#stack_id DataplatformCluster#stack_id}
  */
  readonly stackId?: string;
  /**
  * ID of the cluster subnet. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#subnet_id DataplatformCluster#subnet_id}
  */
  readonly subnetId?: string;
}
export interface DataplatformClusterConfigsMaintenanceBackupDifferential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#keep_count DataplatformCluster#keep_count}
  */
  readonly keepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#keep_time DataplatformCluster#keep_time}
  */
  readonly keepTime?: number;
  /**
  * Differential backup schedule. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#start DataplatformCluster#start}
  */
  readonly start: string;
}

export function dataplatformClusterConfigsMaintenanceBackupDifferentialToTerraform(struct?: DataplatformClusterConfigsMaintenanceBackupDifferential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_count: cdktf.numberToTerraform(struct!.keepCount),
    keep_time: cdktf.numberToTerraform(struct!.keepTime),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataplatformClusterConfigsMaintenanceBackupDifferentialToHclTerraform(struct?: DataplatformClusterConfigsMaintenanceBackupDifferential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_count: {
      value: cdktf.numberToHclTerraform(struct!.keepCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_time: {
      value: cdktf.numberToHclTerraform(struct!.keepTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsMaintenanceBackupDifferentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplatformClusterConfigsMaintenanceBackupDifferential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepCount = this._keepCount;
    }
    if (this._keepTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTime = this._keepTime;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsMaintenanceBackupDifferential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepCount = undefined;
      this._keepTime = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepCount = value.keepCount;
      this._keepTime = value.keepTime;
      this._start = value.start;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // keep_count - computed: true, optional: true, required: false
  private _keepCount?: number; 
  public get keepCount() {
    return this.getNumberAttribute('keep_count');
  }
  public set keepCount(value: number) {
    this._keepCount = value;
  }
  public resetKeepCount() {
    this._keepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepCountInput() {
    return this._keepCount;
  }

  // keep_time - computed: true, optional: true, required: false
  private _keepTime?: number; 
  public get keepTime() {
    return this.getNumberAttribute('keep_time');
  }
  public set keepTime(value: number) {
    this._keepTime = value;
  }
  public resetKeepTime() {
    this._keepTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeInput() {
    return this._keepTime;
  }

  // start - computed: true, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataplatformClusterConfigsMaintenanceBackupFull {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#keep_count DataplatformCluster#keep_count}
  */
  readonly keepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#keep_time DataplatformCluster#keep_time}
  */
  readonly keepTime?: number;
  /**
  * Full backup schedule. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#start DataplatformCluster#start}
  */
  readonly start: string;
}

export function dataplatformClusterConfigsMaintenanceBackupFullToTerraform(struct?: DataplatformClusterConfigsMaintenanceBackupFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_count: cdktf.numberToTerraform(struct!.keepCount),
    keep_time: cdktf.numberToTerraform(struct!.keepTime),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataplatformClusterConfigsMaintenanceBackupFullToHclTerraform(struct?: DataplatformClusterConfigsMaintenanceBackupFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_count: {
      value: cdktf.numberToHclTerraform(struct!.keepCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_time: {
      value: cdktf.numberToHclTerraform(struct!.keepTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsMaintenanceBackupFullOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplatformClusterConfigsMaintenanceBackupFull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepCount = this._keepCount;
    }
    if (this._keepTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTime = this._keepTime;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsMaintenanceBackupFull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepCount = undefined;
      this._keepTime = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepCount = value.keepCount;
      this._keepTime = value.keepTime;
      this._start = value.start;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // keep_count - computed: true, optional: true, required: false
  private _keepCount?: number; 
  public get keepCount() {
    return this.getNumberAttribute('keep_count');
  }
  public set keepCount(value: number) {
    this._keepCount = value;
  }
  public resetKeepCount() {
    this._keepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepCountInput() {
    return this._keepCount;
  }

  // keep_time - computed: true, optional: true, required: false
  private _keepTime?: number; 
  public get keepTime() {
    return this.getNumberAttribute('keep_time');
  }
  public set keepTime(value: number) {
    this._keepTime = value;
  }
  public resetKeepTime() {
    this._keepTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeInput() {
    return this._keepTime;
  }

  // start - computed: true, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataplatformClusterConfigsMaintenanceBackupIncremental {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#keep_count DataplatformCluster#keep_count}
  */
  readonly keepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#keep_time DataplatformCluster#keep_time}
  */
  readonly keepTime?: number;
  /**
  * Incremental backup schedule. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#start DataplatformCluster#start}
  */
  readonly start: string;
}

export function dataplatformClusterConfigsMaintenanceBackupIncrementalToTerraform(struct?: DataplatformClusterConfigsMaintenanceBackupIncremental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_count: cdktf.numberToTerraform(struct!.keepCount),
    keep_time: cdktf.numberToTerraform(struct!.keepTime),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataplatformClusterConfigsMaintenanceBackupIncrementalToHclTerraform(struct?: DataplatformClusterConfigsMaintenanceBackupIncremental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_count: {
      value: cdktf.numberToHclTerraform(struct!.keepCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_time: {
      value: cdktf.numberToHclTerraform(struct!.keepTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsMaintenanceBackupIncrementalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplatformClusterConfigsMaintenanceBackupIncremental | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepCount = this._keepCount;
    }
    if (this._keepTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTime = this._keepTime;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsMaintenanceBackupIncremental | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepCount = undefined;
      this._keepTime = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepCount = value.keepCount;
      this._keepTime = value.keepTime;
      this._start = value.start;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // keep_count - computed: true, optional: true, required: false
  private _keepCount?: number; 
  public get keepCount() {
    return this.getNumberAttribute('keep_count');
  }
  public set keepCount(value: number) {
    this._keepCount = value;
  }
  public resetKeepCount() {
    this._keepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepCountInput() {
    return this._keepCount;
  }

  // keep_time - computed: true, optional: true, required: false
  private _keepTime?: number; 
  public get keepTime() {
    return this.getNumberAttribute('keep_time');
  }
  public set keepTime(value: number) {
    this._keepTime = value;
  }
  public resetKeepTime() {
    this._keepTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeInput() {
    return this._keepTime;
  }

  // start - computed: true, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataplatformClusterConfigsMaintenanceBackup {
  /**
  * Differential backup settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#differential DataplatformCluster#differential}
  */
  readonly differential?: DataplatformClusterConfigsMaintenanceBackupDifferential;
  /**
  * Full backup settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#full DataplatformCluster#full}
  */
  readonly full?: DataplatformClusterConfigsMaintenanceBackupFull;
  /**
  * Incremental backup settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#incremental DataplatformCluster#incremental}
  */
  readonly incremental?: DataplatformClusterConfigsMaintenanceBackupIncremental;
}

export function dataplatformClusterConfigsMaintenanceBackupToTerraform(struct?: DataplatformClusterConfigsMaintenanceBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    differential: dataplatformClusterConfigsMaintenanceBackupDifferentialToTerraform(struct!.differential),
    full: dataplatformClusterConfigsMaintenanceBackupFullToTerraform(struct!.full),
    incremental: dataplatformClusterConfigsMaintenanceBackupIncrementalToTerraform(struct!.incremental),
  }
}


export function dataplatformClusterConfigsMaintenanceBackupToHclTerraform(struct?: DataplatformClusterConfigsMaintenanceBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    differential: {
      value: dataplatformClusterConfigsMaintenanceBackupDifferentialToHclTerraform(struct!.differential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataplatformClusterConfigsMaintenanceBackupDifferential",
    },
    full: {
      value: dataplatformClusterConfigsMaintenanceBackupFullToHclTerraform(struct!.full),
      isBlock: true,
      type: "struct",
      storageClassType: "DataplatformClusterConfigsMaintenanceBackupFull",
    },
    incremental: {
      value: dataplatformClusterConfigsMaintenanceBackupIncrementalToHclTerraform(struct!.incremental),
      isBlock: true,
      type: "struct",
      storageClassType: "DataplatformClusterConfigsMaintenanceBackupIncremental",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsMaintenanceBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplatformClusterConfigsMaintenanceBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._differential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.differential = this._differential?.internalValue;
    }
    if (this._full?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full?.internalValue;
    }
    if (this._incremental?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incremental = this._incremental?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsMaintenanceBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._differential.internalValue = undefined;
      this._full.internalValue = undefined;
      this._incremental.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._differential.internalValue = value.differential;
      this._full.internalValue = value.full;
      this._incremental.internalValue = value.incremental;
    }
  }

  // differential - computed: true, optional: true, required: false
  private _differential = new DataplatformClusterConfigsMaintenanceBackupDifferentialOutputReference(this, "differential");
  public get differential() {
    return this._differential;
  }
  public putDifferential(value: DataplatformClusterConfigsMaintenanceBackupDifferential) {
    this._differential.internalValue = value;
  }
  public resetDifferential() {
    this._differential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get differentialInput() {
    return this._differential.internalValue;
  }

  // full - computed: true, optional: true, required: false
  private _full = new DataplatformClusterConfigsMaintenanceBackupFullOutputReference(this, "full");
  public get full() {
    return this._full;
  }
  public putFull(value: DataplatformClusterConfigsMaintenanceBackupFull) {
    this._full.internalValue = value;
  }
  public resetFull() {
    this._full.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full.internalValue;
  }

  // incremental - computed: true, optional: true, required: false
  private _incremental = new DataplatformClusterConfigsMaintenanceBackupIncrementalOutputReference(this, "incremental");
  public get incremental() {
    return this._incremental;
  }
  public putIncremental(value: DataplatformClusterConfigsMaintenanceBackupIncremental) {
    this._incremental.internalValue = value;
  }
  public resetIncremental() {
    this._incremental.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalInput() {
    return this._incremental.internalValue;
  }
}
export interface DataplatformClusterConfigsMaintenanceCrontabsSettings {
  /**
  * Setting alias. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#alias DataplatformCluster#alias}
  */
  readonly alias: string;
  /**
  * Setting value. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#value DataplatformCluster#value}
  */
  readonly value: string;
}

export function dataplatformClusterConfigsMaintenanceCrontabsSettingsToTerraform(struct?: DataplatformClusterConfigsMaintenanceCrontabsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataplatformClusterConfigsMaintenanceCrontabsSettingsToHclTerraform(struct?: DataplatformClusterConfigsMaintenanceCrontabsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
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

export class DataplatformClusterConfigsMaintenanceCrontabsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterConfigsMaintenanceCrontabsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsMaintenanceCrontabsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._value = value.value;
    }
  }

  // alias - computed: true, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

export class DataplatformClusterConfigsMaintenanceCrontabsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataplatformClusterConfigsMaintenanceCrontabsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataplatformClusterConfigsMaintenanceCrontabsSettingsOutputReference {
    return new DataplatformClusterConfigsMaintenanceCrontabsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplatformClusterConfigsMaintenanceCrontabs {
  /**
  * Cron tab name. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#name DataplatformCluster#name}
  */
  readonly name: string;
  /**
  * Additional cron settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#settings DataplatformCluster#settings}
  */
  readonly settings?: DataplatformClusterConfigsMaintenanceCrontabsSettings[] | cdktf.IResolvable;
  /**
  * Cron tab schedule. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#start DataplatformCluster#start}
  */
  readonly start?: string;
}

export function dataplatformClusterConfigsMaintenanceCrontabsToTerraform(struct?: DataplatformClusterConfigsMaintenanceCrontabs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    settings: cdktf.listMapper(dataplatformClusterConfigsMaintenanceCrontabsSettingsToTerraform, false)(struct!.settings),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataplatformClusterConfigsMaintenanceCrontabsToHclTerraform(struct?: DataplatformClusterConfigsMaintenanceCrontabs | cdktf.IResolvable): any {
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
    settings: {
      value: cdktf.listMapperHcl(dataplatformClusterConfigsMaintenanceCrontabsSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataplatformClusterConfigsMaintenanceCrontabsSettingsList",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsMaintenanceCrontabsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterConfigsMaintenanceCrontabs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsMaintenanceCrontabs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._settings.internalValue = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._settings.internalValue = value.settings;
      this._start = value.start;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataplatformClusterConfigsMaintenanceCrontabsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataplatformClusterConfigsMaintenanceCrontabsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataplatformClusterConfigsMaintenanceCrontabsList extends cdktf.ComplexList {
  public internalValue? : DataplatformClusterConfigsMaintenanceCrontabs[] | cdktf.IResolvable

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
  public get(index: number): DataplatformClusterConfigsMaintenanceCrontabsOutputReference {
    return new DataplatformClusterConfigsMaintenanceCrontabsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplatformClusterConfigsMaintenance {
  /**
  * Backup settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#backup DataplatformCluster#backup}
  */
  readonly backup?: DataplatformClusterConfigsMaintenanceBackup;
  /**
  * Cron tabs settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#crontabs DataplatformCluster#crontabs}
  */
  readonly crontabs?: DataplatformClusterConfigsMaintenanceCrontabs[] | cdktf.IResolvable;
  /**
  * Maintenance cron schedule. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#start DataplatformCluster#start}
  */
  readonly start?: string;
}

export function dataplatformClusterConfigsMaintenanceToTerraform(struct?: DataplatformClusterConfigsMaintenance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: dataplatformClusterConfigsMaintenanceBackupToTerraform(struct!.backup),
    crontabs: cdktf.listMapper(dataplatformClusterConfigsMaintenanceCrontabsToTerraform, false)(struct!.crontabs),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataplatformClusterConfigsMaintenanceToHclTerraform(struct?: DataplatformClusterConfigsMaintenance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: dataplatformClusterConfigsMaintenanceBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataplatformClusterConfigsMaintenanceBackup",
    },
    crontabs: {
      value: cdktf.listMapperHcl(dataplatformClusterConfigsMaintenanceCrontabsToHclTerraform, false)(struct!.crontabs),
      isBlock: true,
      type: "list",
      storageClassType: "DataplatformClusterConfigsMaintenanceCrontabsList",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsMaintenanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplatformClusterConfigsMaintenance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._crontabs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crontabs = this._crontabs?.internalValue;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsMaintenance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup.internalValue = undefined;
      this._crontabs.internalValue = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup.internalValue = value.backup;
      this._crontabs.internalValue = value.crontabs;
      this._start = value.start;
    }
  }

  // backup - computed: true, optional: true, required: false
  private _backup = new DataplatformClusterConfigsMaintenanceBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataplatformClusterConfigsMaintenanceBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // crontabs - computed: true, optional: true, required: false
  private _crontabs = new DataplatformClusterConfigsMaintenanceCrontabsList(this, "crontabs", false);
  public get crontabs() {
    return this._crontabs;
  }
  public putCrontabs(value: DataplatformClusterConfigsMaintenanceCrontabs[] | cdktf.IResolvable) {
    this._crontabs.internalValue = value;
  }
  public resetCrontabs() {
    this._crontabs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crontabsInput() {
    return this._crontabs.internalValue;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataplatformClusterConfigsSettings {
  /**
  * Setting alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#alias DataplatformCluster#alias}
  */
  readonly alias: string;
  /**
  * Setting value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#value DataplatformCluster#value}
  */
  readonly value: string;
}

export function dataplatformClusterConfigsSettingsToTerraform(struct?: DataplatformClusterConfigsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataplatformClusterConfigsSettingsToHclTerraform(struct?: DataplatformClusterConfigsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
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

export class DataplatformClusterConfigsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterConfigsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._value = value.value;
    }
  }

  // alias - computed: true, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

export class DataplatformClusterConfigsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataplatformClusterConfigsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataplatformClusterConfigsSettingsOutputReference {
    return new DataplatformClusterConfigsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplatformClusterConfigsUsers {
  /**
  * Password. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#password DataplatformCluster#password}
  */
  readonly password: string;
  /**
  * User role. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#role DataplatformCluster#role}
  */
  readonly role?: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#username DataplatformCluster#username}
  */
  readonly username: string;
}

export function dataplatformClusterConfigsUsersToTerraform(struct?: DataplatformClusterConfigsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    role: cdktf.stringToTerraform(struct!.role),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataplatformClusterConfigsUsersToHclTerraform(struct?: DataplatformClusterConfigsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterConfigsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._role = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._role = value.role;
      this._username = value.username;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: true, optional: false, required: true
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // username - computed: true, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataplatformClusterConfigsUsersList extends cdktf.ComplexList {
  public internalValue? : DataplatformClusterConfigsUsers[] | cdktf.IResolvable

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
  public get(index: number): DataplatformClusterConfigsUsersOutputReference {
    return new DataplatformClusterConfigsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplatformClusterConfigsWarehousesConnectionsSettings {
  /**
  * Setting alias. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#alias DataplatformCluster#alias}
  */
  readonly alias: string;
  /**
  * Setting value. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#value DataplatformCluster#value}
  */
  readonly value: string;
}

export function dataplatformClusterConfigsWarehousesConnectionsSettingsToTerraform(struct?: DataplatformClusterConfigsWarehousesConnectionsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataplatformClusterConfigsWarehousesConnectionsSettingsToHclTerraform(struct?: DataplatformClusterConfigsWarehousesConnectionsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
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

export class DataplatformClusterConfigsWarehousesConnectionsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterConfigsWarehousesConnectionsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsWarehousesConnectionsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._value = value.value;
    }
  }

  // alias - computed: true, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

export class DataplatformClusterConfigsWarehousesConnectionsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataplatformClusterConfigsWarehousesConnectionsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataplatformClusterConfigsWarehousesConnectionsSettingsOutputReference {
    return new DataplatformClusterConfigsWarehousesConnectionsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplatformClusterConfigsWarehousesConnections {
  /**
  * Connection name. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#name DataplatformCluster#name}
  */
  readonly name: string;
  /**
  * Connection plug. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#plug DataplatformCluster#plug}
  */
  readonly plug: string;
  /**
  * Additional warehouse settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#settings DataplatformCluster#settings}
  */
  readonly settings: DataplatformClusterConfigsWarehousesConnectionsSettings[] | cdktf.IResolvable;
}

export function dataplatformClusterConfigsWarehousesConnectionsToTerraform(struct?: DataplatformClusterConfigsWarehousesConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    plug: cdktf.stringToTerraform(struct!.plug),
    settings: cdktf.listMapper(dataplatformClusterConfigsWarehousesConnectionsSettingsToTerraform, false)(struct!.settings),
  }
}


export function dataplatformClusterConfigsWarehousesConnectionsToHclTerraform(struct?: DataplatformClusterConfigsWarehousesConnections | cdktf.IResolvable): any {
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
    plug: {
      value: cdktf.stringToHclTerraform(struct!.plug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(dataplatformClusterConfigsWarehousesConnectionsSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataplatformClusterConfigsWarehousesConnectionsSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsWarehousesConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterConfigsWarehousesConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._plug !== undefined) {
      hasAnyValues = true;
      internalValueResult.plug = this._plug;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsWarehousesConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._plug = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._plug = value.plug;
      this._settings.internalValue = value.settings;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // plug - computed: true, optional: false, required: true
  private _plug?: string; 
  public get plug() {
    return this.getStringAttribute('plug');
  }
  public set plug(value: string) {
    this._plug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plugInput() {
    return this._plug;
  }

  // settings - computed: true, optional: false, required: true
  private _settings = new DataplatformClusterConfigsWarehousesConnectionsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataplatformClusterConfigsWarehousesConnectionsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class DataplatformClusterConfigsWarehousesConnectionsList extends cdktf.ComplexList {
  public internalValue? : DataplatformClusterConfigsWarehousesConnections[] | cdktf.IResolvable

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
  public get(index: number): DataplatformClusterConfigsWarehousesConnectionsOutputReference {
    return new DataplatformClusterConfigsWarehousesConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplatformClusterConfigsWarehouses {
  /**
  * Warehouse connections. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#connections DataplatformCluster#connections}
  */
  readonly connections?: DataplatformClusterConfigsWarehousesConnections[] | cdktf.IResolvable;
  /**
  * Warehouse name. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#name DataplatformCluster#name}
  */
  readonly name?: string;
}

export function dataplatformClusterConfigsWarehousesToTerraform(struct?: DataplatformClusterConfigsWarehouses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connections: cdktf.listMapper(dataplatformClusterConfigsWarehousesConnectionsToTerraform, false)(struct!.connections),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataplatformClusterConfigsWarehousesToHclTerraform(struct?: DataplatformClusterConfigsWarehouses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connections: {
      value: cdktf.listMapperHcl(dataplatformClusterConfigsWarehousesConnectionsToHclTerraform, false)(struct!.connections),
      isBlock: true,
      type: "list",
      storageClassType: "DataplatformClusterConfigsWarehousesConnectionsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsWarehousesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterConfigsWarehouses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigsWarehouses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connections.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connections.internalValue = value.connections;
      this._name = value.name;
    }
  }

  // connections - computed: true, optional: true, required: false
  private _connections = new DataplatformClusterConfigsWarehousesConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: DataplatformClusterConfigsWarehousesConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}

export class DataplatformClusterConfigsWarehousesList extends cdktf.ComplexList {
  public internalValue? : DataplatformClusterConfigsWarehouses[] | cdktf.IResolvable

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
  public get(index: number): DataplatformClusterConfigsWarehousesOutputReference {
    return new DataplatformClusterConfigsWarehousesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplatformClusterConfigs {
  /**
  * Maintenance settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#maintenance DataplatformCluster#maintenance}
  */
  readonly maintenance: DataplatformClusterConfigsMaintenance;
  /**
  * Additional common settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#settings DataplatformCluster#settings}
  */
  readonly settings?: DataplatformClusterConfigsSettings[] | cdktf.IResolvable;
  /**
  * Users settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#users DataplatformCluster#users}
  */
  readonly users?: DataplatformClusterConfigsUsers[] | cdktf.IResolvable;
  /**
  * Warehouses settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#warehouses DataplatformCluster#warehouses}
  */
  readonly warehouses?: DataplatformClusterConfigsWarehouses[] | cdktf.IResolvable;
}

export function dataplatformClusterConfigsToTerraform(struct?: DataplatformClusterConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance: dataplatformClusterConfigsMaintenanceToTerraform(struct!.maintenance),
    settings: cdktf.listMapper(dataplatformClusterConfigsSettingsToTerraform, false)(struct!.settings),
    users: cdktf.listMapper(dataplatformClusterConfigsUsersToTerraform, false)(struct!.users),
    warehouses: cdktf.listMapper(dataplatformClusterConfigsWarehousesToTerraform, false)(struct!.warehouses),
  }
}


export function dataplatformClusterConfigsToHclTerraform(struct?: DataplatformClusterConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance: {
      value: dataplatformClusterConfigsMaintenanceToHclTerraform(struct!.maintenance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataplatformClusterConfigsMaintenance",
    },
    settings: {
      value: cdktf.listMapperHcl(dataplatformClusterConfigsSettingsToHclTerraform, false)(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataplatformClusterConfigsSettingsList",
    },
    users: {
      value: cdktf.listMapperHcl(dataplatformClusterConfigsUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataplatformClusterConfigsUsersList",
    },
    warehouses: {
      value: cdktf.listMapperHcl(dataplatformClusterConfigsWarehousesToHclTerraform, false)(struct!.warehouses),
      isBlock: true,
      type: "list",
      storageClassType: "DataplatformClusterConfigsWarehousesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplatformClusterConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenance = this._maintenance?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    if (this._warehouses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouses = this._warehouses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenance.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._users.internalValue = undefined;
      this._warehouses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenance.internalValue = value.maintenance;
      this._settings.internalValue = value.settings;
      this._users.internalValue = value.users;
      this._warehouses.internalValue = value.warehouses;
    }
  }

  // maintenance - computed: false, optional: false, required: true
  private _maintenance = new DataplatformClusterConfigsMaintenanceOutputReference(this, "maintenance");
  public get maintenance() {
    return this._maintenance;
  }
  public putMaintenance(value: DataplatformClusterConfigsMaintenance) {
    this._maintenance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance.internalValue;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataplatformClusterConfigsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataplatformClusterConfigsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // users - computed: true, optional: true, required: false
  private _users = new DataplatformClusterConfigsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataplatformClusterConfigsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // warehouses - computed: true, optional: true, required: false
  private _warehouses = new DataplatformClusterConfigsWarehousesList(this, "warehouses", false);
  public get warehouses() {
    return this._warehouses;
  }
  public putWarehouses(value: DataplatformClusterConfigsWarehouses[] | cdktf.IResolvable) {
    this._warehouses.internalValue = value;
  }
  public resetWarehouses() {
    this._warehouses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehousesInput() {
    return this._warehouses.internalValue;
  }
}
export interface DataplatformClusterInfoServices {
}

export function dataplatformClusterInfoServicesToTerraform(struct?: DataplatformClusterInfoServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataplatformClusterInfoServicesToHclTerraform(struct?: DataplatformClusterInfoServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataplatformClusterInfoServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterInfoServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterInfoServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exposed - computed: true, optional: false, required: false
  public get exposed() {
    return this.getBooleanAttribute('exposed');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataplatformClusterInfoServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataplatformClusterInfoServicesOutputReference {
    return new DataplatformClusterInfoServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplatformClusterInfo {
}

export function dataplatformClusterInfoToTerraform(struct?: DataplatformClusterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataplatformClusterInfoToHclTerraform(struct?: DataplatformClusterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataplatformClusterInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplatformClusterInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataplatformClusterInfoServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
}
export interface DataplatformClusterPodGroupsResource {
  /**
  * Resource request settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#cpu_request DataplatformCluster#cpu_request}
  */
  readonly cpuRequest?: string;
  /**
  * RAM request settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#ram_request DataplatformCluster#ram_request}
  */
  readonly ramRequest?: string;
}

export function dataplatformClusterPodGroupsResourceToTerraform(struct?: DataplatformClusterPodGroupsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_request: cdktf.stringToTerraform(struct!.cpuRequest),
    ram_request: cdktf.stringToTerraform(struct!.ramRequest),
  }
}


export function dataplatformClusterPodGroupsResourceToHclTerraform(struct?: DataplatformClusterPodGroupsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram_request: {
      value: cdktf.stringToHclTerraform(struct!.ramRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterPodGroupsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplatformClusterPodGroupsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequest = this._cpuRequest;
    }
    if (this._ramRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramRequest = this._ramRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterPodGroupsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuRequest = undefined;
      this._ramRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuRequest = value.cpuRequest;
      this._ramRequest = value.ramRequest;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: true, required: false
  private _cpuRequest?: string; 
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }
  public set cpuRequest(value: string) {
    this._cpuRequest = value;
  }
  public resetCpuRequest() {
    this._cpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestInput() {
    return this._cpuRequest;
  }

  // ram_limit - computed: true, optional: false, required: false
  public get ramLimit() {
    return this.getStringAttribute('ram_limit');
  }

  // ram_request - computed: true, optional: true, required: false
  private _ramRequest?: string; 
  public get ramRequest() {
    return this.getStringAttribute('ram_request');
  }
  public set ramRequest(value: string) {
    this._ramRequest = value;
  }
  public resetRamRequest() {
    this._ramRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramRequestInput() {
    return this._ramRequest;
  }
}
export interface DataplatformClusterPodGroupsVolumes {
  /**
  * Volume count. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#count DataplatformCluster#count}
  */
  readonly count: number;
  /**
  * Storage size. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#storage DataplatformCluster#storage}
  */
  readonly storage: string;
  /**
  * Storage class name. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#storage_class_name DataplatformCluster#storage_class_name}
  */
  readonly storageClassName: string;
}

export function dataplatformClusterPodGroupsVolumesToTerraform(struct?: DataplatformClusterPodGroupsVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    storage: cdktf.stringToTerraform(struct!.storage),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataplatformClusterPodGroupsVolumesToHclTerraform(struct?: DataplatformClusterPodGroupsVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterPodGroupsVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataplatformClusterPodGroupsVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterPodGroupsVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._storage = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._storage = value.storage;
      this._storageClassName = value.storageClassName;
    }
  }

  // count - computed: true, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // storage - computed: true, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // storage_class_name - computed: true, optional: false, required: true
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}

export class DataplatformClusterPodGroupsVolumesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataplatformClusterPodGroupsVolumes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataplatformClusterPodGroupsVolumesOutputReference {
    return new DataplatformClusterPodGroupsVolumesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataplatformClusterPodGroups {
  /**
  * Pod count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#count DataplatformCluster#count}
  */
  readonly count?: number;
  /**
  * Floating IP pool ID. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#floating_ip_pool DataplatformCluster#floating_ip_pool}
  */
  readonly floatingIpPool?: string;
  /**
  * Pod group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#name DataplatformCluster#name}
  */
  readonly name: string;
  /**
  * Resource request settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#resource DataplatformCluster#resource}
  */
  readonly resource?: DataplatformClusterPodGroupsResource;
  /**
  * Volumes settings. Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#volumes DataplatformCluster#volumes}
  */
  readonly volumes?: { [key: string]: DataplatformClusterPodGroupsVolumes } | cdktf.IResolvable;
}

export function dataplatformClusterPodGroupsToTerraform(struct?: DataplatformClusterPodGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    floating_ip_pool: cdktf.stringToTerraform(struct!.floatingIpPool),
    name: cdktf.stringToTerraform(struct!.name),
    resource: dataplatformClusterPodGroupsResourceToTerraform(struct!.resource),
    volumes: cdktf.hashMapper(dataplatformClusterPodGroupsVolumesToTerraform)(struct!.volumes),
  }
}


export function dataplatformClusterPodGroupsToHclTerraform(struct?: DataplatformClusterPodGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floating_ip_pool: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: dataplatformClusterPodGroupsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataplatformClusterPodGroupsResource",
    },
    volumes: {
      value: cdktf.hashMapperHcl(dataplatformClusterPodGroupsVolumesToHclTerraform)(struct!.volumes),
      isBlock: true,
      type: "map",
      storageClassType: "DataplatformClusterPodGroupsVolumesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplatformClusterPodGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataplatformClusterPodGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._floatingIpPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpPool = this._floatingIpPool;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplatformClusterPodGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._floatingIpPool = undefined;
      this._name = undefined;
      this._resource.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._floatingIpPool = value.floatingIpPool;
      this._name = value.name;
      this._resource.internalValue = value.resource;
      this._volumes.internalValue = value.volumes;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // floating_ip_pool - computed: true, optional: true, required: false
  private _floatingIpPool?: string; 
  public get floatingIpPool() {
    return this.getStringAttribute('floating_ip_pool');
  }
  public set floatingIpPool(value: string) {
    this._floatingIpPool = value;
  }
  public resetFloatingIpPool() {
    this._floatingIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpPoolInput() {
    return this._floatingIpPool;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource - computed: true, optional: true, required: false
  private _resource = new DataplatformClusterPodGroupsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataplatformClusterPodGroupsResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new DataplatformClusterPodGroupsVolumesMap(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: { [key: string]: DataplatformClusterPodGroupsVolumes } | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

export class DataplatformClusterPodGroupsList extends cdktf.ComplexList {
  public internalValue? : DataplatformClusterPodGroups[] | cdktf.IResolvable

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
  public get(index: number): DataplatformClusterPodGroupsOutputReference {
    return new DataplatformClusterPodGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster vkcs_dataplatform_cluster}
*/
export class DataplatformCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_dataplatform_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataplatformCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataplatformCluster to import
  * @param importFromId The id of the existing DataplatformCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataplatformCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_dataplatform_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dataplatform_cluster vkcs_dataplatform_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplatformClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataplatformClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_dataplatform_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._clusterTemplateId = config.clusterTemplateId;
    this._configs.internalValue = config.configs;
    this._description = config.description;
    this._floatingIpPool = config.floatingIpPool;
    this._multiaz = config.multiaz;
    this._name = config.name;
    this._networkId = config.networkId;
    this._podGroups.internalValue = config.podGroups;
    this._productName = config.productName;
    this._productVersion = config.productVersion;
    this._region = config.region;
    this._stackId = config.stackId;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cluster_template_id - computed: true, optional: true, required: false
  private _clusterTemplateId?: string; 
  public get clusterTemplateId() {
    return this.getStringAttribute('cluster_template_id');
  }
  public set clusterTemplateId(value: string) {
    this._clusterTemplateId = value;
  }
  public resetClusterTemplateId() {
    this._clusterTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTemplateIdInput() {
    return this._clusterTemplateId;
  }

  // configs - computed: false, optional: false, required: true
  private _configs = new DataplatformClusterConfigsOutputReference(this, "configs");
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: DataplatformClusterConfigs) {
    this._configs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // floating_ip_pool - computed: true, optional: true, required: false
  private _floatingIpPool?: string; 
  public get floatingIpPool() {
    return this.getStringAttribute('floating_ip_pool');
  }
  public set floatingIpPool(value: string) {
    this._floatingIpPool = value;
  }
  public resetFloatingIpPool() {
    this._floatingIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpPoolInput() {
    return this._floatingIpPool;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataplatformClusterInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }

  // multiaz - computed: true, optional: true, required: false
  private _multiaz?: boolean | cdktf.IResolvable; 
  public get multiaz() {
    return this.getBooleanAttribute('multiaz');
  }
  public set multiaz(value: boolean | cdktf.IResolvable) {
    this._multiaz = value;
  }
  public resetMultiaz() {
    this._multiaz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiazInput() {
    return this._multiaz;
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

  // pod_groups - computed: true, optional: true, required: false
  private _podGroups = new DataplatformClusterPodGroupsList(this, "pod_groups", false);
  public get podGroups() {
    return this._podGroups;
  }
  public putPodGroups(value: DataplatformClusterPodGroups[] | cdktf.IResolvable) {
    this._podGroups.internalValue = value;
  }
  public resetPodGroups() {
    this._podGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podGroupsInput() {
    return this._podGroups.internalValue;
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // product_version - computed: false, optional: false, required: true
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // stack_id - computed: true, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_template_id: cdktf.stringToTerraform(this._clusterTemplateId),
      configs: dataplatformClusterConfigsToTerraform(this._configs.internalValue),
      description: cdktf.stringToTerraform(this._description),
      floating_ip_pool: cdktf.stringToTerraform(this._floatingIpPool),
      multiaz: cdktf.booleanToTerraform(this._multiaz),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      pod_groups: cdktf.listMapper(dataplatformClusterPodGroupsToTerraform, false)(this._podGroups.internalValue),
      product_name: cdktf.stringToTerraform(this._productName),
      product_version: cdktf.stringToTerraform(this._productVersion),
      region: cdktf.stringToTerraform(this._region),
      stack_id: cdktf.stringToTerraform(this._stackId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_template_id: {
        value: cdktf.stringToHclTerraform(this._clusterTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configs: {
        value: dataplatformClusterConfigsToHclTerraform(this._configs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataplatformClusterConfigs",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip_pool: {
        value: cdktf.stringToHclTerraform(this._floatingIpPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiaz: {
        value: cdktf.booleanToHclTerraform(this._multiaz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      pod_groups: {
        value: cdktf.listMapperHcl(dataplatformClusterPodGroupsToHclTerraform, false)(this._podGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplatformClusterPodGroupsList",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
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
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
