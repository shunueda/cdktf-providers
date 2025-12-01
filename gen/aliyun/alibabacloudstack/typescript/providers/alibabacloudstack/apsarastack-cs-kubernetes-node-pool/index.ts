// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackCsKubernetesNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#auto_renew ApsarastackCsKubernetesNodePool#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#auto_renew_period ApsarastackCsKubernetesNodePool#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#cluster_id ApsarastackCsKubernetesNodePool#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#format_disk ApsarastackCsKubernetesNodePool#format_disk}
  */
  readonly formatDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#id ApsarastackCsKubernetesNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#image_id ApsarastackCsKubernetesNodePool#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#install_cloud_monitor ApsarastackCsKubernetesNodePool#install_cloud_monitor}
  */
  readonly installCloudMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#instance_charge_type ApsarastackCsKubernetesNodePool#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#instance_types ApsarastackCsKubernetesNodePool#instance_types}
  */
  readonly instanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#instances ApsarastackCsKubernetesNodePool#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#internet_charge_type ApsarastackCsKubernetesNodePool#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#internet_max_bandwidth_out ApsarastackCsKubernetesNodePool#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#keep_instance_name ApsarastackCsKubernetesNodePool#keep_instance_name}
  */
  readonly keepInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#key_name ApsarastackCsKubernetesNodePool#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#kms_encrypted_password ApsarastackCsKubernetesNodePool#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#name ApsarastackCsKubernetesNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#node_count ApsarastackCsKubernetesNodePool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#node_name_mode ApsarastackCsKubernetesNodePool#node_name_mode}
  */
  readonly nodeNameMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#password ApsarastackCsKubernetesNodePool#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#period ApsarastackCsKubernetesNodePool#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#period_unit ApsarastackCsKubernetesNodePool#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#platform ApsarastackCsKubernetesNodePool#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#resource_group_id ApsarastackCsKubernetesNodePool#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#scaling_policy ApsarastackCsKubernetesNodePool#scaling_policy}
  */
  readonly scalingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#security_group_id ApsarastackCsKubernetesNodePool#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#spot_strategy ApsarastackCsKubernetesNodePool#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#system_disk_category ApsarastackCsKubernetesNodePool#system_disk_category}
  */
  readonly systemDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#system_disk_performance_level ApsarastackCsKubernetesNodePool#system_disk_performance_level}
  */
  readonly systemDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#system_disk_size ApsarastackCsKubernetesNodePool#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#tags ApsarastackCsKubernetesNodePool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#unschedulable ApsarastackCsKubernetesNodePool#unschedulable}
  */
  readonly unschedulable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#user_data ApsarastackCsKubernetesNodePool#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#vswitch_ids ApsarastackCsKubernetesNodePool#vswitch_ids}
  */
  readonly vswitchIds: string[];
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#data_disks ApsarastackCsKubernetesNodePool#data_disks}
  */
  readonly dataDisks?: ApsarastackCsKubernetesNodePoolDataDisks[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#labels ApsarastackCsKubernetesNodePool#labels}
  */
  readonly labels?: ApsarastackCsKubernetesNodePoolLabels[] | cdktf.IResolvable;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#scaling_config ApsarastackCsKubernetesNodePool#scaling_config}
  */
  readonly scalingConfig?: ApsarastackCsKubernetesNodePoolScalingConfig;
  /**
  * spot_price_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#spot_price_limit ApsarastackCsKubernetesNodePool#spot_price_limit}
  */
  readonly spotPriceLimit?: ApsarastackCsKubernetesNodePoolSpotPriceLimit[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#taints ApsarastackCsKubernetesNodePool#taints}
  */
  readonly taints?: ApsarastackCsKubernetesNodePoolTaints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#timeouts ApsarastackCsKubernetesNodePool#timeouts}
  */
  readonly timeouts?: ApsarastackCsKubernetesNodePoolTimeouts;
}
export interface ApsarastackCsKubernetesNodePoolDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#category ApsarastackCsKubernetesNodePool#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#encrypted ApsarastackCsKubernetesNodePool#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#size ApsarastackCsKubernetesNodePool#size}
  */
  readonly size?: number;
}

