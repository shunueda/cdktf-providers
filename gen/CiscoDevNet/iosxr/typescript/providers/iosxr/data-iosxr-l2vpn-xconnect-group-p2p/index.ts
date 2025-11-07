// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_xconnect_group_p2p
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrL2VpnXconnectGroupP2PConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_xconnect_group_p2p#device DataIosxrL2VpnXconnectGroupP2P#device}
  */
  readonly device?: string;
  /**
  * Specify the group the cross connects belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_xconnect_group_p2p#group_name DataIosxrL2VpnXconnectGroupP2P#group_name}
  */
  readonly groupName: string;
  /**
  * Configure point to point cross connect commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_xconnect_group_p2p#p2p_xconnect_name DataIosxrL2VpnXconnectGroupP2P#p2p_xconnect_name}
  */
  readonly p2PXconnectName: string;
}
export interface DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighbors {
}

export function dataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighborsToTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighborsToHclTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pw_class - computed: true, optional: false, required: false
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighborsOutputReference {
    return new DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighbors {
}

export function dataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighborsToTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighborsToHclTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pw_class - computed: true, optional: false, required: false
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }

  // remote_ac_id - computed: true, optional: false, required: false
  public get remoteAcId() {
    return this.getNumberAttribute('remote_ac_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getNumberAttribute('source');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighborsOutputReference {
    return new DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrL2VpnXconnectGroupP2PInterfaces {
}

export function dataIosxrL2VpnXconnectGroupP2PInterfacesToTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnXconnectGroupP2PInterfacesToHclTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnXconnectGroupP2PInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnXconnectGroupP2PInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnXconnectGroupP2PInterfaces | undefined) {
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
}

export class DataIosxrL2VpnXconnectGroupP2PInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnXconnectGroupP2PInterfacesOutputReference {
    return new DataIosxrL2VpnXconnectGroupP2PInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrL2VpnXconnectGroupP2PIpv4Neighbors {
}

export function dataIosxrL2VpnXconnectGroupP2PIpv4NeighborsToTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PIpv4Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnXconnectGroupP2PIpv4NeighborsToHclTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PIpv4Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnXconnectGroupP2PIpv4NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnXconnectGroupP2PIpv4Neighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnXconnectGroupP2PIpv4Neighbors | undefined) {
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

  // pw_class - computed: true, optional: false, required: false
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }

  // pw_id - computed: true, optional: false, required: false
  public get pwId() {
    return this.getNumberAttribute('pw_id');
  }
}

export class DataIosxrL2VpnXconnectGroupP2PIpv4NeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnXconnectGroupP2PIpv4NeighborsOutputReference {
    return new DataIosxrL2VpnXconnectGroupP2PIpv4NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrL2VpnXconnectGroupP2PIpv6Neighbors {
}

export function dataIosxrL2VpnXconnectGroupP2PIpv6NeighborsToTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PIpv6Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnXconnectGroupP2PIpv6NeighborsToHclTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PIpv6Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnXconnectGroupP2PIpv6NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnXconnectGroupP2PIpv6Neighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnXconnectGroupP2PIpv6Neighbors | undefined) {
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

  // pw_class - computed: true, optional: false, required: false
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }

  // pw_id - computed: true, optional: false, required: false
  public get pwId() {
    return this.getNumberAttribute('pw_id');
  }
}

export class DataIosxrL2VpnXconnectGroupP2PIpv6NeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnXconnectGroupP2PIpv6NeighborsOutputReference {
    return new DataIosxrL2VpnXconnectGroupP2PIpv6NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices {
}

export function dataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesToTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesToHclTerraform(struct?: DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segment_routing_srv6_locator - computed: true, optional: false, required: false
  public get segmentRoutingSrv6Locator() {
    return this.getStringAttribute('segment_routing_srv6_locator');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesOutputReference {
    return new DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_xconnect_group_p2p iosxr_l2vpn_xconnect_group_p2p}
*/
export class DataIosxrL2VpnXconnectGroupP2P extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_l2vpn_xconnect_group_p2p";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrL2VpnXconnectGroupP2P resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrL2VpnXconnectGroupP2P to import
  * @param importFromId The id of the existing DataIosxrL2VpnXconnectGroupP2P that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_xconnect_group_p2p#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrL2VpnXconnectGroupP2P to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_l2vpn_xconnect_group_p2p", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_xconnect_group_p2p iosxr_l2vpn_xconnect_group_p2p} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrL2VpnXconnectGroupP2PConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrL2VpnXconnectGroupP2PConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_l2vpn_xconnect_group_p2p',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._groupName = config.groupName;
    this._p2PXconnectName = config.p2PXconnectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // evpn_service_neighbors - computed: true, optional: false, required: false
  private _evpnServiceNeighbors = new DataIosxrL2VpnXconnectGroupP2PEvpnServiceNeighborsList(this, "evpn_service_neighbors", false);
  public get evpnServiceNeighbors() {
    return this._evpnServiceNeighbors;
  }

  // evpn_target_neighbors - computed: true, optional: false, required: false
  private _evpnTargetNeighbors = new DataIosxrL2VpnXconnectGroupP2PEvpnTargetNeighborsList(this, "evpn_target_neighbors", false);
  public get evpnTargetNeighbors() {
    return this._evpnTargetNeighbors;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIosxrL2VpnXconnectGroupP2PInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // ipv4_neighbors - computed: true, optional: false, required: false
  private _ipv4Neighbors = new DataIosxrL2VpnXconnectGroupP2PIpv4NeighborsList(this, "ipv4_neighbors", false);
  public get ipv4Neighbors() {
    return this._ipv4Neighbors;
  }

  // ipv6_neighbors - computed: true, optional: false, required: false
  private _ipv6Neighbors = new DataIosxrL2VpnXconnectGroupP2PIpv6NeighborsList(this, "ipv6_neighbors", false);
  public get ipv6Neighbors() {
    return this._ipv6Neighbors;
  }

  // neighbor_evpn_evi_segment_routing_services - computed: true, optional: false, required: false
  private _neighborEvpnEviSegmentRoutingServices = new DataIosxrL2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesList(this, "neighbor_evpn_evi_segment_routing_services", false);
  public get neighborEvpnEviSegmentRoutingServices() {
    return this._neighborEvpnEviSegmentRoutingServices;
  }

  // p2p_xconnect_name - computed: false, optional: false, required: true
  private _p2PXconnectName?: string; 
  public get p2PXconnectName() {
    return this.getStringAttribute('p2p_xconnect_name');
  }
  public set p2PXconnectName(value: string) {
    this._p2PXconnectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PXconnectNameInput() {
    return this._p2PXconnectName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      group_name: cdktf.stringToTerraform(this._groupName),
      p2p_xconnect_name: cdktf.stringToTerraform(this._p2PXconnectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p2p_xconnect_name: {
        value: cdktf.stringToHclTerraform(this._p2PXconnectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
