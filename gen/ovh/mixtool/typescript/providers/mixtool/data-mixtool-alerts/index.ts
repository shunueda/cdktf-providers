// https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/alerts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMixtoolAlertsConfig extends cdktf.TerraformMetaArguments {
  /**
  * External variables providing value as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/alerts#jsonnet_path DataMixtoolAlerts#jsonnet_path}
  */
  readonly jsonnetPath?: string[];
  /**
  * Source Jsonnet file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/alerts#source DataMixtoolAlerts#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/alerts mixtool_alerts}
*/
export class DataMixtoolAlerts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mixtool_alerts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMixtoolAlerts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMixtoolAlerts to import
  * @param importFromId The id of the existing DataMixtoolAlerts that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/alerts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMixtoolAlerts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mixtool_alerts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/mixtool/0.2.2/docs/data-sources/alerts mixtool_alerts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMixtoolAlertsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMixtoolAlertsConfig) {
    super(scope, id, {
      terraformResourceType: 'mixtool_alerts',
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

  // alerts - computed: true, optional: false, required: false
  public get alerts() {
    return this.getStringAttribute('alerts');
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
