// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemJobOffloadStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#id DataThunderSystemJobOffloadStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#stats DataThunderSystemJobOffloadStats#stats}
  */
  readonly stats?: DataThunderSystemJobOffloadStatsStats;
}
export interface DataThunderSystemJobOffloadStatsStats {
  /**
  * Jobs Completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#complete DataThunderSystemJobOffloadStats#complete}
  */
  readonly complete?: number;
  /**
  * Jobs Executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#execute DataThunderSystemJobOffloadStats#execute}
  */
  readonly execute?: number;
  /**
  * Failed to Complete Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#fail_complete DataThunderSystemJobOffloadStats#fail_complete}
  */
  readonly failComplete?: number;
  /**
  * Failed to Execute Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#fail_execute DataThunderSystemJobOffloadStats#fail_execute}
  */
  readonly failExecute?: number;
  /**
  * Jobs Failed to Submit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#fail_submit DataThunderSystemJobOffloadStats#fail_submit}
  */
  readonly failSubmit?: number;
  /**
  * Current Jobs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#jobs DataThunderSystemJobOffloadStats#jobs}
  */
  readonly jobs?: number;
  /**
  * No More Space in Q
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#q_no_space DataThunderSystemJobOffloadStats#q_no_space}
  */
  readonly qNoSpace?: number;
  /**
  * Jobs Received Home
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#rcv_home DataThunderSystemJobOffloadStats#rcv_home}
  */
  readonly rcvHome?: number;
  /**
  * Jobs Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#receive DataThunderSystemJobOffloadStats#receive}
  */
  readonly receive?: number;
  /**
  * Jobs Sent Back Home
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#snt_home DataThunderSystemJobOffloadStats#snt_home}
  */
  readonly sntHome?: number;
  /**
  * Jobs Submitted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#submit DataThunderSystemJobOffloadStats#submit}
  */
  readonly submit?: number;
}

export function dataThunderSystemJobOffloadStatsStatsToTerraform(struct?: DataThunderSystemJobOffloadStatsStatsOutputReference | DataThunderSystemJobOffloadStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complete: cdktf.numberToTerraform(struct!.complete),
    execute: cdktf.numberToTerraform(struct!.execute),
    fail_complete: cdktf.numberToTerraform(struct!.failComplete),
    fail_execute: cdktf.numberToTerraform(struct!.failExecute),
    fail_submit: cdktf.numberToTerraform(struct!.failSubmit),
    jobs: cdktf.numberToTerraform(struct!.jobs),
    q_no_space: cdktf.numberToTerraform(struct!.qNoSpace),
    rcv_home: cdktf.numberToTerraform(struct!.rcvHome),
    receive: cdktf.numberToTerraform(struct!.receive),
    snt_home: cdktf.numberToTerraform(struct!.sntHome),
    submit: cdktf.numberToTerraform(struct!.submit),
  }
}


