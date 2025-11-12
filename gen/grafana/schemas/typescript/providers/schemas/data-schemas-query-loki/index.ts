// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasQueryLokiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#editor_mode DataSchemasQueryLoki#editor_mode}
  */
  readonly editorMode?: string;
  /**
  * The LogQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#expr DataSchemasQueryLoki#expr}
  */
  readonly expr: string;
  /**
  * true if query is disabled (ie should not be returned to the dashboard)
  * Note this does not always imply that the query should not be executed since
  * the results from a hidden query may be used as the input to other queries (SSE etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#hide DataSchemasQueryLoki#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * @deprecated, now use queryType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#instant DataSchemasQueryLoki#instant}
  */
  readonly instant?: boolean | cdktf.IResolvable;
  /**
  * Used to override the name of the series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#legend_format DataSchemasQueryLoki#legend_format}
  */
  readonly legendFormat?: string;
  /**
  * Used to limit the number of log rows returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#max_lines DataSchemasQueryLoki#max_lines}
  */
  readonly maxLines?: number;
  /**
  * Specify the query flavor
  * TODO make this required and give it a default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#query_type DataSchemasQueryLoki#query_type}
  */
  readonly queryType?: string;
  /**
  * @deprecated, now use queryType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#range DataSchemasQueryLoki#range}
  */
  readonly range?: boolean | cdktf.IResolvable;
  /**
  * A unique identifier for the query within the list of targets.
  * In server side expressions, the refId is used as a variable name to identify results.
  * By default, the UI will assign A->Z; however setting meaningful names may be useful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#ref_id DataSchemasQueryLoki#ref_id}
  */
  readonly refId: string;
  /**
  * @deprecated, now use step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#resolution DataSchemasQueryLoki#resolution}
  */
  readonly resolution?: number;
  /**
  * Used to set step value for range queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#step DataSchemasQueryLoki#step}
  */
  readonly step?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki schemas_query_loki}
*/
export class DataSchemasQueryLoki extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_query_loki";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasQueryLoki resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasQueryLoki to import
  * @param importFromId The id of the existing DataSchemasQueryLoki that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasQueryLoki to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_query_loki", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_loki schemas_query_loki} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasQueryLokiConfig
  */
  public constructor(scope: Construct, id: string, config: DataSchemasQueryLokiConfig) {
    super(scope, id, {
      terraformResourceType: 'schemas_query_loki',
      terraformGeneratorMetadata: {
        providerName: 'schemas',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._editorMode = config.editorMode;
    this._expr = config.expr;
    this._hide = config.hide;
    this._instant = config.instant;
    this._legendFormat = config.legendFormat;
    this._maxLines = config.maxLines;
    this._queryType = config.queryType;
    this._range = config.range;
    this._refId = config.refId;
    this._resolution = config.resolution;
    this._step = config.step;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // editor_mode - computed: false, optional: true, required: false
  private _editorMode?: string; 
  public get editorMode() {
    return this.getStringAttribute('editor_mode');
  }
  public set editorMode(value: string) {
    this._editorMode = value;
  }
  public resetEditorMode() {
    this._editorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editorModeInput() {
    return this._editorMode;
  }

  // expr - computed: false, optional: false, required: true
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
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

  // instant - computed: false, optional: true, required: false
  private _instant?: boolean | cdktf.IResolvable; 
  public get instant() {
    return this.getBooleanAttribute('instant');
  }
  public set instant(value: boolean | cdktf.IResolvable) {
    this._instant = value;
  }
  public resetInstant() {
    this._instant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantInput() {
    return this._instant;
  }

  // legend_format - computed: false, optional: true, required: false
  private _legendFormat?: string; 
  public get legendFormat() {
    return this.getStringAttribute('legend_format');
  }
  public set legendFormat(value: string) {
    this._legendFormat = value;
  }
  public resetLegendFormat() {
    this._legendFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendFormatInput() {
    return this._legendFormat;
  }

  // max_lines - computed: false, optional: true, required: false
  private _maxLines?: number; 
  public get maxLines() {
    return this.getNumberAttribute('max_lines');
  }
  public set maxLines(value: number) {
    this._maxLines = value;
  }
  public resetMaxLines() {
    this._maxLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinesInput() {
    return this._maxLines;
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

  // range - computed: false, optional: true, required: false
  private _range?: boolean | cdktf.IResolvable; 
  public get range() {
    return this.getBooleanAttribute('range');
  }
  public set range(value: boolean | cdktf.IResolvable) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
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

  // resolution - computed: false, optional: true, required: false
  private _resolution?: number; 
  public get resolution() {
    return this.getNumberAttribute('resolution');
  }
  public set resolution(value: number) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // step - computed: false, optional: true, required: false
  private _step?: string; 
  public get step() {
    return this.getStringAttribute('step');
  }
  public set step(value: string) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      editor_mode: cdktf.stringToTerraform(this._editorMode),
      expr: cdktf.stringToTerraform(this._expr),
      hide: cdktf.booleanToTerraform(this._hide),
      instant: cdktf.booleanToTerraform(this._instant),
      legend_format: cdktf.stringToTerraform(this._legendFormat),
      max_lines: cdktf.numberToTerraform(this._maxLines),
      query_type: cdktf.stringToTerraform(this._queryType),
      range: cdktf.booleanToTerraform(this._range),
      ref_id: cdktf.stringToTerraform(this._refId),
      resolution: cdktf.numberToTerraform(this._resolution),
      step: cdktf.stringToTerraform(this._step),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      editor_mode: {
        value: cdktf.stringToHclTerraform(this._editorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expr: {
        value: cdktf.stringToHclTerraform(this._expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide: {
        value: cdktf.booleanToHclTerraform(this._hide),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instant: {
        value: cdktf.booleanToHclTerraform(this._instant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      legend_format: {
        value: cdktf.stringToHclTerraform(this._legendFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lines: {
        value: cdktf.numberToHclTerraform(this._maxLines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_type: {
        value: cdktf.stringToHclTerraform(this._queryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.booleanToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ref_id: {
        value: cdktf.stringToHclTerraform(this._refId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution: {
        value: cdktf.numberToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      step: {
        value: cdktf.stringToHclTerraform(this._step),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
