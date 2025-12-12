// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEdasK8SApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#application_descriotion ApsarastackEdasK8SApplication#application_descriotion}
  */
  readonly applicationDescriotion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#application_description ApsarastackEdasK8SApplication#application_description}
  */
  readonly applicationDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#application_name ApsarastackEdasK8SApplication#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#cluster_id ApsarastackEdasK8SApplication#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#command ApsarastackEdasK8SApplication#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#command_args ApsarastackEdasK8SApplication#command_args}
  */
  readonly commandArgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#cr_ee_repo_id ApsarastackEdasK8SApplication#cr_ee_repo_id}
  */
  readonly crEeRepoId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#edas_container_version ApsarastackEdasK8SApplication#edas_container_version}
  */
  readonly edasContainerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#envs ApsarastackEdasK8SApplication#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#id ApsarastackEdasK8SApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#image_url ApsarastackEdasK8SApplication#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#internet_external_traffic_policy ApsarastackEdasK8SApplication#internet_external_traffic_policy}
  */
  readonly internetExternalTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#internet_scheduler ApsarastackEdasK8SApplication#internet_scheduler}
  */
  readonly internetScheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#internet_slb_id ApsarastackEdasK8SApplication#internet_slb_id}
  */
  readonly internetSlbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#internet_slb_port ApsarastackEdasK8SApplication#internet_slb_port}
  */
  readonly internetSlbPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#internet_slb_protocol ApsarastackEdasK8SApplication#internet_slb_protocol}
  */
  readonly internetSlbProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#internet_target_port ApsarastackEdasK8SApplication#internet_target_port}
  */
  readonly internetTargetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#intranet_external_traffic_policy ApsarastackEdasK8SApplication#intranet_external_traffic_policy}
  */
  readonly intranetExternalTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#intranet_scheduler ApsarastackEdasK8SApplication#intranet_scheduler}
  */
  readonly intranetScheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#intranet_slb_id ApsarastackEdasK8SApplication#intranet_slb_id}
  */
  readonly intranetSlbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#intranet_slb_port ApsarastackEdasK8SApplication#intranet_slb_port}
  */
  readonly intranetSlbPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#intranet_slb_protocol ApsarastackEdasK8SApplication#intranet_slb_protocol}
  */
  readonly intranetSlbProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#intranet_target_port ApsarastackEdasK8SApplication#intranet_target_port}
  */
  readonly intranetTargetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#jdk ApsarastackEdasK8SApplication#jdk}
  */
  readonly jdk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#limit_m_cpu ApsarastackEdasK8SApplication#limit_m_cpu}
  */
  readonly limitMCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#limit_mem ApsarastackEdasK8SApplication#limit_mem}
  */
  readonly limitMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#liveness ApsarastackEdasK8SApplication#liveness}
  */
  readonly liveness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#logical_region_id ApsarastackEdasK8SApplication#logical_region_id}
  */
  readonly logicalRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#mount_descs ApsarastackEdasK8SApplication#mount_descs}
  */
  readonly mountDescs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#namespace ApsarastackEdasK8SApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#nas_id ApsarastackEdasK8SApplication#nas_id}
  */
  readonly nasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#package_type ApsarastackEdasK8SApplication#package_type}
  */
  readonly packageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#package_url ApsarastackEdasK8SApplication#package_url}
  */
  readonly packageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#package_version ApsarastackEdasK8SApplication#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#post_start ApsarastackEdasK8SApplication#post_start}
  */
  readonly postStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#pre_stop ApsarastackEdasK8SApplication#pre_stop}
  */
  readonly preStop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#readiness ApsarastackEdasK8SApplication#readiness}
  */
  readonly readiness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#replicas ApsarastackEdasK8SApplication#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#requests_m_cpu ApsarastackEdasK8SApplication#requests_m_cpu}
  */
  readonly requestsMCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#requests_mem ApsarastackEdasK8SApplication#requests_mem}
  */
  readonly requestsMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#update_batch ApsarastackEdasK8SApplication#update_batch}
  */
  readonly updateBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#update_batch_wait_time ApsarastackEdasK8SApplication#update_batch_wait_time}
  */
  readonly updateBatchWaitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#update_gray ApsarastackEdasK8SApplication#update_gray}
  */
  readonly updateGray?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#update_release_type ApsarastackEdasK8SApplication#update_release_type}
  */
  readonly updateReleaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#update_type ApsarastackEdasK8SApplication#update_type}
  */
  readonly updateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#web_container ApsarastackEdasK8SApplication#web_container}
  */
  readonly webContainer?: string;
  /**
  * config_mount_descs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#config_mount_descs ApsarastackEdasK8SApplication#config_mount_descs}
  */
  readonly configMountDescs?: ApsarastackEdasK8SApplicationConfigMountDescs[] | cdktf.IResolvable;
  /**
  * custom_node_affinity_preferred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#custom_node_affinity_preferred ApsarastackEdasK8SApplication#custom_node_affinity_preferred}
  */
  readonly customNodeAffinityPreferred?: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferred[] | cdktf.IResolvable;
  /**
  * custom_node_affinity_require block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#custom_node_affinity_require ApsarastackEdasK8SApplication#custom_node_affinity_require}
  */
  readonly customNodeAffinityRequire?: ApsarastackEdasK8SApplicationCustomNodeAffinityRequire[] | cdktf.IResolvable;
  /**
  * custom_pod_affinity_preferred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#custom_pod_affinity_preferred ApsarastackEdasK8SApplication#custom_pod_affinity_preferred}
  */
  readonly customPodAffinityPreferred?: ApsarastackEdasK8SApplicationCustomPodAffinityPreferred[] | cdktf.IResolvable;
  /**
  * custom_pod_affinity_require block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#custom_pod_affinity_require ApsarastackEdasK8SApplication#custom_pod_affinity_require}
  */
  readonly customPodAffinityRequire?: ApsarastackEdasK8SApplicationCustomPodAffinityRequire[] | cdktf.IResolvable;
  /**
  * custom_pod_ant_affinity_preferred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#custom_pod_ant_affinity_preferred ApsarastackEdasK8SApplication#custom_pod_ant_affinity_preferred}
  */
  readonly customPodAntAffinityPreferred?: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferred[] | cdktf.IResolvable;
  /**
  * custom_pod_ant_affinity_require block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#custom_pod_ant_affinity_require ApsarastackEdasK8SApplication#custom_pod_ant_affinity_require}
  */
  readonly customPodAntAffinityRequire?: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequire[] | cdktf.IResolvable;
  /**
  * custom_tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#custom_tolerations ApsarastackEdasK8SApplication#custom_tolerations}
  */
  readonly customTolerations?: ApsarastackEdasK8SApplicationCustomTolerations[] | cdktf.IResolvable;
  /**
  * host_aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#host_aliases ApsarastackEdasK8SApplication#host_aliases}
  */
  readonly hostAliases?: ApsarastackEdasK8SApplicationHostAliases[] | cdktf.IResolvable;
  /**
  * internet_service_port_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#internet_service_port_infos ApsarastackEdasK8SApplication#internet_service_port_infos}
  */
  readonly internetServicePortInfos?: ApsarastackEdasK8SApplicationInternetServicePortInfos[] | cdktf.IResolvable;
  /**
  * intranet_service_port_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#intranet_service_port_infos ApsarastackEdasK8SApplication#intranet_service_port_infos}
  */
  readonly intranetServicePortInfos?: ApsarastackEdasK8SApplicationIntranetServicePortInfos[] | cdktf.IResolvable;
  /**
  * local_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#local_volume ApsarastackEdasK8SApplication#local_volume}
  */
  readonly localVolume?: ApsarastackEdasK8SApplicationLocalVolume[] | cdktf.IResolvable;
  /**
  * pvc_mount_descs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#pvc_mount_descs ApsarastackEdasK8SApplication#pvc_mount_descs}
  */
  readonly pvcMountDescs?: ApsarastackEdasK8SApplicationPvcMountDescs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#timeouts ApsarastackEdasK8SApplication#timeouts}
  */
  readonly timeouts?: ApsarastackEdasK8SApplicationTimeouts;
}
export interface ApsarastackEdasK8SApplicationConfigMountDescs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#mount_path ApsarastackEdasK8SApplication#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#name ApsarastackEdasK8SApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#type ApsarastackEdasK8SApplication#type}
  */
  readonly type: string;
}

