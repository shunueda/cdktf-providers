// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#access_group_peer_acl Ntp#access_group_peer_acl}
  */
  readonly accessGroupPeerAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#access_group_query_only_acl Ntp#access_group_query_only_acl}
  */
  readonly accessGroupQueryOnlyAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#access_group_serve_acl Ntp#access_group_serve_acl}
  */
  readonly accessGroupServeAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#access_group_serve_only_acl Ntp#access_group_serve_only_acl}
  */
  readonly accessGroupServeOnlyAcl?: string;
  /**
  * Authenticate time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#authenticate Ntp#authenticate}
  */
  readonly authenticate?: boolean | cdktf.IResolvable;
  /**
  * Authentication key for trusted time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#authentication_keys Ntp#authentication_keys}
  */
  readonly authenticationKeys?: NtpAuthenticationKeys[] | cdktf.IResolvable;
  /**
  * Length of hardware clock tick
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#clock_period Ntp#clock_period}
  */
  readonly clockPeriod?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#delete_mode Ntp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#device Ntp#device}
  */
  readonly device?: string;
  /**
  * Enable NTP message logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#logging Ntp#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Act as NTP master clock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#master Ntp#master}
  */
  readonly master?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#master_stratum Ntp#master_stratum}
  */
  readonly masterStratum?: number;
  /**
  * NTP passive mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#passive Ntp#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * VPN Routing/Forwarding Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#peer_vrfs Ntp#peer_vrfs}
  */
  readonly peerVrfs?: NtpPeerVrfs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#peers Ntp#peers}
  */
  readonly peers?: NtpPeers[] | cdktf.IResolvable;
  /**
  * VPN Routing/Forwarding Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#server_vrfs Ntp#server_vrfs}
  */
  readonly serverVrfs?: NtpServerVrfs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#servers Ntp#servers}
  */
  readonly servers?: NtpServers[] | cdktf.IResolvable;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source_forty_gigabit_ethernet Ntp#source_forty_gigabit_ethernet}
  */
  readonly sourceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source_gigabit_ethernet Ntp#source_gigabit_ethernet}
  */
  readonly sourceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source_hundred_gigabit_ethernet Ntp#source_hundred_gigabit_ethernet}
  */
  readonly sourceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source_loopback Ntp#source_loopback}
  */
  readonly sourceLoopback?: number;
  /**
  * Ethernet Channel of interfaces
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source_port_channel Ntp#source_port_channel}
  */
  readonly sourcePortChannel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source_port_channel_subinterface Ntp#source_port_channel_subinterface}
  */
  readonly sourcePortChannelSubinterface?: string;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source_ten_gigabit_ethernet Ntp#source_ten_gigabit_ethernet}
  */
  readonly sourceTenGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source_vlan Ntp#source_vlan}
  */
  readonly sourceVlan?: number;
  /**
  * Key numbers for trusted time sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#trusted_keys Ntp#trusted_keys}
  */
  readonly trustedKeys?: NtpTrustedKeys[] | cdktf.IResolvable;
  /**
  * Periodically update calendar with NTP time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#update_calendar Ntp#update_calendar}
  */
  readonly updateCalendar?: boolean | cdktf.IResolvable;
}
export interface NtpAuthenticationKeys {
  /**
  * CMAC-AES-128 (digest length = 128 bits,  key length = [16 or 32] bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#cmac_aes_128 Ntp#cmac_aes_128}
  */
  readonly cmacAes128?: string;
  /**
  * Authentication key encryption type
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#encryption_type Ntp#encryption_type}
  */
  readonly encryptionType?: number;
  /**
  * HMAC-SHA1 (digest length = 160 bits,  key length = [1-32] bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#hmac_sha1 Ntp#hmac_sha1}
  */
  readonly hmacSha1?: string;
  /**
  * HMAC-SHA2-256 (digest length = 256 bits,  key length = [1-32] bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#hmac_sha2_256 Ntp#hmac_sha2_256}
  */
  readonly hmacSha2256?: string;
  /**
  * MD5 authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#md5 Ntp#md5}
  */
  readonly md5?: string;
  /**
  * 
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#number Ntp#number}
  */
  readonly number: number;
  /**
  * SHA1 (digest length = 160 bits,  key length = [1-32] bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#sha1 Ntp#sha1}
  */
  readonly sha1?: string;
  /**
  * SHA-256 (digest length = 256 bits,  key length = [1-32] bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#sha2 Ntp#sha2}
  */
  readonly sha2?: string;
}

