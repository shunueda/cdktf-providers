// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSite24X7MonitorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#dependency_resource_ids DataSite24X7MonitorGroup#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Description for the Monitor Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#description DataSite24X7MonitorGroup#description}
  */
  readonly description?: string;
  /**
  * Display Name for the Monitor Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#display_name DataSite24X7MonitorGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * Number of monitors' health that decide the group status. ‘0’ implies that all the monitors are considered for determining the group status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#health_threshold_count DataSite24X7MonitorGroup#health_threshold_count}
  */
  readonly healthThresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#id DataSite24X7MonitorGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of monitors associated to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#monitors DataSite24X7MonitorGroup#monitors}
  */
  readonly monitors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#name_regex DataSite24X7MonitorGroup#name_regex}
  */
  readonly nameRegex: string;
  /**
  * Boolean value indicating whether to suppress alert when the dependent monitor is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#suppress_alert DataSite24X7MonitorGroup#suppress_alert}
  */
  readonly suppressAlert?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group site24x7_monitor_group}
*/
export class DataSite24X7MonitorGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_monitor_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSite24X7MonitorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSite24X7MonitorGroup to import
  * @param importFromId The id of the existing DataSite24X7MonitorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSite24X7MonitorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_monitor_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/monitor_group site24x7_monitor_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSite24X7MonitorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataSite24X7MonitorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_monitor_group',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._description = config.description;
    this._displayName = config.displayName;
    this._healthThresholdCount = config.healthThresholdCount;
    this._id = config.id;
    this._monitors = config.monitors;
    this._nameRegex = config.nameRegex;
    this._suppressAlert = config.suppressAlert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dependency_resource_ids - computed: true, optional: true, required: false
  private _dependencyResourceIds?: string[]; 
  public get dependencyResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dependency_resource_ids'));
  }
  public set dependencyResourceIds(value: string[]) {
    this._dependencyResourceIds = value;
  }
  public resetDependencyResourceIds() {
    this._dependencyResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyResourceIdsInput() {
    return this._dependencyResourceIds;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // health_threshold_count - computed: true, optional: true, required: false
  private _healthThresholdCount?: number; 
  public get healthThresholdCount() {
    return this.getNumberAttribute('health_threshold_count');
  }
  public set healthThresholdCount(value: number) {
    this._healthThresholdCount = value;
  }
  public resetHealthThresholdCount() {
    this._healthThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthThresholdCountInput() {
    return this._healthThresholdCount;
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

  // monitors - computed: true, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // name_regex - computed: false, optional: false, required: true
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // suppress_alert - computed: true, optional: true, required: false
  private _suppressAlert?: boolean | cdktf.IResolvable; 
  public get suppressAlert() {
    return this.getBooleanAttribute('suppress_alert');
  }
  public set suppressAlert(value: boolean | cdktf.IResolvable) {
    this._suppressAlert = value;
  }
  public resetSuppressAlert() {
    this._suppressAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAlertInput() {
    return this._suppressAlert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      health_threshold_count: cdktf.numberToTerraform(this._healthThresholdCount),
      id: cdktf.stringToTerraform(this._id),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      suppress_alert: cdktf.booleanToTerraform(this._suppressAlert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dependency_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependencyResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_threshold_count: {
        value: cdktf.numberToHclTerraform(this._healthThresholdCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_alert: {
        value: cdktf.booleanToHclTerraform(this._suppressAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