export function apsarastackCsKubernetesNodePoolDataDisksToTerraform(struct?: ApsarastackCsKubernetesNodePoolDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function apsarastackCsKubernetesNodePoolDataDisksToHclTerraform(struct?: ApsarastackCsKubernetesNodePoolDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
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

export class ApsarastackCsKubernetesNodePoolDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCsKubernetesNodePoolDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesNodePoolDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._encrypted = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._encrypted = value.encrypted;
      this._size = value.size;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // size - computed: false, optional: true, required: false
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

export class ApsarastackCsKubernetesNodePoolDataDisksList extends cdktf.ComplexList {
  public internalValue? : ApsarastackCsKubernetesNodePoolDataDisks[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackCsKubernetesNodePoolDataDisksOutputReference {
    return new ApsarastackCsKubernetesNodePoolDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackCsKubernetesNodePoolLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#key ApsarastackCsKubernetesNodePool#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#value ApsarastackCsKubernetesNodePool#value}
  */
  readonly value?: string;
}

export function apsarastackCsKubernetesNodePoolLabelsToTerraform(struct?: ApsarastackCsKubernetesNodePoolLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackCsKubernetesNodePoolLabelsToHclTerraform(struct?: ApsarastackCsKubernetesNodePoolLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class ApsarastackCsKubernetesNodePoolLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCsKubernetesNodePoolLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesNodePoolLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApsarastackCsKubernetesNodePoolLabelsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackCsKubernetesNodePoolLabels[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackCsKubernetesNodePoolLabelsOutputReference {
    return new ApsarastackCsKubernetesNodePoolLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackCsKubernetesNodePoolScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#eip_bandwidth ApsarastackCsKubernetesNodePool#eip_bandwidth}
  */
  readonly eipBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#eip_internet_charge_type ApsarastackCsKubernetesNodePool#eip_internet_charge_type}
  */
  readonly eipInternetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#is_bond_eip ApsarastackCsKubernetesNodePool#is_bond_eip}
  */
  readonly isBondEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#max_size ApsarastackCsKubernetesNodePool#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#min_size ApsarastackCsKubernetesNodePool#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#type ApsarastackCsKubernetesNodePool#type}
  */
  readonly type?: string;
}

export function apsarastackCsKubernetesNodePoolScalingConfigToTerraform(struct?: ApsarastackCsKubernetesNodePoolScalingConfigOutputReference | ApsarastackCsKubernetesNodePoolScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eip_bandwidth: cdktf.numberToTerraform(struct!.eipBandwidth),
    eip_internet_charge_type: cdktf.stringToTerraform(struct!.eipInternetChargeType),
    is_bond_eip: cdktf.booleanToTerraform(struct!.isBondEip),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apsarastackCsKubernetesNodePoolScalingConfigToHclTerraform(struct?: ApsarastackCsKubernetesNodePoolScalingConfigOutputReference | ApsarastackCsKubernetesNodePoolScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eip_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.eipBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eip_internet_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.eipInternetChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_bond_eip: {
      value: cdktf.booleanToHclTerraform(struct!.isBondEip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
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

export class ApsarastackCsKubernetesNodePoolScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApsarastackCsKubernetesNodePoolScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eipBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.eipBandwidth = this._eipBandwidth;
    }
    if (this._eipInternetChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eipInternetChargeType = this._eipInternetChargeType;
    }
    if (this._isBondEip !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBondEip = this._isBondEip;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesNodePoolScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eipBandwidth = undefined;
      this._eipInternetChargeType = undefined;
      this._isBondEip = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eipBandwidth = value.eipBandwidth;
      this._eipInternetChargeType = value.eipInternetChargeType;
      this._isBondEip = value.isBondEip;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._type = value.type;
    }
  }

  // eip_bandwidth - computed: false, optional: true, required: false
  private _eipBandwidth?: number; 
  public get eipBandwidth() {
    return this.getNumberAttribute('eip_bandwidth');
  }
  public set eipBandwidth(value: number) {
    this._eipBandwidth = value;
  }
  public resetEipBandwidth() {
    this._eipBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipBandwidthInput() {
    return this._eipBandwidth;
  }

  // eip_internet_charge_type - computed: false, optional: true, required: false
  private _eipInternetChargeType?: string; 
  public get eipInternetChargeType() {
    return this.getStringAttribute('eip_internet_charge_type');
  }
  public set eipInternetChargeType(value: string) {
    this._eipInternetChargeType = value;
  }
  public resetEipInternetChargeType() {
    this._eipInternetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInternetChargeTypeInput() {
    return this._eipInternetChargeType;
  }

  // is_bond_eip - computed: false, optional: true, required: false
  private _isBondEip?: boolean | cdktf.IResolvable; 
  public get isBondEip() {
    return this.getBooleanAttribute('is_bond_eip');
  }
  public set isBondEip(value: boolean | cdktf.IResolvable) {
    this._isBondEip = value;
  }
  public resetIsBondEip() {
    this._isBondEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBondEipInput() {
    return this._isBondEip;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApsarastackCsKubernetesNodePoolSpotPriceLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#instance_type ApsarastackCsKubernetesNodePool#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#price_limit ApsarastackCsKubernetesNodePool#price_limit}
  */
  readonly priceLimit?: string;
}

export function apsarastackCsKubernetesNodePoolSpotPriceLimitToTerraform(struct?: ApsarastackCsKubernetesNodePoolSpotPriceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    price_limit: cdktf.stringToTerraform(struct!.priceLimit),
  }
}


export function apsarastackCsKubernetesNodePoolSpotPriceLimitToHclTerraform(struct?: ApsarastackCsKubernetesNodePoolSpotPriceLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    price_limit: {
      value: cdktf.stringToHclTerraform(struct!.priceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackCsKubernetesNodePoolSpotPriceLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCsKubernetesNodePoolSpotPriceLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._priceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.priceLimit = this._priceLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesNodePoolSpotPriceLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._priceLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._priceLimit = value.priceLimit;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // price_limit - computed: false, optional: true, required: false
  private _priceLimit?: string; 
  public get priceLimit() {
    return this.getStringAttribute('price_limit');
  }
  public set priceLimit(value: string) {
    this._priceLimit = value;
  }
  public resetPriceLimit() {
    this._priceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceLimitInput() {
    return this._priceLimit;
  }
}

export class ApsarastackCsKubernetesNodePoolSpotPriceLimitList extends cdktf.ComplexList {
  public internalValue? : ApsarastackCsKubernetesNodePoolSpotPriceLimit[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackCsKubernetesNodePoolSpotPriceLimitOutputReference {
    return new ApsarastackCsKubernetesNodePoolSpotPriceLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackCsKubernetesNodePoolTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#effect ApsarastackCsKubernetesNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#key ApsarastackCsKubernetesNodePool#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#value ApsarastackCsKubernetesNodePool#value}
  */
  readonly value?: string;
}

export function apsarastackCsKubernetesNodePoolTaintsToTerraform(struct?: ApsarastackCsKubernetesNodePoolTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackCsKubernetesNodePoolTaintsToHclTerraform(struct?: ApsarastackCsKubernetesNodePoolTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class ApsarastackCsKubernetesNodePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCsKubernetesNodePoolTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesNodePoolTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApsarastackCsKubernetesNodePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackCsKubernetesNodePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackCsKubernetesNodePoolTaintsOutputReference {
    return new ApsarastackCsKubernetesNodePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackCsKubernetesNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#create ApsarastackCsKubernetesNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#delete ApsarastackCsKubernetesNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#update ApsarastackCsKubernetesNodePool#update}
  */
  readonly update?: string;
}

export function apsarastackCsKubernetesNodePoolTimeoutsToTerraform(struct?: ApsarastackCsKubernetesNodePoolTimeouts | cdktf.IResolvable): any {
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


export function apsarastackCsKubernetesNodePoolTimeoutsToHclTerraform(struct?: ApsarastackCsKubernetesNodePoolTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackCsKubernetesNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackCsKubernetesNodePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackCsKubernetesNodePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool apsarastack_cs_kubernetes_node_pool}
*/
export class ApsarastackCsKubernetesNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cs_kubernetes_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackCsKubernetesNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackCsKubernetesNodePool to import
  * @param importFromId The id of the existing ApsarastackCsKubernetesNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackCsKubernetesNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cs_kubernetes_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes_node_pool apsarastack_cs_kubernetes_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackCsKubernetesNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackCsKubernetesNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cs_kubernetes_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._clusterId = config.clusterId;
    this._formatDisk = config.formatDisk;
    this._id = config.id;
    this._imageId = config.imageId;
    this._installCloudMonitor = config.installCloudMonitor;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceTypes = config.instanceTypes;
    this._instances = config.instances;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._keepInstanceName = config.keepInstanceName;
    this._keyName = config.keyName;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeNameMode = config.nodeNameMode;
    this._password = config.password;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._platform = config.platform;
    this._resourceGroupId = config.resourceGroupId;
    this._scalingPolicy = config.scalingPolicy;
    this._securityGroupId = config.securityGroupId;
    this._spotStrategy = config.spotStrategy;
    this._systemDiskCategory = config.systemDiskCategory;
    this._systemDiskPerformanceLevel = config.systemDiskPerformanceLevel;
    this._systemDiskSize = config.systemDiskSize;
    this._tags = config.tags;
    this._unschedulable = config.unschedulable;
    this._userData = config.userData;
    this._vswitchIds = config.vswitchIds;
    this._dataDisks.internalValue = config.dataDisks;
    this._labels.internalValue = config.labels;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._spotPriceLimit.internalValue = config.spotPriceLimit;
    this._taints.internalValue = config.taints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // format_disk - computed: true, optional: true, required: false
  private _formatDisk?: boolean | cdktf.IResolvable; 
  public get formatDisk() {
    return this.getBooleanAttribute('format_disk');
  }
  public set formatDisk(value: boolean | cdktf.IResolvable) {
    this._formatDisk = value;
  }
  public resetFormatDisk() {
    this._formatDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatDiskInput() {
    return this._formatDisk;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // install_cloud_monitor - computed: false, optional: true, required: false
  private _installCloudMonitor?: boolean | cdktf.IResolvable; 
  public get installCloudMonitor() {
    return this.getBooleanAttribute('install_cloud_monitor');
  }
  public set installCloudMonitor(value: boolean | cdktf.IResolvable) {
    this._installCloudMonitor = value;
  }
  public resetInstallCloudMonitor() {
    this._installCloudMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installCloudMonitorInput() {
    return this._installCloudMonitor;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_types - computed: false, optional: false, required: true
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // internet_charge_type - computed: true, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: true, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // keep_instance_name - computed: true, optional: true, required: false
  private _keepInstanceName?: boolean | cdktf.IResolvable; 
  public get keepInstanceName() {
    return this.getBooleanAttribute('keep_instance_name');
  }
  public set keepInstanceName(value: boolean | cdktf.IResolvable) {
    this._keepInstanceName = value;
  }
  public resetKeepInstanceName() {
    this._keepInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepInstanceNameInput() {
    return this._keepInstanceName;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // kms_encrypted_password - computed: false, optional: true, required: false
  private _kmsEncryptedPassword?: string; 
  public get kmsEncryptedPassword() {
    return this.getStringAttribute('kms_encrypted_password');
  }
  public set kmsEncryptedPassword(value: string) {
    this._kmsEncryptedPassword = value;
  }
  public resetKmsEncryptedPassword() {
    this._kmsEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedPasswordInput() {
    return this._kmsEncryptedPassword;
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_name_mode - computed: true, optional: true, required: false
  private _nodeNameMode?: string; 
  public get nodeNameMode() {
    return this.getStringAttribute('node_name_mode');
  }
  public set nodeNameMode(value: string) {
    this._nodeNameMode = value;
  }
  public resetNodeNameMode() {
    this._nodeNameMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameModeInput() {
    return this._nodeNameMode;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // scaling_group_id - computed: true, optional: false, required: false
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy?: string; 
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }
  public set scalingPolicy(value: string) {
    this._scalingPolicy = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // spot_strategy - computed: true, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // system_disk_category - computed: false, optional: true, required: false
  private _systemDiskCategory?: string; 
  public get systemDiskCategory() {
    return this.getStringAttribute('system_disk_category');
  }
  public set systemDiskCategory(value: string) {
    this._systemDiskCategory = value;
  }
  public resetSystemDiskCategory() {
    this._systemDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskCategoryInput() {
    return this._systemDiskCategory;
  }

  // system_disk_performance_level - computed: false, optional: true, required: false
  private _systemDiskPerformanceLevel?: string; 
  public get systemDiskPerformanceLevel() {
    return this.getStringAttribute('system_disk_performance_level');
  }
  public set systemDiskPerformanceLevel(value: string) {
    this._systemDiskPerformanceLevel = value;
  }
  public resetSystemDiskPerformanceLevel() {
    this._systemDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskPerformanceLevelInput() {
    return this._systemDiskPerformanceLevel;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: boolean | cdktf.IResolvable; 
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }
  public set unschedulable(value: boolean | cdktf.IResolvable) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vswitch_ids - computed: false, optional: false, required: true
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new ApsarastackCsKubernetesNodePoolDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: ApsarastackCsKubernetesNodePoolDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new ApsarastackCsKubernetesNodePoolLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ApsarastackCsKubernetesNodePoolLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new ApsarastackCsKubernetesNodePoolScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: ApsarastackCsKubernetesNodePoolScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // spot_price_limit - computed: false, optional: true, required: false
  private _spotPriceLimit = new ApsarastackCsKubernetesNodePoolSpotPriceLimitList(this, "spot_price_limit", false);
  public get spotPriceLimit() {
    return this._spotPriceLimit;
  }
  public putSpotPriceLimit(value: ApsarastackCsKubernetesNodePoolSpotPriceLimit[] | cdktf.IResolvable) {
    this._spotPriceLimit.internalValue = value;
  }
  public resetSpotPriceLimit() {
    this._spotPriceLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceLimitInput() {
    return this._spotPriceLimit.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new ApsarastackCsKubernetesNodePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: ApsarastackCsKubernetesNodePoolTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackCsKubernetesNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackCsKubernetesNodePoolTimeouts) {
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
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      format_disk: cdktf.booleanToTerraform(this._formatDisk),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      install_cloud_monitor: cdktf.booleanToTerraform(this._installCloudMonitor),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instances),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      keep_instance_name: cdktf.booleanToTerraform(this._keepInstanceName),
      key_name: cdktf.stringToTerraform(this._keyName),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_name_mode: cdktf.stringToTerraform(this._nodeNameMode),
      password: cdktf.stringToTerraform(this._password),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      platform: cdktf.stringToTerraform(this._platform),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      scaling_policy: cdktf.stringToTerraform(this._scalingPolicy),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      system_disk_category: cdktf.stringToTerraform(this._systemDiskCategory),
      system_disk_performance_level: cdktf.stringToTerraform(this._systemDiskPerformanceLevel),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      unschedulable: cdktf.booleanToTerraform(this._unschedulable),
      user_data: cdktf.stringToTerraform(this._userData),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      data_disks: cdktf.listMapper(apsarastackCsKubernetesNodePoolDataDisksToTerraform, true)(this._dataDisks.internalValue),
      labels: cdktf.listMapper(apsarastackCsKubernetesNodePoolLabelsToTerraform, true)(this._labels.internalValue),
      scaling_config: apsarastackCsKubernetesNodePoolScalingConfigToTerraform(this._scalingConfig.internalValue),
      spot_price_limit: cdktf.listMapper(apsarastackCsKubernetesNodePoolSpotPriceLimitToTerraform, true)(this._spotPriceLimit.internalValue),
      taints: cdktf.listMapper(apsarastackCsKubernetesNodePoolTaintsToTerraform, true)(this._taints.internalValue),
      timeouts: apsarastackCsKubernetesNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format_disk: {
        value: cdktf.booleanToHclTerraform(this._formatDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_cloud_monitor: {
        value: cdktf.booleanToHclTerraform(this._installCloudMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_instance_name: {
        value: cdktf.booleanToHclTerraform(this._keepInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedPassword),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_name_mode: {
        value: cdktf.stringToHclTerraform(this._nodeNameMode),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy: {
        value: cdktf.stringToHclTerraform(this._scalingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_strategy: {
        value: cdktf.stringToHclTerraform(this._spotStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_category: {
        value: cdktf.stringToHclTerraform(this._systemDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._systemDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_size: {
        value: cdktf.numberToHclTerraform(this._systemDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      unschedulable: {
        value: cdktf.booleanToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_disks: {
        value: cdktf.listMapperHcl(apsarastackCsKubernetesNodePoolDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackCsKubernetesNodePoolDataDisksList",
      },
      labels: {
        value: cdktf.listMapperHcl(apsarastackCsKubernetesNodePoolLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackCsKubernetesNodePoolLabelsList",
      },
      scaling_config: {
        value: apsarastackCsKubernetesNodePoolScalingConfigToHclTerraform(this._scalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackCsKubernetesNodePoolScalingConfigList",
      },
      spot_price_limit: {
        value: cdktf.listMapperHcl(apsarastackCsKubernetesNodePoolSpotPriceLimitToHclTerraform, true)(this._spotPriceLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackCsKubernetesNodePoolSpotPriceLimitList",
      },
      taints: {
        value: cdktf.listMapperHcl(apsarastackCsKubernetesNodePoolTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackCsKubernetesNodePoolTaintsList",
      },
      timeouts: {
        value: apsarastackCsKubernetesNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackCsKubernetesNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
