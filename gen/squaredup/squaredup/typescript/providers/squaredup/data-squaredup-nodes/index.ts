// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSquaredupNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the data source will return an empty list if its unable to find the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/nodes#allow_no_data DataSquaredupNodes#allow_no_data}
  */
  readonly allowNoData?: boolean | cdktf.IResolvable;
  /**
  * Data Source ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/nodes#data_source_id DataSquaredupNodes#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Node Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/nodes#node_name DataSquaredupNodes#node_name}
  */
  readonly nodeName?: string;
  /**
  * Node Source ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/nodes#node_source_id DataSquaredupNodes#node_source_id}
  */
  readonly nodeSourceId?: string;
}
export interface DataSquaredupNodesNodeProperties {
}

export function dataSquaredupNodesNodePropertiesToTerraform(struct?: DataSquaredupNodesNodeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSquaredupNodesNodePropertiesToHclTerraform(struct?: DataSquaredupNodesNodeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSquaredupNodesNodePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSquaredupNodesNodeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSquaredupNodesNodeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSquaredupNodesNodePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataSquaredupNodesNodePropertiesOutputReference {
    return new DataSquaredupNodesNodePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/nodes squaredup_nodes}
*/
export class DataSquaredupNodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSquaredupNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSquaredupNodes to import
  * @param importFromId The id of the existing DataSquaredupNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSquaredupNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/nodes squaredup_nodes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSquaredupNodesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSquaredupNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_nodes',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowNoData = config.allowNoData;
    this._dataSourceId = config.dataSourceId;
    this._nodeName = config.nodeName;
    this._nodeSourceId = config.nodeSourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_no_data - computed: false, optional: true, required: false
  private _allowNoData?: boolean | cdktf.IResolvable; 
  public get allowNoData() {
    return this.getBooleanAttribute('allow_no_data');
  }
  public set allowNoData(value: boolean | cdktf.IResolvable) {
    this._allowNoData = value;
  }
  public resetAllowNoData() {
    this._allowNoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoDataInput() {
    return this._allowNoData;
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // node_properties - computed: true, optional: false, required: false
  private _nodeProperties = new DataSquaredupNodesNodePropertiesList(this, "node_properties", false);
  public get nodeProperties() {
    return this._nodeProperties;
  }

  // node_source_id - computed: false, optional: true, required: false
  private _nodeSourceId?: string; 
  public get nodeSourceId() {
    return this.getStringAttribute('node_source_id');
  }
  public set nodeSourceId(value: string) {
    this._nodeSourceId = value;
  }
  public resetNodeSourceId() {
    this._nodeSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSourceIdInput() {
    return this._nodeSourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_no_data: cdktf.booleanToTerraform(this._allowNoData),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      node_name: cdktf.stringToTerraform(this._nodeName),
      node_source_id: cdktf.stringToTerraform(this._nodeSourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_no_data: {
        value: cdktf.booleanToHclTerraform(this._allowNoData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_source_id: {
        value: cdktf.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_source_id: {
        value: cdktf.stringToHclTerraform(this._nodeSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
