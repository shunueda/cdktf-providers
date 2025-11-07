// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosIpsecTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Anti-Replay check on this tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#anti_replay DataPanosIpsecTunnel#anti_replay}
  */
  readonly antiReplay?: boolean | cdktf.IResolvable;
  /**
  * 64,128,256,512,1024,2048,4096
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#anti_replay_window DataPanosIpsecTunnel#anti_replay_window}
  */
  readonly antiReplayWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#auto_key DataPanosIpsecTunnel#auto_key}
  */
  readonly autoKey?: DataPanosIpsecTunnelAutoKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#comment DataPanosIpsecTunnel#comment}
  */
  readonly comment?: string;
  /**
  * Copy IPv6 flow label for 6in6 tunnel from inner packet to IPSec packet (not recommended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#copy_flow_label DataPanosIpsecTunnel#copy_flow_label}
  */
  readonly copyFlowLabel?: boolean | cdktf.IResolvable;
  /**
  * Copy IP TOS bits from inner packet to IPSec packet (not recommended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#copy_tos DataPanosIpsecTunnel#copy_tos}
  */
  readonly copyTos?: boolean | cdktf.IResolvable;
  /**
  * Disable the IPSec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#disabled DataPanosIpsecTunnel#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * allow GRE over IPSec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#enable_gre_encapsulation DataPanosIpsecTunnel#enable_gre_encapsulation}
  */
  readonly enableGreEncapsulation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#global_protect_satellite DataPanosIpsecTunnel#global_protect_satellite}
  */
  readonly globalProtectSatellite?: DataPanosIpsecTunnelGlobalProtectSatellite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ipsec_mode DataPanosIpsecTunnel#ipsec_mode}
  */
  readonly ipsecMode?: string;
  /**
  * use IPv6 for the IPSec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ipv6 DataPanosIpsecTunnel#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#location DataPanosIpsecTunnel#location}
  */
  readonly location: DataPanosIpsecTunnelLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#manual_key DataPanosIpsecTunnel#manual_key}
  */
  readonly manualKey?: DataPanosIpsecTunnelManualKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#name DataPanosIpsecTunnel#name}
  */
  readonly name: string;
  /**
  * to apply IPSec VPN tunnels to tunnel interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#tunnel_interface DataPanosIpsecTunnel#tunnel_interface}
  */
  readonly tunnelInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#tunnel_monitor DataPanosIpsecTunnel#tunnel_monitor}
  */
  readonly tunnelMonitor?: DataPanosIpsecTunnelTunnelMonitor;
}
export interface DataPanosIpsecTunnelAutoKeyIkeGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#name DataPanosIpsecTunnel#name}
  */
  readonly name: string;
}

export function dataPanosIpsecTunnelAutoKeyIkeGatewayToTerraform(struct?: DataPanosIpsecTunnelAutoKeyIkeGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosIpsecTunnelAutoKeyIkeGatewayToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyIkeGateway | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelAutoKeyIkeGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosIpsecTunnelAutoKeyIkeGateway | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyIkeGateway | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosIpsecTunnelAutoKeyIkeGatewayList extends cdktf.ComplexList {
  public internalValue? : DataPanosIpsecTunnelAutoKeyIkeGateway[] | cdktf.IResolvable

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
  public get(index: number): DataPanosIpsecTunnelAutoKeyIkeGatewayOutputReference {
    return new DataPanosIpsecTunnelAutoKeyIkeGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosIpsecTunnelAutoKeyProxyIdProtocolAny {
}

export function dataPanosIpsecTunnelAutoKeyProxyIdProtocolAnyToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdProtocolAnyToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosIpsecTunnelAutoKeyProxyIdProtocolAnyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdProtocolAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdProtocolAny | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local_port DataPanosIpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#remote_port DataPanosIpsecTunnel#remote_port}
  */
  readonly remotePort?: number;
}

export function dataPanosIpsecTunnelAutoKeyProxyIdProtocolTcpToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.numberToTerraform(struct!.localPort),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdProtocolTcpToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcp | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcp | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local_port DataPanosIpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#remote_port DataPanosIpsecTunnel#remote_port}
  */
  readonly remotePort?: number;
}

export function dataPanosIpsecTunnelAutoKeyProxyIdProtocolUdpToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.numberToTerraform(struct!.localPort),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdProtocolUdpToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdp | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdp | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelAutoKeyProxyIdProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#any DataPanosIpsecTunnel#any}
  */
  readonly any?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolAny;
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#number DataPanosIpsecTunnel#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#tcp DataPanosIpsecTunnel#tcp}
  */
  readonly tcp?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#udp DataPanosIpsecTunnel#udp}
  */
  readonly udp?: DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdp;
}

