// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricMulticastVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric site this multicast configuration is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#fabric_id FabricMulticastVirtualNetwork#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Name of the IP Pool associated with the fabric site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#ip_pool_name FabricMulticastVirtualNetwork#ip_pool_name}
  */
  readonly ipPoolName: string;
  /**
  * IPv4 Source Specific Multicast (SSM) ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#ipv4_ssm_ranges FabricMulticastVirtualNetwork#ipv4_ssm_ranges}
  */
  readonly ipv4SsmRanges?: string[];
  /**
  * Multicast Rendezvous Points (RP). Required for Any Source Multicast (ASM) scenario
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#multicast_rps FabricMulticastVirtualNetwork#multicast_rps}
  */
  readonly multicastRps?: FabricMulticastVirtualNetworkMulticastRps[] | cdktf.IResolvable;
  /**
  * Name of the virtual network associated with the fabric site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#virtual_network_name FabricMulticastVirtualNetwork#virtual_network_name}
  */
  readonly virtualNetworkName: string;
}
export interface FabricMulticastVirtualNetworkMulticastRps {
  /**
  * IPv4 address of the RP. For external RP configuration, exactly one of ipv4Address or ipv6Address must be provided. For fabric RP, this address is allocated by SDA and should not be provided during RP creation request and SDA allocated address should be retained in subsequent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#ipv4_address FabricMulticastVirtualNetwork#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 Any Source Multicast ranges. Comma seperated list of IPv4 multicast group ranges that will be served by a given Multicast RP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#ipv4_asm_ranges FabricMulticastVirtualNetwork#ipv4_asm_ranges}
  */
  readonly ipv4AsmRanges?: string[];
  /**
  * IPv6 address of the RP. For external RP configuration, exactly one of ipv4Address or ipv6Address must be provided. For fabric RP, this address is allocated by SDA and should not be provided during RP creation request and SDA allocated address should be retained in subsequent requests. ipv6Address can only be provided for virtual networks with dual stack (IPv4 + IPv6) multicast pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#ipv6_address FabricMulticastVirtualNetwork#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 Any Source Multicast ranges. Comma seperated list of IPv6 multicast group ranges that will be served by a given Multicast RP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#ipv6_asm_ranges FabricMulticastVirtualNetwork#ipv6_asm_ranges}
  */
  readonly ipv6AsmRanges?: string[];
  /**
  * Specifies whether it is a default IPv4 RP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#is_default_v4_rp FabricMulticastVirtualNetwork#is_default_v4_rp}
  */
  readonly isDefaultV4Rp?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether it is a default IPv6 RP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#is_default_v6_rp FabricMulticastVirtualNetwork#is_default_v6_rp}
  */
  readonly isDefaultV6Rp?: boolean | cdktf.IResolvable;
  /**
  * IDs of the network devices. This is a required field for fabric RPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#network_device_ids FabricMulticastVirtualNetwork#network_device_ids}
  */
  readonly networkDeviceIds?: string[];
  /**
  * Device location of the RP
  *   - Choices: `EXTERNAL`, `FABRIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#rp_device_location FabricMulticastVirtualNetwork#rp_device_location}
  */
  readonly rpDeviceLocation: string;
}

export function fabricMulticastVirtualNetworkMulticastRpsToTerraform(struct?: FabricMulticastVirtualNetworkMulticastRps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_asm_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4AsmRanges),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_asm_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6AsmRanges),
    is_default_v4_rp: cdktf.booleanToTerraform(struct!.isDefaultV4Rp),
    is_default_v6_rp: cdktf.booleanToTerraform(struct!.isDefaultV6Rp),
    network_device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkDeviceIds),
    rp_device_location: cdktf.stringToTerraform(struct!.rpDeviceLocation),
  }
}


