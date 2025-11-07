// https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_iterative_replace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncStrIterativeReplaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of maps. Each map has an `old` and `new` key. `old` represents the existing string to be replaced, and `new` represents the replacement string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_iterative_replace#replacements DataCorefuncStrIterativeReplace#replacements}
  */
  readonly replacements: DataCorefuncStrIterativeReplaceReplacements[] | cdktf.IResolvable;
  /**
  * The string upon which replacements should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_iterative_replace#string DataCorefuncStrIterativeReplace#string}
  */
  readonly string: string;
}
export interface DataCorefuncStrIterativeReplaceReplacements {
  /**
  * The replacement substring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_iterative_replace#new DataCorefuncStrIterativeReplace#new}
  */
  readonly new: string;
  /**
  * The substring to be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_iterative_replace#old DataCorefuncStrIterativeReplace#old}
  */
  readonly old: string;
}

export function dataCorefuncStrIterativeReplaceReplacementsToTerraform(struct?: DataCorefuncStrIterativeReplaceReplacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new: cdktf.stringToTerraform(struct!.new),
    old: cdktf.stringToTerraform(struct!.old),
  }
}


export function dataCorefuncStrIterativeReplaceReplacementsToHclTerraform(struct?: DataCorefuncStrIterativeReplaceReplacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new: {
      value: cdktf.stringToHclTerraform(struct!.new),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old: {
      value: cdktf.stringToHclTerraform(struct!.old),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCorefuncStrIterativeReplaceReplacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCorefuncStrIterativeReplaceReplacements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._new !== undefined) {
      hasAnyValues = true;
      internalValueResult.new = this._new;
    }
    if (this._old !== undefined) {
      hasAnyValues = true;
      internalValueResult.old = this._old;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCorefuncStrIterativeReplaceReplacements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._new = undefined;
      this._old = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._new = value.new;
      this._old = value.old;
    }
  }

  // new - computed: false, optional: false, required: true
  private _new?: string; 
  public get new() {
    return this.getStringAttribute('new');
  }
  public set new(value: string) {
    this._new = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newInput() {
    return this._new;
  }

  // old - computed: false, optional: false, required: true
  private _old?: string; 
  public get old() {
    return this.getStringAttribute('old');
  }
  public set old(value: string) {
    this._old = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldInput() {
    return this._old;
  }
}

export class DataCorefuncStrIterativeReplaceReplacementsList extends cdktf.ComplexList {
  public internalValue? : DataCorefuncStrIterativeReplaceReplacements[] | cdktf.IResolvable

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
  public get(index: number): DataCorefuncStrIterativeReplaceReplacementsOutputReference {
    return new DataCorefuncStrIterativeReplaceReplacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_iterative_replace corefunc_str_iterative_replace}
*/
export class DataCorefuncStrIterativeReplace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_str_iterative_replace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncStrIterativeReplace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncStrIterativeReplace to import
  * @param importFromId The id of the existing DataCorefuncStrIterativeReplace that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_iterative_replace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncStrIterativeReplace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_str_iterative_replace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_iterative_replace corefunc_str_iterative_replace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncStrIterativeReplaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncStrIterativeReplaceConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_str_iterative_replace',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._replacements.internalValue = config.replacements;
    this._string = config.string;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // replacements - computed: false, optional: false, required: true
  private _replacements = new DataCorefuncStrIterativeReplaceReplacementsList(this, "replacements", false);
  public get replacements() {
    return this._replacements;
  }
  public putReplacements(value: DataCorefuncStrIterativeReplaceReplacements[] | cdktf.IResolvable) {
    this._replacements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementsInput() {
    return this._replacements.internalValue;
  }

  // string - computed: false, optional: false, required: true
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replacements: cdktf.listMapper(dataCorefuncStrIterativeReplaceReplacementsToTerraform, false)(this._replacements.internalValue),
      string: cdktf.stringToTerraform(this._string),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      replacements: {
        value: cdktf.listMapperHcl(dataCorefuncStrIterativeReplaceReplacementsToHclTerraform, false)(this._replacements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCorefuncStrIterativeReplaceReplacementsList",
      },
      string: {
        value: cdktf.stringToHclTerraform(this._string),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
