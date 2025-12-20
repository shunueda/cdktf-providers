// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#cluster_id KubernetesClusterAttachment#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The host name of the attached instance. Dot (.) and dash (-) cannot be used as the first and last characters of HostName and cannot be used consecutively. Windows example: The length of the name character is [2, 15], letters (capitalization is not restricted), numbers and dashes (-) are allowed, dots (.) are not supported, and not all numbers are allowed. Examples of other types (Linux, etc.): The character length is [2, 60], and multiple dots are allowed. There is a segment between the dots. Each segment allows letters (with no limitation on capitalization), numbers and dashes (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#hostname KubernetesClusterAttachment#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#id KubernetesClusterAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of Node image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#image_id KubernetesClusterAttachment#image_id}
  */
  readonly imageId?: string;
  /**
  * ID of the CVM instance, this cvm will reinstall the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#instance_id KubernetesClusterAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The key pair to use for the instance, it looks like skey-16jig7tx, it should be set if `password` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#key_ids KubernetesClusterAttachment#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Labels of tke attachment exits CVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#labels KubernetesClusterAttachment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Password to access, should be set if `key_ids` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#password KubernetesClusterAttachment#password}
  */
  readonly password?: string;
  /**
  * A list of security group IDs after attach to cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#security_groups KubernetesClusterAttachment#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Sets whether the joining node participates in the schedule. Default is `0`, which means it participates in scheduling. Non-zero(eg: `1`) number means it does not participate in scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#unschedulable KubernetesClusterAttachment#unschedulable}
  */
  readonly unschedulable?: number;
  /**
  * worker_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#worker_config KubernetesClusterAttachment#worker_config}
  */
  readonly workerConfig?: KubernetesClusterAttachmentWorkerConfig;
  /**
  * worker_config_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#worker_config_overrides KubernetesClusterAttachment#worker_config_overrides}
  */
  readonly workerConfigOverrides?: KubernetesClusterAttachmentWorkerConfigOverrides;
}
export interface KubernetesClusterAttachmentWorkerConfigDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#auto_format_and_mount KubernetesClusterAttachment#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount. NOTE: this argument doesn't support setting in node pool, or will leads to mount error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#disk_partition KubernetesClusterAttachment#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#disk_size KubernetesClusterAttachment#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk. Valid value: `LOCAL_BASIC`, `LOCAL_SSD`, `CLOUD_BASIC`, `CLOUD_PREMIUM`, `CLOUD_SSD`, `CLOUD_HSSD`, `CLOUD_TSSD` and `CLOUD_BSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#disk_type KubernetesClusterAttachment#disk_type}
  */
  readonly diskType?: string;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#file_system KubernetesClusterAttachment#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#mount_target KubernetesClusterAttachment#mount_target}
  */
  readonly mountTarget?: string;
}

