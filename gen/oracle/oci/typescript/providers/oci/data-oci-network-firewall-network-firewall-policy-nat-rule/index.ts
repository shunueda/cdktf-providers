// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkFirewallNetworkFirewallPolicyNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_nat_rule#nat_rule_name DataOciNetworkFirewallNetworkFirewallPolicyNatRule#nat_rule_name}
  */
  readonly natRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_nat_rule#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyNatRule#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyNatRuleCondition {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyNatRuleConditionToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyNatRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyNatRuleConditionToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyNatRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyNatRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyNatRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyNatRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_address - computed: true, optional: false, required: false
  public get destinationAddress() {
    return this.getListAttribute('destination_address');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getListAttribute('source_address');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyNatRuleConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyNatRuleConditionOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyNatRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyNatRulePosition {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyNatRulePositionToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyNatRulePosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyNatRulePositionToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyNatRulePosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyNatRulePositionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyNatRulePosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyNatRulePosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after_rule - computed: true, optional: false, required: false
  public get afterRule() {
    return this.getStringAttribute('after_rule');
  }

  // before_rule - computed: true, optional: false, required: false
  public get beforeRule() {
    return this.getStringAttribute('before_rule');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyNatRulePositionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyNatRulePositionOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyNatRulePositionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_nat_rule oci_network_firewall_network_firewall_policy_nat_rule}
*/
export class DataOciNetworkFirewallNetworkFirewallPolicyNatRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyNatRule to import
  * @param importFromId The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_firewall_network_firewall_policy_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_nat_rule oci_network_firewall_network_firewall_policy_nat_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkFirewallNetworkFirewallPolicyNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkFirewallNetworkFirewallPolicyNatRuleConfig) {
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
    this._natRuleName = config.natRuleName;
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataOciNetworkFirewallNetworkFirewallPolicyNatRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nat_rule_name - computed: false, optional: false, required: true
  private _natRuleName?: string; 
  public get natRuleName() {
    return this.getStringAttribute('nat_rule_name');
  }
  public set natRuleName(value: string) {
    this._natRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natRuleNameInput() {
    return this._natRuleName;
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

  // position - computed: true, optional: false, required: false
  private _position = new DataOciNetworkFirewallNetworkFirewallPolicyNatRulePositionList(this, "position", false);
  public get position() {
    return this._position;
  }

  // priority_order - computed: true, optional: false, required: false
  public get priorityOrder() {
    return this.getStringAttribute('priority_order');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nat_rule_name: cdktf.stringToTerraform(this._natRuleName),
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nat_rule_name: {
        value: cdktf.stringToHclTerraform(this._natRuleName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