export function dataPanosIpsecTunnelAutoKeyProxyIdProtocolToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: dataPanosIpsecTunnelAutoKeyProxyIdProtocolAnyToTerraform(struct!.any),
    number: cdktf.numberToTerraform(struct!.number),
    tcp: dataPanosIpsecTunnelAutoKeyProxyIdProtocolTcpToTerraform(struct!.tcp),
    udp: dataPanosIpsecTunnelAutoKeyProxyIdProtocolUdpToTerraform(struct!.udp),
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdProtocolToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: dataPanosIpsecTunnelAutoKeyProxyIdProtocolAnyToHclTerraform(struct!.any),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdProtocolAny",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp: {
      value: dataPanosIpsecTunnelAutoKeyProxyIdProtocolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcp",
    },
    udp: {
      value: dataPanosIpsecTunnelAutoKeyProxyIdProtocolUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIpsecTunnelAutoKeyProxyIdProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdProtocol | cdktf.IResolvable | undefined) {
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

  // any - computed: true, optional: true, required: false
  private _any = new DataPanosIpsecTunnelAutoKeyProxyIdProtocolAnyOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: DataPanosIpsecTunnelAutoKeyProxyIdProtocolAny) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
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
  private _tcp = new DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataPanosIpsecTunnelAutoKeyProxyIdProtocolTcp) {
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
  private _udp = new DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: DataPanosIpsecTunnelAutoKeyProxyIdProtocolUdp) {
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
export interface DataPanosIpsecTunnelAutoKeyProxyId {
  /**
  * IP subnet or IP address represents local network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local DataPanosIpsecTunnel#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#name DataPanosIpsecTunnel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#protocol DataPanosIpsecTunnel#protocol}
  */
  readonly protocol?: DataPanosIpsecTunnelAutoKeyProxyIdProtocol;
  /**
  * IP subnet or IP address represents remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#remote DataPanosIpsecTunnel#remote}
  */
  readonly remote?: string;
}

export function dataPanosIpsecTunnelAutoKeyProxyIdToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.stringToTerraform(struct!.local),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: dataPanosIpsecTunnelAutoKeyProxyIdProtocolToTerraform(struct!.protocol),
    remote: cdktf.stringToTerraform(struct!.remote),
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyId | cdktf.IResolvable): any {
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
      value: dataPanosIpsecTunnelAutoKeyProxyIdProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdProtocol",
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

export class DataPanosIpsecTunnelAutoKeyProxyIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyId | cdktf.IResolvable | undefined) {
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

  // local - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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
  private _protocol = new DataPanosIpsecTunnelAutoKeyProxyIdProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DataPanosIpsecTunnelAutoKeyProxyIdProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // remote - computed: true, optional: true, required: false
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

export class DataPanosIpsecTunnelAutoKeyProxyIdList extends cdktf.ComplexList {
  public internalValue? : DataPanosIpsecTunnelAutoKeyProxyId[] | cdktf.IResolvable

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
  public get(index: number): DataPanosIpsecTunnelAutoKeyProxyIdOutputReference {
    return new DataPanosIpsecTunnelAutoKeyProxyIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAny {
}

export function dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAnyToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAnyToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAnyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAny | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local_port DataPanosIpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#remote_port DataPanosIpsecTunnel#remote_port}
  */
  readonly remotePort?: number;
}

export function dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcpToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.numberToTerraform(struct!.localPort),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcpToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcp | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcp | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local_port DataPanosIpsecTunnel#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#remote_port DataPanosIpsecTunnel#remote_port}
  */
  readonly remotePort?: number;
}

export function dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdpToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.numberToTerraform(struct!.localPort),
    remote_port: cdktf.numberToTerraform(struct!.remotePort),
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdpToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdp | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdp | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelAutoKeyProxyIdV6Protocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#any DataPanosIpsecTunnel#any}
  */
  readonly any?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAny;
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#number DataPanosIpsecTunnel#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#tcp DataPanosIpsecTunnel#tcp}
  */
  readonly tcp?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#udp DataPanosIpsecTunnel#udp}
  */
  readonly udp?: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdp;
}

export function dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAnyToTerraform(struct!.any),
    number: cdktf.numberToTerraform(struct!.number),
    tcp: dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcpToTerraform(struct!.tcp),
    udp: dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdpToTerraform(struct!.udp),
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAnyToHclTerraform(struct!.any),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAny",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp: {
      value: dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcp",
    },
    udp: {
      value: dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdV6Protocol | cdktf.IResolvable | undefined) {
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

  // any - computed: true, optional: true, required: false
  private _any = new DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAnyOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolAny) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
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
  private _tcp = new DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolTcp) {
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
  private _udp = new DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolUdp) {
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
export interface DataPanosIpsecTunnelAutoKeyProxyIdV6 {
  /**
  * IP subnet or IP address represents local network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local DataPanosIpsecTunnel#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#name DataPanosIpsecTunnel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#protocol DataPanosIpsecTunnel#protocol}
  */
  readonly protocol?: DataPanosIpsecTunnelAutoKeyProxyIdV6Protocol;
  /**
  * IP subnet or IP address represents remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#remote DataPanosIpsecTunnel#remote}
  */
  readonly remote?: string;
}

export function dataPanosIpsecTunnelAutoKeyProxyIdV6ToTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.stringToTerraform(struct!.local),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolToTerraform(struct!.protocol),
    remote: cdktf.stringToTerraform(struct!.remote),
  }
}


export function dataPanosIpsecTunnelAutoKeyProxyIdV6ToHclTerraform(struct?: DataPanosIpsecTunnelAutoKeyProxyIdV6 | cdktf.IResolvable): any {
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
      value: dataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdV6Protocol",
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

export class DataPanosIpsecTunnelAutoKeyProxyIdV6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosIpsecTunnelAutoKeyProxyIdV6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKeyProxyIdV6 | cdktf.IResolvable | undefined) {
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

