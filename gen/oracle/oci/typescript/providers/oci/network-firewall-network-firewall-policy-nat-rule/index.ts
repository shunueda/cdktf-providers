// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkFirewallNetworkFirewallPolicyNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#action NetworkFirewallNetworkFirewallPolicyNatRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#description NetworkFirewallNetworkFirewallPolicyNatRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#id NetworkFirewallNetworkFirewallPolicyNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#name NetworkFirewallNetworkFirewallPolicyNatRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyNatRule#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#type NetworkFirewallNetworkFirewallPolicyNatRule#type}
  */
  readonly type: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#condition NetworkFirewallNetworkFirewallPolicyNatRule#condition}
  */
  readonly condition: NetworkFirewallNetworkFirewallPolicyNatRuleCondition;
  /**
  * position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#position NetworkFirewallNetworkFirewallPolicyNatRule#position}
  */
  readonly position?: NetworkFirewallNetworkFirewallPolicyNatRulePosition;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#timeouts NetworkFirewallNetworkFirewallPolicyNatRule#timeouts}
  */
  readonly timeouts?: NetworkFirewallNetworkFirewallPolicyNatRuleTimeouts;
}
export interface NetworkFirewallNetworkFirewallPolicyNatRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#destination_address NetworkFirewallNetworkFirewallPolicyNatRule#destination_address}
  */
  readonly destinationAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#service NetworkFirewallNetworkFirewallPolicyNatRule#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#source_address NetworkFirewallNetworkFirewallPolicyNatRule#source_address}
  */
  readonly sourceAddress?: string[];
}

export function networkFirewallNetworkFirewallPolicyNatRuleConditionToTerraform(struct?: NetworkFirewallNetworkFirewallPolicyNatRuleConditionOutputReference | NetworkFirewallNetworkFirewallPolicyNatRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddress),
    service: cdktf.stringToTerraform(struct!.service),
    source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddress),
  }
}


export function networkFirewallNetworkFirewallPolicyNatRuleConditionToHclTerraform(struct?: NetworkFirewallNetworkFirewallPolicyNatRuleConditionOutputReference | NetworkFirewallNetworkFirewallPolicyNatRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFirewallNetworkFirewallPolicyNatRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkFirewallNetworkFirewallPolicyNatRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFirewallNetworkFirewallPolicyNatRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationAddress = undefined;
      this._service = undefined;
      this._sourceAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationAddress = value.destinationAddress;
      this._service = value.service;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string[]; 
  public get destinationAddress() {
    return this.getListAttribute('destination_address');
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return this.getListAttribute('source_address');
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
}
export interface NetworkFirewallNetworkFirewallPolicyNatRulePosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#after_rule NetworkFirewallNetworkFirewallPolicyNatRule#after_rule}
  */
  readonly afterRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#before_rule NetworkFirewallNetworkFirewallPolicyNatRule#before_rule}
  */
  readonly beforeRule?: string;
}

export function networkFirewallNetworkFirewallPolicyNatRulePositionToTerraform(struct?: NetworkFirewallNetworkFirewallPolicyNatRulePositionOutputReference | NetworkFirewallNetworkFirewallPolicyNatRulePosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_rule: cdktf.stringToTerraform(struct!.afterRule),
    before_rule: cdktf.stringToTerraform(struct!.beforeRule),
  }
}


