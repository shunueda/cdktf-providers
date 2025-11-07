// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNatStaticRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIDR destination address to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#destination_address SecurityNatStaticRuleA#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Destination address from address book to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#destination_address_name SecurityNatStaticRuleA#destination_address_name}
  */
  readonly destinationAddressName?: string;
  /**
  * Destination port or lower limit of port range to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#destination_port SecurityNatStaticRuleA#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Port range upper limit to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#destination_port_to SecurityNatStaticRuleA#destination_port_to}
  */
  readonly destinationPortTo?: number;
  /**
  * Static Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#name SecurityNatStaticRuleA#name}
  */
  readonly name: string;
  /**
  * Static nat rule-set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#rule_set SecurityNatStaticRuleA#rule_set}
  */
  readonly ruleSet: string;
  /**
  * CIDR source address to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#source_address SecurityNatStaticRuleA#source_address}
  */
  readonly sourceAddress?: string[];
  /**
  * Source address from address book to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#source_address_name SecurityNatStaticRuleA#source_address_name}
  */
  readonly sourceAddressName?: string[];
  /**
  * Source port to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#source_port SecurityNatStaticRuleA#source_port}
  */
  readonly sourcePort?: string[];
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#then SecurityNatStaticRuleA#then}
  */
  readonly then?: SecurityNatStaticRuleThenA;
}
export interface SecurityNatStaticRuleThenA {
  /**
  * Port or lower limit of port range to mapped port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#mapped_port SecurityNatStaticRuleA#mapped_port}
  */
  readonly mappedPort?: number;
  /**
  * Port range upper limit to mapped port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#mapped_port_to SecurityNatStaticRuleA#mapped_port_to}
  */
  readonly mappedPortTo?: number;
  /**
  * CIDR or address from address book to prefix static nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#prefix SecurityNatStaticRuleA#prefix}
  */
  readonly prefix?: string;
  /**
  * Name of routing instance to switch instance with nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#routing_instance SecurityNatStaticRuleA#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Type of static nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#type SecurityNatStaticRuleA#type}
  */
  readonly type: string;
}

export function securityNatStaticRuleThenAToTerraform(struct?: SecurityNatStaticRuleThenA | cdktf.IResolvable): any {
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


export function securityNatStaticRuleThenAToHclTerraform(struct?: SecurityNatStaticRuleThenA | cdktf.IResolvable): any {
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

export class SecurityNatStaticRuleThenAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNatStaticRuleThenA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityNatStaticRuleThenA | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule junos_security_nat_static_rule}
*/
export class SecurityNatStaticRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_nat_static_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNatStaticRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNatStaticRuleA to import
  * @param importFromId The id of the existing SecurityNatStaticRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNatStaticRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_nat_static_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_nat_static_rule junos_security_nat_static_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNatStaticRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityNatStaticRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_nat_static_rule',
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
    this._destinationAddress = config.destinationAddress;
    this._destinationAddressName = config.destinationAddressName;
    this._destinationPort = config.destinationPort;
    this._destinationPortTo = config.destinationPortTo;
    this._name = config.name;
    this._ruleSet = config.ruleSet;
    this._sourceAddress = config.sourceAddress;
    this._sourceAddressName = config.sourceAddressName;
    this._sourcePort = config.sourcePort;
    this._then.internalValue = config.then;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule_set - computed: false, optional: false, required: true
  private _ruleSet?: string; 
  public get ruleSet() {
    return this.getStringAttribute('rule_set');
  }
  public set ruleSet(value: string) {
    this._ruleSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet;
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
  private _then = new SecurityNatStaticRuleThenAOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: SecurityNatStaticRuleThenA) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_address: cdktf.stringToTerraform(this._destinationAddress),
      destination_address_name: cdktf.stringToTerraform(this._destinationAddressName),
      destination_port: cdktf.numberToTerraform(this._destinationPort),
      destination_port_to: cdktf.numberToTerraform(this._destinationPortTo),
      name: cdktf.stringToTerraform(this._name),
      rule_set: cdktf.stringToTerraform(this._ruleSet),
      source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceAddress),
      source_address_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceAddressName),
      source_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourcePort),
      then: securityNatStaticRuleThenAToTerraform(this._then.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_address: {
        value: cdktf.stringToHclTerraform(this._destinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_address_name: {
        value: cdktf.stringToHclTerraform(this._destinationAddressName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktf.numberToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination_port_to: {
        value: cdktf.numberToHclTerraform(this._destinationPortTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set: {
        value: cdktf.stringToHclTerraform(this._ruleSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_address_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceAddressName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourcePort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      then: {
        value: securityNatStaticRuleThenAToHclTerraform(this._then.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityNatStaticRuleThenA",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
