// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule action. (ALLOW, DROP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#action FirewallRule#action}
  */
  readonly action: string;
  /**
  * Rule description. (0 to 100 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#description FirewallRule#description}
  */
  readonly description?: string;
  /**
  * Destination ip addresses list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#destination_addresses_ipv4 FirewallRule#destination_addresses_ipv4}
  */
  readonly destinationAddressesIpv4: string[];
  /**
  * Rule direction. (IN, OUT, IN_OUT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#direction FirewallRule#direction}
  */
  readonly direction: string;
  /**
  * Rule enabled state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#enabled FirewallRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Firewall id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#firewall_id FirewallRule#firewall_id}
  */
  readonly firewallId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#id FirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location Rule id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#location_rule_id FirewallRule#location_rule_id}
  */
  readonly locationRuleId?: string;
  /**
  * Rule location type. (FIRST, BEFORE, AFTER, LAST)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#rule_location_type FirewallRule#rule_location_type}
  */
  readonly ruleLocationType?: string;
  /**
  * Source ip addresses list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#source_addresses_ipv4 FirewallRule#source_addresses_ipv4}
  */
  readonly sourceAddressesIpv4: string[];
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#service FirewallRule#service}
  */
  readonly service: FirewallRuleService[] | cdktf.IResolvable;
}
export interface FirewallRuleService {
  /**
  * Protocol type. (TCP, UDP, ICMP, ALL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#type FirewallRule#type}
  */
  readonly type: string;
  /**
  * Port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#value FirewallRule#value}
  */
  readonly value?: string;
}

export function firewallRuleServiceToTerraform(struct?: FirewallRuleService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function firewallRuleServiceToHclTerraform(struct?: FirewallRuleService | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallRuleServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallRuleService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallRuleService | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FirewallRuleServiceList extends cdktf.ComplexList {
  public internalValue? : FirewallRuleService[] | cdktf.IResolvable

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
  public get(index: number): FirewallRuleServiceOutputReference {
    return new FirewallRuleServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule samsungcloudplatform_firewall_rule}
*/
export class FirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallRule to import
  * @param importFromId The id of the existing FirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_rule samsungcloudplatform_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._destinationAddressesIpv4 = config.destinationAddressesIpv4;
    this._direction = config.direction;
    this._enabled = config.enabled;
    this._firewallId = config.firewallId;
    this._id = config.id;
    this._locationRuleId = config.locationRuleId;
    this._ruleLocationType = config.ruleLocationType;
    this._sourceAddressesIpv4 = config.sourceAddressesIpv4;
    this._service.internalValue = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_addresses_ipv4 - computed: false, optional: false, required: true
  private _destinationAddressesIpv4?: string[]; 
  public get destinationAddressesIpv4() {
    return this.getListAttribute('destination_addresses_ipv4');
  }
  public set destinationAddressesIpv4(value: string[]) {
    this._destinationAddressesIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesIpv4Input() {
    return this._destinationAddressesIpv4;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // firewall_id - computed: false, optional: false, required: true
  private _firewallId?: string; 
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }
  public set firewallId(value: string) {
    this._firewallId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
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

  // location_rule_id - computed: false, optional: true, required: false
  private _locationRuleId?: string; 
  public get locationRuleId() {
    return this.getStringAttribute('location_rule_id');
  }
  public set locationRuleId(value: string) {
    this._locationRuleId = value;
  }
  public resetLocationRuleId() {
    this._locationRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationRuleIdInput() {
    return this._locationRuleId;
  }

  // rule_location_type - computed: false, optional: true, required: false
  private _ruleLocationType?: string; 
  public get ruleLocationType() {
    return this.getStringAttribute('rule_location_type');
  }
  public set ruleLocationType(value: string) {
    this._ruleLocationType = value;
  }
  public resetRuleLocationType() {
    this._ruleLocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleLocationTypeInput() {
    return this._ruleLocationType;
  }

  // source_addresses_ipv4 - computed: false, optional: false, required: true
  private _sourceAddressesIpv4?: string[]; 
  public get sourceAddressesIpv4() {
    return this.getListAttribute('source_addresses_ipv4');
  }
  public set sourceAddressesIpv4(value: string[]) {
    this._sourceAddressesIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesIpv4Input() {
    return this._sourceAddressesIpv4;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // service - computed: false, optional: false, required: true
  private _service = new FirewallRuleServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: FirewallRuleService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      destination_addresses_ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationAddressesIpv4),
      direction: cdktf.stringToTerraform(this._direction),
      enabled: cdktf.booleanToTerraform(this._enabled),
      firewall_id: cdktf.stringToTerraform(this._firewallId),
      id: cdktf.stringToTerraform(this._id),
      location_rule_id: cdktf.stringToTerraform(this._locationRuleId),
      rule_location_type: cdktf.stringToTerraform(this._ruleLocationType),
      source_addresses_ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceAddressesIpv4),
      service: cdktf.listMapper(firewallRuleServiceToTerraform, true)(this._service.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_addresses_ipv4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationAddressesIpv4),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_id: {
        value: cdktf.stringToHclTerraform(this._firewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_rule_id: {
        value: cdktf.stringToHclTerraform(this._locationRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_location_type: {
        value: cdktf.stringToHclTerraform(this._ruleLocationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_addresses_ipv4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceAddressesIpv4),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service: {
        value: cdktf.listMapperHcl(firewallRuleServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallRuleServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
