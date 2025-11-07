// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2VpnBridgeGroupBridgeDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure bridge domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#bridge_domain_name L2VpnBridgeGroupBridgeDomain#bridge_domain_name}
  */
  readonly bridgeDomainName: string;
  /**
  * Specify the group the bridge belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#bridge_group_name L2VpnBridgeGroupBridgeDomain#bridge_group_name}
  */
  readonly bridgeGroupName: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#delete_mode L2VpnBridgeGroupBridgeDomain#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#device L2VpnBridgeGroupBridgeDomain#device}
  */
  readonly device?: string;
  /**
  * Ethernet VPN identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#evis L2VpnBridgeGroupBridgeDomain#evis}
  */
  readonly evis?: L2VpnBridgeGroupBridgeDomainEvis[] | cdktf.IResolvable;
  /**
  * Specify interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#interfaces L2VpnBridgeGroupBridgeDomain#interfaces}
  */
  readonly interfaces?: L2VpnBridgeGroupBridgeDomainInterfaces[] | cdktf.IResolvable;
  /**
  * Maximum transmission unit (payload) for this Bridge Domain
  *   - Range: `46`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#mtu L2VpnBridgeGroupBridgeDomain#mtu}
  */
  readonly mtu?: number;
  /**
  * Ethernet VPN identifier for srv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#srv6_evis L2VpnBridgeGroupBridgeDomain#srv6_evis}
  */
  readonly srv6Evis?: L2VpnBridgeGroupBridgeDomainSrv6Evis[] | cdktf.IResolvable;
  /**
  * Set the storm control kbps
  *   - Range: `64`-`1280000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#storm_control_broadcast_kbps L2VpnBridgeGroupBridgeDomain#storm_control_broadcast_kbps}
  */
  readonly stormControlBroadcastKbps?: number;
  /**
  * Set the storm control pps
  *   - Range: `1`-`160000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#storm_control_broadcast_pps L2VpnBridgeGroupBridgeDomain#storm_control_broadcast_pps}
  */
  readonly stormControlBroadcastPps?: number;
  /**
  * Set the storm control kbps
  *   - Range: `64`-`1280000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#storm_control_multicast_kbps L2VpnBridgeGroupBridgeDomain#storm_control_multicast_kbps}
  */
  readonly stormControlMulticastKbps?: number;
  /**
  * Set the storm control pps
  *   - Range: `1`-`160000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#storm_control_multicast_pps L2VpnBridgeGroupBridgeDomain#storm_control_multicast_pps}
  */
  readonly stormControlMulticastPps?: number;
  /**
  * Set the storm control kbps
  *   - Range: `64`-`1280000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#storm_control_unknown_unicast_kbps L2VpnBridgeGroupBridgeDomain#storm_control_unknown_unicast_kbps}
  */
  readonly stormControlUnknownUnicastKbps?: number;
  /**
  * Set the storm control pps
  *   - Range: `1`-`160000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#storm_control_unknown_unicast_pps L2VpnBridgeGroupBridgeDomain#storm_control_unknown_unicast_pps}
  */
  readonly stormControlUnknownUnicastPps?: number;
  /**
  * VxLAN VPN identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#vnis L2VpnBridgeGroupBridgeDomain#vnis}
  */
  readonly vnis?: L2VpnBridgeGroupBridgeDomainVnis[] | cdktf.IResolvable;
}
export interface L2VpnBridgeGroupBridgeDomainEvis {
  /**
  * Ethernet VPN identifier
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#vpn_id L2VpnBridgeGroupBridgeDomain#vpn_id}
  */
  readonly vpnId: number;
}

