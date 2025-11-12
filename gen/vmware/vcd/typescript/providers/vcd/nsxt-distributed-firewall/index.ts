// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtDistributedFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#id NsxtDistributedFirewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#org NsxtDistributedFirewall#org}
  */
  readonly org?: string;
  /**
  * ID of VDC Group for Distributed Firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#vdc_group_id NsxtDistributedFirewall#vdc_group_id}
  */
  readonly vdcGroupId: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#rule NsxtDistributedFirewall#rule}
  */
  readonly rule: NsxtDistributedFirewallRule[] | cdktf.IResolvable;
}
export interface NsxtDistributedFirewallRule {
  /**
  * Defines if the rule should 'ALLOW', 'DROP', 'REJECT' matching traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#action NsxtDistributedFirewall#action}
  */
  readonly action: string;
  /**
  * A set of Application Port Profile IDs. Leaving it empty means 'Any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#app_port_profile_ids NsxtDistributedFirewall#app_port_profile_ids}
  */
  readonly appPortProfileIds?: string[];
  /**
  * Comment that is shown next to rule in UI (VCD 10.3.2+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#comment NsxtDistributedFirewall#comment}
  */
  readonly comment?: string;
  /**
  * Description is not shown in UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#description NsxtDistributedFirewall#description}
  */
  readonly description?: string;
  /**
  * Reverses firewall matching for to match all except Destinations Groups specified in 'destination_ids' (VCD 10.3.2+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#destination_groups_excluded NsxtDistributedFirewall#destination_groups_excluded}
  */
  readonly destinationGroupsExcluded?: boolean | cdktf.IResolvable;
  /**
  * A set of Destination Firewall Group IDs (IP Sets or Security Groups). Leaving it empty means 'Any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#destination_ids NsxtDistributedFirewall#destination_ids}
  */
  readonly destinationIds?: string[];
  /**
  * Direction on which Firewall Rule applies (One of 'IN', 'OUT', 'IN_OUT')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#direction NsxtDistributedFirewall#direction}
  */
  readonly direction?: string;
  /**
  * Defined if Firewall Rule is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#enabled NsxtDistributedFirewall#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Firewall Rule Protocol (One of 'IPV4', 'IPV6', 'IPV4_IPV6')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#ip_protocol NsxtDistributedFirewall#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Defines if matching traffic should be logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#logging NsxtDistributedFirewall#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Firewall Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#name NsxtDistributedFirewall#name}
  */
  readonly name: string;
  /**
  * A set of Network Context Profile IDs. Leaving it empty means 'Any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#network_context_profile_ids NsxtDistributedFirewall#network_context_profile_ids}
  */
  readonly networkContextProfileIds?: string[];
  /**
  * Reverses firewall matching for to match all except Source Groups specified in 'source_ids' (VCD 10.3.2+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#source_groups_excluded NsxtDistributedFirewall#source_groups_excluded}
  */
  readonly sourceGroupsExcluded?: boolean | cdktf.IResolvable;
  /**
  * A set of Source Firewall Group IDs (IP Sets or Security Groups). Leaving it empty means 'Any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#source_ids NsxtDistributedFirewall#source_ids}
  */
  readonly sourceIds?: string[];
}

export function nsxtDistributedFirewallRuleToTerraform(struct?: NsxtDistributedFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    app_port_profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appPortProfileIds),
    comment: cdktf.stringToTerraform(struct!.comment),
    description: cdktf.stringToTerraform(struct!.description),
    destination_groups_excluded: cdktf.booleanToTerraform(struct!.destinationGroupsExcluded),
    destination_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationIds),
    direction: cdktf.stringToTerraform(struct!.direction),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    logging: cdktf.booleanToTerraform(struct!.logging),
    name: cdktf.stringToTerraform(struct!.name),
    network_context_profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkContextProfileIds),
    source_groups_excluded: cdktf.booleanToTerraform(struct!.sourceGroupsExcluded),
    source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIds),
  }
}


export function nsxtDistributedFirewallRuleToHclTerraform(struct?: NsxtDistributedFirewallRule | cdktf.IResolvable): any {
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
    app_port_profile_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appPortProfileIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    destination_groups_excluded: {
      value: cdktf.booleanToHclTerraform(struct!.destinationGroupsExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationIds),
      isBlock: false,
      type: "set",
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
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.booleanToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_context_profile_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkContextProfileIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_groups_excluded: {
      value: cdktf.booleanToHclTerraform(struct!.sourceGroupsExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtDistributedFirewallRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtDistributedFirewallRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._appPortProfileIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPortProfileIds = this._appPortProfileIds;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationGroupsExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationGroupsExcluded = this._destinationGroupsExcluded;
    }
    if (this._destinationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIds = this._destinationIds;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkContextProfileIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkContextProfileIds = this._networkContextProfileIds;
    }
    if (this._sourceGroupsExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceGroupsExcluded = this._sourceGroupsExcluded;
    }
    if (this._sourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIds = this._sourceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtDistributedFirewallRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._appPortProfileIds = undefined;
      this._comment = undefined;
      this._description = undefined;
      this._destinationGroupsExcluded = undefined;
      this._destinationIds = undefined;
      this._direction = undefined;
      this._enabled = undefined;
      this._ipProtocol = undefined;
      this._logging = undefined;
      this._name = undefined;
      this._networkContextProfileIds = undefined;
      this._sourceGroupsExcluded = undefined;
      this._sourceIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._appPortProfileIds = value.appPortProfileIds;
      this._comment = value.comment;
      this._description = value.description;
      this._destinationGroupsExcluded = value.destinationGroupsExcluded;
      this._destinationIds = value.destinationIds;
      this._direction = value.direction;
      this._enabled = value.enabled;
      this._ipProtocol = value.ipProtocol;
      this._logging = value.logging;
      this._name = value.name;
      this._networkContextProfileIds = value.networkContextProfileIds;
      this._sourceGroupsExcluded = value.sourceGroupsExcluded;
      this._sourceIds = value.sourceIds;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}

export class NsxtDistributedFirewallRuleList extends cdktf.ComplexList {
  public internalValue? : NsxtDistributedFirewallRule[] | cdktf.IResolvable

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
  public get(index: number): NsxtDistributedFirewallRuleOutputReference {
    return new NsxtDistributedFirewallRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall vcd_nsxt_distributed_firewall}
*/
export class NsxtDistributedFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_distributed_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtDistributedFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtDistributedFirewall to import
  * @param importFromId The id of the existing NsxtDistributedFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtDistributedFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_distributed_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_distributed_firewall vcd_nsxt_distributed_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtDistributedFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtDistributedFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_distributed_firewall',
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
    this._id = config.id;
    this._org = config.org;
    this._vdcGroupId = config.vdcGroupId;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rule - computed: false, optional: false, required: true
  private _rule = new NsxtDistributedFirewallRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: NsxtDistributedFirewallRule[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      vdc_group_id: cdktf.stringToTerraform(this._vdcGroupId),
      rule: cdktf.listMapper(nsxtDistributedFirewallRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_group_id: {
        value: cdktf.stringToHclTerraform(this._vdcGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(nsxtDistributedFirewallRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtDistributedFirewallRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
