// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecConfig extends cdktf.TerraformMetaArguments {
  /**
  * '0': Disable Anti-Replay Window Check; '32': Window size of 32; '64': Window size of 64; '128': Window size of 128; '256': Window size of 256; '512': Window size of 512; '1024': Window size of 1024; '2048': Window size of 2048; '3072': Window size of 3072; '4096': Window size of 4096; '8192': Window size of 8192;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#anti_replay_window VpnIpsec#anti_replay_window}
  */
  readonly antiReplayWindow?: string;
  /**
  * '0': Diffie-Hellman group 0 (Default); '1': Diffie-Hellman group 1 - 768-bits; '2': Diffie-Hellman group 2 - 1024-bits; '5': Diffie-Hellman group 5 - 1536-bits; '14': Diffie-Hellman group 14 - 2048-bits; '15': Diffie-Hellman group 15 - 3072-bits; '16': Diffie-Hellman group 16 - 4096-bits; '18': Diffie-Hellman group 18 - 8192-bits; '19': Diffie-Hellman group 19 - 256-bit Elliptic Curve; '20': Diffie-Hellman group 20 - 384-bit Elliptic Curve;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#dh_group VpnIpsec#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#dscp VpnIpsec#dscp}
  */
  readonly dscp?: string;
  /**
  * Enforce Traffic Selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#enforce_traffic_selector VpnIpsec#enforce_traffic_selector}
  */
  readonly enforceTrafficSelector?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#id VpnIpsec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPsec SA age in megabytes (0 indicates unlimited bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#lifebytes VpnIpsec#lifebytes}
  */
  readonly lifebytes?: number;
  /**
  * IPsec SA age in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#lifetime VpnIpsec#lifetime}
  */
  readonly lifetime?: number;
  /**
  * 'tunnel': Encapsulating the packet in IPsec tunnel mode (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#mode VpnIpsec#mode}
  */
  readonly mode?: string;
  /**
  * IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#name VpnIpsec#name}
  */
  readonly name: string;
  /**
  * 'esp': Encapsulating security protocol (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#proto VpnIpsec#proto}
  */
  readonly proto?: string;
  /**
  * Do not use incremental sequence number in the ESP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#sequence_number_disable VpnIpsec#sequence_number_disable}
  */
  readonly sequenceNumberDisable?: number;
  /**
  * Initiates SA negotiation to bring the IPsec connection up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#up VpnIpsec#up}
  */
  readonly up?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#user_tag VpnIpsec#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#uuid VpnIpsec#uuid}
  */
  readonly uuid?: string;
  /**
  * bind_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#bind_tunnel VpnIpsec#bind_tunnel}
  */
  readonly bindTunnel?: VpnIpsecBindTunnel;
  /**
  * enc_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#enc_cfg VpnIpsec#enc_cfg}
  */
  readonly encCfg?: VpnIpsecEncCfg[] | cdktf.IResolvable;
  /**
  * ipsec_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#ipsec_gateway VpnIpsec#ipsec_gateway}
  */
  readonly ipsecGateway?: VpnIpsecIpsecGateway;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#sampling_enable VpnIpsec#sampling_enable}
  */
  readonly samplingEnable?: VpnIpsecSamplingEnable[] | cdktf.IResolvable;
  /**
  * traffic_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#traffic_selector VpnIpsec#traffic_selector}
  */
  readonly trafficSelector?: VpnIpsecTrafficSelector;
}
export interface VpnIpsecBindTunnel {
  /**
  * IPsec Next Hop IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#next_hop VpnIpsec#next_hop}
  */
  readonly nextHop?: string;
  /**
  * IPsec Next Hop IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#next_hop_v6 VpnIpsec#next_hop_v6}
  */
  readonly nextHopV6?: string;
  /**
  * Tunnel interface index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#tunnel VpnIpsec#tunnel}
  */
  readonly tunnel?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#uuid VpnIpsec#uuid}
  */
  readonly uuid?: string;
}