export function apsarastackEdasK8SApplicationConfigMountDescsToTerraform(struct?: ApsarastackEdasK8SApplicationConfigMountDescs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apsarastackEdasK8SApplicationConfigMountDescsToHclTerraform(struct?: ApsarastackEdasK8SApplicationConfigMountDescs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationConfigMountDescsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationConfigMountDescs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationConfigMountDescs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApsarastackEdasK8SApplicationConfigMountDescsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationConfigMountDescs[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationConfigMountDescsOutputReference {
    return new ApsarastackEdasK8SApplicationConfigMountDescsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#key ApsarastackEdasK8SApplication#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#operator ApsarastackEdasK8SApplication#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#values ApsarastackEdasK8SApplication#values}
  */
  readonly values?: string[];
}

export function apsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsToTerraform(struct?: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsOutputReference {
    return new ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomNodeAffinityPreferred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#weight ApsarastackEdasK8SApplication#weight}
  */
  readonly weight?: number;
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#match_expressions ApsarastackEdasK8SApplication#match_expressions}
  */
  readonly matchExpressions: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressions[] | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationCustomNodeAffinityPreferredToTerraform(struct?: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    match_expressions: cdktf.listMapper(apsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function apsarastackEdasK8SApplicationCustomNodeAffinityPreferredToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomNodeAffinityPreferred | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferred | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // match_expressions - computed: false, optional: false, required: true
  private _matchExpressions = new ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomNodeAffinityPreferred[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredOutputReference {
    return new ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#key ApsarastackEdasK8SApplication#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#operator ApsarastackEdasK8SApplication#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#values ApsarastackEdasK8SApplication#values}
  */
  readonly values?: string[];
}

export function apsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsToTerraform(struct?: ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsOutputReference {
    return new ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomNodeAffinityRequire {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#match_expressions ApsarastackEdasK8SApplication#match_expressions}
  */
  readonly matchExpressions: ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressions[] | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationCustomNodeAffinityRequireToTerraform(struct?: ApsarastackEdasK8SApplicationCustomNodeAffinityRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(apsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function apsarastackEdasK8SApplicationCustomNodeAffinityRequireToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomNodeAffinityRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomNodeAffinityRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomNodeAffinityRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomNodeAffinityRequire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: false, required: true
  private _matchExpressions = new ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApsarastackEdasK8SApplicationCustomNodeAffinityRequireMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class ApsarastackEdasK8SApplicationCustomNodeAffinityRequireList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomNodeAffinityRequire[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomNodeAffinityRequireOutputReference {
    return new ApsarastackEdasK8SApplicationCustomNodeAffinityRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#key ApsarastackEdasK8SApplication#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#operator ApsarastackEdasK8SApplication#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#values ApsarastackEdasK8SApplication#values}
  */
  readonly values?: string[];
}

export function apsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsToTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsOutputReference {
    return new ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomPodAffinityPreferred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#k8s_namespace ApsarastackEdasK8SApplication#k8s_namespace}
  */
  readonly k8SNamespace?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#topology_key ApsarastackEdasK8SApplication#topology_key}
  */
  readonly topologyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#weight ApsarastackEdasK8SApplication#weight}
  */
  readonly weight?: number;
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#match_expressions ApsarastackEdasK8SApplication#match_expressions}
  */
  readonly matchExpressions?: ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressions[] | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationCustomPodAffinityPreferredToTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAffinityPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_namespace: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.k8SNamespace),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    weight: cdktf.numberToTerraform(struct!.weight),
    match_expressions: cdktf.listMapper(apsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function apsarastackEdasK8SApplicationCustomPodAffinityPreferredToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAffinityPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_namespace: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.k8SNamespace),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomPodAffinityPreferredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomPodAffinityPreferred | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SNamespace = this._k8SNamespace;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomPodAffinityPreferred | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SNamespace = undefined;
      this._topologyKey = undefined;
      this._weight = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SNamespace = value.k8SNamespace;
      this._topologyKey = value.topologyKey;
      this._weight = value.weight;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string[]; 
  public get k8SNamespace() {
    return this.getListAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string[]) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApsarastackEdasK8SApplicationCustomPodAffinityPreferredMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class ApsarastackEdasK8SApplicationCustomPodAffinityPreferredList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomPodAffinityPreferred[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomPodAffinityPreferredOutputReference {
    return new ApsarastackEdasK8SApplicationCustomPodAffinityPreferredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#key ApsarastackEdasK8SApplication#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#operator ApsarastackEdasK8SApplication#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#values ApsarastackEdasK8SApplication#values}
  */
  readonly values?: string[];
}

export function apsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsToTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsOutputReference {
    return new ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomPodAffinityRequire {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#k8s_namespace ApsarastackEdasK8SApplication#k8s_namespace}
  */
  readonly k8SNamespace?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#topology_key ApsarastackEdasK8SApplication#topology_key}
  */
  readonly topologyKey: string;
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#match_expressions ApsarastackEdasK8SApplication#match_expressions}
  */
  readonly matchExpressions?: ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressions[] | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationCustomPodAffinityRequireToTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAffinityRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_namespace: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.k8SNamespace),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    match_expressions: cdktf.listMapper(apsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function apsarastackEdasK8SApplicationCustomPodAffinityRequireToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAffinityRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_namespace: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.k8SNamespace),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomPodAffinityRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomPodAffinityRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SNamespace = this._k8SNamespace;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomPodAffinityRequire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SNamespace = undefined;
      this._topologyKey = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SNamespace = value.k8SNamespace;
      this._topologyKey = value.topologyKey;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string[]; 
  public get k8SNamespace() {
    return this.getListAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string[]) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApsarastackEdasK8SApplicationCustomPodAffinityRequireMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class ApsarastackEdasK8SApplicationCustomPodAffinityRequireList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomPodAffinityRequire[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomPodAffinityRequireOutputReference {
    return new ApsarastackEdasK8SApplicationCustomPodAffinityRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#key ApsarastackEdasK8SApplication#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#operator ApsarastackEdasK8SApplication#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#values ApsarastackEdasK8SApplication#values}
  */
  readonly values?: string[];
}

export function apsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsToTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsOutputReference {
    return new ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#k8s_namespace ApsarastackEdasK8SApplication#k8s_namespace}
  */
  readonly k8SNamespace?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#topology_key ApsarastackEdasK8SApplication#topology_key}
  */
  readonly topologyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#weight ApsarastackEdasK8SApplication#weight}
  */
  readonly weight?: number;
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#match_expressions ApsarastackEdasK8SApplication#match_expressions}
  */
  readonly matchExpressions?: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressions[] | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationCustomPodAntAffinityPreferredToTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_namespace: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.k8SNamespace),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    weight: cdktf.numberToTerraform(struct!.weight),
    match_expressions: cdktf.listMapper(apsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function apsarastackEdasK8SApplicationCustomPodAntAffinityPreferredToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_namespace: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.k8SNamespace),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferred | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SNamespace = this._k8SNamespace;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferred | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SNamespace = undefined;
      this._topologyKey = undefined;
      this._weight = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SNamespace = value.k8SNamespace;
      this._topologyKey = value.topologyKey;
      this._weight = value.weight;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string[]; 
  public get k8SNamespace() {
    return this.getListAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string[]) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferred[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredOutputReference {
    return new ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#key ApsarastackEdasK8SApplication#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#operator ApsarastackEdasK8SApplication#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#values ApsarastackEdasK8SApplication#values}
  */
  readonly values?: string[];
}

export function apsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsToTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsOutputReference {
    return new ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomPodAntAffinityRequire {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#k8s_namespace ApsarastackEdasK8SApplication#k8s_namespace}
  */
  readonly k8SNamespace?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#topology_key ApsarastackEdasK8SApplication#topology_key}
  */
  readonly topologyKey: string;
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#match_expressions ApsarastackEdasK8SApplication#match_expressions}
  */
  readonly matchExpressions?: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressions[] | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationCustomPodAntAffinityRequireToTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_namespace: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.k8SNamespace),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    match_expressions: cdktf.listMapper(apsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function apsarastackEdasK8SApplicationCustomPodAntAffinityRequireToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_namespace: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.k8SNamespace),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomPodAntAffinityRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SNamespace = this._k8SNamespace;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SNamespace = undefined;
      this._topologyKey = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SNamespace = value.k8SNamespace;
      this._topologyKey = value.topologyKey;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string[]; 
  public get k8SNamespace() {
    return this.getListAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string[]) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomPodAntAffinityRequire[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireOutputReference {
    return new ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationCustomTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#effect ApsarastackEdasK8SApplication#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#key ApsarastackEdasK8SApplication#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#operator ApsarastackEdasK8SApplication#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#toleration_seconds ApsarastackEdasK8SApplication#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#value ApsarastackEdasK8SApplication#value}
  */
  readonly value?: string;
}

export function apsarastackEdasK8SApplicationCustomTolerationsToTerraform(struct?: ApsarastackEdasK8SApplicationCustomTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackEdasK8SApplicationCustomTolerationsToHclTerraform(struct?: ApsarastackEdasK8SApplicationCustomTolerations | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ApsarastackEdasK8SApplicationCustomTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationCustomTolerations | cdktf.IResolvable | undefined {
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
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationCustomTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
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
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: true, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: true, optional: true, required: false
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

export class ApsarastackEdasK8SApplicationCustomTolerationsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationCustomTolerations[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationCustomTolerationsOutputReference {
    return new ApsarastackEdasK8SApplicationCustomTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationHostAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#hostnames ApsarastackEdasK8SApplication#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#ip ApsarastackEdasK8SApplication#ip}
  */
  readonly ip?: string;
}

export function apsarastackEdasK8SApplicationHostAliasesToTerraform(struct?: ApsarastackEdasK8SApplicationHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function apsarastackEdasK8SApplicationHostAliasesToHclTerraform(struct?: ApsarastackEdasK8SApplicationHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class ApsarastackEdasK8SApplicationHostAliasesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationHostAliases[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationHostAliasesOutputReference {
    return new ApsarastackEdasK8SApplicationHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationInternetServicePortInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#port ApsarastackEdasK8SApplication#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#protocol ApsarastackEdasK8SApplication#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#target_port ApsarastackEdasK8SApplication#target_port}
  */
  readonly targetPort: number;
}

export function apsarastackEdasK8SApplicationInternetServicePortInfosToTerraform(struct?: ApsarastackEdasK8SApplicationInternetServicePortInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function apsarastackEdasK8SApplicationInternetServicePortInfosToHclTerraform(struct?: ApsarastackEdasK8SApplicationInternetServicePortInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationInternetServicePortInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationInternetServicePortInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationInternetServicePortInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class ApsarastackEdasK8SApplicationInternetServicePortInfosList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationInternetServicePortInfos[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationInternetServicePortInfosOutputReference {
    return new ApsarastackEdasK8SApplicationInternetServicePortInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationIntranetServicePortInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#port ApsarastackEdasK8SApplication#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#protocol ApsarastackEdasK8SApplication#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#target_port ApsarastackEdasK8SApplication#target_port}
  */
  readonly targetPort: number;
}

export function apsarastackEdasK8SApplicationIntranetServicePortInfosToTerraform(struct?: ApsarastackEdasK8SApplicationIntranetServicePortInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function apsarastackEdasK8SApplicationIntranetServicePortInfosToHclTerraform(struct?: ApsarastackEdasK8SApplicationIntranetServicePortInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationIntranetServicePortInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationIntranetServicePortInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationIntranetServicePortInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class ApsarastackEdasK8SApplicationIntranetServicePortInfosList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationIntranetServicePortInfos[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationIntranetServicePortInfosOutputReference {
    return new ApsarastackEdasK8SApplicationIntranetServicePortInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationLocalVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#mount_path ApsarastackEdasK8SApplication#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#node_path ApsarastackEdasK8SApplication#node_path}
  */
  readonly nodePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#type ApsarastackEdasK8SApplication#type}
  */
  readonly type: string;
}

export function apsarastackEdasK8SApplicationLocalVolumeToTerraform(struct?: ApsarastackEdasK8SApplicationLocalVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    node_path: cdktf.stringToTerraform(struct!.nodePath),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apsarastackEdasK8SApplicationLocalVolumeToHclTerraform(struct?: ApsarastackEdasK8SApplicationLocalVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_path: {
      value: cdktf.stringToHclTerraform(struct!.nodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationLocalVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationLocalVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._nodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePath = this._nodePath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationLocalVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._nodePath = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._nodePath = value.nodePath;
      this._type = value.type;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // node_path - computed: false, optional: false, required: true
  private _nodePath?: string; 
  public get nodePath() {
    return this.getStringAttribute('node_path');
  }
  public set nodePath(value: string) {
    this._nodePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePathInput() {
    return this._nodePath;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApsarastackEdasK8SApplicationLocalVolumeList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationLocalVolume[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationLocalVolumeOutputReference {
    return new ApsarastackEdasK8SApplicationLocalVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationPvcMountDescsMountPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#mount_path ApsarastackEdasK8SApplication#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#read_only ApsarastackEdasK8SApplication#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationPvcMountDescsMountPathsToTerraform(struct?: ApsarastackEdasK8SApplicationPvcMountDescsMountPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function apsarastackEdasK8SApplicationPvcMountDescsMountPathsToHclTerraform(struct?: ApsarastackEdasK8SApplicationPvcMountDescsMountPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationPvcMountDescsMountPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationPvcMountDescsMountPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationPvcMountDescsMountPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._readOnly = value.readOnly;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class ApsarastackEdasK8SApplicationPvcMountDescsMountPathsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationPvcMountDescsMountPaths[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationPvcMountDescsMountPathsOutputReference {
    return new ApsarastackEdasK8SApplicationPvcMountDescsMountPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationPvcMountDescs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#pvc_name ApsarastackEdasK8SApplication#pvc_name}
  */
  readonly pvcName: string;
  /**
  * mount_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#mount_paths ApsarastackEdasK8SApplication#mount_paths}
  */
  readonly mountPaths: ApsarastackEdasK8SApplicationPvcMountDescsMountPaths[] | cdktf.IResolvable;
}

export function apsarastackEdasK8SApplicationPvcMountDescsToTerraform(struct?: ApsarastackEdasK8SApplicationPvcMountDescs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pvc_name: cdktf.stringToTerraform(struct!.pvcName),
    mount_paths: cdktf.listMapper(apsarastackEdasK8SApplicationPvcMountDescsMountPathsToTerraform, true)(struct!.mountPaths),
  }
}


export function apsarastackEdasK8SApplicationPvcMountDescsToHclTerraform(struct?: ApsarastackEdasK8SApplicationPvcMountDescs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pvc_name: {
      value: cdktf.stringToHclTerraform(struct!.pvcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_paths: {
      value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationPvcMountDescsMountPathsToHclTerraform, true)(struct!.mountPaths),
      isBlock: true,
      type: "list",
      storageClassType: "ApsarastackEdasK8SApplicationPvcMountDescsMountPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationPvcMountDescsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackEdasK8SApplicationPvcMountDescs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pvcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcName = this._pvcName;
    }
    if (this._mountPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPaths = this._mountPaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationPvcMountDescs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pvcName = undefined;
      this._mountPaths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pvcName = value.pvcName;
      this._mountPaths.internalValue = value.mountPaths;
    }
  }

  // pvc_name - computed: false, optional: false, required: true
  private _pvcName?: string; 
  public get pvcName() {
    return this.getStringAttribute('pvc_name');
  }
  public set pvcName(value: string) {
    this._pvcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcNameInput() {
    return this._pvcName;
  }

  // mount_paths - computed: false, optional: false, required: true
  private _mountPaths = new ApsarastackEdasK8SApplicationPvcMountDescsMountPathsList(this, "mount_paths", false);
  public get mountPaths() {
    return this._mountPaths;
  }
  public putMountPaths(value: ApsarastackEdasK8SApplicationPvcMountDescsMountPaths[] | cdktf.IResolvable) {
    this._mountPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathsInput() {
    return this._mountPaths.internalValue;
  }
}

export class ApsarastackEdasK8SApplicationPvcMountDescsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackEdasK8SApplicationPvcMountDescs[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackEdasK8SApplicationPvcMountDescsOutputReference {
    return new ApsarastackEdasK8SApplicationPvcMountDescsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackEdasK8SApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#create ApsarastackEdasK8SApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#delete ApsarastackEdasK8SApplication#delete}
  */
  readonly delete?: string;
}

export function apsarastackEdasK8SApplicationTimeoutsToTerraform(struct?: ApsarastackEdasK8SApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apsarastackEdasK8SApplicationTimeoutsToHclTerraform(struct?: ApsarastackEdasK8SApplicationTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackEdasK8SApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackEdasK8SApplicationTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackEdasK8SApplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application apsarastack_edas_k8s_application}
*/
export class ApsarastackEdasK8SApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_edas_k8s_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEdasK8SApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEdasK8SApplication to import
  * @param importFromId The id of the existing ApsarastackEdasK8SApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEdasK8SApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_edas_k8s_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_k8s_application apsarastack_edas_k8s_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEdasK8SApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEdasK8SApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_edas_k8s_application',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationDescriotion = config.applicationDescriotion;
    this._applicationDescription = config.applicationDescription;
    this._applicationName = config.applicationName;
    this._clusterId = config.clusterId;
    this._command = config.command;
    this._commandArgs = config.commandArgs;
    this._crEeRepoId = config.crEeRepoId;
    this._edasContainerVersion = config.edasContainerVersion;
    this._envs = config.envs;
    this._id = config.id;
    this._imageUrl = config.imageUrl;
    this._internetExternalTrafficPolicy = config.internetExternalTrafficPolicy;
    this._internetScheduler = config.internetScheduler;
    this._internetSlbId = config.internetSlbId;
    this._internetSlbPort = config.internetSlbPort;
    this._internetSlbProtocol = config.internetSlbProtocol;
    this._internetTargetPort = config.internetTargetPort;
    this._intranetExternalTrafficPolicy = config.intranetExternalTrafficPolicy;
    this._intranetScheduler = config.intranetScheduler;
    this._intranetSlbId = config.intranetSlbId;
    this._intranetSlbPort = config.intranetSlbPort;
    this._intranetSlbProtocol = config.intranetSlbProtocol;
    this._intranetTargetPort = config.intranetTargetPort;
    this._jdk = config.jdk;
    this._limitMCpu = config.limitMCpu;
    this._limitMem = config.limitMem;
    this._liveness = config.liveness;
    this._logicalRegionId = config.logicalRegionId;
    this._mountDescs = config.mountDescs;
    this._namespace = config.namespace;
    this._nasId = config.nasId;
    this._packageType = config.packageType;
    this._packageUrl = config.packageUrl;
    this._packageVersion = config.packageVersion;
    this._postStart = config.postStart;
    this._preStop = config.preStop;
    this._readiness = config.readiness;
    this._replicas = config.replicas;
    this._requestsMCpu = config.requestsMCpu;
    this._requestsMem = config.requestsMem;
    this._updateBatch = config.updateBatch;
    this._updateBatchWaitTime = config.updateBatchWaitTime;
    this._updateGray = config.updateGray;
    this._updateReleaseType = config.updateReleaseType;
    this._updateType = config.updateType;
    this._webContainer = config.webContainer;
    this._configMountDescs.internalValue = config.configMountDescs;
    this._customNodeAffinityPreferred.internalValue = config.customNodeAffinityPreferred;
    this._customNodeAffinityRequire.internalValue = config.customNodeAffinityRequire;
    this._customPodAffinityPreferred.internalValue = config.customPodAffinityPreferred;
    this._customPodAffinityRequire.internalValue = config.customPodAffinityRequire;
    this._customPodAntAffinityPreferred.internalValue = config.customPodAntAffinityPreferred;
    this._customPodAntAffinityRequire.internalValue = config.customPodAntAffinityRequire;
    this._customTolerations.internalValue = config.customTolerations;
    this._hostAliases.internalValue = config.hostAliases;
    this._internetServicePortInfos.internalValue = config.internetServicePortInfos;
    this._intranetServicePortInfos.internalValue = config.intranetServicePortInfos;
    this._localVolume.internalValue = config.localVolume;
    this._pvcMountDescs.internalValue = config.pvcMountDescs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_descriotion - computed: false, optional: true, required: false
  private _applicationDescriotion?: string; 
  public get applicationDescriotion() {
    return this.getStringAttribute('application_descriotion');
  }
  public set applicationDescriotion(value: string) {
    this._applicationDescriotion = value;
  }
  public resetApplicationDescriotion() {
    this._applicationDescriotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDescriotionInput() {
    return this._applicationDescriotion;
  }

  // application_description - computed: false, optional: true, required: false
  private _applicationDescription?: string; 
  public get applicationDescription() {
    return this.getStringAttribute('application_description');
  }
  public set applicationDescription(value: string) {
    this._applicationDescription = value;
  }
  public resetApplicationDescription() {
    this._applicationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDescriptionInput() {
    return this._applicationDescription;
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

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

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // command_args - computed: false, optional: true, required: false
  private _commandArgs?: string[]; 
  public get commandArgs() {
    return this.getListAttribute('command_args');
  }
  public set commandArgs(value: string[]) {
    this._commandArgs = value;
  }
  public resetCommandArgs() {
    this._commandArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandArgsInput() {
    return this._commandArgs;
  }

  // cr_ee_repo_id - computed: false, optional: true, required: false
  private _crEeRepoId?: string; 
  public get crEeRepoId() {
    return this.getStringAttribute('cr_ee_repo_id');
  }
  public set crEeRepoId(value: string) {
    this._crEeRepoId = value;
  }
  public resetCrEeRepoId() {
    this._crEeRepoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crEeRepoIdInput() {
    return this._crEeRepoId;
  }

  // edas_container_version - computed: false, optional: true, required: false
  private _edasContainerVersion?: string; 
  public get edasContainerVersion() {
    return this.getStringAttribute('edas_container_version');
  }
  public set edasContainerVersion(value: string) {
    this._edasContainerVersion = value;
  }
  public resetEdasContainerVersion() {
    this._edasContainerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasContainerVersionInput() {
    return this._edasContainerVersion;
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: { [key: string]: string }; 
  public get envs() {
    return this.getStringMapAttribute('envs');
  }
  public set envs(value: { [key: string]: string }) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
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

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // internet_external_traffic_policy - computed: false, optional: true, required: false
  private _internetExternalTrafficPolicy?: string; 
  public get internetExternalTrafficPolicy() {
    return this.getStringAttribute('internet_external_traffic_policy');
  }
  public set internetExternalTrafficPolicy(value: string) {
    this._internetExternalTrafficPolicy = value;
  }
  public resetInternetExternalTrafficPolicy() {
    this._internetExternalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetExternalTrafficPolicyInput() {
    return this._internetExternalTrafficPolicy;
  }

  // internet_scheduler - computed: false, optional: true, required: false
  private _internetScheduler?: string; 
  public get internetScheduler() {
    return this.getStringAttribute('internet_scheduler');
  }
  public set internetScheduler(value: string) {
    this._internetScheduler = value;
  }
  public resetInternetScheduler() {
    this._internetScheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSchedulerInput() {
    return this._internetScheduler;
  }

  // internet_slb_id - computed: true, optional: true, required: false
  private _internetSlbId?: string; 
  public get internetSlbId() {
    return this.getStringAttribute('internet_slb_id');
  }
  public set internetSlbId(value: string) {
    this._internetSlbId = value;
  }
  public resetInternetSlbId() {
    this._internetSlbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSlbIdInput() {
    return this._internetSlbId;
  }

  // internet_slb_port - computed: true, optional: true, required: false
  private _internetSlbPort?: number; 
  public get internetSlbPort() {
    return this.getNumberAttribute('internet_slb_port');
  }
  public set internetSlbPort(value: number) {
    this._internetSlbPort = value;
  }
  public resetInternetSlbPort() {
    this._internetSlbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSlbPortInput() {
    return this._internetSlbPort;
  }

  // internet_slb_protocol - computed: true, optional: true, required: false
  private _internetSlbProtocol?: string; 
  public get internetSlbProtocol() {
    return this.getStringAttribute('internet_slb_protocol');
  }
  public set internetSlbProtocol(value: string) {
    this._internetSlbProtocol = value;
  }
  public resetInternetSlbProtocol() {
    this._internetSlbProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSlbProtocolInput() {
    return this._internetSlbProtocol;
  }

  // internet_target_port - computed: true, optional: true, required: false
  private _internetTargetPort?: number; 
  public get internetTargetPort() {
    return this.getNumberAttribute('internet_target_port');
  }
  public set internetTargetPort(value: number) {
    this._internetTargetPort = value;
  }
  public resetInternetTargetPort() {
    this._internetTargetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetTargetPortInput() {
    return this._internetTargetPort;
  }

  // intranet_external_traffic_policy - computed: false, optional: true, required: false
  private _intranetExternalTrafficPolicy?: string; 
  public get intranetExternalTrafficPolicy() {
    return this.getStringAttribute('intranet_external_traffic_policy');
  }
  public set intranetExternalTrafficPolicy(value: string) {
    this._intranetExternalTrafficPolicy = value;
  }
  public resetIntranetExternalTrafficPolicy() {
    this._intranetExternalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetExternalTrafficPolicyInput() {
    return this._intranetExternalTrafficPolicy;
  }

  // intranet_scheduler - computed: false, optional: true, required: false
  private _intranetScheduler?: string; 
  public get intranetScheduler() {
    return this.getStringAttribute('intranet_scheduler');
  }
  public set intranetScheduler(value: string) {
    this._intranetScheduler = value;
  }
  public resetIntranetScheduler() {
    this._intranetScheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetSchedulerInput() {
    return this._intranetScheduler;
  }

  // intranet_slb_id - computed: true, optional: true, required: false
  private _intranetSlbId?: string; 
  public get intranetSlbId() {
    return this.getStringAttribute('intranet_slb_id');
  }
  public set intranetSlbId(value: string) {
    this._intranetSlbId = value;
  }
  public resetIntranetSlbId() {
    this._intranetSlbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetSlbIdInput() {
    return this._intranetSlbId;
  }

  // intranet_slb_port - computed: true, optional: true, required: false
  private _intranetSlbPort?: number; 
  public get intranetSlbPort() {
    return this.getNumberAttribute('intranet_slb_port');
  }
  public set intranetSlbPort(value: number) {
    this._intranetSlbPort = value;
  }
  public resetIntranetSlbPort() {
    this._intranetSlbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetSlbPortInput() {
    return this._intranetSlbPort;
  }

  // intranet_slb_protocol - computed: true, optional: true, required: false
  private _intranetSlbProtocol?: string; 
  public get intranetSlbProtocol() {
    return this.getStringAttribute('intranet_slb_protocol');
  }
  public set intranetSlbProtocol(value: string) {
    this._intranetSlbProtocol = value;
  }
  public resetIntranetSlbProtocol() {
    this._intranetSlbProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetSlbProtocolInput() {
    return this._intranetSlbProtocol;
  }

  // intranet_target_port - computed: true, optional: true, required: false
  private _intranetTargetPort?: number; 
  public get intranetTargetPort() {
    return this.getNumberAttribute('intranet_target_port');
  }
  public set intranetTargetPort(value: number) {
    this._intranetTargetPort = value;
  }
  public resetIntranetTargetPort() {
    this._intranetTargetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetTargetPortInput() {
    return this._intranetTargetPort;
  }

  // jdk - computed: false, optional: true, required: false
  private _jdk?: string; 
  public get jdk() {
    return this.getStringAttribute('jdk');
  }
  public set jdk(value: string) {
    this._jdk = value;
  }
  public resetJdk() {
    this._jdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdkInput() {
    return this._jdk;
  }

  // limit_m_cpu - computed: true, optional: true, required: false
  private _limitMCpu?: number; 
  public get limitMCpu() {
    return this.getNumberAttribute('limit_m_cpu');
  }
  public set limitMCpu(value: number) {
    this._limitMCpu = value;
  }
  public resetLimitMCpu() {
    this._limitMCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMCpuInput() {
    return this._limitMCpu;
  }

  // limit_mem - computed: true, optional: true, required: false
  private _limitMem?: number; 
  public get limitMem() {
    return this.getNumberAttribute('limit_mem');
  }
  public set limitMem(value: number) {
    this._limitMem = value;
  }
  public resetLimitMem() {
    this._limitMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemInput() {
    return this._limitMem;
  }

  // liveness - computed: false, optional: true, required: false
  private _liveness?: string; 
  public get liveness() {
    return this.getStringAttribute('liveness');
  }
  public set liveness(value: string) {
    this._liveness = value;
  }
  public resetLiveness() {
    this._liveness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessInput() {
    return this._liveness;
  }

  // logical_region_id - computed: false, optional: true, required: false
  private _logicalRegionId?: string; 
  public get logicalRegionId() {
    return this.getStringAttribute('logical_region_id');
  }
  public set logicalRegionId(value: string) {
    this._logicalRegionId = value;
  }
  public resetLogicalRegionId() {
    this._logicalRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRegionIdInput() {
    return this._logicalRegionId;
  }

  // mount_descs - computed: true, optional: true, required: false
  private _mountDescs?: string; 
  public get mountDescs() {
    return this.getStringAttribute('mount_descs');
  }
  public set mountDescs(value: string) {
    this._mountDescs = value;
  }
  public resetMountDescs() {
    this._mountDescs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDescsInput() {
    return this._mountDescs;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // nas_id - computed: false, optional: true, required: false
  private _nasId?: string; 
  public get nasId() {
    return this.getStringAttribute('nas_id');
  }
  public set nasId(value: string) {
    this._nasId = value;
  }
  public resetNasId() {
    this._nasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIdInput() {
    return this._nasId;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_url - computed: true, optional: true, required: false
  private _packageUrl?: string; 
  public get packageUrl() {
    return this.getStringAttribute('package_url');
  }
  public set packageUrl(value: string) {
    this._packageUrl = value;
  }
  public resetPackageUrl() {
    this._packageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUrlInput() {
    return this._packageUrl;
  }

  // package_version - computed: true, optional: true, required: false
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: string; 
  public get postStart() {
    return this.getStringAttribute('post_start');
  }
  public set postStart(value: string) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart;
  }

  // pre_stop - computed: true, optional: true, required: false
  private _preStop?: string; 
  public get preStop() {
    return this.getStringAttribute('pre_stop');
  }
  public set preStop(value: string) {
    this._preStop = value;
  }
  public resetPreStop() {
    this._preStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop;
  }

  // readiness - computed: false, optional: true, required: false
  private _readiness?: string; 
  public get readiness() {
    return this.getStringAttribute('readiness');
  }
  public set readiness(value: string) {
    this._readiness = value;
  }
  public resetReadiness() {
    this._readiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessInput() {
    return this._readiness;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // requests_m_cpu - computed: true, optional: true, required: false
  private _requestsMCpu?: number; 
  public get requestsMCpu() {
    return this.getNumberAttribute('requests_m_cpu');
  }
  public set requestsMCpu(value: number) {
    this._requestsMCpu = value;
  }
  public resetRequestsMCpu() {
    this._requestsMCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsMCpuInput() {
    return this._requestsMCpu;
  }

  // requests_mem - computed: true, optional: true, required: false
  private _requestsMem?: number; 
  public get requestsMem() {
    return this.getNumberAttribute('requests_mem');
  }
  public set requestsMem(value: number) {
    this._requestsMem = value;
  }
  public resetRequestsMem() {
    this._requestsMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsMemInput() {
    return this._requestsMem;
  }

  // update_batch - computed: false, optional: true, required: false
  private _updateBatch?: number; 
  public get updateBatch() {
    return this.getNumberAttribute('update_batch');
  }
  public set updateBatch(value: number) {
    this._updateBatch = value;
  }
  public resetUpdateBatch() {
    this._updateBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateBatchInput() {
    return this._updateBatch;
  }

  // update_batch_wait_time - computed: false, optional: true, required: false
  private _updateBatchWaitTime?: number; 
  public get updateBatchWaitTime() {
    return this.getNumberAttribute('update_batch_wait_time');
  }
  public set updateBatchWaitTime(value: number) {
    this._updateBatchWaitTime = value;
  }
  public resetUpdateBatchWaitTime() {
    this._updateBatchWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateBatchWaitTimeInput() {
    return this._updateBatchWaitTime;
  }

  // update_gray - computed: false, optional: true, required: false
  private _updateGray?: number; 
  public get updateGray() {
    return this.getNumberAttribute('update_gray');
  }
  public set updateGray(value: number) {
    this._updateGray = value;
  }
  public resetUpdateGray() {
    this._updateGray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateGrayInput() {
    return this._updateGray;
  }

  // update_release_type - computed: false, optional: true, required: false
  private _updateReleaseType?: string; 
  public get updateReleaseType() {
    return this.getStringAttribute('update_release_type');
  }
  public set updateReleaseType(value: string) {
    this._updateReleaseType = value;
  }
  public resetUpdateReleaseType() {
    this._updateReleaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateReleaseTypeInput() {
    return this._updateReleaseType;
  }

  // update_type - computed: false, optional: true, required: false
  private _updateType?: string; 
  public get updateType() {
    return this.getStringAttribute('update_type');
  }
  public set updateType(value: string) {
    this._updateType = value;
  }
  public resetUpdateType() {
    this._updateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTypeInput() {
    return this._updateType;
  }

  // web_container - computed: false, optional: true, required: false
  private _webContainer?: string; 
  public get webContainer() {
    return this.getStringAttribute('web_container');
  }
  public set webContainer(value: string) {
    this._webContainer = value;
  }
  public resetWebContainer() {
    this._webContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webContainerInput() {
    return this._webContainer;
  }

  // config_mount_descs - computed: false, optional: true, required: false
  private _configMountDescs = new ApsarastackEdasK8SApplicationConfigMountDescsList(this, "config_mount_descs", false);
  public get configMountDescs() {
    return this._configMountDescs;
  }
  public putConfigMountDescs(value: ApsarastackEdasK8SApplicationConfigMountDescs[] | cdktf.IResolvable) {
    this._configMountDescs.internalValue = value;
  }
  public resetConfigMountDescs() {
    this._configMountDescs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMountDescsInput() {
    return this._configMountDescs.internalValue;
  }

  // custom_node_affinity_preferred - computed: false, optional: true, required: false
  private _customNodeAffinityPreferred = new ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredList(this, "custom_node_affinity_preferred", false);
  public get customNodeAffinityPreferred() {
    return this._customNodeAffinityPreferred;
  }
  public putCustomNodeAffinityPreferred(value: ApsarastackEdasK8SApplicationCustomNodeAffinityPreferred[] | cdktf.IResolvable) {
    this._customNodeAffinityPreferred.internalValue = value;
  }
  public resetCustomNodeAffinityPreferred() {
    this._customNodeAffinityPreferred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNodeAffinityPreferredInput() {
    return this._customNodeAffinityPreferred.internalValue;
  }

  // custom_node_affinity_require - computed: false, optional: true, required: false
  private _customNodeAffinityRequire = new ApsarastackEdasK8SApplicationCustomNodeAffinityRequireList(this, "custom_node_affinity_require", false);
  public get customNodeAffinityRequire() {
    return this._customNodeAffinityRequire;
  }
  public putCustomNodeAffinityRequire(value: ApsarastackEdasK8SApplicationCustomNodeAffinityRequire[] | cdktf.IResolvable) {
    this._customNodeAffinityRequire.internalValue = value;
  }
  public resetCustomNodeAffinityRequire() {
    this._customNodeAffinityRequire.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNodeAffinityRequireInput() {
    return this._customNodeAffinityRequire.internalValue;
  }

  // custom_pod_affinity_preferred - computed: false, optional: true, required: false
  private _customPodAffinityPreferred = new ApsarastackEdasK8SApplicationCustomPodAffinityPreferredList(this, "custom_pod_affinity_preferred", false);
  public get customPodAffinityPreferred() {
    return this._customPodAffinityPreferred;
  }
  public putCustomPodAffinityPreferred(value: ApsarastackEdasK8SApplicationCustomPodAffinityPreferred[] | cdktf.IResolvable) {
    this._customPodAffinityPreferred.internalValue = value;
  }
  public resetCustomPodAffinityPreferred() {
    this._customPodAffinityPreferred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPodAffinityPreferredInput() {
    return this._customPodAffinityPreferred.internalValue;
  }

  // custom_pod_affinity_require - computed: false, optional: true, required: false
  private _customPodAffinityRequire = new ApsarastackEdasK8SApplicationCustomPodAffinityRequireList(this, "custom_pod_affinity_require", false);
  public get customPodAffinityRequire() {
    return this._customPodAffinityRequire;
  }
  public putCustomPodAffinityRequire(value: ApsarastackEdasK8SApplicationCustomPodAffinityRequire[] | cdktf.IResolvable) {
    this._customPodAffinityRequire.internalValue = value;
  }
  public resetCustomPodAffinityRequire() {
    this._customPodAffinityRequire.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPodAffinityRequireInput() {
    return this._customPodAffinityRequire.internalValue;
  }

  // custom_pod_ant_affinity_preferred - computed: false, optional: true, required: false
  private _customPodAntAffinityPreferred = new ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredList(this, "custom_pod_ant_affinity_preferred", false);
  public get customPodAntAffinityPreferred() {
    return this._customPodAntAffinityPreferred;
  }
  public putCustomPodAntAffinityPreferred(value: ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferred[] | cdktf.IResolvable) {
    this._customPodAntAffinityPreferred.internalValue = value;
  }
  public resetCustomPodAntAffinityPreferred() {
    this._customPodAntAffinityPreferred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPodAntAffinityPreferredInput() {
    return this._customPodAntAffinityPreferred.internalValue;
  }

  // custom_pod_ant_affinity_require - computed: false, optional: true, required: false
  private _customPodAntAffinityRequire = new ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireList(this, "custom_pod_ant_affinity_require", false);
  public get customPodAntAffinityRequire() {
    return this._customPodAntAffinityRequire;
  }
  public putCustomPodAntAffinityRequire(value: ApsarastackEdasK8SApplicationCustomPodAntAffinityRequire[] | cdktf.IResolvable) {
    this._customPodAntAffinityRequire.internalValue = value;
  }
  public resetCustomPodAntAffinityRequire() {
    this._customPodAntAffinityRequire.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPodAntAffinityRequireInput() {
    return this._customPodAntAffinityRequire.internalValue;
  }

  // custom_tolerations - computed: false, optional: true, required: false
  private _customTolerations = new ApsarastackEdasK8SApplicationCustomTolerationsList(this, "custom_tolerations", false);
  public get customTolerations() {
    return this._customTolerations;
  }
  public putCustomTolerations(value: ApsarastackEdasK8SApplicationCustomTolerations[] | cdktf.IResolvable) {
    this._customTolerations.internalValue = value;
  }
  public resetCustomTolerations() {
    this._customTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTolerationsInput() {
    return this._customTolerations.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new ApsarastackEdasK8SApplicationHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: ApsarastackEdasK8SApplicationHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // internet_service_port_infos - computed: false, optional: true, required: false
  private _internetServicePortInfos = new ApsarastackEdasK8SApplicationInternetServicePortInfosList(this, "internet_service_port_infos", false);
  public get internetServicePortInfos() {
    return this._internetServicePortInfos;
  }
  public putInternetServicePortInfos(value: ApsarastackEdasK8SApplicationInternetServicePortInfos[] | cdktf.IResolvable) {
    this._internetServicePortInfos.internalValue = value;
  }
  public resetInternetServicePortInfos() {
    this._internetServicePortInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServicePortInfosInput() {
    return this._internetServicePortInfos.internalValue;
  }

  // intranet_service_port_infos - computed: false, optional: true, required: false
  private _intranetServicePortInfos = new ApsarastackEdasK8SApplicationIntranetServicePortInfosList(this, "intranet_service_port_infos", false);
  public get intranetServicePortInfos() {
    return this._intranetServicePortInfos;
  }
  public putIntranetServicePortInfos(value: ApsarastackEdasK8SApplicationIntranetServicePortInfos[] | cdktf.IResolvable) {
    this._intranetServicePortInfos.internalValue = value;
  }
  public resetIntranetServicePortInfos() {
    this._intranetServicePortInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetServicePortInfosInput() {
    return this._intranetServicePortInfos.internalValue;
  }

  // local_volume - computed: false, optional: true, required: false
  private _localVolume = new ApsarastackEdasK8SApplicationLocalVolumeList(this, "local_volume", false);
  public get localVolume() {
    return this._localVolume;
  }
  public putLocalVolume(value: ApsarastackEdasK8SApplicationLocalVolume[] | cdktf.IResolvable) {
    this._localVolume.internalValue = value;
  }
  public resetLocalVolume() {
    this._localVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVolumeInput() {
    return this._localVolume.internalValue;
  }

  // pvc_mount_descs - computed: false, optional: true, required: false
  private _pvcMountDescs = new ApsarastackEdasK8SApplicationPvcMountDescsList(this, "pvc_mount_descs", false);
  public get pvcMountDescs() {
    return this._pvcMountDescs;
  }
  public putPvcMountDescs(value: ApsarastackEdasK8SApplicationPvcMountDescs[] | cdktf.IResolvable) {
    this._pvcMountDescs.internalValue = value;
  }
  public resetPvcMountDescs() {
    this._pvcMountDescs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcMountDescsInput() {
    return this._pvcMountDescs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackEdasK8SApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackEdasK8SApplicationTimeouts) {
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
      application_descriotion: cdktf.stringToTerraform(this._applicationDescriotion),
      application_description: cdktf.stringToTerraform(this._applicationDescription),
      application_name: cdktf.stringToTerraform(this._applicationName),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      command: cdktf.stringToTerraform(this._command),
      command_args: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commandArgs),
      cr_ee_repo_id: cdktf.stringToTerraform(this._crEeRepoId),
      edas_container_version: cdktf.stringToTerraform(this._edasContainerVersion),
      envs: cdktf.hashMapper(cdktf.stringToTerraform)(this._envs),
      id: cdktf.stringToTerraform(this._id),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      internet_external_traffic_policy: cdktf.stringToTerraform(this._internetExternalTrafficPolicy),
      internet_scheduler: cdktf.stringToTerraform(this._internetScheduler),
      internet_slb_id: cdktf.stringToTerraform(this._internetSlbId),
      internet_slb_port: cdktf.numberToTerraform(this._internetSlbPort),
      internet_slb_protocol: cdktf.stringToTerraform(this._internetSlbProtocol),
      internet_target_port: cdktf.numberToTerraform(this._internetTargetPort),
      intranet_external_traffic_policy: cdktf.stringToTerraform(this._intranetExternalTrafficPolicy),
      intranet_scheduler: cdktf.stringToTerraform(this._intranetScheduler),
      intranet_slb_id: cdktf.stringToTerraform(this._intranetSlbId),
      intranet_slb_port: cdktf.numberToTerraform(this._intranetSlbPort),
      intranet_slb_protocol: cdktf.stringToTerraform(this._intranetSlbProtocol),
      intranet_target_port: cdktf.numberToTerraform(this._intranetTargetPort),
      jdk: cdktf.stringToTerraform(this._jdk),
      limit_m_cpu: cdktf.numberToTerraform(this._limitMCpu),
      limit_mem: cdktf.numberToTerraform(this._limitMem),
      liveness: cdktf.stringToTerraform(this._liveness),
      logical_region_id: cdktf.stringToTerraform(this._logicalRegionId),
      mount_descs: cdktf.stringToTerraform(this._mountDescs),
      namespace: cdktf.stringToTerraform(this._namespace),
      nas_id: cdktf.stringToTerraform(this._nasId),
      package_type: cdktf.stringToTerraform(this._packageType),
      package_url: cdktf.stringToTerraform(this._packageUrl),
      package_version: cdktf.stringToTerraform(this._packageVersion),
      post_start: cdktf.stringToTerraform(this._postStart),
      pre_stop: cdktf.stringToTerraform(this._preStop),
      readiness: cdktf.stringToTerraform(this._readiness),
      replicas: cdktf.numberToTerraform(this._replicas),
      requests_m_cpu: cdktf.numberToTerraform(this._requestsMCpu),
      requests_mem: cdktf.numberToTerraform(this._requestsMem),
      update_batch: cdktf.numberToTerraform(this._updateBatch),
      update_batch_wait_time: cdktf.numberToTerraform(this._updateBatchWaitTime),
      update_gray: cdktf.numberToTerraform(this._updateGray),
      update_release_type: cdktf.stringToTerraform(this._updateReleaseType),
      update_type: cdktf.stringToTerraform(this._updateType),
      web_container: cdktf.stringToTerraform(this._webContainer),
      config_mount_descs: cdktf.listMapper(apsarastackEdasK8SApplicationConfigMountDescsToTerraform, true)(this._configMountDescs.internalValue),
      custom_node_affinity_preferred: cdktf.listMapper(apsarastackEdasK8SApplicationCustomNodeAffinityPreferredToTerraform, true)(this._customNodeAffinityPreferred.internalValue),
      custom_node_affinity_require: cdktf.listMapper(apsarastackEdasK8SApplicationCustomNodeAffinityRequireToTerraform, true)(this._customNodeAffinityRequire.internalValue),
      custom_pod_affinity_preferred: cdktf.listMapper(apsarastackEdasK8SApplicationCustomPodAffinityPreferredToTerraform, true)(this._customPodAffinityPreferred.internalValue),
      custom_pod_affinity_require: cdktf.listMapper(apsarastackEdasK8SApplicationCustomPodAffinityRequireToTerraform, true)(this._customPodAffinityRequire.internalValue),
      custom_pod_ant_affinity_preferred: cdktf.listMapper(apsarastackEdasK8SApplicationCustomPodAntAffinityPreferredToTerraform, true)(this._customPodAntAffinityPreferred.internalValue),
      custom_pod_ant_affinity_require: cdktf.listMapper(apsarastackEdasK8SApplicationCustomPodAntAffinityRequireToTerraform, true)(this._customPodAntAffinityRequire.internalValue),
      custom_tolerations: cdktf.listMapper(apsarastackEdasK8SApplicationCustomTolerationsToTerraform, true)(this._customTolerations.internalValue),
      host_aliases: cdktf.listMapper(apsarastackEdasK8SApplicationHostAliasesToTerraform, true)(this._hostAliases.internalValue),
      internet_service_port_infos: cdktf.listMapper(apsarastackEdasK8SApplicationInternetServicePortInfosToTerraform, true)(this._internetServicePortInfos.internalValue),
      intranet_service_port_infos: cdktf.listMapper(apsarastackEdasK8SApplicationIntranetServicePortInfosToTerraform, true)(this._intranetServicePortInfos.internalValue),
      local_volume: cdktf.listMapper(apsarastackEdasK8SApplicationLocalVolumeToTerraform, true)(this._localVolume.internalValue),
      pvc_mount_descs: cdktf.listMapper(apsarastackEdasK8SApplicationPvcMountDescsToTerraform, true)(this._pvcMountDescs.internalValue),
      timeouts: apsarastackEdasK8SApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_descriotion: {
        value: cdktf.stringToHclTerraform(this._applicationDescriotion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_description: {
        value: cdktf.stringToHclTerraform(this._applicationDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      command_args: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commandArgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cr_ee_repo_id: {
        value: cdktf.stringToHclTerraform(this._crEeRepoId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edas_container_version: {
        value: cdktf.stringToHclTerraform(this._edasContainerVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      envs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._envs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_url: {
        value: cdktf.stringToHclTerraform(this._imageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_external_traffic_policy: {
        value: cdktf.stringToHclTerraform(this._internetExternalTrafficPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_scheduler: {
        value: cdktf.stringToHclTerraform(this._internetScheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_slb_id: {
        value: cdktf.stringToHclTerraform(this._internetSlbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_slb_port: {
        value: cdktf.numberToHclTerraform(this._internetSlbPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_slb_protocol: {
        value: cdktf.stringToHclTerraform(this._internetSlbProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_target_port: {
        value: cdktf.numberToHclTerraform(this._internetTargetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      intranet_external_traffic_policy: {
        value: cdktf.stringToHclTerraform(this._intranetExternalTrafficPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intranet_scheduler: {
        value: cdktf.stringToHclTerraform(this._intranetScheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intranet_slb_id: {
        value: cdktf.stringToHclTerraform(this._intranetSlbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intranet_slb_port: {
        value: cdktf.numberToHclTerraform(this._intranetSlbPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      intranet_slb_protocol: {
        value: cdktf.stringToHclTerraform(this._intranetSlbProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intranet_target_port: {
        value: cdktf.numberToHclTerraform(this._intranetTargetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jdk: {
        value: cdktf.stringToHclTerraform(this._jdk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_m_cpu: {
        value: cdktf.numberToHclTerraform(this._limitMCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_mem: {
        value: cdktf.numberToHclTerraform(this._limitMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      liveness: {
        value: cdktf.stringToHclTerraform(this._liveness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_region_id: {
        value: cdktf.stringToHclTerraform(this._logicalRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_descs: {
        value: cdktf.stringToHclTerraform(this._mountDescs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas_id: {
        value: cdktf.stringToHclTerraform(this._nasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_url: {
        value: cdktf.stringToHclTerraform(this._packageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_version: {
        value: cdktf.stringToHclTerraform(this._packageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_start: {
        value: cdktf.stringToHclTerraform(this._postStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_stop: {
        value: cdktf.stringToHclTerraform(this._preStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readiness: {
        value: cdktf.stringToHclTerraform(this._readiness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requests_m_cpu: {
        value: cdktf.numberToHclTerraform(this._requestsMCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requests_mem: {
        value: cdktf.numberToHclTerraform(this._requestsMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_batch: {
        value: cdktf.numberToHclTerraform(this._updateBatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_batch_wait_time: {
        value: cdktf.numberToHclTerraform(this._updateBatchWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_gray: {
        value: cdktf.numberToHclTerraform(this._updateGray),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_release_type: {
        value: cdktf.stringToHclTerraform(this._updateReleaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_type: {
        value: cdktf.stringToHclTerraform(this._updateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_container: {
        value: cdktf.stringToHclTerraform(this._webContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_mount_descs: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationConfigMountDescsToHclTerraform, true)(this._configMountDescs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationConfigMountDescsList",
      },
      custom_node_affinity_preferred: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomNodeAffinityPreferredToHclTerraform, true)(this._customNodeAffinityPreferred.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationCustomNodeAffinityPreferredList",
      },
      custom_node_affinity_require: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomNodeAffinityRequireToHclTerraform, true)(this._customNodeAffinityRequire.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationCustomNodeAffinityRequireList",
      },
      custom_pod_affinity_preferred: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomPodAffinityPreferredToHclTerraform, true)(this._customPodAffinityPreferred.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationCustomPodAffinityPreferredList",
      },
      custom_pod_affinity_require: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomPodAffinityRequireToHclTerraform, true)(this._customPodAffinityRequire.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationCustomPodAffinityRequireList",
      },
      custom_pod_ant_affinity_preferred: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomPodAntAffinityPreferredToHclTerraform, true)(this._customPodAntAffinityPreferred.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationCustomPodAntAffinityPreferredList",
      },
      custom_pod_ant_affinity_require: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomPodAntAffinityRequireToHclTerraform, true)(this._customPodAntAffinityRequire.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationCustomPodAntAffinityRequireList",
      },
      custom_tolerations: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationCustomTolerationsToHclTerraform, true)(this._customTolerations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationCustomTolerationsList",
      },
      host_aliases: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationHostAliasesToHclTerraform, true)(this._hostAliases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationHostAliasesList",
      },
      internet_service_port_infos: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationInternetServicePortInfosToHclTerraform, true)(this._internetServicePortInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationInternetServicePortInfosList",
      },
      intranet_service_port_infos: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationIntranetServicePortInfosToHclTerraform, true)(this._intranetServicePortInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationIntranetServicePortInfosList",
      },
      local_volume: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationLocalVolumeToHclTerraform, true)(this._localVolume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationLocalVolumeList",
      },
      pvc_mount_descs: {
        value: cdktf.listMapperHcl(apsarastackEdasK8SApplicationPvcMountDescsToHclTerraform, true)(this._pvcMountDescs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackEdasK8SApplicationPvcMountDescsList",
      },
      timeouts: {
        value: apsarastackEdasK8SApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackEdasK8SApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
