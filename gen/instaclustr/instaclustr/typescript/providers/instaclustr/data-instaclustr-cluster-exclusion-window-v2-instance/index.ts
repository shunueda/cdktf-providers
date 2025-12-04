// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClusterExclusionWindowV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster Id for the cluster that this exclusion window relates to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance#cluster_id DataInstaclustrClusterExclusionWindowV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The day of the week that this exclusion window starts on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance#day_of_week DataInstaclustrClusterExclusionWindowV2Instance#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * The duration (in hours) of this exclusion window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance#duration_in_hours DataInstaclustrClusterExclusionWindowV2Instance#duration_in_hours}
  */
  readonly durationInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance#id DataInstaclustrClusterExclusionWindowV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The hour of the day that this exclusion window starts on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance#start_hour DataInstaclustrClusterExclusionWindowV2Instance#start_hour}
  */
  readonly startHour?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance instaclustr_cluster_exclusion_window_v2_instance}
*/
export class DataInstaclustrClusterExclusionWindowV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cluster_exclusion_window_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClusterExclusionWindowV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClusterExclusionWindowV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrClusterExclusionWindowV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClusterExclusionWindowV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cluster_exclusion_window_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_exclusion_window_v2_instance instaclustr_cluster_exclusion_window_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClusterExclusionWindowV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClusterExclusionWindowV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cluster_exclusion_window_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.32',
        providerVersionConstraint: '2.1.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._dayOfWeek = config.dayOfWeek;
    this._durationInHours = config.durationInHours;
    this._id = config.id;
    this._startHour = config.startHour;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // duration_in_hours - computed: true, optional: true, required: false
  private _durationInHours?: number; 
  public get durationInHours() {
    return this.getNumberAttribute('duration_in_hours');
  }
  public set durationInHours(value: number) {
    this._durationInHours = value;
  }
  public resetDurationInHours() {
    this._durationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInHoursInput() {
    return this._durationInHours;
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

  // start_hour - computed: true, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      day_of_week: cdktf.stringToTerraform(this._dayOfWeek),
      duration_in_hours: cdktf.numberToTerraform(this._durationInHours),
      id: cdktf.stringToTerraform(this._id),
      start_hour: cdktf.numberToTerraform(this._startHour),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day_of_week: {
        value: cdktf.stringToHclTerraform(this._dayOfWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration_in_hours: {
        value: cdktf.numberToHclTerraform(this._durationInHours),
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
      start_hour: {
        value: cdktf.numberToHclTerraform(this._startHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
