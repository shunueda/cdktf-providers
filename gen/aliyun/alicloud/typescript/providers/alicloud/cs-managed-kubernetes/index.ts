// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsManagedKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#api_audiences CsManagedKubernetes#api_audiences}
  */
  readonly apiAudiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#availability_zone CsManagedKubernetes#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#client_cert CsManagedKubernetes#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#client_key CsManagedKubernetes#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#cluster_ca_cert CsManagedKubernetes#cluster_ca_cert}
  */
  readonly clusterCaCert?: string;
  /**
  * cluster local domain 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#cluster_domain CsManagedKubernetes#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#cluster_network_type CsManagedKubernetes#cluster_network_type}
  */
  readonly clusterNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#cluster_spec CsManagedKubernetes#cluster_spec}
  */
  readonly clusterSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#control_plane_log_components CsManagedKubernetes#control_plane_log_components}
  */
  readonly controlPlaneLogComponents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#control_plane_log_project CsManagedKubernetes#control_plane_log_project}
  */
  readonly controlPlaneLogProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#control_plane_log_ttl CsManagedKubernetes#control_plane_log_ttl}
  */
  readonly controlPlaneLogTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#cpu_policy CsManagedKubernetes#cpu_policy}
  */
  readonly cpuPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#custom_san CsManagedKubernetes#custom_san}
  */
  readonly customSan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#deletion_protection CsManagedKubernetes#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#enable_rrsa CsManagedKubernetes#enable_rrsa}
  */
  readonly enableRrsa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#enable_ssh CsManagedKubernetes#enable_ssh}
  */
  readonly enableSsh?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Key Management Service (KMS) key that is used to encrypt Kubernetes Secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#encryption_provider_key CsManagedKubernetes#encryption_provider_key}
  */
  readonly encryptionProviderKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#exclude_autoscaler_nodes CsManagedKubernetes#exclude_autoscaler_nodes}
  */
  readonly excludeAutoscalerNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#force_update CsManagedKubernetes#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#id CsManagedKubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#image_id CsManagedKubernetes#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#install_cloud_monitor CsManagedKubernetes#install_cloud_monitor}
  */
  readonly installCloudMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#ip_stack CsManagedKubernetes#ip_stack}
  */
  readonly ipStack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#is_enterprise_security_group CsManagedKubernetes#is_enterprise_security_group}
  */
  readonly isEnterpriseSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#key_name CsManagedKubernetes#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#kms_encrypted_password CsManagedKubernetes#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#kms_encryption_context CsManagedKubernetes#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#kube_config CsManagedKubernetes#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#load_balancer_spec CsManagedKubernetes#load_balancer_spec}
  */
  readonly loadBalancerSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#name CsManagedKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#name_prefix CsManagedKubernetes#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#new_nat_gateway CsManagedKubernetes#new_nat_gateway}
  */
  readonly newNatGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#node_cidr_mask CsManagedKubernetes#node_cidr_mask}
  */
  readonly nodeCidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#node_name_mode CsManagedKubernetes#node_name_mode}
  */
  readonly nodeNameMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#node_port_range CsManagedKubernetes#node_port_range}
  */
  readonly nodePortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#os_type CsManagedKubernetes#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#password CsManagedKubernetes#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#platform CsManagedKubernetes#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#pod_cidr CsManagedKubernetes#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#pod_vswitch_ids CsManagedKubernetes#pod_vswitch_ids}
  */
  readonly podVswitchIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#profile CsManagedKubernetes#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#proxy_mode CsManagedKubernetes#proxy_mode}
  */
  readonly proxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#rds_instances CsManagedKubernetes#rds_instances}
  */
  readonly rdsInstances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#resource_group_id CsManagedKubernetes#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#retain_resources CsManagedKubernetes#retain_resources}
  */
  readonly retainResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#runtime CsManagedKubernetes#runtime}
  */
  readonly runtime?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#security_group_id CsManagedKubernetes#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#service_account_issuer CsManagedKubernetes#service_account_issuer}
  */
  readonly serviceAccountIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#service_cidr CsManagedKubernetes#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#skip_set_certificate_authority CsManagedKubernetes#skip_set_certificate_authority}
  */
  readonly skipSetCertificateAuthority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#slb_internet_enabled CsManagedKubernetes#slb_internet_enabled}
  */
  readonly slbInternetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#tags CsManagedKubernetes#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#timezone CsManagedKubernetes#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#user_ca CsManagedKubernetes#user_ca}
  */
  readonly userCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#user_data CsManagedKubernetes#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#version CsManagedKubernetes#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#vswitch_ids CsManagedKubernetes#vswitch_ids}
  */
  readonly vswitchIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_auto_renew CsManagedKubernetes#worker_auto_renew}
  */
  readonly workerAutoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_auto_renew_period CsManagedKubernetes#worker_auto_renew_period}
  */
  readonly workerAutoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_data_disk_category CsManagedKubernetes#worker_data_disk_category}
  */
  readonly workerDataDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_data_disk_size CsManagedKubernetes#worker_data_disk_size}
  */
  readonly workerDataDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_disk_category CsManagedKubernetes#worker_disk_category}
  */
  readonly workerDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_disk_performance_level CsManagedKubernetes#worker_disk_performance_level}
  */
  readonly workerDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_disk_size CsManagedKubernetes#worker_disk_size}
  */
  readonly workerDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_disk_snapshot_policy_id CsManagedKubernetes#worker_disk_snapshot_policy_id}
  */
  readonly workerDiskSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_instance_charge_type CsManagedKubernetes#worker_instance_charge_type}
  */
  readonly workerInstanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_instance_type CsManagedKubernetes#worker_instance_type}
  */
  readonly workerInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_instance_types CsManagedKubernetes#worker_instance_types}
  */
  readonly workerInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_number CsManagedKubernetes#worker_number}
  */
  readonly workerNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_numbers CsManagedKubernetes#worker_numbers}
  */
  readonly workerNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_period CsManagedKubernetes#worker_period}
  */
  readonly workerPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_period_unit CsManagedKubernetes#worker_period_unit}
  */
  readonly workerPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_vswitch_ids CsManagedKubernetes#worker_vswitch_ids}
  */
  readonly workerVswitchIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#zone_ids CsManagedKubernetes#zone_ids}
  */
  readonly zoneIds?: string[];
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#addons CsManagedKubernetes#addons}
  */
  readonly addons?: CsManagedKubernetesAddons[] | cdktf.IResolvable;
  /**
  * audit_log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#audit_log_config CsManagedKubernetes#audit_log_config}
  */
  readonly auditLogConfig?: CsManagedKubernetesAuditLogConfig;
  /**
  * auto_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#auto_mode CsManagedKubernetes#auto_mode}
  */
  readonly autoMode?: CsManagedKubernetesAutoMode;
  /**
  * delete_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#delete_options CsManagedKubernetes#delete_options}
  */
  readonly deleteOptions?: CsManagedKubernetesDeleteOptions[] | cdktf.IResolvable;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#log_config CsManagedKubernetes#log_config}
  */
  readonly logConfig?: CsManagedKubernetesLogConfig;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#maintenance_window CsManagedKubernetes#maintenance_window}
  */
  readonly maintenanceWindow?: CsManagedKubernetesMaintenanceWindow;
  /**
  * operation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#operation_policy CsManagedKubernetes#operation_policy}
  */
  readonly operationPolicy?: CsManagedKubernetesOperationPolicy;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#taints CsManagedKubernetes#taints}
  */
  readonly taints?: CsManagedKubernetesTaints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#timeouts CsManagedKubernetes#timeouts}
  */
  readonly timeouts?: CsManagedKubernetesTimeouts;
  /**
  * worker_data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_data_disks CsManagedKubernetes#worker_data_disks}
  */
  readonly workerDataDisks?: CsManagedKubernetesWorkerDataDisks[] | cdktf.IResolvable;
  /**
  * worker_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#worker_nodes CsManagedKubernetes#worker_nodes}
  */
  readonly workerNodes?: CsManagedKubernetesWorkerNodes[] | cdktf.IResolvable;
}
export interface CsManagedKubernetesRrsaMetadata {
}

