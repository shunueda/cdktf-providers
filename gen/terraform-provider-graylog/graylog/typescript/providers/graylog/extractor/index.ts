// https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtractorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#condition_type Extractor#condition_type}
  */
  readonly conditionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#condition_value Extractor#condition_value}
  */
  readonly conditionValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#cursor_strategy Extractor#cursor_strategy}
  */
  readonly cursorStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#extractor_config Extractor#extractor_config}
  */
  readonly extractorConfig: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#extractor_id Extractor#extractor_id}
  */
  readonly extractorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#id Extractor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#input_id Extractor#input_id}
  */
  readonly inputId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#order Extractor#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#source_field Extractor#source_field}
  */
  readonly sourceField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#target_field Extractor#target_field}
  */
  readonly targetField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#title Extractor#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#type Extractor#type}
  */
  readonly type: string;
  /**
  * converters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#converters Extractor#converters}
  */
  readonly converters?: ExtractorConverters[] | cdktf.IResolvable;
}
export interface ExtractorConverters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#config Extractor#config}
  */
  readonly config: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#type Extractor#type}
  */
  readonly type: string;
}

export function extractorConvertersToTerraform(struct?: ExtractorConverters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function extractorConvertersToHclTerraform(struct?: ExtractorConverters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
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

export class ExtractorConvertersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtractorConverters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtractorConverters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class ExtractorConvertersList extends cdktf.ComplexList {
  public internalValue? : ExtractorConverters[] | cdktf.IResolvable

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
  public get(index: number): ExtractorConvertersOutputReference {
    return new ExtractorConvertersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor graylog_extractor}
*/
export class Extractor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graylog_extractor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Extractor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Extractor to import
  * @param importFromId The id of the existing Extractor that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Extractor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graylog_extractor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/extractor graylog_extractor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtractorConfig
  */
  public constructor(scope: Construct, id: string, config: ExtractorConfig) {
    super(scope, id, {
      terraformResourceType: 'graylog_extractor',
      terraformGeneratorMetadata: {
        providerName: 'graylog',
        providerVersion: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionType = config.conditionType;
    this._conditionValue = config.conditionValue;
    this._cursorStrategy = config.cursorStrategy;
    this._extractorConfig = config.extractorConfig;
    this._extractorId = config.extractorId;
    this._id = config.id;
    this._inputId = config.inputId;
    this._order = config.order;
    this._sourceField = config.sourceField;
    this._targetField = config.targetField;
    this._title = config.title;
    this._type = config.type;
    this._converters.internalValue = config.converters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // condition_value - computed: false, optional: true, required: false
  private _conditionValue?: string; 
  public get conditionValue() {
    return this.getStringAttribute('condition_value');
  }
  public set conditionValue(value: string) {
    this._conditionValue = value;
  }
  public resetConditionValue() {
    this._conditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }

  // cursor_strategy - computed: false, optional: false, required: true
  private _cursorStrategy?: string; 
  public get cursorStrategy() {
    return this.getStringAttribute('cursor_strategy');
  }
  public set cursorStrategy(value: string) {
    this._cursorStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorStrategyInput() {
    return this._cursorStrategy;
  }

  // extractor_config - computed: false, optional: false, required: true
  private _extractorConfig?: string; 
  public get extractorConfig() {
    return this.getStringAttribute('extractor_config');
  }
  public set extractorConfig(value: string) {
    this._extractorConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorConfigInput() {
    return this._extractorConfig;
  }

  // extractor_id - computed: true, optional: true, required: false
  private _extractorId?: string; 
  public get extractorId() {
    return this.getStringAttribute('extractor_id');
  }
  public set extractorId(value: string) {
    this._extractorId = value;
  }
  public resetExtractorId() {
    this._extractorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorIdInput() {
    return this._extractorId;
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

  // input_id - computed: false, optional: false, required: true
  private _inputId?: string; 
  public get inputId() {
    return this.getStringAttribute('input_id');
  }
  public set inputId(value: string) {
    this._inputId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputIdInput() {
    return this._inputId;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }

  // target_field - computed: false, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // converters - computed: false, optional: true, required: false
  private _converters = new ExtractorConvertersList(this, "converters", false);
  public get converters() {
    return this._converters;
  }
  public putConverters(value: ExtractorConverters[] | cdktf.IResolvable) {
    this._converters.internalValue = value;
  }
  public resetConverters() {
    this._converters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertersInput() {
    return this._converters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_type: cdktf.stringToTerraform(this._conditionType),
      condition_value: cdktf.stringToTerraform(this._conditionValue),
      cursor_strategy: cdktf.stringToTerraform(this._cursorStrategy),
      extractor_config: cdktf.stringToTerraform(this._extractorConfig),
      extractor_id: cdktf.stringToTerraform(this._extractorId),
      id: cdktf.stringToTerraform(this._id),
      input_id: cdktf.stringToTerraform(this._inputId),
      order: cdktf.numberToTerraform(this._order),
      source_field: cdktf.stringToTerraform(this._sourceField),
      target_field: cdktf.stringToTerraform(this._targetField),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      converters: cdktf.listMapper(extractorConvertersToTerraform, true)(this._converters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_value: {
        value: cdktf.stringToHclTerraform(this._conditionValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cursor_strategy: {
        value: cdktf.stringToHclTerraform(this._cursorStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extractor_config: {
        value: cdktf.stringToHclTerraform(this._extractorConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extractor_id: {
        value: cdktf.stringToHclTerraform(this._extractorId),
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
      input_id: {
        value: cdktf.stringToHclTerraform(this._inputId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_field: {
        value: cdktf.stringToHclTerraform(this._sourceField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_field: {
        value: cdktf.stringToHclTerraform(this._targetField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
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
      converters: {
        value: cdktf.listMapperHcl(extractorConvertersToHclTerraform, true)(this._converters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtractorConvertersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
