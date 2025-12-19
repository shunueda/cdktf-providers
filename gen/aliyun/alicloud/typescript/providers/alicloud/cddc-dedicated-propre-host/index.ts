// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CddcDedicatedPropreHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#auto_pay CddcDedicatedPropreHost#auto_pay}
  */
  readonly autoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#auto_renew CddcDedicatedPropreHost#auto_renew}
  */
  readonly autoRenew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#dedicated_host_group_id CddcDedicatedPropreHost#dedicated_host_group_id}
  */
  readonly dedicatedHostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#ecs_deployment_set_id CddcDedicatedPropreHost#ecs_deployment_set_id}
  */
  readonly ecsDeploymentSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#ecs_host_name CddcDedicatedPropreHost#ecs_host_name}
  */
  readonly ecsHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#ecs_instance_name CddcDedicatedPropreHost#ecs_instance_name}
  */
  readonly ecsInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#ecs_unique_suffix CddcDedicatedPropreHost#ecs_unique_suffix}
  */
  readonly ecsUniqueSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#ecs_zone_id CddcDedicatedPropreHost#ecs_zone_id}
  */
  readonly ecsZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#engine CddcDedicatedPropreHost#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#id CddcDedicatedPropreHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#image_id CddcDedicatedPropreHost#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#internet_charge_type CddcDedicatedPropreHost#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#internet_max_bandwidth_out CddcDedicatedPropreHost#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#key_pair_name CddcDedicatedPropreHost#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#os_password CddcDedicatedPropreHost#os_password}
  */
  readonly osPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#password_inherit CddcDedicatedPropreHost#password_inherit}
  */
  readonly passwordInherit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#payment_type CddcDedicatedPropreHost#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#period CddcDedicatedPropreHost#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#period_type CddcDedicatedPropreHost#period_type}
  */
  readonly periodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#resource_group_id CddcDedicatedPropreHost#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#security_group_id CddcDedicatedPropreHost#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#tags CddcDedicatedPropreHost#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#user_data CddcDedicatedPropreHost#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#user_data_encoded CddcDedicatedPropreHost#user_data_encoded}
  */
  readonly userDataEncoded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#vpc_id CddcDedicatedPropreHost#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#vswitch_id CddcDedicatedPropreHost#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * ecs_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#ecs_class_list CddcDedicatedPropreHost#ecs_class_list}
  */
  readonly ecsClassList: CddcDedicatedPropreHostEcsClassListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#timeouts CddcDedicatedPropreHost#timeouts}
  */
  readonly timeouts?: CddcDedicatedPropreHostTimeouts;
}
export interface CddcDedicatedPropreHostEcsClassListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#data_disk_performance_level CddcDedicatedPropreHost#data_disk_performance_level}
  */
  readonly dataDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#disk_capacity CddcDedicatedPropreHost#disk_capacity}
  */
  readonly diskCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#disk_count CddcDedicatedPropreHost#disk_count}
  */
  readonly diskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#disk_type CddcDedicatedPropreHost#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#instance_type CddcDedicatedPropreHost#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#sys_disk_capacity CddcDedicatedPropreHost#sys_disk_capacity}
  */
  readonly sysDiskCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#sys_disk_type CddcDedicatedPropreHost#sys_disk_type}
  */
  readonly sysDiskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#system_disk_performance_level CddcDedicatedPropreHost#system_disk_performance_level}
  */
  readonly systemDiskPerformanceLevel?: string;
}

export function cddcDedicatedPropreHostEcsClassListStructToTerraform(struct?: CddcDedicatedPropreHostEcsClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_disk_performance_level: cdktf.stringToTerraform(struct!.dataDiskPerformanceLevel),
    disk_capacity: cdktf.numberToTerraform(struct!.diskCapacity),
    disk_count: cdktf.numberToTerraform(struct!.diskCount),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sys_disk_capacity: cdktf.numberToTerraform(struct!.sysDiskCapacity),
    sys_disk_type: cdktf.stringToTerraform(struct!.sysDiskType),
    system_disk_performance_level: cdktf.stringToTerraform(struct!.systemDiskPerformanceLevel),
  }
}


