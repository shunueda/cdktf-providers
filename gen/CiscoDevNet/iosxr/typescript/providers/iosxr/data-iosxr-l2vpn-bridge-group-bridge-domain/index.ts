// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_bridge_group_bridge_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrL2VpnBridgeGroupBridgeDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure bridge domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_bridge_group_bridge_domain#bridge_domain_name DataIosxrL2VpnBridgeGroupBridgeDomain#bridge_domain_name}
  */
  readonly bridgeDomainName: string;
  /**
  * Specify the group the bridge belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_bridge_group_bridge_domain#bridge_group_name DataIosxrL2VpnBridgeGroupBridgeDomain#bridge_group_name}
  */
  readonly bridgeGroupName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_bridge_group_bridge_domain#device DataIosxrL2VpnBridgeGroupBridgeDomain#device}
  */
  readonly device?: string;
}
export interface DataIosxrL2VpnBridgeGroupBridgeDomainEvis {
}

export function dataIosxrL2VpnBridgeGroupBridgeDomainEvisToTerraform(struct?: DataIosxrL2VpnBridgeGroupBridgeDomainEvis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnBridgeGroupBridgeDomainEvisToHclTerraform(struct?: DataIosxrL2VpnBridgeGroupBridgeDomainEvis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnBridgeGroupBridgeDomainEvisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnBridgeGroupBridgeDomainEvis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnBridgeGroupBridgeDomainEvis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataIosxrL2VpnBridgeGroupBridgeDomainEvisList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnBridgeGroupBridgeDomainEvisOutputReference {
    return new DataIosxrL2VpnBridgeGroupBridgeDomainEvisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrL2VpnBridgeGroupBridgeDomainInterfaces {
}

export function dataIosxrL2VpnBridgeGroupBridgeDomainInterfacesToTerraform(struct?: DataIosxrL2VpnBridgeGroupBridgeDomainInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnBridgeGroupBridgeDomainInterfacesToHclTerraform(struct?: DataIosxrL2VpnBridgeGroupBridgeDomainInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnBridgeGroupBridgeDomainInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnBridgeGroupBridgeDomainInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnBridgeGroupBridgeDomainInterfaces | undefined) {
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

  // split_horizon_group - computed: true, optional: false, required: false
  public get splitHorizonGroup() {
    return this.getBooleanAttribute('split_horizon_group');
  }
}

export class DataIosxrL2VpnBridgeGroupBridgeDomainInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnBridgeGroupBridgeDomainInterfacesOutputReference {
    return new DataIosxrL2VpnBridgeGroupBridgeDomainInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrL2VpnBridgeGroupBridgeDomainSrv6Evis {
}

export function dataIosxrL2VpnBridgeGroupBridgeDomainSrv6EvisToTerraform(struct?: DataIosxrL2VpnBridgeGroupBridgeDomainSrv6Evis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnBridgeGroupBridgeDomainSrv6EvisToHclTerraform(struct?: DataIosxrL2VpnBridgeGroupBridgeDomainSrv6Evis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnBridgeGroupBridgeDomainSrv6EvisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnBridgeGroupBridgeDomainSrv6Evis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnBridgeGroupBridgeDomainSrv6Evis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataIosxrL2VpnBridgeGroupBridgeDomainSrv6EvisList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnBridgeGroupBridgeDomainSrv6EvisOutputReference {
    return new DataIosxrL2VpnBridgeGroupBridgeDomainSrv6EvisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrL2VpnBridgeGroupBridgeDomainVnis {
}

export function dataIosxrL2VpnBridgeGroupBridgeDomainVnisToTerraform(struct?: DataIosxrL2VpnBridgeGroupBridgeDomainVnis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrL2VpnBridgeGroupBridgeDomainVnisToHclTerraform(struct?: DataIosxrL2VpnBridgeGroupBridgeDomainVnis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrL2VpnBridgeGroupBridgeDomainVnisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrL2VpnBridgeGroupBridgeDomainVnis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrL2VpnBridgeGroupBridgeDomainVnis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vni_id - computed: true, optional: false, required: false
  public get vniId() {
    return this.getNumberAttribute('vni_id');
  }
}

export class DataIosxrL2VpnBridgeGroupBridgeDomainVnisList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrL2VpnBridgeGroupBridgeDomainVnisOutputReference {
    return new DataIosxrL2VpnBridgeGroupBridgeDomainVnisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_bridge_group_bridge_domain iosxr_l2vpn_bridge_group_bridge_domain}
*/
export class DataIosxrL2VpnBridgeGroupBridgeDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_l2vpn_bridge_group_bridge_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrL2VpnBridgeGroupBridgeDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrL2VpnBridgeGroupBridgeDomain to import
  * @param importFromId The id of the existing DataIosxrL2VpnBridgeGroupBridgeDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_bridge_group_bridge_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrL2VpnBridgeGroupBridgeDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_l2vpn_bridge_group_bridge_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/l2vpn_bridge_group_bridge_domain iosxr_l2vpn_bridge_group_bridge_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrL2VpnBridgeGroupBridgeDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrL2VpnBridgeGroupBridgeDomainConfig) {
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
    this._device = config.device;
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

  // evis - computed: true, optional: false, required: false
  private _evis = new DataIosxrL2VpnBridgeGroupBridgeDomainEvisList(this, "evis", false);
  public get evis() {
    return this._evis;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIosxrL2VpnBridgeGroupBridgeDomainInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // srv6_evis - computed: true, optional: false, required: false
  private _srv6Evis = new DataIosxrL2VpnBridgeGroupBridgeDomainSrv6EvisList(this, "srv6_evis", false);
  public get srv6Evis() {
    return this._srv6Evis;
  }

  // storm_control_broadcast_kbps - computed: true, optional: false, required: false
  public get stormControlBroadcastKbps() {
    return this.getNumberAttribute('storm_control_broadcast_kbps');
  }

  // storm_control_broadcast_pps - computed: true, optional: false, required: false
  public get stormControlBroadcastPps() {
    return this.getNumberAttribute('storm_control_broadcast_pps');
  }

  // storm_control_multicast_kbps - computed: true, optional: false, required: false
  public get stormControlMulticastKbps() {
    return this.getNumberAttribute('storm_control_multicast_kbps');
  }

  // storm_control_multicast_pps - computed: true, optional: false, required: false
  public get stormControlMulticastPps() {
    return this.getNumberAttribute('storm_control_multicast_pps');
  }

  // storm_control_unknown_unicast_kbps - computed: true, optional: false, required: false
  public get stormControlUnknownUnicastKbps() {
    return this.getNumberAttribute('storm_control_unknown_unicast_kbps');
  }

  // storm_control_unknown_unicast_pps - computed: true, optional: false, required: false
  public get stormControlUnknownUnicastPps() {
    return this.getNumberAttribute('storm_control_unknown_unicast_pps');
  }

  // vnis - computed: true, optional: false, required: false
  private _vnis = new DataIosxrL2VpnBridgeGroupBridgeDomainVnisList(this, "vnis", false);
  public get vnis() {
    return this._vnis;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_domain_name: cdktf.stringToTerraform(this._bridgeDomainName),
      bridge_group_name: cdktf.stringToTerraform(this._bridgeGroupName),
      device: cdktf.stringToTerraform(this._device),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
