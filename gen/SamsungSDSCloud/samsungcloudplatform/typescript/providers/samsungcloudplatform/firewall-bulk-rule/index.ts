// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallBulkRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bulk rule location id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#bulk_rule_location_id FirewallBulkRule#bulk_rule_location_id}
  */
  readonly bulkRuleLocationId?: string;
  /**
  * Bulk rule location type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#bulk_rule_location_type FirewallBulkRule#bulk_rule_location_type}
  */
  readonly bulkRuleLocationType: string;
  /**
  * Firewall id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#firewall_id FirewallBulkRule#firewall_id}
  */
  readonly firewallId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#id FirewallBulkRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#rule FirewallBulkRule#rule}
  */
  readonly rule: FirewallBulkRuleRule[] | cdktf.IResolvable;
}
export interface FirewallBulkRuleRuleService {
  /**
  * Protocol type. (TCP, UDP, ICMP, ALL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#type FirewallBulkRule#type}
  */
  readonly type: string;
  /**
  * Port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#value FirewallBulkRule#value}
  */
  readonly value?: string;
}

export function firewallBulkRuleRuleServiceToTerraform(struct?: FirewallBulkRuleRuleService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function firewallBulkRuleRuleServiceToHclTerraform(struct?: FirewallBulkRuleRuleService | cdktf.IResolvable): any {
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

export class FirewallBulkRuleRuleServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallBulkRuleRuleService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallBulkRuleRuleService | cdktf.IResolvable | undefined) {
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

export class FirewallBulkRuleRuleServiceList extends cdktf.ComplexList {
  public internalValue? : FirewallBulkRuleRuleService[] | cdktf.IResolvable

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
  public get(index: number): FirewallBulkRuleRuleServiceOutputReference {
    return new FirewallBulkRuleRuleServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallBulkRuleRule {
  /**
  * Rule action. (ALLOW, DROP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#action FirewallBulkRule#action}
  */
  readonly action: string;
  /**
  * Rule description. (0 to 100 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#description FirewallBulkRule#description}
  */
  readonly description?: string;
  /**
  * Destination ip addresses cidr list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#destination_addresses_ipv4 FirewallBulkRule#destination_addresses_ipv4}
  */
  readonly destinationAddressesIpv4: string[];
  /**
  * Rule direction. (IN, OUT, IN_OUT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#direction FirewallBulkRule#direction}
  */
  readonly direction: string;
  /**
  * Rule enabled state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#enabled FirewallBulkRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Source ip addresses cidr list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#source_addresses_ipv4 FirewallBulkRule#source_addresses_ipv4}
  */
  readonly sourceAddressesIpv4: string[];
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#service FirewallBulkRule#service}
  */
  readonly service: FirewallBulkRuleRuleService[] | cdktf.IResolvable;
}

export function firewallBulkRuleRuleToTerraform(struct?: FirewallBulkRuleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses_ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddressesIpv4),
    direction: cdktf.stringToTerraform(struct!.direction),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    source_addresses_ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddressesIpv4),
    service: cdktf.listMapper(firewallBulkRuleRuleServiceToTerraform, true)(struct!.service),
  }
}


export function firewallBulkRuleRuleToHclTerraform(struct?: FirewallBulkRuleRule | cdktf.IResolvable): any {
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
    destination_addresses_ipv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddressesIpv4),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_addresses_ipv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddressesIpv4),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service: {
      value: cdktf.listMapperHcl(firewallBulkRuleRuleServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallBulkRuleRuleServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallBulkRuleRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallBulkRuleRule | cdktf.IResolvable | undefined {
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
    if (this._destinationAddressesIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressesIpv4 = this._destinationAddressesIpv4;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sourceAddressesIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressesIpv4 = this._sourceAddressesIpv4;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallBulkRuleRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._destinationAddressesIpv4 = undefined;
      this._direction = undefined;
      this._enabled = undefined;
      this._sourceAddressesIpv4 = undefined;
      this._service.internalValue = undefined;
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
      this._destinationAddressesIpv4 = value.destinationAddressesIpv4;
      this._direction = value.direction;
      this._enabled = value.enabled;
      this._sourceAddressesIpv4 = value.sourceAddressesIpv4;
      this._service.internalValue = value.service;
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

  // service - computed: false, optional: false, required: true
  private _service = new FirewallBulkRuleRuleServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: FirewallBulkRuleRuleService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}

export class FirewallBulkRuleRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallBulkRuleRule[] | cdktf.IResolvable

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
  public get(index: number): FirewallBulkRuleRuleOutputReference {
    return new FirewallBulkRuleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule samsungcloudplatform_firewall_bulk_rule}
*/
export class FirewallBulkRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_firewall_bulk_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallBulkRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallBulkRule to import
  * @param importFromId The id of the existing FirewallBulkRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallBulkRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_firewall_bulk_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/firewall_bulk_rule samsungcloudplatform_firewall_bulk_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallBulkRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallBulkRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_firewall_bulk_rule',
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
    this._bulkRuleLocationId = config.bulkRuleLocationId;
    this._bulkRuleLocationType = config.bulkRuleLocationType;
    this._firewallId = config.firewallId;
    this._id = config.id;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bulk_rule_location_id - computed: false, optional: true, required: false
  private _bulkRuleLocationId?: string; 
  public get bulkRuleLocationId() {
    return this.getStringAttribute('bulk_rule_location_id');
  }
  public set bulkRuleLocationId(value: string) {
    this._bulkRuleLocationId = value;
  }
  public resetBulkRuleLocationId() {
    this._bulkRuleLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkRuleLocationIdInput() {
    return this._bulkRuleLocationId;
  }

  // bulk_rule_location_type - computed: false, optional: false, required: true
  private _bulkRuleLocationType?: string; 
  public get bulkRuleLocationType() {
    return this.getStringAttribute('bulk_rule_location_type');
  }
  public set bulkRuleLocationType(value: string) {
    this._bulkRuleLocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkRuleLocationTypeInput() {
    return this._bulkRuleLocationType;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new FirewallBulkRuleRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FirewallBulkRuleRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
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
      bulk_rule_location_id: cdktf.stringToTerraform(this._bulkRuleLocationId),
      bulk_rule_location_type: cdktf.stringToTerraform(this._bulkRuleLocationType),
      firewall_id: cdktf.stringToTerraform(this._firewallId),
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.listMapper(firewallBulkRuleRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bulk_rule_location_id: {
        value: cdktf.stringToHclTerraform(this._bulkRuleLocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bulk_rule_location_type: {
        value: cdktf.stringToHclTerraform(this._bulkRuleLocationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      rule: {
        value: cdktf.listMapperHcl(firewallBulkRuleRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallBulkRuleRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
