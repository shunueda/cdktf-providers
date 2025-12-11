// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/desktops_desktop_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDesktopsDesktopPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/desktops_desktop_pool#desktop_pool_id DataOciDesktopsDesktopPool#desktop_pool_id}
  */
  readonly desktopPoolId: string;
}
export interface DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule {
}

export function dataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleToTerraform(struct?: DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleToHclTerraform(struct?: DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference {
    return new DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule {
}

export function dataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleToTerraform(struct?: DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleToHclTerraform(struct?: DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference {
    return new DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolAvailabilityPolicy {
}

export function dataOciDesktopsDesktopPoolAvailabilityPolicyToTerraform(struct?: DataOciDesktopsDesktopPoolAvailabilityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolAvailabilityPolicyToHclTerraform(struct?: DataOciDesktopsDesktopPoolAvailabilityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolAvailabilityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolAvailabilityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // start_schedule - computed: true, optional: false, required: false
  private _startSchedule = new DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList(this, "start_schedule", false);
  public get startSchedule() {
    return this._startSchedule;
  }

  // stop_schedule - computed: true, optional: false, required: false
  private _stopSchedule = new DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList(this, "stop_schedule", false);
  public get stopSchedule() {
    return this._stopSchedule;
  }
}

export class DataOciDesktopsDesktopPoolAvailabilityPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference {
    return new DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolDevicePolicy {
}

export function dataOciDesktopsDesktopPoolDevicePolicyToTerraform(struct?: DataOciDesktopsDesktopPoolDevicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolDevicePolicyToHclTerraform(struct?: DataOciDesktopsDesktopPoolDevicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolDevicePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolDevicePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolDevicePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_mode - computed: true, optional: false, required: false
  public get audioMode() {
    return this.getStringAttribute('audio_mode');
  }

  // cdm_mode - computed: true, optional: false, required: false
  public get cdmMode() {
    return this.getStringAttribute('cdm_mode');
  }

  // clipboard_mode - computed: true, optional: false, required: false
  public get clipboardMode() {
    return this.getStringAttribute('clipboard_mode');
  }

  // is_display_enabled - computed: true, optional: false, required: false
  public get isDisplayEnabled() {
    return this.getBooleanAttribute('is_display_enabled');
  }

  // is_keyboard_enabled - computed: true, optional: false, required: false
  public get isKeyboardEnabled() {
    return this.getBooleanAttribute('is_keyboard_enabled');
  }

  // is_pointer_enabled - computed: true, optional: false, required: false
  public get isPointerEnabled() {
    return this.getBooleanAttribute('is_pointer_enabled');
  }

  // is_printing_enabled - computed: true, optional: false, required: false
  public get isPrintingEnabled() {
    return this.getBooleanAttribute('is_printing_enabled');
  }
}

export class DataOciDesktopsDesktopPoolDevicePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolDevicePolicyOutputReference {
    return new DataOciDesktopsDesktopPoolDevicePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolImage {
}

export function dataOciDesktopsDesktopPoolImageToTerraform(struct?: DataOciDesktopsDesktopPoolImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolImageToHclTerraform(struct?: DataOciDesktopsDesktopPoolImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
}

export class DataOciDesktopsDesktopPoolImageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolImageOutputReference {
    return new DataOciDesktopsDesktopPoolImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolNetworkConfiguration {
}

export function dataOciDesktopsDesktopPoolNetworkConfigurationToTerraform(struct?: DataOciDesktopsDesktopPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolNetworkConfigurationToHclTerraform(struct?: DataOciDesktopsDesktopPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}

export class DataOciDesktopsDesktopPoolNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference {
    return new DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolPrivateAccessDetails {
}

export function dataOciDesktopsDesktopPoolPrivateAccessDetailsToTerraform(struct?: DataOciDesktopsDesktopPoolPrivateAccessDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolPrivateAccessDetailsToHclTerraform(struct?: DataOciDesktopsDesktopPoolPrivateAccessDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolPrivateAccessDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolPrivateAccessDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_fqdn - computed: true, optional: false, required: false
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}

export class DataOciDesktopsDesktopPoolPrivateAccessDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference {
    return new DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect {
}

export function dataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectToTerraform(struct?: DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectToHclTerraform(struct?: DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // grace_period_in_minutes - computed: true, optional: false, required: false
  public get gracePeriodInMinutes() {
    return this.getNumberAttribute('grace_period_in_minutes');
  }
}

export class DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference {
    return new DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity {
}

export function dataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityToTerraform(struct?: DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityToHclTerraform(struct?: DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // grace_period_in_minutes - computed: true, optional: false, required: false
  public get gracePeriodInMinutes() {
    return this.getNumberAttribute('grace_period_in_minutes');
  }
}

export class DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference {
    return new DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolSessionLifecycleActions {
}

export function dataOciDesktopsDesktopPoolSessionLifecycleActionsToTerraform(struct?: DataOciDesktopsDesktopPoolSessionLifecycleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolSessionLifecycleActionsToHclTerraform(struct?: DataOciDesktopsDesktopPoolSessionLifecycleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolSessionLifecycleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolSessionLifecycleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disconnect - computed: true, optional: false, required: false
  private _disconnect = new DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList(this, "disconnect", false);
  public get disconnect() {
    return this._disconnect;
  }

  // inactivity - computed: true, optional: false, required: false
  private _inactivity = new DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList(this, "inactivity", false);
  public get inactivity() {
    return this._inactivity;
  }
}

export class DataOciDesktopsDesktopPoolSessionLifecycleActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference {
    return new DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopPoolShapeConfig {
}

export function dataOciDesktopsDesktopPoolShapeConfigToTerraform(struct?: DataOciDesktopsDesktopPoolShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopPoolShapeConfigToHclTerraform(struct?: DataOciDesktopsDesktopPoolShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopPoolShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopPoolShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopPoolShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: false, required: false
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getStringAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getStringAttribute('ocpus');
  }
}

export class DataOciDesktopsDesktopPoolShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopPoolShapeConfigOutputReference {
    return new DataOciDesktopsDesktopPoolShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/desktops_desktop_pool oci_desktops_desktop_pool}
*/
export class DataOciDesktopsDesktopPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_desktops_desktop_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDesktopsDesktopPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDesktopsDesktopPool to import
  * @param importFromId The id of the existing DataOciDesktopsDesktopPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/desktops_desktop_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDesktopsDesktopPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_desktops_desktop_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/desktops_desktop_pool oci_desktops_desktop_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDesktopsDesktopPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDesktopsDesktopPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_desktops_desktop_pool',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desktopPoolId = config.desktopPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_desktops - computed: true, optional: false, required: false
  public get activeDesktops() {
    return this.getNumberAttribute('active_desktops');
  }

  // are_privileged_users - computed: true, optional: false, required: false
  public get arePrivilegedUsers() {
    return this.getBooleanAttribute('are_privileged_users');
  }

  // are_volumes_preserved - computed: true, optional: false, required: false
  public get areVolumesPreserved() {
    return this.getBooleanAttribute('are_volumes_preserved');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // availability_policy - computed: true, optional: false, required: false
  private _availabilityPolicy = new DataOciDesktopsDesktopPoolAvailabilityPolicyList(this, "availability_policy", false);
  public get availabilityPolicy() {
    return this._availabilityPolicy;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // contact_details - computed: true, optional: false, required: false
  public get contactDetails() {
    return this.getStringAttribute('contact_details');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desktop_pool_id - computed: false, optional: false, required: true
  private _desktopPoolId?: string; 
  public get desktopPoolId() {
    return this.getStringAttribute('desktop_pool_id');
  }
  public set desktopPoolId(value: string) {
    this._desktopPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopPoolIdInput() {
    return this._desktopPoolId;
  }

  // device_policy - computed: true, optional: false, required: false
  private _devicePolicy = new DataOciDesktopsDesktopPoolDevicePolicyList(this, "device_policy", false);
  public get devicePolicy() {
    return this._devicePolicy;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: true, optional: false, required: false
  private _image = new DataOciDesktopsDesktopPoolImageList(this, "image", false);
  public get image() {
    return this._image;
  }

  // is_storage_enabled - computed: true, optional: false, required: false
  public get isStorageEnabled() {
    return this.getBooleanAttribute('is_storage_enabled');
  }

  // maximum_size - computed: true, optional: false, required: false
  public get maximumSize() {
    return this.getNumberAttribute('maximum_size');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataOciDesktopsDesktopPoolNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_access_details - computed: true, optional: false, required: false
  private _privateAccessDetails = new DataOciDesktopsDesktopPoolPrivateAccessDetailsList(this, "private_access_details", false);
  public get privateAccessDetails() {
    return this._privateAccessDetails;
  }

  // session_lifecycle_actions - computed: true, optional: false, required: false
  private _sessionLifecycleActions = new DataOciDesktopsDesktopPoolSessionLifecycleActionsList(this, "session_lifecycle_actions", false);
  public get sessionLifecycleActions() {
    return this._sessionLifecycleActions;
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciDesktopsDesktopPoolShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // standby_size - computed: true, optional: false, required: false
  public get standbySize() {
    return this.getNumberAttribute('standby_size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_backup_policy_id - computed: true, optional: false, required: false
  public get storageBackupPolicyId() {
    return this.getStringAttribute('storage_backup_policy_id');
  }

  // storage_size_in_gbs - computed: true, optional: false, required: false
  public get storageSizeInGbs() {
    return this.getNumberAttribute('storage_size_in_gbs');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_start_scheduled - computed: true, optional: false, required: false
  public get timeStartScheduled() {
    return this.getStringAttribute('time_start_scheduled');
  }

  // time_stop_scheduled - computed: true, optional: false, required: false
  public get timeStopScheduled() {
    return this.getStringAttribute('time_stop_scheduled');
  }

  // use_dedicated_vm_host - computed: true, optional: false, required: false
  public get useDedicatedVmHost() {
    return this.getStringAttribute('use_dedicated_vm_host');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desktop_pool_id: cdktf.stringToTerraform(this._desktopPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desktop_pool_id: {
        value: cdktf.stringToHclTerraform(this._desktopPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
