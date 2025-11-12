// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlayTunnelVtepConfig extends cdktf.TerraformMetaArguments {
  /**
  * Layer-4 Destination Port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#dest_port OverlayTunnelVtep#dest_port}
  */
  readonly destPort?: number;
  /**
  * 'ip-encap': Tunnel encapsulation type is IP; 'gre': Tunnel encapsulation type is GRE; 'nvgre': Tunnel Encapsulation Type is NVGRE; 'vxlan': Tunnel Encapsulation Type is VXLAN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#encap OverlayTunnelVtep#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#id OverlayTunnelVtep#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VTEP Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#id1 OverlayTunnelVtep#id1}
  */
  readonly id1: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#user_tag OverlayTunnelVtep#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
  /**
  * host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#host_list OverlayTunnelVtep#host_list}
  */
  readonly hostList?: OverlayTunnelVtepHostListStruct[] | cdktf.IResolvable;
  /**
  * local_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#local_ip_address OverlayTunnelVtep#local_ip_address}
  */
  readonly localIpAddress?: OverlayTunnelVtepLocalIpAddress;
  /**
  * local_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#local_ipv6_address OverlayTunnelVtep#local_ipv6_address}
  */
  readonly localIpv6Address?: OverlayTunnelVtepLocalIpv6Address;
  /**
  * remote_ip_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#remote_ip_address_list OverlayTunnelVtep#remote_ip_address_list}
  */
  readonly remoteIpAddressList?: OverlayTunnelVtepRemoteIpAddressListStruct[] | cdktf.IResolvable;
  /**
  * remote_ipv6_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#remote_ipv6_address_list OverlayTunnelVtep#remote_ipv6_address_list}
  */
  readonly remoteIpv6AddressList?: OverlayTunnelVtepRemoteIpv6AddressListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#sampling_enable OverlayTunnelVtep#sampling_enable}
  */
  readonly samplingEnable?: OverlayTunnelVtepSamplingEnable[] | cdktf.IResolvable;
  /**
  * src_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#src_port_range OverlayTunnelVtep#src_port_range}
  */
  readonly srcPortRange?: OverlayTunnelVtepSrcPortRange;
}
export interface OverlayTunnelVtepHostListStruct {
  /**
  * IPv4 address of the overlay host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#ip_addr OverlayTunnelVtep#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * MAC Address of the overlay host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#overlay_mac_addr OverlayTunnelVtep#overlay_mac_addr}
  */
  readonly overlayMacAddr: string;
  /**
  * Configure the VTEP IP address (IPv4 address of the VTEP for the remote host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#remote_vtep OverlayTunnelVtep#remote_vtep}
  */
  readonly remoteVtep: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
  /**
  * Configure the segment id ( VNI of the remote host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#vni OverlayTunnelVtep#vni}
  */
  readonly vni: number;
}

export function overlayTunnelVtepHostListStructToTerraform(struct?: OverlayTunnelVtepHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    overlay_mac_addr: cdktf.stringToTerraform(struct!.overlayMacAddr),
    remote_vtep: cdktf.stringToTerraform(struct!.remoteVtep),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vni: cdktf.numberToTerraform(struct!.vni),
  }
}


