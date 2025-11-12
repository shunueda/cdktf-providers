// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Anti-Replay check on this tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#anti_replay IpsecTunnel#anti_replay}
  */
  readonly antiReplay?: boolean | cdktf.IResolvable;
  /**
  * Auto key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#auto_key IpsecTunnel#auto_key}
  */
  readonly autoKey: IpsecTunnelAutoKey;
  /**
  * Copy IP TOS bits from inner packet to IPSec packet (not recommended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#copy_tos IpsecTunnel#copy_tos}
  */
  readonly copyTos?: boolean | cdktf.IResolvable;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#device IpsecTunnel#device}
  */
  readonly device?: string;
  /**
  * allow GRE over IPSec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#enable_gre_encapsulation IpsecTunnel#enable_gre_encapsulation}
  */
  readonly enableGreEncapsulation?: boolean | cdktf.IResolvable;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#folder IpsecTunnel#folder}
  */
  readonly folder?: string;
  /**
  * Alphanumeric string begin with letter: [0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#snippet IpsecTunnel#snippet}
  */
  readonly snippet?: string;
  /**
  * Tunnel interface variable or hardcoded tunnel. Default will be tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#tunnel_interface IpsecTunnel#tunnel_interface}
  */
  readonly tunnelInterface?: string;
  /**
  * Tunnel monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#tunnel_monitor IpsecTunnel#tunnel_monitor}
  */
  readonly tunnelMonitor?: IpsecTunnelTunnelMonitor;
}
export interface IpsecTunnelAutoKeyIkeGateway {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name?: string;
}

export function ipsecTunnelAutoKeyIkeGatewayToTerraform(struct?: IpsecTunnelAutoKeyIkeGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipsecTunnelAutoKeyIkeGatewayToHclTerraform(struct?: IpsecTunnelAutoKeyIkeGateway | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelAutoKeyIkeGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpsecTunnelAutoKeyIkeGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyIkeGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class IpsecTunnelAutoKeyIkeGatewayList extends cdktf.ComplexList {
  public internalValue? : IpsecTunnelAutoKeyIkeGateway[] | cdktf.IResolvable

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
  public get(index: number): IpsecTunnelAutoKeyIkeGatewayOutputReference {
    return new IpsecTunnelAutoKeyIkeGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpsecTunnelAutoKeyProxyIdProtocolTcp {
  /**
  * Local port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#local_port IpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Remote port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#remote_port IpsecTunnel#remote_port}
  */
  readonly remotePort?: number;
}

export function ipsecTunnelAutoKeyProxyIdProtocolTcpToTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.numberToTerraform(struct!.localPort),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function ipsecTunnelAutoKeyProxyIdProtocolTcpToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_port: {
      value: cdktf.numberToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class IpsecTunnelAutoKeyProxyIdProtocolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKeyProxyIdProtocolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdProtocolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPort = undefined;
      this._remotePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPort = value.localPort;
      this._remotePort = value.remotePort;
    }
  }

  // local_port - computed: true, optional: true, required: false
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

  // remote_port - computed: true, optional: true, required: false
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
export interface IpsecTunnelAutoKeyProxyIdProtocolUdp {
  /**
  * Local port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#local_port IpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Remote port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#remote_port IpsecTunnel#remote_port}
  */
  readonly remotePort?: number;
}

export function ipsecTunnelAutoKeyProxyIdProtocolUdpToTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.numberToTerraform(struct!.localPort),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function ipsecTunnelAutoKeyProxyIdProtocolUdpToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_port: {
      value: cdktf.numberToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class IpsecTunnelAutoKeyProxyIdProtocolUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKeyProxyIdProtocolUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdProtocolUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPort = undefined;
      this._remotePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPort = value.localPort;
      this._remotePort = value.remotePort;
    }
  }

  // local_port - computed: true, optional: true, required: false
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

  // remote_port - computed: true, optional: true, required: false
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
export interface IpsecTunnelAutoKeyProxyIdProtocol {
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#number IpsecTunnel#number}
  */
  readonly number?: number;
  /**
  * IPv4 type of proxy_id protocol values for TCP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#tcp IpsecTunnel#tcp}
  */
  readonly tcp?: IpsecTunnelAutoKeyProxyIdProtocolTcp;
  /**
  * IPv6 type of proxy_id protocol values for UDP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#udp IpsecTunnel#udp}
  */
  readonly udp?: IpsecTunnelAutoKeyProxyIdProtocolUdp;
}

export function ipsecTunnelAutoKeyProxyIdProtocolToTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    tcp: ipsecTunnelAutoKeyProxyIdProtocolTcpToTerraform(struct!.tcp),
    udp: ipsecTunnelAutoKeyProxyIdProtocolUdpToTerraform(struct!.udp),
  }
}


