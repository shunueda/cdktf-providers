// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_svi_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanVpnInterfaceSviFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_svi_feature_template#id DataSdwanVpnInterfaceSviFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_svi_feature_template#name DataSdwanVpnInterfaceSviFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessLists {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessListsToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessListsToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessLists | undefined) {
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

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessListsOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjects | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
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
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv4Vrrps {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv4Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv4Vrrps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv4Vrrps | undefined) {
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // ipv4_secondary_addresses - computed: true, optional: false, required: false
  private _ipv4SecondaryAddresses = new DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
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

  // tracking_objects - computed: true, optional: false, required: false
  private _trackingObjects = new DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsTrackingObjectsList(this, "tracking_objects", false);
  public get trackingObjects() {
    return this._trackingObjects;
  }
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessLists {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessListsToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessListsToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessLists | undefined) {
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

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessListsOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpers {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpersToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpersToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpers | undefined) {
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

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpersOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_address_variable - computed: true, optional: false, required: false
  public get ipv6AddressVariable() {
    return this.getStringAttribute('ipv6_address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // link_local_address - computed: true, optional: false, required: false
  public get linkLocalAddress() {
    return this.getStringAttribute('link_local_address');
  }

  // link_local_address_variable - computed: true, optional: false, required: false
  public get linkLocalAddressVariable() {
    return this.getStringAttribute('link_local_address_variable');
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

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddresses | undefined) {
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

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateIpv6Vrrps {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateIpv6Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateIpv6Vrrps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateIpv6Vrrps | undefined) {
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
  private _ipv6Addresses = new DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // ipv6_secondary_addresses - computed: true, optional: false, required: false
  private _ipv6SecondaryAddresses = new DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
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

export class DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplatePolicers {
}

export function dataSdwanVpnInterfaceSviFeatureTemplatePolicersToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplatePolicers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplatePolicersToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplatePolicers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplatePolicersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplatePolicers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplatePolicers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // policer_name - computed: true, optional: false, required: false
  public get policerName() {
    return this.getStringAttribute('policer_name');
  }
}

export class DataSdwanVpnInterfaceSviFeatureTemplatePolicersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplatePolicersOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplatePolicersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntries {
}

export function dataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntriesToTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntriesToHclTerraform(struct?: DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mac_address_variable - computed: true, optional: false, required: false
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntriesOutputReference {
    return new DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_svi_feature_template sdwan_vpn_interface_svi_feature_template}
*/
export class DataSdwanVpnInterfaceSviFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_interface_svi_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanVpnInterfaceSviFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanVpnInterfaceSviFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanVpnInterfaceSviFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_svi_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanVpnInterfaceSviFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_interface_svi_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_svi_feature_template sdwan_vpn_interface_svi_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanVpnInterfaceSviFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanVpnInterfaceSviFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_interface_svi_feature_template',
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

  // arp_timeout - computed: true, optional: false, required: false
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }

  // arp_timeout_variable - computed: true, optional: false, required: false
  public get arpTimeoutVariable() {
    return this.getStringAttribute('arp_timeout_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // if_name_variable - computed: true, optional: false, required: false
  public get ifNameVariable() {
    return this.getStringAttribute('if_name_variable');
  }

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // interface_description_variable - computed: true, optional: false, required: false
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
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

  // ipv4_access_lists - computed: true, optional: false, required: false
  private _ipv4AccessLists = new DataSdwanVpnInterfaceSviFeatureTemplateIpv4AccessListsList(this, "ipv4_access_lists", false);
  public get ipv4AccessLists() {
    return this._ipv4AccessLists;
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
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
  private _ipv4SecondaryAddresses = new DataSdwanVpnInterfaceSviFeatureTemplateIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }

  // ipv4_vrrps - computed: true, optional: false, required: false
  private _ipv4Vrrps = new DataSdwanVpnInterfaceSviFeatureTemplateIpv4VrrpsList(this, "ipv4_vrrps", false);
  public get ipv4Vrrps() {
    return this._ipv4Vrrps;
  }

  // ipv6_access_lists - computed: true, optional: false, required: false
  private _ipv6AccessLists = new DataSdwanVpnInterfaceSviFeatureTemplateIpv6AccessListsList(this, "ipv6_access_lists", false);
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

  // ipv6_dhcp_client - computed: true, optional: false, required: false
  public get ipv6DhcpClient() {
    return this.getBooleanAttribute('ipv6_dhcp_client');
  }

  // ipv6_dhcp_client_variable - computed: true, optional: false, required: false
  public get ipv6DhcpClientVariable() {
    return this.getStringAttribute('ipv6_dhcp_client_variable');
  }

  // ipv6_dhcp_distance - computed: true, optional: false, required: false
  public get ipv6DhcpDistance() {
    return this.getNumberAttribute('ipv6_dhcp_distance');
  }

  // ipv6_dhcp_distance_variable - computed: true, optional: false, required: false
  public get ipv6DhcpDistanceVariable() {
    return this.getStringAttribute('ipv6_dhcp_distance_variable');
  }

  // ipv6_dhcp_helpers - computed: true, optional: false, required: false
  private _ipv6DhcpHelpers = new DataSdwanVpnInterfaceSviFeatureTemplateIpv6DhcpHelpersList(this, "ipv6_dhcp_helpers", false);
  public get ipv6DhcpHelpers() {
    return this._ipv6DhcpHelpers;
  }

  // ipv6_dhcp_rapid_commit - computed: true, optional: false, required: false
  public get ipv6DhcpRapidCommit() {
    return this.getBooleanAttribute('ipv6_dhcp_rapid_commit');
  }

  // ipv6_dhcp_rapid_commit_variable - computed: true, optional: false, required: false
  public get ipv6DhcpRapidCommitVariable() {
    return this.getStringAttribute('ipv6_dhcp_rapid_commit_variable');
  }

  // ipv6_secondary_addresses - computed: true, optional: false, required: false
  private _ipv6SecondaryAddresses = new DataSdwanVpnInterfaceSviFeatureTemplateIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }

  // ipv6_vrrps - computed: true, optional: false, required: false
  private _ipv6Vrrps = new DataSdwanVpnInterfaceSviFeatureTemplateIpv6VrrpsList(this, "ipv6_vrrps", false);
  public get ipv6Vrrps() {
    return this._ipv6Vrrps;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // mtu_variable - computed: true, optional: false, required: false
  public get mtuVariable() {
    return this.getStringAttribute('mtu_variable');
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

  // policers - computed: true, optional: false, required: false
  private _policers = new DataSdwanVpnInterfaceSviFeatureTemplatePolicersList(this, "policers", false);
  public get policers() {
    return this._policers;
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // static_arp_entries - computed: true, optional: false, required: false
  private _staticArpEntries = new DataSdwanVpnInterfaceSviFeatureTemplateStaticArpEntriesList(this, "static_arp_entries", false);
  public get staticArpEntries() {
    return this._staticArpEntries;
  }

  // tcp_mss_adjust - computed: true, optional: false, required: false
  public get tcpMssAdjust() {
    return this.getNumberAttribute('tcp_mss_adjust');
  }

  // tcp_mss_adjust_variable - computed: true, optional: false, required: false
  public get tcpMssAdjustVariable() {
    return this.getStringAttribute('tcp_mss_adjust_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