export function cddcDedicatedPropreHostEcsClassListStructToHclTerraform(struct?: CddcDedicatedPropreHostEcsClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_disk_performance_level: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskPerformanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_capacity: {
      value: cdktf.numberToHclTerraform(struct!.diskCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_count: {
      value: cdktf.numberToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_disk_capacity: {
      value: cdktf.numberToHclTerraform(struct!.sysDiskCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sys_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.sysDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_disk_performance_level: {
      value: cdktf.stringToHclTerraform(struct!.systemDiskPerformanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CddcDedicatedPropreHostEcsClassListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CddcDedicatedPropreHostEcsClassListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataDiskPerformanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskPerformanceLevel = this._dataDiskPerformanceLevel;
    }
    if (this._diskCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCapacity = this._diskCapacity;
    }
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._sysDiskCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysDiskCapacity = this._sysDiskCapacity;
    }
    if (this._sysDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysDiskType = this._sysDiskType;
    }
    if (this._systemDiskPerformanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskPerformanceLevel = this._systemDiskPerformanceLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CddcDedicatedPropreHostEcsClassListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataDiskPerformanceLevel = undefined;
      this._diskCapacity = undefined;
      this._diskCount = undefined;
      this._diskType = undefined;
      this._instanceType = undefined;
      this._sysDiskCapacity = undefined;
      this._sysDiskType = undefined;
      this._systemDiskPerformanceLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataDiskPerformanceLevel = value.dataDiskPerformanceLevel;
      this._diskCapacity = value.diskCapacity;
      this._diskCount = value.diskCount;
      this._diskType = value.diskType;
      this._instanceType = value.instanceType;
      this._sysDiskCapacity = value.sysDiskCapacity;
      this._sysDiskType = value.sysDiskType;
      this._systemDiskPerformanceLevel = value.systemDiskPerformanceLevel;
    }
  }

  // data_disk_performance_level - computed: false, optional: true, required: false
  private _dataDiskPerformanceLevel?: string; 
  public get dataDiskPerformanceLevel() {
    return this.getStringAttribute('data_disk_performance_level');
  }
  public set dataDiskPerformanceLevel(value: string) {
    this._dataDiskPerformanceLevel = value;
  }
  public resetDataDiskPerformanceLevel() {
    this._dataDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskPerformanceLevelInput() {
    return this._dataDiskPerformanceLevel;
  }

  // disk_capacity - computed: false, optional: true, required: false
  private _diskCapacity?: number; 
  public get diskCapacity() {
    return this.getNumberAttribute('disk_capacity');
  }
  public set diskCapacity(value: number) {
    this._diskCapacity = value;
  }
  public resetDiskCapacity() {
    this._diskCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCapacityInput() {
    return this._diskCapacity;
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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

  // sys_disk_capacity - computed: false, optional: false, required: true
  private _sysDiskCapacity?: number; 
  public get sysDiskCapacity() {
    return this.getNumberAttribute('sys_disk_capacity');
  }
  public set sysDiskCapacity(value: number) {
    this._sysDiskCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sysDiskCapacityInput() {
    return this._sysDiskCapacity;
  }

  // sys_disk_type - computed: false, optional: false, required: true
  private _sysDiskType?: string; 
  public get sysDiskType() {
    return this.getStringAttribute('sys_disk_type');
  }
  public set sysDiskType(value: string) {
    this._sysDiskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sysDiskTypeInput() {
    return this._sysDiskType;
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
}

export class CddcDedicatedPropreHostEcsClassListStructList extends cdktf.ComplexList {
  public internalValue? : CddcDedicatedPropreHostEcsClassListStruct[] | cdktf.IResolvable

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
  public get(index: number): CddcDedicatedPropreHostEcsClassListStructOutputReference {
    return new CddcDedicatedPropreHostEcsClassListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CddcDedicatedPropreHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#create CddcDedicatedPropreHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#delete CddcDedicatedPropreHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#update CddcDedicatedPropreHost#update}
  */
  readonly update?: string;
}

export function cddcDedicatedPropreHostTimeoutsToTerraform(struct?: CddcDedicatedPropreHostTimeouts | cdktf.IResolvable): any {
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


export function cddcDedicatedPropreHostTimeoutsToHclTerraform(struct?: CddcDedicatedPropreHostTimeouts | cdktf.IResolvable): any {
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

export class CddcDedicatedPropreHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CddcDedicatedPropreHostTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CddcDedicatedPropreHostTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host alicloud_cddc_dedicated_propre_host}
*/
export class CddcDedicatedPropreHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cddc_dedicated_propre_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CddcDedicatedPropreHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CddcDedicatedPropreHost to import
  * @param importFromId The id of the existing CddcDedicatedPropreHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CddcDedicatedPropreHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cddc_dedicated_propre_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cddc_dedicated_propre_host alicloud_cddc_dedicated_propre_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CddcDedicatedPropreHostConfig
  */
  public constructor(scope: Construct, id: string, config: CddcDedicatedPropreHostConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cddc_dedicated_propre_host',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPay = config.autoPay;
    this._autoRenew = config.autoRenew;
    this._dedicatedHostGroupId = config.dedicatedHostGroupId;
    this._ecsDeploymentSetId = config.ecsDeploymentSetId;
    this._ecsHostName = config.ecsHostName;
    this._ecsInstanceName = config.ecsInstanceName;
    this._ecsUniqueSuffix = config.ecsUniqueSuffix;
    this._ecsZoneId = config.ecsZoneId;
    this._engine = config.engine;
    this._id = config.id;
    this._imageId = config.imageId;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._keyPairName = config.keyPairName;
    this._osPassword = config.osPassword;
    this._passwordInherit = config.passwordInherit;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._periodType = config.periodType;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroupId = config.securityGroupId;
    this._tags = config.tags;
    this._userData = config.userData;
    this._userDataEncoded = config.userDataEncoded;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._ecsClassList.internalValue = config.ecsClassList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: boolean | cdktf.IResolvable; 
  public get autoPay() {
    return this.getBooleanAttribute('auto_pay');
  }
  public set autoPay(value: boolean | cdktf.IResolvable) {
    this._autoPay = value;
  }
  public resetAutoPay() {
    this._autoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayInput() {
    return this._autoPay;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: string; 
  public get autoRenew() {
    return this.getStringAttribute('auto_renew');
  }
  public set autoRenew(value: string) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // dedicated_host_group_id - computed: true, optional: true, required: false
  private _dedicatedHostGroupId?: string; 
  public get dedicatedHostGroupId() {
    return this.getStringAttribute('dedicated_host_group_id');
  }
  public set dedicatedHostGroupId(value: string) {
    this._dedicatedHostGroupId = value;
  }
  public resetDedicatedHostGroupId() {
    this._dedicatedHostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostGroupIdInput() {
    return this._dedicatedHostGroupId;
  }

  // ecs_deployment_set_id - computed: false, optional: true, required: false
  private _ecsDeploymentSetId?: string; 
  public get ecsDeploymentSetId() {
    return this.getStringAttribute('ecs_deployment_set_id');
  }
  public set ecsDeploymentSetId(value: string) {
    this._ecsDeploymentSetId = value;
  }
  public resetEcsDeploymentSetId() {
    this._ecsDeploymentSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsDeploymentSetIdInput() {
    return this._ecsDeploymentSetId;
  }

  // ecs_host_name - computed: false, optional: true, required: false
  private _ecsHostName?: string; 
  public get ecsHostName() {
    return this.getStringAttribute('ecs_host_name');
  }
  public set ecsHostName(value: string) {
    this._ecsHostName = value;
  }
  public resetEcsHostName() {
    this._ecsHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsHostNameInput() {
    return this._ecsHostName;
  }

  // ecs_instance_id - computed: true, optional: false, required: false
  public get ecsInstanceId() {
    return this.getStringAttribute('ecs_instance_id');
  }

  // ecs_instance_name - computed: false, optional: true, required: false
  private _ecsInstanceName?: string; 
  public get ecsInstanceName() {
    return this.getStringAttribute('ecs_instance_name');
  }
  public set ecsInstanceName(value: string) {
    this._ecsInstanceName = value;
  }
  public resetEcsInstanceName() {
    this._ecsInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsInstanceNameInput() {
    return this._ecsInstanceName;
  }

  // ecs_unique_suffix - computed: false, optional: true, required: false
  private _ecsUniqueSuffix?: string; 
  public get ecsUniqueSuffix() {
    return this.getStringAttribute('ecs_unique_suffix');
  }
  public set ecsUniqueSuffix(value: string) {
    this._ecsUniqueSuffix = value;
  }
  public resetEcsUniqueSuffix() {
    this._ecsUniqueSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsUniqueSuffixInput() {
    return this._ecsUniqueSuffix;
  }

  // ecs_zone_id - computed: false, optional: false, required: true
  private _ecsZoneId?: string; 
  public get ecsZoneId() {
    return this.getStringAttribute('ecs_zone_id');
  }
  public set ecsZoneId(value: string) {
    this._ecsZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsZoneIdInput() {
    return this._ecsZoneId;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
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

  // image_id - computed: false, optional: true, required: false
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

  // internet_charge_type - computed: false, optional: true, required: false
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

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
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

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // os_password - computed: false, optional: true, required: false
  private _osPassword?: string; 
  public get osPassword() {
    return this.getStringAttribute('os_password');
  }
  public set osPassword(value: string) {
    this._osPassword = value;
  }
  public resetOsPassword() {
    this._osPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPasswordInput() {
    return this._osPassword;
  }

  // password_inherit - computed: false, optional: true, required: false
  private _passwordInherit?: string; 
  public get passwordInherit() {
    return this.getStringAttribute('password_inherit');
  }
  public set passwordInherit(value: string) {
    this._passwordInherit = value;
  }
  public resetPasswordInherit() {
    this._passwordInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInheritInput() {
    return this._passwordInherit;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_type - computed: false, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
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

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
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

  // user_data_encoded - computed: false, optional: true, required: false
  private _userDataEncoded?: boolean | cdktf.IResolvable; 
  public get userDataEncoded() {
    return this.getBooleanAttribute('user_data_encoded');
  }
  public set userDataEncoded(value: boolean | cdktf.IResolvable) {
    this._userDataEncoded = value;
  }
  public resetUserDataEncoded() {
    this._userDataEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataEncodedInput() {
    return this._userDataEncoded;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // ecs_class_list - computed: false, optional: false, required: true
  private _ecsClassList = new CddcDedicatedPropreHostEcsClassListStructList(this, "ecs_class_list", false);
  public get ecsClassList() {
    return this._ecsClassList;
  }
  public putEcsClassList(value: CddcDedicatedPropreHostEcsClassListStruct[] | cdktf.IResolvable) {
    this._ecsClassList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsClassListInput() {
    return this._ecsClassList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CddcDedicatedPropreHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CddcDedicatedPropreHostTimeouts) {
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
      auto_pay: cdktf.booleanToTerraform(this._autoPay),
      auto_renew: cdktf.stringToTerraform(this._autoRenew),
      dedicated_host_group_id: cdktf.stringToTerraform(this._dedicatedHostGroupId),
      ecs_deployment_set_id: cdktf.stringToTerraform(this._ecsDeploymentSetId),
      ecs_host_name: cdktf.stringToTerraform(this._ecsHostName),
      ecs_instance_name: cdktf.stringToTerraform(this._ecsInstanceName),
      ecs_unique_suffix: cdktf.stringToTerraform(this._ecsUniqueSuffix),
      ecs_zone_id: cdktf.stringToTerraform(this._ecsZoneId),
      engine: cdktf.stringToTerraform(this._engine),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      os_password: cdktf.stringToTerraform(this._osPassword),
      password_inherit: cdktf.stringToTerraform(this._passwordInherit),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.stringToTerraform(this._period),
      period_type: cdktf.stringToTerraform(this._periodType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_encoded: cdktf.booleanToTerraform(this._userDataEncoded),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      ecs_class_list: cdktf.listMapper(cddcDedicatedPropreHostEcsClassListStructToTerraform, true)(this._ecsClassList.internalValue),
      timeouts: cddcDedicatedPropreHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_pay: {
        value: cdktf.booleanToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew: {
        value: cdktf.stringToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_group_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_deployment_set_id: {
        value: cdktf.stringToHclTerraform(this._ecsDeploymentSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_host_name: {
        value: cdktf.stringToHclTerraform(this._ecsHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_instance_name: {
        value: cdktf.stringToHclTerraform(this._ecsInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_unique_suffix: {
        value: cdktf.stringToHclTerraform(this._ecsUniqueSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_zone_id: {
        value: cdktf.stringToHclTerraform(this._ecsZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_password: {
        value: cdktf.stringToHclTerraform(this._osPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_inherit: {
        value: cdktf.stringToHclTerraform(this._passwordInherit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period_type: {
        value: cdktf.stringToHclTerraform(this._periodType),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data_encoded: {
        value: cdktf.booleanToHclTerraform(this._userDataEncoded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_class_list: {
        value: cdktf.listMapperHcl(cddcDedicatedPropreHostEcsClassListStructToHclTerraform, true)(this._ecsClassList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CddcDedicatedPropreHostEcsClassListStructList",
      },
      timeouts: {
        value: cddcDedicatedPropreHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CddcDedicatedPropreHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
