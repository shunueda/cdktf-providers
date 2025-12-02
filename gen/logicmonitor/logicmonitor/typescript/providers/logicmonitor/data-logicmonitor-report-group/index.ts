// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorReportGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group#description DataLogicmonitorReportGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group#filter DataLogicmonitorReportGroup#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group#id DataLogicmonitorReportGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group#matched_report_count DataLogicmonitorReportGroup#matched_report_count}
  */
  readonly matchedReportCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group#name DataLogicmonitorReportGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group#reports_count DataLogicmonitorReportGroup#reports_count}
  */
  readonly reportsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group#user_permission DataLogicmonitorReportGroup#user_permission}
  */
  readonly userPermission?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group logicmonitor_report_group}
*/
export class DataLogicmonitorReportGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_report_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorReportGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorReportGroup to import
  * @param importFromId The id of the existing DataLogicmonitorReportGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorReportGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_report_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/report_group logicmonitor_report_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorReportGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorReportGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_report_group',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.27',
        providerVersionConstraint: '2.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._filter = config.filter;
    this._id = config.id;
    this._matchedReportCount = config.matchedReportCount;
    this._name = config.name;
    this._reportsCount = config.reportsCount;
    this._userPermission = config.userPermission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // matched_report_count - computed: false, optional: true, required: false
  private _matchedReportCount?: number; 
  public get matchedReportCount() {
    return this.getNumberAttribute('matched_report_count');
  }
  public set matchedReportCount(value: number) {
    this._matchedReportCount = value;
  }
  public resetMatchedReportCount() {
    this._matchedReportCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedReportCountInput() {
    return this._matchedReportCount;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // reports_count - computed: false, optional: true, required: false
  private _reportsCount?: number; 
  public get reportsCount() {
    return this.getNumberAttribute('reports_count');
  }
  public set reportsCount(value: number) {
    this._reportsCount = value;
  }
  public resetReportsCount() {
    this._reportsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportsCountInput() {
    return this._reportsCount;
  }

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.numberToTerraform(this._id),
      matched_report_count: cdktf.numberToTerraform(this._matchedReportCount),
      name: cdktf.stringToTerraform(this._name),
      reports_count: cdktf.numberToTerraform(this._reportsCount),
      user_permission: cdktf.stringToTerraform(this._userPermission),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      matched_report_count: {
        value: cdktf.numberToHclTerraform(this._matchedReportCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reports_count: {
        value: cdktf.numberToHclTerraform(this._reportsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
