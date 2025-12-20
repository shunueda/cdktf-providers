// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the Firewall is inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#disabled Firewall#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The default behavior for inbound traffic. This setting can be overridden by updating the inbound.action property for an individual Firewall Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#inbound_policy Firewall#inbound_policy}
  */
  readonly inboundPolicy: string;
  /**
  * The IDs of Linode interfaces to apply this firewall to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#interfaces Firewall#interfaces}
  */
  readonly interfaces?: number[];
  /**
  * The label for the Firewall. For display purposes only. If no label is provided, a default will be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#label Firewall#label}
  */
  readonly label: string;
  /**
  * The IDs of Linodes to apply this firewall to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#linodes Firewall#linodes}
  */
  readonly linodes?: number[];
  /**
  * The IDs of NodeBalancers to apply this firewall to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#nodebalancers Firewall#nodebalancers}
  */
  readonly nodebalancers?: number[];
  /**
  * The default behavior for outbound traffic. This setting can be overridden by updating the outbound.action property for an individual Firewall Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#outbound_policy Firewall#outbound_policy}
  */
  readonly outboundPolicy: string;
  /**
  * An array of tags applied to the firewall. Tags are for organizational purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#tags Firewall#tags}
  */
  readonly tags?: string[];
  /**
  * inbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#inbound Firewall#inbound}
  */
  readonly inbound?: FirewallInbound[] | cdktf.IResolvable;
  /**
  * outbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#outbound Firewall#outbound}
  */
  readonly outbound?: FirewallOutbound[] | cdktf.IResolvable;
}
export interface FirewallDevices {
}

