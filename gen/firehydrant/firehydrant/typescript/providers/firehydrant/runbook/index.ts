// https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RunbookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#attachment_rule Runbook#attachment_rule}
  */
  readonly attachmentRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#description Runbook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#id Runbook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#name Runbook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#owner_id Runbook#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#restricted Runbook#restricted}
  */
  readonly restricted?: boolean | cdktf.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#steps Runbook#steps}
  */
  readonly steps: RunbookSteps[] | cdktf.IResolvable;
}
export interface RunbookSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#action_id Runbook#action_id}
  */
  readonly actionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#automatic Runbook#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#config Runbook#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#name Runbook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#repeats Runbook#repeats}
  */
  readonly repeats?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#repeats_duration Runbook#repeats_duration}
  */
  readonly repeatsDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#rule Runbook#rule}
  */
  readonly rule?: string;
}

export function runbookStepsToTerraform(struct?: RunbookSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    automatic: cdktf.booleanToTerraform(struct!.automatic),
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    repeats: cdktf.booleanToTerraform(struct!.repeats),
    repeats_duration: cdktf.stringToTerraform(struct!.repeatsDuration),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}


export function runbookStepsToHclTerraform(struct?: RunbookSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_id: {
      value: cdktf.stringToHclTerraform(struct!.actionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic: {
      value: cdktf.booleanToHclTerraform(struct!.automatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeats: {
      value: cdktf.booleanToHclTerraform(struct!.repeats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repeats_duration: {
      value: cdktf.stringToHclTerraform(struct!.repeatsDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RunbookStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RunbookSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._repeats !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeats = this._repeats;
    }
    if (this._repeatsDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatsDuration = this._repeatsDuration;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RunbookSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionId = undefined;
      this._automatic = undefined;
      this._config = undefined;
      this._name = undefined;
      this._repeats = undefined;
      this._repeatsDuration = undefined;
      this._rule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionId = value.actionId;
      this._automatic = value.automatic;
      this._config = value.config;
      this._name = value.name;
      this._repeats = value.repeats;
      this._repeatsDuration = value.repeatsDuration;
      this._rule = value.rule;
    }
  }

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic?: boolean | cdktf.IResolvable; 
  public get automatic() {
    return this.getBooleanAttribute('automatic');
  }
  public set automatic(value: boolean | cdktf.IResolvable) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // repeats - computed: false, optional: true, required: false
  private _repeats?: boolean | cdktf.IResolvable; 
  public get repeats() {
    return this.getBooleanAttribute('repeats');
  }
  public set repeats(value: boolean | cdktf.IResolvable) {
    this._repeats = value;
  }
  public resetRepeats() {
    this._repeats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatsInput() {
    return this._repeats;
  }

  // repeats_duration - computed: false, optional: true, required: false
  private _repeatsDuration?: string; 
  public get repeatsDuration() {
    return this.getStringAttribute('repeats_duration');
  }
  public set repeatsDuration(value: string) {
    this._repeatsDuration = value;
  }
  public resetRepeatsDuration() {
    this._repeatsDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatsDurationInput() {
    return this._repeatsDuration;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // step_id - computed: true, optional: false, required: false
  public get stepId() {
    return this.getStringAttribute('step_id');
  }
}

export class RunbookStepsList extends cdktf.ComplexList {
  public internalValue? : RunbookSteps[] | cdktf.IResolvable

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
  public get(index: number): RunbookStepsOutputReference {
    return new RunbookStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook firehydrant_runbook}
*/
export class Runbook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_runbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Runbook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Runbook to import
  * @param importFromId The id of the existing Runbook that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Runbook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_runbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.15.0/docs/resources/runbook firehydrant_runbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RunbookConfig
  */
  public constructor(scope: Construct, id: string, config: RunbookConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_runbook',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachmentRule = config.attachmentRule;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._ownerId = config.ownerId;
    this._restricted = config.restricted;
    this._steps.internalValue = config.steps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_rule - computed: false, optional: true, required: false
  private _attachmentRule?: string; 
  public get attachmentRule() {
    return this.getStringAttribute('attachment_rule');
  }
  public set attachmentRule(value: string) {
    this._attachmentRule = value;
  }
  public resetAttachmentRule() {
    this._attachmentRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentRuleInput() {
    return this._attachmentRule;
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

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // restricted - computed: false, optional: true, required: false
  private _restricted?: boolean | cdktf.IResolvable; 
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }
  public set restricted(value: boolean | cdktf.IResolvable) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new RunbookStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: RunbookSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_rule: cdktf.stringToTerraform(this._attachmentRule),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      restricted: cdktf.booleanToTerraform(this._restricted),
      steps: cdktf.listMapper(runbookStepsToTerraform, true)(this._steps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_rule: {
        value: cdktf.stringToHclTerraform(this._attachmentRule),
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
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted: {
        value: cdktf.booleanToHclTerraform(this._restricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      steps: {
        value: cdktf.listMapperHcl(runbookStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RunbookStepsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
