// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextRateLimitPracticeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#name InextRateLimitPractice#name}
  */
  readonly name: string;
  /**
  * The visibility of the resource, Shared or Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#visibility InextRateLimitPractice#visibility}
  */
  readonly visibility?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#rule InextRateLimitPractice#rule}
  */
  readonly rule?: InextRateLimitPracticeRule[] | cdktf.IResolvable;
}
export interface InextRateLimitPracticeRule {
  /**
  * The action to perform upon a request which crosses the rate limit. Must be one of: Detect, Prevent, AccordingToPractice (case sensitive!!). Defaults to AccordingToPractice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#action InextRateLimitPractice#action}
  */
  readonly action?: string;
  /**
  * A general comment which describes the rate limit rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#comment InextRateLimitPractice#comment}
  */
  readonly comment?: string;
  /**
  * The actual number of requests to enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#limit InextRateLimitPractice#limit}
  */
  readonly limit: number;
  /**
  * The time unit during which the rate limit is enfrorced. Must be one of: Minute, Second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#scope InextRateLimitPractice#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#uri InextRateLimitPractice#uri}
  */
  readonly uri: string;
}

export function inextRateLimitPracticeRuleToTerraform(struct?: InextRateLimitPracticeRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    limit: cdktf.numberToTerraform(struct!.limit),
    scope: cdktf.stringToTerraform(struct!.scope),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function inextRateLimitPracticeRuleToHclTerraform(struct?: InextRateLimitPracticeRule | cdktf.IResolvable): any {
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextRateLimitPracticeRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextRateLimitPracticeRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextRateLimitPracticeRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._limit = undefined;
      this._scope = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._limit = value.limit;
      this._scope = value.scope;
      this._uri = value.uri;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class InextRateLimitPracticeRuleList extends cdktf.ComplexList {
  public internalValue? : InextRateLimitPracticeRule[] | cdktf.IResolvable

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
  public get(index: number): InextRateLimitPracticeRuleOutputReference {
    return new InextRateLimitPracticeRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice inext_rate_limit_practice}
*/
export class InextRateLimitPractice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_rate_limit_practice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextRateLimitPractice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextRateLimitPractice to import
  * @param importFromId The id of the existing InextRateLimitPractice that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextRateLimitPractice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_rate_limit_practice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.2.1/docs/resources/inext_rate_limit_practice inext_rate_limit_practice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextRateLimitPracticeConfig
  */
  public constructor(scope: Construct, id: string, config: InextRateLimitPracticeConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_rate_limit_practice',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._visibility = config.visibility;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // practice_type - computed: true, optional: false, required: false
  public get practiceType() {
    return this.getStringAttribute('practice_type');
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new InextRateLimitPracticeRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: InextRateLimitPracticeRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
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
      name: cdktf.stringToTerraform(this._name),
      visibility: cdktf.stringToTerraform(this._visibility),
      rule: cdktf.listMapper(inextRateLimitPracticeRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(inextRateLimitPracticeRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextRateLimitPracticeRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
