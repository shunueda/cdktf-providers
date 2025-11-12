// https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureStateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Used for enabling/disabling the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#enabled FeatureState#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Client side environment key associated with the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#environment_key FeatureState#environment_key}
  */
  readonly environmentKey: string;
  /**
  * ID of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#feature_id FeatureState#feature_id}
  */
  readonly featureId: number;
  /**
  * Value for the feature State. NOTE: One of string_value, integer_value or boolean_value must be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#feature_state_value FeatureState#feature_state_value}
  */
  readonly featureStateValue: FeatureStateFeatureStateValue;
  /**
  * ID of the segment, used for creating segment overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#segment_id FeatureState#segment_id}
  */
  readonly segmentId?: number;
  /**
  * Priority of the segment overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#segment_priority FeatureState#segment_priority}
  */
  readonly segmentPriority?: number;
}
export interface FeatureStateFeatureStateValue {
  /**
  * Boolean value of the feature if the type is `bool`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#boolean_value FeatureState#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer value of the feature if the type is `int`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#integer_value FeatureState#integer_value}
  */
  readonly integerValue?: number;
  /**
  * String value of the feature if the type is `unicode`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#string_value FeatureState#string_value}
  */
  readonly stringValue?: string;
  /**
  * Type of the feature state value, can be `unicode`, `int` or `bool`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#type FeatureState#type}
  */
  readonly type: string;
}

export function featureStateFeatureStateValueToTerraform(struct?: FeatureStateFeatureStateValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function featureStateFeatureStateValueToHclTerraform(struct?: FeatureStateFeatureStateValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureStateFeatureStateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureStateFeatureStateValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureStateFeatureStateValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._type = value.type;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state flagsmith_feature_state}
*/
export class FeatureState extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flagsmith_feature_state";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FeatureState resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureState to import
  * @param importFromId The id of the existing FeatureState that should be imported. Refer to the {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureState to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flagsmith_feature_state", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/feature_state flagsmith_feature_state} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureStateConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureStateConfig) {
    super(scope, id, {
      terraformResourceType: 'flagsmith_feature_state',
      terraformGeneratorMetadata: {
        providerName: 'flagsmith',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._environmentKey = config.environmentKey;
    this._featureId = config.featureId;
    this._featureStateValue.internalValue = config.featureStateValue;
    this._segmentId = config.segmentId;
    this._segmentPriority = config.segmentPriority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }

  // environment_key - computed: false, optional: false, required: true
  private _environmentKey?: string; 
  public get environmentKey() {
    return this.getStringAttribute('environment_key');
  }
  public set environmentKey(value: string) {
    this._environmentKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentKeyInput() {
    return this._environmentKey;
  }

  // feature_id - computed: false, optional: false, required: true
  private _featureId?: number; 
  public get featureId() {
    return this.getNumberAttribute('feature_id');
  }
  public set featureId(value: number) {
    this._featureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureIdInput() {
    return this._featureId;
  }

  // feature_segment_id - computed: true, optional: false, required: false
  public get featureSegmentId() {
    return this.getNumberAttribute('feature_segment_id');
  }

  // feature_state_value - computed: false, optional: false, required: true
  private _featureStateValue = new FeatureStateFeatureStateValueOutputReference(this, "feature_state_value");
  public get featureStateValue() {
    return this._featureStateValue;
  }
  public putFeatureStateValue(value: FeatureStateFeatureStateValue) {
    this._featureStateValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureStateValueInput() {
    return this._featureStateValue.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // segment_id - computed: false, optional: true, required: false
  private _segmentId?: number; 
  public get segmentId() {
    return this.getNumberAttribute('segment_id');
  }
  public set segmentId(value: number) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // segment_priority - computed: true, optional: true, required: false
  private _segmentPriority?: number; 
  public get segmentPriority() {
    return this.getNumberAttribute('segment_priority');
  }
  public set segmentPriority(value: number) {
    this._segmentPriority = value;
  }
  public resetSegmentPriority() {
    this._segmentPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPriorityInput() {
    return this._segmentPriority;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_key: cdktf.stringToTerraform(this._environmentKey),
      feature_id: cdktf.numberToTerraform(this._featureId),
      feature_state_value: featureStateFeatureStateValueToTerraform(this._featureStateValue.internalValue),
      segment_id: cdktf.numberToTerraform(this._segmentId),
      segment_priority: cdktf.numberToTerraform(this._segmentPriority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_key: {
        value: cdktf.stringToHclTerraform(this._environmentKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_id: {
        value: cdktf.numberToHclTerraform(this._featureId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feature_state_value: {
        value: featureStateFeatureStateValueToHclTerraform(this._featureStateValue.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureStateFeatureStateValue",
      },
      segment_id: {
        value: cdktf.numberToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      segment_priority: {
        value: cdktf.numberToHclTerraform(this._segmentPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