export function ipsecTunnelAutoKeyProxyIdProtocolToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable): any {
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
    tcp: {
      value: ipsecTunnelAutoKeyProxyIdProtocolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelAutoKeyProxyIdProtocolTcp",
    },
    udp: {
      value: ipsecTunnelAutoKeyProxyIdProtocolUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelAutoKeyProxyIdProtocolUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelAutoKeyProxyIdProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // tcp - computed: true, optional: true, required: false
  private _tcp = new IpsecTunnelAutoKeyProxyIdProtocolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: IpsecTunnelAutoKeyProxyIdProtocolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: true, optional: true, required: false
  private _udp = new IpsecTunnelAutoKeyProxyIdProtocolUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: IpsecTunnelAutoKeyProxyIdProtocolUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}
export interface IpsecTunnelAutoKeyProxyId {
  /**
  * Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#local IpsecTunnel#local}
  */
  readonly local?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
  /**
  * IPv4 type of proxy_id protocol values for TCP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#protocol IpsecTunnel#protocol}
  */
  readonly protocol?: IpsecTunnelAutoKeyProxyIdProtocol;
  /**
  * Remote
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#remote IpsecTunnel#remote}
  */
  readonly remote?: string;
}

export function ipsecTunnelAutoKeyProxyIdToTerraform(struct?: IpsecTunnelAutoKeyProxyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.stringToTerraform(struct!.local),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: ipsecTunnelAutoKeyProxyIdProtocolToTerraform(struct!.protocol),
    remote: cdktf.stringToTerraform(struct!.remote),
  }
}


export function ipsecTunnelAutoKeyProxyIdToHclTerraform(struct?: IpsecTunnelAutoKeyProxyId | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: ipsecTunnelAutoKeyProxyIdProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelAutoKeyProxyIdProtocol",
    },
    remote: {
      value: cdktf.stringToHclTerraform(struct!.remote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelAutoKeyProxyIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpsecTunnelAutoKeyProxyId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local = undefined;
      this._name = undefined;
      this._protocol.internalValue = undefined;
      this._remote = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local = value.local;
      this._name = value.name;
      this._protocol.internalValue = value.protocol;
      this._remote = value.remote;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol = new IpsecTunnelAutoKeyProxyIdProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: IpsecTunnelAutoKeyProxyIdProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }
}

export class IpsecTunnelAutoKeyProxyIdList extends cdktf.ComplexList {
  public internalValue? : IpsecTunnelAutoKeyProxyId[] | cdktf.IResolvable

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
  public get(index: number): IpsecTunnelAutoKeyProxyIdOutputReference {
    return new IpsecTunnelAutoKeyProxyIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpsecTunnelAutoKeyProxyIdV6ProtocolTcp {
  /**
  * Local port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#local_port IpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Remote port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#remote_port IpsecTunnel#remote_port}
  */
  readonly remotePort?: number;
}

export function ipsecTunnelAutoKeyProxyIdV6ProtocolTcpToTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6ProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.numberToTerraform(struct!.localPort),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function ipsecTunnelAutoKeyProxyIdV6ProtocolTcpToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6ProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_port: {
      value: cdktf.numberToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class IpsecTunnelAutoKeyProxyIdV6ProtocolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKeyProxyIdV6ProtocolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdV6ProtocolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPort = undefined;
      this._remotePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPort = value.localPort;
      this._remotePort = value.remotePort;
    }
  }

