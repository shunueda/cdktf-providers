// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/grafana_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogzioGrafanaDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/grafana_dashboard#dashboard_uid DataLogzioGrafanaDashboard#dashboard_uid}
  */
  readonly dashboardUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/grafana_dashboard#id DataLogzioGrafanaDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/grafana_dashboard logzio_grafana_dashboard}
*/
export class DataLogzioGrafanaDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_grafana_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogzioGrafanaDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogzioGrafanaDashboard to import
  * @param importFromId The id of the existing DataLogzioGrafanaDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/grafana_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogzioGrafanaDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_grafana_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/grafana_dashboard logzio_grafana_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogzioGrafanaDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DataLogzioGrafanaDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_grafana_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardUid = config.dashboardUid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_json - computed: true, optional: false, required: false
  public get dashboardJson() {
    return this.getStringAttribute('dashboard_json');
  }

  // dashboard_uid - computed: false, optional: false, required: true
  private _dashboardUid?: string; 
  public get dashboardUid() {
    return this.getStringAttribute('dashboard_uid');
  }
  public set dashboardUid(value: string) {
    this._dashboardUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardUidInput() {
    return this._dashboardUid;
  }

  // folder_uid - computed: true, optional: false, required: false
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }

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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_uid: cdktf.stringToTerraform(this._dashboardUid),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_uid: {
        value: cdktf.stringToHclTerraform(this._dashboardUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