export function csManagedKubernetesRrsaMetadataToTerraform(struct?: CsManagedKubernetesRrsaMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function csManagedKubernetesRrsaMetadataToHclTerraform(struct?: CsManagedKubernetesRrsaMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CsManagedKubernetesRrsaMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsManagedKubernetesRrsaMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesRrsaMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ram_oidc_provider_arn - computed: true, optional: false, required: false
  public get ramOidcProviderArn() {
    return this.getStringAttribute('ram_oidc_provider_arn');
  }

  // ram_oidc_provider_name - computed: true, optional: false, required: false
  public get ramOidcProviderName() {
    return this.getStringAttribute('ram_oidc_provider_name');
  }

  // rrsa_oidc_issuer_url - computed: true, optional: false, required: false
  public get rrsaOidcIssuerUrl() {
    return this.getStringAttribute('rrsa_oidc_issuer_url');
  }
}

export class CsManagedKubernetesRrsaMetadataList extends cdktf.ComplexList {

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
  public get(index: number): CsManagedKubernetesRrsaMetadataOutputReference {
    return new CsManagedKubernetesRrsaMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsManagedKubernetesAddons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#config CsManagedKubernetes#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#disabled CsManagedKubernetes#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#name CsManagedKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#version CsManagedKubernetes#version}
  */
  readonly version?: string;
}

export function csManagedKubernetesAddonsToTerraform(struct?: CsManagedKubernetesAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function csManagedKubernetesAddonsToHclTerraform(struct?: CsManagedKubernetesAddons | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class CsManagedKubernetesAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsManagedKubernetesAddons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
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

  public set internalValue(value: CsManagedKubernetesAddons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._disabled = value.disabled;
      this._name = value.name;
      this._version = value.version;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

export class CsManagedKubernetesAddonsList extends cdktf.ComplexList {
  public internalValue? : CsManagedKubernetesAddons[] | cdktf.IResolvable

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
  public get(index: number): CsManagedKubernetesAddonsOutputReference {
    return new CsManagedKubernetesAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsManagedKubernetesAuditLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#enabled CsManagedKubernetes#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#sls_project_name CsManagedKubernetes#sls_project_name}
  */
  readonly slsProjectName?: string;
}

export function csManagedKubernetesAuditLogConfigToTerraform(struct?: CsManagedKubernetesAuditLogConfigOutputReference | CsManagedKubernetesAuditLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sls_project_name: cdktf.stringToTerraform(struct!.slsProjectName),
  }
}


export function csManagedKubernetesAuditLogConfigToHclTerraform(struct?: CsManagedKubernetesAuditLogConfigOutputReference | CsManagedKubernetesAuditLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sls_project_name: {
      value: cdktf.stringToHclTerraform(struct!.slsProjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsManagedKubernetesAuditLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsManagedKubernetesAuditLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._slsProjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsProjectName = this._slsProjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesAuditLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._slsProjectName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._slsProjectName = value.slsProjectName;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sls_project_name - computed: true, optional: true, required: false
  private _slsProjectName?: string; 
  public get slsProjectName() {
    return this.getStringAttribute('sls_project_name');
  }
  public set slsProjectName(value: string) {
    this._slsProjectName = value;
  }
  public resetSlsProjectName() {
    this._slsProjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsProjectNameInput() {
    return this._slsProjectName;
  }
}
export interface CsManagedKubernetesAutoMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#enabled CsManagedKubernetes#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function csManagedKubernetesAutoModeToTerraform(struct?: CsManagedKubernetesAutoModeOutputReference | CsManagedKubernetesAutoMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function csManagedKubernetesAutoModeToHclTerraform(struct?: CsManagedKubernetesAutoModeOutputReference | CsManagedKubernetesAutoMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsManagedKubernetesAutoModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsManagedKubernetesAutoMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesAutoMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CsManagedKubernetesDeleteOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#delete_mode CsManagedKubernetes#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#resource_type CsManagedKubernetes#resource_type}
  */
  readonly resourceType?: string;
}

export function csManagedKubernetesDeleteOptionsToTerraform(struct?: CsManagedKubernetesDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_mode: cdktf.stringToTerraform(struct!.deleteMode),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function csManagedKubernetesDeleteOptionsToHclTerraform(struct?: CsManagedKubernetesDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_mode: {
      value: cdktf.stringToHclTerraform(struct!.deleteMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsManagedKubernetesDeleteOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsManagedKubernetesDeleteOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMode = this._deleteMode;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesDeleteOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteMode = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteMode = value.deleteMode;
      this._resourceType = value.resourceType;
    }
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class CsManagedKubernetesDeleteOptionsList extends cdktf.ComplexList {
  public internalValue? : CsManagedKubernetesDeleteOptions[] | cdktf.IResolvable

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
  public get(index: number): CsManagedKubernetesDeleteOptionsOutputReference {
    return new CsManagedKubernetesDeleteOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsManagedKubernetesLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#project CsManagedKubernetes#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#type CsManagedKubernetes#type}
  */
  readonly type: string;
}

export function csManagedKubernetesLogConfigToTerraform(struct?: CsManagedKubernetesLogConfigOutputReference | CsManagedKubernetesLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function csManagedKubernetesLogConfigToHclTerraform(struct?: CsManagedKubernetesLogConfigOutputReference | CsManagedKubernetesLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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

export class CsManagedKubernetesLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsManagedKubernetesLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._type = value.type;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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
export interface CsManagedKubernetesMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#duration CsManagedKubernetes#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#enable CsManagedKubernetes#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#maintenance_time CsManagedKubernetes#maintenance_time}
  */
  readonly maintenanceTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#weekly_period CsManagedKubernetes#weekly_period}
  */
  readonly weeklyPeriod?: string;
}

export function csManagedKubernetesMaintenanceWindowToTerraform(struct?: CsManagedKubernetesMaintenanceWindowOutputReference | CsManagedKubernetesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maintenance_time: cdktf.stringToTerraform(struct!.maintenanceTime),
    weekly_period: cdktf.stringToTerraform(struct!.weeklyPeriod),
  }
}


export function csManagedKubernetesMaintenanceWindowToHclTerraform(struct?: CsManagedKubernetesMaintenanceWindowOutputReference | CsManagedKubernetesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maintenance_time: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly_period: {
      value: cdktf.stringToHclTerraform(struct!.weeklyPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsManagedKubernetesMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsManagedKubernetesMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maintenanceTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceTime = this._maintenanceTime;
    }
    if (this._weeklyPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyPeriod = this._weeklyPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enable = undefined;
      this._maintenanceTime = undefined;
      this._weeklyPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enable = value.enable;
      this._maintenanceTime = value.maintenanceTime;
      this._weeklyPeriod = value.weeklyPeriod;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // maintenance_time - computed: true, optional: true, required: false
  private _maintenanceTime?: string; 
  public get maintenanceTime() {
    return this.getStringAttribute('maintenance_time');
  }
  public set maintenanceTime(value: string) {
    this._maintenanceTime = value;
  }
  public resetMaintenanceTime() {
    this._maintenanceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeInput() {
    return this._maintenanceTime;
  }

  // weekly_period - computed: true, optional: true, required: false
  private _weeklyPeriod?: string; 
  public get weeklyPeriod() {
    return this.getStringAttribute('weekly_period');
  }
  public set weeklyPeriod(value: string) {
    this._weeklyPeriod = value;
  }
  public resetWeeklyPeriod() {
    this._weeklyPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyPeriodInput() {
    return this._weeklyPeriod;
  }
}
export interface CsManagedKubernetesOperationPolicyClusterAutoUpgrade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#channel CsManagedKubernetes#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#enabled CsManagedKubernetes#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function csManagedKubernetesOperationPolicyClusterAutoUpgradeToTerraform(struct?: CsManagedKubernetesOperationPolicyClusterAutoUpgradeOutputReference | CsManagedKubernetesOperationPolicyClusterAutoUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function csManagedKubernetesOperationPolicyClusterAutoUpgradeToHclTerraform(struct?: CsManagedKubernetesOperationPolicyClusterAutoUpgradeOutputReference | CsManagedKubernetesOperationPolicyClusterAutoUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsManagedKubernetesOperationPolicyClusterAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsManagedKubernetesOperationPolicyClusterAutoUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesOperationPolicyClusterAutoUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
      this._enabled = value.enabled;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CsManagedKubernetesOperationPolicy {
  /**
  * cluster_auto_upgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#cluster_auto_upgrade CsManagedKubernetes#cluster_auto_upgrade}
  */
  readonly clusterAutoUpgrade?: CsManagedKubernetesOperationPolicyClusterAutoUpgrade;
}

export function csManagedKubernetesOperationPolicyToTerraform(struct?: CsManagedKubernetesOperationPolicyOutputReference | CsManagedKubernetesOperationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_auto_upgrade: csManagedKubernetesOperationPolicyClusterAutoUpgradeToTerraform(struct!.clusterAutoUpgrade),
  }
}


export function csManagedKubernetesOperationPolicyToHclTerraform(struct?: CsManagedKubernetesOperationPolicyOutputReference | CsManagedKubernetesOperationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_auto_upgrade: {
      value: csManagedKubernetesOperationPolicyClusterAutoUpgradeToHclTerraform(struct!.clusterAutoUpgrade),
      isBlock: true,
      type: "list",
      storageClassType: "CsManagedKubernetesOperationPolicyClusterAutoUpgradeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsManagedKubernetesOperationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsManagedKubernetesOperationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterAutoUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAutoUpgrade = this._clusterAutoUpgrade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesOperationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterAutoUpgrade.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterAutoUpgrade.internalValue = value.clusterAutoUpgrade;
    }
  }

  // cluster_auto_upgrade - computed: false, optional: true, required: false
  private _clusterAutoUpgrade = new CsManagedKubernetesOperationPolicyClusterAutoUpgradeOutputReference(this, "cluster_auto_upgrade");
  public get clusterAutoUpgrade() {
    return this._clusterAutoUpgrade;
  }
  public putClusterAutoUpgrade(value: CsManagedKubernetesOperationPolicyClusterAutoUpgrade) {
    this._clusterAutoUpgrade.internalValue = value;
  }
  public resetClusterAutoUpgrade() {
    this._clusterAutoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAutoUpgradeInput() {
    return this._clusterAutoUpgrade.internalValue;
  }
}
export interface CsManagedKubernetesTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#effect CsManagedKubernetes#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#key CsManagedKubernetes#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#value CsManagedKubernetes#value}
  */
  readonly value?: string;
}

export function csManagedKubernetesTaintsToTerraform(struct?: CsManagedKubernetesTaints | cdktf.IResolvable): any {
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


export function csManagedKubernetesTaintsToHclTerraform(struct?: CsManagedKubernetesTaints | cdktf.IResolvable): any {
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

export class CsManagedKubernetesTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsManagedKubernetesTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsManagedKubernetesTaints | cdktf.IResolvable | undefined) {
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

export class CsManagedKubernetesTaintsList extends cdktf.ComplexList {
  public internalValue? : CsManagedKubernetesTaints[] | cdktf.IResolvable

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
  public get(index: number): CsManagedKubernetesTaintsOutputReference {
    return new CsManagedKubernetesTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsManagedKubernetesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#create CsManagedKubernetes#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#delete CsManagedKubernetes#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#update CsManagedKubernetes#update}
  */
  readonly update?: string;
}

export function csManagedKubernetesTimeoutsToTerraform(struct?: CsManagedKubernetesTimeouts | cdktf.IResolvable): any {
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


export function csManagedKubernetesTimeoutsToHclTerraform(struct?: CsManagedKubernetesTimeouts | cdktf.IResolvable): any {
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

export class CsManagedKubernetesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsManagedKubernetesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsManagedKubernetesTimeouts | cdktf.IResolvable | undefined) {
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
export interface CsManagedKubernetesWorkerDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#auto_snapshot_policy_id CsManagedKubernetes#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#category CsManagedKubernetes#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#device CsManagedKubernetes#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#encrypted CsManagedKubernetes#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#kms_key_id CsManagedKubernetes#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#name CsManagedKubernetes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#performance_level CsManagedKubernetes#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#size CsManagedKubernetes#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#snapshot_id CsManagedKubernetes#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function csManagedKubernetesWorkerDataDisksToTerraform(struct?: CsManagedKubernetesWorkerDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_snapshot_policy_id: cdktf.stringToTerraform(struct!.autoSnapshotPolicyId),
    category: cdktf.stringToTerraform(struct!.category),
    device: cdktf.stringToTerraform(struct!.device),
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    size: cdktf.stringToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function csManagedKubernetesWorkerDataDisksToHclTerraform(struct?: CsManagedKubernetesWorkerDataDisks | cdktf.IResolvable): any {
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
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
      value: cdktf.stringToHclTerraform(struct!.size),
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

export class CsManagedKubernetesWorkerDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsManagedKubernetesWorkerDataDisks | cdktf.IResolvable | undefined {
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
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesWorkerDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSnapshotPolicyId = undefined;
      this._category = undefined;
      this._device = undefined;
      this._encrypted = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._performanceLevel = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
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
      this._device = value.device;
      this._encrypted = value.encrypted;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._performanceLevel = value.performanceLevel;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
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
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

export class CsManagedKubernetesWorkerDataDisksList extends cdktf.ComplexList {
  public internalValue? : CsManagedKubernetesWorkerDataDisks[] | cdktf.IResolvable

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
  public get(index: number): CsManagedKubernetesWorkerDataDisksOutputReference {
    return new CsManagedKubernetesWorkerDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsManagedKubernetesWorkerNodes {
}

export function csManagedKubernetesWorkerNodesToTerraform(struct?: CsManagedKubernetesWorkerNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function csManagedKubernetesWorkerNodesToHclTerraform(struct?: CsManagedKubernetesWorkerNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CsManagedKubernetesWorkerNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsManagedKubernetesWorkerNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsManagedKubernetesWorkerNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CsManagedKubernetesWorkerNodesList extends cdktf.ComplexList {
  public internalValue? : CsManagedKubernetesWorkerNodes[] | cdktf.IResolvable

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
  public get(index: number): CsManagedKubernetesWorkerNodesOutputReference {
    return new CsManagedKubernetesWorkerNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes alicloud_cs_managed_kubernetes}
*/
export class CsManagedKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cs_managed_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsManagedKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsManagedKubernetes to import
  * @param importFromId The id of the existing CsManagedKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsManagedKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cs_managed_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cs_managed_kubernetes alicloud_cs_managed_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsManagedKubernetesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CsManagedKubernetesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cs_managed_kubernetes',
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
    this._apiAudiences = config.apiAudiences;
    this._availabilityZone = config.availabilityZone;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._clusterCaCert = config.clusterCaCert;
    this._clusterDomain = config.clusterDomain;
    this._clusterNetworkType = config.clusterNetworkType;
    this._clusterSpec = config.clusterSpec;
    this._controlPlaneLogComponents = config.controlPlaneLogComponents;
    this._controlPlaneLogProject = config.controlPlaneLogProject;
    this._controlPlaneLogTtl = config.controlPlaneLogTtl;
    this._cpuPolicy = config.cpuPolicy;
    this._customSan = config.customSan;
    this._deletionProtection = config.deletionProtection;
    this._enableRrsa = config.enableRrsa;
    this._enableSsh = config.enableSsh;
    this._encryptionProviderKey = config.encryptionProviderKey;
    this._excludeAutoscalerNodes = config.excludeAutoscalerNodes;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._imageId = config.imageId;
    this._installCloudMonitor = config.installCloudMonitor;
    this._ipStack = config.ipStack;
    this._isEnterpriseSecurityGroup = config.isEnterpriseSecurityGroup;
    this._keyName = config.keyName;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._kubeConfig = config.kubeConfig;
    this._loadBalancerSpec = config.loadBalancerSpec;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._newNatGateway = config.newNatGateway;
    this._nodeCidrMask = config.nodeCidrMask;
    this._nodeNameMode = config.nodeNameMode;
    this._nodePortRange = config.nodePortRange;
    this._osType = config.osType;
    this._password = config.password;
    this._platform = config.platform;
    this._podCidr = config.podCidr;
    this._podVswitchIds = config.podVswitchIds;
    this._profile = config.profile;
    this._proxyMode = config.proxyMode;
    this._rdsInstances = config.rdsInstances;
    this._resourceGroupId = config.resourceGroupId;
    this._retainResources = config.retainResources;
    this._runtime = config.runtime;
    this._securityGroupId = config.securityGroupId;
    this._serviceAccountIssuer = config.serviceAccountIssuer;
    this._serviceCidr = config.serviceCidr;
    this._skipSetCertificateAuthority = config.skipSetCertificateAuthority;
    this._slbInternetEnabled = config.slbInternetEnabled;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._userCa = config.userCa;
    this._userData = config.userData;
    this._version = config.version;
    this._vswitchIds = config.vswitchIds;
    this._workerAutoRenew = config.workerAutoRenew;
    this._workerAutoRenewPeriod = config.workerAutoRenewPeriod;
    this._workerDataDiskCategory = config.workerDataDiskCategory;
    this._workerDataDiskSize = config.workerDataDiskSize;
    this._workerDiskCategory = config.workerDiskCategory;
    this._workerDiskPerformanceLevel = config.workerDiskPerformanceLevel;
    this._workerDiskSize = config.workerDiskSize;
    this._workerDiskSnapshotPolicyId = config.workerDiskSnapshotPolicyId;
    this._workerInstanceChargeType = config.workerInstanceChargeType;
    this._workerInstanceType = config.workerInstanceType;
    this._workerInstanceTypes = config.workerInstanceTypes;
    this._workerNumber = config.workerNumber;
    this._workerNumbers = config.workerNumbers;
    this._workerPeriod = config.workerPeriod;
    this._workerPeriodUnit = config.workerPeriodUnit;
    this._workerVswitchIds = config.workerVswitchIds;
    this._zoneIds = config.zoneIds;
    this._addons.internalValue = config.addons;
    this._auditLogConfig.internalValue = config.auditLogConfig;
    this._autoMode.internalValue = config.autoMode;
    this._deleteOptions.internalValue = config.deleteOptions;
    this._logConfig.internalValue = config.logConfig;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._operationPolicy.internalValue = config.operationPolicy;
    this._taints.internalValue = config.taints;
    this._timeouts.internalValue = config.timeouts;
    this._workerDataDisks.internalValue = config.workerDataDisks;
    this._workerNodes.internalValue = config.workerNodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_audiences - computed: false, optional: true, required: false
  private _apiAudiences?: string[]; 
  public get apiAudiences() {
    return this.getListAttribute('api_audiences');
  }
  public set apiAudiences(value: string[]) {
    this._apiAudiences = value;
  }
  public resetApiAudiences() {
    this._apiAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAudiencesInput() {
    return this._apiAudiences;
  }

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

  // certificate_authority - computed: true, optional: false, required: false
  private _certificateAuthority = new cdktf.StringMap(this, "certificate_authority");
  public get certificateAuthority() {
    return this._certificateAuthority;
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

  // cluster_domain - computed: false, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // cluster_network_type - computed: false, optional: true, required: false
  private _clusterNetworkType?: string; 
  public get clusterNetworkType() {
    return this.getStringAttribute('cluster_network_type');
  }
  public set clusterNetworkType(value: string) {
    this._clusterNetworkType = value;
  }
  public resetClusterNetworkType() {
    this._clusterNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkTypeInput() {
    return this._clusterNetworkType;
  }

  // cluster_spec - computed: true, optional: true, required: false
  private _clusterSpec?: string; 
  public get clusterSpec() {
    return this.getStringAttribute('cluster_spec');
  }
  public set clusterSpec(value: string) {
    this._clusterSpec = value;
  }
  public resetClusterSpec() {
    this._clusterSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSpecInput() {
    return this._clusterSpec;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new cdktf.StringMap(this, "connections");
  public get connections() {
    return this._connections;
  }

  // control_plane_log_components - computed: false, optional: true, required: false
  private _controlPlaneLogComponents?: string[]; 
  public get controlPlaneLogComponents() {
    return this.getListAttribute('control_plane_log_components');
  }
  public set controlPlaneLogComponents(value: string[]) {
    this._controlPlaneLogComponents = value;
  }
  public resetControlPlaneLogComponents() {
    this._controlPlaneLogComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneLogComponentsInput() {
    return this._controlPlaneLogComponents;
  }

  // control_plane_log_project - computed: true, optional: true, required: false
  private _controlPlaneLogProject?: string; 
  public get controlPlaneLogProject() {
    return this.getStringAttribute('control_plane_log_project');
  }
  public set controlPlaneLogProject(value: string) {
    this._controlPlaneLogProject = value;
  }
  public resetControlPlaneLogProject() {
    this._controlPlaneLogProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneLogProjectInput() {
    return this._controlPlaneLogProject;
  }

  // control_plane_log_ttl - computed: true, optional: true, required: false
  private _controlPlaneLogTtl?: string; 
  public get controlPlaneLogTtl() {
    return this.getStringAttribute('control_plane_log_ttl');
  }
  public set controlPlaneLogTtl(value: string) {
    this._controlPlaneLogTtl = value;
  }
  public resetControlPlaneLogTtl() {
    this._controlPlaneLogTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneLogTtlInput() {
    return this._controlPlaneLogTtl;
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

  // custom_san - computed: false, optional: true, required: false
  private _customSan?: string; 
  public get customSan() {
    return this.getStringAttribute('custom_san');
  }
  public set customSan(value: string) {
    this._customSan = value;
  }
  public resetCustomSan() {
    this._customSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSanInput() {
    return this._customSan;
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // enable_rrsa - computed: false, optional: true, required: false
  private _enableRrsa?: boolean | cdktf.IResolvable; 
  public get enableRrsa() {
    return this.getBooleanAttribute('enable_rrsa');
  }
  public set enableRrsa(value: boolean | cdktf.IResolvable) {
    this._enableRrsa = value;
  }
  public resetEnableRrsa() {
    this._enableRrsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRrsaInput() {
    return this._enableRrsa;
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

  // encryption_provider_key - computed: false, optional: true, required: false
  private _encryptionProviderKey?: string; 
  public get encryptionProviderKey() {
    return this.getStringAttribute('encryption_provider_key');
  }
  public set encryptionProviderKey(value: string) {
    this._encryptionProviderKey = value;
  }
  public resetEncryptionProviderKey() {
    this._encryptionProviderKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionProviderKeyInput() {
    return this._encryptionProviderKey;
  }

  // exclude_autoscaler_nodes - computed: false, optional: true, required: false
  private _excludeAutoscalerNodes?: boolean | cdktf.IResolvable; 
  public get excludeAutoscalerNodes() {
    return this.getBooleanAttribute('exclude_autoscaler_nodes');
  }
  public set excludeAutoscalerNodes(value: boolean | cdktf.IResolvable) {
    this._excludeAutoscalerNodes = value;
  }
  public resetExcludeAutoscalerNodes() {
    this._excludeAutoscalerNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAutoscalerNodesInput() {
    return this._excludeAutoscalerNodes;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // install_cloud_monitor - computed: true, optional: true, required: false
  private _installCloudMonitor?: boolean | cdktf.IResolvable; 
  public get installCloudMonitor() {
    return this.getBooleanAttribute('install_cloud_monitor');
  }
  public set installCloudMonitor(value: boolean | cdktf.IResolvable) {
    this._installCloudMonitor = value;
  }
  public resetInstallCloudMonitor() {
    this._installCloudMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installCloudMonitorInput() {
    return this._installCloudMonitor;
  }

  // ip_stack - computed: true, optional: true, required: false
  private _ipStack?: string; 
  public get ipStack() {
    return this.getStringAttribute('ip_stack');
  }
  public set ipStack(value: string) {
    this._ipStack = value;
  }
  public resetIpStack() {
    this._ipStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStackInput() {
    return this._ipStack;
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

  // load_balancer_spec - computed: true, optional: true, required: false
  private _loadBalancerSpec?: string; 
  public get loadBalancerSpec() {
    return this.getStringAttribute('load_balancer_spec');
  }
  public set loadBalancerSpec(value: string) {
    this._loadBalancerSpec = value;
  }
  public resetLoadBalancerSpec() {
    this._loadBalancerSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSpecInput() {
    return this._loadBalancerSpec;
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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
  private _nodeCidrMask?: number; 
  public get nodeCidrMask() {
    return this.getNumberAttribute('node_cidr_mask');
  }
  public set nodeCidrMask(value: number) {
    this._nodeCidrMask = value;
  }
  public resetNodeCidrMask() {
    this._nodeCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCidrMaskInput() {
    return this._nodeCidrMask;
  }

  // node_name_mode - computed: false, optional: true, required: false
  private _nodeNameMode?: string; 
  public get nodeNameMode() {
    return this.getStringAttribute('node_name_mode');
  }
  public set nodeNameMode(value: string) {
    this._nodeNameMode = value;
  }
  public resetNodeNameMode() {
    this._nodeNameMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameModeInput() {
    return this._nodeNameMode;
  }

  // node_port_range - computed: true, optional: true, required: false
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

  // platform - computed: true, optional: true, required: false
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
    return this.getListAttribute('pod_vswitch_ids');
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

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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

  // rds_instances - computed: false, optional: true, required: false
  private _rdsInstances?: string[]; 
  public get rdsInstances() {
    return this.getListAttribute('rds_instances');
  }
  public set rdsInstances(value: string[]) {
    this._rdsInstances = value;
  }
  public resetRdsInstances() {
    this._rdsInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInstancesInput() {
    return this._rdsInstances;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // retain_resources - computed: false, optional: true, required: false
  private _retainResources?: string[]; 
  public get retainResources() {
    return this.getListAttribute('retain_resources');
  }
  public set retainResources(value: string[]) {
    this._retainResources = value;
  }
  public resetRetainResources() {
    this._retainResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainResourcesInput() {
    return this._retainResources;
  }

  // rrsa_metadata - computed: true, optional: false, required: false
  private _rrsaMetadata = new CsManagedKubernetesRrsaMetadataList(this, "rrsa_metadata", false);
  public get rrsaMetadata() {
    return this._rrsaMetadata;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: { [key: string]: string }; 
  public get runtime() {
    return this.getStringMapAttribute('runtime');
  }
  public set runtime(value: { [key: string]: string }) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
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

  // service_account_issuer - computed: false, optional: true, required: false
  private _serviceAccountIssuer?: string; 
  public get serviceAccountIssuer() {
    return this.getStringAttribute('service_account_issuer');
  }
  public set serviceAccountIssuer(value: string) {
    this._serviceAccountIssuer = value;
  }
  public resetServiceAccountIssuer() {
    this._serviceAccountIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIssuerInput() {
    return this._serviceAccountIssuer;
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

  // skip_set_certificate_authority - computed: false, optional: true, required: false
  private _skipSetCertificateAuthority?: boolean | cdktf.IResolvable; 
  public get skipSetCertificateAuthority() {
    return this.getBooleanAttribute('skip_set_certificate_authority');
  }
  public set skipSetCertificateAuthority(value: boolean | cdktf.IResolvable) {
    this._skipSetCertificateAuthority = value;
  }
  public resetSkipSetCertificateAuthority() {
    this._skipSetCertificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSetCertificateAuthorityInput() {
    return this._skipSetCertificateAuthority;
  }

  // slb_id - computed: true, optional: false, required: false
  public get slbId() {
    return this.getStringAttribute('slb_id');
  }

  // slb_internet - computed: true, optional: false, required: false
  public get slbInternet() {
    return this.getStringAttribute('slb_internet');
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // user_ca - computed: false, optional: true, required: false
  private _userCa?: string; 
  public get userCa() {
    return this.getStringAttribute('user_ca');
  }
  public set userCa(value: string) {
    this._userCa = value;
  }
  public resetUserCa() {
    this._userCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCaInput() {
    return this._userCa;
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_ids - computed: true, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // worker_auto_renew - computed: false, optional: true, required: false
  private _workerAutoRenew?: boolean | cdktf.IResolvable; 
  public get workerAutoRenew() {
    return this.getBooleanAttribute('worker_auto_renew');
  }
  public set workerAutoRenew(value: boolean | cdktf.IResolvable) {
    this._workerAutoRenew = value;
  }
  public resetWorkerAutoRenew() {
    this._workerAutoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAutoRenewInput() {
    return this._workerAutoRenew;
  }

  // worker_auto_renew_period - computed: true, optional: true, required: false
  private _workerAutoRenewPeriod?: number; 
  public get workerAutoRenewPeriod() {
    return this.getNumberAttribute('worker_auto_renew_period');
  }
  public set workerAutoRenewPeriod(value: number) {
    this._workerAutoRenewPeriod = value;
  }
  public resetWorkerAutoRenewPeriod() {
    this._workerAutoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAutoRenewPeriodInput() {
    return this._workerAutoRenewPeriod;
  }

  // worker_data_disk_category - computed: false, optional: true, required: false
  private _workerDataDiskCategory?: string; 
  public get workerDataDiskCategory() {
    return this.getStringAttribute('worker_data_disk_category');
  }
  public set workerDataDiskCategory(value: string) {
    this._workerDataDiskCategory = value;
  }
  public resetWorkerDataDiskCategory() {
    this._workerDataDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDataDiskCategoryInput() {
    return this._workerDataDiskCategory;
  }

  // worker_data_disk_size - computed: false, optional: true, required: false
  private _workerDataDiskSize?: number; 
  public get workerDataDiskSize() {
    return this.getNumberAttribute('worker_data_disk_size');
  }
  public set workerDataDiskSize(value: number) {
    this._workerDataDiskSize = value;
  }
  public resetWorkerDataDiskSize() {
    this._workerDataDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDataDiskSizeInput() {
    return this._workerDataDiskSize;
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

  // worker_disk_performance_level - computed: false, optional: true, required: false
  private _workerDiskPerformanceLevel?: string; 
  public get workerDiskPerformanceLevel() {
    return this.getStringAttribute('worker_disk_performance_level');
  }
  public set workerDiskPerformanceLevel(value: string) {
    this._workerDiskPerformanceLevel = value;
  }
  public resetWorkerDiskPerformanceLevel() {
    this._workerDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskPerformanceLevelInput() {
    return this._workerDiskPerformanceLevel;
  }

  // worker_disk_size - computed: true, optional: true, required: false
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

  // worker_disk_snapshot_policy_id - computed: false, optional: true, required: false
  private _workerDiskSnapshotPolicyId?: string; 
  public get workerDiskSnapshotPolicyId() {
    return this.getStringAttribute('worker_disk_snapshot_policy_id');
  }
  public set workerDiskSnapshotPolicyId(value: string) {
    this._workerDiskSnapshotPolicyId = value;
  }
  public resetWorkerDiskSnapshotPolicyId() {
    this._workerDiskSnapshotPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDiskSnapshotPolicyIdInput() {
    return this._workerDiskSnapshotPolicyId;
  }

  // worker_instance_charge_type - computed: true, optional: true, required: false
  private _workerInstanceChargeType?: string; 
  public get workerInstanceChargeType() {
    return this.getStringAttribute('worker_instance_charge_type');
  }
  public set workerInstanceChargeType(value: string) {
    this._workerInstanceChargeType = value;
  }
  public resetWorkerInstanceChargeType() {
    this._workerInstanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInstanceChargeTypeInput() {
    return this._workerInstanceChargeType;
  }

  // worker_instance_type - computed: false, optional: true, required: false
  private _workerInstanceType?: string; 
  public get workerInstanceType() {
    return this.getStringAttribute('worker_instance_type');
  }
  public set workerInstanceType(value: string) {
    this._workerInstanceType = value;
  }
  public resetWorkerInstanceType() {
    this._workerInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInstanceTypeInput() {
    return this._workerInstanceType;
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

  // worker_number - computed: false, optional: true, required: false
  private _workerNumber?: number; 
  public get workerNumber() {
    return this.getNumberAttribute('worker_number');
  }
  public set workerNumber(value: number) {
    this._workerNumber = value;
  }
  public resetWorkerNumber() {
    this._workerNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNumberInput() {
    return this._workerNumber;
  }

  // worker_numbers - computed: false, optional: true, required: false
  private _workerNumbers?: number[]; 
  public get workerNumbers() {
    return this.getNumberListAttribute('worker_numbers');
  }
  public set workerNumbers(value: number[]) {
    this._workerNumbers = value;
  }
  public resetWorkerNumbers() {
    this._workerNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNumbersInput() {
    return this._workerNumbers;
  }

  // worker_period - computed: true, optional: true, required: false
  private _workerPeriod?: number; 
  public get workerPeriod() {
    return this.getNumberAttribute('worker_period');
  }
  public set workerPeriod(value: number) {
    this._workerPeriod = value;
  }
  public resetWorkerPeriod() {
    this._workerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPeriodInput() {
    return this._workerPeriod;
  }

  // worker_period_unit - computed: true, optional: true, required: false
  private _workerPeriodUnit?: string; 
  public get workerPeriodUnit() {
    return this.getStringAttribute('worker_period_unit');
  }
  public set workerPeriodUnit(value: string) {
    this._workerPeriodUnit = value;
  }
  public resetWorkerPeriodUnit() {
    this._workerPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPeriodUnitInput() {
    return this._workerPeriodUnit;
  }

  // worker_ram_role_name - computed: true, optional: false, required: false
  public get workerRamRoleName() {
    return this.getStringAttribute('worker_ram_role_name');
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

  // zone_ids - computed: false, optional: true, required: false
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return this.getListAttribute('zone_ids');
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  public resetZoneIds() {
    this._zoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new CsManagedKubernetesAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: CsManagedKubernetesAddons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // audit_log_config - computed: false, optional: true, required: false
  private _auditLogConfig = new CsManagedKubernetesAuditLogConfigOutputReference(this, "audit_log_config");
  public get auditLogConfig() {
    return this._auditLogConfig;
  }
  public putAuditLogConfig(value: CsManagedKubernetesAuditLogConfig) {
    this._auditLogConfig.internalValue = value;
  }
  public resetAuditLogConfig() {
    this._auditLogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigInput() {
    return this._auditLogConfig.internalValue;
  }

  // auto_mode - computed: false, optional: true, required: false
  private _autoMode = new CsManagedKubernetesAutoModeOutputReference(this, "auto_mode");
  public get autoMode() {
    return this._autoMode;
  }
  public putAutoMode(value: CsManagedKubernetesAutoMode) {
    this._autoMode.internalValue = value;
  }
  public resetAutoMode() {
    this._autoMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoModeInput() {
    return this._autoMode.internalValue;
  }

  // delete_options - computed: false, optional: true, required: false
  private _deleteOptions = new CsManagedKubernetesDeleteOptionsList(this, "delete_options", false);
  public get deleteOptions() {
    return this._deleteOptions;
  }
  public putDeleteOptions(value: CsManagedKubernetesDeleteOptions[] | cdktf.IResolvable) {
    this._deleteOptions.internalValue = value;
  }
  public resetDeleteOptions() {
    this._deleteOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionsInput() {
    return this._deleteOptions.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new CsManagedKubernetesLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: CsManagedKubernetesLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new CsManagedKubernetesMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: CsManagedKubernetesMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // operation_policy - computed: false, optional: true, required: false
  private _operationPolicy = new CsManagedKubernetesOperationPolicyOutputReference(this, "operation_policy");
  public get operationPolicy() {
    return this._operationPolicy;
  }
  public putOperationPolicy(value: CsManagedKubernetesOperationPolicy) {
    this._operationPolicy.internalValue = value;
  }
  public resetOperationPolicy() {
    this._operationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationPolicyInput() {
    return this._operationPolicy.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new CsManagedKubernetesTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: CsManagedKubernetesTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsManagedKubernetesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsManagedKubernetesTimeouts) {
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
  private _workerDataDisks = new CsManagedKubernetesWorkerDataDisksList(this, "worker_data_disks", false);
  public get workerDataDisks() {
    return this._workerDataDisks;
  }
  public putWorkerDataDisks(value: CsManagedKubernetesWorkerDataDisks[] | cdktf.IResolvable) {
    this._workerDataDisks.internalValue = value;
  }
  public resetWorkerDataDisks() {
    this._workerDataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDataDisksInput() {
    return this._workerDataDisks.internalValue;
  }

  // worker_nodes - computed: false, optional: true, required: false
  private _workerNodes = new CsManagedKubernetesWorkerNodesList(this, "worker_nodes", false);
  public get workerNodes() {
    return this._workerNodes;
  }
  public putWorkerNodes(value: CsManagedKubernetesWorkerNodes[] | cdktf.IResolvable) {
    this._workerNodes.internalValue = value;
  }
  public resetWorkerNodes() {
    this._workerNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodesInput() {
    return this._workerNodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiAudiences),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cluster_ca_cert: cdktf.stringToTerraform(this._clusterCaCert),
      cluster_domain: cdktf.stringToTerraform(this._clusterDomain),
      cluster_network_type: cdktf.stringToTerraform(this._clusterNetworkType),
      cluster_spec: cdktf.stringToTerraform(this._clusterSpec),
      control_plane_log_components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlPlaneLogComponents),
      control_plane_log_project: cdktf.stringToTerraform(this._controlPlaneLogProject),
      control_plane_log_ttl: cdktf.stringToTerraform(this._controlPlaneLogTtl),
      cpu_policy: cdktf.stringToTerraform(this._cpuPolicy),
      custom_san: cdktf.stringToTerraform(this._customSan),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enable_rrsa: cdktf.booleanToTerraform(this._enableRrsa),
      enable_ssh: cdktf.booleanToTerraform(this._enableSsh),
      encryption_provider_key: cdktf.stringToTerraform(this._encryptionProviderKey),
      exclude_autoscaler_nodes: cdktf.booleanToTerraform(this._excludeAutoscalerNodes),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      install_cloud_monitor: cdktf.booleanToTerraform(this._installCloudMonitor),
      ip_stack: cdktf.stringToTerraform(this._ipStack),
      is_enterprise_security_group: cdktf.booleanToTerraform(this._isEnterpriseSecurityGroup),
      key_name: cdktf.stringToTerraform(this._keyName),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      kube_config: cdktf.stringToTerraform(this._kubeConfig),
      load_balancer_spec: cdktf.stringToTerraform(this._loadBalancerSpec),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      new_nat_gateway: cdktf.booleanToTerraform(this._newNatGateway),
      node_cidr_mask: cdktf.numberToTerraform(this._nodeCidrMask),
      node_name_mode: cdktf.stringToTerraform(this._nodeNameMode),
      node_port_range: cdktf.stringToTerraform(this._nodePortRange),
      os_type: cdktf.stringToTerraform(this._osType),
      password: cdktf.stringToTerraform(this._password),
      platform: cdktf.stringToTerraform(this._platform),
      pod_cidr: cdktf.stringToTerraform(this._podCidr),
      pod_vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._podVswitchIds),
      profile: cdktf.stringToTerraform(this._profile),
      proxy_mode: cdktf.stringToTerraform(this._proxyMode),
      rds_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rdsInstances),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      retain_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retainResources),
      runtime: cdktf.hashMapper(cdktf.stringToTerraform)(this._runtime),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      service_account_issuer: cdktf.stringToTerraform(this._serviceAccountIssuer),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      skip_set_certificate_authority: cdktf.booleanToTerraform(this._skipSetCertificateAuthority),
      slb_internet_enabled: cdktf.booleanToTerraform(this._slbInternetEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      user_ca: cdktf.stringToTerraform(this._userCa),
      user_data: cdktf.stringToTerraform(this._userData),
      version: cdktf.stringToTerraform(this._version),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      worker_auto_renew: cdktf.booleanToTerraform(this._workerAutoRenew),
      worker_auto_renew_period: cdktf.numberToTerraform(this._workerAutoRenewPeriod),
      worker_data_disk_category: cdktf.stringToTerraform(this._workerDataDiskCategory),
      worker_data_disk_size: cdktf.numberToTerraform(this._workerDataDiskSize),
      worker_disk_category: cdktf.stringToTerraform(this._workerDiskCategory),
      worker_disk_performance_level: cdktf.stringToTerraform(this._workerDiskPerformanceLevel),
      worker_disk_size: cdktf.numberToTerraform(this._workerDiskSize),
      worker_disk_snapshot_policy_id: cdktf.stringToTerraform(this._workerDiskSnapshotPolicyId),
      worker_instance_charge_type: cdktf.stringToTerraform(this._workerInstanceChargeType),
      worker_instance_type: cdktf.stringToTerraform(this._workerInstanceType),
      worker_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerInstanceTypes),
      worker_number: cdktf.numberToTerraform(this._workerNumber),
      worker_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._workerNumbers),
      worker_period: cdktf.numberToTerraform(this._workerPeriod),
      worker_period_unit: cdktf.stringToTerraform(this._workerPeriodUnit),
      worker_vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerVswitchIds),
      zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zoneIds),
      addons: cdktf.listMapper(csManagedKubernetesAddonsToTerraform, true)(this._addons.internalValue),
      audit_log_config: csManagedKubernetesAuditLogConfigToTerraform(this._auditLogConfig.internalValue),
      auto_mode: csManagedKubernetesAutoModeToTerraform(this._autoMode.internalValue),
      delete_options: cdktf.listMapper(csManagedKubernetesDeleteOptionsToTerraform, true)(this._deleteOptions.internalValue),
      log_config: csManagedKubernetesLogConfigToTerraform(this._logConfig.internalValue),
      maintenance_window: csManagedKubernetesMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      operation_policy: csManagedKubernetesOperationPolicyToTerraform(this._operationPolicy.internalValue),
      taints: cdktf.listMapper(csManagedKubernetesTaintsToTerraform, true)(this._taints.internalValue),
      timeouts: csManagedKubernetesTimeoutsToTerraform(this._timeouts.internalValue),
      worker_data_disks: cdktf.listMapper(csManagedKubernetesWorkerDataDisksToTerraform, true)(this._workerDataDisks.internalValue),
      worker_nodes: cdktf.listMapper(csManagedKubernetesWorkerNodesToTerraform, true)(this._workerNodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_audiences: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiAudiences),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      cluster_ca_cert: {
        value: cdktf.stringToHclTerraform(this._clusterCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_domain: {
        value: cdktf.stringToHclTerraform(this._clusterDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_network_type: {
        value: cdktf.stringToHclTerraform(this._clusterNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_spec: {
        value: cdktf.stringToHclTerraform(this._clusterSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_log_components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controlPlaneLogComponents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      control_plane_log_project: {
        value: cdktf.stringToHclTerraform(this._controlPlaneLogProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_log_ttl: {
        value: cdktf.stringToHclTerraform(this._controlPlaneLogTtl),
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
      custom_san: {
        value: cdktf.stringToHclTerraform(this._customSan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rrsa: {
        value: cdktf.booleanToHclTerraform(this._enableRrsa),
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
      encryption_provider_key: {
        value: cdktf.stringToHclTerraform(this._encryptionProviderKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_autoscaler_nodes: {
        value: cdktf.booleanToHclTerraform(this._excludeAutoscalerNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
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
      install_cloud_monitor: {
        value: cdktf.booleanToHclTerraform(this._installCloudMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_stack: {
        value: cdktf.stringToHclTerraform(this._ipStack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enterprise_security_group: {
        value: cdktf.booleanToHclTerraform(this._isEnterpriseSecurityGroup),
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
      load_balancer_spec: {
        value: cdktf.stringToHclTerraform(this._loadBalancerSpec),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
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
        value: cdktf.numberToHclTerraform(this._nodeCidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_name_mode: {
        value: cdktf.stringToHclTerraform(this._nodeNameMode),
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
        type: "list",
        storageClassType: "stringList",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_mode: {
        value: cdktf.stringToHclTerraform(this._proxyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rds_instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rdsInstances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retainResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      runtime: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._runtime),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_issuer: {
        value: cdktf.stringToHclTerraform(this._serviceAccountIssuer),
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
      skip_set_certificate_authority: {
        value: cdktf.booleanToHclTerraform(this._skipSetCertificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ca: {
        value: cdktf.stringToHclTerraform(this._userCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      worker_auto_renew: {
        value: cdktf.booleanToHclTerraform(this._workerAutoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      worker_auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._workerAutoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_data_disk_category: {
        value: cdktf.stringToHclTerraform(this._workerDataDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_data_disk_size: {
        value: cdktf.numberToHclTerraform(this._workerDataDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_disk_category: {
        value: cdktf.stringToHclTerraform(this._workerDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._workerDiskPerformanceLevel),
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
      worker_disk_snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._workerDiskSnapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._workerInstanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_instance_type: {
        value: cdktf.stringToHclTerraform(this._workerInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerInstanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      worker_number: {
        value: cdktf.numberToHclTerraform(this._workerNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_numbers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._workerNumbers),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      worker_period: {
        value: cdktf.numberToHclTerraform(this._workerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_period_unit: {
        value: cdktf.stringToHclTerraform(this._workerPeriodUnit),
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
      zone_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zoneIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      addons: {
        value: cdktf.listMapperHcl(csManagedKubernetesAddonsToHclTerraform, true)(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesAddonsList",
      },
      audit_log_config: {
        value: csManagedKubernetesAuditLogConfigToHclTerraform(this._auditLogConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesAuditLogConfigList",
      },
      auto_mode: {
        value: csManagedKubernetesAutoModeToHclTerraform(this._autoMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesAutoModeList",
      },
      delete_options: {
        value: cdktf.listMapperHcl(csManagedKubernetesDeleteOptionsToHclTerraform, true)(this._deleteOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesDeleteOptionsList",
      },
      log_config: {
        value: csManagedKubernetesLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesLogConfigList",
      },
      maintenance_window: {
        value: csManagedKubernetesMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesMaintenanceWindowList",
      },
      operation_policy: {
        value: csManagedKubernetesOperationPolicyToHclTerraform(this._operationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesOperationPolicyList",
      },
      taints: {
        value: cdktf.listMapperHcl(csManagedKubernetesTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesTaintsList",
      },
      timeouts: {
        value: csManagedKubernetesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsManagedKubernetesTimeouts",
      },
      worker_data_disks: {
        value: cdktf.listMapperHcl(csManagedKubernetesWorkerDataDisksToHclTerraform, true)(this._workerDataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesWorkerDataDisksList",
      },
      worker_nodes: {
        value: cdktf.listMapperHcl(csManagedKubernetesWorkerNodesToHclTerraform, true)(this._workerNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsManagedKubernetesWorkerNodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
