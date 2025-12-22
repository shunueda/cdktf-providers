// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClusterNetworkFirewallRulesV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#cluster_id DataInstaclustrClusterNetworkFirewallRulesV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#id DataInstaclustrClusterNetworkFirewallRulesV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The status of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#status DataInstaclustrClusterNetworkFirewallRulesV2Instance#status}
  */
  readonly status?: string;
  /**
  * firewall_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#firewall_rule DataInstaclustrClusterNetworkFirewallRulesV2Instance#firewall_rule}
  */
  readonly firewallRule?: DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRule[] | cdktf.IResolvable;
}
export interface DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRule {
  /**
  * The reason (if needed) for the deferred status of the cluster network firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#deferred_reason DataInstaclustrClusterNetworkFirewallRulesV2Instance#deferred_reason}
  */
  readonly deferredReason?: string;
  /**
  * ID of the cluster network firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#id DataInstaclustrClusterNetworkFirewallRulesV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The network of the cluster network firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#network DataInstaclustrClusterNetworkFirewallRulesV2Instance#network}
  */
  readonly network?: string;
  /**
  * The type of firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#type DataInstaclustrClusterNetworkFirewallRulesV2Instance#type}
  */
  readonly type?: string;
}

export function dataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleToTerraform(struct?: DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deferred_reason: cdktf.stringToTerraform(struct!.deferredReason),
    id: cdktf.stringToTerraform(struct!.id),
    network: cdktf.stringToTerraform(struct!.network),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleToHclTerraform(struct?: DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deferred_reason: {
      value: cdktf.stringToHclTerraform(struct!.deferredReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
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

export class DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deferredReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.deferredReason = this._deferredReason;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deferredReason = undefined;
      this._id = undefined;
      this._network = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deferredReason = value.deferredReason;
      this._id = value.id;
      this._network = value.network;
      this._type = value.type;
    }
  }

  // deferred_reason - computed: true, optional: true, required: false
  private _deferredReason?: string; 
  public get deferredReason() {
    return this.getStringAttribute('deferred_reason');
  }
  public set deferredReason(value: string) {
    this._deferredReason = value;
  }
  public resetDeferredReason() {
    this._deferredReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferredReasonInput() {
    return this._deferredReason;
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRule[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleOutputReference {
    return new DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance instaclustr_cluster_network_firewall_rules_v2_instance}
*/
export class DataInstaclustrClusterNetworkFirewallRulesV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cluster_network_firewall_rules_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClusterNetworkFirewallRulesV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClusterNetworkFirewallRulesV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrClusterNetworkFirewallRulesV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClusterNetworkFirewallRulesV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cluster_network_firewall_rules_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/cluster_network_firewall_rules_v2_instance instaclustr_cluster_network_firewall_rules_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClusterNetworkFirewallRulesV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClusterNetworkFirewallRulesV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cluster_network_firewall_rules_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.39',
        providerVersionConstraint: '2.1.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._status = config.status;
    this._firewallRule.internalValue = config.firewallRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // firewall_rule - computed: false, optional: true, required: false
  private _firewallRule = new DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleList(this, "firewall_rule", false);
  public get firewallRule() {
    return this._firewallRule;
  }
  public putFirewallRule(value: DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRule[] | cdktf.IResolvable) {
    this._firewallRule.internalValue = value;
  }
  public resetFirewallRule() {
    this._firewallRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleInput() {
    return this._firewallRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      firewall_rule: cdktf.listMapper(dataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleToTerraform, true)(this._firewallRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_rule: {
        value: cdktf.listMapperHcl(dataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleToHclTerraform, true)(this._firewallRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClusterNetworkFirewallRulesV2InstanceFirewallRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
