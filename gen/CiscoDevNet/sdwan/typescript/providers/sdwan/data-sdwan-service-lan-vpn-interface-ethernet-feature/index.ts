// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_interface_ethernet_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_interface_ethernet_feature#feature_profile_id DataSdwanServiceLanVpnInterfaceEthernetFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_interface_ethernet_feature#id DataSdwanServiceLanVpnInterfaceEthernetFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Service LAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_interface_ethernet_feature#service_lan_vpn_feature_id DataSdwanServiceLanVpnInterfaceEthernetFeature#service_lan_vpn_feature_id}
  */
  readonly serviceLanVpnFeatureId: string;
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureArps {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureArpsToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureArps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureArpsToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureArps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureArpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureArps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureArps | undefined) {
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

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mac_address_variable - computed: true, optional: false, required: false
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureArpsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureArpsOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureArpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | undefined) {
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

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses | undefined) {
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

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects | undefined) {
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

  // tracker_action - computed: true, optional: false, required: false
  public get trackerAction() {
    return this.getStringAttribute('tracker_action');
  }

  // tracker_action_variable - computed: true, optional: false, required: false
  public get trackerActionVariable() {
    return this.getStringAttribute('tracker_action_variable');
  }

  // tracker_id - computed: true, optional: false, required: false
  public get trackerId() {
    return this.getStringAttribute('tracker_id');
  }
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps | undefined) {
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

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_id_variable - computed: true, optional: false, required: false
  public get groupIdVariable() {
    return this.getStringAttribute('group_id_variable');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }

  // secondary_addresses - computed: true, optional: false, required: false
  private _secondaryAddresses = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesList(this, "secondary_addresses", false);
  public get secondaryAddresses() {
    return this._secondaryAddresses;
  }

  // timer - computed: true, optional: false, required: false
  public get timer() {
    return this.getNumberAttribute('timer');
  }

  // timer_variable - computed: true, optional: false, required: false
  public get timerVariable() {
    return this.getStringAttribute('timer_variable');
  }

  // tloc_pref_change_value - computed: true, optional: false, required: false
  public get tlocPrefChangeValue() {
    return this.getNumberAttribute('tloc_pref_change_value');
  }

  // tloc_prefix_change - computed: true, optional: false, required: false
  public get tlocPrefixChange() {
    return this.getBooleanAttribute('tloc_prefix_change');
  }

  // track_omp - computed: true, optional: false, required: false
  public get trackOmp() {
    return this.getBooleanAttribute('track_omp');
  }

  // tracking_objects - computed: true, optional: false, required: false
  private _trackingObjects = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsList(this, "tracking_objects", false);
  public get trackingObjects() {
    return this._trackingObjects;
  }
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers | undefined) {
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

  // dhcpv6_helper_vpn - computed: true, optional: false, required: false
  public get dhcpv6HelperVpn() {
    return this.getNumberAttribute('dhcpv6_helper_vpn');
  }

  // dhcpv6_helper_vpn_variable - computed: true, optional: false, required: false
  public get dhcpv6HelperVpnVariable() {
    return this.getStringAttribute('dhcpv6_helper_vpn_variable');
  }
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses | undefined) {
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
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | undefined) {
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
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // global_address - computed: true, optional: false, required: false
  public get globalAddress() {
    return this.getStringAttribute('global_address');
  }

  // global_address_variable - computed: true, optional: false, required: false
  public get globalAddressVariable() {
    return this.getStringAttribute('global_address_variable');
  }

  // link_local_address - computed: true, optional: false, required: false
  public get linkLocalAddress() {
    return this.getStringAttribute('link_local_address');
  }

  // link_local_address_variable - computed: true, optional: false, required: false
  public get linkLocalAddressVariable() {
    return this.getStringAttribute('link_local_address_variable');
  }
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps | undefined) {
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
  private _ipv6Addresses = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
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
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNats {
}

export function dataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNatsToTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNatsToHclTerraform(struct?: DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNats | undefined) {
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

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // source_vpn - computed: true, optional: false, required: false
  public get sourceVpn() {
    return this.getNumberAttribute('source_vpn');
  }

  // source_vpn_variable - computed: true, optional: false, required: false
  public get sourceVpnVariable() {
    return this.getStringAttribute('source_vpn_variable');
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

export class DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNatsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNatsOutputReference {
    return new DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_interface_ethernet_feature sdwan_service_lan_vpn_interface_ethernet_feature}
*/
export class DataSdwanServiceLanVpnInterfaceEthernetFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_interface_ethernet_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanServiceLanVpnInterfaceEthernetFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanServiceLanVpnInterfaceEthernetFeature to import
  * @param importFromId The id of the existing DataSdwanServiceLanVpnInterfaceEthernetFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_interface_ethernet_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanServiceLanVpnInterfaceEthernetFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_interface_ethernet_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_interface_ethernet_feature sdwan_service_lan_vpn_interface_ethernet_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanServiceLanVpnInterfaceEthernetFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanServiceLanVpnInterfaceEthernetFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_interface_ethernet_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
    this._serviceLanVpnFeatureId = config.serviceLanVpnFeatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_ipv4_egress_policy_id - computed: true, optional: false, required: false
  public get aclIpv4EgressPolicyId() {
    return this.getStringAttribute('acl_ipv4_egress_policy_id');
  }

  // acl_ipv4_ingress_policy_id - computed: true, optional: false, required: false
  public get aclIpv4IngressPolicyId() {
    return this.getStringAttribute('acl_ipv4_ingress_policy_id');
  }

  // acl_ipv6_egress_policy_id - computed: true, optional: false, required: false
  public get aclIpv6EgressPolicyId() {
    return this.getStringAttribute('acl_ipv6_egress_policy_id');
  }

  // acl_ipv6_ingress_policy_id - computed: true, optional: false, required: false
  public get aclIpv6IngressPolicyId() {
    return this.getStringAttribute('acl_ipv6_ingress_policy_id');
  }

  // acl_shaping_rate - computed: true, optional: false, required: false
  public get aclShapingRate() {
    return this.getNumberAttribute('acl_shaping_rate');
  }

  // acl_shaping_rate_variable - computed: true, optional: false, required: false
  public get aclShapingRateVariable() {
    return this.getStringAttribute('acl_shaping_rate_variable');
  }

  // arp_timeout - computed: true, optional: false, required: false
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }

  // arp_timeout_variable - computed: true, optional: false, required: false
  public get arpTimeoutVariable() {
    return this.getStringAttribute('arp_timeout_variable');
  }

  // arps - computed: true, optional: false, required: false
  private _arps = new DataSdwanServiceLanVpnInterfaceEthernetFeatureArpsList(this, "arps", false);
  public get arps() {
    return this._arps;
  }

  // autonegotiate - computed: true, optional: false, required: false
  public get autonegotiate() {
    return this.getBooleanAttribute('autonegotiate');
  }

  // autonegotiate_variable - computed: true, optional: false, required: false
  public get autonegotiateVariable() {
    return this.getStringAttribute('autonegotiate_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duplex - computed: true, optional: false, required: false
  public get duplex() {
    return this.getStringAttribute('duplex');
  }

  // duplex_variable - computed: true, optional: false, required: false
  public get duplexVariable() {
    return this.getStringAttribute('duplex_variable');
  }

  // enable_dhcpv6 - computed: true, optional: false, required: false
  public get enableDhcpv6() {
    return this.getBooleanAttribute('enable_dhcpv6');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // icmp_redirect_disable - computed: true, optional: false, required: false
  public get icmpRedirectDisable() {
    return this.getBooleanAttribute('icmp_redirect_disable');
  }

  // icmp_redirect_disable_variable - computed: true, optional: false, required: false
  public get icmpRedirectDisableVariable() {
    return this.getStringAttribute('icmp_redirect_disable_variable');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // ipv4_configuration_type - computed: true, optional: false, required: false
  public get ipv4ConfigurationType() {
    return this.getStringAttribute('ipv4_configuration_type');
  }

  // ipv4_dhcp_distance - computed: true, optional: false, required: false
  public get ipv4DhcpDistance() {
    return this.getNumberAttribute('ipv4_dhcp_distance');
  }

  // ipv4_dhcp_distance_variable - computed: true, optional: false, required: false
  public get ipv4DhcpDistanceVariable() {
    return this.getStringAttribute('ipv4_dhcp_distance_variable');
  }

  // ipv4_dhcp_helper - computed: true, optional: false, required: false
  public get ipv4DhcpHelper() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dhcp_helper'));
  }

  // ipv4_dhcp_helper_variable - computed: true, optional: false, required: false
  public get ipv4DhcpHelperVariable() {
    return this.getStringAttribute('ipv4_dhcp_helper_variable');
  }

  // ipv4_nat - computed: true, optional: false, required: false
  public get ipv4Nat() {
    return this.getBooleanAttribute('ipv4_nat');
  }

  // ipv4_nat_loopback - computed: true, optional: false, required: false
  public get ipv4NatLoopback() {
    return this.getStringAttribute('ipv4_nat_loopback');
  }

  // ipv4_nat_loopback_variable - computed: true, optional: false, required: false
  public get ipv4NatLoopbackVariable() {
    return this.getStringAttribute('ipv4_nat_loopback_variable');
  }

  // ipv4_nat_overload - computed: true, optional: false, required: false
  public get ipv4NatOverload() {
    return this.getBooleanAttribute('ipv4_nat_overload');
  }

  // ipv4_nat_overload_variable - computed: true, optional: false, required: false
  public get ipv4NatOverloadVariable() {
    return this.getStringAttribute('ipv4_nat_overload_variable');
  }

  // ipv4_nat_prefix_length - computed: true, optional: false, required: false
  public get ipv4NatPrefixLength() {
    return this.getNumberAttribute('ipv4_nat_prefix_length');
  }

  // ipv4_nat_prefix_length_variable - computed: true, optional: false, required: false
  public get ipv4NatPrefixLengthVariable() {
    return this.getStringAttribute('ipv4_nat_prefix_length_variable');
  }

  // ipv4_nat_range_end - computed: true, optional: false, required: false
  public get ipv4NatRangeEnd() {
    return this.getStringAttribute('ipv4_nat_range_end');
  }

  // ipv4_nat_range_end_variable - computed: true, optional: false, required: false
  public get ipv4NatRangeEndVariable() {
    return this.getStringAttribute('ipv4_nat_range_end_variable');
  }

  // ipv4_nat_range_start - computed: true, optional: false, required: false
  public get ipv4NatRangeStart() {
    return this.getStringAttribute('ipv4_nat_range_start');
  }

  // ipv4_nat_range_start_variable - computed: true, optional: false, required: false
  public get ipv4NatRangeStartVariable() {
    return this.getStringAttribute('ipv4_nat_range_start_variable');
  }

  // ipv4_nat_tcp_timeout - computed: true, optional: false, required: false
  public get ipv4NatTcpTimeout() {
    return this.getNumberAttribute('ipv4_nat_tcp_timeout');
  }

  // ipv4_nat_tcp_timeout_variable - computed: true, optional: false, required: false
  public get ipv4NatTcpTimeoutVariable() {
    return this.getStringAttribute('ipv4_nat_tcp_timeout_variable');
  }

  // ipv4_nat_udp_timeout - computed: true, optional: false, required: false
  public get ipv4NatUdpTimeout() {
    return this.getNumberAttribute('ipv4_nat_udp_timeout');
  }

  // ipv4_nat_udp_timeout_variable - computed: true, optional: false, required: false
  public get ipv4NatUdpTimeoutVariable() {
    return this.getStringAttribute('ipv4_nat_udp_timeout_variable');
  }

  // ipv4_secondary_addresses - computed: true, optional: false, required: false
  private _ipv4SecondaryAddresses = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }

  // ipv4_subnet_mask - computed: true, optional: false, required: false
  public get ipv4SubnetMask() {
    return this.getStringAttribute('ipv4_subnet_mask');
  }

  // ipv4_subnet_mask_variable - computed: true, optional: false, required: false
  public get ipv4SubnetMaskVariable() {
    return this.getStringAttribute('ipv4_subnet_mask_variable');
  }

  // ipv4_vrrps - computed: true, optional: false, required: false
  private _ipv4Vrrps = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsList(this, "ipv4_vrrps", false);
  public get ipv4Vrrps() {
    return this._ipv4Vrrps;
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_address_variable - computed: true, optional: false, required: false
  public get ipv6AddressVariable() {
    return this.getStringAttribute('ipv6_address_variable');
  }

  // ipv6_configuration_type - computed: true, optional: false, required: false
  public get ipv6ConfigurationType() {
    return this.getStringAttribute('ipv6_configuration_type');
  }

  // ipv6_dhcp_helpers - computed: true, optional: false, required: false
  private _ipv6DhcpHelpers = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersList(this, "ipv6_dhcp_helpers", false);
  public get ipv6DhcpHelpers() {
    return this._ipv6DhcpHelpers;
  }

  // ipv6_dhcp_secondary_addresses - computed: true, optional: false, required: false
  private _ipv6DhcpSecondaryAddresses = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesList(this, "ipv6_dhcp_secondary_addresses", false);
  public get ipv6DhcpSecondaryAddresses() {
    return this._ipv6DhcpSecondaryAddresses;
  }

  // ipv6_nat - computed: true, optional: false, required: false
  public get ipv6Nat() {
    return this.getBooleanAttribute('ipv6_nat');
  }

  // ipv6_secondary_addresses - computed: true, optional: false, required: false
  private _ipv6SecondaryAddresses = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }

  // ipv6_vrrps - computed: true, optional: false, required: false
  private _ipv6Vrrps = new DataSdwanServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsList(this, "ipv6_vrrps", false);
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nat64 - computed: true, optional: false, required: false
  public get nat64() {
    return this.getBooleanAttribute('nat64');
  }

  // service_lan_vpn_feature_id - computed: false, optional: false, required: true
  private _serviceLanVpnFeatureId?: string; 
  public get serviceLanVpnFeatureId() {
    return this.getStringAttribute('service_lan_vpn_feature_id');
  }
  public set serviceLanVpnFeatureId(value: string) {
    this._serviceLanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLanVpnFeatureIdInput() {
    return this._serviceLanVpnFeatureId;
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

  // static_nats - computed: true, optional: false, required: false
  private _staticNats = new DataSdwanServiceLanVpnInterfaceEthernetFeatureStaticNatsList(this, "static_nats", false);
  public get staticNats() {
    return this._staticNats;
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }

  // tcp_mss_variable - computed: true, optional: false, required: false
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
  }

  // tracker - computed: true, optional: false, required: false
  public get tracker() {
    return this.getStringAttribute('tracker');
  }

  // tracker_variable - computed: true, optional: false, required: false
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }

  // trustsec_enable_enforced_propogation - computed: true, optional: false, required: false
  public get trustsecEnableEnforcedPropogation() {
    return this.getBooleanAttribute('trustsec_enable_enforced_propogation');
  }

  // trustsec_enable_sgt_propogation - computed: true, optional: false, required: false
  public get trustsecEnableSgtPropogation() {
    return this.getBooleanAttribute('trustsec_enable_sgt_propogation');
  }

  // trustsec_enforced_security_group_tag - computed: true, optional: false, required: false
  public get trustsecEnforcedSecurityGroupTag() {
    return this.getNumberAttribute('trustsec_enforced_security_group_tag');
  }

  // trustsec_enforced_security_group_tag_variable - computed: true, optional: false, required: false
  public get trustsecEnforcedSecurityGroupTagVariable() {
    return this.getStringAttribute('trustsec_enforced_security_group_tag_variable');
  }

  // trustsec_propogate - computed: true, optional: false, required: false
  public get trustsecPropogate() {
    return this.getBooleanAttribute('trustsec_propogate');
  }

  // trustsec_security_group_tag - computed: true, optional: false, required: false
  public get trustsecSecurityGroupTag() {
    return this.getNumberAttribute('trustsec_security_group_tag');
  }

  // trustsec_security_group_tag_variable - computed: true, optional: false, required: false
  public get trustsecSecurityGroupTagVariable() {
    return this.getStringAttribute('trustsec_security_group_tag_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // xconnect - computed: true, optional: false, required: false
  public get xconnect() {
    return this.getStringAttribute('xconnect');
  }

  // xconnect_variable - computed: true, optional: false, required: false
  public get xconnectVariable() {
    return this.getStringAttribute('xconnect_variable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
      service_lan_vpn_feature_id: cdktf.stringToTerraform(this._serviceLanVpnFeatureId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      service_lan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceLanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