  // local - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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
  private _protocol = new DataPanosIpsecTunnelAutoKeyProxyIdV6ProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DataPanosIpsecTunnelAutoKeyProxyIdV6Protocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // remote - computed: true, optional: true, required: false
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

export class DataPanosIpsecTunnelAutoKeyProxyIdV6List extends cdktf.ComplexList {
  public internalValue? : DataPanosIpsecTunnelAutoKeyProxyIdV6[] | cdktf.IResolvable

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
  public get(index: number): DataPanosIpsecTunnelAutoKeyProxyIdV6OutputReference {
    return new DataPanosIpsecTunnelAutoKeyProxyIdV6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosIpsecTunnelAutoKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ike_gateway DataPanosIpsecTunnel#ike_gateway}
  */
  readonly ikeGateway?: DataPanosIpsecTunnelAutoKeyIkeGateway[] | cdktf.IResolvable;
  /**
  * IPSec crypto profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ipsec_crypto_profile DataPanosIpsecTunnel#ipsec_crypto_profile}
  */
  readonly ipsecCryptoProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#proxy_id DataPanosIpsecTunnel#proxy_id}
  */
  readonly proxyId?: DataPanosIpsecTunnelAutoKeyProxyId[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#proxy_id_v6 DataPanosIpsecTunnel#proxy_id_v6}
  */
  readonly proxyIdV6?: DataPanosIpsecTunnelAutoKeyProxyIdV6[] | cdktf.IResolvable;
}

export function dataPanosIpsecTunnelAutoKeyToTerraform(struct?: DataPanosIpsecTunnelAutoKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_gateway: cdktf.listMapper(dataPanosIpsecTunnelAutoKeyIkeGatewayToTerraform, false)(struct!.ikeGateway),
    ipsec_crypto_profile: cdktf.stringToTerraform(struct!.ipsecCryptoProfile),
    proxy_id: cdktf.listMapper(dataPanosIpsecTunnelAutoKeyProxyIdToTerraform, false)(struct!.proxyId),
    proxy_id_v6: cdktf.listMapper(dataPanosIpsecTunnelAutoKeyProxyIdV6ToTerraform, false)(struct!.proxyIdV6),
  }
}


export function dataPanosIpsecTunnelAutoKeyToHclTerraform(struct?: DataPanosIpsecTunnelAutoKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_gateway: {
      value: cdktf.listMapperHcl(dataPanosIpsecTunnelAutoKeyIkeGatewayToHclTerraform, false)(struct!.ikeGateway),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosIpsecTunnelAutoKeyIkeGatewayList",
    },
    ipsec_crypto_profile: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCryptoProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_id: {
      value: cdktf.listMapperHcl(dataPanosIpsecTunnelAutoKeyProxyIdToHclTerraform, false)(struct!.proxyId),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdList",
    },
    proxy_id_v6: {
      value: cdktf.listMapperHcl(dataPanosIpsecTunnelAutoKeyProxyIdV6ToHclTerraform, false)(struct!.proxyIdV6),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosIpsecTunnelAutoKeyProxyIdV6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIpsecTunnelAutoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelAutoKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelAutoKey | cdktf.IResolvable | undefined) {
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

  // ike_gateway - computed: true, optional: true, required: false
  private _ikeGateway = new DataPanosIpsecTunnelAutoKeyIkeGatewayList(this, "ike_gateway", false);
  public get ikeGateway() {
    return this._ikeGateway;
  }
  public putIkeGateway(value: DataPanosIpsecTunnelAutoKeyIkeGateway[] | cdktf.IResolvable) {
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

  // proxy_id - computed: true, optional: true, required: false
  private _proxyId = new DataPanosIpsecTunnelAutoKeyProxyIdList(this, "proxy_id", false);
  public get proxyId() {
    return this._proxyId;
  }
  public putProxyId(value: DataPanosIpsecTunnelAutoKeyProxyId[] | cdktf.IResolvable) {
    this._proxyId.internalValue = value;
  }
  public resetProxyId() {
    this._proxyId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId.internalValue;
  }

  // proxy_id_v6 - computed: true, optional: true, required: false
  private _proxyIdV6 = new DataPanosIpsecTunnelAutoKeyProxyIdV6List(this, "proxy_id_v6", false);
  public get proxyIdV6() {
    return this._proxyIdV6;
  }
  public putProxyIdV6(value: DataPanosIpsecTunnelAutoKeyProxyIdV6[] | cdktf.IResolvable) {
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
export interface DataPanosIpsecTunnelGlobalProtectSatelliteExternalCa {
  /**
  * Profile for authenticating GlobalProtect gateway certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#certificate_profile DataPanosIpsecTunnel#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * GlobalProtect satellite certificate file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local_certificate DataPanosIpsecTunnel#local_certificate}
  */
  readonly localCertificate?: string;
}

export function dataPanosIpsecTunnelGlobalProtectSatelliteExternalCaToTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatelliteExternalCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    local_certificate: cdktf.stringToTerraform(struct!.localCertificate),
  }
}


export function dataPanosIpsecTunnelGlobalProtectSatelliteExternalCaToHclTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatelliteExternalCa | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelGlobalProtectSatelliteExternalCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelGlobalProtectSatelliteExternalCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelGlobalProtectSatelliteExternalCa | cdktf.IResolvable | undefined) {
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

  // certificate_profile - computed: true, optional: true, required: false
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

  // local_certificate - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ipv4 DataPanosIpsecTunnel#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Floating IPv6 address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ipv6 DataPanosIpsecTunnel#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpToTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpToHclTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: true, optional: true, required: false
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

  // ipv6 - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIp {
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ipv4 DataPanosIpsecTunnel#ipv4}
  */
  readonly ipv4?: string;
  /**
  * specify exact local IPv6 address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ipv6 DataPanosIpsecTunnel#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIpToTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIpToHclTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIp | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIp | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: true, optional: true, required: false
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

  // ipv6 - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#floating_ip DataPanosIpsecTunnel#floating_ip}
  */
  readonly floatingIp?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp;
  /**
  * Interface to communicate with Portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#interface DataPanosIpsecTunnel#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ip DataPanosIpsecTunnel#ip}
  */
  readonly ip?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIp;
}

export function dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressToTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIpToTerraform(struct!.ip),
  }
}


export function dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressToHclTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpToHclTerraform(struct!.floatingIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddress | cdktf.IResolvable | undefined) {
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

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp = new DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // interface - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressIp) {
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
export interface DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutes {
  /**
  * Enable publishing of connected and static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#enable DataPanosIpsecTunnel#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutesToTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutesToHclTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutes | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutes | cdktf.IResolvable | undefined) {
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
}
export interface DataPanosIpsecTunnelGlobalProtectSatellite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#external_ca DataPanosIpsecTunnel#external_ca}
  */
  readonly externalCa?: DataPanosIpsecTunnelGlobalProtectSatelliteExternalCa;
  /**
  * Prefer to register to portal in ipv6. Only applicable to fqdn portal-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ipv6_preferred DataPanosIpsecTunnel#ipv6_preferred}
  */
  readonly ipv6Preferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local_address DataPanosIpsecTunnel#local_address}
  */
  readonly localAddress?: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddress;
  /**
  * GlobalProtect portal address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#portal_address DataPanosIpsecTunnel#portal_address}
  */
  readonly portalAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#publish_connected_routes DataPanosIpsecTunnel#publish_connected_routes}
  */
  readonly publishConnectedRoutes?: DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#publish_routes DataPanosIpsecTunnel#publish_routes}
  */
  readonly publishRoutes?: string[];
}

export function dataPanosIpsecTunnelGlobalProtectSatelliteToTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatellite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ca: dataPanosIpsecTunnelGlobalProtectSatelliteExternalCaToTerraform(struct!.externalCa),
    ipv6_preferred: cdktf.booleanToTerraform(struct!.ipv6Preferred),
    local_address: dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressToTerraform(struct!.localAddress),
    portal_address: cdktf.stringToTerraform(struct!.portalAddress),
    publish_connected_routes: dataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutesToTerraform(struct!.publishConnectedRoutes),
    publish_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publishRoutes),
  }
}


