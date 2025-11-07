// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoVpnInterfaceFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_feature_template#id DataSdwanCiscoVpnInterfaceFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_feature_template#name DataSdwanCiscoVpnInterfaceFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateAccessLists {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateAccessListsToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateAccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateAccessListsToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateAccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateAccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateAccessLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateAccessLists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // acl_name_variable - computed: true, optional: false, required: false
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateAccessListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateAccessListsOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateAccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decrement_value - computed: true, optional: false, required: false
  public get decrementValue() {
    return this.getNumberAttribute('decrement_value');
  }

  // decrement_value_variable - computed: true, optional: false, required: false
  public get decrementValueVariable() {
    return this.getStringAttribute('decrement_value_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // track_action - computed: true, optional: false, required: false
  public get trackAction() {
    return this.getStringAttribute('track_action');
  }

  // track_action_variable - computed: true, optional: false, required: false
  public get trackActionVariable() {
    return this.getStringAttribute('track_action_variable');
  }

  // tracker_id - computed: true, optional: false, required: false
  public get trackerId() {
    return this.getNumberAttribute('tracker_id');
  }

  // tracker_id_variable - computed: true, optional: false, required: false
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4Vrrps {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4Vrrps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4Vrrps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_id_variable - computed: true, optional: false, required: false
  public get groupIdVariable() {
    return this.getStringAttribute('group_id_variable');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // ipv4_secondary_addresses - computed: true, optional: false, required: false
  private _ipv4SecondaryAddresses = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }

  // timer - computed: true, optional: false, required: false
  public get timer() {
    return this.getNumberAttribute('timer');
  }

  // timer_variable - computed: true, optional: false, required: false
  public get timerVariable() {
    return this.getStringAttribute('timer_variable');
  }

  // tloc_preference_change - computed: true, optional: false, required: false
  public get tlocPreferenceChange() {
    return this.getBooleanAttribute('tloc_preference_change');
  }

  // tloc_preference_change_value - computed: true, optional: false, required: false
  public get tlocPreferenceChangeValue() {
    return this.getNumberAttribute('tloc_preference_change_value');
  }

  // tloc_preference_change_value_variable - computed: true, optional: false, required: false
  public get tlocPreferenceChangeValueVariable() {
    return this.getStringAttribute('tloc_preference_change_value_variable');
  }

  // track_omp - computed: true, optional: false, required: false
  public get trackOmp() {
    return this.getBooleanAttribute('track_omp');
  }

  // track_prefix_list - computed: true, optional: false, required: false
  public get trackPrefixList() {
    return this.getStringAttribute('track_prefix_list');
  }

  // track_prefix_list_variable - computed: true, optional: false, required: false
  public get trackPrefixListVariable() {
    return this.getStringAttribute('track_prefix_list_variable');
  }

  // tracking_objects - computed: true, optional: false, required: false
  private _trackingObjects = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsList(this, "tracking_objects", false);
  public get trackingObjects() {
    return this._trackingObjects;
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessLists {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessListsToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessListsToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessLists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // acl_name_variable - computed: true, optional: false, required: false
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessListsOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_link_local - computed: true, optional: false, required: false
  public get ipv6LinkLocal() {
    return this.getStringAttribute('ipv6_link_local');
  }

  // ipv6_link_local_variable - computed: true, optional: false, required: false
  public get ipv6LinkLocalVariable() {
    return this.getStringAttribute('ipv6_link_local_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6Vrrps {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6Vrrps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6Vrrps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_id_variable - computed: true, optional: false, required: false
  public get groupIdVariable() {
    return this.getStringAttribute('group_id_variable');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }

  // timer - computed: true, optional: false, required: false
  public get timer() {
    return this.getNumberAttribute('timer');
  }

  // timer_variable - computed: true, optional: false, required: false
  public get timerVariable() {
    return this.getStringAttribute('timer_variable');
  }

  // track_omp - computed: true, optional: false, required: false
  public get trackOmp() {
    return this.getBooleanAttribute('track_omp');
  }

  // track_omp_variable - computed: true, optional: false, required: false
  public get trackOmpVariable() {
    return this.getStringAttribute('track_omp_variable');
  }

  // track_prefix_list - computed: true, optional: false, required: false
  public get trackPrefixList() {
    return this.getStringAttribute('track_prefix_list');
  }

  // track_prefix_list_variable - computed: true, optional: false, required: false
  public get trackPrefixListVariable() {
    return this.getStringAttribute('track_prefix_list_variable');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArps {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateStaticArpsToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateStaticArpsToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // mac_variable - computed: true, optional: false, required: false
  public get macVariable() {
    return this.getStringAttribute('mac_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArpsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArpsOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66Entries {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66EntriesToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66Entries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66EntriesToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66Entries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66Entries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66Entries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // source_prefix - computed: true, optional: false, required: false
  public get sourcePrefix() {
    return this.getStringAttribute('source_prefix');
  }

  // source_prefix_variable - computed: true, optional: false, required: false
  public get sourcePrefixVariable() {
    return this.getStringAttribute('source_prefix_variable');
  }

  // source_vpn_id - computed: true, optional: false, required: false
  public get sourceVpnId() {
    return this.getNumberAttribute('source_vpn_id');
  }

  // source_vpn_id_variable - computed: true, optional: false, required: false
  public get sourceVpnIdVariable() {
    return this.getStringAttribute('source_vpn_id_variable');
  }

  // translated_source_prefix - computed: true, optional: false, required: false
  public get translatedSourcePrefix() {
    return this.getStringAttribute('translated_source_prefix');
  }

  // translated_source_prefix_variable - computed: true, optional: false, required: false
  public get translatedSourcePrefixVariable() {
    return this.getStringAttribute('translated_source_prefix_variable');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66EntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66EntriesOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntries {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntriesToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntriesToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // source_vpn_id - computed: true, optional: false, required: false
  public get sourceVpnId() {
    return this.getNumberAttribute('source_vpn_id');
  }

  // source_vpn_id_variable - computed: true, optional: false, required: false
  public get sourceVpnIdVariable() {
    return this.getStringAttribute('source_vpn_id_variable');
  }

  // static_nat_direction - computed: true, optional: false, required: false
  public get staticNatDirection() {
    return this.getStringAttribute('static_nat_direction');
  }

  // static_nat_direction_variable - computed: true, optional: false, required: false
  public get staticNatDirectionVariable() {
    return this.getStringAttribute('static_nat_direction_variable');
  }

  // translate_ip - computed: true, optional: false, required: false
  public get translateIp() {
    return this.getStringAttribute('translate_ip');
  }

  // translate_ip_variable - computed: true, optional: false, required: false
  public get translateIpVariable() {
    return this.getStringAttribute('translate_ip_variable');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntriesOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }

  // source_port_variable - computed: true, optional: false, required: false
  public get sourcePortVariable() {
    return this.getStringAttribute('source_port_variable');
  }

  // source_vpn_id - computed: true, optional: false, required: false
  public get sourceVpnId() {
    return this.getNumberAttribute('source_vpn_id');
  }

  // source_vpn_id_variable - computed: true, optional: false, required: false
  public get sourceVpnIdVariable() {
    return this.getStringAttribute('source_vpn_id_variable');
  }

  // static_nat_direction - computed: true, optional: false, required: false
  public get staticNatDirection() {
    return this.getStringAttribute('static_nat_direction');
  }

  // static_nat_direction_variable - computed: true, optional: false, required: false
  public get staticNatDirectionVariable() {
    return this.getStringAttribute('static_nat_direction_variable');
  }

  // translate_ip - computed: true, optional: false, required: false
  public get translateIp() {
    return this.getStringAttribute('translate_ip');
  }

  // translate_ip_variable - computed: true, optional: false, required: false
  public get translateIpVariable() {
    return this.getStringAttribute('translate_ip_variable');
  }

  // translate_port - computed: true, optional: false, required: false
  public get translatePort() {
    return this.getNumberAttribute('translate_port');
  }

  // translate_port_variable - computed: true, optional: false, required: false
  public get translatePortVariable() {
    return this.getStringAttribute('translate_port_variable');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations {
}

export function dataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsToTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }

  // preference_variable - computed: true, optional: false, required: false
  public get preferenceVariable() {
    return this.getStringAttribute('preference_variable');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // weight_variable - computed: true, optional: false, required: false
  public get weightVariable() {
    return this.getStringAttribute('weight_variable');
  }
}

export class DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsOutputReference {
    return new DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_feature_template sdwan_cisco_vpn_interface_feature_template}
*/
export class DataSdwanCiscoVpnInterfaceFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_vpn_interface_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoVpnInterfaceFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoVpnInterfaceFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoVpnInterfaceFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoVpnInterfaceFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_vpn_interface_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_feature_template sdwan_cisco_vpn_interface_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoVpnInterfaceFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoVpnInterfaceFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_vpn_interface_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_lists - computed: true, optional: false, required: false
  private _accessLists = new DataSdwanCiscoVpnInterfaceFeatureTemplateAccessListsList(this, "access_lists", false);
  public get accessLists() {
    return this._accessLists;
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // arp_timeout - computed: true, optional: false, required: false
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }

  // arp_timeout_variable - computed: true, optional: false, required: false
  public get arpTimeoutVariable() {
    return this.getStringAttribute('arp_timeout_variable');
  }

  // auto_bandwidth_detect - computed: true, optional: false, required: false
  public get autoBandwidthDetect() {
    return this.getBooleanAttribute('auto_bandwidth_detect');
  }

  // auto_bandwidth_detect_variable - computed: true, optional: false, required: false
  public get autoBandwidthDetectVariable() {
    return this.getStringAttribute('auto_bandwidth_detect_variable');
  }

  // autonegotiate - computed: true, optional: false, required: false
  public get autonegotiate() {
    return this.getBooleanAttribute('autonegotiate');
  }

  // autonegotiate_variable - computed: true, optional: false, required: false
  public get autonegotiateVariable() {
    return this.getStringAttribute('autonegotiate_variable');
  }

  // bandwidth_downstream - computed: true, optional: false, required: false
  public get bandwidthDownstream() {
    return this.getNumberAttribute('bandwidth_downstream');
  }

  // bandwidth_downstream_variable - computed: true, optional: false, required: false
  public get bandwidthDownstreamVariable() {
    return this.getStringAttribute('bandwidth_downstream_variable');
  }

  // bandwidth_upstream - computed: true, optional: false, required: false
  public get bandwidthUpstream() {
    return this.getNumberAttribute('bandwidth_upstream');
  }

  // bandwidth_upstream_variable - computed: true, optional: false, required: false
  public get bandwidthUpstreamVariable() {
    return this.getStringAttribute('bandwidth_upstream_variable');
  }

  // block_non_source_ip - computed: true, optional: false, required: false
  public get blockNonSourceIp() {
    return this.getBooleanAttribute('block_non_source_ip');
  }

  // block_non_source_ip_variable - computed: true, optional: false, required: false
  public get blockNonSourceIpVariable() {
    return this.getStringAttribute('block_non_source_ip_variable');
  }

  // core_region - computed: true, optional: false, required: false
  public get coreRegion() {
    return this.getStringAttribute('core_region');
  }

  // core_region_variable - computed: true, optional: false, required: false
  public get coreRegionVariable() {
    return this.getStringAttribute('core_region_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }

  // dhcp_distance - computed: true, optional: false, required: false
  public get dhcpDistance() {
    return this.getNumberAttribute('dhcp_distance');
  }

  // dhcp_distance_variable - computed: true, optional: false, required: false
  public get dhcpDistanceVariable() {
    return this.getStringAttribute('dhcp_distance_variable');
  }

  // dhcp_variable - computed: true, optional: false, required: false
  public get dhcpVariable() {
    return this.getStringAttribute('dhcp_variable');
  }

  // dhcpv6 - computed: true, optional: false, required: false
  public get dhcpv6() {
    return this.getBooleanAttribute('dhcpv6');
  }

  // dhcpv6_variable - computed: true, optional: false, required: false
  public get dhcpv6Variable() {
    return this.getStringAttribute('dhcpv6_variable');
  }

  // duplex - computed: true, optional: false, required: false
  public get duplex() {
    return this.getStringAttribute('duplex');
  }

  // duplex_variable - computed: true, optional: false, required: false
  public get duplexVariable() {
    return this.getStringAttribute('duplex_variable');
  }

  // enable_core_region - computed: true, optional: false, required: false
  public get enableCoreRegion() {
    return this.getBooleanAttribute('enable_core_region');
  }

  // enable_sgt - computed: true, optional: false, required: false
  public get enableSgt() {
    return this.getBooleanAttribute('enable_sgt');
  }

  // gre_tunnel_source_ip - computed: true, optional: false, required: false
  public get greTunnelSourceIp() {
    return this.getStringAttribute('gre_tunnel_source_ip');
  }

  // gre_tunnel_source_ip_variable - computed: true, optional: false, required: false
  public get greTunnelSourceIpVariable() {
    return this.getStringAttribute('gre_tunnel_source_ip_variable');
  }

  // gre_tunnel_xconnect - computed: true, optional: false, required: false
  public get greTunnelXconnect() {
    return this.getStringAttribute('gre_tunnel_xconnect');
  }

  // gre_tunnel_xconnect_variable - computed: true, optional: false, required: false
  public get greTunnelXconnectVariable() {
    return this.getStringAttribute('gre_tunnel_xconnect_variable');
  }

  // icmp_redirect_disable - computed: true, optional: false, required: false
  public get icmpRedirectDisable() {
    return this.getBooleanAttribute('icmp_redirect_disable');
  }

  // icmp_redirect_disable_variable - computed: true, optional: false, required: false
  public get icmpRedirectDisableVariable() {
    return this.getStringAttribute('icmp_redirect_disable_variable');
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

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // interface_description_variable - computed: true, optional: false, required: false
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }

  // interface_mtu - computed: true, optional: false, required: false
  public get interfaceMtu() {
    return this.getNumberAttribute('interface_mtu');
  }

  // interface_mtu_variable - computed: true, optional: false, required: false
  public get interfaceMtuVariable() {
    return this.getStringAttribute('interface_mtu_variable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // ip_directed_broadcast - computed: true, optional: false, required: false
  public get ipDirectedBroadcast() {
    return this.getBooleanAttribute('ip_directed_broadcast');
  }

  // ip_directed_broadcast_variable - computed: true, optional: false, required: false
  public get ipDirectedBroadcastVariable() {
    return this.getStringAttribute('ip_directed_broadcast_variable');
  }

  // ip_mtu - computed: true, optional: false, required: false
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }

  // ip_mtu_variable - computed: true, optional: false, required: false
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }

  // iperf_server - computed: true, optional: false, required: false
  public get iperfServer() {
    return this.getStringAttribute('iperf_server');
  }

  // iperf_server_variable - computed: true, optional: false, required: false
  public get iperfServerVariable() {
    return this.getStringAttribute('iperf_server_variable');
  }

  // ipv4_dhcp_helper - computed: true, optional: false, required: false
  public get ipv4DhcpHelper() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dhcp_helper'));
  }

  // ipv4_dhcp_helper_variable - computed: true, optional: false, required: false
  public get ipv4DhcpHelperVariable() {
    return this.getStringAttribute('ipv4_dhcp_helper_variable');
  }

  // ipv4_secondary_addresses - computed: true, optional: false, required: false
  private _ipv4SecondaryAddresses = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }

  // ipv4_vrrps - computed: true, optional: false, required: false
  private _ipv4Vrrps = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv4VrrpsList(this, "ipv4_vrrps", false);
  public get ipv4Vrrps() {
    return this._ipv4Vrrps;
  }

  // ipv6_access_lists - computed: true, optional: false, required: false
  private _ipv6AccessLists = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6AccessListsList(this, "ipv6_access_lists", false);
  public get ipv6AccessLists() {
    return this._ipv6AccessLists;
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_address_variable - computed: true, optional: false, required: false
  public get ipv6AddressVariable() {
    return this.getStringAttribute('ipv6_address_variable');
  }

  // ipv6_dhcp_helpers - computed: true, optional: false, required: false
  private _ipv6DhcpHelpers = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersList(this, "ipv6_dhcp_helpers", false);
  public get ipv6DhcpHelpers() {
    return this._ipv6DhcpHelpers;
  }

  // ipv6_nat - computed: true, optional: false, required: false
  public get ipv6Nat() {
    return this.getBooleanAttribute('ipv6_nat');
  }

  // ipv6_nat_variable - computed: true, optional: false, required: false
  public get ipv6NatVariable() {
    return this.getStringAttribute('ipv6_nat_variable');
  }

  // ipv6_secondary_addresses - computed: true, optional: false, required: false
  private _ipv6SecondaryAddresses = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }

  // ipv6_vrrps - computed: true, optional: false, required: false
  private _ipv6Vrrps = new DataSdwanCiscoVpnInterfaceFeatureTemplateIpv6VrrpsList(this, "ipv6_vrrps", false);
  public get ipv6Vrrps() {
    return this._ipv6Vrrps;
  }

  // load_interval - computed: true, optional: false, required: false
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }

  // load_interval_variable - computed: true, optional: false, required: false
  public get loadIntervalVariable() {
    return this.getStringAttribute('load_interval_variable');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mac_address_variable - computed: true, optional: false, required: false
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // media_type_variable - computed: true, optional: false, required: false
  public get mediaTypeVariable() {
    return this.getStringAttribute('media_type_variable');
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

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getBooleanAttribute('nat');
  }

  // nat64_interface - computed: true, optional: false, required: false
  public get nat64Interface() {
    return this.getBooleanAttribute('nat64_interface');
  }

  // nat66_interface - computed: true, optional: false, required: false
  public get nat66Interface() {
    return this.getBooleanAttribute('nat66_interface');
  }

  // nat_inside_source_loopback_interface - computed: true, optional: false, required: false
  public get natInsideSourceLoopbackInterface() {
    return this.getStringAttribute('nat_inside_source_loopback_interface');
  }

  // nat_inside_source_loopback_interface_variable - computed: true, optional: false, required: false
  public get natInsideSourceLoopbackInterfaceVariable() {
    return this.getStringAttribute('nat_inside_source_loopback_interface_variable');
  }

  // nat_overload - computed: true, optional: false, required: false
  public get natOverload() {
    return this.getBooleanAttribute('nat_overload');
  }

  // nat_overload_variable - computed: true, optional: false, required: false
  public get natOverloadVariable() {
    return this.getStringAttribute('nat_overload_variable');
  }

  // nat_pool_prefix_length - computed: true, optional: false, required: false
  public get natPoolPrefixLength() {
    return this.getNumberAttribute('nat_pool_prefix_length');
  }

  // nat_pool_prefix_length_variable - computed: true, optional: false, required: false
  public get natPoolPrefixLengthVariable() {
    return this.getStringAttribute('nat_pool_prefix_length_variable');
  }

  // nat_pool_range_end - computed: true, optional: false, required: false
  public get natPoolRangeEnd() {
    return this.getStringAttribute('nat_pool_range_end');
  }

  // nat_pool_range_end_variable - computed: true, optional: false, required: false
  public get natPoolRangeEndVariable() {
    return this.getStringAttribute('nat_pool_range_end_variable');
  }

  // nat_pool_range_start - computed: true, optional: false, required: false
  public get natPoolRangeStart() {
    return this.getStringAttribute('nat_pool_range_start');
  }

  // nat_pool_range_start_variable - computed: true, optional: false, required: false
  public get natPoolRangeStartVariable() {
    return this.getStringAttribute('nat_pool_range_start_variable');
  }

  // nat_type - computed: true, optional: false, required: false
  public get natType() {
    return this.getStringAttribute('nat_type');
  }

  // nat_type_variable - computed: true, optional: false, required: false
  public get natTypeVariable() {
    return this.getStringAttribute('nat_type_variable');
  }

  // poe - computed: true, optional: false, required: false
  public get poe() {
    return this.getBooleanAttribute('poe');
  }

  // poe_variable - computed: true, optional: false, required: false
  public get poeVariable() {
    return this.getStringAttribute('poe_variable');
  }

  // propagate_sgt - computed: true, optional: false, required: false
  public get propagateSgt() {
    return this.getBooleanAttribute('propagate_sgt');
  }

  // qos_adaptive_bandwidth_downstream - computed: true, optional: false, required: false
  public get qosAdaptiveBandwidthDownstream() {
    return this.getNumberAttribute('qos_adaptive_bandwidth_downstream');
  }

  // qos_adaptive_bandwidth_downstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveBandwidthDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_bandwidth_downstream_variable');
  }

  // qos_adaptive_bandwidth_upstream - computed: true, optional: false, required: false
  public get qosAdaptiveBandwidthUpstream() {
    return this.getNumberAttribute('qos_adaptive_bandwidth_upstream');
  }

  // qos_adaptive_bandwidth_upstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveBandwidthUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_bandwidth_upstream_variable');
  }

  // qos_adaptive_max_downstream - computed: true, optional: false, required: false
  public get qosAdaptiveMaxDownstream() {
    return this.getNumberAttribute('qos_adaptive_max_downstream');
  }

  // qos_adaptive_max_downstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveMaxDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_max_downstream_variable');
  }

  // qos_adaptive_max_upstream - computed: true, optional: false, required: false
  public get qosAdaptiveMaxUpstream() {
    return this.getNumberAttribute('qos_adaptive_max_upstream');
  }

  // qos_adaptive_max_upstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveMaxUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_max_upstream_variable');
  }

  // qos_adaptive_min_downstream - computed: true, optional: false, required: false
  public get qosAdaptiveMinDownstream() {
    return this.getNumberAttribute('qos_adaptive_min_downstream');
  }

  // qos_adaptive_min_downstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveMinDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_min_downstream_variable');
  }

  // qos_adaptive_min_upstream - computed: true, optional: false, required: false
  public get qosAdaptiveMinUpstream() {
    return this.getNumberAttribute('qos_adaptive_min_upstream');
  }

  // qos_adaptive_min_upstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveMinUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_min_upstream_variable');
  }

  // qos_adaptive_period - computed: true, optional: false, required: false
  public get qosAdaptivePeriod() {
    return this.getNumberAttribute('qos_adaptive_period');
  }

  // qos_adaptive_period_variable - computed: true, optional: false, required: false
  public get qosAdaptivePeriodVariable() {
    return this.getStringAttribute('qos_adaptive_period_variable');
  }

  // qos_map - computed: true, optional: false, required: false
  public get qosMap() {
    return this.getStringAttribute('qos_map');
  }

  // qos_map_variable - computed: true, optional: false, required: false
  public get qosMapVariable() {
    return this.getStringAttribute('qos_map_variable');
  }

  // qos_map_vpn - computed: true, optional: false, required: false
  public get qosMapVpn() {
    return this.getStringAttribute('qos_map_vpn');
  }

  // qos_map_vpn_variable - computed: true, optional: false, required: false
  public get qosMapVpnVariable() {
    return this.getStringAttribute('qos_map_vpn_variable');
  }

  // rewrite_rule_name - computed: true, optional: false, required: false
  public get rewriteRuleName() {
    return this.getStringAttribute('rewrite_rule_name');
  }

  // rewrite_rule_name_variable - computed: true, optional: false, required: false
  public get rewriteRuleNameVariable() {
    return this.getStringAttribute('rewrite_rule_name_variable');
  }

  // secondary_region - computed: true, optional: false, required: false
  public get secondaryRegion() {
    return this.getStringAttribute('secondary_region');
  }

  // secondary_region_variable - computed: true, optional: false, required: false
  public get secondaryRegionVariable() {
    return this.getStringAttribute('secondary_region_variable');
  }

  // sgt_enforcement - computed: true, optional: false, required: false
  public get sgtEnforcement() {
    return this.getBooleanAttribute('sgt_enforcement');
  }

  // sgt_enforcement_sgt - computed: true, optional: false, required: false
  public get sgtEnforcementSgt() {
    return this.getNumberAttribute('sgt_enforcement_sgt');
  }

  // sgt_enforcement_sgt_variable - computed: true, optional: false, required: false
  public get sgtEnforcementSgtVariable() {
    return this.getStringAttribute('sgt_enforcement_sgt_variable');
  }

  // shaping_rate - computed: true, optional: false, required: false
  public get shapingRate() {
    return this.getNumberAttribute('shaping_rate');
  }

  // shaping_rate_variable - computed: true, optional: false, required: false
  public get shapingRateVariable() {
    return this.getStringAttribute('shaping_rate_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // speed_variable - computed: true, optional: false, required: false
  public get speedVariable() {
    return this.getStringAttribute('speed_variable');
  }

  // static_arps - computed: true, optional: false, required: false
  private _staticArps = new DataSdwanCiscoVpnInterfaceFeatureTemplateStaticArpsList(this, "static_arps", false);
  public get staticArps() {
    return this._staticArps;
  }

  // static_nat66_entries - computed: true, optional: false, required: false
  private _staticNat66Entries = new DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNat66EntriesList(this, "static_nat66_entries", false);
  public get staticNat66Entries() {
    return this._staticNat66Entries;
  }

  // static_nat_entries - computed: true, optional: false, required: false
  private _staticNatEntries = new DataSdwanCiscoVpnInterfaceFeatureTemplateStaticNatEntriesList(this, "static_nat_entries", false);
  public get staticNatEntries() {
    return this._staticNatEntries;
  }

  // static_port_forward_entries - computed: true, optional: false, required: false
  private _staticPortForwardEntries = new DataSdwanCiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesList(this, "static_port_forward_entries", false);
  public get staticPortForwardEntries() {
    return this._staticPortForwardEntries;
  }

  // static_sgt - computed: true, optional: false, required: false
  public get staticSgt() {
    return this.getNumberAttribute('static_sgt');
  }

  // static_sgt_trusted - computed: true, optional: false, required: false
  public get staticSgtTrusted() {
    return this.getBooleanAttribute('static_sgt_trusted');
  }

  // static_sgt_variable - computed: true, optional: false, required: false
  public get staticSgtVariable() {
    return this.getStringAttribute('static_sgt_variable');
  }

  // tcp_mss_adjust - computed: true, optional: false, required: false
  public get tcpMssAdjust() {
    return this.getNumberAttribute('tcp_mss_adjust');
  }

  // tcp_mss_adjust_variable - computed: true, optional: false, required: false
  public get tcpMssAdjustVariable() {
    return this.getStringAttribute('tcp_mss_adjust_variable');
  }

  // tcp_timeout - computed: true, optional: false, required: false
  public get tcpTimeout() {
    return this.getNumberAttribute('tcp_timeout');
  }

  // tcp_timeout_variable - computed: true, optional: false, required: false
  public get tcpTimeoutVariable() {
    return this.getStringAttribute('tcp_timeout_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tloc_extension - computed: true, optional: false, required: false
  public get tlocExtension() {
    return this.getStringAttribute('tloc_extension');
  }

  // tloc_extension_variable - computed: true, optional: false, required: false
  public get tlocExtensionVariable() {
    return this.getStringAttribute('tloc_extension_variable');
  }

  // tracker - computed: true, optional: false, required: false
  public get tracker() {
    return cdktf.Fn.tolist(this.getListAttribute('tracker'));
  }

  // tracker_variable - computed: true, optional: false, required: false
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }

  // tunnel_bandwidth - computed: true, optional: false, required: false
  public get tunnelBandwidth() {
    return this.getNumberAttribute('tunnel_bandwidth');
  }

  // tunnel_bandwidth_variable - computed: true, optional: false, required: false
  public get tunnelBandwidthVariable() {
    return this.getStringAttribute('tunnel_bandwidth_variable');
  }

  // tunnel_interface_allow_all - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowAll() {
    return this.getBooleanAttribute('tunnel_interface_allow_all');
  }

  // tunnel_interface_allow_all_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowAllVariable() {
    return this.getStringAttribute('tunnel_interface_allow_all_variable');
  }

  // tunnel_interface_allow_bgp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowBgp() {
    return this.getBooleanAttribute('tunnel_interface_allow_bgp');
  }

  // tunnel_interface_allow_bgp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowBgpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_bgp_variable');
  }

  // tunnel_interface_allow_dhcp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDhcp() {
    return this.getBooleanAttribute('tunnel_interface_allow_dhcp');
  }

  // tunnel_interface_allow_dhcp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDhcpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_dhcp_variable');
  }

  // tunnel_interface_allow_dns - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDns() {
    return this.getBooleanAttribute('tunnel_interface_allow_dns');
  }

  // tunnel_interface_allow_dns_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDnsVariable() {
    return this.getStringAttribute('tunnel_interface_allow_dns_variable');
  }

  // tunnel_interface_allow_https - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowHttps() {
    return this.getBooleanAttribute('tunnel_interface_allow_https');
  }

  // tunnel_interface_allow_https_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowHttpsVariable() {
    return this.getStringAttribute('tunnel_interface_allow_https_variable');
  }

  // tunnel_interface_allow_icmp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowIcmp() {
    return this.getBooleanAttribute('tunnel_interface_allow_icmp');
  }

  // tunnel_interface_allow_icmp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowIcmpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_icmp_variable');
  }

  // tunnel_interface_allow_netconf - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNetconf() {
    return this.getBooleanAttribute('tunnel_interface_allow_netconf');
  }

  // tunnel_interface_allow_netconf_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNetconfVariable() {
    return this.getStringAttribute('tunnel_interface_allow_netconf_variable');
  }

  // tunnel_interface_allow_ntp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNtp() {
    return this.getBooleanAttribute('tunnel_interface_allow_ntp');
  }

  // tunnel_interface_allow_ntp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNtpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ntp_variable');
  }

  // tunnel_interface_allow_ospf - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowOspf() {
    return this.getBooleanAttribute('tunnel_interface_allow_ospf');
  }

  // tunnel_interface_allow_ospf_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowOspfVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ospf_variable');
  }

  // tunnel_interface_allow_snmp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSnmp() {
    return this.getBooleanAttribute('tunnel_interface_allow_snmp');
  }

  // tunnel_interface_allow_snmp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSnmpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_snmp_variable');
  }

  // tunnel_interface_allow_ssh - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSsh() {
    return this.getBooleanAttribute('tunnel_interface_allow_ssh');
  }

  // tunnel_interface_allow_ssh_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSshVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ssh_variable');
  }

  // tunnel_interface_allow_stun - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowStun() {
    return this.getBooleanAttribute('tunnel_interface_allow_stun');
  }

  // tunnel_interface_allow_stun_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowStunVariable() {
    return this.getStringAttribute('tunnel_interface_allow_stun_variable');
  }

  // tunnel_interface_bind_loopback_tunnel - computed: true, optional: false, required: false
  public get tunnelInterfaceBindLoopbackTunnel() {
    return this.getStringAttribute('tunnel_interface_bind_loopback_tunnel');
  }

  // tunnel_interface_bind_loopback_tunnel_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceBindLoopbackTunnelVariable() {
    return this.getStringAttribute('tunnel_interface_bind_loopback_tunnel_variable');
  }

  // tunnel_interface_border - computed: true, optional: false, required: false
  public get tunnelInterfaceBorder() {
    return this.getBooleanAttribute('tunnel_interface_border');
  }

  // tunnel_interface_border_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceBorderVariable() {
    return this.getStringAttribute('tunnel_interface_border_variable');
  }

  // tunnel_interface_carrier - computed: true, optional: false, required: false
  public get tunnelInterfaceCarrier() {
    return this.getStringAttribute('tunnel_interface_carrier');
  }

  // tunnel_interface_carrier_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceCarrierVariable() {
    return this.getStringAttribute('tunnel_interface_carrier_variable');
  }

  // tunnel_interface_clear_dont_fragment - computed: true, optional: false, required: false
  public get tunnelInterfaceClearDontFragment() {
    return this.getBooleanAttribute('tunnel_interface_clear_dont_fragment');
  }

  // tunnel_interface_clear_dont_fragment_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceClearDontFragmentVariable() {
    return this.getStringAttribute('tunnel_interface_clear_dont_fragment_variable');
  }

  // tunnel_interface_color - computed: true, optional: false, required: false
  public get tunnelInterfaceColor() {
    return this.getStringAttribute('tunnel_interface_color');
  }

  // tunnel_interface_color_restrict - computed: true, optional: false, required: false
  public get tunnelInterfaceColorRestrict() {
    return this.getBooleanAttribute('tunnel_interface_color_restrict');
  }

  // tunnel_interface_color_restrict_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceColorRestrictVariable() {
    return this.getStringAttribute('tunnel_interface_color_restrict_variable');
  }

  // tunnel_interface_color_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceColorVariable() {
    return this.getStringAttribute('tunnel_interface_color_variable');
  }

  // tunnel_interface_control_connections - computed: true, optional: false, required: false
  public get tunnelInterfaceControlConnections() {
    return this.getBooleanAttribute('tunnel_interface_control_connections');
  }

  // tunnel_interface_control_connections_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceControlConnectionsVariable() {
    return this.getStringAttribute('tunnel_interface_control_connections_variable');
  }

  // tunnel_interface_encapsulations - computed: true, optional: false, required: false
  private _tunnelInterfaceEncapsulations = new DataSdwanCiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }

  // tunnel_interface_exclude_controller_group_list - computed: true, optional: false, required: false
  public get tunnelInterfaceExcludeControllerGroupList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel_interface_exclude_controller_group_list')));
  }

  // tunnel_interface_exclude_controller_group_list_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceExcludeControllerGroupListVariable() {
    return this.getStringAttribute('tunnel_interface_exclude_controller_group_list_variable');
  }

  // tunnel_interface_gre_tunnel_destination_ip - computed: true, optional: false, required: false
  public get tunnelInterfaceGreTunnelDestinationIp() {
    return this.getStringAttribute('tunnel_interface_gre_tunnel_destination_ip');
  }

  // tunnel_interface_gre_tunnel_destination_ip_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceGreTunnelDestinationIpVariable() {
    return this.getStringAttribute('tunnel_interface_gre_tunnel_destination_ip_variable');
  }

  // tunnel_interface_groups - computed: true, optional: false, required: false
  public get tunnelInterfaceGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel_interface_groups')));
  }

  // tunnel_interface_groups_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceGroupsVariable() {
    return this.getStringAttribute('tunnel_interface_groups_variable');
  }

  // tunnel_interface_hello_interval - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloInterval() {
    return this.getNumberAttribute('tunnel_interface_hello_interval');
  }

  // tunnel_interface_hello_interval_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloIntervalVariable() {
    return this.getStringAttribute('tunnel_interface_hello_interval_variable');
  }

  // tunnel_interface_hello_tolerance - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloTolerance() {
    return this.getNumberAttribute('tunnel_interface_hello_tolerance');
  }

  // tunnel_interface_hello_tolerance_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloToleranceVariable() {
    return this.getStringAttribute('tunnel_interface_hello_tolerance_variable');
  }

  // tunnel_interface_last_resort_circuit - computed: true, optional: false, required: false
  public get tunnelInterfaceLastResortCircuit() {
    return this.getBooleanAttribute('tunnel_interface_last_resort_circuit');
  }

  // tunnel_interface_last_resort_circuit_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceLastResortCircuitVariable() {
    return this.getStringAttribute('tunnel_interface_last_resort_circuit_variable');
  }

  // tunnel_interface_low_bandwidth_link - computed: true, optional: false, required: false
  public get tunnelInterfaceLowBandwidthLink() {
    return this.getBooleanAttribute('tunnel_interface_low_bandwidth_link');
  }

  // tunnel_interface_low_bandwidth_link_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceLowBandwidthLinkVariable() {
    return this.getStringAttribute('tunnel_interface_low_bandwidth_link_variable');
  }

  // tunnel_interface_max_control_connections - computed: true, optional: false, required: false
  public get tunnelInterfaceMaxControlConnections() {
    return this.getNumberAttribute('tunnel_interface_max_control_connections');
  }

  // tunnel_interface_max_control_connections_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceMaxControlConnectionsVariable() {
    return this.getStringAttribute('tunnel_interface_max_control_connections_variable');
  }

  // tunnel_interface_nat_refresh_interval - computed: true, optional: false, required: false
  public get tunnelInterfaceNatRefreshInterval() {
    return this.getNumberAttribute('tunnel_interface_nat_refresh_interval');
  }

  // tunnel_interface_nat_refresh_interval_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceNatRefreshIntervalVariable() {
    return this.getStringAttribute('tunnel_interface_nat_refresh_interval_variable');
  }

  // tunnel_interface_network_broadcast - computed: true, optional: false, required: false
  public get tunnelInterfaceNetworkBroadcast() {
    return this.getBooleanAttribute('tunnel_interface_network_broadcast');
  }

  // tunnel_interface_network_broadcast_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceNetworkBroadcastVariable() {
    return this.getStringAttribute('tunnel_interface_network_broadcast_variable');
  }

  // tunnel_interface_port_hop - computed: true, optional: false, required: false
  public get tunnelInterfacePortHop() {
    return this.getBooleanAttribute('tunnel_interface_port_hop');
  }

  // tunnel_interface_port_hop_variable - computed: true, optional: false, required: false
  public get tunnelInterfacePortHopVariable() {
    return this.getStringAttribute('tunnel_interface_port_hop_variable');
  }

  // tunnel_interface_propagate_sgt - computed: true, optional: false, required: false
  public get tunnelInterfacePropagateSgt() {
    return this.getBooleanAttribute('tunnel_interface_propagate_sgt');
  }

  // tunnel_interface_propagate_sgt_variable - computed: true, optional: false, required: false
  public get tunnelInterfacePropagateSgtVariable() {
    return this.getStringAttribute('tunnel_interface_propagate_sgt_variable');
  }

  // tunnel_interface_tunnel_tcp_mss - computed: true, optional: false, required: false
  public get tunnelInterfaceTunnelTcpMss() {
    return this.getNumberAttribute('tunnel_interface_tunnel_tcp_mss');
  }

  // tunnel_interface_tunnel_tcp_mss_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceTunnelTcpMssVariable() {
    return this.getStringAttribute('tunnel_interface_tunnel_tcp_mss_variable');
  }

  // tunnel_interface_vbond_as_stun_server - computed: true, optional: false, required: false
  public get tunnelInterfaceVbondAsStunServer() {
    return this.getBooleanAttribute('tunnel_interface_vbond_as_stun_server');
  }

  // tunnel_interface_vbond_as_stun_server_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceVbondAsStunServerVariable() {
    return this.getStringAttribute('tunnel_interface_vbond_as_stun_server_variable');
  }

  // tunnel_interface_vmanage_connection_preference - computed: true, optional: false, required: false
  public get tunnelInterfaceVmanageConnectionPreference() {
    return this.getNumberAttribute('tunnel_interface_vmanage_connection_preference');
  }

  // tunnel_interface_vmanage_connection_preference_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceVmanageConnectionPreferenceVariable() {
    return this.getStringAttribute('tunnel_interface_vmanage_connection_preference_variable');
  }

  // tunnel_qos_mode - computed: true, optional: false, required: false
  public get tunnelQosMode() {
    return this.getStringAttribute('tunnel_qos_mode');
  }

  // tunnel_qos_mode_variable - computed: true, optional: false, required: false
  public get tunnelQosModeVariable() {
    return this.getStringAttribute('tunnel_qos_mode_variable');
  }

  // udp_timeout - computed: true, optional: false, required: false
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }

  // udp_timeout_variable - computed: true, optional: false, required: false
  public get udpTimeoutVariable() {
    return this.getStringAttribute('udp_timeout_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
