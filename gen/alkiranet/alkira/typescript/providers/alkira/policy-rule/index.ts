// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#application_ids PolicyRule#application_ids}
  */
  readonly applicationIds?: number[];
  /**
  * The description of the policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#description PolicyRule#description}
  */
  readonly description?: string;
  /**
  * The dscp value can be `any` or between `0` to `63` inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#dscp PolicyRule#dscp}
  */
  readonly dscp: string;
  /**
  * A single destination IP as The match condition of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#dst_ip PolicyRule#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Destination ports that can take values: `any` or `1` to `65535`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#dst_ports PolicyRule#dst_ports}
  */
  readonly dstPorts?: string[];
  /**
  * The ID of prefix list as destination associated with the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#dst_prefix_list_id PolicyRule#dst_prefix_list_id}
  */
  readonly dstPrefixListId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#id PolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the `internet_application` associated with the rule. When an internet applciation is selected, destination IP and port will be the private IP and port of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#internet_application_id PolicyRule#internet_application_id}
  */
  readonly internetApplicationId?: number;
  /**
  * The name of the policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#name PolicyRule#name}
  */
  readonly name: string;
  /**
  * The following protocols are supported, `icmp`, `tcp`, `udp` or `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#protocol PolicyRule#protocol}
  */
  readonly protocol: string;
  /**
  * The action that is applied on matched traffic, either `ALLOW` or `DROP`. The default value is `ALLOW`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#rule_action PolicyRule#rule_action}
  */
  readonly ruleAction?: string;
  /**
  * Based on the flow collector IDs, flows observed would be collected and sent to configured destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#rule_action_flow_collector_ids PolicyRule#rule_action_flow_collector_ids}
  */
  readonly ruleActionFlowCollectorIds?: number[];
  /**
  * Based on the service IDs, traffic is routed to the specified services. For service chaining, both `service_pan` and `service_zscaler`'s IDs can be added here, but ID of `service_pan` must be by followed by ID of `service_zscaler`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#rule_action_service_ids PolicyRule#rule_action_service_ids}
  */
  readonly ruleActionServiceIds?: number[];
  /**
  * Based on the service type, traffic is routed to service of the given type. For service chaining, both PAN and ZIA service types can be selected but must follow order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#rule_action_service_types PolicyRule#rule_action_service_types}
  */
  readonly ruleActionServiceTypes?: string[];
  /**
  * A single source IP as The match condition of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#src_ip PolicyRule#src_ip}
  */
  readonly srcIp?: string;
  /**
  * Source ports that can take values: `any` or `1` to `65535`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#src_ports PolicyRule#src_ports}
  */
  readonly srcPorts?: string[];
  /**
  * The ID of prefix list as source associated with the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#src_prefix_list_id PolicyRule#src_prefix_list_id}
  */
  readonly srcPrefixListId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule alkira_policy_rule}
