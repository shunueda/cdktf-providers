// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description here for your reference (not parsed). Must be between 1 and 255 characters. Must be a character in set `[a-zA-Z0-9 .]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#description FirewallNat#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#destination FirewallNat#destination}
  */
  readonly destination?: FirewallNatDestination;
  /**
  * Enabling this option will disable NAT for traffic matching this rule and stop processing Outbound NAT rules. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#disable_nat FirewallNat#disable_nat}
  */
  readonly disableNat?: boolean | cdktf.IResolvable;
  /**
  * Enable this firewall NAT rule. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#enabled FirewallNat#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Choose on which interface(s) packets must come in to match this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#interface FirewallNat#interface}
  */
  readonly interface: string;
  /**
  * Select the Internet Protocol version this rule applies to. Available values: `inet`, `inet6`. Defaults to `inet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#ip_protocol FirewallNat#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Log packets that are handled by this rule. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#log FirewallNat#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Choose which IP protocol this rule should match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#protocol FirewallNat#protocol}
  */
  readonly protocol: string;
  /**
  * Specify the order of this NAT rule. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#sequence FirewallNat#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#source FirewallNat#source}
  */
  readonly source?: FirewallNatSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#target FirewallNat#target}
  */
  readonly target: FirewallNatTarget;
}
export interface FirewallNatDestination {
  /**
  * Use this option to invert the sense of the match. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#invert FirewallNat#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Specify the IP address, CIDR or alias for the destination of the packet for this mapping. For `<INT> net`, enter `<int>` (e.g. `lan`). For `<INT> address`, enter `<int>ip` (e.g. `lanip`). Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#net FirewallNat#net}
  */
  readonly net?: string;
  /**
  * Destination port number or well known name (imap, imaps, http, https, ...), for ranges use a dash. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#port FirewallNat#port}
  */
  readonly port?: string;
}

export function firewallNatDestinationToTerraform(struct?: FirewallNatDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    net: cdktf.stringToTerraform(struct!.net),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function firewallNatDestinationToHclTerraform(struct?: FirewallNatDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net: {
      value: cdktf.stringToHclTerraform(struct!.net),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallNatDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallNatDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._net !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallNatDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._net = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._net = value.net;
      this._port = value.port;
    }
  }

  // invert - computed: true, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // net - computed: true, optional: true, required: false
  private _net?: string; 
  public get net() {
    return this.getStringAttribute('net');
  }
  public set net(value: string) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface FirewallNatSource {
  /**
  * Use this option to invert the sense of the match. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#invert FirewallNat#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Specify the IP address, CIDR or alias for the source of the packet for this mapping. For `<INT> net`, enter `<int>` (e.g. `lan`). For `<INT> address`, enter `<int>ip` (e.g. `lanip`). Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#net FirewallNat#net}
  */
  readonly net?: string;
  /**
  * Specify the source port for this rule. This is usually random and almost never equal to the destination port range (and should usually be `""`). Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#port FirewallNat#port}
  */
  readonly port?: string;
}

export function firewallNatSourceToTerraform(struct?: FirewallNatSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    net: cdktf.stringToTerraform(struct!.net),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function firewallNatSourceToHclTerraform(struct?: FirewallNatSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    net: {
      value: cdktf.stringToHclTerraform(struct!.net),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallNatSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallNatSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._net !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallNatSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._net = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._net = value.net;
      this._port = value.port;
    }
  }

  // invert - computed: true, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // net - computed: true, optional: true, required: false
  private _net?: string; 
  public get net() {
    return this.getStringAttribute('net');
  }
  public set net(value: string) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface FirewallNatTarget {
  /**
  * Specify the IP address or alias for the packets to be mapped to. For `<INT> address`, enter `<int>ip` (e.g. `lanip`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#ip FirewallNat#ip}
  */
  readonly ip: string;
  /**
  * Destination port number or well known name (imap, imaps, http, https, ...), for ranges use a dash. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#port FirewallNat#port}
  */
  readonly port?: string;
}

export function firewallNatTargetToTerraform(struct?: FirewallNatTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function firewallNatTargetToHclTerraform(struct?: FirewallNatTarget | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallNatTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallNatTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallNatTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat opnsense_firewall_nat}
*/
export class FirewallNat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_firewall_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallNat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallNat to import
  * @param importFromId The id of the existing FirewallNat that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallNat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_firewall_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_nat opnsense_firewall_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallNatConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallNatConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_firewall_nat',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destination.internalValue = config.destination;
    this._disableNat = config.disableNat;
    this._enabled = config.enabled;
    this._interface = config.interface;
    this._ipProtocol = config.ipProtocol;
    this._log = config.log;
    this._protocol = config.protocol;
    this._sequence = config.sequence;
    this._source.internalValue = config.source;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination - computed: true, optional: true, required: false
  private _destination = new FirewallNatDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: FirewallNatDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // disable_nat - computed: true, optional: true, required: false
  private _disableNat?: boolean | cdktf.IResolvable; 
  public get disableNat() {
    return this.getBooleanAttribute('disable_nat');
  }
  public set disableNat(value: boolean | cdktf.IResolvable) {
    this._disableNat = value;
  }
  public resetDisableNat() {
    this._disableNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNatInput() {
    return this._disableNat;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // log - computed: true, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sequence - computed: true, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // source - computed: true, optional: true, required: false
  private _source = new FirewallNatSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: FirewallNatSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new FirewallNatTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: FirewallNatTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination: firewallNatDestinationToTerraform(this._destination.internalValue),
      disable_nat: cdktf.booleanToTerraform(this._disableNat),
      enabled: cdktf.booleanToTerraform(this._enabled),
      interface: cdktf.stringToTerraform(this._interface),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      log: cdktf.booleanToTerraform(this._log),
      protocol: cdktf.stringToTerraform(this._protocol),
      sequence: cdktf.numberToTerraform(this._sequence),
      source: firewallNatSourceToTerraform(this._source.internalValue),
      target: firewallNatTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: firewallNatDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallNatDestination",
      },
      disable_nat: {
        value: cdktf.booleanToHclTerraform(this._disableNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log: {
        value: cdktf.booleanToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: firewallNatSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallNatSource",
      },
      target: {
        value: firewallNatTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallNatTarget",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
