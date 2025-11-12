// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, let OpenNebula to attribute VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#automatic_vlan_id VirtualNetwork#automatic_vlan_id}
  */
  readonly automaticVlanId?: boolean | cdktf.IResolvable;
  /**
  * Name of the bridge interface to which the vnet should be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#bridge VirtualNetwork#bridge}
  */
  readonly bridge?: string;
  /**
  * List of cluster IDs hosting the virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#cluster_ids VirtualNetwork#cluster_ids}
  */
  readonly clusterIds?: number[];
  /**
  * Description of the vnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#description VirtualNetwork#description}
  */
  readonly description?: string;
  /**
  * DNS IP if necessary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#dns VirtualNetwork#dns}
  */
  readonly dns?: string;
  /**
  * Gateway IP if necessary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#gateway VirtualNetwork#gateway}
  */
  readonly gateway?: string;
  /**
  * Name of the Group that onws the Virtual Network, If empty, it uses caller group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#group VirtualNetwork#group}
  */
  readonly group?: string;
  /**
  * MTU of the Guest interface. Must be lower or equal to 'mtu' (defaut: 1500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#guest_mtu VirtualNetwork#guest_mtu}
  */
  readonly guestMtu?: number;
  /**
  * List of IPs to be held the VNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#hold_ips VirtualNetwork#hold_ips}
  */
  readonly holdIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#id VirtualNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#lock VirtualNetwork#lock}
  */
  readonly lock?: string;
  /**
  * MTU of the vnet (defaut: 1500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#mtu VirtualNetwork#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the vnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name: string;
  /**
  * Network Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#network_address VirtualNetwork#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Network Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#network_mask VirtualNetwork#network_mask}
  */
  readonly networkMask?: string;
  /**
  * Permissions for the vnet (in Unix format, owner-group-other, use-manage-admin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#permissions VirtualNetwork#permissions}
  */
  readonly permissions?: string;
  /**
  * Name of the physical device to which the vnet should be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#physical_device VirtualNetwork#physical_device}
  */
  readonly physicalDevice?: string;
  /**
  * Address Range ID to be used for the reservation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#reservation_ar_id VirtualNetwork#reservation_ar_id}
  */
  readonly reservationArId?: number;
  /**
  * First IP of the reservation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#reservation_first_ip VirtualNetwork#reservation_first_ip}
  */
  readonly reservationFirstIp?: string;
  /**
  * First IP6 of the reservation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#reservation_first_ip6 VirtualNetwork#reservation_first_ip6}
  */
  readonly reservationFirstIp6?: string;
  /**
  * Reserve this many IPs from reservation_vnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#reservation_size VirtualNetwork#reservation_size}
  */
  readonly reservationSize?: number;
  /**
  * Create a reservation from this VNET ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#reservation_vnet VirtualNetwork#reservation_vnet}
  */
  readonly reservationVnet?: number;
  /**
  * Search Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#search_domain VirtualNetwork#search_domain}
  */
  readonly searchDomain?: string;
  /**
  * List of Security Group IDs to be applied to the VNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#security_groups VirtualNetwork#security_groups}
  */
  readonly securityGroups?: number[];
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#tags VirtualNetwork#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of the Virtual Network: dummy, bridge, fw, ebtables, 802.1Q, vxlan, ovswitch. Default is 'bridge'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#type VirtualNetwork#type}
  */
  readonly type?: string;
  /**
  * Name of the user that onws the Virtual Network, If empty, it uses caller group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#user VirtualNetwork#user}
  */
  readonly user?: string;
  /**
  * VLAN ID. Only if 'Type' is : 802.1Q, vxlan or ovswich and if 'automatic_vlan_id' is not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#vlan_id VirtualNetwork#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * ar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#ar VirtualNetwork#ar}
  */
  readonly ar?: VirtualNetworkAr[] | cdktf.IResolvable;
  /**
  * template_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#template_section VirtualNetwork#template_section}
  */
  readonly templateSection?: VirtualNetworkTemplateSection[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#timeouts VirtualNetwork#timeouts}
  */
  readonly timeouts?: VirtualNetworkTimeouts;
}
export interface VirtualNetworkAr {
  /**
  * Type of the Address Range: IP4, IP6. Default is 'IP4'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#ar_type VirtualNetwork#ar_type}
  */
  readonly arType?: string;
  /**
  * Global prefix for IP6 or IP4_6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#global_prefix VirtualNetwork#global_prefix}
  */
  readonly globalPrefix?: string;
  /**
  * Start IPv4 of the range to be allocated (Required if IP4 or IP4_6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#ip4 VirtualNetwork#ip4}
  */
  readonly ip4?: string;
  /**
  * Start IPv6 of the range to be allocated (Required if IP6_STATIC or IP4_6_STATIC)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#ip6 VirtualNetwork#ip6}
  */
  readonly ip6?: string;
  /**
  * Start MAC of the range to be allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#mac VirtualNetwork#mac}
  */
  readonly mac?: string;
  /**
  * Prefix lenght Only needed for IP6_STATIC or IP4_6_STATIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#prefix_length VirtualNetwork#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * Size (in number) of the ip range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#size VirtualNetwork#size}
  */
  readonly size: number;
  /**
  * ULA prefix for IP6 or IP4_6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#ula_prefix VirtualNetwork#ula_prefix}
  */
  readonly ulaPrefix?: string;
}

