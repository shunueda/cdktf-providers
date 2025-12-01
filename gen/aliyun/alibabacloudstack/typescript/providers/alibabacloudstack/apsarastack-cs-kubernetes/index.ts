// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackCsKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#availability_zone ApsarastackCsKubernetes#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#client_cert ApsarastackCsKubernetes#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#client_key ApsarastackCsKubernetes#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#cloud_monitor_flags ApsarastackCsKubernetes#cloud_monitor_flags}
  */
  readonly cloudMonitorFlags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#cluster_ca_cert ApsarastackCsKubernetes#cluster_ca_cert}
  */
  readonly clusterCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#cluster_type ApsarastackCsKubernetes#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#cpu_policy ApsarastackCsKubernetes#cpu_policy}
  */
  readonly cpuPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#delete_protection ApsarastackCsKubernetes#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#enable_ssh ApsarastackCsKubernetes#enable_ssh}
  */
  readonly enableSsh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#format_disk ApsarastackCsKubernetes#format_disk}
  */
  readonly formatDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#id ApsarastackCsKubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#image_id ApsarastackCsKubernetes#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#instances ApsarastackCsKubernetes#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#is_enterprise_security_group ApsarastackCsKubernetes#is_enterprise_security_group}
  */
  readonly isEnterpriseSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#keep_instance_name ApsarastackCsKubernetes#keep_instance_name}
  */
  readonly keepInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#key_name ApsarastackCsKubernetes#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#kms_encrypted_password ApsarastackCsKubernetes#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#kms_encryption_context ApsarastackCsKubernetes#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#kube_config ApsarastackCsKubernetes#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_count ApsarastackCsKubernetes#master_count}
  */
  readonly masterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_disk_category ApsarastackCsKubernetes#master_disk_category}
  */
  readonly masterDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_disk_encrypt_algorithm ApsarastackCsKubernetes#master_disk_encrypt_algorithm}
  */
  readonly masterDiskEncryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_disk_encrypted ApsarastackCsKubernetes#master_disk_encrypted}
  */
  readonly masterDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_disk_kms_key_id ApsarastackCsKubernetes#master_disk_kms_key_id}
  */
  readonly masterDiskKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_disk_size ApsarastackCsKubernetes#master_disk_size}
  */
  readonly masterDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_instance_types ApsarastackCsKubernetes#master_instance_types}
  */
  readonly masterInstanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_storage_set_id ApsarastackCsKubernetes#master_storage_set_id}
  */
  readonly masterStorageSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_storage_set_partition_number ApsarastackCsKubernetes#master_storage_set_partition_number}
  */
  readonly masterStorageSetPartitionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_system_disk_performance_level ApsarastackCsKubernetes#master_system_disk_performance_level}
  */
  readonly masterSystemDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#master_vswitch_ids ApsarastackCsKubernetes#master_vswitch_ids}
  */
  readonly masterVswitchIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#name ApsarastackCsKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#new_nat_gateway ApsarastackCsKubernetes#new_nat_gateway}
  */
  readonly newNatGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#node_cidr_mask ApsarastackCsKubernetes#node_cidr_mask}
  */
  readonly nodeCidrMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#node_port_range ApsarastackCsKubernetes#node_port_range}
  */
  readonly nodePortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#nodes ApsarastackCsKubernetes#nodes}
  */
  readonly nodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#num_of_nodes ApsarastackCsKubernetes#num_of_nodes}
  */
  readonly numOfNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#os_type ApsarastackCsKubernetes#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#password ApsarastackCsKubernetes#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#platform ApsarastackCsKubernetes#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#pod_cidr ApsarastackCsKubernetes#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#pod_vswitch_ids ApsarastackCsKubernetes#pod_vswitch_ids}
  */
  readonly podVswitchIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#proxy_mode ApsarastackCsKubernetes#proxy_mode}
  */
  readonly proxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#security_group_id ApsarastackCsKubernetes#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#service_cidr ApsarastackCsKubernetes#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#slb_internet_enabled ApsarastackCsKubernetes#slb_internet_enabled}
  */
  readonly slbInternetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#tags ApsarastackCsKubernetes#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#timeout_mins ApsarastackCsKubernetes#timeout_mins}
  */
  readonly timeoutMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#user_data ApsarastackCsKubernetes#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#version ApsarastackCsKubernetes#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#vpc_id ApsarastackCsKubernetes#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_disk_category ApsarastackCsKubernetes#worker_disk_category}
  */
  readonly workerDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_disk_encrypt_algorithm ApsarastackCsKubernetes#worker_disk_encrypt_algorithm}
  */
  readonly workerDiskEncryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_disk_encrypted ApsarastackCsKubernetes#worker_disk_encrypted}
  */
  readonly workerDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_disk_kms_key_id ApsarastackCsKubernetes#worker_disk_kms_key_id}
  */
  readonly workerDiskKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_disk_size ApsarastackCsKubernetes#worker_disk_size}
  */
  readonly workerDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_instance_types ApsarastackCsKubernetes#worker_instance_types}
  */
  readonly workerInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_storage_set_id ApsarastackCsKubernetes#worker_storage_set_id}
  */
  readonly workerStorageSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_storage_set_partition_number ApsarastackCsKubernetes#worker_storage_set_partition_number}
  */
  readonly workerStorageSetPartitionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_system_disk_performance_level ApsarastackCsKubernetes#worker_system_disk_performance_level}
  */
  readonly workerSystemDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_vswitch_ids ApsarastackCsKubernetes#worker_vswitch_ids}
  */
  readonly workerVswitchIds?: string[];
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#addons ApsarastackCsKubernetes#addons}
  */
  readonly addons?: ApsarastackCsKubernetesAddons[] | cdktf.IResolvable;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#runtime ApsarastackCsKubernetes#runtime}
  */
  readonly runtime?: ApsarastackCsKubernetesRuntime;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#timeouts ApsarastackCsKubernetes#timeouts}
  */
  readonly timeouts?: ApsarastackCsKubernetesTimeouts;
  /**
  * worker_data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#worker_data_disks ApsarastackCsKubernetes#worker_data_disks}
  */
  readonly workerDataDisks?: ApsarastackCsKubernetesWorkerDataDisks[] | cdktf.IResolvable;
}
export interface ApsarastackCsKubernetesMasterNodes {
}

