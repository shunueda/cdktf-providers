// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PbfRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#action PbfRule#action}
  */
  readonly action?: PbfRuleAction;
  /**
  * Applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#application PbfRule#application}
  */
  readonly application?: string[];
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#description PbfRule#description}
  */
  readonly description?: string;
  /**
  * Destination addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#destination PbfRule#destination}
  */
  readonly destination?: string[];
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#device PbfRule#device}
  */
  readonly device?: string;
  /**
  * Enforce symmetric return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#enforce_symmetric_return PbfRule#enforce_symmetric_return}
  */
  readonly enforceSymmetricReturn?: PbfRuleEnforceSymmetricReturn;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#folder PbfRule#folder}
  */
  readonly folder?: string;
  /**
  * From
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#from PbfRule#from}
  */
  readonly from?: PbfRuleFrom;
  /**
  * PBF rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#name PbfRule#name}
  */
  readonly name?: string;
  /**
  * Schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#schedule PbfRule#schedule}
  */
  readonly schedule?: string;
  /**
  * Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#service PbfRule#service}
  */
  readonly service?: string[];
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#snippet PbfRule#snippet}
  */
  readonly snippet?: string;
  /**
  * Source addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#source PbfRule#source}
  */
  readonly source?: string[];
  /**
  * Source users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#source_user PbfRule#source_user}
  */
  readonly sourceUser?: string[];
  /**
  * Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#tag PbfRule#tag}
  */
  readonly tag?: string[];
}
export interface PbfRuleActionDiscard {
}