export function firewallDevicesToTerraform(struct?: FirewallDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firewallDevicesToHclTerraform(struct?: FirewallDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirewallDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getNumberAttribute('entity_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class FirewallDevicesList extends cdktf.ComplexList {

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
  public get(index: number): FirewallDevicesOutputReference {
    return new FirewallDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInbound {
  /**
  * Controls whether traffic is accepted or dropped by this rule. Overrides the Firewall's inbound_policy if this is an inbound rule, or the outbound_policy if this is an outbound rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#action Firewall#action}
  */
  readonly action: string;
  /**
  * Used to describe this rule. For display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#description Firewall#description}
  */
  readonly description?: string;
  /**
  * A list of CIDR blocks or 0.0.0.0/0 (to allow all) this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#ipv4 Firewall#ipv4}
  */
  readonly ipv4?: string[];
  /**
  * A list of IPv6 addresses or networks this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#ipv6 Firewall#ipv6}
  */
  readonly ipv6?: string[];
  /**
  * Used to identify this rule. For display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#label Firewall#label}
  */
  readonly label: string;
  /**
  * A string representation of ports and/or port ranges (i.e. "443" or "80-90, 91").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#ports Firewall#ports}
  */
  readonly ports?: string;
  /**
  * The network protocol this rule controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol: string;
}

export function firewallInboundToTerraform(struct?: FirewallInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4),
    ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6),
    label: cdktf.stringToTerraform(struct!.label),
    ports: cdktf.stringToTerraform(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function firewallInboundToHclTerraform(struct?: FirewallInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._label = undefined;
      this._ports = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._label = value.label;
      this._ports = value.ports;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // description - computed: true, optional: true, required: false
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string[]; 
  public get ipv4() {
    return this.getListAttribute('ipv4');
  }
  public set ipv4(value: string[]) {
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
  private _ipv6?: string[]; 
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }
  public set ipv6(value: string[]) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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
}

export class FirewallInboundList extends cdktf.ComplexList {
  public internalValue? : FirewallInbound[] | cdktf.IResolvable

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
  public get(index: number): FirewallInboundOutputReference {
    return new FirewallInboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallOutbound {
  /**
  * Controls whether traffic is accepted or dropped by this rule. Overrides the Firewall's inbound_policy if this is an inbound rule, or the outbound_policy if this is an outbound rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#action Firewall#action}
  */
  readonly action: string;
  /**
  * Used to describe this rule. For display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#description Firewall#description}
  */
  readonly description?: string;
  /**
  * A list of CIDR blocks or 0.0.0.0/0 (to allow all) this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#ipv4 Firewall#ipv4}
  */
  readonly ipv4?: string[];
  /**
  * A list of IPv6 addresses or networks this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#ipv6 Firewall#ipv6}
  */
  readonly ipv6?: string[];
  /**
  * Used to identify this rule. For display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#label Firewall#label}
  */
  readonly label: string;
  /**
  * A string representation of ports and/or port ranges (i.e. "443" or "80-90, 91").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#ports Firewall#ports}
  */
  readonly ports?: string;
  /**
  * The network protocol this rule controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol: string;
}

export function firewallOutboundToTerraform(struct?: FirewallOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4),
    ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6),
    label: cdktf.stringToTerraform(struct!.label),
    ports: cdktf.stringToTerraform(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function firewallOutboundToHclTerraform(struct?: FirewallOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallOutboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallOutbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallOutbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._label = undefined;
      this._ports = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._label = value.label;
      this._ports = value.ports;
      this._protocol = value.protocol;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // description - computed: true, optional: true, required: false
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string[]; 
  public get ipv4() {
    return this.getListAttribute('ipv4');
  }
  public set ipv4(value: string[]) {
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
  private _ipv6?: string[]; 
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }
  public set ipv6(value: string[]) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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
}

export class FirewallOutboundList extends cdktf.ComplexList {
  public internalValue? : FirewallOutbound[] | cdktf.IResolvable

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
  public get(index: number): FirewallOutboundOutputReference {
    return new FirewallOutboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall linode_firewall}
*/
export class Firewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Firewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Firewall to import
  * @param importFromId The id of the existing Firewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Firewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/firewall linode_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_firewall',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._inboundPolicy = config.inboundPolicy;
    this._interfaces = config.interfaces;
    this._label = config.label;
    this._linodes = config.linodes;
    this._nodebalancers = config.nodebalancers;
    this._outboundPolicy = config.outboundPolicy;
    this._tags = config.tags;
    this._inbound.internalValue = config.inbound;
    this._outbound.internalValue = config.outbound;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new FirewallDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_policy - computed: false, optional: false, required: true
  private _inboundPolicy?: string; 
  public get inboundPolicy() {
    return this.getStringAttribute('inbound_policy');
  }
  public set inboundPolicy(value: string) {
    this._inboundPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundPolicyInput() {
    return this._inboundPolicy;
  }

  // interfaces - computed: true, optional: true, required: false
  private _interfaces?: number[]; 
  public get interfaces() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('interfaces')));
  }
  public set interfaces(value: number[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // linodes - computed: true, optional: true, required: false
  private _linodes?: number[]; 
  public get linodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('linodes')));
  }
  public set linodes(value: number[]) {
    this._linodes = value;
  }
  public resetLinodes() {
    this._linodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodesInput() {
    return this._linodes;
  }

  // nodebalancers - computed: true, optional: true, required: false
  private _nodebalancers?: number[]; 
  public get nodebalancers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('nodebalancers')));
  }
  public set nodebalancers(value: number[]) {
    this._nodebalancers = value;
  }
  public resetNodebalancers() {
    this._nodebalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodebalancersInput() {
    return this._nodebalancers;
  }

  // outbound_policy - computed: false, optional: false, required: true
  private _outboundPolicy?: string; 
  public get outboundPolicy() {
    return this.getStringAttribute('outbound_policy');
  }
  public set outboundPolicy(value: string) {
    this._outboundPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPolicyInput() {
    return this._outboundPolicy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound = new FirewallInboundList(this, "inbound", false);
  public get inbound() {
    return this._inbound;
  }
  public putInbound(value: FirewallInbound[] | cdktf.IResolvable) {
    this._inbound.internalValue = value;
  }
  public resetInbound() {
    this._inbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound.internalValue;
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound = new FirewallOutboundList(this, "outbound", false);
  public get outbound() {
    return this._outbound;
  }
  public putOutbound(value: FirewallOutbound[] | cdktf.IResolvable) {
    this._outbound.internalValue = value;
  }
  public resetOutbound() {
    this._outbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      inbound_policy: cdktf.stringToTerraform(this._inboundPolicy),
      interfaces: cdktf.listMapper(cdktf.numberToTerraform, false)(this._interfaces),
      label: cdktf.stringToTerraform(this._label),
      linodes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._linodes),
      nodebalancers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._nodebalancers),
      outbound_policy: cdktf.stringToTerraform(this._outboundPolicy),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      inbound: cdktf.listMapper(firewallInboundToTerraform, true)(this._inbound.internalValue),
      outbound: cdktf.listMapper(firewallOutboundToTerraform, true)(this._outbound.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inbound_policy: {
        value: cdktf.stringToHclTerraform(this._inboundPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._interfaces),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linodes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._linodes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      nodebalancers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._nodebalancers),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      outbound_policy: {
        value: cdktf.stringToHclTerraform(this._outboundPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      inbound: {
        value: cdktf.listMapperHcl(firewallInboundToHclTerraform, true)(this._inbound.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallInboundList",
      },
      outbound: {
        value: cdktf.listMapperHcl(firewallOutboundToHclTerraform, true)(this._outbound.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallOutboundList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
