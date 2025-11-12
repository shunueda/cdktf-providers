// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtDistributedFirewallRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional firewall rule ID, to put new rule above during creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#above_rule_id NsxtDistributedFirewallRuleA#above_rule_id}
  */
  readonly aboveRuleId?: string;
  /**
  * Defines if the rule should 'ALLOW', 'DROP', 'REJECT' matching traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#action NsxtDistributedFirewallRuleA#action}
  */
  readonly action: string;
  /**
  * A set of Application Port Profile IDs. Leaving it empty means 'Any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#app_port_profile_ids NsxtDistributedFirewallRuleA#app_port_profile_ids}
  */
  readonly appPortProfileIds?: string[];
  /**
  * Comment that is shown next to rule in UI (VCD 10.3.2+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#comment NsxtDistributedFirewallRuleA#comment}
  */
  readonly comment?: string;
  /**
  * Description is not shown in UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#description NsxtDistributedFirewallRuleA#description}
  */
  readonly description?: string;
  /**
  * Reverses firewall matching for to match all except Destinations Groups specified in 'destination_ids' (VCD 10.3.2+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#destination_groups_excluded NsxtDistributedFirewallRuleA#destination_groups_excluded}
  */
  readonly destinationGroupsExcluded?: boolean | cdktf.IResolvable;
  /**
  * A set of Destination Firewall Group IDs (IP Sets or Security Groups). Leaving it empty means 'Any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#destination_ids NsxtDistributedFirewallRuleA#destination_ids}
  */
  readonly destinationIds?: string[];
  /**
  * Direction on which Firewall Rule applies (one of 'IN', 'OUT', 'IN_OUT')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#direction NsxtDistributedFirewallRuleA#direction}
  */
  readonly direction?: string;
  /**
  * Defined if Firewall Rule is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#enabled NsxtDistributedFirewallRuleA#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#id NsxtDistributedFirewallRuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Firewall Rule Protocol (one of 'IPV4', 'IPV6', 'IPV4_IPV6')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#ip_protocol NsxtDistributedFirewallRuleA#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Defines if matching traffic should be logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#logging NsxtDistributedFirewallRuleA#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Firewall Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#name NsxtDistributedFirewallRuleA#name}
  */
  readonly name: string;
  /**
  * A set of Network Context Profile IDs. Leaving it empty means 'Any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#network_context_profile_ids NsxtDistributedFirewallRuleA#network_context_profile_ids}
  */
  readonly networkContextProfileIds?: string[];
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#org NsxtDistributedFirewallRuleA#org}
  */
  readonly org?: string;
  /**
  * Reverses firewall matching for to match all except Source Groups specified in 'source_ids' (VCD 10.3.2+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#source_groups_excluded NsxtDistributedFirewallRuleA#source_groups_excluded}
  */
  readonly sourceGroupsExcluded?: boolean | cdktf.IResolvable;
  /**
  * A set of Source Firewall Group IDs (IP Sets or Security Groups). Leaving it empty means 'Any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#source_ids NsxtDistributedFirewallRuleA#source_ids}
  */
  readonly sourceIds?: string[];
  /**
  * ID of VDC Group for Distributed Firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#vdc_group_id NsxtDistributedFirewallRuleA#vdc_group_id}
  */
  readonly vdcGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule vcd_nsxt_distributed_firewall_rule}
