// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudletsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Code for the type of Cloudlet (ALB, AP, AS, CD, ER, FR, IG, or VP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#cloudlet_code CloudletsPolicy#cloudlet_code}
  */
  readonly cloudletCode: string;
  /**
  * The description of this specific policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#description CloudletsPolicy#description}
  */
  readonly description?: string;
  /**
  * Defines the group association for the policy. You must have edit privileges for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#group_id CloudletsPolicy#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#id CloudletsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of policy that you want to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#is_shared CloudletsPolicy#is_shared}
  */
  readonly isShared?: boolean | cdktf.IResolvable;
  /**
  * The version of the Cloudlet specific matchRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#match_rule_format CloudletsPolicy#match_rule_format}
  */
  readonly matchRuleFormat?: string;
  /**
  * A JSON structure that defines the rules for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#match_rules CloudletsPolicy#match_rules}
  */
  readonly matchRules?: string;
  /**
  * The name of the policy. The name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#name CloudletsPolicy#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#timeouts CloudletsPolicy#timeouts}
  */
  readonly timeouts?: CloudletsPolicyTimeouts;
}
export interface CloudletsPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#default CloudletsPolicy#default}
  */
  readonly default?: string;
}

export function cloudletsPolicyTimeoutsToTerraform(struct?: CloudletsPolicyTimeoutsOutputReference | CloudletsPolicyTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function cloudletsPolicyTimeoutsToHclTerraform(struct?: CloudletsPolicyTimeoutsOutputReference | CloudletsPolicyTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudletsPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudletsPolicyTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudletsPolicyTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy akamai_cloudlets_policy}
*/
export class CloudletsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudlets_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudletsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudletsPolicy to import
  * @param importFromId The id of the existing CloudletsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudletsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudlets_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_policy akamai_cloudlets_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudletsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudletsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudlets_policy',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudletCode = config.cloudletCode;
    this._description = config.description;
    this._groupId = config.groupId;
    this._id = config.id;
    this._isShared = config.isShared;
    this._matchRuleFormat = config.matchRuleFormat;
    this._matchRules = config.matchRules;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudlet_code - computed: false, optional: false, required: true
  private _cloudletCode?: string; 
  public get cloudletCode() {
    return this.getStringAttribute('cloudlet_code');
  }
  public set cloudletCode(value: string) {
    this._cloudletCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudletCodeInput() {
    return this._cloudletCode;
  }

  // cloudlet_id - computed: true, optional: false, required: false
  public get cloudletId() {
    return this.getNumberAttribute('cloudlet_id');
  }

  // description - computed: true, optional: true, required: false
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

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // is_shared - computed: false, optional: true, required: false
  private _isShared?: boolean | cdktf.IResolvable; 
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }
  public set isShared(value: boolean | cdktf.IResolvable) {
    this._isShared = value;
  }
  public resetIsShared() {
    this._isShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharedInput() {
    return this._isShared;
  }

  // match_rule_format - computed: false, optional: true, required: false
  private _matchRuleFormat?: string; 
  public get matchRuleFormat() {
    return this.getStringAttribute('match_rule_format');
  }
  public set matchRuleFormat(value: string) {
    this._matchRuleFormat = value;
  }
  public resetMatchRuleFormat() {
    this._matchRuleFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleFormatInput() {
    return this._matchRuleFormat;
  }

  // match_rules - computed: false, optional: true, required: false
  private _matchRules?: string; 
  public get matchRules() {
    return this.getStringAttribute('match_rules');
  }
  public set matchRules(value: string) {
    this._matchRules = value;
  }
  public resetMatchRules() {
    this._matchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getStringAttribute('warnings');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudletsPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudletsPolicyTimeouts) {
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
      cloudlet_code: cdktf.stringToTerraform(this._cloudletCode),
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      is_shared: cdktf.booleanToTerraform(this._isShared),
      match_rule_format: cdktf.stringToTerraform(this._matchRuleFormat),
      match_rules: cdktf.stringToTerraform(this._matchRules),
      name: cdktf.stringToTerraform(this._name),
      timeouts: cloudletsPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudlet_code: {
        value: cdktf.stringToHclTerraform(this._cloudletCode),
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
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      is_shared: {
        value: cdktf.booleanToHclTerraform(this._isShared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_rule_format: {
        value: cdktf.stringToHclTerraform(this._matchRuleFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_rules: {
        value: cdktf.stringToHclTerraform(this._matchRules),
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
      timeouts: {
        value: cloudletsPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudletsPolicyTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
