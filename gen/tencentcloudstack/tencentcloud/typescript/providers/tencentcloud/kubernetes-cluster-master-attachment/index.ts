// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterMasterAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#cluster_id KubernetesClusterMasterAttachment#cluster_id}
  */
  readonly clusterId: string;
  /**
  * When the node belongs to the podCIDR size customization mode, the maximum number of pods running on the node can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#desired_pod_numbers KubernetesClusterMasterAttachment#desired_pod_numbers}
  */
  readonly desiredPodNumbers?: number[];
  /**
  * Activate TencentCloud Automation Tools (TAT) service. If this parameter is not specified, the public image will default to enabling the Cloud Automation Assistant service, while other images will default to not enabling the Cloud Automation Assistant service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#enhanced_automation_service KubernetesClusterMasterAttachment#enhanced_automation_service}
  */
  readonly enhancedAutomationService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud monitor service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#enhanced_monitor_service KubernetesClusterMasterAttachment#enhanced_monitor_service}
  */
  readonly enhancedMonitorService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud security service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#enhanced_security_service KubernetesClusterMasterAttachment#enhanced_security_service}
  */
  readonly enhancedSecurityService?: boolean | cdktf.IResolvable;
  /**
  * When reinstalling the system, you can specify the HostName of the instance to be modified (this parameter must be passed when the cluster is in HostName mode, and the rule name should be consistent with the HostName of the CVM instance creation interface except that uppercase characters are not supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#host_name KubernetesClusterMasterAttachment#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#id KubernetesClusterMasterAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the CVM instance, this cvm will reinstall the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#instance_id KubernetesClusterMasterAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The key pair to use for the instance, it looks like skey-16jig7tx, it should be set if `password` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#key_ids KubernetesClusterMasterAttachment#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Node role, values: MASTER_ETCD, WORKER. MASTER_ETCD needs to be specified only when creating an INDEPENDENT_CLUSTER independent cluster. The number of MASTER_ETCD nodes is 3-7, and it is recommended to have an odd number. The minimum configuration for MASTER_ETCD is 4C8G.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#node_role KubernetesClusterMasterAttachment#node_role}
  */
  readonly nodeRole: string;
  /**
  * Password to access, should be set if `key_ids` not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#password KubernetesClusterMasterAttachment#password}
  */
  readonly password?: string;
  /**
  * The security group to which the instance belongs. This parameter can be obtained by calling the sgId field in the return value of DescribeSecureGroups. If this parameter is not specified, the default security group will be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#security_group_ids KubernetesClusterMasterAttachment#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * extra_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#extra_args KubernetesClusterMasterAttachment#extra_args}
  */
  readonly extraArgs?: KubernetesClusterMasterAttachmentExtraArgs;
  /**
  * master_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#master_config KubernetesClusterMasterAttachment#master_config}
  */
  readonly masterConfig?: KubernetesClusterMasterAttachmentMasterConfig;
}
export interface KubernetesClusterMasterAttachmentExtraArgs {
  /**
  * etcd custom parameters. Only supports independent clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#etcd KubernetesClusterMasterAttachment#etcd}
  */
  readonly etcd?: string[];
  /**
  * Kube apiserver custom parameters. The parameter format is ["k1=v1", "k1=v2"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#kube_api_server KubernetesClusterMasterAttachment#kube_api_server}
  */
  readonly kubeApiServer?: string[];
  /**
  * Kube controller manager custom parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#kube_controller_manager KubernetesClusterMasterAttachment#kube_controller_manager}
  */
  readonly kubeControllerManager?: string[];
  /**
  * kube scheduler custom parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#kube_scheduler KubernetesClusterMasterAttachment#kube_scheduler}
  */
  readonly kubeScheduler?: string[];
}

export function kubernetesClusterMasterAttachmentExtraArgsToTerraform(struct?: KubernetesClusterMasterAttachmentExtraArgsOutputReference | KubernetesClusterMasterAttachmentExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etcd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.etcd),
    kube_api_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeApiServer),
    kube_controller_manager: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeControllerManager),
    kube_scheduler: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeScheduler),
  }
}