export function networkFirewallNetworkFirewallPolicyNatRulePositionToHclTerraform(struct?: NetworkFirewallNetworkFirewallPolicyNatRulePositionOutputReference | NetworkFirewallNetworkFirewallPolicyNatRulePosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_rule: {
      value: cdktf.stringToHclTerraform(struct!.afterRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    before_rule: {
      value: cdktf.stringToHclTerraform(struct!.beforeRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFirewallNetworkFirewallPolicyNatRulePositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkFirewallNetworkFirewallPolicyNatRulePosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterRule = this._afterRule;
    }
    if (this._beforeRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeRule = this._beforeRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFirewallNetworkFirewallPolicyNatRulePosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterRule = undefined;
      this._beforeRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterRule = value.afterRule;
      this._beforeRule = value.beforeRule;
    }
  }

  // after_rule - computed: true, optional: true, required: false
  private _afterRule?: string; 
  public get afterRule() {
    return this.getStringAttribute('after_rule');
  }
  public set afterRule(value: string) {
    this._afterRule = value;
  }
  public resetAfterRule() {
    this._afterRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterRuleInput() {
    return this._afterRule;
  }

  // before_rule - computed: true, optional: true, required: false
  private _beforeRule?: string; 
  public get beforeRule() {
    return this.getStringAttribute('before_rule');
  }
  public set beforeRule(value: string) {
    this._beforeRule = value;
  }
  public resetBeforeRule() {
    this._beforeRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeRuleInput() {
    return this._beforeRule;
  }
}
export interface NetworkFirewallNetworkFirewallPolicyNatRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#create NetworkFirewallNetworkFirewallPolicyNatRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#delete NetworkFirewallNetworkFirewallPolicyNatRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#update NetworkFirewallNetworkFirewallPolicyNatRule#update}
  */
  readonly update?: string;
}

export function networkFirewallNetworkFirewallPolicyNatRuleTimeoutsToTerraform(struct?: NetworkFirewallNetworkFirewallPolicyNatRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function networkFirewallNetworkFirewallPolicyNatRuleTimeoutsToHclTerraform(struct?: NetworkFirewallNetworkFirewallPolicyNatRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFirewallNetworkFirewallPolicyNatRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkFirewallNetworkFirewallPolicyNatRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFirewallNetworkFirewallPolicyNatRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule oci_network_firewall_network_firewall_policy_nat_rule}
*/
export class NetworkFirewallNetworkFirewallPolicyNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyNatRule to import
  * @param importFromId The id of the existing NetworkFirewallNetworkFirewallPolicyNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_firewall_network_firewall_policy_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/network_firewall_network_firewall_policy_nat_rule oci_network_firewall_network_firewall_policy_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkFirewallNetworkFirewallPolicyNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkFirewallNetworkFirewallPolicyNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_firewall_network_firewall_policy_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._id = config.id;
    this._name = config.name;
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
    this._type = config.type;
    this._condition.internalValue = config.condition;
    this._position.internalValue = config.position;
    this._timeouts.internalValue = config.timeouts;
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

  // network_firewall_policy_id - computed: false, optional: false, required: true
  private _networkFirewallPolicyId?: string; 
  public get networkFirewallPolicyId() {
    return this.getStringAttribute('network_firewall_policy_id');
  }
  public set networkFirewallPolicyId(value: string) {
    this._networkFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallPolicyIdInput() {
    return this._networkFirewallPolicyId;
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // priority_order - computed: true, optional: false, required: false
  public get priorityOrder() {
    return this.getStringAttribute('priority_order');
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

  // condition - computed: false, optional: false, required: true
  private _condition = new NetworkFirewallNetworkFirewallPolicyNatRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NetworkFirewallNetworkFirewallPolicyNatRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new NetworkFirewallNetworkFirewallPolicyNatRulePositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: NetworkFirewallNetworkFirewallPolicyNatRulePosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkFirewallNetworkFirewallPolicyNatRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkFirewallNetworkFirewallPolicyNatRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
      type: cdktf.stringToTerraform(this._type),
      condition: networkFirewallNetworkFirewallPolicyNatRuleConditionToTerraform(this._condition.internalValue),
      position: networkFirewallNetworkFirewallPolicyNatRulePositionToTerraform(this._position.internalValue),
      timeouts: networkFirewallNetworkFirewallPolicyNatRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      network_firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._networkFirewallPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: networkFirewallNetworkFirewallPolicyNatRuleConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkFirewallNetworkFirewallPolicyNatRuleConditionList",
      },
      position: {
        value: networkFirewallNetworkFirewallPolicyNatRulePositionToHclTerraform(this._position.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkFirewallNetworkFirewallPolicyNatRulePositionList",
      },
      timeouts: {
        value: networkFirewallNetworkFirewallPolicyNatRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkFirewallNetworkFirewallPolicyNatRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