  // local_port - computed: true, optional: true, required: false
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

  // remote_port - computed: true, optional: true, required: false
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
export interface IpsecTunnelAutoKeyProxyIdV6ProtocolUdp {
  /**
  * Local port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#local_port IpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Remote port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#remote_port IpsecTunnel#remote_port}
  */
  readonly remotePort?: number;
}

export function ipsecTunnelAutoKeyProxyIdV6ProtocolUdpToTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6ProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.numberToTerraform(struct!.localPort),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function ipsecTunnelAutoKeyProxyIdV6ProtocolUdpToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6ProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_port: {
      value: cdktf.numberToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class IpsecTunnelAutoKeyProxyIdV6ProtocolUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKeyProxyIdV6ProtocolUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdV6ProtocolUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPort = undefined;
      this._remotePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPort = value.localPort;
      this._remotePort = value.remotePort;
    }
  }

  // local_port - computed: true, optional: true, required: false
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

  // remote_port - computed: true, optional: true, required: false
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
export interface IpsecTunnelAutoKeyProxyIdV6Protocol {
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#number IpsecTunnel#number}
  */
  readonly number?: number;
  /**
  * IPv6 type of proxy_id protocol values for TCP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#tcp IpsecTunnel#tcp}
  */
  readonly tcp?: IpsecTunnelAutoKeyProxyIdV6ProtocolTcp;
  /**
  * IPv6 type of proxy_id protocol values for UDP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#udp IpsecTunnel#udp}
  */
  readonly udp?: IpsecTunnelAutoKeyProxyIdV6ProtocolUdp;
}

export function ipsecTunnelAutoKeyProxyIdV6ProtocolToTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    tcp: ipsecTunnelAutoKeyProxyIdV6ProtocolTcpToTerraform(struct!.tcp),
    udp: ipsecTunnelAutoKeyProxyIdV6ProtocolUdpToTerraform(struct!.udp),
  }
}


export function ipsecTunnelAutoKeyProxyIdV6ProtocolToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable): any {
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
    tcp: {
      value: ipsecTunnelAutoKeyProxyIdV6ProtocolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelAutoKeyProxyIdV6ProtocolTcp",
    },
    udp: {
      value: ipsecTunnelAutoKeyProxyIdV6ProtocolUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelAutoKeyProxyIdV6ProtocolUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelAutoKeyProxyIdV6ProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // tcp - computed: true, optional: true, required: false
  private _tcp = new IpsecTunnelAutoKeyProxyIdV6ProtocolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: IpsecTunnelAutoKeyProxyIdV6ProtocolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: true, optional: true, required: false
  private _udp = new IpsecTunnelAutoKeyProxyIdV6ProtocolUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: IpsecTunnelAutoKeyProxyIdV6ProtocolUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}
export interface IpsecTunnelAutoKeyProxyIdV6 {
  /**
  * Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#local IpsecTunnel#local}
  */
  readonly local?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
  /**
  * IPv6 type of proxy_id protocol values for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#protocol IpsecTunnel#protocol}
  */
  readonly protocol?: IpsecTunnelAutoKeyProxyIdV6Protocol;
  /**
  * Remote
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#remote IpsecTunnel#remote}
  */
  readonly remote?: string;
}

export function ipsecTunnelAutoKeyProxyIdV6ToTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.stringToTerraform(struct!.local),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: ipsecTunnelAutoKeyProxyIdV6ProtocolToTerraform(struct!.protocol),
    remote: cdktf.stringToTerraform(struct!.remote),
  }
}