export function ntpAuthenticationKeysToTerraform(struct?: NtpAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmac_aes_128: cdktf.stringToTerraform(struct!.cmacAes128),
    encryption_type: cdktf.numberToTerraform(struct!.encryptionType),
    hmac_sha1: cdktf.stringToTerraform(struct!.hmacSha1),
    hmac_sha2_256: cdktf.stringToTerraform(struct!.hmacSha2256),
    md5: cdktf.stringToTerraform(struct!.md5),
    number: cdktf.numberToTerraform(struct!.number),
    sha1: cdktf.stringToTerraform(struct!.sha1),
    sha2: cdktf.stringToTerraform(struct!.sha2),
  }
}


export function ntpAuthenticationKeysToHclTerraform(struct?: NtpAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmac_aes_128: {
      value: cdktf.stringToHclTerraform(struct!.cmacAes128),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_type: {
      value: cdktf.numberToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hmac_sha1: {
      value: cdktf.stringToHclTerraform(struct!.hmacSha1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hmac_sha2_256: {
      value: cdktf.stringToHclTerraform(struct!.hmacSha2256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5: {
      value: cdktf.stringToHclTerraform(struct!.md5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sha1: {
      value: cdktf.stringToHclTerraform(struct!.sha1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha2: {
      value: cdktf.stringToHclTerraform(struct!.sha2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpAuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmacAes128 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmacAes128 = this._cmacAes128;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._hmacSha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacSha1 = this._hmacSha1;
    }
    if (this._hmacSha2256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacSha2256 = this._hmacSha2256;
    }
    if (this._md5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._sha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1;
    }
    if (this._sha2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha2 = this._sha2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpAuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmacAes128 = undefined;
      this._encryptionType = undefined;
      this._hmacSha1 = undefined;
      this._hmacSha2256 = undefined;
      this._md5 = undefined;
      this._number = undefined;
      this._sha1 = undefined;
      this._sha2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmacAes128 = value.cmacAes128;
      this._encryptionType = value.encryptionType;
      this._hmacSha1 = value.hmacSha1;
      this._hmacSha2256 = value.hmacSha2256;
      this._md5 = value.md5;
      this._number = value.number;
      this._sha1 = value.sha1;
      this._sha2 = value.sha2;
    }
  }

  // cmac_aes_128 - computed: false, optional: true, required: false
  private _cmacAes128?: string; 
  public get cmacAes128() {
    return this.getStringAttribute('cmac_aes_128');
  }
  public set cmacAes128(value: string) {
    this._cmacAes128 = value;
  }
  public resetCmacAes128() {
    this._cmacAes128 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmacAes128Input() {
    return this._cmacAes128;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: number; 
  public get encryptionType() {
    return this.getNumberAttribute('encryption_type');
  }
  public set encryptionType(value: number) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // hmac_sha1 - computed: false, optional: true, required: false
  private _hmacSha1?: string; 
  public get hmacSha1() {
    return this.getStringAttribute('hmac_sha1');
  }
  public set hmacSha1(value: string) {
    this._hmacSha1 = value;
  }
  public resetHmacSha1() {
    this._hmacSha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSha1Input() {
    return this._hmacSha1;
  }

  // hmac_sha2_256 - computed: false, optional: true, required: false
  private _hmacSha2256?: string; 
  public get hmacSha2256() {
    return this.getStringAttribute('hmac_sha2_256');
  }
  public set hmacSha2256(value: string) {
    this._hmacSha2256 = value;
  }
  public resetHmacSha2256() {
    this._hmacSha2256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSha2256Input() {
    return this._hmacSha2256;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1?: string; 
  public get sha1() {
    return this.getStringAttribute('sha1');
  }
  public set sha1(value: string) {
    this._sha1 = value;
  }
  public resetSha1() {
    this._sha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1;
  }

  // sha2 - computed: false, optional: true, required: false
  private _sha2?: string; 
  public get sha2() {
    return this.getStringAttribute('sha2');
  }
  public set sha2(value: string) {
    this._sha2 = value;
  }
  public resetSha2() {
    this._sha2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha2Input() {
    return this._sha2;
  }
}

export class NtpAuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : NtpAuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): NtpAuthenticationKeysOutputReference {
    return new NtpAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpPeerVrfsPeers {
  /**
  * Configure ip/ipv6 address/hostname of peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#ip_address Ntp#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#key Ntp#key}
  */
  readonly key?: number;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#prefer Ntp#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  *     Configure NTP version
  *   - Range: `1`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#version Ntp#version}
  */
  readonly version?: number;
}

export function ntpPeerVrfsPeersToTerraform(struct?: NtpPeerVrfsPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    key: cdktf.numberToTerraform(struct!.key),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function ntpPeerVrfsPeersToHclTerraform(struct?: NtpPeerVrfsPeers | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpPeerVrfsPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpPeerVrfsPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpPeerVrfsPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._key = undefined;
      this._prefer = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._key = value.key;
      this._prefer = value.prefer;
      this._version = value.version;
    }
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

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NtpPeerVrfsPeersList extends cdktf.ComplexList {
  public internalValue? : NtpPeerVrfsPeers[] | cdktf.IResolvable

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
  public get(index: number): NtpPeerVrfsPeersOutputReference {
    return new NtpPeerVrfsPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpPeerVrfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#name Ntp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#peers Ntp#peers}
  */
  readonly peers?: NtpPeerVrfsPeers[] | cdktf.IResolvable;
}

export function ntpPeerVrfsToTerraform(struct?: NtpPeerVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    peers: cdktf.listMapper(ntpPeerVrfsPeersToTerraform, false)(struct!.peers),
  }
}


export function ntpPeerVrfsToHclTerraform(struct?: NtpPeerVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: cdktf.listMapperHcl(ntpPeerVrfsPeersToHclTerraform, false)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "NtpPeerVrfsPeersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpPeerVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpPeerVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpPeerVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._peers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._peers.internalValue = value.peers;
    }
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

  // peers - computed: false, optional: true, required: false
  private _peers = new NtpPeerVrfsPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: NtpPeerVrfsPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }
}

export class NtpPeerVrfsList extends cdktf.ComplexList {
  public internalValue? : NtpPeerVrfs[] | cdktf.IResolvable

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
  public get(index: number): NtpPeerVrfsOutputReference {
    return new NtpPeerVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpPeers {
  /**
  * Configure ip/ipv6 address/hostname of peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#ip_address Ntp#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#key Ntp#key}
  */
  readonly key?: number;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#prefer Ntp#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * Interface for source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source Ntp#source}
  */
  readonly source?: string;
  /**
  *     Configure NTP version
  *   - Range: `1`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#version Ntp#version}
  */
  readonly version?: number;
}

export function ntpPeersToTerraform(struct?: NtpPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    key: cdktf.numberToTerraform(struct!.key),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    source: cdktf.stringToTerraform(struct!.source),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function ntpPeersToHclTerraform(struct?: NtpPeers | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._key = undefined;
      this._prefer = undefined;
      this._source = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._key = value.key;
      this._prefer = value.prefer;
      this._source = value.source;
      this._version = value.version;
    }
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

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
  }

  // source - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NtpPeersList extends cdktf.ComplexList {
  public internalValue? : NtpPeers[] | cdktf.IResolvable

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
  public get(index: number): NtpPeersOutputReference {
    return new NtpPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpServerVrfsServers {
  /**
  * Send a burst when peer is reachable (Default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#burst Ntp#burst}
  */
  readonly burst?: boolean | cdktf.IResolvable;
  /**
  * Send a burst when peer is unreachable (Default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#iburst Ntp#iburst}
  */
  readonly iburst?: boolean | cdktf.IResolvable;
  /**
  * Configure ip/ipv6 address/hostname of peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#ip_address Ntp#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#key Ntp#key}
  */
  readonly key?: number;
  /**
  * Check server availability periodically and switch to a new server if required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#periodic Ntp#periodic}
  */
  readonly periodic?: boolean | cdktf.IResolvable;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#prefer Ntp#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  *     Configure NTP version
  *   - Range: `1`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#version Ntp#version}
  */
  readonly version?: number;
}

export function ntpServerVrfsServersToTerraform(struct?: NtpServerVrfsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.booleanToTerraform(struct!.burst),
    iburst: cdktf.booleanToTerraform(struct!.iburst),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    key: cdktf.numberToTerraform(struct!.key),
    periodic: cdktf.booleanToTerraform(struct!.periodic),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function ntpServerVrfsServersToHclTerraform(struct?: NtpServerVrfsServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst: {
      value: cdktf.booleanToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iburst: {
      value: cdktf.booleanToHclTerraform(struct!.iburst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    periodic: {
      value: cdktf.booleanToHclTerraform(struct!.periodic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpServerVrfsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpServerVrfsServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._iburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.iburst = this._iburst;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._periodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodic = this._periodic;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpServerVrfsServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burst = undefined;
      this._iburst = undefined;
      this._ipAddress = undefined;
      this._key = undefined;
      this._periodic = undefined;
      this._prefer = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burst = value.burst;
      this._iburst = value.iburst;
      this._ipAddress = value.ipAddress;
      this._key = value.key;
      this._periodic = value.periodic;
      this._prefer = value.prefer;
      this._version = value.version;
    }
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: boolean | cdktf.IResolvable; 
  public get burst() {
    return this.getBooleanAttribute('burst');
  }
  public set burst(value: boolean | cdktf.IResolvable) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // iburst - computed: false, optional: true, required: false
  private _iburst?: boolean | cdktf.IResolvable; 
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }
  public set iburst(value: boolean | cdktf.IResolvable) {
    this._iburst = value;
  }
  public resetIburst() {
    this._iburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iburstInput() {
    return this._iburst;
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

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // periodic - computed: false, optional: true, required: false
  private _periodic?: boolean | cdktf.IResolvable; 
  public get periodic() {
    return this.getBooleanAttribute('periodic');
  }
  public set periodic(value: boolean | cdktf.IResolvable) {
    this._periodic = value;
  }
  public resetPeriodic() {
    this._periodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicInput() {
    return this._periodic;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NtpServerVrfsServersList extends cdktf.ComplexList {
  public internalValue? : NtpServerVrfsServers[] | cdktf.IResolvable

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
  public get(index: number): NtpServerVrfsServersOutputReference {
    return new NtpServerVrfsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpServerVrfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#name Ntp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#servers Ntp#servers}
  */
  readonly servers?: NtpServerVrfsServers[] | cdktf.IResolvable;
}

export function ntpServerVrfsToTerraform(struct?: NtpServerVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    servers: cdktf.listMapper(ntpServerVrfsServersToTerraform, false)(struct!.servers),
  }
}


export function ntpServerVrfsToHclTerraform(struct?: NtpServerVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(ntpServerVrfsServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "NtpServerVrfsServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpServerVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpServerVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpServerVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._servers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._servers.internalValue = value.servers;
    }
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

  // servers - computed: false, optional: true, required: false
  private _servers = new NtpServerVrfsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: NtpServerVrfsServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}

export class NtpServerVrfsList extends cdktf.ComplexList {
  public internalValue? : NtpServerVrfs[] | cdktf.IResolvable

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
  public get(index: number): NtpServerVrfsOutputReference {
    return new NtpServerVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpServers {
  /**
  * Send a burst when peer is reachable (Default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#burst Ntp#burst}
  */
  readonly burst?: boolean | cdktf.IResolvable;
  /**
  * Send a burst when peer is unreachable (Default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#iburst Ntp#iburst}
  */
  readonly iburst?: boolean | cdktf.IResolvable;
  /**
  * Configure ip/ipv6 address/hostname of peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#ip_address Ntp#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Configure peer authentication key
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#key Ntp#key}
  */
  readonly key?: number;
  /**
  * Check server availability periodically and switch to a new server if required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#periodic Ntp#periodic}
  */
  readonly periodic?: boolean | cdktf.IResolvable;
  /**
  * Prefer this peer when possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#prefer Ntp#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * Interface for source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#source Ntp#source}
  */
  readonly source?: string;
  /**
  *     Configure NTP version
  *   - Range: `1`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#version Ntp#version}
  */
  readonly version?: number;
}

export function ntpServersToTerraform(struct?: NtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.booleanToTerraform(struct!.burst),
    iburst: cdktf.booleanToTerraform(struct!.iburst),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    key: cdktf.numberToTerraform(struct!.key),
    periodic: cdktf.booleanToTerraform(struct!.periodic),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    source: cdktf.stringToTerraform(struct!.source),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function ntpServersToHclTerraform(struct?: NtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst: {
      value: cdktf.booleanToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iburst: {
      value: cdktf.booleanToHclTerraform(struct!.iburst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    periodic: {
      value: cdktf.booleanToHclTerraform(struct!.periodic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._iburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.iburst = this._iburst;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._periodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodic = this._periodic;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burst = undefined;
      this._iburst = undefined;
      this._ipAddress = undefined;
      this._key = undefined;
      this._periodic = undefined;
      this._prefer = undefined;
      this._source = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burst = value.burst;
      this._iburst = value.iburst;
      this._ipAddress = value.ipAddress;
      this._key = value.key;
      this._periodic = value.periodic;
      this._prefer = value.prefer;
      this._source = value.source;
      this._version = value.version;
    }
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: boolean | cdktf.IResolvable; 
  public get burst() {
    return this.getBooleanAttribute('burst');
  }
  public set burst(value: boolean | cdktf.IResolvable) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // iburst - computed: false, optional: true, required: false
  private _iburst?: boolean | cdktf.IResolvable; 
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }
  public set iburst(value: boolean | cdktf.IResolvable) {
    this._iburst = value;
  }
  public resetIburst() {
    this._iburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iburstInput() {
    return this._iburst;
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

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // periodic - computed: false, optional: true, required: false
  private _periodic?: boolean | cdktf.IResolvable; 
  public get periodic() {
    return this.getBooleanAttribute('periodic');
  }
  public set periodic(value: boolean | cdktf.IResolvable) {
    this._periodic = value;
  }
  public resetPeriodic() {
    this._periodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicInput() {
    return this._periodic;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
  }

  // source - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NtpServersList extends cdktf.ComplexList {
  public internalValue? : NtpServers[] | cdktf.IResolvable

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
  public get(index: number): NtpServersOutputReference {
    return new NtpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NtpTrustedKeys {
  /**
  * 
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#number Ntp#number}
  */
  readonly number: number;
}

export function ntpTrustedKeysToTerraform(struct?: NtpTrustedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function ntpTrustedKeysToHclTerraform(struct?: NtpTrustedKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpTrustedKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NtpTrustedKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpTrustedKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}

export class NtpTrustedKeysList extends cdktf.ComplexList {
  public internalValue? : NtpTrustedKeys[] | cdktf.IResolvable

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
  public get(index: number): NtpTrustedKeysOutputReference {
    return new NtpTrustedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp iosxe_ntp}
*/
export class Ntp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_ntp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ntp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ntp to import
  * @param importFromId The id of the existing Ntp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ntp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_ntp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/ntp iosxe_ntp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_ntp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupPeerAcl = config.accessGroupPeerAcl;
    this._accessGroupQueryOnlyAcl = config.accessGroupQueryOnlyAcl;
    this._accessGroupServeAcl = config.accessGroupServeAcl;
    this._accessGroupServeOnlyAcl = config.accessGroupServeOnlyAcl;
    this._authenticate = config.authenticate;
    this._authenticationKeys.internalValue = config.authenticationKeys;
    this._clockPeriod = config.clockPeriod;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._logging = config.logging;
    this._master = config.master;
    this._masterStratum = config.masterStratum;
    this._passive = config.passive;
    this._peerVrfs.internalValue = config.peerVrfs;
    this._peers.internalValue = config.peers;
    this._serverVrfs.internalValue = config.serverVrfs;
    this._servers.internalValue = config.servers;
    this._sourceFortyGigabitEthernet = config.sourceFortyGigabitEthernet;
    this._sourceGigabitEthernet = config.sourceGigabitEthernet;
    this._sourceHundredGigabitEthernet = config.sourceHundredGigabitEthernet;
    this._sourceLoopback = config.sourceLoopback;
    this._sourcePortChannel = config.sourcePortChannel;
    this._sourcePortChannelSubinterface = config.sourcePortChannelSubinterface;
    this._sourceTenGigabitEthernet = config.sourceTenGigabitEthernet;
    this._sourceVlan = config.sourceVlan;
    this._trustedKeys.internalValue = config.trustedKeys;
    this._updateCalendar = config.updateCalendar;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_peer_acl - computed: false, optional: true, required: false
  private _accessGroupPeerAcl?: string; 
  public get accessGroupPeerAcl() {
    return this.getStringAttribute('access_group_peer_acl');
  }
  public set accessGroupPeerAcl(value: string) {
    this._accessGroupPeerAcl = value;
  }
  public resetAccessGroupPeerAcl() {
    this._accessGroupPeerAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupPeerAclInput() {
    return this._accessGroupPeerAcl;
  }

  // access_group_query_only_acl - computed: false, optional: true, required: false
  private _accessGroupQueryOnlyAcl?: string; 
  public get accessGroupQueryOnlyAcl() {
    return this.getStringAttribute('access_group_query_only_acl');
  }
  public set accessGroupQueryOnlyAcl(value: string) {
    this._accessGroupQueryOnlyAcl = value;
  }
  public resetAccessGroupQueryOnlyAcl() {
    this._accessGroupQueryOnlyAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupQueryOnlyAclInput() {
    return this._accessGroupQueryOnlyAcl;
  }

  // access_group_serve_acl - computed: false, optional: true, required: false
  private _accessGroupServeAcl?: string; 
  public get accessGroupServeAcl() {
    return this.getStringAttribute('access_group_serve_acl');
  }
  public set accessGroupServeAcl(value: string) {
    this._accessGroupServeAcl = value;
  }
  public resetAccessGroupServeAcl() {
    this._accessGroupServeAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupServeAclInput() {
    return this._accessGroupServeAcl;
  }

  // access_group_serve_only_acl - computed: false, optional: true, required: false
  private _accessGroupServeOnlyAcl?: string; 
  public get accessGroupServeOnlyAcl() {
    return this.getStringAttribute('access_group_serve_only_acl');
  }
  public set accessGroupServeOnlyAcl(value: string) {
    this._accessGroupServeOnlyAcl = value;
  }
  public resetAccessGroupServeOnlyAcl() {
    this._accessGroupServeOnlyAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupServeOnlyAclInput() {
    return this._accessGroupServeOnlyAcl;
  }

  // authenticate - computed: false, optional: true, required: false
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  public resetAuthenticate() {
    this._authenticate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // authentication_keys - computed: false, optional: true, required: false
  private _authenticationKeys = new NtpAuthenticationKeysList(this, "authentication_keys", false);
  public get authenticationKeys() {
    return this._authenticationKeys;
  }
  public putAuthenticationKeys(value: NtpAuthenticationKeys[] | cdktf.IResolvable) {
    this._authenticationKeys.internalValue = value;
  }
  public resetAuthenticationKeys() {
    this._authenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeysInput() {
    return this._authenticationKeys.internalValue;
  }

  // clock_period - computed: false, optional: true, required: false
  private _clockPeriod?: number; 
  public get clockPeriod() {
    return this.getNumberAttribute('clock_period');
  }
  public set clockPeriod(value: number) {
    this._clockPeriod = value;
  }
  public resetClockPeriod() {
    this._clockPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockPeriodInput() {
    return this._clockPeriod;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // master - computed: false, optional: true, required: false
  private _master?: boolean | cdktf.IResolvable; 
  public get master() {
    return this.getBooleanAttribute('master');
  }
  public set master(value: boolean | cdktf.IResolvable) {
    this._master = value;
  }
  public resetMaster() {
    this._master = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // master_stratum - computed: false, optional: true, required: false
  private _masterStratum?: number; 
  public get masterStratum() {
    return this.getNumberAttribute('master_stratum');
  }
  public set masterStratum(value: number) {
    this._masterStratum = value;
  }
  public resetMasterStratum() {
    this._masterStratum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterStratumInput() {
    return this._masterStratum;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // peer_vrfs - computed: false, optional: true, required: false
  private _peerVrfs = new NtpPeerVrfsList(this, "peer_vrfs", false);
  public get peerVrfs() {
    return this._peerVrfs;
  }
  public putPeerVrfs(value: NtpPeerVrfs[] | cdktf.IResolvable) {
    this._peerVrfs.internalValue = value;
  }
  public resetPeerVrfs() {
    this._peerVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVrfsInput() {
    return this._peerVrfs.internalValue;
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new NtpPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: NtpPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // server_vrfs - computed: false, optional: true, required: false
  private _serverVrfs = new NtpServerVrfsList(this, "server_vrfs", false);
  public get serverVrfs() {
    return this._serverVrfs;
  }
  public putServerVrfs(value: NtpServerVrfs[] | cdktf.IResolvable) {
    this._serverVrfs.internalValue = value;
  }
  public resetServerVrfs() {
    this._serverVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVrfsInput() {
    return this._serverVrfs.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new NtpServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: NtpServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // source_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceFortyGigabitEthernet?: string; 
  public get sourceFortyGigabitEthernet() {
    return this.getStringAttribute('source_forty_gigabit_ethernet');
  }
  public set sourceFortyGigabitEthernet(value: string) {
    this._sourceFortyGigabitEthernet = value;
  }
  public resetSourceFortyGigabitEthernet() {
    this._sourceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFortyGigabitEthernetInput() {
    return this._sourceFortyGigabitEthernet;
  }

  // source_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceGigabitEthernet?: string; 
  public get sourceGigabitEthernet() {
    return this.getStringAttribute('source_gigabit_ethernet');
  }
  public set sourceGigabitEthernet(value: string) {
    this._sourceGigabitEthernet = value;
  }
  public resetSourceGigabitEthernet() {
    this._sourceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGigabitEthernetInput() {
    return this._sourceGigabitEthernet;
  }

  // source_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceHundredGigabitEthernet?: string; 
  public get sourceHundredGigabitEthernet() {
    return this.getStringAttribute('source_hundred_gigabit_ethernet');
  }
  public set sourceHundredGigabitEthernet(value: string) {
    this._sourceHundredGigabitEthernet = value;
  }
  public resetSourceHundredGigabitEthernet() {
    this._sourceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHundredGigabitEthernetInput() {
    return this._sourceHundredGigabitEthernet;
  }

  // source_loopback - computed: false, optional: true, required: false
  private _sourceLoopback?: number; 
  public get sourceLoopback() {
    return this.getNumberAttribute('source_loopback');
  }
  public set sourceLoopback(value: number) {
    this._sourceLoopback = value;
  }
  public resetSourceLoopback() {
    this._sourceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLoopbackInput() {
    return this._sourceLoopback;
  }

  // source_port_channel - computed: false, optional: true, required: false
  private _sourcePortChannel?: number; 
  public get sourcePortChannel() {
    return this.getNumberAttribute('source_port_channel');
  }
  public set sourcePortChannel(value: number) {
    this._sourcePortChannel = value;
  }
  public resetSourcePortChannel() {
    this._sourcePortChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortChannelInput() {
    return this._sourcePortChannel;
  }

  // source_port_channel_subinterface - computed: false, optional: true, required: false
  private _sourcePortChannelSubinterface?: string; 
  public get sourcePortChannelSubinterface() {
    return this.getStringAttribute('source_port_channel_subinterface');
  }
  public set sourcePortChannelSubinterface(value: string) {
    this._sourcePortChannelSubinterface = value;
  }
  public resetSourcePortChannelSubinterface() {
    this._sourcePortChannelSubinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortChannelSubinterfaceInput() {
    return this._sourcePortChannelSubinterface;
  }

  // source_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _sourceTenGigabitEthernet?: string; 
  public get sourceTenGigabitEthernet() {
    return this.getStringAttribute('source_ten_gigabit_ethernet');
  }
  public set sourceTenGigabitEthernet(value: string) {
    this._sourceTenGigabitEthernet = value;
  }
  public resetSourceTenGigabitEthernet() {
    this._sourceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTenGigabitEthernetInput() {
    return this._sourceTenGigabitEthernet;
  }

  // source_vlan - computed: false, optional: true, required: false
  private _sourceVlan?: number; 
  public get sourceVlan() {
    return this.getNumberAttribute('source_vlan');
  }
  public set sourceVlan(value: number) {
    this._sourceVlan = value;
  }
  public resetSourceVlan() {
    this._sourceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVlanInput() {
    return this._sourceVlan;
  }

  // trusted_keys - computed: false, optional: true, required: false
  private _trustedKeys = new NtpTrustedKeysList(this, "trusted_keys", false);
  public get trustedKeys() {
    return this._trustedKeys;
  }
  public putTrustedKeys(value: NtpTrustedKeys[] | cdktf.IResolvable) {
    this._trustedKeys.internalValue = value;
  }
  public resetTrustedKeys() {
    this._trustedKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeysInput() {
    return this._trustedKeys.internalValue;
  }

  // update_calendar - computed: false, optional: true, required: false
  private _updateCalendar?: boolean | cdktf.IResolvable; 
  public get updateCalendar() {
    return this.getBooleanAttribute('update_calendar');
  }
  public set updateCalendar(value: boolean | cdktf.IResolvable) {
    this._updateCalendar = value;
  }
  public resetUpdateCalendar() {
    this._updateCalendar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCalendarInput() {
    return this._updateCalendar;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_peer_acl: cdktf.stringToTerraform(this._accessGroupPeerAcl),
      access_group_query_only_acl: cdktf.stringToTerraform(this._accessGroupQueryOnlyAcl),
      access_group_serve_acl: cdktf.stringToTerraform(this._accessGroupServeAcl),
      access_group_serve_only_acl: cdktf.stringToTerraform(this._accessGroupServeOnlyAcl),
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      authentication_keys: cdktf.listMapper(ntpAuthenticationKeysToTerraform, false)(this._authenticationKeys.internalValue),
      clock_period: cdktf.numberToTerraform(this._clockPeriod),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      logging: cdktf.booleanToTerraform(this._logging),
      master: cdktf.booleanToTerraform(this._master),
      master_stratum: cdktf.numberToTerraform(this._masterStratum),
      passive: cdktf.booleanToTerraform(this._passive),
      peer_vrfs: cdktf.listMapper(ntpPeerVrfsToTerraform, false)(this._peerVrfs.internalValue),
      peers: cdktf.listMapper(ntpPeersToTerraform, false)(this._peers.internalValue),
      server_vrfs: cdktf.listMapper(ntpServerVrfsToTerraform, false)(this._serverVrfs.internalValue),
      servers: cdktf.listMapper(ntpServersToTerraform, false)(this._servers.internalValue),
      source_forty_gigabit_ethernet: cdktf.stringToTerraform(this._sourceFortyGigabitEthernet),
      source_gigabit_ethernet: cdktf.stringToTerraform(this._sourceGigabitEthernet),
      source_hundred_gigabit_ethernet: cdktf.stringToTerraform(this._sourceHundredGigabitEthernet),
      source_loopback: cdktf.numberToTerraform(this._sourceLoopback),
      source_port_channel: cdktf.numberToTerraform(this._sourcePortChannel),
      source_port_channel_subinterface: cdktf.stringToTerraform(this._sourcePortChannelSubinterface),
      source_ten_gigabit_ethernet: cdktf.stringToTerraform(this._sourceTenGigabitEthernet),
      source_vlan: cdktf.numberToTerraform(this._sourceVlan),
      trusted_keys: cdktf.listMapper(ntpTrustedKeysToTerraform, false)(this._trustedKeys.internalValue),
      update_calendar: cdktf.booleanToTerraform(this._updateCalendar),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_peer_acl: {
        value: cdktf.stringToHclTerraform(this._accessGroupPeerAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_query_only_acl: {
        value: cdktf.stringToHclTerraform(this._accessGroupQueryOnlyAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_serve_acl: {
        value: cdktf.stringToHclTerraform(this._accessGroupServeAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_serve_only_acl: {
        value: cdktf.stringToHclTerraform(this._accessGroupServeOnlyAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_keys: {
        value: cdktf.listMapperHcl(ntpAuthenticationKeysToHclTerraform, false)(this._authenticationKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpAuthenticationKeysList",
      },
      clock_period: {
        value: cdktf.numberToHclTerraform(this._clockPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master: {
        value: cdktf.booleanToHclTerraform(this._master),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_stratum: {
        value: cdktf.numberToHclTerraform(this._masterStratum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peer_vrfs: {
        value: cdktf.listMapperHcl(ntpPeerVrfsToHclTerraform, false)(this._peerVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpPeerVrfsList",
      },
      peers: {
        value: cdktf.listMapperHcl(ntpPeersToHclTerraform, false)(this._peers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpPeersList",
      },
      server_vrfs: {
        value: cdktf.listMapperHcl(ntpServerVrfsToHclTerraform, false)(this._serverVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpServerVrfsList",
      },
      servers: {
        value: cdktf.listMapperHcl(ntpServersToHclTerraform, false)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpServersList",
      },
      source_forty_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceFortyGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_hundred_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceHundredGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_loopback: {
        value: cdktf.numberToHclTerraform(this._sourceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_port_channel: {
        value: cdktf.numberToHclTerraform(this._sourcePortChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_port_channel_subinterface: {
        value: cdktf.stringToHclTerraform(this._sourcePortChannelSubinterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ten_gigabit_ethernet: {
        value: cdktf.stringToHclTerraform(this._sourceTenGigabitEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vlan: {
        value: cdktf.numberToHclTerraform(this._sourceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trusted_keys: {
        value: cdktf.listMapperHcl(ntpTrustedKeysToHclTerraform, false)(this._trustedKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NtpTrustedKeysList",
      },
      update_calendar: {
        value: cdktf.booleanToHclTerraform(this._updateCalendar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