export function vpnIpsecBindTunnelToTerraform(struct?: VpnIpsecBindTunnelOutputReference | VpnIpsecBindTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    next_hop_v6: cdktf.stringToTerraform(struct!.nextHopV6),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIpsecBindTunnelToHclTerraform(struct?: VpnIpsecBindTunnelOutputReference | VpnIpsecBindTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_v6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
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

export class VpnIpsecBindTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecBindTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._nextHopV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopV6 = this._nextHopV6;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecBindTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHop = undefined;
      this._nextHopV6 = undefined;
      this._tunnel = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHop = value.nextHop;
      this._nextHopV6 = value.nextHopV6;
      this._tunnel = value.tunnel;
      this._uuid = value.uuid;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // next_hop_v6 - computed: false, optional: true, required: false
  private _nextHopV6?: string; 
  public get nextHopV6() {
    return this.getStringAttribute('next_hop_v6');
  }
  public set nextHopV6(value: string) {
    this._nextHopV6 = value;
  }
  public resetNextHopV6() {
    this._nextHopV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopV6Input() {
    return this._nextHopV6;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
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
export interface VpnIpsecEncCfg {
  /**
  * 'des': Data Encryption Standard algorithm; '3des': Triple Data Encryption Standard algorithm; 'aes-128': Advanced Encryption Standard algorithm CBC Mode(key size: 128 bits); 'aes-192': Advanced Encryption Standard algorithm CBC Mode(key size: 192 bits); 'aes-256': Advanced Encryption Standard algorithm CBC Mode(key size: 256 bits); 'aes-gcm-128': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 128 bits, ICV size: 16 bytes); 'aes-gcm-192': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 192 bits, ICV size: 16 bytes); 'aes-gcm-256': Advanced Encryption Standard algorithm Galois/Counter Mode(key size: 256 bits, ICV size: 16 bytes); 'null': No encryption algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#encryption VpnIpsec#encryption}
  */
  readonly encryption?: string;
  /**
  * Prioritizes (1-10) security protocol, least value has highest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#gcm_priority VpnIpsec#gcm_priority}
  */
  readonly gcmPriority?: number;
  /**
  * 'md5': MD5 Dessage-Digest Algorithm; 'sha1': Secure Hash Algorithm 1; 'sha256': Secure Hash Algorithm 256; 'sha384': Secure Hash Algorithm 384; 'sha512': Secure Hash Algorithm 512; 'null': No hash algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#hash VpnIpsec#hash}
  */
  readonly hash?: string;
  /**
  * Prioritizes (1-10) security protocol, least value has highest priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#priority VpnIpsec#priority}
  */
  readonly priority?: number;
}

export function vpnIpsecEncCfgToTerraform(struct?: VpnIpsecEncCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    gcm_priority: cdktf.numberToTerraform(struct!.gcmPriority),
    hash: cdktf.stringToTerraform(struct!.hash),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function vpnIpsecEncCfgToHclTerraform(struct?: VpnIpsecEncCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcm_priority: {
      value: cdktf.numberToHclTerraform(struct!.gcmPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecEncCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecEncCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._gcmPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcmPriority = this._gcmPriority;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecEncCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._gcmPriority = undefined;
      this._hash = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
      this._gcmPriority = value.gcmPriority;
      this._hash = value.hash;
      this._priority = value.priority;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // gcm_priority - computed: false, optional: true, required: false
  private _gcmPriority?: number; 
  public get gcmPriority() {
    return this.getNumberAttribute('gcm_priority');
  }
  public set gcmPriority(value: number) {
    this._gcmPriority = value;
  }
  public resetGcmPriority() {
    this._gcmPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmPriorityInput() {
    return this._gcmPriority;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class VpnIpsecEncCfgList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecEncCfg[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecEncCfgOutputReference {
    return new VpnIpsecEncCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecIpsecGateway {
  /**
  * Gateway to use for IPsec SA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#ike_gateway VpnIpsec#ike_gateway}
  */
  readonly ikeGateway?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#uuid VpnIpsec#uuid}
  */
  readonly uuid?: string;
}

export function vpnIpsecIpsecGatewayToTerraform(struct?: VpnIpsecIpsecGatewayOutputReference | VpnIpsecIpsecGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_gateway: cdktf.stringToTerraform(struct!.ikeGateway),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vpnIpsecIpsecGatewayToHclTerraform(struct?: VpnIpsecIpsecGatewayOutputReference | VpnIpsecIpsecGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ikeGateway),
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

export class VpnIpsecIpsecGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecIpsecGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGateway = this._ikeGateway;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecIpsecGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeGateway = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeGateway = value.ikeGateway;
      this._uuid = value.uuid;
    }
  }

  // ike_gateway - computed: false, optional: true, required: false
  private _ikeGateway?: string; 
  public get ikeGateway() {
    return this.getStringAttribute('ike_gateway');
  }
  public set ikeGateway(value: string) {
    this._ikeGateway = value;
  }
  public resetIkeGateway() {
    this._ikeGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayInput() {
    return this._ikeGateway;
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
export interface VpnIpsecSamplingEnable {
  /**
  * 'all': all; 'packets-encrypted': Encrypted Packets; 'packets-decrypted': Decrypted Packets; 'anti-replay-num': Anti-Replay Failure; 'rekey-num': Rekey Times; 'packets-err-inactive': Inactive Error; 'packets-err-encryption': Encryption Error; 'packets-err-pad-check': Pad Check Error; 'packets-err-pkt-sanity': Packets Sanity Error; 'packets-err-icv-check': ICV Check Error; 'packets-err-lifetime-lifebytes': Lifetime Lifebytes Error; 'bytes-encrypted': Encrypted Bytes; 'bytes-decrypted': Decrypted Bytes; 'prefrag-success': Pre-frag Success; 'prefrag-error': Pre-frag Error; 'cavium-bytes-encrypted': CAVIUM Encrypted Bytes; 'cavium-bytes-decrypted': CAVIUM Decrypted Bytes; 'cavium-packets-encrypted': CAVIUM Encrypted Packets; 'cavium-packets-decrypted': CAVIUM Decrypted Packets; 'qat-bytes-encrypted': QAT Encrypted Bytes; 'qat-bytes-decrypted': QAT Decrypted Bytes; 'qat-packets-encrypted': QAT Encrypted Packets; 'qat-packets-decrypted': QAT Decrypted Packets; 'tunnel-intf-down': Packet dropped: Tunnel Interface Down; 'pkt-fail-prep-to-send': Packet dropped: Failed in prepare to send; 'no-next-hop': Packet dropped: No next hop; 'invalid-tunnel-id': Packet dropped: Invalid tunnel ID; 'no-tunnel-found': Packet dropped: No tunnel found; 'pkt-fail-to-send': Packet dropped: Failed to send; 'frag-after-encap-frag-packets': Frag-after-encap Fragment Generated; 'frag-received': Fragment Received; 'sequence-num': Sequence Number; 'sequence-num-rollover': Sequence Number Rollover; 'packets-err-nh-check': Next Header Check Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#counters1 VpnIpsec#counters1}
  */
  readonly counters1?: string;
}

export function vpnIpsecSamplingEnableToTerraform(struct?: VpnIpsecSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vpnIpsecSamplingEnableToHclTerraform(struct?: VpnIpsecSamplingEnable | cdktf.IResolvable): any {
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

export class VpnIpsecSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnIpsecSamplingEnable | cdktf.IResolvable | undefined) {
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

export class VpnIpsecSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecSamplingEnableOutputReference {
    return new VpnIpsecSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecTrafficSelectorIpv4 {
  /**
  * Local Traffic Selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#local VpnIpsec#local}
  */
  readonly local?: string;
  /**
  * IPv4 Address Network Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#local_netmask VpnIpsec#local_netmask}
  */
  readonly localNetmask?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#local_port VpnIpsec#local_port}
  */
  readonly localPort?: number;
  /**
  * IP Protocol Number (0-255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#protocol VpnIpsec#protocol}
  */
  readonly protocol?: number;
  /**
  * IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#remote_ip VpnIpsec#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Remote IP address assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#remote_ipv4_assigned VpnIpsec#remote_ipv4_assigned}
  */
  readonly remoteIpv4Assigned?: number;
  /**
  * IPv4 Address Network Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#remote_netmask VpnIpsec#remote_netmask}
  */
  readonly remoteNetmask?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#remote_port VpnIpsec#remote_port}
  */
  readonly remotePort?: number;
}

export function vpnIpsecTrafficSelectorIpv4ToTerraform(struct?: VpnIpsecTrafficSelectorIpv4OutputReference | VpnIpsecTrafficSelectorIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.stringToTerraform(struct!.local),
    local_netmask: cdktf.stringToTerraform(struct!.localNetmask),
    local_port: cdktf.numberToTerraform(struct!.localPort),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    remote_ipv4_assigned: cdktf.numberToTerraform(struct!.remoteIpv4Assigned),
    remote_netmask: cdktf.stringToTerraform(struct!.remoteNetmask),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function vpnIpsecTrafficSelectorIpv4ToHclTerraform(struct?: VpnIpsecTrafficSelectorIpv4OutputReference | VpnIpsecTrafficSelectorIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: cdktf.stringToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_netmask: {
      value: cdktf.stringToHclTerraform(struct!.localNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_port: {
      value: cdktf.numberToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ipv4_assigned: {
      value: cdktf.numberToHclTerraform(struct!.remoteIpv4Assigned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_netmask: {
      value: cdktf.stringToHclTerraform(struct!.remoteNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_port: {
      value: cdktf.numberToHclTerraform(struct!.remotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecTrafficSelectorIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecTrafficSelectorIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._localNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNetmask = this._localNetmask;
    }
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._remoteIpv4Assigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv4Assigned = this._remoteIpv4Assigned;
    }
    if (this._remoteNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteNetmask = this._remoteNetmask;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecTrafficSelectorIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._local = undefined;
      this._localNetmask = undefined;
      this._localPort = undefined;
      this._protocol = undefined;
      this._remoteIp = undefined;
      this._remoteIpv4Assigned = undefined;
      this._remoteNetmask = undefined;
      this._remotePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._local = value.local;
      this._localNetmask = value.localNetmask;
      this._localPort = value.localPort;
      this._protocol = value.protocol;
      this._remoteIp = value.remoteIp;
      this._remoteIpv4Assigned = value.remoteIpv4Assigned;
      this._remoteNetmask = value.remoteNetmask;
      this._remotePort = value.remotePort;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // local_netmask - computed: false, optional: true, required: false
  private _localNetmask?: string; 
  public get localNetmask() {
    return this.getStringAttribute('local_netmask');
  }
  public set localNetmask(value: string) {
    this._localNetmask = value;
  }
  public resetLocalNetmask() {
    this._localNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetmaskInput() {
    return this._localNetmask;
  }

  // local_port - computed: false, optional: true, required: false
  private _localPort?: number; 
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }
  public set localPort(value: number) {
    this._localPort = value;
  }
  public resetLocalPort() {
    this._localPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // remote_ipv4_assigned - computed: false, optional: true, required: false
  private _remoteIpv4Assigned?: number; 
  public get remoteIpv4Assigned() {
    return this.getNumberAttribute('remote_ipv4_assigned');
  }
  public set remoteIpv4Assigned(value: number) {
    this._remoteIpv4Assigned = value;
  }
  public resetRemoteIpv4Assigned() {
    this._remoteIpv4Assigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv4AssignedInput() {
    return this._remoteIpv4Assigned;
  }

  // remote_netmask - computed: false, optional: true, required: false
  private _remoteNetmask?: string; 
  public get remoteNetmask() {
    return this.getStringAttribute('remote_netmask');
  }
  public set remoteNetmask(value: string) {
    this._remoteNetmask = value;
  }
  public resetRemoteNetmask() {
    this._remoteNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNetmaskInput() {
    return this._remoteNetmask;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }
}
export interface VpnIpsecTrafficSelectorIpv6 {
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#local_portv6 VpnIpsec#local_portv6}
  */
  readonly localPortv6?: number;
  /**
  * Local Traffic Selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#localv6 VpnIpsec#localv6}
  */
  readonly localv6?: string;
  /**
  * IP Protocol Number (0-255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#protocolv6 VpnIpsec#protocolv6}
  */
  readonly protocolv6?: number;
  /**
  * IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#remote_ipv6 VpnIpsec#remote_ipv6}
  */
  readonly remoteIpv6?: string;
  /**
  * Remote IPv6 address assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#remote_ipv6_assigned VpnIpsec#remote_ipv6_assigned}
  */
  readonly remoteIpv6Assigned?: number;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#remote_portv6 VpnIpsec#remote_portv6}
  */
  readonly remotePortv6?: number;
}

export function vpnIpsecTrafficSelectorIpv6ToTerraform(struct?: VpnIpsecTrafficSelectorIpv6OutputReference | VpnIpsecTrafficSelectorIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_portv6: cdktf.numberToTerraform(struct!.localPortv6),
    localv6: cdktf.stringToTerraform(struct!.localv6),
    protocolv6: cdktf.numberToTerraform(struct!.protocolv6),
    remote_ipv6: cdktf.stringToTerraform(struct!.remoteIpv6),
    remote_ipv6_assigned: cdktf.numberToTerraform(struct!.remoteIpv6Assigned),
    remote_portv6: cdktf.numberToTerraform(struct!.remotePortv6),
  }
}


export function vpnIpsecTrafficSelectorIpv6ToHclTerraform(struct?: VpnIpsecTrafficSelectorIpv6OutputReference | VpnIpsecTrafficSelectorIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_portv6: {
      value: cdktf.numberToHclTerraform(struct!.localPortv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    localv6: {
      value: cdktf.stringToHclTerraform(struct!.localv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocolv6: {
      value: cdktf.numberToHclTerraform(struct!.protocolv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ipv6_assigned: {
      value: cdktf.numberToHclTerraform(struct!.remoteIpv6Assigned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_portv6: {
      value: cdktf.numberToHclTerraform(struct!.remotePortv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecTrafficSelectorIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecTrafficSelectorIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPortv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPortv6 = this._localPortv6;
    }
    if (this._localv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.localv6 = this._localv6;
    }
    if (this._protocolv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolv6 = this._protocolv6;
    }
    if (this._remoteIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv6 = this._remoteIpv6;
    }
    if (this._remoteIpv6Assigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv6Assigned = this._remoteIpv6Assigned;
    }
    if (this._remotePortv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePortv6 = this._remotePortv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecTrafficSelectorIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localPortv6 = undefined;
      this._localv6 = undefined;
      this._protocolv6 = undefined;
      this._remoteIpv6 = undefined;
      this._remoteIpv6Assigned = undefined;
      this._remotePortv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localPortv6 = value.localPortv6;
      this._localv6 = value.localv6;
      this._protocolv6 = value.protocolv6;
      this._remoteIpv6 = value.remoteIpv6;
      this._remoteIpv6Assigned = value.remoteIpv6Assigned;
      this._remotePortv6 = value.remotePortv6;
    }
  }

  // local_portv6 - computed: false, optional: true, required: false
  private _localPortv6?: number; 
  public get localPortv6() {
    return this.getNumberAttribute('local_portv6');
  }
  public set localPortv6(value: number) {
    this._localPortv6 = value;
  }
  public resetLocalPortv6() {
    this._localPortv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortv6Input() {
    return this._localPortv6;
  }

  // localv6 - computed: false, optional: true, required: false
  private _localv6?: string; 
  public get localv6() {
    return this.getStringAttribute('localv6');
  }
  public set localv6(value: string) {
    this._localv6 = value;
  }
  public resetLocalv6() {
    this._localv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localv6Input() {
    return this._localv6;
  }

  // protocolv6 - computed: false, optional: true, required: false
  private _protocolv6?: number; 
  public get protocolv6() {
    return this.getNumberAttribute('protocolv6');
  }
  public set protocolv6(value: number) {
    this._protocolv6 = value;
  }
  public resetProtocolv6() {
    this._protocolv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolv6Input() {
    return this._protocolv6;
  }

  // remote_ipv6 - computed: false, optional: true, required: false
  private _remoteIpv6?: string; 
  public get remoteIpv6() {
    return this.getStringAttribute('remote_ipv6');
  }
  public set remoteIpv6(value: string) {
    this._remoteIpv6 = value;
  }
  public resetRemoteIpv6() {
    this._remoteIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6Input() {
    return this._remoteIpv6;
  }

  // remote_ipv6_assigned - computed: false, optional: true, required: false
  private _remoteIpv6Assigned?: number; 
  public get remoteIpv6Assigned() {
    return this.getNumberAttribute('remote_ipv6_assigned');
  }
  public set remoteIpv6Assigned(value: number) {
    this._remoteIpv6Assigned = value;
  }
  public resetRemoteIpv6Assigned() {
    this._remoteIpv6Assigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6AssignedInput() {
    return this._remoteIpv6Assigned;
  }

  // remote_portv6 - computed: false, optional: true, required: false
  private _remotePortv6?: number; 
  public get remotePortv6() {
    return this.getNumberAttribute('remote_portv6');
  }
  public set remotePortv6(value: number) {
    this._remotePortv6 = value;
  }
  public resetRemotePortv6() {
    this._remotePortv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortv6Input() {
    return this._remotePortv6;
  }
}
export interface VpnIpsecTrafficSelector {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#ipv4 VpnIpsec#ipv4}
  */
  readonly ipv4?: VpnIpsecTrafficSelectorIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#ipv6 VpnIpsec#ipv6}
  */
  readonly ipv6?: VpnIpsecTrafficSelectorIpv6;
}

export function vpnIpsecTrafficSelectorToTerraform(struct?: VpnIpsecTrafficSelectorOutputReference | VpnIpsecTrafficSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: vpnIpsecTrafficSelectorIpv4ToTerraform(struct!.ipv4),
    ipv6: vpnIpsecTrafficSelectorIpv6ToTerraform(struct!.ipv6),
  }
}


export function vpnIpsecTrafficSelectorToHclTerraform(struct?: VpnIpsecTrafficSelectorOutputReference | VpnIpsecTrafficSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: vpnIpsecTrafficSelectorIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecTrafficSelectorIpv4List",
    },
    ipv6: {
      value: vpnIpsecTrafficSelectorIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "VpnIpsecTrafficSelectorIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecTrafficSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecTrafficSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecTrafficSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new VpnIpsecTrafficSelectorIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: VpnIpsecTrafficSelectorIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new VpnIpsecTrafficSelectorIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: VpnIpsecTrafficSelectorIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec thunder_vpn_ipsec}
*/
export class VpnIpsec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ipsec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsec to import
  * @param importFromId The id of the existing VpnIpsec that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ipsec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vpn_ipsec thunder_vpn_ipsec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecConfig
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ipsec',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiReplayWindow = config.antiReplayWindow;
    this._dhGroup = config.dhGroup;
    this._dscp = config.dscp;
    this._enforceTrafficSelector = config.enforceTrafficSelector;
    this._id = config.id;
    this._lifebytes = config.lifebytes;
    this._lifetime = config.lifetime;
    this._mode = config.mode;
    this._name = config.name;
    this._proto = config.proto;
    this._sequenceNumberDisable = config.sequenceNumberDisable;
    this._up = config.up;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._bindTunnel.internalValue = config.bindTunnel;
    this._encCfg.internalValue = config.encCfg;
    this._ipsecGateway.internalValue = config.ipsecGateway;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._trafficSelector.internalValue = config.trafficSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_replay_window - computed: false, optional: true, required: false
  private _antiReplayWindow?: string; 
  public get antiReplayWindow() {
    return this.getStringAttribute('anti_replay_window');
  }
  public set antiReplayWindow(value: string) {
    this._antiReplayWindow = value;
  }
  public resetAntiReplayWindow() {
    this._antiReplayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayWindowInput() {
    return this._antiReplayWindow;
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // enforce_traffic_selector - computed: false, optional: true, required: false
  private _enforceTrafficSelector?: number; 
  public get enforceTrafficSelector() {
    return this.getNumberAttribute('enforce_traffic_selector');
  }
  public set enforceTrafficSelector(value: number) {
    this._enforceTrafficSelector = value;
  }
  public resetEnforceTrafficSelector() {
    this._enforceTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTrafficSelectorInput() {
    return this._enforceTrafficSelector;
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

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: number; 
  public get lifebytes() {
    return this.getNumberAttribute('lifebytes');
  }
  public set lifebytes(value: number) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // sequence_number_disable - computed: false, optional: true, required: false
  private _sequenceNumberDisable?: number; 
  public get sequenceNumberDisable() {
    return this.getNumberAttribute('sequence_number_disable');
  }
  public set sequenceNumberDisable(value: number) {
    this._sequenceNumberDisable = value;
  }
  public resetSequenceNumberDisable() {
    this._sequenceNumberDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberDisableInput() {
    return this._sequenceNumberDisable;
  }

  // up - computed: false, optional: true, required: false
  private _up?: number; 
  public get up() {
    return this.getNumberAttribute('up');
  }
  public set up(value: number) {
    this._up = value;
  }
  public resetUp() {
    this._up = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upInput() {
    return this._up;
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

  // bind_tunnel - computed: false, optional: true, required: false
  private _bindTunnel = new VpnIpsecBindTunnelOutputReference(this, "bind_tunnel");
  public get bindTunnel() {
    return this._bindTunnel;
  }
  public putBindTunnel(value: VpnIpsecBindTunnel) {
    this._bindTunnel.internalValue = value;
  }
  public resetBindTunnel() {
    this._bindTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTunnelInput() {
    return this._bindTunnel.internalValue;
  }

  // enc_cfg - computed: false, optional: true, required: false
  private _encCfg = new VpnIpsecEncCfgList(this, "enc_cfg", false);
  public get encCfg() {
    return this._encCfg;
  }
  public putEncCfg(value: VpnIpsecEncCfg[] | cdktf.IResolvable) {
    this._encCfg.internalValue = value;
  }
  public resetEncCfg() {
    this._encCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encCfgInput() {
    return this._encCfg.internalValue;
  }

  // ipsec_gateway - computed: false, optional: true, required: false
  private _ipsecGateway = new VpnIpsecIpsecGatewayOutputReference(this, "ipsec_gateway");
  public get ipsecGateway() {
    return this._ipsecGateway;
  }
  public putIpsecGateway(value: VpnIpsecIpsecGateway) {
    this._ipsecGateway.internalValue = value;
  }
  public resetIpsecGateway() {
    this._ipsecGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecGatewayInput() {
    return this._ipsecGateway.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VpnIpsecSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VpnIpsecSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // traffic_selector - computed: false, optional: true, required: false
  private _trafficSelector = new VpnIpsecTrafficSelectorOutputReference(this, "traffic_selector");
  public get trafficSelector() {
    return this._trafficSelector;
  }
  public putTrafficSelector(value: VpnIpsecTrafficSelector) {
    this._trafficSelector.internalValue = value;
  }
  public resetTrafficSelector() {
    this._trafficSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorInput() {
    return this._trafficSelector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_replay_window: cdktf.stringToTerraform(this._antiReplayWindow),
      dh_group: cdktf.stringToTerraform(this._dhGroup),
      dscp: cdktf.stringToTerraform(this._dscp),
      enforce_traffic_selector: cdktf.numberToTerraform(this._enforceTrafficSelector),
      id: cdktf.stringToTerraform(this._id),
      lifebytes: cdktf.numberToTerraform(this._lifebytes),
      lifetime: cdktf.numberToTerraform(this._lifetime),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      proto: cdktf.stringToTerraform(this._proto),
      sequence_number_disable: cdktf.numberToTerraform(this._sequenceNumberDisable),
      up: cdktf.numberToTerraform(this._up),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      bind_tunnel: vpnIpsecBindTunnelToTerraform(this._bindTunnel.internalValue),
      enc_cfg: cdktf.listMapper(vpnIpsecEncCfgToTerraform, true)(this._encCfg.internalValue),
      ipsec_gateway: vpnIpsecIpsecGatewayToTerraform(this._ipsecGateway.internalValue),
      sampling_enable: cdktf.listMapper(vpnIpsecSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      traffic_selector: vpnIpsecTrafficSelectorToTerraform(this._trafficSelector.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_replay_window: {
        value: cdktf.stringToHclTerraform(this._antiReplayWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_group: {
        value: cdktf.stringToHclTerraform(this._dhGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp: {
        value: cdktf.stringToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_traffic_selector: {
        value: cdktf.numberToHclTerraform(this._enforceTrafficSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifebytes: {
        value: cdktf.numberToHclTerraform(this._lifebytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lifetime: {
        value: cdktf.numberToHclTerraform(this._lifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_number_disable: {
        value: cdktf.numberToHclTerraform(this._sequenceNumberDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up: {
        value: cdktf.numberToHclTerraform(this._up),
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
      bind_tunnel: {
        value: vpnIpsecBindTunnelToHclTerraform(this._bindTunnel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecBindTunnelList",
      },
      enc_cfg: {
        value: cdktf.listMapperHcl(vpnIpsecEncCfgToHclTerraform, true)(this._encCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecEncCfgList",
      },
      ipsec_gateway: {
        value: vpnIpsecIpsecGatewayToHclTerraform(this._ipsecGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecIpsecGatewayList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(vpnIpsecSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecSamplingEnableList",
      },
      traffic_selector: {
        value: vpnIpsecTrafficSelectorToHclTerraform(this._trafficSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecTrafficSelectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
