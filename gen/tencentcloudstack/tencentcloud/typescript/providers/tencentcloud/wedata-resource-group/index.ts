// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Associated project space project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#associated_project_id WedataResourceGroup#associated_project_id}
  */
  readonly associatedProjectId?: string;
  /**
  * Whether auto-renewal is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#auto_renew_enabled WedataResourceGroup#auto_renew_enabled}
  */
  readonly autoRenewEnabled: boolean | cdktf.IResolvable;
  /**
  * Resource group description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#description WedataResourceGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#id WedataResourceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource group name. The name for creating a general resource group must start with a letter, can contain letters, numbers, underscores (_), and up to 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#name WedataResourceGroup#name}
  */
  readonly name: string;
  /**
  * Purchase duration, in months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#purchase_period WedataResourceGroup#purchase_period}
  */
  readonly purchasePeriod: number;
  /**
  * Resource purchase region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#resource_region WedataResourceGroup#resource_region}
  */
  readonly resourceRegion: string;
  /**
  * Subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#subnet WedataResourceGroup#subnet}
  */
  readonly subnet: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#vpc_id WedataResourceGroup#vpc_id}
  */
  readonly vpcId: string;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#type WedataResourceGroup#type}
  */
  readonly type: WedataResourceGroupType;
}
export interface WedataResourceGroupTypeDataService {
  /**
  * Quantity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#number WedataResourceGroup#number}
  */
  readonly number: number;
  /**
  * Resource group specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#specification WedataResourceGroup#specification}
  */
  readonly specification: string;
}

export function wedataResourceGroupTypeDataServiceToTerraform(struct?: WedataResourceGroupTypeDataServiceOutputReference | WedataResourceGroupTypeDataService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    specification: cdktf.stringToTerraform(struct!.specification),
  }
}


export function wedataResourceGroupTypeDataServiceToHclTerraform(struct?: WedataResourceGroupTypeDataServiceOutputReference | WedataResourceGroupTypeDataService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specification: {
      value: cdktf.stringToHclTerraform(struct!.specification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataResourceGroupTypeDataServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataResourceGroupTypeDataService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._specification !== undefined) {
      hasAnyValues = true;
      internalValueResult.specification = this._specification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataResourceGroupTypeDataService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._number = undefined;
      this._specification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._number = value.number;
      this._specification = value.specification;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // specification - computed: false, optional: false, required: true
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }
}
export interface WedataResourceGroupTypeIntegrationOfflineDataSync {
  /**
  * Quantity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#number WedataResourceGroup#number}
  */
  readonly number: number;
  /**
  * Resource group specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#specification WedataResourceGroup#specification}
  */
  readonly specification: string;
}

export function wedataResourceGroupTypeIntegrationOfflineDataSyncToTerraform(struct?: WedataResourceGroupTypeIntegrationOfflineDataSyncOutputReference | WedataResourceGroupTypeIntegrationOfflineDataSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    specification: cdktf.stringToTerraform(struct!.specification),
  }
}


export function wedataResourceGroupTypeIntegrationOfflineDataSyncToHclTerraform(struct?: WedataResourceGroupTypeIntegrationOfflineDataSyncOutputReference | WedataResourceGroupTypeIntegrationOfflineDataSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specification: {
      value: cdktf.stringToHclTerraform(struct!.specification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataResourceGroupTypeIntegrationOfflineDataSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataResourceGroupTypeIntegrationOfflineDataSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._specification !== undefined) {
      hasAnyValues = true;
      internalValueResult.specification = this._specification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataResourceGroupTypeIntegrationOfflineDataSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._number = undefined;
      this._specification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._number = value.number;
      this._specification = value.specification;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // specification - computed: false, optional: false, required: true
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }
}
export interface WedataResourceGroupTypeIntegrationRealTimeDataSync {
  /**
  * Quantity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#number WedataResourceGroup#number}
  */
  readonly number: number;
  /**
  * Resource group specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#specification WedataResourceGroup#specification}
  */
  readonly specification: string;
}

export function wedataResourceGroupTypeIntegrationRealTimeDataSyncToTerraform(struct?: WedataResourceGroupTypeIntegrationRealTimeDataSyncOutputReference | WedataResourceGroupTypeIntegrationRealTimeDataSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    specification: cdktf.stringToTerraform(struct!.specification),
  }
}


