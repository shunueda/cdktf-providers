// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action for the NAT Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#action PolicyNatRule#action}
  */
  readonly action: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#description PolicyNatRule#description}
  */
  readonly description?: string;
  /**
  * The destination network(s) for the NAT Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#destination_networks PolicyNatRule#destination_networks}
  */
  readonly destinationNetworks?: string[];
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#display_name PolicyNatRule#display_name}
  */
  readonly displayName: string;
  /**
  * Enable/disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#enabled PolicyNatRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Firewall match flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#firewall_match PolicyNatRule#firewall_match}
  */
  readonly firewallMatch?: string;
  /**
  * The NSX-T Policy path to the Tier0 or Tier1 Gateway for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#gateway_path PolicyNatRule#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#id PolicyNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable/disable the logging of rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#logging PolicyNatRule#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#nsx_id PolicyNatRule#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Policy based vpn mode match flag. DNAT and NO_DNAT only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#policy_based_vpn_mode PolicyNatRule#policy_based_vpn_mode}
  */
  readonly policyBasedVpnMode?: string;
  /**
  * The sequence_number decides the rule_priority of a NAT rule. Valid range [0-2147483647]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#rule_priority PolicyNatRule#rule_priority}
  */
  readonly rulePriority?: number;
  /**
  * Policy paths to interfaces or labels where the NAT Rule is enforced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#scope PolicyNatRule#scope}
  */
  readonly scope?: string[];
  /**
  * Policy path of Service on which the NAT rule will be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#service PolicyNatRule#service}
  */
  readonly service?: string;
  /**
  * The source network(s) for the NAT Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#source_networks PolicyNatRule#source_networks}
  */
  readonly sourceNetworks?: string[];
  /**
  * The translated network(s) for the NAT Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#translated_networks PolicyNatRule#translated_networks}
  */
  readonly translatedNetworks?: string[];
  /**
  * Port number or port range. DNAT only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#translated_ports PolicyNatRule#translated_ports}
  */
  readonly translatedPorts?: string;
  /**
  * NAT Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#type PolicyNatRule#type}
  */
  readonly type?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#context PolicyNatRule#context}
  */
  readonly context?: PolicyNatRuleContext;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#tag PolicyNatRule#tag}
  */
  readonly tag?: PolicyNatRuleTag[] | cdktf.IResolvable;
}
export interface PolicyNatRuleContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#project_id PolicyNatRule#project_id}
  */
  readonly projectId: string;
}

