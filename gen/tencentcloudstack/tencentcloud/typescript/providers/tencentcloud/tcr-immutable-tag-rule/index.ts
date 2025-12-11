// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcrImmutableTagRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#id TcrImmutableTagRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * namespace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#namespace_name TcrImmutableTagRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#registry_id TcrImmutableTagRule#registry_id}
  */
  readonly registryId: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#tags TcrImmutableTagRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#rule TcrImmutableTagRule#rule}
  */
  readonly rule: TcrImmutableTagRuleRule;
}
export interface TcrImmutableTagRuleRule {
  /**
  * disable rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#disabled TcrImmutableTagRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * repository decoration type:repoMatches or repoExcludes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#repository_decoration TcrImmutableTagRule#repository_decoration}
  */
  readonly repositoryDecoration: string;
  /**
  * repository matching rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#repository_pattern TcrImmutableTagRule#repository_pattern}
  */
  readonly repositoryPattern: string;
  /**
  * tag decoration type: matches or excludes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#tag_decoration TcrImmutableTagRule#tag_decoration}
  */
  readonly tagDecoration: string;
  /**
  * tag matching rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#tag_pattern TcrImmutableTagRule#tag_pattern}
  */
  readonly tagPattern: string;
}

export function tcrImmutableTagRuleRuleToTerraform(struct?: TcrImmutableTagRuleRuleOutputReference | TcrImmutableTagRuleRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    repository_decoration: cdktf.stringToTerraform(struct!.repositoryDecoration),
    repository_pattern: cdktf.stringToTerraform(struct!.repositoryPattern),
    tag_decoration: cdktf.stringToTerraform(struct!.tagDecoration),
    tag_pattern: cdktf.stringToTerraform(struct!.tagPattern),
  }
}


export function tcrImmutableTagRuleRuleToHclTerraform(struct?: TcrImmutableTagRuleRuleOutputReference | TcrImmutableTagRuleRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repository_decoration: {
      value: cdktf.stringToHclTerraform(struct!.repositoryDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_pattern: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_decoration: {
      value: cdktf.stringToHclTerraform(struct!.tagDecoration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_pattern: {
      value: cdktf.stringToHclTerraform(struct!.tagPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrImmutableTagRuleRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcrImmutableTagRuleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._repositoryDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryDecoration = this._repositoryDecoration;
    }
    if (this._repositoryPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPattern = this._repositoryPattern;
    }
    if (this._tagDecoration !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagDecoration = this._tagDecoration;
    }
    if (this._tagPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagPattern = this._tagPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcrImmutableTagRuleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._repositoryDecoration = undefined;
      this._repositoryPattern = undefined;
      this._tagDecoration = undefined;
      this._tagPattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._repositoryDecoration = value.repositoryDecoration;
      this._repositoryPattern = value.repositoryPattern;
      this._tagDecoration = value.tagDecoration;
      this._tagPattern = value.tagPattern;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ns_name - computed: true, optional: false, required: false
  public get nsName() {
    return this.getStringAttribute('ns_name');
  }

  // repository_decoration - computed: false, optional: false, required: true
  private _repositoryDecoration?: string; 
  public get repositoryDecoration() {
    return this.getStringAttribute('repository_decoration');
  }
  public set repositoryDecoration(value: string) {
    this._repositoryDecoration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryDecorationInput() {
    return this._repositoryDecoration;
  }

  // repository_pattern - computed: false, optional: false, required: true
  private _repositoryPattern?: string; 
  public get repositoryPattern() {
    return this.getStringAttribute('repository_pattern');
  }
  public set repositoryPattern(value: string) {
    this._repositoryPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPatternInput() {
    return this._repositoryPattern;
  }

  // tag_decoration - computed: false, optional: false, required: true
  private _tagDecoration?: string; 
  public get tagDecoration() {
    return this.getStringAttribute('tag_decoration');
  }
  public set tagDecoration(value: string) {
    this._tagDecoration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagDecorationInput() {
    return this._tagDecoration;
  }

  // tag_pattern - computed: false, optional: false, required: true
  private _tagPattern?: string; 
  public get tagPattern() {
    return this.getStringAttribute('tag_pattern');
  }
  public set tagPattern(value: string) {
    this._tagPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPatternInput() {
    return this._tagPattern;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule tencentcloud_tcr_immutable_tag_rule}
*/
export class TcrImmutableTagRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_immutable_tag_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcrImmutableTagRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcrImmutableTagRule to import
  * @param importFromId The id of the existing TcrImmutableTagRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcrImmutableTagRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_immutable_tag_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcr_immutable_tag_rule tencentcloud_tcr_immutable_tag_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcrImmutableTagRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TcrImmutableTagRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_immutable_tag_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._namespaceName = config.namespaceName;
    this._registryId = config.registryId;
    this._tags = config.tags;
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new TcrImmutableTagRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: TcrImmutableTagRuleRule) {
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
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      registry_id: cdktf.stringToTerraform(this._registryId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      rule: tcrImmutableTagRuleRuleToTerraform(this._rule.internalValue),
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
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rule: {
        value: tcrImmutableTagRuleRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcrImmutableTagRuleRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
