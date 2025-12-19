// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfloExperimentPlanTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#id EfloExperimentPlanTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#privacy_level EfloExperimentPlanTemplate#privacy_level}
  */
  readonly privacyLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#template_description EfloExperimentPlanTemplate#template_description}
  */
  readonly templateDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#template_name EfloExperimentPlanTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * template_pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#template_pipeline EfloExperimentPlanTemplate#template_pipeline}
  */
  readonly templatePipeline: EfloExperimentPlanTemplateTemplatePipeline[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#timeouts EfloExperimentPlanTemplate#timeouts}
  */
  readonly timeouts?: EfloExperimentPlanTemplateTimeouts;
}
export interface EfloExperimentPlanTemplateTemplatePipelineEnvParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#cpu_per_worker EfloExperimentPlanTemplate#cpu_per_worker}
  */
  readonly cpuPerWorker: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#cuda_version EfloExperimentPlanTemplate#cuda_version}
  */
  readonly cudaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#gpu_driver_version EfloExperimentPlanTemplate#gpu_driver_version}
  */
  readonly gpuDriverVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#gpu_per_worker EfloExperimentPlanTemplate#gpu_per_worker}
  */
  readonly gpuPerWorker: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#memory_per_worker EfloExperimentPlanTemplate#memory_per_worker}
  */
  readonly memoryPerWorker: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#nccl_version EfloExperimentPlanTemplate#nccl_version}
  */
  readonly ncclVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#py_torch_version EfloExperimentPlanTemplate#py_torch_version}
  */
  readonly pyTorchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#share_memory EfloExperimentPlanTemplate#share_memory}
  */
  readonly shareMemory: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#worker_num EfloExperimentPlanTemplate#worker_num}
  */
  readonly workerNum: number;
}

export function efloExperimentPlanTemplateTemplatePipelineEnvParamsToTerraform(struct?: EfloExperimentPlanTemplateTemplatePipelineEnvParamsOutputReference | EfloExperimentPlanTemplateTemplatePipelineEnvParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_per_worker: cdktf.numberToTerraform(struct!.cpuPerWorker),
    cuda_version: cdktf.stringToTerraform(struct!.cudaVersion),
    gpu_driver_version: cdktf.stringToTerraform(struct!.gpuDriverVersion),
    gpu_per_worker: cdktf.numberToTerraform(struct!.gpuPerWorker),
    memory_per_worker: cdktf.numberToTerraform(struct!.memoryPerWorker),
    nccl_version: cdktf.stringToTerraform(struct!.ncclVersion),
    py_torch_version: cdktf.stringToTerraform(struct!.pyTorchVersion),
    share_memory: cdktf.numberToTerraform(struct!.shareMemory),
    worker_num: cdktf.numberToTerraform(struct!.workerNum),
  }
}


