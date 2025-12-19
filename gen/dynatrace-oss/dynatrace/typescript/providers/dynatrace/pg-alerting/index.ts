// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PgAlertingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible Values: `ON_INSTANCE_COUNT_VIOLATION`, `ON_PGI_UNAVAILABILITY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting#alerting_mode PgAlerting#alerting_mode}
  */
  readonly alertingMode?: string;
  /**
  * Enable (`true`) or disable (`false`) process group availability monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting#enabled PgAlerting#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting#id PgAlerting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Open a new problem if the number of active process instances in the group is fewer than X
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting#minimum_instance_threshold PgAlerting#minimum_instance_threshold}
  */
  readonly minimumInstanceThreshold?: number;
  /**
  * The process group ID for availability monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting#process_group PgAlerting#process_group}
  */
  readonly processGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting dynatrace_pg_alerting}
*/
export class PgAlerting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_pg_alerting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PgAlerting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PgAlerting to import
  * @param importFromId The id of the existing PgAlerting that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PgAlerting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_pg_alerting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/pg_alerting dynatrace_pg_alerting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PgAlertingConfig
  */
  public constructor(scope: Construct, id: string, config: PgAlertingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_pg_alerting',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertingMode = config.alertingMode;
    this._enabled = config.enabled;
    this._id = config.id;
    this._minimumInstanceThreshold = config.minimumInstanceThreshold;
    this._processGroup = config.processGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerting_mode - computed: false, optional: true, required: false
  private _alertingMode?: string; 
  public get alertingMode() {
    return this.getStringAttribute('alerting_mode');
  }
  public set alertingMode(value: string) {
    this._alertingMode = value;
  }
  public resetAlertingMode() {
    this._alertingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingModeInput() {
    return this._alertingMode;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // minimum_instance_threshold - computed: false, optional: true, required: false
  private _minimumInstanceThreshold?: number; 
  public get minimumInstanceThreshold() {
    return this.getNumberAttribute('minimum_instance_threshold');
  }
  public set minimumInstanceThreshold(value: number) {
    this._minimumInstanceThreshold = value;
  }
  public resetMinimumInstanceThreshold() {
    this._minimumInstanceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstanceThresholdInput() {
    return this._minimumInstanceThreshold;
  }

  // process_group - computed: false, optional: false, required: true
  private _processGroup?: string; 
  public get processGroup() {
    return this.getStringAttribute('process_group');
  }
  public set processGroup(value: string) {
    this._processGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupInput() {
    return this._processGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerting_mode: cdktf.stringToTerraform(this._alertingMode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      minimum_instance_threshold: cdktf.numberToTerraform(this._minimumInstanceThreshold),
      process_group: cdktf.stringToTerraform(this._processGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerting_mode: {
        value: cdktf.stringToHclTerraform(this._alertingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_instance_threshold: {
        value: cdktf.numberToHclTerraform(this._minimumInstanceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_group: {
        value: cdktf.stringToHclTerraform(this._processGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
