// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2VpnXconnectGroupP2PConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#delete_mode L2VpnXconnectGroupP2P#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Description for cross connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#description L2VpnXconnectGroupP2P#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#device L2VpnXconnectGroupP2P#device}
  */
  readonly device?: string;
  /**
  * Specify service ID (used as local and remote ac-id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#evpn_service_neighbors L2VpnXconnectGroupP2P#evpn_service_neighbors}
  */
  readonly evpnServiceNeighbors?: L2VpnXconnectGroupP2PEvpnServiceNeighbors[] | cdktf.IResolvable;
  /**
  * Specify remote attachment circuit identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#evpn_target_neighbors L2VpnXconnectGroupP2P#evpn_target_neighbors}
  */
  readonly evpnTargetNeighbors?: L2VpnXconnectGroupP2PEvpnTargetNeighbors[] | cdktf.IResolvable;
  /**
  * Specify the group the cross connects belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#group_name L2VpnXconnectGroupP2P#group_name}
  */
  readonly groupName: string;
  /**
  * Specify (sub-)interface name to cross connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#interfaces L2VpnXconnectGroupP2P#interfaces}
  */
  readonly interfaces?: L2VpnXconnectGroupP2PInterfaces[] | cdktf.IResolvable;
  /**
  * IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#ipv4_neighbors L2VpnXconnectGroupP2P#ipv4_neighbors}
  */
  readonly ipv4Neighbors?: L2VpnXconnectGroupP2PIpv4Neighbors[] | cdktf.IResolvable;
  /**
  * IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#ipv6_neighbors L2VpnXconnectGroupP2P#ipv6_neighbors}
  */
  readonly ipv6Neighbors?: L2VpnXconnectGroupP2PIpv6Neighbors[] | cdktf.IResolvable;
  /**
  * Specify service ID (used as local and remote ac-id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#neighbor_evpn_evi_segment_routing_services L2VpnXconnectGroupP2P#neighbor_evpn_evi_segment_routing_services}
  */
  readonly neighborEvpnEviSegmentRoutingServices?: L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices[] | cdktf.IResolvable;
  /**
  * Configure point to point cross connect commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#p2p_xconnect_name L2VpnXconnectGroupP2P#p2p_xconnect_name}
  */
  readonly p2PXconnectName: string;
}
export interface L2VpnXconnectGroupP2PEvpnServiceNeighbors {
  /**
  * PW class template name to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#pw_class L2VpnXconnectGroupP2P#pw_class}
  */
  readonly pwClass?: string;
  /**
  * Specify service ID (used as local and remote ac-id)
  *   - Range: `1`-`4294967294`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#service_id L2VpnXconnectGroupP2P#service_id}
  */
  readonly serviceId: number;
  /**
  * Ethernet VPN Identifier
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#vpn_id L2VpnXconnectGroupP2P#vpn_id}
  */
  readonly vpnId: number;
}