export function dataThunderSystemJobOffloadStatsStatsToHclTerraform(struct?: DataThunderSystemJobOffloadStatsStatsOutputReference | DataThunderSystemJobOffloadStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    complete: {
      value: cdktf.numberToHclTerraform(struct!.complete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    execute: {
      value: cdktf.numberToHclTerraform(struct!.execute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_complete: {
      value: cdktf.numberToHclTerraform(struct!.failComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_execute: {
      value: cdktf.numberToHclTerraform(struct!.failExecute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_submit: {
      value: cdktf.numberToHclTerraform(struct!.failSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jobs: {
      value: cdktf.numberToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    q_no_space: {
      value: cdktf.numberToHclTerraform(struct!.qNoSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_home: {
      value: cdktf.numberToHclTerraform(struct!.rcvHome),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive: {
      value: cdktf.numberToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snt_home: {
      value: cdktf.numberToHclTerraform(struct!.sntHome),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    submit: {
      value: cdktf.numberToHclTerraform(struct!.submit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemJobOffloadStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemJobOffloadStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complete !== undefined) {
      hasAnyValues = true;
      internalValueResult.complete = this._complete;
    }
    if (this._execute !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute;
    }
    if (this._failComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.failComplete = this._failComplete;
    }
    if (this._failExecute !== undefined) {
      hasAnyValues = true;
      internalValueResult.failExecute = this._failExecute;
    }
    if (this._failSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSubmit = this._failSubmit;
    }
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._qNoSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.qNoSpace = this._qNoSpace;
    }
    if (this._rcvHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvHome = this._rcvHome;
    }
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._sntHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.sntHome = this._sntHome;
    }
    if (this._submit !== undefined) {
      hasAnyValues = true;
      internalValueResult.submit = this._submit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemJobOffloadStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complete = undefined;
      this._execute = undefined;
      this._failComplete = undefined;
      this._failExecute = undefined;
      this._failSubmit = undefined;
      this._jobs = undefined;
      this._qNoSpace = undefined;
      this._rcvHome = undefined;
      this._receive = undefined;
      this._sntHome = undefined;
      this._submit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complete = value.complete;
      this._execute = value.execute;
      this._failComplete = value.failComplete;
      this._failExecute = value.failExecute;
      this._failSubmit = value.failSubmit;
      this._jobs = value.jobs;
      this._qNoSpace = value.qNoSpace;
      this._rcvHome = value.rcvHome;
      this._receive = value.receive;
      this._sntHome = value.sntHome;
      this._submit = value.submit;
    }
  }

  // complete - computed: false, optional: true, required: false
  private _complete?: number; 
  public get complete() {
    return this.getNumberAttribute('complete');
  }
  public set complete(value: number) {
    this._complete = value;
  }
  public resetComplete() {
    this._complete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeInput() {
    return this._complete;
  }

  // execute - computed: false, optional: true, required: false
  private _execute?: number; 
  public get execute() {
    return this.getNumberAttribute('execute');
  }
  public set execute(value: number) {
    this._execute = value;
  }
  public resetExecute() {
    this._execute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute;
  }

  // fail_complete - computed: false, optional: true, required: false
  private _failComplete?: number; 
  public get failComplete() {
    return this.getNumberAttribute('fail_complete');
  }
  public set failComplete(value: number) {
    this._failComplete = value;
  }
  public resetFailComplete() {
    this._failComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failCompleteInput() {
    return this._failComplete;
  }

  // fail_execute - computed: false, optional: true, required: false
  private _failExecute?: number; 
  public get failExecute() {
    return this.getNumberAttribute('fail_execute');
  }
  public set failExecute(value: number) {
    this._failExecute = value;
  }
  public resetFailExecute() {
    this._failExecute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failExecuteInput() {
    return this._failExecute;
  }

  // fail_submit - computed: false, optional: true, required: false
  private _failSubmit?: number; 
  public get failSubmit() {
    return this.getNumberAttribute('fail_submit');
  }
  public set failSubmit(value: number) {
    this._failSubmit = value;
  }
  public resetFailSubmit() {
    this._failSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSubmitInput() {
    return this._failSubmit;
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs?: number; 
  public get jobs() {
    return this.getNumberAttribute('jobs');
  }
  public set jobs(value: number) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // q_no_space - computed: false, optional: true, required: false
  private _qNoSpace?: number; 
  public get qNoSpace() {
    return this.getNumberAttribute('q_no_space');
  }
  public set qNoSpace(value: number) {
    this._qNoSpace = value;
  }
  public resetQNoSpace() {
    this._qNoSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qNoSpaceInput() {
    return this._qNoSpace;
  }

  // rcv_home - computed: false, optional: true, required: false
  private _rcvHome?: number; 
  public get rcvHome() {
    return this.getNumberAttribute('rcv_home');
  }
  public set rcvHome(value: number) {
    this._rcvHome = value;
  }
  public resetRcvHome() {
    this._rcvHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvHomeInput() {
    return this._rcvHome;
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: number; 
  public get receive() {
    return this.getNumberAttribute('receive');
  }
  public set receive(value: number) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // snt_home - computed: false, optional: true, required: false
  private _sntHome?: number; 
  public get sntHome() {
    return this.getNumberAttribute('snt_home');
  }
  public set sntHome(value: number) {
    this._sntHome = value;
  }
  public resetSntHome() {
    this._sntHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sntHomeInput() {
    return this._sntHome;
  }

  // submit - computed: false, optional: true, required: false
  private _submit?: number; 
  public get submit() {
    return this.getNumberAttribute('submit');
  }
  public set submit(value: number) {
    this._submit = value;
  }
  public resetSubmit() {
    this._submit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitInput() {
    return this._submit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats thunder_system_job_offload_stats}
*/
export class DataThunderSystemJobOffloadStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_job_offload_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemJobOffloadStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemJobOffloadStats to import
  * @param importFromId The id of the existing DataThunderSystemJobOffloadStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemJobOffloadStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_job_offload_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_job_offload_stats thunder_system_job_offload_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemJobOffloadStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemJobOffloadStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_job_offload_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSystemJobOffloadStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemJobOffloadStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSystemJobOffloadStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSystemJobOffloadStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemJobOffloadStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