export function pbfRuleActionDiscardToTerraform(struct?: PbfRuleActionDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pbfRuleActionDiscardToHclTerraform(struct?: PbfRuleActionDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PbfRuleActionDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbfRuleActionDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbfRuleActionDiscard | cdktf.IResolvable | undefined) {
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
export interface PbfRuleActionForwardMonitor {
  /**
  * Disable this rule if nexthop/monitor ip is unreachable?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#disable_if_unreachable PbfRule#disable_if_unreachable}
  */
  readonly disableIfUnreachable?: boolean | cdktf.IResolvable;
  /**
  * Monitor IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#ip_address PbfRule#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Monitoring profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#profile PbfRule#profile}
  */
  readonly profile?: string;
}

export function pbfRuleActionForwardMonitorToTerraform(struct?: PbfRuleActionForwardMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_if_unreachable: cdktf.booleanToTerraform(struct!.disableIfUnreachable),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function pbfRuleActionForwardMonitorToHclTerraform(struct?: PbfRuleActionForwardMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_if_unreachable: {
      value: cdktf.booleanToHclTerraform(struct!.disableIfUnreachable),
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
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbfRuleActionForwardMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbfRuleActionForwardMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableIfUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIfUnreachable = this._disableIfUnreachable;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbfRuleActionForwardMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableIfUnreachable = undefined;
      this._ipAddress = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableIfUnreachable = value.disableIfUnreachable;
      this._ipAddress = value.ipAddress;
      this._profile = value.profile;
    }
  }

  // disable_if_unreachable - computed: false, optional: true, required: false
  private _disableIfUnreachable?: boolean | cdktf.IResolvable; 
  public get disableIfUnreachable() {
    return this.getBooleanAttribute('disable_if_unreachable');
  }
  public set disableIfUnreachable(value: boolean | cdktf.IResolvable) {
    this._disableIfUnreachable = value;
  }
  public resetDisableIfUnreachable() {
    this._disableIfUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIfUnreachableInput() {
    return this._disableIfUnreachable;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface PbfRuleActionForwardNexthop {
  /**
  * Next hop FQDN
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#fqdn PbfRule#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Next hop IP address
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#ip_address PbfRule#ip_address}
  */
  readonly ipAddress?: string;
}

export function pbfRuleActionForwardNexthopToTerraform(struct?: PbfRuleActionForwardNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function pbfRuleActionForwardNexthopToHclTerraform(struct?: PbfRuleActionForwardNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbfRuleActionForwardNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbfRuleActionForwardNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbfRuleActionForwardNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface PbfRuleActionForward {
  /**
  * Egress interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#egress_interface PbfRule#egress_interface}
  */
  readonly egressInterface?: string;
  /**
  * Monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#monitor PbfRule#monitor}
  */
  readonly monitor?: PbfRuleActionForwardMonitor;
  /**
  * Nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#nexthop PbfRule#nexthop}
  */
  readonly nexthop?: PbfRuleActionForwardNexthop;
}

export function pbfRuleActionForwardToTerraform(struct?: PbfRuleActionForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_interface: cdktf.stringToTerraform(struct!.egressInterface),
    monitor: pbfRuleActionForwardMonitorToTerraform(struct!.monitor),
    nexthop: pbfRuleActionForwardNexthopToTerraform(struct!.nexthop),
  }
}


export function pbfRuleActionForwardToHclTerraform(struct?: PbfRuleActionForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_interface: {
      value: cdktf.stringToHclTerraform(struct!.egressInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor: {
      value: pbfRuleActionForwardMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "struct",
      storageClassType: "PbfRuleActionForwardMonitor",
    },
    nexthop: {
      value: pbfRuleActionForwardNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "PbfRuleActionForwardNexthop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbfRuleActionForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbfRuleActionForward | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressInterface = this._egressInterface;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbfRuleActionForward | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressInterface = undefined;
      this._monitor.internalValue = undefined;
      this._nexthop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressInterface = value.egressInterface;
      this._monitor.internalValue = value.monitor;
      this._nexthop.internalValue = value.nexthop;
    }
  }

  // egress_interface - computed: false, optional: true, required: false
  private _egressInterface?: string; 
  public get egressInterface() {
    return this.getStringAttribute('egress_interface');
  }
  public set egressInterface(value: string) {
    this._egressInterface = value;
  }
  public resetEgressInterface() {
    this._egressInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInterfaceInput() {
    return this._egressInterface;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new PbfRuleActionForwardMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: PbfRuleActionForwardMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new PbfRuleActionForwardNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: PbfRuleActionForwardNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }
}
export interface PbfRuleActionNoPbf {
}

export function pbfRuleActionNoPbfToTerraform(struct?: PbfRuleActionNoPbf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pbfRuleActionNoPbfToHclTerraform(struct?: PbfRuleActionNoPbf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PbfRuleActionNoPbfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbfRuleActionNoPbf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbfRuleActionNoPbf | cdktf.IResolvable | undefined) {
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
export interface PbfRuleAction {
  /**
  * Discard
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `forward`, and `no_pbf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#discard PbfRule#discard}
  */
  readonly discard?: PbfRuleActionDiscard;
  /**
  * Forward
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `forward`, and `no_pbf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#forward PbfRule#forward}
  */
  readonly forward?: PbfRuleActionForward;
  /**
  * No pbf
  * > ℹ️ **Note:** You must specify exactly one of `discard`, `forward`, and `no_pbf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#no_pbf PbfRule#no_pbf}
  */
  readonly noPbf?: PbfRuleActionNoPbf;
}

export function pbfRuleActionToTerraform(struct?: PbfRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: pbfRuleActionDiscardToTerraform(struct!.discard),
    forward: pbfRuleActionForwardToTerraform(struct!.forward),
    no_pbf: pbfRuleActionNoPbfToTerraform(struct!.noPbf),
  }
}


export function pbfRuleActionToHclTerraform(struct?: PbfRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: pbfRuleActionDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "PbfRuleActionDiscard",
    },
    forward: {
      value: pbfRuleActionForwardToHclTerraform(struct!.forward),
      isBlock: true,
      type: "struct",
      storageClassType: "PbfRuleActionForward",
    },
    no_pbf: {
      value: pbfRuleActionNoPbfToHclTerraform(struct!.noPbf),
      isBlock: true,
      type: "struct",
      storageClassType: "PbfRuleActionNoPbf",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbfRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbfRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._noPbf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPbf = this._noPbf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbfRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._noPbf.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard.internalValue = value.discard;
      this._forward.internalValue = value.forward;
      this._noPbf.internalValue = value.noPbf;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard = new PbfRuleActionDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: PbfRuleActionDiscard) {
    this._discard.internalValue = value;
  }
  public resetDiscard() {
    this._discard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new PbfRuleActionForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: PbfRuleActionForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // no_pbf - computed: false, optional: true, required: false
  private _noPbf = new PbfRuleActionNoPbfOutputReference(this, "no_pbf");
  public get noPbf() {
    return this._noPbf;
  }
  public putNoPbf(value: PbfRuleActionNoPbf) {
    this._noPbf.internalValue = value;
  }
  public resetNoPbf() {
    this._noPbf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPbfInput() {
    return this._noPbf.internalValue;
  }
}
export interface PbfRuleEnforceSymmetricReturnNexthopAddressListStruct {
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#name PbfRule#name}
  */
  readonly name?: string;
}

export function pbfRuleEnforceSymmetricReturnNexthopAddressListStructToTerraform(struct?: PbfRuleEnforceSymmetricReturnNexthopAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function pbfRuleEnforceSymmetricReturnNexthopAddressListStructToHclTerraform(struct?: PbfRuleEnforceSymmetricReturnNexthopAddressListStruct | cdktf.IResolvable): any {
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

export class PbfRuleEnforceSymmetricReturnNexthopAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbfRuleEnforceSymmetricReturnNexthopAddressListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PbfRuleEnforceSymmetricReturnNexthopAddressListStruct | cdktf.IResolvable | undefined) {
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

export class PbfRuleEnforceSymmetricReturnNexthopAddressListStructList extends cdktf.ComplexList {
  public internalValue? : PbfRuleEnforceSymmetricReturnNexthopAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): PbfRuleEnforceSymmetricReturnNexthopAddressListStructOutputReference {
    return new PbfRuleEnforceSymmetricReturnNexthopAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbfRuleEnforceSymmetricReturn {
  /**
  * Enforce symmetric return?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#enabled PbfRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Next hop IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#nexthop_address_list PbfRule#nexthop_address_list}
  */
  readonly nexthopAddressList?: PbfRuleEnforceSymmetricReturnNexthopAddressListStruct[] | cdktf.IResolvable;
}

export function pbfRuleEnforceSymmetricReturnToTerraform(struct?: PbfRuleEnforceSymmetricReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    nexthop_address_list: cdktf.listMapper(pbfRuleEnforceSymmetricReturnNexthopAddressListStructToTerraform, false)(struct!.nexthopAddressList),
  }
}


export function pbfRuleEnforceSymmetricReturnToHclTerraform(struct?: PbfRuleEnforceSymmetricReturn | cdktf.IResolvable): any {
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
    nexthop_address_list: {
      value: cdktf.listMapperHcl(pbfRuleEnforceSymmetricReturnNexthopAddressListStructToHclTerraform, false)(struct!.nexthopAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "PbfRuleEnforceSymmetricReturnNexthopAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbfRuleEnforceSymmetricReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbfRuleEnforceSymmetricReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._nexthopAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddressList = this._nexthopAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbfRuleEnforceSymmetricReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._nexthopAddressList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._nexthopAddressList.internalValue = value.nexthopAddressList;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // nexthop_address_list - computed: false, optional: true, required: false
  private _nexthopAddressList = new PbfRuleEnforceSymmetricReturnNexthopAddressListStructList(this, "nexthop_address_list", false);
  public get nexthopAddressList() {
    return this._nexthopAddressList;
  }
  public putNexthopAddressList(value: PbfRuleEnforceSymmetricReturnNexthopAddressListStruct[] | cdktf.IResolvable) {
    this._nexthopAddressList.internalValue = value;
  }
  public resetNexthopAddressList() {
    this._nexthopAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressListInput() {
    return this._nexthopAddressList.internalValue;
  }
}
export interface PbfRuleFrom {
  /**
  * Source interfaces
  * > ℹ️ **Note:** You must specify exactly one of `interface` and `zone`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#interface PbfRule#interface}
  */
  readonly interface?: string[];
  /**
  * Source zones
  * > ℹ️ **Note:** You must specify exactly one of `interface` and `zone`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#zone PbfRule#zone}
  */
  readonly zone?: string[];
}

export function pbfRuleFromToTerraform(struct?: PbfRuleFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    zone: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zone),
  }
}


export function pbfRuleFromToHclTerraform(struct?: PbfRuleFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zone: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zone),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbfRuleFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbfRuleFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbfRuleFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._zone = value.zone;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return this.getListAttribute('interface');
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string[]; 
  public get zone() {
    return this.getListAttribute('zone');
  }
  public set zone(value: string[]) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule scm_pbf_rule}
*/
export class PbfRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_pbf_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PbfRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PbfRule to import
  * @param importFromId The id of the existing PbfRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PbfRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_pbf_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/pbf_rule scm_pbf_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PbfRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PbfRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_pbf_rule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action.internalValue = config.action;
    this._application = config.application;
    this._description = config.description;
    this._destination = config.destination;
    this._device = config.device;
    this._enforceSymmetricReturn.internalValue = config.enforceSymmetricReturn;
    this._folder = config.folder;
    this._from.internalValue = config.from;
    this._name = config.name;
    this._schedule = config.schedule;
    this._service = config.service;
    this._snippet = config.snippet;
    this._source = config.source;
    this._sourceUser = config.sourceUser;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action = new PbfRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: PbfRuleAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // application - computed: false, optional: true, required: false
  private _application?: string[]; 
  public get application() {
    return this.getListAttribute('application');
  }
  public set application(value: string[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
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

  // destination - computed: false, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // enforce_symmetric_return - computed: false, optional: true, required: false
  private _enforceSymmetricReturn = new PbfRuleEnforceSymmetricReturnOutputReference(this, "enforce_symmetric_return");
  public get enforceSymmetricReturn() {
    return this._enforceSymmetricReturn;
  }
  public putEnforceSymmetricReturn(value: PbfRuleEnforceSymmetricReturn) {
    this._enforceSymmetricReturn.internalValue = value;
  }
  public resetEnforceSymmetricReturn() {
    this._enforceSymmetricReturn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSymmetricReturnInput() {
    return this._enforceSymmetricReturn.internalValue;
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

  // from - computed: false, optional: true, required: false
  private _from = new PbfRuleFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: PbfRuleFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return this.getListAttribute('service');
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // source - computed: false, optional: true, required: false
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_user - computed: false, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
      action: pbfRuleActionToTerraform(this._action.internalValue),
      application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._application),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      device: cdktf.stringToTerraform(this._device),
      enforce_symmetric_return: pbfRuleEnforceSymmetricReturnToTerraform(this._enforceSymmetricReturn.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      from: pbfRuleFromToTerraform(this._from.internalValue),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      snippet: cdktf.stringToTerraform(this._snippet),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceUser),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: pbfRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PbfRuleAction",
      },
      application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._application),
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
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_symmetric_return: {
        value: pbfRuleEnforceSymmetricReturnToHclTerraform(this._enforceSymmetricReturn.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PbfRuleEnforceSymmetricReturn",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: pbfRuleFromToHclTerraform(this._from.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PbfRuleFrom",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_user: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceUser),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tag),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