export function l2VpnXconnectGroupP2PEvpnServiceNeighborsToTerraform(struct?: L2VpnXconnectGroupP2PEvpnServiceNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pw_class: cdktf.stringToTerraform(struct!.pwClass),
    service_id: cdktf.numberToTerraform(struct!.serviceId),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function l2VpnXconnectGroupP2PEvpnServiceNeighborsToHclTerraform(struct?: L2VpnXconnectGroupP2PEvpnServiceNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pw_class: {
      value: cdktf.stringToHclTerraform(struct!.pwClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.numberToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnXconnectGroupP2PEvpnServiceNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnXconnectGroupP2PEvpnServiceNeighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pwClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwClass = this._pwClass;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnXconnectGroupP2PEvpnServiceNeighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pwClass = undefined;
      this._serviceId = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pwClass = value.pwClass;
      this._serviceId = value.serviceId;
      this._vpnId = value.vpnId;
    }
  }

  // pw_class - computed: false, optional: true, required: false
  private _pwClass?: string; 
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }
  public set pwClass(value: string) {
    this._pwClass = value;
  }
  public resetPwClass() {
    this._pwClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwClassInput() {
    return this._pwClass;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // vpn_id - computed: false, optional: false, required: true
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class L2VpnXconnectGroupP2PEvpnServiceNeighborsList extends cdktf.ComplexList {
  public internalValue? : L2VpnXconnectGroupP2PEvpnServiceNeighbors[] | cdktf.IResolvable

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
  public get(index: number): L2VpnXconnectGroupP2PEvpnServiceNeighborsOutputReference {
    return new L2VpnXconnectGroupP2PEvpnServiceNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L2VpnXconnectGroupP2PEvpnTargetNeighbors {
  /**
  * PW class template name to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#pw_class L2VpnXconnectGroupP2P#pw_class}
  */
  readonly pwClass?: string;
  /**
  * Specify remote attachment circuit identifier
  *   - Range: `1`-`4294967294`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#remote_ac_id L2VpnXconnectGroupP2P#remote_ac_id}
  */
  readonly remoteAcId: number;
  /**
  * Specify source attachment circuit identifier
  *   - Range: `1`-`4294967294`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#source L2VpnXconnectGroupP2P#source}
  */
  readonly source: number;
  /**
  * Ethernet VPN Identifier
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#vpn_id L2VpnXconnectGroupP2P#vpn_id}
  */
  readonly vpnId: number;
}

export function l2VpnXconnectGroupP2PEvpnTargetNeighborsToTerraform(struct?: L2VpnXconnectGroupP2PEvpnTargetNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pw_class: cdktf.stringToTerraform(struct!.pwClass),
    remote_ac_id: cdktf.numberToTerraform(struct!.remoteAcId),
    source: cdktf.numberToTerraform(struct!.source),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function l2VpnXconnectGroupP2PEvpnTargetNeighborsToHclTerraform(struct?: L2VpnXconnectGroupP2PEvpnTargetNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pw_class: {
      value: cdktf.stringToHclTerraform(struct!.pwClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ac_id: {
      value: cdktf.numberToHclTerraform(struct!.remoteAcId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.numberToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnXconnectGroupP2PEvpnTargetNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnXconnectGroupP2PEvpnTargetNeighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pwClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwClass = this._pwClass;
    }
    if (this._remoteAcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAcId = this._remoteAcId;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnXconnectGroupP2PEvpnTargetNeighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pwClass = undefined;
      this._remoteAcId = undefined;
      this._source = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pwClass = value.pwClass;
      this._remoteAcId = value.remoteAcId;
      this._source = value.source;
      this._vpnId = value.vpnId;
    }
  }

  // pw_class - computed: false, optional: true, required: false
  private _pwClass?: string; 
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }
  public set pwClass(value: string) {
    this._pwClass = value;
  }
  public resetPwClass() {
    this._pwClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwClassInput() {
    return this._pwClass;
  }

  // remote_ac_id - computed: false, optional: false, required: true
  private _remoteAcId?: number; 
  public get remoteAcId() {
    return this.getNumberAttribute('remote_ac_id');
  }
  public set remoteAcId(value: number) {
    this._remoteAcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAcIdInput() {
    return this._remoteAcId;
  }

  // source - computed: false, optional: false, required: true
  private _source?: number; 
  public get source() {
    return this.getNumberAttribute('source');
  }
  public set source(value: number) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // vpn_id - computed: false, optional: false, required: true
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class L2VpnXconnectGroupP2PEvpnTargetNeighborsList extends cdktf.ComplexList {
  public internalValue? : L2VpnXconnectGroupP2PEvpnTargetNeighbors[] | cdktf.IResolvable

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
  public get(index: number): L2VpnXconnectGroupP2PEvpnTargetNeighborsOutputReference {
    return new L2VpnXconnectGroupP2PEvpnTargetNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L2VpnXconnectGroupP2PInterfaces {
  /**
  * Specify (sub-)interface name to cross connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#interface_name L2VpnXconnectGroupP2P#interface_name}
  */
  readonly interfaceName: string;
}

export function l2VpnXconnectGroupP2PInterfacesToTerraform(struct?: L2VpnXconnectGroupP2PInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function l2VpnXconnectGroupP2PInterfacesToHclTerraform(struct?: L2VpnXconnectGroupP2PInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnXconnectGroupP2PInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnXconnectGroupP2PInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnXconnectGroupP2PInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class L2VpnXconnectGroupP2PInterfacesList extends cdktf.ComplexList {
  public internalValue? : L2VpnXconnectGroupP2PInterfaces[] | cdktf.IResolvable

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
  public get(index: number): L2VpnXconnectGroupP2PInterfacesOutputReference {
    return new L2VpnXconnectGroupP2PInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L2VpnXconnectGroupP2PIpv4Neighbors {
  /**
  * IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#address L2VpnXconnectGroupP2P#address}
  */
  readonly address: string;
  /**
  * PW class template name to use for this XC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#pw_class L2VpnXconnectGroupP2P#pw_class}
  */
  readonly pwClass?: string;
  /**
  * Specify the pseudowire id
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#pw_id L2VpnXconnectGroupP2P#pw_id}
  */
  readonly pwId: number;
}

export function l2VpnXconnectGroupP2PIpv4NeighborsToTerraform(struct?: L2VpnXconnectGroupP2PIpv4Neighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    pw_class: cdktf.stringToTerraform(struct!.pwClass),
    pw_id: cdktf.numberToTerraform(struct!.pwId),
  }
}


export function l2VpnXconnectGroupP2PIpv4NeighborsToHclTerraform(struct?: L2VpnXconnectGroupP2PIpv4Neighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pw_class: {
      value: cdktf.stringToHclTerraform(struct!.pwClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pw_id: {
      value: cdktf.numberToHclTerraform(struct!.pwId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnXconnectGroupP2PIpv4NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnXconnectGroupP2PIpv4Neighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._pwClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwClass = this._pwClass;
    }
    if (this._pwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwId = this._pwId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnXconnectGroupP2PIpv4Neighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._pwClass = undefined;
      this._pwId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._pwClass = value.pwClass;
      this._pwId = value.pwId;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // pw_class - computed: false, optional: true, required: false
  private _pwClass?: string; 
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }
  public set pwClass(value: string) {
    this._pwClass = value;
  }
  public resetPwClass() {
    this._pwClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwClassInput() {
    return this._pwClass;
  }

  // pw_id - computed: false, optional: false, required: true
  private _pwId?: number; 
  public get pwId() {
    return this.getNumberAttribute('pw_id');
  }
  public set pwId(value: number) {
    this._pwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pwIdInput() {
    return this._pwId;
  }
}

export class L2VpnXconnectGroupP2PIpv4NeighborsList extends cdktf.ComplexList {
  public internalValue? : L2VpnXconnectGroupP2PIpv4Neighbors[] | cdktf.IResolvable

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
  public get(index: number): L2VpnXconnectGroupP2PIpv4NeighborsOutputReference {
    return new L2VpnXconnectGroupP2PIpv4NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L2VpnXconnectGroupP2PIpv6Neighbors {
  /**
  * IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#address L2VpnXconnectGroupP2P#address}
  */
  readonly address: string;
  /**
  * PW class template name to use for this XC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#pw_class L2VpnXconnectGroupP2P#pw_class}
  */
  readonly pwClass?: string;
  /**
  * Specify the pseudowire id
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#pw_id L2VpnXconnectGroupP2P#pw_id}
  */
  readonly pwId: number;
}

export function l2VpnXconnectGroupP2PIpv6NeighborsToTerraform(struct?: L2VpnXconnectGroupP2PIpv6Neighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    pw_class: cdktf.stringToTerraform(struct!.pwClass),
    pw_id: cdktf.numberToTerraform(struct!.pwId),
  }
}


export function l2VpnXconnectGroupP2PIpv6NeighborsToHclTerraform(struct?: L2VpnXconnectGroupP2PIpv6Neighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pw_class: {
      value: cdktf.stringToHclTerraform(struct!.pwClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pw_id: {
      value: cdktf.numberToHclTerraform(struct!.pwId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnXconnectGroupP2PIpv6NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnXconnectGroupP2PIpv6Neighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._pwClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwClass = this._pwClass;
    }
    if (this._pwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwId = this._pwId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnXconnectGroupP2PIpv6Neighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._pwClass = undefined;
      this._pwId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._pwClass = value.pwClass;
      this._pwId = value.pwId;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // pw_class - computed: false, optional: true, required: false
  private _pwClass?: string; 
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }
  public set pwClass(value: string) {
    this._pwClass = value;
  }
  public resetPwClass() {
    this._pwClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwClassInput() {
    return this._pwClass;
  }

  // pw_id - computed: false, optional: false, required: true
  private _pwId?: number; 
  public get pwId() {
    return this.getNumberAttribute('pw_id');
  }
  public set pwId(value: number) {
    this._pwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pwIdInput() {
    return this._pwId;
  }
}

export class L2VpnXconnectGroupP2PIpv6NeighborsList extends cdktf.ComplexList {
  public internalValue? : L2VpnXconnectGroupP2PIpv6Neighbors[] | cdktf.IResolvable

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
  public get(index: number): L2VpnXconnectGroupP2PIpv6NeighborsOutputReference {
    return new L2VpnXconnectGroupP2PIpv6NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices {
  /**
  * PW locator to use for EVPN SID allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#segment_routing_srv6_locator L2VpnXconnectGroupP2P#segment_routing_srv6_locator}
  */
  readonly segmentRoutingSrv6Locator?: string;
  /**
  * Specify service ID (used as local and remote ac-id)
  *   - Range: `1`-`4294967294`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#service_id L2VpnXconnectGroupP2P#service_id}
  */
  readonly serviceId: number;
  /**
  * Ethernet VPN Identifier
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#vpn_id L2VpnXconnectGroupP2P#vpn_id}
  */
  readonly vpnId: number;
}

export function l2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesToTerraform(struct?: L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment_routing_srv6_locator: cdktf.stringToTerraform(struct!.segmentRoutingSrv6Locator),
    service_id: cdktf.numberToTerraform(struct!.serviceId),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function l2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesToHclTerraform(struct?: L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment_routing_srv6_locator: {
      value: cdktf.stringToHclTerraform(struct!.segmentRoutingSrv6Locator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.numberToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentRoutingSrv6Locator !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentRoutingSrv6Locator = this._segmentRoutingSrv6Locator;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentRoutingSrv6Locator = undefined;
      this._serviceId = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentRoutingSrv6Locator = value.segmentRoutingSrv6Locator;
      this._serviceId = value.serviceId;
      this._vpnId = value.vpnId;
    }
  }

  // segment_routing_srv6_locator - computed: false, optional: true, required: false
  private _segmentRoutingSrv6Locator?: string; 
  public get segmentRoutingSrv6Locator() {
    return this.getStringAttribute('segment_routing_srv6_locator');
  }
  public set segmentRoutingSrv6Locator(value: string) {
    this._segmentRoutingSrv6Locator = value;
  }
  public resetSegmentRoutingSrv6Locator() {
    this._segmentRoutingSrv6Locator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingSrv6LocatorInput() {
    return this._segmentRoutingSrv6Locator;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // vpn_id - computed: false, optional: false, required: true
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesList extends cdktf.ComplexList {
  public internalValue? : L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices[] | cdktf.IResolvable

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
  public get(index: number): L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesOutputReference {
    return new L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p iosxr_l2vpn_xconnect_group_p2p}
*/
export class L2VpnXconnectGroupP2P extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_l2vpn_xconnect_group_p2p";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2VpnXconnectGroupP2P resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2VpnXconnectGroupP2P to import
  * @param importFromId The id of the existing L2VpnXconnectGroupP2P that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2VpnXconnectGroupP2P to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_l2vpn_xconnect_group_p2p", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_xconnect_group_p2p iosxr_l2vpn_xconnect_group_p2p} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2VpnXconnectGroupP2PConfig
  */
  public constructor(scope: Construct, id: string, config: L2VpnXconnectGroupP2PConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_l2vpn_xconnect_group_p2p',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._evpnServiceNeighbors.internalValue = config.evpnServiceNeighbors;
    this._evpnTargetNeighbors.internalValue = config.evpnTargetNeighbors;
    this._groupName = config.groupName;
    this._interfaces.internalValue = config.interfaces;
    this._ipv4Neighbors.internalValue = config.ipv4Neighbors;
    this._ipv6Neighbors.internalValue = config.ipv6Neighbors;
    this._neighborEvpnEviSegmentRoutingServices.internalValue = config.neighborEvpnEviSegmentRoutingServices;
    this._p2PXconnectName = config.p2PXconnectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // evpn_service_neighbors - computed: false, optional: true, required: false
  private _evpnServiceNeighbors = new L2VpnXconnectGroupP2PEvpnServiceNeighborsList(this, "evpn_service_neighbors", false);
  public get evpnServiceNeighbors() {
    return this._evpnServiceNeighbors;
  }
  public putEvpnServiceNeighbors(value: L2VpnXconnectGroupP2PEvpnServiceNeighbors[] | cdktf.IResolvable) {
    this._evpnServiceNeighbors.internalValue = value;
  }
  public resetEvpnServiceNeighbors() {
    this._evpnServiceNeighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnServiceNeighborsInput() {
    return this._evpnServiceNeighbors.internalValue;
  }

  // evpn_target_neighbors - computed: false, optional: true, required: false
  private _evpnTargetNeighbors = new L2VpnXconnectGroupP2PEvpnTargetNeighborsList(this, "evpn_target_neighbors", false);
  public get evpnTargetNeighbors() {
    return this._evpnTargetNeighbors;
  }
  public putEvpnTargetNeighbors(value: L2VpnXconnectGroupP2PEvpnTargetNeighbors[] | cdktf.IResolvable) {
    this._evpnTargetNeighbors.internalValue = value;
  }
  public resetEvpnTargetNeighbors() {
    this._evpnTargetNeighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnTargetNeighborsInput() {
    return this._evpnTargetNeighbors.internalValue;
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

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new L2VpnXconnectGroupP2PInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: L2VpnXconnectGroupP2PInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // ipv4_neighbors - computed: false, optional: true, required: false
  private _ipv4Neighbors = new L2VpnXconnectGroupP2PIpv4NeighborsList(this, "ipv4_neighbors", false);
  public get ipv4Neighbors() {
    return this._ipv4Neighbors;
  }
  public putIpv4Neighbors(value: L2VpnXconnectGroupP2PIpv4Neighbors[] | cdktf.IResolvable) {
    this._ipv4Neighbors.internalValue = value;
  }
  public resetIpv4Neighbors() {
    this._ipv4Neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NeighborsInput() {
    return this._ipv4Neighbors.internalValue;
  }

  // ipv6_neighbors - computed: false, optional: true, required: false
  private _ipv6Neighbors = new L2VpnXconnectGroupP2PIpv6NeighborsList(this, "ipv6_neighbors", false);
  public get ipv6Neighbors() {
    return this._ipv6Neighbors;
  }
  public putIpv6Neighbors(value: L2VpnXconnectGroupP2PIpv6Neighbors[] | cdktf.IResolvable) {
    this._ipv6Neighbors.internalValue = value;
  }
  public resetIpv6Neighbors() {
    this._ipv6Neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborsInput() {
    return this._ipv6Neighbors.internalValue;
  }

  // neighbor_evpn_evi_segment_routing_services - computed: false, optional: true, required: false
  private _neighborEvpnEviSegmentRoutingServices = new L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesList(this, "neighbor_evpn_evi_segment_routing_services", false);
  public get neighborEvpnEviSegmentRoutingServices() {
    return this._neighborEvpnEviSegmentRoutingServices;
  }
  public putNeighborEvpnEviSegmentRoutingServices(value: L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServices[] | cdktf.IResolvable) {
    this._neighborEvpnEviSegmentRoutingServices.internalValue = value;
  }
  public resetNeighborEvpnEviSegmentRoutingServices() {
    this._neighborEvpnEviSegmentRoutingServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborEvpnEviSegmentRoutingServicesInput() {
    return this._neighborEvpnEviSegmentRoutingServices.internalValue;
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
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      evpn_service_neighbors: cdktf.listMapper(l2VpnXconnectGroupP2PEvpnServiceNeighborsToTerraform, false)(this._evpnServiceNeighbors.internalValue),
      evpn_target_neighbors: cdktf.listMapper(l2VpnXconnectGroupP2PEvpnTargetNeighborsToTerraform, false)(this._evpnTargetNeighbors.internalValue),
      group_name: cdktf.stringToTerraform(this._groupName),
      interfaces: cdktf.listMapper(l2VpnXconnectGroupP2PInterfacesToTerraform, false)(this._interfaces.internalValue),
      ipv4_neighbors: cdktf.listMapper(l2VpnXconnectGroupP2PIpv4NeighborsToTerraform, false)(this._ipv4Neighbors.internalValue),
      ipv6_neighbors: cdktf.listMapper(l2VpnXconnectGroupP2PIpv6NeighborsToTerraform, false)(this._ipv6Neighbors.internalValue),
      neighbor_evpn_evi_segment_routing_services: cdktf.listMapper(l2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesToTerraform, false)(this._neighborEvpnEviSegmentRoutingServices.internalValue),
      p2p_xconnect_name: cdktf.stringToTerraform(this._p2PXconnectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evpn_service_neighbors: {
        value: cdktf.listMapperHcl(l2VpnXconnectGroupP2PEvpnServiceNeighborsToHclTerraform, false)(this._evpnServiceNeighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnXconnectGroupP2PEvpnServiceNeighborsList",
      },
      evpn_target_neighbors: {
        value: cdktf.listMapperHcl(l2VpnXconnectGroupP2PEvpnTargetNeighborsToHclTerraform, false)(this._evpnTargetNeighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnXconnectGroupP2PEvpnTargetNeighborsList",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(l2VpnXconnectGroupP2PInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnXconnectGroupP2PInterfacesList",
      },
      ipv4_neighbors: {
        value: cdktf.listMapperHcl(l2VpnXconnectGroupP2PIpv4NeighborsToHclTerraform, false)(this._ipv4Neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnXconnectGroupP2PIpv4NeighborsList",
      },
      ipv6_neighbors: {
        value: cdktf.listMapperHcl(l2VpnXconnectGroupP2PIpv6NeighborsToHclTerraform, false)(this._ipv6Neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnXconnectGroupP2PIpv6NeighborsList",
      },
      neighbor_evpn_evi_segment_routing_services: {
        value: cdktf.listMapperHcl(l2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesToHclTerraform, false)(this._neighborEvpnEviSegmentRoutingServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnXconnectGroupP2PNeighborEvpnEviSegmentRoutingServicesList",
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
