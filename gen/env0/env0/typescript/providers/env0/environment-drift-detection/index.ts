// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_drift_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentDriftDetectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto drift remediation strategy (DISABLED, CODE_TO_CLOUD, CLOUD_TO_CODE, SMART_REMEDIATION). Defaults to DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_drift_detection#auto_drift_remediation EnvironmentDriftDetection#auto_drift_remediation}
  */
  readonly autoDriftRemediation?: string;
  /**
  * Cron expression for scheduled drift detection of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_drift_detection#cron EnvironmentDriftDetection#cron}
  */
  readonly cron: string;
  /**
  * The environment's id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_drift_detection#environment_id EnvironmentDriftDetection#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_drift_detection#id EnvironmentDriftDetection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_drift_detection env0_environment_drift_detection}
*/
export class EnvironmentDriftDetection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_environment_drift_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentDriftDetection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentDriftDetection to import
  * @param importFromId The id of the existing EnvironmentDriftDetection that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_drift_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentDriftDetection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_environment_drift_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_drift_detection env0_environment_drift_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentDriftDetectionConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentDriftDetectionConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_environment_drift_detection',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDriftRemediation = config.autoDriftRemediation;
    this._cron = config.cron;
    this._environmentId = config.environmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_drift_remediation - computed: false, optional: true, required: false
  private _autoDriftRemediation?: string; 
  public get autoDriftRemediation() {
    return this.getStringAttribute('auto_drift_remediation');
  }
  public set autoDriftRemediation(value: string) {
    this._autoDriftRemediation = value;
  }
  public resetAutoDriftRemediation() {
    this._autoDriftRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDriftRemediationInput() {
    return this._autoDriftRemediation;
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_drift_remediation: cdktf.stringToTerraform(this._autoDriftRemediation),
      cron: cdktf.stringToTerraform(this._cron),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_drift_remediation: {
        value: cdktf.stringToHclTerraform(this._autoDriftRemediation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