export function wedataResourceGroupTypeIntegrationRealTimeDataSyncToHclTerraform(struct?: WedataResourceGroupTypeIntegrationRealTimeDataSyncOutputReference | WedataResourceGroupTypeIntegrationRealTimeDataSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specification: {
      value: cdktf.stringToHclTerraform(struct!.specification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataResourceGroupTypeIntegrationRealTimeDataSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataResourceGroupTypeIntegrationRealTimeDataSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._specification !== undefined) {
      hasAnyValues = true;
      internalValueResult.specification = this._specification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataResourceGroupTypeIntegrationRealTimeDataSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._number = undefined;
      this._specification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._number = value.number;
      this._specification = value.specification;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // specification - computed: false, optional: false, required: true
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }
}
export interface WedataResourceGroupTypeIntegration {
  /**
  * offline_data_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#offline_data_sync WedataResourceGroup#offline_data_sync}
  */
  readonly offlineDataSync?: WedataResourceGroupTypeIntegrationOfflineDataSync;
  /**
  * real_time_data_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#real_time_data_sync WedataResourceGroup#real_time_data_sync}
  */
  readonly realTimeDataSync?: WedataResourceGroupTypeIntegrationRealTimeDataSync;
}

export function wedataResourceGroupTypeIntegrationToTerraform(struct?: WedataResourceGroupTypeIntegrationOutputReference | WedataResourceGroupTypeIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offline_data_sync: wedataResourceGroupTypeIntegrationOfflineDataSyncToTerraform(struct!.offlineDataSync),
    real_time_data_sync: wedataResourceGroupTypeIntegrationRealTimeDataSyncToTerraform(struct!.realTimeDataSync),
  }
}


export function wedataResourceGroupTypeIntegrationToHclTerraform(struct?: WedataResourceGroupTypeIntegrationOutputReference | WedataResourceGroupTypeIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offline_data_sync: {
      value: wedataResourceGroupTypeIntegrationOfflineDataSyncToHclTerraform(struct!.offlineDataSync),
      isBlock: true,
      type: "list",
      storageClassType: "WedataResourceGroupTypeIntegrationOfflineDataSyncList",
    },
    real_time_data_sync: {
      value: wedataResourceGroupTypeIntegrationRealTimeDataSyncToHclTerraform(struct!.realTimeDataSync),
      isBlock: true,
      type: "list",
      storageClassType: "WedataResourceGroupTypeIntegrationRealTimeDataSyncList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataResourceGroupTypeIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataResourceGroupTypeIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offlineDataSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineDataSync = this._offlineDataSync?.internalValue;
    }
    if (this._realTimeDataSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realTimeDataSync = this._realTimeDataSync?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataResourceGroupTypeIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offlineDataSync.internalValue = undefined;
      this._realTimeDataSync.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offlineDataSync.internalValue = value.offlineDataSync;
      this._realTimeDataSync.internalValue = value.realTimeDataSync;
    }
  }

  // offline_data_sync - computed: false, optional: true, required: false
  private _offlineDataSync = new WedataResourceGroupTypeIntegrationOfflineDataSyncOutputReference(this, "offline_data_sync");
  public get offlineDataSync() {
    return this._offlineDataSync;
  }
  public putOfflineDataSync(value: WedataResourceGroupTypeIntegrationOfflineDataSync) {
    this._offlineDataSync.internalValue = value;
  }
  public resetOfflineDataSync() {
    this._offlineDataSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineDataSyncInput() {
    return this._offlineDataSync.internalValue;
  }

  // real_time_data_sync - computed: false, optional: true, required: false
  private _realTimeDataSync = new WedataResourceGroupTypeIntegrationRealTimeDataSyncOutputReference(this, "real_time_data_sync");
  public get realTimeDataSync() {
    return this._realTimeDataSync;
  }
  public putRealTimeDataSync(value: WedataResourceGroupTypeIntegrationRealTimeDataSync) {
    this._realTimeDataSync.internalValue = value;
  }
  public resetRealTimeDataSync() {
    this._realTimeDataSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeDataSyncInput() {
    return this._realTimeDataSync.internalValue;
  }
}
export interface WedataResourceGroupTypeSchedule {
  /**
  * Quantity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#number WedataResourceGroup#number}
  */
  readonly number: number;
  /**
  * Resource group specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#specification WedataResourceGroup#specification}
  */
  readonly specification: string;
}

export function wedataResourceGroupTypeScheduleToTerraform(struct?: WedataResourceGroupTypeScheduleOutputReference | WedataResourceGroupTypeSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    specification: cdktf.stringToTerraform(struct!.specification),
  }
}


