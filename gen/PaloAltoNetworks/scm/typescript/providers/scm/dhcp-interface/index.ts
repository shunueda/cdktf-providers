// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#device DhcpInterface#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#folder DhcpInterface#folder}
  */
  readonly folder?: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#name DhcpInterface#name}
  */
  readonly name: string;
  /**
  * Relay
  * 
  * > ℹ️ **Note:** You must specify exactly one of `relay` and `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#relay DhcpInterface#relay}
  */
  readonly relay?: DhcpInterfaceRelay;
  /**
  * Server
  * 
  * > ℹ️ **Note:** You must specify exactly one of `relay` and `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#server DhcpInterface#server}
  */
  readonly server?: DhcpInterfaceServer;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#snippet DhcpInterface#snippet}
  */
  readonly snippet?: string;
}
export interface DhcpInterfaceRelayIp {
  /**
  * Enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#enabled DhcpInterface#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#server DhcpInterface#server}
  */
  readonly server: string[];
}

export function dhcpInterfaceRelayIpToTerraform(struct?: DhcpInterfaceRelayIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.server),
  }
}


export function dhcpInterfaceRelayIpToHclTerraform(struct?: DhcpInterfaceRelayIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.server),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceRelayIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceRelayIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceRelayIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._server = value.server;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string[]; 
  public get server() {
    return this.getListAttribute('server');
  }
  public set server(value: string[]) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DhcpInterfaceRelay {
  /**
  * Ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#ip DhcpInterface#ip}
  */
  readonly ip: DhcpInterfaceRelayIp;
}

export function dhcpInterfaceRelayToTerraform(struct?: DhcpInterfaceRelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: dhcpInterfaceRelayIpToTerraform(struct!.ip),
  }
}


export function dhcpInterfaceRelayToHclTerraform(struct?: DhcpInterfaceRelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: dhcpInterfaceRelayIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceRelayIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceRelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceRelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceRelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip.internalValue = value.ip;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new DhcpInterfaceRelayIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DhcpInterfaceRelayIp) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}
export interface DhcpInterfaceServerOptionDns {
  /**
  * Primary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#primary DhcpInterface#primary}
  */
  readonly primary?: string;
  /**
  * Secondary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#secondary DhcpInterface#secondary}
  */
  readonly secondary?: string;
}

