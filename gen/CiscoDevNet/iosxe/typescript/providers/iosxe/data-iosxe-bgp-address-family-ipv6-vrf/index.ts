// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/bgp_address_family_ipv6_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeBgpAddressFamilyIpv6VrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/bgp_address_family_ipv6_vrf#af_name DataIosxeBgpAddressFamilyIpv6Vrf#af_name}
  */
  readonly afName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/bgp_address_family_ipv6_vrf#asn DataIosxeBgpAddressFamilyIpv6Vrf#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/bgp_address_family_ipv6_vrf#device DataIosxeBgpAddressFamilyIpv6Vrf#device}
  */
  readonly device?: string;
}
export interface DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks {
}

export function dataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksToTerraform(struct?: DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksToHclTerraform(struct?: DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backdoor - computed: true, optional: false, required: false
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }

  // evpn - computed: true, optional: false, required: false
  public get evpn() {
    return this.getBooleanAttribute('evpn');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}

export class DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksOutputReference {
    return new DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeBgpAddressFamilyIpv6VrfVrfs {
}

export function dataIosxeBgpAddressFamilyIpv6VrfVrfsToTerraform(struct?: DataIosxeBgpAddressFamilyIpv6VrfVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeBgpAddressFamilyIpv6VrfVrfsToHclTerraform(struct?: DataIosxeBgpAddressFamilyIpv6VrfVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeBgpAddressFamilyIpv6VrfVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeBgpAddressFamilyIpv6VrfVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeBgpAddressFamilyIpv6VrfVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6_unicast_advertise_l2vpn_evpn - computed: true, optional: false, required: false
  public get ipv6UnicastAdvertiseL2VpnEvpn() {
    return this.getBooleanAttribute('ipv6_unicast_advertise_l2vpn_evpn');
  }

  // ipv6_unicast_networks - computed: true, optional: false, required: false
  private _ipv6UnicastNetworks = new DataIosxeBgpAddressFamilyIpv6VrfVrfsIpv6UnicastNetworksList(this, "ipv6_unicast_networks", false);
  public get ipv6UnicastNetworks() {
    return this._ipv6UnicastNetworks;
  }

  // ipv6_unicast_redistribute_connected - computed: true, optional: false, required: false
  public get ipv6UnicastRedistributeConnected() {
    return this.getBooleanAttribute('ipv6_unicast_redistribute_connected');
  }

  // ipv6_unicast_redistribute_static - computed: true, optional: false, required: false
  public get ipv6UnicastRedistributeStatic() {
    return this.getBooleanAttribute('ipv6_unicast_redistribute_static');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeBgpAddressFamilyIpv6VrfVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeBgpAddressFamilyIpv6VrfVrfsOutputReference {
    return new DataIosxeBgpAddressFamilyIpv6VrfVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/bgp_address_family_ipv6_vrf iosxe_bgp_address_family_ipv6_vrf}
*/
export class DataIosxeBgpAddressFamilyIpv6Vrf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_address_family_ipv6_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeBgpAddressFamilyIpv6Vrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeBgpAddressFamilyIpv6Vrf to import
  * @param importFromId The id of the existing DataIosxeBgpAddressFamilyIpv6Vrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/bgp_address_family_ipv6_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeBgpAddressFamilyIpv6Vrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_address_family_ipv6_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/bgp_address_family_ipv6_vrf iosxe_bgp_address_family_ipv6_vrf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeBgpAddressFamilyIpv6VrfConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeBgpAddressFamilyIpv6VrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_address_family_ipv6_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._afName = config.afName;
    this._asn = config.asn;
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vrfs - computed: true, optional: false, required: false
  private _vrfs = new DataIosxeBgpAddressFamilyIpv6VrfVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      af_name: cdktf.stringToTerraform(this._afName),
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
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
