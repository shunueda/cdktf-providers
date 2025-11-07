// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#advertise_default_route Vrf#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#advertise_host_route Vrf#advertise_host_route}
  */
  readonly advertiseHostRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#deploy Vrf#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#deploy_timeout Vrf#deploy_timeout}
  */
  readonly deployTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#description Vrf#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#extension_template Vrf#extension_template}
  */
  readonly extensionTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#fabric_name Vrf#fabric_name}
  */
  readonly fabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#id Vrf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#intf_description Vrf#intf_description}
  */
  readonly intfDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#ipv6_link_local_flag Vrf#ipv6_link_local_flag}
  */
  readonly ipv6LinkLocalFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#loopback_id Vrf#loopback_id}
  */
  readonly loopbackId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#max_bgp_path Vrf#max_bgp_path}
  */
  readonly maxBgpPath?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#max_ibgp_path Vrf#max_ibgp_path}
  */
  readonly maxIbgpPath?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#mtu Vrf#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#mutlicast_address Vrf#mutlicast_address}
  */
  readonly mutlicastAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#mutlicast_group Vrf#mutlicast_group}
  */
  readonly mutlicastGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#name Vrf#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#rp_address Vrf#rp_address}
  */
  readonly rpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#rp_external_flag Vrf#rp_external_flag}
  */
  readonly rpExternalFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#segment_id Vrf#segment_id}
  */
  readonly segmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#service_template Vrf#service_template}
  */
  readonly serviceTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#source Vrf#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#static_default_route Vrf#static_default_route}
  */
  readonly staticDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#tag Vrf#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#template Vrf#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#trm_bgw_msite_flag Vrf#trm_bgw_msite_flag}
  */
  readonly trmBgwMsiteFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#trm_enable Vrf#trm_enable}
  */
  readonly trmEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#vlan_id Vrf#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#vlan_name Vrf#vlan_name}
  */
  readonly vlanName?: string;
  /**
  * attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#attachments Vrf#attachments}
  */
  readonly attachments?: VrfAttachments[] | cdktf.IResolvable;
}
export interface VrfAttachmentsVrfLite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#auto_vrf_lite_flag Vrf#auto_vrf_lite_flag}
  */
  readonly autoVrfLiteFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#dot1q_id Vrf#dot1q_id}
  */
  readonly dot1QId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#interface_name Vrf#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#ip_mask Vrf#ip_mask}
  */
  readonly ipMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#ipv6_mask Vrf#ipv6_mask}
  */
  readonly ipv6Mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#ipv6_neighbor Vrf#ipv6_neighbor}
  */
  readonly ipv6Neighbor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#neighbor_asn Vrf#neighbor_asn}
  */
  readonly neighborAsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#neighbor_ip Vrf#neighbor_ip}
  */
  readonly neighborIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#peer_vrf_name Vrf#peer_vrf_name}
  */
  readonly peerVrfName: string;
}

export function vrfAttachmentsVrfLiteToTerraform(struct?: VrfAttachmentsVrfLite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_vrf_lite_flag: cdktf.stringToTerraform(struct!.autoVrfLiteFlag),
    dot1q_id: cdktf.stringToTerraform(struct!.dot1QId),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
    ipv6_mask: cdktf.stringToTerraform(struct!.ipv6Mask),
    ipv6_neighbor: cdktf.stringToTerraform(struct!.ipv6Neighbor),
    neighbor_asn: cdktf.stringToTerraform(struct!.neighborAsn),
    neighbor_ip: cdktf.stringToTerraform(struct!.neighborIp),
    peer_vrf_name: cdktf.stringToTerraform(struct!.peerVrfName),
  }
}


