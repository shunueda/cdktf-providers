// https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RetentionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#id RetentionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#schedule RetentionPolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#scope RetentionPolicy#scope}
  */
  readonly scope: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#rule RetentionPolicy#rule}
  */
  readonly rule: RetentionPolicyRule[] | cdktf.IResolvable;
}
export interface RetentionPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#always_retain RetentionPolicy#always_retain}
  */
  readonly alwaysRetain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#disabled RetentionPolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#most_recently_pulled RetentionPolicy#most_recently_pulled}
  */
  readonly mostRecentlyPulled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#most_recently_pushed RetentionPolicy#most_recently_pushed}
  */
  readonly mostRecentlyPushed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#n_days_since_last_pull RetentionPolicy#n_days_since_last_pull}
  */
  readonly nDaysSinceLastPull?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#n_days_since_last_push RetentionPolicy#n_days_since_last_push}
  */
  readonly nDaysSinceLastPush?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#repo_excluding RetentionPolicy#repo_excluding}
  */
  readonly repoExcluding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#repo_matching RetentionPolicy#repo_matching}
  */
  readonly repoMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#tag_excluding RetentionPolicy#tag_excluding}
  */
  readonly tagExcluding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#tag_matching RetentionPolicy#tag_matching}
  */
  readonly tagMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#untagged_artifacts RetentionPolicy#untagged_artifacts}
  */
  readonly untaggedArtifacts?: boolean | cdktf.IResolvable;
}

export function retentionPolicyRuleToTerraform(struct?: RetentionPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_retain: cdktf.booleanToTerraform(struct!.alwaysRetain),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    most_recently_pulled: cdktf.numberToTerraform(struct!.mostRecentlyPulled),
    most_recently_pushed: cdktf.numberToTerraform(struct!.mostRecentlyPushed),
    n_days_since_last_pull: cdktf.numberToTerraform(struct!.nDaysSinceLastPull),
    n_days_since_last_push: cdktf.numberToTerraform(struct!.nDaysSinceLastPush),
    repo_excluding: cdktf.stringToTerraform(struct!.repoExcluding),
    repo_matching: cdktf.stringToTerraform(struct!.repoMatching),
    tag_excluding: cdktf.stringToTerraform(struct!.tagExcluding),
    tag_matching: cdktf.stringToTerraform(struct!.tagMatching),
    untagged_artifacts: cdktf.booleanToTerraform(struct!.untaggedArtifacts),
  }
}