export function wedataResourceGroupTypeScheduleToHclTerraform(struct?: WedataResourceGroupTypeScheduleOutputReference | WedataResourceGroupTypeSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specification: {
      value: cdktf.stringToHclTerraform(struct!.specification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataResourceGroupTypeScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataResourceGroupTypeSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._specification !== undefined) {
      hasAnyValues = true;
      internalValueResult.specification = this._specification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataResourceGroupTypeSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._number = undefined;
      this._specification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._number = value.number;
      this._specification = value.specification;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // specification - computed: false, optional: false, required: true
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }
}
export interface WedataResourceGroupType {
  /**
  * Resource group type.
  * 
  * - Schedule --- Scheduling resource group
  * - Integration --- Integration resource group  
  * - DataService -- Data service resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#resource_group_type WedataResourceGroup#resource_group_type}
  */
  readonly resourceGroupType: string;
  /**
  * data_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#data_service WedataResourceGroup#data_service}
  */
  readonly dataService?: WedataResourceGroupTypeDataService;
  /**
  * integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#integration WedataResourceGroup#integration}
  */
  readonly integration?: WedataResourceGroupTypeIntegration;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#schedule WedataResourceGroup#schedule}
  */
  readonly schedule?: WedataResourceGroupTypeSchedule;
}

export function wedataResourceGroupTypeToTerraform(struct?: WedataResourceGroupTypeOutputReference | WedataResourceGroupType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_type: cdktf.stringToTerraform(struct!.resourceGroupType),
    data_service: wedataResourceGroupTypeDataServiceToTerraform(struct!.dataService),
    integration: wedataResourceGroupTypeIntegrationToTerraform(struct!.integration),
    schedule: wedataResourceGroupTypeScheduleToTerraform(struct!.schedule),
  }
}