export function efloExperimentPlanTemplateTemplatePipelineEnvParamsToHclTerraform(struct?: EfloExperimentPlanTemplateTemplatePipelineEnvParamsOutputReference | EfloExperimentPlanTemplateTemplatePipelineEnvParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_per_worker: {
      value: cdktf.numberToHclTerraform(struct!.cpuPerWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cuda_version: {
      value: cdktf.stringToHclTerraform(struct!.cudaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_driver_version: {
      value: cdktf.stringToHclTerraform(struct!.gpuDriverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_per_worker: {
      value: cdktf.numberToHclTerraform(struct!.gpuPerWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_per_worker: {
      value: cdktf.numberToHclTerraform(struct!.memoryPerWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nccl_version: {
      value: cdktf.stringToHclTerraform(struct!.ncclVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    py_torch_version: {
      value: cdktf.stringToHclTerraform(struct!.pyTorchVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_memory: {
      value: cdktf.numberToHclTerraform(struct!.shareMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    worker_num: {
      value: cdktf.numberToHclTerraform(struct!.workerNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloExperimentPlanTemplateTemplatePipelineEnvParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EfloExperimentPlanTemplateTemplatePipelineEnvParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuPerWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPerWorker = this._cpuPerWorker;
    }
    if (this._cudaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cudaVersion = this._cudaVersion;
    }
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    if (this._gpuPerWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPerWorker = this._gpuPerWorker;
    }
    if (this._memoryPerWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryPerWorker = this._memoryPerWorker;
    }
    if (this._ncclVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncclVersion = this._ncclVersion;
    }
    if (this._pyTorchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pyTorchVersion = this._pyTorchVersion;
    }
    if (this._shareMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareMemory = this._shareMemory;
    }
    if (this._workerNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNum = this._workerNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloExperimentPlanTemplateTemplatePipelineEnvParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuPerWorker = undefined;
      this._cudaVersion = undefined;
      this._gpuDriverVersion = undefined;
      this._gpuPerWorker = undefined;
      this._memoryPerWorker = undefined;
      this._ncclVersion = undefined;
      this._pyTorchVersion = undefined;
      this._shareMemory = undefined;
      this._workerNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuPerWorker = value.cpuPerWorker;
      this._cudaVersion = value.cudaVersion;
      this._gpuDriverVersion = value.gpuDriverVersion;
      this._gpuPerWorker = value.gpuPerWorker;
      this._memoryPerWorker = value.memoryPerWorker;
      this._ncclVersion = value.ncclVersion;
      this._pyTorchVersion = value.pyTorchVersion;
      this._shareMemory = value.shareMemory;
      this._workerNum = value.workerNum;
    }
  }

  // cpu_per_worker - computed: false, optional: false, required: true
  private _cpuPerWorker?: number; 
  public get cpuPerWorker() {
    return this.getNumberAttribute('cpu_per_worker');
  }
  public set cpuPerWorker(value: number) {
    this._cpuPerWorker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerWorkerInput() {
    return this._cpuPerWorker;
  }

  // cuda_version - computed: false, optional: true, required: false
  private _cudaVersion?: string; 
  public get cudaVersion() {
    return this.getStringAttribute('cuda_version');
  }
  public set cudaVersion(value: string) {
    this._cudaVersion = value;
  }
  public resetCudaVersion() {
    this._cudaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cudaVersionInput() {
    return this._cudaVersion;
  }

  // gpu_driver_version - computed: false, optional: true, required: false
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  public resetGpuDriverVersion() {
    this._gpuDriverVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }

  // gpu_per_worker - computed: false, optional: false, required: true
  private _gpuPerWorker?: number; 
  public get gpuPerWorker() {
    return this.getNumberAttribute('gpu_per_worker');
  }
  public set gpuPerWorker(value: number) {
    this._gpuPerWorker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPerWorkerInput() {
    return this._gpuPerWorker;
  }

  // memory_per_worker - computed: false, optional: false, required: true
  private _memoryPerWorker?: number; 
  public get memoryPerWorker() {
    return this.getNumberAttribute('memory_per_worker');
  }
  public set memoryPerWorker(value: number) {
    this._memoryPerWorker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerWorkerInput() {
    return this._memoryPerWorker;
  }

  // nccl_version - computed: false, optional: true, required: false
  private _ncclVersion?: string; 
  public get ncclVersion() {
    return this.getStringAttribute('nccl_version');
  }
  public set ncclVersion(value: string) {
    this._ncclVersion = value;
  }
  public resetNcclVersion() {
    this._ncclVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncclVersionInput() {
    return this._ncclVersion;
  }

  // py_torch_version - computed: false, optional: true, required: false
  private _pyTorchVersion?: string; 
  public get pyTorchVersion() {
    return this.getStringAttribute('py_torch_version');
  }
  public set pyTorchVersion(value: string) {
    this._pyTorchVersion = value;
  }
  public resetPyTorchVersion() {
    this._pyTorchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pyTorchVersionInput() {
    return this._pyTorchVersion;
  }

  // share_memory - computed: false, optional: false, required: true
  private _shareMemory?: number; 
  public get shareMemory() {
    return this.getNumberAttribute('share_memory');
  }
  public set shareMemory(value: number) {
    this._shareMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareMemoryInput() {
    return this._shareMemory;
  }

  // worker_num - computed: false, optional: false, required: true
  private _workerNum?: number; 
  public get workerNum() {
    return this.getNumberAttribute('worker_num');
  }
  public set workerNum(value: number) {
    this._workerNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNumInput() {
    return this._workerNum;
  }
}
export interface EfloExperimentPlanTemplateTemplatePipeline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#pipeline_order EfloExperimentPlanTemplate#pipeline_order}
  */
  readonly pipelineOrder: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#scene EfloExperimentPlanTemplate#scene}
  */
  readonly scene: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#setting_params EfloExperimentPlanTemplate#setting_params}
  */
  readonly settingParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#workload_id EfloExperimentPlanTemplate#workload_id}
  */
  readonly workloadId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#workload_name EfloExperimentPlanTemplate#workload_name}
  */
  readonly workloadName: string;
  /**
  * env_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#env_params EfloExperimentPlanTemplate#env_params}
  */
  readonly envParams: EfloExperimentPlanTemplateTemplatePipelineEnvParams;
}

export function efloExperimentPlanTemplateTemplatePipelineToTerraform(struct?: EfloExperimentPlanTemplateTemplatePipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_order: cdktf.numberToTerraform(struct!.pipelineOrder),
    scene: cdktf.stringToTerraform(struct!.scene),
    setting_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settingParams),
    workload_id: cdktf.numberToTerraform(struct!.workloadId),
    workload_name: cdktf.stringToTerraform(struct!.workloadName),
    env_params: efloExperimentPlanTemplateTemplatePipelineEnvParamsToTerraform(struct!.envParams),
  }
}


export function efloExperimentPlanTemplateTemplatePipelineToHclTerraform(struct?: EfloExperimentPlanTemplateTemplatePipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline_order: {
      value: cdktf.numberToHclTerraform(struct!.pipelineOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scene: {
      value: cdktf.stringToHclTerraform(struct!.scene),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setting_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settingParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    workload_id: {
      value: cdktf.numberToHclTerraform(struct!.workloadId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    workload_name: {
      value: cdktf.stringToHclTerraform(struct!.workloadName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_params: {
      value: efloExperimentPlanTemplateTemplatePipelineEnvParamsToHclTerraform(struct!.envParams),
      isBlock: true,
      type: "list",
      storageClassType: "EfloExperimentPlanTemplateTemplatePipelineEnvParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloExperimentPlanTemplateTemplatePipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EfloExperimentPlanTemplateTemplatePipeline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineOrder = this._pipelineOrder;
    }
    if (this._scene !== undefined) {
      hasAnyValues = true;
      internalValueResult.scene = this._scene;
    }
    if (this._settingParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingParams = this._settingParams;
    }
    if (this._workloadId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadId = this._workloadId;
    }
    if (this._workloadName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadName = this._workloadName;
    }
    if (this._envParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envParams = this._envParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloExperimentPlanTemplateTemplatePipeline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pipelineOrder = undefined;
      this._scene = undefined;
      this._settingParams = undefined;
      this._workloadId = undefined;
      this._workloadName = undefined;
      this._envParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pipelineOrder = value.pipelineOrder;
      this._scene = value.scene;
      this._settingParams = value.settingParams;
      this._workloadId = value.workloadId;
      this._workloadName = value.workloadName;
      this._envParams.internalValue = value.envParams;
    }
  }

  // pipeline_order - computed: false, optional: false, required: true
  private _pipelineOrder?: number; 
  public get pipelineOrder() {
    return this.getNumberAttribute('pipeline_order');
  }
  public set pipelineOrder(value: number) {
    this._pipelineOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineOrderInput() {
    return this._pipelineOrder;
  }

  // scene - computed: false, optional: false, required: true
  private _scene?: string; 
  public get scene() {
    return this.getStringAttribute('scene');
  }
  public set scene(value: string) {
    this._scene = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneInput() {
    return this._scene;
  }

  // setting_params - computed: true, optional: true, required: false
  private _settingParams?: { [key: string]: string }; 
  public get settingParams() {
    return this.getStringMapAttribute('setting_params');
  }
  public set settingParams(value: { [key: string]: string }) {
    this._settingParams = value;
  }
  public resetSettingParams() {
    this._settingParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingParamsInput() {
    return this._settingParams;
  }

  // workload_id - computed: false, optional: false, required: true
  private _workloadId?: number; 
  public get workloadId() {
    return this.getNumberAttribute('workload_id');
  }
  public set workloadId(value: number) {
    this._workloadId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdInput() {
    return this._workloadId;
  }

  // workload_name - computed: false, optional: false, required: true
  private _workloadName?: string; 
  public get workloadName() {
    return this.getStringAttribute('workload_name');
  }
  public set workloadName(value: string) {
    this._workloadName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadNameInput() {
    return this._workloadName;
  }

  // env_params - computed: false, optional: false, required: true
  private _envParams = new EfloExperimentPlanTemplateTemplatePipelineEnvParamsOutputReference(this, "env_params");
  public get envParams() {
    return this._envParams;
  }
  public putEnvParams(value: EfloExperimentPlanTemplateTemplatePipelineEnvParams) {
    this._envParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envParamsInput() {
    return this._envParams.internalValue;
  }
}

export class EfloExperimentPlanTemplateTemplatePipelineList extends cdktf.ComplexList {
  public internalValue? : EfloExperimentPlanTemplateTemplatePipeline[] | cdktf.IResolvable

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
  public get(index: number): EfloExperimentPlanTemplateTemplatePipelineOutputReference {
    return new EfloExperimentPlanTemplateTemplatePipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EfloExperimentPlanTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#create EfloExperimentPlanTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#delete EfloExperimentPlanTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#update EfloExperimentPlanTemplate#update}
  */
  readonly update?: string;
}

export function efloExperimentPlanTemplateTimeoutsToTerraform(struct?: EfloExperimentPlanTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function efloExperimentPlanTemplateTimeoutsToHclTerraform(struct?: EfloExperimentPlanTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloExperimentPlanTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfloExperimentPlanTemplateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloExperimentPlanTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template alicloud_eflo_experiment_plan_template}
*/
export class EfloExperimentPlanTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eflo_experiment_plan_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EfloExperimentPlanTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EfloExperimentPlanTemplate to import
  * @param importFromId The id of the existing EfloExperimentPlanTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EfloExperimentPlanTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eflo_experiment_plan_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/eflo_experiment_plan_template alicloud_eflo_experiment_plan_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfloExperimentPlanTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: EfloExperimentPlanTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eflo_experiment_plan_template',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._privacyLevel = config.privacyLevel;
    this._templateDescription = config.templateDescription;
    this._templateName = config.templateName;
    this._templatePipeline.internalValue = config.templatePipeline;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // privacy_level - computed: false, optional: false, required: true
  private _privacyLevel?: string; 
  public get privacyLevel() {
    return this.getStringAttribute('privacy_level');
  }
  public set privacyLevel(value: string) {
    this._privacyLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyLevelInput() {
    return this._privacyLevel;
  }

  // template_description - computed: false, optional: true, required: false
  private _templateDescription?: string; 
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }
  public set templateDescription(value: string) {
    this._templateDescription = value;
  }
  public resetTemplateDescription() {
    this._templateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDescriptionInput() {
    return this._templateDescription;
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_pipeline - computed: false, optional: false, required: true
  private _templatePipeline = new EfloExperimentPlanTemplateTemplatePipelineList(this, "template_pipeline", false);
  public get templatePipeline() {
    return this._templatePipeline;
  }
  public putTemplatePipeline(value: EfloExperimentPlanTemplateTemplatePipeline[] | cdktf.IResolvable) {
    this._templatePipeline.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePipelineInput() {
    return this._templatePipeline.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EfloExperimentPlanTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EfloExperimentPlanTemplateTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      privacy_level: cdktf.stringToTerraform(this._privacyLevel),
      template_description: cdktf.stringToTerraform(this._templateDescription),
      template_name: cdktf.stringToTerraform(this._templateName),
      template_pipeline: cdktf.listMapper(efloExperimentPlanTemplateTemplatePipelineToTerraform, true)(this._templatePipeline.internalValue),
      timeouts: efloExperimentPlanTemplateTimeoutsToTerraform(this._timeouts.internalValue),
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
      privacy_level: {
        value: cdktf.stringToHclTerraform(this._privacyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_description: {
        value: cdktf.stringToHclTerraform(this._templateDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_pipeline: {
        value: cdktf.listMapperHcl(efloExperimentPlanTemplateTemplatePipelineToHclTerraform, true)(this._templatePipeline.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EfloExperimentPlanTemplateTemplatePipelineList",
      },
      timeouts: {
        value: efloExperimentPlanTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EfloExperimentPlanTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
