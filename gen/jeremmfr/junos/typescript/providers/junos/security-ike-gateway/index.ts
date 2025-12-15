// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIkeGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Addresses or hostnames of peer:1 primary, upto 4 backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#address SecurityIkeGateway#address}
  */
  readonly address?: string[];
  /**
  * Interface for IKE negotiations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#external_interface SecurityIkeGateway#external_interface}
  */
  readonly externalInterface: string;
  /**
  * Accept peer IKE-ID in general.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#general_ike_id SecurityIkeGateway#general_ike_id}
  */
  readonly generalIkeId?: boolean | cdktf.IResolvable;
  /**
  * Local IP for IKE negotiations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#local_address SecurityIkeGateway#local_address}
  */
  readonly localAddress?: string;
  /**
  * Label for the remote (peer) gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#name SecurityIkeGateway#name}
  */
  readonly name: string;
  /**
  * Disable IPSec NAT traversal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#no_nat_traversal SecurityIkeGateway#no_nat_traversal}
  */
  readonly noNatTraversal?: boolean | cdktf.IResolvable;
  /**
  * Name of the IKE policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#policy SecurityIkeGateway#policy}
  */
  readonly policy: string;
  /**
  * Negotiate using either IKE v1 or IKE v2 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#version SecurityIkeGateway#version}
  */
  readonly version?: string;
  /**
  * aaa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#aaa SecurityIkeGateway#aaa}
  */
  readonly aaa?: SecurityIkeGatewayAaa;
  /**
  * dead_peer_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#dead_peer_detection SecurityIkeGateway#dead_peer_detection}
  */
  readonly deadPeerDetection?: SecurityIkeGatewayDeadPeerDetection;
  /**
  * dynamic_remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#dynamic_remote SecurityIkeGateway#dynamic_remote}
  */
  readonly dynamicRemote?: SecurityIkeGatewayDynamicRemote;
  /**
  * local_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#local_identity SecurityIkeGateway#local_identity}
  */
  readonly localIdentity?: SecurityIkeGatewayLocalIdentity;
  /**
  * remote_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#remote_identity SecurityIkeGateway#remote_identity}
  */
  readonly remoteIdentity?: SecurityIkeGatewayRemoteIdentity;
}
export interface SecurityIkeGatewayAaa {
  /**
  * Access profile that contains authentication information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#access_profile SecurityIkeGateway#access_profile}
  */
  readonly accessProfile?: string;
  /**
  * AAA client password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#client_password SecurityIkeGateway#client_password}
  */
  readonly clientPassword?: string;
  /**
  * AAA client username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#client_username SecurityIkeGateway#client_username}
  */
  readonly clientUsername?: string;
}

export function securityIkeGatewayAaaToTerraform(struct?: SecurityIkeGatewayAaa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_profile: cdktf.stringToTerraform(struct!.accessProfile),
    client_password: cdktf.stringToTerraform(struct!.clientPassword),
    client_username: cdktf.stringToTerraform(struct!.clientUsername),
  }
}


