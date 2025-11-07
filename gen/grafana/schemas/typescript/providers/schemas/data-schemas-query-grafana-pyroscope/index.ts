// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasQueryGrafanaPyroscopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allows to group the results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope#group_by DataSchemasQueryGrafanaPyroscope#group_by}
  */
  readonly groupBy?: string[];
  /**
  * true if query is disabled (ie should not be returned to the dashboard)
  * Note this does not always imply that the query should not be executed since
  * the results from a hidden query may be used as the input to other queries (SSE etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope#hide DataSchemasQueryGrafanaPyroscope#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Specifies the query label selectors. Defaults to "{}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope#label_selector DataSchemasQueryGrafanaPyroscope#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Sets the maximum number of nodes in the flamegraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope#max_nodes DataSchemasQueryGrafanaPyroscope#max_nodes}
  */
  readonly maxNodes?: number;
  /**
  * Specifies the type of profile to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope#profile_type_id DataSchemasQueryGrafanaPyroscope#profile_type_id}
  */
  readonly profileTypeId: string;
  /**
  * Specify the query flavor
  * TODO make this required and give it a default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope#query_type DataSchemasQueryGrafanaPyroscope#query_type}
  */
  readonly queryType?: string;
  /**
  * A unique identifier for the query within the list of targets.
  * In server side expressions, the refId is used as a variable name to identify results.
  * By default, the UI will assign A->Z; however setting meaningful names may be useful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope#ref_id DataSchemasQueryGrafanaPyroscope#ref_id}
  */
  readonly refId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope schemas_query_grafana_pyroscope}
*/
export class DataSchemasQueryGrafanaPyroscope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_query_grafana_pyroscope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasQueryGrafanaPyroscope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasQueryGrafanaPyroscope to import
  * @param importFromId The id of the existing DataSchemasQueryGrafanaPyroscope that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasQueryGrafanaPyroscope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_query_grafana_pyroscope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_grafana_pyroscope schemas_query_grafana_pyroscope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasQueryGrafanaPyroscopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataSchemasQueryGrafanaPyroscopeConfig) {
    super(scope, id, {
      terraformResourceType: 'schemas_query_grafana_pyroscope',
      terraformGeneratorMetadata: {
        providerName: 'schemas',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupBy = config.groupBy;
    this._hide = config.hide;
    this._labelSelector = config.labelSelector;
    this._maxNodes = config.maxNodes;
    this._profileTypeId = config.profileTypeId;
    this._queryType = config.queryType;
    this._refId = config.refId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: boolean | cdktf.IResolvable; 
  public get hide() {
    return this.getBooleanAttribute('hide');
  }
  public set hide(value: boolean | cdktf.IResolvable) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // label_selector - computed: true, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // max_nodes - computed: false, optional: true, required: false
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  public resetMaxNodes() {
    this._maxNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // profile_type_id - computed: false, optional: false, required: true
  private _profileTypeId?: string; 
  public get profileTypeId() {
    return this.getStringAttribute('profile_type_id');
  }
  public set profileTypeId(value: string) {
    this._profileTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeIdInput() {
    return this._profileTypeId;
  }

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // ref_id - computed: false, optional: false, required: true
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // rendered_json - computed: true, optional: false, required: false
  public get renderedJson() {
    return this.getStringAttribute('rendered_json');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      hide: cdktf.booleanToTerraform(this._hide),
      label_selector: cdktf.stringToTerraform(this._labelSelector),
      max_nodes: cdktf.numberToTerraform(this._maxNodes),
      profile_type_id: cdktf.stringToTerraform(this._profileTypeId),
      query_type: cdktf.stringToTerraform(this._queryType),
      ref_id: cdktf.stringToTerraform(this._refId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hide: {
        value: cdktf.booleanToHclTerraform(this._hide),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_selector: {
        value: cdktf.stringToHclTerraform(this._labelSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_nodes: {
        value: cdktf.numberToHclTerraform(this._maxNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_type_id: {
        value: cdktf.stringToHclTerraform(this._profileTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_type: {
        value: cdktf.stringToHclTerraform(this._queryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref_id: {
        value: cdktf.stringToHclTerraform(this._refId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
