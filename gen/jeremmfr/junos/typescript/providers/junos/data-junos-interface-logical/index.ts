// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosInterfaceLogicalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the interface part for search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical#config_interface DataJunosInterfaceLogical#config_interface}
  */
  readonly configInterface?: string;
  /**
  * Regex string to filter lines and find only one interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical#match DataJunosInterfaceLogical#match}
  */
  readonly match?: string;
}
export interface DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface {
}

export function dataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceToTerraform(struct?: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // priority_cost - computed: true, optional: false, required: false
  public get priorityCost() {
    return this.getStringAttribute('priority_cost');
  }
}

export class DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceOutputReference {
    return new DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute {
}

export function dataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteToTerraform(struct?: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority_cost - computed: true, optional: false, required: false
  public get priorityCost() {
    return this.getStringAttribute('priority_cost');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // routing_instance - computed: true, optional: false, required: false
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
}

export class DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteOutputReference {
    return new DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfaceLogicalFamilyInetAddressVrrpGroup {
}

export function dataJunosInterfaceLogicalFamilyInetAddressVrrpGroupToTerraform(struct?: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInetAddressVrrpGroupToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfaceLogicalFamilyInetAddressVrrpGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInetAddressVrrpGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_data - computed: true, optional: false, required: false
  public get acceptData() {
    return this.getBooleanAttribute('accept_data');
  }

  // advertise_interval - computed: true, optional: false, required: false
  public get advertiseInterval() {
    return this.getNumberAttribute('advertise_interval');
  }

  // advertisements_threshold - computed: true, optional: false, required: false
  public get advertisementsThreshold() {
    return this.getNumberAttribute('advertisements_threshold');
  }

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }

  // no_accept_data - computed: true, optional: false, required: false
  public get noAcceptData() {
    return this.getBooleanAttribute('no_accept_data');
  }

  // no_preempt - computed: true, optional: false, required: false
  public get noPreempt() {
    return this.getBooleanAttribute('no_preempt');
  }

  // preempt - computed: true, optional: false, required: false
  public get preempt() {
    return this.getBooleanAttribute('preempt');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // track_interface - computed: true, optional: false, required: false
  private _trackInterface = new DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackInterfaceList(this, "track_interface", false);
  public get trackInterface() {
    return this._trackInterface;
  }

  // track_route - computed: true, optional: false, required: false
  private _trackRoute = new DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupTrackRouteList(this, "track_route", false);
  public get trackRoute() {
    return this._trackRoute;
  }

  // virtual_address - computed: true, optional: false, required: false
  public get virtualAddress() {
    return this.getListAttribute('virtual_address');
  }
}

export class DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupOutputReference {
    return new DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfaceLogicalFamilyInetAddress {
}

export function dataJunosInterfaceLogicalFamilyInetAddressToTerraform(struct?: DataJunosInterfaceLogicalFamilyInetAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInetAddressToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInetAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInetAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfaceLogicalFamilyInetAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInetAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_ip - computed: true, optional: false, required: false
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }

  // preferred - computed: true, optional: false, required: false
  public get preferred() {
    return this.getBooleanAttribute('preferred');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // virtual_gateway_address - computed: true, optional: false, required: false
  public get virtualGatewayAddress() {
    return this.getStringAttribute('virtual_gateway_address');
  }

  // vrrp_group - computed: true, optional: false, required: false
  private _vrrpGroup = new DataJunosInterfaceLogicalFamilyInetAddressVrrpGroupList(this, "vrrp_group", false);
  public get vrrpGroup() {
    return this._vrrpGroup;
  }
}

export class DataJunosInterfaceLogicalFamilyInetAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfaceLogicalFamilyInetAddressOutputReference {
    return new DataJunosInterfaceLogicalFamilyInetAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfaceLogicalFamilyInetDhcp {
}

export function dataJunosInterfaceLogicalFamilyInetDhcpToTerraform(struct?: DataJunosInterfaceLogicalFamilyInetDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInetDhcpToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInetDhcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInetDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalFamilyInetDhcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInetDhcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_identifier_ascii - computed: true, optional: false, required: false
  public get clientIdentifierAscii() {
    return this.getStringAttribute('client_identifier_ascii');
  }

  // client_identifier_hexadecimal - computed: true, optional: false, required: false
  public get clientIdentifierHexadecimal() {
    return this.getStringAttribute('client_identifier_hexadecimal');
  }

  // client_identifier_prefix_hostname - computed: true, optional: false, required: false
  public get clientIdentifierPrefixHostname() {
    return this.getBooleanAttribute('client_identifier_prefix_hostname');
  }

  // client_identifier_prefix_routing_instance_name - computed: true, optional: false, required: false
  public get clientIdentifierPrefixRoutingInstanceName() {
    return this.getBooleanAttribute('client_identifier_prefix_routing_instance_name');
  }

  // client_identifier_use_interface_description - computed: true, optional: false, required: false
  public get clientIdentifierUseInterfaceDescription() {
    return this.getStringAttribute('client_identifier_use_interface_description');
  }

  // client_identifier_userid_ascii - computed: true, optional: false, required: false
  public get clientIdentifierUseridAscii() {
    return this.getStringAttribute('client_identifier_userid_ascii');
  }

  // client_identifier_userid_hexadecimal - computed: true, optional: false, required: false
  public get clientIdentifierUseridHexadecimal() {
    return this.getStringAttribute('client_identifier_userid_hexadecimal');
  }

  // force_discover - computed: true, optional: false, required: false
  public get forceDiscover() {
    return this.getBooleanAttribute('force_discover');
  }

  // lease_time - computed: true, optional: false, required: false
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }

  // lease_time_infinite - computed: true, optional: false, required: false
  public get leaseTimeInfinite() {
    return this.getBooleanAttribute('lease_time_infinite');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // no_dns_install - computed: true, optional: false, required: false
  public get noDnsInstall() {
    return this.getBooleanAttribute('no_dns_install');
  }

  // options_no_hostname - computed: true, optional: false, required: false
  public get optionsNoHostname() {
    return this.getBooleanAttribute('options_no_hostname');
  }

  // retransmission_attempt - computed: true, optional: false, required: false
  public get retransmissionAttempt() {
    return this.getNumberAttribute('retransmission_attempt');
  }

  // retransmission_interval - computed: true, optional: false, required: false
  public get retransmissionInterval() {
    return this.getNumberAttribute('retransmission_interval');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // srx_old_option_name - computed: true, optional: false, required: false
  public get srxOldOptionName() {
    return this.getBooleanAttribute('srx_old_option_name');
  }

  // update_server - computed: true, optional: false, required: false
  public get updateServer() {
    return this.getBooleanAttribute('update_server');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
}
export interface DataJunosInterfaceLogicalFamilyInetRpfCheck {
}

export function dataJunosInterfaceLogicalFamilyInetRpfCheckToTerraform(struct?: DataJunosInterfaceLogicalFamilyInetRpfCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInetRpfCheckToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInetRpfCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInetRpfCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalFamilyInetRpfCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInetRpfCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_filter - computed: true, optional: false, required: false
  public get failFilter() {
    return this.getStringAttribute('fail_filter');
  }

  // mode_loose - computed: true, optional: false, required: false
  public get modeLoose() {
    return this.getBooleanAttribute('mode_loose');
  }
}
export interface DataJunosInterfaceLogicalFamilyInet {
}

export function dataJunosInterfaceLogicalFamilyInetToTerraform(struct?: DataJunosInterfaceLogicalFamilyInet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInetToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalFamilyInet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataJunosInterfaceLogicalFamilyInetAddressList(this, "address", false);
  public get address() {
    return this._address;
  }

  // dhcp - computed: true, optional: false, required: false
  private _dhcp = new DataJunosInterfaceLogicalFamilyInetDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }

  // filter_input - computed: true, optional: false, required: false
  public get filterInput() {
    return this.getStringAttribute('filter_input');
  }

  // filter_output - computed: true, optional: false, required: false
  public get filterOutput() {
    return this.getStringAttribute('filter_output');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // rpf_check - computed: true, optional: false, required: false
  private _rpfCheck = new DataJunosInterfaceLogicalFamilyInetRpfCheckOutputReference(this, "rpf_check");
  public get rpfCheck() {
    return this._rpfCheck;
  }

  // sampling_input - computed: true, optional: false, required: false
  public get samplingInput() {
    return this.getBooleanAttribute('sampling_input');
  }

  // sampling_output - computed: true, optional: false, required: false
  public get samplingOutput() {
    return this.getBooleanAttribute('sampling_output');
  }
}
export interface DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface {
}

export function dataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceToTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // priority_cost - computed: true, optional: false, required: false
  public get priorityCost() {
    return this.getStringAttribute('priority_cost');
  }
}

export class DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceOutputReference {
    return new DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute {
}

export function dataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteToTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority_cost - computed: true, optional: false, required: false
  public get priorityCost() {
    return this.getStringAttribute('priority_cost');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // routing_instance - computed: true, optional: false, required: false
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
}

export class DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteOutputReference {
    return new DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroup {
}

export function dataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupToTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_data - computed: true, optional: false, required: false
  public get acceptData() {
    return this.getBooleanAttribute('accept_data');
  }

  // advertise_interval - computed: true, optional: false, required: false
  public get advertiseInterval() {
    return this.getNumberAttribute('advertise_interval');
  }

  // advertisements_threshold - computed: true, optional: false, required: false
  public get advertisementsThreshold() {
    return this.getNumberAttribute('advertisements_threshold');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }

  // no_accept_data - computed: true, optional: false, required: false
  public get noAcceptData() {
    return this.getBooleanAttribute('no_accept_data');
  }

  // no_preempt - computed: true, optional: false, required: false
  public get noPreempt() {
    return this.getBooleanAttribute('no_preempt');
  }

  // preempt - computed: true, optional: false, required: false
  public get preempt() {
    return this.getBooleanAttribute('preempt');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // track_interface - computed: true, optional: false, required: false
  private _trackInterface = new DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackInterfaceList(this, "track_interface", false);
  public get trackInterface() {
    return this._trackInterface;
  }

  // track_route - computed: true, optional: false, required: false
  private _trackRoute = new DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupTrackRouteList(this, "track_route", false);
  public get trackRoute() {
    return this._trackRoute;
  }

  // virtual_address - computed: true, optional: false, required: false
  public get virtualAddress() {
    return this.getListAttribute('virtual_address');
  }

  // virtual_link_local_address - computed: true, optional: false, required: false
  public get virtualLinkLocalAddress() {
    return this.getStringAttribute('virtual_link_local_address');
  }
}

export class DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupOutputReference {
    return new DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfaceLogicalFamilyInet6Address {
}

export function dataJunosInterfaceLogicalFamilyInet6AddressToTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInet6AddressToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInet6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosInterfaceLogicalFamilyInet6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInet6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_ip - computed: true, optional: false, required: false
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }

  // preferred - computed: true, optional: false, required: false
  public get preferred() {
    return this.getBooleanAttribute('preferred');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // virtual_gateway_address - computed: true, optional: false, required: false
  public get virtualGatewayAddress() {
    return this.getStringAttribute('virtual_gateway_address');
  }

  // vrrp_group - computed: true, optional: false, required: false
  private _vrrpGroup = new DataJunosInterfaceLogicalFamilyInet6AddressVrrpGroupList(this, "vrrp_group", false);
  public get vrrpGroup() {
    return this._vrrpGroup;
  }
}

export class DataJunosInterfaceLogicalFamilyInet6AddressList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosInterfaceLogicalFamilyInet6AddressOutputReference {
    return new DataJunosInterfaceLogicalFamilyInet6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataJunosInterfaceLogicalFamilyInet6Dhcpv6Client {
}

export function dataJunosInterfaceLogicalFamilyInet6Dhcpv6ClientToTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6Dhcpv6Client): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInet6Dhcpv6ClientToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6Dhcpv6Client): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInet6Dhcpv6ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalFamilyInet6Dhcpv6Client | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInet6Dhcpv6Client | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ia_type_na - computed: true, optional: false, required: false
  public get clientIaTypeNa() {
    return this.getBooleanAttribute('client_ia_type_na');
  }

  // client_ia_type_pd - computed: true, optional: false, required: false
  public get clientIaTypePd() {
    return this.getBooleanAttribute('client_ia_type_pd');
  }

  // client_identifier_duid_type - computed: true, optional: false, required: false
  public get clientIdentifierDuidType() {
    return this.getStringAttribute('client_identifier_duid_type');
  }

  // client_type - computed: true, optional: false, required: false
  public get clientType() {
    return this.getStringAttribute('client_type');
  }

  // no_dns_install - computed: true, optional: false, required: false
  public get noDnsInstall() {
    return this.getBooleanAttribute('no_dns_install');
  }

  // prefix_delegating_preferred_prefix_length - computed: true, optional: false, required: false
  public get prefixDelegatingPreferredPrefixLength() {
    return this.getNumberAttribute('prefix_delegating_preferred_prefix_length');
  }

  // prefix_delegating_sub_prefix_length - computed: true, optional: false, required: false
  public get prefixDelegatingSubPrefixLength() {
    return this.getNumberAttribute('prefix_delegating_sub_prefix_length');
  }

  // rapid_commit - computed: true, optional: false, required: false
  public get rapidCommit() {
    return this.getBooleanAttribute('rapid_commit');
  }

  // req_option - computed: true, optional: false, required: false
  public get reqOption() {
    return this.getListAttribute('req_option');
  }

  // retransmission_attempt - computed: true, optional: false, required: false
  public get retransmissionAttempt() {
    return this.getNumberAttribute('retransmission_attempt');
  }

  // update_router_advertisement_interface - computed: true, optional: false, required: false
  public get updateRouterAdvertisementInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('update_router_advertisement_interface'));
  }

  // update_server - computed: true, optional: false, required: false
  public get updateServer() {
    return this.getBooleanAttribute('update_server');
  }
}
export interface DataJunosInterfaceLogicalFamilyInet6RpfCheck {
}

export function dataJunosInterfaceLogicalFamilyInet6RpfCheckToTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6RpfCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInet6RpfCheckToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6RpfCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInet6RpfCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalFamilyInet6RpfCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInet6RpfCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_filter - computed: true, optional: false, required: false
  public get failFilter() {
    return this.getStringAttribute('fail_filter');
  }

  // mode_loose - computed: true, optional: false, required: false
  public get modeLoose() {
    return this.getBooleanAttribute('mode_loose');
  }
}
export interface DataJunosInterfaceLogicalFamilyInet6 {
}

export function dataJunosInterfaceLogicalFamilyInet6ToTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalFamilyInet6ToHclTerraform(struct?: DataJunosInterfaceLogicalFamilyInet6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalFamilyInet6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalFamilyInet6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalFamilyInet6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataJunosInterfaceLogicalFamilyInet6AddressList(this, "address", false);
  public get address() {
    return this._address;
  }

  // dad_disable - computed: true, optional: false, required: false
  public get dadDisable() {
    return this.getBooleanAttribute('dad_disable');
  }

  // dhcpv6_client - computed: true, optional: false, required: false
  private _dhcpv6Client = new DataJunosInterfaceLogicalFamilyInet6Dhcpv6ClientOutputReference(this, "dhcpv6_client");
  public get dhcpv6Client() {
    return this._dhcpv6Client;
  }

  // filter_input - computed: true, optional: false, required: false
  public get filterInput() {
    return this.getStringAttribute('filter_input');
  }

  // filter_output - computed: true, optional: false, required: false
  public get filterOutput() {
    return this.getStringAttribute('filter_output');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // rpf_check - computed: true, optional: false, required: false
  private _rpfCheck = new DataJunosInterfaceLogicalFamilyInet6RpfCheckOutputReference(this, "rpf_check");
  public get rpfCheck() {
    return this._rpfCheck;
  }

  // sampling_input - computed: true, optional: false, required: false
  public get samplingInput() {
    return this.getBooleanAttribute('sampling_input');
  }

  // sampling_output - computed: true, optional: false, required: false
  public get samplingOutput() {
    return this.getBooleanAttribute('sampling_output');
  }
}
export interface DataJunosInterfaceLogicalTunnel {
}

export function dataJunosInterfaceLogicalTunnelToTerraform(struct?: DataJunosInterfaceLogicalTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalTunnelToHclTerraform(struct?: DataJunosInterfaceLogicalTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_fragmentation - computed: true, optional: false, required: false
  public get allowFragmentation() {
    return this.getBooleanAttribute('allow_fragmentation');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // do_not_fragment - computed: true, optional: false, required: false
  public get doNotFragment() {
    return this.getBooleanAttribute('do_not_fragment');
  }

  // flow_label - computed: true, optional: false, required: false
  public get flowLabel() {
    return this.getNumberAttribute('flow_label');
  }

  // no_path_mtu_discovery - computed: true, optional: false, required: false
  public get noPathMtuDiscovery() {
    return this.getBooleanAttribute('no_path_mtu_discovery');
  }

  // path_mtu_discovery - computed: true, optional: false, required: false
  public get pathMtuDiscovery() {
    return this.getBooleanAttribute('path_mtu_discovery');
  }

  // routing_instance_destination - computed: true, optional: false, required: false
  public get routingInstanceDestination() {
    return this.getStringAttribute('routing_instance_destination');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // traffic_class - computed: true, optional: false, required: false
  public get trafficClass() {
    return this.getNumberAttribute('traffic_class');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical junos_interface_logical}
*/
export class DataJunosInterfaceLogical extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_interface_logical";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosInterfaceLogical resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosInterfaceLogical to import
  * @param importFromId The id of the existing DataJunosInterfaceLogical that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosInterfaceLogical to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_interface_logical", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical junos_interface_logical} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosInterfaceLogicalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJunosInterfaceLogicalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_interface_logical',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configInterface = config.configInterface;
    this._match = config.match;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_interface - computed: false, optional: true, required: false
  private _configInterface?: string; 
  public get configInterface() {
    return this.getStringAttribute('config_interface');
  }
  public set configInterface(value: string) {
    this._configInterface = value;
  }
  public resetConfigInterface() {
    this._configInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInterfaceInput() {
    return this._configInterface;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // family_inet - computed: true, optional: false, required: false
  private _familyInet = new DataJunosInterfaceLogicalFamilyInetOutputReference(this, "family_inet");
  public get familyInet() {
    return this._familyInet;
  }

  // family_inet6 - computed: true, optional: false, required: false
  private _familyInet6 = new DataJunosInterfaceLogicalFamilyInet6OutputReference(this, "family_inet6");
  public get familyInet6() {
    return this._familyInet6;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // routing_instance - computed: true, optional: false, required: false
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }

  // security_inbound_protocols - computed: true, optional: false, required: false
  public get securityInboundProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('security_inbound_protocols'));
  }

  // security_inbound_services - computed: true, optional: false, required: false
  public get securityInboundServices() {
    return cdktf.Fn.tolist(this.getListAttribute('security_inbound_services'));
  }

  // security_zone - computed: true, optional: false, required: false
  public get securityZone() {
    return this.getStringAttribute('security_zone');
  }

  // tunnel - computed: true, optional: false, required: false
  private _tunnel = new DataJunosInterfaceLogicalTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }

  // virtual_gateway_accept_data - computed: true, optional: false, required: false
  public get virtualGatewayAcceptData() {
    return this.getBooleanAttribute('virtual_gateway_accept_data');
  }

  // virtual_gateway_v4_mac - computed: true, optional: false, required: false
  public get virtualGatewayV4Mac() {
    return this.getStringAttribute('virtual_gateway_v4_mac');
  }

  // virtual_gateway_v6_mac - computed: true, optional: false, required: false
  public get virtualGatewayV6Mac() {
    return this.getStringAttribute('virtual_gateway_v6_mac');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_interface: cdktf.stringToTerraform(this._configInterface),
      match: cdktf.stringToTerraform(this._match),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_interface: {
        value: cdktf.stringToHclTerraform(this._configInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
