// https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleResourcePolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Custom labels for the resource policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#labels ConsoleResourcePolicyV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource Policy name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#name ConsoleResourcePolicyV1#name}
  */
  readonly name: string;
  /**
  * Resource Policy specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#spec ConsoleResourcePolicyV1#spec}
  */
  readonly spec: ConsoleResourcePolicyV1Spec;
}
export interface ConsoleResourcePolicyV1SpecRules {
  /**
  * A valid CEL expression, see [CEL documentation](https://cel.dev/) for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#condition ConsoleResourcePolicyV1#condition}
  */
  readonly condition: string;
  /**
  * The error message that will be displayed when the condition is not met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#error_message ConsoleResourcePolicyV1#error_message}
  */
  readonly errorMessage: string;
}

export function consoleResourcePolicyV1SpecRulesToTerraform(struct?: ConsoleResourcePolicyV1SpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    error_message: cdktf.stringToTerraform(struct!.errorMessage),
  }
}


export function consoleResourcePolicyV1SpecRulesToHclTerraform(struct?: ConsoleResourcePolicyV1SpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_message: {
      value: cdktf.stringToHclTerraform(struct!.errorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleResourcePolicyV1SpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsoleResourcePolicyV1SpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._errorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessage = this._errorMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleResourcePolicyV1SpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._errorMessage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._errorMessage = value.errorMessage;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // error_message - computed: false, optional: false, required: true
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }
}

export class ConsoleResourcePolicyV1SpecRulesList extends cdktf.ComplexList {
  public internalValue? : ConsoleResourcePolicyV1SpecRules[] | cdktf.IResolvable

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
  public get(index: number): ConsoleResourcePolicyV1SpecRulesOutputReference {
    return new ConsoleResourcePolicyV1SpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsoleResourcePolicyV1Spec {
  /**
  * Description of the resource policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#description ConsoleResourcePolicyV1#description}
  */
  readonly description?: string;
  /**
  * Set of all rules to apply on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#rules ConsoleResourcePolicyV1#rules}
  */
  readonly rules: ConsoleResourcePolicyV1SpecRules[] | cdktf.IResolvable;
  /**
  * Type of the resource to apply policy on. Valid values are: ApplicationGroup, Connector, Subject, Topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#target_kind ConsoleResourcePolicyV1#target_kind}
  */
  readonly targetKind: string;
}

export function consoleResourcePolicyV1SpecToTerraform(struct?: ConsoleResourcePolicyV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    rules: cdktf.listMapper(consoleResourcePolicyV1SpecRulesToTerraform, false)(struct!.rules),
    target_kind: cdktf.stringToTerraform(struct!.targetKind),
  }
}


export function consoleResourcePolicyV1SpecToHclTerraform(struct?: ConsoleResourcePolicyV1Spec | cdktf.IResolvable): any {
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
    rules: {
      value: cdktf.listMapperHcl(consoleResourcePolicyV1SpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "ConsoleResourcePolicyV1SpecRulesList",
    },
    target_kind: {
      value: cdktf.stringToHclTerraform(struct!.targetKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleResourcePolicyV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleResourcePolicyV1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._targetKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKind = this._targetKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleResourcePolicyV1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._rules.internalValue = undefined;
      this._targetKind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._rules.internalValue = value.rules;
      this._targetKind = value.targetKind;
    }
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

  // rules - computed: false, optional: false, required: true
  private _rules = new ConsoleResourcePolicyV1SpecRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ConsoleResourcePolicyV1SpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // target_kind - computed: false, optional: false, required: true
  private _targetKind?: string; 
  public get targetKind() {
    return this.getStringAttribute('target_kind');
  }
  public set targetKind(value: string) {
    this._targetKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKindInput() {
    return this._targetKind;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1 conduktor_console_resource_policy_v1}
*/
export class ConsoleResourcePolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_resource_policy_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleResourcePolicyV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleResourcePolicyV1 to import
  * @param importFromId The id of the existing ConsoleResourcePolicyV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleResourcePolicyV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_resource_policy_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.0/docs/resources/console_resource_policy_v1 conduktor_console_resource_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleResourcePolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleResourcePolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_resource_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labels = config.labels;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleResourcePolicyV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleResourcePolicyV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      spec: consoleResourcePolicyV1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: consoleResourcePolicyV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleResourcePolicyV1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
