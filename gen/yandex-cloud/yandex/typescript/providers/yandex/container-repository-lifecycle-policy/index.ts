// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRepositoryLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#description ContainerRepositoryLifecyclePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#id ContainerRepositoryLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#name ContainerRepositoryLifecyclePolicy#name}
  */
  readonly name?: string;
  /**
  * The ID of the repository that the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#repository_id ContainerRepositoryLifecyclePolicy#repository_id}
  */
  readonly repositoryId: string;
  /**
  * The status of lifecycle policy. Must be `active` or `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#status ContainerRepositoryLifecyclePolicy#status}
  */
  readonly status: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#rule ContainerRepositoryLifecyclePolicy#rule}
  */
  readonly rule?: ContainerRepositoryLifecyclePolicyRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#timeouts ContainerRepositoryLifecyclePolicy#timeouts}
  */
  readonly timeouts?: ContainerRepositoryLifecyclePolicyTimeouts;
}
export interface ContainerRepositoryLifecyclePolicyRule {
  /**
  * Description of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#description ContainerRepositoryLifecyclePolicy#description}
  */
  readonly description?: string;
  /**
  * The period of time that must pass after creating a image for it to suit the automatic deletion criteria. It must be a multiple of 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#expire_period ContainerRepositoryLifecyclePolicy#expire_period}
  */
  readonly expirePeriod?: string;
  /**
  * The number of images to be retained even if the `expire_period` already expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#retained_top ContainerRepositoryLifecyclePolicy#retained_top}
  */
  readonly retainedTop?: number;
  /**
  * Tag to specify a filter as a regular expression. For example `.*` - all images with tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#tag_regexp ContainerRepositoryLifecyclePolicy#tag_regexp}
  */
  readonly tagRegexp?: string;
  /**
  * If enabled, rules apply to untagged Docker images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#untagged ContainerRepositoryLifecyclePolicy#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
}

export function containerRepositoryLifecyclePolicyRuleToTerraform(struct?: ContainerRepositoryLifecyclePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expire_period: cdktf.stringToTerraform(struct!.expirePeriod),
    retained_top: cdktf.numberToTerraform(struct!.retainedTop),
    tag_regexp: cdktf.stringToTerraform(struct!.tagRegexp),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
  }
}


export function containerRepositoryLifecyclePolicyRuleToHclTerraform(struct?: ContainerRepositoryLifecyclePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_period: {
      value: cdktf.stringToHclTerraform(struct!.expirePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retained_top: {
      value: cdktf.numberToHclTerraform(struct!.retainedTop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_regexp: {
      value: cdktf.stringToHclTerraform(struct!.tagRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untagged: {
      value: cdktf.booleanToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRepositoryLifecyclePolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRepositoryLifecyclePolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expirePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirePeriod = this._expirePeriod;
    }
    if (this._retainedTop !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainedTop = this._retainedTop;
    }
    if (this._tagRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagRegexp = this._tagRegexp;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRepositoryLifecyclePolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._expirePeriod = undefined;
      this._retainedTop = undefined;
      this._tagRegexp = undefined;
      this._untagged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._expirePeriod = value.expirePeriod;
      this._retainedTop = value.retainedTop;
      this._tagRegexp = value.tagRegexp;
      this._untagged = value.untagged;
    }
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

  // expire_period - computed: false, optional: true, required: false
  private _expirePeriod?: string; 
  public get expirePeriod() {
    return this.getStringAttribute('expire_period');
  }
  public set expirePeriod(value: string) {
    this._expirePeriod = value;
  }
  public resetExpirePeriod() {
    this._expirePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirePeriodInput() {
    return this._expirePeriod;
  }

  // retained_top - computed: true, optional: true, required: false
  private _retainedTop?: number; 
  public get retainedTop() {
    return this.getNumberAttribute('retained_top');
  }
  public set retainedTop(value: number) {
    this._retainedTop = value;
  }
  public resetRetainedTop() {
    this._retainedTop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainedTopInput() {
    return this._retainedTop;
  }

  // tag_regexp - computed: false, optional: true, required: false
  private _tagRegexp?: string; 
  public get tagRegexp() {
    return this.getStringAttribute('tag_regexp');
  }
  public set tagRegexp(value: string) {
    this._tagRegexp = value;
  }
  public resetTagRegexp() {
    this._tagRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagRegexpInput() {
    return this._tagRegexp;
  }

  // untagged - computed: true, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }
}

export class ContainerRepositoryLifecyclePolicyRuleList extends cdktf.ComplexList {
  public internalValue? : ContainerRepositoryLifecyclePolicyRule[] | cdktf.IResolvable

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
  public get(index: number): ContainerRepositoryLifecyclePolicyRuleOutputReference {
    return new ContainerRepositoryLifecyclePolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRepositoryLifecyclePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#default ContainerRepositoryLifecyclePolicy#default}
  */
  readonly default?: string;
}

export function containerRepositoryLifecyclePolicyTimeoutsToTerraform(struct?: ContainerRepositoryLifecyclePolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function containerRepositoryLifecyclePolicyTimeoutsToHclTerraform(struct?: ContainerRepositoryLifecyclePolicyTimeouts | cdktf.IResolvable): any {
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

export class ContainerRepositoryLifecyclePolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerRepositoryLifecyclePolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRepositoryLifecyclePolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy yandex_container_repository_lifecycle_policy}
*/
export class ContainerRepositoryLifecyclePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_container_repository_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerRepositoryLifecyclePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerRepositoryLifecyclePolicy to import
  * @param importFromId The id of the existing ContainerRepositoryLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerRepositoryLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_container_repository_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/container_repository_lifecycle_policy yandex_container_repository_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerRepositoryLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerRepositoryLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_container_repository_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._repositoryId = config.repositoryId;
    this._status = config.status;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ContainerRepositoryLifecyclePolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ContainerRepositoryLifecyclePolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerRepositoryLifecyclePolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerRepositoryLifecyclePolicyTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      status: cdktf.stringToTerraform(this._status),
      rule: cdktf.listMapper(containerRepositoryLifecyclePolicyRuleToTerraform, true)(this._rule.internalValue),
      timeouts: containerRepositoryLifecyclePolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
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
      rule: {
        value: cdktf.listMapperHcl(containerRepositoryLifecyclePolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRepositoryLifecyclePolicyRuleList",
      },
      timeouts: {
        value: containerRepositoryLifecyclePolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerRepositoryLifecyclePolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
