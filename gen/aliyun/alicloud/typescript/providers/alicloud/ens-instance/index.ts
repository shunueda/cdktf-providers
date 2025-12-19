// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#amount EnsInstance#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#auto_release_time EnsInstance#auto_release_time}
  */
  readonly autoReleaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#auto_renew EnsInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#auto_use_coupon EnsInstance#auto_use_coupon}
  */
  readonly autoUseCoupon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#billing_cycle EnsInstance#billing_cycle}
  */
  readonly billingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#carrier EnsInstance#carrier}
  */
  readonly carrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#ens_region_id EnsInstance#ens_region_id}
  */
  readonly ensRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#force_stop EnsInstance#force_stop}
  */
  readonly forceStop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#host_name EnsInstance#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#id EnsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#image_id EnsInstance#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#include_data_disks EnsInstance#include_data_disks}
  */
  readonly includeDataDisks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#instance_charge_strategy EnsInstance#instance_charge_strategy}
  */
  readonly instanceChargeStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#instance_name EnsInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#instance_type EnsInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#internet_charge_type EnsInstance#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#internet_max_bandwidth_out EnsInstance#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#ip_type EnsInstance#ip_type}
  */
  readonly ipType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#key_pair_name EnsInstance#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#net_district_code EnsInstance#net_district_code}
  */
  readonly netDistrictCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#net_work_id EnsInstance#net_work_id}
  */
  readonly netWorkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#password EnsInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#password_inherit EnsInstance#password_inherit}
  */
  readonly passwordInherit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#payment_type EnsInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#period EnsInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#period_unit EnsInstance#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#private_ip_address EnsInstance#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#public_ip_identification EnsInstance#public_ip_identification}
  */
  readonly publicIpIdentification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#schedule_area_level EnsInstance#schedule_area_level}
  */
  readonly scheduleAreaLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#scheduling_price_strategy EnsInstance#scheduling_price_strategy}
  */
  readonly schedulingPriceStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#scheduling_strategy EnsInstance#scheduling_strategy}
  */
  readonly schedulingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#security_id EnsInstance#security_id}
  */
  readonly securityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#spot_strategy EnsInstance#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#status EnsInstance#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#tags EnsInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#unique_suffix EnsInstance#unique_suffix}
  */
  readonly uniqueSuffix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#user_data EnsInstance#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#vswitch_id EnsInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#data_disk EnsInstance#data_disk}
  */
  readonly dataDisk?: EnsInstanceDataDisk[] | cdktf.IResolvable;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#system_disk EnsInstance#system_disk}
  */
  readonly systemDisk?: EnsInstanceSystemDisk;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#timeouts EnsInstance#timeouts}
  */
  readonly timeouts?: EnsInstanceTimeouts;
}
export interface EnsInstanceDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#category EnsInstance#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#encrypt_key_id EnsInstance#encrypt_key_id}
  */
  readonly encryptKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#encrypted EnsInstance#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#size EnsInstance#size}
  */
  readonly size?: number;
}

