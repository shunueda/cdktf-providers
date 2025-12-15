// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIpsecVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Interface to bind vpn for route-based vpn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#bind_interface SecurityIpsecVpn#bind_interface}
  */
  readonly bindInterface?: string;
  /**
  * Enable copying outer IP header DSCP and ECN to inner IP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#copy_outer_dscp SecurityIpsecVpn#copy_outer_dscp}
  */
  readonly copyOuterDscp?: boolean | cdktf.IResolvable;
  /**
  * Specifies how to handle the Don't Fragment bit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#df_bit SecurityIpsecVpn#df_bit}
  */
  readonly dfBit?: string;
  /**
  * When the VPN comes up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#establish_tunnels SecurityIpsecVpn#establish_tunnels}
  */
  readonly establishTunnels?: string;
  /**
  * Negotiate multiple SAs with forwarding-classes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#multi_sa_forwarding_class SecurityIpsecVpn#multi_sa_forwarding_class}
  */
  readonly multiSaForwardingClass?: string[];
  /**
  * The name of vpn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#name SecurityIpsecVpn#name}
  */
  readonly name: string;
  /**
  * ike block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#ike SecurityIpsecVpn#ike}
  */
  readonly ike?: SecurityIpsecVpnIke;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#manual SecurityIpsecVpn#manual}
  */
  readonly manual?: SecurityIpsecVpnManual;
  /**
  * traffic_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#traffic_selector SecurityIpsecVpn#traffic_selector}
  */
  readonly trafficSelector?: SecurityIpsecVpnTrafficSelector[] | cdktf.IResolvable;
  /**
  * udp_encapsulate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#udp_encapsulate SecurityIpsecVpn#udp_encapsulate}
  */
  readonly udpEncapsulate?: SecurityIpsecVpnUdpEncapsulate;
  /**
  * vpn_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#vpn_monitor SecurityIpsecVpn#vpn_monitor}
  */
  readonly vpnMonitor?: SecurityIpsecVpnVpnMonitor;
}
export interface SecurityIpsecVpnIke {
  /**
  * The name of security IKE gateway (phase-1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#gateway SecurityIpsecVpn#gateway}
  */
  readonly gateway?: string;
  /**
  * IPSec proxy-id local parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#identity_local SecurityIpsecVpn#identity_local}
  */
  readonly identityLocal?: string;
  /**
  * IPSec proxy-id remote parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#identity_remote SecurityIpsecVpn#identity_remote}
  */
  readonly identityRemote?: string;
  /**
  * IPSec proxy-id service parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#identity_service SecurityIpsecVpn#identity_service}
  */
  readonly identityService?: string;
  /**
  * The name of IPSec policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#policy SecurityIpsecVpn#policy}
  */
  readonly policy?: string;
}

