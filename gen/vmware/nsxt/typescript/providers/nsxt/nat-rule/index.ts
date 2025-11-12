// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action for the NAT Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#action NatRule#action}
  */
  readonly action: string;
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#description NatRule#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#display_name NatRule#display_name}
  */
  readonly displayName?: string;
  /**
  * enable/disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#enabled NatRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#id NatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * enable/disable the logging of rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#logging NatRule#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Logical router id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#logical_router_id NatRule#logical_router_id}
  */
  readonly logicalRouterId: string;
  /**
  * IP Address | CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#match_destination_network NatRule#match_destination_network}
  */
  readonly matchDestinationNetwork?: string;
  /**
  * IP Address | CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#match_source_network NatRule#match_source_network}
  */
  readonly matchSourceNetwork?: string;
  /**
  * A boolean flag which reflects whether the following firewall stage will be skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#nat_pass NatRule#nat_pass}
  */
  readonly natPass?: boolean | cdktf.IResolvable;
  /**
  * The priority of the rule (ascending). Valid range [0-2147483647]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#rule_priority NatRule#rule_priority}
  */
  readonly rulePriority?: number;
  /**
  * IP Address | IP Range | CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#translated_network NatRule#translated_network}
  */
  readonly translatedNetwork?: string;
  /**
  * port number or port range. DNAT only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#translated_ports NatRule#translated_ports}
  */
  readonly translatedPorts?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#tag NatRule#tag}
  */
  readonly tag?: NatRuleTag[] | cdktf.IResolvable;
}
export interface NatRuleTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#scope NatRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#tag NatRule#tag}
  */
  readonly tag?: string;
}

export function natRuleTagToTerraform(struct?: NatRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function natRuleTagToHclTerraform(struct?: NatRuleTag | cdktf.IResolvable): any {
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

export class NatRuleTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NatRuleTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NatRuleTag | cdktf.IResolvable | undefined) {
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

export class NatRuleTagList extends cdktf.ComplexList {
  public internalValue? : NatRuleTag[] | cdktf.IResolvable

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
  public get(index: number): NatRuleTagOutputReference {
    return new NatRuleTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule nsxt_nat_rule}
*/
export class NatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NatRule to import
  * @param importFromId The id of the existing NatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/nat_rule nsxt_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_nat_rule',
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
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logging = config.logging;
    this._logicalRouterId = config.logicalRouterId;
    this._matchDestinationNetwork = config.matchDestinationNetwork;
    this._matchSourceNetwork = config.matchSourceNetwork;
    this._natPass = config.natPass;
    this._rulePriority = config.rulePriority;
    this._translatedNetwork = config.translatedNetwork;
    this._translatedPorts = config.translatedPorts;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // logical_router_id - computed: false, optional: false, required: true
  private _logicalRouterId?: string; 
  public get logicalRouterId() {
    return this.getStringAttribute('logical_router_id');
  }
  public set logicalRouterId(value: string) {
    this._logicalRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRouterIdInput() {
    return this._logicalRouterId;
  }

  // match_destination_network - computed: false, optional: true, required: false
  private _matchDestinationNetwork?: string; 
  public get matchDestinationNetwork() {
    return this.getStringAttribute('match_destination_network');
  }
  public set matchDestinationNetwork(value: string) {
    this._matchDestinationNetwork = value;
  }
  public resetMatchDestinationNetwork() {
    this._matchDestinationNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDestinationNetworkInput() {
    return this._matchDestinationNetwork;
  }

  // match_source_network - computed: false, optional: true, required: false
  private _matchSourceNetwork?: string; 
  public get matchSourceNetwork() {
    return this.getStringAttribute('match_source_network');
  }
  public set matchSourceNetwork(value: string) {
    this._matchSourceNetwork = value;
  }
  public resetMatchSourceNetwork() {
    this._matchSourceNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSourceNetworkInput() {
    return this._matchSourceNetwork;
  }

  // nat_pass - computed: false, optional: true, required: false
  private _natPass?: boolean | cdktf.IResolvable; 
  public get natPass() {
    return this.getBooleanAttribute('nat_pass');
  }
  public set natPass(value: boolean | cdktf.IResolvable) {
    this._natPass = value;
  }
  public resetNatPass() {
    this._natPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPassInput() {
    return this._natPass;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // rule_priority - computed: true, optional: true, required: false
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

  // translated_network - computed: false, optional: true, required: false
  private _translatedNetwork?: string; 
  public get translatedNetwork() {
    return this.getStringAttribute('translated_network');
  }
  public set translatedNetwork(value: string) {
    this._translatedNetwork = value;
  }
  public resetTranslatedNetwork() {
    this._translatedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedNetworkInput() {
    return this._translatedNetwork;
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

  // tag - computed: false, optional: true, required: false
  private _tag = new NatRuleTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: NatRuleTag[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      logging: cdktf.booleanToTerraform(this._logging),
      logical_router_id: cdktf.stringToTerraform(this._logicalRouterId),
      match_destination_network: cdktf.stringToTerraform(this._matchDestinationNetwork),
      match_source_network: cdktf.stringToTerraform(this._matchSourceNetwork),
      nat_pass: cdktf.booleanToTerraform(this._natPass),
      rule_priority: cdktf.numberToTerraform(this._rulePriority),
      translated_network: cdktf.stringToTerraform(this._translatedNetwork),
      translated_ports: cdktf.stringToTerraform(this._translatedPorts),
      tag: cdktf.listMapper(natRuleTagToTerraform, true)(this._tag.internalValue),
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
      logical_router_id: {
        value: cdktf.stringToHclTerraform(this._logicalRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_destination_network: {
        value: cdktf.stringToHclTerraform(this._matchDestinationNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_source_network: {
        value: cdktf.stringToHclTerraform(this._matchSourceNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_pass: {
        value: cdktf.booleanToHclTerraform(this._natPass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rule_priority: {
        value: cdktf.numberToHclTerraform(this._rulePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      translated_network: {
        value: cdktf.stringToHclTerraform(this._translatedNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_ports: {
        value: cdktf.stringToHclTerraform(this._translatedPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(natRuleTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatRuleTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
