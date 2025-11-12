// https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MvFeatureOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean value of the multivariate option if the type is `bool`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option#boolean_value MvFeatureOption#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Percentage allocation of the current multivariate option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option#default_percentage_allocation MvFeatureOption#default_percentage_allocation}
  */
  readonly defaultPercentageAllocation: number;
  /**
  * UUID of the feature to which the multivariate option belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option#feature_uuid MvFeatureOption#feature_uuid}
  */
  readonly featureUuid: string;
  /**
  * Integer value of the multivariate option if the type is `int`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option#integer_value MvFeatureOption#integer_value}
  */
  readonly integerValue?: number;
  /**
  * String value of the multivariate option if the type is `unicode`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option#string_value MvFeatureOption#string_value}
  */
  readonly stringValue?: string;
  /**
  * Type of the multivariate option can be `unicode`, `int` or `bool`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option#type MvFeatureOption#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option flagsmith_mv_feature_option}
*/
export class MvFeatureOption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flagsmith_mv_feature_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MvFeatureOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MvFeatureOption to import
  * @param importFromId The id of the existing MvFeatureOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MvFeatureOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flagsmith_mv_feature_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/mv_feature_option flagsmith_mv_feature_option} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MvFeatureOptionConfig
  */
  public constructor(scope: Construct, id: string, config: MvFeatureOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'flagsmith_mv_feature_option',
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
    this._booleanValue = config.booleanValue;
    this._defaultPercentageAllocation = config.defaultPercentageAllocation;
    this._featureUuid = config.featureUuid;
    this._integerValue = config.integerValue;
    this._stringValue = config.stringValue;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_percentage_allocation - computed: false, optional: false, required: true
  private _defaultPercentageAllocation?: number; 
  public get defaultPercentageAllocation() {
    return this.getNumberAttribute('default_percentage_allocation');
  }
  public set defaultPercentageAllocation(value: number) {
    this._defaultPercentageAllocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPercentageAllocationInput() {
    return this._defaultPercentageAllocation;
  }

  // feature_id - computed: true, optional: false, required: false
  public get featureId() {
    return this.getNumberAttribute('feature_id');
  }

  // feature_uuid - computed: false, optional: false, required: true
  private _featureUuid?: string; 
  public get featureUuid() {
    return this.getStringAttribute('feature_uuid');
  }
  public set featureUuid(value: string) {
    this._featureUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureUuidInput() {
    return this._featureUuid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boolean_value: cdktf.booleanToTerraform(this._booleanValue),
      default_percentage_allocation: cdktf.numberToTerraform(this._defaultPercentageAllocation),
      feature_uuid: cdktf.stringToTerraform(this._featureUuid),
      integer_value: cdktf.numberToTerraform(this._integerValue),
      string_value: cdktf.stringToTerraform(this._stringValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boolean_value: {
        value: cdktf.booleanToHclTerraform(this._booleanValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_percentage_allocation: {
        value: cdktf.numberToHclTerraform(this._defaultPercentageAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feature_uuid: {
        value: cdktf.stringToHclTerraform(this._featureUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integer_value: {
        value: cdktf.numberToHclTerraform(this._integerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      string_value: {
        value: cdktf.stringToHclTerraform(this._stringValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
