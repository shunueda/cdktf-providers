// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StarRocksInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#admin_password StarRocksInstance#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#auto_renew StarRocksInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#cluster_zone_id StarRocksInstance#cluster_zone_id}
  */
  readonly clusterZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#duration StarRocksInstance#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#encrypted StarRocksInstance#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#id StarRocksInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#instance_name StarRocksInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#kms_key_id StarRocksInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#oss_accessing_role_name StarRocksInstance#oss_accessing_role_name}
  */
  readonly ossAccessingRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#package_type StarRocksInstance#package_type}
  */
  readonly packageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#pay_type StarRocksInstance#pay_type}
  */
  readonly payType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#pricing_cycle StarRocksInstance#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#promotion_option_no StarRocksInstance#promotion_option_no}
  */
  readonly promotionOptionNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#resource_group_id StarRocksInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#run_mode StarRocksInstance#run_mode}
  */
  readonly runMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#tags StarRocksInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#version StarRocksInstance#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#vpc_id StarRocksInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * backend_node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#backend_node_groups StarRocksInstance#backend_node_groups}
  */
  readonly backendNodeGroups?: StarRocksInstanceBackendNodeGroups[] | cdktf.IResolvable;
  /**
  * frontend_node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#frontend_node_groups StarRocksInstance#frontend_node_groups}
  */
  readonly frontendNodeGroups?: StarRocksInstanceFrontendNodeGroups[] | cdktf.IResolvable;
  /**
  * observer_node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#observer_node_groups StarRocksInstance#observer_node_groups}
  */
  readonly observerNodeGroups?: StarRocksInstanceObserverNodeGroups[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#timeouts StarRocksInstance#timeouts}
  */
  readonly timeouts?: StarRocksInstanceTimeouts;
  /**
  * vswitches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#vswitches StarRocksInstance#vswitches}
  */
  readonly vswitches?: StarRocksInstanceVswitches[] | cdktf.IResolvable;
}
export interface StarRocksInstanceBackendNodeGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#cu StarRocksInstance#cu}
  */
  readonly cu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#disk_number StarRocksInstance#disk_number}
  */
  readonly diskNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#local_storage_instance_type StarRocksInstance#local_storage_instance_type}
  */
  readonly localStorageInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#resident_node_number StarRocksInstance#resident_node_number}
  */
  readonly residentNodeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#spec_type StarRocksInstance#spec_type}
  */
  readonly specType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#storage_performance_level StarRocksInstance#storage_performance_level}
  */
  readonly storagePerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#storage_size StarRocksInstance#storage_size}
  */
  readonly storageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#zone_id StarRocksInstance#zone_id}
  */
  readonly zoneId?: string;
}

