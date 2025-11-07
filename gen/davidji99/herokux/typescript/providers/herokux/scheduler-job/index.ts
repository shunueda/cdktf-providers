// https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchedulerJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job#app_id SchedulerJob#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job#command SchedulerJob#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job#dyno_size SchedulerJob#dyno_size}
  */
  readonly dynoSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job#frequency SchedulerJob#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job#id SchedulerJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job herokux_scheduler_job}
*/
export class SchedulerJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "herokux_scheduler_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchedulerJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchedulerJob to import
  * @param importFromId The id of the existing SchedulerJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchedulerJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "herokux_scheduler_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/scheduler_job herokux_scheduler_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchedulerJobConfig
  */
  public constructor(scope: Construct, id: string, config: SchedulerJobConfig) {
    super(scope, id, {
      terraformResourceType: 'herokux_scheduler_job',
      terraformGeneratorMetadata: {
        providerName: 'herokux',
        providerVersion: '1.4.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._command = config.command;
    this._dynoSize = config.dynoSize;
    this._frequency = config.frequency;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // dyno_size - computed: false, optional: false, required: true
  private _dynoSize?: string; 
  public get dynoSize() {
    return this.getStringAttribute('dyno_size');
  }
  public set dynoSize(value: string) {
    this._dynoSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynoSizeInput() {
    return this._dynoSize;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // last_run_at - computed: true, optional: false, required: false
  public get lastRunAt() {
    return this.getStringAttribute('last_run_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      command: cdktf.stringToTerraform(this._command),
      dyno_size: cdktf.stringToTerraform(this._dynoSize),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dyno_size: {
        value: cdktf.stringToHclTerraform(this._dynoSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
