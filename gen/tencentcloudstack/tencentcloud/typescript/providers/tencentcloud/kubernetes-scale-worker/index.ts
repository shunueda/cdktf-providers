// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesScaleWorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#cluster_id KubernetesScaleWorker#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Used to save results of CVMs creation error messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#create_result_output_file KubernetesScaleWorker#create_result_output_file}
  */
  readonly createResultOutputFile?: string;
  /**
  * Indicate to set desired pod number in current node. Valid when the cluster enable customized pod cidr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#desired_pod_num KubernetesScaleWorker#desired_pod_num}
  */
  readonly desiredPodNum?: number;
  /**
  * Docker graph path. Default is `/var/lib/docker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#docker_graph_path KubernetesScaleWorker#docker_graph_path}
  */
  readonly dockerGraphPath?: string;
  /**
  * Custom parameter information related to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#extra_args KubernetesScaleWorker#extra_args}
  */
  readonly extraArgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#id KubernetesScaleWorker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of kubernetes scale worker created nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#labels KubernetesScaleWorker#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mount target. Default is not mounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#mount_target KubernetesScaleWorker#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Base64-encoded user script, executed before initializing the node, currently only effective for adding existing nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#pre_start_user_script KubernetesScaleWorker#pre_start_user_script}
  */
  readonly preStartUserScript?: string;
  /**
  * Set whether the added node participates in scheduling. The default value is 0, which means participating in scheduling; non-0 means not participating in scheduling. After the node initialization is completed, you can execute kubectl uncordon nodename to join the node in scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#unschedulable KubernetesScaleWorker#unschedulable}
  */
  readonly unschedulable?: number;
  /**
  * Base64 encoded user script, this script will be executed after the k8s component is run. The user needs to ensure that the script is reentrant and retry logic. The script and its generated log files can be viewed in the /data/ccs_userscript/ path of the node, if required. The node needs to be initialized before it can be added to the schedule. It can be used with the unschedulable parameter. After the final initialization of userScript is completed, add the kubectl uncordon nodename --kubeconfig=/root/.kube/config command to add the node to the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#user_script KubernetesScaleWorker#user_script}
  */
  readonly userScript?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#data_disk KubernetesScaleWorker#data_disk}
  */
  readonly dataDisk?: KubernetesScaleWorkerDataDisk[] | cdktf.IResolvable;
  /**
  * gpu_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#gpu_args KubernetesScaleWorker#gpu_args}
  */
  readonly gpuArgs?: KubernetesScaleWorkerGpuArgs;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#taints KubernetesScaleWorker#taints}
  */
  readonly taints?: KubernetesScaleWorkerTaints[] | cdktf.IResolvable;
  /**
  * worker_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#worker_config KubernetesScaleWorker#worker_config}
  */
  readonly workerConfig: KubernetesScaleWorkerWorkerConfig;
}
export interface KubernetesScaleWorkerWorkerInstancesListStruct {
}