export function starRocksInstanceBackendNodeGroupsToTerraform(struct?: StarRocksInstanceBackendNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cu: cdktf.numberToTerraform(struct!.cu),
    disk_number: cdktf.numberToTerraform(struct!.diskNumber),
    local_storage_instance_type: cdktf.stringToTerraform(struct!.localStorageInstanceType),
    resident_node_number: cdktf.numberToTerraform(struct!.residentNodeNumber),
    spec_type: cdktf.stringToTerraform(struct!.specType),
    storage_performance_level: cdktf.stringToTerraform(struct!.storagePerformanceLevel),
    storage_size: cdktf.numberToTerraform(struct!.storageSize),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function starRocksInstanceBackendNodeGroupsToHclTerraform(struct?: StarRocksInstanceBackendNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cu: {
      value: cdktf.numberToHclTerraform(struct!.cu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_number: {
      value: cdktf.numberToHclTerraform(struct!.diskNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_storage_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.localStorageInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resident_node_number: {
      value: cdktf.numberToHclTerraform(struct!.residentNodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec_type: {
      value: cdktf.stringToHclTerraform(struct!.specType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_performance_level: {
      value: cdktf.stringToHclTerraform(struct!.storagePerformanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size: {
      value: cdktf.numberToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StarRocksInstanceBackendNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StarRocksInstanceBackendNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cu = this._cu;
    }
    if (this._diskNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskNumber = this._diskNumber;
    }
    if (this._localStorageInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorageInstanceType = this._localStorageInstanceType;
    }
    if (this._residentNodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.residentNodeNumber = this._residentNodeNumber;
    }
    if (this._specType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specType = this._specType;
    }
    if (this._storagePerformanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePerformanceLevel = this._storagePerformanceLevel;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StarRocksInstanceBackendNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cu = undefined;
      this._diskNumber = undefined;
      this._localStorageInstanceType = undefined;
      this._residentNodeNumber = undefined;
      this._specType = undefined;
      this._storagePerformanceLevel = undefined;
      this._storageSize = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cu = value.cu;
      this._diskNumber = value.diskNumber;
      this._localStorageInstanceType = value.localStorageInstanceType;
      this._residentNodeNumber = value.residentNodeNumber;
      this._specType = value.specType;
      this._storagePerformanceLevel = value.storagePerformanceLevel;
      this._storageSize = value.storageSize;
      this._zoneId = value.zoneId;
    }
  }

  // cu - computed: false, optional: true, required: false
  private _cu?: number; 
  public get cu() {
    return this.getNumberAttribute('cu');
  }
  public set cu(value: number) {
    this._cu = value;
  }
  public resetCu() {
    this._cu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cuInput() {
    return this._cu;
  }

  // disk_number - computed: false, optional: true, required: false
  private _diskNumber?: number; 
  public get diskNumber() {
    return this.getNumberAttribute('disk_number');
  }
  public set diskNumber(value: number) {
    this._diskNumber = value;
  }
  public resetDiskNumber() {
    this._diskNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNumberInput() {
    return this._diskNumber;
  }

  // local_storage_instance_type - computed: false, optional: true, required: false
  private _localStorageInstanceType?: string; 
  public get localStorageInstanceType() {
    return this.getStringAttribute('local_storage_instance_type');
  }
  public set localStorageInstanceType(value: string) {
    this._localStorageInstanceType = value;
  }
  public resetLocalStorageInstanceType() {
    this._localStorageInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInstanceTypeInput() {
    return this._localStorageInstanceType;
  }

  // resident_node_number - computed: false, optional: true, required: false
  private _residentNodeNumber?: number; 
  public get residentNodeNumber() {
    return this.getNumberAttribute('resident_node_number');
  }
  public set residentNodeNumber(value: number) {
    this._residentNodeNumber = value;
  }
  public resetResidentNodeNumber() {
    this._residentNodeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get residentNodeNumberInput() {
    return this._residentNodeNumber;
  }

  // spec_type - computed: false, optional: true, required: false
  private _specType?: string; 
  public get specType() {
    return this.getStringAttribute('spec_type');
  }
  public set specType(value: string) {
    this._specType = value;
  }
  public resetSpecType() {
    this._specType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specTypeInput() {
    return this._specType;
  }

  // storage_performance_level - computed: false, optional: true, required: false
  private _storagePerformanceLevel?: string; 
  public get storagePerformanceLevel() {
    return this.getStringAttribute('storage_performance_level');
  }
  public set storagePerformanceLevel(value: string) {
    this._storagePerformanceLevel = value;
  }
  public resetStoragePerformanceLevel() {
    this._storagePerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePerformanceLevelInput() {
    return this._storagePerformanceLevel;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class StarRocksInstanceBackendNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : StarRocksInstanceBackendNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): StarRocksInstanceBackendNodeGroupsOutputReference {
    return new StarRocksInstanceBackendNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StarRocksInstanceFrontendNodeGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#cu StarRocksInstance#cu}
  */
  readonly cu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#disk_number StarRocksInstance#disk_number}
  */
  readonly diskNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#local_storage_instance_type StarRocksInstance#local_storage_instance_type}
  */
  readonly localStorageInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#resident_node_number StarRocksInstance#resident_node_number}
  */
  readonly residentNodeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#spec_type StarRocksInstance#spec_type}
  */
  readonly specType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#storage_performance_level StarRocksInstance#storage_performance_level}
  */
  readonly storagePerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#storage_size StarRocksInstance#storage_size}
  */
  readonly storageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#zone_id StarRocksInstance#zone_id}
  */
  readonly zoneId?: string;
}

export function starRocksInstanceFrontendNodeGroupsToTerraform(struct?: StarRocksInstanceFrontendNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cu: cdktf.numberToTerraform(struct!.cu),
    disk_number: cdktf.numberToTerraform(struct!.diskNumber),
    local_storage_instance_type: cdktf.stringToTerraform(struct!.localStorageInstanceType),
    resident_node_number: cdktf.numberToTerraform(struct!.residentNodeNumber),
    spec_type: cdktf.stringToTerraform(struct!.specType),
    storage_performance_level: cdktf.stringToTerraform(struct!.storagePerformanceLevel),
    storage_size: cdktf.numberToTerraform(struct!.storageSize),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function starRocksInstanceFrontendNodeGroupsToHclTerraform(struct?: StarRocksInstanceFrontendNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cu: {
      value: cdktf.numberToHclTerraform(struct!.cu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_number: {
      value: cdktf.numberToHclTerraform(struct!.diskNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_storage_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.localStorageInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resident_node_number: {
      value: cdktf.numberToHclTerraform(struct!.residentNodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec_type: {
      value: cdktf.stringToHclTerraform(struct!.specType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_performance_level: {
      value: cdktf.stringToHclTerraform(struct!.storagePerformanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size: {
      value: cdktf.numberToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StarRocksInstanceFrontendNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StarRocksInstanceFrontendNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cu = this._cu;
    }
    if (this._diskNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskNumber = this._diskNumber;
    }
    if (this._localStorageInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorageInstanceType = this._localStorageInstanceType;
    }
    if (this._residentNodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.residentNodeNumber = this._residentNodeNumber;
    }
    if (this._specType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specType = this._specType;
    }
    if (this._storagePerformanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePerformanceLevel = this._storagePerformanceLevel;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StarRocksInstanceFrontendNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cu = undefined;
      this._diskNumber = undefined;
      this._localStorageInstanceType = undefined;
      this._residentNodeNumber = undefined;
      this._specType = undefined;
      this._storagePerformanceLevel = undefined;
      this._storageSize = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cu = value.cu;
      this._diskNumber = value.diskNumber;
      this._localStorageInstanceType = value.localStorageInstanceType;
      this._residentNodeNumber = value.residentNodeNumber;
      this._specType = value.specType;
      this._storagePerformanceLevel = value.storagePerformanceLevel;
      this._storageSize = value.storageSize;
      this._zoneId = value.zoneId;
    }
  }

  // cu - computed: false, optional: true, required: false
  private _cu?: number; 
  public get cu() {
    return this.getNumberAttribute('cu');
  }
  public set cu(value: number) {
    this._cu = value;
  }
  public resetCu() {
    this._cu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cuInput() {
    return this._cu;
  }

  // disk_number - computed: false, optional: true, required: false
  private _diskNumber?: number; 
  public get diskNumber() {
    return this.getNumberAttribute('disk_number');
  }
  public set diskNumber(value: number) {
    this._diskNumber = value;
  }
  public resetDiskNumber() {
    this._diskNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNumberInput() {
    return this._diskNumber;
  }

  // local_storage_instance_type - computed: false, optional: true, required: false
  private _localStorageInstanceType?: string; 
  public get localStorageInstanceType() {
    return this.getStringAttribute('local_storage_instance_type');
  }
  public set localStorageInstanceType(value: string) {
    this._localStorageInstanceType = value;
  }
  public resetLocalStorageInstanceType() {
    this._localStorageInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInstanceTypeInput() {
    return this._localStorageInstanceType;
  }

  // resident_node_number - computed: false, optional: true, required: false
  private _residentNodeNumber?: number; 
  public get residentNodeNumber() {
    return this.getNumberAttribute('resident_node_number');
  }
  public set residentNodeNumber(value: number) {
    this._residentNodeNumber = value;
  }
  public resetResidentNodeNumber() {
    this._residentNodeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get residentNodeNumberInput() {
    return this._residentNodeNumber;
  }

  // spec_type - computed: false, optional: true, required: false
  private _specType?: string; 
  public get specType() {
    return this.getStringAttribute('spec_type');
  }
  public set specType(value: string) {
    this._specType = value;
  }
  public resetSpecType() {
    this._specType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specTypeInput() {
    return this._specType;
  }

  // storage_performance_level - computed: false, optional: true, required: false
  private _storagePerformanceLevel?: string; 
  public get storagePerformanceLevel() {
    return this.getStringAttribute('storage_performance_level');
  }
  public set storagePerformanceLevel(value: string) {
    this._storagePerformanceLevel = value;
  }
  public resetStoragePerformanceLevel() {
    this._storagePerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePerformanceLevelInput() {
    return this._storagePerformanceLevel;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class StarRocksInstanceFrontendNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : StarRocksInstanceFrontendNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): StarRocksInstanceFrontendNodeGroupsOutputReference {
    return new StarRocksInstanceFrontendNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StarRocksInstanceObserverNodeGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#cu StarRocksInstance#cu}
  */
  readonly cu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#disk_number StarRocksInstance#disk_number}
  */
  readonly diskNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#local_storage_instance_type StarRocksInstance#local_storage_instance_type}
  */
  readonly localStorageInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#resident_node_number StarRocksInstance#resident_node_number}
  */
  readonly residentNodeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#spec_type StarRocksInstance#spec_type}
  */
  readonly specType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#storage_performance_level StarRocksInstance#storage_performance_level}
  */
  readonly storagePerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#storage_size StarRocksInstance#storage_size}
  */
  readonly storageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#zone_id StarRocksInstance#zone_id}
  */
  readonly zoneId?: string;
}

export function starRocksInstanceObserverNodeGroupsToTerraform(struct?: StarRocksInstanceObserverNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cu: cdktf.numberToTerraform(struct!.cu),
    disk_number: cdktf.numberToTerraform(struct!.diskNumber),
    local_storage_instance_type: cdktf.stringToTerraform(struct!.localStorageInstanceType),
    resident_node_number: cdktf.numberToTerraform(struct!.residentNodeNumber),
    spec_type: cdktf.stringToTerraform(struct!.specType),
    storage_performance_level: cdktf.stringToTerraform(struct!.storagePerformanceLevel),
    storage_size: cdktf.numberToTerraform(struct!.storageSize),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function starRocksInstanceObserverNodeGroupsToHclTerraform(struct?: StarRocksInstanceObserverNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cu: {
      value: cdktf.numberToHclTerraform(struct!.cu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_number: {
      value: cdktf.numberToHclTerraform(struct!.diskNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_storage_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.localStorageInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resident_node_number: {
      value: cdktf.numberToHclTerraform(struct!.residentNodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec_type: {
      value: cdktf.stringToHclTerraform(struct!.specType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_performance_level: {
      value: cdktf.stringToHclTerraform(struct!.storagePerformanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size: {
      value: cdktf.numberToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StarRocksInstanceObserverNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StarRocksInstanceObserverNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cu = this._cu;
    }
    if (this._diskNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskNumber = this._diskNumber;
    }
    if (this._localStorageInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorageInstanceType = this._localStorageInstanceType;
    }
    if (this._residentNodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.residentNodeNumber = this._residentNodeNumber;
    }
    if (this._specType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specType = this._specType;
    }
    if (this._storagePerformanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePerformanceLevel = this._storagePerformanceLevel;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StarRocksInstanceObserverNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cu = undefined;
      this._diskNumber = undefined;
      this._localStorageInstanceType = undefined;
      this._residentNodeNumber = undefined;
      this._specType = undefined;
      this._storagePerformanceLevel = undefined;
      this._storageSize = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cu = value.cu;
      this._diskNumber = value.diskNumber;
      this._localStorageInstanceType = value.localStorageInstanceType;
      this._residentNodeNumber = value.residentNodeNumber;
      this._specType = value.specType;
      this._storagePerformanceLevel = value.storagePerformanceLevel;
      this._storageSize = value.storageSize;
      this._zoneId = value.zoneId;
    }
  }

  // cu - computed: false, optional: true, required: false
  private _cu?: number; 
  public get cu() {
    return this.getNumberAttribute('cu');
  }
  public set cu(value: number) {
    this._cu = value;
  }
  public resetCu() {
    this._cu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cuInput() {
    return this._cu;
  }

  // disk_number - computed: false, optional: true, required: false
  private _diskNumber?: number; 
  public get diskNumber() {
    return this.getNumberAttribute('disk_number');
  }
  public set diskNumber(value: number) {
    this._diskNumber = value;
  }
  public resetDiskNumber() {
    this._diskNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNumberInput() {
    return this._diskNumber;
  }

  // local_storage_instance_type - computed: false, optional: true, required: false
  private _localStorageInstanceType?: string; 
  public get localStorageInstanceType() {
    return this.getStringAttribute('local_storage_instance_type');
  }
  public set localStorageInstanceType(value: string) {
    this._localStorageInstanceType = value;
  }
  public resetLocalStorageInstanceType() {
    this._localStorageInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInstanceTypeInput() {
    return this._localStorageInstanceType;
  }

  // resident_node_number - computed: false, optional: true, required: false
  private _residentNodeNumber?: number; 
  public get residentNodeNumber() {
    return this.getNumberAttribute('resident_node_number');
  }
  public set residentNodeNumber(value: number) {
    this._residentNodeNumber = value;
  }
  public resetResidentNodeNumber() {
    this._residentNodeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get residentNodeNumberInput() {
    return this._residentNodeNumber;
  }

  // spec_type - computed: false, optional: true, required: false
  private _specType?: string; 
  public get specType() {
    return this.getStringAttribute('spec_type');
  }
  public set specType(value: string) {
    this._specType = value;
  }
  public resetSpecType() {
    this._specType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specTypeInput() {
    return this._specType;
  }

  // storage_performance_level - computed: false, optional: true, required: false
  private _storagePerformanceLevel?: string; 
  public get storagePerformanceLevel() {
    return this.getStringAttribute('storage_performance_level');
  }
  public set storagePerformanceLevel(value: string) {
    this._storagePerformanceLevel = value;
  }
  public resetStoragePerformanceLevel() {
    this._storagePerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePerformanceLevelInput() {
    return this._storagePerformanceLevel;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class StarRocksInstanceObserverNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : StarRocksInstanceObserverNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): StarRocksInstanceObserverNodeGroupsOutputReference {
    return new StarRocksInstanceObserverNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StarRocksInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#create StarRocksInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#delete StarRocksInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#update StarRocksInstance#update}
  */
  readonly update?: string;
}

export function starRocksInstanceTimeoutsToTerraform(struct?: StarRocksInstanceTimeouts | cdktf.IResolvable): any {
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


export function starRocksInstanceTimeoutsToHclTerraform(struct?: StarRocksInstanceTimeouts | cdktf.IResolvable): any {
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

export class StarRocksInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StarRocksInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StarRocksInstanceTimeouts | cdktf.IResolvable | undefined) {
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
export interface StarRocksInstanceVswitches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#vswitch_id StarRocksInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#zone_id StarRocksInstance#zone_id}
  */
  readonly zoneId?: string;
}

export function starRocksInstanceVswitchesToTerraform(struct?: StarRocksInstanceVswitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function starRocksInstanceVswitchesToHclTerraform(struct?: StarRocksInstanceVswitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StarRocksInstanceVswitchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StarRocksInstanceVswitches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StarRocksInstanceVswitches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vswitchId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vswitchId = value.vswitchId;
      this._zoneId = value.zoneId;
    }
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

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class StarRocksInstanceVswitchesList extends cdktf.ComplexList {
  public internalValue? : StarRocksInstanceVswitches[] | cdktf.IResolvable

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
  public get(index: number): StarRocksInstanceVswitchesOutputReference {
    return new StarRocksInstanceVswitchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance alicloud_star_rocks_instance}
*/
export class StarRocksInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_star_rocks_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StarRocksInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StarRocksInstance to import
  * @param importFromId The id of the existing StarRocksInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StarRocksInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_star_rocks_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_instance alicloud_star_rocks_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StarRocksInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: StarRocksInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_star_rocks_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._autoRenew = config.autoRenew;
    this._clusterZoneId = config.clusterZoneId;
    this._duration = config.duration;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._kmsKeyId = config.kmsKeyId;
    this._ossAccessingRoleName = config.ossAccessingRoleName;
    this._packageType = config.packageType;
    this._payType = config.payType;
    this._pricingCycle = config.pricingCycle;
    this._promotionOptionNo = config.promotionOptionNo;
    this._resourceGroupId = config.resourceGroupId;
    this._runMode = config.runMode;
    this._tags = config.tags;
    this._version = config.version;
    this._vpcId = config.vpcId;
    this._backendNodeGroups.internalValue = config.backendNodeGroups;
    this._frontendNodeGroups.internalValue = config.frontendNodeGroups;
    this._observerNodeGroups.internalValue = config.observerNodeGroups;
    this._timeouts.internalValue = config.timeouts;
    this._vswitches.internalValue = config.vswitches;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
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

  // cluster_zone_id - computed: false, optional: false, required: true
  private _clusterZoneId?: string; 
  public get clusterZoneId() {
    return this.getStringAttribute('cluster_zone_id');
  }
  public set clusterZoneId(value: string) {
    this._clusterZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterZoneIdInput() {
    return this._clusterZoneId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // oss_accessing_role_name - computed: false, optional: true, required: false
  private _ossAccessingRoleName?: string; 
  public get ossAccessingRoleName() {
    return this.getStringAttribute('oss_accessing_role_name');
  }
  public set ossAccessingRoleName(value: string) {
    this._ossAccessingRoleName = value;
  }
  public resetOssAccessingRoleName() {
    this._ossAccessingRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossAccessingRoleNameInput() {
    return this._ossAccessingRoleName;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // pay_type - computed: false, optional: false, required: true
  private _payType?: string; 
  public get payType() {
    return this.getStringAttribute('pay_type');
  }
  public set payType(value: string) {
    this._payType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // promotion_option_no - computed: false, optional: true, required: false
  private _promotionOptionNo?: string; 
  public get promotionOptionNo() {
    return this.getStringAttribute('promotion_option_no');
  }
  public set promotionOptionNo(value: string) {
    this._promotionOptionNo = value;
  }
  public resetPromotionOptionNo() {
    this._promotionOptionNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionOptionNoInput() {
    return this._promotionOptionNo;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // run_mode - computed: false, optional: false, required: true
  private _runMode?: string; 
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }
  public set runMode(value: string) {
    this._runMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runModeInput() {
    return this._runMode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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

  // backend_node_groups - computed: false, optional: true, required: false
  private _backendNodeGroups = new StarRocksInstanceBackendNodeGroupsList(this, "backend_node_groups", false);
  public get backendNodeGroups() {
    return this._backendNodeGroups;
  }
  public putBackendNodeGroups(value: StarRocksInstanceBackendNodeGroups[] | cdktf.IResolvable) {
    this._backendNodeGroups.internalValue = value;
  }
  public resetBackendNodeGroups() {
    this._backendNodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNodeGroupsInput() {
    return this._backendNodeGroups.internalValue;
  }

  // frontend_node_groups - computed: false, optional: true, required: false
  private _frontendNodeGroups = new StarRocksInstanceFrontendNodeGroupsList(this, "frontend_node_groups", false);
  public get frontendNodeGroups() {
    return this._frontendNodeGroups;
  }
  public putFrontendNodeGroups(value: StarRocksInstanceFrontendNodeGroups[] | cdktf.IResolvable) {
    this._frontendNodeGroups.internalValue = value;
  }
  public resetFrontendNodeGroups() {
    this._frontendNodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendNodeGroupsInput() {
    return this._frontendNodeGroups.internalValue;
  }

  // observer_node_groups - computed: false, optional: true, required: false
  private _observerNodeGroups = new StarRocksInstanceObserverNodeGroupsList(this, "observer_node_groups", false);
  public get observerNodeGroups() {
    return this._observerNodeGroups;
  }
  public putObserverNodeGroups(value: StarRocksInstanceObserverNodeGroups[] | cdktf.IResolvable) {
    this._observerNodeGroups.internalValue = value;
  }
  public resetObserverNodeGroups() {
    this._observerNodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observerNodeGroupsInput() {
    return this._observerNodeGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StarRocksInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StarRocksInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vswitches - computed: false, optional: true, required: false
  private _vswitches = new StarRocksInstanceVswitchesList(this, "vswitches", false);
  public get vswitches() {
    return this._vswitches;
  }
  public putVswitches(value: StarRocksInstanceVswitches[] | cdktf.IResolvable) {
    this._vswitches.internalValue = value;
  }
  public resetVswitches() {
    this._vswitches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchesInput() {
    return this._vswitches.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      cluster_zone_id: cdktf.stringToTerraform(this._clusterZoneId),
      duration: cdktf.numberToTerraform(this._duration),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      oss_accessing_role_name: cdktf.stringToTerraform(this._ossAccessingRoleName),
      package_type: cdktf.stringToTerraform(this._packageType),
      pay_type: cdktf.stringToTerraform(this._payType),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      promotion_option_no: cdktf.stringToTerraform(this._promotionOptionNo),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      run_mode: cdktf.stringToTerraform(this._runMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      backend_node_groups: cdktf.listMapper(starRocksInstanceBackendNodeGroupsToTerraform, true)(this._backendNodeGroups.internalValue),
      frontend_node_groups: cdktf.listMapper(starRocksInstanceFrontendNodeGroupsToTerraform, true)(this._frontendNodeGroups.internalValue),
      observer_node_groups: cdktf.listMapper(starRocksInstanceObserverNodeGroupsToTerraform, true)(this._observerNodeGroups.internalValue),
      timeouts: starRocksInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      vswitches: cdktf.listMapper(starRocksInstanceVswitchesToTerraform, true)(this._vswitches.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
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
      cluster_zone_id: {
        value: cdktf.stringToHclTerraform(this._clusterZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_accessing_role_name: {
        value: cdktf.stringToHclTerraform(this._ossAccessingRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_type: {
        value: cdktf.stringToHclTerraform(this._payType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promotion_option_no: {
        value: cdktf.stringToHclTerraform(this._promotionOptionNo),
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
      run_mode: {
        value: cdktf.stringToHclTerraform(this._runMode),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_node_groups: {
        value: cdktf.listMapperHcl(starRocksInstanceBackendNodeGroupsToHclTerraform, true)(this._backendNodeGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StarRocksInstanceBackendNodeGroupsList",
      },
      frontend_node_groups: {
        value: cdktf.listMapperHcl(starRocksInstanceFrontendNodeGroupsToHclTerraform, true)(this._frontendNodeGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StarRocksInstanceFrontendNodeGroupsList",
      },
      observer_node_groups: {
        value: cdktf.listMapperHcl(starRocksInstanceObserverNodeGroupsToHclTerraform, true)(this._observerNodeGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StarRocksInstanceObserverNodeGroupsList",
      },
      timeouts: {
        value: starRocksInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StarRocksInstanceTimeouts",
      },
      vswitches: {
        value: cdktf.listMapperHcl(starRocksInstanceVswitchesToHclTerraform, true)(this._vswitches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StarRocksInstanceVswitchesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
