// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityAnomalyDetectionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable anomaly-detection (Not valid for source-nat-ip and source monitor types); 'disable': Disable anomaly detection (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection#feature_status VisibilityAnomalyDetectionA#feature_status}
  */
  readonly featureStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection#id VisibilityAnomalyDetectionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'per-entity': Enable per entity logging; 'per-metric': Enable per metric logging with threshold details; 'disable': Disable anomaly notifications (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection#logging VisibilityAnomalyDetectionA#logging}
  */
  readonly logging?: string;
  /**
  * Relearn anomaly detection parameters after detecting an anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection#restart_learning_on_anomaly VisibilityAnomalyDetectionA#restart_learning_on_anomaly}
  */
  readonly restartLearningOnAnomaly?: number;
  /**
  * 'high': Highly sensitive anomaly detection. Can lead to false positives; 'low': Low sensitivity anomaly detection. Can cause delay in detection and might not detect certain attacks. (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection#sensitivity VisibilityAnomalyDetectionA#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection#uuid VisibilityAnomalyDetectionA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection thunder_visibility_anomaly_detection}
*/
export class VisibilityAnomalyDetectionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_anomaly_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityAnomalyDetectionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityAnomalyDetectionA to import
  * @param importFromId The id of the existing VisibilityAnomalyDetectionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityAnomalyDetectionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_anomaly_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_anomaly_detection thunder_visibility_anomaly_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityAnomalyDetectionAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityAnomalyDetectionAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_anomaly_detection',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureStatus = config.featureStatus;
    this._id = config.id;
    this._logging = config.logging;
    this._restartLearningOnAnomaly = config.restartLearningOnAnomaly;
    this._sensitivity = config.sensitivity;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_status - computed: false, optional: true, required: false
  private _featureStatus?: string; 
  public get featureStatus() {
    return this.getStringAttribute('feature_status');
  }
  public set featureStatus(value: string) {
    this._featureStatus = value;
  }
  public resetFeatureStatus() {
    this._featureStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureStatusInput() {
    return this._featureStatus;
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

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // restart_learning_on_anomaly - computed: false, optional: true, required: false
  private _restartLearningOnAnomaly?: number; 
  public get restartLearningOnAnomaly() {
    return this.getNumberAttribute('restart_learning_on_anomaly');
  }
  public set restartLearningOnAnomaly(value: number) {
    this._restartLearningOnAnomaly = value;
  }
  public resetRestartLearningOnAnomaly() {
    this._restartLearningOnAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartLearningOnAnomalyInput() {
    return this._restartLearningOnAnomaly;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_status: cdktf.stringToTerraform(this._featureStatus),
      id: cdktf.stringToTerraform(this._id),
      logging: cdktf.stringToTerraform(this._logging),
      restart_learning_on_anomaly: cdktf.numberToTerraform(this._restartLearningOnAnomaly),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_status: {
        value: cdktf.stringToHclTerraform(this._featureStatus),
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
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_learning_on_anomaly: {
        value: cdktf.numberToHclTerraform(this._restartLearningOnAnomaly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sensitivity: {
        value: cdktf.stringToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
