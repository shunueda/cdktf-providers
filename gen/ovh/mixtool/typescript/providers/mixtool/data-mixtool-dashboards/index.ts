// https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/dashboards
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMixtoolDashboardsConfig extends cdktf.TerraformMetaArguments {
  /**
  * External variables providing value as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/dashboards#jsonnet_path DataMixtoolDashboards#jsonnet_path}
  */
  readonly jsonnetPath?: string[];
  /**
  * Source Jsonnet file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/dashboards#source DataMixtoolDashboards#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/dashboards mixtool_dashboards}
*/
export class DataMixtoolDashboards extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mixtool_dashboards";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMixtoolDashboards resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMixtoolDashboards to import
  * @param importFromId The id of the existing DataMixtoolDashboards that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/dashboards#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMixtoolDashboards to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mixtool_dashboards", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/dashboards mixtool_dashboards} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMixtoolDashboardsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMixtoolDashboardsConfig) {
    super(scope, id, {
      terraformResourceType: 'mixtool_dashboards',
      terraformGeneratorMetadata: {
        providerName: 'mixtool',
        providerVersion: '0.2.2',
        providerVersionConstraint: '0.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jsonnetPath = config.jsonnetPath;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboards - computed: true, optional: false, required: false
  private _dashboards = new cdktf.StringMap(this, "dashboards");
  public get dashboards() {
    return this._dashboards;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jsonnet_path - computed: false, optional: true, required: false
  private _jsonnetPath?: string[]; 
  public get jsonnetPath() {
    return this.getListAttribute('jsonnet_path');
  }
  public set jsonnetPath(value: string[]) {
    this._jsonnetPath = value;
  }
  public resetJsonnetPath() {
    this._jsonnetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetPathInput() {
    return this._jsonnetPath;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jsonnet_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jsonnetPath),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jsonnet_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jsonnetPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