export function ipsecTunnelAutoKeyProxyIdV6ToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6 | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: ipsecTunnelAutoKeyProxyIdV6ProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelAutoKeyProxyIdV6Protocol",
    },
    remote: {
      value: cdktf.stringToHclTerraform(struct!.remote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelAutoKeyProxyIdV6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpsecTunnelAutoKeyProxyIdV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local = undefined;
      this._name = undefined;
      this._protocol.internalValue = undefined;
      this._remote = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local = value.local;
      this._name = value.name;
      this._protocol.internalValue = value.protocol;
      this._remote = value.remote;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol = new IpsecTunnelAutoKeyProxyIdV6ProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: IpsecTunnelAutoKeyProxyIdV6Protocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }
}

export class IpsecTunnelAutoKeyProxyIdV6List extends cdktf.ComplexList {
  public internalValue? : IpsecTunnelAutoKeyProxyIdV6[] | cdktf.IResolvable

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
  public get(index: number): IpsecTunnelAutoKeyProxyIdV6OutputReference {
    return new IpsecTunnelAutoKeyProxyIdV6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpsecTunnelAutoKey {
  /**
  * Ike gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#ike_gateway IpsecTunnel#ike_gateway}
  */
  readonly ikeGateway: IpsecTunnelAutoKeyIkeGateway[] | cdktf.IResolvable;
  /**
  * Ipsec crypto profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#ipsec_crypto_profile IpsecTunnel#ipsec_crypto_profile}
  */
  readonly ipsecCryptoProfile: string;
  /**
  * IPv4 type of proxy_id values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#proxy_id IpsecTunnel#proxy_id}
  */
  readonly proxyId?: IpsecTunnelAutoKeyProxyId[] | cdktf.IResolvable;
  /**
  * IPv6 type of proxy_id values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#proxy_id_v6 IpsecTunnel#proxy_id_v6}
  */
  readonly proxyIdV6?: IpsecTunnelAutoKeyProxyIdV6[] | cdktf.IResolvable;
}

export function ipsecTunnelAutoKeyToTerraform(struct?: IpsecTunnelAutoKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_gateway: cdktf.listMapper(ipsecTunnelAutoKeyIkeGatewayToTerraform, false)(struct!.ikeGateway),
    ipsec_crypto_profile: cdktf.stringToTerraform(struct!.ipsecCryptoProfile),
    proxy_id: cdktf.listMapper(ipsecTunnelAutoKeyProxyIdToTerraform, false)(struct!.proxyId),
    proxy_id_v6: cdktf.listMapper(ipsecTunnelAutoKeyProxyIdV6ToTerraform, false)(struct!.proxyIdV6),
  }
}


export function ipsecTunnelAutoKeyToHclTerraform(struct?: IpsecTunnelAutoKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_gateway: {
      value: cdktf.listMapperHcl(ipsecTunnelAutoKeyIkeGatewayToHclTerraform, false)(struct!.ikeGateway),
      isBlock: true,
      type: "list",
      storageClassType: "IpsecTunnelAutoKeyIkeGatewayList",
    },
    ipsec_crypto_profile: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCryptoProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_id: {
      value: cdktf.listMapperHcl(ipsecTunnelAutoKeyProxyIdToHclTerraform, false)(struct!.proxyId),
      isBlock: true,
      type: "list",
      storageClassType: "IpsecTunnelAutoKeyProxyIdList",
    },
    proxy_id_v6: {
      value: cdktf.listMapperHcl(ipsecTunnelAutoKeyProxyIdV6ToHclTerraform, false)(struct!.proxyIdV6),
      isBlock: true,
      type: "list",
      storageClassType: "IpsecTunnelAutoKeyProxyIdV6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelAutoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGateway = this._ikeGateway?.internalValue;
    }
    if (this._ipsecCryptoProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCryptoProfile = this._ipsecCryptoProfile;
    }
    if (this._proxyId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyId = this._proxyId?.internalValue;
    }
    if (this._proxyIdV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyIdV6 = this._proxyIdV6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeGateway.internalValue = undefined;
      this._ipsecCryptoProfile = undefined;
      this._proxyId.internalValue = undefined;
      this._proxyIdV6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeGateway.internalValue = value.ikeGateway;
      this._ipsecCryptoProfile = value.ipsecCryptoProfile;
      this._proxyId.internalValue = value.proxyId;
      this._proxyIdV6.internalValue = value.proxyIdV6;
    }
  }

