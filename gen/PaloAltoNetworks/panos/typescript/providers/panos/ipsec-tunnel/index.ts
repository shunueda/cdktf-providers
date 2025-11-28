// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Anti-Replay check on this tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#anti_replay IpsecTunnel#anti_replay}
  */
  readonly antiReplay?: boolean | cdktf.IResolvable;
  /**
  * 64,128,256,512,1024,2048,4096
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#anti_replay_window IpsecTunnel#anti_replay_window}
  */
  readonly antiReplayWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#auto_key IpsecTunnel#auto_key}
  */
  readonly autoKey?: IpsecTunnelAutoKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#comment IpsecTunnel#comment}
  */
  readonly comment?: string;
  /**
  * Copy IPv6 flow label for 6in6 tunnel from inner packet to IPSec packet (not recommended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#copy_flow_label IpsecTunnel#copy_flow_label}
  */
  readonly copyFlowLabel?: boolean | cdktf.IResolvable;
  /**
  * Copy IP TOS bits from inner packet to IPSec packet (not recommended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#copy_tos IpsecTunnel#copy_tos}
  */
  readonly copyTos?: boolean | cdktf.IResolvable;
  /**
  * Disable the IPSec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#disabled IpsecTunnel#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * allow GRE over IPSec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#enable_gre_encapsulation IpsecTunnel#enable_gre_encapsulation}
  */
  readonly enableGreEncapsulation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#global_protect_satellite IpsecTunnel#global_protect_satellite}
  */
  readonly globalProtectSatellite?: IpsecTunnelGlobalProtectSatellite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ipsec_mode IpsecTunnel#ipsec_mode}
  */
  readonly ipsecMode?: string;
  /**
  * use IPv6 for the IPSec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ipv6 IpsecTunnel#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#location IpsecTunnel#location}
  */
  readonly location: IpsecTunnelLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#manual_key IpsecTunnel#manual_key}
  */
  readonly manualKey?: IpsecTunnelManualKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
  /**
  * to apply IPSec VPN tunnels to tunnel interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#tunnel_interface IpsecTunnel#tunnel_interface}
  */
  readonly tunnelInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#tunnel_monitor IpsecTunnel#tunnel_monitor}
  */
  readonly tunnelMonitor?: IpsecTunnelTunnelMonitor;
}
export interface IpsecTunnelAutoKeyIkeGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
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
export interface IpsecTunnelAutoKeyProxyIdProtocolAny {
}

export function ipsecTunnelAutoKeyProxyIdProtocolAnyToTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocolAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipsecTunnelAutoKeyProxyIdProtocolAnyToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocolAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpsecTunnelAutoKeyProxyIdProtocolAnyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKeyProxyIdProtocolAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdProtocolAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface IpsecTunnelAutoKeyProxyIdProtocolTcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local_port IpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#remote_port IpsecTunnel#remote_port}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local_port IpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#remote_port IpsecTunnel#remote_port}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#any IpsecTunnel#any}
  */
  readonly any?: IpsecTunnelAutoKeyProxyIdProtocolAny;
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#number IpsecTunnel#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#tcp IpsecTunnel#tcp}
  */
  readonly tcp?: IpsecTunnelAutoKeyProxyIdProtocolTcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#udp IpsecTunnel#udp}
  */
  readonly udp?: IpsecTunnelAutoKeyProxyIdProtocolUdp;
}

export function ipsecTunnelAutoKeyProxyIdProtocolToTerraform(struct?: IpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: ipsecTunnelAutoKeyProxyIdProtocolAnyToTerraform(struct!.any),
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
    any: {
      value: ipsecTunnelAutoKeyProxyIdProtocolAnyToHclTerraform(struct!.any),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelAutoKeyProxyIdProtocolAny",
    },
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
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
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
      this._any.internalValue = undefined;
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
      this._any.internalValue = value.any;
      this._number = value.number;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any = new IpsecTunnelAutoKeyProxyIdProtocolAnyOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: IpsecTunnelAutoKeyProxyIdProtocolAny) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }

  // number - computed: false, optional: true, required: false
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

  // tcp - computed: false, optional: true, required: false
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

  // udp - computed: false, optional: true, required: false
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
  * IP subnet or IP address represents local network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local IpsecTunnel#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#protocol IpsecTunnel#protocol}
  */
  readonly protocol?: IpsecTunnelAutoKeyProxyIdProtocol;
  /**
  * IP subnet or IP address represents remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#remote IpsecTunnel#remote}
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

  // protocol - computed: false, optional: true, required: false
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
export interface IpsecTunnelAutoKeyProxyIdV6ProtocolAny {
}

export function ipsecTunnelAutoKeyProxyIdV6ProtocolAnyToTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6ProtocolAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipsecTunnelAutoKeyProxyIdV6ProtocolAnyToHclTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6ProtocolAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpsecTunnelAutoKeyProxyIdV6ProtocolAnyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelAutoKeyProxyIdV6ProtocolAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelAutoKeyProxyIdV6ProtocolAny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface IpsecTunnelAutoKeyProxyIdV6ProtocolTcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local_port IpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#remote_port IpsecTunnel#remote_port}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local_port IpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#remote_port IpsecTunnel#remote_port}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#any IpsecTunnel#any}
  */
  readonly any?: IpsecTunnelAutoKeyProxyIdV6ProtocolAny;
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#number IpsecTunnel#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#tcp IpsecTunnel#tcp}
  */
  readonly tcp?: IpsecTunnelAutoKeyProxyIdV6ProtocolTcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#udp IpsecTunnel#udp}
  */
  readonly udp?: IpsecTunnelAutoKeyProxyIdV6ProtocolUdp;
}