export function apsarastackCsKubernetesMasterNodesToTerraform(struct?: ApsarastackCsKubernetesMasterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apsarastackCsKubernetesMasterNodesToHclTerraform(struct?: ApsarastackCsKubernetesMasterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApsarastackCsKubernetesMasterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCsKubernetesMasterNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesMasterNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
}

export class ApsarastackCsKubernetesMasterNodesList extends cdktf.ComplexList {

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
  public get(index: number): ApsarastackCsKubernetesMasterNodesOutputReference {
    return new ApsarastackCsKubernetesMasterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackCsKubernetesWorkerNodes {
}

export function apsarastackCsKubernetesWorkerNodesToTerraform(struct?: ApsarastackCsKubernetesWorkerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apsarastackCsKubernetesWorkerNodesToHclTerraform(struct?: ApsarastackCsKubernetesWorkerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApsarastackCsKubernetesWorkerNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCsKubernetesWorkerNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesWorkerNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
}

export class ApsarastackCsKubernetesWorkerNodesList extends cdktf.ComplexList {

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
  public get(index: number): ApsarastackCsKubernetesWorkerNodesOutputReference {
    return new ApsarastackCsKubernetesWorkerNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackCsKubernetesAddons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#config ApsarastackCsKubernetes#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#name ApsarastackCsKubernetes#name}
  */
  readonly name?: string;
}

export function apsarastackCsKubernetesAddonsToTerraform(struct?: ApsarastackCsKubernetesAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apsarastackCsKubernetesAddonsToHclTerraform(struct?: ApsarastackCsKubernetesAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackCsKubernetesAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCsKubernetesAddons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesAddons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class ApsarastackCsKubernetesAddonsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackCsKubernetesAddons[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackCsKubernetesAddonsOutputReference {
    return new ApsarastackCsKubernetesAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackCsKubernetesRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#name ApsarastackCsKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#version ApsarastackCsKubernetes#version}
  */
  readonly version?: string;
}

export function apsarastackCsKubernetesRuntimeToTerraform(struct?: ApsarastackCsKubernetesRuntimeOutputReference | ApsarastackCsKubernetesRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function apsarastackCsKubernetesRuntimeToHclTerraform(struct?: ApsarastackCsKubernetesRuntimeOutputReference | ApsarastackCsKubernetesRuntime): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackCsKubernetesRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApsarastackCsKubernetesRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ApsarastackCsKubernetesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#create ApsarastackCsKubernetes#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#delete ApsarastackCsKubernetes#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#update ApsarastackCsKubernetes#update}
  */
  readonly update?: string;
}

export function apsarastackCsKubernetesTimeoutsToTerraform(struct?: ApsarastackCsKubernetesTimeouts | cdktf.IResolvable): any {
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


export function apsarastackCsKubernetesTimeoutsToHclTerraform(struct?: ApsarastackCsKubernetesTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackCsKubernetesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackCsKubernetesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackCsKubernetesTimeouts | cdktf.IResolvable | undefined) {
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
export interface ApsarastackCsKubernetesWorkerDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#auto_snapshot_policy_id ApsarastackCsKubernetes#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#category ApsarastackCsKubernetes#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#encrypted ApsarastackCsKubernetes#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#kms_key_id ApsarastackCsKubernetes#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#performance_level ApsarastackCsKubernetes#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#size ApsarastackCsKubernetes#size}
  */
  readonly size?: number;
}

export function apsarastackCsKubernetesWorkerDataDisksToTerraform(struct?: ApsarastackCsKubernetesWorkerDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_snapshot_policy_id: cdktf.stringToTerraform(struct!.autoSnapshotPolicyId),
    category: cdktf.stringToTerraform(struct!.category),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function apsarastackCsKubernetesWorkerDataDisksToHclTerraform(struct?: ApsarastackCsKubernetesWorkerDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_snapshot_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.autoSnapshotPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackCsKubernetesWorkerDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackCsKubernetesWorkerDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSnapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSnapshotPolicyId = this._autoSnapshotPolicyId;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackCsKubernetesWorkerDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = undefined;
      this._category = undefined;
      this._encrypted = undefined;
      this._kmsKeyId = undefined;
      this._performanceLevel = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = value.autoSnapshotPolicyId;
      this._category = value.category;
      this._encrypted = value.encrypted;
      this._kmsKeyId = value.kmsKeyId;
      this._performanceLevel = value.performanceLevel;
      this._size = value.size;
    }
  }

  // auto_snapshot_policy_id - computed: false, optional: true, required: false
  private _autoSnapshotPolicyId?: string; 
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }
  public set autoSnapshotPolicyId(value: string) {
    this._autoSnapshotPolicyId = value;
  }
  public resetAutoSnapshotPolicyId() {
    this._autoSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotPolicyIdInput() {
    return this._autoSnapshotPolicyId;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // performance_level - computed: false, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class ApsarastackCsKubernetesWorkerDataDisksList extends cdktf.ComplexList {
  public internalValue? : ApsarastackCsKubernetesWorkerDataDisks[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackCsKubernetesWorkerDataDisksOutputReference {
    return new ApsarastackCsKubernetesWorkerDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes apsarastack_cs_kubernetes}
*/
export class ApsarastackCsKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cs_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackCsKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackCsKubernetes to import
  * @param importFromId The id of the existing ApsarastackCsKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackCsKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cs_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cs_kubernetes apsarastack_cs_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackCsKubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackCsKubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cs_kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._cloudMonitorFlags = config.cloudMonitorFlags;
    this._clusterCaCert = config.clusterCaCert;
    this._clusterType = config.clusterType;
    this._cpuPolicy = config.cpuPolicy;
    this._deleteProtection = config.deleteProtection;
    this._enableSsh = config.enableSsh;
    this._formatDisk = config.formatDisk;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instances = config.instances;
    this._isEnterpriseSecurityGroup = config.isEnterpriseSecurityGroup;
    this._keepInstanceName = config.keepInstanceName;
    this._keyName = config.keyName;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._kubeConfig = config.kubeConfig;
    this._masterCount = config.masterCount;
    this._masterDiskCategory = config.masterDiskCategory;
    this._masterDiskEncryptAlgorithm = config.masterDiskEncryptAlgorithm;
    this._masterDiskEncrypted = config.masterDiskEncrypted;
    this._masterDiskKmsKeyId = config.masterDiskKmsKeyId;
    this._masterDiskSize = config.masterDiskSize;
    this._masterInstanceTypes = config.masterInstanceTypes;
    this._masterStorageSetId = config.masterStorageSetId;
    this._masterStorageSetPartitionNumber = config.masterStorageSetPartitionNumber;
    this._masterSystemDiskPerformanceLevel = config.masterSystemDiskPerformanceLevel;
    this._masterVswitchIds = config.masterVswitchIds;
    this._name = config.name;
    this._newNatGateway = config.newNatGateway;
    this._nodeCidrMask = config.nodeCidrMask;
    this._nodePortRange = config.nodePortRange;
    this._nodes = config.nodes;
    this._numOfNodes = config.numOfNodes;
    this._osType = config.osType;
    this._password = config.password;
    this._platform = config.platform;
    this._podCidr = config.podCidr;
    this._podVswitchIds = config.podVswitchIds;
    this._proxyMode = config.proxyMode;
    this._securityGroupId = config.securityGroupId;
    this._serviceCidr = config.serviceCidr;
    this._slbInternetEnabled = config.slbInternetEnabled;
    this._tags = config.tags;
    this._timeoutMins = config.timeoutMins;
    this._userData = config.userData;
    this._version = config.version;
    this._vpcId = config.vpcId;
    this._workerDiskCategory = config.workerDiskCategory;
    this._workerDiskEncryptAlgorithm = config.workerDiskEncryptAlgorithm;
    this._workerDiskEncrypted = config.workerDiskEncrypted;
    this._workerDiskKmsKeyId = config.workerDiskKmsKeyId;
    this._workerDiskSize = config.workerDiskSize;
    this._workerInstanceTypes = config.workerInstanceTypes;
    this._workerStorageSetId = config.workerStorageSetId;
    this._workerStorageSetPartitionNumber = config.workerStorageSetPartitionNumber;
    this._workerSystemDiskPerformanceLevel = config.workerSystemDiskPerformanceLevel;
    this._workerVswitchIds = config.workerVswitchIds;
    this._addons.internalValue = config.addons;
    this._runtime.internalValue = config.runtime;
    this._timeouts.internalValue = config.timeouts;
    this._workerDataDisks.internalValue = config.workerDataDisks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
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

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // cloud_monitor_flags - computed: true, optional: true, required: false
  private _cloudMonitorFlags?: boolean | cdktf.IResolvable; 
  public get cloudMonitorFlags() {
    return this.getBooleanAttribute('cloud_monitor_flags');
  }
  public set cloudMonitorFlags(value: boolean | cdktf.IResolvable) {
    this._cloudMonitorFlags = value;
  }
  public resetCloudMonitorFlags() {
    this._cloudMonitorFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMonitorFlagsInput() {
    return this._cloudMonitorFlags;
  }

  // cluster_ca_cert - computed: false, optional: true, required: false
  private _clusterCaCert?: string; 
  public get clusterCaCert() {
    return this.getStringAttribute('cluster_ca_cert');
  }
  public set clusterCaCert(value: string) {
    this._clusterCaCert = value;
  }
  public resetClusterCaCert() {
    this._clusterCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertInput() {
    return this._clusterCaCert;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cpu_policy - computed: false, optional: true, required: false
  private _cpuPolicy?: string; 
  public get cpuPolicy() {
    return this.getStringAttribute('cpu_policy');
  }
  public set cpuPolicy(value: string) {
    this._cpuPolicy = value;
  }
  public resetCpuPolicy() {
    this._cpuPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPolicyInput() {
    return this._cpuPolicy;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // enable_ssh - computed: false, optional: true, required: false
  private _enableSsh?: boolean | cdktf.IResolvable; 
  public get enableSsh() {
    return this.getBooleanAttribute('enable_ssh');
  }
  public set enableSsh(value: boolean | cdktf.IResolvable) {
    this._enableSsh = value;
  }
  public resetEnableSsh() {
    this._enableSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSshInput() {
    return this._enableSsh;
  }

  // format_disk - computed: false, optional: true, required: false
  private _formatDisk?: boolean | cdktf.IResolvable; 
  public get formatDisk() {
    return this.getBooleanAttribute('format_disk');
  }
  public set formatDisk(value: boolean | cdktf.IResolvable) {
    this._formatDisk = value;
  }
  public resetFormatDisk() {
    this._formatDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatDiskInput() {
    return this._formatDisk;
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

  // image_id - computed: false, optional: true, required: false
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

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return cdktf.Fn.tolist(this.getListAttribute('instances'));
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // is_enterprise_security_group - computed: true, optional: true, required: false
  private _isEnterpriseSecurityGroup?: boolean | cdktf.IResolvable; 
  public get isEnterpriseSecurityGroup() {
    return this.getBooleanAttribute('is_enterprise_security_group');
  }
  public set isEnterpriseSecurityGroup(value: boolean | cdktf.IResolvable) {
    this._isEnterpriseSecurityGroup = value;
  }
  public resetIsEnterpriseSecurityGroup() {
    this._isEnterpriseSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnterpriseSecurityGroupInput() {
    return this._isEnterpriseSecurityGroup;
  }

  // keep_instance_name - computed: false, optional: true, required: false
  private _keepInstanceName?: boolean | cdktf.IResolvable; 
  public get keepInstanceName() {
    return this.getBooleanAttribute('keep_instance_name');
  }
  public set keepInstanceName(value: boolean | cdktf.IResolvable) {
    this._keepInstanceName = value;
  }
  public resetKeepInstanceName() {
    this._keepInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepInstanceNameInput() {
    return this._keepInstanceName;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // kms_encrypted_password - computed: false, optional: true, required: false
  private _kmsEncryptedPassword?: string; 
  public get kmsEncryptedPassword() {
    return this.getStringAttribute('kms_encrypted_password');
  }
  public set kmsEncryptedPassword(value: string) {
    this._kmsEncryptedPassword = value;
  }
  public resetKmsEncryptedPassword() {
    this._kmsEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedPasswordInput() {
    return this._kmsEncryptedPassword;
  }

  // kms_encryption_context - computed: false, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string }; 
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
  }

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }

  // master_count - computed: false, optional: true, required: false
  private _masterCount?: number; 
  public get masterCount() {
    return this.getNumberAttribute('master_count');
  }
  public set masterCount(value: number) {
    this._masterCount = value;
  }
  public resetMasterCount() {
    this._masterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCountInput() {
    return this._masterCount;
  }

  // master_disk_category - computed: false, optional: true, required: false
  private _masterDiskCategory?: string; 
  public get masterDiskCategory() {
    return this.getStringAttribute('master_disk_category');
  }
  public set masterDiskCategory(value: string) {
    this._masterDiskCategory = value;
  }
  public resetMasterDiskCategory() {
    this._masterDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDiskCategoryInput() {
    return this._masterDiskCategory;
  }

  // master_disk_encrypt_algorithm - computed: false, optional: true, required: false
  private _masterDiskEncryptAlgorithm?: string; 
  public get masterDiskEncryptAlgorithm() {
    return this.getStringAttribute('master_disk_encrypt_algorithm');
  }
  public set masterDiskEncryptAlgorithm(value: string) {
    this._masterDiskEncryptAlgorithm = value;
  }
  public resetMasterDiskEncryptAlgorithm() {
    this._masterDiskEncryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDiskEncryptAlgorithmInput() {
    return this._masterDiskEncryptAlgorithm;
  }

  // master_disk_encrypted - computed: false, optional: true, required: false
  private _masterDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get masterDiskEncrypted() {
    return this.getBooleanAttribute('master_disk_encrypted');
  }
  public set masterDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._masterDiskEncrypted = value;
  }
  public resetMasterDiskEncrypted() {
    this._masterDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDiskEncryptedInput() {
    return this._masterDiskEncrypted;
  }

  // master_disk_kms_key_id - computed: false, optional: true, required: false
  private _masterDiskKmsKeyId?: string; 
  public get masterDiskKmsKeyId() {
    return this.getStringAttribute('master_disk_kms_key_id');
  }
  public set masterDiskKmsKeyId(value: string) {
    this._masterDiskKmsKeyId = value;
  }
  public resetMasterDiskKmsKeyId() {
    this._masterDiskKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDiskKmsKeyIdInput() {
    return this._masterDiskKmsKeyId;
  }

  // master_disk_size - computed: false, optional: true, required: false
  private _masterDiskSize?: number; 
  public get masterDiskSize() {
    return this.getNumberAttribute('master_disk_size');
  }
  public set masterDiskSize(value: number) {
    this._masterDiskSize = value;
  }
  public resetMasterDiskSize() {
    this._masterDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDiskSizeInput() {
    return this._masterDiskSize;
  }

  // master_instance_types - computed: false, optional: false, required: true
  private _masterInstanceTypes?: string[]; 
  public get masterInstanceTypes() {
    return this.getListAttribute('master_instance_types');
  }
  public set masterInstanceTypes(value: string[]) {
    this._masterInstanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceTypesInput() {
    return this._masterInstanceTypes;
  }

  // master_nodes - computed: true, optional: false, required: false
  private _masterNodes = new ApsarastackCsKubernetesMasterNodesList(this, "master_nodes", false);
  public get masterNodes() {
    return this._masterNodes;
  }

  // master_storage_set_id - computed: true, optional: true, required: false
  private _masterStorageSetId?: string; 
  public get masterStorageSetId() {
    return this.getStringAttribute('master_storage_set_id');
  }
  public set masterStorageSetId(value: string) {
    this._masterStorageSetId = value;
  }
  public resetMasterStorageSetId() {
    this._masterStorageSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterStorageSetIdInput() {
    return this._masterStorageSetId;
  }

  // master_storage_set_partition_number - computed: true, optional: true, required: false
  private _masterStorageSetPartitionNumber?: number; 
  public get masterStorageSetPartitionNumber() {
    return this.getNumberAttribute('master_storage_set_partition_number');
  }
  public set masterStorageSetPartitionNumber(value: number) {
    this._masterStorageSetPartitionNumber = value;
  }
  public resetMasterStorageSetPartitionNumber() {
    this._masterStorageSetPartitionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterStorageSetPartitionNumberInput() {
    return this._masterStorageSetPartitionNumber;
  }

  // master_system_disk_performance_level - computed: true, optional: true, required: false
  private _masterSystemDiskPerformanceLevel?: string; 
  public get masterSystemDiskPerformanceLevel() {
    return this.getStringAttribute('master_system_disk_performance_level');
  }
  public set masterSystemDiskPerformanceLevel(value: string) {
    this._masterSystemDiskPerformanceLevel = value;
  }
  public resetMasterSystemDiskPerformanceLevel() {
    this._masterSystemDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSystemDiskPerformanceLevelInput() {
    return this._masterSystemDiskPerformanceLevel;
  }

  // master_vswitch_ids - computed: false, optional: false, required: true
  private _masterVswitchIds?: string[]; 
  public get masterVswitchIds() {
    return this.getListAttribute('master_vswitch_ids');
  }
  public set masterVswitchIds(value: string[]) {
    this._masterVswitchIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterVswitchIdsInput() {
    return this._masterVswitchIds;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // new_nat_gateway - computed: false, optional: true, required: false
  private _newNatGateway?: boolean | cdktf.IResolvable; 
  public get newNatGateway() {
    return this.getBooleanAttribute('new_nat_gateway');
  }
  public set newNatGateway(value: boolean | cdktf.IResolvable) {
    this._newNatGateway = value;
  }
  public resetNewNatGateway() {
    this._newNatGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNatGatewayInput() {
    return this._newNatGateway;
  }

  // node_cidr_mask - computed: false, optional: true, required: false
  private _nodeCidrMask?: string; 
  public get nodeCidrMask() {
    return this.getStringAttribute('node_cidr_mask');
  }
  public set nodeCidrMask(value: string) {
    this._nodeCidrMask = value;
  }
  public resetNodeCidrMask() {
    this._nodeCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCidrMaskInput() {
    return this._nodeCidrMask;
  }

  // node_port_range - computed: false, optional: true, required: false
  private _nodePortRange?: string; 
  public get nodePortRange() {
    return this.getStringAttribute('node_port_range');
  }
  public set nodePortRange(value: string) {
    this._nodePortRange = value;
  }
  public resetNodePortRange() {
    this._nodePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortRangeInput() {
    return this._nodePortRange;
  }

  // nodepool_id - computed: true, optional: false, required: false
  public get nodepoolId() {
    return this.getStringAttribute('nodepool_id');
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // num_of_nodes - computed: false, optional: false, required: true
  private _numOfNodes?: number; 
  public get numOfNodes() {
    return this.getNumberAttribute('num_of_nodes');
  }
  public set numOfNodes(value: number) {
    this._numOfNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfNodesInput() {
    return this._numOfNodes;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
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

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // pod_cidr - computed: false, optional: true, required: false
  private _podCidr?: string; 
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }
  public set podCidr(value: string) {
    this._podCidr = value;
  }
  public resetPodCidr() {
    this._podCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrInput() {
    return this._podCidr;
  }

  // pod_vswitch_ids - computed: false, optional: true, required: false
  private _podVswitchIds?: string[]; 
  public get podVswitchIds() {
    return cdktf.Fn.tolist(this.getListAttribute('pod_vswitch_ids'));
  }
  public set podVswitchIds(value: string[]) {
    this._podVswitchIds = value;
  }
  public resetPodVswitchIds() {
    this._podVswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podVswitchIdsInput() {
    return this._podVswitchIds;
  }

  // proxy_mode - computed: false, optional: true, required: false
  private _proxyMode?: string; 
  public get proxyMode() {
    return this.getStringAttribute('proxy_mode');
  }
  public set proxyMode(value: string) {
    this._proxyMode = value;
  }
  public resetProxyMode() {
    this._proxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyModeInput() {
    return this._proxyMode;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // service_cidr - computed: false, optional: true, required: false
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  public resetServiceCidr() {
    this._serviceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // slb_internet_enabled - computed: false, optional: true, required: false
  private _slbInternetEnabled?: boolean | cdktf.IResolvable; 
  public get slbInternetEnabled() {
    return this.getBooleanAttribute('slb_internet_enabled');
  }
  public set slbInternetEnabled(value: boolean | cdktf.IResolvable) {
    this._slbInternetEnabled = value;
  }
  public resetSlbInternetEnabled() {
    this._slbInternetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbInternetEnabledInput() {
    return this._slbInternetEnabled;
  }

  // slb_intranet - computed: true, optional: false, required: false
  public get slbIntranet() {
    return this.getStringAttribute('slb_intranet');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout_mins - computed: false, optional: true, required: false
  private _timeoutMins?: number; 
  public get timeoutMins() {
    return this.getNumberAttribute('timeout_mins');
  }
  public set timeoutMins(value: number) {
    this._timeoutMins = value;
  }
  public resetTimeoutMins() {
    this._timeoutMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinsInput() {
    return this._timeoutMins;
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // worker_disk_category - computed: false, optional: true, required: false
  private _workerDiskCategory?: string; 
  public get workerDiskCategory() {
    return this.getStringAttribute('worker_disk_category');
  }
  public set workerDiskCategory(value: string) {
    this._workerDiskCategory = value;
  }
  public resetWorkerDiskCategory() {
    this._workerDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskCategoryInput() {
    return this._workerDiskCategory;
  }

  // worker_disk_encrypt_algorithm - computed: false, optional: true, required: false
  private _workerDiskEncryptAlgorithm?: string; 
  public get workerDiskEncryptAlgorithm() {
    return this.getStringAttribute('worker_disk_encrypt_algorithm');
  }
  public set workerDiskEncryptAlgorithm(value: string) {
    this._workerDiskEncryptAlgorithm = value;
  }
  public resetWorkerDiskEncryptAlgorithm() {
    this._workerDiskEncryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskEncryptAlgorithmInput() {
    return this._workerDiskEncryptAlgorithm;
  }

  // worker_disk_encrypted - computed: false, optional: true, required: false
  private _workerDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get workerDiskEncrypted() {
    return this.getBooleanAttribute('worker_disk_encrypted');
  }
  public set workerDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._workerDiskEncrypted = value;
  }
  public resetWorkerDiskEncrypted() {
    this._workerDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskEncryptedInput() {
    return this._workerDiskEncrypted;
  }

  // worker_disk_kms_key_id - computed: false, optional: true, required: false
  private _workerDiskKmsKeyId?: string; 
  public get workerDiskKmsKeyId() {
    return this.getStringAttribute('worker_disk_kms_key_id');
  }
  public set workerDiskKmsKeyId(value: string) {
    this._workerDiskKmsKeyId = value;
  }
  public resetWorkerDiskKmsKeyId() {
    this._workerDiskKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskKmsKeyIdInput() {
    return this._workerDiskKmsKeyId;
  }

  // worker_disk_size - computed: false, optional: true, required: false
  private _workerDiskSize?: number; 
  public get workerDiskSize() {
    return this.getNumberAttribute('worker_disk_size');
  }
  public set workerDiskSize(value: number) {
    this._workerDiskSize = value;
  }
  public resetWorkerDiskSize() {
    this._workerDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskSizeInput() {
    return this._workerDiskSize;
  }

  // worker_instance_types - computed: false, optional: true, required: false
  private _workerInstanceTypes?: string[]; 
  public get workerInstanceTypes() {
    return this.getListAttribute('worker_instance_types');
  }
  public set workerInstanceTypes(value: string[]) {
    this._workerInstanceTypes = value;
  }
  public resetWorkerInstanceTypes() {
    this._workerInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInstanceTypesInput() {
    return this._workerInstanceTypes;
  }

  // worker_nodes - computed: true, optional: false, required: false
  private _workerNodes = new ApsarastackCsKubernetesWorkerNodesList(this, "worker_nodes", false);
  public get workerNodes() {
    return this._workerNodes;
  }

  // worker_ram_role_name - computed: true, optional: false, required: false
  public get workerRamRoleName() {
    return this.getStringAttribute('worker_ram_role_name');
  }

  // worker_storage_set_id - computed: true, optional: true, required: false
  private _workerStorageSetId?: string; 
  public get workerStorageSetId() {
    return this.getStringAttribute('worker_storage_set_id');
  }
  public set workerStorageSetId(value: string) {
    this._workerStorageSetId = value;
  }
  public resetWorkerStorageSetId() {
    this._workerStorageSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerStorageSetIdInput() {
    return this._workerStorageSetId;
  }

  // worker_storage_set_partition_number - computed: true, optional: true, required: false
  private _workerStorageSetPartitionNumber?: number; 
  public get workerStorageSetPartitionNumber() {
    return this.getNumberAttribute('worker_storage_set_partition_number');
  }
  public set workerStorageSetPartitionNumber(value: number) {
    this._workerStorageSetPartitionNumber = value;
  }
  public resetWorkerStorageSetPartitionNumber() {
    this._workerStorageSetPartitionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerStorageSetPartitionNumberInput() {
    return this._workerStorageSetPartitionNumber;
  }

  // worker_system_disk_performance_level - computed: true, optional: true, required: false
  private _workerSystemDiskPerformanceLevel?: string; 
  public get workerSystemDiskPerformanceLevel() {
    return this.getStringAttribute('worker_system_disk_performance_level');
  }
  public set workerSystemDiskPerformanceLevel(value: string) {
    this._workerSystemDiskPerformanceLevel = value;
  }
  public resetWorkerSystemDiskPerformanceLevel() {
    this._workerSystemDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerSystemDiskPerformanceLevelInput() {
    return this._workerSystemDiskPerformanceLevel;
  }

  // worker_vswitch_ids - computed: false, optional: true, required: false
  private _workerVswitchIds?: string[]; 
  public get workerVswitchIds() {
    return this.getListAttribute('worker_vswitch_ids');
  }
  public set workerVswitchIds(value: string[]) {
    this._workerVswitchIds = value;
  }
  public resetWorkerVswitchIds() {
    this._workerVswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerVswitchIdsInput() {
    return this._workerVswitchIds;
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new ApsarastackCsKubernetesAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: ApsarastackCsKubernetesAddons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new ApsarastackCsKubernetesRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: ApsarastackCsKubernetesRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackCsKubernetesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackCsKubernetesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // worker_data_disks - computed: false, optional: true, required: false
  private _workerDataDisks = new ApsarastackCsKubernetesWorkerDataDisksList(this, "worker_data_disks", false);
  public get workerDataDisks() {
    return this._workerDataDisks;
  }
  public putWorkerDataDisks(value: ApsarastackCsKubernetesWorkerDataDisks[] | cdktf.IResolvable) {
    this._workerDataDisks.internalValue = value;
  }
  public resetWorkerDataDisks() {
    this._workerDataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDataDisksInput() {
    return this._workerDataDisks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cloud_monitor_flags: cdktf.booleanToTerraform(this._cloudMonitorFlags),
      cluster_ca_cert: cdktf.stringToTerraform(this._clusterCaCert),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cpu_policy: cdktf.stringToTerraform(this._cpuPolicy),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      enable_ssh: cdktf.booleanToTerraform(this._enableSsh),
      format_disk: cdktf.booleanToTerraform(this._formatDisk),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instances),
      is_enterprise_security_group: cdktf.booleanToTerraform(this._isEnterpriseSecurityGroup),
      keep_instance_name: cdktf.booleanToTerraform(this._keepInstanceName),
      key_name: cdktf.stringToTerraform(this._keyName),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      kube_config: cdktf.stringToTerraform(this._kubeConfig),
      master_count: cdktf.numberToTerraform(this._masterCount),
      master_disk_category: cdktf.stringToTerraform(this._masterDiskCategory),
      master_disk_encrypt_algorithm: cdktf.stringToTerraform(this._masterDiskEncryptAlgorithm),
      master_disk_encrypted: cdktf.booleanToTerraform(this._masterDiskEncrypted),
      master_disk_kms_key_id: cdktf.stringToTerraform(this._masterDiskKmsKeyId),
      master_disk_size: cdktf.numberToTerraform(this._masterDiskSize),
      master_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masterInstanceTypes),
      master_storage_set_id: cdktf.stringToTerraform(this._masterStorageSetId),
      master_storage_set_partition_number: cdktf.numberToTerraform(this._masterStorageSetPartitionNumber),
      master_system_disk_performance_level: cdktf.stringToTerraform(this._masterSystemDiskPerformanceLevel),
      master_vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masterVswitchIds),
      name: cdktf.stringToTerraform(this._name),
      new_nat_gateway: cdktf.booleanToTerraform(this._newNatGateway),
      node_cidr_mask: cdktf.stringToTerraform(this._nodeCidrMask),
      node_port_range: cdktf.stringToTerraform(this._nodePortRange),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      num_of_nodes: cdktf.numberToTerraform(this._numOfNodes),
      os_type: cdktf.stringToTerraform(this._osType),
      password: cdktf.stringToTerraform(this._password),
      platform: cdktf.stringToTerraform(this._platform),
      pod_cidr: cdktf.stringToTerraform(this._podCidr),
      pod_vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._podVswitchIds),
      proxy_mode: cdktf.stringToTerraform(this._proxyMode),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      slb_internet_enabled: cdktf.booleanToTerraform(this._slbInternetEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout_mins: cdktf.numberToTerraform(this._timeoutMins),
      user_data: cdktf.stringToTerraform(this._userData),
      version: cdktf.stringToTerraform(this._version),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      worker_disk_category: cdktf.stringToTerraform(this._workerDiskCategory),
      worker_disk_encrypt_algorithm: cdktf.stringToTerraform(this._workerDiskEncryptAlgorithm),
      worker_disk_encrypted: cdktf.booleanToTerraform(this._workerDiskEncrypted),
      worker_disk_kms_key_id: cdktf.stringToTerraform(this._workerDiskKmsKeyId),
      worker_disk_size: cdktf.numberToTerraform(this._workerDiskSize),
      worker_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerInstanceTypes),
      worker_storage_set_id: cdktf.stringToTerraform(this._workerStorageSetId),
      worker_storage_set_partition_number: cdktf.numberToTerraform(this._workerStorageSetPartitionNumber),
      worker_system_disk_performance_level: cdktf.stringToTerraform(this._workerSystemDiskPerformanceLevel),
      worker_vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerVswitchIds),
      addons: cdktf.listMapper(apsarastackCsKubernetesAddonsToTerraform, true)(this._addons.internalValue),
      runtime: apsarastackCsKubernetesRuntimeToTerraform(this._runtime.internalValue),
      timeouts: apsarastackCsKubernetesTimeoutsToTerraform(this._timeouts.internalValue),
      worker_data_disks: cdktf.listMapper(apsarastackCsKubernetesWorkerDataDisksToTerraform, true)(this._workerDataDisks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_monitor_flags: {
        value: cdktf.booleanToHclTerraform(this._cloudMonitorFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_ca_cert: {
        value: cdktf.stringToHclTerraform(this._clusterCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_policy: {
        value: cdktf.stringToHclTerraform(this._cpuPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ssh: {
        value: cdktf.booleanToHclTerraform(this._enableSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      format_disk: {
        value: cdktf.booleanToHclTerraform(this._formatDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instances),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_enterprise_security_group: {
        value: cdktf.booleanToHclTerraform(this._isEnterpriseSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_instance_name: {
        value: cdktf.booleanToHclTerraform(this._keepInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kube_config: {
        value: cdktf.stringToHclTerraform(this._kubeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_count: {
        value: cdktf.numberToHclTerraform(this._masterCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_disk_category: {
        value: cdktf.stringToHclTerraform(this._masterDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_disk_encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._masterDiskEncryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_disk_encrypted: {
        value: cdktf.booleanToHclTerraform(this._masterDiskEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_disk_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._masterDiskKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_disk_size: {
        value: cdktf.numberToHclTerraform(this._masterDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._masterInstanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      master_storage_set_id: {
        value: cdktf.stringToHclTerraform(this._masterStorageSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_storage_set_partition_number: {
        value: cdktf.numberToHclTerraform(this._masterStorageSetPartitionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_system_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._masterSystemDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._masterVswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_nat_gateway: {
        value: cdktf.booleanToHclTerraform(this._newNatGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_cidr_mask: {
        value: cdktf.stringToHclTerraform(this._nodeCidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_port_range: {
        value: cdktf.stringToHclTerraform(this._nodePortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      num_of_nodes: {
        value: cdktf.numberToHclTerraform(this._numOfNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
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
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_cidr: {
        value: cdktf.stringToHclTerraform(this._podCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._podVswitchIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      proxy_mode: {
        value: cdktf.stringToHclTerraform(this._proxyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slb_internet_enabled: {
        value: cdktf.booleanToHclTerraform(this._slbInternetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout_mins: {
        value: cdktf.numberToHclTerraform(this._timeoutMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_disk_category: {
        value: cdktf.stringToHclTerraform(this._workerDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_disk_encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._workerDiskEncryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_disk_encrypted: {
        value: cdktf.booleanToHclTerraform(this._workerDiskEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      worker_disk_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._workerDiskKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_disk_size: {
        value: cdktf.numberToHclTerraform(this._workerDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerInstanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      worker_storage_set_id: {
        value: cdktf.stringToHclTerraform(this._workerStorageSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_storage_set_partition_number: {
        value: cdktf.numberToHclTerraform(this._workerStorageSetPartitionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_system_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._workerSystemDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerVswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      addons: {
        value: cdktf.listMapperHcl(apsarastackCsKubernetesAddonsToHclTerraform, true)(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackCsKubernetesAddonsList",
      },
      runtime: {
        value: apsarastackCsKubernetesRuntimeToHclTerraform(this._runtime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackCsKubernetesRuntimeList",
      },
      timeouts: {
        value: apsarastackCsKubernetesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackCsKubernetesTimeouts",
      },
      worker_data_disks: {
        value: cdktf.listMapperHcl(apsarastackCsKubernetesWorkerDataDisksToHclTerraform, true)(this._workerDataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackCsKubernetesWorkerDataDisksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