export function securityIpsecVpnIkeToTerraform(struct?: SecurityIpsecVpnIke | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    identity_local: cdktf.stringToTerraform(struct!.identityLocal),
    identity_remote: cdktf.stringToTerraform(struct!.identityRemote),
    identity_service: cdktf.stringToTerraform(struct!.identityService),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function securityIpsecVpnIkeToHclTerraform(struct?: SecurityIpsecVpnIke | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_local: {
      value: cdktf.stringToHclTerraform(struct!.identityLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_remote: {
      value: cdktf.stringToHclTerraform(struct!.identityRemote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_service: {
      value: cdktf.stringToHclTerraform(struct!.identityService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsecVpnIkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIpsecVpnIke | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._identityLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityLocal = this._identityLocal;
    }
    if (this._identityRemote !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityRemote = this._identityRemote;
    }
    if (this._identityService !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityService = this._identityService;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIpsecVpnIke | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._identityLocal = undefined;
      this._identityRemote = undefined;
      this._identityService = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._identityLocal = value.identityLocal;
      this._identityRemote = value.identityRemote;
      this._identityService = value.identityService;
      this._policy = value.policy;
    }
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

  // identity_local - computed: false, optional: true, required: false
  private _identityLocal?: string; 
  public get identityLocal() {
    return this.getStringAttribute('identity_local');
  }
  public set identityLocal(value: string) {
    this._identityLocal = value;
  }
  public resetIdentityLocal() {
    this._identityLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityLocalInput() {
    return this._identityLocal;
  }

  // identity_remote - computed: false, optional: true, required: false
  private _identityRemote?: string; 
  public get identityRemote() {
    return this.getStringAttribute('identity_remote');
  }
  public set identityRemote(value: string) {
    this._identityRemote = value;
  }
  public resetIdentityRemote() {
    this._identityRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityRemoteInput() {
    return this._identityRemote;
  }

  // identity_service - computed: false, optional: true, required: false
  private _identityService?: string; 
  public get identityService() {
    return this.getStringAttribute('identity_service');
  }
  public set identityService(value: string) {
    this._identityService = value;
  }
  public resetIdentityService() {
    this._identityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityServiceInput() {
    return this._identityService;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface SecurityIpsecVpnManual {
  /**
  * Define authentication algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#authentication_algorithm SecurityIpsecVpn#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Define an authentication key with format as hexadecimal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#authentication_key_hexa SecurityIpsecVpn#authentication_key_hexa}
  */
  readonly authenticationKeyHexa?: string;
  /**
  * Define an authentication key with format as text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#authentication_key_text SecurityIpsecVpn#authentication_key_text}
  */
  readonly authenticationKeyText?: string;
  /**
  * Define encryption algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#encryption_algorithm SecurityIpsecVpn#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Define an encryption key with format as hexadecimal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#encryption_key_hexa SecurityIpsecVpn#encryption_key_hexa}
  */
  readonly encryptionKeyHexa?: string;
  /**
  * Define an encryption key with format as text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#encryption_key_text SecurityIpsecVpn#encryption_key_text}
  */
  readonly encryptionKeyText?: string;
  /**
  * External interface for the security association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#external_interface SecurityIpsecVpn#external_interface}
  */
  readonly externalInterface?: string;
  /**
  * Define the IPSec peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#gateway SecurityIpsecVpn#gateway}
  */
  readonly gateway?: string;
  /**
  * Define an IPSec protocol for the security association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#protocol SecurityIpsecVpn#protocol}
  */
  readonly protocol?: string;
  /**
  * Define security parameter index (256..16639).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#spi SecurityIpsecVpn#spi}
  */
  readonly spi?: number;
}

export function securityIpsecVpnManualToTerraform(struct?: SecurityIpsecVpnManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    authentication_key_hexa: cdktf.stringToTerraform(struct!.authenticationKeyHexa),
    authentication_key_text: cdktf.stringToTerraform(struct!.authenticationKeyText),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    encryption_key_hexa: cdktf.stringToTerraform(struct!.encryptionKeyHexa),
    encryption_key_text: cdktf.stringToTerraform(struct!.encryptionKeyText),
    external_interface: cdktf.stringToTerraform(struct!.externalInterface),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    spi: cdktf.numberToTerraform(struct!.spi),
  }
}


export function securityIpsecVpnManualToHclTerraform(struct?: SecurityIpsecVpnManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_hexa: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyHexa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_text: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyText),
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
    encryption_key_hexa: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyHexa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_text: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_interface: {
      value: cdktf.stringToHclTerraform(struct!.externalInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spi: {
      value: cdktf.numberToHclTerraform(struct!.spi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsecVpnManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIpsecVpnManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._authenticationKeyHexa !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyHexa = this._authenticationKeyHexa;
    }
    if (this._authenticationKeyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyText = this._authenticationKeyText;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._encryptionKeyHexa !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyHexa = this._encryptionKeyHexa;
    }
    if (this._encryptionKeyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyText = this._encryptionKeyText;
    }
    if (this._externalInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalInterface = this._externalInterface;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._spi !== undefined) {
      hasAnyValues = true;
      internalValueResult.spi = this._spi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIpsecVpnManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = undefined;
      this._authenticationKeyHexa = undefined;
      this._authenticationKeyText = undefined;
      this._encryptionAlgorithm = undefined;
      this._encryptionKeyHexa = undefined;
      this._encryptionKeyText = undefined;
      this._externalInterface = undefined;
      this._gateway = undefined;
      this._protocol = undefined;
      this._spi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._authenticationKeyHexa = value.authenticationKeyHexa;
      this._authenticationKeyText = value.authenticationKeyText;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._encryptionKeyHexa = value.encryptionKeyHexa;
      this._encryptionKeyText = value.encryptionKeyText;
      this._externalInterface = value.externalInterface;
      this._gateway = value.gateway;
      this._protocol = value.protocol;
      this._spi = value.spi;
    }
  }

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // authentication_key_hexa - computed: false, optional: true, required: false
  private _authenticationKeyHexa?: string; 
  public get authenticationKeyHexa() {
    return this.getStringAttribute('authentication_key_hexa');
  }
  public set authenticationKeyHexa(value: string) {
    this._authenticationKeyHexa = value;
  }
  public resetAuthenticationKeyHexa() {
    this._authenticationKeyHexa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyHexaInput() {
    return this._authenticationKeyHexa;
  }

  // authentication_key_text - computed: false, optional: true, required: false
  private _authenticationKeyText?: string; 
  public get authenticationKeyText() {
    return this.getStringAttribute('authentication_key_text');
  }
  public set authenticationKeyText(value: string) {
    this._authenticationKeyText = value;
  }
  public resetAuthenticationKeyText() {
    this._authenticationKeyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyTextInput() {
    return this._authenticationKeyText;
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

  // encryption_key_hexa - computed: false, optional: true, required: false
  private _encryptionKeyHexa?: string; 
  public get encryptionKeyHexa() {
    return this.getStringAttribute('encryption_key_hexa');
  }
  public set encryptionKeyHexa(value: string) {
    this._encryptionKeyHexa = value;
  }
  public resetEncryptionKeyHexa() {
    this._encryptionKeyHexa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyHexaInput() {
    return this._encryptionKeyHexa;
  }

  // encryption_key_text - computed: false, optional: true, required: false
  private _encryptionKeyText?: string; 
  public get encryptionKeyText() {
    return this.getStringAttribute('encryption_key_text');
  }
  public set encryptionKeyText(value: string) {
    this._encryptionKeyText = value;
  }
  public resetEncryptionKeyText() {
    this._encryptionKeyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyTextInput() {
    return this._encryptionKeyText;
  }

  // external_interface - computed: false, optional: true, required: false
  private _externalInterface?: string; 
  public get externalInterface() {
    return this.getStringAttribute('external_interface');
  }
  public set externalInterface(value: string) {
    this._externalInterface = value;
  }
  public resetExternalInterface() {
    this._externalInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInterfaceInput() {
    return this._externalInterface;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // spi - computed: false, optional: true, required: false
  private _spi?: number; 
  public get spi() {
    return this.getNumberAttribute('spi');
  }
  public set spi(value: number) {
    this._spi = value;
  }
  public resetSpi() {
    this._spi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiInput() {
    return this._spi;
  }
}
export interface SecurityIpsecVpnTrafficSelector {
  /**
  * CIDR for IP addresses of local traffic-selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#local_ip SecurityIpsecVpn#local_ip}
  */
  readonly localIp: string;
  /**
  * Name of traffic-selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#name SecurityIpsecVpn#name}
  */
  readonly name: string;
  /**
  * CIDR for IP addresses of remote traffic-selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#remote_ip SecurityIpsecVpn#remote_ip}
  */
  readonly remoteIp: string;
}

export function securityIpsecVpnTrafficSelectorToTerraform(struct?: SecurityIpsecVpnTrafficSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    name: cdktf.stringToTerraform(struct!.name),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
  }
}


export function securityIpsecVpnTrafficSelectorToHclTerraform(struct?: SecurityIpsecVpnTrafficSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsecVpnTrafficSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityIpsecVpnTrafficSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIpsecVpnTrafficSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localIp = undefined;
      this._name = undefined;
      this._remoteIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localIp = value.localIp;
      this._name = value.name;
      this._remoteIp = value.remoteIp;
    }
  }

  // local_ip - computed: false, optional: false, required: true
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
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

  // remote_ip - computed: false, optional: false, required: true
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }
}

export class SecurityIpsecVpnTrafficSelectorList extends cdktf.ComplexList {
  public internalValue? : SecurityIpsecVpnTrafficSelector[] | cdktf.IResolvable

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
  public get(index: number): SecurityIpsecVpnTrafficSelectorOutputReference {
    return new SecurityIpsecVpnTrafficSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityIpsecVpnUdpEncapsulate {
  /**
  * UDP destination port (1025..65536)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#dest_port SecurityIpsecVpn#dest_port}
  */
  readonly destPort?: number;
}

export function securityIpsecVpnUdpEncapsulateToTerraform(struct?: SecurityIpsecVpnUdpEncapsulate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_port: cdktf.numberToTerraform(struct!.destPort),
  }
}


export function securityIpsecVpnUdpEncapsulateToHclTerraform(struct?: SecurityIpsecVpnUdpEncapsulate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_port: {
      value: cdktf.numberToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsecVpnUdpEncapsulateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIpsecVpnUdpEncapsulate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIpsecVpnUdpEncapsulate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destPort = value.destPort;
    }
  }

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
}
export interface SecurityIpsecVpnVpnMonitor {
  /**
  * IP destination for monitor message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#destination_ip SecurityIpsecVpn#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Optimize for scalability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#optimized SecurityIpsecVpn#optimized}
  */
  readonly optimized?: boolean | cdktf.IResolvable;
  /**
  * Set source interface for monitor message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#source_interface SecurityIpsecVpn#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Compute the source_interface to 'bind_interface'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#source_interface_auto SecurityIpsecVpn#source_interface_auto}
  */
  readonly sourceInterfaceAuto?: boolean | cdktf.IResolvable;
}

export function securityIpsecVpnVpnMonitorToTerraform(struct?: SecurityIpsecVpnVpnMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    optimized: cdktf.booleanToTerraform(struct!.optimized),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_auto: cdktf.booleanToTerraform(struct!.sourceInterfaceAuto),
  }
}


export function securityIpsecVpnVpnMonitorToHclTerraform(struct?: SecurityIpsecVpnVpnMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optimized: {
      value: cdktf.booleanToHclTerraform(struct!.optimized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_auto: {
      value: cdktf.booleanToHclTerraform(struct!.sourceInterfaceAuto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIpsecVpnVpnMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIpsecVpnVpnMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._optimized !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimized = this._optimized;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceAuto !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceAuto = this._sourceInterfaceAuto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIpsecVpnVpnMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationIp = undefined;
      this._optimized = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceAuto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationIp = value.destinationIp;
      this._optimized = value.optimized;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceAuto = value.sourceInterfaceAuto;
    }
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // optimized - computed: false, optional: true, required: false
  private _optimized?: boolean | cdktf.IResolvable; 
  public get optimized() {
    return this.getBooleanAttribute('optimized');
  }
  public set optimized(value: boolean | cdktf.IResolvable) {
    this._optimized = value;
  }
  public resetOptimized() {
    this._optimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedInput() {
    return this._optimized;
  }

  // source_interface - computed: true, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_auto - computed: false, optional: true, required: false
  private _sourceInterfaceAuto?: boolean | cdktf.IResolvable; 
  public get sourceInterfaceAuto() {
    return this.getBooleanAttribute('source_interface_auto');
  }
  public set sourceInterfaceAuto(value: boolean | cdktf.IResolvable) {
    this._sourceInterfaceAuto = value;
  }
  public resetSourceInterfaceAuto() {
    this._sourceInterfaceAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceAutoInput() {
    return this._sourceInterfaceAuto;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn junos_security_ipsec_vpn}
*/
export class SecurityIpsecVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_ipsec_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIpsecVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIpsecVpn to import
  * @param importFromId The id of the existing SecurityIpsecVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIpsecVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_ipsec_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ipsec_vpn junos_security_ipsec_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIpsecVpnConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIpsecVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_ipsec_vpn',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindInterface = config.bindInterface;
    this._copyOuterDscp = config.copyOuterDscp;
    this._dfBit = config.dfBit;
    this._establishTunnels = config.establishTunnels;
    this._multiSaForwardingClass = config.multiSaForwardingClass;
    this._name = config.name;
    this._ike.internalValue = config.ike;
    this._manual.internalValue = config.manual;
    this._trafficSelector.internalValue = config.trafficSelector;
    this._udpEncapsulate.internalValue = config.udpEncapsulate;
    this._vpnMonitor.internalValue = config.vpnMonitor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_interface - computed: false, optional: true, required: false
  private _bindInterface?: string; 
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }
  public set bindInterface(value: string) {
    this._bindInterface = value;
  }
  public resetBindInterface() {
    this._bindInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInterfaceInput() {
    return this._bindInterface;
  }

  // copy_outer_dscp - computed: false, optional: true, required: false
  private _copyOuterDscp?: boolean | cdktf.IResolvable; 
  public get copyOuterDscp() {
    return this.getBooleanAttribute('copy_outer_dscp');
  }
  public set copyOuterDscp(value: boolean | cdktf.IResolvable) {
    this._copyOuterDscp = value;
  }
  public resetCopyOuterDscp() {
    this._copyOuterDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyOuterDscpInput() {
    return this._copyOuterDscp;
  }

  // df_bit - computed: false, optional: true, required: false
  private _dfBit?: string; 
  public get dfBit() {
    return this.getStringAttribute('df_bit');
  }
  public set dfBit(value: string) {
    this._dfBit = value;
  }
  public resetDfBit() {
    this._dfBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfBitInput() {
    return this._dfBit;
  }

  // establish_tunnels - computed: false, optional: true, required: false
  private _establishTunnels?: string; 
  public get establishTunnels() {
    return this.getStringAttribute('establish_tunnels');
  }
  public set establishTunnels(value: string) {
    this._establishTunnels = value;
  }
  public resetEstablishTunnels() {
    this._establishTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishTunnelsInput() {
    return this._establishTunnels;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_sa_forwarding_class - computed: false, optional: true, required: false
  private _multiSaForwardingClass?: string[]; 
  public get multiSaForwardingClass() {
    return cdktf.Fn.tolist(this.getListAttribute('multi_sa_forwarding_class'));
  }
  public set multiSaForwardingClass(value: string[]) {
    this._multiSaForwardingClass = value;
  }
  public resetMultiSaForwardingClass() {
    this._multiSaForwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiSaForwardingClassInput() {
    return this._multiSaForwardingClass;
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

  // ike - computed: false, optional: true, required: false
  private _ike = new SecurityIpsecVpnIkeOutputReference(this, "ike");
  public get ike() {
    return this._ike;
  }
  public putIke(value: SecurityIpsecVpnIke) {
    this._ike.internalValue = value;
  }
  public resetIke() {
    this._ike.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeInput() {
    return this._ike.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new SecurityIpsecVpnManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: SecurityIpsecVpnManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // traffic_selector - computed: false, optional: true, required: false
  private _trafficSelector = new SecurityIpsecVpnTrafficSelectorList(this, "traffic_selector", false);
  public get trafficSelector() {
    return this._trafficSelector;
  }
  public putTrafficSelector(value: SecurityIpsecVpnTrafficSelector[] | cdktf.IResolvable) {
    this._trafficSelector.internalValue = value;
  }
  public resetTrafficSelector() {
    this._trafficSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorInput() {
    return this._trafficSelector.internalValue;
  }

  // udp_encapsulate - computed: false, optional: true, required: false
  private _udpEncapsulate = new SecurityIpsecVpnUdpEncapsulateOutputReference(this, "udp_encapsulate");
  public get udpEncapsulate() {
    return this._udpEncapsulate;
  }
  public putUdpEncapsulate(value: SecurityIpsecVpnUdpEncapsulate) {
    this._udpEncapsulate.internalValue = value;
  }
  public resetUdpEncapsulate() {
    this._udpEncapsulate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpEncapsulateInput() {
    return this._udpEncapsulate.internalValue;
  }

  // vpn_monitor - computed: false, optional: true, required: false
  private _vpnMonitor = new SecurityIpsecVpnVpnMonitorOutputReference(this, "vpn_monitor");
  public get vpnMonitor() {
    return this._vpnMonitor;
  }
  public putVpnMonitor(value: SecurityIpsecVpnVpnMonitor) {
    this._vpnMonitor.internalValue = value;
  }
  public resetVpnMonitor() {
    this._vpnMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnMonitorInput() {
    return this._vpnMonitor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bind_interface: cdktf.stringToTerraform(this._bindInterface),
      copy_outer_dscp: cdktf.booleanToTerraform(this._copyOuterDscp),
      df_bit: cdktf.stringToTerraform(this._dfBit),
      establish_tunnels: cdktf.stringToTerraform(this._establishTunnels),
      multi_sa_forwarding_class: cdktf.listMapper(cdktf.stringToTerraform, false)(this._multiSaForwardingClass),
      name: cdktf.stringToTerraform(this._name),
      ike: securityIpsecVpnIkeToTerraform(this._ike.internalValue),
      manual: securityIpsecVpnManualToTerraform(this._manual.internalValue),
      traffic_selector: cdktf.listMapper(securityIpsecVpnTrafficSelectorToTerraform, true)(this._trafficSelector.internalValue),
      udp_encapsulate: securityIpsecVpnUdpEncapsulateToTerraform(this._udpEncapsulate.internalValue),
      vpn_monitor: securityIpsecVpnVpnMonitorToTerraform(this._vpnMonitor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind_interface: {
        value: cdktf.stringToHclTerraform(this._bindInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_outer_dscp: {
        value: cdktf.booleanToHclTerraform(this._copyOuterDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      df_bit: {
        value: cdktf.stringToHclTerraform(this._dfBit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      establish_tunnels: {
        value: cdktf.stringToHclTerraform(this._establishTunnels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_sa_forwarding_class: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._multiSaForwardingClass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike: {
        value: securityIpsecVpnIkeToHclTerraform(this._ike.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIpsecVpnIke",
      },
      manual: {
        value: securityIpsecVpnManualToHclTerraform(this._manual.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIpsecVpnManual",
      },
      traffic_selector: {
        value: cdktf.listMapperHcl(securityIpsecVpnTrafficSelectorToHclTerraform, true)(this._trafficSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityIpsecVpnTrafficSelectorList",
      },
      udp_encapsulate: {
        value: securityIpsecVpnUdpEncapsulateToHclTerraform(this._udpEncapsulate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIpsecVpnUdpEncapsulate",
      },
      vpn_monitor: {
        value: securityIpsecVpnVpnMonitorToHclTerraform(this._vpnMonitor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIpsecVpnVpnMonitor",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
