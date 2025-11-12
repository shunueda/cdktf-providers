// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_multicast_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanServiceMulticastFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_multicast_feature#feature_profile_id DataSdwanServiceMulticastFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_multicast_feature#id DataSdwanServiceMulticastFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanServiceMulticastFeatureAutoRpAnnounces {
}

export function dataSdwanServiceMulticastFeatureAutoRpAnnouncesToTerraform(struct?: DataSdwanServiceMulticastFeatureAutoRpAnnounces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeatureAutoRpAnnouncesToHclTerraform(struct?: DataSdwanServiceMulticastFeatureAutoRpAnnounces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeatureAutoRpAnnouncesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeatureAutoRpAnnounces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeatureAutoRpAnnounces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getNumberAttribute('scope');
  }

  // scope_variable - computed: true, optional: false, required: false
  public get scopeVariable() {
    return this.getStringAttribute('scope_variable');
  }
}

export class DataSdwanServiceMulticastFeatureAutoRpAnnouncesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeatureAutoRpAnnouncesOutputReference {
    return new DataSdwanServiceMulticastFeatureAutoRpAnnouncesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeatureAutoRpDiscoveries {
}

export function dataSdwanServiceMulticastFeatureAutoRpDiscoveriesToTerraform(struct?: DataSdwanServiceMulticastFeatureAutoRpDiscoveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeatureAutoRpDiscoveriesToHclTerraform(struct?: DataSdwanServiceMulticastFeatureAutoRpDiscoveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeatureAutoRpDiscoveriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeatureAutoRpDiscoveries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeatureAutoRpDiscoveries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getNumberAttribute('scope');
  }

  // scope_variable - computed: true, optional: false, required: false
  public get scopeVariable() {
    return this.getStringAttribute('scope_variable');
  }
}

export class DataSdwanServiceMulticastFeatureAutoRpDiscoveriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeatureAutoRpDiscoveriesOutputReference {
    return new DataSdwanServiceMulticastFeatureAutoRpDiscoveriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroups {
}

export function dataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroupsToTerraform(struct?: DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroupsToHclTerraform(struct?: DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_address - computed: true, optional: false, required: false
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }

  // group_address_variable - computed: true, optional: false, required: false
  public get groupAddressVariable() {
    return this.getStringAttribute('group_address_variable');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }

  // source_address_variable - computed: true, optional: false, required: false
  public get sourceAddressVariable() {
    return this.getStringAttribute('source_address_variable');
  }
}

export class DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroupsOutputReference {
    return new DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeatureIgmpInterfaces {
}

export function dataSdwanServiceMulticastFeatureIgmpInterfacesToTerraform(struct?: DataSdwanServiceMulticastFeatureIgmpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeatureIgmpInterfacesToHclTerraform(struct?: DataSdwanServiceMulticastFeatureIgmpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeatureIgmpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeatureIgmpInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeatureIgmpInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // join_groups - computed: true, optional: false, required: false
  private _joinGroups = new DataSdwanServiceMulticastFeatureIgmpInterfacesJoinGroupsList(this, "join_groups", false);
  public get joinGroups() {
    return this._joinGroups;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataSdwanServiceMulticastFeatureIgmpInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeatureIgmpInterfacesOutputReference {
    return new DataSdwanServiceMulticastFeatureIgmpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeatureMsdpGroupsPeers {
}

export function dataSdwanServiceMulticastFeatureMsdpGroupsPeersToTerraform(struct?: DataSdwanServiceMulticastFeatureMsdpGroupsPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeatureMsdpGroupsPeersToHclTerraform(struct?: DataSdwanServiceMulticastFeatureMsdpGroupsPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeatureMsdpGroupsPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeatureMsdpGroupsPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeatureMsdpGroupsPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_source_interface - computed: true, optional: false, required: false
  public get connectionSourceInterface() {
    return this.getStringAttribute('connection_source_interface');
  }

  // connection_source_interface_variable - computed: true, optional: false, required: false
  public get connectionSourceInterfaceVariable() {
    return this.getStringAttribute('connection_source_interface_variable');
  }

  // default_peer - computed: true, optional: false, required: false
  public get defaultPeer() {
    return this.getBooleanAttribute('default_peer');
  }

  // keepalive_hold_time - computed: true, optional: false, required: false
  public get keepaliveHoldTime() {
    return this.getNumberAttribute('keepalive_hold_time');
  }

  // keepalive_hold_time_variable - computed: true, optional: false, required: false
  public get keepaliveHoldTimeVariable() {
    return this.getStringAttribute('keepalive_hold_time_variable');
  }

  // keepalive_interval - computed: true, optional: false, required: false
  public get keepaliveInterval() {
    return this.getNumberAttribute('keepalive_interval');
  }

  // keepalive_interval_variable - computed: true, optional: false, required: false
  public get keepaliveIntervalVariable() {
    return this.getStringAttribute('keepalive_interval_variable');
  }

  // peer_authentication_password - computed: true, optional: false, required: false
  public get peerAuthenticationPassword() {
    return this.getStringAttribute('peer_authentication_password');
  }

  // peer_authentication_password_variable - computed: true, optional: false, required: false
  public get peerAuthenticationPasswordVariable() {
    return this.getStringAttribute('peer_authentication_password_variable');
  }

  // peer_ip - computed: true, optional: false, required: false
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }

  // peer_ip_variable - computed: true, optional: false, required: false
  public get peerIpVariable() {
    return this.getStringAttribute('peer_ip_variable');
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }

  // remote_as_variable - computed: true, optional: false, required: false
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }

  // sa_limit - computed: true, optional: false, required: false
  public get saLimit() {
    return this.getNumberAttribute('sa_limit');
  }

  // sa_limit_variable - computed: true, optional: false, required: false
  public get saLimitVariable() {
    return this.getStringAttribute('sa_limit_variable');
  }
}

export class DataSdwanServiceMulticastFeatureMsdpGroupsPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeatureMsdpGroupsPeersOutputReference {
    return new DataSdwanServiceMulticastFeatureMsdpGroupsPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeatureMsdpGroups {
}

export function dataSdwanServiceMulticastFeatureMsdpGroupsToTerraform(struct?: DataSdwanServiceMulticastFeatureMsdpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeatureMsdpGroupsToHclTerraform(struct?: DataSdwanServiceMulticastFeatureMsdpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeatureMsdpGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeatureMsdpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeatureMsdpGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mesh_group_name - computed: true, optional: false, required: false
  public get meshGroupName() {
    return this.getStringAttribute('mesh_group_name');
  }

  // mesh_group_name_variable - computed: true, optional: false, required: false
  public get meshGroupNameVariable() {
    return this.getStringAttribute('mesh_group_name_variable');
  }

  // peers - computed: true, optional: false, required: false
  private _peers = new DataSdwanServiceMulticastFeatureMsdpGroupsPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
}

export class DataSdwanServiceMulticastFeatureMsdpGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeatureMsdpGroupsOutputReference {
    return new DataSdwanServiceMulticastFeatureMsdpGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeaturePimBsrCandidates {
}

export function dataSdwanServiceMulticastFeaturePimBsrCandidatesToTerraform(struct?: DataSdwanServiceMulticastFeaturePimBsrCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeaturePimBsrCandidatesToHclTerraform(struct?: DataSdwanServiceMulticastFeaturePimBsrCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeaturePimBsrCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeaturePimBsrCandidates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeaturePimBsrCandidates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_candidate_access_list - computed: true, optional: false, required: false
  public get acceptCandidateAccessList() {
    return this.getStringAttribute('accept_candidate_access_list');
  }

  // accept_candidate_access_list_variable - computed: true, optional: false, required: false
  public get acceptCandidateAccessListVariable() {
    return this.getStringAttribute('accept_candidate_access_list_variable');
  }

  // hash_mask_length - computed: true, optional: false, required: false
  public get hashMaskLength() {
    return this.getNumberAttribute('hash_mask_length');
  }

  // hash_mask_length_variable - computed: true, optional: false, required: false
  public get hashMaskLengthVariable() {
    return this.getStringAttribute('hash_mask_length_variable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
}

export class DataSdwanServiceMulticastFeaturePimBsrCandidatesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeaturePimBsrCandidatesOutputReference {
    return new DataSdwanServiceMulticastFeaturePimBsrCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeaturePimBsrRpCandidates {
}

export function dataSdwanServiceMulticastFeaturePimBsrRpCandidatesToTerraform(struct?: DataSdwanServiceMulticastFeaturePimBsrRpCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeaturePimBsrRpCandidatesToHclTerraform(struct?: DataSdwanServiceMulticastFeaturePimBsrRpCandidates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeaturePimBsrRpCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeaturePimBsrRpCandidates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeaturePimBsrRpCandidates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list_id - computed: true, optional: false, required: false
  public get accessListId() {
    return this.getStringAttribute('access_list_id');
  }

  // access_list_id_variable - computed: true, optional: false, required: false
  public get accessListIdVariable() {
    return this.getStringAttribute('access_list_id_variable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_variable - computed: true, optional: false, required: false
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
}

export class DataSdwanServiceMulticastFeaturePimBsrRpCandidatesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeaturePimBsrRpCandidatesOutputReference {
    return new DataSdwanServiceMulticastFeaturePimBsrRpCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeaturePimInterfaces {
}

export function dataSdwanServiceMulticastFeaturePimInterfacesToTerraform(struct?: DataSdwanServiceMulticastFeaturePimInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeaturePimInterfacesToHclTerraform(struct?: DataSdwanServiceMulticastFeaturePimInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeaturePimInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeaturePimInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeaturePimInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // join_prune_interval - computed: true, optional: false, required: false
  public get joinPruneInterval() {
    return this.getNumberAttribute('join_prune_interval');
  }

  // join_prune_interval_variable - computed: true, optional: false, required: false
  public get joinPruneIntervalVariable() {
    return this.getStringAttribute('join_prune_interval_variable');
  }

  // query_interval - computed: true, optional: false, required: false
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }

  // query_interval_variable - computed: true, optional: false, required: false
  public get queryIntervalVariable() {
    return this.getStringAttribute('query_interval_variable');
  }
}

export class DataSdwanServiceMulticastFeaturePimInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeaturePimInterfacesOutputReference {
    return new DataSdwanServiceMulticastFeaturePimInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceMulticastFeatureStaticRpAddresses {
}

export function dataSdwanServiceMulticastFeatureStaticRpAddressesToTerraform(struct?: DataSdwanServiceMulticastFeatureStaticRpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceMulticastFeatureStaticRpAddressesToHclTerraform(struct?: DataSdwanServiceMulticastFeatureStaticRpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceMulticastFeatureStaticRpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceMulticastFeatureStaticRpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceMulticastFeatureStaticRpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // access_list_variable - computed: true, optional: false, required: false
  public get accessListVariable() {
    return this.getStringAttribute('access_list_variable');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // override_variable - computed: true, optional: false, required: false
  public get overrideVariable() {
    return this.getStringAttribute('override_variable');
  }
}

export class DataSdwanServiceMulticastFeatureStaticRpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceMulticastFeatureStaticRpAddressesOutputReference {
    return new DataSdwanServiceMulticastFeatureStaticRpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_multicast_feature sdwan_service_multicast_feature}
*/
export class DataSdwanServiceMulticastFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_multicast_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanServiceMulticastFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanServiceMulticastFeature to import
  * @param importFromId The id of the existing DataSdwanServiceMulticastFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_multicast_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanServiceMulticastFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_multicast_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_multicast_feature sdwan_service_multicast_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanServiceMulticastFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanServiceMulticastFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_multicast_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rp_announces - computed: true, optional: false, required: false
  private _autoRpAnnounces = new DataSdwanServiceMulticastFeatureAutoRpAnnouncesList(this, "auto_rp_announces", false);
  public get autoRpAnnounces() {
    return this._autoRpAnnounces;
  }

  // auto_rp_discoveries - computed: true, optional: false, required: false
  private _autoRpDiscoveries = new DataSdwanServiceMulticastFeatureAutoRpDiscoveriesList(this, "auto_rp_discoveries", false);
  public get autoRpDiscoveries() {
    return this._autoRpDiscoveries;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_auto_rp - computed: true, optional: false, required: false
  public get enableAutoRp() {
    return this.getBooleanAttribute('enable_auto_rp');
  }

  // enable_auto_rp_variable - computed: true, optional: false, required: false
  public get enableAutoRpVariable() {
    return this.getStringAttribute('enable_auto_rp_variable');
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

  // igmp_interfaces - computed: true, optional: false, required: false
  private _igmpInterfaces = new DataSdwanServiceMulticastFeatureIgmpInterfacesList(this, "igmp_interfaces", false);
  public get igmpInterfaces() {
    return this._igmpInterfaces;
  }

  // local_replicator - computed: true, optional: false, required: false
  public get localReplicator() {
    return this.getBooleanAttribute('local_replicator');
  }

  // local_replicator_threshold - computed: true, optional: false, required: false
  public get localReplicatorThreshold() {
    return this.getNumberAttribute('local_replicator_threshold');
  }

  // local_replicator_threshold_variable - computed: true, optional: false, required: false
  public get localReplicatorThresholdVariable() {
    return this.getStringAttribute('local_replicator_threshold_variable');
  }

  // local_replicator_variable - computed: true, optional: false, required: false
  public get localReplicatorVariable() {
    return this.getStringAttribute('local_replicator_variable');
  }

  // msdp_connection_retry_interval - computed: true, optional: false, required: false
  public get msdpConnectionRetryInterval() {
    return this.getNumberAttribute('msdp_connection_retry_interval');
  }

  // msdp_connection_retry_interval_variable - computed: true, optional: false, required: false
  public get msdpConnectionRetryIntervalVariable() {
    return this.getStringAttribute('msdp_connection_retry_interval_variable');
  }

  // msdp_groups - computed: true, optional: false, required: false
  private _msdpGroups = new DataSdwanServiceMulticastFeatureMsdpGroupsList(this, "msdp_groups", false);
  public get msdpGroups() {
    return this._msdpGroups;
  }

  // msdp_originator_id - computed: true, optional: false, required: false
  public get msdpOriginatorId() {
    return this.getStringAttribute('msdp_originator_id');
  }

  // msdp_originator_id_variable - computed: true, optional: false, required: false
  public get msdpOriginatorIdVariable() {
    return this.getStringAttribute('msdp_originator_id_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pim_bsr_candidates - computed: true, optional: false, required: false
  private _pimBsrCandidates = new DataSdwanServiceMulticastFeaturePimBsrCandidatesList(this, "pim_bsr_candidates", false);
  public get pimBsrCandidates() {
    return this._pimBsrCandidates;
  }

  // pim_bsr_rp_candidates - computed: true, optional: false, required: false
  private _pimBsrRpCandidates = new DataSdwanServiceMulticastFeaturePimBsrRpCandidatesList(this, "pim_bsr_rp_candidates", false);
  public get pimBsrRpCandidates() {
    return this._pimBsrRpCandidates;
  }

  // pim_interfaces - computed: true, optional: false, required: false
  private _pimInterfaces = new DataSdwanServiceMulticastFeaturePimInterfacesList(this, "pim_interfaces", false);
  public get pimInterfaces() {
    return this._pimInterfaces;
  }

  // pim_source_specific_multicast_access_list - computed: true, optional: false, required: false
  public get pimSourceSpecificMulticastAccessList() {
    return this.getStringAttribute('pim_source_specific_multicast_access_list');
  }

  // pim_source_specific_multicast_access_list_variable - computed: true, optional: false, required: false
  public get pimSourceSpecificMulticastAccessListVariable() {
    return this.getStringAttribute('pim_source_specific_multicast_access_list_variable');
  }

  // pim_source_specific_multicast_enable - computed: true, optional: false, required: false
  public get pimSourceSpecificMulticastEnable() {
    return this.getBooleanAttribute('pim_source_specific_multicast_enable');
  }

  // pim_spt_threshold - computed: true, optional: false, required: false
  public get pimSptThreshold() {
    return this.getStringAttribute('pim_spt_threshold');
  }

  // pim_spt_threshold_variable - computed: true, optional: false, required: false
  public get pimSptThresholdVariable() {
    return this.getStringAttribute('pim_spt_threshold_variable');
  }

  // spt_only - computed: true, optional: false, required: false
  public get sptOnly() {
    return this.getBooleanAttribute('spt_only');
  }

  // spt_only_variable - computed: true, optional: false, required: false
  public get sptOnlyVariable() {
    return this.getStringAttribute('spt_only_variable');
  }

  // static_rp_addresses - computed: true, optional: false, required: false
  private _staticRpAddresses = new DataSdwanServiceMulticastFeatureStaticRpAddressesList(this, "static_rp_addresses", false);
  public get staticRpAddresses() {
    return this._staticRpAddresses;
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
