// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNatSourceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text description of rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#description SecurityNatSourceA#description}
  */
  readonly description?: string;
  /**
  * Source nat rule-set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#name SecurityNatSourceA#name}
  */
  readonly name: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#from SecurityNatSourceA#from}
  */
  readonly from: SecurityNatSourceFrom;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#rule SecurityNatSourceA#rule}
  */
  readonly rule?: SecurityNatSourceRule[] | cdktf.IResolvable;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#to SecurityNatSourceA#to}
  */
  readonly to: SecurityNatSourceTo;
}
export interface SecurityNatSourceFrom {
  /**
  * Type of traffice source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#type SecurityNatSourceA#type}
  */
  readonly type: string;
  /**
  * Name of interface, routing-instance or zone for traffic source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#value SecurityNatSourceA#value}
  */
  readonly value: string[];
}

export function securityNatSourceFromToTerraform(struct?: SecurityNatSourceFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function securityNatSourceFromToHclTerraform(struct?: SecurityNatSourceFrom | cdktf.IResolvable): any {
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

export class SecurityNatSourceFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNatSourceFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityNatSourceFrom | cdktf.IResolvable | undefined) {
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
export interface SecurityNatSourceRuleMatch {
  /**
  * Application or application-set name to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#application SecurityNatSourceA#application}
  */
  readonly application?: string[];
  /**
  * CIDR destination address to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#destination_address SecurityNatSourceA#destination_address}
  */
  readonly destinationAddress?: string[];
  /**
  * Destination address from address book to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#destination_address_name SecurityNatSourceA#destination_address_name}
  */
  readonly destinationAddressName?: string[];
  /**
  * Destination port to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#destination_port SecurityNatSourceA#destination_port}
  */
  readonly destinationPort?: string[];
  /**
  * IP Protocol to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#protocol SecurityNatSourceA#protocol}
  */
  readonly protocol?: string[];
  /**
  * CIDR source address to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#source_address SecurityNatSourceA#source_address}
  */
  readonly sourceAddress?: string[];
  /**
  * Source address from address book to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#source_address_name SecurityNatSourceA#source_address_name}
  */
  readonly sourceAddressName?: string[];
  /**
  * Source port to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#source_port SecurityNatSourceA#source_port}
  */
  readonly sourcePort?: string[];
}

export function securityNatSourceRuleMatchToTerraform(struct?: SecurityNatSourceRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.application),
    destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddress),
    destination_address_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddressName),
    destination_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPort),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddress),
    source_address_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddressName),
    source_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePort),
  }
}


export function securityNatSourceRuleMatchToHclTerraform(struct?: SecurityNatSourceRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.application),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_address_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddressName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPort),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNatSourceRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNatSourceRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
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
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNatSourceRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._destinationAddress = undefined;
      this._destinationAddressName = undefined;
      this._destinationPort = undefined;
      this._protocol = undefined;
      this._sourceAddress = undefined;
      this._sourceAddressName = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._destinationAddress = value.destinationAddress;
      this._destinationAddressName = value.destinationAddressName;
      this._destinationPort = value.destinationPort;
      this._protocol = value.protocol;
      this._sourceAddress = value.sourceAddress;
      this._sourceAddressName = value.sourceAddressName;
      this._sourcePort = value.sourcePort;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string[]; 
  public get application() {
    return cdktf.Fn.tolist(this.getListAttribute('application'));
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

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string[]; 
  public get destinationAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address'));
  }
  public set destinationAddress(value: string[]) {
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
  private _destinationAddressName?: string[]; 
  public get destinationAddressName() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address_name'));
  }
  public set destinationAddressName(value: string[]) {
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
  private _destinationPort?: string[]; 
  public get destinationPort() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_port'));
  }
  public set destinationPort(value: string[]) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
}
export interface SecurityNatSourceRuleThen {
  /**
  * Name of source nat pool when type is pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#pool SecurityNatSourceA#pool}
  */
  readonly pool?: string;
  /**
  * Type of source nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#type SecurityNatSourceA#type}
  */
  readonly type: string;
}

export function securityNatSourceRuleThenToTerraform(struct?: SecurityNatSourceRuleThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool: cdktf.stringToTerraform(struct!.pool),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securityNatSourceRuleThenToHclTerraform(struct?: SecurityNatSourceRuleThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
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

export class SecurityNatSourceRuleThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNatSourceRuleThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNatSourceRuleThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pool = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pool = value.pool;
      this._type = value.type;
    }
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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
export interface SecurityNatSourceRule {
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#name SecurityNatSourceA#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#match SecurityNatSourceA#match}
  */
  readonly match?: SecurityNatSourceRuleMatch;
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#then SecurityNatSourceA#then}
  */
  readonly then?: SecurityNatSourceRuleThen;
}

export function securityNatSourceRuleToTerraform(struct?: SecurityNatSourceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    match: securityNatSourceRuleMatchToTerraform(struct!.match),
    then: securityNatSourceRuleThenToTerraform(struct!.then),
  }
}


export function securityNatSourceRuleToHclTerraform(struct?: SecurityNatSourceRule | cdktf.IResolvable): any {
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
    match: {
      value: securityNatSourceRuleMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityNatSourceRuleMatch",
    },
    then: {
      value: securityNatSourceRuleThenToHclTerraform(struct!.then),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityNatSourceRuleThen",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNatSourceRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityNatSourceRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._then?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNatSourceRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
      this._then.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._match.internalValue = value.match;
      this._then.internalValue = value.then;
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

  // match - computed: false, optional: true, required: false
  private _match = new SecurityNatSourceRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: SecurityNatSourceRuleMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then = new SecurityNatSourceRuleThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: SecurityNatSourceRuleThen) {
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

export class SecurityNatSourceRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityNatSourceRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityNatSourceRuleOutputReference {
    return new SecurityNatSourceRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityNatSourceTo {
  /**
  * Type of traffic destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#type SecurityNatSourceA#type}
  */
  readonly type: string;
  /**
  * Name of interface, routing-instance or zone for traffic destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#value SecurityNatSourceA#value}
  */
  readonly value: string[];
}

export function securityNatSourceToToTerraform(struct?: SecurityNatSourceTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function securityNatSourceToToHclTerraform(struct?: SecurityNatSourceTo | cdktf.IResolvable): any {
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

export class SecurityNatSourceToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNatSourceTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityNatSourceTo | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source junos_security_nat_source}
*/
export class SecurityNatSourceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_nat_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNatSourceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNatSourceA to import
  * @param importFromId The id of the existing SecurityNatSourceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNatSourceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_nat_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_nat_source junos_security_nat_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNatSourceAConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityNatSourceAConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_nat_source',
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
    this._description = config.description;
    this._name = config.name;
    this._from.internalValue = config.from;
    this._rule.internalValue = config.rule;
    this._to.internalValue = config.to;
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
  private _from = new SecurityNatSourceFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: SecurityNatSourceFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new SecurityNatSourceRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityNatSourceRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // to - computed: false, optional: false, required: true
  private _to = new SecurityNatSourceToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: SecurityNatSourceTo) {
    this._to.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      from: securityNatSourceFromToTerraform(this._from.internalValue),
      rule: cdktf.listMapper(securityNatSourceRuleToTerraform, true)(this._rule.internalValue),
      to: securityNatSourceToToTerraform(this._to.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: securityNatSourceFromToHclTerraform(this._from.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityNatSourceFrom",
      },
      rule: {
        value: cdktf.listMapperHcl(securityNatSourceRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityNatSourceRuleList",
      },
      to: {
        value: securityNatSourceToToHclTerraform(this._to.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityNatSourceTo",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