export function fabricMulticastVirtualNetworkMulticastRpsToHclTerraform(struct?: FabricMulticastVirtualNetworkMulticastRps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_asm_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4AsmRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_asm_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6AsmRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_default_v4_rp: {
      value: cdktf.booleanToHclTerraform(struct!.isDefaultV4Rp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_default_v6_rp: {
      value: cdktf.booleanToHclTerraform(struct!.isDefaultV6Rp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_device_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkDeviceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rp_device_location: {
      value: cdktf.stringToHclTerraform(struct!.rpDeviceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricMulticastVirtualNetworkMulticastRpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMulticastVirtualNetworkMulticastRps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AsmRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AsmRanges = this._ipv4AsmRanges;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6AsmRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AsmRanges = this._ipv6AsmRanges;
    }
    if (this._isDefaultV4Rp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefaultV4Rp = this._isDefaultV4Rp;
    }
    if (this._isDefaultV6Rp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefaultV6Rp = this._isDefaultV6Rp;
    }
    if (this._networkDeviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDeviceIds = this._networkDeviceIds;
    }
    if (this._rpDeviceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpDeviceLocation = this._rpDeviceLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricMulticastVirtualNetworkMulticastRps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AsmRanges = undefined;
      this._ipv6Address = undefined;
      this._ipv6AsmRanges = undefined;
      this._isDefaultV4Rp = undefined;
      this._isDefaultV6Rp = undefined;
      this._networkDeviceIds = undefined;
      this._rpDeviceLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AsmRanges = value.ipv4AsmRanges;
      this._ipv6Address = value.ipv6Address;
      this._ipv6AsmRanges = value.ipv6AsmRanges;
      this._isDefaultV4Rp = value.isDefaultV4Rp;
      this._isDefaultV6Rp = value.isDefaultV6Rp;
      this._networkDeviceIds = value.networkDeviceIds;
      this._rpDeviceLocation = value.rpDeviceLocation;
    }
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_asm_ranges - computed: false, optional: true, required: false
  private _ipv4AsmRanges?: string[]; 
  public get ipv4AsmRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_asm_ranges'));
  }
  public set ipv4AsmRanges(value: string[]) {
    this._ipv4AsmRanges = value;
  }
  public resetIpv4AsmRanges() {
    this._ipv4AsmRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AsmRangesInput() {
    return this._ipv4AsmRanges;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_asm_ranges - computed: false, optional: true, required: false
  private _ipv6AsmRanges?: string[]; 
  public get ipv6AsmRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_asm_ranges'));
  }
  public set ipv6AsmRanges(value: string[]) {
    this._ipv6AsmRanges = value;
  }
  public resetIpv6AsmRanges() {
    this._ipv6AsmRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AsmRangesInput() {
    return this._ipv6AsmRanges;
  }

  // is_default_v4_rp - computed: false, optional: true, required: false
  private _isDefaultV4Rp?: boolean | cdktf.IResolvable; 
  public get isDefaultV4Rp() {
    return this.getBooleanAttribute('is_default_v4_rp');
  }
  public set isDefaultV4Rp(value: boolean | cdktf.IResolvable) {
    this._isDefaultV4Rp = value;
  }
  public resetIsDefaultV4Rp() {
    this._isDefaultV4Rp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultV4RpInput() {
    return this._isDefaultV4Rp;
  }

  // is_default_v6_rp - computed: false, optional: true, required: false
  private _isDefaultV6Rp?: boolean | cdktf.IResolvable; 
  public get isDefaultV6Rp() {
    return this.getBooleanAttribute('is_default_v6_rp');
  }
  public set isDefaultV6Rp(value: boolean | cdktf.IResolvable) {
    this._isDefaultV6Rp = value;
  }
  public resetIsDefaultV6Rp() {
    this._isDefaultV6Rp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultV6RpInput() {
    return this._isDefaultV6Rp;
  }

  // network_device_ids - computed: false, optional: true, required: false
  private _networkDeviceIds?: string[]; 
  public get networkDeviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_device_ids'));
  }
  public set networkDeviceIds(value: string[]) {
    this._networkDeviceIds = value;
  }
  public resetNetworkDeviceIds() {
    this._networkDeviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdsInput() {
    return this._networkDeviceIds;
  }

  // rp_device_location - computed: false, optional: false, required: true
  private _rpDeviceLocation?: string; 
  public get rpDeviceLocation() {
    return this.getStringAttribute('rp_device_location');
  }
  public set rpDeviceLocation(value: string) {
    this._rpDeviceLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpDeviceLocationInput() {
    return this._rpDeviceLocation;
  }
}

export class FabricMulticastVirtualNetworkMulticastRpsList extends cdktf.ComplexList {
  public internalValue? : FabricMulticastVirtualNetworkMulticastRps[] | cdktf.IResolvable

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
  public get(index: number): FabricMulticastVirtualNetworkMulticastRpsOutputReference {
    return new FabricMulticastVirtualNetworkMulticastRpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network catalystcenter_fabric_multicast_virtual_network}
*/
export class FabricMulticastVirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_multicast_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricMulticastVirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricMulticastVirtualNetwork to import
  * @param importFromId The id of the existing FabricMulticastVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricMulticastVirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_multicast_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_multicast_virtual_network catalystcenter_fabric_multicast_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricMulticastVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: FabricMulticastVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_multicast_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
    this._ipPoolName = config.ipPoolName;
    this._ipv4SsmRanges = config.ipv4SsmRanges;
    this._multicastRps.internalValue = config.multicastRps;
    this._virtualNetworkName = config.virtualNetworkName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_pool_name - computed: false, optional: false, required: true
  private _ipPoolName?: string; 
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }
  public set ipPoolName(value: string) {
    this._ipPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolNameInput() {
    return this._ipPoolName;
  }

  // ipv4_ssm_ranges - computed: false, optional: true, required: false
  private _ipv4SsmRanges?: string[]; 
  public get ipv4SsmRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_ssm_ranges'));
  }
  public set ipv4SsmRanges(value: string[]) {
    this._ipv4SsmRanges = value;
  }
  public resetIpv4SsmRanges() {
    this._ipv4SsmRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SsmRangesInput() {
    return this._ipv4SsmRanges;
  }

  // multicast_rps - computed: false, optional: true, required: false
  private _multicastRps = new FabricMulticastVirtualNetworkMulticastRpsList(this, "multicast_rps", true);
  public get multicastRps() {
    return this._multicastRps;
  }
  public putMulticastRps(value: FabricMulticastVirtualNetworkMulticastRps[] | cdktf.IResolvable) {
    this._multicastRps.internalValue = value;
  }
  public resetMulticastRps() {
    this._multicastRps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRpsInput() {
    return this._multicastRps.internalValue;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      ip_pool_name: cdktf.stringToTerraform(this._ipPoolName),
      ipv4_ssm_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4SsmRanges),
      multicast_rps: cdktf.listMapper(fabricMulticastVirtualNetworkMulticastRpsToTerraform, false)(this._multicastRps.internalValue),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_pool_name: {
        value: cdktf.stringToHclTerraform(this._ipPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_ssm_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4SsmRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      multicast_rps: {
        value: cdktf.listMapperHcl(fabricMulticastVirtualNetworkMulticastRpsToHclTerraform, false)(this._multicastRps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricMulticastVirtualNetworkMulticastRpsList",
      },
      virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
