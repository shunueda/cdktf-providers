// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsLbHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#annotations DnsLbHealthCheck#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#description DnsLbHealthCheck#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#disable DnsLbHealthCheck#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#icmp_health_check DnsLbHealthCheck#icmp_health_check}
  */
  readonly icmpHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#id DnsLbHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#labels DnsLbHealthCheck#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#name DnsLbHealthCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#namespace DnsLbHealthCheck#namespace}
  */
  readonly namespace: string;
  /**
  * http_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#http_health_check DnsLbHealthCheck#http_health_check}
  */
  readonly httpHealthCheck?: DnsLbHealthCheckHttpHealthCheck;
  /**
  * https_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#https_health_check DnsLbHealthCheck#https_health_check}
  */
  readonly httpsHealthCheck?: DnsLbHealthCheckHttpsHealthCheck;
  /**
  * tcp_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#tcp_health_check DnsLbHealthCheck#tcp_health_check}
  */
  readonly tcpHealthCheck?: DnsLbHealthCheckTcpHealthCheck;
  /**
  * tcp_hex_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#tcp_hex_health_check DnsLbHealthCheck#tcp_hex_health_check}
  */
  readonly tcpHexHealthCheck?: DnsLbHealthCheckTcpHexHealthCheck;
  /**
  * udp_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#udp_health_check DnsLbHealthCheck#udp_health_check}
  */
  readonly udpHealthCheck?: DnsLbHealthCheckUdpHealthCheck;
}
export interface DnsLbHealthCheckHttpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_port DnsLbHealthCheck#health_check_port}
  */
  readonly healthCheckPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_secondary_port DnsLbHealthCheck#health_check_secondary_port}
  */
  readonly healthCheckSecondaryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#receive DnsLbHealthCheck#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#send DnsLbHealthCheck#send}
  */
  readonly send?: string;
}

