// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNatStaticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable management of rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#configure_rules_singly SecurityNatStatic#configure_rules_singly}
  */
  readonly configureRulesSingly?: boolean | cdktf.IResolvable;
  /**
  * Text description of static nat rule-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#description SecurityNatStatic#description}
  */
  readonly description?: string;
  /**
  * Static nat rule-set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#name SecurityNatStatic#name}
  */
  readonly name: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#from SecurityNatStatic#from}
  */
  readonly from: SecurityNatStaticFrom;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#rule SecurityNatStatic#rule}
  */
  readonly rule?: SecurityNatStaticRule[] | cdktf.IResolvable;
}
export interface SecurityNatStaticFrom {
  /**
  * Type of traffice source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#type SecurityNatStatic#type}
  */
  readonly type: string;
  /**
  * Name of interface, routing-instance or zone for traffic source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#value SecurityNatStatic#value}
  */
  readonly value: string[];
}

export function securityNatStaticFromToTerraform(struct?: SecurityNatStaticFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function securityNatStaticFromToHclTerraform(struct?: SecurityNatStaticFrom | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNatStaticFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNatStaticFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityNatStaticFrom | cdktf.IResolvable | undefined) {
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityNatStaticRuleThen {
  /**
  * Port or lower limit of port range to mapped port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#mapped_port SecurityNatStatic#mapped_port}
  */
  readonly mappedPort?: number;
  /**
  * Port range upper limit to mapped port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#mapped_port_to SecurityNatStatic#mapped_port_to}
  */
  readonly mappedPortTo?: number;
  /**
  * CIDR or address from address book to prefix static nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#prefix SecurityNatStatic#prefix}
  */
  readonly prefix?: string;
  /**
  * Name of routing instance to switch instance with nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#routing_instance SecurityNatStatic#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Type of static nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#type SecurityNatStatic#type}
  */
  readonly type: string;
}

export function securityNatStaticRuleThenToTerraform(struct?: SecurityNatStaticRuleThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapped_port: cdktf.numberToTerraform(struct!.mappedPort),
    mapped_port_to: cdktf.numberToTerraform(struct!.mappedPortTo),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securityNatStaticRuleThenToHclTerraform(struct?: SecurityNatStaticRuleThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapped_port: {
      value: cdktf.numberToHclTerraform(struct!.mappedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mapped_port_to: {
      value: cdktf.numberToHclTerraform(struct!.mappedPortTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNatStaticRuleThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNatStaticRuleThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedPort = this._mappedPort;
    }
    if (this._mappedPortTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedPortTo = this._mappedPortTo;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNatStaticRuleThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappedPort = undefined;
      this._mappedPortTo = undefined;
      this._prefix = undefined;
      this._routingInstance = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappedPort = value.mappedPort;
      this._mappedPortTo = value.mappedPortTo;
      this._prefix = value.prefix;
      this._routingInstance = value.routingInstance;
      this._type = value.type;
    }
  }

  // mapped_port - computed: false, optional: true, required: false
  private _mappedPort?: number; 
  public get mappedPort() {
    return this.getNumberAttribute('mapped_port');
  }
  public set mappedPort(value: number) {
    this._mappedPort = value;
  }
  public resetMappedPort() {
    this._mappedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedPortInput() {
    return this._mappedPort;
  }

  // mapped_port_to - computed: false, optional: true, required: false
  private _mappedPortTo?: number; 
  public get mappedPortTo() {
    return this.getNumberAttribute('mapped_port_to');
  }
  public set mappedPortTo(value: number) {
    this._mappedPortTo = value;
  }
  public resetMappedPortTo() {
    this._mappedPortTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedPortToInput() {
    return this._mappedPortTo;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SecurityNatStaticRule {
  /**
  * CIDR destination address to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#destination_address SecurityNatStatic#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Destination address from address book to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#destination_address_name SecurityNatStatic#destination_address_name}
  */
  readonly destinationAddressName?: string;
  /**
  * Destination port or lower limit of port range to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#destination_port SecurityNatStatic#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Port range upper limit to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#destination_port_to SecurityNatStatic#destination_port_to}
  */
  readonly destinationPortTo?: number;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#name SecurityNatStatic#name}
  */
  readonly name: string;
  /**
  * CIDR source address to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#source_address SecurityNatStatic#source_address}
  */
  readonly sourceAddress?: string[];
  /**
  * Source address from address book to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#source_address_name SecurityNatStatic#source_address_name}
  */
  readonly sourceAddressName?: string[];
  /**
  * Source port to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#source_port SecurityNatStatic#source_port}
  */
  readonly sourcePort?: string[];
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#then SecurityNatStatic#then}
  */
  readonly then?: SecurityNatStaticRuleThen;
}

export function securityNatStaticRuleToTerraform(struct?: SecurityNatStaticRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_address: cdktf.stringToTerraform(struct!.destinationAddress),
    destination_address_name: cdktf.stringToTerraform(struct!.destinationAddressName),
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    destination_port_to: cdktf.numberToTerraform(struct!.destinationPortTo),
    name: cdktf.stringToTerraform(struct!.name),
    source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddress),
    source_address_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddressName),
    source_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePort),
    then: securityNatStaticRuleThenToTerraform(struct!.then),
  }
}


export function securityNatStaticRuleToHclTerraform(struct?: SecurityNatStaticRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_address: {
      value: cdktf.stringToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_address_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationAddressName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_port_to: {
      value: cdktf.numberToHclTerraform(struct!.destinationPortTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_address_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddressName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePort),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    then: {
      value: securityNatStaticRuleThenToHclTerraform(struct!.then),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityNatStaticRuleThen",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNatStaticRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityNatStaticRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationAddressName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressName = this._destinationAddressName;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._destinationPortTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortTo = this._destinationPortTo;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceAddressName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressName = this._sourceAddressName;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._then?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNatStaticRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddress = undefined;
      this._destinationAddressName = undefined;
      this._destinationPort = undefined;
      this._destinationPortTo = undefined;
      this._name = undefined;
      this._sourceAddress = undefined;
      this._sourceAddressName = undefined;
      this._sourcePort = undefined;
      this._then.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddress = value.destinationAddress;
      this._destinationAddressName = value.destinationAddressName;
      this._destinationPort = value.destinationPort;
      this._destinationPortTo = value.destinationPortTo;
      this._name = value.name;
      this._sourceAddress = value.sourceAddress;
      this._sourceAddressName = value.sourceAddressName;
      this._sourcePort = value.sourcePort;
      this._then.internalValue = value.then;
    }
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_address_name - computed: false, optional: true, required: false
  private _destinationAddressName?: string; 
  public get destinationAddressName() {
    return this.getStringAttribute('destination_address_name');
  }
  public set destinationAddressName(value: string) {
    this._destinationAddressName = value;
  }
  public resetDestinationAddressName() {
    this._destinationAddressName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressNameInput() {
    return this._destinationAddressName;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_port_to - computed: false, optional: true, required: false
  private _destinationPortTo?: number; 
  public get destinationPortTo() {
    return this.getNumberAttribute('destination_port_to');
  }
  public set destinationPortTo(value: number) {
    this._destinationPortTo = value;
  }
  public resetDestinationPortTo() {
    this._destinationPortTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortToInput() {
    return this._destinationPortTo;
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

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address'));
  }
  public set sourceAddress(value: string[]) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_name - computed: false, optional: true, required: false
  private _sourceAddressName?: string[]; 
  public get sourceAddressName() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address_name'));
  }
  public set sourceAddressName(value: string[]) {
    this._sourceAddressName = value;
  }
  public resetSourceAddressName() {
    this._sourceAddressName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressNameInput() {
    return this._sourceAddressName;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string[]; 
  public get sourcePort() {
    return cdktf.Fn.tolist(this.getListAttribute('source_port'));
  }
  public set sourcePort(value: string[]) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // then - computed: false, optional: true, required: false
  private _then = new SecurityNatStaticRuleThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: SecurityNatStaticRuleThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }
}

export class SecurityNatStaticRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityNatStaticRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityNatStaticRuleOutputReference {
    return new SecurityNatStaticRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static junos_security_nat_static}
*/
export class SecurityNatStatic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_nat_static";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNatStatic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNatStatic to import
  * @param importFromId The id of the existing SecurityNatStatic that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNatStatic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_nat_static", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static junos_security_nat_static} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNatStaticConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityNatStaticConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_nat_static',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configureRulesSingly = config.configureRulesSingly;
    this._description = config.description;
    this._name = config.name;
    this._from.internalValue = config.from;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configure_rules_singly - computed: false, optional: true, required: false
  private _configureRulesSingly?: boolean | cdktf.IResolvable; 
  public get configureRulesSingly() {
    return this.getBooleanAttribute('configure_rules_singly');
  }
  public set configureRulesSingly(value: boolean | cdktf.IResolvable) {
    this._configureRulesSingly = value;
  }
  public resetConfigureRulesSingly() {
    this._configureRulesSingly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureRulesSinglyInput() {
    return this._configureRulesSingly;
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

  // from - computed: false, optional: false, required: true
  private _from = new SecurityNatStaticFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: SecurityNatStaticFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new SecurityNatStaticRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityNatStaticRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configure_rules_singly: cdktf.booleanToTerraform(this._configureRulesSingly),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      from: securityNatStaticFromToTerraform(this._from.internalValue),
      rule: cdktf.listMapper(securityNatStaticRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configure_rules_singly: {
        value: cdktf.booleanToHclTerraform(this._configureRulesSingly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      from: {
        value: securityNatStaticFromToHclTerraform(this._from.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityNatStaticFrom",
      },
      rule: {
        value: cdktf.listMapperHcl(securityNatStaticRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityNatStaticRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