  // ike_gateway - computed: false, optional: false, required: true
  private _ikeGateway = new IpsecTunnelAutoKeyIkeGatewayList(this, "ike_gateway", false);
  public get ikeGateway() {
    return this._ikeGateway;
  }
  public putIkeGateway(value: IpsecTunnelAutoKeyIkeGateway[] | cdktf.IResolvable) {
    this._ikeGateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayInput() {
    return this._ikeGateway.internalValue;
  }

  // ipsec_crypto_profile - computed: false, optional: false, required: true
  private _ipsecCryptoProfile?: string; 
  public get ipsecCryptoProfile() {
    return this.getStringAttribute('ipsec_crypto_profile');
  }
  public set ipsecCryptoProfile(value: string) {
    this._ipsecCryptoProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCryptoProfileInput() {
    return this._ipsecCryptoProfile;
  }

  // proxy_id - computed: false, optional: true, required: false
  private _proxyId = new IpsecTunnelAutoKeyProxyIdList(this, "proxy_id", false);
  public get proxyId() {
    return this._proxyId;
  }
  public putProxyId(value: IpsecTunnelAutoKeyProxyId[] | cdktf.IResolvable) {
    this._proxyId.internalValue = value;
  }
  public resetProxyId() {
    this._proxyId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId.internalValue;
  }

  // proxy_id_v6 - computed: false, optional: true, required: false
  private _proxyIdV6 = new IpsecTunnelAutoKeyProxyIdV6List(this, "proxy_id_v6", false);
  public get proxyIdV6() {
    return this._proxyIdV6;
  }
  public putProxyIdV6(value: IpsecTunnelAutoKeyProxyIdV6[] | cdktf.IResolvable) {
    this._proxyIdV6.internalValue = value;
  }
  public resetProxyIdV6() {
    this._proxyIdV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdV6Input() {
    return this._proxyIdV6.internalValue;
  }
}
export interface IpsecTunnelTunnelMonitor {
  /**
  * Destination IP to send ICMP probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#destination_ip IpsecTunnel#destination_ip}
  */
  readonly destinationIp: string;
  /**
  * Enable tunnel monitoring on this tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#enable IpsecTunnel#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Which proxy-id (or proxy-id-v6) the monitoring traffic will use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#proxy_id IpsecTunnel#proxy_id}
  */
  readonly proxyId?: string;
}

export function ipsecTunnelTunnelMonitorToTerraform(struct?: IpsecTunnelTunnelMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    enable: cdktf.booleanToTerraform(struct!.enable),
    proxy_id: cdktf.stringToTerraform(struct!.proxyId),
  }
}


export function ipsecTunnelTunnelMonitorToHclTerraform(struct?: IpsecTunnelTunnelMonitor | cdktf.IResolvable): any {
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
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_id: {
      value: cdktf.stringToHclTerraform(struct!.proxyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelTunnelMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelTunnelMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._proxyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyId = this._proxyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelTunnelMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationIp = undefined;
      this._enable = undefined;
      this._proxyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationIp = value.destinationIp;
      this._enable = value.enable;
      this._proxyId = value.proxyId;
    }
  }

  // destination_ip - computed: true, optional: false, required: true
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // proxy_id - computed: true, optional: true, required: false
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  public resetProxyId() {
    this._proxyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel scm_ipsec_tunnel}
*/
export class IpsecTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecTunnel to import
  * @param importFromId The id of the existing IpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_tunnel scm_ipsec_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiReplay = config.antiReplay;
    this._autoKey.internalValue = config.autoKey;
    this._copyTos = config.copyTos;
    this._device = config.device;
    this._enableGreEncapsulation = config.enableGreEncapsulation;
    this._folder = config.folder;
    this._name = config.name;
    this._snippet = config.snippet;
    this._tunnelInterface = config.tunnelInterface;
    this._tunnelMonitor.internalValue = config.tunnelMonitor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_replay - computed: false, optional: true, required: false
  private _antiReplay?: boolean | cdktf.IResolvable; 
  public get antiReplay() {
    return this.getBooleanAttribute('anti_replay');
  }
  public set antiReplay(value: boolean | cdktf.IResolvable) {
    this._antiReplay = value;
  }
  public resetAntiReplay() {
    this._antiReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayInput() {
    return this._antiReplay;
  }

  // auto_key - computed: false, optional: false, required: true
  private _autoKey = new IpsecTunnelAutoKeyOutputReference(this, "auto_key");
  public get autoKey() {
    return this._autoKey;
  }
  public putAutoKey(value: IpsecTunnelAutoKey) {
    this._autoKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoKeyInput() {
    return this._autoKey.internalValue;
  }

  // copy_tos - computed: true, optional: true, required: false
  private _copyTos?: boolean | cdktf.IResolvable; 
  public get copyTos() {
    return this.getBooleanAttribute('copy_tos');
  }
  public set copyTos(value: boolean | cdktf.IResolvable) {
    this._copyTos = value;
  }
  public resetCopyTos() {
    this._copyTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTosInput() {
    return this._copyTos;
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

  // enable_gre_encapsulation - computed: true, optional: true, required: false
  private _enableGreEncapsulation?: boolean | cdktf.IResolvable; 
  public get enableGreEncapsulation() {
    return this.getBooleanAttribute('enable_gre_encapsulation');
  }
  public set enableGreEncapsulation(value: boolean | cdktf.IResolvable) {
    this._enableGreEncapsulation = value;
  }
  public resetEnableGreEncapsulation() {
    this._enableGreEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGreEncapsulationInput() {
    return this._enableGreEncapsulation;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // tunnel_interface - computed: true, optional: true, required: false
  private _tunnelInterface?: string; 
  public get tunnelInterface() {
    return this.getStringAttribute('tunnel_interface');
  }
  public set tunnelInterface(value: string) {
    this._tunnelInterface = value;
  }
  public resetTunnelInterface() {
    this._tunnelInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceInput() {
    return this._tunnelInterface;
  }

  // tunnel_monitor - computed: true, optional: true, required: false
  private _tunnelMonitor = new IpsecTunnelTunnelMonitorOutputReference(this, "tunnel_monitor");
  public get tunnelMonitor() {
    return this._tunnelMonitor;
  }
  public putTunnelMonitor(value: IpsecTunnelTunnelMonitor) {
    this._tunnelMonitor.internalValue = value;
  }
  public resetTunnelMonitor() {
    this._tunnelMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMonitorInput() {
    return this._tunnelMonitor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_replay: cdktf.booleanToTerraform(this._antiReplay),
      auto_key: ipsecTunnelAutoKeyToTerraform(this._autoKey.internalValue),
      copy_tos: cdktf.booleanToTerraform(this._copyTos),
      device: cdktf.stringToTerraform(this._device),
      enable_gre_encapsulation: cdktf.booleanToTerraform(this._enableGreEncapsulation),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
      tunnel_interface: cdktf.stringToTerraform(this._tunnelInterface),
      tunnel_monitor: ipsecTunnelTunnelMonitorToTerraform(this._tunnelMonitor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_replay: {
        value: cdktf.booleanToHclTerraform(this._antiReplay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_key: {
        value: ipsecTunnelAutoKeyToHclTerraform(this._autoKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecTunnelAutoKey",
      },
      copy_tos: {
        value: cdktf.booleanToHclTerraform(this._copyTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_gre_encapsulation: {
        value: cdktf.booleanToHclTerraform(this._enableGreEncapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface: {
        value: cdktf.stringToHclTerraform(this._tunnelInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_monitor: {
        value: ipsecTunnelTunnelMonitorToHclTerraform(this._tunnelMonitor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecTunnelTunnelMonitor",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