export function kubernetesClusterMasterAttachmentExtraArgsToHclTerraform(struct?: KubernetesClusterMasterAttachmentExtraArgsOutputReference | KubernetesClusterMasterAttachmentExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etcd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.etcd),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kube_api_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeApiServer),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kube_controller_manager: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeControllerManager),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kube_scheduler: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeScheduler),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterAttachmentExtraArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterAttachmentExtraArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcd = this._etcd;
    }
    if (this._kubeApiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiServer = this._kubeApiServer;
    }
    if (this._kubeControllerManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeControllerManager = this._kubeControllerManager;
    }
    if (this._kubeScheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeScheduler = this._kubeScheduler;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterAttachmentExtraArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._etcd = undefined;
      this._kubeApiServer = undefined;
      this._kubeControllerManager = undefined;
      this._kubeScheduler = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._etcd = value.etcd;
      this._kubeApiServer = value.kubeApiServer;
      this._kubeControllerManager = value.kubeControllerManager;
      this._kubeScheduler = value.kubeScheduler;
    }
  }

  // etcd - computed: false, optional: true, required: false
  private _etcd?: string[]; 
  public get etcd() {
    return cdktf.Fn.tolist(this.getListAttribute('etcd'));
  }
  public set etcd(value: string[]) {
    this._etcd = value;
  }
  public resetEtcd() {
    this._etcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdInput() {
    return this._etcd;
  }

  // kube_api_server - computed: false, optional: true, required: false
  private _kubeApiServer?: string[]; 
  public get kubeApiServer() {
    return cdktf.Fn.tolist(this.getListAttribute('kube_api_server'));
  }
  public set kubeApiServer(value: string[]) {
    this._kubeApiServer = value;
  }
  public resetKubeApiServer() {
    this._kubeApiServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiServerInput() {
    return this._kubeApiServer;
  }

  // kube_controller_manager - computed: false, optional: true, required: false
  private _kubeControllerManager?: string[]; 
  public get kubeControllerManager() {
    return cdktf.Fn.tolist(this.getListAttribute('kube_controller_manager'));
  }
  public set kubeControllerManager(value: string[]) {
    this._kubeControllerManager = value;
  }
  public resetKubeControllerManager() {
    this._kubeControllerManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeControllerManagerInput() {
    return this._kubeControllerManager;
  }

  // kube_scheduler - computed: false, optional: true, required: false
  private _kubeScheduler?: string[]; 
  public get kubeScheduler() {
    return cdktf.Fn.tolist(this.getListAttribute('kube_scheduler'));
  }
  public set kubeScheduler(value: string[]) {
    this._kubeScheduler = value;
  }
  public resetKubeScheduler() {
    this._kubeScheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeSchedulerInput() {
    return this._kubeScheduler;
  }
}
export interface KubernetesClusterMasterAttachmentMasterConfigDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#auto_format_and_mount KubernetesClusterMasterAttachment#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount. NOTE: this argument doesn't support setting in node pool, or will leads to mount error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#disk_partition KubernetesClusterMasterAttachment#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#disk_size KubernetesClusterMasterAttachment#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk. Valid value: `LOCAL_BASIC`, `LOCAL_SSD`, `CLOUD_BASIC`, `CLOUD_PREMIUM`, `CLOUD_SSD`, `CLOUD_HSSD`, `CLOUD_TSSD` and `CLOUD_BSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#disk_type KubernetesClusterMasterAttachment#disk_type}
  */
  readonly diskType?: string;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#file_system KubernetesClusterMasterAttachment#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#mount_target KubernetesClusterMasterAttachment#mount_target}
  */
  readonly mountTarget?: string;
}

export function kubernetesClusterMasterAttachmentMasterConfigDataDiskToTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigDataDiskOutputReference | KubernetesClusterMasterAttachmentMasterConfigDataDisk): any {
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


export function kubernetesClusterMasterAttachmentMasterConfigDataDiskToHclTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigDataDiskOutputReference | KubernetesClusterMasterAttachmentMasterConfigDataDisk): any {
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

export class KubernetesClusterMasterAttachmentMasterConfigDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterAttachmentMasterConfigDataDisk | undefined {
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

  public set internalValue(value: KubernetesClusterMasterAttachmentMasterConfigDataDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoFormatAndMount = undefined;
      this._diskPartition = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._fileSystem = undefined;
      this._mountTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface KubernetesClusterMasterAttachmentMasterConfigExtraArgs {
  /**
  * Kubelet custom parameter. The parameter format is ["k1=v1", "k1=v2"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#kubelet KubernetesClusterMasterAttachment#kubelet}
  */
  readonly kubelet?: string[];
}

export function kubernetesClusterMasterAttachmentMasterConfigExtraArgsToTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigExtraArgsOutputReference | KubernetesClusterMasterAttachmentMasterConfigExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubelet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubelet),
  }
}


export function kubernetesClusterMasterAttachmentMasterConfigExtraArgsToHclTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigExtraArgsOutputReference | KubernetesClusterMasterAttachmentMasterConfigExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubelet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubelet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterAttachmentMasterConfigExtraArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterAttachmentMasterConfigExtraArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubelet !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterAttachmentMasterConfigExtraArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubelet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubelet = value.kubelet;
    }
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet?: string[]; 
  public get kubelet() {
    return this.getListAttribute('kubelet');
  }
  public set kubelet(value: string[]) {
    this._kubelet = value;
  }
  public resetKubelet() {
    this._kubelet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet;
  }
}
export interface KubernetesClusterMasterAttachmentMasterConfigGpuArgs {
  /**
  * CUDA  version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#cuda KubernetesClusterMasterAttachment#cuda}
  */
  readonly cuda?: { [key: string]: string };
  /**
  * cuDNN version. Format like: `{ version: String, name: String, doc_name: String, dev_name: String }`. `version`: cuDNN version; `name`: cuDNN name; `doc_name`: Doc name of cuDNN; `dev_name`: Dev name of cuDNN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#cudnn KubernetesClusterMasterAttachment#cudnn}
  */
  readonly cudnn?: { [key: string]: string };
  /**
  * Custom GPU driver. Format like: `{address: String}`. `address`: URL of custom GPU driver address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#custom_driver KubernetesClusterMasterAttachment#custom_driver}
  */
  readonly customDriver?: { [key: string]: string };
  /**
  * GPU driver version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#driver KubernetesClusterMasterAttachment#driver}
  */
  readonly driver?: { [key: string]: string };
  /**
  * Whether to enable MIG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#mig_enable KubernetesClusterMasterAttachment#mig_enable}
  */
  readonly migEnable?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterMasterAttachmentMasterConfigGpuArgsToTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigGpuArgsOutputReference | KubernetesClusterMasterAttachmentMasterConfigGpuArgs): any {
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


export function kubernetesClusterMasterAttachmentMasterConfigGpuArgsToHclTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigGpuArgsOutputReference | KubernetesClusterMasterAttachmentMasterConfigGpuArgs): any {
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

export class KubernetesClusterMasterAttachmentMasterConfigGpuArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterAttachmentMasterConfigGpuArgs | undefined {
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

  public set internalValue(value: KubernetesClusterMasterAttachmentMasterConfigGpuArgs | undefined) {
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
export interface KubernetesClusterMasterAttachmentMasterConfigLabels {
  /**
  * Name of map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#name KubernetesClusterMasterAttachment#name}
  */
  readonly name: string;
  /**
  * Value of map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#value KubernetesClusterMasterAttachment#value}
  */
  readonly value: string;
}

export function kubernetesClusterMasterAttachmentMasterConfigLabelsToTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesClusterMasterAttachmentMasterConfigLabelsToHclTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class KubernetesClusterMasterAttachmentMasterConfigLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterAttachmentMasterConfigLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterAttachmentMasterConfigLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class KubernetesClusterMasterAttachmentMasterConfigLabelsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMasterAttachmentMasterConfigLabels[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMasterAttachmentMasterConfigLabelsOutputReference {
    return new KubernetesClusterMasterAttachmentMasterConfigLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMasterAttachmentMasterConfigTaints {
  /**
  * Effect of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#effect KubernetesClusterMasterAttachment#effect}
  */
  readonly effect?: string;
  /**
  * Key of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#key KubernetesClusterMasterAttachment#key}
  */
  readonly key?: string;
  /**
  * Value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#value KubernetesClusterMasterAttachment#value}
  */
  readonly value?: string;
}

export function kubernetesClusterMasterAttachmentMasterConfigTaintsToTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigTaints | cdktf.IResolvable): any {
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


export function kubernetesClusterMasterAttachmentMasterConfigTaintsToHclTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigTaints | cdktf.IResolvable): any {
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

export class KubernetesClusterMasterAttachmentMasterConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterAttachmentMasterConfigTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterMasterAttachmentMasterConfigTaints | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterMasterAttachmentMasterConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMasterAttachmentMasterConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMasterAttachmentMasterConfigTaintsOutputReference {
    return new KubernetesClusterMasterAttachmentMasterConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMasterAttachmentMasterConfig {
  /**
  * Indicate to set desired pod number in node. valid when the cluster is podCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#desired_pod_number KubernetesClusterMasterAttachment#desired_pod_number}
  */
  readonly desiredPodNumber?: number;
  /**
  * Docker graph path. Default is `/var/lib/docker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#docker_graph_path KubernetesClusterMasterAttachment#docker_graph_path}
  */
  readonly dockerGraphPath?: string;
  /**
  * Mount target. Default is not mounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#mount_target KubernetesClusterMasterAttachment#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Set whether the joined nodes participate in scheduling, with a default value of 0, indicating participation in scheduling; Non 0 means not participating in scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#unschedulable KubernetesClusterMasterAttachment#unschedulable}
  */
  readonly unschedulable?: number;
  /**
  * User script encoded in base64, which will be executed after the k8s component runs. The user needs to ensure the script's reentrant and retry logic. The script and its generated log files can be viewed in the node path /data/ccs_userscript/. If the node needs to be initialized before joining the schedule, it can be used in conjunction with the `unschedulable` parameter. After the final initialization of the userScript is completed, add the command "kubectl uncordon nodename --kubeconfig=/root/.kube/config" to add the node to the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#user_script KubernetesClusterMasterAttachment#user_script}
  */
  readonly userScript?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#data_disk KubernetesClusterMasterAttachment#data_disk}
  */
  readonly dataDisk?: KubernetesClusterMasterAttachmentMasterConfigDataDisk;
  /**
  * extra_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#extra_args KubernetesClusterMasterAttachment#extra_args}
  */
  readonly extraArgs?: KubernetesClusterMasterAttachmentMasterConfigExtraArgs;
  /**
  * gpu_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#gpu_args KubernetesClusterMasterAttachment#gpu_args}
  */
  readonly gpuArgs?: KubernetesClusterMasterAttachmentMasterConfigGpuArgs;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#labels KubernetesClusterMasterAttachment#labels}
  */
  readonly labels?: KubernetesClusterMasterAttachmentMasterConfigLabels[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#taints KubernetesClusterMasterAttachment#taints}
  */
  readonly taints?: KubernetesClusterMasterAttachmentMasterConfigTaints[] | cdktf.IResolvable;
}

export function kubernetesClusterMasterAttachmentMasterConfigToTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigOutputReference | KubernetesClusterMasterAttachmentMasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_pod_number: cdktf.numberToTerraform(struct!.desiredPodNumber),
    docker_graph_path: cdktf.stringToTerraform(struct!.dockerGraphPath),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    unschedulable: cdktf.numberToTerraform(struct!.unschedulable),
    user_script: cdktf.stringToTerraform(struct!.userScript),
    data_disk: kubernetesClusterMasterAttachmentMasterConfigDataDiskToTerraform(struct!.dataDisk),
    extra_args: kubernetesClusterMasterAttachmentMasterConfigExtraArgsToTerraform(struct!.extraArgs),
    gpu_args: kubernetesClusterMasterAttachmentMasterConfigGpuArgsToTerraform(struct!.gpuArgs),
    labels: cdktf.listMapper(kubernetesClusterMasterAttachmentMasterConfigLabelsToTerraform, true)(struct!.labels),
    taints: cdktf.listMapper(kubernetesClusterMasterAttachmentMasterConfigTaintsToTerraform, true)(struct!.taints),
  }
}


export function kubernetesClusterMasterAttachmentMasterConfigToHclTerraform(struct?: KubernetesClusterMasterAttachmentMasterConfigOutputReference | KubernetesClusterMasterAttachmentMasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_pod_number: {
      value: cdktf.numberToHclTerraform(struct!.desiredPodNumber),
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
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unschedulable: {
      value: cdktf.numberToHclTerraform(struct!.unschedulable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_script: {
      value: cdktf.stringToHclTerraform(struct!.userScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: kubernetesClusterMasterAttachmentMasterConfigDataDiskToHclTerraform(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterAttachmentMasterConfigDataDiskList",
    },
    extra_args: {
      value: kubernetesClusterMasterAttachmentMasterConfigExtraArgsToHclTerraform(struct!.extraArgs),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterAttachmentMasterConfigExtraArgsList",
    },
    gpu_args: {
      value: kubernetesClusterMasterAttachmentMasterConfigGpuArgsToHclTerraform(struct!.gpuArgs),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterAttachmentMasterConfigGpuArgsList",
    },
    labels: {
      value: cdktf.listMapperHcl(kubernetesClusterMasterAttachmentMasterConfigLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterAttachmentMasterConfigLabelsList",
    },
    taints: {
      value: cdktf.listMapperHcl(kubernetesClusterMasterAttachmentMasterConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterAttachmentMasterConfigTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterAttachmentMasterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterAttachmentMasterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredPodNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNumber = this._desiredPodNumber;
    }
    if (this._dockerGraphPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerGraphPath = this._dockerGraphPath;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._unschedulable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unschedulable = this._unschedulable;
    }
    if (this._userScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.userScript = this._userScript;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._extraArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs?.internalValue;
    }
    if (this._gpuArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuArgs = this._gpuArgs?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterAttachmentMasterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredPodNumber = undefined;
      this._dockerGraphPath = undefined;
      this._mountTarget = undefined;
      this._unschedulable = undefined;
      this._userScript = undefined;
      this._dataDisk.internalValue = undefined;
      this._extraArgs.internalValue = undefined;
      this._gpuArgs.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredPodNumber = value.desiredPodNumber;
      this._dockerGraphPath = value.dockerGraphPath;
      this._mountTarget = value.mountTarget;
      this._unschedulable = value.unschedulable;
      this._userScript = value.userScript;
      this._dataDisk.internalValue = value.dataDisk;
      this._extraArgs.internalValue = value.extraArgs;
      this._gpuArgs.internalValue = value.gpuArgs;
      this._labels.internalValue = value.labels;
      this._taints.internalValue = value.taints;
    }
  }

  // desired_pod_number - computed: false, optional: true, required: false
  private _desiredPodNumber?: number; 
  public get desiredPodNumber() {
    return this.getNumberAttribute('desired_pod_number');
  }
  public set desiredPodNumber(value: number) {
    this._desiredPodNumber = value;
  }
  public resetDesiredPodNumber() {
    this._desiredPodNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumberInput() {
    return this._desiredPodNumber;
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

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesClusterMasterAttachmentMasterConfigDataDiskOutputReference(this, "data_disk");
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesClusterMasterAttachmentMasterConfigDataDisk) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs = new KubernetesClusterMasterAttachmentMasterConfigExtraArgsOutputReference(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }
  public putExtraArgs(value: KubernetesClusterMasterAttachmentMasterConfigExtraArgs) {
    this._extraArgs.internalValue = value;
  }
  public resetExtraArgs() {
    this._extraArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs.internalValue;
  }

  // gpu_args - computed: false, optional: true, required: false
  private _gpuArgs = new KubernetesClusterMasterAttachmentMasterConfigGpuArgsOutputReference(this, "gpu_args");
  public get gpuArgs() {
    return this._gpuArgs;
  }
  public putGpuArgs(value: KubernetesClusterMasterAttachmentMasterConfigGpuArgs) {
    this._gpuArgs.internalValue = value;
  }
  public resetGpuArgs() {
    this._gpuArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuArgsInput() {
    return this._gpuArgs.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new KubernetesClusterMasterAttachmentMasterConfigLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: KubernetesClusterMasterAttachmentMasterConfigLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new KubernetesClusterMasterAttachmentMasterConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: KubernetesClusterMasterAttachmentMasterConfigTaints[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment tencentcloud_kubernetes_cluster_master_attachment}
*/
export class KubernetesClusterMasterAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster_master_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterMasterAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterMasterAttachment to import
  * @param importFromId The id of the existing KubernetesClusterMasterAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterMasterAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster_master_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/kubernetes_cluster_master_attachment tencentcloud_kubernetes_cluster_master_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterMasterAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterMasterAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster_master_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._desiredPodNumbers = config.desiredPodNumbers;
    this._enhancedAutomationService = config.enhancedAutomationService;
    this._enhancedMonitorService = config.enhancedMonitorService;
    this._enhancedSecurityService = config.enhancedSecurityService;
    this._hostName = config.hostName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._keyIds = config.keyIds;
    this._nodeRole = config.nodeRole;
    this._password = config.password;
    this._securityGroupIds = config.securityGroupIds;
    this._extraArgs.internalValue = config.extraArgs;
    this._masterConfig.internalValue = config.masterConfig;
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

  // desired_pod_numbers - computed: false, optional: true, required: false
  private _desiredPodNumbers?: number[]; 
  public get desiredPodNumbers() {
    return this.getNumberListAttribute('desired_pod_numbers');
  }
  public set desiredPodNumbers(value: number[]) {
    this._desiredPodNumbers = value;
  }
  public resetDesiredPodNumbers() {
    this._desiredPodNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumbersInput() {
    return this._desiredPodNumbers;
  }

  // enhanced_automation_service - computed: false, optional: true, required: false
  private _enhancedAutomationService?: boolean | cdktf.IResolvable; 
  public get enhancedAutomationService() {
    return this.getBooleanAttribute('enhanced_automation_service');
  }
  public set enhancedAutomationService(value: boolean | cdktf.IResolvable) {
    this._enhancedAutomationService = value;
  }
  public resetEnhancedAutomationService() {
    this._enhancedAutomationService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAutomationServiceInput() {
    return this._enhancedAutomationService;
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

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // node_role - computed: false, optional: false, required: true
  private _nodeRole?: string; 
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }
  public set nodeRole(value: string) {
    this._nodeRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleInput() {
    return this._nodeRole;
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

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs = new KubernetesClusterMasterAttachmentExtraArgsOutputReference(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }
  public putExtraArgs(value: KubernetesClusterMasterAttachmentExtraArgs) {
    this._extraArgs.internalValue = value;
  }
  public resetExtraArgs() {
    this._extraArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs.internalValue;
  }

  // master_config - computed: false, optional: true, required: false
  private _masterConfig = new KubernetesClusterMasterAttachmentMasterConfigOutputReference(this, "master_config");
  public get masterConfig() {
    return this._masterConfig;
  }
  public putMasterConfig(value: KubernetesClusterMasterAttachmentMasterConfig) {
    this._masterConfig.internalValue = value;
  }
  public resetMasterConfig() {
    this._masterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      desired_pod_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._desiredPodNumbers),
      enhanced_automation_service: cdktf.booleanToTerraform(this._enhancedAutomationService),
      enhanced_monitor_service: cdktf.booleanToTerraform(this._enhancedMonitorService),
      enhanced_security_service: cdktf.booleanToTerraform(this._enhancedSecurityService),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyIds),
      node_role: cdktf.stringToTerraform(this._nodeRole),
      password: cdktf.stringToTerraform(this._password),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      extra_args: kubernetesClusterMasterAttachmentExtraArgsToTerraform(this._extraArgs.internalValue),
      master_config: kubernetesClusterMasterAttachmentMasterConfigToTerraform(this._masterConfig.internalValue),
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
      desired_pod_numbers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._desiredPodNumbers),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      enhanced_automation_service: {
        value: cdktf.booleanToHclTerraform(this._enhancedAutomationService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhanced_monitor_service: {
        value: cdktf.booleanToHclTerraform(this._enhancedMonitorService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhanced_security_service: {
        value: cdktf.booleanToHclTerraform(this._enhancedSecurityService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      node_role: {
        value: cdktf.stringToHclTerraform(this._nodeRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extra_args: {
        value: kubernetesClusterMasterAttachmentExtraArgsToHclTerraform(this._extraArgs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMasterAttachmentExtraArgsList",
      },
      master_config: {
        value: kubernetesClusterMasterAttachmentMasterConfigToHclTerraform(this._masterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMasterAttachmentMasterConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
