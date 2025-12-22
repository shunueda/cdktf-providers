// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterExclusionWindowV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Cluster Id for the cluster that this exclusion window relates to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2#cluster_id ClusterExclusionWindowV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The day of the week that this exclusion window starts on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2#day_of_week ClusterExclusionWindowV2#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * The duration (in hours) of this exclusion window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2#duration_in_hours ClusterExclusionWindowV2#duration_in_hours}
  */
  readonly durationInHours: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2#id ClusterExclusionWindowV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The hour of the day that this exclusion window starts on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2#start_hour ClusterExclusionWindowV2#start_hour}
  */
  readonly startHour: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2#timeouts ClusterExclusionWindowV2#timeouts}
  */
  readonly timeouts?: ClusterExclusionWindowV2Timeouts;
}
export interface ClusterExclusionWindowV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2#default ClusterExclusionWindowV2#default}
  */
  readonly default?: string;
}

export function clusterExclusionWindowV2TimeoutsToTerraform(struct?: ClusterExclusionWindowV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function clusterExclusionWindowV2TimeoutsToHclTerraform(struct?: ClusterExclusionWindowV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterExclusionWindowV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterExclusionWindowV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterExclusionWindowV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2 instaclustr_cluster_exclusion_window_v2}
*/
export class ClusterExclusionWindowV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cluster_exclusion_window_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterExclusionWindowV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterExclusionWindowV2 to import
  * @param importFromId The id of the existing ClusterExclusionWindowV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterExclusionWindowV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cluster_exclusion_window_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/cluster_exclusion_window_v2 instaclustr_cluster_exclusion_window_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterExclusionWindowV2Config
  */
  public constructor(scope: Construct, id: string, config: ClusterExclusionWindowV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cluster_exclusion_window_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.39',
        providerVersionConstraint: '2.1.39'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // duration_in_hours - computed: false, optional: false, required: true
  private _durationInHours?: number; 
  public get durationInHours() {
    return this.getNumberAttribute('duration_in_hours');
  }
  public set durationInHours(value: number) {
    this._durationInHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInHoursInput() {
    return this._durationInHours;
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

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterExclusionWindowV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterExclusionWindowV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      timeouts: clusterExclusionWindowV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: clusterExclusionWindowV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterExclusionWindowV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