export function policyNatRuleContextToTerraform(struct?: PolicyNatRuleContextOutputReference | PolicyNatRuleContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyNatRuleContextToHclTerraform(struct?: PolicyNatRuleContextOutputReference | PolicyNatRuleContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyNatRuleContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyNatRuleContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyNatRuleContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface PolicyNatRuleTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#scope PolicyNatRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#tag PolicyNatRule#tag}
  */
  readonly tag?: string;
}

export function policyNatRuleTagToTerraform(struct?: PolicyNatRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyNatRuleTagToHclTerraform(struct?: PolicyNatRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyNatRuleTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyNatRuleTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyNatRuleTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyNatRuleTagList extends cdktf.ComplexList {
  public internalValue? : PolicyNatRuleTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyNatRuleTagOutputReference {
    return new PolicyNatRuleTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule nsxt_policy_nat_rule}
*/
export class PolicyNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyNatRule to import
  * @param importFromId The id of the existing PolicyNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_nat_rule nsxt_policy_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
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
    this._destinationNetworks = config.destinationNetworks;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._firewallMatch = config.firewallMatch;
    this._gatewayPath = config.gatewayPath;
    this._id = config.id;
    this._logging = config.logging;
    this._nsxId = config.nsxId;
    this._policyBasedVpnMode = config.policyBasedVpnMode;
    this._rulePriority = config.rulePriority;
    this._scope = config.scope;
    this._service = config.service;
    this._sourceNetworks = config.sourceNetworks;
    this._translatedNetworks = config.translatedNetworks;
    this._translatedPorts = config.translatedPorts;
    this._type = config.type;
    this._context.internalValue = config.context;
    this._tag.internalValue = config.tag;
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

  // destination_networks - computed: false, optional: true, required: false
  private _destinationNetworks?: string[]; 
  public get destinationNetworks() {
    return this.getListAttribute('destination_networks');
  }
  public set destinationNetworks(value: string[]) {
    this._destinationNetworks = value;
  }
  public resetDestinationNetworks() {
    this._destinationNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworksInput() {
    return this._destinationNetworks;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // firewall_match - computed: false, optional: true, required: false
  private _firewallMatch?: string; 
  public get firewallMatch() {
    return this.getStringAttribute('firewall_match');
  }
  public set firewallMatch(value: string) {
    this._firewallMatch = value;
  }
  public resetFirewallMatch() {
    this._firewallMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallMatchInput() {
    return this._firewallMatch;
  }

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // policy_based_vpn_mode - computed: true, optional: true, required: false
  private _policyBasedVpnMode?: string; 
  public get policyBasedVpnMode() {
    return this.getStringAttribute('policy_based_vpn_mode');
  }
  public set policyBasedVpnMode(value: string) {
    this._policyBasedVpnMode = value;
  }
  public resetPolicyBasedVpnMode() {
    this._policyBasedVpnMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBasedVpnModeInput() {
    return this._policyBasedVpnMode;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // rule_priority - computed: false, optional: true, required: false
  private _rulePriority?: number; 
  public get rulePriority() {
    return this.getNumberAttribute('rule_priority');
  }
  public set rulePriority(value: number) {
    this._rulePriority = value;
  }
  public resetRulePriority() {
    this._rulePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePriorityInput() {
    return this._rulePriority;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return cdktf.Fn.tolist(this.getListAttribute('scope'));
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

  // source_networks - computed: false, optional: true, required: false
  private _sourceNetworks?: string[]; 
  public get sourceNetworks() {
    return this.getListAttribute('source_networks');
  }
  public set sourceNetworks(value: string[]) {
    this._sourceNetworks = value;
  }
  public resetSourceNetworks() {
    this._sourceNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworksInput() {
    return this._sourceNetworks;
  }

  // translated_networks - computed: false, optional: true, required: false
  private _translatedNetworks?: string[]; 
  public get translatedNetworks() {
    return this.getListAttribute('translated_networks');
  }
  public set translatedNetworks(value: string[]) {
    this._translatedNetworks = value;
  }
  public resetTranslatedNetworks() {
    this._translatedNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedNetworksInput() {
    return this._translatedNetworks;
  }

  // translated_ports - computed: false, optional: true, required: false
  private _translatedPorts?: string; 
  public get translatedPorts() {
    return this.getStringAttribute('translated_ports');
  }
  public set translatedPorts(value: string) {
    this._translatedPorts = value;
  }
  public resetTranslatedPorts() {
    this._translatedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortsInput() {
    return this._translatedPorts;
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

  // context - computed: false, optional: true, required: false
  private _context = new PolicyNatRuleContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyNatRuleContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyNatRuleTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyNatRuleTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      destination_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationNetworks),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      firewall_match: cdktf.stringToTerraform(this._firewallMatch),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      id: cdktf.stringToTerraform(this._id),
      logging: cdktf.booleanToTerraform(this._logging),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      policy_based_vpn_mode: cdktf.stringToTerraform(this._policyBasedVpnMode),
      rule_priority: cdktf.numberToTerraform(this._rulePriority),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      service: cdktf.stringToTerraform(this._service),
      source_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceNetworks),
      translated_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._translatedNetworks),
      translated_ports: cdktf.stringToTerraform(this._translatedPorts),
      type: cdktf.stringToTerraform(this._type),
      context: policyNatRuleContextToTerraform(this._context.internalValue),
      tag: cdktf.listMapper(policyNatRuleTagToTerraform, true)(this._tag.internalValue),
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
      destination_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationNetworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      firewall_match: {
        value: cdktf.stringToHclTerraform(this._firewallMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
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
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_based_vpn_mode: {
        value: cdktf.stringToHclTerraform(this._policyBasedVpnMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_priority: {
        value: cdktf.numberToHclTerraform(this._rulePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceNetworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      translated_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._translatedNetworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      translated_ports: {
        value: cdktf.stringToHclTerraform(this._translatedPorts),
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
      context: {
        value: policyNatRuleContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyNatRuleContextList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyNatRuleTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyNatRuleTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