export function retentionPolicyRuleToHclTerraform(struct?: RetentionPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_retain: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    most_recently_pulled: {
      value: cdktf.numberToHclTerraform(struct!.mostRecentlyPulled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    most_recently_pushed: {
      value: cdktf.numberToHclTerraform(struct!.mostRecentlyPushed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_days_since_last_pull: {
      value: cdktf.numberToHclTerraform(struct!.nDaysSinceLastPull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_days_since_last_push: {
      value: cdktf.numberToHclTerraform(struct!.nDaysSinceLastPush),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repo_excluding: {
      value: cdktf.stringToHclTerraform(struct!.repoExcluding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_matching: {
      value: cdktf.stringToHclTerraform(struct!.repoMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_excluding: {
      value: cdktf.stringToHclTerraform(struct!.tagExcluding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_matching: {
      value: cdktf.stringToHclTerraform(struct!.tagMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untagged_artifacts: {
      value: cdktf.booleanToHclTerraform(struct!.untaggedArtifacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RetentionPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RetentionPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysRetain = this._alwaysRetain;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._mostRecentlyPulled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostRecentlyPulled = this._mostRecentlyPulled;
    }
    if (this._mostRecentlyPushed !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostRecentlyPushed = this._mostRecentlyPushed;
    }
    if (this._nDaysSinceLastPull !== undefined) {
      hasAnyValues = true;
      internalValueResult.nDaysSinceLastPull = this._nDaysSinceLastPull;
    }
    if (this._nDaysSinceLastPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.nDaysSinceLastPush = this._nDaysSinceLastPush;
    }
    if (this._repoExcluding !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoExcluding = this._repoExcluding;
    }
    if (this._repoMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoMatching = this._repoMatching;
    }
    if (this._tagExcluding !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagExcluding = this._tagExcluding;
    }
    if (this._tagMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMatching = this._tagMatching;
    }
    if (this._untaggedArtifacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedArtifacts = this._untaggedArtifacts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetentionPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysRetain = undefined;
      this._disabled = undefined;
      this._mostRecentlyPulled = undefined;
      this._mostRecentlyPushed = undefined;
      this._nDaysSinceLastPull = undefined;
      this._nDaysSinceLastPush = undefined;
      this._repoExcluding = undefined;
      this._repoMatching = undefined;
      this._tagExcluding = undefined;
      this._tagMatching = undefined;
      this._untaggedArtifacts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysRetain = value.alwaysRetain;
      this._disabled = value.disabled;
      this._mostRecentlyPulled = value.mostRecentlyPulled;
      this._mostRecentlyPushed = value.mostRecentlyPushed;
      this._nDaysSinceLastPull = value.nDaysSinceLastPull;
      this._nDaysSinceLastPush = value.nDaysSinceLastPush;
      this._repoExcluding = value.repoExcluding;
      this._repoMatching = value.repoMatching;
      this._tagExcluding = value.tagExcluding;
      this._tagMatching = value.tagMatching;
      this._untaggedArtifacts = value.untaggedArtifacts;
    }
  }

  // always_retain - computed: false, optional: true, required: false
  private _alwaysRetain?: boolean | cdktf.IResolvable; 
  public get alwaysRetain() {
    return this.getBooleanAttribute('always_retain');
  }
  public set alwaysRetain(value: boolean | cdktf.IResolvable) {
    this._alwaysRetain = value;
  }
  public resetAlwaysRetain() {
    this._alwaysRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysRetainInput() {
    return this._alwaysRetain;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // most_recently_pulled - computed: false, optional: true, required: false
  private _mostRecentlyPulled?: number; 
  public get mostRecentlyPulled() {
    return this.getNumberAttribute('most_recently_pulled');
  }
  public set mostRecentlyPulled(value: number) {
    this._mostRecentlyPulled = value;
  }
  public resetMostRecentlyPulled() {
    this._mostRecentlyPulled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentlyPulledInput() {
    return this._mostRecentlyPulled;
  }

  // most_recently_pushed - computed: false, optional: true, required: false
  private _mostRecentlyPushed?: number; 
  public get mostRecentlyPushed() {
    return this.getNumberAttribute('most_recently_pushed');
  }
  public set mostRecentlyPushed(value: number) {
    this._mostRecentlyPushed = value;
  }
  public resetMostRecentlyPushed() {
    this._mostRecentlyPushed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentlyPushedInput() {
    return this._mostRecentlyPushed;
  }

  // n_days_since_last_pull - computed: false, optional: true, required: false
  private _nDaysSinceLastPull?: number; 
  public get nDaysSinceLastPull() {
    return this.getNumberAttribute('n_days_since_last_pull');
  }
  public set nDaysSinceLastPull(value: number) {
    this._nDaysSinceLastPull = value;
  }
  public resetNDaysSinceLastPull() {
    this._nDaysSinceLastPull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nDaysSinceLastPullInput() {
    return this._nDaysSinceLastPull;
  }

  // n_days_since_last_push - computed: false, optional: true, required: false
  private _nDaysSinceLastPush?: number; 
  public get nDaysSinceLastPush() {
    return this.getNumberAttribute('n_days_since_last_push');
  }
  public set nDaysSinceLastPush(value: number) {
    this._nDaysSinceLastPush = value;
  }
  public resetNDaysSinceLastPush() {
    this._nDaysSinceLastPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nDaysSinceLastPushInput() {
    return this._nDaysSinceLastPush;
  }

  // repo_excluding - computed: false, optional: true, required: false
  private _repoExcluding?: string; 
  public get repoExcluding() {
    return this.getStringAttribute('repo_excluding');
  }
  public set repoExcluding(value: string) {
    this._repoExcluding = value;
  }
  public resetRepoExcluding() {
    this._repoExcluding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoExcludingInput() {
    return this._repoExcluding;
  }

  // repo_matching - computed: false, optional: true, required: false
  private _repoMatching?: string; 
  public get repoMatching() {
    return this.getStringAttribute('repo_matching');
  }
  public set repoMatching(value: string) {
    this._repoMatching = value;
  }
  public resetRepoMatching() {
    this._repoMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoMatchingInput() {
    return this._repoMatching;
  }

  // tag_excluding - computed: false, optional: true, required: false
  private _tagExcluding?: string; 
  public get tagExcluding() {
    return this.getStringAttribute('tag_excluding');
  }
  public set tagExcluding(value: string) {
    this._tagExcluding = value;
  }
  public resetTagExcluding() {
    this._tagExcluding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagExcludingInput() {
    return this._tagExcluding;
  }

  // tag_matching - computed: false, optional: true, required: false
  private _tagMatching?: string; 
  public get tagMatching() {
    return this.getStringAttribute('tag_matching');
  }
  public set tagMatching(value: string) {
    this._tagMatching = value;
  }
  public resetTagMatching() {
    this._tagMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMatchingInput() {
    return this._tagMatching;
  }

  // untagged_artifacts - computed: false, optional: true, required: false
  private _untaggedArtifacts?: boolean | cdktf.IResolvable; 
  public get untaggedArtifacts() {
    return this.getBooleanAttribute('untagged_artifacts');
  }
  public set untaggedArtifacts(value: boolean | cdktf.IResolvable) {
    this._untaggedArtifacts = value;
  }
  public resetUntaggedArtifacts() {
    this._untaggedArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedArtifactsInput() {
    return this._untaggedArtifacts;
  }
}

export class RetentionPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : RetentionPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): RetentionPolicyRuleOutputReference {
    return new RetentionPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy harbor_retention_policy}
*/
export class RetentionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_retention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RetentionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RetentionPolicy to import
  * @param importFromId The id of the existing RetentionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RetentionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_retention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/retention_policy harbor_retention_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RetentionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RetentionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_retention_policy',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.3',
        providerVersionConstraint: '3.11.3'
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
    this._schedule = config.schedule;
    this._scope = config.scope;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new RetentionPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: RetentionPolicyRule[] | cdktf.IResolvable) {
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
      schedule: cdktf.stringToTerraform(this._schedule),
      scope: cdktf.stringToTerraform(this._scope),
      rule: cdktf.listMapper(retentionPolicyRuleToTerraform, true)(this._rule.internalValue),
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
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(retentionPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RetentionPolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