export function l2VpnBridgeGroupBridgeDomainEvisToTerraform(struct?: L2VpnBridgeGroupBridgeDomainEvis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function l2VpnBridgeGroupBridgeDomainEvisToHclTerraform(struct?: L2VpnBridgeGroupBridgeDomainEvis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class L2VpnBridgeGroupBridgeDomainEvisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnBridgeGroupBridgeDomainEvis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnBridgeGroupBridgeDomainEvis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpnId = value.vpnId;
    }
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

export class L2VpnBridgeGroupBridgeDomainEvisList extends cdktf.ComplexList {
  public internalValue? : L2VpnBridgeGroupBridgeDomainEvis[] | cdktf.IResolvable

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
  public get(index: number): L2VpnBridgeGroupBridgeDomainEvisOutputReference {
    return new L2VpnBridgeGroupBridgeDomainEvisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L2VpnBridgeGroupBridgeDomainInterfaces {
  /**
  * Specify interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#interface_name L2VpnBridgeGroupBridgeDomain#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Configure split-horizon group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#split_horizon_group L2VpnBridgeGroupBridgeDomain#split_horizon_group}
  */
  readonly splitHorizonGroup?: boolean | cdktf.IResolvable;
}

export function l2VpnBridgeGroupBridgeDomainInterfacesToTerraform(struct?: L2VpnBridgeGroupBridgeDomainInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    split_horizon_group: cdktf.booleanToTerraform(struct!.splitHorizonGroup),
  }
}


export function l2VpnBridgeGroupBridgeDomainInterfacesToHclTerraform(struct?: L2VpnBridgeGroupBridgeDomainInterfaces | cdktf.IResolvable): any {
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
    split_horizon_group: {
      value: cdktf.booleanToHclTerraform(struct!.splitHorizonGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnBridgeGroupBridgeDomainInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnBridgeGroupBridgeDomainInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._splitHorizonGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonGroup = this._splitHorizonGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnBridgeGroupBridgeDomainInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._splitHorizonGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._splitHorizonGroup = value.splitHorizonGroup;
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

  // split_horizon_group - computed: false, optional: true, required: false
  private _splitHorizonGroup?: boolean | cdktf.IResolvable; 
  public get splitHorizonGroup() {
    return this.getBooleanAttribute('split_horizon_group');
  }
  public set splitHorizonGroup(value: boolean | cdktf.IResolvable) {
    this._splitHorizonGroup = value;
  }
  public resetSplitHorizonGroup() {
    this._splitHorizonGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonGroupInput() {
    return this._splitHorizonGroup;
  }
}

export class L2VpnBridgeGroupBridgeDomainInterfacesList extends cdktf.ComplexList {
  public internalValue? : L2VpnBridgeGroupBridgeDomainInterfaces[] | cdktf.IResolvable

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
  public get(index: number): L2VpnBridgeGroupBridgeDomainInterfacesOutputReference {
    return new L2VpnBridgeGroupBridgeDomainInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L2VpnBridgeGroupBridgeDomainSrv6Evis {
  /**
  * Ethernet VPN identifier for srv6
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#vpn_id L2VpnBridgeGroupBridgeDomain#vpn_id}
  */
  readonly vpnId: number;
}

export function l2VpnBridgeGroupBridgeDomainSrv6EvisToTerraform(struct?: L2VpnBridgeGroupBridgeDomainSrv6Evis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function l2VpnBridgeGroupBridgeDomainSrv6EvisToHclTerraform(struct?: L2VpnBridgeGroupBridgeDomainSrv6Evis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class L2VpnBridgeGroupBridgeDomainSrv6EvisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnBridgeGroupBridgeDomainSrv6Evis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnBridgeGroupBridgeDomainSrv6Evis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpnId = value.vpnId;
    }
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

export class L2VpnBridgeGroupBridgeDomainSrv6EvisList extends cdktf.ComplexList {
  public internalValue? : L2VpnBridgeGroupBridgeDomainSrv6Evis[] | cdktf.IResolvable

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
  public get(index: number): L2VpnBridgeGroupBridgeDomainSrv6EvisOutputReference {
    return new L2VpnBridgeGroupBridgeDomainSrv6EvisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface L2VpnBridgeGroupBridgeDomainVnis {
  /**
  * VxLAN VPN identifier
  *   - Range: `1`-`16777215`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#vni_id L2VpnBridgeGroupBridgeDomain#vni_id}
  */
  readonly vniId: number;
}

export function l2VpnBridgeGroupBridgeDomainVnisToTerraform(struct?: L2VpnBridgeGroupBridgeDomainVnis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vni_id: cdktf.numberToTerraform(struct!.vniId),
  }
}


export function l2VpnBridgeGroupBridgeDomainVnisToHclTerraform(struct?: L2VpnBridgeGroupBridgeDomainVnis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vni_id: {
      value: cdktf.numberToHclTerraform(struct!.vniId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnBridgeGroupBridgeDomainVnisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnBridgeGroupBridgeDomainVnis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vniId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniId = this._vniId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnBridgeGroupBridgeDomainVnis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vniId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vniId = value.vniId;
    }
  }

  // vni_id - computed: false, optional: false, required: true
  private _vniId?: number; 
  public get vniId() {
    return this.getNumberAttribute('vni_id');
  }
  public set vniId(value: number) {
    this._vniId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniIdInput() {
    return this._vniId;
  }
}

export class L2VpnBridgeGroupBridgeDomainVnisList extends cdktf.ComplexList {
  public internalValue? : L2VpnBridgeGroupBridgeDomainVnis[] | cdktf.IResolvable

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
  public get(index: number): L2VpnBridgeGroupBridgeDomainVnisOutputReference {
    return new L2VpnBridgeGroupBridgeDomainVnisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain iosxr_l2vpn_bridge_group_bridge_domain}
*/
export class L2VpnBridgeGroupBridgeDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_l2vpn_bridge_group_bridge_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2VpnBridgeGroupBridgeDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2VpnBridgeGroupBridgeDomain to import
  * @param importFromId The id of the existing L2VpnBridgeGroupBridgeDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2VpnBridgeGroupBridgeDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_l2vpn_bridge_group_bridge_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn_bridge_group_bridge_domain iosxr_l2vpn_bridge_group_bridge_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2VpnBridgeGroupBridgeDomainConfig
  */
  public constructor(scope: Construct, id: string, config: L2VpnBridgeGroupBridgeDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_l2vpn_bridge_group_bridge_domain',
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
    this._bridgeDomainName = config.bridgeDomainName;
    this._bridgeGroupName = config.bridgeGroupName;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._evis.internalValue = config.evis;
    this._interfaces.internalValue = config.interfaces;
    this._mtu = config.mtu;
    this._srv6Evis.internalValue = config.srv6Evis;
    this._stormControlBroadcastKbps = config.stormControlBroadcastKbps;
    this._stormControlBroadcastPps = config.stormControlBroadcastPps;
    this._stormControlMulticastKbps = config.stormControlMulticastKbps;
    this._stormControlMulticastPps = config.stormControlMulticastPps;
    this._stormControlUnknownUnicastKbps = config.stormControlUnknownUnicastKbps;
    this._stormControlUnknownUnicastPps = config.stormControlUnknownUnicastPps;
    this._vnis.internalValue = config.vnis;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge_domain_name - computed: false, optional: false, required: true
  private _bridgeDomainName?: string; 
  public get bridgeDomainName() {
    return this.getStringAttribute('bridge_domain_name');
  }
  public set bridgeDomainName(value: string) {
    this._bridgeDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeDomainNameInput() {
    return this._bridgeDomainName;
  }

  // bridge_group_name - computed: false, optional: false, required: true
  private _bridgeGroupName?: string; 
  public get bridgeGroupName() {
    return this.getStringAttribute('bridge_group_name');
  }
  public set bridgeGroupName(value: string) {
    this._bridgeGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeGroupNameInput() {
    return this._bridgeGroupName;
  }

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

  // evis - computed: false, optional: true, required: false
  private _evis = new L2VpnBridgeGroupBridgeDomainEvisList(this, "evis", false);
  public get evis() {
    return this._evis;
  }
  public putEvis(value: L2VpnBridgeGroupBridgeDomainEvis[] | cdktf.IResolvable) {
    this._evis.internalValue = value;
  }
  public resetEvis() {
    this._evis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evisInput() {
    return this._evis.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new L2VpnBridgeGroupBridgeDomainInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: L2VpnBridgeGroupBridgeDomainInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // srv6_evis - computed: false, optional: true, required: false
  private _srv6Evis = new L2VpnBridgeGroupBridgeDomainSrv6EvisList(this, "srv6_evis", false);
  public get srv6Evis() {
    return this._srv6Evis;
  }
  public putSrv6Evis(value: L2VpnBridgeGroupBridgeDomainSrv6Evis[] | cdktf.IResolvable) {
    this._srv6Evis.internalValue = value;
  }
  public resetSrv6Evis() {
    this._srv6Evis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6EvisInput() {
    return this._srv6Evis.internalValue;
  }

  // storm_control_broadcast_kbps - computed: false, optional: true, required: false
  private _stormControlBroadcastKbps?: number; 
  public get stormControlBroadcastKbps() {
    return this.getNumberAttribute('storm_control_broadcast_kbps');
  }
  public set stormControlBroadcastKbps(value: number) {
    this._stormControlBroadcastKbps = value;
  }
  public resetStormControlBroadcastKbps() {
    this._stormControlBroadcastKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlBroadcastKbpsInput() {
    return this._stormControlBroadcastKbps;
  }

  // storm_control_broadcast_pps - computed: false, optional: true, required: false
  private _stormControlBroadcastPps?: number; 
  public get stormControlBroadcastPps() {
    return this.getNumberAttribute('storm_control_broadcast_pps');
  }
  public set stormControlBroadcastPps(value: number) {
    this._stormControlBroadcastPps = value;
  }
  public resetStormControlBroadcastPps() {
    this._stormControlBroadcastPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlBroadcastPpsInput() {
    return this._stormControlBroadcastPps;
  }

  // storm_control_multicast_kbps - computed: false, optional: true, required: false
  private _stormControlMulticastKbps?: number; 
  public get stormControlMulticastKbps() {
    return this.getNumberAttribute('storm_control_multicast_kbps');
  }
  public set stormControlMulticastKbps(value: number) {
    this._stormControlMulticastKbps = value;
  }
  public resetStormControlMulticastKbps() {
    this._stormControlMulticastKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlMulticastKbpsInput() {
    return this._stormControlMulticastKbps;
  }

  // storm_control_multicast_pps - computed: false, optional: true, required: false
  private _stormControlMulticastPps?: number; 
  public get stormControlMulticastPps() {
    return this.getNumberAttribute('storm_control_multicast_pps');
  }
  public set stormControlMulticastPps(value: number) {
    this._stormControlMulticastPps = value;
  }
  public resetStormControlMulticastPps() {
    this._stormControlMulticastPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlMulticastPpsInput() {
    return this._stormControlMulticastPps;
  }

  // storm_control_unknown_unicast_kbps - computed: false, optional: true, required: false
  private _stormControlUnknownUnicastKbps?: number; 
  public get stormControlUnknownUnicastKbps() {
    return this.getNumberAttribute('storm_control_unknown_unicast_kbps');
  }
  public set stormControlUnknownUnicastKbps(value: number) {
    this._stormControlUnknownUnicastKbps = value;
  }
  public resetStormControlUnknownUnicastKbps() {
    this._stormControlUnknownUnicastKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlUnknownUnicastKbpsInput() {
    return this._stormControlUnknownUnicastKbps;
  }

  // storm_control_unknown_unicast_pps - computed: false, optional: true, required: false
  private _stormControlUnknownUnicastPps?: number; 
  public get stormControlUnknownUnicastPps() {
    return this.getNumberAttribute('storm_control_unknown_unicast_pps');
  }
  public set stormControlUnknownUnicastPps(value: number) {
    this._stormControlUnknownUnicastPps = value;
  }
  public resetStormControlUnknownUnicastPps() {
    this._stormControlUnknownUnicastPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlUnknownUnicastPpsInput() {
    return this._stormControlUnknownUnicastPps;
  }

  // vnis - computed: false, optional: true, required: false
  private _vnis = new L2VpnBridgeGroupBridgeDomainVnisList(this, "vnis", false);
  public get vnis() {
    return this._vnis;
  }
  public putVnis(value: L2VpnBridgeGroupBridgeDomainVnis[] | cdktf.IResolvable) {
    this._vnis.internalValue = value;
  }
  public resetVnis() {
    this._vnis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnisInput() {
    return this._vnis.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_domain_name: cdktf.stringToTerraform(this._bridgeDomainName),
      bridge_group_name: cdktf.stringToTerraform(this._bridgeGroupName),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      evis: cdktf.listMapper(l2VpnBridgeGroupBridgeDomainEvisToTerraform, false)(this._evis.internalValue),
      interfaces: cdktf.listMapper(l2VpnBridgeGroupBridgeDomainInterfacesToTerraform, false)(this._interfaces.internalValue),
      mtu: cdktf.numberToTerraform(this._mtu),
      srv6_evis: cdktf.listMapper(l2VpnBridgeGroupBridgeDomainSrv6EvisToTerraform, false)(this._srv6Evis.internalValue),
      storm_control_broadcast_kbps: cdktf.numberToTerraform(this._stormControlBroadcastKbps),
      storm_control_broadcast_pps: cdktf.numberToTerraform(this._stormControlBroadcastPps),
      storm_control_multicast_kbps: cdktf.numberToTerraform(this._stormControlMulticastKbps),
      storm_control_multicast_pps: cdktf.numberToTerraform(this._stormControlMulticastPps),
      storm_control_unknown_unicast_kbps: cdktf.numberToTerraform(this._stormControlUnknownUnicastKbps),
      storm_control_unknown_unicast_pps: cdktf.numberToTerraform(this._stormControlUnknownUnicastPps),
      vnis: cdktf.listMapper(l2VpnBridgeGroupBridgeDomainVnisToTerraform, false)(this._vnis.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge_domain_name: {
        value: cdktf.stringToHclTerraform(this._bridgeDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_group_name: {
        value: cdktf.stringToHclTerraform(this._bridgeGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      evis: {
        value: cdktf.listMapperHcl(l2VpnBridgeGroupBridgeDomainEvisToHclTerraform, false)(this._evis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnBridgeGroupBridgeDomainEvisList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(l2VpnBridgeGroupBridgeDomainInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnBridgeGroupBridgeDomainInterfacesList",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srv6_evis: {
        value: cdktf.listMapperHcl(l2VpnBridgeGroupBridgeDomainSrv6EvisToHclTerraform, false)(this._srv6Evis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnBridgeGroupBridgeDomainSrv6EvisList",
      },
      storm_control_broadcast_kbps: {
        value: cdktf.numberToHclTerraform(this._stormControlBroadcastKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_broadcast_pps: {
        value: cdktf.numberToHclTerraform(this._stormControlBroadcastPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_multicast_kbps: {
        value: cdktf.numberToHclTerraform(this._stormControlMulticastKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_multicast_pps: {
        value: cdktf.numberToHclTerraform(this._stormControlMulticastPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_unknown_unicast_kbps: {
        value: cdktf.numberToHclTerraform(this._stormControlUnknownUnicastKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_unknown_unicast_pps: {
        value: cdktf.numberToHclTerraform(this._stormControlUnknownUnicastPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vnis: {
        value: cdktf.listMapperHcl(l2VpnBridgeGroupBridgeDomainVnisToHclTerraform, false)(this._vnis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnBridgeGroupBridgeDomainVnisList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