export function dhcpInterfaceServerOptionDnsToTerraform(struct?: DhcpInterfaceServerOptionDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function dhcpInterfaceServerOptionDnsToHclTerraform(struct?: DhcpInterfaceServerOptionDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerOptionDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServerOptionDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOptionDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface DhcpInterfaceServerOptionInheritance {
  /**
  * Interface from which to inherit lease options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#source DhcpInterface#source}
  */
  readonly source?: string;
}

export function dhcpInterfaceServerOptionInheritanceToTerraform(struct?: DhcpInterfaceServerOptionInheritance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dhcpInterfaceServerOptionInheritanceToHclTerraform(struct?: DhcpInterfaceServerOptionInheritance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerOptionInheritanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServerOptionInheritance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOptionInheritance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
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
}
export interface DhcpInterfaceServerOptionLeaseUnlimited {
}

export function dhcpInterfaceServerOptionLeaseUnlimitedToTerraform(struct?: DhcpInterfaceServerOptionLeaseUnlimited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpInterfaceServerOptionLeaseUnlimitedToHclTerraform(struct?: DhcpInterfaceServerOptionLeaseUnlimited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpInterfaceServerOptionLeaseUnlimitedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServerOptionLeaseUnlimited | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOptionLeaseUnlimited | cdktf.IResolvable | undefined) {
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
export interface DhcpInterfaceServerOptionLease {
  /**
  * DHCP lease timeout (minutes)
  * 
  * > ℹ️ **Note:** You must specify exactly one of `timeout` and `unlimited`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#timeout DhcpInterface#timeout}
  */
  readonly timeout?: number;
  /**
  * Unlimited
  * 
  * > ℹ️ **Note:** You must specify exactly one of `timeout` and `unlimited`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#unlimited DhcpInterface#unlimited}
  */
  readonly unlimited?: DhcpInterfaceServerOptionLeaseUnlimited;
}

export function dhcpInterfaceServerOptionLeaseToTerraform(struct?: DhcpInterfaceServerOptionLease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unlimited: dhcpInterfaceServerOptionLeaseUnlimitedToTerraform(struct!.unlimited),
  }
}


export function dhcpInterfaceServerOptionLeaseToHclTerraform(struct?: DhcpInterfaceServerOptionLease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlimited: {
      value: dhcpInterfaceServerOptionLeaseUnlimitedToHclTerraform(struct!.unlimited),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceServerOptionLeaseUnlimited",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerOptionLeaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServerOptionLease | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unlimited?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimited = this._unlimited?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOptionLease | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._unlimited.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._unlimited.internalValue = value.unlimited;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unlimited - computed: false, optional: true, required: false
  private _unlimited = new DhcpInterfaceServerOptionLeaseUnlimitedOutputReference(this, "unlimited");
  public get unlimited() {
    return this._unlimited;
  }
  public putUnlimited(value: DhcpInterfaceServerOptionLeaseUnlimited) {
    this._unlimited.internalValue = value;
  }
  public resetUnlimited() {
    this._unlimited.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedInput() {
    return this._unlimited.internalValue;
  }
}
export interface DhcpInterfaceServerOptionNis {
  /**
  * Primary NIS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#primary DhcpInterface#primary}
  */
  readonly primary?: string;
  /**
  * Secondary NIS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#secondary DhcpInterface#secondary}
  */
  readonly secondary?: string;
}

export function dhcpInterfaceServerOptionNisToTerraform(struct?: DhcpInterfaceServerOptionNis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function dhcpInterfaceServerOptionNisToHclTerraform(struct?: DhcpInterfaceServerOptionNis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerOptionNisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServerOptionNis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOptionNis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface DhcpInterfaceServerOptionNtp {
  /**
  * Primary NTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#primary DhcpInterface#primary}
  */
  readonly primary?: string;
  /**
  * Secondary NTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#secondary DhcpInterface#secondary}
  */
  readonly secondary?: string;
}

export function dhcpInterfaceServerOptionNtpToTerraform(struct?: DhcpInterfaceServerOptionNtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function dhcpInterfaceServerOptionNtpToHclTerraform(struct?: DhcpInterfaceServerOptionNtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerOptionNtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServerOptionNtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOptionNtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface DhcpInterfaceServerOptionUserDefined {
  /**
  * Ascii
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#ascii DhcpInterface#ascii}
  */
  readonly ascii?: string[];
  /**
  * Option code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#code DhcpInterface#code}
  */
  readonly code?: number;
  /**
  * Hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#hex DhcpInterface#hex}
  */
  readonly hex?: string[];
  /**
  * Inherited from DHCP server inheritance source?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#inherited DhcpInterface#inherited}
  */
  readonly inherited: boolean | cdktf.IResolvable;
  /**
  * Ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#ip DhcpInterface#ip}
  */
  readonly ip?: string[];
  /**
  * Option name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#name DhcpInterface#name}
  */
  readonly name: string;
}

export function dhcpInterfaceServerOptionUserDefinedToTerraform(struct?: DhcpInterfaceServerOptionUserDefined | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ascii: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ascii),
    code: cdktf.numberToTerraform(struct!.code),
    hex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hex),
    inherited: cdktf.booleanToTerraform(struct!.inherited),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dhcpInterfaceServerOptionUserDefinedToHclTerraform(struct?: DhcpInterfaceServerOptionUserDefined | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ascii: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ascii),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inherited: {
      value: cdktf.booleanToHclTerraform(struct!.inherited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class DhcpInterfaceServerOptionUserDefinedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpInterfaceServerOptionUserDefined | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ascii !== undefined) {
      hasAnyValues = true;
      internalValueResult.ascii = this._ascii;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._hex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hex = this._hex;
    }
    if (this._inherited !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherited = this._inherited;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOptionUserDefined | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ascii = undefined;
      this._code = undefined;
      this._hex = undefined;
      this._inherited = undefined;
      this._ip = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ascii = value.ascii;
      this._code = value.code;
      this._hex = value.hex;
      this._inherited = value.inherited;
      this._ip = value.ip;
      this._name = value.name;
    }
  }

  // ascii - computed: false, optional: true, required: false
  private _ascii?: string[]; 
  public get ascii() {
    return this.getListAttribute('ascii');
  }
  public set ascii(value: string[]) {
    this._ascii = value;
  }
  public resetAscii() {
    this._ascii = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asciiInput() {
    return this._ascii;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // hex - computed: false, optional: true, required: false
  private _hex?: string[]; 
  public get hex() {
    return this.getListAttribute('hex');
  }
  public set hex(value: string[]) {
    this._hex = value;
  }
  public resetHex() {
    this._hex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexInput() {
    return this._hex;
  }

  // inherited - computed: false, optional: false, required: true
  private _inherited?: boolean | cdktf.IResolvable; 
  public get inherited() {
    return this.getBooleanAttribute('inherited');
  }
  public set inherited(value: boolean | cdktf.IResolvable) {
    this._inherited = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedInput() {
    return this._inherited;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

export class DhcpInterfaceServerOptionUserDefinedList extends cdktf.ComplexList {
  public internalValue? : DhcpInterfaceServerOptionUserDefined[] | cdktf.IResolvable

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
  public get(index: number): DhcpInterfaceServerOptionUserDefinedOutputReference {
    return new DhcpInterfaceServerOptionUserDefinedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpInterfaceServerOptionWins {
  /**
  * Primary WINS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#primary DhcpInterface#primary}
  */
  readonly primary?: string;
  /**
  * Secondary WINS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#secondary DhcpInterface#secondary}
  */
  readonly secondary?: string;
}

export function dhcpInterfaceServerOptionWinsToTerraform(struct?: DhcpInterfaceServerOptionWins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function dhcpInterfaceServerOptionWinsToHclTerraform(struct?: DhcpInterfaceServerOptionWins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerOptionWinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServerOptionWins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOptionWins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface DhcpInterfaceServerOption {
  /**
  * Dns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#dns DhcpInterface#dns}
  */
  readonly dns?: DhcpInterfaceServerOptionDns;
  /**
  * DNS suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#dns_suffix DhcpInterface#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * Default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#gateway DhcpInterface#gateway}
  */
  readonly gateway?: string;
  /**
  * Inheritance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#inheritance DhcpInterface#inheritance}
  */
  readonly inheritance?: DhcpInterfaceServerOptionInheritance;
  /**
  * Lease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#lease DhcpInterface#lease}
  */
  readonly lease?: DhcpInterfaceServerOptionLease;
  /**
  * Nis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#nis DhcpInterface#nis}
  */
  readonly nis?: DhcpInterfaceServerOptionNis;
  /**
  * Ntp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#ntp DhcpInterface#ntp}
  */
  readonly ntp?: DhcpInterfaceServerOptionNtp;
  /**
  * POP3 server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#pop3_server DhcpInterface#pop3_server}
  */
  readonly pop3Server?: string;
  /**
  * SMTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#smtp_server DhcpInterface#smtp_server}
  */
  readonly smtpServer?: string;
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#subnet_mask DhcpInterface#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Custom DHCP options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#user_defined DhcpInterface#user_defined}
  */
  readonly userDefined?: DhcpInterfaceServerOptionUserDefined[] | cdktf.IResolvable;
  /**
  * Wins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#wins DhcpInterface#wins}
  */
  readonly wins?: DhcpInterfaceServerOptionWins;
}

export function dhcpInterfaceServerOptionToTerraform(struct?: DhcpInterfaceServerOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: dhcpInterfaceServerOptionDnsToTerraform(struct!.dns),
    dns_suffix: cdktf.stringToTerraform(struct!.dnsSuffix),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    inheritance: dhcpInterfaceServerOptionInheritanceToTerraform(struct!.inheritance),
    lease: dhcpInterfaceServerOptionLeaseToTerraform(struct!.lease),
    nis: dhcpInterfaceServerOptionNisToTerraform(struct!.nis),
    ntp: dhcpInterfaceServerOptionNtpToTerraform(struct!.ntp),
    pop3_server: cdktf.stringToTerraform(struct!.pop3Server),
    smtp_server: cdktf.stringToTerraform(struct!.smtpServer),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    user_defined: cdktf.listMapper(dhcpInterfaceServerOptionUserDefinedToTerraform, false)(struct!.userDefined),
    wins: dhcpInterfaceServerOptionWinsToTerraform(struct!.wins),
  }
}


export function dhcpInterfaceServerOptionToHclTerraform(struct?: DhcpInterfaceServerOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: dhcpInterfaceServerOptionDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceServerOptionDns",
    },
    dns_suffix: {
      value: cdktf.stringToHclTerraform(struct!.dnsSuffix),
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
    inheritance: {
      value: dhcpInterfaceServerOptionInheritanceToHclTerraform(struct!.inheritance),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceServerOptionInheritance",
    },
    lease: {
      value: dhcpInterfaceServerOptionLeaseToHclTerraform(struct!.lease),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceServerOptionLease",
    },
    nis: {
      value: dhcpInterfaceServerOptionNisToHclTerraform(struct!.nis),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceServerOptionNis",
    },
    ntp: {
      value: dhcpInterfaceServerOptionNtpToHclTerraform(struct!.ntp),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceServerOptionNtp",
    },
    pop3_server: {
      value: cdktf.stringToHclTerraform(struct!.pop3Server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_server: {
      value: cdktf.stringToHclTerraform(struct!.smtpServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_defined: {
      value: cdktf.listMapperHcl(dhcpInterfaceServerOptionUserDefinedToHclTerraform, false)(struct!.userDefined),
      isBlock: true,
      type: "list",
      storageClassType: "DhcpInterfaceServerOptionUserDefinedList",
    },
    wins: {
      value: dhcpInterfaceServerOptionWinsToHclTerraform(struct!.wins),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceServerOptionWins",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServerOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._inheritance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritance = this._inheritance?.internalValue;
    }
    if (this._lease?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lease = this._lease?.internalValue;
    }
    if (this._nis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nis = this._nis?.internalValue;
    }
    if (this._ntp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp?.internalValue;
    }
    if (this._pop3Server !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3Server = this._pop3Server;
    }
    if (this._smtpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpServer = this._smtpServer;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._userDefined?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefined = this._userDefined?.internalValue;
    }
    if (this._wins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wins = this._wins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._dnsSuffix = undefined;
      this._gateway = undefined;
      this._inheritance.internalValue = undefined;
      this._lease.internalValue = undefined;
      this._nis.internalValue = undefined;
      this._ntp.internalValue = undefined;
      this._pop3Server = undefined;
      this._smtpServer = undefined;
      this._subnetMask = undefined;
      this._userDefined.internalValue = undefined;
      this._wins.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._dnsSuffix = value.dnsSuffix;
      this._gateway = value.gateway;
      this._inheritance.internalValue = value.inheritance;
      this._lease.internalValue = value.lease;
      this._nis.internalValue = value.nis;
      this._ntp.internalValue = value.ntp;
      this._pop3Server = value.pop3Server;
      this._smtpServer = value.smtpServer;
      this._subnetMask = value.subnetMask;
      this._userDefined.internalValue = value.userDefined;
      this._wins.internalValue = value.wins;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DhcpInterfaceServerOptionDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: DhcpInterfaceServerOptionDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
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

  // inheritance - computed: false, optional: true, required: false
  private _inheritance = new DhcpInterfaceServerOptionInheritanceOutputReference(this, "inheritance");
  public get inheritance() {
    return this._inheritance;
  }
  public putInheritance(value: DhcpInterfaceServerOptionInheritance) {
    this._inheritance.internalValue = value;
  }
  public resetInheritance() {
    this._inheritance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceInput() {
    return this._inheritance.internalValue;
  }

  // lease - computed: false, optional: true, required: false
  private _lease = new DhcpInterfaceServerOptionLeaseOutputReference(this, "lease");
  public get lease() {
    return this._lease;
  }
  public putLease(value: DhcpInterfaceServerOptionLease) {
    this._lease.internalValue = value;
  }
  public resetLease() {
    this._lease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseInput() {
    return this._lease.internalValue;
  }

  // nis - computed: false, optional: true, required: false
  private _nis = new DhcpInterfaceServerOptionNisOutputReference(this, "nis");
  public get nis() {
    return this._nis;
  }
  public putNis(value: DhcpInterfaceServerOptionNis) {
    this._nis.internalValue = value;
  }
  public resetNis() {
    this._nis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nisInput() {
    return this._nis.internalValue;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp = new DhcpInterfaceServerOptionNtpOutputReference(this, "ntp");
  public get ntp() {
    return this._ntp;
  }
  public putNtp(value: DhcpInterfaceServerOptionNtp) {
    this._ntp.internalValue = value;
  }
  public resetNtp() {
    this._ntp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp.internalValue;
  }

  // pop3_server - computed: false, optional: true, required: false
  private _pop3Server?: string; 
  public get pop3Server() {
    return this.getStringAttribute('pop3_server');
  }
  public set pop3Server(value: string) {
    this._pop3Server = value;
  }
  public resetPop3Server() {
    this._pop3Server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3ServerInput() {
    return this._pop3Server;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer?: string; 
  public get smtpServer() {
    return this.getStringAttribute('smtp_server');
  }
  public set smtpServer(value: string) {
    this._smtpServer = value;
  }
  public resetSmtpServer() {
    this._smtpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // user_defined - computed: false, optional: true, required: false
  private _userDefined = new DhcpInterfaceServerOptionUserDefinedList(this, "user_defined", false);
  public get userDefined() {
    return this._userDefined;
  }
  public putUserDefined(value: DhcpInterfaceServerOptionUserDefined[] | cdktf.IResolvable) {
    this._userDefined.internalValue = value;
  }
  public resetUserDefined() {
    this._userDefined.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedInput() {
    return this._userDefined.internalValue;
  }

  // wins - computed: false, optional: true, required: false
  private _wins = new DhcpInterfaceServerOptionWinsOutputReference(this, "wins");
  public get wins() {
    return this._wins;
  }
  public putWins(value: DhcpInterfaceServerOptionWins) {
    this._wins.internalValue = value;
  }
  public resetWins() {
    this._wins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsInput() {
    return this._wins.internalValue;
  }
}
export interface DhcpInterfaceServerReserved {
  /**
  * Reservation description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#description DhcpInterface#description}
  */
  readonly description?: string;
  /**
  * Reserved MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#mac DhcpInterface#mac}
  */
  readonly mac?: string;
  /**
  * Reserved IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#name DhcpInterface#name}
  */
  readonly name?: string;
}

export function dhcpInterfaceServerReservedToTerraform(struct?: DhcpInterfaceServerReserved | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dhcpInterfaceServerReservedToHclTerraform(struct?: DhcpInterfaceServerReserved | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerReservedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpInterfaceServerReserved | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServerReserved | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._mac = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._mac = value.mac;
      this._name = value.name;
    }
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

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

export class DhcpInterfaceServerReservedList extends cdktf.ComplexList {
  public internalValue? : DhcpInterfaceServerReserved[] | cdktf.IResolvable

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
  public get(index: number): DhcpInterfaceServerReservedOutputReference {
    return new DhcpInterfaceServerReservedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpInterfaceServer {
  /**
  * List of IP address pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#ip_pool DhcpInterface#ip_pool}
  */
  readonly ipPool?: string[];
  /**
  * DHCP server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#mode DhcpInterface#mode}
  */
  readonly mode?: string;
  /**
  * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#option DhcpInterface#option}
  */
  readonly option?: DhcpInterfaceServerOption;
  /**
  * Ping IP before allocating?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#probe_ip DhcpInterface#probe_ip}
  */
  readonly probeIp?: boolean | cdktf.IResolvable;
  /**
  * List of IP reservations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#reserved DhcpInterface#reserved}
  */
  readonly reserved?: DhcpInterfaceServerReserved[] | cdktf.IResolvable;
}

export function dhcpInterfaceServerToTerraform(struct?: DhcpInterfaceServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_pool: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPool),
    mode: cdktf.stringToTerraform(struct!.mode),
    option: dhcpInterfaceServerOptionToTerraform(struct!.option),
    probe_ip: cdktf.booleanToTerraform(struct!.probeIp),
    reserved: cdktf.listMapper(dhcpInterfaceServerReservedToTerraform, false)(struct!.reserved),
  }
}


export function dhcpInterfaceServerToHclTerraform(struct?: DhcpInterfaceServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_pool: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPool),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: dhcpInterfaceServerOptionToHclTerraform(struct!.option),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpInterfaceServerOption",
    },
    probe_ip: {
      value: cdktf.booleanToHclTerraform(struct!.probeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserved: {
      value: cdktf.listMapperHcl(dhcpInterfaceServerReservedToHclTerraform, false)(struct!.reserved),
      isBlock: true,
      type: "list",
      storageClassType: "DhcpInterfaceServerReservedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpInterfaceServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpInterfaceServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPool = this._ipPool;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._option?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option?.internalValue;
    }
    if (this._probeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeIp = this._probeIp;
    }
    if (this._reserved?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserved = this._reserved?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpInterfaceServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPool = undefined;
      this._mode = undefined;
      this._option.internalValue = undefined;
      this._probeIp = undefined;
      this._reserved.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPool = value.ipPool;
      this._mode = value.mode;
      this._option.internalValue = value.option;
      this._probeIp = value.probeIp;
      this._reserved.internalValue = value.reserved;
    }
  }

  // ip_pool - computed: false, optional: true, required: false
  private _ipPool?: string[]; 
  public get ipPool() {
    return this.getListAttribute('ip_pool');
  }
  public set ipPool(value: string[]) {
    this._ipPool = value;
  }
  public resetIpPool() {
    this._ipPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolInput() {
    return this._ipPool;
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

  // option - computed: false, optional: true, required: false
  private _option = new DhcpInterfaceServerOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }
  public putOption(value: DhcpInterfaceServerOption) {
    this._option.internalValue = value;
  }
  public resetOption() {
    this._option.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }

  // probe_ip - computed: false, optional: true, required: false
  private _probeIp?: boolean | cdktf.IResolvable; 
  public get probeIp() {
    return this.getBooleanAttribute('probe_ip');
  }
  public set probeIp(value: boolean | cdktf.IResolvable) {
    this._probeIp = value;
  }
  public resetProbeIp() {
    this._probeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIpInput() {
    return this._probeIp;
  }

  // reserved - computed: false, optional: true, required: false
  private _reserved = new DhcpInterfaceServerReservedList(this, "reserved", false);
  public get reserved() {
    return this._reserved;
  }
  public putReserved(value: DhcpInterfaceServerReserved[] | cdktf.IResolvable) {
    this._reserved.internalValue = value;
  }
  public resetReserved() {
    this._reserved.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInput() {
    return this._reserved.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface scm_dhcp_interface}
*/
export class DhcpInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_dhcp_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpInterface to import
  * @param importFromId The id of the existing DhcpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_dhcp_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dhcp_interface scm_dhcp_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_dhcp_interface',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._relay.internalValue = config.relay;
    this._server.internalValue = config.server;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // relay - computed: false, optional: true, required: false
  private _relay = new DhcpInterfaceRelayOutputReference(this, "relay");
  public get relay() {
    return this._relay;
  }
  public putRelay(value: DhcpInterfaceRelay) {
    this._relay.internalValue = value;
  }
  public resetRelay() {
    this._relay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DhcpInterfaceServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DhcpInterfaceServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      relay: dhcpInterfaceRelayToTerraform(this._relay.internalValue),
      server: dhcpInterfaceServerToTerraform(this._server.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      relay: {
        value: dhcpInterfaceRelayToHclTerraform(this._relay.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DhcpInterfaceRelay",
      },
      server: {
        value: dhcpInterfaceServerToHclTerraform(this._server.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DhcpInterfaceServer",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