export function ipsecTunnelAutoKeyProxyIdV6ProtocolToTerraform(struct?: IpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: ipsecTunnelAutoKeyProxyIdV6ProtocolAnyToTerraform(struct!.any),
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
    any: {
      value: ipsecTunnelAutoKeyProxyIdV6ProtocolAnyToHclTerraform(struct!.any),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelAutoKeyProxyIdV6ProtocolAny",
    },
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
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
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
      this._any.internalValue = undefined;
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
      this._any.internalValue = value.any;
      this._number = value.number;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any = new IpsecTunnelAutoKeyProxyIdV6ProtocolAnyOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: IpsecTunnelAutoKeyProxyIdV6ProtocolAny) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }

  // number - computed: false, optional: true, required: false
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

  // tcp - computed: false, optional: true, required: false
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

  // udp - computed: false, optional: true, required: false
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
  * IP subnet or IP address represents local network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local IpsecTunnel#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#protocol IpsecTunnel#protocol}
  */
  readonly protocol?: IpsecTunnelAutoKeyProxyIdV6Protocol;
  /**
  * IP subnet or IP address represents remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#remote IpsecTunnel#remote}
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

  // protocol - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ike_gateway IpsecTunnel#ike_gateway}
  */
  readonly ikeGateway?: IpsecTunnelAutoKeyIkeGateway[] | cdktf.IResolvable;
  /**
  * IPSec crypto profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ipsec_crypto_profile IpsecTunnel#ipsec_crypto_profile}
  */
  readonly ipsecCryptoProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#proxy_id IpsecTunnel#proxy_id}
  */
  readonly proxyId?: IpsecTunnelAutoKeyProxyId[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#proxy_id_v6 IpsecTunnel#proxy_id_v6}
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

  // ike_gateway - computed: false, optional: true, required: false
  private _ikeGateway = new IpsecTunnelAutoKeyIkeGatewayList(this, "ike_gateway", false);
  public get ikeGateway() {
    return this._ikeGateway;
  }
  public putIkeGateway(value: IpsecTunnelAutoKeyIkeGateway[] | cdktf.IResolvable) {
    this._ikeGateway.internalValue = value;
  }
  public resetIkeGateway() {
    this._ikeGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayInput() {
    return this._ikeGateway.internalValue;
  }

  // ipsec_crypto_profile - computed: true, optional: true, required: false
  private _ipsecCryptoProfile?: string; 
  public get ipsecCryptoProfile() {
    return this.getStringAttribute('ipsec_crypto_profile');
  }
  public set ipsecCryptoProfile(value: string) {
    this._ipsecCryptoProfile = value;
  }
  public resetIpsecCryptoProfile() {
    this._ipsecCryptoProfile = undefined;
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
export interface IpsecTunnelGlobalProtectSatelliteExternalCa {
  /**
  * Profile for authenticating GlobalProtect gateway certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#certificate_profile IpsecTunnel#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * GlobalProtect satellite certificate file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local_certificate IpsecTunnel#local_certificate}
  */
  readonly localCertificate?: string;
}

export function ipsecTunnelGlobalProtectSatelliteExternalCaToTerraform(struct?: IpsecTunnelGlobalProtectSatelliteExternalCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    local_certificate: cdktf.stringToTerraform(struct!.localCertificate),
  }
}


export function ipsecTunnelGlobalProtectSatelliteExternalCaToHclTerraform(struct?: IpsecTunnelGlobalProtectSatelliteExternalCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_certificate: {
      value: cdktf.stringToHclTerraform(struct!.localCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelGlobalProtectSatelliteExternalCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelGlobalProtectSatelliteExternalCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._localCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCertificate = this._localCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelGlobalProtectSatelliteExternalCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProfile = undefined;
      this._localCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProfile = value.certificateProfile;
      this._localCertificate = value.localCertificate;
    }
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // local_certificate - computed: false, optional: true, required: false
  private _localCertificate?: string; 
  public get localCertificate() {
    return this.getStringAttribute('local_certificate');
  }
  public set localCertificate(value: string) {
    this._localCertificate = value;
  }
  public resetLocalCertificate() {
    this._localCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertificateInput() {
    return this._localCertificate;
  }
}
export interface IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ipv4 IpsecTunnel#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Floating IPv6 address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ipv6 IpsecTunnel#ipv6}
  */
  readonly ipv6?: string;
}

export function ipsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpToTerraform(struct?: IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function ipsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpToHclTerraform(struct?: IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface IpsecTunnelGlobalProtectSatelliteLocalAddressIp {
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ipv4 IpsecTunnel#ipv4}
  */
  readonly ipv4?: string;
  /**
  * specify exact local IPv6 address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ipv6 IpsecTunnel#ipv6}
  */
  readonly ipv6?: string;
}

export function ipsecTunnelGlobalProtectSatelliteLocalAddressIpToTerraform(struct?: IpsecTunnelGlobalProtectSatelliteLocalAddressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function ipsecTunnelGlobalProtectSatelliteLocalAddressIpToHclTerraform(struct?: IpsecTunnelGlobalProtectSatelliteLocalAddressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelGlobalProtectSatelliteLocalAddressIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelGlobalProtectSatelliteLocalAddressIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelGlobalProtectSatelliteLocalAddressIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface IpsecTunnelGlobalProtectSatelliteLocalAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#floating_ip IpsecTunnel#floating_ip}
  */
  readonly floatingIp?: IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp;
  /**
  * Interface to communicate with Portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#interface IpsecTunnel#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ip IpsecTunnel#ip}
  */
  readonly ip?: IpsecTunnelGlobalProtectSatelliteLocalAddressIp;
}

export function ipsecTunnelGlobalProtectSatelliteLocalAddressToTerraform(struct?: IpsecTunnelGlobalProtectSatelliteLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: ipsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: ipsecTunnelGlobalProtectSatelliteLocalAddressIpToTerraform(struct!.ip),
  }
}


export function ipsecTunnelGlobalProtectSatelliteLocalAddressToHclTerraform(struct?: IpsecTunnelGlobalProtectSatelliteLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: ipsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpToHclTerraform(struct!.floatingIp),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: ipsecTunnelGlobalProtectSatelliteLocalAddressIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelGlobalProtectSatelliteLocalAddressIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelGlobalProtectSatelliteLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelGlobalProtectSatelliteLocalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp?.internalValue;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelGlobalProtectSatelliteLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp.internalValue = undefined;
      this._interface = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp.internalValue = value.floatingIp;
      this._interface = value.interface;
      this._ip.internalValue = value.ip;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp = new IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: IpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new IpsecTunnelGlobalProtectSatelliteLocalAddressIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: IpsecTunnelGlobalProtectSatelliteLocalAddressIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}
export interface IpsecTunnelGlobalProtectSatellitePublishConnectedRoutes {
  /**
  * Enable publishing of connected and static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#enable IpsecTunnel#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function ipsecTunnelGlobalProtectSatellitePublishConnectedRoutesToTerraform(struct?: IpsecTunnelGlobalProtectSatellitePublishConnectedRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function ipsecTunnelGlobalProtectSatellitePublishConnectedRoutesToHclTerraform(struct?: IpsecTunnelGlobalProtectSatellitePublishConnectedRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelGlobalProtectSatellitePublishConnectedRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelGlobalProtectSatellitePublishConnectedRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelGlobalProtectSatellitePublishConnectedRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
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
}
export interface IpsecTunnelGlobalProtectSatellite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#external_ca IpsecTunnel#external_ca}
  */
  readonly externalCa?: IpsecTunnelGlobalProtectSatelliteExternalCa;
  /**
  * Prefer to register to portal in ipv6. Only applicable to fqdn portal-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ipv6_preferred IpsecTunnel#ipv6_preferred}
  */
  readonly ipv6Preferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local_address IpsecTunnel#local_address}
  */
  readonly localAddress?: IpsecTunnelGlobalProtectSatelliteLocalAddress;
  /**
  * GlobalProtect portal address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#portal_address IpsecTunnel#portal_address}
  */
  readonly portalAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#publish_connected_routes IpsecTunnel#publish_connected_routes}
  */
  readonly publishConnectedRoutes?: IpsecTunnelGlobalProtectSatellitePublishConnectedRoutes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#publish_routes IpsecTunnel#publish_routes}
  */
  readonly publishRoutes?: string[];
}

export function ipsecTunnelGlobalProtectSatelliteToTerraform(struct?: IpsecTunnelGlobalProtectSatellite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ca: ipsecTunnelGlobalProtectSatelliteExternalCaToTerraform(struct!.externalCa),
    ipv6_preferred: cdktf.booleanToTerraform(struct!.ipv6Preferred),
    local_address: ipsecTunnelGlobalProtectSatelliteLocalAddressToTerraform(struct!.localAddress),
    portal_address: cdktf.stringToTerraform(struct!.portalAddress),
    publish_connected_routes: ipsecTunnelGlobalProtectSatellitePublishConnectedRoutesToTerraform(struct!.publishConnectedRoutes),
    publish_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publishRoutes),
  }
}


export function ipsecTunnelGlobalProtectSatelliteToHclTerraform(struct?: IpsecTunnelGlobalProtectSatellite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ca: {
      value: ipsecTunnelGlobalProtectSatelliteExternalCaToHclTerraform(struct!.externalCa),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelGlobalProtectSatelliteExternalCa",
    },
    ipv6_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Preferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_address: {
      value: ipsecTunnelGlobalProtectSatelliteLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelGlobalProtectSatelliteLocalAddress",
    },
    portal_address: {
      value: cdktf.stringToHclTerraform(struct!.portalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_connected_routes: {
      value: ipsecTunnelGlobalProtectSatellitePublishConnectedRoutesToHclTerraform(struct!.publishConnectedRoutes),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelGlobalProtectSatellitePublishConnectedRoutes",
    },
    publish_routes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publishRoutes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelGlobalProtectSatelliteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelGlobalProtectSatellite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCa = this._externalCa?.internalValue;
    }
    if (this._ipv6Preferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Preferred = this._ipv6Preferred;
    }
    if (this._localAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress?.internalValue;
    }
    if (this._portalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalAddress = this._portalAddress;
    }
    if (this._publishConnectedRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishConnectedRoutes = this._publishConnectedRoutes?.internalValue;
    }
    if (this._publishRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishRoutes = this._publishRoutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelGlobalProtectSatellite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalCa.internalValue = undefined;
      this._ipv6Preferred = undefined;
      this._localAddress.internalValue = undefined;
      this._portalAddress = undefined;
      this._publishConnectedRoutes.internalValue = undefined;
      this._publishRoutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalCa.internalValue = value.externalCa;
      this._ipv6Preferred = value.ipv6Preferred;
      this._localAddress.internalValue = value.localAddress;
      this._portalAddress = value.portalAddress;
      this._publishConnectedRoutes.internalValue = value.publishConnectedRoutes;
      this._publishRoutes = value.publishRoutes;
    }
  }

  // external_ca - computed: false, optional: true, required: false
  private _externalCa = new IpsecTunnelGlobalProtectSatelliteExternalCaOutputReference(this, "external_ca");
  public get externalCa() {
    return this._externalCa;
  }
  public putExternalCa(value: IpsecTunnelGlobalProtectSatelliteExternalCa) {
    this._externalCa.internalValue = value;
  }
  public resetExternalCa() {
    this._externalCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCaInput() {
    return this._externalCa.internalValue;
  }

  // ipv6_preferred - computed: false, optional: true, required: false
  private _ipv6Preferred?: boolean | cdktf.IResolvable; 
  public get ipv6Preferred() {
    return this.getBooleanAttribute('ipv6_preferred');
  }
  public set ipv6Preferred(value: boolean | cdktf.IResolvable) {
    this._ipv6Preferred = value;
  }
  public resetIpv6Preferred() {
    this._ipv6Preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PreferredInput() {
    return this._ipv6Preferred;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress = new IpsecTunnelGlobalProtectSatelliteLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: IpsecTunnelGlobalProtectSatelliteLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // portal_address - computed: false, optional: true, required: false
  private _portalAddress?: string; 
  public get portalAddress() {
    return this.getStringAttribute('portal_address');
  }
  public set portalAddress(value: string) {
    this._portalAddress = value;
  }
  public resetPortalAddress() {
    this._portalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalAddressInput() {
    return this._portalAddress;
  }

  // publish_connected_routes - computed: false, optional: true, required: false
  private _publishConnectedRoutes = new IpsecTunnelGlobalProtectSatellitePublishConnectedRoutesOutputReference(this, "publish_connected_routes");
  public get publishConnectedRoutes() {
    return this._publishConnectedRoutes;
  }
  public putPublishConnectedRoutes(value: IpsecTunnelGlobalProtectSatellitePublishConnectedRoutes) {
    this._publishConnectedRoutes.internalValue = value;
  }
  public resetPublishConnectedRoutes() {
    this._publishConnectedRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishConnectedRoutesInput() {
    return this._publishConnectedRoutes.internalValue;
  }

  // publish_routes - computed: false, optional: true, required: false
  private _publishRoutes?: string[]; 
  public get publishRoutes() {
    return this.getListAttribute('publish_routes');
  }
  public set publishRoutes(value: string[]) {
    this._publishRoutes = value;
  }
  public resetPublishRoutes() {
    this._publishRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishRoutesInput() {
    return this._publishRoutes;
  }
}
export interface IpsecTunnelLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ngfw_device IpsecTunnel#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function ipsecTunnelLocationNgfwToTerraform(struct?: IpsecTunnelLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function ipsecTunnelLocationNgfwToHclTerraform(struct?: IpsecTunnelLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelLocationNgfw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelLocationNgfw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface IpsecTunnelLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ngfw_device IpsecTunnel#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#panorama_device IpsecTunnel#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function ipsecTunnelLocationTemplateToTerraform(struct?: IpsecTunnelLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function ipsecTunnelLocationTemplateToHclTerraform(struct?: IpsecTunnelLocationTemplate | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface IpsecTunnelLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#name IpsecTunnel#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ngfw_device IpsecTunnel#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#panorama_device IpsecTunnel#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function ipsecTunnelLocationTemplateStackToTerraform(struct?: IpsecTunnelLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function ipsecTunnelLocationTemplateStackToHclTerraform(struct?: IpsecTunnelLocationTemplateStack | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface IpsecTunnelLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ngfw IpsecTunnel#ngfw}
  */
  readonly ngfw?: IpsecTunnelLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#template IpsecTunnel#template}
  */
  readonly template?: IpsecTunnelLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#template_stack IpsecTunnel#template_stack}
  */
  readonly templateStack?: IpsecTunnelLocationTemplateStack;
}

export function ipsecTunnelLocationToTerraform(struct?: IpsecTunnelLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: ipsecTunnelLocationNgfwToTerraform(struct!.ngfw),
    template: ipsecTunnelLocationTemplateToTerraform(struct!.template),
    template_stack: ipsecTunnelLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function ipsecTunnelLocationToHclTerraform(struct?: IpsecTunnelLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: ipsecTunnelLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelLocationNgfw",
    },
    template: {
      value: ipsecTunnelLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelLocationTemplate",
    },
    template_stack: {
      value: ipsecTunnelLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = value.ngfw;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new IpsecTunnelLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: IpsecTunnelLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new IpsecTunnelLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: IpsecTunnelLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new IpsecTunnelLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: IpsecTunnelLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}
export interface IpsecTunnelManualKeyAhMd5 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 4 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyAhMd5ToTerraform(struct?: IpsecTunnelManualKeyAhMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyAhMd5ToHclTerraform(struct?: IpsecTunnelManualKeyAhMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyAhMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyAhMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyAhMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyAhSha1 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 5 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyAhSha1ToTerraform(struct?: IpsecTunnelManualKeyAhSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyAhSha1ToHclTerraform(struct?: IpsecTunnelManualKeyAhSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyAhSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyAhSha1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyAhSha1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyAhSha256 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 8 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyAhSha256ToTerraform(struct?: IpsecTunnelManualKeyAhSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyAhSha256ToHclTerraform(struct?: IpsecTunnelManualKeyAhSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyAhSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyAhSha256 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyAhSha256 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyAhSha384 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 12 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyAhSha384ToTerraform(struct?: IpsecTunnelManualKeyAhSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyAhSha384ToHclTerraform(struct?: IpsecTunnelManualKeyAhSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyAhSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyAhSha384 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyAhSha384 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyAhSha512 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 16 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyAhSha512ToTerraform(struct?: IpsecTunnelManualKeyAhSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyAhSha512ToHclTerraform(struct?: IpsecTunnelManualKeyAhSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyAhSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyAhSha512 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyAhSha512 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyAh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#md5 IpsecTunnel#md5}
  */
  readonly md5?: IpsecTunnelManualKeyAhMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#sha1 IpsecTunnel#sha1}
  */
  readonly sha1?: IpsecTunnelManualKeyAhSha1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#sha256 IpsecTunnel#sha256}
  */
  readonly sha256?: IpsecTunnelManualKeyAhSha256;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#sha384 IpsecTunnel#sha384}
  */
  readonly sha384?: IpsecTunnelManualKeyAhSha384;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#sha512 IpsecTunnel#sha512}
  */
  readonly sha512?: IpsecTunnelManualKeyAhSha512;
}

export function ipsecTunnelManualKeyAhToTerraform(struct?: IpsecTunnelManualKeyAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: ipsecTunnelManualKeyAhMd5ToTerraform(struct!.md5),
    sha1: ipsecTunnelManualKeyAhSha1ToTerraform(struct!.sha1),
    sha256: ipsecTunnelManualKeyAhSha256ToTerraform(struct!.sha256),
    sha384: ipsecTunnelManualKeyAhSha384ToTerraform(struct!.sha384),
    sha512: ipsecTunnelManualKeyAhSha512ToTerraform(struct!.sha512),
  }
}


export function ipsecTunnelManualKeyAhToHclTerraform(struct?: IpsecTunnelManualKeyAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: ipsecTunnelManualKeyAhMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyAhMd5",
    },
    sha1: {
      value: ipsecTunnelManualKeyAhSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyAhSha1",
    },
    sha256: {
      value: ipsecTunnelManualKeyAhSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyAhSha256",
    },
    sha384: {
      value: ipsecTunnelManualKeyAhSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyAhSha384",
    },
    sha512: {
      value: ipsecTunnelManualKeyAhSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyAhSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyAhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyAh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._sha1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1?.internalValue;
    }
    if (this._sha256?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256?.internalValue;
    }
    if (this._sha384?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384 = this._sha384?.internalValue;
    }
    if (this._sha512?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha512 = this._sha512?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyAh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._sha1.internalValue = undefined;
      this._sha256.internalValue = undefined;
      this._sha384.internalValue = undefined;
      this._sha512.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._sha1.internalValue = value.sha1;
      this._sha256.internalValue = value.sha256;
      this._sha384.internalValue = value.sha384;
      this._sha512.internalValue = value.sha512;
    }
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new IpsecTunnelManualKeyAhMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: IpsecTunnelManualKeyAhMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1 = new IpsecTunnelManualKeyAhSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: IpsecTunnelManualKeyAhSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256 = new IpsecTunnelManualKeyAhSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: IpsecTunnelManualKeyAhSha256) {
    this._sha256.internalValue = value;
  }
  public resetSha256() {
    this._sha256.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256.internalValue;
  }

  // sha384 - computed: false, optional: true, required: false
  private _sha384 = new IpsecTunnelManualKeyAhSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: IpsecTunnelManualKeyAhSha384) {
    this._sha384.internalValue = value;
  }
  public resetSha384() {
    this._sha384.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384Input() {
    return this._sha384.internalValue;
  }

  // sha512 - computed: false, optional: true, required: false
  private _sha512 = new IpsecTunnelManualKeyAhSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: IpsecTunnelManualKeyAhSha512) {
    this._sha512.internalValue = value;
  }
  public resetSha512() {
    this._sha512.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha512Input() {
    return this._sha512.internalValue;
  }
}
export interface IpsecTunnelManualKeyEspAuthenticationMd5 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 4 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyEspAuthenticationMd5ToTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyEspAuthenticationMd5ToHclTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyEspAuthenticationMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEspAuthenticationMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEspAuthenticationMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyEspAuthenticationNone {
}

export function ipsecTunnelManualKeyEspAuthenticationNoneToTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipsecTunnelManualKeyEspAuthenticationNoneToHclTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpsecTunnelManualKeyEspAuthenticationNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEspAuthenticationNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEspAuthenticationNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface IpsecTunnelManualKeyEspAuthenticationSha1 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 5 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyEspAuthenticationSha1ToTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyEspAuthenticationSha1ToHclTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyEspAuthenticationSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEspAuthenticationSha1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEspAuthenticationSha1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyEspAuthenticationSha256 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 8 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyEspAuthenticationSha256ToTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyEspAuthenticationSha256ToHclTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyEspAuthenticationSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEspAuthenticationSha256 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEspAuthenticationSha256 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyEspAuthenticationSha384 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 12 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyEspAuthenticationSha384ToTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyEspAuthenticationSha384ToHclTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyEspAuthenticationSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEspAuthenticationSha384 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEspAuthenticationSha384 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyEspAuthenticationSha512 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 16 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyEspAuthenticationSha512ToTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyEspAuthenticationSha512ToHclTerraform(struct?: IpsecTunnelManualKeyEspAuthenticationSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyEspAuthenticationSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEspAuthenticationSha512 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEspAuthenticationSha512 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyEspAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#md5 IpsecTunnel#md5}
  */
  readonly md5?: IpsecTunnelManualKeyEspAuthenticationMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#none IpsecTunnel#none}
  */
  readonly none?: IpsecTunnelManualKeyEspAuthenticationNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#sha1 IpsecTunnel#sha1}
  */
  readonly sha1?: IpsecTunnelManualKeyEspAuthenticationSha1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#sha256 IpsecTunnel#sha256}
  */
  readonly sha256?: IpsecTunnelManualKeyEspAuthenticationSha256;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#sha384 IpsecTunnel#sha384}
  */
  readonly sha384?: IpsecTunnelManualKeyEspAuthenticationSha384;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#sha512 IpsecTunnel#sha512}
  */
  readonly sha512?: IpsecTunnelManualKeyEspAuthenticationSha512;
}

export function ipsecTunnelManualKeyEspAuthenticationToTerraform(struct?: IpsecTunnelManualKeyEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: ipsecTunnelManualKeyEspAuthenticationMd5ToTerraform(struct!.md5),
    none: ipsecTunnelManualKeyEspAuthenticationNoneToTerraform(struct!.none),
    sha1: ipsecTunnelManualKeyEspAuthenticationSha1ToTerraform(struct!.sha1),
    sha256: ipsecTunnelManualKeyEspAuthenticationSha256ToTerraform(struct!.sha256),
    sha384: ipsecTunnelManualKeyEspAuthenticationSha384ToTerraform(struct!.sha384),
    sha512: ipsecTunnelManualKeyEspAuthenticationSha512ToTerraform(struct!.sha512),
  }
}


export function ipsecTunnelManualKeyEspAuthenticationToHclTerraform(struct?: IpsecTunnelManualKeyEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: ipsecTunnelManualKeyEspAuthenticationMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEspAuthenticationMd5",
    },
    none: {
      value: ipsecTunnelManualKeyEspAuthenticationNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEspAuthenticationNone",
    },
    sha1: {
      value: ipsecTunnelManualKeyEspAuthenticationSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEspAuthenticationSha1",
    },
    sha256: {
      value: ipsecTunnelManualKeyEspAuthenticationSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEspAuthenticationSha256",
    },
    sha384: {
      value: ipsecTunnelManualKeyEspAuthenticationSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEspAuthenticationSha384",
    },
    sha512: {
      value: ipsecTunnelManualKeyEspAuthenticationSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEspAuthenticationSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyEspAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEspAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._sha1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1?.internalValue;
    }
    if (this._sha256?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256?.internalValue;
    }
    if (this._sha384?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha384 = this._sha384?.internalValue;
    }
    if (this._sha512?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha512 = this._sha512?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEspAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._none.internalValue = undefined;
      this._sha1.internalValue = undefined;
      this._sha256.internalValue = undefined;
      this._sha384.internalValue = undefined;
      this._sha512.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._none.internalValue = value.none;
      this._sha1.internalValue = value.sha1;
      this._sha256.internalValue = value.sha256;
      this._sha384.internalValue = value.sha384;
      this._sha512.internalValue = value.sha512;
    }
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new IpsecTunnelManualKeyEspAuthenticationMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: IpsecTunnelManualKeyEspAuthenticationMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new IpsecTunnelManualKeyEspAuthenticationNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: IpsecTunnelManualKeyEspAuthenticationNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1 = new IpsecTunnelManualKeyEspAuthenticationSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: IpsecTunnelManualKeyEspAuthenticationSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256 = new IpsecTunnelManualKeyEspAuthenticationSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: IpsecTunnelManualKeyEspAuthenticationSha256) {
    this._sha256.internalValue = value;
  }
  public resetSha256() {
    this._sha256.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256.internalValue;
  }

  // sha384 - computed: false, optional: true, required: false
  private _sha384 = new IpsecTunnelManualKeyEspAuthenticationSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: IpsecTunnelManualKeyEspAuthenticationSha384) {
    this._sha384.internalValue = value;
  }
  public resetSha384() {
    this._sha384.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384Input() {
    return this._sha384.internalValue;
  }

  // sha512 - computed: false, optional: true, required: false
  private _sha512 = new IpsecTunnelManualKeyEspAuthenticationSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: IpsecTunnelManualKeyEspAuthenticationSha512) {
    this._sha512.internalValue = value;
  }
  public resetSha512() {
    this._sha512.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha512Input() {
    return this._sha512.internalValue;
  }
}
export interface IpsecTunnelManualKeyEspEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#algorithm IpsecTunnel#algorithm}
  */
  readonly algorithm?: string;
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total number of sections: des: 2, 3des: 6, aes-128-cbc: 4, aes-192-cbc: 6, aes-256-cbc: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#key IpsecTunnel#key}
  */
  readonly key?: string;
}

export function ipsecTunnelManualKeyEspEncryptionToTerraform(struct?: IpsecTunnelManualKeyEspEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ipsecTunnelManualKeyEspEncryptionToHclTerraform(struct?: IpsecTunnelManualKeyEspEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyEspEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEspEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEspEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface IpsecTunnelManualKeyEsp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#authentication IpsecTunnel#authentication}
  */
  readonly authentication?: IpsecTunnelManualKeyEspAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#encryption IpsecTunnel#encryption}
  */
  readonly encryption?: IpsecTunnelManualKeyEspEncryption;
}

export function ipsecTunnelManualKeyEspToTerraform(struct?: IpsecTunnelManualKeyEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: ipsecTunnelManualKeyEspAuthenticationToTerraform(struct!.authentication),
    encryption: ipsecTunnelManualKeyEspEncryptionToTerraform(struct!.encryption),
  }
}


export function ipsecTunnelManualKeyEspToHclTerraform(struct?: IpsecTunnelManualKeyEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: ipsecTunnelManualKeyEspAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEspAuthentication",
    },
    encryption: {
      value: ipsecTunnelManualKeyEspEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEspEncryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyEsp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyEsp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._encryption.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._encryption.internalValue = value.encryption;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new IpsecTunnelManualKeyEspAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: IpsecTunnelManualKeyEspAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new IpsecTunnelManualKeyEspEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: IpsecTunnelManualKeyEspEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface IpsecTunnelManualKeyLocalAddress {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#floating_ip IpsecTunnel#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Interface to termate tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#interface IpsecTunnel#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ip IpsecTunnel#ip}
  */
  readonly ip?: string;
}

export function ipsecTunnelManualKeyLocalAddressToTerraform(struct?: IpsecTunnelManualKeyLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function ipsecTunnelManualKeyLocalAddressToHclTerraform(struct?: IpsecTunnelManualKeyLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyLocalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp = undefined;
      this._interface = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp = value.floatingIp;
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface IpsecTunnelManualKeyPeerAddress {
  /**
  * Tunnel peer IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ip IpsecTunnel#ip}
  */
  readonly ip?: string;
}

export function ipsecTunnelManualKeyPeerAddressToTerraform(struct?: IpsecTunnelManualKeyPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function ipsecTunnelManualKeyPeerAddressToHclTerraform(struct?: IpsecTunnelManualKeyPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKeyPeerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKeyPeerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface IpsecTunnelManualKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#ah IpsecTunnel#ah}
  */
  readonly ah?: IpsecTunnelManualKeyAh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#esp IpsecTunnel#esp}
  */
  readonly esp?: IpsecTunnelManualKeyEsp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local_address IpsecTunnel#local_address}
  */
  readonly localAddress?: IpsecTunnelManualKeyLocalAddress;
  /**
  * Outbound SPI, hex format xxxxxxxx. range 00001000 to 1FFFFFFF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#local_spi IpsecTunnel#local_spi}
  */
  readonly localSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#peer_address IpsecTunnel#peer_address}
  */
  readonly peerAddress?: IpsecTunnelManualKeyPeerAddress;
  /**
  * Inbound SPI, hex format xxxxxxxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#remote_spi IpsecTunnel#remote_spi}
  */
  readonly remoteSpi?: string;
}

export function ipsecTunnelManualKeyToTerraform(struct?: IpsecTunnelManualKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ah: ipsecTunnelManualKeyAhToTerraform(struct!.ah),
    esp: ipsecTunnelManualKeyEspToTerraform(struct!.esp),
    local_address: ipsecTunnelManualKeyLocalAddressToTerraform(struct!.localAddress),
    local_spi: cdktf.stringToTerraform(struct!.localSpi),
    peer_address: ipsecTunnelManualKeyPeerAddressToTerraform(struct!.peerAddress),
    remote_spi: cdktf.stringToTerraform(struct!.remoteSpi),
  }
}


export function ipsecTunnelManualKeyToHclTerraform(struct?: IpsecTunnelManualKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ah: {
      value: ipsecTunnelManualKeyAhToHclTerraform(struct!.ah),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyAh",
    },
    esp: {
      value: ipsecTunnelManualKeyEspToHclTerraform(struct!.esp),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyEsp",
    },
    local_address: {
      value: ipsecTunnelManualKeyLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyLocalAddress",
    },
    local_spi: {
      value: cdktf.stringToHclTerraform(struct!.localSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_address: {
      value: ipsecTunnelManualKeyPeerAddressToHclTerraform(struct!.peerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "IpsecTunnelManualKeyPeerAddress",
    },
    remote_spi: {
      value: cdktf.stringToHclTerraform(struct!.remoteSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecTunnelManualKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecTunnelManualKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ah?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ah = this._ah?.internalValue;
    }
    if (this._esp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.esp = this._esp?.internalValue;
    }
    if (this._localAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress?.internalValue;
    }
    if (this._localSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSpi = this._localSpi;
    }
    if (this._peerAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAddress = this._peerAddress?.internalValue;
    }
    if (this._remoteSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteSpi = this._remoteSpi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecTunnelManualKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ah.internalValue = undefined;
      this._esp.internalValue = undefined;
      this._localAddress.internalValue = undefined;
      this._localSpi = undefined;
      this._peerAddress.internalValue = undefined;
      this._remoteSpi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ah.internalValue = value.ah;
      this._esp.internalValue = value.esp;
      this._localAddress.internalValue = value.localAddress;
      this._localSpi = value.localSpi;
      this._peerAddress.internalValue = value.peerAddress;
      this._remoteSpi = value.remoteSpi;
    }
  }

  // ah - computed: false, optional: true, required: false
  private _ah = new IpsecTunnelManualKeyAhOutputReference(this, "ah");
  public get ah() {
    return this._ah;
  }
  public putAh(value: IpsecTunnelManualKeyAh) {
    this._ah.internalValue = value;
  }
  public resetAh() {
    this._ah.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahInput() {
    return this._ah.internalValue;
  }

  // esp - computed: false, optional: true, required: false
  private _esp = new IpsecTunnelManualKeyEspOutputReference(this, "esp");
  public get esp() {
    return this._esp;
  }
  public putEsp(value: IpsecTunnelManualKeyEsp) {
    this._esp.internalValue = value;
  }
  public resetEsp() {
    this._esp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espInput() {
    return this._esp.internalValue;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress = new IpsecTunnelManualKeyLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: IpsecTunnelManualKeyLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // local_spi - computed: false, optional: true, required: false
  private _localSpi?: string; 
  public get localSpi() {
    return this.getStringAttribute('local_spi');
  }
  public set localSpi(value: string) {
    this._localSpi = value;
  }
  public resetLocalSpi() {
    this._localSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSpiInput() {
    return this._localSpi;
  }

  // peer_address - computed: false, optional: true, required: false
  private _peerAddress = new IpsecTunnelManualKeyPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: IpsecTunnelManualKeyPeerAddress) {
    this._peerAddress.internalValue = value;
  }
  public resetPeerAddress() {
    this._peerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress.internalValue;
  }

  // remote_spi - computed: false, optional: true, required: false
  private _remoteSpi?: string; 
  public get remoteSpi() {
    return this.getStringAttribute('remote_spi');
  }
  public set remoteSpi(value: string) {
    this._remoteSpi = value;
  }
  public resetRemoteSpi() {
    this._remoteSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSpiInput() {
    return this._remoteSpi;
  }
}
export interface IpsecTunnelTunnelMonitor {
  /**
  * Destination IP to send ICMP probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#destination_ip IpsecTunnel#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Enable tunnel monitoring on this tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#enable IpsecTunnel#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Which proxy-id (or proxy-id-v6) the monitoring traffic will use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#proxy_id IpsecTunnel#proxy_id}
  */
  readonly proxyId?: string;
  /**
  * monitoring action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#tunnel_monitor_profile IpsecTunnel#tunnel_monitor_profile}
  */
  readonly tunnelMonitorProfile?: string;
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
    tunnel_monitor_profile: cdktf.stringToTerraform(struct!.tunnelMonitorProfile),
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
    tunnel_monitor_profile: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMonitorProfile),
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
    if (this._tunnelMonitorProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMonitorProfile = this._tunnelMonitorProfile;
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
      this._tunnelMonitorProfile = undefined;
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
      this._tunnelMonitorProfile = value.tunnelMonitorProfile;
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

  // enable - computed: false, optional: true, required: false
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

  // proxy_id - computed: false, optional: true, required: false
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

  // tunnel_monitor_profile - computed: false, optional: true, required: false
  private _tunnelMonitorProfile?: string; 
  public get tunnelMonitorProfile() {
    return this.getStringAttribute('tunnel_monitor_profile');
  }
  public set tunnelMonitorProfile(value: string) {
    this._tunnelMonitorProfile = value;
  }
  public resetTunnelMonitorProfile() {
    this._tunnelMonitorProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMonitorProfileInput() {
    return this._tunnelMonitorProfile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel panos_ipsec_tunnel}
*/
export class IpsecTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecTunnel to import
  * @param importFromId The id of the existing IpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/ipsec_tunnel panos_ipsec_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
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
    this._antiReplayWindow = config.antiReplayWindow;
    this._autoKey.internalValue = config.autoKey;
    this._comment = config.comment;
    this._copyFlowLabel = config.copyFlowLabel;
    this._copyTos = config.copyTos;
    this._disabled = config.disabled;
    this._enableGreEncapsulation = config.enableGreEncapsulation;
    this._globalProtectSatellite.internalValue = config.globalProtectSatellite;
    this._ipsecMode = config.ipsecMode;
    this._ipv6 = config.ipv6;
    this._location.internalValue = config.location;
    this._manualKey.internalValue = config.manualKey;
    this._name = config.name;
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

  // anti_replay_window - computed: true, optional: true, required: false
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

  // auto_key - computed: false, optional: true, required: false
  private _autoKey = new IpsecTunnelAutoKeyOutputReference(this, "auto_key");
  public get autoKey() {
    return this._autoKey;
  }
  public putAutoKey(value: IpsecTunnelAutoKey) {
    this._autoKey.internalValue = value;
  }
  public resetAutoKey() {
    this._autoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoKeyInput() {
    return this._autoKey.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // copy_flow_label - computed: false, optional: true, required: false
  private _copyFlowLabel?: boolean | cdktf.IResolvable; 
  public get copyFlowLabel() {
    return this.getBooleanAttribute('copy_flow_label');
  }
  public set copyFlowLabel(value: boolean | cdktf.IResolvable) {
    this._copyFlowLabel = value;
  }
  public resetCopyFlowLabel() {
    this._copyFlowLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFlowLabelInput() {
    return this._copyFlowLabel;
  }

  // copy_tos - computed: false, optional: true, required: false
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enable_gre_encapsulation - computed: false, optional: true, required: false
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

  // global_protect_satellite - computed: false, optional: true, required: false
  private _globalProtectSatellite = new IpsecTunnelGlobalProtectSatelliteOutputReference(this, "global_protect_satellite");
  public get globalProtectSatellite() {
    return this._globalProtectSatellite;
  }
  public putGlobalProtectSatellite(value: IpsecTunnelGlobalProtectSatellite) {
    this._globalProtectSatellite.internalValue = value;
  }
  public resetGlobalProtectSatellite() {
    this._globalProtectSatellite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectSatelliteInput() {
    return this._globalProtectSatellite.internalValue;
  }

  // ipsec_mode - computed: true, optional: true, required: false
  private _ipsecMode?: string; 
  public get ipsecMode() {
    return this.getStringAttribute('ipsec_mode');
  }
  public set ipsecMode(value: string) {
    this._ipsecMode = value;
  }
  public resetIpsecMode() {
    this._ipsecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecModeInput() {
    return this._ipsecMode;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // location - computed: false, optional: false, required: true
  private _location = new IpsecTunnelLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: IpsecTunnelLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // manual_key - computed: false, optional: true, required: false
  private _manualKey = new IpsecTunnelManualKeyOutputReference(this, "manual_key");
  public get manualKey() {
    return this._manualKey;
  }
  public putManualKey(value: IpsecTunnelManualKey) {
    this._manualKey.internalValue = value;
  }
  public resetManualKey() {
    this._manualKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualKeyInput() {
    return this._manualKey.internalValue;
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

  // tunnel_interface - computed: false, optional: true, required: false
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

  // tunnel_monitor - computed: false, optional: true, required: false
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
      anti_replay_window: cdktf.stringToTerraform(this._antiReplayWindow),
      auto_key: ipsecTunnelAutoKeyToTerraform(this._autoKey.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      copy_flow_label: cdktf.booleanToTerraform(this._copyFlowLabel),
      copy_tos: cdktf.booleanToTerraform(this._copyTos),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_gre_encapsulation: cdktf.booleanToTerraform(this._enableGreEncapsulation),
      global_protect_satellite: ipsecTunnelGlobalProtectSatelliteToTerraform(this._globalProtectSatellite.internalValue),
      ipsec_mode: cdktf.stringToTerraform(this._ipsecMode),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      location: ipsecTunnelLocationToTerraform(this._location.internalValue),
      manual_key: ipsecTunnelManualKeyToTerraform(this._manualKey.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      anti_replay_window: {
        value: cdktf.stringToHclTerraform(this._antiReplayWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_key: {
        value: ipsecTunnelAutoKeyToHclTerraform(this._autoKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecTunnelAutoKey",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_flow_label: {
        value: cdktf.booleanToHclTerraform(this._copyFlowLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copy_tos: {
        value: cdktf.booleanToHclTerraform(this._copyTos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_gre_encapsulation: {
        value: cdktf.booleanToHclTerraform(this._enableGreEncapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_protect_satellite: {
        value: ipsecTunnelGlobalProtectSatelliteToHclTerraform(this._globalProtectSatellite.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecTunnelGlobalProtectSatellite",
      },
      ipsec_mode: {
        value: cdktf.stringToHclTerraform(this._ipsecMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: ipsecTunnelLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecTunnelLocation",
      },
      manual_key: {
        value: ipsecTunnelManualKeyToHclTerraform(this._manualKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecTunnelManualKey",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