export function virtualNetworkArToTerraform(struct?: VirtualNetworkAr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ar_type: cdktf.stringToTerraform(struct!.arType),
    global_prefix: cdktf.stringToTerraform(struct!.globalPrefix),
    ip4: cdktf.stringToTerraform(struct!.ip4),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    mac: cdktf.stringToTerraform(struct!.mac),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    size: cdktf.numberToTerraform(struct!.size),
    ula_prefix: cdktf.stringToTerraform(struct!.ulaPrefix),
  }
}


export function virtualNetworkArToHclTerraform(struct?: VirtualNetworkAr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ar_type: {
      value: cdktf.stringToHclTerraform(struct!.arType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_prefix: {
      value: cdktf.stringToHclTerraform(struct!.globalPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip4: {
      value: cdktf.stringToHclTerraform(struct!.ip4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ula_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ulaPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkArOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkAr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arType !== undefined) {
      hasAnyValues = true;
      internalValueResult.arType = this._arType;
    }
    if (this._globalPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalPrefix = this._globalPrefix;
    }
    if (this._ip4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip4 = this._ip4;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._ulaPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ulaPrefix = this._ulaPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkAr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arType = undefined;
      this._globalPrefix = undefined;
      this._ip4 = undefined;
      this._ip6 = undefined;
      this._mac = undefined;
      this._prefixLength = undefined;
      this._size = undefined;
      this._ulaPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arType = value.arType;
      this._globalPrefix = value.globalPrefix;
      this._ip4 = value.ip4;
      this._ip6 = value.ip6;
      this._mac = value.mac;
      this._prefixLength = value.prefixLength;
      this._size = value.size;
      this._ulaPrefix = value.ulaPrefix;
    }
  }

  // ar_type - computed: false, optional: true, required: false
  private _arType?: string; 
  public get arType() {
    return this.getStringAttribute('ar_type');
  }
  public set arType(value: string) {
    this._arType = value;
  }
  public resetArType() {
    this._arType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arTypeInput() {
    return this._arType;
  }

  // computed_global_prefix - computed: true, optional: false, required: false
  public get computedGlobalPrefix() {
    return this.getStringAttribute('computed_global_prefix');
  }

  // computed_ip6 - computed: true, optional: false, required: false
  public get computedIp6() {
    return this.getStringAttribute('computed_ip6');
  }

  // computed_mac - computed: true, optional: false, required: false
  public get computedMac() {
    return this.getStringAttribute('computed_mac');
  }

  // computed_ula_prefix - computed: true, optional: false, required: false
  public get computedUlaPrefix() {
    return this.getStringAttribute('computed_ula_prefix');
  }

  // global_prefix - computed: false, optional: true, required: false
  private _globalPrefix?: string; 
  public get globalPrefix() {
    return this.getStringAttribute('global_prefix');
  }
  public set globalPrefix(value: string) {
    this._globalPrefix = value;
  }
  public resetGlobalPrefix() {
    this._globalPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPrefixInput() {
    return this._globalPrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip4 - computed: false, optional: true, required: false
  private _ip4?: string; 
  public get ip4() {
    return this.getStringAttribute('ip4');
  }
  public set ip4(value: string) {
    this._ip4 = value;
  }
  public resetIp4() {
    this._ip4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4Input() {
    return this._ip4;
  }

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ula_prefix - computed: false, optional: true, required: false
  private _ulaPrefix?: string; 
  public get ulaPrefix() {
    return this.getStringAttribute('ula_prefix');
  }
  public set ulaPrefix(value: string) {
    this._ulaPrefix = value;
  }
  public resetUlaPrefix() {
    this._ulaPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulaPrefixInput() {
    return this._ulaPrefix;
  }
}

export class VirtualNetworkArList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkAr[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkArOutputReference {
    return new VirtualNetworkArOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkTemplateSection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#elements VirtualNetwork#elements}
  */
  readonly elements?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name: string;
}

export function virtualNetworkTemplateSectionToTerraform(struct?: VirtualNetworkTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.elements),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualNetworkTemplateSectionToHclTerraform(struct?: VirtualNetworkTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elements: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.elements),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkTemplateSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkTemplateSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkTemplateSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elements = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elements = value.elements;
      this._name = value.name;
    }
  }

  // elements - computed: false, optional: true, required: false
  private _elements?: { [key: string]: string }; 
  public get elements() {
    return this.getStringMapAttribute('elements');
  }
  public set elements(value: { [key: string]: string }) {
    this._elements = value;
  }
  public resetElements() {
    this._elements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VirtualNetworkTemplateSectionList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkTemplateSection[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkTemplateSectionOutputReference {
    return new VirtualNetworkTemplateSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#create VirtualNetwork#create}
  */
  readonly create?: string;
}

export function virtualNetworkTimeoutsToTerraform(struct?: VirtualNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function virtualNetworkTimeoutsToHclTerraform(struct?: VirtualNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network opennebula_virtual_network}
*/
export class VirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetwork to import
  * @param importFromId The id of the existing VirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_network opennebula_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticVlanId = config.automaticVlanId;
    this._bridge = config.bridge;
    this._clusterIds = config.clusterIds;
    this._description = config.description;
    this._dns = config.dns;
    this._gateway = config.gateway;
    this._group = config.group;
    this._guestMtu = config.guestMtu;
    this._holdIps = config.holdIps;
    this._id = config.id;
    this._lock = config.lock;
    this._mtu = config.mtu;
    this._name = config.name;
    this._networkAddress = config.networkAddress;
    this._networkMask = config.networkMask;
    this._permissions = config.permissions;
    this._physicalDevice = config.physicalDevice;
    this._reservationArId = config.reservationArId;
    this._reservationFirstIp = config.reservationFirstIp;
    this._reservationFirstIp6 = config.reservationFirstIp6;
    this._reservationSize = config.reservationSize;
    this._reservationVnet = config.reservationVnet;
    this._searchDomain = config.searchDomain;
    this._securityGroups = config.securityGroups;
    this._tags = config.tags;
    this._type = config.type;
    this._user = config.user;
    this._vlanId = config.vlanId;
    this._ar.internalValue = config.ar;
    this._templateSection.internalValue = config.templateSection;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_vlan_id - computed: true, optional: true, required: false
  private _automaticVlanId?: boolean | cdktf.IResolvable; 
  public get automaticVlanId() {
    return this.getBooleanAttribute('automatic_vlan_id');
  }
  public set automaticVlanId(value: boolean | cdktf.IResolvable) {
    this._automaticVlanId = value;
  }
  public resetAutomaticVlanId() {
    this._automaticVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticVlanIdInput() {
    return this._automaticVlanId;
  }

  // bridge - computed: true, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // cluster_ids - computed: false, optional: true, required: false
  private _clusterIds?: number[]; 
  public get clusterIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cluster_ids')));
  }
  public set clusterIds(value: number[]) {
    this._clusterIds = value;
  }
  public resetClusterIds() {
    this._clusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
  }

  // default_tags - computed: true, optional: false, required: false
  private _defaultTags = new cdktf.StringMap(this, "default_tags");
  public get defaultTags() {
    return this._defaultTags;
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

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // gname - computed: true, optional: false, required: false
  public get gname() {
    return this.getStringAttribute('gname');
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // guest_mtu - computed: false, optional: true, required: false
  private _guestMtu?: number; 
  public get guestMtu() {
    return this.getNumberAttribute('guest_mtu');
  }
  public set guestMtu(value: number) {
    this._guestMtu = value;
  }
  public resetGuestMtu() {
    this._guestMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestMtuInput() {
    return this._guestMtu;
  }

  // hold_ips - computed: false, optional: true, required: false
  private _holdIps?: string[]; 
  public get holdIps() {
    return this.getListAttribute('hold_ips');
  }
  public set holdIps(value: string[]) {
    this._holdIps = value;
  }
  public resetHoldIps() {
    this._holdIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdIpsInput() {
    return this._holdIps;
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

  // lock - computed: false, optional: true, required: false
  private _lock?: string; 
  public get lock() {
    return this.getStringAttribute('lock');
  }
  public set lock(value: string) {
    this._lock = value;
  }
  public resetLock() {
    this._lock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockInput() {
    return this._lock;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_mask - computed: false, optional: true, required: false
  private _networkMask?: string; 
  public get networkMask() {
    return this.getStringAttribute('network_mask');
  }
  public set networkMask(value: string) {
    this._networkMask = value;
  }
  public resetNetworkMask() {
    this._networkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMaskInput() {
    return this._networkMask;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // physical_device - computed: true, optional: true, required: false
  private _physicalDevice?: string; 
  public get physicalDevice() {
    return this.getStringAttribute('physical_device');
  }
  public set physicalDevice(value: string) {
    this._physicalDevice = value;
  }
  public resetPhysicalDevice() {
    this._physicalDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalDeviceInput() {
    return this._physicalDevice;
  }

  // reservation_ar_id - computed: false, optional: true, required: false
  private _reservationArId?: number; 
  public get reservationArId() {
    return this.getNumberAttribute('reservation_ar_id');
  }
  public set reservationArId(value: number) {
    this._reservationArId = value;
  }
  public resetReservationArId() {
    this._reservationArId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationArIdInput() {
    return this._reservationArId;
  }

  // reservation_first_ip - computed: false, optional: true, required: false
  private _reservationFirstIp?: string; 
  public get reservationFirstIp() {
    return this.getStringAttribute('reservation_first_ip');
  }
  public set reservationFirstIp(value: string) {
    this._reservationFirstIp = value;
  }
  public resetReservationFirstIp() {
    this._reservationFirstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationFirstIpInput() {
    return this._reservationFirstIp;
  }

  // reservation_first_ip6 - computed: false, optional: true, required: false
  private _reservationFirstIp6?: string; 
  public get reservationFirstIp6() {
    return this.getStringAttribute('reservation_first_ip6');
  }
  public set reservationFirstIp6(value: string) {
    this._reservationFirstIp6 = value;
  }
  public resetReservationFirstIp6() {
    this._reservationFirstIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationFirstIp6Input() {
    return this._reservationFirstIp6;
  }

  // reservation_size - computed: false, optional: true, required: false
  private _reservationSize?: number; 
  public get reservationSize() {
    return this.getNumberAttribute('reservation_size');
  }
  public set reservationSize(value: number) {
    this._reservationSize = value;
  }
  public resetReservationSize() {
    this._reservationSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationSizeInput() {
    return this._reservationSize;
  }

  // reservation_vnet - computed: false, optional: true, required: false
  private _reservationVnet?: number; 
  public get reservationVnet() {
    return this.getNumberAttribute('reservation_vnet');
  }
  public set reservationVnet(value: number) {
    this._reservationVnet = value;
  }
  public resetReservationVnet() {
    this._reservationVnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationVnetInput() {
    return this._reservationVnet;
  }

  // search_domain - computed: false, optional: true, required: false
  private _searchDomain?: string; 
  public get searchDomain() {
    return this.getStringAttribute('search_domain');
  }
  public set searchDomain(value: string) {
    this._searchDomain = value;
  }
  public resetSearchDomain() {
    this._searchDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainInput() {
    return this._searchDomain;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: number[]; 
  public get securityGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('security_groups')));
  }
  public set securityGroups(value: number[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // uname - computed: true, optional: false, required: false
  public get uname() {
    return this.getStringAttribute('uname');
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // ar - computed: false, optional: true, required: false
  private _ar = new VirtualNetworkArList(this, "ar", true);
  public get ar() {
    return this._ar;
  }
  public putAr(value: VirtualNetworkAr[] | cdktf.IResolvable) {
    this._ar.internalValue = value;
  }
  public resetAr() {
    this._ar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arInput() {
    return this._ar.internalValue;
  }

  // template_section - computed: false, optional: true, required: false
  private _templateSection = new VirtualNetworkTemplateSectionList(this, "template_section", true);
  public get templateSection() {
    return this._templateSection;
  }
  public putTemplateSection(value: VirtualNetworkTemplateSection[] | cdktf.IResolvable) {
    this._templateSection.internalValue = value;
  }
  public resetTemplateSection() {
    this._templateSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSectionInput() {
    return this._templateSection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualNetworkTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_vlan_id: cdktf.booleanToTerraform(this._automaticVlanId),
      bridge: cdktf.stringToTerraform(this._bridge),
      cluster_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._clusterIds),
      description: cdktf.stringToTerraform(this._description),
      dns: cdktf.stringToTerraform(this._dns),
      gateway: cdktf.stringToTerraform(this._gateway),
      group: cdktf.stringToTerraform(this._group),
      guest_mtu: cdktf.numberToTerraform(this._guestMtu),
      hold_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._holdIps),
      id: cdktf.stringToTerraform(this._id),
      lock: cdktf.stringToTerraform(this._lock),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      network_address: cdktf.stringToTerraform(this._networkAddress),
      network_mask: cdktf.stringToTerraform(this._networkMask),
      permissions: cdktf.stringToTerraform(this._permissions),
      physical_device: cdktf.stringToTerraform(this._physicalDevice),
      reservation_ar_id: cdktf.numberToTerraform(this._reservationArId),
      reservation_first_ip: cdktf.stringToTerraform(this._reservationFirstIp),
      reservation_first_ip6: cdktf.stringToTerraform(this._reservationFirstIp6),
      reservation_size: cdktf.numberToTerraform(this._reservationSize),
      reservation_vnet: cdktf.numberToTerraform(this._reservationVnet),
      search_domain: cdktf.stringToTerraform(this._searchDomain),
      security_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._securityGroups),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      user: cdktf.stringToTerraform(this._user),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
      ar: cdktf.listMapper(virtualNetworkArToTerraform, true)(this._ar.internalValue),
      template_section: cdktf.listMapper(virtualNetworkTemplateSectionToTerraform, true)(this._templateSection.internalValue),
      timeouts: virtualNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_vlan_id: {
        value: cdktf.booleanToHclTerraform(this._automaticVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._clusterIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: cdktf.stringToHclTerraform(this._dns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_mtu: {
        value: cdktf.numberToHclTerraform(this._guestMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hold_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._holdIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock: {
        value: cdktf.stringToHclTerraform(this._lock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_address: {
        value: cdktf.stringToHclTerraform(this._networkAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_mask: {
        value: cdktf.stringToHclTerraform(this._networkMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_device: {
        value: cdktf.stringToHclTerraform(this._physicalDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reservation_ar_id: {
        value: cdktf.numberToHclTerraform(this._reservationArId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reservation_first_ip: {
        value: cdktf.stringToHclTerraform(this._reservationFirstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reservation_first_ip6: {
        value: cdktf.stringToHclTerraform(this._reservationFirstIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reservation_size: {
        value: cdktf.numberToHclTerraform(this._reservationSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reservation_vnet: {
        value: cdktf.numberToHclTerraform(this._reservationVnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_domain: {
        value: cdktf.stringToHclTerraform(this._searchDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ar: {
        value: cdktf.listMapperHcl(virtualNetworkArToHclTerraform, true)(this._ar.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualNetworkArList",
      },
      template_section: {
        value: cdktf.listMapperHcl(virtualNetworkTemplateSectionToHclTerraform, true)(this._templateSection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualNetworkTemplateSectionList",
      },
      timeouts: {
        value: virtualNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
