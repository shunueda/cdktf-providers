// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#cloud_network_cidrs VpnIpsecTunnel#cloud_network_cidrs}
  */
  readonly cloudNetworkCidrs: string[];
  /**
  * The human-readable description of your IPSec Gateway Tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#description VpnIpsecTunnel#description}
  */
  readonly description?: string;
  /**
  * The ID of the IPSec Gateway that the tunnel belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#gateway_id VpnIpsecTunnel#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#location VpnIpsecTunnel#location}
  */
  readonly location?: string;
  /**
  * The human-readable name of your IPSec Gateway Tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#name VpnIpsecTunnel#name}
  */
  readonly name: string;
  /**
  * The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel. Specify "0.0.0.0/0" or "::/0" for all addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#peer_network_cidrs VpnIpsecTunnel#peer_network_cidrs}
  */
  readonly peerNetworkCidrs: string[];
  /**
  * The remote peer host fully qualified domain name or public IPV4 IP to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#remote_host VpnIpsecTunnel#remote_host}
  */
  readonly remoteHost: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#auth VpnIpsecTunnel#auth}
  */
  readonly auth: VpnIpsecTunnelAuth;
  /**
  * esp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#esp VpnIpsecTunnel#esp}
  */
  readonly esp: VpnIpsecTunnelEsp[] | cdktf.IResolvable;
  /**
  * ike block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#ike VpnIpsecTunnel#ike}
  */
  readonly ike: VpnIpsecTunnelIke;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#timeouts VpnIpsecTunnel#timeouts}
  */
  readonly timeouts?: VpnIpsecTunnelTimeouts;
}
export interface VpnIpsecTunnelAuth {
  /**
  * The Authentication Method to use for IPSec Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#method VpnIpsecTunnel#method}
  */
  readonly method?: string;
  /**
  * The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#psk_key VpnIpsecTunnel#psk_key}
  */
  readonly pskKey?: string;
}

export function vpnIpsecTunnelAuthToTerraform(struct?: VpnIpsecTunnelAuthOutputReference | VpnIpsecTunnelAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    psk_key: cdktf.stringToTerraform(struct!.pskKey),
  }
}