export function vrfAttachmentsVrfLiteToHclTerraform(struct?: VrfAttachmentsVrfLite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_vrf_lite_flag: {
      value: cdktf.stringToHclTerraform(struct!.autoVrfLiteFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1q_id: {
      value: cdktf.stringToHclTerraform(struct!.dot1QId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_neighbor: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_asn: {
      value: cdktf.stringToHclTerraform(struct!.neighborAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_ip: {
      value: cdktf.stringToHclTerraform(struct!.neighborIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.peerVrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfAttachmentsVrfLiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfAttachmentsVrfLite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoVrfLiteFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoVrfLiteFlag = this._autoVrfLiteFlag;
    }
    if (this._dot1QId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1QId = this._dot1QId;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMask = this._ipMask;
    }
    if (this._ipv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mask = this._ipv6Mask;
    }
    if (this._ipv6Neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Neighbor = this._ipv6Neighbor;
    }
    if (this._neighborAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborAsn = this._neighborAsn;
    }
    if (this._neighborIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIp = this._neighborIp;
    }
    if (this._peerVrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVrfName = this._peerVrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfAttachmentsVrfLite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoVrfLiteFlag = undefined;
      this._dot1QId = undefined;
      this._interfaceName = undefined;
      this._ipMask = undefined;
      this._ipv6Mask = undefined;
      this._ipv6Neighbor = undefined;
      this._neighborAsn = undefined;
      this._neighborIp = undefined;
      this._peerVrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoVrfLiteFlag = value.autoVrfLiteFlag;
      this._dot1QId = value.dot1QId;
      this._interfaceName = value.interfaceName;
      this._ipMask = value.ipMask;
      this._ipv6Mask = value.ipv6Mask;
      this._ipv6Neighbor = value.ipv6Neighbor;
      this._neighborAsn = value.neighborAsn;
      this._neighborIp = value.neighborIp;
      this._peerVrfName = value.peerVrfName;
    }
  }

  // auto_vrf_lite_flag - computed: false, optional: true, required: false
  private _autoVrfLiteFlag?: string; 
  public get autoVrfLiteFlag() {
    return this.getStringAttribute('auto_vrf_lite_flag');
  }
  public set autoVrfLiteFlag(value: string) {
    this._autoVrfLiteFlag = value;
  }
  public resetAutoVrfLiteFlag() {
    this._autoVrfLiteFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVrfLiteFlagInput() {
    return this._autoVrfLiteFlag;
  }

  // dot1q_id - computed: false, optional: true, required: false
  private _dot1QId?: string; 
  public get dot1QId() {
    return this.getStringAttribute('dot1q_id');
  }
  public set dot1QId(value: string) {
    this._dot1QId = value;
  }
  public resetDot1QId() {
    this._dot1QId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1QIdInput() {
    return this._dot1QId;
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

  // ip_mask - computed: false, optional: true, required: false
  private _ipMask?: string; 
  public get ipMask() {
    return this.getStringAttribute('ip_mask');
  }
  public set ipMask(value: string) {
    this._ipMask = value;
  }
  public resetIpMask() {
    this._ipMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskInput() {
    return this._ipMask;
  }

  // ipv6_mask - computed: false, optional: true, required: false
  private _ipv6Mask?: string; 
  public get ipv6Mask() {
    return this.getStringAttribute('ipv6_mask');
  }
  public set ipv6Mask(value: string) {
    this._ipv6Mask = value;
  }
  public resetIpv6Mask() {
    this._ipv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskInput() {
    return this._ipv6Mask;
  }

  // ipv6_neighbor - computed: false, optional: true, required: false
  private _ipv6Neighbor?: string; 
  public get ipv6Neighbor() {
    return this.getStringAttribute('ipv6_neighbor');
  }
  public set ipv6Neighbor(value: string) {
    this._ipv6Neighbor = value;
  }
  public resetIpv6Neighbor() {
    this._ipv6Neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborInput() {
    return this._ipv6Neighbor;
  }

  // neighbor_asn - computed: false, optional: true, required: false
  private _neighborAsn?: string; 
  public get neighborAsn() {
    return this.getStringAttribute('neighbor_asn');
  }
  public set neighborAsn(value: string) {
    this._neighborAsn = value;
  }
  public resetNeighborAsn() {
    this._neighborAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAsnInput() {
    return this._neighborAsn;
  }

  // neighbor_ip - computed: false, optional: true, required: false
  private _neighborIp?: string; 
  public get neighborIp() {
    return this.getStringAttribute('neighbor_ip');
  }
  public set neighborIp(value: string) {
    this._neighborIp = value;
  }
  public resetNeighborIp() {
    this._neighborIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborIpInput() {
    return this._neighborIp;
  }

  // peer_vrf_name - computed: false, optional: false, required: true
  private _peerVrfName?: string; 
  public get peerVrfName() {
    return this.getStringAttribute('peer_vrf_name');
  }
  public set peerVrfName(value: string) {
    this._peerVrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVrfNameInput() {
    return this._peerVrfName;
  }
}

export class VrfAttachmentsVrfLiteList extends cdktf.ComplexList {
  public internalValue? : VrfAttachmentsVrfLite[] | cdktf.IResolvable

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
  public get(index: number): VrfAttachmentsVrfLiteOutputReference {
    return new VrfAttachmentsVrfLiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#attach Vrf#attach}
  */
  readonly attach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#extension_values Vrf#extension_values}
  */
  readonly extensionValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#free_form_config Vrf#free_form_config}
  */
  readonly freeFormConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#loopback_id Vrf#loopback_id}
  */
  readonly loopbackId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#loopback_ipv4 Vrf#loopback_ipv4}
  */
  readonly loopbackIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#loopback_ipv6 Vrf#loopback_ipv6}
  */
  readonly loopbackIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#serial_number Vrf#serial_number}
  */
  readonly serialNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#vlan_id Vrf#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * vrf_lite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#vrf_lite Vrf#vrf_lite}
  */
  readonly vrfLite?: VrfAttachmentsVrfLite[] | cdktf.IResolvable;
}

export function vrfAttachmentsToTerraform(struct?: VrfAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach: cdktf.booleanToTerraform(struct!.attach),
    extension_values: cdktf.stringToTerraform(struct!.extensionValues),
    free_form_config: cdktf.stringToTerraform(struct!.freeFormConfig),
    loopback_id: cdktf.numberToTerraform(struct!.loopbackId),
    loopback_ipv4: cdktf.stringToTerraform(struct!.loopbackIpv4),
    loopback_ipv6: cdktf.stringToTerraform(struct!.loopbackIpv6),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vrf_lite: cdktf.listMapper(vrfAttachmentsVrfLiteToTerraform, true)(struct!.vrfLite),
  }
}


export function vrfAttachmentsToHclTerraform(struct?: VrfAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach: {
      value: cdktf.booleanToHclTerraform(struct!.attach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extension_values: {
      value: cdktf.stringToHclTerraform(struct!.extensionValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    free_form_config: {
      value: cdktf.stringToHclTerraform(struct!.freeFormConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_id: {
      value: cdktf.numberToHclTerraform(struct!.loopbackId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loopback_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.loopbackIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.loopbackIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf_lite: {
      value: cdktf.listMapperHcl(vrfAttachmentsVrfLiteToHclTerraform, true)(struct!.vrfLite),
      isBlock: true,
      type: "set",
      storageClassType: "VrfAttachmentsVrfLiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attach !== undefined) {
      hasAnyValues = true;
      internalValueResult.attach = this._attach;
    }
    if (this._extensionValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionValues = this._extensionValues;
    }
    if (this._freeFormConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFormConfig = this._freeFormConfig;
    }
    if (this._loopbackId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackId = this._loopbackId;
    }
    if (this._loopbackIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackIpv4 = this._loopbackIpv4;
    }
    if (this._loopbackIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackIpv6 = this._loopbackIpv6;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vrfLite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfLite = this._vrfLite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attach = undefined;
      this._extensionValues = undefined;
      this._freeFormConfig = undefined;
      this._loopbackId = undefined;
      this._loopbackIpv4 = undefined;
      this._loopbackIpv6 = undefined;
      this._serialNumber = undefined;
      this._vlanId = undefined;
      this._vrfLite.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attach = value.attach;
      this._extensionValues = value.extensionValues;
      this._freeFormConfig = value.freeFormConfig;
      this._loopbackId = value.loopbackId;
      this._loopbackIpv4 = value.loopbackIpv4;
      this._loopbackIpv6 = value.loopbackIpv6;
      this._serialNumber = value.serialNumber;
      this._vlanId = value.vlanId;
      this._vrfLite.internalValue = value.vrfLite;
    }
  }

  // attach - computed: false, optional: true, required: false
  private _attach?: boolean | cdktf.IResolvable; 
  public get attach() {
    return this.getBooleanAttribute('attach');
  }
  public set attach(value: boolean | cdktf.IResolvable) {
    this._attach = value;
  }
  public resetAttach() {
    this._attach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachInput() {
    return this._attach;
  }

  // extension_values - computed: true, optional: true, required: false
  private _extensionValues?: string; 
  public get extensionValues() {
    return this.getStringAttribute('extension_values');
  }
  public set extensionValues(value: string) {
    this._extensionValues = value;
  }
  public resetExtensionValues() {
    this._extensionValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionValuesInput() {
    return this._extensionValues;
  }

  // free_form_config - computed: true, optional: true, required: false
  private _freeFormConfig?: string; 
  public get freeFormConfig() {
    return this.getStringAttribute('free_form_config');
  }
  public set freeFormConfig(value: string) {
    this._freeFormConfig = value;
  }
  public resetFreeFormConfig() {
    this._freeFormConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFormConfigInput() {
    return this._freeFormConfig;
  }

  // loopback_id - computed: true, optional: true, required: false
  private _loopbackId?: number; 
  public get loopbackId() {
    return this.getNumberAttribute('loopback_id');
  }
  public set loopbackId(value: number) {
    this._loopbackId = value;
  }
  public resetLoopbackId() {
    this._loopbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIdInput() {
    return this._loopbackId;
  }

  // loopback_ipv4 - computed: true, optional: true, required: false
  private _loopbackIpv4?: string; 
  public get loopbackIpv4() {
    return this.getStringAttribute('loopback_ipv4');
  }
  public set loopbackIpv4(value: string) {
    this._loopbackIpv4 = value;
  }
  public resetLoopbackIpv4() {
    this._loopbackIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpv4Input() {
    return this._loopbackIpv4;
  }

  // loopback_ipv6 - computed: true, optional: true, required: false
  private _loopbackIpv6?: string; 
  public get loopbackIpv6() {
    return this.getStringAttribute('loopback_ipv6');
  }
  public set loopbackIpv6(value: string) {
    this._loopbackIpv6 = value;
  }
  public resetLoopbackIpv6() {
    this._loopbackIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpv6Input() {
    return this._loopbackIpv6;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrf_lite - computed: false, optional: true, required: false
  private _vrfLite = new VrfAttachmentsVrfLiteList(this, "vrf_lite", true);
  public get vrfLite() {
    return this._vrfLite;
  }
  public putVrfLite(value: VrfAttachmentsVrfLite[] | cdktf.IResolvable) {
    this._vrfLite.internalValue = value;
  }
  public resetVrfLite() {
    this._vrfLite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfLiteInput() {
    return this._vrfLite.internalValue;
  }
}

export class VrfAttachmentsList extends cdktf.ComplexList {
  public internalValue? : VrfAttachments[] | cdktf.IResolvable

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
  public get(index: number): VrfAttachmentsOutputReference {
    return new VrfAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf dcnm_vrf}
*/
export class Vrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vrf to import
  * @param importFromId The id of the existing Vrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/vrf dcnm_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrfConfig
  */
  public constructor(scope: Construct, id: string, config: VrfConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm_vrf',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseDefaultRoute = config.advertiseDefaultRoute;
    this._advertiseHostRoute = config.advertiseHostRoute;
    this._deploy = config.deploy;
    this._deployTimeout = config.deployTimeout;
    this._description = config.description;
    this._extensionTemplate = config.extensionTemplate;
    this._fabricName = config.fabricName;
    this._id = config.id;
    this._intfDescription = config.intfDescription;
    this._ipv6LinkLocalFlag = config.ipv6LinkLocalFlag;
    this._loopbackId = config.loopbackId;
    this._maxBgpPath = config.maxBgpPath;
    this._maxIbgpPath = config.maxIbgpPath;
    this._mtu = config.mtu;
    this._mutlicastAddress = config.mutlicastAddress;
    this._mutlicastGroup = config.mutlicastGroup;
    this._name = config.name;
    this._rpAddress = config.rpAddress;
    this._rpExternalFlag = config.rpExternalFlag;
    this._segmentId = config.segmentId;
    this._serviceTemplate = config.serviceTemplate;
    this._source = config.source;
    this._staticDefaultRoute = config.staticDefaultRoute;
    this._tag = config.tag;
    this._template = config.template;
    this._trmBgwMsiteFlag = config.trmBgwMsiteFlag;
    this._trmEnable = config.trmEnable;
    this._vlanId = config.vlanId;
    this._vlanName = config.vlanName;
    this._attachments.internalValue = config.attachments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_default_route - computed: false, optional: true, required: false
  private _advertiseDefaultRoute?: string; 
  public get advertiseDefaultRoute() {
    return this.getStringAttribute('advertise_default_route');
  }
  public set advertiseDefaultRoute(value: string) {
    this._advertiseDefaultRoute = value;
  }
  public resetAdvertiseDefaultRoute() {
    this._advertiseDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseDefaultRouteInput() {
    return this._advertiseDefaultRoute;
  }

  // advertise_host_route - computed: true, optional: true, required: false
  private _advertiseHostRoute?: string; 
  public get advertiseHostRoute() {
    return this.getStringAttribute('advertise_host_route');
  }
  public set advertiseHostRoute(value: string) {
    this._advertiseHostRoute = value;
  }
  public resetAdvertiseHostRoute() {
    this._advertiseHostRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseHostRouteInput() {
    return this._advertiseHostRoute;
  }

  // deploy - computed: false, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // deploy_timeout - computed: false, optional: true, required: false
  private _deployTimeout?: number; 
  public get deployTimeout() {
    return this.getNumberAttribute('deploy_timeout');
  }
  public set deployTimeout(value: number) {
    this._deployTimeout = value;
  }
  public resetDeployTimeout() {
    this._deployTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTimeoutInput() {
    return this._deployTimeout;
  }

  // description - computed: true, optional: true, required: false
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

  // extension_template - computed: false, optional: true, required: false
  private _extensionTemplate?: string; 
  public get extensionTemplate() {
    return this.getStringAttribute('extension_template');
  }
  public set extensionTemplate(value: string) {
    this._extensionTemplate = value;
  }
  public resetExtensionTemplate() {
    this._extensionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTemplateInput() {
    return this._extensionTemplate;
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
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

  // intf_description - computed: true, optional: true, required: false
  private _intfDescription?: string; 
  public get intfDescription() {
    return this.getStringAttribute('intf_description');
  }
  public set intfDescription(value: string) {
    this._intfDescription = value;
  }
  public resetIntfDescription() {
    this._intfDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDescriptionInput() {
    return this._intfDescription;
  }

  // ipv6_link_local_flag - computed: false, optional: true, required: false
  private _ipv6LinkLocalFlag?: string; 
  public get ipv6LinkLocalFlag() {
    return this.getStringAttribute('ipv6_link_local_flag');
  }
  public set ipv6LinkLocalFlag(value: string) {
    this._ipv6LinkLocalFlag = value;
  }
  public resetIpv6LinkLocalFlag() {
    this._ipv6LinkLocalFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalFlagInput() {
    return this._ipv6LinkLocalFlag;
  }

  // loopback_id - computed: true, optional: true, required: false
  private _loopbackId?: number; 
  public get loopbackId() {
    return this.getNumberAttribute('loopback_id');
  }
  public set loopbackId(value: number) {
    this._loopbackId = value;
  }
  public resetLoopbackId() {
    this._loopbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIdInput() {
    return this._loopbackId;
  }

  // max_bgp_path - computed: false, optional: true, required: false
  private _maxBgpPath?: number; 
  public get maxBgpPath() {
    return this.getNumberAttribute('max_bgp_path');
  }
  public set maxBgpPath(value: number) {
    this._maxBgpPath = value;
  }
  public resetMaxBgpPath() {
    this._maxBgpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBgpPathInput() {
    return this._maxBgpPath;
  }

  // max_ibgp_path - computed: false, optional: true, required: false
  private _maxIbgpPath?: number; 
  public get maxIbgpPath() {
    return this.getNumberAttribute('max_ibgp_path');
  }
  public set maxIbgpPath(value: number) {
    this._maxIbgpPath = value;
  }
  public resetMaxIbgpPath() {
    this._maxIbgpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIbgpPathInput() {
    return this._maxIbgpPath;
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

  // mutlicast_address - computed: true, optional: true, required: false
  private _mutlicastAddress?: string; 
  public get mutlicastAddress() {
    return this.getStringAttribute('mutlicast_address');
  }
  public set mutlicastAddress(value: string) {
    this._mutlicastAddress = value;
  }
  public resetMutlicastAddress() {
    this._mutlicastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutlicastAddressInput() {
    return this._mutlicastAddress;
  }

  // mutlicast_group - computed: true, optional: true, required: false
  private _mutlicastGroup?: string; 
  public get mutlicastGroup() {
    return this.getStringAttribute('mutlicast_group');
  }
  public set mutlicastGroup(value: string) {
    this._mutlicastGroup = value;
  }
  public resetMutlicastGroup() {
    this._mutlicastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutlicastGroupInput() {
    return this._mutlicastGroup;
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

  // rp_address - computed: true, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }

  // rp_external_flag - computed: true, optional: true, required: false
  private _rpExternalFlag?: string; 
  public get rpExternalFlag() {
    return this.getStringAttribute('rp_external_flag');
  }
  public set rpExternalFlag(value: string) {
    this._rpExternalFlag = value;
  }
  public resetRpExternalFlag() {
    this._rpExternalFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpExternalFlagInput() {
    return this._rpExternalFlag;
  }

  // segment_id - computed: true, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // service_template - computed: true, optional: true, required: false
  private _serviceTemplate?: string; 
  public get serviceTemplate() {
    return this.getStringAttribute('service_template');
  }
  public set serviceTemplate(value: string) {
    this._serviceTemplate = value;
  }
  public resetServiceTemplate() {
    this._serviceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateInput() {
    return this._serviceTemplate;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // static_default_route - computed: false, optional: true, required: false
  private _staticDefaultRoute?: string; 
  public get staticDefaultRoute() {
    return this.getStringAttribute('static_default_route');
  }
  public set staticDefaultRoute(value: string) {
    this._staticDefaultRoute = value;
  }
  public resetStaticDefaultRoute() {
    this._staticDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticDefaultRouteInput() {
    return this._staticDefaultRoute;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // trm_bgw_msite_flag - computed: true, optional: true, required: false
  private _trmBgwMsiteFlag?: string; 
  public get trmBgwMsiteFlag() {
    return this.getStringAttribute('trm_bgw_msite_flag');
  }
  public set trmBgwMsiteFlag(value: string) {
    this._trmBgwMsiteFlag = value;
  }
  public resetTrmBgwMsiteFlag() {
    this._trmBgwMsiteFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trmBgwMsiteFlagInput() {
    return this._trmBgwMsiteFlag;
  }

  // trm_enable - computed: true, optional: true, required: false
  private _trmEnable?: string; 
  public get trmEnable() {
    return this.getStringAttribute('trm_enable');
  }
  public set trmEnable(value: string) {
    this._trmEnable = value;
  }
  public resetTrmEnable() {
    this._trmEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trmEnableInput() {
    return this._trmEnable;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_name - computed: true, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments = new VrfAttachmentsList(this, "attachments", true);
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: VrfAttachments[] | cdktf.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_default_route: cdktf.stringToTerraform(this._advertiseDefaultRoute),
      advertise_host_route: cdktf.stringToTerraform(this._advertiseHostRoute),
      deploy: cdktf.booleanToTerraform(this._deploy),
      deploy_timeout: cdktf.numberToTerraform(this._deployTimeout),
      description: cdktf.stringToTerraform(this._description),
      extension_template: cdktf.stringToTerraform(this._extensionTemplate),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      id: cdktf.stringToTerraform(this._id),
      intf_description: cdktf.stringToTerraform(this._intfDescription),
      ipv6_link_local_flag: cdktf.stringToTerraform(this._ipv6LinkLocalFlag),
      loopback_id: cdktf.numberToTerraform(this._loopbackId),
      max_bgp_path: cdktf.numberToTerraform(this._maxBgpPath),
      max_ibgp_path: cdktf.numberToTerraform(this._maxIbgpPath),
      mtu: cdktf.numberToTerraform(this._mtu),
      mutlicast_address: cdktf.stringToTerraform(this._mutlicastAddress),
      mutlicast_group: cdktf.stringToTerraform(this._mutlicastGroup),
      name: cdktf.stringToTerraform(this._name),
      rp_address: cdktf.stringToTerraform(this._rpAddress),
      rp_external_flag: cdktf.stringToTerraform(this._rpExternalFlag),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      service_template: cdktf.stringToTerraform(this._serviceTemplate),
      source: cdktf.stringToTerraform(this._source),
      static_default_route: cdktf.stringToTerraform(this._staticDefaultRoute),
      tag: cdktf.stringToTerraform(this._tag),
      template: cdktf.stringToTerraform(this._template),
      trm_bgw_msite_flag: cdktf.stringToTerraform(this._trmBgwMsiteFlag),
      trm_enable: cdktf.stringToTerraform(this._trmEnable),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_name: cdktf.stringToTerraform(this._vlanName),
      attachments: cdktf.listMapper(vrfAttachmentsToTerraform, true)(this._attachments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_default_route: {
        value: cdktf.stringToHclTerraform(this._advertiseDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_host_route: {
        value: cdktf.stringToHclTerraform(this._advertiseHostRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_timeout: {
        value: cdktf.numberToHclTerraform(this._deployTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_template: {
        value: cdktf.stringToHclTerraform(this._extensionTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
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
      intf_description: {
        value: cdktf.stringToHclTerraform(this._intfDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_link_local_flag: {
        value: cdktf.stringToHclTerraform(this._ipv6LinkLocalFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_id: {
        value: cdktf.numberToHclTerraform(this._loopbackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_bgp_path: {
        value: cdktf.numberToHclTerraform(this._maxBgpPath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ibgp_path: {
        value: cdktf.numberToHclTerraform(this._maxIbgpPath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mutlicast_address: {
        value: cdktf.stringToHclTerraform(this._mutlicastAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mutlicast_group: {
        value: cdktf.stringToHclTerraform(this._mutlicastGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_address: {
        value: cdktf.stringToHclTerraform(this._rpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_external_flag: {
        value: cdktf.stringToHclTerraform(this._rpExternalFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_template: {
        value: cdktf.stringToHclTerraform(this._serviceTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_default_route: {
        value: cdktf.stringToHclTerraform(this._staticDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trm_bgw_msite_flag: {
        value: cdktf.stringToHclTerraform(this._trmBgwMsiteFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trm_enable: {
        value: cdktf.stringToHclTerraform(this._trmEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_name: {
        value: cdktf.stringToHclTerraform(this._vlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachments: {
        value: cdktf.listMapperHcl(vrfAttachmentsToHclTerraform, true)(this._attachments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfAttachmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
