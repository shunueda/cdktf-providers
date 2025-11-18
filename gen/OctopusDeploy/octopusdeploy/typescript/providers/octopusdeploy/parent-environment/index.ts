// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ParentEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic deprovisioning rule for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#automatic_deprovisioning_rule ParentEnvironment#automatic_deprovisioning_rule}
  */
  readonly automaticDeprovisioningRule?: ParentEnvironmentAutomaticDeprovisioningRule;
  /**
  * The description of this parent environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#description ParentEnvironment#description}
  */
  readonly description?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#name ParentEnvironment#name}
  */
  readonly name: string;
  /**
  * The human-readable unique identifier for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#slug ParentEnvironment#slug}
  */
  readonly slug?: string;
  /**
  * The sort order of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#sort_order ParentEnvironment#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * The space ID associated with this parent environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#space_id ParentEnvironment#space_id}
  */
  readonly spaceId: string;
  /**
  * Indicates whether guided failure mode is enabled for this parent environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#use_guided_failure ParentEnvironment#use_guided_failure}
  */
  readonly useGuidedFailure?: boolean | cdktf.IResolvable;
}
export interface ParentEnvironmentAutomaticDeprovisioningRule {
  /**
  * Number of days to wait before deprovisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#days ParentEnvironment#days}
  */
  readonly days?: number;
  /**
  * Number of hours to wait before deprovisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#hours ParentEnvironment#hours}
  */
  readonly hours?: number;
}

export function parentEnvironmentAutomaticDeprovisioningRuleToTerraform(struct?: ParentEnvironmentAutomaticDeprovisioningRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
  }
}


export function parentEnvironmentAutomaticDeprovisioningRuleToHclTerraform(struct?: ParentEnvironmentAutomaticDeprovisioningRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ParentEnvironmentAutomaticDeprovisioningRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ParentEnvironmentAutomaticDeprovisioningRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParentEnvironmentAutomaticDeprovisioningRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._hours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._hours = value.hours;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment octopusdeploy_parent_environment}
*/
export class ParentEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_parent_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ParentEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ParentEnvironment to import
  * @param importFromId The id of the existing ParentEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ParentEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_parent_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/parent_environment octopusdeploy_parent_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ParentEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ParentEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_parent_environment',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticDeprovisioningRule.internalValue = config.automaticDeprovisioningRule;
    this._description = config.description;
    this._name = config.name;
    this._slug = config.slug;
    this._sortOrder = config.sortOrder;
    this._spaceId = config.spaceId;
    this._useGuidedFailure = config.useGuidedFailure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_deprovisioning_rule - computed: true, optional: true, required: false
  private _automaticDeprovisioningRule = new ParentEnvironmentAutomaticDeprovisioningRuleOutputReference(this, "automatic_deprovisioning_rule");
  public get automaticDeprovisioningRule() {
    return this._automaticDeprovisioningRule;
  }
  public putAutomaticDeprovisioningRule(value: ParentEnvironmentAutomaticDeprovisioningRule) {
    this._automaticDeprovisioningRule.internalValue = value;
  }
  public resetAutomaticDeprovisioningRule() {
    this._automaticDeprovisioningRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticDeprovisioningRuleInput() {
    return this._automaticDeprovisioningRule.internalValue;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // use_guided_failure - computed: true, optional: true, required: false
  private _useGuidedFailure?: boolean | cdktf.IResolvable; 
  public get useGuidedFailure() {
    return this.getBooleanAttribute('use_guided_failure');
  }
  public set useGuidedFailure(value: boolean | cdktf.IResolvable) {
    this._useGuidedFailure = value;
  }
  public resetUseGuidedFailure() {
    this._useGuidedFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGuidedFailureInput() {
    return this._useGuidedFailure;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_deprovisioning_rule: parentEnvironmentAutomaticDeprovisioningRuleToTerraform(this._automaticDeprovisioningRule.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      sort_order: cdktf.numberToTerraform(this._sortOrder),
      space_id: cdktf.stringToTerraform(this._spaceId),
      use_guided_failure: cdktf.booleanToTerraform(this._useGuidedFailure),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_deprovisioning_rule: {
        value: parentEnvironmentAutomaticDeprovisioningRuleToHclTerraform(this._automaticDeprovisioningRule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ParentEnvironmentAutomaticDeprovisioningRule",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.numberToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_guided_failure: {
        value: cdktf.booleanToHclTerraform(this._useGuidedFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
