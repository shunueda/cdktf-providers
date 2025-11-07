// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasQueryPrometheusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies which editor is being used to prepare the query. It can be "code" or "builder"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#editor_mode DataSchemasQueryPrometheus#editor_mode}
  */
  readonly editorMode?: string;
  /**
  * Execute an additional query to identify interesting raw samples relevant for the given expr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#exemplar DataSchemasQueryPrometheus#exemplar}
  */
  readonly exemplar?: boolean | cdktf.IResolvable;
  /**
  * The actual expression/query that will be evaluated by Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#expr DataSchemasQueryPrometheus#expr}
  */
  readonly expr: string;
  /**
  * Query format to determine how to display data points in panel. It can be "time_series", "table", "heatmap"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#format DataSchemasQueryPrometheus#format}
  */
  readonly format?: string;
  /**
  * true if query is disabled (ie should not be returned to the dashboard)
  * Note this does not always imply that the query should not be executed since
  * the results from a hidden query may be used as the input to other queries (SSE etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#hide DataSchemasQueryPrometheus#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Returns only the latest value that Prometheus has scraped for the requested time series
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#instant DataSchemasQueryPrometheus#instant}
  */
  readonly instant?: boolean | cdktf.IResolvable;
  /**
  * @deprecated Used to specify how many times to divide max data points by. We use max data points under query options
  * See https://github.com/grafana/grafana/issues/48081
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#interval_factor DataSchemasQueryPrometheus#interval_factor}
  */
  readonly intervalFactor?: number;
  /**
  * Series name override or template. Ex. {{`{{hostname}}`}} will be replaced with label value for hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#legend_format DataSchemasQueryPrometheus#legend_format}
  */
  readonly legendFormat?: string;
  /**
  * Specify the query flavor
  * TODO make this required and give it a default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#query_type DataSchemasQueryPrometheus#query_type}
  */
  readonly queryType?: string;
  /**
  * Returns a Range vector, comprised of a set of time series containing a range of data points over time for each time series
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#range DataSchemasQueryPrometheus#range}
  */
  readonly range?: boolean | cdktf.IResolvable;
  /**
  * A unique identifier for the query within the list of targets.
  * In server side expressions, the refId is used as a variable name to identify results.
  * By default, the UI will assign A->Z; however setting meaningful names may be useful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#ref_id DataSchemasQueryPrometheus#ref_id}
  */
  readonly refId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus schemas_query_prometheus}
*/
export class DataSchemasQueryPrometheus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_query_prometheus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasQueryPrometheus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasQueryPrometheus to import
  * @param importFromId The id of the existing DataSchemasQueryPrometheus that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasQueryPrometheus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_query_prometheus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_prometheus schemas_query_prometheus} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasQueryPrometheusConfig
  */
  public constructor(scope: Construct, id: string, config: DataSchemasQueryPrometheusConfig) {
    super(scope, id, {
      terraformResourceType: 'schemas_query_prometheus',
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
    this._editorMode = config.editorMode;
    this._exemplar = config.exemplar;
    this._expr = config.expr;
    this._format = config.format;
    this._hide = config.hide;
    this._instant = config.instant;
    this._intervalFactor = config.intervalFactor;
    this._legendFormat = config.legendFormat;
    this._queryType = config.queryType;
    this._range = config.range;
    this._refId = config.refId;
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

  // exemplar - computed: false, optional: true, required: false
  private _exemplar?: boolean | cdktf.IResolvable; 
  public get exemplar() {
    return this.getBooleanAttribute('exemplar');
  }
  public set exemplar(value: boolean | cdktf.IResolvable) {
    this._exemplar = value;
  }
  public resetExemplar() {
    this._exemplar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemplarInput() {
    return this._exemplar;
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // interval_factor - computed: false, optional: true, required: false
  private _intervalFactor?: number; 
  public get intervalFactor() {
    return this.getNumberAttribute('interval_factor');
  }
  public set intervalFactor(value: number) {
    this._intervalFactor = value;
  }
  public resetIntervalFactor() {
    this._intervalFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalFactorInput() {
    return this._intervalFactor;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      editor_mode: cdktf.stringToTerraform(this._editorMode),
      exemplar: cdktf.booleanToTerraform(this._exemplar),
      expr: cdktf.stringToTerraform(this._expr),
      format: cdktf.stringToTerraform(this._format),
      hide: cdktf.booleanToTerraform(this._hide),
      instant: cdktf.booleanToTerraform(this._instant),
      interval_factor: cdktf.numberToTerraform(this._intervalFactor),
      legend_format: cdktf.stringToTerraform(this._legendFormat),
      query_type: cdktf.stringToTerraform(this._queryType),
      range: cdktf.booleanToTerraform(this._range),
      ref_id: cdktf.stringToTerraform(this._refId),
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
      exemplar: {
        value: cdktf.booleanToHclTerraform(this._exemplar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expr: {
        value: cdktf.stringToHclTerraform(this._expr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      interval_factor: {
        value: cdktf.numberToHclTerraform(this._intervalFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      legend_format: {
        value: cdktf.stringToHclTerraform(this._legendFormat),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
