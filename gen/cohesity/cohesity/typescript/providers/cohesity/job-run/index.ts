// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run#id JobRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the Protection Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run#name JobRun#name}
  */
  readonly name: string;
  /**
  * Specifies the time to wait in minutes for the protection job run
  * 				 to complete the run or stop the run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run#operation_timeout JobRun#operation_timeout}
  */
  readonly operationTimeout?: number;
  /**
  * Specifies the type of backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run#run_type JobRun#run_type}
  */
  readonly runType?: string;
  /**
  * Specifies whether to start or stop a protection job run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run#state JobRun#state}
  */
  readonly state?: string;
  /**
  * Specifies the current timestamp to trigger starting or stopping a job run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run#timestamp JobRun#timestamp}
  */
  readonly timestamp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run cohesity_job_run}
*/
export class JobRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_job_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JobRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JobRun to import
  * @param importFromId The id of the existing JobRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JobRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_job_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/job_run cohesity_job_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobRunConfig
  */
  public constructor(scope: Construct, id: string, config: JobRunConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_job_run',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3'
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
    this._name = config.name;
    this._operationTimeout = config.operationTimeout;
    this._runType = config.runType;
    this._state = config.state;
    this._timestamp = config.timestamp;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation_timeout - computed: false, optional: true, required: false
  private _operationTimeout?: number; 
  public get operationTimeout() {
    return this.getNumberAttribute('operation_timeout');
  }
  public set operationTimeout(value: number) {
    this._operationTimeout = value;
  }
  public resetOperationTimeout() {
    this._operationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTimeoutInput() {
    return this._operationTimeout;
  }

  // run_type - computed: false, optional: true, required: false
  private _runType?: string; 
  public get runType() {
    return this.getStringAttribute('run_type');
  }
  public set runType(value: string) {
    this._runType = value;
  }
  public resetRunType() {
    this._runType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTypeInput() {
    return this._runType;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // timestamp - computed: false, optional: false, required: true
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operation_timeout: cdktf.numberToTerraform(this._operationTimeout),
      run_type: cdktf.stringToTerraform(this._runType),
      state: cdktf.stringToTerraform(this._state),
      timestamp: cdktf.stringToTerraform(this._timestamp),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_timeout: {
        value: cdktf.numberToHclTerraform(this._operationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run_type: {
        value: cdktf.stringToHclTerraform(this._runType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
