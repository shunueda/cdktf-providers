// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DropRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#activated_drop_duration DropRule#activated_drop_duration}
  */
  readonly activatedDropDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#active DropRule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#conditional_drop DropRule#conditional_drop}
  */
  readonly conditionalDrop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#drop_nan_value DropRule#drop_nan_value}
  */
  readonly dropNanValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#id DropRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#mode DropRule#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#name DropRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#query DropRule#query}
  */
  readonly query: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#rate_limit_threshold DropRule#rate_limit_threshold}
  */
  readonly rateLimitThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#slug DropRule#slug}
  */
  readonly slug?: string;
  /**
  * value_based_drop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#value_based_drop DropRule#value_based_drop}
  */
  readonly valueBasedDrop?: DropRuleValueBasedDrop;
}
export interface DropRuleValueBasedDrop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#target_drop_value DropRule#target_drop_value}
  */
  readonly targetDropValue: number;
}

export function dropRuleValueBasedDropToTerraform(struct?: DropRuleValueBasedDropOutputReference | DropRuleValueBasedDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_drop_value: cdktf.numberToTerraform(struct!.targetDropValue),
  }
}


export function dropRuleValueBasedDropToHclTerraform(struct?: DropRuleValueBasedDropOutputReference | DropRuleValueBasedDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_drop_value: {
      value: cdktf.numberToHclTerraform(struct!.targetDropValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DropRuleValueBasedDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DropRuleValueBasedDrop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetDropValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDropValue = this._targetDropValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DropRuleValueBasedDrop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetDropValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetDropValue = value.targetDropValue;
    }
  }

  // target_drop_value - computed: false, optional: false, required: true
  private _targetDropValue?: number; 
  public get targetDropValue() {
    return this.getNumberAttribute('target_drop_value');
  }
  public set targetDropValue(value: number) {
    this._targetDropValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDropValueInput() {
    return this._targetDropValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule chronosphere_drop_rule}
*/
export class DropRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_drop_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DropRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DropRule to import
  * @param importFromId The id of the existing DropRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DropRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_drop_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/drop_rule chronosphere_drop_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DropRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DropRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_drop_rule',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activatedDropDuration = config.activatedDropDuration;
    this._active = config.active;
    this._conditionalDrop = config.conditionalDrop;
    this._dropNanValue = config.dropNanValue;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._query = config.query;
    this._rateLimitThreshold = config.rateLimitThreshold;
    this._slug = config.slug;
    this._valueBasedDrop.internalValue = config.valueBasedDrop;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated_drop_duration - computed: false, optional: true, required: false
  private _activatedDropDuration?: string; 
  public get activatedDropDuration() {
    return this.getStringAttribute('activated_drop_duration');
  }
  public set activatedDropDuration(value: string) {
    this._activatedDropDuration = value;
  }
  public resetActivatedDropDuration() {
    this._activatedDropDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedDropDurationInput() {
    return this._activatedDropDuration;
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // conditional_drop - computed: false, optional: true, required: false
  private _conditionalDrop?: boolean | cdktf.IResolvable; 
  public get conditionalDrop() {
    return this.getBooleanAttribute('conditional_drop');
  }
  public set conditionalDrop(value: boolean | cdktf.IResolvable) {
    this._conditionalDrop = value;
  }
  public resetConditionalDrop() {
    this._conditionalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalDropInput() {
    return this._conditionalDrop;
  }

  // drop_nan_value - computed: false, optional: true, required: false
  private _dropNanValue?: boolean | cdktf.IResolvable; 
  public get dropNanValue() {
    return this.getBooleanAttribute('drop_nan_value');
  }
  public set dropNanValue(value: boolean | cdktf.IResolvable) {
    this._dropNanValue = value;
  }
  public resetDropNanValue() {
    this._dropNanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropNanValueInput() {
    return this._dropNanValue;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // query - computed: false, optional: false, required: true
  private _query?: string[]; 
  public get query() {
    return this.getListAttribute('query');
  }
  public set query(value: string[]) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rate_limit_threshold - computed: false, optional: true, required: false
  private _rateLimitThreshold?: number; 
  public get rateLimitThreshold() {
    return this.getNumberAttribute('rate_limit_threshold');
  }
  public set rateLimitThreshold(value: number) {
    this._rateLimitThreshold = value;
  }
  public resetRateLimitThreshold() {
    this._rateLimitThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitThresholdInput() {
    return this._rateLimitThreshold;
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

  // value_based_drop - computed: false, optional: true, required: false
  private _valueBasedDrop = new DropRuleValueBasedDropOutputReference(this, "value_based_drop");
  public get valueBasedDrop() {
    return this._valueBasedDrop;
  }
  public putValueBasedDrop(value: DropRuleValueBasedDrop) {
    this._valueBasedDrop.internalValue = value;
  }
  public resetValueBasedDrop() {
    this._valueBasedDrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueBasedDropInput() {
    return this._valueBasedDrop.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activated_drop_duration: cdktf.stringToTerraform(this._activatedDropDuration),
      active: cdktf.booleanToTerraform(this._active),
      conditional_drop: cdktf.booleanToTerraform(this._conditionalDrop),
      drop_nan_value: cdktf.booleanToTerraform(this._dropNanValue),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.listMapper(cdktf.stringToTerraform, false)(this._query),
      rate_limit_threshold: cdktf.numberToTerraform(this._rateLimitThreshold),
      slug: cdktf.stringToTerraform(this._slug),
      value_based_drop: dropRuleValueBasedDropToTerraform(this._valueBasedDrop.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activated_drop_duration: {
        value: cdktf.stringToHclTerraform(this._activatedDropDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      conditional_drop: {
        value: cdktf.booleanToHclTerraform(this._conditionalDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drop_nan_value: {
        value: cdktf.booleanToHclTerraform(this._dropNanValue),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      query: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._query),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rate_limit_threshold: {
        value: cdktf.numberToHclTerraform(this._rateLimitThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_based_drop: {
        value: dropRuleValueBasedDropToHclTerraform(this._valueBasedDrop.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DropRuleValueBasedDropList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
