// generated from terraform resource schema

import { DataCoralogixDashboardAnnotationsList, 
DataCoralogixDashboardAutoRefreshOutputReference, 
DataCoralogixDashboardFiltersList, 
DataCoralogixDashboardFolderOutputReference, 
DataCoralogixDashboardLayoutOutputReference, 
DataCoralogixDashboardTimeFrameOutputReference, 
DataCoralogixDashboardVariablesList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCoralogixDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/dashboard#id DataCoralogixDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/dashboard coralogix_dashboard}
*/
export class DataCoralogixDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoralogixDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoralogixDashboard to import
  * @param importFromId The id of the existing DataCoralogixDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoralogixDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/dashboard coralogix_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoralogixDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DataCoralogixDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '2.2.3',
        providerVersionConstraint: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataCoralogixDashboardAnnotationsList(this, "annotations", false);
  public get annotations() {
    return this._annotations;
  }

  // auto_refresh - computed: true, optional: false, required: false
  private _autoRefresh = new DataCoralogixDashboardAutoRefreshOutputReference(this, "auto_refresh");
  public get autoRefresh() {
    return this._autoRefresh;
  }

  // content_json - computed: true, optional: false, required: false
  public get contentJson() {
    return this.getStringAttribute('content_json');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataCoralogixDashboardFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // folder - computed: true, optional: false, required: false
  private _folder = new DataCoralogixDashboardFolderOutputReference(this, "folder");
  public get folder() {
    return this._folder;
  }

  // id - computed: false, optional: false, required: true
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

  // layout - computed: true, optional: false, required: false
  private _layout = new DataCoralogixDashboardLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // time_frame - computed: true, optional: false, required: false
  private _timeFrame = new DataCoralogixDashboardTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataCoralogixDashboardVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