export function kubernetesClusterAttachmentWorkerConfigDataDiskToTerraform(struct?: KubernetesClusterAttachmentWorkerConfigDataDisk | cdktf.IResolvable): any {
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


export function kubernetesClusterAttachmentWorkerConfigDataDiskToHclTerraform(struct?: KubernetesClusterAttachmentWorkerConfigDataDisk | cdktf.IResolvable): any {
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

export class KubernetesClusterAttachmentWorkerConfigDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterAttachmentWorkerConfigDataDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterAttachmentWorkerConfigDataDisk | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterAttachmentWorkerConfigDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterAttachmentWorkerConfigDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterAttachmentWorkerConfigDataDiskOutputReference {
    return new KubernetesClusterAttachmentWorkerConfigDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterAttachmentWorkerConfigGpuArgs {
  /**
  * CUDA  version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#cuda KubernetesClusterAttachment#cuda}
  */
  readonly cuda?: { [key: string]: string };
  /**
  * cuDNN version. Format like: `{ version: String, name: String, doc_name: String, dev_name: String }`. `version`: cuDNN version; `name`: cuDNN name; `doc_name`: Doc name of cuDNN; `dev_name`: Dev name of cuDNN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#cudnn KubernetesClusterAttachment#cudnn}
  */
  readonly cudnn?: { [key: string]: string };
  /**
  * Custom GPU driver. Format like: `{address: String}`. `address`: URL of custom GPU driver address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#custom_driver KubernetesClusterAttachment#custom_driver}
  */
  readonly customDriver?: { [key: string]: string };
  /**
  * GPU driver version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#driver KubernetesClusterAttachment#driver}
  */
  readonly driver?: { [key: string]: string };
  /**
  * Whether to enable MIG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#mig_enable KubernetesClusterAttachment#mig_enable}
  */
  readonly migEnable?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterAttachmentWorkerConfigGpuArgsToTerraform(struct?: KubernetesClusterAttachmentWorkerConfigGpuArgsOutputReference | KubernetesClusterAttachmentWorkerConfigGpuArgs): any {
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


export function kubernetesClusterAttachmentWorkerConfigGpuArgsToHclTerraform(struct?: KubernetesClusterAttachmentWorkerConfigGpuArgsOutputReference | KubernetesClusterAttachmentWorkerConfigGpuArgs): any {
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

export class KubernetesClusterAttachmentWorkerConfigGpuArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterAttachmentWorkerConfigGpuArgs | undefined {
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

  public set internalValue(value: KubernetesClusterAttachmentWorkerConfigGpuArgs | undefined) {
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
export interface KubernetesClusterAttachmentWorkerConfigTaints {
  /**
  * Effect of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#effect KubernetesClusterAttachment#effect}
  */
  readonly effect?: string;
  /**
  * Key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#key KubernetesClusterAttachment#key}
  */
  readonly key?: string;
  /**
  * Value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#value KubernetesClusterAttachment#value}
  */
  readonly value?: string;
}

export function kubernetesClusterAttachmentWorkerConfigTaintsToTerraform(struct?: KubernetesClusterAttachmentWorkerConfigTaints | cdktf.IResolvable): any {
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


export function kubernetesClusterAttachmentWorkerConfigTaintsToHclTerraform(struct?: KubernetesClusterAttachmentWorkerConfigTaints | cdktf.IResolvable): any {
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

export class KubernetesClusterAttachmentWorkerConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterAttachmentWorkerConfigTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterAttachmentWorkerConfigTaints | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterAttachmentWorkerConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterAttachmentWorkerConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterAttachmentWorkerConfigTaintsOutputReference {
    return new KubernetesClusterAttachmentWorkerConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterAttachmentWorkerConfig {
  /**
  * Indicate to set desired pod number in node. valid when the cluster is podCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#desired_pod_num KubernetesClusterAttachment#desired_pod_num}
  */
  readonly desiredPodNum?: number;
  /**
  * Docker graph path. Default is `/var/lib/docker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#docker_graph_path KubernetesClusterAttachment#docker_graph_path}
  */
  readonly dockerGraphPath?: string;
  /**
  * Custom parameter information related to the node. This is a white-list parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#extra_args KubernetesClusterAttachment#extra_args}
  */
  readonly extraArgs?: string[];
  /**
  * Indicate to schedule the adding node or not. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#is_schedule KubernetesClusterAttachment#is_schedule}
  */
  readonly isSchedule?: boolean | cdktf.IResolvable;
  /**
  * Mount target. Default is not mounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#mount_target KubernetesClusterAttachment#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Base64-encoded user script, executed before initializing the node, currently only effective for adding existing nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#pre_start_user_script KubernetesClusterAttachment#pre_start_user_script}
  */
  readonly preStartUserScript?: string;
  /**
  * Base64-encoded User Data text, the length limit is 16KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#user_data KubernetesClusterAttachment#user_data}
  */
  readonly userData?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#data_disk KubernetesClusterAttachment#data_disk}
  */
  readonly dataDisk?: KubernetesClusterAttachmentWorkerConfigDataDisk[] | cdktf.IResolvable;
  /**
  * gpu_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#gpu_args KubernetesClusterAttachment#gpu_args}
  */
  readonly gpuArgs?: KubernetesClusterAttachmentWorkerConfigGpuArgs;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#taints KubernetesClusterAttachment#taints}
  */
  readonly taints?: KubernetesClusterAttachmentWorkerConfigTaints[] | cdktf.IResolvable;
}

export function kubernetesClusterAttachmentWorkerConfigToTerraform(struct?: KubernetesClusterAttachmentWorkerConfigOutputReference | KubernetesClusterAttachmentWorkerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_pod_num: cdktf.numberToTerraform(struct!.desiredPodNum),
    docker_graph_path: cdktf.stringToTerraform(struct!.dockerGraphPath),
    extra_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraArgs),
    is_schedule: cdktf.booleanToTerraform(struct!.isSchedule),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    pre_start_user_script: cdktf.stringToTerraform(struct!.preStartUserScript),
    user_data: cdktf.stringToTerraform(struct!.userData),
    data_disk: cdktf.listMapper(kubernetesClusterAttachmentWorkerConfigDataDiskToTerraform, true)(struct!.dataDisk),
    gpu_args: kubernetesClusterAttachmentWorkerConfigGpuArgsToTerraform(struct!.gpuArgs),
    taints: cdktf.listMapper(kubernetesClusterAttachmentWorkerConfigTaintsToTerraform, true)(struct!.taints),
  }
}


export function kubernetesClusterAttachmentWorkerConfigToHclTerraform(struct?: KubernetesClusterAttachmentWorkerConfigOutputReference | KubernetesClusterAttachmentWorkerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_pod_num: {
      value: cdktf.numberToHclTerraform(struct!.desiredPodNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    docker_graph_path: {
      value: cdktf.stringToHclTerraform(struct!.dockerGraphPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_schedule: {
      value: cdktf.booleanToHclTerraform(struct!.isSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_start_user_script: {
      value: cdktf.stringToHclTerraform(struct!.preStartUserScript),
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
      value: cdktf.listMapperHcl(kubernetesClusterAttachmentWorkerConfigDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterAttachmentWorkerConfigDataDiskList",
    },
    gpu_args: {
      value: kubernetesClusterAttachmentWorkerConfigGpuArgsToHclTerraform(struct!.gpuArgs),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterAttachmentWorkerConfigGpuArgsList",
    },
    taints: {
      value: cdktf.listMapperHcl(kubernetesClusterAttachmentWorkerConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterAttachmentWorkerConfigTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterAttachmentWorkerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterAttachmentWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredPodNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNum = this._desiredPodNum;
    }
    if (this._dockerGraphPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerGraphPath = this._dockerGraphPath;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._isSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSchedule = this._isSchedule;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._preStartUserScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStartUserScript = this._preStartUserScript;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._gpuArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuArgs = this._gpuArgs?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterAttachmentWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredPodNum = undefined;
      this._dockerGraphPath = undefined;
      this._extraArgs = undefined;
      this._isSchedule = undefined;
      this._mountTarget = undefined;
      this._preStartUserScript = undefined;
      this._userData = undefined;
      this._dataDisk.internalValue = undefined;
      this._gpuArgs.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredPodNum = value.desiredPodNum;
      this._dockerGraphPath = value.dockerGraphPath;
      this._extraArgs = value.extraArgs;
      this._isSchedule = value.isSchedule;
      this._mountTarget = value.mountTarget;
      this._preStartUserScript = value.preStartUserScript;
      this._userData = value.userData;
      this._dataDisk.internalValue = value.dataDisk;
      this._gpuArgs.internalValue = value.gpuArgs;
      this._taints.internalValue = value.taints;
    }
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

  // is_schedule - computed: false, optional: true, required: false
  private _isSchedule?: boolean | cdktf.IResolvable; 
  public get isSchedule() {
    return this.getBooleanAttribute('is_schedule');
  }
  public set isSchedule(value: boolean | cdktf.IResolvable) {
    this._isSchedule = value;
  }
  public resetIsSchedule() {
    this._isSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduleInput() {
    return this._isSchedule;
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
  private _dataDisk = new KubernetesClusterAttachmentWorkerConfigDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesClusterAttachmentWorkerConfigDataDisk[] | cdktf.IResolvable) {
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
  private _gpuArgs = new KubernetesClusterAttachmentWorkerConfigGpuArgsOutputReference(this, "gpu_args");
  public get gpuArgs() {
    return this._gpuArgs;
  }
  public putGpuArgs(value: KubernetesClusterAttachmentWorkerConfigGpuArgs) {
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
  private _taints = new KubernetesClusterAttachmentWorkerConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: KubernetesClusterAttachmentWorkerConfigTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}
export interface KubernetesClusterAttachmentWorkerConfigOverridesDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#auto_format_and_mount KubernetesClusterAttachment#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount. NOTE: this argument doesn't support setting in node pool, or will leads to mount error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#disk_partition KubernetesClusterAttachment#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#disk_size KubernetesClusterAttachment#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk. Valid value: `LOCAL_BASIC`, `LOCAL_SSD`, `CLOUD_BASIC`, `CLOUD_PREMIUM`, `CLOUD_SSD`, `CLOUD_HSSD`, `CLOUD_TSSD` and `CLOUD_BSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#disk_type KubernetesClusterAttachment#disk_type}
  */
  readonly diskType?: string;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#file_system KubernetesClusterAttachment#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#mount_target KubernetesClusterAttachment#mount_target}
  */
  readonly mountTarget?: string;
}

export function kubernetesClusterAttachmentWorkerConfigOverridesDataDiskToTerraform(struct?: KubernetesClusterAttachmentWorkerConfigOverridesDataDisk | cdktf.IResolvable): any {
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


export function kubernetesClusterAttachmentWorkerConfigOverridesDataDiskToHclTerraform(struct?: KubernetesClusterAttachmentWorkerConfigOverridesDataDisk | cdktf.IResolvable): any {
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

export class KubernetesClusterAttachmentWorkerConfigOverridesDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterAttachmentWorkerConfigOverridesDataDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterAttachmentWorkerConfigOverridesDataDisk | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterAttachmentWorkerConfigOverridesDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterAttachmentWorkerConfigOverridesDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterAttachmentWorkerConfigOverridesDataDiskOutputReference {
    return new KubernetesClusterAttachmentWorkerConfigOverridesDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterAttachmentWorkerConfigOverridesGpuArgs {
  /**
  * CUDA  version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#cuda KubernetesClusterAttachment#cuda}
  */
  readonly cuda?: { [key: string]: string };
  /**
  * cuDNN version. Format like: `{ version: String, name: String, doc_name: String, dev_name: String }`. `version`: cuDNN version; `name`: cuDNN name; `doc_name`: Doc name of cuDNN; `dev_name`: Dev name of cuDNN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#cudnn KubernetesClusterAttachment#cudnn}
  */
  readonly cudnn?: { [key: string]: string };
  /**
  * Custom GPU driver. Format like: `{address: String}`. `address`: URL of custom GPU driver address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#custom_driver KubernetesClusterAttachment#custom_driver}
  */
  readonly customDriver?: { [key: string]: string };
  /**
  * GPU driver version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#driver KubernetesClusterAttachment#driver}
  */
  readonly driver?: { [key: string]: string };
  /**
  * Whether to enable MIG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#mig_enable KubernetesClusterAttachment#mig_enable}
  */
  readonly migEnable?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterAttachmentWorkerConfigOverridesGpuArgsToTerraform(struct?: KubernetesClusterAttachmentWorkerConfigOverridesGpuArgsOutputReference | KubernetesClusterAttachmentWorkerConfigOverridesGpuArgs): any {
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


export function kubernetesClusterAttachmentWorkerConfigOverridesGpuArgsToHclTerraform(struct?: KubernetesClusterAttachmentWorkerConfigOverridesGpuArgsOutputReference | KubernetesClusterAttachmentWorkerConfigOverridesGpuArgs): any {
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

export class KubernetesClusterAttachmentWorkerConfigOverridesGpuArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterAttachmentWorkerConfigOverridesGpuArgs | undefined {
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

  public set internalValue(value: KubernetesClusterAttachmentWorkerConfigOverridesGpuArgs | undefined) {
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
export interface KubernetesClusterAttachmentWorkerConfigOverrides {
  /**
  * Indicate to set desired pod number in node. valid when the cluster is podCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#desired_pod_num KubernetesClusterAttachment#desired_pod_num}
  */
  readonly desiredPodNum?: number;
  /**
  * Docker graph path. Default is `/var/lib/docker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#docker_graph_path KubernetesClusterAttachment#docker_graph_path}
  */
  readonly dockerGraphPath?: string;
  /**
  * Custom parameter information related to the node. This is a white-list parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#extra_args KubernetesClusterAttachment#extra_args}
  */
  readonly extraArgs?: string[];
  /**
  * Indicate to schedule the adding node or not. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#is_schedule KubernetesClusterAttachment#is_schedule}
  */
  readonly isSchedule?: boolean | cdktf.IResolvable;
  /**
  * Mount target. Default is not mounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#mount_target KubernetesClusterAttachment#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Base64-encoded user script, executed before initializing the node, currently only effective for adding existing nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#pre_start_user_script KubernetesClusterAttachment#pre_start_user_script}
  */
  readonly preStartUserScript?: string;
  /**
  * Base64-encoded User Data text, the length limit is 16KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#user_data KubernetesClusterAttachment#user_data}
  */
  readonly userData?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#data_disk KubernetesClusterAttachment#data_disk}
  */
  readonly dataDisk?: KubernetesClusterAttachmentWorkerConfigOverridesDataDisk[] | cdktf.IResolvable;
  /**
  * gpu_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#gpu_args KubernetesClusterAttachment#gpu_args}
  */
  readonly gpuArgs?: KubernetesClusterAttachmentWorkerConfigOverridesGpuArgs;
}

export function kubernetesClusterAttachmentWorkerConfigOverridesToTerraform(struct?: KubernetesClusterAttachmentWorkerConfigOverridesOutputReference | KubernetesClusterAttachmentWorkerConfigOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_pod_num: cdktf.numberToTerraform(struct!.desiredPodNum),
    docker_graph_path: cdktf.stringToTerraform(struct!.dockerGraphPath),
    extra_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraArgs),
    is_schedule: cdktf.booleanToTerraform(struct!.isSchedule),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    pre_start_user_script: cdktf.stringToTerraform(struct!.preStartUserScript),
    user_data: cdktf.stringToTerraform(struct!.userData),
    data_disk: cdktf.listMapper(kubernetesClusterAttachmentWorkerConfigOverridesDataDiskToTerraform, true)(struct!.dataDisk),
    gpu_args: kubernetesClusterAttachmentWorkerConfigOverridesGpuArgsToTerraform(struct!.gpuArgs),
  }
}


export function kubernetesClusterAttachmentWorkerConfigOverridesToHclTerraform(struct?: KubernetesClusterAttachmentWorkerConfigOverridesOutputReference | KubernetesClusterAttachmentWorkerConfigOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_pod_num: {
      value: cdktf.numberToHclTerraform(struct!.desiredPodNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    docker_graph_path: {
      value: cdktf.stringToHclTerraform(struct!.dockerGraphPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_schedule: {
      value: cdktf.booleanToHclTerraform(struct!.isSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_start_user_script: {
      value: cdktf.stringToHclTerraform(struct!.preStartUserScript),
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
      value: cdktf.listMapperHcl(kubernetesClusterAttachmentWorkerConfigOverridesDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterAttachmentWorkerConfigOverridesDataDiskList",
    },
    gpu_args: {
      value: kubernetesClusterAttachmentWorkerConfigOverridesGpuArgsToHclTerraform(struct!.gpuArgs),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterAttachmentWorkerConfigOverridesGpuArgsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterAttachmentWorkerConfigOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterAttachmentWorkerConfigOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredPodNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNum = this._desiredPodNum;
    }
    if (this._dockerGraphPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerGraphPath = this._dockerGraphPath;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._isSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSchedule = this._isSchedule;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._preStartUserScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStartUserScript = this._preStartUserScript;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._gpuArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuArgs = this._gpuArgs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterAttachmentWorkerConfigOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredPodNum = undefined;
      this._dockerGraphPath = undefined;
      this._extraArgs = undefined;
      this._isSchedule = undefined;
      this._mountTarget = undefined;
      this._preStartUserScript = undefined;
      this._userData = undefined;
      this._dataDisk.internalValue = undefined;
      this._gpuArgs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredPodNum = value.desiredPodNum;
      this._dockerGraphPath = value.dockerGraphPath;
      this._extraArgs = value.extraArgs;
      this._isSchedule = value.isSchedule;
      this._mountTarget = value.mountTarget;
      this._preStartUserScript = value.preStartUserScript;
      this._userData = value.userData;
      this._dataDisk.internalValue = value.dataDisk;
      this._gpuArgs.internalValue = value.gpuArgs;
    }
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

  // is_schedule - computed: false, optional: true, required: false
  private _isSchedule?: boolean | cdktf.IResolvable; 
  public get isSchedule() {
    return this.getBooleanAttribute('is_schedule');
  }
  public set isSchedule(value: boolean | cdktf.IResolvable) {
    this._isSchedule = value;
  }
  public resetIsSchedule() {
    this._isSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduleInput() {
    return this._isSchedule;
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
  private _dataDisk = new KubernetesClusterAttachmentWorkerConfigOverridesDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesClusterAttachmentWorkerConfigOverridesDataDisk[] | cdktf.IResolvable) {
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
  private _gpuArgs = new KubernetesClusterAttachmentWorkerConfigOverridesGpuArgsOutputReference(this, "gpu_args");
  public get gpuArgs() {
    return this._gpuArgs;
  }
  public putGpuArgs(value: KubernetesClusterAttachmentWorkerConfigOverridesGpuArgs) {
    this._gpuArgs.internalValue = value;
  }
  public resetGpuArgs() {
    this._gpuArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuArgsInput() {
    return this._gpuArgs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment tencentcloud_kubernetes_cluster_attachment}
*/
export class KubernetesClusterAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterAttachment to import
  * @param importFromId The id of the existing KubernetesClusterAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/kubernetes_cluster_attachment tencentcloud_kubernetes_cluster_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceId = config.instanceId;
    this._keyIds = config.keyIds;
    this._labels = config.labels;
    this._password = config.password;
    this._securityGroups = config.securityGroups;
    this._unschedulable = config.unschedulable;
    this._workerConfig.internalValue = config.workerConfig;
    this._workerConfigOverrides.internalValue = config.workerConfigOverrides;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig = new KubernetesClusterAttachmentWorkerConfigOutputReference(this, "worker_config");
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: KubernetesClusterAttachmentWorkerConfig) {
    this._workerConfig.internalValue = value;
  }
  public resetWorkerConfig() {
    this._workerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
  }

  // worker_config_overrides - computed: false, optional: true, required: false
  private _workerConfigOverrides = new KubernetesClusterAttachmentWorkerConfigOverridesOutputReference(this, "worker_config_overrides");
  public get workerConfigOverrides() {
    return this._workerConfigOverrides;
  }
  public putWorkerConfigOverrides(value: KubernetesClusterAttachmentWorkerConfigOverrides) {
    this._workerConfigOverrides.internalValue = value;
  }
  public resetWorkerConfigOverrides() {
    this._workerConfigOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigOverridesInput() {
    return this._workerConfigOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyIds),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      password: cdktf.stringToTerraform(this._password),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      unschedulable: cdktf.numberToTerraform(this._unschedulable),
      worker_config: kubernetesClusterAttachmentWorkerConfigToTerraform(this._workerConfig.internalValue),
      worker_config_overrides: kubernetesClusterAttachmentWorkerConfigOverridesToTerraform(this._workerConfigOverrides.internalValue),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unschedulable: {
        value: cdktf.numberToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_config: {
        value: kubernetesClusterAttachmentWorkerConfigToHclTerraform(this._workerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterAttachmentWorkerConfigList",
      },
      worker_config_overrides: {
        value: kubernetesClusterAttachmentWorkerConfigOverridesToHclTerraform(this._workerConfigOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterAttachmentWorkerConfigOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
