// https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMergeMergeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#id DataMergeMerge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Merge values instead of overwriting?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#merge_on_overwrite DataMergeMerge#merge_on_overwrite}
  */
  readonly mergeOnOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Output format (json, yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#output_format DataMergeMerge#output_format}
  */
  readonly outputFormat: string;
  /**
  * Overwrite existing values with empty values in later layers?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#overwrite_with_empty_value DataMergeMerge#overwrite_with_empty_value}
  */
  readonly overwriteWithEmptyValue?: boolean | cdktf.IResolvable;
  /**
  * Type check values?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#type_check DataMergeMerge#type_check}
  */
  readonly typeCheck?: boolean | cdktf.IResolvable;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#input DataMergeMerge#input}
  */
  readonly input: DataMergeMergeInput[] | cdktf.IResolvable;
}
export interface DataMergeMergeInput {
  /**
  * Encoded data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#data DataMergeMerge#data}
  */
  readonly data: string;
  /**
  * Data format (json, yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#format DataMergeMerge#format}
  */
  readonly format: string;
}

export function dataMergeMergeInputToTerraform(struct?: DataMergeMergeInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function dataMergeMergeInputToHclTerraform(struct?: DataMergeMergeInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMergeMergeInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMergeMergeInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMergeMergeInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._format = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._format = value.format;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}

export class DataMergeMergeInputList extends cdktf.ComplexList {
  public internalValue? : DataMergeMergeInput[] | cdktf.IResolvable

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
  public get(index: number): DataMergeMergeInputOutputReference {
    return new DataMergeMergeInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge merge_merge}
*/
export class DataMergeMerge extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "merge_merge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMergeMerge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMergeMerge to import
  * @param importFromId The id of the existing DataMergeMerge that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMergeMerge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "merge_merge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukecarrier/merge/0.1.1/docs/data-sources/merge merge_merge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMergeMergeConfig
  */
  public constructor(scope: Construct, id: string, config: DataMergeMergeConfig) {
    super(scope, id, {
      terraformResourceType: 'merge_merge',
      terraformGeneratorMetadata: {
        providerName: 'merge',
        providerVersion: '0.1.1'
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
    this._mergeOnOverwrite = config.mergeOnOverwrite;
    this._outputFormat = config.outputFormat;
    this._overwriteWithEmptyValue = config.overwriteWithEmptyValue;
    this._typeCheck = config.typeCheck;
    this._input.internalValue = config.input;
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

  // merge_on_overwrite - computed: false, optional: true, required: false
  private _mergeOnOverwrite?: boolean | cdktf.IResolvable; 
  public get mergeOnOverwrite() {
    return this.getBooleanAttribute('merge_on_overwrite');
  }
  public set mergeOnOverwrite(value: boolean | cdktf.IResolvable) {
    this._mergeOnOverwrite = value;
  }
  public resetMergeOnOverwrite() {
    this._mergeOnOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeOnOverwriteInput() {
    return this._mergeOnOverwrite;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // output_format - computed: false, optional: false, required: true
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // overwrite_with_empty_value - computed: false, optional: true, required: false
  private _overwriteWithEmptyValue?: boolean | cdktf.IResolvable; 
  public get overwriteWithEmptyValue() {
    return this.getBooleanAttribute('overwrite_with_empty_value');
  }
  public set overwriteWithEmptyValue(value: boolean | cdktf.IResolvable) {
    this._overwriteWithEmptyValue = value;
  }
  public resetOverwriteWithEmptyValue() {
    this._overwriteWithEmptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteWithEmptyValueInput() {
    return this._overwriteWithEmptyValue;
  }

  // type_check - computed: false, optional: true, required: false
  private _typeCheck?: boolean | cdktf.IResolvable; 
  public get typeCheck() {
    return this.getBooleanAttribute('type_check');
  }
  public set typeCheck(value: boolean | cdktf.IResolvable) {
    this._typeCheck = value;
  }
  public resetTypeCheck() {
    this._typeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCheckInput() {
    return this._typeCheck;
  }

  // input - computed: false, optional: false, required: true
  private _input = new DataMergeMergeInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: DataMergeMergeInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      merge_on_overwrite: cdktf.booleanToTerraform(this._mergeOnOverwrite),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      overwrite_with_empty_value: cdktf.booleanToTerraform(this._overwriteWithEmptyValue),
      type_check: cdktf.booleanToTerraform(this._typeCheck),
      input: cdktf.listMapper(dataMergeMergeInputToTerraform, true)(this._input.internalValue),
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
      merge_on_overwrite: {
        value: cdktf.booleanToHclTerraform(this._mergeOnOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_with_empty_value: {
        value: cdktf.booleanToHclTerraform(this._overwriteWithEmptyValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type_check: {
        value: cdktf.booleanToHclTerraform(this._typeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      input: {
        value: cdktf.listMapperHcl(dataMergeMergeInputToHclTerraform, true)(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataMergeMergeInputList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