*/
export class NsxtDistributedFirewallRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_distributed_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtDistributedFirewallRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtDistributedFirewallRuleA to import
  * @param importFromId The id of the existing NsxtDistributedFirewallRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtDistributedFirewallRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_distributed_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall_rule vcd_nsxt_distributed_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtDistributedFirewallRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtDistributedFirewallRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_distributed_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aboveRuleId = config.aboveRuleId;
    this._action = config.action;
    this._appPortProfileIds = config.appPortProfileIds;
    this._comment = config.comment;
    this._description = config.description;
    this._destinationGroupsExcluded = config.destinationGroupsExcluded;
    this._destinationIds = config.destinationIds;
    this._direction = config.direction;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._logging = config.logging;
    this._name = config.name;
    this._networkContextProfileIds = config.networkContextProfileIds;
    this._org = config.org;
    this._sourceGroupsExcluded = config.sourceGroupsExcluded;
    this._sourceIds = config.sourceIds;
    this._vdcGroupId = config.vdcGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // above_rule_id - computed: false, optional: true, required: false
  private _aboveRuleId?: string; 
  public get aboveRuleId() {
    return this.getStringAttribute('above_rule_id');
  }
  public set aboveRuleId(value: string) {
    this._aboveRuleId = value;
  }
  public resetAboveRuleId() {
    this._aboveRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aboveRuleIdInput() {
    return this._aboveRuleId;
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

  // app_port_profile_ids - computed: false, optional: true, required: false
  private _appPortProfileIds?: string[]; 
  public get appPortProfileIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_port_profile_ids'));
  }
  public set appPortProfileIds(value: string[]) {
    this._appPortProfileIds = value;
  }
  public resetAppPortProfileIds() {
    this._appPortProfileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPortProfileIdsInput() {
    return this._appPortProfileIds;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // destination_groups_excluded - computed: false, optional: true, required: false
  private _destinationGroupsExcluded?: boolean | cdktf.IResolvable; 
  public get destinationGroupsExcluded() {
    return this.getBooleanAttribute('destination_groups_excluded');
  }
  public set destinationGroupsExcluded(value: boolean | cdktf.IResolvable) {
    this._destinationGroupsExcluded = value;
  }
  public resetDestinationGroupsExcluded() {
    this._destinationGroupsExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGroupsExcludedInput() {
    return this._destinationGroupsExcluded;
  }

  // destination_ids - computed: false, optional: true, required: false
  private _destinationIds?: string[]; 
  public get destinationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_ids'));
  }
  public set destinationIds(value: string[]) {
    this._destinationIds = value;
  }
  public resetDestinationIds() {
    this._destinationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdsInput() {
    return this._destinationIds;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
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

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // network_context_profile_ids - computed: false, optional: true, required: false
  private _networkContextProfileIds?: string[]; 
  public get networkContextProfileIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_context_profile_ids'));
  }
  public set networkContextProfileIds(value: string[]) {
    this._networkContextProfileIds = value;
  }
  public resetNetworkContextProfileIds() {
    this._networkContextProfileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkContextProfileIdsInput() {
    return this._networkContextProfileIds;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // source_groups_excluded - computed: false, optional: true, required: false
  private _sourceGroupsExcluded?: boolean | cdktf.IResolvable; 
  public get sourceGroupsExcluded() {
    return this.getBooleanAttribute('source_groups_excluded');
  }
  public set sourceGroupsExcluded(value: boolean | cdktf.IResolvable) {
    this._sourceGroupsExcluded = value;
  }
  public resetSourceGroupsExcluded() {
    this._sourceGroupsExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupsExcludedInput() {
    return this._sourceGroupsExcluded;
  }

  // source_ids - computed: false, optional: true, required: false
  private _sourceIds?: string[]; 
  public get sourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ids'));
  }
  public set sourceIds(value: string[]) {
    this._sourceIds = value;
  }
  public resetSourceIds() {
    this._sourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdsInput() {
    return this._sourceIds;
  }

  // vdc_group_id - computed: false, optional: false, required: true
  private _vdcGroupId?: string; 
  public get vdcGroupId() {
    return this.getStringAttribute('vdc_group_id');
  }
  public set vdcGroupId(value: string) {
    this._vdcGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcGroupIdInput() {
    return this._vdcGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      above_rule_id: cdktf.stringToTerraform(this._aboveRuleId),
      action: cdktf.stringToTerraform(this._action),
      app_port_profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appPortProfileIds),
      comment: cdktf.stringToTerraform(this._comment),
      description: cdktf.stringToTerraform(this._description),
      destination_groups_excluded: cdktf.booleanToTerraform(this._destinationGroupsExcluded),
      destination_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationIds),
      direction: cdktf.stringToTerraform(this._direction),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      logging: cdktf.booleanToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      network_context_profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkContextProfileIds),
      org: cdktf.stringToTerraform(this._org),
      source_groups_excluded: cdktf.booleanToTerraform(this._sourceGroupsExcluded),
      source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIds),
      vdc_group_id: cdktf.stringToTerraform(this._vdcGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      above_rule_id: {
        value: cdktf.stringToHclTerraform(this._aboveRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_port_profile_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appPortProfileIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      destination_groups_excluded: {
        value: cdktf.booleanToHclTerraform(this._destinationGroupsExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationIds),
        isBlock: false,
        type: "set",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_context_profile_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkContextProfileIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_groups_excluded: {
        value: cdktf.booleanToHclTerraform(this._sourceGroupsExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vdc_group_id: {
        value: cdktf.stringToHclTerraform(this._vdcGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
