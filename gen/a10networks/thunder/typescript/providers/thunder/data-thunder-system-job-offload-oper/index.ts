// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemJobOffloadOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#id DataThunderSystemJobOffloadOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#oper DataThunderSystemJobOffloadOper#oper}
  */
  readonly oper?: DataThunderSystemJobOffloadOperOper;
}
export interface DataThunderSystemJobOffloadOperOperJobOffloadCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#complete DataThunderSystemJobOffloadOper#complete}
  */
  readonly complete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#execute DataThunderSystemJobOffloadOper#execute}
  */
  readonly execute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#fail_complete DataThunderSystemJobOffloadOper#fail_complete}
  */
  readonly failComplete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#fail_execute DataThunderSystemJobOffloadOper#fail_execute}
  */
  readonly failExecute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#fail_submit DataThunderSystemJobOffloadOper#fail_submit}
  */
  readonly failSubmit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#jobs DataThunderSystemJobOffloadOper#jobs}
  */
  readonly jobs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#q_no_space DataThunderSystemJobOffloadOper#q_no_space}
  */
  readonly qNoSpace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#rcv_home DataThunderSystemJobOffloadOper#rcv_home}
  */
  readonly rcvHome?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#receive DataThunderSystemJobOffloadOper#receive}
  */
  readonly receive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#snt_home DataThunderSystemJobOffloadOper#snt_home}
  */
  readonly sntHome?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#submit DataThunderSystemJobOffloadOper#submit}
  */
  readonly submit?: number;
}

export function dataThunderSystemJobOffloadOperOperJobOffloadCpuListStructToTerraform(struct?: DataThunderSystemJobOffloadOperOperJobOffloadCpuListStruct | cdktf.IResolvable): any {
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


export function dataThunderSystemJobOffloadOperOperJobOffloadCpuListStructToHclTerraform(struct?: DataThunderSystemJobOffloadOperOperJobOffloadCpuListStruct | cdktf.IResolvable): any {
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

export class DataThunderSystemJobOffloadOperOperJobOffloadCpuListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderSystemJobOffloadOperOperJobOffloadCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataThunderSystemJobOffloadOperOperJobOffloadCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataThunderSystemJobOffloadOperOperJobOffloadCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemJobOffloadOperOperJobOffloadCpuListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderSystemJobOffloadOperOperJobOffloadCpuListStructOutputReference {
    return new DataThunderSystemJobOffloadOperOperJobOffloadCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemJobOffloadOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#cpu_count DataThunderSystemJobOffloadOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#offload_cpus DataThunderSystemJobOffloadOper#offload_cpus}
  */
  readonly offloadCpus?: number;
  /**
  * job_offload_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#job_offload_cpu_list DataThunderSystemJobOffloadOper#job_offload_cpu_list}
  */
  readonly jobOffloadCpuList?: DataThunderSystemJobOffloadOperOperJobOffloadCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemJobOffloadOperOperToTerraform(struct?: DataThunderSystemJobOffloadOperOperOutputReference | DataThunderSystemJobOffloadOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    offload_cpus: cdktf.numberToTerraform(struct!.offloadCpus),
    job_offload_cpu_list: cdktf.listMapper(dataThunderSystemJobOffloadOperOperJobOffloadCpuListStructToTerraform, true)(struct!.jobOffloadCpuList),
  }
}


export function dataThunderSystemJobOffloadOperOperToHclTerraform(struct?: DataThunderSystemJobOffloadOperOperOutputReference | DataThunderSystemJobOffloadOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offload_cpus: {
      value: cdktf.numberToHclTerraform(struct!.offloadCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_offload_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSystemJobOffloadOperOperJobOffloadCpuListStructToHclTerraform, true)(struct!.jobOffloadCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemJobOffloadOperOperJobOffloadCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemJobOffloadOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemJobOffloadOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._offloadCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.offloadCpus = this._offloadCpus;
    }
    if (this._jobOffloadCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobOffloadCpuList = this._jobOffloadCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemJobOffloadOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._offloadCpus = undefined;
      this._jobOffloadCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._offloadCpus = value.offloadCpus;
      this._jobOffloadCpuList.internalValue = value.jobOffloadCpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // offload_cpus - computed: false, optional: true, required: false
  private _offloadCpus?: number; 
  public get offloadCpus() {
    return this.getNumberAttribute('offload_cpus');
  }
  public set offloadCpus(value: number) {
    this._offloadCpus = value;
  }
  public resetOffloadCpus() {
    this._offloadCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offloadCpusInput() {
    return this._offloadCpus;
  }

  // job_offload_cpu_list - computed: false, optional: true, required: false
  private _jobOffloadCpuList = new DataThunderSystemJobOffloadOperOperJobOffloadCpuListStructList(this, "job_offload_cpu_list", false);
  public get jobOffloadCpuList() {
    return this._jobOffloadCpuList;
  }
  public putJobOffloadCpuList(value: DataThunderSystemJobOffloadOperOperJobOffloadCpuListStruct[] | cdktf.IResolvable) {
    this._jobOffloadCpuList.internalValue = value;
  }
  public resetJobOffloadCpuList() {
    this._jobOffloadCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobOffloadCpuListInput() {
    return this._jobOffloadCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper thunder_system_job_offload_oper}
*/
export class DataThunderSystemJobOffloadOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_job_offload_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemJobOffloadOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemJobOffloadOper to import
  * @param importFromId The id of the existing DataThunderSystemJobOffloadOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemJobOffloadOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_job_offload_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_job_offload_oper thunder_system_job_offload_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemJobOffloadOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemJobOffloadOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_job_offload_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemJobOffloadOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemJobOffloadOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSystemJobOffloadOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSystemJobOffloadOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemJobOffloadOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