export function vpnIpsecTunnelAuthToHclTerraform(struct?: VpnIpsecTunnelAuthOutputReference | VpnIpsecTunnelAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psk_key: {
      value: cdktf.stringToHclTerraform(struct!.pskKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecTunnelAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecTunnelAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._pskKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pskKey = this._pskKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecTunnelAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._pskKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._pskKey = value.pskKey;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // psk_key - computed: false, optional: true, required: false
  private _pskKey?: string; 
  public get pskKey() {
    return this.getStringAttribute('psk_key');
  }
  public set pskKey(value: string) {
    this._pskKey = value;
  }
  public resetPskKey() {
    this._pskKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskKeyInput() {
    return this._pskKey;
  }
}
export interface VpnIpsecTunnelEsp {
  /**
  * The Diffie-Hellman Group to use for IPSec Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}
  */
  readonly diffieHellmanGroup?: string;
  /**
  * The encryption algorithm to use for IPSec Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * The integrity algorithm to use for IPSec Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}
  */
  readonly integrityAlgorithm?: string;
  /**
  * The phase lifetime in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}
  */
  readonly lifetime?: number;
}

export function vpnIpsecTunnelEspToTerraform(struct?: VpnIpsecTunnelEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    diffie_hellman_group: cdktf.stringToTerraform(struct!.diffieHellmanGroup),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    integrity_algorithm: cdktf.stringToTerraform(struct!.integrityAlgorithm),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}


export function vpnIpsecTunnelEspToHclTerraform(struct?: VpnIpsecTunnelEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    diffie_hellman_group: {
      value: cdktf.stringToHclTerraform(struct!.diffieHellmanGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integrity_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.integrityAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecTunnelEspOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnIpsecTunnelEsp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diffieHellmanGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffieHellmanGroup = this._diffieHellmanGroup;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._integrityAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrityAlgorithm = this._integrityAlgorithm;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecTunnelEsp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diffieHellmanGroup = undefined;
      this._encryptionAlgorithm = undefined;
      this._integrityAlgorithm = undefined;
      this._lifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diffieHellmanGroup = value.diffieHellmanGroup;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._integrityAlgorithm = value.integrityAlgorithm;
      this._lifetime = value.lifetime;
    }
  }

  // diffie_hellman_group - computed: false, optional: true, required: false
  private _diffieHellmanGroup?: string; 
  public get diffieHellmanGroup() {
    return this.getStringAttribute('diffie_hellman_group');
  }
  public set diffieHellmanGroup(value: string) {
    this._diffieHellmanGroup = value;
  }
  public resetDiffieHellmanGroup() {
    this._diffieHellmanGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffieHellmanGroupInput() {
    return this._diffieHellmanGroup;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // integrity_algorithm - computed: false, optional: true, required: false
  private _integrityAlgorithm?: string; 
  public get integrityAlgorithm() {
    return this.getStringAttribute('integrity_algorithm');
  }
  public set integrityAlgorithm(value: string) {
    this._integrityAlgorithm = value;
  }
  public resetIntegrityAlgorithm() {
    this._integrityAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityAlgorithmInput() {
    return this._integrityAlgorithm;
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
}

export class VpnIpsecTunnelEspList extends cdktf.ComplexList {
  public internalValue? : VpnIpsecTunnelEsp[] | cdktf.IResolvable

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
  public get(index: number): VpnIpsecTunnelEspOutputReference {
    return new VpnIpsecTunnelEspOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnIpsecTunnelIke {
  /**
  * The Diffie-Hellman Group to use for IPSec Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}
  */
  readonly diffieHellmanGroup?: string;
  /**
  * The encryption algorithm to use for IPSec Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * The integrity algorithm to use for IPSec Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}
  */
  readonly integrityAlgorithm?: string;
  /**
  * The phase lifetime in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}
  */
  readonly lifetime?: number;
}

export function vpnIpsecTunnelIkeToTerraform(struct?: VpnIpsecTunnelIkeOutputReference | VpnIpsecTunnelIke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    diffie_hellman_group: cdktf.stringToTerraform(struct!.diffieHellmanGroup),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    integrity_algorithm: cdktf.stringToTerraform(struct!.integrityAlgorithm),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}


export function vpnIpsecTunnelIkeToHclTerraform(struct?: VpnIpsecTunnelIkeOutputReference | VpnIpsecTunnelIke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    diffie_hellman_group: {
      value: cdktf.stringToHclTerraform(struct!.diffieHellmanGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integrity_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.integrityAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecTunnelIkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnIpsecTunnelIke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diffieHellmanGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffieHellmanGroup = this._diffieHellmanGroup;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._integrityAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrityAlgorithm = this._integrityAlgorithm;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecTunnelIke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diffieHellmanGroup = undefined;
      this._encryptionAlgorithm = undefined;
      this._integrityAlgorithm = undefined;
      this._lifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diffieHellmanGroup = value.diffieHellmanGroup;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._integrityAlgorithm = value.integrityAlgorithm;
      this._lifetime = value.lifetime;
    }
  }

  // diffie_hellman_group - computed: false, optional: true, required: false
  private _diffieHellmanGroup?: string; 
  public get diffieHellmanGroup() {
    return this.getStringAttribute('diffie_hellman_group');
  }
  public set diffieHellmanGroup(value: string) {
    this._diffieHellmanGroup = value;
  }
  public resetDiffieHellmanGroup() {
    this._diffieHellmanGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffieHellmanGroupInput() {
    return this._diffieHellmanGroup;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // integrity_algorithm - computed: false, optional: true, required: false
  private _integrityAlgorithm?: string; 
  public get integrityAlgorithm() {
    return this.getStringAttribute('integrity_algorithm');
  }
  public set integrityAlgorithm(value: string) {
    this._integrityAlgorithm = value;
  }
  public resetIntegrityAlgorithm() {
    this._integrityAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityAlgorithmInput() {
    return this._integrityAlgorithm;
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
}
export interface VpnIpsecTunnelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}
  */
  readonly update?: string;
}

export function vpnIpsecTunnelTimeoutsToTerraform(struct?: VpnIpsecTunnelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vpnIpsecTunnelTimeoutsToHclTerraform(struct?: VpnIpsecTunnelTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnIpsecTunnelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnIpsecTunnelTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnIpsecTunnelTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel}
*/
export class VpnIpsecTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_vpn_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsecTunnel to import
  * @param importFromId The id of the existing VpnIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_vpn_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_vpn_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.20',
        providerVersionConstraint: '6.7.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudNetworkCidrs = config.cloudNetworkCidrs;
    this._description = config.description;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._peerNetworkCidrs = config.peerNetworkCidrs;
    this._remoteHost = config.remoteHost;
    this._auth.internalValue = config.auth;
    this._esp.internalValue = config.esp;
    this._ike.internalValue = config.ike;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_network_cidrs - computed: false, optional: false, required: true
  private _cloudNetworkCidrs?: string[]; 
  public get cloudNetworkCidrs() {
    return this.getListAttribute('cloud_network_cidrs');
  }
  public set cloudNetworkCidrs(value: string[]) {
    this._cloudNetworkCidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNetworkCidrsInput() {
    return this._cloudNetworkCidrs;
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

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // peer_network_cidrs - computed: false, optional: false, required: true
  private _peerNetworkCidrs?: string[]; 
  public get peerNetworkCidrs() {
    return this.getListAttribute('peer_network_cidrs');
  }
  public set peerNetworkCidrs(value: string[]) {
    this._peerNetworkCidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkCidrsInput() {
    return this._peerNetworkCidrs;
  }

  // remote_host - computed: false, optional: false, required: true
  private _remoteHost?: string; 
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }
  public set remoteHost(value: string) {
    this._remoteHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostInput() {
    return this._remoteHost;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new VpnIpsecTunnelAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: VpnIpsecTunnelAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // esp - computed: false, optional: false, required: true
  private _esp = new VpnIpsecTunnelEspList(this, "esp", false);
  public get esp() {
    return this._esp;
  }
  public putEsp(value: VpnIpsecTunnelEsp[] | cdktf.IResolvable) {
    this._esp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get espInput() {
    return this._esp.internalValue;
  }

  // ike - computed: false, optional: false, required: true
  private _ike = new VpnIpsecTunnelIkeOutputReference(this, "ike");
  public get ike() {
    return this._ike;
  }
  public putIke(value: VpnIpsecTunnelIke) {
    this._ike.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeInput() {
    return this._ike.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnIpsecTunnelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnIpsecTunnelTimeouts) {
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
      cloud_network_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudNetworkCidrs),
      description: cdktf.stringToTerraform(this._description),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      peer_network_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerNetworkCidrs),
      remote_host: cdktf.stringToTerraform(this._remoteHost),
      auth: vpnIpsecTunnelAuthToTerraform(this._auth.internalValue),
      esp: cdktf.listMapper(vpnIpsecTunnelEspToTerraform, true)(this._esp.internalValue),
      ike: vpnIpsecTunnelIkeToTerraform(this._ike.internalValue),
      timeouts: vpnIpsecTunnelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_network_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudNetworkCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      peer_network_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerNetworkCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_host: {
        value: cdktf.stringToHclTerraform(this._remoteHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth: {
        value: vpnIpsecTunnelAuthToHclTerraform(this._auth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecTunnelAuthList",
      },
      esp: {
        value: cdktf.listMapperHcl(vpnIpsecTunnelEspToHclTerraform, true)(this._esp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecTunnelEspList",
      },
      ike: {
        value: vpnIpsecTunnelIkeToHclTerraform(this._ike.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnIpsecTunnelIkeList",
      },
      timeouts: {
        value: vpnIpsecTunnelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnIpsecTunnelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
