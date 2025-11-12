// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#tunnel_inspection_rule_name DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#tunnel_inspection_rule_name}
  */
  readonly tunnelInspectionRuleName: string;
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition | undefined) {
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

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getListAttribute('source_address');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition | undefined) {
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

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileToHclTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // must_return_traffic_to_source - computed: true, optional: false, required: false
  public get mustReturnTrafficToSource() {
    return this.getBooleanAttribute('must_return_traffic_to_source');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule oci_network_firewall_network_firewall_policy_tunnel_inspection_rule}
*/
export class DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_tunnel_inspection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule to import
  * @param importFromId The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_firewall_network_firewall_policy_tunnel_inspection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/network_firewall_network_firewall_policy_tunnel_inspection_rule oci_network_firewall_network_firewall_policy_tunnel_inspection_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_firewall_network_firewall_policy_tunnel_inspection_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
    this._tunnelInspectionRuleName = config.tunnelInspectionRuleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
  private _position = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList(this, "position", false);
  public get position() {
    return this._position;
  }

  // priority_order - computed: true, optional: false, required: false
  public get priorityOrder() {
    return this.getStringAttribute('priority_order');
  }

  // profile - computed: true, optional: false, required: false
  private _profile = new DataOciNetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // tunnel_inspection_rule_name - computed: false, optional: false, required: true
  private _tunnelInspectionRuleName?: string; 
  public get tunnelInspectionRuleName() {
    return this.getStringAttribute('tunnel_inspection_rule_name');
  }
  public set tunnelInspectionRuleName(value: string) {
    this._tunnelInspectionRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInspectionRuleNameInput() {
    return this._tunnelInspectionRuleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
      tunnel_inspection_rule_name: cdktf.stringToTerraform(this._tunnelInspectionRuleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._networkFirewallPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_inspection_rule_name: {
        value: cdktf.stringToHclTerraform(this._tunnelInspectionRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