export function dataPanosIpsecTunnelGlobalProtectSatelliteToHclTerraform(struct?: DataPanosIpsecTunnelGlobalProtectSatellite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ca: {
      value: dataPanosIpsecTunnelGlobalProtectSatelliteExternalCaToHclTerraform(struct!.externalCa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelGlobalProtectSatelliteExternalCa",
    },
    ipv6_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Preferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_address: {
      value: dataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddress",
    },
    portal_address: {
      value: cdktf.stringToHclTerraform(struct!.portalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_connected_routes: {
      value: dataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutesToHclTerraform(struct!.publishConnectedRoutes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutes",
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

export class DataPanosIpsecTunnelGlobalProtectSatelliteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelGlobalProtectSatellite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelGlobalProtectSatellite | cdktf.IResolvable | undefined) {
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

  // external_ca - computed: true, optional: true, required: false
  private _externalCa = new DataPanosIpsecTunnelGlobalProtectSatelliteExternalCaOutputReference(this, "external_ca");
  public get externalCa() {
    return this._externalCa;
  }
  public putExternalCa(value: DataPanosIpsecTunnelGlobalProtectSatelliteExternalCa) {
    this._externalCa.internalValue = value;
  }
  public resetExternalCa() {
    this._externalCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCaInput() {
    return this._externalCa.internalValue;
  }

  // ipv6_preferred - computed: true, optional: true, required: false
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

  // local_address - computed: true, optional: true, required: false
  private _localAddress = new DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: DataPanosIpsecTunnelGlobalProtectSatelliteLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // portal_address - computed: true, optional: true, required: false
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

  // publish_connected_routes - computed: true, optional: true, required: false
  private _publishConnectedRoutes = new DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutesOutputReference(this, "publish_connected_routes");
  public get publishConnectedRoutes() {
    return this._publishConnectedRoutes;
  }
  public putPublishConnectedRoutes(value: DataPanosIpsecTunnelGlobalProtectSatellitePublishConnectedRoutes) {
    this._publishConnectedRoutes.internalValue = value;
  }
  public resetPublishConnectedRoutes() {
    this._publishConnectedRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishConnectedRoutesInput() {
    return this._publishConnectedRoutes.internalValue;
  }

  // publish_routes - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#name DataPanosIpsecTunnel#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ngfw_device DataPanosIpsecTunnel#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#panorama_device DataPanosIpsecTunnel#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosIpsecTunnelLocationTemplateToTerraform(struct?: DataPanosIpsecTunnelLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosIpsecTunnelLocationTemplateToHclTerraform(struct?: DataPanosIpsecTunnelLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#name DataPanosIpsecTunnel#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ngfw_device DataPanosIpsecTunnel#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#panorama_device DataPanosIpsecTunnel#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosIpsecTunnelLocationTemplateStackToTerraform(struct?: DataPanosIpsecTunnelLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosIpsecTunnelLocationTemplateStackToHclTerraform(struct?: DataPanosIpsecTunnelLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelLocation {
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#template DataPanosIpsecTunnel#template}
  */
  readonly template?: DataPanosIpsecTunnelLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#template_stack DataPanosIpsecTunnel#template_stack}
  */
  readonly templateStack?: DataPanosIpsecTunnelLocationTemplateStack;
}

export function dataPanosIpsecTunnelLocationToTerraform(struct?: DataPanosIpsecTunnelLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataPanosIpsecTunnelLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosIpsecTunnelLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosIpsecTunnelLocationToHclTerraform(struct?: DataPanosIpsecTunnelLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataPanosIpsecTunnelLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelLocationTemplate",
    },
    template_stack: {
      value: dataPanosIpsecTunnelLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIpsecTunnelLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataPanosIpsecTunnelLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosIpsecTunnelLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosIpsecTunnelLocationTemplate) {
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
  private _templateStack = new DataPanosIpsecTunnelLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosIpsecTunnelLocationTemplateStack) {
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
export interface DataPanosIpsecTunnelManualKeyAhMd5 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 4 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyAhMd5ToTerraform(struct?: DataPanosIpsecTunnelManualKeyAhMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyAhMd5ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyAhMd5 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyAhMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyAhMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyAhMd5 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyAhSha1 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 5 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyAhSha1ToTerraform(struct?: DataPanosIpsecTunnelManualKeyAhSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyAhSha1ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyAhSha1 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyAhSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyAhSha1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyAhSha1 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyAhSha256 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 8 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyAhSha256ToTerraform(struct?: DataPanosIpsecTunnelManualKeyAhSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyAhSha256ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyAhSha256 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyAhSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyAhSha256 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyAhSha256 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyAhSha384 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 12 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyAhSha384ToTerraform(struct?: DataPanosIpsecTunnelManualKeyAhSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyAhSha384ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyAhSha384 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyAhSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyAhSha384 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyAhSha384 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyAhSha512 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 16 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyAhSha512ToTerraform(struct?: DataPanosIpsecTunnelManualKeyAhSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyAhSha512ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyAhSha512 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyAhSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyAhSha512 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyAhSha512 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyAh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#md5 DataPanosIpsecTunnel#md5}
  */
  readonly md5?: DataPanosIpsecTunnelManualKeyAhMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#sha1 DataPanosIpsecTunnel#sha1}
  */
  readonly sha1?: DataPanosIpsecTunnelManualKeyAhSha1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#sha256 DataPanosIpsecTunnel#sha256}
  */
  readonly sha256?: DataPanosIpsecTunnelManualKeyAhSha256;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#sha384 DataPanosIpsecTunnel#sha384}
  */
  readonly sha384?: DataPanosIpsecTunnelManualKeyAhSha384;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#sha512 DataPanosIpsecTunnel#sha512}
  */
  readonly sha512?: DataPanosIpsecTunnelManualKeyAhSha512;
}

export function dataPanosIpsecTunnelManualKeyAhToTerraform(struct?: DataPanosIpsecTunnelManualKeyAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: dataPanosIpsecTunnelManualKeyAhMd5ToTerraform(struct!.md5),
    sha1: dataPanosIpsecTunnelManualKeyAhSha1ToTerraform(struct!.sha1),
    sha256: dataPanosIpsecTunnelManualKeyAhSha256ToTerraform(struct!.sha256),
    sha384: dataPanosIpsecTunnelManualKeyAhSha384ToTerraform(struct!.sha384),
    sha512: dataPanosIpsecTunnelManualKeyAhSha512ToTerraform(struct!.sha512),
  }
}


export function dataPanosIpsecTunnelManualKeyAhToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: dataPanosIpsecTunnelManualKeyAhMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyAhMd5",
    },
    sha1: {
      value: dataPanosIpsecTunnelManualKeyAhSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyAhSha1",
    },
    sha256: {
      value: dataPanosIpsecTunnelManualKeyAhSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyAhSha256",
    },
    sha384: {
      value: dataPanosIpsecTunnelManualKeyAhSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyAhSha384",
    },
    sha512: {
      value: dataPanosIpsecTunnelManualKeyAhSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyAhSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIpsecTunnelManualKeyAhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyAh | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyAh | cdktf.IResolvable | undefined) {
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

  // md5 - computed: true, optional: true, required: false
  private _md5 = new DataPanosIpsecTunnelManualKeyAhMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: DataPanosIpsecTunnelManualKeyAhMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: true, optional: true, required: false
  private _sha1 = new DataPanosIpsecTunnelManualKeyAhSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: DataPanosIpsecTunnelManualKeyAhSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }

  // sha256 - computed: true, optional: true, required: false
  private _sha256 = new DataPanosIpsecTunnelManualKeyAhSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: DataPanosIpsecTunnelManualKeyAhSha256) {
    this._sha256.internalValue = value;
  }
  public resetSha256() {
    this._sha256.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256.internalValue;
  }

  // sha384 - computed: true, optional: true, required: false
  private _sha384 = new DataPanosIpsecTunnelManualKeyAhSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: DataPanosIpsecTunnelManualKeyAhSha384) {
    this._sha384.internalValue = value;
  }
  public resetSha384() {
    this._sha384.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384Input() {
    return this._sha384.internalValue;
  }

  // sha512 - computed: true, optional: true, required: false
  private _sha512 = new DataPanosIpsecTunnelManualKeyAhSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: DataPanosIpsecTunnelManualKeyAhSha512) {
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
export interface DataPanosIpsecTunnelManualKeyEspAuthenticationMd5 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 4 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyEspAuthenticationMd5ToTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyEspAuthenticationMd5ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationMd5 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyEspAuthenticationMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEspAuthenticationMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEspAuthenticationMd5 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyEspAuthenticationNone {
}

export function dataPanosIpsecTunnelManualKeyEspAuthenticationNoneToTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosIpsecTunnelManualKeyEspAuthenticationNoneToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosIpsecTunnelManualKeyEspAuthenticationNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEspAuthenticationNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEspAuthenticationNone | cdktf.IResolvable | undefined) {
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
export interface DataPanosIpsecTunnelManualKeyEspAuthenticationSha1 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 5 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyEspAuthenticationSha1ToTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyEspAuthenticationSha1ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha1 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyEspAuthenticationSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEspAuthenticationSha1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEspAuthenticationSha1 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyEspAuthenticationSha256 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 8 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyEspAuthenticationSha256ToTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha256 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyEspAuthenticationSha256ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha256 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyEspAuthenticationSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEspAuthenticationSha256 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEspAuthenticationSha256 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyEspAuthenticationSha384 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 12 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyEspAuthenticationSha384ToTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha384 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyEspAuthenticationSha384ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha384 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyEspAuthenticationSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEspAuthenticationSha384 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEspAuthenticationSha384 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyEspAuthenticationSha512 {
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total 16 sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyEspAuthenticationSha512ToTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha512 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyEspAuthenticationSha512ToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha512 | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyEspAuthenticationSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEspAuthenticationSha512 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEspAuthenticationSha512 | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyEspAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#md5 DataPanosIpsecTunnel#md5}
  */
  readonly md5?: DataPanosIpsecTunnelManualKeyEspAuthenticationMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#none DataPanosIpsecTunnel#none}
  */
  readonly none?: DataPanosIpsecTunnelManualKeyEspAuthenticationNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#sha1 DataPanosIpsecTunnel#sha1}
  */
  readonly sha1?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#sha256 DataPanosIpsecTunnel#sha256}
  */
  readonly sha256?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha256;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#sha384 DataPanosIpsecTunnel#sha384}
  */
  readonly sha384?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha384;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#sha512 DataPanosIpsecTunnel#sha512}
  */
  readonly sha512?: DataPanosIpsecTunnelManualKeyEspAuthenticationSha512;
}

export function dataPanosIpsecTunnelManualKeyEspAuthenticationToTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: dataPanosIpsecTunnelManualKeyEspAuthenticationMd5ToTerraform(struct!.md5),
    none: dataPanosIpsecTunnelManualKeyEspAuthenticationNoneToTerraform(struct!.none),
    sha1: dataPanosIpsecTunnelManualKeyEspAuthenticationSha1ToTerraform(struct!.sha1),
    sha256: dataPanosIpsecTunnelManualKeyEspAuthenticationSha256ToTerraform(struct!.sha256),
    sha384: dataPanosIpsecTunnelManualKeyEspAuthenticationSha384ToTerraform(struct!.sha384),
    sha512: dataPanosIpsecTunnelManualKeyEspAuthenticationSha512ToTerraform(struct!.sha512),
  }
}


export function dataPanosIpsecTunnelManualKeyEspAuthenticationToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEspAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: dataPanosIpsecTunnelManualKeyEspAuthenticationMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEspAuthenticationMd5",
    },
    none: {
      value: dataPanosIpsecTunnelManualKeyEspAuthenticationNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEspAuthenticationNone",
    },
    sha1: {
      value: dataPanosIpsecTunnelManualKeyEspAuthenticationSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEspAuthenticationSha1",
    },
    sha256: {
      value: dataPanosIpsecTunnelManualKeyEspAuthenticationSha256ToHclTerraform(struct!.sha256),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEspAuthenticationSha256",
    },
    sha384: {
      value: dataPanosIpsecTunnelManualKeyEspAuthenticationSha384ToHclTerraform(struct!.sha384),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEspAuthenticationSha384",
    },
    sha512: {
      value: dataPanosIpsecTunnelManualKeyEspAuthenticationSha512ToHclTerraform(struct!.sha512),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEspAuthenticationSha512",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIpsecTunnelManualKeyEspAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEspAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEspAuthentication | cdktf.IResolvable | undefined) {
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

  // md5 - computed: true, optional: true, required: false
  private _md5 = new DataPanosIpsecTunnelManualKeyEspAuthenticationMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: DataPanosIpsecTunnelManualKeyEspAuthenticationMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosIpsecTunnelManualKeyEspAuthenticationNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosIpsecTunnelManualKeyEspAuthenticationNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // sha1 - computed: true, optional: true, required: false
  private _sha1 = new DataPanosIpsecTunnelManualKeyEspAuthenticationSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: DataPanosIpsecTunnelManualKeyEspAuthenticationSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }

  // sha256 - computed: true, optional: true, required: false
  private _sha256 = new DataPanosIpsecTunnelManualKeyEspAuthenticationSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }
  public putSha256(value: DataPanosIpsecTunnelManualKeyEspAuthenticationSha256) {
    this._sha256.internalValue = value;
  }
  public resetSha256() {
    this._sha256.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256.internalValue;
  }

  // sha384 - computed: true, optional: true, required: false
  private _sha384 = new DataPanosIpsecTunnelManualKeyEspAuthenticationSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }
  public putSha384(value: DataPanosIpsecTunnelManualKeyEspAuthenticationSha384) {
    this._sha384.internalValue = value;
  }
  public resetSha384() {
    this._sha384.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384Input() {
    return this._sha384.internalValue;
  }

  // sha512 - computed: true, optional: true, required: false
  private _sha512 = new DataPanosIpsecTunnelManualKeyEspAuthenticationSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
  public putSha512(value: DataPanosIpsecTunnelManualKeyEspAuthenticationSha512) {
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
export interface DataPanosIpsecTunnelManualKeyEspEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#algorithm DataPanosIpsecTunnel#algorithm}
  */
  readonly algorithm?: string;
  /**
  * hex format xxxxxxxx[-xxxxxxxx]... total number of sections: des: 2, 3des: 6, aes-128-cbc: 4, aes-192-cbc: 6, aes-256-cbc: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#key DataPanosIpsecTunnel#key}
  */
  readonly key?: string;
}

export function dataPanosIpsecTunnelManualKeyEspEncryptionToTerraform(struct?: DataPanosIpsecTunnelManualKeyEspEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIpsecTunnelManualKeyEspEncryptionToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEspEncryption | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyEspEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEspEncryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEspEncryption | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyEsp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#authentication DataPanosIpsecTunnel#authentication}
  */
  readonly authentication?: DataPanosIpsecTunnelManualKeyEspAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#encryption DataPanosIpsecTunnel#encryption}
  */
  readonly encryption?: DataPanosIpsecTunnelManualKeyEspEncryption;
}

export function dataPanosIpsecTunnelManualKeyEspToTerraform(struct?: DataPanosIpsecTunnelManualKeyEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataPanosIpsecTunnelManualKeyEspAuthenticationToTerraform(struct!.authentication),
    encryption: dataPanosIpsecTunnelManualKeyEspEncryptionToTerraform(struct!.encryption),
  }
}


export function dataPanosIpsecTunnelManualKeyEspToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataPanosIpsecTunnelManualKeyEspAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEspAuthentication",
    },
    encryption: {
      value: dataPanosIpsecTunnelManualKeyEspEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEspEncryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIpsecTunnelManualKeyEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyEsp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyEsp | cdktf.IResolvable | undefined) {
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

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataPanosIpsecTunnelManualKeyEspAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataPanosIpsecTunnelManualKeyEspAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new DataPanosIpsecTunnelManualKeyEspEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataPanosIpsecTunnelManualKeyEspEncryption) {
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
export interface DataPanosIpsecTunnelManualKeyLocalAddress {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#floating_ip DataPanosIpsecTunnel#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Interface to termate tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#interface DataPanosIpsecTunnel#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ip DataPanosIpsecTunnel#ip}
  */
  readonly ip?: string;
}

export function dataPanosIpsecTunnelManualKeyLocalAddressToTerraform(struct?: DataPanosIpsecTunnelManualKeyLocalAddress | cdktf.IResolvable): any {
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


export function dataPanosIpsecTunnelManualKeyLocalAddressToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyLocalAddress | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyLocalAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyLocalAddress | cdktf.IResolvable | undefined) {
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

  // floating_ip - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKeyPeerAddress {
  /**
  * Tunnel peer IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ip DataPanosIpsecTunnel#ip}
  */
  readonly ip?: string;
}

export function dataPanosIpsecTunnelManualKeyPeerAddressToTerraform(struct?: DataPanosIpsecTunnelManualKeyPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosIpsecTunnelManualKeyPeerAddressToHclTerraform(struct?: DataPanosIpsecTunnelManualKeyPeerAddress | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelManualKeyPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKeyPeerAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKeyPeerAddress | cdktf.IResolvable | undefined) {
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelManualKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#ah DataPanosIpsecTunnel#ah}
  */
  readonly ah?: DataPanosIpsecTunnelManualKeyAh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#esp DataPanosIpsecTunnel#esp}
  */
  readonly esp?: DataPanosIpsecTunnelManualKeyEsp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local_address DataPanosIpsecTunnel#local_address}
  */
  readonly localAddress?: DataPanosIpsecTunnelManualKeyLocalAddress;
  /**
  * Outbound SPI, hex format xxxxxxxx. range 00001000 to 1FFFFFFF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#local_spi DataPanosIpsecTunnel#local_spi}
  */
  readonly localSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#peer_address DataPanosIpsecTunnel#peer_address}
  */
  readonly peerAddress?: DataPanosIpsecTunnelManualKeyPeerAddress;
  /**
  * Inbound SPI, hex format xxxxxxxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#remote_spi DataPanosIpsecTunnel#remote_spi}
  */
  readonly remoteSpi?: string;
}

export function dataPanosIpsecTunnelManualKeyToTerraform(struct?: DataPanosIpsecTunnelManualKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ah: dataPanosIpsecTunnelManualKeyAhToTerraform(struct!.ah),
    esp: dataPanosIpsecTunnelManualKeyEspToTerraform(struct!.esp),
    local_address: dataPanosIpsecTunnelManualKeyLocalAddressToTerraform(struct!.localAddress),
    local_spi: cdktf.stringToTerraform(struct!.localSpi),
    peer_address: dataPanosIpsecTunnelManualKeyPeerAddressToTerraform(struct!.peerAddress),
    remote_spi: cdktf.stringToTerraform(struct!.remoteSpi),
  }
}


export function dataPanosIpsecTunnelManualKeyToHclTerraform(struct?: DataPanosIpsecTunnelManualKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ah: {
      value: dataPanosIpsecTunnelManualKeyAhToHclTerraform(struct!.ah),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyAh",
    },
    esp: {
      value: dataPanosIpsecTunnelManualKeyEspToHclTerraform(struct!.esp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyEsp",
    },
    local_address: {
      value: dataPanosIpsecTunnelManualKeyLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyLocalAddress",
    },
    local_spi: {
      value: cdktf.stringToHclTerraform(struct!.localSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_address: {
      value: dataPanosIpsecTunnelManualKeyPeerAddressToHclTerraform(struct!.peerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIpsecTunnelManualKeyPeerAddress",
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

export class DataPanosIpsecTunnelManualKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelManualKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelManualKey | cdktf.IResolvable | undefined) {
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

  // ah - computed: true, optional: true, required: false
  private _ah = new DataPanosIpsecTunnelManualKeyAhOutputReference(this, "ah");
  public get ah() {
    return this._ah;
  }
  public putAh(value: DataPanosIpsecTunnelManualKeyAh) {
    this._ah.internalValue = value;
  }
  public resetAh() {
    this._ah.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahInput() {
    return this._ah.internalValue;
  }

  // esp - computed: true, optional: true, required: false
  private _esp = new DataPanosIpsecTunnelManualKeyEspOutputReference(this, "esp");
  public get esp() {
    return this._esp;
  }
  public putEsp(value: DataPanosIpsecTunnelManualKeyEsp) {
    this._esp.internalValue = value;
  }
  public resetEsp() {
    this._esp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espInput() {
    return this._esp.internalValue;
  }

  // local_address - computed: true, optional: true, required: false
  private _localAddress = new DataPanosIpsecTunnelManualKeyLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: DataPanosIpsecTunnelManualKeyLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // local_spi - computed: true, optional: true, required: false
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

  // peer_address - computed: true, optional: true, required: false
  private _peerAddress = new DataPanosIpsecTunnelManualKeyPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: DataPanosIpsecTunnelManualKeyPeerAddress) {
    this._peerAddress.internalValue = value;
  }
  public resetPeerAddress() {
    this._peerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress.internalValue;
  }

  // remote_spi - computed: true, optional: true, required: false
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
export interface DataPanosIpsecTunnelTunnelMonitor {
  /**
  * Destination IP to send ICMP probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#destination_ip DataPanosIpsecTunnel#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Enable tunnel monitoring on this tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#enable DataPanosIpsecTunnel#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Which proxy-id (or proxy-id-v6) the monitoring traffic will use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#proxy_id DataPanosIpsecTunnel#proxy_id}
  */
  readonly proxyId?: string;
  /**
  * monitoring action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#tunnel_monitor_profile DataPanosIpsecTunnel#tunnel_monitor_profile}
  */
  readonly tunnelMonitorProfile?: string;
}

export function dataPanosIpsecTunnelTunnelMonitorToTerraform(struct?: DataPanosIpsecTunnelTunnelMonitor | cdktf.IResolvable): any {
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


export function dataPanosIpsecTunnelTunnelMonitorToHclTerraform(struct?: DataPanosIpsecTunnelTunnelMonitor | cdktf.IResolvable): any {
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

export class DataPanosIpsecTunnelTunnelMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIpsecTunnelTunnelMonitor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIpsecTunnelTunnelMonitor | cdktf.IResolvable | undefined) {
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

  // destination_ip - computed: true, optional: true, required: false
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

  // tunnel_monitor_profile - computed: true, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel panos_ipsec_tunnel}
*/
export class DataPanosIpsecTunnel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ipsec_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosIpsecTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosIpsecTunnel to import
  * @param importFromId The id of the existing DataPanosIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosIpsecTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ipsec_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/ipsec_tunnel panos_ipsec_tunnel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosIpsecTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosIpsecTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ipsec_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5'
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

  // anti_replay - computed: true, optional: true, required: false
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

  // auto_key - computed: true, optional: true, required: false
  private _autoKey = new DataPanosIpsecTunnelAutoKeyOutputReference(this, "auto_key");
  public get autoKey() {
    return this._autoKey;
  }
  public putAutoKey(value: DataPanosIpsecTunnelAutoKey) {
    this._autoKey.internalValue = value;
  }
  public resetAutoKey() {
    this._autoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoKeyInput() {
    return this._autoKey.internalValue;
  }

  // comment - computed: true, optional: true, required: false
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

  // copy_flow_label - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
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

  // global_protect_satellite - computed: true, optional: true, required: false
  private _globalProtectSatellite = new DataPanosIpsecTunnelGlobalProtectSatelliteOutputReference(this, "global_protect_satellite");
  public get globalProtectSatellite() {
    return this._globalProtectSatellite;
  }
  public putGlobalProtectSatellite(value: DataPanosIpsecTunnelGlobalProtectSatellite) {
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

  // ipv6 - computed: true, optional: true, required: false
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
  private _location = new DataPanosIpsecTunnelLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosIpsecTunnelLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // manual_key - computed: true, optional: true, required: false
  private _manualKey = new DataPanosIpsecTunnelManualKeyOutputReference(this, "manual_key");
  public get manualKey() {
    return this._manualKey;
  }
  public putManualKey(value: DataPanosIpsecTunnelManualKey) {
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
  private _tunnelMonitor = new DataPanosIpsecTunnelTunnelMonitorOutputReference(this, "tunnel_monitor");
  public get tunnelMonitor() {
    return this._tunnelMonitor;
  }
  public putTunnelMonitor(value: DataPanosIpsecTunnelTunnelMonitor) {
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
      auto_key: dataPanosIpsecTunnelAutoKeyToTerraform(this._autoKey.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      copy_flow_label: cdktf.booleanToTerraform(this._copyFlowLabel),
      copy_tos: cdktf.booleanToTerraform(this._copyTos),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_gre_encapsulation: cdktf.booleanToTerraform(this._enableGreEncapsulation),
      global_protect_satellite: dataPanosIpsecTunnelGlobalProtectSatelliteToTerraform(this._globalProtectSatellite.internalValue),
      ipsec_mode: cdktf.stringToTerraform(this._ipsecMode),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      location: dataPanosIpsecTunnelLocationToTerraform(this._location.internalValue),
      manual_key: dataPanosIpsecTunnelManualKeyToTerraform(this._manualKey.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tunnel_interface: cdktf.stringToTerraform(this._tunnelInterface),
      tunnel_monitor: dataPanosIpsecTunnelTunnelMonitorToTerraform(this._tunnelMonitor.internalValue),
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
        value: dataPanosIpsecTunnelAutoKeyToHclTerraform(this._autoKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIpsecTunnelAutoKey",
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
        value: dataPanosIpsecTunnelGlobalProtectSatelliteToHclTerraform(this._globalProtectSatellite.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIpsecTunnelGlobalProtectSatellite",
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
        value: dataPanosIpsecTunnelLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIpsecTunnelLocation",
      },
      manual_key: {
        value: dataPanosIpsecTunnelManualKeyToHclTerraform(this._manualKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIpsecTunnelManualKey",
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
        value: dataPanosIpsecTunnelTunnelMonitorToHclTerraform(this._tunnelMonitor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIpsecTunnelTunnelMonitor",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