export function kubernetesScaleWorkerWorkerInstancesListStructToTerraform(struct?: KubernetesScaleWorkerWorkerInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesScaleWorkerWorkerInstancesListStructToHclTerraform(struct?: KubernetesScaleWorkerWorkerInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesScaleWorkerWorkerInstancesListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KubernetesScaleWorkerWorkerInstancesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesScaleWorkerWorkerInstancesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_reason - computed: true, optional: false, required: false
  public get failedReason() {
    return this.getStringAttribute('failed_reason');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_role - computed: true, optional: false, required: false
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // lan_ip - computed: true, optional: false, required: false
  public get lanIp() {
    return this.getStringAttribute('lan_ip');
  }
}

export class KubernetesScaleWorkerWorkerInstancesListStructList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesScaleWorkerWorkerInstancesListStructOutputReference {
    return new KubernetesScaleWorkerWorkerInstancesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesScaleWorkerDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#auto_format_and_mount KubernetesScaleWorker#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#disk_partition KubernetesScaleWorker#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#disk_size KubernetesScaleWorker#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk, available values: `CLOUD_PREMIUM` and `CLOUD_SSD` and `CLOUD_HSSD` and `CLOUD_TSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#disk_type KubernetesScaleWorker#disk_type}
  */
  readonly diskType?: string;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#file_system KubernetesScaleWorker#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#mount_target KubernetesScaleWorker#mount_target}
  */
  readonly mountTarget?: string;
}

export function kubernetesScaleWorkerDataDiskToTerraform(struct?: KubernetesScaleWorkerDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_format_and_mount: cdktf.booleanToTerraform(struct!.autoFormatAndMount),
    disk_partition: cdktf.stringToTerraform(struct!.diskPartition),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
  }
}


export function kubernetesScaleWorkerDataDiskToHclTerraform(struct?: KubernetesScaleWorkerDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_format_and_mount: {
      value: cdktf.booleanToHclTerraform(struct!.autoFormatAndMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_partition: {
      value: cdktf.stringToHclTerraform(struct!.diskPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesScaleWorkerDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesScaleWorkerDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoFormatAndMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFormatAndMount = this._autoFormatAndMount;
    }
    if (this._diskPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPartition = this._diskPartition;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesScaleWorkerDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = undefined;
      this._diskPartition = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._fileSystem = undefined;
      this._mountTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = value.autoFormatAndMount;
      this._diskPartition = value.diskPartition;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._fileSystem = value.fileSystem;
      this._mountTarget = value.mountTarget;
    }
  }

  // auto_format_and_mount - computed: false, optional: true, required: false
  private _autoFormatAndMount?: boolean | cdktf.IResolvable; 
  public get autoFormatAndMount() {
    return this.getBooleanAttribute('auto_format_and_mount');
  }
  public set autoFormatAndMount(value: boolean | cdktf.IResolvable) {
    this._autoFormatAndMount = value;
  }
  public resetAutoFormatAndMount() {
    this._autoFormatAndMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFormatAndMountInput() {
    return this._autoFormatAndMount;
  }

  // disk_partition - computed: false, optional: true, required: false
  private _diskPartition?: string; 
  public get diskPartition() {
    return this.getStringAttribute('disk_partition');
  }
  public set diskPartition(value: string) {
    this._diskPartition = value;
  }
  public resetDiskPartition() {
    this._diskPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPartitionInput() {
    return this._diskPartition;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }
}

export class KubernetesScaleWorkerDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesScaleWorkerDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesScaleWorkerDataDiskOutputReference {
    return new KubernetesScaleWorkerDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesScaleWorkerGpuArgs {
  /**
  * CUDA  version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#cuda KubernetesScaleWorker#cuda}
  */
  readonly cuda?: { [key: string]: string };
  /**
  * cuDNN version. Format like: `{ version: String, name: String, doc_name: String, dev_name: String }`. `version`: cuDNN version; `name`: cuDNN name; `doc_name`: Doc name of cuDNN; `dev_name`: Dev name of cuDNN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#cudnn KubernetesScaleWorker#cudnn}
  */
  readonly cudnn?: { [key: string]: string };
  /**
  * Custom GPU driver. Format like: `{address: String}`. `address`: URL of custom GPU driver address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#custom_driver KubernetesScaleWorker#custom_driver}
  */
  readonly customDriver?: { [key: string]: string };
  /**
  * GPU driver version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#driver KubernetesScaleWorker#driver}
  */
  readonly driver?: { [key: string]: string };
  /**
  * Whether to enable MIG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#mig_enable KubernetesScaleWorker#mig_enable}
  */
  readonly migEnable?: boolean | cdktf.IResolvable;
}

export function kubernetesScaleWorkerGpuArgsToTerraform(struct?: KubernetesScaleWorkerGpuArgsOutputReference | KubernetesScaleWorkerGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cuda: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cuda),
    cudnn: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cudnn),
    custom_driver: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customDriver),
    driver: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driver),
    mig_enable: cdktf.booleanToTerraform(struct!.migEnable),
  }
}


export function kubernetesScaleWorkerGpuArgsToHclTerraform(struct?: KubernetesScaleWorkerGpuArgsOutputReference | KubernetesScaleWorkerGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cuda: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cuda),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cudnn: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cudnn),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_driver: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customDriver),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    driver: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.driver),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mig_enable: {
      value: cdktf.booleanToHclTerraform(struct!.migEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesScaleWorkerGpuArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesScaleWorkerGpuArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cuda !== undefined) {
      hasAnyValues = true;
      internalValueResult.cuda = this._cuda;
    }
    if (this._cudnn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cudnn = this._cudnn;
    }
    if (this._customDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDriver = this._customDriver;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._migEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.migEnable = this._migEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesScaleWorkerGpuArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cuda = undefined;
      this._cudnn = undefined;
      this._customDriver = undefined;
      this._driver = undefined;
      this._migEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cuda = value.cuda;
      this._cudnn = value.cudnn;
      this._customDriver = value.customDriver;
      this._driver = value.driver;
      this._migEnable = value.migEnable;
    }
  }

  // cuda - computed: false, optional: true, required: false
  private _cuda?: { [key: string]: string }; 
  public get cuda() {
    return this.getStringMapAttribute('cuda');
  }
  public set cuda(value: { [key: string]: string }) {
    this._cuda = value;
  }
  public resetCuda() {
    this._cuda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cudaInput() {
    return this._cuda;
  }

  // cudnn - computed: false, optional: true, required: false
  private _cudnn?: { [key: string]: string }; 
  public get cudnn() {
    return this.getStringMapAttribute('cudnn');
  }
  public set cudnn(value: { [key: string]: string }) {
    this._cudnn = value;
  }
  public resetCudnn() {
    this._cudnn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cudnnInput() {
    return this._cudnn;
  }

  // custom_driver - computed: false, optional: true, required: false
  private _customDriver?: { [key: string]: string }; 
  public get customDriver() {
    return this.getStringMapAttribute('custom_driver');
  }
  public set customDriver(value: { [key: string]: string }) {
    this._customDriver = value;
  }
  public resetCustomDriver() {
    this._customDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDriverInput() {
    return this._customDriver;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: { [key: string]: string }; 
  public get driver() {
    return this.getStringMapAttribute('driver');
  }
  public set driver(value: { [key: string]: string }) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // mig_enable - computed: false, optional: true, required: false
  private _migEnable?: boolean | cdktf.IResolvable; 
  public get migEnable() {
    return this.getBooleanAttribute('mig_enable');
  }
  public set migEnable(value: boolean | cdktf.IResolvable) {
    this._migEnable = value;
  }
  public resetMigEnable() {
    this._migEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migEnableInput() {
    return this._migEnable;
  }
}
export interface KubernetesScaleWorkerTaints {
  /**
  * Effect of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#effect KubernetesScaleWorker#effect}
  */
  readonly effect?: string;
  /**
  * Key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#key KubernetesScaleWorker#key}
  */
  readonly key?: string;
  /**
  * Value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#value KubernetesScaleWorker#value}
  */
  readonly value?: string;
}

export function kubernetesScaleWorkerTaintsToTerraform(struct?: KubernetesScaleWorkerTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesScaleWorkerTaintsToHclTerraform(struct?: KubernetesScaleWorkerTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesScaleWorkerTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesScaleWorkerTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesScaleWorkerTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KubernetesScaleWorkerTaintsList extends cdktf.ComplexList {
  public internalValue? : KubernetesScaleWorkerTaints[] | cdktf.IResolvable

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
  public get(index: number): KubernetesScaleWorkerTaintsOutputReference {
    return new KubernetesScaleWorkerTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesScaleWorkerWorkerConfigDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#auto_format_and_mount KubernetesScaleWorker#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#disk_partition KubernetesScaleWorker#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#disk_size KubernetesScaleWorker#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk, available values: `CLOUD_PREMIUM` and `CLOUD_SSD` and `CLOUD_HSSD` and `CLOUD_TSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#disk_type KubernetesScaleWorker#disk_type}
  */
  readonly diskType?: string;
  /**
  * Indicates whether to encrypt data disk, default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#encrypt KubernetesScaleWorker#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#file_system KubernetesScaleWorker#file_system}
  */
  readonly fileSystem?: string;
  /**
  * ID of the custom CMK in the format of UUID or `kms-abcd1234`. This parameter is used to encrypt cloud disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#kms_key_id KubernetesScaleWorker#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#mount_target KubernetesScaleWorker#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Data disk snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#snapshot_id KubernetesScaleWorker#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function kubernetesScaleWorkerWorkerConfigDataDiskToTerraform(struct?: KubernetesScaleWorkerWorkerConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_format_and_mount: cdktf.booleanToTerraform(struct!.autoFormatAndMount),
    disk_partition: cdktf.stringToTerraform(struct!.diskPartition),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function kubernetesScaleWorkerWorkerConfigDataDiskToHclTerraform(struct?: KubernetesScaleWorkerWorkerConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_format_and_mount: {
      value: cdktf.booleanToHclTerraform(struct!.autoFormatAndMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_partition: {
      value: cdktf.stringToHclTerraform(struct!.diskPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesScaleWorkerWorkerConfigDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesScaleWorkerWorkerConfigDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoFormatAndMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFormatAndMount = this._autoFormatAndMount;
    }
    if (this._diskPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPartition = this._diskPartition;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesScaleWorkerWorkerConfigDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = undefined;
      this._diskPartition = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._encrypt = undefined;
      this._fileSystem = undefined;
      this._kmsKeyId = undefined;
      this._mountTarget = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = value.autoFormatAndMount;
      this._diskPartition = value.diskPartition;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._encrypt = value.encrypt;
      this._fileSystem = value.fileSystem;
      this._kmsKeyId = value.kmsKeyId;
      this._mountTarget = value.mountTarget;
      this._snapshotId = value.snapshotId;
    }
  }

  // auto_format_and_mount - computed: false, optional: true, required: false
  private _autoFormatAndMount?: boolean | cdktf.IResolvable; 
  public get autoFormatAndMount() {
    return this.getBooleanAttribute('auto_format_and_mount');
  }
  public set autoFormatAndMount(value: boolean | cdktf.IResolvable) {
    this._autoFormatAndMount = value;
  }
  public resetAutoFormatAndMount() {
    this._autoFormatAndMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFormatAndMountInput() {
    return this._autoFormatAndMount;
  }

  // disk_partition - computed: false, optional: true, required: false
  private _diskPartition?: string; 
  public get diskPartition() {
    return this.getStringAttribute('disk_partition');
  }
  public set diskPartition(value: string) {
    this._diskPartition = value;
  }
  public resetDiskPartition() {
    this._diskPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPartitionInput() {
    return this._diskPartition;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class KubernetesScaleWorkerWorkerConfigDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesScaleWorkerWorkerConfigDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesScaleWorkerWorkerConfigDataDiskOutputReference {
    return new KubernetesScaleWorkerWorkerConfigDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesScaleWorkerWorkerConfigTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#key KubernetesScaleWorker#key}
  */
  readonly key: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#value KubernetesScaleWorker#value}
  */
  readonly value: string;
}

export function kubernetesScaleWorkerWorkerConfigTagsToTerraform(struct?: KubernetesScaleWorkerWorkerConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesScaleWorkerWorkerConfigTagsToHclTerraform(struct?: KubernetesScaleWorkerWorkerConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesScaleWorkerWorkerConfigTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesScaleWorkerWorkerConfigTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesScaleWorkerWorkerConfigTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KubernetesScaleWorkerWorkerConfigTagsList extends cdktf.ComplexList {
  public internalValue? : KubernetesScaleWorkerWorkerConfigTags[] | cdktf.IResolvable

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
  public get(index: number): KubernetesScaleWorkerWorkerConfigTagsOutputReference {
    return new KubernetesScaleWorkerWorkerConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesScaleWorkerWorkerConfig {
  /**
  * Indicates which availability zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#availability_zone KubernetesScaleWorker#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * bandwidth package id. if user is standard user, then the bandwidth_package_id is needed, or default has bandwidth_package_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#bandwidth_package_id KubernetesScaleWorker#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * CAM role name authorized to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#cam_role_name KubernetesScaleWorker#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * CDC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#cdc_id KubernetesScaleWorker#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Number of cvm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#count KubernetesScaleWorker#count}
  */
  readonly count?: number;
  /**
  * Indicate to set desired pod number in node. valid when enable_customized_pod_cidr=true, and it override `[globe_]desired_pod_num` for current node. Either all the fields `desired_pod_num` or none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#desired_pod_num KubernetesScaleWorker#desired_pod_num}
  */
  readonly desiredPodNum?: number;
  /**
  * Disaster recover groups to which a CVM instance belongs. Only support maximum 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#disaster_recover_group_ids KubernetesScaleWorker#disaster_recover_group_ids}
  */
  readonly disasterRecoverGroupIds?: string[];
  /**
  * To specify whether to enable cloud monitor service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#enhanced_monitor_service KubernetesScaleWorker#enhanced_monitor_service}
  */
  readonly enhancedMonitorService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud security service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#enhanced_security_service KubernetesScaleWorker#enhanced_security_service}
  */
  readonly enhancedSecurityService?: boolean | cdktf.IResolvable;
  /**
  * The host name of the attached instance. Dot (.) and dash (-) cannot be used as the first and last characters of HostName and cannot be used consecutively. Windows example: The length of the name character is [2, 15], letters (capitalization is not restricted), numbers and dashes (-) are allowed, dots (.) are not supported, and not all numbers are allowed. Examples of other types (Linux, etc.): The character length is [2, 60], and multiple dots are allowed. There is a segment between the dots. Each segment allows letters (with no limitation on capitalization), numbers and dashes (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#hostname KubernetesScaleWorker#hostname}
  */
  readonly hostname?: string;
  /**
  * Id of cvm hpc cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#hpc_cluster_id KubernetesScaleWorker#hpc_cluster_id}
  */
  readonly hpcClusterId?: string;
  /**
  * The valid image id, format of img-xxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#img_id KubernetesScaleWorker#img_id}
  */
  readonly imgId?: string;
  /**
  * The charge type of instance. Valid values are `PREPAID`, `POSTPAID_BY_HOUR`, `SPOTPAID`, `CDCPAID`. The default is `POSTPAID_BY_HOUR`. Note: TencentCloud International only supports `POSTPAID_BY_HOUR`, `PREPAID` instance will not terminated after cluster deleted, and may not allow to delete before expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#instance_charge_type KubernetesScaleWorker#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The tenancy (time unit is month) of the prepaid instance. NOTE: it only works when instance_charge_type is set to `PREPAID`. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#instance_charge_type_prepaid_period KubernetesScaleWorker#instance_charge_type_prepaid_period}
  */
  readonly instanceChargeTypePrepaidPeriod?: number;
  /**
  * Auto renewal flag. Valid values: `NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically, `NOTIFY_AND_MANUAL_RENEW`: notify upon expiration but do not renew automatically, `DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically. Default value: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed on a monthly basis if the account balance is sufficient. NOTE: it only works when instance_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#instance_charge_type_prepaid_renew_flag KubernetesScaleWorker#instance_charge_type_prepaid_renew_flag}
  */
  readonly instanceChargeTypePrepaidRenewFlag?: string;
  /**
  * Name of the CVMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#instance_name KubernetesScaleWorker#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Specified types of CVM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#instance_type KubernetesScaleWorker#instance_type}
  */
  readonly instanceType: string;
  /**
  * Charge types for network traffic. Available values include `TRAFFIC_POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#internet_charge_type KubernetesScaleWorker#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Max bandwidth of Internet access in Mbps. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#internet_max_bandwidth_out KubernetesScaleWorker#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * ID list of keys, should be set if `password` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#key_ids KubernetesScaleWorker#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Password to access, should be set if `key_ids` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#password KubernetesScaleWorker#password}
  */
  readonly password?: string;
  /**
  * Specify whether to assign an Internet IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#public_ip_assigned KubernetesScaleWorker#public_ip_assigned}
  */
  readonly publicIpAssigned?: boolean | cdktf.IResolvable;
  /**
  * Security groups to which a CVM instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#security_group_ids KubernetesScaleWorker#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Private network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#subnet_id KubernetesScaleWorker#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Volume of system disk in GB. Default is `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#system_disk_size KubernetesScaleWorker#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * System disk type. For more information on limits of system disk types, see [Storage Overview](https://intl.cloud.tencent.com/document/product/213/4952). Valid values: `LOCAL_BASIC`: local disk, `LOCAL_SSD`: local SSD disk, `CLOUD_SSD`: SSD, `CLOUD_PREMIUM`: Premium Cloud Storage. NOTE: `CLOUD_BASIC`, `LOCAL_BASIC` and `LOCAL_SSD` are deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#system_disk_type KubernetesScaleWorker#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * User data provided to instances, needs to be encoded in base64, and the maximum supported data size is 16KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#user_data KubernetesScaleWorker#user_data}
  */
  readonly userData?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#data_disk KubernetesScaleWorker#data_disk}
  */
  readonly dataDisk?: KubernetesScaleWorkerWorkerConfigDataDisk[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#tags KubernetesScaleWorker#tags}
  */
  readonly tags?: KubernetesScaleWorkerWorkerConfigTags[] | cdktf.IResolvable;
}

export function kubernetesScaleWorkerWorkerConfigToTerraform(struct?: KubernetesScaleWorkerWorkerConfigOutputReference | KubernetesScaleWorkerWorkerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    bandwidth_package_id: cdktf.stringToTerraform(struct!.bandwidthPackageId),
    cam_role_name: cdktf.stringToTerraform(struct!.camRoleName),
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    count: cdktf.numberToTerraform(struct!.count),
    desired_pod_num: cdktf.numberToTerraform(struct!.desiredPodNum),
    disaster_recover_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disasterRecoverGroupIds),
    enhanced_monitor_service: cdktf.booleanToTerraform(struct!.enhancedMonitorService),
    enhanced_security_service: cdktf.booleanToTerraform(struct!.enhancedSecurityService),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hpc_cluster_id: cdktf.stringToTerraform(struct!.hpcClusterId),
    img_id: cdktf.stringToTerraform(struct!.imgId),
    instance_charge_type: cdktf.stringToTerraform(struct!.instanceChargeType),
    instance_charge_type_prepaid_period: cdktf.numberToTerraform(struct!.instanceChargeTypePrepaidPeriod),
    instance_charge_type_prepaid_renew_flag: cdktf.stringToTerraform(struct!.instanceChargeTypePrepaidRenewFlag),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    internet_charge_type: cdktf.stringToTerraform(struct!.internetChargeType),
    internet_max_bandwidth_out: cdktf.numberToTerraform(struct!.internetMaxBandwidthOut),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    password: cdktf.stringToTerraform(struct!.password),
    public_ip_assigned: cdktf.booleanToTerraform(struct!.publicIpAssigned),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    system_disk_size: cdktf.numberToTerraform(struct!.systemDiskSize),
    system_disk_type: cdktf.stringToTerraform(struct!.systemDiskType),
    user_data: cdktf.stringToTerraform(struct!.userData),
    data_disk: cdktf.listMapper(kubernetesScaleWorkerWorkerConfigDataDiskToTerraform, true)(struct!.dataDisk),
    tags: cdktf.listMapper(kubernetesScaleWorkerWorkerConfigTagsToTerraform, true)(struct!.tags),
  }
}


export function kubernetesScaleWorkerWorkerConfigToHclTerraform(struct?: KubernetesScaleWorkerWorkerConfigOutputReference | KubernetesScaleWorkerWorkerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_package_id: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthPackageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cam_role_name: {
      value: cdktf.stringToHclTerraform(struct!.camRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desired_pod_num: {
      value: cdktf.numberToHclTerraform(struct!.desiredPodNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disaster_recover_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disasterRecoverGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enhanced_monitor_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedMonitorService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enhanced_security_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedSecurityService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hpc_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.hpcClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    img_id: {
      value: cdktf.stringToHclTerraform(struct!.imgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type_prepaid_period: {
      value: cdktf.numberToHclTerraform(struct!.instanceChargeTypePrepaidPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_charge_type_prepaid_renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeTypePrepaidRenewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.internetChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_max_bandwidth_out: {
      value: cdktf.numberToHclTerraform(struct!.internetMaxBandwidthOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_assigned: {
      value: cdktf.booleanToHclTerraform(struct!.publicIpAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.systemDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.systemDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(kubernetesScaleWorkerWorkerConfigDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesScaleWorkerWorkerConfigDataDiskList",
    },
    tags: {
      value: cdktf.listMapperHcl(kubernetesScaleWorkerWorkerConfigTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesScaleWorkerWorkerConfigTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesScaleWorkerWorkerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesScaleWorkerWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._bandwidthPackageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPackageId = this._bandwidthPackageId;
    }
    if (this._camRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.camRoleName = this._camRoleName;
    }
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._desiredPodNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNum = this._desiredPodNum;
    }
    if (this._disasterRecoverGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disasterRecoverGroupIds = this._disasterRecoverGroupIds;
    }
    if (this._enhancedMonitorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedMonitorService = this._enhancedMonitorService;
    }
    if (this._enhancedSecurityService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedSecurityService = this._enhancedSecurityService;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hpcClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpcClusterId = this._hpcClusterId;
    }
    if (this._imgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgId = this._imgId;
    }
    if (this._instanceChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeType = this._instanceChargeType;
    }
    if (this._instanceChargeTypePrepaidPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeTypePrepaidPeriod = this._instanceChargeTypePrepaidPeriod;
    }
    if (this._instanceChargeTypePrepaidRenewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeTypePrepaidRenewFlag = this._instanceChargeTypePrepaidRenewFlag;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._internetChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetChargeType = this._internetChargeType;
    }
    if (this._internetMaxBandwidthOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetMaxBandwidthOut = this._internetMaxBandwidthOut;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._publicIpAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAssigned = this._publicIpAssigned;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._systemDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskSize = this._systemDiskSize;
    }
    if (this._systemDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskType = this._systemDiskType;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesScaleWorkerWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._bandwidthPackageId = undefined;
      this._camRoleName = undefined;
      this._cdcId = undefined;
      this._count = undefined;
      this._desiredPodNum = undefined;
      this._disasterRecoverGroupIds = undefined;
      this._enhancedMonitorService = undefined;
      this._enhancedSecurityService = undefined;
      this._hostname = undefined;
      this._hpcClusterId = undefined;
      this._imgId = undefined;
      this._instanceChargeType = undefined;
      this._instanceChargeTypePrepaidPeriod = undefined;
      this._instanceChargeTypePrepaidRenewFlag = undefined;
      this._instanceName = undefined;
      this._instanceType = undefined;
      this._internetChargeType = undefined;
      this._internetMaxBandwidthOut = undefined;
      this._keyIds = undefined;
      this._password = undefined;
      this._publicIpAssigned = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
      this._systemDiskSize = undefined;
      this._systemDiskType = undefined;
      this._userData = undefined;
      this._dataDisk.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._bandwidthPackageId = value.bandwidthPackageId;
      this._camRoleName = value.camRoleName;
      this._cdcId = value.cdcId;
      this._count = value.count;
      this._desiredPodNum = value.desiredPodNum;
      this._disasterRecoverGroupIds = value.disasterRecoverGroupIds;
      this._enhancedMonitorService = value.enhancedMonitorService;
      this._enhancedSecurityService = value.enhancedSecurityService;
      this._hostname = value.hostname;
      this._hpcClusterId = value.hpcClusterId;
      this._imgId = value.imgId;
      this._instanceChargeType = value.instanceChargeType;
      this._instanceChargeTypePrepaidPeriod = value.instanceChargeTypePrepaidPeriod;
      this._instanceChargeTypePrepaidRenewFlag = value.instanceChargeTypePrepaidRenewFlag;
      this._instanceName = value.instanceName;
      this._instanceType = value.instanceType;
      this._internetChargeType = value.internetChargeType;
      this._internetMaxBandwidthOut = value.internetMaxBandwidthOut;
      this._keyIds = value.keyIds;
      this._password = value.password;
      this._publicIpAssigned = value.publicIpAssigned;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
      this._systemDiskSize = value.systemDiskSize;
      this._systemDiskType = value.systemDiskType;
      this._userData = value.userData;
      this._dataDisk.internalValue = value.dataDisk;
      this._tags.internalValue = value.tags;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // bandwidth_package_id - computed: false, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // cam_role_name - computed: false, optional: true, required: false
  private _camRoleName?: string; 
  public get camRoleName() {
    return this.getStringAttribute('cam_role_name');
  }
  public set camRoleName(value: string) {
    this._camRoleName = value;
  }
  public resetCamRoleName() {
    this._camRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camRoleNameInput() {
    return this._camRoleName;
  }

  // cdc_id - computed: false, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // desired_pod_num - computed: false, optional: true, required: false
  private _desiredPodNum?: number; 
  public get desiredPodNum() {
    return this.getNumberAttribute('desired_pod_num');
  }
  public set desiredPodNum(value: number) {
    this._desiredPodNum = value;
  }
  public resetDesiredPodNum() {
    this._desiredPodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumInput() {
    return this._desiredPodNum;
  }

  // disaster_recover_group_ids - computed: false, optional: true, required: false
  private _disasterRecoverGroupIds?: string[]; 
  public get disasterRecoverGroupIds() {
    return this.getListAttribute('disaster_recover_group_ids');
  }
  public set disasterRecoverGroupIds(value: string[]) {
    this._disasterRecoverGroupIds = value;
  }
  public resetDisasterRecoverGroupIds() {
    this._disasterRecoverGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoverGroupIdsInput() {
    return this._disasterRecoverGroupIds;
  }

  // enhanced_monitor_service - computed: false, optional: true, required: false
  private _enhancedMonitorService?: boolean | cdktf.IResolvable; 
  public get enhancedMonitorService() {
    return this.getBooleanAttribute('enhanced_monitor_service');
  }
  public set enhancedMonitorService(value: boolean | cdktf.IResolvable) {
    this._enhancedMonitorService = value;
  }
  public resetEnhancedMonitorService() {
    this._enhancedMonitorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitorServiceInput() {
    return this._enhancedMonitorService;
  }

  // enhanced_security_service - computed: false, optional: true, required: false
  private _enhancedSecurityService?: boolean | cdktf.IResolvable; 
  public get enhancedSecurityService() {
    return this.getBooleanAttribute('enhanced_security_service');
  }
  public set enhancedSecurityService(value: boolean | cdktf.IResolvable) {
    this._enhancedSecurityService = value;
  }
  public resetEnhancedSecurityService() {
    this._enhancedSecurityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedSecurityServiceInput() {
    return this._enhancedSecurityService;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hpc_cluster_id - computed: false, optional: true, required: false
  private _hpcClusterId?: string; 
  public get hpcClusterId() {
    return this.getStringAttribute('hpc_cluster_id');
  }
  public set hpcClusterId(value: string) {
    this._hpcClusterId = value;
  }
  public resetHpcClusterId() {
    this._hpcClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcClusterIdInput() {
    return this._hpcClusterId;
  }

  // img_id - computed: false, optional: true, required: false
  private _imgId?: string; 
  public get imgId() {
    return this.getStringAttribute('img_id');
  }
  public set imgId(value: string) {
    this._imgId = value;
  }
  public resetImgId() {
    this._imgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgIdInput() {
    return this._imgId;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_charge_type_prepaid_period - computed: false, optional: true, required: false
  private _instanceChargeTypePrepaidPeriod?: number; 
  public get instanceChargeTypePrepaidPeriod() {
    return this.getNumberAttribute('instance_charge_type_prepaid_period');
  }
  public set instanceChargeTypePrepaidPeriod(value: number) {
    this._instanceChargeTypePrepaidPeriod = value;
  }
  public resetInstanceChargeTypePrepaidPeriod() {
    this._instanceChargeTypePrepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidPeriodInput() {
    return this._instanceChargeTypePrepaidPeriod;
  }

  // instance_charge_type_prepaid_renew_flag - computed: true, optional: true, required: false
  private _instanceChargeTypePrepaidRenewFlag?: string; 
  public get instanceChargeTypePrepaidRenewFlag() {
    return this.getStringAttribute('instance_charge_type_prepaid_renew_flag');
  }
  public set instanceChargeTypePrepaidRenewFlag(value: string) {
    this._instanceChargeTypePrepaidRenewFlag = value;
  }
  public resetInstanceChargeTypePrepaidRenewFlag() {
    this._instanceChargeTypePrepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidRenewFlagInput() {
    return this._instanceChargeTypePrepaidRenewFlag;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // key_ids - computed: false, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return this.getListAttribute('key_ids');
  }
  public set keyIds(value: string[]) {
    this._keyIds = value;
  }
  public resetKeyIds() {
    this._keyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdsInput() {
    return this._keyIds;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // public_ip_assigned - computed: false, optional: true, required: false
  private _publicIpAssigned?: boolean | cdktf.IResolvable; 
  public get publicIpAssigned() {
    return this.getBooleanAttribute('public_ip_assigned');
  }
  public set publicIpAssigned(value: boolean | cdktf.IResolvable) {
    this._publicIpAssigned = value;
  }
  public resetPublicIpAssigned() {
    this._publicIpAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAssignedInput() {
    return this._publicIpAssigned;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // system_disk_type - computed: false, optional: true, required: false
  private _systemDiskType?: string; 
  public get systemDiskType() {
    return this.getStringAttribute('system_disk_type');
  }
  public set systemDiskType(value: string) {
    this._systemDiskType = value;
  }
  public resetSystemDiskType() {
    this._systemDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskTypeInput() {
    return this._systemDiskType;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesScaleWorkerWorkerConfigDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesScaleWorkerWorkerConfigDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new KubernetesScaleWorkerWorkerConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KubernetesScaleWorkerWorkerConfigTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker tencentcloud_kubernetes_scale_worker}
*/
export class KubernetesScaleWorker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_scale_worker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesScaleWorker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesScaleWorker to import
  * @param importFromId The id of the existing KubernetesScaleWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesScaleWorker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_scale_worker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_scale_worker tencentcloud_kubernetes_scale_worker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesScaleWorkerConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesScaleWorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_scale_worker',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._createResultOutputFile = config.createResultOutputFile;
    this._desiredPodNum = config.desiredPodNum;
    this._dockerGraphPath = config.dockerGraphPath;
    this._extraArgs = config.extraArgs;
    this._id = config.id;
    this._labels = config.labels;
    this._mountTarget = config.mountTarget;
    this._preStartUserScript = config.preStartUserScript;
    this._unschedulable = config.unschedulable;
    this._userScript = config.userScript;
    this._dataDisk.internalValue = config.dataDisk;
    this._gpuArgs.internalValue = config.gpuArgs;
    this._taints.internalValue = config.taints;
    this._workerConfig.internalValue = config.workerConfig;
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

  // create_result_output_file - computed: false, optional: true, required: false
  private _createResultOutputFile?: string; 
  public get createResultOutputFile() {
    return this.getStringAttribute('create_result_output_file');
  }
  public set createResultOutputFile(value: string) {
    this._createResultOutputFile = value;
  }
  public resetCreateResultOutputFile() {
    this._createResultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createResultOutputFileInput() {
    return this._createResultOutputFile;
  }

  // desired_pod_num - computed: false, optional: true, required: false
  private _desiredPodNum?: number; 
  public get desiredPodNum() {
    return this.getNumberAttribute('desired_pod_num');
  }
  public set desiredPodNum(value: number) {
    this._desiredPodNum = value;
  }
  public resetDesiredPodNum() {
    this._desiredPodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumInput() {
    return this._desiredPodNum;
  }

  // docker_graph_path - computed: false, optional: true, required: false
  private _dockerGraphPath?: string; 
  public get dockerGraphPath() {
    return this.getStringAttribute('docker_graph_path');
  }
  public set dockerGraphPath(value: string) {
    this._dockerGraphPath = value;
  }
  public resetDockerGraphPath() {
    this._dockerGraphPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerGraphPathInput() {
    return this._dockerGraphPath;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: string[]; 
  public get extraArgs() {
    return this.getListAttribute('extra_args');
  }
  public set extraArgs(value: string[]) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }

  // pre_start_user_script - computed: false, optional: true, required: false
  private _preStartUserScript?: string; 
  public get preStartUserScript() {
    return this.getStringAttribute('pre_start_user_script');
  }
  public set preStartUserScript(value: string) {
    this._preStartUserScript = value;
  }
  public resetPreStartUserScript() {
    this._preStartUserScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStartUserScriptInput() {
    return this._preStartUserScript;
  }

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: number; 
  public get unschedulable() {
    return this.getNumberAttribute('unschedulable');
  }
  public set unschedulable(value: number) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }

  // user_script - computed: false, optional: true, required: false
  private _userScript?: string; 
  public get userScript() {
    return this.getStringAttribute('user_script');
  }
  public set userScript(value: string) {
    this._userScript = value;
  }
  public resetUserScript() {
    this._userScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userScriptInput() {
    return this._userScript;
  }

  // worker_instances_list - computed: true, optional: false, required: false
  private _workerInstancesList = new KubernetesScaleWorkerWorkerInstancesListStructList(this, "worker_instances_list", false);
  public get workerInstancesList() {
    return this._workerInstancesList;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesScaleWorkerDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesScaleWorkerDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // gpu_args - computed: false, optional: true, required: false
  private _gpuArgs = new KubernetesScaleWorkerGpuArgsOutputReference(this, "gpu_args");
  public get gpuArgs() {
    return this._gpuArgs;
  }
  public putGpuArgs(value: KubernetesScaleWorkerGpuArgs) {
    this._gpuArgs.internalValue = value;
  }
  public resetGpuArgs() {
    this._gpuArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuArgsInput() {
    return this._gpuArgs.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new KubernetesScaleWorkerTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: KubernetesScaleWorkerTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // worker_config - computed: false, optional: false, required: true
  private _workerConfig = new KubernetesScaleWorkerWorkerConfigOutputReference(this, "worker_config");
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: KubernetesScaleWorkerWorkerConfig) {
    this._workerConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      create_result_output_file: cdktf.stringToTerraform(this._createResultOutputFile),
      desired_pod_num: cdktf.numberToTerraform(this._desiredPodNum),
      docker_graph_path: cdktf.stringToTerraform(this._dockerGraphPath),
      extra_args: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraArgs),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mount_target: cdktf.stringToTerraform(this._mountTarget),
      pre_start_user_script: cdktf.stringToTerraform(this._preStartUserScript),
      unschedulable: cdktf.numberToTerraform(this._unschedulable),
      user_script: cdktf.stringToTerraform(this._userScript),
      data_disk: cdktf.listMapper(kubernetesScaleWorkerDataDiskToTerraform, true)(this._dataDisk.internalValue),
      gpu_args: kubernetesScaleWorkerGpuArgsToTerraform(this._gpuArgs.internalValue),
      taints: cdktf.listMapper(kubernetesScaleWorkerTaintsToTerraform, true)(this._taints.internalValue),
      worker_config: kubernetesScaleWorkerWorkerConfigToTerraform(this._workerConfig.internalValue),
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
      create_result_output_file: {
        value: cdktf.stringToHclTerraform(this._createResultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_pod_num: {
        value: cdktf.numberToHclTerraform(this._desiredPodNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      docker_graph_path: {
        value: cdktf.stringToHclTerraform(this._dockerGraphPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_args: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraArgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mount_target: {
        value: cdktf.stringToHclTerraform(this._mountTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_start_user_script: {
        value: cdktf.stringToHclTerraform(this._preStartUserScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unschedulable: {
        value: cdktf.numberToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_script: {
        value: cdktf.stringToHclTerraform(this._userScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disk: {
        value: cdktf.listMapperHcl(kubernetesScaleWorkerDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesScaleWorkerDataDiskList",
      },
      gpu_args: {
        value: kubernetesScaleWorkerGpuArgsToHclTerraform(this._gpuArgs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesScaleWorkerGpuArgsList",
      },
      taints: {
        value: cdktf.listMapperHcl(kubernetesScaleWorkerTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesScaleWorkerTaintsList",
      },
      worker_config: {
        value: kubernetesScaleWorkerWorkerConfigToHclTerraform(this._workerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesScaleWorkerWorkerConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
