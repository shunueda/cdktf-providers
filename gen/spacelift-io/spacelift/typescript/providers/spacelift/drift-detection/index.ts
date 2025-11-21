// https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DriftDetectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection#id DriftDetection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Controls whether drift detection should be performed on a stack in any final state instead of just 'Finished'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection#ignore_state DriftDetection#ignore_state}
  */
  readonly ignoreState?: boolean | cdktf.IResolvable;
  /**
  * Whether a tracked run should be triggered when drift is detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection#reconcile DriftDetection#reconcile}
  */
  readonly reconcile?: boolean | cdktf.IResolvable;
  /**
  * List of cron schedule expressions based on which drift detection should be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection#schedule DriftDetection#schedule}
  */
  readonly schedule: string[];
  /**
  * ID of the stack for which to set up drift detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection#stack_id DriftDetection#stack_id}
  */
  readonly stackId: string;
  /**
  * Timezone in which the schedule is expressed. Defaults to `UTC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection#timezone DriftDetection#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection spacelift_drift_detection}
*/
export class DriftDetection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_drift_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DriftDetection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DriftDetection to import
  * @param importFromId The id of the existing DriftDetection that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DriftDetection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_drift_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/drift_detection spacelift_drift_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DriftDetectionConfig
  */
  public constructor(scope: Construct, id: string, config: DriftDetectionConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_drift_detection',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.39.0',
        providerVersionConstraint: '1.39.0'
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
    this._ignoreState = config.ignoreState;
    this._reconcile = config.reconcile;
    this._schedule = config.schedule;
    this._stackId = config.stackId;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ignore_state - computed: false, optional: true, required: false
  private _ignoreState?: boolean | cdktf.IResolvable; 
  public get ignoreState() {
    return this.getBooleanAttribute('ignore_state');
  }
  public set ignoreState(value: boolean | cdktf.IResolvable) {
    this._ignoreState = value;
  }
  public resetIgnoreState() {
    this._ignoreState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreStateInput() {
    return this._ignoreState;
  }

  // reconcile - computed: false, optional: true, required: false
  private _reconcile?: boolean | cdktf.IResolvable; 
  public get reconcile() {
    return this.getBooleanAttribute('reconcile');
  }
  public set reconcile(value: boolean | cdktf.IResolvable) {
    this._reconcile = value;
  }
  public resetReconcile() {
    this._reconcile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcileInput() {
    return this._reconcile;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string[]; 
  public get schedule() {
    return this.getListAttribute('schedule');
  }
  public set schedule(value: string[]) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_state: cdktf.booleanToTerraform(this._ignoreState),
      reconcile: cdktf.booleanToTerraform(this._reconcile),
      schedule: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schedule),
      stack_id: cdktf.stringToTerraform(this._stackId),
      timezone: cdktf.stringToTerraform(this._timezone),
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
      ignore_state: {
        value: cdktf.booleanToHclTerraform(this._ignoreState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reconcile: {
        value: cdktf.booleanToHclTerraform(this._reconcile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schedule: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schedule),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