export function dnsLbHealthCheckHttpHealthCheckToTerraform(struct?: DnsLbHealthCheckHttpHealthCheckOutputReference | DnsLbHealthCheckHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
    health_check_secondary_port: cdktf.numberToTerraform(struct!.healthCheckSecondaryPort),
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dnsLbHealthCheckHttpHealthCheckToHclTerraform(struct?: DnsLbHealthCheckHttpHealthCheckOutputReference | DnsLbHealthCheckHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_secondary_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckSecondaryPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbHealthCheckHttpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbHealthCheckHttpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    if (this._healthCheckSecondaryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckSecondaryPort = this._healthCheckSecondaryPort;
    }
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbHealthCheckHttpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckPort = undefined;
      this._healthCheckSecondaryPort = undefined;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckPort = value.healthCheckPort;
      this._healthCheckSecondaryPort = value.healthCheckSecondaryPort;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // health_check_port - computed: false, optional: false, required: true
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_secondary_port - computed: false, optional: true, required: false
  private _healthCheckSecondaryPort?: number; 
  public get healthCheckSecondaryPort() {
    return this.getNumberAttribute('health_check_secondary_port');
  }
  public set healthCheckSecondaryPort(value: number) {
    this._healthCheckSecondaryPort = value;
  }
  public resetHealthCheckSecondaryPort() {
    this._healthCheckSecondaryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSecondaryPortInput() {
    return this._healthCheckSecondaryPort;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DnsLbHealthCheckHttpsHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_port DnsLbHealthCheck#health_check_port}
  */
  readonly healthCheckPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_secondary_port DnsLbHealthCheck#health_check_secondary_port}
  */
  readonly healthCheckSecondaryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#receive DnsLbHealthCheck#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#send DnsLbHealthCheck#send}
  */
  readonly send?: string;
}

export function dnsLbHealthCheckHttpsHealthCheckToTerraform(struct?: DnsLbHealthCheckHttpsHealthCheckOutputReference | DnsLbHealthCheckHttpsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
    health_check_secondary_port: cdktf.numberToTerraform(struct!.healthCheckSecondaryPort),
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dnsLbHealthCheckHttpsHealthCheckToHclTerraform(struct?: DnsLbHealthCheckHttpsHealthCheckOutputReference | DnsLbHealthCheckHttpsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_secondary_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckSecondaryPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbHealthCheckHttpsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbHealthCheckHttpsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    if (this._healthCheckSecondaryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckSecondaryPort = this._healthCheckSecondaryPort;
    }
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbHealthCheckHttpsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckPort = undefined;
      this._healthCheckSecondaryPort = undefined;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckPort = value.healthCheckPort;
      this._healthCheckSecondaryPort = value.healthCheckSecondaryPort;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // health_check_port - computed: false, optional: false, required: true
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_secondary_port - computed: false, optional: true, required: false
  private _healthCheckSecondaryPort?: number; 
  public get healthCheckSecondaryPort() {
    return this.getNumberAttribute('health_check_secondary_port');
  }
  public set healthCheckSecondaryPort(value: number) {
    this._healthCheckSecondaryPort = value;
  }
  public resetHealthCheckSecondaryPort() {
    this._healthCheckSecondaryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSecondaryPortInput() {
    return this._healthCheckSecondaryPort;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DnsLbHealthCheckTcpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_port DnsLbHealthCheck#health_check_port}
  */
  readonly healthCheckPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_secondary_port DnsLbHealthCheck#health_check_secondary_port}
  */
  readonly healthCheckSecondaryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#receive DnsLbHealthCheck#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#send DnsLbHealthCheck#send}
  */
  readonly send?: string;
}

export function dnsLbHealthCheckTcpHealthCheckToTerraform(struct?: DnsLbHealthCheckTcpHealthCheckOutputReference | DnsLbHealthCheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
    health_check_secondary_port: cdktf.numberToTerraform(struct!.healthCheckSecondaryPort),
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dnsLbHealthCheckTcpHealthCheckToHclTerraform(struct?: DnsLbHealthCheckTcpHealthCheckOutputReference | DnsLbHealthCheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_secondary_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckSecondaryPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbHealthCheckTcpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbHealthCheckTcpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    if (this._healthCheckSecondaryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckSecondaryPort = this._healthCheckSecondaryPort;
    }
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbHealthCheckTcpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckPort = undefined;
      this._healthCheckSecondaryPort = undefined;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckPort = value.healthCheckPort;
      this._healthCheckSecondaryPort = value.healthCheckSecondaryPort;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // health_check_port - computed: false, optional: false, required: true
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_secondary_port - computed: false, optional: true, required: false
  private _healthCheckSecondaryPort?: number; 
  public get healthCheckSecondaryPort() {
    return this.getNumberAttribute('health_check_secondary_port');
  }
  public set healthCheckSecondaryPort(value: number) {
    this._healthCheckSecondaryPort = value;
  }
  public resetHealthCheckSecondaryPort() {
    this._healthCheckSecondaryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSecondaryPortInput() {
    return this._healthCheckSecondaryPort;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DnsLbHealthCheckTcpHexHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_port DnsLbHealthCheck#health_check_port}
  */
  readonly healthCheckPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_secondary_port DnsLbHealthCheck#health_check_secondary_port}
  */
  readonly healthCheckSecondaryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#receive DnsLbHealthCheck#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#send DnsLbHealthCheck#send}
  */
  readonly send?: string;
}

export function dnsLbHealthCheckTcpHexHealthCheckToTerraform(struct?: DnsLbHealthCheckTcpHexHealthCheckOutputReference | DnsLbHealthCheckTcpHexHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
    health_check_secondary_port: cdktf.numberToTerraform(struct!.healthCheckSecondaryPort),
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dnsLbHealthCheckTcpHexHealthCheckToHclTerraform(struct?: DnsLbHealthCheckTcpHexHealthCheckOutputReference | DnsLbHealthCheckTcpHexHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_secondary_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckSecondaryPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbHealthCheckTcpHexHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbHealthCheckTcpHexHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    if (this._healthCheckSecondaryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckSecondaryPort = this._healthCheckSecondaryPort;
    }
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbHealthCheckTcpHexHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckPort = undefined;
      this._healthCheckSecondaryPort = undefined;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckPort = value.healthCheckPort;
      this._healthCheckSecondaryPort = value.healthCheckSecondaryPort;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // health_check_port - computed: false, optional: false, required: true
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_secondary_port - computed: false, optional: true, required: false
  private _healthCheckSecondaryPort?: number; 
  public get healthCheckSecondaryPort() {
    return this.getNumberAttribute('health_check_secondary_port');
  }
  public set healthCheckSecondaryPort(value: number) {
    this._healthCheckSecondaryPort = value;
  }
  public resetHealthCheckSecondaryPort() {
    this._healthCheckSecondaryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSecondaryPortInput() {
    return this._healthCheckSecondaryPort;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DnsLbHealthCheckUdpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_port DnsLbHealthCheck#health_check_port}
  */
  readonly healthCheckPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#health_check_secondary_port DnsLbHealthCheck#health_check_secondary_port}
  */
  readonly healthCheckSecondaryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#receive DnsLbHealthCheck#receive}
  */
  readonly receive: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#send DnsLbHealthCheck#send}
  */
  readonly send: string;
}

export function dnsLbHealthCheckUdpHealthCheckToTerraform(struct?: DnsLbHealthCheckUdpHealthCheckOutputReference | DnsLbHealthCheckUdpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
    health_check_secondary_port: cdktf.numberToTerraform(struct!.healthCheckSecondaryPort),
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dnsLbHealthCheckUdpHealthCheckToHclTerraform(struct?: DnsLbHealthCheckUdpHealthCheckOutputReference | DnsLbHealthCheckUdpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_secondary_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckSecondaryPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLbHealthCheckUdpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLbHealthCheckUdpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    if (this._healthCheckSecondaryPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckSecondaryPort = this._healthCheckSecondaryPort;
    }
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLbHealthCheckUdpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckPort = undefined;
      this._healthCheckSecondaryPort = undefined;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckPort = value.healthCheckPort;
      this._healthCheckSecondaryPort = value.healthCheckSecondaryPort;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // health_check_port - computed: false, optional: false, required: true
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_secondary_port - computed: false, optional: true, required: false
  private _healthCheckSecondaryPort?: number; 
  public get healthCheckSecondaryPort() {
    return this.getNumberAttribute('health_check_secondary_port');
  }
  public set healthCheckSecondaryPort(value: number) {
    this._healthCheckSecondaryPort = value;
  }
  public resetHealthCheckSecondaryPort() {
    this._healthCheckSecondaryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSecondaryPortInput() {
    return this._healthCheckSecondaryPort;
  }

  // receive - computed: false, optional: false, required: true
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: false, optional: false, required: true
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check volterra_dns_lb_health_check}
*/
export class DnsLbHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_dns_lb_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsLbHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsLbHealthCheck to import
  * @param importFromId The id of the existing DnsLbHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsLbHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_dns_lb_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_lb_health_check volterra_dns_lb_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsLbHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DnsLbHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_dns_lb_health_check',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._icmpHealthCheck = config.icmpHealthCheck;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._httpHealthCheck.internalValue = config.httpHealthCheck;
    this._httpsHealthCheck.internalValue = config.httpsHealthCheck;
    this._tcpHealthCheck.internalValue = config.tcpHealthCheck;
    this._tcpHexHealthCheck.internalValue = config.tcpHexHealthCheck;
    this._udpHealthCheck.internalValue = config.udpHealthCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // icmp_health_check - computed: false, optional: true, required: false
  private _icmpHealthCheck?: boolean | cdktf.IResolvable; 
  public get icmpHealthCheck() {
    return this.getBooleanAttribute('icmp_health_check');
  }
  public set icmpHealthCheck(value: boolean | cdktf.IResolvable) {
    this._icmpHealthCheck = value;
  }
  public resetIcmpHealthCheck() {
    this._icmpHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpHealthCheckInput() {
    return this._icmpHealthCheck;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // http_health_check - computed: false, optional: true, required: false
  private _httpHealthCheck = new DnsLbHealthCheckHttpHealthCheckOutputReference(this, "http_health_check");
  public get httpHealthCheck() {
    return this._httpHealthCheck;
  }
  public putHttpHealthCheck(value: DnsLbHealthCheckHttpHealthCheck) {
    this._httpHealthCheck.internalValue = value;
  }
  public resetHttpHealthCheck() {
    this._httpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthCheckInput() {
    return this._httpHealthCheck.internalValue;
  }

  // https_health_check - computed: false, optional: true, required: false
  private _httpsHealthCheck = new DnsLbHealthCheckHttpsHealthCheckOutputReference(this, "https_health_check");
  public get httpsHealthCheck() {
    return this._httpsHealthCheck;
  }
  public putHttpsHealthCheck(value: DnsLbHealthCheckHttpsHealthCheck) {
    this._httpsHealthCheck.internalValue = value;
  }
  public resetHttpsHealthCheck() {
    this._httpsHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHealthCheckInput() {
    return this._httpsHealthCheck.internalValue;
  }

  // tcp_health_check - computed: false, optional: true, required: false
  private _tcpHealthCheck = new DnsLbHealthCheckTcpHealthCheckOutputReference(this, "tcp_health_check");
  public get tcpHealthCheck() {
    return this._tcpHealthCheck;
  }
  public putTcpHealthCheck(value: DnsLbHealthCheckTcpHealthCheck) {
    this._tcpHealthCheck.internalValue = value;
  }
  public resetTcpHealthCheck() {
    this._tcpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHealthCheckInput() {
    return this._tcpHealthCheck.internalValue;
  }

  // tcp_hex_health_check - computed: false, optional: true, required: false
  private _tcpHexHealthCheck = new DnsLbHealthCheckTcpHexHealthCheckOutputReference(this, "tcp_hex_health_check");
  public get tcpHexHealthCheck() {
    return this._tcpHexHealthCheck;
  }
  public putTcpHexHealthCheck(value: DnsLbHealthCheckTcpHexHealthCheck) {
    this._tcpHexHealthCheck.internalValue = value;
  }
  public resetTcpHexHealthCheck() {
    this._tcpHexHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHexHealthCheckInput() {
    return this._tcpHexHealthCheck.internalValue;
  }

  // udp_health_check - computed: false, optional: true, required: false
  private _udpHealthCheck = new DnsLbHealthCheckUdpHealthCheckOutputReference(this, "udp_health_check");
  public get udpHealthCheck() {
    return this._udpHealthCheck;
  }
  public putUdpHealthCheck(value: DnsLbHealthCheckUdpHealthCheck) {
    this._udpHealthCheck.internalValue = value;
  }
  public resetUdpHealthCheck() {
    this._udpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpHealthCheckInput() {
    return this._udpHealthCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      icmp_health_check: cdktf.booleanToTerraform(this._icmpHealthCheck),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      http_health_check: dnsLbHealthCheckHttpHealthCheckToTerraform(this._httpHealthCheck.internalValue),
      https_health_check: dnsLbHealthCheckHttpsHealthCheckToTerraform(this._httpsHealthCheck.internalValue),
      tcp_health_check: dnsLbHealthCheckTcpHealthCheckToTerraform(this._tcpHealthCheck.internalValue),
      tcp_hex_health_check: dnsLbHealthCheckTcpHexHealthCheckToTerraform(this._tcpHexHealthCheck.internalValue),
      udp_health_check: dnsLbHealthCheckUdpHealthCheckToTerraform(this._udpHealthCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_health_check: {
        value: cdktf.booleanToHclTerraform(this._icmpHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_health_check: {
        value: dnsLbHealthCheckHttpHealthCheckToHclTerraform(this._httpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbHealthCheckHttpHealthCheckList",
      },
      https_health_check: {
        value: dnsLbHealthCheckHttpsHealthCheckToHclTerraform(this._httpsHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbHealthCheckHttpsHealthCheckList",
      },
      tcp_health_check: {
        value: dnsLbHealthCheckTcpHealthCheckToHclTerraform(this._tcpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbHealthCheckTcpHealthCheckList",
      },
      tcp_hex_health_check: {
        value: dnsLbHealthCheckTcpHexHealthCheckToHclTerraform(this._tcpHexHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbHealthCheckTcpHexHealthCheckList",
      },
      udp_health_check: {
        value: dnsLbHealthCheckUdpHealthCheckToHclTerraform(this._udpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLbHealthCheckUdpHealthCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
