// https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/javascript_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTimeplusJavascriptFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The javascript function name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/javascript_function#name DataTimeplusJavascriptFunction#name}
  */
  readonly name: string;
}
export interface DataTimeplusJavascriptFunctionArg {
}

export function dataTimeplusJavascriptFunctionArgToTerraform(struct?: DataTimeplusJavascriptFunctionArg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTimeplusJavascriptFunctionArgToHclTerraform(struct?: DataTimeplusJavascriptFunctionArg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTimeplusJavascriptFunctionArgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTimeplusJavascriptFunctionArg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTimeplusJavascriptFunctionArg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTimeplusJavascriptFunctionArgList extends cdktf.ComplexList {

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
  public get(index: number): DataTimeplusJavascriptFunctionArgOutputReference {
    return new DataTimeplusJavascriptFunctionArgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/javascript_function timeplus_javascript_function}
*/
export class DataTimeplusJavascriptFunction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timeplus_javascript_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTimeplusJavascriptFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTimeplusJavascriptFunction to import
  * @param importFromId The id of the existing DataTimeplusJavascriptFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/javascript_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTimeplusJavascriptFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timeplus_javascript_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/data-sources/javascript_function timeplus_javascript_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTimeplusJavascriptFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: DataTimeplusJavascriptFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'timeplus_javascript_function',
      terraformGeneratorMetadata: {
        providerName: 'timeplus',
        providerVersion: '0.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arg - computed: true, optional: false, required: false
  private _arg = new DataTimeplusJavascriptFunctionArgList(this, "arg", false);
  public get arg() {
    return this._arg;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_aggregate_function - computed: true, optional: false, required: false
  public get isAggregateFunction() {
    return this.getBooleanAttribute('is_aggregate_function');
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

  // return_type - computed: true, optional: false, required: false
  public get returnType() {
    return this.getStringAttribute('return_type');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