export function wedataResourceGroupTypeToHclTerraform(struct?: WedataResourceGroupTypeOutputReference | WedataResourceGroupType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_service: {
      value: wedataResourceGroupTypeDataServiceToHclTerraform(struct!.dataService),
      isBlock: true,
      type: "list",
      storageClassType: "WedataResourceGroupTypeDataServiceList",
    },
    integration: {
      value: wedataResourceGroupTypeIntegrationToHclTerraform(struct!.integration),
      isBlock: true,
      type: "list",
      storageClassType: "WedataResourceGroupTypeIntegrationList",
    },
    schedule: {
      value: wedataResourceGroupTypeScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "WedataResourceGroupTypeScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataResourceGroupTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataResourceGroupType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupType = this._resourceGroupType;
    }
    if (this._dataService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataService = this._dataService?.internalValue;
    }
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataResourceGroupType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupType = undefined;
      this._dataService.internalValue = undefined;
      this._integration.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupType = value.resourceGroupType;
      this._dataService.internalValue = value.dataService;
      this._integration.internalValue = value.integration;
      this._schedule.internalValue = value.schedule;
    }
  }

  // resource_group_type - computed: false, optional: false, required: true
  private _resourceGroupType?: string; 
  public get resourceGroupType() {
    return this.getStringAttribute('resource_group_type');
  }
  public set resourceGroupType(value: string) {
    this._resourceGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupTypeInput() {
    return this._resourceGroupType;
  }

  // data_service - computed: false, optional: true, required: false
  private _dataService = new WedataResourceGroupTypeDataServiceOutputReference(this, "data_service");
  public get dataService() {
    return this._dataService;
  }
  public putDataService(value: WedataResourceGroupTypeDataService) {
    this._dataService.internalValue = value;
  }
  public resetDataService() {
    this._dataService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServiceInput() {
    return this._dataService.internalValue;
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new WedataResourceGroupTypeIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: WedataResourceGroupTypeIntegration) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new WedataResourceGroupTypeScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: WedataResourceGroupTypeSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group tencentcloud_wedata_resource_group}
*/
export class WedataResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataResourceGroup to import
  * @param importFromId The id of the existing WedataResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/wedata_resource_group tencentcloud_wedata_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: WedataResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedProjectId = config.associatedProjectId;
    this._autoRenewEnabled = config.autoRenewEnabled;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._purchasePeriod = config.purchasePeriod;
    this._resourceRegion = config.resourceRegion;
    this._subnet = config.subnet;
    this._vpcId = config.vpcId;
    this._type.internalValue = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_project_id - computed: false, optional: true, required: false
  private _associatedProjectId?: string; 
  public get associatedProjectId() {
    return this.getStringAttribute('associated_project_id');
  }
  public set associatedProjectId(value: string) {
    this._associatedProjectId = value;
  }
  public resetAssociatedProjectId() {
    this._associatedProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedProjectIdInput() {
    return this._associatedProjectId;
  }

  // auto_renew_enabled - computed: false, optional: false, required: true
  private _autoRenewEnabled?: boolean | cdktf.IResolvable; 
  public get autoRenewEnabled() {
    return this.getBooleanAttribute('auto_renew_enabled');
  }
  public set autoRenewEnabled(value: boolean | cdktf.IResolvable) {
    this._autoRenewEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewEnabledInput() {
    return this._autoRenewEnabled;
  }

  // description - computed: false, optional: true, required: false
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

  // purchase_period - computed: false, optional: false, required: true
  private _purchasePeriod?: number; 
  public get purchasePeriod() {
    return this.getNumberAttribute('purchase_period');
  }
  public set purchasePeriod(value: number) {
    this._purchasePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purchasePeriodInput() {
    return this._purchasePeriod;
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_region - computed: false, optional: false, required: true
  private _resourceRegion?: string; 
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }
  public set resourceRegion(value: string) {
    this._resourceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
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

  // type - computed: false, optional: false, required: true
  private _type = new WedataResourceGroupTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: WedataResourceGroupType) {
    this._type.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_project_id: cdktf.stringToTerraform(this._associatedProjectId),
      auto_renew_enabled: cdktf.booleanToTerraform(this._autoRenewEnabled),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      purchase_period: cdktf.numberToTerraform(this._purchasePeriod),
      resource_region: cdktf.stringToTerraform(this._resourceRegion),
      subnet: cdktf.stringToTerraform(this._subnet),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      type: wedataResourceGroupTypeToTerraform(this._type.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_project_id: {
        value: cdktf.stringToHclTerraform(this._associatedProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoRenewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purchase_period: {
        value: cdktf.numberToHclTerraform(this._purchasePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_region: {
        value: cdktf.stringToHclTerraform(this._resourceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
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
      type: {
        value: wedataResourceGroupTypeToHclTerraform(this._type.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataResourceGroupTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