export function securityIkeGatewayAaaToHclTerraform(struct?: SecurityIkeGatewayAaa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_profile: {
      value: cdktf.stringToHclTerraform(struct!.accessProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_password: {
      value: cdktf.stringToHclTerraform(struct!.clientPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_username: {
      value: cdktf.stringToHclTerraform(struct!.clientUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIkeGatewayAaaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIkeGatewayAaa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessProfile = this._accessProfile;
    }
    if (this._clientPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPassword = this._clientPassword;
    }
    if (this._clientUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientUsername = this._clientUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIkeGatewayAaa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessProfile = undefined;
      this._clientPassword = undefined;
      this._clientUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessProfile = value.accessProfile;
      this._clientPassword = value.clientPassword;
      this._clientUsername = value.clientUsername;
    }
  }

  // access_profile - computed: false, optional: true, required: false
  private _accessProfile?: string; 
  public get accessProfile() {
    return this.getStringAttribute('access_profile');
  }
  public set accessProfile(value: string) {
    this._accessProfile = value;
  }
  public resetAccessProfile() {
    this._accessProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessProfileInput() {
    return this._accessProfile;
  }

  // client_password - computed: false, optional: true, required: false
  private _clientPassword?: string; 
  public get clientPassword() {
    return this.getStringAttribute('client_password');
  }
  public set clientPassword(value: string) {
    this._clientPassword = value;
  }
  public resetClientPassword() {
    this._clientPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPasswordInput() {
    return this._clientPassword;
  }

  // client_username - computed: false, optional: true, required: false
  private _clientUsername?: string; 
  public get clientUsername() {
    return this.getStringAttribute('client_username');
  }
  public set clientUsername(value: string) {
    this._clientUsername = value;
  }
  public resetClientUsername() {
    this._clientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUsernameInput() {
    return this._clientUsername;
  }
}
export interface SecurityIkeGatewayDeadPeerDetection {
  /**
  * The interval at which to send DPD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#interval SecurityIkeGateway#interval}
  */
  readonly interval?: number;
  /**
  * Specify how probes are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#send_mode SecurityIkeGateway#send_mode}
  */
  readonly sendMode?: string;
  /**
  * Maximum number of DPD retransmissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#threshold SecurityIkeGateway#threshold}
  */
  readonly threshold?: number;
}

export function securityIkeGatewayDeadPeerDetectionToTerraform(struct?: SecurityIkeGatewayDeadPeerDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    send_mode: cdktf.stringToTerraform(struct!.sendMode),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function securityIkeGatewayDeadPeerDetectionToHclTerraform(struct?: SecurityIkeGatewayDeadPeerDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_mode: {
      value: cdktf.stringToHclTerraform(struct!.sendMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIkeGatewayDeadPeerDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIkeGatewayDeadPeerDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._sendMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendMode = this._sendMode;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIkeGatewayDeadPeerDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._sendMode = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._sendMode = value.sendMode;
      this._threshold = value.threshold;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // send_mode - computed: false, optional: true, required: false
  private _sendMode?: string; 
  public get sendMode() {
    return this.getStringAttribute('send_mode');
  }
  public set sendMode(value: string) {
    this._sendMode = value;
  }
  public resetSendMode() {
    this._sendMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendModeInput() {
    return this._sendMode;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SecurityIkeGatewayDynamicRemoteDistinguishedName {
  /**
  * Container string for a distinguished name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#container SecurityIkeGateway#container}
  */
  readonly container?: string;
  /**
  * Wildcard string for a distinguished name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#wildcard SecurityIkeGateway#wildcard}
  */
  readonly wildcard?: string;
}

export function securityIkeGatewayDynamicRemoteDistinguishedNameToTerraform(struct?: SecurityIkeGatewayDynamicRemoteDistinguishedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    wildcard: cdktf.stringToTerraform(struct!.wildcard),
  }
}


export function securityIkeGatewayDynamicRemoteDistinguishedNameToHclTerraform(struct?: SecurityIkeGatewayDynamicRemoteDistinguishedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.stringToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIkeGatewayDynamicRemoteDistinguishedNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIkeGatewayDynamicRemoteDistinguishedName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIkeGatewayDynamicRemoteDistinguishedName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._wildcard = value.wildcard;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}
export interface SecurityIkeGatewayDynamicRemote {
  /**
  * Maximum number of users connected to gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#connections_limit SecurityIkeGateway#connections_limit}
  */
  readonly connectionsLimit?: number;
  /**
  * Use a fully-qualified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#hostname SecurityIkeGateway#hostname}
  */
  readonly hostname?: string;
  /**
  * Type of the IKE ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#ike_user_type SecurityIkeGateway#ike_user_type}
  */
  readonly ikeUserType?: string;
  /**
  * Use an IPV4 address to identify the dynamic peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#inet SecurityIkeGateway#inet}
  */
  readonly inet?: string;
  /**
  * Use an IPV6 address to identify the dynamic peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#inet6 SecurityIkeGateway#inet6}
  */
  readonly inet6?: string;
  /**
  * Reject new connection from duplicate IKE-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#reject_duplicate_connection SecurityIkeGateway#reject_duplicate_connection}
  */
  readonly rejectDuplicateConnection?: boolean | cdktf.IResolvable;
  /**
  * Use an e-mail address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#user_at_hostname SecurityIkeGateway#user_at_hostname}
  */
  readonly userAtHostname?: string;
  /**
  * distinguished_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#distinguished_name SecurityIkeGateway#distinguished_name}
  */
  readonly distinguishedName?: SecurityIkeGatewayDynamicRemoteDistinguishedName;
}

export function securityIkeGatewayDynamicRemoteToTerraform(struct?: SecurityIkeGatewayDynamicRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connections_limit: cdktf.numberToTerraform(struct!.connectionsLimit),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ike_user_type: cdktf.stringToTerraform(struct!.ikeUserType),
    inet: cdktf.stringToTerraform(struct!.inet),
    inet6: cdktf.stringToTerraform(struct!.inet6),
    reject_duplicate_connection: cdktf.booleanToTerraform(struct!.rejectDuplicateConnection),
    user_at_hostname: cdktf.stringToTerraform(struct!.userAtHostname),
    distinguished_name: securityIkeGatewayDynamicRemoteDistinguishedNameToTerraform(struct!.distinguishedName),
  }
}


export function securityIkeGatewayDynamicRemoteToHclTerraform(struct?: SecurityIkeGatewayDynamicRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connections_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_user_type: {
      value: cdktf.stringToHclTerraform(struct!.ikeUserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inet: {
      value: cdktf.stringToHclTerraform(struct!.inet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inet6: {
      value: cdktf.stringToHclTerraform(struct!.inet6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_duplicate_connection: {
      value: cdktf.booleanToHclTerraform(struct!.rejectDuplicateConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_at_hostname: {
      value: cdktf.stringToHclTerraform(struct!.userAtHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distinguished_name: {
      value: securityIkeGatewayDynamicRemoteDistinguishedNameToHclTerraform(struct!.distinguishedName),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIkeGatewayDynamicRemoteDistinguishedName",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIkeGatewayDynamicRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIkeGatewayDynamicRemote | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsLimit = this._connectionsLimit;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ikeUserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeUserType = this._ikeUserType;
    }
    if (this._inet !== undefined) {
      hasAnyValues = true;
      internalValueResult.inet = this._inet;
    }
    if (this._inet6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.inet6 = this._inet6;
    }
    if (this._rejectDuplicateConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectDuplicateConnection = this._rejectDuplicateConnection;
    }
    if (this._userAtHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAtHostname = this._userAtHostname;
    }
    if (this._distinguishedName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIkeGatewayDynamicRemote | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionsLimit = undefined;
      this._hostname = undefined;
      this._ikeUserType = undefined;
      this._inet = undefined;
      this._inet6 = undefined;
      this._rejectDuplicateConnection = undefined;
      this._userAtHostname = undefined;
      this._distinguishedName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionsLimit = value.connectionsLimit;
      this._hostname = value.hostname;
      this._ikeUserType = value.ikeUserType;
      this._inet = value.inet;
      this._inet6 = value.inet6;
      this._rejectDuplicateConnection = value.rejectDuplicateConnection;
      this._userAtHostname = value.userAtHostname;
      this._distinguishedName.internalValue = value.distinguishedName;
    }
  }

  // connections_limit - computed: false, optional: true, required: false
  private _connectionsLimit?: number; 
  public get connectionsLimit() {
    return this.getNumberAttribute('connections_limit');
  }
  public set connectionsLimit(value: number) {
    this._connectionsLimit = value;
  }
  public resetConnectionsLimit() {
    this._connectionsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsLimitInput() {
    return this._connectionsLimit;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ike_user_type - computed: false, optional: true, required: false
  private _ikeUserType?: string; 
  public get ikeUserType() {
    return this.getStringAttribute('ike_user_type');
  }
  public set ikeUserType(value: string) {
    this._ikeUserType = value;
  }
  public resetIkeUserType() {
    this._ikeUserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeUserTypeInput() {
    return this._ikeUserType;
  }

  // inet - computed: false, optional: true, required: false
  private _inet?: string; 
  public get inet() {
    return this.getStringAttribute('inet');
  }
  public set inet(value: string) {
    this._inet = value;
  }
  public resetInet() {
    this._inet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inetInput() {
    return this._inet;
  }

  // inet6 - computed: false, optional: true, required: false
  private _inet6?: string; 
  public get inet6() {
    return this.getStringAttribute('inet6');
  }
  public set inet6(value: string) {
    this._inet6 = value;
  }
  public resetInet6() {
    this._inet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inet6Input() {
    return this._inet6;
  }

  // reject_duplicate_connection - computed: false, optional: true, required: false
  private _rejectDuplicateConnection?: boolean | cdktf.IResolvable; 
  public get rejectDuplicateConnection() {
    return this.getBooleanAttribute('reject_duplicate_connection');
  }
  public set rejectDuplicateConnection(value: boolean | cdktf.IResolvable) {
    this._rejectDuplicateConnection = value;
  }
  public resetRejectDuplicateConnection() {
    this._rejectDuplicateConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectDuplicateConnectionInput() {
    return this._rejectDuplicateConnection;
  }

  // user_at_hostname - computed: false, optional: true, required: false
  private _userAtHostname?: string; 
  public get userAtHostname() {
    return this.getStringAttribute('user_at_hostname');
  }
  public set userAtHostname(value: string) {
    this._userAtHostname = value;
  }
  public resetUserAtHostname() {
    this._userAtHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAtHostnameInput() {
    return this._userAtHostname;
  }

  // distinguished_name - computed: false, optional: true, required: false
  private _distinguishedName = new SecurityIkeGatewayDynamicRemoteDistinguishedNameOutputReference(this, "distinguished_name");
  public get distinguishedName() {
    return this._distinguishedName;
  }
  public putDistinguishedName(value: SecurityIkeGatewayDynamicRemoteDistinguishedName) {
    this._distinguishedName.internalValue = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName.internalValue;
  }
}
export interface SecurityIkeGatewayLocalIdentity {
  /**
  * Type of IKE identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#type SecurityIkeGateway#type}
  */
  readonly type?: string;
  /**
  * Value for IKE identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#value SecurityIkeGateway#value}
  */
  readonly value?: string;
}

export function securityIkeGatewayLocalIdentityToTerraform(struct?: SecurityIkeGatewayLocalIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function securityIkeGatewayLocalIdentityToHclTerraform(struct?: SecurityIkeGatewayLocalIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIkeGatewayLocalIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIkeGatewayLocalIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIkeGatewayLocalIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityIkeGatewayRemoteIdentity {
  /**
  * Container string for a distinguished name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#distinguished_name_container SecurityIkeGateway#distinguished_name_container}
  */
  readonly distinguishedNameContainer?: string;
  /**
  * Wildcard string for a distinguished name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#distinguished_name_wildcard SecurityIkeGateway#distinguished_name_wildcard}
  */
  readonly distinguishedNameWildcard?: string;
  /**
  * Type of IKE identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#type SecurityIkeGateway#type}
  */
  readonly type?: string;
  /**
  * Value for IKE identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#value SecurityIkeGateway#value}
  */
  readonly value?: string;
}

export function securityIkeGatewayRemoteIdentityToTerraform(struct?: SecurityIkeGatewayRemoteIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distinguished_name_container: cdktf.stringToTerraform(struct!.distinguishedNameContainer),
    distinguished_name_wildcard: cdktf.stringToTerraform(struct!.distinguishedNameWildcard),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function securityIkeGatewayRemoteIdentityToHclTerraform(struct?: SecurityIkeGatewayRemoteIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distinguished_name_container: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedNameContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distinguished_name_wildcard: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedNameWildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIkeGatewayRemoteIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIkeGatewayRemoteIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distinguishedNameContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameContainer = this._distinguishedNameContainer;
    }
    if (this._distinguishedNameWildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameWildcard = this._distinguishedNameWildcard;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIkeGatewayRemoteIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distinguishedNameContainer = undefined;
      this._distinguishedNameWildcard = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distinguishedNameContainer = value.distinguishedNameContainer;
      this._distinguishedNameWildcard = value.distinguishedNameWildcard;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // distinguished_name_container - computed: false, optional: true, required: false
  private _distinguishedNameContainer?: string; 
  public get distinguishedNameContainer() {
    return this.getStringAttribute('distinguished_name_container');
  }
  public set distinguishedNameContainer(value: string) {
    this._distinguishedNameContainer = value;
  }
  public resetDistinguishedNameContainer() {
    this._distinguishedNameContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameContainerInput() {
    return this._distinguishedNameContainer;
  }

  // distinguished_name_wildcard - computed: false, optional: true, required: false
  private _distinguishedNameWildcard?: string; 
  public get distinguishedNameWildcard() {
    return this.getStringAttribute('distinguished_name_wildcard');
  }
  public set distinguishedNameWildcard(value: string) {
    this._distinguishedNameWildcard = value;
  }
  public resetDistinguishedNameWildcard() {
    this._distinguishedNameWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameWildcardInput() {
    return this._distinguishedNameWildcard;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway junos_security_ike_gateway}
*/
export class SecurityIkeGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_ike_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIkeGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIkeGateway to import
  * @param importFromId The id of the existing SecurityIkeGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIkeGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_ike_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_gateway junos_security_ike_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIkeGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIkeGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_ike_gateway',
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
    this._address = config.address;
    this._externalInterface = config.externalInterface;
    this._generalIkeId = config.generalIkeId;
    this._localAddress = config.localAddress;
    this._name = config.name;
    this._noNatTraversal = config.noNatTraversal;
    this._policy = config.policy;
    this._version = config.version;
    this._aaa.internalValue = config.aaa;
    this._deadPeerDetection.internalValue = config.deadPeerDetection;
    this._dynamicRemote.internalValue = config.dynamicRemote;
    this._localIdentity.internalValue = config.localIdentity;
    this._remoteIdentity.internalValue = config.remoteIdentity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // external_interface - computed: false, optional: false, required: true
  private _externalInterface?: string; 
  public get externalInterface() {
    return this.getStringAttribute('external_interface');
  }
  public set externalInterface(value: string) {
    this._externalInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInterfaceInput() {
    return this._externalInterface;
  }

  // general_ike_id - computed: false, optional: true, required: false
  private _generalIkeId?: boolean | cdktf.IResolvable; 
  public get generalIkeId() {
    return this.getBooleanAttribute('general_ike_id');
  }
  public set generalIkeId(value: boolean | cdktf.IResolvable) {
    this._generalIkeId = value;
  }
  public resetGeneralIkeId() {
    this._generalIkeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalIkeIdInput() {
    return this._generalIkeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
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

  // no_nat_traversal - computed: false, optional: true, required: false
  private _noNatTraversal?: boolean | cdktf.IResolvable; 
  public get noNatTraversal() {
    return this.getBooleanAttribute('no_nat_traversal');
  }
  public set noNatTraversal(value: boolean | cdktf.IResolvable) {
    this._noNatTraversal = value;
  }
  public resetNoNatTraversal() {
    this._noNatTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNatTraversalInput() {
    return this._noNatTraversal;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // aaa - computed: false, optional: true, required: false
  private _aaa = new SecurityIkeGatewayAaaOutputReference(this, "aaa");
  public get aaa() {
    return this._aaa;
  }
  public putAaa(value: SecurityIkeGatewayAaa) {
    this._aaa.internalValue = value;
  }
  public resetAaa() {
    this._aaa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaInput() {
    return this._aaa.internalValue;
  }

  // dead_peer_detection - computed: false, optional: true, required: false
  private _deadPeerDetection = new SecurityIkeGatewayDeadPeerDetectionOutputReference(this, "dead_peer_detection");
  public get deadPeerDetection() {
    return this._deadPeerDetection;
  }
  public putDeadPeerDetection(value: SecurityIkeGatewayDeadPeerDetection) {
    this._deadPeerDetection.internalValue = value;
  }
  public resetDeadPeerDetection() {
    this._deadPeerDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadPeerDetectionInput() {
    return this._deadPeerDetection.internalValue;
  }

  // dynamic_remote - computed: false, optional: true, required: false
  private _dynamicRemote = new SecurityIkeGatewayDynamicRemoteOutputReference(this, "dynamic_remote");
  public get dynamicRemote() {
    return this._dynamicRemote;
  }
  public putDynamicRemote(value: SecurityIkeGatewayDynamicRemote) {
    this._dynamicRemote.internalValue = value;
  }
  public resetDynamicRemote() {
    this._dynamicRemote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicRemoteInput() {
    return this._dynamicRemote.internalValue;
  }

  // local_identity - computed: false, optional: true, required: false
  private _localIdentity = new SecurityIkeGatewayLocalIdentityOutputReference(this, "local_identity");
  public get localIdentity() {
    return this._localIdentity;
  }
  public putLocalIdentity(value: SecurityIkeGatewayLocalIdentity) {
    this._localIdentity.internalValue = value;
  }
  public resetLocalIdentity() {
    this._localIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdentityInput() {
    return this._localIdentity.internalValue;
  }

  // remote_identity - computed: false, optional: true, required: false
  private _remoteIdentity = new SecurityIkeGatewayRemoteIdentityOutputReference(this, "remote_identity");
  public get remoteIdentity() {
    return this._remoteIdentity;
  }
  public putRemoteIdentity(value: SecurityIkeGatewayRemoteIdentity) {
    this._remoteIdentity.internalValue = value;
  }
  public resetRemoteIdentity() {
    this._remoteIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdentityInput() {
    return this._remoteIdentity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._address),
      external_interface: cdktf.stringToTerraform(this._externalInterface),
      general_ike_id: cdktf.booleanToTerraform(this._generalIkeId),
      local_address: cdktf.stringToTerraform(this._localAddress),
      name: cdktf.stringToTerraform(this._name),
      no_nat_traversal: cdktf.booleanToTerraform(this._noNatTraversal),
      policy: cdktf.stringToTerraform(this._policy),
      version: cdktf.stringToTerraform(this._version),
      aaa: securityIkeGatewayAaaToTerraform(this._aaa.internalValue),
      dead_peer_detection: securityIkeGatewayDeadPeerDetectionToTerraform(this._deadPeerDetection.internalValue),
      dynamic_remote: securityIkeGatewayDynamicRemoteToTerraform(this._dynamicRemote.internalValue),
      local_identity: securityIkeGatewayLocalIdentityToTerraform(this._localIdentity.internalValue),
      remote_identity: securityIkeGatewayRemoteIdentityToTerraform(this._remoteIdentity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._address),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_interface: {
        value: cdktf.stringToHclTerraform(this._externalInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      general_ike_id: {
        value: cdktf.booleanToHclTerraform(this._generalIkeId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
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
      no_nat_traversal: {
        value: cdktf.booleanToHclTerraform(this._noNatTraversal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa: {
        value: securityIkeGatewayAaaToHclTerraform(this._aaa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIkeGatewayAaa",
      },
      dead_peer_detection: {
        value: securityIkeGatewayDeadPeerDetectionToHclTerraform(this._deadPeerDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIkeGatewayDeadPeerDetection",
      },
      dynamic_remote: {
        value: securityIkeGatewayDynamicRemoteToHclTerraform(this._dynamicRemote.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIkeGatewayDynamicRemote",
      },
      local_identity: {
        value: securityIkeGatewayLocalIdentityToHclTerraform(this._localIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIkeGatewayLocalIdentity",
      },
      remote_identity: {
        value: securityIkeGatewayRemoteIdentityToHclTerraform(this._remoteIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIkeGatewayRemoteIdentity",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