*/
export class PolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRule to import
  * @param importFromId The id of the existing PolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_rule alkira_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationIds = config.applicationIds;
    this._description = config.description;
    this._dscp = config.dscp;
    this._dstIp = config.dstIp;
    this._dstPorts = config.dstPorts;
    this._dstPrefixListId = config.dstPrefixListId;
    this._id = config.id;
    this._internetApplicationId = config.internetApplicationId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._ruleAction = config.ruleAction;
    this._ruleActionFlowCollectorIds = config.ruleActionFlowCollectorIds;
    this._ruleActionServiceIds = config.ruleActionServiceIds;
    this._ruleActionServiceTypes = config.ruleActionServiceTypes;
    this._srcIp = config.srcIp;
    this._srcPorts = config.srcPorts;
    this._srcPrefixListId = config.srcPrefixListId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_ids - computed: false, optional: true, required: false
  private _applicationIds?: number[]; 
  public get applicationIds() {
    return this.getNumberListAttribute('application_ids');
  }
  public set applicationIds(value: number[]) {
    this._applicationIds = value;
  }
  public resetApplicationIds() {
    this._applicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdsInput() {
    return this._applicationIds;
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

  // dscp - computed: false, optional: false, required: true
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // dst_ports - computed: false, optional: true, required: false
  private _dstPorts?: string[]; 
  public get dstPorts() {
    return this.getListAttribute('dst_ports');
  }
  public set dstPorts(value: string[]) {
    this._dstPorts = value;
  }
  public resetDstPorts() {
    this._dstPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortsInput() {
    return this._dstPorts;
  }

  // dst_prefix_list_id - computed: false, optional: true, required: false
  private _dstPrefixListId?: number; 
  public get dstPrefixListId() {
    return this.getNumberAttribute('dst_prefix_list_id');
  }
  public set dstPrefixListId(value: number) {
    this._dstPrefixListId = value;
  }
  public resetDstPrefixListId() {
    this._dstPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPrefixListIdInput() {
    return this._dstPrefixListId;
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

  // internet_application_id - computed: false, optional: true, required: false
  private _internetApplicationId?: number; 
  public get internetApplicationId() {
    return this.getNumberAttribute('internet_application_id');
  }
  public set internetApplicationId(value: number) {
    this._internetApplicationId = value;
  }
  public resetInternetApplicationId() {
    this._internetApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetApplicationIdInput() {
    return this._internetApplicationId;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // rule_action - computed: false, optional: true, required: false
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  public resetRuleAction() {
    this._ruleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // rule_action_flow_collector_ids - computed: false, optional: true, required: false
  private _ruleActionFlowCollectorIds?: number[]; 
  public get ruleActionFlowCollectorIds() {
    return this.getNumberListAttribute('rule_action_flow_collector_ids');
  }
  public set ruleActionFlowCollectorIds(value: number[]) {
    this._ruleActionFlowCollectorIds = value;
  }
  public resetRuleActionFlowCollectorIds() {
    this._ruleActionFlowCollectorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionFlowCollectorIdsInput() {
    return this._ruleActionFlowCollectorIds;
  }

  // rule_action_service_ids - computed: false, optional: true, required: false
  private _ruleActionServiceIds?: number[]; 
  public get ruleActionServiceIds() {
    return this.getNumberListAttribute('rule_action_service_ids');
  }
  public set ruleActionServiceIds(value: number[]) {
    this._ruleActionServiceIds = value;
  }
  public resetRuleActionServiceIds() {
    this._ruleActionServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionServiceIdsInput() {
    return this._ruleActionServiceIds;
  }

  // rule_action_service_types - computed: false, optional: true, required: false
  private _ruleActionServiceTypes?: string[]; 
  public get ruleActionServiceTypes() {
    return this.getListAttribute('rule_action_service_types');
  }
  public set ruleActionServiceTypes(value: string[]) {
    this._ruleActionServiceTypes = value;
  }
  public resetRuleActionServiceTypes() {
    this._ruleActionServiceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionServiceTypesInput() {
    return this._ruleActionServiceTypes;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_ports - computed: false, optional: true, required: false
  private _srcPorts?: string[]; 
  public get srcPorts() {
    return this.getListAttribute('src_ports');
  }
  public set srcPorts(value: string[]) {
    this._srcPorts = value;
  }
  public resetSrcPorts() {
    this._srcPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortsInput() {
    return this._srcPorts;
  }

  // src_prefix_list_id - computed: false, optional: true, required: false
  private _srcPrefixListId?: number; 
  public get srcPrefixListId() {
    return this.getNumberAttribute('src_prefix_list_id');
  }
  public set srcPrefixListId(value: number) {
    this._srcPrefixListId = value;
  }
  public resetSrcPrefixListId() {
    this._srcPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrefixListIdInput() {
    return this._srcPrefixListId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._applicationIds),
      description: cdktf.stringToTerraform(this._description),
      dscp: cdktf.stringToTerraform(this._dscp),
      dst_ip: cdktf.stringToTerraform(this._dstIp),
      dst_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstPorts),
      dst_prefix_list_id: cdktf.numberToTerraform(this._dstPrefixListId),
      id: cdktf.stringToTerraform(this._id),
      internet_application_id: cdktf.numberToTerraform(this._internetApplicationId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      rule_action: cdktf.stringToTerraform(this._ruleAction),
      rule_action_flow_collector_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ruleActionFlowCollectorIds),
      rule_action_service_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ruleActionServiceIds),
      rule_action_service_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleActionServiceTypes),
      src_ip: cdktf.stringToTerraform(this._srcIp),
      src_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcPorts),
      src_prefix_list_id: cdktf.numberToTerraform(this._srcPrefixListId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._applicationIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp: {
        value: cdktf.stringToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ip: {
        value: cdktf.stringToHclTerraform(this._dstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstPorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dst_prefix_list_id: {
        value: cdktf.numberToHclTerraform(this._dstPrefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_application_id: {
        value: cdktf.numberToHclTerraform(this._internetApplicationId),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_action: {
        value: cdktf.stringToHclTerraform(this._ruleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_action_flow_collector_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ruleActionFlowCollectorIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      rule_action_service_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ruleActionServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      rule_action_service_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleActionServiceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      src_ip: {
        value: cdktf.stringToHclTerraform(this._srcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcPorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      src_prefix_list_id: {
        value: cdktf.numberToHclTerraform(this._srcPrefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
