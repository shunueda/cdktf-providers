// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOrcasecurityDiscoveryResultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Result set limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results#limit DataOrcasecurityDiscoveryResults#limit}
  */
  readonly limit: number;
  /**
  * The query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results#query DataOrcasecurityDiscoveryResults#query}
  */
  readonly query: string;
  /**
  * Index to start results at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results#start_at_index DataOrcasecurityDiscoveryResults#start_at_index}
  */
  readonly startAtIndex: number;
}
export interface DataOrcasecurityDiscoveryResultsResults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results#data DataOrcasecurityDiscoveryResults#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results#id DataOrcasecurityDiscoveryResults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results#name DataOrcasecurityDiscoveryResults#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results#type DataOrcasecurityDiscoveryResults#type}
  */
  readonly type: string;
}

export function dataOrcasecurityDiscoveryResultsResultsToTerraform(struct?: DataOrcasecurityDiscoveryResultsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataOrcasecurityDiscoveryResultsResultsToHclTerraform(struct?: DataOrcasecurityDiscoveryResultsResults): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataOrcasecurityDiscoveryResultsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOrcasecurityDiscoveryResultsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOrcasecurityDiscoveryResultsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // data - computed: true, optional: false, required: true
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

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: true
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

  // type - computed: true, optional: false, required: true
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

export class DataOrcasecurityDiscoveryResultsResultsList extends cdktf.ComplexList {
  public internalValue? : DataOrcasecurityDiscoveryResultsResults[] | cdktf.IResolvable

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
  public get(index: number): DataOrcasecurityDiscoveryResultsResultsOutputReference {
    return new DataOrcasecurityDiscoveryResultsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results orcasecurity_discovery_results}
*/
export class DataOrcasecurityDiscoveryResults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_discovery_results";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOrcasecurityDiscoveryResults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOrcasecurityDiscoveryResults to import
  * @param importFromId The id of the existing DataOrcasecurityDiscoveryResults that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOrcasecurityDiscoveryResults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_discovery_results", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/data-sources/discovery_results orcasecurity_discovery_results} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOrcasecurityDiscoveryResultsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOrcasecurityDiscoveryResultsConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_discovery_results',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.25',
        providerVersionConstraint: '0.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._limit = config.limit;
    this._query = config.query;
    this._startAtIndex = config.startAtIndex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataOrcasecurityDiscoveryResultsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // start_at_index - computed: false, optional: false, required: true
  private _startAtIndex?: number; 
  public get startAtIndex() {
    return this.getNumberAttribute('start_at_index');
  }
  public set startAtIndex(value: number) {
    this._startAtIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtIndexInput() {
    return this._startAtIndex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      limit: cdktf.numberToTerraform(this._limit),
      query: cdktf.stringToTerraform(this._query),
      start_at_index: cdktf.numberToTerraform(this._startAtIndex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_at_index: {
        value: cdktf.numberToHclTerraform(this._startAtIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