export function overlayTunnelVtepHostListStructToHclTerraform(struct?: OverlayTunnelVtepHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.overlayMacAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_vtep: {
      value: cdktf.stringToHclTerraform(struct!.remoteVtep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vni: {
      value: cdktf.numberToHclTerraform(struct!.vni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlayTunnelVtepHostListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._overlayMacAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayMacAddr = this._overlayMacAddr;
    }
    if (this._remoteVtep !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteVtep = this._remoteVtep;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepHostListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._overlayMacAddr = undefined;
      this._remoteVtep = undefined;
      this._uuid = undefined;
      this._vni = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._overlayMacAddr = value.overlayMacAddr;
      this._remoteVtep = value.remoteVtep;
      this._uuid = value.uuid;
      this._vni = value.vni;
    }
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // overlay_mac_addr - computed: false, optional: false, required: true
  private _overlayMacAddr?: string; 
  public get overlayMacAddr() {
    return this.getStringAttribute('overlay_mac_addr');
  }
  public set overlayMacAddr(value: string) {
    this._overlayMacAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayMacAddrInput() {
    return this._overlayMacAddr;
  }

  // remote_vtep - computed: false, optional: false, required: true
  private _remoteVtep?: string; 
  public get remoteVtep() {
    return this.getStringAttribute('remote_vtep');
  }
  public set remoteVtep(value: string) {
    this._remoteVtep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVtepInput() {
    return this._remoteVtep;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vni - computed: false, optional: false, required: true
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }
}

export class OverlayTunnelVtepHostListStructList extends cdktf.ComplexList {
  public internalValue? : OverlayTunnelVtepHostListStruct[] | cdktf.IResolvable

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
  public get(index: number): OverlayTunnelVtepHostListStructOutputReference {
    return new OverlayTunnelVtepHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OverlayTunnelVtepLocalIpAddressVniListStruct {
  /**
  * This is a Gateway segment id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#gateway OverlayTunnelVtep#gateway}
  */
  readonly gateway?: number;
  /**
  * Logical interface (logical interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#lif OverlayTunnelVtep#lif}
  */
  readonly lif?: string;
  /**
  * Name of the Partition with the L2 segment being extended (Name of the User Partition with the L2 segment being extended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#partition OverlayTunnelVtep#partition}
  */
  readonly partition?: string;
  /**
  * Id of the segment that is being extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#segment OverlayTunnelVtep#segment}
  */
  readonly segment: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepLocalIpAddressVniListStructToTerraform(struct?: OverlayTunnelVtepLocalIpAddressVniListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.numberToTerraform(struct!.gateway),
    lif: cdktf.stringToTerraform(struct!.lif),
    partition: cdktf.stringToTerraform(struct!.partition),
    segment: cdktf.numberToTerraform(struct!.segment),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepLocalIpAddressVniListStructToHclTerraform(struct?: OverlayTunnelVtepLocalIpAddressVniListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.numberToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: cdktf.numberToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepLocalIpAddressVniListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlayTunnelVtepLocalIpAddressVniListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepLocalIpAddressVniListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._lif = undefined;
      this._partition = undefined;
      this._segment = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._lif = value.lif;
      this._partition = value.partition;
      this._segment = value.segment;
      this._uuid = value.uuid;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: number; 
  public get gateway() {
    return this.getNumberAttribute('gateway');
  }
  public set gateway(value: number) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class OverlayTunnelVtepLocalIpAddressVniListStructList extends cdktf.ComplexList {
  public internalValue? : OverlayTunnelVtepLocalIpAddressVniListStruct[] | cdktf.IResolvable

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
  public get(index: number): OverlayTunnelVtepLocalIpAddressVniListStructOutputReference {
    return new OverlayTunnelVtepLocalIpAddressVniListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OverlayTunnelVtepLocalIpAddress {
  /**
  * Source Tunnel End Point IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#ip_address OverlayTunnelVtep#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
  /**
  * vni_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#vni_list OverlayTunnelVtep#vni_list}
  */
  readonly vniList?: OverlayTunnelVtepLocalIpAddressVniListStruct[] | cdktf.IResolvable;
}

export function overlayTunnelVtepLocalIpAddressToTerraform(struct?: OverlayTunnelVtepLocalIpAddressOutputReference | OverlayTunnelVtepLocalIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vni_list: cdktf.listMapper(overlayTunnelVtepLocalIpAddressVniListStructToTerraform, true)(struct!.vniList),
  }
}


export function overlayTunnelVtepLocalIpAddressToHclTerraform(struct?: OverlayTunnelVtepLocalIpAddressOutputReference | OverlayTunnelVtepLocalIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vni_list: {
      value: cdktf.listMapperHcl(overlayTunnelVtepLocalIpAddressVniListStructToHclTerraform, true)(struct!.vniList),
      isBlock: true,
      type: "list",
      storageClassType: "OverlayTunnelVtepLocalIpAddressVniListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepLocalIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepLocalIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vniList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniList = this._vniList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepLocalIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._uuid = undefined;
      this._vniList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._uuid = value.uuid;
      this._vniList.internalValue = value.vniList;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vni_list - computed: false, optional: true, required: false
  private _vniList = new OverlayTunnelVtepLocalIpAddressVniListStructList(this, "vni_list", false);
  public get vniList() {
    return this._vniList;
  }
  public putVniList(value: OverlayTunnelVtepLocalIpAddressVniListStruct[] | cdktf.IResolvable) {
    this._vniList.internalValue = value;
  }
  public resetVniList() {
    this._vniList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniListInput() {
    return this._vniList.internalValue;
  }
}
export interface OverlayTunnelVtepLocalIpv6Address {
  /**
  * Source Tunnel End Point IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#ipv6_address OverlayTunnelVtep#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepLocalIpv6AddressToTerraform(struct?: OverlayTunnelVtepLocalIpv6AddressOutputReference | OverlayTunnelVtepLocalIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepLocalIpv6AddressToHclTerraform(struct?: OverlayTunnelVtepLocalIpv6AddressOutputReference | OverlayTunnelVtepLocalIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepLocalIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepLocalIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepLocalIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Address = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Address = value.ipv6Address;
      this._uuid = value.uuid;
    }
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface OverlayTunnelVtepRemoteIpAddressListGreKeepalive {
  /**
  * Keepalive multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#retry_count OverlayTunnelVtep#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Keepalive retry interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#retry_time OverlayTunnelVtep#retry_time}
  */
  readonly retryTime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpAddressListGreKeepaliveToTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListGreKeepaliveOutputReference | OverlayTunnelVtepRemoteIpAddressListGreKeepalive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    retry_time: cdktf.numberToTerraform(struct!.retryTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpAddressListGreKeepaliveToHclTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListGreKeepaliveOutputReference | OverlayTunnelVtepRemoteIpAddressListGreKeepalive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_time: {
      value: cdktf.numberToHclTerraform(struct!.retryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpAddressListGreKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepRemoteIpAddressListGreKeepalive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._retryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTime = this._retryTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpAddressListGreKeepalive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retryCount = undefined;
      this._retryTime = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retryCount = value.retryCount;
      this._retryTime = value.retryTime;
      this._uuid = value.uuid;
    }
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_time - computed: false, optional: true, required: false
  private _retryTime?: number; 
  public get retryTime() {
    return this.getNumberAttribute('retry_time');
  }
  public set retryTime(value: number) {
    this._retryTime = value;
  }
  public resetRetryTime() {
    this._retryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeInput() {
    return this._retryTime;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface OverlayTunnelVtepRemoteIpAddressListUseGreKey {
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#gre_key OverlayTunnelVtep#gre_key}
  */
  readonly greKey?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpAddressListUseGreKeyToTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListUseGreKeyOutputReference | OverlayTunnelVtepRemoteIpAddressListUseGreKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_key: cdktf.numberToTerraform(struct!.greKey),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpAddressListUseGreKeyToHclTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListUseGreKeyOutputReference | OverlayTunnelVtepRemoteIpAddressListUseGreKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_key: {
      value: cdktf.numberToHclTerraform(struct!.greKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpAddressListUseGreKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepRemoteIpAddressListUseGreKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.greKey = this._greKey;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpAddressListUseGreKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greKey = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greKey = value.greKey;
      this._uuid = value.uuid;
    }
  }

  // gre_key - computed: false, optional: true, required: false
  private _greKey?: number; 
  public get greKey() {
    return this.getNumberAttribute('gre_key');
  }
  public set greKey(value: number) {
    this._greKey = value;
  }
  public resetGreKey() {
    this._greKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greKeyInput() {
    return this._greKey;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface OverlayTunnelVtepRemoteIpAddressListUseLif {
  /**
  * Logical interface (logical interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#lif OverlayTunnelVtep#lif}
  */
  readonly lif?: string;
  /**
  * Name of the Partition with the L2 segment being extended (Name of the User Partition with the L2 segment being extended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#partition OverlayTunnelVtep#partition}
  */
  readonly partition?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpAddressListUseLifToTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListUseLifOutputReference | OverlayTunnelVtepRemoteIpAddressListUseLif): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lif: cdktf.stringToTerraform(struct!.lif),
    partition: cdktf.stringToTerraform(struct!.partition),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpAddressListUseLifToHclTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListUseLifOutputReference | OverlayTunnelVtepRemoteIpAddressListUseLif): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpAddressListUseLifOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepRemoteIpAddressListUseLif | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpAddressListUseLif | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lif = undefined;
      this._partition = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lif = value.lif;
      this._partition = value.partition;
      this._uuid = value.uuid;
    }
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface OverlayTunnelVtepRemoteIpAddressListVniListStruct {
  /**
  * VNI configured for the remote VTEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#segment OverlayTunnelVtep#segment}
  */
  readonly segment: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpAddressListVniListStructToTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListVniListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment: cdktf.numberToTerraform(struct!.segment),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpAddressListVniListStructToHclTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListVniListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment: {
      value: cdktf.numberToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpAddressListVniListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlayTunnelVtepRemoteIpAddressListVniListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpAddressListVniListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segment = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segment = value.segment;
      this._uuid = value.uuid;
    }
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class OverlayTunnelVtepRemoteIpAddressListVniListStructList extends cdktf.ComplexList {
  public internalValue? : OverlayTunnelVtepRemoteIpAddressListVniListStruct[] | cdktf.IResolvable

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
  public get(index: number): OverlayTunnelVtepRemoteIpAddressListVniListStructOutputReference {
    return new OverlayTunnelVtepRemoteIpAddressListVniListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OverlayTunnelVtepRemoteIpAddressListStruct {
  /**
  * 'nvgre': Tunnel Encapsulation Type is NVGRE; 'vxlan': Tunnel Encapsulation Type is VXLAN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#encap OverlayTunnelVtep#encap}
  */
  readonly encap?: string;
  /**
  * IP Address of the remote VTEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#ip_address OverlayTunnelVtep#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#user_tag OverlayTunnelVtep#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
  /**
  * gre_keepalive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#gre_keepalive OverlayTunnelVtep#gre_keepalive}
  */
  readonly greKeepalive?: OverlayTunnelVtepRemoteIpAddressListGreKeepalive;
  /**
  * use_gre_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#use_gre_key OverlayTunnelVtep#use_gre_key}
  */
  readonly useGreKey?: OverlayTunnelVtepRemoteIpAddressListUseGreKey;
  /**
  * use_lif block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#use_lif OverlayTunnelVtep#use_lif}
  */
  readonly useLif?: OverlayTunnelVtepRemoteIpAddressListUseLif;
  /**
  * vni_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#vni_list OverlayTunnelVtep#vni_list}
  */
  readonly vniList?: OverlayTunnelVtepRemoteIpAddressListVniListStruct[] | cdktf.IResolvable;
}

export function overlayTunnelVtepRemoteIpAddressListStructToTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap: cdktf.stringToTerraform(struct!.encap),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    gre_keepalive: overlayTunnelVtepRemoteIpAddressListGreKeepaliveToTerraform(struct!.greKeepalive),
    use_gre_key: overlayTunnelVtepRemoteIpAddressListUseGreKeyToTerraform(struct!.useGreKey),
    use_lif: overlayTunnelVtepRemoteIpAddressListUseLifToTerraform(struct!.useLif),
    vni_list: cdktf.listMapper(overlayTunnelVtepRemoteIpAddressListVniListStructToTerraform, true)(struct!.vniList),
  }
}


export function overlayTunnelVtepRemoteIpAddressListStructToHclTerraform(struct?: OverlayTunnelVtepRemoteIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gre_keepalive: {
      value: overlayTunnelVtepRemoteIpAddressListGreKeepaliveToHclTerraform(struct!.greKeepalive),
      isBlock: true,
      type: "list",
      storageClassType: "OverlayTunnelVtepRemoteIpAddressListGreKeepaliveList",
    },
    use_gre_key: {
      value: overlayTunnelVtepRemoteIpAddressListUseGreKeyToHclTerraform(struct!.useGreKey),
      isBlock: true,
      type: "list",
      storageClassType: "OverlayTunnelVtepRemoteIpAddressListUseGreKeyList",
    },
    use_lif: {
      value: overlayTunnelVtepRemoteIpAddressListUseLifToHclTerraform(struct!.useLif),
      isBlock: true,
      type: "list",
      storageClassType: "OverlayTunnelVtepRemoteIpAddressListUseLifList",
    },
    vni_list: {
      value: cdktf.listMapperHcl(overlayTunnelVtepRemoteIpAddressListVniListStructToHclTerraform, true)(struct!.vniList),
      isBlock: true,
      type: "list",
      storageClassType: "OverlayTunnelVtepRemoteIpAddressListVniListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlayTunnelVtepRemoteIpAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._greKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greKeepalive = this._greKeepalive?.internalValue;
    }
    if (this._useGreKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGreKey = this._useGreKey?.internalValue;
    }
    if (this._useLif?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLif = this._useLif?.internalValue;
    }
    if (this._vniList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniList = this._vniList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encap = undefined;
      this._ipAddress = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._greKeepalive.internalValue = undefined;
      this._useGreKey.internalValue = undefined;
      this._useLif.internalValue = undefined;
      this._vniList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encap = value.encap;
      this._ipAddress = value.ipAddress;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._greKeepalive.internalValue = value.greKeepalive;
      this._useGreKey.internalValue = value.useGreKey;
      this._useLif.internalValue = value.useLif;
      this._vniList.internalValue = value.vniList;
    }
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // gre_keepalive - computed: false, optional: true, required: false
  private _greKeepalive = new OverlayTunnelVtepRemoteIpAddressListGreKeepaliveOutputReference(this, "gre_keepalive");
  public get greKeepalive() {
    return this._greKeepalive;
  }
  public putGreKeepalive(value: OverlayTunnelVtepRemoteIpAddressListGreKeepalive) {
    this._greKeepalive.internalValue = value;
  }
  public resetGreKeepalive() {
    this._greKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greKeepaliveInput() {
    return this._greKeepalive.internalValue;
  }

  // use_gre_key - computed: false, optional: true, required: false
  private _useGreKey = new OverlayTunnelVtepRemoteIpAddressListUseGreKeyOutputReference(this, "use_gre_key");
  public get useGreKey() {
    return this._useGreKey;
  }
  public putUseGreKey(value: OverlayTunnelVtepRemoteIpAddressListUseGreKey) {
    this._useGreKey.internalValue = value;
  }
  public resetUseGreKey() {
    this._useGreKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGreKeyInput() {
    return this._useGreKey.internalValue;
  }

  // use_lif - computed: false, optional: true, required: false
  private _useLif = new OverlayTunnelVtepRemoteIpAddressListUseLifOutputReference(this, "use_lif");
  public get useLif() {
    return this._useLif;
  }
  public putUseLif(value: OverlayTunnelVtepRemoteIpAddressListUseLif) {
    this._useLif.internalValue = value;
  }
  public resetUseLif() {
    this._useLif.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLifInput() {
    return this._useLif.internalValue;
  }

  // vni_list - computed: false, optional: true, required: false
  private _vniList = new OverlayTunnelVtepRemoteIpAddressListVniListStructList(this, "vni_list", false);
  public get vniList() {
    return this._vniList;
  }
  public putVniList(value: OverlayTunnelVtepRemoteIpAddressListVniListStruct[] | cdktf.IResolvable) {
    this._vniList.internalValue = value;
  }
  public resetVniList() {
    this._vniList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniListInput() {
    return this._vniList.internalValue;
  }
}

export class OverlayTunnelVtepRemoteIpAddressListStructList extends cdktf.ComplexList {
  public internalValue? : OverlayTunnelVtepRemoteIpAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): OverlayTunnelVtepRemoteIpAddressListStructOutputReference {
    return new OverlayTunnelVtepRemoteIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OverlayTunnelVtepRemoteIpv6AddressListUseLif {
  /**
  * Logical interface (logical interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#lif OverlayTunnelVtep#lif}
  */
  readonly lif?: string;
  /**
  * Name of the Partition with the L2 segment being extended (Name of the User Partition with the L2 segment being extended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#partition OverlayTunnelVtep#partition}
  */
  readonly partition?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepRemoteIpv6AddressListUseLifToTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressListUseLifOutputReference | OverlayTunnelVtepRemoteIpv6AddressListUseLif): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lif: cdktf.stringToTerraform(struct!.lif),
    partition: cdktf.stringToTerraform(struct!.partition),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepRemoteIpv6AddressListUseLifToHclTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressListUseLifOutputReference | OverlayTunnelVtepRemoteIpv6AddressListUseLif): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpv6AddressListUseLifOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepRemoteIpv6AddressListUseLif | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpv6AddressListUseLif | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lif = undefined;
      this._partition = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lif = value.lif;
      this._partition = value.partition;
      this._uuid = value.uuid;
    }
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface OverlayTunnelVtepRemoteIpv6AddressListStruct {
  /**
  * IPv6 Address of the remote VTEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#ipv6_address OverlayTunnelVtep#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#user_tag OverlayTunnelVtep#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
  /**
  * use_lif block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#use_lif OverlayTunnelVtep#use_lif}
  */
  readonly useLif?: OverlayTunnelVtepRemoteIpv6AddressListUseLif;
}

export function overlayTunnelVtepRemoteIpv6AddressListStructToTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    use_lif: overlayTunnelVtepRemoteIpv6AddressListUseLifToTerraform(struct!.useLif),
  }
}


export function overlayTunnelVtepRemoteIpv6AddressListStructToHclTerraform(struct?: OverlayTunnelVtepRemoteIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_lif: {
      value: overlayTunnelVtepRemoteIpv6AddressListUseLifToHclTerraform(struct!.useLif),
      isBlock: true,
      type: "list",
      storageClassType: "OverlayTunnelVtepRemoteIpv6AddressListUseLifList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepRemoteIpv6AddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlayTunnelVtepRemoteIpv6AddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._useLif?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLif = this._useLif?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepRemoteIpv6AddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._useLif.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._useLif.internalValue = value.useLif;
    }
  }

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // use_lif - computed: false, optional: true, required: false
  private _useLif = new OverlayTunnelVtepRemoteIpv6AddressListUseLifOutputReference(this, "use_lif");
  public get useLif() {
    return this._useLif;
  }
  public putUseLif(value: OverlayTunnelVtepRemoteIpv6AddressListUseLif) {
    this._useLif.internalValue = value;
  }
  public resetUseLif() {
    this._useLif.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLifInput() {
    return this._useLif.internalValue;
  }
}

export class OverlayTunnelVtepRemoteIpv6AddressListStructList extends cdktf.ComplexList {
  public internalValue? : OverlayTunnelVtepRemoteIpv6AddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): OverlayTunnelVtepRemoteIpv6AddressListStructOutputReference {
    return new OverlayTunnelVtepRemoteIpv6AddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OverlayTunnelVtepSamplingEnable {
  /**
  * 'all': all; 'cfg_err_count': Config errors; 'flooded_pkt_count': Flooded packet count; 'encap_unresolved_count': Encap unresolved failures; 'unknown_encap_rx_pkt': Encap miss rx pkts; 'unknown_encap_tx_pkt': Encap miss tx pkts; 'arp_req_sent': Arp request sent; 'vtep_host_learned': Hosts learned; 'vtep_host_learn_error': Host learn error; 'invalid_lif_rx': Invalid Lif pkts in; 'invalid_lif_tx': Invalid Lif pkts out; 'unknown_vtep_tx': Vtep unknown tx; 'unknown_vtep_rx': Vtep Unkown rx; 'unhandled_pkt_rx': Unhandled packets in; 'unhandled_pkt_tx': Unhandled packets out; 'total_pkts_rx': Total packets out; 'total_bytes_rx': Total packet bytes in; 'unicast_pkt_rx': Total unicast packets in; 'bcast_pkt_rx': Total broadcast packets in; 'mcast_pkt_rx': Total multicast packets in; 'dropped_pkt_rx': Dropped received packets; 'encap_miss_pkts_rx': Encap missed in received packets; 'bad_chksum_pks_rx': Bad checksum in received packets; 'requeue_pkts_in': Requeued packets in; 'pkts_out': Packets out; 'total_bytes_tx': Packet bytes out; 'unicast_pkt_tx': Unicast packets out; 'bcast_pkt_tx': Broadcast packets out; 'mcast_pkt_tx': Multicast packets out; 'dropped_pkts_tx': Dropped packets out; 'large_pkts_rx': Too large packets in; 'dot1q_pkts_rx': Dot1q packets in; 'frag_pkts_tx': Frag packets out; 'reassembled_pkts_rx': Reassembled packets in; 'bad_inner_ipv4_len_rx': bad inner ipv4 packet len; 'bad_inner_ipv6_len_rx': Bad inner ipv6 packet len; 'frag_drop_pkts_tx': Frag dropped packets out; 'lif_un_init_rx': Lif uninitialized packets in;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#counters1 OverlayTunnelVtep#counters1}
  */
  readonly counters1?: string;
}

export function overlayTunnelVtepSamplingEnableToTerraform(struct?: OverlayTunnelVtepSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function overlayTunnelVtepSamplingEnableToHclTerraform(struct?: OverlayTunnelVtepSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OverlayTunnelVtepSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class OverlayTunnelVtepSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : OverlayTunnelVtepSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): OverlayTunnelVtepSamplingEnableOutputReference {
    return new OverlayTunnelVtepSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OverlayTunnelVtepSrcPortRange {
  /**
  * Maximum Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#max_port OverlayTunnelVtep#max_port}
  */
  readonly maxPort?: number;
  /**
  * Minimum Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#min_port OverlayTunnelVtep#min_port}
  */
  readonly minPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#uuid OverlayTunnelVtep#uuid}
  */
  readonly uuid?: string;
}

export function overlayTunnelVtepSrcPortRangeToTerraform(struct?: OverlayTunnelVtepSrcPortRangeOutputReference | OverlayTunnelVtepSrcPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_port: cdktf.numberToTerraform(struct!.maxPort),
    min_port: cdktf.numberToTerraform(struct!.minPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function overlayTunnelVtepSrcPortRangeToHclTerraform(struct?: OverlayTunnelVtepSrcPortRangeOutputReference | OverlayTunnelVtepSrcPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_port: {
      value: cdktf.numberToHclTerraform(struct!.maxPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_port: {
      value: cdktf.numberToHclTerraform(struct!.minPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OverlayTunnelVtepSrcPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OverlayTunnelVtepSrcPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPort = this._maxPort;
    }
    if (this._minPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPort = this._minPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverlayTunnelVtepSrcPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPort = undefined;
      this._minPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPort = value.maxPort;
      this._minPort = value.minPort;
      this._uuid = value.uuid;
    }
  }

  // max_port - computed: false, optional: true, required: false
  private _maxPort?: number; 
  public get maxPort() {
    return this.getNumberAttribute('max_port');
  }
  public set maxPort(value: number) {
    this._maxPort = value;
  }
  public resetMaxPort() {
    this._maxPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortInput() {
    return this._maxPort;
  }

  // min_port - computed: false, optional: true, required: false
  private _minPort?: number; 
  public get minPort() {
    return this.getNumberAttribute('min_port');
  }
  public set minPort(value: number) {
    this._minPort = value;
  }
  public resetMinPort() {
    this._minPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPortInput() {
    return this._minPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep thunder_overlay_tunnel_vtep}
*/
export class OverlayTunnelVtep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_vtep";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlayTunnelVtep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlayTunnelVtep to import
  * @param importFromId The id of the existing OverlayTunnelVtep that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlayTunnelVtep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_vtep", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep thunder_overlay_tunnel_vtep} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlayTunnelVtepConfig
  */
  public constructor(scope: Construct, id: string, config: OverlayTunnelVtepConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_vtep',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destPort = config.destPort;
    this._encap = config.encap;
    this._id = config.id;
    this._id1 = config.id1;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._hostList.internalValue = config.hostList;
    this._localIpAddress.internalValue = config.localIpAddress;
    this._localIpv6Address.internalValue = config.localIpv6Address;
    this._remoteIpAddressList.internalValue = config.remoteIpAddressList;
    this._remoteIpv6AddressList.internalValue = config.remoteIpv6AddressList;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._srcPortRange.internalValue = config.srcPortRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
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

  // id1 - computed: false, optional: false, required: true
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // host_list - computed: false, optional: true, required: false
  private _hostList = new OverlayTunnelVtepHostListStructList(this, "host_list", false);
  public get hostList() {
    return this._hostList;
  }
  public putHostList(value: OverlayTunnelVtepHostListStruct[] | cdktf.IResolvable) {
    this._hostList.internalValue = value;
  }
  public resetHostList() {
    this._hostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListInput() {
    return this._hostList.internalValue;
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress = new OverlayTunnelVtepLocalIpAddressOutputReference(this, "local_ip_address");
  public get localIpAddress() {
    return this._localIpAddress;
  }
  public putLocalIpAddress(value: OverlayTunnelVtepLocalIpAddress) {
    this._localIpAddress.internalValue = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress.internalValue;
  }

  // local_ipv6_address - computed: false, optional: true, required: false
  private _localIpv6Address = new OverlayTunnelVtepLocalIpv6AddressOutputReference(this, "local_ipv6_address");
  public get localIpv6Address() {
    return this._localIpv6Address;
  }
  public putLocalIpv6Address(value: OverlayTunnelVtepLocalIpv6Address) {
    this._localIpv6Address.internalValue = value;
  }
  public resetLocalIpv6Address() {
    this._localIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv6AddressInput() {
    return this._localIpv6Address.internalValue;
  }

  // remote_ip_address_list - computed: false, optional: true, required: false
  private _remoteIpAddressList = new OverlayTunnelVtepRemoteIpAddressListStructList(this, "remote_ip_address_list", false);
  public get remoteIpAddressList() {
    return this._remoteIpAddressList;
  }
  public putRemoteIpAddressList(value: OverlayTunnelVtepRemoteIpAddressListStruct[] | cdktf.IResolvable) {
    this._remoteIpAddressList.internalValue = value;
  }
  public resetRemoteIpAddressList() {
    this._remoteIpAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpAddressListInput() {
    return this._remoteIpAddressList.internalValue;
  }

  // remote_ipv6_address_list - computed: false, optional: true, required: false
  private _remoteIpv6AddressList = new OverlayTunnelVtepRemoteIpv6AddressListStructList(this, "remote_ipv6_address_list", false);
  public get remoteIpv6AddressList() {
    return this._remoteIpv6AddressList;
  }
  public putRemoteIpv6AddressList(value: OverlayTunnelVtepRemoteIpv6AddressListStruct[] | cdktf.IResolvable) {
    this._remoteIpv6AddressList.internalValue = value;
  }
  public resetRemoteIpv6AddressList() {
    this._remoteIpv6AddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6AddressListInput() {
    return this._remoteIpv6AddressList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new OverlayTunnelVtepSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: OverlayTunnelVtepSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // src_port_range - computed: false, optional: true, required: false
  private _srcPortRange = new OverlayTunnelVtepSrcPortRangeOutputReference(this, "src_port_range");
  public get srcPortRange() {
    return this._srcPortRange;
  }
  public putSrcPortRange(value: OverlayTunnelVtepSrcPortRange) {
    this._srcPortRange.internalValue = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_port: cdktf.numberToTerraform(this._destPort),
      encap: cdktf.stringToTerraform(this._encap),
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.numberToTerraform(this._id1),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      host_list: cdktf.listMapper(overlayTunnelVtepHostListStructToTerraform, true)(this._hostList.internalValue),
      local_ip_address: overlayTunnelVtepLocalIpAddressToTerraform(this._localIpAddress.internalValue),
      local_ipv6_address: overlayTunnelVtepLocalIpv6AddressToTerraform(this._localIpv6Address.internalValue),
      remote_ip_address_list: cdktf.listMapper(overlayTunnelVtepRemoteIpAddressListStructToTerraform, true)(this._remoteIpAddressList.internalValue),
      remote_ipv6_address_list: cdktf.listMapper(overlayTunnelVtepRemoteIpv6AddressListStructToTerraform, true)(this._remoteIpv6AddressList.internalValue),
      sampling_enable: cdktf.listMapper(overlayTunnelVtepSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      src_port_range: overlayTunnelVtepSrcPortRangeToTerraform(this._srcPortRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_port: {
        value: cdktf.numberToHclTerraform(this._destPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
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
      id1: {
        value: cdktf.numberToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_list: {
        value: cdktf.listMapperHcl(overlayTunnelVtepHostListStructToHclTerraform, true)(this._hostList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepHostListStructList",
      },
      local_ip_address: {
        value: overlayTunnelVtepLocalIpAddressToHclTerraform(this._localIpAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepLocalIpAddressList",
      },
      local_ipv6_address: {
        value: overlayTunnelVtepLocalIpv6AddressToHclTerraform(this._localIpv6Address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepLocalIpv6AddressList",
      },
      remote_ip_address_list: {
        value: cdktf.listMapperHcl(overlayTunnelVtepRemoteIpAddressListStructToHclTerraform, true)(this._remoteIpAddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepRemoteIpAddressListStructList",
      },
      remote_ipv6_address_list: {
        value: cdktf.listMapperHcl(overlayTunnelVtepRemoteIpv6AddressListStructToHclTerraform, true)(this._remoteIpv6AddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepRemoteIpv6AddressListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(overlayTunnelVtepSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepSamplingEnableList",
      },
      src_port_range: {
        value: overlayTunnelVtepSrcPortRangeToHclTerraform(this._srcPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OverlayTunnelVtepSrcPortRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