export function ensInstanceDataDiskToTerraform(struct?: EnsInstanceDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    encrypt_key_id: cdktf.stringToTerraform(struct!.encryptKeyId),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function ensInstanceDataDiskToHclTerraform(struct?: EnsInstanceDataDisk | cdktf.IResolvable): any {
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
    encrypt_key_id: {
      value: cdktf.stringToHclTerraform(struct!.encryptKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class EnsInstanceDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnsInstanceDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._encryptKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptKeyId = this._encryptKeyId;
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

  public set internalValue(value: EnsInstanceDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._encryptKeyId = undefined;
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
      this._encryptKeyId = value.encryptKeyId;
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

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // encrypt_key_id - computed: false, optional: true, required: false
  private _encryptKeyId?: string; 
  public get encryptKeyId() {
    return this.getStringAttribute('encrypt_key_id');
  }
  public set encryptKeyId(value: string) {
    this._encryptKeyId = value;
  }
  public resetEncryptKeyId() {
    this._encryptKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptKeyIdInput() {
    return this._encryptKeyId;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
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

export class EnsInstanceDataDiskList extends cdktf.ComplexList {
  public internalValue? : EnsInstanceDataDisk[] | cdktf.IResolvable

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
  public get(index: number): EnsInstanceDataDiskOutputReference {
    return new EnsInstanceDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnsInstanceSystemDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#category EnsInstance#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#size EnsInstance#size}
  */
  readonly size?: number;
}

export function ensInstanceSystemDiskToTerraform(struct?: EnsInstanceSystemDiskOutputReference | EnsInstanceSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function ensInstanceSystemDiskToHclTerraform(struct?: EnsInstanceSystemDiskOutputReference | EnsInstanceSystemDisk): any {
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

export class EnsInstanceSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnsInstanceSystemDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnsInstanceSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._size = value.size;
    }
  }

  // category - computed: true, optional: true, required: false
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
export interface EnsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#create EnsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#delete EnsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#update EnsInstance#update}
  */
  readonly update?: string;
}

export function ensInstanceTimeoutsToTerraform(struct?: EnsInstanceTimeouts | cdktf.IResolvable): any {
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


export function ensInstanceTimeoutsToHclTerraform(struct?: EnsInstanceTimeouts | cdktf.IResolvable): any {
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

export class EnsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnsInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnsInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance alicloud_ens_instance}
*/
export class EnsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ens_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnsInstance to import
  * @param importFromId The id of the existing EnsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ens_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ens_instance alicloud_ens_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: EnsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ens_instance',
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
    this._amount = config.amount;
    this._autoReleaseTime = config.autoReleaseTime;
    this._autoRenew = config.autoRenew;
    this._autoUseCoupon = config.autoUseCoupon;
    this._billingCycle = config.billingCycle;
    this._carrier = config.carrier;
    this._ensRegionId = config.ensRegionId;
    this._forceStop = config.forceStop;
    this._hostName = config.hostName;
    this._id = config.id;
    this._imageId = config.imageId;
    this._includeDataDisks = config.includeDataDisks;
    this._instanceChargeStrategy = config.instanceChargeStrategy;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._ipType = config.ipType;
    this._keyPairName = config.keyPairName;
    this._netDistrictCode = config.netDistrictCode;
    this._netWorkId = config.netWorkId;
    this._password = config.password;
    this._passwordInherit = config.passwordInherit;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._privateIpAddress = config.privateIpAddress;
    this._publicIpIdentification = config.publicIpIdentification;
    this._scheduleAreaLevel = config.scheduleAreaLevel;
    this._schedulingPriceStrategy = config.schedulingPriceStrategy;
    this._schedulingStrategy = config.schedulingStrategy;
    this._securityId = config.securityId;
    this._spotStrategy = config.spotStrategy;
    this._status = config.status;
    this._tags = config.tags;
    this._uniqueSuffix = config.uniqueSuffix;
    this._userData = config.userData;
    this._vswitchId = config.vswitchId;
    this._dataDisk.internalValue = config.dataDisk;
    this._systemDisk.internalValue = config.systemDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // auto_release_time - computed: false, optional: true, required: false
  private _autoReleaseTime?: string; 
  public get autoReleaseTime() {
    return this.getStringAttribute('auto_release_time');
  }
  public set autoReleaseTime(value: string) {
    this._autoReleaseTime = value;
  }
  public resetAutoReleaseTime() {
    this._autoReleaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReleaseTimeInput() {
    return this._autoReleaseTime;
  }

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

  // auto_use_coupon - computed: false, optional: true, required: false
  private _autoUseCoupon?: string; 
  public get autoUseCoupon() {
    return this.getStringAttribute('auto_use_coupon');
  }
  public set autoUseCoupon(value: string) {
    this._autoUseCoupon = value;
  }
  public resetAutoUseCoupon() {
    this._autoUseCoupon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUseCouponInput() {
    return this._autoUseCoupon;
  }

  // billing_cycle - computed: false, optional: true, required: false
  private _billingCycle?: string; 
  public get billingCycle() {
    return this.getStringAttribute('billing_cycle');
  }
  public set billingCycle(value: string) {
    this._billingCycle = value;
  }
  public resetBillingCycle() {
    this._billingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCycleInput() {
    return this._billingCycle;
  }

  // carrier - computed: false, optional: true, required: false
  private _carrier?: string; 
  public get carrier() {
    return this.getStringAttribute('carrier');
  }
  public set carrier(value: string) {
    this._carrier = value;
  }
  public resetCarrier() {
    this._carrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierInput() {
    return this._carrier;
  }

  // ens_region_id - computed: true, optional: true, required: false
  private _ensRegionId?: string; 
  public get ensRegionId() {
    return this.getStringAttribute('ens_region_id');
  }
  public set ensRegionId(value: string) {
    this._ensRegionId = value;
  }
  public resetEnsRegionId() {
    this._ensRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ensRegionIdInput() {
    return this._ensRegionId;
  }

  // force_stop - computed: false, optional: true, required: false
  private _forceStop?: string; 
  public get forceStop() {
    return this.getStringAttribute('force_stop');
  }
  public set forceStop(value: string) {
    this._forceStop = value;
  }
  public resetForceStop() {
    this._forceStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStopInput() {
    return this._forceStop;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // include_data_disks - computed: false, optional: true, required: false
  private _includeDataDisks?: boolean | cdktf.IResolvable; 
  public get includeDataDisks() {
    return this.getBooleanAttribute('include_data_disks');
  }
  public set includeDataDisks(value: boolean | cdktf.IResolvable) {
    this._includeDataDisks = value;
  }
  public resetIncludeDataDisks() {
    this._includeDataDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDataDisksInput() {
    return this._includeDataDisks;
  }

  // instance_charge_strategy - computed: false, optional: true, required: false
  private _instanceChargeStrategy?: string; 
  public get instanceChargeStrategy() {
    return this.getStringAttribute('instance_charge_strategy');
  }
  public set instanceChargeStrategy(value: string) {
    this._instanceChargeStrategy = value;
  }
  public resetInstanceChargeStrategy() {
    this._instanceChargeStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeStrategyInput() {
    return this._instanceChargeStrategy;
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
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

  // net_district_code - computed: false, optional: true, required: false
  private _netDistrictCode?: string; 
  public get netDistrictCode() {
    return this.getStringAttribute('net_district_code');
  }
  public set netDistrictCode(value: string) {
    this._netDistrictCode = value;
  }
  public resetNetDistrictCode() {
    this._netDistrictCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDistrictCodeInput() {
    return this._netDistrictCode;
  }

  // net_work_id - computed: true, optional: true, required: false
  private _netWorkId?: string; 
  public get netWorkId() {
    return this.getStringAttribute('net_work_id');
  }
  public set netWorkId(value: string) {
    this._netWorkId = value;
  }
  public resetNetWorkId() {
    this._netWorkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netWorkIdInput() {
    return this._netWorkId;
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

  // password_inherit - computed: false, optional: true, required: false
  private _passwordInherit?: boolean | cdktf.IResolvable; 
  public get passwordInherit() {
    return this.getBooleanAttribute('password_inherit');
  }
  public set passwordInherit(value: boolean | cdktf.IResolvable) {
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

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // public_ip_identification - computed: false, optional: true, required: false
  private _publicIpIdentification?: boolean | cdktf.IResolvable; 
  public get publicIpIdentification() {
    return this.getBooleanAttribute('public_ip_identification');
  }
  public set publicIpIdentification(value: boolean | cdktf.IResolvable) {
    this._publicIpIdentification = value;
  }
  public resetPublicIpIdentification() {
    this._publicIpIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpIdentificationInput() {
    return this._publicIpIdentification;
  }

  // schedule_area_level - computed: false, optional: false, required: true
  private _scheduleAreaLevel?: string; 
  public get scheduleAreaLevel() {
    return this.getStringAttribute('schedule_area_level');
  }
  public set scheduleAreaLevel(value: string) {
    this._scheduleAreaLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleAreaLevelInput() {
    return this._scheduleAreaLevel;
  }

  // scheduling_price_strategy - computed: false, optional: true, required: false
  private _schedulingPriceStrategy?: string; 
  public get schedulingPriceStrategy() {
    return this.getStringAttribute('scheduling_price_strategy');
  }
  public set schedulingPriceStrategy(value: string) {
    this._schedulingPriceStrategy = value;
  }
  public resetSchedulingPriceStrategy() {
    this._schedulingPriceStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPriceStrategyInput() {
    return this._schedulingPriceStrategy;
  }

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy?: string; 
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }
  public set schedulingStrategy(value: string) {
    this._schedulingStrategy = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy;
  }

  // security_id - computed: true, optional: true, required: false
  private _securityId?: string; 
  public get securityId() {
    return this.getStringAttribute('security_id');
  }
  public set securityId(value: string) {
    this._securityId = value;
  }
  public resetSecurityId() {
    this._securityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIdInput() {
    return this._securityId;
  }

  // spot_strategy - computed: false, optional: true, required: false
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // unique_suffix - computed: false, optional: true, required: false
  private _uniqueSuffix?: boolean | cdktf.IResolvable; 
  public get uniqueSuffix() {
    return this.getBooleanAttribute('unique_suffix');
  }
  public set uniqueSuffix(value: boolean | cdktf.IResolvable) {
    this._uniqueSuffix = value;
  }
  public resetUniqueSuffix() {
    this._uniqueSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueSuffixInput() {
    return this._uniqueSuffix;
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

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new EnsInstanceDataDiskList(this, "data_disk", true);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: EnsInstanceDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // system_disk - computed: false, optional: true, required: false
  private _systemDisk = new EnsInstanceSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: EnsInstanceSystemDisk) {
    this._systemDisk.internalValue = value;
  }
  public resetSystemDisk() {
    this._systemDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EnsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EnsInstanceTimeouts) {
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
      amount: cdktf.numberToTerraform(this._amount),
      auto_release_time: cdktf.stringToTerraform(this._autoReleaseTime),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_use_coupon: cdktf.stringToTerraform(this._autoUseCoupon),
      billing_cycle: cdktf.stringToTerraform(this._billingCycle),
      carrier: cdktf.stringToTerraform(this._carrier),
      ens_region_id: cdktf.stringToTerraform(this._ensRegionId),
      force_stop: cdktf.stringToTerraform(this._forceStop),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      include_data_disks: cdktf.booleanToTerraform(this._includeDataDisks),
      instance_charge_strategy: cdktf.stringToTerraform(this._instanceChargeStrategy),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      ip_type: cdktf.stringToTerraform(this._ipType),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      net_district_code: cdktf.stringToTerraform(this._netDistrictCode),
      net_work_id: cdktf.stringToTerraform(this._netWorkId),
      password: cdktf.stringToTerraform(this._password),
      password_inherit: cdktf.booleanToTerraform(this._passwordInherit),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      public_ip_identification: cdktf.booleanToTerraform(this._publicIpIdentification),
      schedule_area_level: cdktf.stringToTerraform(this._scheduleAreaLevel),
      scheduling_price_strategy: cdktf.stringToTerraform(this._schedulingPriceStrategy),
      scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
      security_id: cdktf.stringToTerraform(this._securityId),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      unique_suffix: cdktf.booleanToTerraform(this._uniqueSuffix),
      user_data: cdktf.stringToTerraform(this._userData),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      data_disk: cdktf.listMapper(ensInstanceDataDiskToTerraform, true)(this._dataDisk.internalValue),
      system_disk: ensInstanceSystemDiskToTerraform(this._systemDisk.internalValue),
      timeouts: ensInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_release_time: {
        value: cdktf.stringToHclTerraform(this._autoReleaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_use_coupon: {
        value: cdktf.stringToHclTerraform(this._autoUseCoupon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_cycle: {
        value: cdktf.stringToHclTerraform(this._billingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      carrier: {
        value: cdktf.stringToHclTerraform(this._carrier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ens_region_id: {
        value: cdktf.stringToHclTerraform(this._ensRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_stop: {
        value: cdktf.stringToHclTerraform(this._forceStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      include_data_disks: {
        value: cdktf.booleanToHclTerraform(this._includeDataDisks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_charge_strategy: {
        value: cdktf.stringToHclTerraform(this._instanceChargeStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
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
      ip_type: {
        value: cdktf.stringToHclTerraform(this._ipType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_district_code: {
        value: cdktf.stringToHclTerraform(this._netDistrictCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_work_id: {
        value: cdktf.stringToHclTerraform(this._netWorkId),
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
      password_inherit: {
        value: cdktf.booleanToHclTerraform(this._passwordInherit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
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
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_identification: {
        value: cdktf.booleanToHclTerraform(this._publicIpIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schedule_area_level: {
        value: cdktf.stringToHclTerraform(this._scheduleAreaLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_price_strategy: {
        value: cdktf.stringToHclTerraform(this._schedulingPriceStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_strategy: {
        value: cdktf.stringToHclTerraform(this._schedulingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_id: {
        value: cdktf.stringToHclTerraform(this._securityId),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      unique_suffix: {
        value: cdktf.booleanToHclTerraform(this._uniqueSuffix),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disk: {
        value: cdktf.listMapperHcl(ensInstanceDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnsInstanceDataDiskList",
      },
      system_disk: {
        value: ensInstanceSystemDiskToHclTerraform(this._systemDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnsInstanceSystemDiskList",
      },
      timeouts: {
        value: ensInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnsInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
