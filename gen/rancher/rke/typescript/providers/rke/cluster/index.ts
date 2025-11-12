// https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * RKE k8s cluster addon deployment timeout in seconds for status check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#addon_job_timeout Cluster#addon_job_timeout}
  */
  readonly addonJobTimeout?: number;
  /**
  * RKE k8s cluster user addons YAML manifest to be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#addons Cluster#addons}
  */
  readonly addons?: string;
  /**
  * RKE k8s cluster user addons YAML manifest urls or paths to be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#addons_include Cluster#addons_include}
  */
  readonly addonsInclude?: string[];
  /**
  * Specify a certificate dir path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cert_dir Cluster#cert_dir}
  */
  readonly certDir?: string;
  /**
  * RKE k8s cluster name used in the kube config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cluster_name Cluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * RKE k8s cluster config yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cluster_yaml Cluster#cluster_yaml}
  */
  readonly clusterYaml?: string;
  /**
  * Use custom certificates from a cert dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#custom_certs Cluster#custom_certs}
  */
  readonly customCerts?: boolean | cdktf.IResolvable;
  /**
  * RKE k8s cluster delay on creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#delay_on_creation Cluster#delay_on_creation}
  */
  readonly delayOnCreation?: number;
  /**
  * RKE k8s cluster dind (experimental)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#dind Cluster#dind}
  */
  readonly dind?: boolean | cdktf.IResolvable;
  /**
  * RKE k8s cluster dind storage driver (experimental)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#dind_dns_server Cluster#dind_dns_server}
  */
  readonly dindDnsServer?: string;
  /**
  * RKE k8s cluster dind storage driver (experimental)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#dind_storage_driver Cluster#dind_storage_driver}
  */
  readonly dindStorageDriver?: string;
  /**
  * Enable/Disable RKE k8s cluster port checking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#disable_port_check Cluster#disable_port_check}
  */
  readonly disablePortCheck?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable CRI dockerd for kubelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enable_cri_dockerd Cluster#enable_cri_dockerd}
  */
  readonly enableCriDockerd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable/Disable RKE k8s cluster strict docker version checking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ignore_docker_version Cluster#ignore_docker_version}
  */
  readonly ignoreDockerVersion?: boolean | cdktf.IResolvable;
  /**
  * K8s version to deploy (if kubernetes image is specified, image version takes precedence)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubernetes_version Cluster#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#nodes_conf Cluster#nodes_conf}
  */
  readonly nodesConf?: string[];
  /**
  * RKE k8s directory path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#prefix_path Cluster#prefix_path}
  */
  readonly prefixPath?: string;
  /**
  * SSH Agent Auth enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_agent_auth Cluster#ssh_agent_auth}
  */
  readonly sshAgentAuth?: boolean | cdktf.IResolvable;
  /**
  * SSH Certificate Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_cert_path Cluster#ssh_cert_path}
  */
  readonly sshCertPath?: string;
  /**
  * SSH Private Key Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_key_path Cluster#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * Skip idempotent deployment of control and etcd plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#update_only Cluster#update_only}
  */
  readonly updateOnly?: boolean | cdktf.IResolvable;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#authentication Cluster#authentication}
  */
  readonly authentication?: ClusterAuthentication;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#authorization Cluster#authorization}
  */
  readonly authorization?: ClusterAuthorization;
  /**
  * bastion_host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#bastion_host Cluster#bastion_host}
  */
  readonly bastionHost?: ClusterBastionHost;
  /**
  * cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider Cluster#cloud_provider}
  */
  readonly cloudProvider?: ClusterCloudProvider;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#dns Cluster#dns}
  */
  readonly dns?: ClusterDns;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ingress Cluster#ingress}
  */
  readonly ingress?: ClusterIngress;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#monitoring Cluster#monitoring}
  */
  readonly monitoring?: ClusterMonitoring;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#network Cluster#network}
  */
  readonly network?: ClusterNetwork;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#nodes Cluster#nodes}
  */
  readonly nodes?: ClusterNodes[] | cdktf.IResolvable;
  /**
  * private_registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#private_registries Cluster#private_registries}
  */
  readonly privateRegistries?: ClusterPrivateRegistries[] | cdktf.IResolvable;
  /**
  * restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#restore Cluster#restore}
  */
  readonly restore?: ClusterRestore;
  /**
  * rotate_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#rotate_certificates Cluster#rotate_certificates}
  */
  readonly rotateCertificates?: ClusterRotateCertificates;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#services Cluster#services}
  */
  readonly services?: ClusterServices;
  /**
  * services_etcd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#services_etcd Cluster#services_etcd}
  */
  readonly servicesEtcd?: ClusterServicesEtcdA;
  /**
  * services_kube_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#services_kube_api Cluster#services_kube_api}
  */
  readonly servicesKubeApi?: ClusterServicesKubeApiA;
  /**
  * services_kube_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#services_kube_controller Cluster#services_kube_controller}
  */
  readonly servicesKubeController?: ClusterServicesKubeControllerA;
  /**
  * services_kubelet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#services_kubelet Cluster#services_kubelet}
  */
  readonly servicesKubelet?: ClusterServicesKubeletA;
  /**
  * services_kubeproxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#services_kubeproxy Cluster#services_kubeproxy}
  */
  readonly servicesKubeproxy?: ClusterServicesKubeproxyA;
  /**
  * services_scheduler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#services_scheduler Cluster#services_scheduler}
  */
  readonly servicesScheduler?: ClusterServicesSchedulerA;
  /**
  * system_images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#system_images Cluster#system_images}
  */
  readonly systemImages?: ClusterSystemImages;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#timeouts Cluster#timeouts}
  */
  readonly timeouts?: ClusterTimeouts;
  /**
  * upgrade_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#upgrade_strategy Cluster#upgrade_strategy}
  */
  readonly upgradeStrategy?: ClusterUpgradeStrategy;
}
export interface ClusterCertificates {
}

export function clusterCertificatesToTerraform(struct?: ClusterCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterCertificatesToHclTerraform(struct?: ClusterCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // config_env_name - computed: true, optional: false, required: false
  public get configEnvName() {
    return this.getStringAttribute('config_env_name');
  }

  // config_path - computed: true, optional: false, required: false
  public get configPath() {
    return this.getStringAttribute('config_path');
  }

  // env_name - computed: true, optional: false, required: false
  public get envName() {
    return this.getStringAttribute('env_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_env_name - computed: true, optional: false, required: false
  public get keyEnvName() {
    return this.getStringAttribute('key_env_name');
  }

  // key_path - computed: true, optional: false, required: false
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ou_name - computed: true, optional: false, required: false
  public get ouName() {
    return this.getStringAttribute('ou_name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class ClusterCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): ClusterCertificatesOutputReference {
    return new ClusterCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterControlPlaneHosts {
}

export function clusterControlPlaneHostsToTerraform(struct?: ClusterControlPlaneHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterControlPlaneHostsToHclTerraform(struct?: ClusterControlPlaneHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterControlPlaneHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterControlPlaneHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterControlPlaneHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class ClusterControlPlaneHostsList extends cdktf.ComplexList {

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
  public get(index: number): ClusterControlPlaneHostsOutputReference {
    return new ClusterControlPlaneHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEtcdHosts {
}

export function clusterEtcdHostsToTerraform(struct?: ClusterEtcdHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterEtcdHostsToHclTerraform(struct?: ClusterEtcdHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterEtcdHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEtcdHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterEtcdHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class ClusterEtcdHostsList extends cdktf.ComplexList {

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
  public get(index: number): ClusterEtcdHostsOutputReference {
    return new ClusterEtcdHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterInactiveHosts {
}

export function clusterInactiveHostsToTerraform(struct?: ClusterInactiveHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterInactiveHostsToHclTerraform(struct?: ClusterInactiveHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterInactiveHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterInactiveHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterInactiveHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class ClusterInactiveHostsList extends cdktf.ComplexList {

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
  public get(index: number): ClusterInactiveHostsOutputReference {
    return new ClusterInactiveHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterRunningSystemImages {
}

export function clusterRunningSystemImagesToTerraform(struct?: ClusterRunningSystemImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterRunningSystemImagesToHclTerraform(struct?: ClusterRunningSystemImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterRunningSystemImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterRunningSystemImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRunningSystemImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aci_cni_deploy_container - computed: true, optional: false, required: false
  public get aciCniDeployContainer() {
    return this.getStringAttribute('aci_cni_deploy_container');
  }

  // aci_controller_container - computed: true, optional: false, required: false
  public get aciControllerContainer() {
    return this.getStringAttribute('aci_controller_container');
  }

  // aci_host_container - computed: true, optional: false, required: false
  public get aciHostContainer() {
    return this.getStringAttribute('aci_host_container');
  }

  // aci_mcast_container - computed: true, optional: false, required: false
  public get aciMcastContainer() {
    return this.getStringAttribute('aci_mcast_container');
  }

  // aci_opflex_container - computed: true, optional: false, required: false
  public get aciOpflexContainer() {
    return this.getStringAttribute('aci_opflex_container');
  }

  // aci_ovs_container - computed: true, optional: false, required: false
  public get aciOvsContainer() {
    return this.getStringAttribute('aci_ovs_container');
  }

  // alpine - computed: true, optional: false, required: false
  public get alpine() {
    return this.getStringAttribute('alpine');
  }

  // calico_cni - computed: true, optional: false, required: false
  public get calicoCni() {
    return this.getStringAttribute('calico_cni');
  }

  // calico_controllers - computed: true, optional: false, required: false
  public get calicoControllers() {
    return this.getStringAttribute('calico_controllers');
  }

  // calico_ctl - computed: true, optional: false, required: false
  public get calicoCtl() {
    return this.getStringAttribute('calico_ctl');
  }

  // calico_flex_vol - computed: true, optional: false, required: false
  public get calicoFlexVol() {
    return this.getStringAttribute('calico_flex_vol');
  }

  // calico_node - computed: true, optional: false, required: false
  public get calicoNode() {
    return this.getStringAttribute('calico_node');
  }

  // canal_cni - computed: true, optional: false, required: false
  public get canalCni() {
    return this.getStringAttribute('canal_cni');
  }

  // canal_flannel - computed: true, optional: false, required: false
  public get canalFlannel() {
    return this.getStringAttribute('canal_flannel');
  }

  // canal_flex_vol - computed: true, optional: false, required: false
  public get canalFlexVol() {
    return this.getStringAttribute('canal_flex_vol');
  }

  // canal_node - computed: true, optional: false, required: false
  public get canalNode() {
    return this.getStringAttribute('canal_node');
  }

  // cert_downloader - computed: true, optional: false, required: false
  public get certDownloader() {
    return this.getStringAttribute('cert_downloader');
  }

  // coredns - computed: true, optional: false, required: false
  public get coredns() {
    return this.getStringAttribute('coredns');
  }

  // coredns_autoscaler - computed: true, optional: false, required: false
  public get corednsAutoscaler() {
    return this.getStringAttribute('coredns_autoscaler');
  }

  // dnsmasq - computed: true, optional: false, required: false
  public get dnsmasq() {
    return this.getStringAttribute('dnsmasq');
  }

  // etcd - computed: true, optional: false, required: false
  public get etcd() {
    return this.getStringAttribute('etcd');
  }

  // flannel - computed: true, optional: false, required: false
  public get flannel() {
    return this.getStringAttribute('flannel');
  }

  // flannel_cni - computed: true, optional: false, required: false
  public get flannelCni() {
    return this.getStringAttribute('flannel_cni');
  }

  // ingress - computed: true, optional: false, required: false
  public get ingress() {
    return this.getStringAttribute('ingress');
  }

  // ingress_backend - computed: true, optional: false, required: false
  public get ingressBackend() {
    return this.getStringAttribute('ingress_backend');
  }

  // kube_dns - computed: true, optional: false, required: false
  public get kubeDns() {
    return this.getStringAttribute('kube_dns');
  }

  // kube_dns_autoscaler - computed: true, optional: false, required: false
  public get kubeDnsAutoscaler() {
    return this.getStringAttribute('kube_dns_autoscaler');
  }

  // kube_dns_sidecar - computed: true, optional: false, required: false
  public get kubeDnsSidecar() {
    return this.getStringAttribute('kube_dns_sidecar');
  }

  // kubernetes - computed: true, optional: false, required: false
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }

  // kubernetes_services_sidecar - computed: true, optional: false, required: false
  public get kubernetesServicesSidecar() {
    return this.getStringAttribute('kubernetes_services_sidecar');
  }

  // metrics_server - computed: true, optional: false, required: false
  public get metricsServer() {
    return this.getStringAttribute('metrics_server');
  }

  // nginx_proxy - computed: true, optional: false, required: false
  public get nginxProxy() {
    return this.getStringAttribute('nginx_proxy');
  }

  // nodelocal - computed: true, optional: false, required: false
  public get nodelocal() {
    return this.getStringAttribute('nodelocal');
  }

  // pod_infra_container - computed: true, optional: false, required: false
  public get podInfraContainer() {
    return this.getStringAttribute('pod_infra_container');
  }

  // weave_cni - computed: true, optional: false, required: false
  public get weaveCni() {
    return this.getStringAttribute('weave_cni');
  }

  // weave_node - computed: true, optional: false, required: false
  public get weaveNode() {
    return this.getStringAttribute('weave_node');
  }

  // windows_pod_infra_container - computed: true, optional: false, required: false
  public get windowsPodInfraContainer() {
    return this.getStringAttribute('windows_pod_infra_container');
  }
}

export class ClusterRunningSystemImagesList extends cdktf.ComplexList {

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
  public get(index: number): ClusterRunningSystemImagesOutputReference {
    return new ClusterRunningSystemImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterWorkerHosts {
}

export function clusterWorkerHostsToTerraform(struct?: ClusterWorkerHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterWorkerHostsToHclTerraform(struct?: ClusterWorkerHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterWorkerHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterWorkerHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterWorkerHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class ClusterWorkerHostsList extends cdktf.ComplexList {

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
  public get(index: number): ClusterWorkerHostsOutputReference {
    return new ClusterWorkerHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAuthenticationWebhook {
  /**
  * Controls how long to cache authentication decisions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cache_timeout Cluster#cache_timeout}
  */
  readonly cacheTimeout?: string;
  /**
  * Multiline string that represent a custom webhook config file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#config_file Cluster#config_file}
  */
  readonly configFile?: string;
}

export function clusterAuthenticationWebhookToTerraform(struct?: ClusterAuthenticationWebhookOutputReference | ClusterAuthenticationWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_timeout: cdktf.stringToTerraform(struct!.cacheTimeout),
    config_file: cdktf.stringToTerraform(struct!.configFile),
  }
}


export function clusterAuthenticationWebhookToHclTerraform(struct?: ClusterAuthenticationWebhookOutputReference | ClusterAuthenticationWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cacheTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAuthenticationWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterAuthenticationWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTimeout = this._cacheTimeout;
    }
    if (this._configFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAuthenticationWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTimeout = undefined;
      this._configFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTimeout = value.cacheTimeout;
      this._configFile = value.configFile;
    }
  }

  // cache_timeout - computed: false, optional: true, required: false
  private _cacheTimeout?: string; 
  public get cacheTimeout() {
    return this.getStringAttribute('cache_timeout');
  }
  public set cacheTimeout(value: string) {
    this._cacheTimeout = value;
  }
  public resetCacheTimeout() {
    this._cacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutInput() {
    return this._cacheTimeout;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }
}
export interface ClusterAuthentication {
  /**
  * List of additional hostnames and IPs to include in the api server PKI cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#sans Cluster#sans}
  */
  readonly sans?: string[];
  /**
  * Authentication strategy that will be used in RKE k8s cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#strategy Cluster#strategy}
  */
  readonly strategy?: string;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#webhook Cluster#webhook}
  */
  readonly webhook?: ClusterAuthenticationWebhook;
}

export function clusterAuthenticationToTerraform(struct?: ClusterAuthenticationOutputReference | ClusterAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sans),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    webhook: clusterAuthenticationWebhookToTerraform(struct!.webhook),
  }
}


export function clusterAuthenticationToHclTerraform(struct?: ClusterAuthenticationOutputReference | ClusterAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: clusterAuthenticationWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAuthenticationWebhookList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sans !== undefined) {
      hasAnyValues = true;
      internalValueResult.sans = this._sans;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sans = undefined;
      this._strategy = undefined;
      this._webhook.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sans = value.sans;
      this._strategy = value.strategy;
      this._webhook.internalValue = value.webhook;
    }
  }

  // sans - computed: true, optional: true, required: false
  private _sans?: string[]; 
  public get sans() {
    return this.getListAttribute('sans');
  }
  public set sans(value: string[]) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new ClusterAuthenticationWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: ClusterAuthenticationWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface ClusterAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#mode Cluster#mode}
  */
  readonly mode?: string;
  /**
  * Authorization mode options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#options Cluster#options}
  */
  readonly options?: { [key: string]: string };
}

export function clusterAuthorizationToTerraform(struct?: ClusterAuthorizationOutputReference | ClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
  }
}


export function clusterAuthorizationToHclTerraform(struct?: ClusterAuthorizationOutputReference | ClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._options = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._options = value.options;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface ClusterBastionHost {
  /**
  * Address of Bastion Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#address Cluster#address}
  */
  readonly address: string;
  /**
  * Ignore proxy env vars at Bastion Host?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ignore_proxy_env_vars Cluster#ignore_proxy_env_vars}
  */
  readonly ignoreProxyEnvVars?: boolean | cdktf.IResolvable;
  /**
  * SSH Port of Bastion Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: string;
  /**
  * SSH Agent Auth enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_agent_auth Cluster#ssh_agent_auth}
  */
  readonly sshAgentAuth?: boolean | cdktf.IResolvable;
  /**
  * SSH Certificate Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_cert Cluster#ssh_cert}
  */
  readonly sshCert?: string;
  /**
  * SSH Certificate Key Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_cert_path Cluster#ssh_cert_path}
  */
  readonly sshCertPath?: string;
  /**
  * SSH Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_key Cluster#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * SSH Private Key Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_key_path Cluster#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * SSH User to Bastion Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user Cluster#user}
  */
  readonly user: string;
}

export function clusterBastionHostToTerraform(struct?: ClusterBastionHostOutputReference | ClusterBastionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ignore_proxy_env_vars: cdktf.booleanToTerraform(struct!.ignoreProxyEnvVars),
    port: cdktf.stringToTerraform(struct!.port),
    ssh_agent_auth: cdktf.booleanToTerraform(struct!.sshAgentAuth),
    ssh_cert: cdktf.stringToTerraform(struct!.sshCert),
    ssh_cert_path: cdktf.stringToTerraform(struct!.sshCertPath),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    ssh_key_path: cdktf.stringToTerraform(struct!.sshKeyPath),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterBastionHostToHclTerraform(struct?: ClusterBastionHostOutputReference | ClusterBastionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_proxy_env_vars: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreProxyEnvVars),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_agent_auth: {
      value: cdktf.booleanToHclTerraform(struct!.sshAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_cert: {
      value: cdktf.stringToHclTerraform(struct!.sshCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.sshCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_path: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterBastionHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterBastionHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._ignoreProxyEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreProxyEnvVars = this._ignoreProxyEnvVars;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sshAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAgentAuth = this._sshAgentAuth;
    }
    if (this._sshCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshCert = this._sshCert;
    }
    if (this._sshCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshCertPath = this._sshCertPath;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._sshKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyPath = this._sshKeyPath;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterBastionHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._ignoreProxyEnvVars = undefined;
      this._port = undefined;
      this._sshAgentAuth = undefined;
      this._sshCert = undefined;
      this._sshCertPath = undefined;
      this._sshKey = undefined;
      this._sshKeyPath = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._ignoreProxyEnvVars = value.ignoreProxyEnvVars;
      this._port = value.port;
      this._sshAgentAuth = value.sshAgentAuth;
      this._sshCert = value.sshCert;
      this._sshCertPath = value.sshCertPath;
      this._sshKey = value.sshKey;
      this._sshKeyPath = value.sshKeyPath;
      this._user = value.user;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ignore_proxy_env_vars - computed: false, optional: true, required: false
  private _ignoreProxyEnvVars?: boolean | cdktf.IResolvable; 
  public get ignoreProxyEnvVars() {
    return this.getBooleanAttribute('ignore_proxy_env_vars');
  }
  public set ignoreProxyEnvVars(value: boolean | cdktf.IResolvable) {
    this._ignoreProxyEnvVars = value;
  }
  public resetIgnoreProxyEnvVars() {
    this._ignoreProxyEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreProxyEnvVarsInput() {
    return this._ignoreProxyEnvVars;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_agent_auth - computed: true, optional: true, required: false
  private _sshAgentAuth?: boolean | cdktf.IResolvable; 
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }
  public set sshAgentAuth(value: boolean | cdktf.IResolvable) {
    this._sshAgentAuth = value;
  }
  public resetSshAgentAuth() {
    this._sshAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAgentAuthInput() {
    return this._sshAgentAuth;
  }

  // ssh_cert - computed: false, optional: true, required: false
  private _sshCert?: string; 
  public get sshCert() {
    return this.getStringAttribute('ssh_cert');
  }
  public set sshCert(value: string) {
    this._sshCert = value;
  }
  public resetSshCert() {
    this._sshCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertInput() {
    return this._sshCert;
  }

  // ssh_cert_path - computed: true, optional: true, required: false
  private _sshCertPath?: string; 
  public get sshCertPath() {
    return this.getStringAttribute('ssh_cert_path');
  }
  public set sshCertPath(value: string) {
    this._sshCertPath = value;
  }
  public resetSshCertPath() {
    this._sshCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertPathInput() {
    return this._sshCertPath;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_key_path - computed: true, optional: true, required: false
  private _sshKeyPath?: string; 
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ClusterCloudProviderAwsCloudConfigGlobal {
  /**
  * Disables the automatic ingress creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#disable_security_group_ingress Cluster#disable_security_group_ingress}
  */
  readonly disableSecurityGroupIngress?: boolean | cdktf.IResolvable;
  /**
  * Setting this to true will disable the check and provide a warning that the check was skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#disable_strict_zone_check Cluster#disable_strict_zone_check}
  */
  readonly disableStrictZoneCheck?: boolean | cdktf.IResolvable;
  /**
  * Use these ELB security groups instead create new
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#elb_security_group Cluster#elb_security_group}
  */
  readonly elbSecurityGroup?: string;
  /**
  * The cluster id we'll use to identify our cluster resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubernetes_cluster_id Cluster#kubernetes_cluster_id}
  */
  readonly kubernetesClusterId?: string;
  /**
  * Legacy cluster id we'll use to identify our cluster resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubernetes_cluster_tag Cluster#kubernetes_cluster_tag}
  */
  readonly kubernetesClusterTag?: string;
  /**
  * IAM role to assume when interaction with AWS APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#role_arn Cluster#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Enables using a specific RouteTable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#route_table_id Cluster#route_table_id}
  */
  readonly routeTableId?: string;
  /**
  * Enables using a specific subnet to use for ELB's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#subnet_id Cluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The AWS VPC flag enables the possibility to run the master components on a different aws account, on a different cloud provider or on-premises. If the flag is set also the KubernetesClusterTag must be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vpc Cluster#vpc}
  */
  readonly vpc?: string;
  /**
  * The AWS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#zone Cluster#zone}
  */
  readonly zone?: string;
}

export function clusterCloudProviderAwsCloudConfigGlobalToTerraform(struct?: ClusterCloudProviderAwsCloudConfigGlobalOutputReference | ClusterCloudProviderAwsCloudConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_security_group_ingress: cdktf.booleanToTerraform(struct!.disableSecurityGroupIngress),
    disable_strict_zone_check: cdktf.booleanToTerraform(struct!.disableStrictZoneCheck),
    elb_security_group: cdktf.stringToTerraform(struct!.elbSecurityGroup),
    kubernetes_cluster_id: cdktf.stringToTerraform(struct!.kubernetesClusterId),
    kubernetes_cluster_tag: cdktf.stringToTerraform(struct!.kubernetesClusterTag),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    route_table_id: cdktf.stringToTerraform(struct!.routeTableId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function clusterCloudProviderAwsCloudConfigGlobalToHclTerraform(struct?: ClusterCloudProviderAwsCloudConfigGlobalOutputReference | ClusterCloudProviderAwsCloudConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_security_group_ingress: {
      value: cdktf.booleanToHclTerraform(struct!.disableSecurityGroupIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_strict_zone_check: {
      value: cdktf.booleanToHclTerraform(struct!.disableStrictZoneCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    elb_security_group: {
      value: cdktf.stringToHclTerraform(struct!.elbSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_cluster_tag: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesClusterTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.routeTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderAwsCloudConfigGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderAwsCloudConfigGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSecurityGroupIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecurityGroupIngress = this._disableSecurityGroupIngress;
    }
    if (this._disableStrictZoneCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStrictZoneCheck = this._disableStrictZoneCheck;
    }
    if (this._elbSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbSecurityGroup = this._elbSecurityGroup;
    }
    if (this._kubernetesClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterId = this._kubernetesClusterId;
    }
    if (this._kubernetesClusterTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterTag = this._kubernetesClusterTag;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._routeTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableId = this._routeTableId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderAwsCloudConfigGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSecurityGroupIngress = undefined;
      this._disableStrictZoneCheck = undefined;
      this._elbSecurityGroup = undefined;
      this._kubernetesClusterId = undefined;
      this._kubernetesClusterTag = undefined;
      this._roleArn = undefined;
      this._routeTableId = undefined;
      this._subnetId = undefined;
      this._vpc = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSecurityGroupIngress = value.disableSecurityGroupIngress;
      this._disableStrictZoneCheck = value.disableStrictZoneCheck;
      this._elbSecurityGroup = value.elbSecurityGroup;
      this._kubernetesClusterId = value.kubernetesClusterId;
      this._kubernetesClusterTag = value.kubernetesClusterTag;
      this._roleArn = value.roleArn;
      this._routeTableId = value.routeTableId;
      this._subnetId = value.subnetId;
      this._vpc = value.vpc;
      this._zone = value.zone;
    }
  }

  // disable_security_group_ingress - computed: false, optional: true, required: false
  private _disableSecurityGroupIngress?: boolean | cdktf.IResolvable; 
  public get disableSecurityGroupIngress() {
    return this.getBooleanAttribute('disable_security_group_ingress');
  }
  public set disableSecurityGroupIngress(value: boolean | cdktf.IResolvable) {
    this._disableSecurityGroupIngress = value;
  }
  public resetDisableSecurityGroupIngress() {
    this._disableSecurityGroupIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecurityGroupIngressInput() {
    return this._disableSecurityGroupIngress;
  }

  // disable_strict_zone_check - computed: false, optional: true, required: false
  private _disableStrictZoneCheck?: boolean | cdktf.IResolvable; 
  public get disableStrictZoneCheck() {
    return this.getBooleanAttribute('disable_strict_zone_check');
  }
  public set disableStrictZoneCheck(value: boolean | cdktf.IResolvable) {
    this._disableStrictZoneCheck = value;
  }
  public resetDisableStrictZoneCheck() {
    this._disableStrictZoneCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStrictZoneCheckInput() {
    return this._disableStrictZoneCheck;
  }

  // elb_security_group - computed: false, optional: true, required: false
  private _elbSecurityGroup?: string; 
  public get elbSecurityGroup() {
    return this.getStringAttribute('elb_security_group');
  }
  public set elbSecurityGroup(value: string) {
    this._elbSecurityGroup = value;
  }
  public resetElbSecurityGroup() {
    this._elbSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbSecurityGroupInput() {
    return this._elbSecurityGroup;
  }

  // kubernetes_cluster_id - computed: false, optional: true, required: false
  private _kubernetesClusterId?: string; 
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }
  public resetKubernetesClusterId() {
    this._kubernetesClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterIdInput() {
    return this._kubernetesClusterId;
  }

  // kubernetes_cluster_tag - computed: false, optional: true, required: false
  private _kubernetesClusterTag?: string; 
  public get kubernetesClusterTag() {
    return this.getStringAttribute('kubernetes_cluster_tag');
  }
  public set kubernetesClusterTag(value: string) {
    this._kubernetesClusterTag = value;
  }
  public resetKubernetesClusterTag() {
    this._kubernetesClusterTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterTagInput() {
    return this._kubernetesClusterTag;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // route_table_id - computed: false, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface ClusterCloudProviderAwsCloudConfigServiceOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#key Cluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#region Cluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service Cluster#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#signing_method Cluster#signing_method}
  */
  readonly signingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#signing_name Cluster#signing_name}
  */
  readonly signingName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#signing_region Cluster#signing_region}
  */
  readonly signingRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#url Cluster#url}
  */
  readonly url?: string;
}

export function clusterCloudProviderAwsCloudConfigServiceOverrideToTerraform(struct?: ClusterCloudProviderAwsCloudConfigServiceOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    region: cdktf.stringToTerraform(struct!.region),
    service: cdktf.stringToTerraform(struct!.service),
    signing_method: cdktf.stringToTerraform(struct!.signingMethod),
    signing_name: cdktf.stringToTerraform(struct!.signingName),
    signing_region: cdktf.stringToTerraform(struct!.signingRegion),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function clusterCloudProviderAwsCloudConfigServiceOverrideToHclTerraform(struct?: ClusterCloudProviderAwsCloudConfigServiceOverride | cdktf.IResolvable): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_method: {
      value: cdktf.stringToHclTerraform(struct!.signingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_name: {
      value: cdktf.stringToHclTerraform(struct!.signingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_region: {
      value: cdktf.stringToHclTerraform(struct!.signingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderAwsCloudConfigServiceOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCloudProviderAwsCloudConfigServiceOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._signingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingMethod = this._signingMethod;
    }
    if (this._signingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingName = this._signingName;
    }
    if (this._signingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRegion = this._signingRegion;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderAwsCloudConfigServiceOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._region = undefined;
      this._service = undefined;
      this._signingMethod = undefined;
      this._signingName = undefined;
      this._signingRegion = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._region = value.region;
      this._service = value.service;
      this._signingMethod = value.signingMethod;
      this._signingName = value.signingName;
      this._signingRegion = value.signingRegion;
      this._url = value.url;
    }
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // signing_method - computed: true, optional: true, required: false
  private _signingMethod?: string; 
  public get signingMethod() {
    return this.getStringAttribute('signing_method');
  }
  public set signingMethod(value: string) {
    this._signingMethod = value;
  }
  public resetSigningMethod() {
    this._signingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingMethodInput() {
    return this._signingMethod;
  }

  // signing_name - computed: false, optional: true, required: false
  private _signingName?: string; 
  public get signingName() {
    return this.getStringAttribute('signing_name');
  }
  public set signingName(value: string) {
    this._signingName = value;
  }
  public resetSigningName() {
    this._signingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingNameInput() {
    return this._signingName;
  }

  // signing_region - computed: false, optional: true, required: false
  private _signingRegion?: string; 
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
  public set signingRegion(value: string) {
    this._signingRegion = value;
  }
  public resetSigningRegion() {
    this._signingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRegionInput() {
    return this._signingRegion;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ClusterCloudProviderAwsCloudConfigServiceOverrideList extends cdktf.ComplexList {
  public internalValue? : ClusterCloudProviderAwsCloudConfigServiceOverride[] | cdktf.IResolvable

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
  public get(index: number): ClusterCloudProviderAwsCloudConfigServiceOverrideOutputReference {
    return new ClusterCloudProviderAwsCloudConfigServiceOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCloudProviderAwsCloudConfig {
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#global Cluster#global}
  */
  readonly global?: ClusterCloudProviderAwsCloudConfigGlobal;
  /**
  * service_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_override Cluster#service_override}
  */
  readonly serviceOverride?: ClusterCloudProviderAwsCloudConfigServiceOverride[] | cdktf.IResolvable;
}

export function clusterCloudProviderAwsCloudConfigToTerraform(struct?: ClusterCloudProviderAwsCloudConfigOutputReference | ClusterCloudProviderAwsCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: clusterCloudProviderAwsCloudConfigGlobalToTerraform(struct!.global),
    service_override: cdktf.listMapper(clusterCloudProviderAwsCloudConfigServiceOverrideToTerraform, true)(struct!.serviceOverride),
  }
}


export function clusterCloudProviderAwsCloudConfigToHclTerraform(struct?: ClusterCloudProviderAwsCloudConfigOutputReference | ClusterCloudProviderAwsCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: clusterCloudProviderAwsCloudConfigGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderAwsCloudConfigGlobalList",
    },
    service_override: {
      value: cdktf.listMapperHcl(clusterCloudProviderAwsCloudConfigServiceOverrideToHclTerraform, true)(struct!.serviceOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderAwsCloudConfigServiceOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderAwsCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderAwsCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._serviceOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOverride = this._serviceOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderAwsCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._global.internalValue = undefined;
      this._serviceOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._global.internalValue = value.global;
      this._serviceOverride.internalValue = value.serviceOverride;
    }
  }

  // global - computed: false, optional: true, required: false
  private _global = new ClusterCloudProviderAwsCloudConfigGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterCloudProviderAwsCloudConfigGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // service_override - computed: false, optional: true, required: false
  private _serviceOverride = new ClusterCloudProviderAwsCloudConfigServiceOverrideList(this, "service_override", false);
  public get serviceOverride() {
    return this._serviceOverride;
  }
  public putServiceOverride(value: ClusterCloudProviderAwsCloudConfigServiceOverride[] | cdktf.IResolvable) {
    this._serviceOverride.internalValue = value;
  }
  public resetServiceOverride() {
    this._serviceOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOverrideInput() {
    return this._serviceOverride.internalValue;
  }
}
export interface ClusterCloudProviderAwsCloudProviderGlobal {
  /**
  * Disables the automatic ingress creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#disable_security_group_ingress Cluster#disable_security_group_ingress}
  */
  readonly disableSecurityGroupIngress?: boolean | cdktf.IResolvable;
  /**
  * Setting this to true will disable the check and provide a warning that the check was skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#disable_strict_zone_check Cluster#disable_strict_zone_check}
  */
  readonly disableStrictZoneCheck?: boolean | cdktf.IResolvable;
  /**
  * Use these ELB security groups instead create new
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#elb_security_group Cluster#elb_security_group}
  */
  readonly elbSecurityGroup?: string;
  /**
  * The cluster id we'll use to identify our cluster resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubernetes_cluster_id Cluster#kubernetes_cluster_id}
  */
  readonly kubernetesClusterId?: string;
  /**
  * Legacy cluster id we'll use to identify our cluster resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubernetes_cluster_tag Cluster#kubernetes_cluster_tag}
  */
  readonly kubernetesClusterTag?: string;
  /**
  * IAM role to assume when interaction with AWS APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#role_arn Cluster#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Enables using a specific RouteTable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#route_table_id Cluster#route_table_id}
  */
  readonly routeTableId?: string;
  /**
  * Enables using a specific subnet to use for ELB's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#subnet_id Cluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The AWS VPC flag enables the possibility to run the master components on a different aws account, on a different cloud provider or on-premises. If the flag is set also the KubernetesClusterTag must be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vpc Cluster#vpc}
  */
  readonly vpc?: string;
  /**
  * The AWS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#zone Cluster#zone}
  */
  readonly zone?: string;
}

export function clusterCloudProviderAwsCloudProviderGlobalToTerraform(struct?: ClusterCloudProviderAwsCloudProviderGlobalOutputReference | ClusterCloudProviderAwsCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_security_group_ingress: cdktf.booleanToTerraform(struct!.disableSecurityGroupIngress),
    disable_strict_zone_check: cdktf.booleanToTerraform(struct!.disableStrictZoneCheck),
    elb_security_group: cdktf.stringToTerraform(struct!.elbSecurityGroup),
    kubernetes_cluster_id: cdktf.stringToTerraform(struct!.kubernetesClusterId),
    kubernetes_cluster_tag: cdktf.stringToTerraform(struct!.kubernetesClusterTag),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    route_table_id: cdktf.stringToTerraform(struct!.routeTableId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function clusterCloudProviderAwsCloudProviderGlobalToHclTerraform(struct?: ClusterCloudProviderAwsCloudProviderGlobalOutputReference | ClusterCloudProviderAwsCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_security_group_ingress: {
      value: cdktf.booleanToHclTerraform(struct!.disableSecurityGroupIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_strict_zone_check: {
      value: cdktf.booleanToHclTerraform(struct!.disableStrictZoneCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    elb_security_group: {
      value: cdktf.stringToHclTerraform(struct!.elbSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_cluster_tag: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesClusterTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.routeTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderAwsCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderAwsCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSecurityGroupIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecurityGroupIngress = this._disableSecurityGroupIngress;
    }
    if (this._disableStrictZoneCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStrictZoneCheck = this._disableStrictZoneCheck;
    }
    if (this._elbSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbSecurityGroup = this._elbSecurityGroup;
    }
    if (this._kubernetesClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterId = this._kubernetesClusterId;
    }
    if (this._kubernetesClusterTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterTag = this._kubernetesClusterTag;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._routeTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableId = this._routeTableId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderAwsCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSecurityGroupIngress = undefined;
      this._disableStrictZoneCheck = undefined;
      this._elbSecurityGroup = undefined;
      this._kubernetesClusterId = undefined;
      this._kubernetesClusterTag = undefined;
      this._roleArn = undefined;
      this._routeTableId = undefined;
      this._subnetId = undefined;
      this._vpc = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSecurityGroupIngress = value.disableSecurityGroupIngress;
      this._disableStrictZoneCheck = value.disableStrictZoneCheck;
      this._elbSecurityGroup = value.elbSecurityGroup;
      this._kubernetesClusterId = value.kubernetesClusterId;
      this._kubernetesClusterTag = value.kubernetesClusterTag;
      this._roleArn = value.roleArn;
      this._routeTableId = value.routeTableId;
      this._subnetId = value.subnetId;
      this._vpc = value.vpc;
      this._zone = value.zone;
    }
  }

  // disable_security_group_ingress - computed: false, optional: true, required: false
  private _disableSecurityGroupIngress?: boolean | cdktf.IResolvable; 
  public get disableSecurityGroupIngress() {
    return this.getBooleanAttribute('disable_security_group_ingress');
  }
  public set disableSecurityGroupIngress(value: boolean | cdktf.IResolvable) {
    this._disableSecurityGroupIngress = value;
  }
  public resetDisableSecurityGroupIngress() {
    this._disableSecurityGroupIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecurityGroupIngressInput() {
    return this._disableSecurityGroupIngress;
  }

  // disable_strict_zone_check - computed: false, optional: true, required: false
  private _disableStrictZoneCheck?: boolean | cdktf.IResolvable; 
  public get disableStrictZoneCheck() {
    return this.getBooleanAttribute('disable_strict_zone_check');
  }
  public set disableStrictZoneCheck(value: boolean | cdktf.IResolvable) {
    this._disableStrictZoneCheck = value;
  }
  public resetDisableStrictZoneCheck() {
    this._disableStrictZoneCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStrictZoneCheckInput() {
    return this._disableStrictZoneCheck;
  }

  // elb_security_group - computed: false, optional: true, required: false
  private _elbSecurityGroup?: string; 
  public get elbSecurityGroup() {
    return this.getStringAttribute('elb_security_group');
  }
  public set elbSecurityGroup(value: string) {
    this._elbSecurityGroup = value;
  }
  public resetElbSecurityGroup() {
    this._elbSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbSecurityGroupInput() {
    return this._elbSecurityGroup;
  }

  // kubernetes_cluster_id - computed: false, optional: true, required: false
  private _kubernetesClusterId?: string; 
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }
  public resetKubernetesClusterId() {
    this._kubernetesClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterIdInput() {
    return this._kubernetesClusterId;
  }

  // kubernetes_cluster_tag - computed: false, optional: true, required: false
  private _kubernetesClusterTag?: string; 
  public get kubernetesClusterTag() {
    return this.getStringAttribute('kubernetes_cluster_tag');
  }
  public set kubernetesClusterTag(value: string) {
    this._kubernetesClusterTag = value;
  }
  public resetKubernetesClusterTag() {
    this._kubernetesClusterTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterTagInput() {
    return this._kubernetesClusterTag;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // route_table_id - computed: false, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface ClusterCloudProviderAwsCloudProviderServiceOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#key Cluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#region Cluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service Cluster#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#signing_method Cluster#signing_method}
  */
  readonly signingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#signing_name Cluster#signing_name}
  */
  readonly signingName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#signing_region Cluster#signing_region}
  */
  readonly signingRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#url Cluster#url}
  */
  readonly url?: string;
}

export function clusterCloudProviderAwsCloudProviderServiceOverrideToTerraform(struct?: ClusterCloudProviderAwsCloudProviderServiceOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    region: cdktf.stringToTerraform(struct!.region),
    service: cdktf.stringToTerraform(struct!.service),
    signing_method: cdktf.stringToTerraform(struct!.signingMethod),
    signing_name: cdktf.stringToTerraform(struct!.signingName),
    signing_region: cdktf.stringToTerraform(struct!.signingRegion),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function clusterCloudProviderAwsCloudProviderServiceOverrideToHclTerraform(struct?: ClusterCloudProviderAwsCloudProviderServiceOverride | cdktf.IResolvable): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_method: {
      value: cdktf.stringToHclTerraform(struct!.signingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_name: {
      value: cdktf.stringToHclTerraform(struct!.signingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_region: {
      value: cdktf.stringToHclTerraform(struct!.signingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderAwsCloudProviderServiceOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCloudProviderAwsCloudProviderServiceOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._signingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingMethod = this._signingMethod;
    }
    if (this._signingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingName = this._signingName;
    }
    if (this._signingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRegion = this._signingRegion;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderAwsCloudProviderServiceOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._region = undefined;
      this._service = undefined;
      this._signingMethod = undefined;
      this._signingName = undefined;
      this._signingRegion = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._region = value.region;
      this._service = value.service;
      this._signingMethod = value.signingMethod;
      this._signingName = value.signingName;
      this._signingRegion = value.signingRegion;
      this._url = value.url;
    }
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // signing_method - computed: true, optional: true, required: false
  private _signingMethod?: string; 
  public get signingMethod() {
    return this.getStringAttribute('signing_method');
  }
  public set signingMethod(value: string) {
    this._signingMethod = value;
  }
  public resetSigningMethod() {
    this._signingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingMethodInput() {
    return this._signingMethod;
  }

  // signing_name - computed: false, optional: true, required: false
  private _signingName?: string; 
  public get signingName() {
    return this.getStringAttribute('signing_name');
  }
  public set signingName(value: string) {
    this._signingName = value;
  }
  public resetSigningName() {
    this._signingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingNameInput() {
    return this._signingName;
  }

  // signing_region - computed: false, optional: true, required: false
  private _signingRegion?: string; 
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
  public set signingRegion(value: string) {
    this._signingRegion = value;
  }
  public resetSigningRegion() {
    this._signingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRegionInput() {
    return this._signingRegion;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ClusterCloudProviderAwsCloudProviderServiceOverrideList extends cdktf.ComplexList {
  public internalValue? : ClusterCloudProviderAwsCloudProviderServiceOverride[] | cdktf.IResolvable

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
  public get(index: number): ClusterCloudProviderAwsCloudProviderServiceOverrideOutputReference {
    return new ClusterCloudProviderAwsCloudProviderServiceOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCloudProviderAwsCloudProvider {
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#global Cluster#global}
  */
  readonly global?: ClusterCloudProviderAwsCloudProviderGlobal;
  /**
  * service_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_override Cluster#service_override}
  */
  readonly serviceOverride?: ClusterCloudProviderAwsCloudProviderServiceOverride[] | cdktf.IResolvable;
}

export function clusterCloudProviderAwsCloudProviderToTerraform(struct?: ClusterCloudProviderAwsCloudProviderOutputReference | ClusterCloudProviderAwsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: clusterCloudProviderAwsCloudProviderGlobalToTerraform(struct!.global),
    service_override: cdktf.listMapper(clusterCloudProviderAwsCloudProviderServiceOverrideToTerraform, true)(struct!.serviceOverride),
  }
}


export function clusterCloudProviderAwsCloudProviderToHclTerraform(struct?: ClusterCloudProviderAwsCloudProviderOutputReference | ClusterCloudProviderAwsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: clusterCloudProviderAwsCloudProviderGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderAwsCloudProviderGlobalList",
    },
    service_override: {
      value: cdktf.listMapperHcl(clusterCloudProviderAwsCloudProviderServiceOverrideToHclTerraform, true)(struct!.serviceOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderAwsCloudProviderServiceOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderAwsCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderAwsCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._serviceOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOverride = this._serviceOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderAwsCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._global.internalValue = undefined;
      this._serviceOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._global.internalValue = value.global;
      this._serviceOverride.internalValue = value.serviceOverride;
    }
  }

  // global - computed: false, optional: true, required: false
  private _global = new ClusterCloudProviderAwsCloudProviderGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterCloudProviderAwsCloudProviderGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // service_override - computed: false, optional: true, required: false
  private _serviceOverride = new ClusterCloudProviderAwsCloudProviderServiceOverrideList(this, "service_override", false);
  public get serviceOverride() {
    return this._serviceOverride;
  }
  public putServiceOverride(value: ClusterCloudProviderAwsCloudProviderServiceOverride[] | cdktf.IResolvable) {
    this._serviceOverride.internalValue = value;
  }
  public resetServiceOverride() {
    this._serviceOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOverrideInput() {
    return this._serviceOverride.internalValue;
  }
}
export interface ClusterCloudProviderAzureCloudConfig {
  /**
  * The password of the client certificate for an AAD application with RBAC access to talk to Azure RM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aad_client_cert_password Cluster#aad_client_cert_password}
  */
  readonly aadClientCertPassword?: string;
  /**
  * The path of a client certificate for an AAD application with RBAC access to talk to Azure RM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aad_client_cert_path Cluster#aad_client_cert_path}
  */
  readonly aadClientCertPath?: string;
  /**
  * The ClientID for an AAD application with RBAC access to talk to Azure RM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aad_client_id Cluster#aad_client_id}
  */
  readonly aadClientId: string;
  /**
  * The ClientSecret for an AAD application with RBAC access to talk to Azure RM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aad_client_secret Cluster#aad_client_secret}
  */
  readonly aadClientSecret: string;
  /**
  * The cloud environment identifier. Takes values from https://github.com/Azure/go-autorest/blob/ec5f4903f77ed9927ac95b19ab8e44ada64c1356/autorest/azure/environments.go#L13
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud Cluster#cloud}
  */
  readonly cloud?: string;
  /**
  * Enable exponential backoff to manage resource request retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff Cluster#cloud_provider_backoff}
  */
  readonly cloudProviderBackoff?: boolean | cdktf.IResolvable;
  /**
  * Backoff duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff_duration Cluster#cloud_provider_backoff_duration}
  */
  readonly cloudProviderBackoffDuration?: number;
  /**
  * Backoff exponent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff_exponent Cluster#cloud_provider_backoff_exponent}
  */
  readonly cloudProviderBackoffExponent?: number;
  /**
  * Backoff jitter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff_jitter Cluster#cloud_provider_backoff_jitter}
  */
  readonly cloudProviderBackoffJitter?: number;
  /**
  * Backoff retry limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff_retries Cluster#cloud_provider_backoff_retries}
  */
  readonly cloudProviderBackoffRetries?: number;
  /**
  * Enable rate limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_rate_limit Cluster#cloud_provider_rate_limit}
  */
  readonly cloudProviderRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_rate_limit_bucket Cluster#cloud_provider_rate_limit_bucket}
  */
  readonly cloudProviderRateLimitBucket?: number;
  /**
  * Rate limit QPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_rate_limit_qps Cluster#cloud_provider_rate_limit_qps}
  */
  readonly cloudProviderRateLimitQps?: number;
  /**
  * Load balancer type (basic | standard). Must be standard for auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#load_balancer_sku Cluster#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * The location of the resource group that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#location Cluster#location}
  */
  readonly location?: string;
  /**
  * Maximum allowed LoadBalancer Rule Count is the limit enforced by Azure Load balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#maximum_load_balancer_rule_count Cluster#maximum_load_balancer_rule_count}
  */
  readonly maximumLoadBalancerRuleCount?: number;
  /**
  * The name of the availability set that should be used as the load balancer backendIf this is set, the Azure cloudprovider will only add nodes from that availability set to the loadbalancer backend pool. If this is not set, and multiple agent pools (availability sets) are used, thenthe cloudprovider will try to add all nodes to a single backend pool which is forbidden.In other words, if you use multiple agent pools (availability sets), you MUST set this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#primary_availability_set_name Cluster#primary_availability_set_name}
  */
  readonly primaryAvailabilitySetName?: string;
  /**
  * The name of the scale set that should be used as the load balancer backend.If this is set, the Azure cloudprovider will only add nodes from that scale set to the loadbalancer backend pool. If this is not set, and multiple agent pools (scale sets) are used, thenthe cloudprovider will try to add all nodes to a single backend pool which is forbidden.In other words, if you use multiple agent pools (scale sets), you MUST set this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#primary_scale_set_name Cluster#primary_scale_set_name}
  */
  readonly primaryScaleSetName?: string;
  /**
  * The name of the resource group that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#resource_group Cluster#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * (Optional in 1.6) The name of the route table attached to the subnet that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#route_table_name Cluster#route_table_name}
  */
  readonly routeTableName?: string;
  /**
  * The name of the security group attached to the cluster's subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#security_group_name Cluster#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * The name of the Subnet that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#subnet_name Cluster#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * The ID of the Azure Subscription that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#subscription_id Cluster#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The AAD Tenant ID for the Subscription that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#tenant_id Cluster#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Use instance metadata service where possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#use_instance_metadata Cluster#use_instance_metadata}
  */
  readonly useInstanceMetadata?: boolean | cdktf.IResolvable;
  /**
  * Use managed service identity for the virtual machine to access Azure ARM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#use_managed_identity_extension Cluster#use_managed_identity_extension}
  */
  readonly useManagedIdentityExtension?: boolean | cdktf.IResolvable;
  /**
  * The type of azure nodes. If not set, it will be default to standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vm_type Cluster#vm_type}
  */
  readonly vmType?: string;
  /**
  * The name of the VNet that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vnet_name Cluster#vnet_name}
  */
  readonly vnetName?: string;
  /**
  * The name of the resource group that the Vnet is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vnet_resource_group Cluster#vnet_resource_group}
  */
  readonly vnetResourceGroup?: string;
}

export function clusterCloudProviderAzureCloudConfigToTerraform(struct?: ClusterCloudProviderAzureCloudConfigOutputReference | ClusterCloudProviderAzureCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aad_client_cert_password: cdktf.stringToTerraform(struct!.aadClientCertPassword),
    aad_client_cert_path: cdktf.stringToTerraform(struct!.aadClientCertPath),
    aad_client_id: cdktf.stringToTerraform(struct!.aadClientId),
    aad_client_secret: cdktf.stringToTerraform(struct!.aadClientSecret),
    cloud: cdktf.stringToTerraform(struct!.cloud),
    cloud_provider_backoff: cdktf.booleanToTerraform(struct!.cloudProviderBackoff),
    cloud_provider_backoff_duration: cdktf.numberToTerraform(struct!.cloudProviderBackoffDuration),
    cloud_provider_backoff_exponent: cdktf.numberToTerraform(struct!.cloudProviderBackoffExponent),
    cloud_provider_backoff_jitter: cdktf.numberToTerraform(struct!.cloudProviderBackoffJitter),
    cloud_provider_backoff_retries: cdktf.numberToTerraform(struct!.cloudProviderBackoffRetries),
    cloud_provider_rate_limit: cdktf.booleanToTerraform(struct!.cloudProviderRateLimit),
    cloud_provider_rate_limit_bucket: cdktf.numberToTerraform(struct!.cloudProviderRateLimitBucket),
    cloud_provider_rate_limit_qps: cdktf.numberToTerraform(struct!.cloudProviderRateLimitQps),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    location: cdktf.stringToTerraform(struct!.location),
    maximum_load_balancer_rule_count: cdktf.numberToTerraform(struct!.maximumLoadBalancerRuleCount),
    primary_availability_set_name: cdktf.stringToTerraform(struct!.primaryAvailabilitySetName),
    primary_scale_set_name: cdktf.stringToTerraform(struct!.primaryScaleSetName),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    route_table_name: cdktf.stringToTerraform(struct!.routeTableName),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    use_instance_metadata: cdktf.booleanToTerraform(struct!.useInstanceMetadata),
    use_managed_identity_extension: cdktf.booleanToTerraform(struct!.useManagedIdentityExtension),
    vm_type: cdktf.stringToTerraform(struct!.vmType),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
    vnet_resource_group: cdktf.stringToTerraform(struct!.vnetResourceGroup),
  }
}


export function clusterCloudProviderAzureCloudConfigToHclTerraform(struct?: ClusterCloudProviderAzureCloudConfigOutputReference | ClusterCloudProviderAzureCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aad_client_cert_password: {
      value: cdktf.stringToHclTerraform(struct!.aadClientCertPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.aadClientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_id: {
      value: cdktf.stringToHclTerraform(struct!.aadClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.aadClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider_backoff: {
      value: cdktf.booleanToHclTerraform(struct!.cloudProviderBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider_backoff_duration: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_exponent: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffExponent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_jitter: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_retries: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_rate_limit: {
      value: cdktf.booleanToHclTerraform(struct!.cloudProviderRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider_rate_limit_bucket: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderRateLimitBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_rate_limit_qps: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderRateLimitQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_balancer_sku: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_load_balancer_rule_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumLoadBalancerRuleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_availability_set_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryAvailabilitySetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_scale_set_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryScaleSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_name: {
      value: cdktf.stringToHclTerraform(struct!.routeTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_instance_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.useInstanceMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_managed_identity_extension: {
      value: cdktf.booleanToHclTerraform(struct!.useManagedIdentityExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_type: {
      value: cdktf.stringToHclTerraform(struct!.vmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderAzureCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderAzureCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aadClientCertPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientCertPassword = this._aadClientCertPassword;
    }
    if (this._aadClientCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientCertPath = this._aadClientCertPath;
    }
    if (this._aadClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientId = this._aadClientId;
    }
    if (this._aadClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientSecret = this._aadClientSecret;
    }
    if (this._cloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud;
    }
    if (this._cloudProviderBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoff = this._cloudProviderBackoff;
    }
    if (this._cloudProviderBackoffDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffDuration = this._cloudProviderBackoffDuration;
    }
    if (this._cloudProviderBackoffExponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffExponent = this._cloudProviderBackoffExponent;
    }
    if (this._cloudProviderBackoffJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffJitter = this._cloudProviderBackoffJitter;
    }
    if (this._cloudProviderBackoffRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffRetries = this._cloudProviderBackoffRetries;
    }
    if (this._cloudProviderRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimit = this._cloudProviderRateLimit;
    }
    if (this._cloudProviderRateLimitBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimitBucket = this._cloudProviderRateLimitBucket;
    }
    if (this._cloudProviderRateLimitQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimitQps = this._cloudProviderRateLimitQps;
    }
    if (this._loadBalancerSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSku = this._loadBalancerSku;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._maximumLoadBalancerRuleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLoadBalancerRuleCount = this._maximumLoadBalancerRuleCount;
    }
    if (this._primaryAvailabilitySetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryAvailabilitySetName = this._primaryAvailabilitySetName;
    }
    if (this._primaryScaleSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryScaleSetName = this._primaryScaleSetName;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._routeTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableName = this._routeTableName;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._useInstanceMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInstanceMetadata = this._useInstanceMetadata;
    }
    if (this._useManagedIdentityExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.useManagedIdentityExtension = this._useManagedIdentityExtension;
    }
    if (this._vmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmType = this._vmType;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderAzureCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aadClientCertPassword = undefined;
      this._aadClientCertPath = undefined;
      this._aadClientId = undefined;
      this._aadClientSecret = undefined;
      this._cloud = undefined;
      this._cloudProviderBackoff = undefined;
      this._cloudProviderBackoffDuration = undefined;
      this._cloudProviderBackoffExponent = undefined;
      this._cloudProviderBackoffJitter = undefined;
      this._cloudProviderBackoffRetries = undefined;
      this._cloudProviderRateLimit = undefined;
      this._cloudProviderRateLimitBucket = undefined;
      this._cloudProviderRateLimitQps = undefined;
      this._loadBalancerSku = undefined;
      this._location = undefined;
      this._maximumLoadBalancerRuleCount = undefined;
      this._primaryAvailabilitySetName = undefined;
      this._primaryScaleSetName = undefined;
      this._resourceGroup = undefined;
      this._routeTableName = undefined;
      this._securityGroupName = undefined;
      this._subnetName = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
      this._useInstanceMetadata = undefined;
      this._useManagedIdentityExtension = undefined;
      this._vmType = undefined;
      this._vnetName = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aadClientCertPassword = value.aadClientCertPassword;
      this._aadClientCertPath = value.aadClientCertPath;
      this._aadClientId = value.aadClientId;
      this._aadClientSecret = value.aadClientSecret;
      this._cloud = value.cloud;
      this._cloudProviderBackoff = value.cloudProviderBackoff;
      this._cloudProviderBackoffDuration = value.cloudProviderBackoffDuration;
      this._cloudProviderBackoffExponent = value.cloudProviderBackoffExponent;
      this._cloudProviderBackoffJitter = value.cloudProviderBackoffJitter;
      this._cloudProviderBackoffRetries = value.cloudProviderBackoffRetries;
      this._cloudProviderRateLimit = value.cloudProviderRateLimit;
      this._cloudProviderRateLimitBucket = value.cloudProviderRateLimitBucket;
      this._cloudProviderRateLimitQps = value.cloudProviderRateLimitQps;
      this._loadBalancerSku = value.loadBalancerSku;
      this._location = value.location;
      this._maximumLoadBalancerRuleCount = value.maximumLoadBalancerRuleCount;
      this._primaryAvailabilitySetName = value.primaryAvailabilitySetName;
      this._primaryScaleSetName = value.primaryScaleSetName;
      this._resourceGroup = value.resourceGroup;
      this._routeTableName = value.routeTableName;
      this._securityGroupName = value.securityGroupName;
      this._subnetName = value.subnetName;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
      this._useInstanceMetadata = value.useInstanceMetadata;
      this._useManagedIdentityExtension = value.useManagedIdentityExtension;
      this._vmType = value.vmType;
      this._vnetName = value.vnetName;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // aad_client_cert_password - computed: false, optional: true, required: false
  private _aadClientCertPassword?: string; 
  public get aadClientCertPassword() {
    return this.getStringAttribute('aad_client_cert_password');
  }
  public set aadClientCertPassword(value: string) {
    this._aadClientCertPassword = value;
  }
  public resetAadClientCertPassword() {
    this._aadClientCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientCertPasswordInput() {
    return this._aadClientCertPassword;
  }

  // aad_client_cert_path - computed: false, optional: true, required: false
  private _aadClientCertPath?: string; 
  public get aadClientCertPath() {
    return this.getStringAttribute('aad_client_cert_path');
  }
  public set aadClientCertPath(value: string) {
    this._aadClientCertPath = value;
  }
  public resetAadClientCertPath() {
    this._aadClientCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientCertPathInput() {
    return this._aadClientCertPath;
  }

  // aad_client_id - computed: false, optional: false, required: true
  private _aadClientId?: string; 
  public get aadClientId() {
    return this.getStringAttribute('aad_client_id');
  }
  public set aadClientId(value: string) {
    this._aadClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientIdInput() {
    return this._aadClientId;
  }

  // aad_client_secret - computed: false, optional: false, required: true
  private _aadClientSecret?: string; 
  public get aadClientSecret() {
    return this.getStringAttribute('aad_client_secret');
  }
  public set aadClientSecret(value: string) {
    this._aadClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientSecretInput() {
    return this._aadClientSecret;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // cloud_provider_backoff - computed: false, optional: true, required: false
  private _cloudProviderBackoff?: boolean | cdktf.IResolvable; 
  public get cloudProviderBackoff() {
    return this.getBooleanAttribute('cloud_provider_backoff');
  }
  public set cloudProviderBackoff(value: boolean | cdktf.IResolvable) {
    this._cloudProviderBackoff = value;
  }
  public resetCloudProviderBackoff() {
    this._cloudProviderBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffInput() {
    return this._cloudProviderBackoff;
  }

  // cloud_provider_backoff_duration - computed: false, optional: true, required: false
  private _cloudProviderBackoffDuration?: number; 
  public get cloudProviderBackoffDuration() {
    return this.getNumberAttribute('cloud_provider_backoff_duration');
  }
  public set cloudProviderBackoffDuration(value: number) {
    this._cloudProviderBackoffDuration = value;
  }
  public resetCloudProviderBackoffDuration() {
    this._cloudProviderBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffDurationInput() {
    return this._cloudProviderBackoffDuration;
  }

  // cloud_provider_backoff_exponent - computed: false, optional: true, required: false
  private _cloudProviderBackoffExponent?: number; 
  public get cloudProviderBackoffExponent() {
    return this.getNumberAttribute('cloud_provider_backoff_exponent');
  }
  public set cloudProviderBackoffExponent(value: number) {
    this._cloudProviderBackoffExponent = value;
  }
  public resetCloudProviderBackoffExponent() {
    this._cloudProviderBackoffExponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffExponentInput() {
    return this._cloudProviderBackoffExponent;
  }

  // cloud_provider_backoff_jitter - computed: false, optional: true, required: false
  private _cloudProviderBackoffJitter?: number; 
  public get cloudProviderBackoffJitter() {
    return this.getNumberAttribute('cloud_provider_backoff_jitter');
  }
  public set cloudProviderBackoffJitter(value: number) {
    this._cloudProviderBackoffJitter = value;
  }
  public resetCloudProviderBackoffJitter() {
    this._cloudProviderBackoffJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffJitterInput() {
    return this._cloudProviderBackoffJitter;
  }

  // cloud_provider_backoff_retries - computed: false, optional: true, required: false
  private _cloudProviderBackoffRetries?: number; 
  public get cloudProviderBackoffRetries() {
    return this.getNumberAttribute('cloud_provider_backoff_retries');
  }
  public set cloudProviderBackoffRetries(value: number) {
    this._cloudProviderBackoffRetries = value;
  }
  public resetCloudProviderBackoffRetries() {
    this._cloudProviderBackoffRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffRetriesInput() {
    return this._cloudProviderBackoffRetries;
  }

  // cloud_provider_rate_limit - computed: false, optional: true, required: false
  private _cloudProviderRateLimit?: boolean | cdktf.IResolvable; 
  public get cloudProviderRateLimit() {
    return this.getBooleanAttribute('cloud_provider_rate_limit');
  }
  public set cloudProviderRateLimit(value: boolean | cdktf.IResolvable) {
    this._cloudProviderRateLimit = value;
  }
  public resetCloudProviderRateLimit() {
    this._cloudProviderRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitInput() {
    return this._cloudProviderRateLimit;
  }

  // cloud_provider_rate_limit_bucket - computed: true, optional: true, required: false
  private _cloudProviderRateLimitBucket?: number; 
  public get cloudProviderRateLimitBucket() {
    return this.getNumberAttribute('cloud_provider_rate_limit_bucket');
  }
  public set cloudProviderRateLimitBucket(value: number) {
    this._cloudProviderRateLimitBucket = value;
  }
  public resetCloudProviderRateLimitBucket() {
    this._cloudProviderRateLimitBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitBucketInput() {
    return this._cloudProviderRateLimitBucket;
  }

  // cloud_provider_rate_limit_qps - computed: false, optional: true, required: false
  private _cloudProviderRateLimitQps?: number; 
  public get cloudProviderRateLimitQps() {
    return this.getNumberAttribute('cloud_provider_rate_limit_qps');
  }
  public set cloudProviderRateLimitQps(value: number) {
    this._cloudProviderRateLimitQps = value;
  }
  public resetCloudProviderRateLimitQps() {
    this._cloudProviderRateLimitQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitQpsInput() {
    return this._cloudProviderRateLimitQps;
  }

  // load_balancer_sku - computed: false, optional: true, required: false
  private _loadBalancerSku?: string; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // maximum_load_balancer_rule_count - computed: false, optional: true, required: false
  private _maximumLoadBalancerRuleCount?: number; 
  public get maximumLoadBalancerRuleCount() {
    return this.getNumberAttribute('maximum_load_balancer_rule_count');
  }
  public set maximumLoadBalancerRuleCount(value: number) {
    this._maximumLoadBalancerRuleCount = value;
  }
  public resetMaximumLoadBalancerRuleCount() {
    this._maximumLoadBalancerRuleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLoadBalancerRuleCountInput() {
    return this._maximumLoadBalancerRuleCount;
  }

  // primary_availability_set_name - computed: false, optional: true, required: false
  private _primaryAvailabilitySetName?: string; 
  public get primaryAvailabilitySetName() {
    return this.getStringAttribute('primary_availability_set_name');
  }
  public set primaryAvailabilitySetName(value: string) {
    this._primaryAvailabilitySetName = value;
  }
  public resetPrimaryAvailabilitySetName() {
    this._primaryAvailabilitySetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAvailabilitySetNameInput() {
    return this._primaryAvailabilitySetName;
  }

  // primary_scale_set_name - computed: false, optional: true, required: false
  private _primaryScaleSetName?: string; 
  public get primaryScaleSetName() {
    return this.getStringAttribute('primary_scale_set_name');
  }
  public set primaryScaleSetName(value: string) {
    this._primaryScaleSetName = value;
  }
  public resetPrimaryScaleSetName() {
    this._primaryScaleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryScaleSetNameInput() {
    return this._primaryScaleSetName;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // route_table_name - computed: false, optional: true, required: false
  private _routeTableName?: string; 
  public get routeTableName() {
    return this.getStringAttribute('route_table_name');
  }
  public set routeTableName(value: string) {
    this._routeTableName = value;
  }
  public resetRouteTableName() {
    this._routeTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableNameInput() {
    return this._routeTableName;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_instance_metadata - computed: false, optional: true, required: false
  private _useInstanceMetadata?: boolean | cdktf.IResolvable; 
  public get useInstanceMetadata() {
    return this.getBooleanAttribute('use_instance_metadata');
  }
  public set useInstanceMetadata(value: boolean | cdktf.IResolvable) {
    this._useInstanceMetadata = value;
  }
  public resetUseInstanceMetadata() {
    this._useInstanceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInstanceMetadataInput() {
    return this._useInstanceMetadata;
  }

  // use_managed_identity_extension - computed: false, optional: true, required: false
  private _useManagedIdentityExtension?: boolean | cdktf.IResolvable; 
  public get useManagedIdentityExtension() {
    return this.getBooleanAttribute('use_managed_identity_extension');
  }
  public set useManagedIdentityExtension(value: boolean | cdktf.IResolvable) {
    this._useManagedIdentityExtension = value;
  }
  public resetUseManagedIdentityExtension() {
    this._useManagedIdentityExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedIdentityExtensionInput() {
    return this._useManagedIdentityExtension;
  }

  // vm_type - computed: false, optional: true, required: false
  private _vmType?: string; 
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }
  public set vmType(value: string) {
    this._vmType = value;
  }
  public resetVmType() {
    this._vmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypeInput() {
    return this._vmType;
  }

  // vnet_name - computed: false, optional: true, required: false
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  public resetVnetName() {
    this._vnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: string; 
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: string) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface ClusterCloudProviderAzureCloudProvider {
  /**
  * The password of the client certificate for an AAD application with RBAC access to talk to Azure RM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aad_client_cert_password Cluster#aad_client_cert_password}
  */
  readonly aadClientCertPassword?: string;
  /**
  * The path of a client certificate for an AAD application with RBAC access to talk to Azure RM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aad_client_cert_path Cluster#aad_client_cert_path}
  */
  readonly aadClientCertPath?: string;
  /**
  * The ClientID for an AAD application with RBAC access to talk to Azure RM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aad_client_id Cluster#aad_client_id}
  */
  readonly aadClientId: string;
  /**
  * The ClientSecret for an AAD application with RBAC access to talk to Azure RM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aad_client_secret Cluster#aad_client_secret}
  */
  readonly aadClientSecret: string;
  /**
  * The cloud environment identifier. Takes values from https://github.com/Azure/go-autorest/blob/ec5f4903f77ed9927ac95b19ab8e44ada64c1356/autorest/azure/environments.go#L13
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud Cluster#cloud}
  */
  readonly cloud?: string;
  /**
  * Enable exponential backoff to manage resource request retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff Cluster#cloud_provider_backoff}
  */
  readonly cloudProviderBackoff?: boolean | cdktf.IResolvable;
  /**
  * Backoff duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff_duration Cluster#cloud_provider_backoff_duration}
  */
  readonly cloudProviderBackoffDuration?: number;
  /**
  * Backoff exponent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff_exponent Cluster#cloud_provider_backoff_exponent}
  */
  readonly cloudProviderBackoffExponent?: number;
  /**
  * Backoff jitter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff_jitter Cluster#cloud_provider_backoff_jitter}
  */
  readonly cloudProviderBackoffJitter?: number;
  /**
  * Backoff retry limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_backoff_retries Cluster#cloud_provider_backoff_retries}
  */
  readonly cloudProviderBackoffRetries?: number;
  /**
  * Enable rate limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_rate_limit Cluster#cloud_provider_rate_limit}
  */
  readonly cloudProviderRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_rate_limit_bucket Cluster#cloud_provider_rate_limit_bucket}
  */
  readonly cloudProviderRateLimitBucket?: number;
  /**
  * Rate limit QPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider_rate_limit_qps Cluster#cloud_provider_rate_limit_qps}
  */
  readonly cloudProviderRateLimitQps?: number;
  /**
  * Load balancer type (basic | standard). Must be standard for auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#load_balancer_sku Cluster#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * The location of the resource group that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#location Cluster#location}
  */
  readonly location?: string;
  /**
  * Maximum allowed LoadBalancer Rule Count is the limit enforced by Azure Load balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#maximum_load_balancer_rule_count Cluster#maximum_load_balancer_rule_count}
  */
  readonly maximumLoadBalancerRuleCount?: number;
  /**
  * The name of the availability set that should be used as the load balancer backendIf this is set, the Azure cloudprovider will only add nodes from that availability set to the loadbalancer backend pool. If this is not set, and multiple agent pools (availability sets) are used, thenthe cloudprovider will try to add all nodes to a single backend pool which is forbidden.In other words, if you use multiple agent pools (availability sets), you MUST set this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#primary_availability_set_name Cluster#primary_availability_set_name}
  */
  readonly primaryAvailabilitySetName?: string;
  /**
  * The name of the scale set that should be used as the load balancer backend.If this is set, the Azure cloudprovider will only add nodes from that scale set to the loadbalancer backend pool. If this is not set, and multiple agent pools (scale sets) are used, thenthe cloudprovider will try to add all nodes to a single backend pool which is forbidden.In other words, if you use multiple agent pools (scale sets), you MUST set this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#primary_scale_set_name Cluster#primary_scale_set_name}
  */
  readonly primaryScaleSetName?: string;
  /**
  * The name of the resource group that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#resource_group Cluster#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * (Optional in 1.6) The name of the route table attached to the subnet that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#route_table_name Cluster#route_table_name}
  */
  readonly routeTableName?: string;
  /**
  * The name of the security group attached to the cluster's subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#security_group_name Cluster#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * The name of the Subnet that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#subnet_name Cluster#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * The ID of the Azure Subscription that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#subscription_id Cluster#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The AAD Tenant ID for the Subscription that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#tenant_id Cluster#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Use instance metadata service where possible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#use_instance_metadata Cluster#use_instance_metadata}
  */
  readonly useInstanceMetadata?: boolean | cdktf.IResolvable;
  /**
  * Use managed service identity for the virtual machine to access Azure ARM APIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#use_managed_identity_extension Cluster#use_managed_identity_extension}
  */
  readonly useManagedIdentityExtension?: boolean | cdktf.IResolvable;
  /**
  * The type of azure nodes. If not set, it will be default to standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vm_type Cluster#vm_type}
  */
  readonly vmType?: string;
  /**
  * The name of the VNet that the cluster is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vnet_name Cluster#vnet_name}
  */
  readonly vnetName?: string;
  /**
  * The name of the resource group that the Vnet is deployed in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vnet_resource_group Cluster#vnet_resource_group}
  */
  readonly vnetResourceGroup?: string;
}

export function clusterCloudProviderAzureCloudProviderToTerraform(struct?: ClusterCloudProviderAzureCloudProviderOutputReference | ClusterCloudProviderAzureCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aad_client_cert_password: cdktf.stringToTerraform(struct!.aadClientCertPassword),
    aad_client_cert_path: cdktf.stringToTerraform(struct!.aadClientCertPath),
    aad_client_id: cdktf.stringToTerraform(struct!.aadClientId),
    aad_client_secret: cdktf.stringToTerraform(struct!.aadClientSecret),
    cloud: cdktf.stringToTerraform(struct!.cloud),
    cloud_provider_backoff: cdktf.booleanToTerraform(struct!.cloudProviderBackoff),
    cloud_provider_backoff_duration: cdktf.numberToTerraform(struct!.cloudProviderBackoffDuration),
    cloud_provider_backoff_exponent: cdktf.numberToTerraform(struct!.cloudProviderBackoffExponent),
    cloud_provider_backoff_jitter: cdktf.numberToTerraform(struct!.cloudProviderBackoffJitter),
    cloud_provider_backoff_retries: cdktf.numberToTerraform(struct!.cloudProviderBackoffRetries),
    cloud_provider_rate_limit: cdktf.booleanToTerraform(struct!.cloudProviderRateLimit),
    cloud_provider_rate_limit_bucket: cdktf.numberToTerraform(struct!.cloudProviderRateLimitBucket),
    cloud_provider_rate_limit_qps: cdktf.numberToTerraform(struct!.cloudProviderRateLimitQps),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    location: cdktf.stringToTerraform(struct!.location),
    maximum_load_balancer_rule_count: cdktf.numberToTerraform(struct!.maximumLoadBalancerRuleCount),
    primary_availability_set_name: cdktf.stringToTerraform(struct!.primaryAvailabilitySetName),
    primary_scale_set_name: cdktf.stringToTerraform(struct!.primaryScaleSetName),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    route_table_name: cdktf.stringToTerraform(struct!.routeTableName),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    use_instance_metadata: cdktf.booleanToTerraform(struct!.useInstanceMetadata),
    use_managed_identity_extension: cdktf.booleanToTerraform(struct!.useManagedIdentityExtension),
    vm_type: cdktf.stringToTerraform(struct!.vmType),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
    vnet_resource_group: cdktf.stringToTerraform(struct!.vnetResourceGroup),
  }
}


export function clusterCloudProviderAzureCloudProviderToHclTerraform(struct?: ClusterCloudProviderAzureCloudProviderOutputReference | ClusterCloudProviderAzureCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aad_client_cert_password: {
      value: cdktf.stringToHclTerraform(struct!.aadClientCertPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.aadClientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_id: {
      value: cdktf.stringToHclTerraform(struct!.aadClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.aadClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider_backoff: {
      value: cdktf.booleanToHclTerraform(struct!.cloudProviderBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider_backoff_duration: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_exponent: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffExponent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_jitter: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_retries: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_rate_limit: {
      value: cdktf.booleanToHclTerraform(struct!.cloudProviderRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider_rate_limit_bucket: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderRateLimitBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_rate_limit_qps: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderRateLimitQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_balancer_sku: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_load_balancer_rule_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumLoadBalancerRuleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_availability_set_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryAvailabilitySetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_scale_set_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryScaleSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_name: {
      value: cdktf.stringToHclTerraform(struct!.routeTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_instance_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.useInstanceMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_managed_identity_extension: {
      value: cdktf.booleanToHclTerraform(struct!.useManagedIdentityExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_type: {
      value: cdktf.stringToHclTerraform(struct!.vmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderAzureCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderAzureCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aadClientCertPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientCertPassword = this._aadClientCertPassword;
    }
    if (this._aadClientCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientCertPath = this._aadClientCertPath;
    }
    if (this._aadClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientId = this._aadClientId;
    }
    if (this._aadClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientSecret = this._aadClientSecret;
    }
    if (this._cloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud;
    }
    if (this._cloudProviderBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoff = this._cloudProviderBackoff;
    }
    if (this._cloudProviderBackoffDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffDuration = this._cloudProviderBackoffDuration;
    }
    if (this._cloudProviderBackoffExponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffExponent = this._cloudProviderBackoffExponent;
    }
    if (this._cloudProviderBackoffJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffJitter = this._cloudProviderBackoffJitter;
    }
    if (this._cloudProviderBackoffRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffRetries = this._cloudProviderBackoffRetries;
    }
    if (this._cloudProviderRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimit = this._cloudProviderRateLimit;
    }
    if (this._cloudProviderRateLimitBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimitBucket = this._cloudProviderRateLimitBucket;
    }
    if (this._cloudProviderRateLimitQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimitQps = this._cloudProviderRateLimitQps;
    }
    if (this._loadBalancerSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSku = this._loadBalancerSku;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._maximumLoadBalancerRuleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLoadBalancerRuleCount = this._maximumLoadBalancerRuleCount;
    }
    if (this._primaryAvailabilitySetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryAvailabilitySetName = this._primaryAvailabilitySetName;
    }
    if (this._primaryScaleSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryScaleSetName = this._primaryScaleSetName;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._routeTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableName = this._routeTableName;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._useInstanceMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInstanceMetadata = this._useInstanceMetadata;
    }
    if (this._useManagedIdentityExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.useManagedIdentityExtension = this._useManagedIdentityExtension;
    }
    if (this._vmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmType = this._vmType;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderAzureCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aadClientCertPassword = undefined;
      this._aadClientCertPath = undefined;
      this._aadClientId = undefined;
      this._aadClientSecret = undefined;
      this._cloud = undefined;
      this._cloudProviderBackoff = undefined;
      this._cloudProviderBackoffDuration = undefined;
      this._cloudProviderBackoffExponent = undefined;
      this._cloudProviderBackoffJitter = undefined;
      this._cloudProviderBackoffRetries = undefined;
      this._cloudProviderRateLimit = undefined;
      this._cloudProviderRateLimitBucket = undefined;
      this._cloudProviderRateLimitQps = undefined;
      this._loadBalancerSku = undefined;
      this._location = undefined;
      this._maximumLoadBalancerRuleCount = undefined;
      this._primaryAvailabilitySetName = undefined;
      this._primaryScaleSetName = undefined;
      this._resourceGroup = undefined;
      this._routeTableName = undefined;
      this._securityGroupName = undefined;
      this._subnetName = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
      this._useInstanceMetadata = undefined;
      this._useManagedIdentityExtension = undefined;
      this._vmType = undefined;
      this._vnetName = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aadClientCertPassword = value.aadClientCertPassword;
      this._aadClientCertPath = value.aadClientCertPath;
      this._aadClientId = value.aadClientId;
      this._aadClientSecret = value.aadClientSecret;
      this._cloud = value.cloud;
      this._cloudProviderBackoff = value.cloudProviderBackoff;
      this._cloudProviderBackoffDuration = value.cloudProviderBackoffDuration;
      this._cloudProviderBackoffExponent = value.cloudProviderBackoffExponent;
      this._cloudProviderBackoffJitter = value.cloudProviderBackoffJitter;
      this._cloudProviderBackoffRetries = value.cloudProviderBackoffRetries;
      this._cloudProviderRateLimit = value.cloudProviderRateLimit;
      this._cloudProviderRateLimitBucket = value.cloudProviderRateLimitBucket;
      this._cloudProviderRateLimitQps = value.cloudProviderRateLimitQps;
      this._loadBalancerSku = value.loadBalancerSku;
      this._location = value.location;
      this._maximumLoadBalancerRuleCount = value.maximumLoadBalancerRuleCount;
      this._primaryAvailabilitySetName = value.primaryAvailabilitySetName;
      this._primaryScaleSetName = value.primaryScaleSetName;
      this._resourceGroup = value.resourceGroup;
      this._routeTableName = value.routeTableName;
      this._securityGroupName = value.securityGroupName;
      this._subnetName = value.subnetName;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
      this._useInstanceMetadata = value.useInstanceMetadata;
      this._useManagedIdentityExtension = value.useManagedIdentityExtension;
      this._vmType = value.vmType;
      this._vnetName = value.vnetName;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // aad_client_cert_password - computed: false, optional: true, required: false
  private _aadClientCertPassword?: string; 
  public get aadClientCertPassword() {
    return this.getStringAttribute('aad_client_cert_password');
  }
  public set aadClientCertPassword(value: string) {
    this._aadClientCertPassword = value;
  }
  public resetAadClientCertPassword() {
    this._aadClientCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientCertPasswordInput() {
    return this._aadClientCertPassword;
  }

  // aad_client_cert_path - computed: false, optional: true, required: false
  private _aadClientCertPath?: string; 
  public get aadClientCertPath() {
    return this.getStringAttribute('aad_client_cert_path');
  }
  public set aadClientCertPath(value: string) {
    this._aadClientCertPath = value;
  }
  public resetAadClientCertPath() {
    this._aadClientCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientCertPathInput() {
    return this._aadClientCertPath;
  }

  // aad_client_id - computed: false, optional: false, required: true
  private _aadClientId?: string; 
  public get aadClientId() {
    return this.getStringAttribute('aad_client_id');
  }
  public set aadClientId(value: string) {
    this._aadClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientIdInput() {
    return this._aadClientId;
  }

  // aad_client_secret - computed: false, optional: false, required: true
  private _aadClientSecret?: string; 
  public get aadClientSecret() {
    return this.getStringAttribute('aad_client_secret');
  }
  public set aadClientSecret(value: string) {
    this._aadClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientSecretInput() {
    return this._aadClientSecret;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // cloud_provider_backoff - computed: false, optional: true, required: false
  private _cloudProviderBackoff?: boolean | cdktf.IResolvable; 
  public get cloudProviderBackoff() {
    return this.getBooleanAttribute('cloud_provider_backoff');
  }
  public set cloudProviderBackoff(value: boolean | cdktf.IResolvable) {
    this._cloudProviderBackoff = value;
  }
  public resetCloudProviderBackoff() {
    this._cloudProviderBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffInput() {
    return this._cloudProviderBackoff;
  }

  // cloud_provider_backoff_duration - computed: false, optional: true, required: false
  private _cloudProviderBackoffDuration?: number; 
  public get cloudProviderBackoffDuration() {
    return this.getNumberAttribute('cloud_provider_backoff_duration');
  }
  public set cloudProviderBackoffDuration(value: number) {
    this._cloudProviderBackoffDuration = value;
  }
  public resetCloudProviderBackoffDuration() {
    this._cloudProviderBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffDurationInput() {
    return this._cloudProviderBackoffDuration;
  }

  // cloud_provider_backoff_exponent - computed: false, optional: true, required: false
  private _cloudProviderBackoffExponent?: number; 
  public get cloudProviderBackoffExponent() {
    return this.getNumberAttribute('cloud_provider_backoff_exponent');
  }
  public set cloudProviderBackoffExponent(value: number) {
    this._cloudProviderBackoffExponent = value;
  }
  public resetCloudProviderBackoffExponent() {
    this._cloudProviderBackoffExponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffExponentInput() {
    return this._cloudProviderBackoffExponent;
  }

  // cloud_provider_backoff_jitter - computed: false, optional: true, required: false
  private _cloudProviderBackoffJitter?: number; 
  public get cloudProviderBackoffJitter() {
    return this.getNumberAttribute('cloud_provider_backoff_jitter');
  }
  public set cloudProviderBackoffJitter(value: number) {
    this._cloudProviderBackoffJitter = value;
  }
  public resetCloudProviderBackoffJitter() {
    this._cloudProviderBackoffJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffJitterInput() {
    return this._cloudProviderBackoffJitter;
  }

  // cloud_provider_backoff_retries - computed: false, optional: true, required: false
  private _cloudProviderBackoffRetries?: number; 
  public get cloudProviderBackoffRetries() {
    return this.getNumberAttribute('cloud_provider_backoff_retries');
  }
  public set cloudProviderBackoffRetries(value: number) {
    this._cloudProviderBackoffRetries = value;
  }
  public resetCloudProviderBackoffRetries() {
    this._cloudProviderBackoffRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffRetriesInput() {
    return this._cloudProviderBackoffRetries;
  }

  // cloud_provider_rate_limit - computed: false, optional: true, required: false
  private _cloudProviderRateLimit?: boolean | cdktf.IResolvable; 
  public get cloudProviderRateLimit() {
    return this.getBooleanAttribute('cloud_provider_rate_limit');
  }
  public set cloudProviderRateLimit(value: boolean | cdktf.IResolvable) {
    this._cloudProviderRateLimit = value;
  }
  public resetCloudProviderRateLimit() {
    this._cloudProviderRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitInput() {
    return this._cloudProviderRateLimit;
  }

  // cloud_provider_rate_limit_bucket - computed: true, optional: true, required: false
  private _cloudProviderRateLimitBucket?: number; 
  public get cloudProviderRateLimitBucket() {
    return this.getNumberAttribute('cloud_provider_rate_limit_bucket');
  }
  public set cloudProviderRateLimitBucket(value: number) {
    this._cloudProviderRateLimitBucket = value;
  }
  public resetCloudProviderRateLimitBucket() {
    this._cloudProviderRateLimitBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitBucketInput() {
    return this._cloudProviderRateLimitBucket;
  }

  // cloud_provider_rate_limit_qps - computed: false, optional: true, required: false
  private _cloudProviderRateLimitQps?: number; 
  public get cloudProviderRateLimitQps() {
    return this.getNumberAttribute('cloud_provider_rate_limit_qps');
  }
  public set cloudProviderRateLimitQps(value: number) {
    this._cloudProviderRateLimitQps = value;
  }
  public resetCloudProviderRateLimitQps() {
    this._cloudProviderRateLimitQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitQpsInput() {
    return this._cloudProviderRateLimitQps;
  }

  // load_balancer_sku - computed: false, optional: true, required: false
  private _loadBalancerSku?: string; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // maximum_load_balancer_rule_count - computed: false, optional: true, required: false
  private _maximumLoadBalancerRuleCount?: number; 
  public get maximumLoadBalancerRuleCount() {
    return this.getNumberAttribute('maximum_load_balancer_rule_count');
  }
  public set maximumLoadBalancerRuleCount(value: number) {
    this._maximumLoadBalancerRuleCount = value;
  }
  public resetMaximumLoadBalancerRuleCount() {
    this._maximumLoadBalancerRuleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLoadBalancerRuleCountInput() {
    return this._maximumLoadBalancerRuleCount;
  }

  // primary_availability_set_name - computed: false, optional: true, required: false
  private _primaryAvailabilitySetName?: string; 
  public get primaryAvailabilitySetName() {
    return this.getStringAttribute('primary_availability_set_name');
  }
  public set primaryAvailabilitySetName(value: string) {
    this._primaryAvailabilitySetName = value;
  }
  public resetPrimaryAvailabilitySetName() {
    this._primaryAvailabilitySetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAvailabilitySetNameInput() {
    return this._primaryAvailabilitySetName;
  }

  // primary_scale_set_name - computed: false, optional: true, required: false
  private _primaryScaleSetName?: string; 
  public get primaryScaleSetName() {
    return this.getStringAttribute('primary_scale_set_name');
  }
  public set primaryScaleSetName(value: string) {
    this._primaryScaleSetName = value;
  }
  public resetPrimaryScaleSetName() {
    this._primaryScaleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryScaleSetNameInput() {
    return this._primaryScaleSetName;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // route_table_name - computed: false, optional: true, required: false
  private _routeTableName?: string; 
  public get routeTableName() {
    return this.getStringAttribute('route_table_name');
  }
  public set routeTableName(value: string) {
    this._routeTableName = value;
  }
  public resetRouteTableName() {
    this._routeTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableNameInput() {
    return this._routeTableName;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_instance_metadata - computed: false, optional: true, required: false
  private _useInstanceMetadata?: boolean | cdktf.IResolvable; 
  public get useInstanceMetadata() {
    return this.getBooleanAttribute('use_instance_metadata');
  }
  public set useInstanceMetadata(value: boolean | cdktf.IResolvable) {
    this._useInstanceMetadata = value;
  }
  public resetUseInstanceMetadata() {
    this._useInstanceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInstanceMetadataInput() {
    return this._useInstanceMetadata;
  }

  // use_managed_identity_extension - computed: false, optional: true, required: false
  private _useManagedIdentityExtension?: boolean | cdktf.IResolvable; 
  public get useManagedIdentityExtension() {
    return this.getBooleanAttribute('use_managed_identity_extension');
  }
  public set useManagedIdentityExtension(value: boolean | cdktf.IResolvable) {
    this._useManagedIdentityExtension = value;
  }
  public resetUseManagedIdentityExtension() {
    this._useManagedIdentityExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedIdentityExtensionInput() {
    return this._useManagedIdentityExtension;
  }

  // vm_type - computed: false, optional: true, required: false
  private _vmType?: string; 
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }
  public set vmType(value: string) {
    this._vmType = value;
  }
  public resetVmType() {
    this._vmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypeInput() {
    return this._vmType;
  }

  // vnet_name - computed: false, optional: true, required: false
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  public resetVnetName() {
    this._vnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: string; 
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: string) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface ClusterCloudProviderOpenstackCloudConfigBlockStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#bs_version Cluster#bs_version}
  */
  readonly bsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ignore_volume_az Cluster#ignore_volume_az}
  */
  readonly ignoreVolumeAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#trust_device_path Cluster#trust_device_path}
  */
  readonly trustDevicePath?: boolean | cdktf.IResolvable;
}

export function clusterCloudProviderOpenstackCloudConfigBlockStorageToTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigBlockStorageOutputReference | ClusterCloudProviderOpenstackCloudConfigBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bs_version: cdktf.stringToTerraform(struct!.bsVersion),
    ignore_volume_az: cdktf.booleanToTerraform(struct!.ignoreVolumeAz),
    trust_device_path: cdktf.booleanToTerraform(struct!.trustDevicePath),
  }
}


export function clusterCloudProviderOpenstackCloudConfigBlockStorageToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigBlockStorageOutputReference | ClusterCloudProviderOpenstackCloudConfigBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bs_version: {
      value: cdktf.stringToHclTerraform(struct!.bsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_volume_az: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreVolumeAz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_device_path: {
      value: cdktf.booleanToHclTerraform(struct!.trustDevicePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudConfigBlockStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudConfigBlockStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsVersion = this._bsVersion;
    }
    if (this._ignoreVolumeAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreVolumeAz = this._ignoreVolumeAz;
    }
    if (this._trustDevicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustDevicePath = this._trustDevicePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudConfigBlockStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bsVersion = undefined;
      this._ignoreVolumeAz = undefined;
      this._trustDevicePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bsVersion = value.bsVersion;
      this._ignoreVolumeAz = value.ignoreVolumeAz;
      this._trustDevicePath = value.trustDevicePath;
    }
  }

  // bs_version - computed: false, optional: true, required: false
  private _bsVersion?: string; 
  public get bsVersion() {
    return this.getStringAttribute('bs_version');
  }
  public set bsVersion(value: string) {
    this._bsVersion = value;
  }
  public resetBsVersion() {
    this._bsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsVersionInput() {
    return this._bsVersion;
  }

  // ignore_volume_az - computed: false, optional: true, required: false
  private _ignoreVolumeAz?: boolean | cdktf.IResolvable; 
  public get ignoreVolumeAz() {
    return this.getBooleanAttribute('ignore_volume_az');
  }
  public set ignoreVolumeAz(value: boolean | cdktf.IResolvable) {
    this._ignoreVolumeAz = value;
  }
  public resetIgnoreVolumeAz() {
    this._ignoreVolumeAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreVolumeAzInput() {
    return this._ignoreVolumeAz;
  }

  // trust_device_path - computed: false, optional: true, required: false
  private _trustDevicePath?: boolean | cdktf.IResolvable; 
  public get trustDevicePath() {
    return this.getBooleanAttribute('trust_device_path');
  }
  public set trustDevicePath(value: boolean | cdktf.IResolvable) {
    this._trustDevicePath = value;
  }
  public resetTrustDevicePath() {
    this._trustDevicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDevicePathInput() {
    return this._trustDevicePath;
  }
}
export interface ClusterCloudProviderOpenstackCloudConfigGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#auth_url Cluster#auth_url}
  */
  readonly authUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ca_file Cluster#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#domain_id Cluster#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#domain_name Cluster#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#password Cluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#region Cluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#tenant_id Cluster#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#tenant_name Cluster#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#trust_id Cluster#trust_id}
  */
  readonly trustId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user_id Cluster#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#username Cluster#username}
  */
  readonly username?: string;
}

export function clusterCloudProviderOpenstackCloudConfigGlobalToTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigGlobalOutputReference | ClusterCloudProviderOpenstackCloudConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
    trust_id: cdktf.stringToTerraform(struct!.trustId),
    user_id: cdktf.stringToTerraform(struct!.userId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterCloudProviderOpenstackCloudConfigGlobalToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigGlobalOutputReference | ClusterCloudProviderOpenstackCloudConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_id: {
      value: cdktf.stringToHclTerraform(struct!.trustId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudConfigGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudConfigGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    if (this._trustId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustId = this._trustId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudConfigGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authUrl = undefined;
      this._caFile = undefined;
      this._domainId = undefined;
      this._domainName = undefined;
      this._password = undefined;
      this._region = undefined;
      this._tenantId = undefined;
      this._tenantName = undefined;
      this._trustId = undefined;
      this._userId = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authUrl = value.authUrl;
      this._caFile = value.caFile;
      this._domainId = value.domainId;
      this._domainName = value.domainName;
      this._password = value.password;
      this._region = value.region;
      this._tenantId = value.tenantId;
      this._tenantName = value.tenantName;
      this._trustId = value.trustId;
      this._userId = value.userId;
      this._username = value.username;
    }
  }

  // auth_url - computed: false, optional: false, required: true
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // trust_id - computed: false, optional: true, required: false
  private _trustId?: string; 
  public get trustId() {
    return this.getStringAttribute('trust_id');
  }
  public set trustId(value: string) {
    this._trustId = value;
  }
  public resetTrustId() {
    this._trustId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIdInput() {
    return this._trustId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ClusterCloudProviderOpenstackCloudConfigLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#create_monitor Cluster#create_monitor}
  */
  readonly createMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#floating_network_id Cluster#floating_network_id}
  */
  readonly floatingNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#lb_method Cluster#lb_method}
  */
  readonly lbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#lb_provider Cluster#lb_provider}
  */
  readonly lbProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#lb_version Cluster#lb_version}
  */
  readonly lbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#manage_security_groups Cluster#manage_security_groups}
  */
  readonly manageSecurityGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#monitor_delay Cluster#monitor_delay}
  */
  readonly monitorDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#monitor_max_retries Cluster#monitor_max_retries}
  */
  readonly monitorMaxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#monitor_timeout Cluster#monitor_timeout}
  */
  readonly monitorTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#subnet_id Cluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#use_octavia Cluster#use_octavia}
  */
  readonly useOctavia?: boolean | cdktf.IResolvable;
}

export function clusterCloudProviderOpenstackCloudConfigLoadBalancerToTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigLoadBalancerOutputReference | ClusterCloudProviderOpenstackCloudConfigLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_monitor: cdktf.booleanToTerraform(struct!.createMonitor),
    floating_network_id: cdktf.stringToTerraform(struct!.floatingNetworkId),
    lb_method: cdktf.stringToTerraform(struct!.lbMethod),
    lb_provider: cdktf.stringToTerraform(struct!.lbProvider),
    lb_version: cdktf.stringToTerraform(struct!.lbVersion),
    manage_security_groups: cdktf.booleanToTerraform(struct!.manageSecurityGroups),
    monitor_delay: cdktf.stringToTerraform(struct!.monitorDelay),
    monitor_max_retries: cdktf.numberToTerraform(struct!.monitorMaxRetries),
    monitor_timeout: cdktf.stringToTerraform(struct!.monitorTimeout),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    use_octavia: cdktf.booleanToTerraform(struct!.useOctavia),
  }
}


export function clusterCloudProviderOpenstackCloudConfigLoadBalancerToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigLoadBalancerOutputReference | ClusterCloudProviderOpenstackCloudConfigLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.createMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    floating_network_id: {
      value: cdktf.stringToHclTerraform(struct!.floatingNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_method: {
      value: cdktf.stringToHclTerraform(struct!.lbMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_provider: {
      value: cdktf.stringToHclTerraform(struct!.lbProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_version: {
      value: cdktf.stringToHclTerraform(struct!.lbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_security_groups: {
      value: cdktf.booleanToHclTerraform(struct!.manageSecurityGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_delay: {
      value: cdktf.stringToHclTerraform(struct!.monitorDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_max_retries: {
      value: cdktf.numberToHclTerraform(struct!.monitorMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_timeout: {
      value: cdktf.stringToHclTerraform(struct!.monitorTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_octavia: {
      value: cdktf.booleanToHclTerraform(struct!.useOctavia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudConfigLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudConfigLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMonitor = this._createMonitor;
    }
    if (this._floatingNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingNetworkId = this._floatingNetworkId;
    }
    if (this._lbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbMethod = this._lbMethod;
    }
    if (this._lbProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbProvider = this._lbProvider;
    }
    if (this._lbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbVersion = this._lbVersion;
    }
    if (this._manageSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageSecurityGroups = this._manageSecurityGroups;
    }
    if (this._monitorDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDelay = this._monitorDelay;
    }
    if (this._monitorMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMaxRetries = this._monitorMaxRetries;
    }
    if (this._monitorTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorTimeout = this._monitorTimeout;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._useOctavia !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOctavia = this._useOctavia;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudConfigLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createMonitor = undefined;
      this._floatingNetworkId = undefined;
      this._lbMethod = undefined;
      this._lbProvider = undefined;
      this._lbVersion = undefined;
      this._manageSecurityGroups = undefined;
      this._monitorDelay = undefined;
      this._monitorMaxRetries = undefined;
      this._monitorTimeout = undefined;
      this._subnetId = undefined;
      this._useOctavia = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createMonitor = value.createMonitor;
      this._floatingNetworkId = value.floatingNetworkId;
      this._lbMethod = value.lbMethod;
      this._lbProvider = value.lbProvider;
      this._lbVersion = value.lbVersion;
      this._manageSecurityGroups = value.manageSecurityGroups;
      this._monitorDelay = value.monitorDelay;
      this._monitorMaxRetries = value.monitorMaxRetries;
      this._monitorTimeout = value.monitorTimeout;
      this._subnetId = value.subnetId;
      this._useOctavia = value.useOctavia;
    }
  }

  // create_monitor - computed: false, optional: true, required: false
  private _createMonitor?: boolean | cdktf.IResolvable; 
  public get createMonitor() {
    return this.getBooleanAttribute('create_monitor');
  }
  public set createMonitor(value: boolean | cdktf.IResolvable) {
    this._createMonitor = value;
  }
  public resetCreateMonitor() {
    this._createMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMonitorInput() {
    return this._createMonitor;
  }

  // floating_network_id - computed: false, optional: true, required: false
  private _floatingNetworkId?: string; 
  public get floatingNetworkId() {
    return this.getStringAttribute('floating_network_id');
  }
  public set floatingNetworkId(value: string) {
    this._floatingNetworkId = value;
  }
  public resetFloatingNetworkId() {
    this._floatingNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingNetworkIdInput() {
    return this._floatingNetworkId;
  }

  // lb_method - computed: false, optional: true, required: false
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  public resetLbMethod() {
    this._lbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod;
  }

  // lb_provider - computed: false, optional: true, required: false
  private _lbProvider?: string; 
  public get lbProvider() {
    return this.getStringAttribute('lb_provider');
  }
  public set lbProvider(value: string) {
    this._lbProvider = value;
  }
  public resetLbProvider() {
    this._lbProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbProviderInput() {
    return this._lbProvider;
  }

  // lb_version - computed: false, optional: true, required: false
  private _lbVersion?: string; 
  public get lbVersion() {
    return this.getStringAttribute('lb_version');
  }
  public set lbVersion(value: string) {
    this._lbVersion = value;
  }
  public resetLbVersion() {
    this._lbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbVersionInput() {
    return this._lbVersion;
  }

  // manage_security_groups - computed: false, optional: true, required: false
  private _manageSecurityGroups?: boolean | cdktf.IResolvable; 
  public get manageSecurityGroups() {
    return this.getBooleanAttribute('manage_security_groups');
  }
  public set manageSecurityGroups(value: boolean | cdktf.IResolvable) {
    this._manageSecurityGroups = value;
  }
  public resetManageSecurityGroups() {
    this._manageSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSecurityGroupsInput() {
    return this._manageSecurityGroups;
  }

  // monitor_delay - computed: false, optional: true, required: false
  private _monitorDelay?: string; 
  public get monitorDelay() {
    return this.getStringAttribute('monitor_delay');
  }
  public set monitorDelay(value: string) {
    this._monitorDelay = value;
  }
  public resetMonitorDelay() {
    this._monitorDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDelayInput() {
    return this._monitorDelay;
  }

  // monitor_max_retries - computed: false, optional: true, required: false
  private _monitorMaxRetries?: number; 
  public get monitorMaxRetries() {
    return this.getNumberAttribute('monitor_max_retries');
  }
  public set monitorMaxRetries(value: number) {
    this._monitorMaxRetries = value;
  }
  public resetMonitorMaxRetries() {
    this._monitorMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMaxRetriesInput() {
    return this._monitorMaxRetries;
  }

  // monitor_timeout - computed: false, optional: true, required: false
  private _monitorTimeout?: string; 
  public get monitorTimeout() {
    return this.getStringAttribute('monitor_timeout');
  }
  public set monitorTimeout(value: string) {
    this._monitorTimeout = value;
  }
  public resetMonitorTimeout() {
    this._monitorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTimeoutInput() {
    return this._monitorTimeout;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // use_octavia - computed: false, optional: true, required: false
  private _useOctavia?: boolean | cdktf.IResolvable; 
  public get useOctavia() {
    return this.getBooleanAttribute('use_octavia');
  }
  public set useOctavia(value: boolean | cdktf.IResolvable) {
    this._useOctavia = value;
  }
  public resetUseOctavia() {
    this._useOctavia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOctaviaInput() {
    return this._useOctavia;
  }
}
export interface ClusterCloudProviderOpenstackCloudConfigMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#request_timeout Cluster#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#search_order Cluster#search_order}
  */
  readonly searchOrder?: string;
}

export function clusterCloudProviderOpenstackCloudConfigMetadataToTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigMetadataOutputReference | ClusterCloudProviderOpenstackCloudConfigMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    search_order: cdktf.stringToTerraform(struct!.searchOrder),
  }
}


export function clusterCloudProviderOpenstackCloudConfigMetadataToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigMetadataOutputReference | ClusterCloudProviderOpenstackCloudConfigMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_order: {
      value: cdktf.stringToHclTerraform(struct!.searchOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudConfigMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudConfigMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._searchOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchOrder = this._searchOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudConfigMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestTimeout = undefined;
      this._searchOrder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestTimeout = value.requestTimeout;
      this._searchOrder = value.searchOrder;
    }
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // search_order - computed: false, optional: true, required: false
  private _searchOrder?: string; 
  public get searchOrder() {
    return this.getStringAttribute('search_order');
  }
  public set searchOrder(value: string) {
    this._searchOrder = value;
  }
  public resetSearchOrder() {
    this._searchOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchOrderInput() {
    return this._searchOrder;
  }
}
export interface ClusterCloudProviderOpenstackCloudConfigRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#router_id Cluster#router_id}
  */
  readonly routerId?: string;
}

export function clusterCloudProviderOpenstackCloudConfigRouteToTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigRouteOutputReference | ClusterCloudProviderOpenstackCloudConfigRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function clusterCloudProviderOpenstackCloudConfigRouteToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigRouteOutputReference | ClusterCloudProviderOpenstackCloudConfigRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudConfigRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudConfigRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudConfigRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routerId = value.routerId;
    }
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }
}
export interface ClusterCloudProviderOpenstackCloudConfig {
  /**
  * block_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#block_storage Cluster#block_storage}
  */
  readonly blockStorage?: ClusterCloudProviderOpenstackCloudConfigBlockStorage;
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#global Cluster#global}
  */
  readonly global: ClusterCloudProviderOpenstackCloudConfigGlobal;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#load_balancer Cluster#load_balancer}
  */
  readonly loadBalancer?: ClusterCloudProviderOpenstackCloudConfigLoadBalancer;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#metadata Cluster#metadata}
  */
  readonly metadata?: ClusterCloudProviderOpenstackCloudConfigMetadata;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#route Cluster#route}
  */
  readonly route?: ClusterCloudProviderOpenstackCloudConfigRoute;
}

export function clusterCloudProviderOpenstackCloudConfigToTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigOutputReference | ClusterCloudProviderOpenstackCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage: clusterCloudProviderOpenstackCloudConfigBlockStorageToTerraform(struct!.blockStorage),
    global: clusterCloudProviderOpenstackCloudConfigGlobalToTerraform(struct!.global),
    load_balancer: clusterCloudProviderOpenstackCloudConfigLoadBalancerToTerraform(struct!.loadBalancer),
    metadata: clusterCloudProviderOpenstackCloudConfigMetadataToTerraform(struct!.metadata),
    route: clusterCloudProviderOpenstackCloudConfigRouteToTerraform(struct!.route),
  }
}


export function clusterCloudProviderOpenstackCloudConfigToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudConfigOutputReference | ClusterCloudProviderOpenstackCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage: {
      value: clusterCloudProviderOpenstackCloudConfigBlockStorageToHclTerraform(struct!.blockStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudConfigBlockStorageList",
    },
    global: {
      value: clusterCloudProviderOpenstackCloudConfigGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudConfigGlobalList",
    },
    load_balancer: {
      value: clusterCloudProviderOpenstackCloudConfigLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudConfigLoadBalancerList",
    },
    metadata: {
      value: clusterCloudProviderOpenstackCloudConfigMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudConfigMetadataList",
    },
    route: {
      value: clusterCloudProviderOpenstackCloudConfigRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudConfigRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorage = this._blockStorage?.internalValue;
    }
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorage.internalValue = undefined;
      this._global.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._route.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorage.internalValue = value.blockStorage;
      this._global.internalValue = value.global;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._metadata.internalValue = value.metadata;
      this._route.internalValue = value.route;
    }
  }

  // block_storage - computed: false, optional: true, required: false
  private _blockStorage = new ClusterCloudProviderOpenstackCloudConfigBlockStorageOutputReference(this, "block_storage");
  public get blockStorage() {
    return this._blockStorage;
  }
  public putBlockStorage(value: ClusterCloudProviderOpenstackCloudConfigBlockStorage) {
    this._blockStorage.internalValue = value;
  }
  public resetBlockStorage() {
    this._blockStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageInput() {
    return this._blockStorage.internalValue;
  }

  // global - computed: false, optional: false, required: true
  private _global = new ClusterCloudProviderOpenstackCloudConfigGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterCloudProviderOpenstackCloudConfigGlobal) {
    this._global.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new ClusterCloudProviderOpenstackCloudConfigLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ClusterCloudProviderOpenstackCloudConfigLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ClusterCloudProviderOpenstackCloudConfigMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ClusterCloudProviderOpenstackCloudConfigMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new ClusterCloudProviderOpenstackCloudConfigRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: ClusterCloudProviderOpenstackCloudConfigRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}
export interface ClusterCloudProviderOpenstackCloudProviderBlockStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#bs_version Cluster#bs_version}
  */
  readonly bsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ignore_volume_az Cluster#ignore_volume_az}
  */
  readonly ignoreVolumeAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#trust_device_path Cluster#trust_device_path}
  */
  readonly trustDevicePath?: boolean | cdktf.IResolvable;
}

export function clusterCloudProviderOpenstackCloudProviderBlockStorageToTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderBlockStorageOutputReference | ClusterCloudProviderOpenstackCloudProviderBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bs_version: cdktf.stringToTerraform(struct!.bsVersion),
    ignore_volume_az: cdktf.booleanToTerraform(struct!.ignoreVolumeAz),
    trust_device_path: cdktf.booleanToTerraform(struct!.trustDevicePath),
  }
}


export function clusterCloudProviderOpenstackCloudProviderBlockStorageToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderBlockStorageOutputReference | ClusterCloudProviderOpenstackCloudProviderBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bs_version: {
      value: cdktf.stringToHclTerraform(struct!.bsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_volume_az: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreVolumeAz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_device_path: {
      value: cdktf.booleanToHclTerraform(struct!.trustDevicePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudProviderBlockStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudProviderBlockStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsVersion = this._bsVersion;
    }
    if (this._ignoreVolumeAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreVolumeAz = this._ignoreVolumeAz;
    }
    if (this._trustDevicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustDevicePath = this._trustDevicePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudProviderBlockStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bsVersion = undefined;
      this._ignoreVolumeAz = undefined;
      this._trustDevicePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bsVersion = value.bsVersion;
      this._ignoreVolumeAz = value.ignoreVolumeAz;
      this._trustDevicePath = value.trustDevicePath;
    }
  }

  // bs_version - computed: false, optional: true, required: false
  private _bsVersion?: string; 
  public get bsVersion() {
    return this.getStringAttribute('bs_version');
  }
  public set bsVersion(value: string) {
    this._bsVersion = value;
  }
  public resetBsVersion() {
    this._bsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsVersionInput() {
    return this._bsVersion;
  }

  // ignore_volume_az - computed: false, optional: true, required: false
  private _ignoreVolumeAz?: boolean | cdktf.IResolvable; 
  public get ignoreVolumeAz() {
    return this.getBooleanAttribute('ignore_volume_az');
  }
  public set ignoreVolumeAz(value: boolean | cdktf.IResolvable) {
    this._ignoreVolumeAz = value;
  }
  public resetIgnoreVolumeAz() {
    this._ignoreVolumeAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreVolumeAzInput() {
    return this._ignoreVolumeAz;
  }

  // trust_device_path - computed: false, optional: true, required: false
  private _trustDevicePath?: boolean | cdktf.IResolvable; 
  public get trustDevicePath() {
    return this.getBooleanAttribute('trust_device_path');
  }
  public set trustDevicePath(value: boolean | cdktf.IResolvable) {
    this._trustDevicePath = value;
  }
  public resetTrustDevicePath() {
    this._trustDevicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDevicePathInput() {
    return this._trustDevicePath;
  }
}
export interface ClusterCloudProviderOpenstackCloudProviderGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#auth_url Cluster#auth_url}
  */
  readonly authUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ca_file Cluster#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#domain_id Cluster#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#domain_name Cluster#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#password Cluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#region Cluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#tenant_id Cluster#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#tenant_name Cluster#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#trust_id Cluster#trust_id}
  */
  readonly trustId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user_id Cluster#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#username Cluster#username}
  */
  readonly username?: string;
}

export function clusterCloudProviderOpenstackCloudProviderGlobalToTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderGlobalOutputReference | ClusterCloudProviderOpenstackCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
    trust_id: cdktf.stringToTerraform(struct!.trustId),
    user_id: cdktf.stringToTerraform(struct!.userId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterCloudProviderOpenstackCloudProviderGlobalToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderGlobalOutputReference | ClusterCloudProviderOpenstackCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_id: {
      value: cdktf.stringToHclTerraform(struct!.trustId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    if (this._trustId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustId = this._trustId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authUrl = undefined;
      this._caFile = undefined;
      this._domainId = undefined;
      this._domainName = undefined;
      this._password = undefined;
      this._region = undefined;
      this._tenantId = undefined;
      this._tenantName = undefined;
      this._trustId = undefined;
      this._userId = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authUrl = value.authUrl;
      this._caFile = value.caFile;
      this._domainId = value.domainId;
      this._domainName = value.domainName;
      this._password = value.password;
      this._region = value.region;
      this._tenantId = value.tenantId;
      this._tenantName = value.tenantName;
      this._trustId = value.trustId;
      this._userId = value.userId;
      this._username = value.username;
    }
  }

  // auth_url - computed: false, optional: false, required: true
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // trust_id - computed: false, optional: true, required: false
  private _trustId?: string; 
  public get trustId() {
    return this.getStringAttribute('trust_id');
  }
  public set trustId(value: string) {
    this._trustId = value;
  }
  public resetTrustId() {
    this._trustId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIdInput() {
    return this._trustId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ClusterCloudProviderOpenstackCloudProviderLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#create_monitor Cluster#create_monitor}
  */
  readonly createMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#floating_network_id Cluster#floating_network_id}
  */
  readonly floatingNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#lb_method Cluster#lb_method}
  */
  readonly lbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#lb_provider Cluster#lb_provider}
  */
  readonly lbProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#lb_version Cluster#lb_version}
  */
  readonly lbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#manage_security_groups Cluster#manage_security_groups}
  */
  readonly manageSecurityGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#monitor_delay Cluster#monitor_delay}
  */
  readonly monitorDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#monitor_max_retries Cluster#monitor_max_retries}
  */
  readonly monitorMaxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#monitor_timeout Cluster#monitor_timeout}
  */
  readonly monitorTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#subnet_id Cluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#use_octavia Cluster#use_octavia}
  */
  readonly useOctavia?: boolean | cdktf.IResolvable;
}

export function clusterCloudProviderOpenstackCloudProviderLoadBalancerToTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderLoadBalancerOutputReference | ClusterCloudProviderOpenstackCloudProviderLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_monitor: cdktf.booleanToTerraform(struct!.createMonitor),
    floating_network_id: cdktf.stringToTerraform(struct!.floatingNetworkId),
    lb_method: cdktf.stringToTerraform(struct!.lbMethod),
    lb_provider: cdktf.stringToTerraform(struct!.lbProvider),
    lb_version: cdktf.stringToTerraform(struct!.lbVersion),
    manage_security_groups: cdktf.booleanToTerraform(struct!.manageSecurityGroups),
    monitor_delay: cdktf.stringToTerraform(struct!.monitorDelay),
    monitor_max_retries: cdktf.numberToTerraform(struct!.monitorMaxRetries),
    monitor_timeout: cdktf.stringToTerraform(struct!.monitorTimeout),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    use_octavia: cdktf.booleanToTerraform(struct!.useOctavia),
  }
}


export function clusterCloudProviderOpenstackCloudProviderLoadBalancerToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderLoadBalancerOutputReference | ClusterCloudProviderOpenstackCloudProviderLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.createMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    floating_network_id: {
      value: cdktf.stringToHclTerraform(struct!.floatingNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_method: {
      value: cdktf.stringToHclTerraform(struct!.lbMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_provider: {
      value: cdktf.stringToHclTerraform(struct!.lbProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_version: {
      value: cdktf.stringToHclTerraform(struct!.lbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_security_groups: {
      value: cdktf.booleanToHclTerraform(struct!.manageSecurityGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_delay: {
      value: cdktf.stringToHclTerraform(struct!.monitorDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_max_retries: {
      value: cdktf.numberToHclTerraform(struct!.monitorMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_timeout: {
      value: cdktf.stringToHclTerraform(struct!.monitorTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_octavia: {
      value: cdktf.booleanToHclTerraform(struct!.useOctavia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudProviderLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudProviderLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMonitor = this._createMonitor;
    }
    if (this._floatingNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingNetworkId = this._floatingNetworkId;
    }
    if (this._lbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbMethod = this._lbMethod;
    }
    if (this._lbProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbProvider = this._lbProvider;
    }
    if (this._lbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbVersion = this._lbVersion;
    }
    if (this._manageSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageSecurityGroups = this._manageSecurityGroups;
    }
    if (this._monitorDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDelay = this._monitorDelay;
    }
    if (this._monitorMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMaxRetries = this._monitorMaxRetries;
    }
    if (this._monitorTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorTimeout = this._monitorTimeout;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._useOctavia !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOctavia = this._useOctavia;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudProviderLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createMonitor = undefined;
      this._floatingNetworkId = undefined;
      this._lbMethod = undefined;
      this._lbProvider = undefined;
      this._lbVersion = undefined;
      this._manageSecurityGroups = undefined;
      this._monitorDelay = undefined;
      this._monitorMaxRetries = undefined;
      this._monitorTimeout = undefined;
      this._subnetId = undefined;
      this._useOctavia = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createMonitor = value.createMonitor;
      this._floatingNetworkId = value.floatingNetworkId;
      this._lbMethod = value.lbMethod;
      this._lbProvider = value.lbProvider;
      this._lbVersion = value.lbVersion;
      this._manageSecurityGroups = value.manageSecurityGroups;
      this._monitorDelay = value.monitorDelay;
      this._monitorMaxRetries = value.monitorMaxRetries;
      this._monitorTimeout = value.monitorTimeout;
      this._subnetId = value.subnetId;
      this._useOctavia = value.useOctavia;
    }
  }

  // create_monitor - computed: false, optional: true, required: false
  private _createMonitor?: boolean | cdktf.IResolvable; 
  public get createMonitor() {
    return this.getBooleanAttribute('create_monitor');
  }
  public set createMonitor(value: boolean | cdktf.IResolvable) {
    this._createMonitor = value;
  }
  public resetCreateMonitor() {
    this._createMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMonitorInput() {
    return this._createMonitor;
  }

  // floating_network_id - computed: false, optional: true, required: false
  private _floatingNetworkId?: string; 
  public get floatingNetworkId() {
    return this.getStringAttribute('floating_network_id');
  }
  public set floatingNetworkId(value: string) {
    this._floatingNetworkId = value;
  }
  public resetFloatingNetworkId() {
    this._floatingNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingNetworkIdInput() {
    return this._floatingNetworkId;
  }

  // lb_method - computed: false, optional: true, required: false
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  public resetLbMethod() {
    this._lbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod;
  }

  // lb_provider - computed: false, optional: true, required: false
  private _lbProvider?: string; 
  public get lbProvider() {
    return this.getStringAttribute('lb_provider');
  }
  public set lbProvider(value: string) {
    this._lbProvider = value;
  }
  public resetLbProvider() {
    this._lbProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbProviderInput() {
    return this._lbProvider;
  }

  // lb_version - computed: false, optional: true, required: false
  private _lbVersion?: string; 
  public get lbVersion() {
    return this.getStringAttribute('lb_version');
  }
  public set lbVersion(value: string) {
    this._lbVersion = value;
  }
  public resetLbVersion() {
    this._lbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbVersionInput() {
    return this._lbVersion;
  }

  // manage_security_groups - computed: false, optional: true, required: false
  private _manageSecurityGroups?: boolean | cdktf.IResolvable; 
  public get manageSecurityGroups() {
    return this.getBooleanAttribute('manage_security_groups');
  }
  public set manageSecurityGroups(value: boolean | cdktf.IResolvable) {
    this._manageSecurityGroups = value;
  }
  public resetManageSecurityGroups() {
    this._manageSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSecurityGroupsInput() {
    return this._manageSecurityGroups;
  }

  // monitor_delay - computed: false, optional: true, required: false
  private _monitorDelay?: string; 
  public get monitorDelay() {
    return this.getStringAttribute('monitor_delay');
  }
  public set monitorDelay(value: string) {
    this._monitorDelay = value;
  }
  public resetMonitorDelay() {
    this._monitorDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDelayInput() {
    return this._monitorDelay;
  }

  // monitor_max_retries - computed: false, optional: true, required: false
  private _monitorMaxRetries?: number; 
  public get monitorMaxRetries() {
    return this.getNumberAttribute('monitor_max_retries');
  }
  public set monitorMaxRetries(value: number) {
    this._monitorMaxRetries = value;
  }
  public resetMonitorMaxRetries() {
    this._monitorMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMaxRetriesInput() {
    return this._monitorMaxRetries;
  }

  // monitor_timeout - computed: false, optional: true, required: false
  private _monitorTimeout?: string; 
  public get monitorTimeout() {
    return this.getStringAttribute('monitor_timeout');
  }
  public set monitorTimeout(value: string) {
    this._monitorTimeout = value;
  }
  public resetMonitorTimeout() {
    this._monitorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTimeoutInput() {
    return this._monitorTimeout;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // use_octavia - computed: false, optional: true, required: false
  private _useOctavia?: boolean | cdktf.IResolvable; 
  public get useOctavia() {
    return this.getBooleanAttribute('use_octavia');
  }
  public set useOctavia(value: boolean | cdktf.IResolvable) {
    this._useOctavia = value;
  }
  public resetUseOctavia() {
    this._useOctavia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOctaviaInput() {
    return this._useOctavia;
  }
}
export interface ClusterCloudProviderOpenstackCloudProviderMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#request_timeout Cluster#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#search_order Cluster#search_order}
  */
  readonly searchOrder?: string;
}

export function clusterCloudProviderOpenstackCloudProviderMetadataToTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderMetadataOutputReference | ClusterCloudProviderOpenstackCloudProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    search_order: cdktf.stringToTerraform(struct!.searchOrder),
  }
}


export function clusterCloudProviderOpenstackCloudProviderMetadataToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderMetadataOutputReference | ClusterCloudProviderOpenstackCloudProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_order: {
      value: cdktf.stringToHclTerraform(struct!.searchOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudProviderMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudProviderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._searchOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchOrder = this._searchOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudProviderMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestTimeout = undefined;
      this._searchOrder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestTimeout = value.requestTimeout;
      this._searchOrder = value.searchOrder;
    }
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // search_order - computed: false, optional: true, required: false
  private _searchOrder?: string; 
  public get searchOrder() {
    return this.getStringAttribute('search_order');
  }
  public set searchOrder(value: string) {
    this._searchOrder = value;
  }
  public resetSearchOrder() {
    this._searchOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchOrderInput() {
    return this._searchOrder;
  }
}
export interface ClusterCloudProviderOpenstackCloudProviderRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#router_id Cluster#router_id}
  */
  readonly routerId?: string;
}

export function clusterCloudProviderOpenstackCloudProviderRouteToTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderRouteOutputReference | ClusterCloudProviderOpenstackCloudProviderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function clusterCloudProviderOpenstackCloudProviderRouteToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderRouteOutputReference | ClusterCloudProviderOpenstackCloudProviderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudProviderRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudProviderRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudProviderRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routerId = value.routerId;
    }
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }
}
export interface ClusterCloudProviderOpenstackCloudProvider {
  /**
  * block_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#block_storage Cluster#block_storage}
  */
  readonly blockStorage?: ClusterCloudProviderOpenstackCloudProviderBlockStorage;
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#global Cluster#global}
  */
  readonly global: ClusterCloudProviderOpenstackCloudProviderGlobal;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#load_balancer Cluster#load_balancer}
  */
  readonly loadBalancer?: ClusterCloudProviderOpenstackCloudProviderLoadBalancer;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#metadata Cluster#metadata}
  */
  readonly metadata?: ClusterCloudProviderOpenstackCloudProviderMetadata;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#route Cluster#route}
  */
  readonly route?: ClusterCloudProviderOpenstackCloudProviderRoute;
}

export function clusterCloudProviderOpenstackCloudProviderToTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderOutputReference | ClusterCloudProviderOpenstackCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage: clusterCloudProviderOpenstackCloudProviderBlockStorageToTerraform(struct!.blockStorage),
    global: clusterCloudProviderOpenstackCloudProviderGlobalToTerraform(struct!.global),
    load_balancer: clusterCloudProviderOpenstackCloudProviderLoadBalancerToTerraform(struct!.loadBalancer),
    metadata: clusterCloudProviderOpenstackCloudProviderMetadataToTerraform(struct!.metadata),
    route: clusterCloudProviderOpenstackCloudProviderRouteToTerraform(struct!.route),
  }
}


export function clusterCloudProviderOpenstackCloudProviderToHclTerraform(struct?: ClusterCloudProviderOpenstackCloudProviderOutputReference | ClusterCloudProviderOpenstackCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage: {
      value: clusterCloudProviderOpenstackCloudProviderBlockStorageToHclTerraform(struct!.blockStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudProviderBlockStorageList",
    },
    global: {
      value: clusterCloudProviderOpenstackCloudProviderGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudProviderGlobalList",
    },
    load_balancer: {
      value: clusterCloudProviderOpenstackCloudProviderLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudProviderLoadBalancerList",
    },
    metadata: {
      value: clusterCloudProviderOpenstackCloudProviderMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudProviderMetadataList",
    },
    route: {
      value: clusterCloudProviderOpenstackCloudProviderRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudProviderRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOpenstackCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderOpenstackCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorage = this._blockStorage?.internalValue;
    }
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderOpenstackCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorage.internalValue = undefined;
      this._global.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._route.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorage.internalValue = value.blockStorage;
      this._global.internalValue = value.global;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._metadata.internalValue = value.metadata;
      this._route.internalValue = value.route;
    }
  }

  // block_storage - computed: false, optional: true, required: false
  private _blockStorage = new ClusterCloudProviderOpenstackCloudProviderBlockStorageOutputReference(this, "block_storage");
  public get blockStorage() {
    return this._blockStorage;
  }
  public putBlockStorage(value: ClusterCloudProviderOpenstackCloudProviderBlockStorage) {
    this._blockStorage.internalValue = value;
  }
  public resetBlockStorage() {
    this._blockStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageInput() {
    return this._blockStorage.internalValue;
  }

  // global - computed: false, optional: false, required: true
  private _global = new ClusterCloudProviderOpenstackCloudProviderGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterCloudProviderOpenstackCloudProviderGlobal) {
    this._global.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new ClusterCloudProviderOpenstackCloudProviderLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ClusterCloudProviderOpenstackCloudProviderLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ClusterCloudProviderOpenstackCloudProviderMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ClusterCloudProviderOpenstackCloudProviderMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new ClusterCloudProviderOpenstackCloudProviderRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: ClusterCloudProviderOpenstackCloudProviderRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}
export interface ClusterCloudProviderVsphereCloudConfigDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#scsi_controller_type Cluster#scsi_controller_type}
  */
  readonly scsiControllerType?: string;
}

export function clusterCloudProviderVsphereCloudConfigDiskToTerraform(struct?: ClusterCloudProviderVsphereCloudConfigDiskOutputReference | ClusterCloudProviderVsphereCloudConfigDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scsi_controller_type: cdktf.stringToTerraform(struct!.scsiControllerType),
  }
}


export function clusterCloudProviderVsphereCloudConfigDiskToHclTerraform(struct?: ClusterCloudProviderVsphereCloudConfigDiskOutputReference | ClusterCloudProviderVsphereCloudConfigDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scsi_controller_type: {
      value: cdktf.stringToHclTerraform(struct!.scsiControllerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudConfigDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudConfigDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scsiControllerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsiControllerType = this._scsiControllerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudConfigDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scsiControllerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scsiControllerType = value.scsiControllerType;
    }
  }

  // scsi_controller_type - computed: false, optional: true, required: false
  private _scsiControllerType?: string; 
  public get scsiControllerType() {
    return this.getStringAttribute('scsi_controller_type');
  }
  public set scsiControllerType(value: string) {
    this._scsiControllerType = value;
  }
  public resetScsiControllerType() {
    this._scsiControllerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiControllerTypeInput() {
    return this._scsiControllerType;
  }
}
export interface ClusterCloudProviderVsphereCloudConfigGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datacenter Cluster#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datacenters Cluster#datacenters}
  */
  readonly datacenters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datastore Cluster#datastore}
  */
  readonly datastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#insecure_flag Cluster#insecure_flag}
  */
  readonly insecureFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#password Cluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#soap_roundtrip_count Cluster#soap_roundtrip_count}
  */
  readonly soapRoundtripCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user Cluster#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vm_name Cluster#vm_name}
  */
  readonly vmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vm_uuid Cluster#vm_uuid}
  */
  readonly vmUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#working_dir Cluster#working_dir}
  */
  readonly workingDir?: string;
}

export function clusterCloudProviderVsphereCloudConfigGlobalToTerraform(struct?: ClusterCloudProviderVsphereCloudConfigGlobalOutputReference | ClusterCloudProviderVsphereCloudConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datacenters: cdktf.stringToTerraform(struct!.datacenters),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    insecure_flag: cdktf.booleanToTerraform(struct!.insecureFlag),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    soap_roundtrip_count: cdktf.numberToTerraform(struct!.soapRoundtripCount),
    user: cdktf.stringToTerraform(struct!.user),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    vm_uuid: cdktf.stringToTerraform(struct!.vmUuid),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function clusterCloudProviderVsphereCloudConfigGlobalToHclTerraform(struct?: ClusterCloudProviderVsphereCloudConfigGlobalOutputReference | ClusterCloudProviderVsphereCloudConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenters: {
      value: cdktf.stringToHclTerraform(struct!.datacenters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_flag: {
      value: cdktf.booleanToHclTerraform(struct!.insecureFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soap_roundtrip_count: {
      value: cdktf.numberToHclTerraform(struct!.soapRoundtripCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_uuid: {
      value: cdktf.stringToHclTerraform(struct!.vmUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudConfigGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudConfigGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._insecureFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureFlag = this._insecureFlag;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._soapRoundtripCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.soapRoundtripCount = this._soapRoundtripCount;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    if (this._vmUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmUuid = this._vmUuid;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudConfigGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenter = undefined;
      this._datacenters = undefined;
      this._datastore = undefined;
      this._insecureFlag = undefined;
      this._password = undefined;
      this._port = undefined;
      this._soapRoundtripCount = undefined;
      this._user = undefined;
      this._vmName = undefined;
      this._vmUuid = undefined;
      this._workingDir = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenter = value.datacenter;
      this._datacenters = value.datacenters;
      this._datastore = value.datastore;
      this._insecureFlag = value.insecureFlag;
      this._password = value.password;
      this._port = value.port;
      this._soapRoundtripCount = value.soapRoundtripCount;
      this._user = value.user;
      this._vmName = value.vmName;
      this._vmUuid = value.vmUuid;
      this._workingDir = value.workingDir;
    }
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datacenters - computed: true, optional: true, required: false
  private _datacenters?: string; 
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }
  public set datacenters(value: string) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // insecure_flag - computed: false, optional: true, required: false
  private _insecureFlag?: boolean | cdktf.IResolvable; 
  public get insecureFlag() {
    return this.getBooleanAttribute('insecure_flag');
  }
  public set insecureFlag(value: boolean | cdktf.IResolvable) {
    this._insecureFlag = value;
  }
  public resetInsecureFlag() {
    this._insecureFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureFlagInput() {
    return this._insecureFlag;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // soap_roundtrip_count - computed: false, optional: true, required: false
  private _soapRoundtripCount?: number; 
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }
  public set soapRoundtripCount(value: number) {
    this._soapRoundtripCount = value;
  }
  public resetSoapRoundtripCount() {
    this._soapRoundtripCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapRoundtripCountInput() {
    return this._soapRoundtripCount;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // vm_uuid - computed: false, optional: true, required: false
  private _vmUuid?: string; 
  public get vmUuid() {
    return this.getStringAttribute('vm_uuid');
  }
  public set vmUuid(value: string) {
    this._vmUuid = value;
  }
  public resetVmUuid() {
    this._vmUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmUuidInput() {
    return this._vmUuid;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}
export interface ClusterCloudProviderVsphereCloudConfigNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#public_network Cluster#public_network}
  */
  readonly publicNetwork?: string;
}

export function clusterCloudProviderVsphereCloudConfigNetworkToTerraform(struct?: ClusterCloudProviderVsphereCloudConfigNetworkOutputReference | ClusterCloudProviderVsphereCloudConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_network: cdktf.stringToTerraform(struct!.publicNetwork),
  }
}


export function clusterCloudProviderVsphereCloudConfigNetworkToHclTerraform(struct?: ClusterCloudProviderVsphereCloudConfigNetworkOutputReference | ClusterCloudProviderVsphereCloudConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_network: {
      value: cdktf.stringToHclTerraform(struct!.publicNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudConfigNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudConfigNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetwork = this._publicNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudConfigNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicNetwork = value.publicNetwork;
    }
  }

  // public_network - computed: false, optional: true, required: false
  private _publicNetwork?: string; 
  public get publicNetwork() {
    return this.getStringAttribute('public_network');
  }
  public set publicNetwork(value: string) {
    this._publicNetwork = value;
  }
  public resetPublicNetwork() {
    this._publicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork;
  }
}
export interface ClusterCloudProviderVsphereCloudConfigVirtualCenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datacenters Cluster#datacenters}
  */
  readonly datacenters: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#password Cluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#soap_roundtrip_count Cluster#soap_roundtrip_count}
  */
  readonly soapRoundtripCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user Cluster#user}
  */
  readonly user: string;
}

export function clusterCloudProviderVsphereCloudConfigVirtualCenterToTerraform(struct?: ClusterCloudProviderVsphereCloudConfigVirtualCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.stringToTerraform(struct!.datacenters),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    soap_roundtrip_count: cdktf.numberToTerraform(struct!.soapRoundtripCount),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterCloudProviderVsphereCloudConfigVirtualCenterToHclTerraform(struct?: ClusterCloudProviderVsphereCloudConfigVirtualCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenters: {
      value: cdktf.stringToHclTerraform(struct!.datacenters),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soap_roundtrip_count: {
      value: cdktf.numberToHclTerraform(struct!.soapRoundtripCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudConfigVirtualCenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCloudProviderVsphereCloudConfigVirtualCenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._soapRoundtripCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.soapRoundtripCount = this._soapRoundtripCount;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudConfigVirtualCenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenters = undefined;
      this._name = undefined;
      this._password = undefined;
      this._port = undefined;
      this._soapRoundtripCount = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenters = value.datacenters;
      this._name = value.name;
      this._password = value.password;
      this._port = value.port;
      this._soapRoundtripCount = value.soapRoundtripCount;
      this._user = value.user;
    }
  }

  // datacenters - computed: false, optional: false, required: true
  private _datacenters?: string; 
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }
  public set datacenters(value: string) {
    this._datacenters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // soap_roundtrip_count - computed: false, optional: true, required: false
  private _soapRoundtripCount?: number; 
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }
  public set soapRoundtripCount(value: number) {
    this._soapRoundtripCount = value;
  }
  public resetSoapRoundtripCount() {
    this._soapRoundtripCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapRoundtripCountInput() {
    return this._soapRoundtripCount;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ClusterCloudProviderVsphereCloudConfigVirtualCenterList extends cdktf.ComplexList {
  public internalValue? : ClusterCloudProviderVsphereCloudConfigVirtualCenter[] | cdktf.IResolvable

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
  public get(index: number): ClusterCloudProviderVsphereCloudConfigVirtualCenterOutputReference {
    return new ClusterCloudProviderVsphereCloudConfigVirtualCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCloudProviderVsphereCloudConfigWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datacenter Cluster#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#default_datastore Cluster#default_datastore}
  */
  readonly defaultDatastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#folder Cluster#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#resourcepool_path Cluster#resourcepool_path}
  */
  readonly resourcepoolPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#server Cluster#server}
  */
  readonly server: string;
}

export function clusterCloudProviderVsphereCloudConfigWorkspaceToTerraform(struct?: ClusterCloudProviderVsphereCloudConfigWorkspaceOutputReference | ClusterCloudProviderVsphereCloudConfigWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    default_datastore: cdktf.stringToTerraform(struct!.defaultDatastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    resourcepool_path: cdktf.stringToTerraform(struct!.resourcepoolPath),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function clusterCloudProviderVsphereCloudConfigWorkspaceToHclTerraform(struct?: ClusterCloudProviderVsphereCloudConfigWorkspaceOutputReference | ClusterCloudProviderVsphereCloudConfigWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_datastore: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcepool_path: {
      value: cdktf.stringToHclTerraform(struct!.resourcepoolPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudConfigWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudConfigWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._defaultDatastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatastore = this._defaultDatastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._resourcepoolPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcepoolPath = this._resourcepoolPath;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudConfigWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenter = undefined;
      this._defaultDatastore = undefined;
      this._folder = undefined;
      this._resourcepoolPath = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenter = value.datacenter;
      this._defaultDatastore = value.defaultDatastore;
      this._folder = value.folder;
      this._resourcepoolPath = value.resourcepoolPath;
      this._server = value.server;
    }
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // default_datastore - computed: false, optional: true, required: false
  private _defaultDatastore?: string; 
  public get defaultDatastore() {
    return this.getStringAttribute('default_datastore');
  }
  public set defaultDatastore(value: string) {
    this._defaultDatastore = value;
  }
  public resetDefaultDatastore() {
    this._defaultDatastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatastoreInput() {
    return this._defaultDatastore;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // resourcepool_path - computed: false, optional: true, required: false
  private _resourcepoolPath?: string; 
  public get resourcepoolPath() {
    return this.getStringAttribute('resourcepool_path');
  }
  public set resourcepoolPath(value: string) {
    this._resourcepoolPath = value;
  }
  public resetResourcepoolPath() {
    this._resourcepoolPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcepoolPathInput() {
    return this._resourcepoolPath;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ClusterCloudProviderVsphereCloudConfig {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#disk Cluster#disk}
  */
  readonly disk?: ClusterCloudProviderVsphereCloudConfigDisk;
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#global Cluster#global}
  */
  readonly global?: ClusterCloudProviderVsphereCloudConfigGlobal;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#network Cluster#network}
  */
  readonly network?: ClusterCloudProviderVsphereCloudConfigNetwork;
  /**
  * virtual_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#virtual_center Cluster#virtual_center}
  */
  readonly virtualCenter: ClusterCloudProviderVsphereCloudConfigVirtualCenter[] | cdktf.IResolvable;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#workspace Cluster#workspace}
  */
  readonly workspace: ClusterCloudProviderVsphereCloudConfigWorkspace;
}

export function clusterCloudProviderVsphereCloudConfigToTerraform(struct?: ClusterCloudProviderVsphereCloudConfigOutputReference | ClusterCloudProviderVsphereCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: clusterCloudProviderVsphereCloudConfigDiskToTerraform(struct!.disk),
    global: clusterCloudProviderVsphereCloudConfigGlobalToTerraform(struct!.global),
    network: clusterCloudProviderVsphereCloudConfigNetworkToTerraform(struct!.network),
    virtual_center: cdktf.listMapper(clusterCloudProviderVsphereCloudConfigVirtualCenterToTerraform, true)(struct!.virtualCenter),
    workspace: clusterCloudProviderVsphereCloudConfigWorkspaceToTerraform(struct!.workspace),
  }
}


export function clusterCloudProviderVsphereCloudConfigToHclTerraform(struct?: ClusterCloudProviderVsphereCloudConfigOutputReference | ClusterCloudProviderVsphereCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: clusterCloudProviderVsphereCloudConfigDiskToHclTerraform(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudConfigDiskList",
    },
    global: {
      value: clusterCloudProviderVsphereCloudConfigGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudConfigGlobalList",
    },
    network: {
      value: clusterCloudProviderVsphereCloudConfigNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudConfigNetworkList",
    },
    virtual_center: {
      value: cdktf.listMapperHcl(clusterCloudProviderVsphereCloudConfigVirtualCenterToHclTerraform, true)(struct!.virtualCenter),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudConfigVirtualCenterList",
    },
    workspace: {
      value: clusterCloudProviderVsphereCloudConfigWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudConfigWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._virtualCenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualCenter = this._virtualCenter?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disk.internalValue = undefined;
      this._global.internalValue = undefined;
      this._network.internalValue = undefined;
      this._virtualCenter.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disk.internalValue = value.disk;
      this._global.internalValue = value.global;
      this._network.internalValue = value.network;
      this._virtualCenter.internalValue = value.virtualCenter;
      this._workspace.internalValue = value.workspace;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ClusterCloudProviderVsphereCloudConfigDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ClusterCloudProviderVsphereCloudConfigDisk) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // global - computed: false, optional: true, required: false
  private _global = new ClusterCloudProviderVsphereCloudConfigGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterCloudProviderVsphereCloudConfigGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ClusterCloudProviderVsphereCloudConfigNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterCloudProviderVsphereCloudConfigNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // virtual_center - computed: false, optional: false, required: true
  private _virtualCenter = new ClusterCloudProviderVsphereCloudConfigVirtualCenterList(this, "virtual_center", false);
  public get virtualCenter() {
    return this._virtualCenter;
  }
  public putVirtualCenter(value: ClusterCloudProviderVsphereCloudConfigVirtualCenter[] | cdktf.IResolvable) {
    this._virtualCenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCenterInput() {
    return this._virtualCenter.internalValue;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace = new ClusterCloudProviderVsphereCloudConfigWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: ClusterCloudProviderVsphereCloudConfigWorkspace) {
    this._workspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}
export interface ClusterCloudProviderVsphereCloudProviderDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#scsi_controller_type Cluster#scsi_controller_type}
  */
  readonly scsiControllerType?: string;
}

export function clusterCloudProviderVsphereCloudProviderDiskToTerraform(struct?: ClusterCloudProviderVsphereCloudProviderDiskOutputReference | ClusterCloudProviderVsphereCloudProviderDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scsi_controller_type: cdktf.stringToTerraform(struct!.scsiControllerType),
  }
}


export function clusterCloudProviderVsphereCloudProviderDiskToHclTerraform(struct?: ClusterCloudProviderVsphereCloudProviderDiskOutputReference | ClusterCloudProviderVsphereCloudProviderDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scsi_controller_type: {
      value: cdktf.stringToHclTerraform(struct!.scsiControllerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudProviderDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudProviderDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scsiControllerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsiControllerType = this._scsiControllerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudProviderDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scsiControllerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scsiControllerType = value.scsiControllerType;
    }
  }

  // scsi_controller_type - computed: false, optional: true, required: false
  private _scsiControllerType?: string; 
  public get scsiControllerType() {
    return this.getStringAttribute('scsi_controller_type');
  }
  public set scsiControllerType(value: string) {
    this._scsiControllerType = value;
  }
  public resetScsiControllerType() {
    this._scsiControllerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiControllerTypeInput() {
    return this._scsiControllerType;
  }
}
export interface ClusterCloudProviderVsphereCloudProviderGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datacenter Cluster#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datacenters Cluster#datacenters}
  */
  readonly datacenters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datastore Cluster#datastore}
  */
  readonly datastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#insecure_flag Cluster#insecure_flag}
  */
  readonly insecureFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#password Cluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#soap_roundtrip_count Cluster#soap_roundtrip_count}
  */
  readonly soapRoundtripCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user Cluster#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vm_name Cluster#vm_name}
  */
  readonly vmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vm_uuid Cluster#vm_uuid}
  */
  readonly vmUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#working_dir Cluster#working_dir}
  */
  readonly workingDir?: string;
}

export function clusterCloudProviderVsphereCloudProviderGlobalToTerraform(struct?: ClusterCloudProviderVsphereCloudProviderGlobalOutputReference | ClusterCloudProviderVsphereCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datacenters: cdktf.stringToTerraform(struct!.datacenters),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    insecure_flag: cdktf.booleanToTerraform(struct!.insecureFlag),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    soap_roundtrip_count: cdktf.numberToTerraform(struct!.soapRoundtripCount),
    user: cdktf.stringToTerraform(struct!.user),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    vm_uuid: cdktf.stringToTerraform(struct!.vmUuid),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function clusterCloudProviderVsphereCloudProviderGlobalToHclTerraform(struct?: ClusterCloudProviderVsphereCloudProviderGlobalOutputReference | ClusterCloudProviderVsphereCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenters: {
      value: cdktf.stringToHclTerraform(struct!.datacenters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_flag: {
      value: cdktf.booleanToHclTerraform(struct!.insecureFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soap_roundtrip_count: {
      value: cdktf.numberToHclTerraform(struct!.soapRoundtripCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_uuid: {
      value: cdktf.stringToHclTerraform(struct!.vmUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._insecureFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureFlag = this._insecureFlag;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._soapRoundtripCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.soapRoundtripCount = this._soapRoundtripCount;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    if (this._vmUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmUuid = this._vmUuid;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenter = undefined;
      this._datacenters = undefined;
      this._datastore = undefined;
      this._insecureFlag = undefined;
      this._password = undefined;
      this._port = undefined;
      this._soapRoundtripCount = undefined;
      this._user = undefined;
      this._vmName = undefined;
      this._vmUuid = undefined;
      this._workingDir = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenter = value.datacenter;
      this._datacenters = value.datacenters;
      this._datastore = value.datastore;
      this._insecureFlag = value.insecureFlag;
      this._password = value.password;
      this._port = value.port;
      this._soapRoundtripCount = value.soapRoundtripCount;
      this._user = value.user;
      this._vmName = value.vmName;
      this._vmUuid = value.vmUuid;
      this._workingDir = value.workingDir;
    }
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datacenters - computed: true, optional: true, required: false
  private _datacenters?: string; 
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }
  public set datacenters(value: string) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // insecure_flag - computed: false, optional: true, required: false
  private _insecureFlag?: boolean | cdktf.IResolvable; 
  public get insecureFlag() {
    return this.getBooleanAttribute('insecure_flag');
  }
  public set insecureFlag(value: boolean | cdktf.IResolvable) {
    this._insecureFlag = value;
  }
  public resetInsecureFlag() {
    this._insecureFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureFlagInput() {
    return this._insecureFlag;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // soap_roundtrip_count - computed: false, optional: true, required: false
  private _soapRoundtripCount?: number; 
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }
  public set soapRoundtripCount(value: number) {
    this._soapRoundtripCount = value;
  }
  public resetSoapRoundtripCount() {
    this._soapRoundtripCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapRoundtripCountInput() {
    return this._soapRoundtripCount;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // vm_uuid - computed: false, optional: true, required: false
  private _vmUuid?: string; 
  public get vmUuid() {
    return this.getStringAttribute('vm_uuid');
  }
  public set vmUuid(value: string) {
    this._vmUuid = value;
  }
  public resetVmUuid() {
    this._vmUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmUuidInput() {
    return this._vmUuid;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}
export interface ClusterCloudProviderVsphereCloudProviderNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#public_network Cluster#public_network}
  */
  readonly publicNetwork?: string;
}

export function clusterCloudProviderVsphereCloudProviderNetworkToTerraform(struct?: ClusterCloudProviderVsphereCloudProviderNetworkOutputReference | ClusterCloudProviderVsphereCloudProviderNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_network: cdktf.stringToTerraform(struct!.publicNetwork),
  }
}


export function clusterCloudProviderVsphereCloudProviderNetworkToHclTerraform(struct?: ClusterCloudProviderVsphereCloudProviderNetworkOutputReference | ClusterCloudProviderVsphereCloudProviderNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_network: {
      value: cdktf.stringToHclTerraform(struct!.publicNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudProviderNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudProviderNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetwork = this._publicNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudProviderNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicNetwork = value.publicNetwork;
    }
  }

  // public_network - computed: false, optional: true, required: false
  private _publicNetwork?: string; 
  public get publicNetwork() {
    return this.getStringAttribute('public_network');
  }
  public set publicNetwork(value: string) {
    this._publicNetwork = value;
  }
  public resetPublicNetwork() {
    this._publicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork;
  }
}
export interface ClusterCloudProviderVsphereCloudProviderVirtualCenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datacenters Cluster#datacenters}
  */
  readonly datacenters: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#password Cluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#soap_roundtrip_count Cluster#soap_roundtrip_count}
  */
  readonly soapRoundtripCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user Cluster#user}
  */
  readonly user: string;
}

export function clusterCloudProviderVsphereCloudProviderVirtualCenterToTerraform(struct?: ClusterCloudProviderVsphereCloudProviderVirtualCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.stringToTerraform(struct!.datacenters),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    soap_roundtrip_count: cdktf.numberToTerraform(struct!.soapRoundtripCount),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterCloudProviderVsphereCloudProviderVirtualCenterToHclTerraform(struct?: ClusterCloudProviderVsphereCloudProviderVirtualCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenters: {
      value: cdktf.stringToHclTerraform(struct!.datacenters),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soap_roundtrip_count: {
      value: cdktf.numberToHclTerraform(struct!.soapRoundtripCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudProviderVirtualCenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCloudProviderVsphereCloudProviderVirtualCenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._soapRoundtripCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.soapRoundtripCount = this._soapRoundtripCount;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudProviderVirtualCenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenters = undefined;
      this._name = undefined;
      this._password = undefined;
      this._port = undefined;
      this._soapRoundtripCount = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenters = value.datacenters;
      this._name = value.name;
      this._password = value.password;
      this._port = value.port;
      this._soapRoundtripCount = value.soapRoundtripCount;
      this._user = value.user;
    }
  }

  // datacenters - computed: false, optional: false, required: true
  private _datacenters?: string; 
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }
  public set datacenters(value: string) {
    this._datacenters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // soap_roundtrip_count - computed: false, optional: true, required: false
  private _soapRoundtripCount?: number; 
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }
  public set soapRoundtripCount(value: number) {
    this._soapRoundtripCount = value;
  }
  public resetSoapRoundtripCount() {
    this._soapRoundtripCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapRoundtripCountInput() {
    return this._soapRoundtripCount;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ClusterCloudProviderVsphereCloudProviderVirtualCenterList extends cdktf.ComplexList {
  public internalValue? : ClusterCloudProviderVsphereCloudProviderVirtualCenter[] | cdktf.IResolvable

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
  public get(index: number): ClusterCloudProviderVsphereCloudProviderVirtualCenterOutputReference {
    return new ClusterCloudProviderVsphereCloudProviderVirtualCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterCloudProviderVsphereCloudProviderWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#datacenter Cluster#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#default_datastore Cluster#default_datastore}
  */
  readonly defaultDatastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#folder Cluster#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#resourcepool_path Cluster#resourcepool_path}
  */
  readonly resourcepoolPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#server Cluster#server}
  */
  readonly server: string;
}

export function clusterCloudProviderVsphereCloudProviderWorkspaceToTerraform(struct?: ClusterCloudProviderVsphereCloudProviderWorkspaceOutputReference | ClusterCloudProviderVsphereCloudProviderWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    default_datastore: cdktf.stringToTerraform(struct!.defaultDatastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    resourcepool_path: cdktf.stringToTerraform(struct!.resourcepoolPath),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function clusterCloudProviderVsphereCloudProviderWorkspaceToHclTerraform(struct?: ClusterCloudProviderVsphereCloudProviderWorkspaceOutputReference | ClusterCloudProviderVsphereCloudProviderWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_datastore: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcepool_path: {
      value: cdktf.stringToHclTerraform(struct!.resourcepoolPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudProviderWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudProviderWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._defaultDatastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatastore = this._defaultDatastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._resourcepoolPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcepoolPath = this._resourcepoolPath;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudProviderWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenter = undefined;
      this._defaultDatastore = undefined;
      this._folder = undefined;
      this._resourcepoolPath = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenter = value.datacenter;
      this._defaultDatastore = value.defaultDatastore;
      this._folder = value.folder;
      this._resourcepoolPath = value.resourcepoolPath;
      this._server = value.server;
    }
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // default_datastore - computed: false, optional: true, required: false
  private _defaultDatastore?: string; 
  public get defaultDatastore() {
    return this.getStringAttribute('default_datastore');
  }
  public set defaultDatastore(value: string) {
    this._defaultDatastore = value;
  }
  public resetDefaultDatastore() {
    this._defaultDatastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatastoreInput() {
    return this._defaultDatastore;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // resourcepool_path - computed: false, optional: true, required: false
  private _resourcepoolPath?: string; 
  public get resourcepoolPath() {
    return this.getStringAttribute('resourcepool_path');
  }
  public set resourcepoolPath(value: string) {
    this._resourcepoolPath = value;
  }
  public resetResourcepoolPath() {
    this._resourcepoolPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcepoolPathInput() {
    return this._resourcepoolPath;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface ClusterCloudProviderVsphereCloudProvider {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#disk Cluster#disk}
  */
  readonly disk?: ClusterCloudProviderVsphereCloudProviderDisk;
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#global Cluster#global}
  */
  readonly global?: ClusterCloudProviderVsphereCloudProviderGlobal;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#network Cluster#network}
  */
  readonly network?: ClusterCloudProviderVsphereCloudProviderNetwork;
  /**
  * virtual_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#virtual_center Cluster#virtual_center}
  */
  readonly virtualCenter: ClusterCloudProviderVsphereCloudProviderVirtualCenter[] | cdktf.IResolvable;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#workspace Cluster#workspace}
  */
  readonly workspace: ClusterCloudProviderVsphereCloudProviderWorkspace;
}

export function clusterCloudProviderVsphereCloudProviderToTerraform(struct?: ClusterCloudProviderVsphereCloudProviderOutputReference | ClusterCloudProviderVsphereCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: clusterCloudProviderVsphereCloudProviderDiskToTerraform(struct!.disk),
    global: clusterCloudProviderVsphereCloudProviderGlobalToTerraform(struct!.global),
    network: clusterCloudProviderVsphereCloudProviderNetworkToTerraform(struct!.network),
    virtual_center: cdktf.listMapper(clusterCloudProviderVsphereCloudProviderVirtualCenterToTerraform, true)(struct!.virtualCenter),
    workspace: clusterCloudProviderVsphereCloudProviderWorkspaceToTerraform(struct!.workspace),
  }
}


export function clusterCloudProviderVsphereCloudProviderToHclTerraform(struct?: ClusterCloudProviderVsphereCloudProviderOutputReference | ClusterCloudProviderVsphereCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: clusterCloudProviderVsphereCloudProviderDiskToHclTerraform(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudProviderDiskList",
    },
    global: {
      value: clusterCloudProviderVsphereCloudProviderGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudProviderGlobalList",
    },
    network: {
      value: clusterCloudProviderVsphereCloudProviderNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudProviderNetworkList",
    },
    virtual_center: {
      value: cdktf.listMapperHcl(clusterCloudProviderVsphereCloudProviderVirtualCenterToHclTerraform, true)(struct!.virtualCenter),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudProviderVirtualCenterList",
    },
    workspace: {
      value: clusterCloudProviderVsphereCloudProviderWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudProviderWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderVsphereCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProviderVsphereCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._virtualCenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualCenter = this._virtualCenter?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProviderVsphereCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disk.internalValue = undefined;
      this._global.internalValue = undefined;
      this._network.internalValue = undefined;
      this._virtualCenter.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disk.internalValue = value.disk;
      this._global.internalValue = value.global;
      this._network.internalValue = value.network;
      this._virtualCenter.internalValue = value.virtualCenter;
      this._workspace.internalValue = value.workspace;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ClusterCloudProviderVsphereCloudProviderDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ClusterCloudProviderVsphereCloudProviderDisk) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // global - computed: false, optional: true, required: false
  private _global = new ClusterCloudProviderVsphereCloudProviderGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterCloudProviderVsphereCloudProviderGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ClusterCloudProviderVsphereCloudProviderNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterCloudProviderVsphereCloudProviderNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // virtual_center - computed: false, optional: false, required: true
  private _virtualCenter = new ClusterCloudProviderVsphereCloudProviderVirtualCenterList(this, "virtual_center", false);
  public get virtualCenter() {
    return this._virtualCenter;
  }
  public putVirtualCenter(value: ClusterCloudProviderVsphereCloudProviderVirtualCenter[] | cdktf.IResolvable) {
    this._virtualCenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCenterInput() {
    return this._virtualCenter.internalValue;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace = new ClusterCloudProviderVsphereCloudProviderWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: ClusterCloudProviderVsphereCloudProviderWorkspace) {
    this._workspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}
export interface ClusterCloudProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#custom_cloud_config Cluster#custom_cloud_config}
  */
  readonly customCloudConfig?: string;
  /**
  * Custom Cloud Provider config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#custom_cloud_provider Cluster#custom_cloud_provider}
  */
  readonly customCloudProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * aws_cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aws_cloud_config Cluster#aws_cloud_config}
  */
  readonly awsCloudConfig?: ClusterCloudProviderAwsCloudConfig;
  /**
  * aws_cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aws_cloud_provider Cluster#aws_cloud_provider}
  */
  readonly awsCloudProvider?: ClusterCloudProviderAwsCloudProvider;
  /**
  * azure_cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#azure_cloud_config Cluster#azure_cloud_config}
  */
  readonly azureCloudConfig?: ClusterCloudProviderAzureCloudConfig;
  /**
  * azure_cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#azure_cloud_provider Cluster#azure_cloud_provider}
  */
  readonly azureCloudProvider?: ClusterCloudProviderAzureCloudProvider;
  /**
  * openstack_cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#openstack_cloud_config Cluster#openstack_cloud_config}
  */
  readonly openstackCloudConfig?: ClusterCloudProviderOpenstackCloudConfig;
  /**
  * openstack_cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#openstack_cloud_provider Cluster#openstack_cloud_provider}
  */
  readonly openstackCloudProvider?: ClusterCloudProviderOpenstackCloudProvider;
  /**
  * vsphere_cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vsphere_cloud_config Cluster#vsphere_cloud_config}
  */
  readonly vsphereCloudConfig?: ClusterCloudProviderVsphereCloudConfig;
  /**
  * vsphere_cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vsphere_cloud_provider Cluster#vsphere_cloud_provider}
  */
  readonly vsphereCloudProvider?: ClusterCloudProviderVsphereCloudProvider;
}

export function clusterCloudProviderToTerraform(struct?: ClusterCloudProviderOutputReference | ClusterCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_cloud_config: cdktf.stringToTerraform(struct!.customCloudConfig),
    custom_cloud_provider: cdktf.stringToTerraform(struct!.customCloudProvider),
    name: cdktf.stringToTerraform(struct!.name),
    aws_cloud_config: clusterCloudProviderAwsCloudConfigToTerraform(struct!.awsCloudConfig),
    aws_cloud_provider: clusterCloudProviderAwsCloudProviderToTerraform(struct!.awsCloudProvider),
    azure_cloud_config: clusterCloudProviderAzureCloudConfigToTerraform(struct!.azureCloudConfig),
    azure_cloud_provider: clusterCloudProviderAzureCloudProviderToTerraform(struct!.azureCloudProvider),
    openstack_cloud_config: clusterCloudProviderOpenstackCloudConfigToTerraform(struct!.openstackCloudConfig),
    openstack_cloud_provider: clusterCloudProviderOpenstackCloudProviderToTerraform(struct!.openstackCloudProvider),
    vsphere_cloud_config: clusterCloudProviderVsphereCloudConfigToTerraform(struct!.vsphereCloudConfig),
    vsphere_cloud_provider: clusterCloudProviderVsphereCloudProviderToTerraform(struct!.vsphereCloudProvider),
  }
}


export function clusterCloudProviderToHclTerraform(struct?: ClusterCloudProviderOutputReference | ClusterCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_cloud_config: {
      value: cdktf.stringToHclTerraform(struct!.customCloudConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.customCloudProvider),
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
    aws_cloud_config: {
      value: clusterCloudProviderAwsCloudConfigToHclTerraform(struct!.awsCloudConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderAwsCloudConfigList",
    },
    aws_cloud_provider: {
      value: clusterCloudProviderAwsCloudProviderToHclTerraform(struct!.awsCloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderAwsCloudProviderList",
    },
    azure_cloud_config: {
      value: clusterCloudProviderAzureCloudConfigToHclTerraform(struct!.azureCloudConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderAzureCloudConfigList",
    },
    azure_cloud_provider: {
      value: clusterCloudProviderAzureCloudProviderToHclTerraform(struct!.azureCloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderAzureCloudProviderList",
    },
    openstack_cloud_config: {
      value: clusterCloudProviderOpenstackCloudConfigToHclTerraform(struct!.openstackCloudConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudConfigList",
    },
    openstack_cloud_provider: {
      value: clusterCloudProviderOpenstackCloudProviderToHclTerraform(struct!.openstackCloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderOpenstackCloudProviderList",
    },
    vsphere_cloud_config: {
      value: clusterCloudProviderVsphereCloudConfigToHclTerraform(struct!.vsphereCloudConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudConfigList",
    },
    vsphere_cloud_provider: {
      value: clusterCloudProviderVsphereCloudProviderToHclTerraform(struct!.vsphereCloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterCloudProviderVsphereCloudProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCloudConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCloudConfig = this._customCloudConfig;
    }
    if (this._customCloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCloudProvider = this._customCloudProvider;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._awsCloudConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCloudConfig = this._awsCloudConfig?.internalValue;
    }
    if (this._awsCloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCloudProvider = this._awsCloudProvider?.internalValue;
    }
    if (this._azureCloudConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCloudConfig = this._azureCloudConfig?.internalValue;
    }
    if (this._azureCloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCloudProvider = this._azureCloudProvider?.internalValue;
    }
    if (this._openstackCloudConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openstackCloudConfig = this._openstackCloudConfig?.internalValue;
    }
    if (this._openstackCloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openstackCloudProvider = this._openstackCloudProvider?.internalValue;
    }
    if (this._vsphereCloudConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereCloudConfig = this._vsphereCloudConfig?.internalValue;
    }
    if (this._vsphereCloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereCloudProvider = this._vsphereCloudProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customCloudConfig = undefined;
      this._customCloudProvider = undefined;
      this._name = undefined;
      this._awsCloudConfig.internalValue = undefined;
      this._awsCloudProvider.internalValue = undefined;
      this._azureCloudConfig.internalValue = undefined;
      this._azureCloudProvider.internalValue = undefined;
      this._openstackCloudConfig.internalValue = undefined;
      this._openstackCloudProvider.internalValue = undefined;
      this._vsphereCloudConfig.internalValue = undefined;
      this._vsphereCloudProvider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customCloudConfig = value.customCloudConfig;
      this._customCloudProvider = value.customCloudProvider;
      this._name = value.name;
      this._awsCloudConfig.internalValue = value.awsCloudConfig;
      this._awsCloudProvider.internalValue = value.awsCloudProvider;
      this._azureCloudConfig.internalValue = value.azureCloudConfig;
      this._azureCloudProvider.internalValue = value.azureCloudProvider;
      this._openstackCloudConfig.internalValue = value.openstackCloudConfig;
      this._openstackCloudProvider.internalValue = value.openstackCloudProvider;
      this._vsphereCloudConfig.internalValue = value.vsphereCloudConfig;
      this._vsphereCloudProvider.internalValue = value.vsphereCloudProvider;
    }
  }

  // custom_cloud_config - computed: false, optional: true, required: false
  private _customCloudConfig?: string; 
  public get customCloudConfig() {
    return this.getStringAttribute('custom_cloud_config');
  }
  public set customCloudConfig(value: string) {
    this._customCloudConfig = value;
  }
  public resetCustomCloudConfig() {
    this._customCloudConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCloudConfigInput() {
    return this._customCloudConfig;
  }

  // custom_cloud_provider - computed: false, optional: true, required: false
  private _customCloudProvider?: string; 
  public get customCloudProvider() {
    return this.getStringAttribute('custom_cloud_provider');
  }
  public set customCloudProvider(value: string) {
    this._customCloudProvider = value;
  }
  public resetCustomCloudProvider() {
    this._customCloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCloudProviderInput() {
    return this._customCloudProvider;
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

  // aws_cloud_config - computed: false, optional: true, required: false
  private _awsCloudConfig = new ClusterCloudProviderAwsCloudConfigOutputReference(this, "aws_cloud_config");
  public get awsCloudConfig() {
    return this._awsCloudConfig;
  }
  public putAwsCloudConfig(value: ClusterCloudProviderAwsCloudConfig) {
    this._awsCloudConfig.internalValue = value;
  }
  public resetAwsCloudConfig() {
    this._awsCloudConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudConfigInput() {
    return this._awsCloudConfig.internalValue;
  }

  // aws_cloud_provider - computed: false, optional: true, required: false
  private _awsCloudProvider = new ClusterCloudProviderAwsCloudProviderOutputReference(this, "aws_cloud_provider");
  public get awsCloudProvider() {
    return this._awsCloudProvider;
  }
  public putAwsCloudProvider(value: ClusterCloudProviderAwsCloudProvider) {
    this._awsCloudProvider.internalValue = value;
  }
  public resetAwsCloudProvider() {
    this._awsCloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudProviderInput() {
    return this._awsCloudProvider.internalValue;
  }

  // azure_cloud_config - computed: false, optional: true, required: false
  private _azureCloudConfig = new ClusterCloudProviderAzureCloudConfigOutputReference(this, "azure_cloud_config");
  public get azureCloudConfig() {
    return this._azureCloudConfig;
  }
  public putAzureCloudConfig(value: ClusterCloudProviderAzureCloudConfig) {
    this._azureCloudConfig.internalValue = value;
  }
  public resetAzureCloudConfig() {
    this._azureCloudConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCloudConfigInput() {
    return this._azureCloudConfig.internalValue;
  }

  // azure_cloud_provider - computed: false, optional: true, required: false
  private _azureCloudProvider = new ClusterCloudProviderAzureCloudProviderOutputReference(this, "azure_cloud_provider");
  public get azureCloudProvider() {
    return this._azureCloudProvider;
  }
  public putAzureCloudProvider(value: ClusterCloudProviderAzureCloudProvider) {
    this._azureCloudProvider.internalValue = value;
  }
  public resetAzureCloudProvider() {
    this._azureCloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCloudProviderInput() {
    return this._azureCloudProvider.internalValue;
  }

  // openstack_cloud_config - computed: false, optional: true, required: false
  private _openstackCloudConfig = new ClusterCloudProviderOpenstackCloudConfigOutputReference(this, "openstack_cloud_config");
  public get openstackCloudConfig() {
    return this._openstackCloudConfig;
  }
  public putOpenstackCloudConfig(value: ClusterCloudProviderOpenstackCloudConfig) {
    this._openstackCloudConfig.internalValue = value;
  }
  public resetOpenstackCloudConfig() {
    this._openstackCloudConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackCloudConfigInput() {
    return this._openstackCloudConfig.internalValue;
  }

  // openstack_cloud_provider - computed: false, optional: true, required: false
  private _openstackCloudProvider = new ClusterCloudProviderOpenstackCloudProviderOutputReference(this, "openstack_cloud_provider");
  public get openstackCloudProvider() {
    return this._openstackCloudProvider;
  }
  public putOpenstackCloudProvider(value: ClusterCloudProviderOpenstackCloudProvider) {
    this._openstackCloudProvider.internalValue = value;
  }
  public resetOpenstackCloudProvider() {
    this._openstackCloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackCloudProviderInput() {
    return this._openstackCloudProvider.internalValue;
  }

  // vsphere_cloud_config - computed: false, optional: true, required: false
  private _vsphereCloudConfig = new ClusterCloudProviderVsphereCloudConfigOutputReference(this, "vsphere_cloud_config");
  public get vsphereCloudConfig() {
    return this._vsphereCloudConfig;
  }
  public putVsphereCloudConfig(value: ClusterCloudProviderVsphereCloudConfig) {
    this._vsphereCloudConfig.internalValue = value;
  }
  public resetVsphereCloudConfig() {
    this._vsphereCloudConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereCloudConfigInput() {
    return this._vsphereCloudConfig.internalValue;
  }

  // vsphere_cloud_provider - computed: false, optional: true, required: false
  private _vsphereCloudProvider = new ClusterCloudProviderVsphereCloudProviderOutputReference(this, "vsphere_cloud_provider");
  public get vsphereCloudProvider() {
    return this._vsphereCloudProvider;
  }
  public putVsphereCloudProvider(value: ClusterCloudProviderVsphereCloudProvider) {
    this._vsphereCloudProvider.internalValue = value;
  }
  public resetVsphereCloudProvider() {
    this._vsphereCloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereCloudProviderInput() {
    return this._vsphereCloudProvider.internalValue;
  }
}
export interface ClusterDnsNodelocal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ip_address Cluster#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Node selector key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#node_selector Cluster#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
}

export function clusterDnsNodelocalToTerraform(struct?: ClusterDnsNodelocalOutputReference | ClusterDnsNodelocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
  }
}


export function clusterDnsNodelocalToHclTerraform(struct?: ClusterDnsNodelocalOutputReference | ClusterDnsNodelocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterDnsNodelocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterDnsNodelocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterDnsNodelocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._nodeSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._nodeSelector = value.nodeSelector;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }
}
export interface ClusterDns {
  /**
  * NodeSelector key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#node_selector Cluster#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * DNS provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#provider Cluster#provider}
  */
  readonly provider?: string;
  /**
  * ReverseCIDRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#reverse_cidrs Cluster#reverse_cidrs}
  */
  readonly reverseCidrs?: string[];
  /**
  * Upstream nameservers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#upstream_nameservers Cluster#upstream_nameservers}
  */
  readonly upstreamNameservers?: string[];
  /**
  * nodelocal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#nodelocal Cluster#nodelocal}
  */
  readonly nodelocal?: ClusterDnsNodelocal;
}

export function clusterDnsToTerraform(struct?: ClusterDnsOutputReference | ClusterDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    provider: cdktf.stringToTerraform(struct!.provider),
    reverse_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reverseCidrs),
    upstream_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamNameservers),
    nodelocal: clusterDnsNodelocalToTerraform(struct!.nodelocal),
  }
}


export function clusterDnsToHclTerraform(struct?: ClusterDnsOutputReference | ClusterDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reverse_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reverseCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upstream_nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamNameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nodelocal: {
      value: clusterDnsNodelocalToHclTerraform(struct!.nodelocal),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterDnsNodelocalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._reverseCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseCidrs = this._reverseCidrs;
    }
    if (this._upstreamNameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamNameservers = this._upstreamNameservers;
    }
    if (this._nodelocal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodelocal = this._nodelocal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._provider = undefined;
      this._reverseCidrs = undefined;
      this._upstreamNameservers = undefined;
      this._nodelocal.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._provider = value.provider;
      this._reverseCidrs = value.reverseCidrs;
      this._upstreamNameservers = value.upstreamNameservers;
      this._nodelocal.internalValue = value.nodelocal;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // reverse_cidrs - computed: false, optional: true, required: false
  private _reverseCidrs?: string[]; 
  public get reverseCidrs() {
    return this.getListAttribute('reverse_cidrs');
  }
  public set reverseCidrs(value: string[]) {
    this._reverseCidrs = value;
  }
  public resetReverseCidrs() {
    this._reverseCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseCidrsInput() {
    return this._reverseCidrs;
  }

  // upstream_nameservers - computed: false, optional: true, required: false
  private _upstreamNameservers?: string[]; 
  public get upstreamNameservers() {
    return this.getListAttribute('upstream_nameservers');
  }
  public set upstreamNameservers(value: string[]) {
    this._upstreamNameservers = value;
  }
  public resetUpstreamNameservers() {
    this._upstreamNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNameserversInput() {
    return this._upstreamNameservers;
  }

  // nodelocal - computed: false, optional: true, required: false
  private _nodelocal = new ClusterDnsNodelocalOutputReference(this, "nodelocal");
  public get nodelocal() {
    return this._nodelocal;
  }
  public putNodelocal(value: ClusterDnsNodelocal) {
    this._nodelocal.internalValue = value;
  }
  public resetNodelocal() {
    this._nodelocal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodelocalInput() {
    return this._nodelocal.internalValue;
  }
}
export interface ClusterIngress {
  /**
  * Ingress Default Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#default_backend Cluster#default_backend}
  */
  readonly defaultBackend?: boolean | cdktf.IResolvable;
  /**
  * Ingress controller dns policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#dns_policy Cluster#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Extra arguments for the ingress controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Ingress controller http port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#http_port Cluster#http_port}
  */
  readonly httpPort?: number;
  /**
  * Ingress controller https port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#https_port Cluster#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Ingress controller network mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#network_mode Cluster#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Node selector key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#node_selector Cluster#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Ingress controller options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#options Cluster#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Ingress controller provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#provider Cluster#provider}
  */
  readonly provider?: string;
}

export function clusterIngressToTerraform(struct?: ClusterIngressOutputReference | ClusterIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_backend: cdktf.booleanToTerraform(struct!.defaultBackend),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function clusterIngressToHclTerraform(struct?: ClusterIngressOutputReference | ClusterIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_backend: {
      value: cdktf.booleanToHclTerraform(struct!.defaultBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBackend = this._defaultBackend;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultBackend = undefined;
      this._dnsPolicy = undefined;
      this._extraArgs = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._networkMode = undefined;
      this._nodeSelector = undefined;
      this._options = undefined;
      this._provider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultBackend = value.defaultBackend;
      this._dnsPolicy = value.dnsPolicy;
      this._extraArgs = value.extraArgs;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._networkMode = value.networkMode;
      this._nodeSelector = value.nodeSelector;
      this._options = value.options;
      this._provider = value.provider;
    }
  }

  // default_backend - computed: false, optional: true, required: false
  private _defaultBackend?: boolean | cdktf.IResolvable; 
  public get defaultBackend() {
    return this.getBooleanAttribute('default_backend');
  }
  public set defaultBackend(value: boolean | cdktf.IResolvable) {
    this._defaultBackend = value;
  }
  public resetDefaultBackend() {
    this._defaultBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendInput() {
    return this._defaultBackend;
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface ClusterMonitoring {
  /**
  * Node selector key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#node_selector Cluster#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Monitoring options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#options Cluster#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Monitoring provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#provider Cluster#provider}
  */
  readonly provider?: string;
}

export function clusterMonitoringToTerraform(struct?: ClusterMonitoringOutputReference | ClusterMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function clusterMonitoringToHclTerraform(struct?: ClusterMonitoringOutputReference | ClusterMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._options = undefined;
      this._provider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._options = value.options;
      this._provider = value.provider;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface ClusterNetworkAciNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aep Cluster#aep}
  */
  readonly aep: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#apic_hosts Cluster#apic_hosts}
  */
  readonly apicHosts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#apic_user_crt Cluster#apic_user_crt}
  */
  readonly apicUserCrt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#apic_user_key Cluster#apic_user_key}
  */
  readonly apicUserKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#apic_user_name Cluster#apic_user_name}
  */
  readonly apicUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#encap_type Cluster#encap_type}
  */
  readonly encapType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extern_dynamic Cluster#extern_dynamic}
  */
  readonly externDynamic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extern_static Cluster#extern_static}
  */
  readonly externStatic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#infra_vlan Cluster#infra_vlan}
  */
  readonly infraVlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kube_api_vlan Cluster#kube_api_vlan}
  */
  readonly kubeApiVlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#l3out Cluster#l3out}
  */
  readonly l3Out: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#l3out_external_networks Cluster#l3out_external_networks}
  */
  readonly l3OutExternalNetworks: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#mcast_range_end Cluster#mcast_range_end}
  */
  readonly mcastRangeEnd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#mcast_range_start Cluster#mcast_range_start}
  */
  readonly mcastRangeStart: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#node_subnet Cluster#node_subnet}
  */
  readonly nodeSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#node_svc_subnet Cluster#node_svc_subnet}
  */
  readonly nodeSvcSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_vlan Cluster#service_vlan}
  */
  readonly serviceVlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#snat_port_range_end Cluster#snat_port_range_end}
  */
  readonly snatPortRangeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#snat_port_range_start Cluster#snat_port_range_start}
  */
  readonly snatPortRangeStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#snat_ports_per_node Cluster#snat_ports_per_node}
  */
  readonly snatPortsPerNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#system_id Cluster#system_id}
  */
  readonly systemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#token Cluster#token}
  */
  readonly token: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vrf_name Cluster#vrf_name}
  */
  readonly vrfName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#vrf_tenant Cluster#vrf_tenant}
  */
  readonly vrfTenant: string;
}

export function clusterNetworkAciNetworkProviderToTerraform(struct?: ClusterNetworkAciNetworkProviderOutputReference | ClusterNetworkAciNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aep: cdktf.stringToTerraform(struct!.aep),
    apic_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apicHosts),
    apic_user_crt: cdktf.stringToTerraform(struct!.apicUserCrt),
    apic_user_key: cdktf.stringToTerraform(struct!.apicUserKey),
    apic_user_name: cdktf.stringToTerraform(struct!.apicUserName),
    encap_type: cdktf.stringToTerraform(struct!.encapType),
    extern_dynamic: cdktf.stringToTerraform(struct!.externDynamic),
    extern_static: cdktf.stringToTerraform(struct!.externStatic),
    infra_vlan: cdktf.stringToTerraform(struct!.infraVlan),
    kube_api_vlan: cdktf.stringToTerraform(struct!.kubeApiVlan),
    l3out: cdktf.stringToTerraform(struct!.l3Out),
    l3out_external_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.l3OutExternalNetworks),
    mcast_range_end: cdktf.stringToTerraform(struct!.mcastRangeEnd),
    mcast_range_start: cdktf.stringToTerraform(struct!.mcastRangeStart),
    node_subnet: cdktf.stringToTerraform(struct!.nodeSubnet),
    node_svc_subnet: cdktf.stringToTerraform(struct!.nodeSvcSubnet),
    service_vlan: cdktf.stringToTerraform(struct!.serviceVlan),
    snat_port_range_end: cdktf.stringToTerraform(struct!.snatPortRangeEnd),
    snat_port_range_start: cdktf.stringToTerraform(struct!.snatPortRangeStart),
    snat_ports_per_node: cdktf.stringToTerraform(struct!.snatPortsPerNode),
    system_id: cdktf.stringToTerraform(struct!.systemId),
    token: cdktf.stringToTerraform(struct!.token),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
    vrf_tenant: cdktf.stringToTerraform(struct!.vrfTenant),
  }
}


export function clusterNetworkAciNetworkProviderToHclTerraform(struct?: ClusterNetworkAciNetworkProviderOutputReference | ClusterNetworkAciNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aep: {
      value: cdktf.stringToHclTerraform(struct!.aep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apicHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    apic_user_crt: {
      value: cdktf.stringToHclTerraform(struct!.apicUserCrt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_user_key: {
      value: cdktf.stringToHclTerraform(struct!.apicUserKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_user_name: {
      value: cdktf.stringToHclTerraform(struct!.apicUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap_type: {
      value: cdktf.stringToHclTerraform(struct!.encapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extern_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.externDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extern_static: {
      value: cdktf.stringToHclTerraform(struct!.externStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infra_vlan: {
      value: cdktf.stringToHclTerraform(struct!.infraVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_api_vlan: {
      value: cdktf.stringToHclTerraform(struct!.kubeApiVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l3out: {
      value: cdktf.stringToHclTerraform(struct!.l3Out),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l3out_external_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.l3OutExternalNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mcast_range_end: {
      value: cdktf.stringToHclTerraform(struct!.mcastRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcast_range_start: {
      value: cdktf.stringToHclTerraform(struct!.mcastRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_subnet: {
      value: cdktf.stringToHclTerraform(struct!.nodeSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_svc_subnet: {
      value: cdktf.stringToHclTerraform(struct!.nodeSvcSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_vlan: {
      value: cdktf.stringToHclTerraform(struct!.serviceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_port_range_end: {
      value: cdktf.stringToHclTerraform(struct!.snatPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_port_range_start: {
      value: cdktf.stringToHclTerraform(struct!.snatPortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_ports_per_node: {
      value: cdktf.stringToHclTerraform(struct!.snatPortsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_tenant: {
      value: cdktf.stringToHclTerraform(struct!.vrfTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkAciNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkAciNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aep !== undefined) {
      hasAnyValues = true;
      internalValueResult.aep = this._aep;
    }
    if (this._apicHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicHosts = this._apicHosts;
    }
    if (this._apicUserCrt !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicUserCrt = this._apicUserCrt;
    }
    if (this._apicUserKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicUserKey = this._apicUserKey;
    }
    if (this._apicUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicUserName = this._apicUserName;
    }
    if (this._encapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapType = this._encapType;
    }
    if (this._externDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.externDynamic = this._externDynamic;
    }
    if (this._externStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.externStatic = this._externStatic;
    }
    if (this._infraVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraVlan = this._infraVlan;
    }
    if (this._kubeApiVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiVlan = this._kubeApiVlan;
    }
    if (this._l3Out !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Out = this._l3Out;
    }
    if (this._l3OutExternalNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3OutExternalNetworks = this._l3OutExternalNetworks;
    }
    if (this._mcastRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastRangeEnd = this._mcastRangeEnd;
    }
    if (this._mcastRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastRangeStart = this._mcastRangeStart;
    }
    if (this._nodeSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSubnet = this._nodeSubnet;
    }
    if (this._nodeSvcSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSvcSubnet = this._nodeSvcSubnet;
    }
    if (this._serviceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVlan = this._serviceVlan;
    }
    if (this._snatPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPortRangeEnd = this._snatPortRangeEnd;
    }
    if (this._snatPortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPortRangeStart = this._snatPortRangeStart;
    }
    if (this._snatPortsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPortsPerNode = this._snatPortsPerNode;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    if (this._vrfTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTenant = this._vrfTenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkAciNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aep = undefined;
      this._apicHosts = undefined;
      this._apicUserCrt = undefined;
      this._apicUserKey = undefined;
      this._apicUserName = undefined;
      this._encapType = undefined;
      this._externDynamic = undefined;
      this._externStatic = undefined;
      this._infraVlan = undefined;
      this._kubeApiVlan = undefined;
      this._l3Out = undefined;
      this._l3OutExternalNetworks = undefined;
      this._mcastRangeEnd = undefined;
      this._mcastRangeStart = undefined;
      this._nodeSubnet = undefined;
      this._nodeSvcSubnet = undefined;
      this._serviceVlan = undefined;
      this._snatPortRangeEnd = undefined;
      this._snatPortRangeStart = undefined;
      this._snatPortsPerNode = undefined;
      this._systemId = undefined;
      this._token = undefined;
      this._vrfName = undefined;
      this._vrfTenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aep = value.aep;
      this._apicHosts = value.apicHosts;
      this._apicUserCrt = value.apicUserCrt;
      this._apicUserKey = value.apicUserKey;
      this._apicUserName = value.apicUserName;
      this._encapType = value.encapType;
      this._externDynamic = value.externDynamic;
      this._externStatic = value.externStatic;
      this._infraVlan = value.infraVlan;
      this._kubeApiVlan = value.kubeApiVlan;
      this._l3Out = value.l3Out;
      this._l3OutExternalNetworks = value.l3OutExternalNetworks;
      this._mcastRangeEnd = value.mcastRangeEnd;
      this._mcastRangeStart = value.mcastRangeStart;
      this._nodeSubnet = value.nodeSubnet;
      this._nodeSvcSubnet = value.nodeSvcSubnet;
      this._serviceVlan = value.serviceVlan;
      this._snatPortRangeEnd = value.snatPortRangeEnd;
      this._snatPortRangeStart = value.snatPortRangeStart;
      this._snatPortsPerNode = value.snatPortsPerNode;
      this._systemId = value.systemId;
      this._token = value.token;
      this._vrfName = value.vrfName;
      this._vrfTenant = value.vrfTenant;
    }
  }

  // aep - computed: false, optional: false, required: true
  private _aep?: string; 
  public get aep() {
    return this.getStringAttribute('aep');
  }
  public set aep(value: string) {
    this._aep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aepInput() {
    return this._aep;
  }

  // apic_hosts - computed: false, optional: false, required: true
  private _apicHosts?: string[]; 
  public get apicHosts() {
    return this.getListAttribute('apic_hosts');
  }
  public set apicHosts(value: string[]) {
    this._apicHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicHostsInput() {
    return this._apicHosts;
  }

  // apic_user_crt - computed: false, optional: false, required: true
  private _apicUserCrt?: string; 
  public get apicUserCrt() {
    return this.getStringAttribute('apic_user_crt');
  }
  public set apicUserCrt(value: string) {
    this._apicUserCrt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicUserCrtInput() {
    return this._apicUserCrt;
  }

  // apic_user_key - computed: false, optional: false, required: true
  private _apicUserKey?: string; 
  public get apicUserKey() {
    return this.getStringAttribute('apic_user_key');
  }
  public set apicUserKey(value: string) {
    this._apicUserKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicUserKeyInput() {
    return this._apicUserKey;
  }

  // apic_user_name - computed: false, optional: false, required: true
  private _apicUserName?: string; 
  public get apicUserName() {
    return this.getStringAttribute('apic_user_name');
  }
  public set apicUserName(value: string) {
    this._apicUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicUserNameInput() {
    return this._apicUserName;
  }

  // encap_type - computed: false, optional: false, required: true
  private _encapType?: string; 
  public get encapType() {
    return this.getStringAttribute('encap_type');
  }
  public set encapType(value: string) {
    this._encapType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTypeInput() {
    return this._encapType;
  }

  // extern_dynamic - computed: false, optional: false, required: true
  private _externDynamic?: string; 
  public get externDynamic() {
    return this.getStringAttribute('extern_dynamic');
  }
  public set externDynamic(value: string) {
    this._externDynamic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externDynamicInput() {
    return this._externDynamic;
  }

  // extern_static - computed: false, optional: false, required: true
  private _externStatic?: string; 
  public get externStatic() {
    return this.getStringAttribute('extern_static');
  }
  public set externStatic(value: string) {
    this._externStatic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externStaticInput() {
    return this._externStatic;
  }

  // infra_vlan - computed: false, optional: false, required: true
  private _infraVlan?: string; 
  public get infraVlan() {
    return this.getStringAttribute('infra_vlan');
  }
  public set infraVlan(value: string) {
    this._infraVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraVlanInput() {
    return this._infraVlan;
  }

  // kube_api_vlan - computed: false, optional: false, required: true
  private _kubeApiVlan?: string; 
  public get kubeApiVlan() {
    return this.getStringAttribute('kube_api_vlan');
  }
  public set kubeApiVlan(value: string) {
    this._kubeApiVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiVlanInput() {
    return this._kubeApiVlan;
  }

  // l3out - computed: false, optional: false, required: true
  private _l3Out?: string; 
  public get l3Out() {
    return this.getStringAttribute('l3out');
  }
  public set l3Out(value: string) {
    this._l3Out = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutInput() {
    return this._l3Out;
  }

  // l3out_external_networks - computed: false, optional: false, required: true
  private _l3OutExternalNetworks?: string[]; 
  public get l3OutExternalNetworks() {
    return this.getListAttribute('l3out_external_networks');
  }
  public set l3OutExternalNetworks(value: string[]) {
    this._l3OutExternalNetworks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutExternalNetworksInput() {
    return this._l3OutExternalNetworks;
  }

  // mcast_range_end - computed: false, optional: false, required: true
  private _mcastRangeEnd?: string; 
  public get mcastRangeEnd() {
    return this.getStringAttribute('mcast_range_end');
  }
  public set mcastRangeEnd(value: string) {
    this._mcastRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastRangeEndInput() {
    return this._mcastRangeEnd;
  }

  // mcast_range_start - computed: false, optional: false, required: true
  private _mcastRangeStart?: string; 
  public get mcastRangeStart() {
    return this.getStringAttribute('mcast_range_start');
  }
  public set mcastRangeStart(value: string) {
    this._mcastRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastRangeStartInput() {
    return this._mcastRangeStart;
  }

  // node_subnet - computed: false, optional: false, required: true
  private _nodeSubnet?: string; 
  public get nodeSubnet() {
    return this.getStringAttribute('node_subnet');
  }
  public set nodeSubnet(value: string) {
    this._nodeSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSubnetInput() {
    return this._nodeSubnet;
  }

  // node_svc_subnet - computed: false, optional: false, required: true
  private _nodeSvcSubnet?: string; 
  public get nodeSvcSubnet() {
    return this.getStringAttribute('node_svc_subnet');
  }
  public set nodeSvcSubnet(value: string) {
    this._nodeSvcSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSvcSubnetInput() {
    return this._nodeSvcSubnet;
  }

  // service_vlan - computed: false, optional: false, required: true
  private _serviceVlan?: string; 
  public get serviceVlan() {
    return this.getStringAttribute('service_vlan');
  }
  public set serviceVlan(value: string) {
    this._serviceVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVlanInput() {
    return this._serviceVlan;
  }

  // snat_port_range_end - computed: false, optional: true, required: false
  private _snatPortRangeEnd?: string; 
  public get snatPortRangeEnd() {
    return this.getStringAttribute('snat_port_range_end');
  }
  public set snatPortRangeEnd(value: string) {
    this._snatPortRangeEnd = value;
  }
  public resetSnatPortRangeEnd() {
    this._snatPortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortRangeEndInput() {
    return this._snatPortRangeEnd;
  }

  // snat_port_range_start - computed: false, optional: true, required: false
  private _snatPortRangeStart?: string; 
  public get snatPortRangeStart() {
    return this.getStringAttribute('snat_port_range_start');
  }
  public set snatPortRangeStart(value: string) {
    this._snatPortRangeStart = value;
  }
  public resetSnatPortRangeStart() {
    this._snatPortRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortRangeStartInput() {
    return this._snatPortRangeStart;
  }

  // snat_ports_per_node - computed: false, optional: true, required: false
  private _snatPortsPerNode?: string; 
  public get snatPortsPerNode() {
    return this.getStringAttribute('snat_ports_per_node');
  }
  public set snatPortsPerNode(value: string) {
    this._snatPortsPerNode = value;
  }
  public resetSnatPortsPerNode() {
    this._snatPortsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortsPerNodeInput() {
    return this._snatPortsPerNode;
  }

  // system_id - computed: false, optional: false, required: true
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // vrf_tenant - computed: false, optional: false, required: true
  private _vrfTenant?: string; 
  public get vrfTenant() {
    return this.getStringAttribute('vrf_tenant');
  }
  public set vrfTenant(value: string) {
    this._vrfTenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTenantInput() {
    return this._vrfTenant;
  }
}
export interface ClusterNetworkCalicoNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cloud_provider Cluster#cloud_provider}
  */
  readonly cloudProvider?: string;
}

export function clusterNetworkCalicoNetworkProviderToTerraform(struct?: ClusterNetworkCalicoNetworkProviderOutputReference | ClusterNetworkCalicoNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
  }
}


export function clusterNetworkCalicoNetworkProviderToHclTerraform(struct?: ClusterNetworkCalicoNetworkProviderOutputReference | ClusterNetworkCalicoNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkCalicoNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkCalicoNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkCalicoNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProvider = value.cloudProvider;
    }
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }
}
export interface ClusterNetworkCanalNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#iface Cluster#iface}
  */
  readonly iface?: string;
}

export function clusterNetworkCanalNetworkProviderToTerraform(struct?: ClusterNetworkCanalNetworkProviderOutputReference | ClusterNetworkCanalNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iface: cdktf.stringToTerraform(struct!.iface),
  }
}


export function clusterNetworkCanalNetworkProviderToHclTerraform(struct?: ClusterNetworkCanalNetworkProviderOutputReference | ClusterNetworkCanalNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iface: {
      value: cdktf.stringToHclTerraform(struct!.iface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkCanalNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkCanalNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iface = this._iface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkCanalNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iface = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iface = value.iface;
    }
  }

  // iface - computed: true, optional: true, required: false
  private _iface?: string; 
  public get iface() {
    return this.getStringAttribute('iface');
  }
  public set iface(value: string) {
    this._iface = value;
  }
  public resetIface() {
    this._iface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }
}
export interface ClusterNetworkFlannelNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#iface Cluster#iface}
  */
  readonly iface?: string;
}

export function clusterNetworkFlannelNetworkProviderToTerraform(struct?: ClusterNetworkFlannelNetworkProviderOutputReference | ClusterNetworkFlannelNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iface: cdktf.stringToTerraform(struct!.iface),
  }
}


export function clusterNetworkFlannelNetworkProviderToHclTerraform(struct?: ClusterNetworkFlannelNetworkProviderOutputReference | ClusterNetworkFlannelNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iface: {
      value: cdktf.stringToHclTerraform(struct!.iface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkFlannelNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkFlannelNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iface = this._iface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkFlannelNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iface = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iface = value.iface;
    }
  }

  // iface - computed: true, optional: true, required: false
  private _iface?: string; 
  public get iface() {
    return this.getStringAttribute('iface');
  }
  public set iface(value: string) {
    this._iface = value;
  }
  public resetIface() {
    this._iface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }
}
export interface ClusterNetworkWeaveNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#password Cluster#password}
  */
  readonly password: string;
}

export function clusterNetworkWeaveNetworkProviderToTerraform(struct?: ClusterNetworkWeaveNetworkProviderOutputReference | ClusterNetworkWeaveNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function clusterNetworkWeaveNetworkProviderToHclTerraform(struct?: ClusterNetworkWeaveNetworkProviderOutputReference | ClusterNetworkWeaveNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkWeaveNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkWeaveNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkWeaveNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface ClusterNetwork {
  /**
  * Enable/Disable br_netfilter on nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enable_br_netfilter Cluster#enable_br_netfilter}
  */
  readonly enableBrNetfilter?: boolean | cdktf.IResolvable;
  /**
  * Network provider MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#mtu Cluster#mtu}
  */
  readonly mtu?: number;
  /**
  * Network provider options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#options Cluster#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Network provider plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#plugin Cluster#plugin}
  */
  readonly plugin?: string;
  /**
  * aci_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aci_network_provider Cluster#aci_network_provider}
  */
  readonly aciNetworkProvider?: ClusterNetworkAciNetworkProvider;
  /**
  * calico_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#calico_network_provider Cluster#calico_network_provider}
  */
  readonly calicoNetworkProvider?: ClusterNetworkCalicoNetworkProvider;
  /**
  * canal_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#canal_network_provider Cluster#canal_network_provider}
  */
  readonly canalNetworkProvider?: ClusterNetworkCanalNetworkProvider;
  /**
  * flannel_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#flannel_network_provider Cluster#flannel_network_provider}
  */
  readonly flannelNetworkProvider?: ClusterNetworkFlannelNetworkProvider;
  /**
  * weave_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#weave_network_provider Cluster#weave_network_provider}
  */
  readonly weaveNetworkProvider?: ClusterNetworkWeaveNetworkProvider;
}

export function clusterNetworkToTerraform(struct?: ClusterNetworkOutputReference | ClusterNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_br_netfilter: cdktf.booleanToTerraform(struct!.enableBrNetfilter),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    plugin: cdktf.stringToTerraform(struct!.plugin),
    aci_network_provider: clusterNetworkAciNetworkProviderToTerraform(struct!.aciNetworkProvider),
    calico_network_provider: clusterNetworkCalicoNetworkProviderToTerraform(struct!.calicoNetworkProvider),
    canal_network_provider: clusterNetworkCanalNetworkProviderToTerraform(struct!.canalNetworkProvider),
    flannel_network_provider: clusterNetworkFlannelNetworkProviderToTerraform(struct!.flannelNetworkProvider),
    weave_network_provider: clusterNetworkWeaveNetworkProviderToTerraform(struct!.weaveNetworkProvider),
  }
}


export function clusterNetworkToHclTerraform(struct?: ClusterNetworkOutputReference | ClusterNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_br_netfilter: {
      value: cdktf.booleanToHclTerraform(struct!.enableBrNetfilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    plugin: {
      value: cdktf.stringToHclTerraform(struct!.plugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aci_network_provider: {
      value: clusterNetworkAciNetworkProviderToHclTerraform(struct!.aciNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkAciNetworkProviderList",
    },
    calico_network_provider: {
      value: clusterNetworkCalicoNetworkProviderToHclTerraform(struct!.calicoNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkCalicoNetworkProviderList",
    },
    canal_network_provider: {
      value: clusterNetworkCanalNetworkProviderToHclTerraform(struct!.canalNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkCanalNetworkProviderList",
    },
    flannel_network_provider: {
      value: clusterNetworkFlannelNetworkProviderToHclTerraform(struct!.flannelNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkFlannelNetworkProviderList",
    },
    weave_network_provider: {
      value: clusterNetworkWeaveNetworkProviderToHclTerraform(struct!.weaveNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkWeaveNetworkProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBrNetfilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBrNetfilter = this._enableBrNetfilter;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._plugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin;
    }
    if (this._aciNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aciNetworkProvider = this._aciNetworkProvider?.internalValue;
    }
    if (this._calicoNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoNetworkProvider = this._calicoNetworkProvider?.internalValue;
    }
    if (this._canalNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canalNetworkProvider = this._canalNetworkProvider?.internalValue;
    }
    if (this._flannelNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flannelNetworkProvider = this._flannelNetworkProvider?.internalValue;
    }
    if (this._weaveNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weaveNetworkProvider = this._weaveNetworkProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableBrNetfilter = undefined;
      this._mtu = undefined;
      this._options = undefined;
      this._plugin = undefined;
      this._aciNetworkProvider.internalValue = undefined;
      this._calicoNetworkProvider.internalValue = undefined;
      this._canalNetworkProvider.internalValue = undefined;
      this._flannelNetworkProvider.internalValue = undefined;
      this._weaveNetworkProvider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableBrNetfilter = value.enableBrNetfilter;
      this._mtu = value.mtu;
      this._options = value.options;
      this._plugin = value.plugin;
      this._aciNetworkProvider.internalValue = value.aciNetworkProvider;
      this._calicoNetworkProvider.internalValue = value.calicoNetworkProvider;
      this._canalNetworkProvider.internalValue = value.canalNetworkProvider;
      this._flannelNetworkProvider.internalValue = value.flannelNetworkProvider;
      this._weaveNetworkProvider.internalValue = value.weaveNetworkProvider;
    }
  }

  // enable_br_netfilter - computed: false, optional: true, required: false
  private _enableBrNetfilter?: boolean | cdktf.IResolvable; 
  public get enableBrNetfilter() {
    return this.getBooleanAttribute('enable_br_netfilter');
  }
  public set enableBrNetfilter(value: boolean | cdktf.IResolvable) {
    this._enableBrNetfilter = value;
  }
  public resetEnableBrNetfilter() {
    this._enableBrNetfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBrNetfilterInput() {
    return this._enableBrNetfilter;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  public resetPlugin() {
    this._plugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // aci_network_provider - computed: false, optional: true, required: false
  private _aciNetworkProvider = new ClusterNetworkAciNetworkProviderOutputReference(this, "aci_network_provider");
  public get aciNetworkProvider() {
    return this._aciNetworkProvider;
  }
  public putAciNetworkProvider(value: ClusterNetworkAciNetworkProvider) {
    this._aciNetworkProvider.internalValue = value;
  }
  public resetAciNetworkProvider() {
    this._aciNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciNetworkProviderInput() {
    return this._aciNetworkProvider.internalValue;
  }

  // calico_network_provider - computed: false, optional: true, required: false
  private _calicoNetworkProvider = new ClusterNetworkCalicoNetworkProviderOutputReference(this, "calico_network_provider");
  public get calicoNetworkProvider() {
    return this._calicoNetworkProvider;
  }
  public putCalicoNetworkProvider(value: ClusterNetworkCalicoNetworkProvider) {
    this._calicoNetworkProvider.internalValue = value;
  }
  public resetCalicoNetworkProvider() {
    this._calicoNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoNetworkProviderInput() {
    return this._calicoNetworkProvider.internalValue;
  }

  // canal_network_provider - computed: false, optional: true, required: false
  private _canalNetworkProvider = new ClusterNetworkCanalNetworkProviderOutputReference(this, "canal_network_provider");
  public get canalNetworkProvider() {
    return this._canalNetworkProvider;
  }
  public putCanalNetworkProvider(value: ClusterNetworkCanalNetworkProvider) {
    this._canalNetworkProvider.internalValue = value;
  }
  public resetCanalNetworkProvider() {
    this._canalNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canalNetworkProviderInput() {
    return this._canalNetworkProvider.internalValue;
  }

  // flannel_network_provider - computed: false, optional: true, required: false
  private _flannelNetworkProvider = new ClusterNetworkFlannelNetworkProviderOutputReference(this, "flannel_network_provider");
  public get flannelNetworkProvider() {
    return this._flannelNetworkProvider;
  }
  public putFlannelNetworkProvider(value: ClusterNetworkFlannelNetworkProvider) {
    this._flannelNetworkProvider.internalValue = value;
  }
  public resetFlannelNetworkProvider() {
    this._flannelNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flannelNetworkProviderInput() {
    return this._flannelNetworkProvider.internalValue;
  }

  // weave_network_provider - computed: false, optional: true, required: false
  private _weaveNetworkProvider = new ClusterNetworkWeaveNetworkProviderOutputReference(this, "weave_network_provider");
  public get weaveNetworkProvider() {
    return this._weaveNetworkProvider;
  }
  public putWeaveNetworkProvider(value: ClusterNetworkWeaveNetworkProvider) {
    this._weaveNetworkProvider.internalValue = value;
  }
  public resetWeaveNetworkProvider() {
    this._weaveNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaveNetworkProviderInput() {
    return this._weaveNetworkProvider.internalValue;
  }
}
export interface ClusterNodesTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#effect Cluster#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#key Cluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#value Cluster#value}
  */
  readonly value: string;
}

export function clusterNodesTaintsToTerraform(struct?: ClusterNodesTaints | cdktf.IResolvable): any {
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


export function clusterNodesTaintsToHclTerraform(struct?: ClusterNodesTaints | cdktf.IResolvable): any {
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

export class ClusterNodesTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterNodesTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterNodesTaints | cdktf.IResolvable | undefined) {
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

export class ClusterNodesTaintsList extends cdktf.ComplexList {
  public internalValue? : ClusterNodesTaints[] | cdktf.IResolvable

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
  public get(index: number): ClusterNodesTaintsOutputReference {
    return new ClusterNodesTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterNodes {
  /**
  * IP or FQDN that is fully resolvable and used for SSH communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#address Cluster#address}
  */
  readonly address: string;
  /**
  * Docker socket on the node that will be used in tunneling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#docker_socket Cluster#docker_socket}
  */
  readonly dockerSocket?: string;
  /**
  * Hostname override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#hostname_override Cluster#hostname_override}
  */
  readonly hostnameOverride?: string;
  /**
  * Internal address that will be used for components communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#internal_address Cluster#internal_address}
  */
  readonly internalAddress?: string;
  /**
  * Node Labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#labels Cluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the host provisioned via docker machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#node_name Cluster#node_name}
  */
  readonly nodeName?: string;
  /**
  * Port used for SSH communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: string;
  /**
  * Node roles in k8s cluster [controlplane/worker/etcd])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#role Cluster#role}
  */
  readonly role: string[];
  /**
  * Node role in kubernetes cluster [controlplane/worker/etcd], specified by a comma-separated string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#roles Cluster#roles}
  */
  readonly roles?: string;
  /**
  * SSH Agent Auth enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_agent_auth Cluster#ssh_agent_auth}
  */
  readonly sshAgentAuth?: boolean | cdktf.IResolvable;
  /**
  * SSH Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_cert Cluster#ssh_cert}
  */
  readonly sshCert?: string;
  /**
  * SSH Certificate path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_cert_path Cluster#ssh_cert_path}
  */
  readonly sshCertPath?: string;
  /**
  * SSH Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_key Cluster#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * SSH Private Key path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ssh_key_path Cluster#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * SSH user that will be used by RKE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user Cluster#user}
  */
  readonly user: string;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#taints Cluster#taints}
  */
  readonly taints?: ClusterNodesTaints[] | cdktf.IResolvable;
}

export function clusterNodesToTerraform(struct?: ClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    docker_socket: cdktf.stringToTerraform(struct!.dockerSocket),
    hostname_override: cdktf.stringToTerraform(struct!.hostnameOverride),
    internal_address: cdktf.stringToTerraform(struct!.internalAddress),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    port: cdktf.stringToTerraform(struct!.port),
    role: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.role),
    roles: cdktf.stringToTerraform(struct!.roles),
    ssh_agent_auth: cdktf.booleanToTerraform(struct!.sshAgentAuth),
    ssh_cert: cdktf.stringToTerraform(struct!.sshCert),
    ssh_cert_path: cdktf.stringToTerraform(struct!.sshCertPath),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    ssh_key_path: cdktf.stringToTerraform(struct!.sshKeyPath),
    user: cdktf.stringToTerraform(struct!.user),
    taints: cdktf.listMapper(clusterNodesTaintsToTerraform, true)(struct!.taints),
  }
}


export function clusterNodesToHclTerraform(struct?: ClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_socket: {
      value: cdktf.stringToHclTerraform(struct!.dockerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_override: {
      value: cdktf.stringToHclTerraform(struct!.hostnameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_address: {
      value: cdktf.stringToHclTerraform(struct!.internalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.role),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.stringToHclTerraform(struct!.roles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_agent_auth: {
      value: cdktf.booleanToHclTerraform(struct!.sshAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_cert: {
      value: cdktf.stringToHclTerraform(struct!.sshCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.sshCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_path: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taints: {
      value: cdktf.listMapperHcl(clusterNodesTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNodesTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dockerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSocket = this._dockerSocket;
    }
    if (this._hostnameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameOverride = this._hostnameOverride;
    }
    if (this._internalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAddress = this._internalAddress;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._sshAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAgentAuth = this._sshAgentAuth;
    }
    if (this._sshCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshCert = this._sshCert;
    }
    if (this._sshCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshCertPath = this._sshCertPath;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._sshKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyPath = this._sshKeyPath;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._dockerSocket = undefined;
      this._hostnameOverride = undefined;
      this._internalAddress = undefined;
      this._labels = undefined;
      this._nodeName = undefined;
      this._port = undefined;
      this._role = undefined;
      this._roles = undefined;
      this._sshAgentAuth = undefined;
      this._sshCert = undefined;
      this._sshCertPath = undefined;
      this._sshKey = undefined;
      this._sshKeyPath = undefined;
      this._user = undefined;
      this._taints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._dockerSocket = value.dockerSocket;
      this._hostnameOverride = value.hostnameOverride;
      this._internalAddress = value.internalAddress;
      this._labels = value.labels;
      this._nodeName = value.nodeName;
      this._port = value.port;
      this._role = value.role;
      this._roles = value.roles;
      this._sshAgentAuth = value.sshAgentAuth;
      this._sshCert = value.sshCert;
      this._sshCertPath = value.sshCertPath;
      this._sshKey = value.sshKey;
      this._sshKeyPath = value.sshKeyPath;
      this._user = value.user;
      this._taints.internalValue = value.taints;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // docker_socket - computed: false, optional: true, required: false
  private _dockerSocket?: string; 
  public get dockerSocket() {
    return this.getStringAttribute('docker_socket');
  }
  public set dockerSocket(value: string) {
    this._dockerSocket = value;
  }
  public resetDockerSocket() {
    this._dockerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSocketInput() {
    return this._dockerSocket;
  }

  // hostname_override - computed: false, optional: true, required: false
  private _hostnameOverride?: string; 
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }
  public set hostnameOverride(value: string) {
    this._hostnameOverride = value;
  }
  public resetHostnameOverride() {
    this._hostnameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameOverrideInput() {
    return this._hostnameOverride;
  }

  // internal_address - computed: false, optional: true, required: false
  private _internalAddress?: string; 
  public get internalAddress() {
    return this.getStringAttribute('internal_address');
  }
  public set internalAddress(value: string) {
    this._internalAddress = value;
  }
  public resetInternalAddress() {
    this._internalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAddressInput() {
    return this._internalAddress;
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

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string[]; 
  public get role() {
    return this.getListAttribute('role');
  }
  public set role(value: string[]) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string; 
  public get roles() {
    return this.getStringAttribute('roles');
  }
  public set roles(value: string) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // ssh_agent_auth - computed: true, optional: true, required: false
  private _sshAgentAuth?: boolean | cdktf.IResolvable; 
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }
  public set sshAgentAuth(value: boolean | cdktf.IResolvable) {
    this._sshAgentAuth = value;
  }
  public resetSshAgentAuth() {
    this._sshAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAgentAuthInput() {
    return this._sshAgentAuth;
  }

  // ssh_cert - computed: false, optional: true, required: false
  private _sshCert?: string; 
  public get sshCert() {
    return this.getStringAttribute('ssh_cert');
  }
  public set sshCert(value: string) {
    this._sshCert = value;
  }
  public resetSshCert() {
    this._sshCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertInput() {
    return this._sshCert;
  }

  // ssh_cert_path - computed: false, optional: true, required: false
  private _sshCertPath?: string; 
  public get sshCertPath() {
    return this.getStringAttribute('ssh_cert_path');
  }
  public set sshCertPath(value: string) {
    this._sshCertPath = value;
  }
  public resetSshCertPath() {
    this._sshCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertPathInput() {
    return this._sshCertPath;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_key_path - computed: false, optional: true, required: false
  private _sshKeyPath?: string; 
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new ClusterNodesTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: ClusterNodesTaints[] | cdktf.IResolvable) {
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

export class ClusterNodesList extends cdktf.ComplexList {
  public internalValue? : ClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): ClusterNodesOutputReference {
    return new ClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterPrivateRegistries {
  /**
  * Set as default registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#is_default Cluster#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#password Cluster#password}
  */
  readonly password?: string;
  /**
  * Registry URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#url Cluster#url}
  */
  readonly url: string;
  /**
  * Registry user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#user Cluster#user}
  */
  readonly user?: string;
}

export function clusterPrivateRegistriesToTerraform(struct?: ClusterPrivateRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterPrivateRegistriesToHclTerraform(struct?: ClusterPrivateRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPrivateRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterPrivateRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPrivateRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDefault = undefined;
      this._password = undefined;
      this._url = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDefault = value.isDefault;
      this._password = value.password;
      this._url = value.url;
      this._user = value.user;
    }
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ClusterPrivateRegistriesList extends cdktf.ComplexList {
  public internalValue? : ClusterPrivateRegistries[] | cdktf.IResolvable

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
  public get(index: number): ClusterPrivateRegistriesOutputReference {
    return new ClusterPrivateRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterRestore {
  /**
  * Restore RKE cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#restore Cluster#restore}
  */
  readonly restore?: boolean | cdktf.IResolvable;
  /**
  * Snapshot name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#snapshot_name Cluster#snapshot_name}
  */
  readonly snapshotName?: string;
}

export function clusterRestoreToTerraform(struct?: ClusterRestoreOutputReference | ClusterRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restore: cdktf.booleanToTerraform(struct!.restore),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
  }
}


export function clusterRestoreToHclTerraform(struct?: ClusterRestoreOutputReference | ClusterRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restore: {
      value: cdktf.booleanToHclTerraform(struct!.restore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restore !== undefined) {
      hasAnyValues = true;
      internalValueResult.restore = this._restore;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restore = undefined;
      this._snapshotName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restore = value.restore;
      this._snapshotName = value.snapshotName;
    }
  }

  // restore - computed: false, optional: true, required: false
  private _restore?: boolean | cdktf.IResolvable; 
  public get restore() {
    return this.getBooleanAttribute('restore');
  }
  public set restore(value: boolean | cdktf.IResolvable) {
    this._restore = value;
  }
  public resetRestore() {
    this._restore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }
}
export interface ClusterRotateCertificates {
  /**
  * Rotate CA Certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ca_certificates Cluster#ca_certificates}
  */
  readonly caCertificates?: boolean | cdktf.IResolvable;
  /**
  * Services to rotate their certs. valid values are etcd|kubelet|kube-apiserver|kube-proxy|kube-scheduler|kube-controller-manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#services Cluster#services}
  */
  readonly services?: string[];
}

export function clusterRotateCertificatesToTerraform(struct?: ClusterRotateCertificatesOutputReference | ClusterRotateCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.booleanToTerraform(struct!.caCertificates),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function clusterRotateCertificatesToHclTerraform(struct?: ClusterRotateCertificatesOutputReference | ClusterRotateCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.booleanToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRotateCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRotateCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRotateCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificates = undefined;
      this._services = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificates = value.caCertificates;
      this._services = value.services;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: boolean | cdktf.IResolvable; 
  public get caCertificates() {
    return this.getBooleanAttribute('ca_certificates');
  }
  public set caCertificates(value: boolean | cdktf.IResolvable) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface ClusterServicesEtcdBackupConfigS3BackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#access_key Cluster#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#bucket_name Cluster#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#custom_ca Cluster#custom_ca}
  */
  readonly customCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#endpoint Cluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#folder Cluster#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#region Cluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#secret_key Cluster#secret_key}
  */
  readonly secretKey?: string;
}

export function clusterServicesEtcdBackupConfigS3BackupConfigToTerraform(struct?: ClusterServicesEtcdBackupConfigS3BackupConfigOutputReference | ClusterServicesEtcdBackupConfigS3BackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    custom_ca: cdktf.stringToTerraform(struct!.customCa),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    folder: cdktf.stringToTerraform(struct!.folder),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function clusterServicesEtcdBackupConfigS3BackupConfigToHclTerraform(struct?: ClusterServicesEtcdBackupConfigS3BackupConfigOutputReference | ClusterServicesEtcdBackupConfigS3BackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ca: {
      value: cdktf.stringToHclTerraform(struct!.customCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesEtcdBackupConfigS3BackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesEtcdBackupConfigS3BackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._customCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCa = this._customCa;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesEtcdBackupConfigS3BackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._customCa = undefined;
      this._endpoint = undefined;
      this._folder = undefined;
      this._region = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucketName = value.bucketName;
      this._customCa = value.customCa;
      this._endpoint = value.endpoint;
      this._folder = value.folder;
      this._region = value.region;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // custom_ca - computed: false, optional: true, required: false
  private _customCa?: string; 
  public get customCa() {
    return this.getStringAttribute('custom_ca');
  }
  public set customCa(value: string) {
    this._customCa = value;
  }
  public resetCustomCa() {
    this._customCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCaInput() {
    return this._customCa;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface ClusterServicesEtcdBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#interval_hours Cluster#interval_hours}
  */
  readonly intervalHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#retention Cluster#retention}
  */
  readonly retention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#safe_timestamp Cluster#safe_timestamp}
  */
  readonly safeTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#timeout Cluster#timeout}
  */
  readonly timeout?: number;
  /**
  * s3_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#s3_backup_config Cluster#s3_backup_config}
  */
  readonly s3BackupConfig?: ClusterServicesEtcdBackupConfigS3BackupConfig;
}

export function clusterServicesEtcdBackupConfigToTerraform(struct?: ClusterServicesEtcdBackupConfigOutputReference | ClusterServicesEtcdBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_hours: cdktf.numberToTerraform(struct!.intervalHours),
    retention: cdktf.numberToTerraform(struct!.retention),
    safe_timestamp: cdktf.booleanToTerraform(struct!.safeTimestamp),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    s3_backup_config: clusterServicesEtcdBackupConfigS3BackupConfigToTerraform(struct!.s3BackupConfig),
  }
}


export function clusterServicesEtcdBackupConfigToHclTerraform(struct?: ClusterServicesEtcdBackupConfigOutputReference | ClusterServicesEtcdBackupConfig): any {
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
    interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.intervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    safe_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.safeTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_backup_config: {
      value: clusterServicesEtcdBackupConfigS3BackupConfigToHclTerraform(struct!.s3BackupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesEtcdBackupConfigS3BackupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesEtcdBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesEtcdBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalHours = this._intervalHours;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._safeTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeTimestamp = this._safeTimestamp;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._s3BackupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupConfig = this._s3BackupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesEtcdBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._intervalHours = undefined;
      this._retention = undefined;
      this._safeTimestamp = undefined;
      this._timeout = undefined;
      this._s3BackupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._intervalHours = value.intervalHours;
      this._retention = value.retention;
      this._safeTimestamp = value.safeTimestamp;
      this._timeout = value.timeout;
      this._s3BackupConfig.internalValue = value.s3BackupConfig;
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

  // interval_hours - computed: false, optional: true, required: false
  private _intervalHours?: number; 
  public get intervalHours() {
    return this.getNumberAttribute('interval_hours');
  }
  public set intervalHours(value: number) {
    this._intervalHours = value;
  }
  public resetIntervalHours() {
    this._intervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalHoursInput() {
    return this._intervalHours;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // safe_timestamp - computed: false, optional: true, required: false
  private _safeTimestamp?: boolean | cdktf.IResolvable; 
  public get safeTimestamp() {
    return this.getBooleanAttribute('safe_timestamp');
  }
  public set safeTimestamp(value: boolean | cdktf.IResolvable) {
    this._safeTimestamp = value;
  }
  public resetSafeTimestamp() {
    this._safeTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeTimestampInput() {
    return this._safeTimestamp;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // s3_backup_config - computed: false, optional: true, required: false
  private _s3BackupConfig = new ClusterServicesEtcdBackupConfigS3BackupConfigOutputReference(this, "s3_backup_config");
  public get s3BackupConfig() {
    return this._s3BackupConfig;
  }
  public putS3BackupConfig(value: ClusterServicesEtcdBackupConfigS3BackupConfig) {
    this._s3BackupConfig.internalValue = value;
  }
  public resetS3BackupConfig() {
    this._s3BackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigInput() {
    return this._s3BackupConfig.internalValue;
  }
}
export interface ClusterServicesEtcd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ca_cert Cluster#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cert Cluster#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#creation Cluster#creation}
  */
  readonly creation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#external_urls Cluster#external_urls}
  */
  readonly externalUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#gid Cluster#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#key Cluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#path Cluster#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#retention Cluster#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#snapshot Cluster#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#uid Cluster#uid}
  */
  readonly uid?: number;
  /**
  * backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#backup_config Cluster#backup_config}
  */
  readonly backupConfig?: ClusterServicesEtcdBackupConfig;
}

export function clusterServicesEtcdToTerraform(struct?: ClusterServicesEtcdOutputReference | ClusterServicesEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    cert: cdktf.stringToTerraform(struct!.cert),
    creation: cdktf.stringToTerraform(struct!.creation),
    external_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalUrls),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    gid: cdktf.numberToTerraform(struct!.gid),
    image: cdktf.stringToTerraform(struct!.image),
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    retention: cdktf.stringToTerraform(struct!.retention),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
    uid: cdktf.numberToTerraform(struct!.uid),
    backup_config: clusterServicesEtcdBackupConfigToTerraform(struct!.backupConfig),
  }
}


export function clusterServicesEtcdToHclTerraform(struct?: ClusterServicesEtcdOutputReference | ClusterServicesEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation: {
      value: cdktf.stringToHclTerraform(struct!.creation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_config: {
      value: clusterServicesEtcdBackupConfigToHclTerraform(struct!.backupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesEtcdBackupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesEtcdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesEtcd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.creation = this._creation;
    }
    if (this._externalUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrls = this._externalUrls;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._backupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfig = this._backupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesEtcd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._cert = undefined;
      this._creation = undefined;
      this._externalUrls = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._gid = undefined;
      this._image = undefined;
      this._key = undefined;
      this._path = undefined;
      this._retention = undefined;
      this._snapshot = undefined;
      this._uid = undefined;
      this._backupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._cert = value.cert;
      this._creation = value.creation;
      this._externalUrls = value.externalUrls;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._gid = value.gid;
      this._image = value.image;
      this._key = value.key;
      this._path = value.path;
      this._retention = value.retention;
      this._snapshot = value.snapshot;
      this._uid = value.uid;
      this._backupConfig.internalValue = value.backupConfig;
    }
  }

  // ca_cert - computed: true, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // cert - computed: true, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // creation - computed: true, optional: true, required: false
  private _creation?: string; 
  public get creation() {
    return this.getStringAttribute('creation');
  }
  public set creation(value: string) {
    this._creation = value;
  }
  public resetCreation() {
    this._creation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInput() {
    return this._creation;
  }

  // external_urls - computed: true, optional: true, required: false
  private _externalUrls?: string[]; 
  public get externalUrls() {
    return this.getListAttribute('external_urls');
  }
  public set externalUrls(value: string[]) {
    this._externalUrls = value;
  }
  public resetExternalUrls() {
    this._externalUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlsInput() {
    return this._externalUrls;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // key - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig = new ClusterServicesEtcdBackupConfigOutputReference(this, "backup_config");
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: ClusterServicesEtcdBackupConfig) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }
}
export interface ClusterServicesKubeApiAuditLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#format Cluster#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#max_age Cluster#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#max_backup Cluster#max_backup}
  */
  readonly maxBackup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#max_size Cluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#path Cluster#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#policy Cluster#policy}
  */
  readonly policy?: string;
}

export function clusterServicesKubeApiAuditLogConfigurationToTerraform(struct?: ClusterServicesKubeApiAuditLogConfigurationOutputReference | ClusterServicesKubeApiAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    max_backup: cdktf.numberToTerraform(struct!.maxBackup),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    path: cdktf.stringToTerraform(struct!.path),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function clusterServicesKubeApiAuditLogConfigurationToHclTerraform(struct?: ClusterServicesKubeApiAuditLogConfigurationOutputReference | ClusterServicesKubeApiAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_backup: {
      value: cdktf.numberToHclTerraform(struct!.maxBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeApiAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiAuditLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackup = this._maxBackup;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiAuditLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._maxAge = undefined;
      this._maxBackup = undefined;
      this._maxSize = undefined;
      this._path = undefined;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._maxAge = value.maxAge;
      this._maxBackup = value.maxBackup;
      this._maxSize = value.maxSize;
      this._path = value.path;
      this._policy = value.policy;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_backup - computed: true, optional: true, required: false
  private _maxBackup?: number; 
  public get maxBackup() {
    return this.getNumberAttribute('max_backup');
  }
  public set maxBackup(value: number) {
    this._maxBackup = value;
  }
  public resetMaxBackup() {
    this._maxBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupInput() {
    return this._maxBackup;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface ClusterServicesKubeApiAuditLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#configuration Cluster#configuration}
  */
  readonly configuration?: ClusterServicesKubeApiAuditLogConfiguration;
}

export function clusterServicesKubeApiAuditLogToTerraform(struct?: ClusterServicesKubeApiAuditLogOutputReference | ClusterServicesKubeApiAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: clusterServicesKubeApiAuditLogConfigurationToTerraform(struct!.configuration),
  }
}


export function clusterServicesKubeApiAuditLogToHclTerraform(struct?: ClusterServicesKubeApiAuditLogOutputReference | ClusterServicesKubeApiAuditLog): any {
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
    configuration: {
      value: clusterServicesKubeApiAuditLogConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiAuditLogConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeApiAuditLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiAuditLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiAuditLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new ClusterServicesKubeApiAuditLogConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ClusterServicesKubeApiAuditLogConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface ClusterServicesKubeApiEventRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#configuration Cluster#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clusterServicesKubeApiEventRateLimitToTerraform(struct?: ClusterServicesKubeApiEventRateLimitOutputReference | ClusterServicesKubeApiEventRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clusterServicesKubeApiEventRateLimitToHclTerraform(struct?: ClusterServicesKubeApiEventRateLimitOutputReference | ClusterServicesKubeApiEventRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
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

export class ClusterServicesKubeApiEventRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiEventRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiEventRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
}
export interface ClusterServicesKubeApiSecretsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#custom_config Cluster#custom_config}
  */
  readonly customConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clusterServicesKubeApiSecretsEncryptionConfigToTerraform(struct?: ClusterServicesKubeApiSecretsEncryptionConfigOutputReference | ClusterServicesKubeApiSecretsEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_config: cdktf.stringToTerraform(struct!.customConfig),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clusterServicesKubeApiSecretsEncryptionConfigToHclTerraform(struct?: ClusterServicesKubeApiSecretsEncryptionConfigOutputReference | ClusterServicesKubeApiSecretsEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_config: {
      value: cdktf.stringToHclTerraform(struct!.customConfig),
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

export class ClusterServicesKubeApiSecretsEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiSecretsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfig = this._customConfig;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiSecretsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customConfig = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customConfig = value.customConfig;
      this._enabled = value.enabled;
    }
  }

  // custom_config - computed: true, optional: true, required: false
  private _customConfig?: string; 
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }
  public set customConfig(value: string) {
    this._customConfig = value;
  }
  public resetCustomConfig() {
    this._customConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig;
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
}
export interface ClusterServicesKubeApi {
  /**
  * Enable/Disable AlwaysPullImages admissions plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#always_pull_images Cluster#always_pull_images}
  */
  readonly alwaysPullImages?: boolean | cdktf.IResolvable;
  /**
  * Extra arguments that are added to the kube-api services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Built-in PodSecurityPolicy (privileged or restricted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#pod_security_configuration Cluster#pod_security_configuration}
  */
  readonly podSecurityConfiguration?: string;
  /**
  * Enabled/Disable PodSecurityPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#pod_security_policy Cluster#pod_security_policy}
  */
  readonly podSecurityPolicy?: boolean | cdktf.IResolvable;
  /**
  * Virtual IP range that will be used by Kubernetes services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_cluster_ip_range Cluster#service_cluster_ip_range}
  */
  readonly serviceClusterIpRange?: string;
  /**
  * Port range for services defined with NodePort type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_node_port_range Cluster#service_node_port_range}
  */
  readonly serviceNodePortRange?: string;
  /**
  * audit_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#audit_log Cluster#audit_log}
  */
  readonly auditLog?: ClusterServicesKubeApiAuditLog;
  /**
  * event_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#event_rate_limit Cluster#event_rate_limit}
  */
  readonly eventRateLimit?: ClusterServicesKubeApiEventRateLimit;
  /**
  * secrets_encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#secrets_encryption_config Cluster#secrets_encryption_config}
  */
  readonly secretsEncryptionConfig?: ClusterServicesKubeApiSecretsEncryptionConfig;
}

export function clusterServicesKubeApiToTerraform(struct?: ClusterServicesKubeApiOutputReference | ClusterServicesKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_pull_images: cdktf.booleanToTerraform(struct!.alwaysPullImages),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
    pod_security_configuration: cdktf.stringToTerraform(struct!.podSecurityConfiguration),
    pod_security_policy: cdktf.booleanToTerraform(struct!.podSecurityPolicy),
    service_cluster_ip_range: cdktf.stringToTerraform(struct!.serviceClusterIpRange),
    service_node_port_range: cdktf.stringToTerraform(struct!.serviceNodePortRange),
    audit_log: clusterServicesKubeApiAuditLogToTerraform(struct!.auditLog),
    event_rate_limit: clusterServicesKubeApiEventRateLimitToTerraform(struct!.eventRateLimit),
    secrets_encryption_config: clusterServicesKubeApiSecretsEncryptionConfigToTerraform(struct!.secretsEncryptionConfig),
  }
}


export function clusterServicesKubeApiToHclTerraform(struct?: ClusterServicesKubeApiOutputReference | ClusterServicesKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_pull_images: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysPullImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_security_configuration: {
      value: cdktf.stringToHclTerraform(struct!.podSecurityConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_security_policy: {
      value: cdktf.booleanToHclTerraform(struct!.podSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_cluster_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceClusterIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_node_port_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceNodePortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_log: {
      value: clusterServicesKubeApiAuditLogToHclTerraform(struct!.auditLog),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiAuditLogList",
    },
    event_rate_limit: {
      value: clusterServicesKubeApiEventRateLimitToHclTerraform(struct!.eventRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiEventRateLimitList",
    },
    secrets_encryption_config: {
      value: clusterServicesKubeApiSecretsEncryptionConfigToHclTerraform(struct!.secretsEncryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiSecretsEncryptionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysPullImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysPullImages = this._alwaysPullImages;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._podSecurityConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityConfiguration = this._podSecurityConfiguration;
    }
    if (this._podSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityPolicy = this._podSecurityPolicy;
    }
    if (this._serviceClusterIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceClusterIpRange = this._serviceClusterIpRange;
    }
    if (this._serviceNodePortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNodePortRange = this._serviceNodePortRange;
    }
    if (this._auditLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLog = this._auditLog?.internalValue;
    }
    if (this._eventRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRateLimit = this._eventRateLimit?.internalValue;
    }
    if (this._secretsEncryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsEncryptionConfig = this._secretsEncryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysPullImages = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
      this._podSecurityConfiguration = undefined;
      this._podSecurityPolicy = undefined;
      this._serviceClusterIpRange = undefined;
      this._serviceNodePortRange = undefined;
      this._auditLog.internalValue = undefined;
      this._eventRateLimit.internalValue = undefined;
      this._secretsEncryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysPullImages = value.alwaysPullImages;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
      this._podSecurityConfiguration = value.podSecurityConfiguration;
      this._podSecurityPolicy = value.podSecurityPolicy;
      this._serviceClusterIpRange = value.serviceClusterIpRange;
      this._serviceNodePortRange = value.serviceNodePortRange;
      this._auditLog.internalValue = value.auditLog;
      this._eventRateLimit.internalValue = value.eventRateLimit;
      this._secretsEncryptionConfig.internalValue = value.secretsEncryptionConfig;
    }
  }

  // always_pull_images - computed: true, optional: true, required: false
  private _alwaysPullImages?: boolean | cdktf.IResolvable; 
  public get alwaysPullImages() {
    return this.getBooleanAttribute('always_pull_images');
  }
  public set alwaysPullImages(value: boolean | cdktf.IResolvable) {
    this._alwaysPullImages = value;
  }
  public resetAlwaysPullImages() {
    this._alwaysPullImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPullImagesInput() {
    return this._alwaysPullImages;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // pod_security_configuration - computed: true, optional: true, required: false
  private _podSecurityConfiguration?: string; 
  public get podSecurityConfiguration() {
    return this.getStringAttribute('pod_security_configuration');
  }
  public set podSecurityConfiguration(value: string) {
    this._podSecurityConfiguration = value;
  }
  public resetPodSecurityConfiguration() {
    this._podSecurityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityConfigurationInput() {
    return this._podSecurityConfiguration;
  }

  // pod_security_policy - computed: true, optional: true, required: false
  private _podSecurityPolicy?: boolean | cdktf.IResolvable; 
  public get podSecurityPolicy() {
    return this.getBooleanAttribute('pod_security_policy');
  }
  public set podSecurityPolicy(value: boolean | cdktf.IResolvable) {
    this._podSecurityPolicy = value;
  }
  public resetPodSecurityPolicy() {
    this._podSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityPolicyInput() {
    return this._podSecurityPolicy;
  }

  // service_cluster_ip_range - computed: true, optional: true, required: false
  private _serviceClusterIpRange?: string; 
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
  public set serviceClusterIpRange(value: string) {
    this._serviceClusterIpRange = value;
  }
  public resetServiceClusterIpRange() {
    this._serviceClusterIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterIpRangeInput() {
    return this._serviceClusterIpRange;
  }

  // service_node_port_range - computed: true, optional: true, required: false
  private _serviceNodePortRange?: string; 
  public get serviceNodePortRange() {
    return this.getStringAttribute('service_node_port_range');
  }
  public set serviceNodePortRange(value: string) {
    this._serviceNodePortRange = value;
  }
  public resetServiceNodePortRange() {
    this._serviceNodePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodePortRangeInput() {
    return this._serviceNodePortRange;
  }

  // audit_log - computed: false, optional: true, required: false
  private _auditLog = new ClusterServicesKubeApiAuditLogOutputReference(this, "audit_log");
  public get auditLog() {
    return this._auditLog;
  }
  public putAuditLog(value: ClusterServicesKubeApiAuditLog) {
    this._auditLog.internalValue = value;
  }
  public resetAuditLog() {
    this._auditLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogInput() {
    return this._auditLog.internalValue;
  }

  // event_rate_limit - computed: false, optional: true, required: false
  private _eventRateLimit = new ClusterServicesKubeApiEventRateLimitOutputReference(this, "event_rate_limit");
  public get eventRateLimit() {
    return this._eventRateLimit;
  }
  public putEventRateLimit(value: ClusterServicesKubeApiEventRateLimit) {
    this._eventRateLimit.internalValue = value;
  }
  public resetEventRateLimit() {
    this._eventRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRateLimitInput() {
    return this._eventRateLimit.internalValue;
  }

  // secrets_encryption_config - computed: false, optional: true, required: false
  private _secretsEncryptionConfig = new ClusterServicesKubeApiSecretsEncryptionConfigOutputReference(this, "secrets_encryption_config");
  public get secretsEncryptionConfig() {
    return this._secretsEncryptionConfig;
  }
  public putSecretsEncryptionConfig(value: ClusterServicesKubeApiSecretsEncryptionConfig) {
    this._secretsEncryptionConfig.internalValue = value;
  }
  public resetSecretsEncryptionConfig() {
    this._secretsEncryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsEncryptionConfigInput() {
    return this._secretsEncryptionConfig.internalValue;
  }
}
export interface ClusterServicesKubeController {
  /**
  * CIDR Range for Pods in cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cluster_cidr Cluster#cluster_cidr}
  */
  readonly clusterCidr?: string;
  /**
  * Extra arguments that are added to the kube-controller service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docker image of the kube-controller service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Virtual IP range that will be used by Kubernetes services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_cluster_ip_range Cluster#service_cluster_ip_range}
  */
  readonly serviceClusterIpRange?: string;
}

export function clusterServicesKubeControllerToTerraform(struct?: ClusterServicesKubeControllerOutputReference | ClusterServicesKubeController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_cidr: cdktf.stringToTerraform(struct!.clusterCidr),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
    service_cluster_ip_range: cdktf.stringToTerraform(struct!.serviceClusterIpRange),
  }
}


export function clusterServicesKubeControllerToHclTerraform(struct?: ClusterServicesKubeControllerOutputReference | ClusterServicesKubeController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_cidr: {
      value: cdktf.stringToHclTerraform(struct!.clusterCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cluster_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceClusterIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCidr = this._clusterCidr;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._serviceClusterIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceClusterIpRange = this._serviceClusterIpRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterCidr = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
      this._serviceClusterIpRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterCidr = value.clusterCidr;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
      this._serviceClusterIpRange = value.serviceClusterIpRange;
    }
  }

  // cluster_cidr - computed: true, optional: true, required: false
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  public resetClusterCidr() {
    this._clusterCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // service_cluster_ip_range - computed: true, optional: true, required: false
  private _serviceClusterIpRange?: string; 
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
  public set serviceClusterIpRange(value: string) {
    this._serviceClusterIpRange = value;
  }
  public resetServiceClusterIpRange() {
    this._serviceClusterIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterIpRangeInput() {
    return this._serviceClusterIpRange;
  }
}
export interface ClusterServicesKubelet {
  /**
  * Cluster DNS service ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cluster_dns_server Cluster#cluster_dns_server}
  */
  readonly clusterDnsServer?: string;
  /**
  * Domain of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cluster_domain Cluster#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Extra arguments that are added to the kubelet services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the worker nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Fail if swap is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#fail_swap_on Cluster#fail_swap_on}
  */
  readonly failSwapOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#generate_serving_certificate Cluster#generate_serving_certificate}
  */
  readonly generateServingCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docker image of the kubelet service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * The image whose network/ipc namespaces containers in each pod will use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#infra_container_image Cluster#infra_container_image}
  */
  readonly infraContainerImage?: string;
}

export function clusterServicesKubeletToTerraform(struct?: ClusterServicesKubeletOutputReference | ClusterServicesKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_dns_server: cdktf.stringToTerraform(struct!.clusterDnsServer),
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    fail_swap_on: cdktf.booleanToTerraform(struct!.failSwapOn),
    generate_serving_certificate: cdktf.booleanToTerraform(struct!.generateServingCertificate),
    image: cdktf.stringToTerraform(struct!.image),
    infra_container_image: cdktf.stringToTerraform(struct!.infraContainerImage),
  }
}


export function clusterServicesKubeletToHclTerraform(struct?: ClusterServicesKubeletOutputReference | ClusterServicesKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.clusterDnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fail_swap_on: {
      value: cdktf.booleanToHclTerraform(struct!.failSwapOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_serving_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.generateServingCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infra_container_image: {
      value: cdktf.stringToHclTerraform(struct!.infraContainerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeletOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubelet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsServer = this._clusterDnsServer;
    }
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._failSwapOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSwapOn = this._failSwapOn;
    }
    if (this._generateServingCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateServingCertificate = this._generateServingCertificate;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._infraContainerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraContainerImage = this._infraContainerImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubelet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterDnsServer = undefined;
      this._clusterDomain = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._failSwapOn = undefined;
      this._generateServingCertificate = undefined;
      this._image = undefined;
      this._infraContainerImage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterDnsServer = value.clusterDnsServer;
      this._clusterDomain = value.clusterDomain;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._failSwapOn = value.failSwapOn;
      this._generateServingCertificate = value.generateServingCertificate;
      this._image = value.image;
      this._infraContainerImage = value.infraContainerImage;
    }
  }

  // cluster_dns_server - computed: true, optional: true, required: false
  private _clusterDnsServer?: string; 
  public get clusterDnsServer() {
    return this.getStringAttribute('cluster_dns_server');
  }
  public set clusterDnsServer(value: string) {
    this._clusterDnsServer = value;
  }
  public resetClusterDnsServer() {
    this._clusterDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsServerInput() {
    return this._clusterDnsServer;
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

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // fail_swap_on - computed: true, optional: true, required: false
  private _failSwapOn?: boolean | cdktf.IResolvable; 
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }
  public set failSwapOn(value: boolean | cdktf.IResolvable) {
    this._failSwapOn = value;
  }
  public resetFailSwapOn() {
    this._failSwapOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSwapOnInput() {
    return this._failSwapOn;
  }

  // generate_serving_certificate - computed: false, optional: true, required: false
  private _generateServingCertificate?: boolean | cdktf.IResolvable; 
  public get generateServingCertificate() {
    return this.getBooleanAttribute('generate_serving_certificate');
  }
  public set generateServingCertificate(value: boolean | cdktf.IResolvable) {
    this._generateServingCertificate = value;
  }
  public resetGenerateServingCertificate() {
    this._generateServingCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateServingCertificateInput() {
    return this._generateServingCertificate;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // infra_container_image - computed: true, optional: true, required: false
  private _infraContainerImage?: string; 
  public get infraContainerImage() {
    return this.getStringAttribute('infra_container_image');
  }
  public set infraContainerImage(value: string) {
    this._infraContainerImage = value;
  }
  public resetInfraContainerImage() {
    this._infraContainerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraContainerImageInput() {
    return this._infraContainerImage;
  }
}
export interface ClusterServicesKubeproxy {
  /**
  * Extra arguments that are added to the kubeproxy services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the worker nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the worker nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docker image of the kubeproxy service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
}

export function clusterServicesKubeproxyToTerraform(struct?: ClusterServicesKubeproxyOutputReference | ClusterServicesKubeproxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function clusterServicesKubeproxyToHclTerraform(struct?: ClusterServicesKubeproxyOutputReference | ClusterServicesKubeproxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeproxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeproxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeproxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
    }
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClusterServicesScheduler {
  /**
  * Extra arguments that are added to the scheduler services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docker image of the scheduler service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
}

export function clusterServicesSchedulerToTerraform(struct?: ClusterServicesSchedulerOutputReference | ClusterServicesScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function clusterServicesSchedulerToHclTerraform(struct?: ClusterServicesSchedulerOutputReference | ClusterServicesScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesSchedulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesScheduler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesScheduler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
    }
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClusterServices {
  /**
  * etcd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#etcd Cluster#etcd}
  */
  readonly etcd?: ClusterServicesEtcd;
  /**
  * kube_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kube_api Cluster#kube_api}
  */
  readonly kubeApi?: ClusterServicesKubeApi;
  /**
  * kube_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kube_controller Cluster#kube_controller}
  */
  readonly kubeController?: ClusterServicesKubeController;
  /**
  * kubelet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubelet Cluster#kubelet}
  */
  readonly kubelet?: ClusterServicesKubelet;
  /**
  * kubeproxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubeproxy Cluster#kubeproxy}
  */
  readonly kubeproxy?: ClusterServicesKubeproxy;
  /**
  * scheduler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#scheduler Cluster#scheduler}
  */
  readonly scheduler?: ClusterServicesScheduler;
}

export function clusterServicesToTerraform(struct?: ClusterServicesOutputReference | ClusterServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etcd: clusterServicesEtcdToTerraform(struct!.etcd),
    kube_api: clusterServicesKubeApiToTerraform(struct!.kubeApi),
    kube_controller: clusterServicesKubeControllerToTerraform(struct!.kubeController),
    kubelet: clusterServicesKubeletToTerraform(struct!.kubelet),
    kubeproxy: clusterServicesKubeproxyToTerraform(struct!.kubeproxy),
    scheduler: clusterServicesSchedulerToTerraform(struct!.scheduler),
  }
}


export function clusterServicesToHclTerraform(struct?: ClusterServicesOutputReference | ClusterServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etcd: {
      value: clusterServicesEtcdToHclTerraform(struct!.etcd),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesEtcdList",
    },
    kube_api: {
      value: clusterServicesKubeApiToHclTerraform(struct!.kubeApi),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiList",
    },
    kube_controller: {
      value: clusterServicesKubeControllerToHclTerraform(struct!.kubeController),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeControllerList",
    },
    kubelet: {
      value: clusterServicesKubeletToHclTerraform(struct!.kubelet),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeletList",
    },
    kubeproxy: {
      value: clusterServicesKubeproxyToHclTerraform(struct!.kubeproxy),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeproxyList",
    },
    scheduler: {
      value: clusterServicesSchedulerToHclTerraform(struct!.scheduler),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesSchedulerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etcd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcd = this._etcd?.internalValue;
    }
    if (this._kubeApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApi = this._kubeApi?.internalValue;
    }
    if (this._kubeController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeController = this._kubeController?.internalValue;
    }
    if (this._kubelet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet?.internalValue;
    }
    if (this._kubeproxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeproxy = this._kubeproxy?.internalValue;
    }
    if (this._scheduler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._etcd.internalValue = undefined;
      this._kubeApi.internalValue = undefined;
      this._kubeController.internalValue = undefined;
      this._kubelet.internalValue = undefined;
      this._kubeproxy.internalValue = undefined;
      this._scheduler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._etcd.internalValue = value.etcd;
      this._kubeApi.internalValue = value.kubeApi;
      this._kubeController.internalValue = value.kubeController;
      this._kubelet.internalValue = value.kubelet;
      this._kubeproxy.internalValue = value.kubeproxy;
      this._scheduler.internalValue = value.scheduler;
    }
  }

  // etcd - computed: false, optional: true, required: false
  private _etcd = new ClusterServicesEtcdOutputReference(this, "etcd");
  public get etcd() {
    return this._etcd;
  }
  public putEtcd(value: ClusterServicesEtcd) {
    this._etcd.internalValue = value;
  }
  public resetEtcd() {
    this._etcd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdInput() {
    return this._etcd.internalValue;
  }

  // kube_api - computed: false, optional: true, required: false
  private _kubeApi = new ClusterServicesKubeApiOutputReference(this, "kube_api");
  public get kubeApi() {
    return this._kubeApi;
  }
  public putKubeApi(value: ClusterServicesKubeApi) {
    this._kubeApi.internalValue = value;
  }
  public resetKubeApi() {
    this._kubeApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiInput() {
    return this._kubeApi.internalValue;
  }

  // kube_controller - computed: false, optional: true, required: false
  private _kubeController = new ClusterServicesKubeControllerOutputReference(this, "kube_controller");
  public get kubeController() {
    return this._kubeController;
  }
  public putKubeController(value: ClusterServicesKubeController) {
    this._kubeController.internalValue = value;
  }
  public resetKubeController() {
    this._kubeController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeControllerInput() {
    return this._kubeController.internalValue;
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet = new ClusterServicesKubeletOutputReference(this, "kubelet");
  public get kubelet() {
    return this._kubelet;
  }
  public putKubelet(value: ClusterServicesKubelet) {
    this._kubelet.internalValue = value;
  }
  public resetKubelet() {
    this._kubelet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet.internalValue;
  }

  // kubeproxy - computed: false, optional: true, required: false
  private _kubeproxy = new ClusterServicesKubeproxyOutputReference(this, "kubeproxy");
  public get kubeproxy() {
    return this._kubeproxy;
  }
  public putKubeproxy(value: ClusterServicesKubeproxy) {
    this._kubeproxy.internalValue = value;
  }
  public resetKubeproxy() {
    this._kubeproxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeproxyInput() {
    return this._kubeproxy.internalValue;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new ClusterServicesSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: ClusterServicesScheduler) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }
}
export interface ClusterServicesEtcdBackupConfigS3BackupConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#access_key Cluster#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#bucket_name Cluster#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#custom_ca Cluster#custom_ca}
  */
  readonly customCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#endpoint Cluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#folder Cluster#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#region Cluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#secret_key Cluster#secret_key}
  */
  readonly secretKey?: string;
}

export function clusterServicesEtcdBackupConfigS3BackupConfigAToTerraform(struct?: ClusterServicesEtcdBackupConfigS3BackupConfigAOutputReference | ClusterServicesEtcdBackupConfigS3BackupConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    custom_ca: cdktf.stringToTerraform(struct!.customCa),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    folder: cdktf.stringToTerraform(struct!.folder),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function clusterServicesEtcdBackupConfigS3BackupConfigAToHclTerraform(struct?: ClusterServicesEtcdBackupConfigS3BackupConfigAOutputReference | ClusterServicesEtcdBackupConfigS3BackupConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ca: {
      value: cdktf.stringToHclTerraform(struct!.customCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesEtcdBackupConfigS3BackupConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesEtcdBackupConfigS3BackupConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._customCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCa = this._customCa;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesEtcdBackupConfigS3BackupConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._customCa = undefined;
      this._endpoint = undefined;
      this._folder = undefined;
      this._region = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucketName = value.bucketName;
      this._customCa = value.customCa;
      this._endpoint = value.endpoint;
      this._folder = value.folder;
      this._region = value.region;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // custom_ca - computed: false, optional: true, required: false
  private _customCa?: string; 
  public get customCa() {
    return this.getStringAttribute('custom_ca');
  }
  public set customCa(value: string) {
    this._customCa = value;
  }
  public resetCustomCa() {
    this._customCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCaInput() {
    return this._customCa;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface ClusterServicesEtcdBackupConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#interval_hours Cluster#interval_hours}
  */
  readonly intervalHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#retention Cluster#retention}
  */
  readonly retention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#safe_timestamp Cluster#safe_timestamp}
  */
  readonly safeTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#timeout Cluster#timeout}
  */
  readonly timeout?: number;
  /**
  * s3_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#s3_backup_config Cluster#s3_backup_config}
  */
  readonly s3BackupConfig?: ClusterServicesEtcdBackupConfigS3BackupConfigA;
}

export function clusterServicesEtcdBackupConfigAToTerraform(struct?: ClusterServicesEtcdBackupConfigAOutputReference | ClusterServicesEtcdBackupConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_hours: cdktf.numberToTerraform(struct!.intervalHours),
    retention: cdktf.numberToTerraform(struct!.retention),
    safe_timestamp: cdktf.booleanToTerraform(struct!.safeTimestamp),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    s3_backup_config: clusterServicesEtcdBackupConfigS3BackupConfigAToTerraform(struct!.s3BackupConfig),
  }
}


export function clusterServicesEtcdBackupConfigAToHclTerraform(struct?: ClusterServicesEtcdBackupConfigAOutputReference | ClusterServicesEtcdBackupConfigA): any {
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
    interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.intervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    safe_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.safeTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_backup_config: {
      value: clusterServicesEtcdBackupConfigS3BackupConfigAToHclTerraform(struct!.s3BackupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesEtcdBackupConfigS3BackupConfigAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesEtcdBackupConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesEtcdBackupConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalHours = this._intervalHours;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._safeTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeTimestamp = this._safeTimestamp;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._s3BackupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupConfig = this._s3BackupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesEtcdBackupConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._intervalHours = undefined;
      this._retention = undefined;
      this._safeTimestamp = undefined;
      this._timeout = undefined;
      this._s3BackupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._intervalHours = value.intervalHours;
      this._retention = value.retention;
      this._safeTimestamp = value.safeTimestamp;
      this._timeout = value.timeout;
      this._s3BackupConfig.internalValue = value.s3BackupConfig;
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

  // interval_hours - computed: false, optional: true, required: false
  private _intervalHours?: number; 
  public get intervalHours() {
    return this.getNumberAttribute('interval_hours');
  }
  public set intervalHours(value: number) {
    this._intervalHours = value;
  }
  public resetIntervalHours() {
    this._intervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalHoursInput() {
    return this._intervalHours;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // safe_timestamp - computed: false, optional: true, required: false
  private _safeTimestamp?: boolean | cdktf.IResolvable; 
  public get safeTimestamp() {
    return this.getBooleanAttribute('safe_timestamp');
  }
  public set safeTimestamp(value: boolean | cdktf.IResolvable) {
    this._safeTimestamp = value;
  }
  public resetSafeTimestamp() {
    this._safeTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeTimestampInput() {
    return this._safeTimestamp;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // s3_backup_config - computed: false, optional: true, required: false
  private _s3BackupConfig = new ClusterServicesEtcdBackupConfigS3BackupConfigAOutputReference(this, "s3_backup_config");
  public get s3BackupConfig() {
    return this._s3BackupConfig;
  }
  public putS3BackupConfig(value: ClusterServicesEtcdBackupConfigS3BackupConfigA) {
    this._s3BackupConfig.internalValue = value;
  }
  public resetS3BackupConfig() {
    this._s3BackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigInput() {
    return this._s3BackupConfig.internalValue;
  }
}
export interface ClusterServicesEtcdA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ca_cert Cluster#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cert Cluster#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#creation Cluster#creation}
  */
  readonly creation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#external_urls Cluster#external_urls}
  */
  readonly externalUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#gid Cluster#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#key Cluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#path Cluster#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#retention Cluster#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#snapshot Cluster#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#uid Cluster#uid}
  */
  readonly uid?: number;
  /**
  * backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#backup_config Cluster#backup_config}
  */
  readonly backupConfig?: ClusterServicesEtcdBackupConfigA;
}

export function clusterServicesEtcdAToTerraform(struct?: ClusterServicesEtcdAOutputReference | ClusterServicesEtcdA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    cert: cdktf.stringToTerraform(struct!.cert),
    creation: cdktf.stringToTerraform(struct!.creation),
    external_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalUrls),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    gid: cdktf.numberToTerraform(struct!.gid),
    image: cdktf.stringToTerraform(struct!.image),
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    retention: cdktf.stringToTerraform(struct!.retention),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
    uid: cdktf.numberToTerraform(struct!.uid),
    backup_config: clusterServicesEtcdBackupConfigAToTerraform(struct!.backupConfig),
  }
}


export function clusterServicesEtcdAToHclTerraform(struct?: ClusterServicesEtcdAOutputReference | ClusterServicesEtcdA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation: {
      value: cdktf.stringToHclTerraform(struct!.creation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_config: {
      value: clusterServicesEtcdBackupConfigAToHclTerraform(struct!.backupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesEtcdBackupConfigAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesEtcdAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesEtcdA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.creation = this._creation;
    }
    if (this._externalUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrls = this._externalUrls;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._backupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfig = this._backupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesEtcdA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._cert = undefined;
      this._creation = undefined;
      this._externalUrls = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._gid = undefined;
      this._image = undefined;
      this._key = undefined;
      this._path = undefined;
      this._retention = undefined;
      this._snapshot = undefined;
      this._uid = undefined;
      this._backupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._cert = value.cert;
      this._creation = value.creation;
      this._externalUrls = value.externalUrls;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._gid = value.gid;
      this._image = value.image;
      this._key = value.key;
      this._path = value.path;
      this._retention = value.retention;
      this._snapshot = value.snapshot;
      this._uid = value.uid;
      this._backupConfig.internalValue = value.backupConfig;
    }
  }

  // ca_cert - computed: true, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // cert - computed: true, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // creation - computed: true, optional: true, required: false
  private _creation?: string; 
  public get creation() {
    return this.getStringAttribute('creation');
  }
  public set creation(value: string) {
    this._creation = value;
  }
  public resetCreation() {
    this._creation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInput() {
    return this._creation;
  }

  // external_urls - computed: true, optional: true, required: false
  private _externalUrls?: string[]; 
  public get externalUrls() {
    return this.getListAttribute('external_urls');
  }
  public set externalUrls(value: string[]) {
    this._externalUrls = value;
  }
  public resetExternalUrls() {
    this._externalUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlsInput() {
    return this._externalUrls;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // key - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig = new ClusterServicesEtcdBackupConfigAOutputReference(this, "backup_config");
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: ClusterServicesEtcdBackupConfigA) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }
}
export interface ClusterServicesKubeApiAuditLogConfigurationA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#format Cluster#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#max_age Cluster#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#max_backup Cluster#max_backup}
  */
  readonly maxBackup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#max_size Cluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#path Cluster#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#policy Cluster#policy}
  */
  readonly policy?: string;
}

export function clusterServicesKubeApiAuditLogConfigurationAToTerraform(struct?: ClusterServicesKubeApiAuditLogConfigurationAOutputReference | ClusterServicesKubeApiAuditLogConfigurationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    max_backup: cdktf.numberToTerraform(struct!.maxBackup),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    path: cdktf.stringToTerraform(struct!.path),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function clusterServicesKubeApiAuditLogConfigurationAToHclTerraform(struct?: ClusterServicesKubeApiAuditLogConfigurationAOutputReference | ClusterServicesKubeApiAuditLogConfigurationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_backup: {
      value: cdktf.numberToHclTerraform(struct!.maxBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeApiAuditLogConfigurationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiAuditLogConfigurationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackup = this._maxBackup;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiAuditLogConfigurationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._maxAge = undefined;
      this._maxBackup = undefined;
      this._maxSize = undefined;
      this._path = undefined;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._maxAge = value.maxAge;
      this._maxBackup = value.maxBackup;
      this._maxSize = value.maxSize;
      this._path = value.path;
      this._policy = value.policy;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_backup - computed: true, optional: true, required: false
  private _maxBackup?: number; 
  public get maxBackup() {
    return this.getNumberAttribute('max_backup');
  }
  public set maxBackup(value: number) {
    this._maxBackup = value;
  }
  public resetMaxBackup() {
    this._maxBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupInput() {
    return this._maxBackup;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface ClusterServicesKubeApiAuditLogA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#configuration Cluster#configuration}
  */
  readonly configuration?: ClusterServicesKubeApiAuditLogConfigurationA;
}

export function clusterServicesKubeApiAuditLogAToTerraform(struct?: ClusterServicesKubeApiAuditLogAOutputReference | ClusterServicesKubeApiAuditLogA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: clusterServicesKubeApiAuditLogConfigurationAToTerraform(struct!.configuration),
  }
}


export function clusterServicesKubeApiAuditLogAToHclTerraform(struct?: ClusterServicesKubeApiAuditLogAOutputReference | ClusterServicesKubeApiAuditLogA): any {
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
    configuration: {
      value: clusterServicesKubeApiAuditLogConfigurationAToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiAuditLogConfigurationAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeApiAuditLogAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiAuditLogA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiAuditLogA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new ClusterServicesKubeApiAuditLogConfigurationAOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ClusterServicesKubeApiAuditLogConfigurationA) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface ClusterServicesKubeApiEventRateLimitA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#configuration Cluster#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clusterServicesKubeApiEventRateLimitAToTerraform(struct?: ClusterServicesKubeApiEventRateLimitAOutputReference | ClusterServicesKubeApiEventRateLimitA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clusterServicesKubeApiEventRateLimitAToHclTerraform(struct?: ClusterServicesKubeApiEventRateLimitAOutputReference | ClusterServicesKubeApiEventRateLimitA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
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

export class ClusterServicesKubeApiEventRateLimitAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiEventRateLimitA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiEventRateLimitA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
}
export interface ClusterServicesKubeApiSecretsEncryptionConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#custom_config Cluster#custom_config}
  */
  readonly customConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clusterServicesKubeApiSecretsEncryptionConfigAToTerraform(struct?: ClusterServicesKubeApiSecretsEncryptionConfigAOutputReference | ClusterServicesKubeApiSecretsEncryptionConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_config: cdktf.stringToTerraform(struct!.customConfig),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clusterServicesKubeApiSecretsEncryptionConfigAToHclTerraform(struct?: ClusterServicesKubeApiSecretsEncryptionConfigAOutputReference | ClusterServicesKubeApiSecretsEncryptionConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_config: {
      value: cdktf.stringToHclTerraform(struct!.customConfig),
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

export class ClusterServicesKubeApiSecretsEncryptionConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiSecretsEncryptionConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfig = this._customConfig;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiSecretsEncryptionConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customConfig = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customConfig = value.customConfig;
      this._enabled = value.enabled;
    }
  }

  // custom_config - computed: true, optional: true, required: false
  private _customConfig?: string; 
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }
  public set customConfig(value: string) {
    this._customConfig = value;
  }
  public resetCustomConfig() {
    this._customConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig;
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
}
export interface ClusterServicesKubeApiA {
  /**
  * Enable/Disable AlwaysPullImages admissions plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#always_pull_images Cluster#always_pull_images}
  */
  readonly alwaysPullImages?: boolean | cdktf.IResolvable;
  /**
  * Extra arguments that are added to the kube-api services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Built-in PodSecurityPolicy (privileged or restricted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#pod_security_configuration Cluster#pod_security_configuration}
  */
  readonly podSecurityConfiguration?: string;
  /**
  * Enabled/Disable PodSecurityPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#pod_security_policy Cluster#pod_security_policy}
  */
  readonly podSecurityPolicy?: boolean | cdktf.IResolvable;
  /**
  * Virtual IP range that will be used by Kubernetes services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_cluster_ip_range Cluster#service_cluster_ip_range}
  */
  readonly serviceClusterIpRange?: string;
  /**
  * Port range for services defined with NodePort type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_node_port_range Cluster#service_node_port_range}
  */
  readonly serviceNodePortRange?: string;
  /**
  * audit_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#audit_log Cluster#audit_log}
  */
  readonly auditLog?: ClusterServicesKubeApiAuditLogA;
  /**
  * event_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#event_rate_limit Cluster#event_rate_limit}
  */
  readonly eventRateLimit?: ClusterServicesKubeApiEventRateLimitA;
  /**
  * secrets_encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#secrets_encryption_config Cluster#secrets_encryption_config}
  */
  readonly secretsEncryptionConfig?: ClusterServicesKubeApiSecretsEncryptionConfigA;
}

export function clusterServicesKubeApiAToTerraform(struct?: ClusterServicesKubeApiAOutputReference | ClusterServicesKubeApiA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_pull_images: cdktf.booleanToTerraform(struct!.alwaysPullImages),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
    pod_security_configuration: cdktf.stringToTerraform(struct!.podSecurityConfiguration),
    pod_security_policy: cdktf.booleanToTerraform(struct!.podSecurityPolicy),
    service_cluster_ip_range: cdktf.stringToTerraform(struct!.serviceClusterIpRange),
    service_node_port_range: cdktf.stringToTerraform(struct!.serviceNodePortRange),
    audit_log: clusterServicesKubeApiAuditLogAToTerraform(struct!.auditLog),
    event_rate_limit: clusterServicesKubeApiEventRateLimitAToTerraform(struct!.eventRateLimit),
    secrets_encryption_config: clusterServicesKubeApiSecretsEncryptionConfigAToTerraform(struct!.secretsEncryptionConfig),
  }
}


export function clusterServicesKubeApiAToHclTerraform(struct?: ClusterServicesKubeApiAOutputReference | ClusterServicesKubeApiA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_pull_images: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysPullImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_security_configuration: {
      value: cdktf.stringToHclTerraform(struct!.podSecurityConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_security_policy: {
      value: cdktf.booleanToHclTerraform(struct!.podSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_cluster_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceClusterIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_node_port_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceNodePortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_log: {
      value: clusterServicesKubeApiAuditLogAToHclTerraform(struct!.auditLog),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiAuditLogAList",
    },
    event_rate_limit: {
      value: clusterServicesKubeApiEventRateLimitAToHclTerraform(struct!.eventRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiEventRateLimitAList",
    },
    secrets_encryption_config: {
      value: clusterServicesKubeApiSecretsEncryptionConfigAToHclTerraform(struct!.secretsEncryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterServicesKubeApiSecretsEncryptionConfigAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeApiAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeApiA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysPullImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysPullImages = this._alwaysPullImages;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._podSecurityConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityConfiguration = this._podSecurityConfiguration;
    }
    if (this._podSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityPolicy = this._podSecurityPolicy;
    }
    if (this._serviceClusterIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceClusterIpRange = this._serviceClusterIpRange;
    }
    if (this._serviceNodePortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNodePortRange = this._serviceNodePortRange;
    }
    if (this._auditLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLog = this._auditLog?.internalValue;
    }
    if (this._eventRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRateLimit = this._eventRateLimit?.internalValue;
    }
    if (this._secretsEncryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsEncryptionConfig = this._secretsEncryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeApiA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysPullImages = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
      this._podSecurityConfiguration = undefined;
      this._podSecurityPolicy = undefined;
      this._serviceClusterIpRange = undefined;
      this._serviceNodePortRange = undefined;
      this._auditLog.internalValue = undefined;
      this._eventRateLimit.internalValue = undefined;
      this._secretsEncryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysPullImages = value.alwaysPullImages;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
      this._podSecurityConfiguration = value.podSecurityConfiguration;
      this._podSecurityPolicy = value.podSecurityPolicy;
      this._serviceClusterIpRange = value.serviceClusterIpRange;
      this._serviceNodePortRange = value.serviceNodePortRange;
      this._auditLog.internalValue = value.auditLog;
      this._eventRateLimit.internalValue = value.eventRateLimit;
      this._secretsEncryptionConfig.internalValue = value.secretsEncryptionConfig;
    }
  }

  // always_pull_images - computed: true, optional: true, required: false
  private _alwaysPullImages?: boolean | cdktf.IResolvable; 
  public get alwaysPullImages() {
    return this.getBooleanAttribute('always_pull_images');
  }
  public set alwaysPullImages(value: boolean | cdktf.IResolvable) {
    this._alwaysPullImages = value;
  }
  public resetAlwaysPullImages() {
    this._alwaysPullImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPullImagesInput() {
    return this._alwaysPullImages;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // pod_security_configuration - computed: true, optional: true, required: false
  private _podSecurityConfiguration?: string; 
  public get podSecurityConfiguration() {
    return this.getStringAttribute('pod_security_configuration');
  }
  public set podSecurityConfiguration(value: string) {
    this._podSecurityConfiguration = value;
  }
  public resetPodSecurityConfiguration() {
    this._podSecurityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityConfigurationInput() {
    return this._podSecurityConfiguration;
  }

  // pod_security_policy - computed: true, optional: true, required: false
  private _podSecurityPolicy?: boolean | cdktf.IResolvable; 
  public get podSecurityPolicy() {
    return this.getBooleanAttribute('pod_security_policy');
  }
  public set podSecurityPolicy(value: boolean | cdktf.IResolvable) {
    this._podSecurityPolicy = value;
  }
  public resetPodSecurityPolicy() {
    this._podSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityPolicyInput() {
    return this._podSecurityPolicy;
  }

  // service_cluster_ip_range - computed: true, optional: true, required: false
  private _serviceClusterIpRange?: string; 
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
  public set serviceClusterIpRange(value: string) {
    this._serviceClusterIpRange = value;
  }
  public resetServiceClusterIpRange() {
    this._serviceClusterIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterIpRangeInput() {
    return this._serviceClusterIpRange;
  }

  // service_node_port_range - computed: true, optional: true, required: false
  private _serviceNodePortRange?: string; 
  public get serviceNodePortRange() {
    return this.getStringAttribute('service_node_port_range');
  }
  public set serviceNodePortRange(value: string) {
    this._serviceNodePortRange = value;
  }
  public resetServiceNodePortRange() {
    this._serviceNodePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodePortRangeInput() {
    return this._serviceNodePortRange;
  }

  // audit_log - computed: false, optional: true, required: false
  private _auditLog = new ClusterServicesKubeApiAuditLogAOutputReference(this, "audit_log");
  public get auditLog() {
    return this._auditLog;
  }
  public putAuditLog(value: ClusterServicesKubeApiAuditLogA) {
    this._auditLog.internalValue = value;
  }
  public resetAuditLog() {
    this._auditLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogInput() {
    return this._auditLog.internalValue;
  }

  // event_rate_limit - computed: false, optional: true, required: false
  private _eventRateLimit = new ClusterServicesKubeApiEventRateLimitAOutputReference(this, "event_rate_limit");
  public get eventRateLimit() {
    return this._eventRateLimit;
  }
  public putEventRateLimit(value: ClusterServicesKubeApiEventRateLimitA) {
    this._eventRateLimit.internalValue = value;
  }
  public resetEventRateLimit() {
    this._eventRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRateLimitInput() {
    return this._eventRateLimit.internalValue;
  }

  // secrets_encryption_config - computed: false, optional: true, required: false
  private _secretsEncryptionConfig = new ClusterServicesKubeApiSecretsEncryptionConfigAOutputReference(this, "secrets_encryption_config");
  public get secretsEncryptionConfig() {
    return this._secretsEncryptionConfig;
  }
  public putSecretsEncryptionConfig(value: ClusterServicesKubeApiSecretsEncryptionConfigA) {
    this._secretsEncryptionConfig.internalValue = value;
  }
  public resetSecretsEncryptionConfig() {
    this._secretsEncryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsEncryptionConfigInput() {
    return this._secretsEncryptionConfig.internalValue;
  }
}
export interface ClusterServicesKubeControllerA {
  /**
  * CIDR Range for Pods in cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cluster_cidr Cluster#cluster_cidr}
  */
  readonly clusterCidr?: string;
  /**
  * Extra arguments that are added to the kube-controller service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docker image of the kube-controller service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Virtual IP range that will be used by Kubernetes services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#service_cluster_ip_range Cluster#service_cluster_ip_range}
  */
  readonly serviceClusterIpRange?: string;
}

export function clusterServicesKubeControllerAToTerraform(struct?: ClusterServicesKubeControllerAOutputReference | ClusterServicesKubeControllerA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_cidr: cdktf.stringToTerraform(struct!.clusterCidr),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
    service_cluster_ip_range: cdktf.stringToTerraform(struct!.serviceClusterIpRange),
  }
}


export function clusterServicesKubeControllerAToHclTerraform(struct?: ClusterServicesKubeControllerAOutputReference | ClusterServicesKubeControllerA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_cidr: {
      value: cdktf.stringToHclTerraform(struct!.clusterCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cluster_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceClusterIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeControllerAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeControllerA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCidr = this._clusterCidr;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._serviceClusterIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceClusterIpRange = this._serviceClusterIpRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeControllerA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterCidr = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
      this._serviceClusterIpRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterCidr = value.clusterCidr;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
      this._serviceClusterIpRange = value.serviceClusterIpRange;
    }
  }

  // cluster_cidr - computed: true, optional: true, required: false
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  public resetClusterCidr() {
    this._clusterCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // service_cluster_ip_range - computed: true, optional: true, required: false
  private _serviceClusterIpRange?: string; 
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
  public set serviceClusterIpRange(value: string) {
    this._serviceClusterIpRange = value;
  }
  public resetServiceClusterIpRange() {
    this._serviceClusterIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterIpRangeInput() {
    return this._serviceClusterIpRange;
  }
}
export interface ClusterServicesKubeletA {
  /**
  * Cluster DNS service ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cluster_dns_server Cluster#cluster_dns_server}
  */
  readonly clusterDnsServer?: string;
  /**
  * Domain of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cluster_domain Cluster#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Extra arguments that are added to the kubelet services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the worker nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Fail if swap is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#fail_swap_on Cluster#fail_swap_on}
  */
  readonly failSwapOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#generate_serving_certificate Cluster#generate_serving_certificate}
  */
  readonly generateServingCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docker image of the kubelet service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * The image whose network/ipc namespaces containers in each pod will use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#infra_container_image Cluster#infra_container_image}
  */
  readonly infraContainerImage?: string;
}

export function clusterServicesKubeletAToTerraform(struct?: ClusterServicesKubeletAOutputReference | ClusterServicesKubeletA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_dns_server: cdktf.stringToTerraform(struct!.clusterDnsServer),
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    fail_swap_on: cdktf.booleanToTerraform(struct!.failSwapOn),
    generate_serving_certificate: cdktf.booleanToTerraform(struct!.generateServingCertificate),
    image: cdktf.stringToTerraform(struct!.image),
    infra_container_image: cdktf.stringToTerraform(struct!.infraContainerImage),
  }
}


export function clusterServicesKubeletAToHclTerraform(struct?: ClusterServicesKubeletAOutputReference | ClusterServicesKubeletA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.clusterDnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fail_swap_on: {
      value: cdktf.booleanToHclTerraform(struct!.failSwapOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_serving_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.generateServingCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infra_container_image: {
      value: cdktf.stringToHclTerraform(struct!.infraContainerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeletAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeletA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsServer = this._clusterDnsServer;
    }
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._failSwapOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSwapOn = this._failSwapOn;
    }
    if (this._generateServingCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateServingCertificate = this._generateServingCertificate;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._infraContainerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraContainerImage = this._infraContainerImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeletA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterDnsServer = undefined;
      this._clusterDomain = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._failSwapOn = undefined;
      this._generateServingCertificate = undefined;
      this._image = undefined;
      this._infraContainerImage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterDnsServer = value.clusterDnsServer;
      this._clusterDomain = value.clusterDomain;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._failSwapOn = value.failSwapOn;
      this._generateServingCertificate = value.generateServingCertificate;
      this._image = value.image;
      this._infraContainerImage = value.infraContainerImage;
    }
  }

  // cluster_dns_server - computed: true, optional: true, required: false
  private _clusterDnsServer?: string; 
  public get clusterDnsServer() {
    return this.getStringAttribute('cluster_dns_server');
  }
  public set clusterDnsServer(value: string) {
    this._clusterDnsServer = value;
  }
  public resetClusterDnsServer() {
    this._clusterDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsServerInput() {
    return this._clusterDnsServer;
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

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // fail_swap_on - computed: true, optional: true, required: false
  private _failSwapOn?: boolean | cdktf.IResolvable; 
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }
  public set failSwapOn(value: boolean | cdktf.IResolvable) {
    this._failSwapOn = value;
  }
  public resetFailSwapOn() {
    this._failSwapOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSwapOnInput() {
    return this._failSwapOn;
  }

  // generate_serving_certificate - computed: false, optional: true, required: false
  private _generateServingCertificate?: boolean | cdktf.IResolvable; 
  public get generateServingCertificate() {
    return this.getBooleanAttribute('generate_serving_certificate');
  }
  public set generateServingCertificate(value: boolean | cdktf.IResolvable) {
    this._generateServingCertificate = value;
  }
  public resetGenerateServingCertificate() {
    this._generateServingCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateServingCertificateInput() {
    return this._generateServingCertificate;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // infra_container_image - computed: true, optional: true, required: false
  private _infraContainerImage?: string; 
  public get infraContainerImage() {
    return this.getStringAttribute('infra_container_image');
  }
  public set infraContainerImage(value: string) {
    this._infraContainerImage = value;
  }
  public resetInfraContainerImage() {
    this._infraContainerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraContainerImageInput() {
    return this._infraContainerImage;
  }
}
export interface ClusterServicesKubeproxyA {
  /**
  * Extra arguments that are added to the kubeproxy services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the worker nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the worker nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docker image of the kubeproxy service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
}

export function clusterServicesKubeproxyAToTerraform(struct?: ClusterServicesKubeproxyAOutputReference | ClusterServicesKubeproxyA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function clusterServicesKubeproxyAToHclTerraform(struct?: ClusterServicesKubeproxyAOutputReference | ClusterServicesKubeproxyA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesKubeproxyAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesKubeproxyA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesKubeproxyA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
    }
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClusterServicesSchedulerA {
  /**
  * Extra arguments that are added to the scheduler services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Extra binds added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_binds Cluster#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Extra env added to the controlplane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#extra_env Cluster#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docker image of the scheduler service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
}

export function clusterServicesSchedulerAToTerraform(struct?: ClusterServicesSchedulerAOutputReference | ClusterServicesSchedulerA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function clusterServicesSchedulerAToHclTerraform(struct?: ClusterServicesSchedulerAOutputReference | ClusterServicesSchedulerA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServicesSchedulerAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServicesSchedulerA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServicesSchedulerA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
    }
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: true, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClusterSystemImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aci_cni_deploy_container Cluster#aci_cni_deploy_container}
  */
  readonly aciCniDeployContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aci_controller_container Cluster#aci_controller_container}
  */
  readonly aciControllerContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aci_host_container Cluster#aci_host_container}
  */
  readonly aciHostContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aci_mcast_container Cluster#aci_mcast_container}
  */
  readonly aciMcastContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aci_opflex_container Cluster#aci_opflex_container}
  */
  readonly aciOpflexContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#aci_ovs_container Cluster#aci_ovs_container}
  */
  readonly aciOvsContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#alpine Cluster#alpine}
  */
  readonly alpine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#calico_cni Cluster#calico_cni}
  */
  readonly calicoCni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#calico_controllers Cluster#calico_controllers}
  */
  readonly calicoControllers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#calico_ctl Cluster#calico_ctl}
  */
  readonly calicoCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#calico_flex_vol Cluster#calico_flex_vol}
  */
  readonly calicoFlexVol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#calico_node Cluster#calico_node}
  */
  readonly calicoNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#canal_cni Cluster#canal_cni}
  */
  readonly canalCni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#canal_flannel Cluster#canal_flannel}
  */
  readonly canalFlannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#canal_flex_vol Cluster#canal_flex_vol}
  */
  readonly canalFlexVol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#canal_node Cluster#canal_node}
  */
  readonly canalNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#cert_downloader Cluster#cert_downloader}
  */
  readonly certDownloader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#coredns Cluster#coredns}
  */
  readonly coredns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#coredns_autoscaler Cluster#coredns_autoscaler}
  */
  readonly corednsAutoscaler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#dnsmasq Cluster#dnsmasq}
  */
  readonly dnsmasq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#etcd Cluster#etcd}
  */
  readonly etcd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#flannel Cluster#flannel}
  */
  readonly flannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#flannel_cni Cluster#flannel_cni}
  */
  readonly flannelCni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ingress Cluster#ingress}
  */
  readonly ingress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ingress_backend Cluster#ingress_backend}
  */
  readonly ingressBackend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kube_dns Cluster#kube_dns}
  */
  readonly kubeDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kube_dns_autoscaler Cluster#kube_dns_autoscaler}
  */
  readonly kubeDnsAutoscaler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kube_dns_sidecar Cluster#kube_dns_sidecar}
  */
  readonly kubeDnsSidecar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubernetes Cluster#kubernetes}
  */
  readonly kubernetes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#kubernetes_services_sidecar Cluster#kubernetes_services_sidecar}
  */
  readonly kubernetesServicesSidecar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#metrics_server Cluster#metrics_server}
  */
  readonly metricsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#nginx_proxy Cluster#nginx_proxy}
  */
  readonly nginxProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#nodelocal Cluster#nodelocal}
  */
  readonly nodelocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#pod_infra_container Cluster#pod_infra_container}
  */
  readonly podInfraContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#weave_cni Cluster#weave_cni}
  */
  readonly weaveCni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#weave_node Cluster#weave_node}
  */
  readonly weaveNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#windows_pod_infra_container Cluster#windows_pod_infra_container}
  */
  readonly windowsPodInfraContainer?: string;
}

export function clusterSystemImagesToTerraform(struct?: ClusterSystemImagesOutputReference | ClusterSystemImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aci_cni_deploy_container: cdktf.stringToTerraform(struct!.aciCniDeployContainer),
    aci_controller_container: cdktf.stringToTerraform(struct!.aciControllerContainer),
    aci_host_container: cdktf.stringToTerraform(struct!.aciHostContainer),
    aci_mcast_container: cdktf.stringToTerraform(struct!.aciMcastContainer),
    aci_opflex_container: cdktf.stringToTerraform(struct!.aciOpflexContainer),
    aci_ovs_container: cdktf.stringToTerraform(struct!.aciOvsContainer),
    alpine: cdktf.stringToTerraform(struct!.alpine),
    calico_cni: cdktf.stringToTerraform(struct!.calicoCni),
    calico_controllers: cdktf.stringToTerraform(struct!.calicoControllers),
    calico_ctl: cdktf.stringToTerraform(struct!.calicoCtl),
    calico_flex_vol: cdktf.stringToTerraform(struct!.calicoFlexVol),
    calico_node: cdktf.stringToTerraform(struct!.calicoNode),
    canal_cni: cdktf.stringToTerraform(struct!.canalCni),
    canal_flannel: cdktf.stringToTerraform(struct!.canalFlannel),
    canal_flex_vol: cdktf.stringToTerraform(struct!.canalFlexVol),
    canal_node: cdktf.stringToTerraform(struct!.canalNode),
    cert_downloader: cdktf.stringToTerraform(struct!.certDownloader),
    coredns: cdktf.stringToTerraform(struct!.coredns),
    coredns_autoscaler: cdktf.stringToTerraform(struct!.corednsAutoscaler),
    dnsmasq: cdktf.stringToTerraform(struct!.dnsmasq),
    etcd: cdktf.stringToTerraform(struct!.etcd),
    flannel: cdktf.stringToTerraform(struct!.flannel),
    flannel_cni: cdktf.stringToTerraform(struct!.flannelCni),
    ingress: cdktf.stringToTerraform(struct!.ingress),
    ingress_backend: cdktf.stringToTerraform(struct!.ingressBackend),
    kube_dns: cdktf.stringToTerraform(struct!.kubeDns),
    kube_dns_autoscaler: cdktf.stringToTerraform(struct!.kubeDnsAutoscaler),
    kube_dns_sidecar: cdktf.stringToTerraform(struct!.kubeDnsSidecar),
    kubernetes: cdktf.stringToTerraform(struct!.kubernetes),
    kubernetes_services_sidecar: cdktf.stringToTerraform(struct!.kubernetesServicesSidecar),
    metrics_server: cdktf.stringToTerraform(struct!.metricsServer),
    nginx_proxy: cdktf.stringToTerraform(struct!.nginxProxy),
    nodelocal: cdktf.stringToTerraform(struct!.nodelocal),
    pod_infra_container: cdktf.stringToTerraform(struct!.podInfraContainer),
    weave_cni: cdktf.stringToTerraform(struct!.weaveCni),
    weave_node: cdktf.stringToTerraform(struct!.weaveNode),
    windows_pod_infra_container: cdktf.stringToTerraform(struct!.windowsPodInfraContainer),
  }
}


export function clusterSystemImagesToHclTerraform(struct?: ClusterSystemImagesOutputReference | ClusterSystemImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aci_cni_deploy_container: {
      value: cdktf.stringToHclTerraform(struct!.aciCniDeployContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aci_controller_container: {
      value: cdktf.stringToHclTerraform(struct!.aciControllerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aci_host_container: {
      value: cdktf.stringToHclTerraform(struct!.aciHostContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aci_mcast_container: {
      value: cdktf.stringToHclTerraform(struct!.aciMcastContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aci_opflex_container: {
      value: cdktf.stringToHclTerraform(struct!.aciOpflexContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aci_ovs_container: {
      value: cdktf.stringToHclTerraform(struct!.aciOvsContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alpine: {
      value: cdktf.stringToHclTerraform(struct!.alpine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calico_cni: {
      value: cdktf.stringToHclTerraform(struct!.calicoCni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calico_controllers: {
      value: cdktf.stringToHclTerraform(struct!.calicoControllers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calico_ctl: {
      value: cdktf.stringToHclTerraform(struct!.calicoCtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calico_flex_vol: {
      value: cdktf.stringToHclTerraform(struct!.calicoFlexVol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calico_node: {
      value: cdktf.stringToHclTerraform(struct!.calicoNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canal_cni: {
      value: cdktf.stringToHclTerraform(struct!.canalCni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canal_flannel: {
      value: cdktf.stringToHclTerraform(struct!.canalFlannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canal_flex_vol: {
      value: cdktf.stringToHclTerraform(struct!.canalFlexVol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canal_node: {
      value: cdktf.stringToHclTerraform(struct!.canalNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_downloader: {
      value: cdktf.stringToHclTerraform(struct!.certDownloader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coredns: {
      value: cdktf.stringToHclTerraform(struct!.coredns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coredns_autoscaler: {
      value: cdktf.stringToHclTerraform(struct!.corednsAutoscaler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnsmasq: {
      value: cdktf.stringToHclTerraform(struct!.dnsmasq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd: {
      value: cdktf.stringToHclTerraform(struct!.etcd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flannel: {
      value: cdktf.stringToHclTerraform(struct!.flannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flannel_cni: {
      value: cdktf.stringToHclTerraform(struct!.flannelCni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress: {
      value: cdktf.stringToHclTerraform(struct!.ingress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_backend: {
      value: cdktf.stringToHclTerraform(struct!.ingressBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_dns: {
      value: cdktf.stringToHclTerraform(struct!.kubeDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_dns_autoscaler: {
      value: cdktf.stringToHclTerraform(struct!.kubeDnsAutoscaler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_dns_sidecar: {
      value: cdktf.stringToHclTerraform(struct!.kubeDnsSidecar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes: {
      value: cdktf.stringToHclTerraform(struct!.kubernetes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_services_sidecar: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesServicesSidecar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_server: {
      value: cdktf.stringToHclTerraform(struct!.metricsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nginx_proxy: {
      value: cdktf.stringToHclTerraform(struct!.nginxProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodelocal: {
      value: cdktf.stringToHclTerraform(struct!.nodelocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_infra_container: {
      value: cdktf.stringToHclTerraform(struct!.podInfraContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weave_cni: {
      value: cdktf.stringToHclTerraform(struct!.weaveCni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weave_node: {
      value: cdktf.stringToHclTerraform(struct!.weaveNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows_pod_infra_container: {
      value: cdktf.stringToHclTerraform(struct!.windowsPodInfraContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSystemImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSystemImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aciCniDeployContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.aciCniDeployContainer = this._aciCniDeployContainer;
    }
    if (this._aciControllerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.aciControllerContainer = this._aciControllerContainer;
    }
    if (this._aciHostContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.aciHostContainer = this._aciHostContainer;
    }
    if (this._aciMcastContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.aciMcastContainer = this._aciMcastContainer;
    }
    if (this._aciOpflexContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.aciOpflexContainer = this._aciOpflexContainer;
    }
    if (this._aciOvsContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.aciOvsContainer = this._aciOvsContainer;
    }
    if (this._alpine !== undefined) {
      hasAnyValues = true;
      internalValueResult.alpine = this._alpine;
    }
    if (this._calicoCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoCni = this._calicoCni;
    }
    if (this._calicoControllers !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoControllers = this._calicoControllers;
    }
    if (this._calicoCtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoCtl = this._calicoCtl;
    }
    if (this._calicoFlexVol !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoFlexVol = this._calicoFlexVol;
    }
    if (this._calicoNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoNode = this._calicoNode;
    }
    if (this._canalCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.canalCni = this._canalCni;
    }
    if (this._canalFlannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.canalFlannel = this._canalFlannel;
    }
    if (this._canalFlexVol !== undefined) {
      hasAnyValues = true;
      internalValueResult.canalFlexVol = this._canalFlexVol;
    }
    if (this._canalNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.canalNode = this._canalNode;
    }
    if (this._certDownloader !== undefined) {
      hasAnyValues = true;
      internalValueResult.certDownloader = this._certDownloader;
    }
    if (this._coredns !== undefined) {
      hasAnyValues = true;
      internalValueResult.coredns = this._coredns;
    }
    if (this._corednsAutoscaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.corednsAutoscaler = this._corednsAutoscaler;
    }
    if (this._dnsmasq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsmasq = this._dnsmasq;
    }
    if (this._etcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcd = this._etcd;
    }
    if (this._flannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.flannel = this._flannel;
    }
    if (this._flannelCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.flannelCni = this._flannelCni;
    }
    if (this._ingress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress;
    }
    if (this._ingressBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressBackend = this._ingressBackend;
    }
    if (this._kubeDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeDns = this._kubeDns;
    }
    if (this._kubeDnsAutoscaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeDnsAutoscaler = this._kubeDnsAutoscaler;
    }
    if (this._kubeDnsSidecar !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeDnsSidecar = this._kubeDnsSidecar;
    }
    if (this._kubernetes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes;
    }
    if (this._kubernetesServicesSidecar !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesServicesSidecar = this._kubernetesServicesSidecar;
    }
    if (this._metricsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsServer = this._metricsServer;
    }
    if (this._nginxProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxProxy = this._nginxProxy;
    }
    if (this._nodelocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodelocal = this._nodelocal;
    }
    if (this._podInfraContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.podInfraContainer = this._podInfraContainer;
    }
    if (this._weaveCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.weaveCni = this._weaveCni;
    }
    if (this._weaveNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.weaveNode = this._weaveNode;
    }
    if (this._windowsPodInfraContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsPodInfraContainer = this._windowsPodInfraContainer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSystemImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aciCniDeployContainer = undefined;
      this._aciControllerContainer = undefined;
      this._aciHostContainer = undefined;
      this._aciMcastContainer = undefined;
      this._aciOpflexContainer = undefined;
      this._aciOvsContainer = undefined;
      this._alpine = undefined;
      this._calicoCni = undefined;
      this._calicoControllers = undefined;
      this._calicoCtl = undefined;
      this._calicoFlexVol = undefined;
      this._calicoNode = undefined;
      this._canalCni = undefined;
      this._canalFlannel = undefined;
      this._canalFlexVol = undefined;
      this._canalNode = undefined;
      this._certDownloader = undefined;
      this._coredns = undefined;
      this._corednsAutoscaler = undefined;
      this._dnsmasq = undefined;
      this._etcd = undefined;
      this._flannel = undefined;
      this._flannelCni = undefined;
      this._ingress = undefined;
      this._ingressBackend = undefined;
      this._kubeDns = undefined;
      this._kubeDnsAutoscaler = undefined;
      this._kubeDnsSidecar = undefined;
      this._kubernetes = undefined;
      this._kubernetesServicesSidecar = undefined;
      this._metricsServer = undefined;
      this._nginxProxy = undefined;
      this._nodelocal = undefined;
      this._podInfraContainer = undefined;
      this._weaveCni = undefined;
      this._weaveNode = undefined;
      this._windowsPodInfraContainer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aciCniDeployContainer = value.aciCniDeployContainer;
      this._aciControllerContainer = value.aciControllerContainer;
      this._aciHostContainer = value.aciHostContainer;
      this._aciMcastContainer = value.aciMcastContainer;
      this._aciOpflexContainer = value.aciOpflexContainer;
      this._aciOvsContainer = value.aciOvsContainer;
      this._alpine = value.alpine;
      this._calicoCni = value.calicoCni;
      this._calicoControllers = value.calicoControllers;
      this._calicoCtl = value.calicoCtl;
      this._calicoFlexVol = value.calicoFlexVol;
      this._calicoNode = value.calicoNode;
      this._canalCni = value.canalCni;
      this._canalFlannel = value.canalFlannel;
      this._canalFlexVol = value.canalFlexVol;
      this._canalNode = value.canalNode;
      this._certDownloader = value.certDownloader;
      this._coredns = value.coredns;
      this._corednsAutoscaler = value.corednsAutoscaler;
      this._dnsmasq = value.dnsmasq;
      this._etcd = value.etcd;
      this._flannel = value.flannel;
      this._flannelCni = value.flannelCni;
      this._ingress = value.ingress;
      this._ingressBackend = value.ingressBackend;
      this._kubeDns = value.kubeDns;
      this._kubeDnsAutoscaler = value.kubeDnsAutoscaler;
      this._kubeDnsSidecar = value.kubeDnsSidecar;
      this._kubernetes = value.kubernetes;
      this._kubernetesServicesSidecar = value.kubernetesServicesSidecar;
      this._metricsServer = value.metricsServer;
      this._nginxProxy = value.nginxProxy;
      this._nodelocal = value.nodelocal;
      this._podInfraContainer = value.podInfraContainer;
      this._weaveCni = value.weaveCni;
      this._weaveNode = value.weaveNode;
      this._windowsPodInfraContainer = value.windowsPodInfraContainer;
    }
  }

  // aci_cni_deploy_container - computed: false, optional: true, required: false
  private _aciCniDeployContainer?: string; 
  public get aciCniDeployContainer() {
    return this.getStringAttribute('aci_cni_deploy_container');
  }
  public set aciCniDeployContainer(value: string) {
    this._aciCniDeployContainer = value;
  }
  public resetAciCniDeployContainer() {
    this._aciCniDeployContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciCniDeployContainerInput() {
    return this._aciCniDeployContainer;
  }

  // aci_controller_container - computed: false, optional: true, required: false
  private _aciControllerContainer?: string; 
  public get aciControllerContainer() {
    return this.getStringAttribute('aci_controller_container');
  }
  public set aciControllerContainer(value: string) {
    this._aciControllerContainer = value;
  }
  public resetAciControllerContainer() {
    this._aciControllerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciControllerContainerInput() {
    return this._aciControllerContainer;
  }

  // aci_host_container - computed: false, optional: true, required: false
  private _aciHostContainer?: string; 
  public get aciHostContainer() {
    return this.getStringAttribute('aci_host_container');
  }
  public set aciHostContainer(value: string) {
    this._aciHostContainer = value;
  }
  public resetAciHostContainer() {
    this._aciHostContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciHostContainerInput() {
    return this._aciHostContainer;
  }

  // aci_mcast_container - computed: false, optional: true, required: false
  private _aciMcastContainer?: string; 
  public get aciMcastContainer() {
    return this.getStringAttribute('aci_mcast_container');
  }
  public set aciMcastContainer(value: string) {
    this._aciMcastContainer = value;
  }
  public resetAciMcastContainer() {
    this._aciMcastContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciMcastContainerInput() {
    return this._aciMcastContainer;
  }

  // aci_opflex_container - computed: false, optional: true, required: false
  private _aciOpflexContainer?: string; 
  public get aciOpflexContainer() {
    return this.getStringAttribute('aci_opflex_container');
  }
  public set aciOpflexContainer(value: string) {
    this._aciOpflexContainer = value;
  }
  public resetAciOpflexContainer() {
    this._aciOpflexContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciOpflexContainerInput() {
    return this._aciOpflexContainer;
  }

  // aci_ovs_container - computed: false, optional: true, required: false
  private _aciOvsContainer?: string; 
  public get aciOvsContainer() {
    return this.getStringAttribute('aci_ovs_container');
  }
  public set aciOvsContainer(value: string) {
    this._aciOvsContainer = value;
  }
  public resetAciOvsContainer() {
    this._aciOvsContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciOvsContainerInput() {
    return this._aciOvsContainer;
  }

  // alpine - computed: false, optional: true, required: false
  private _alpine?: string; 
  public get alpine() {
    return this.getStringAttribute('alpine');
  }
  public set alpine(value: string) {
    this._alpine = value;
  }
  public resetAlpine() {
    this._alpine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpineInput() {
    return this._alpine;
  }

  // calico_cni - computed: false, optional: true, required: false
  private _calicoCni?: string; 
  public get calicoCni() {
    return this.getStringAttribute('calico_cni');
  }
  public set calicoCni(value: string) {
    this._calicoCni = value;
  }
  public resetCalicoCni() {
    this._calicoCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoCniInput() {
    return this._calicoCni;
  }

  // calico_controllers - computed: false, optional: true, required: false
  private _calicoControllers?: string; 
  public get calicoControllers() {
    return this.getStringAttribute('calico_controllers');
  }
  public set calicoControllers(value: string) {
    this._calicoControllers = value;
  }
  public resetCalicoControllers() {
    this._calicoControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoControllersInput() {
    return this._calicoControllers;
  }

  // calico_ctl - computed: false, optional: true, required: false
  private _calicoCtl?: string; 
  public get calicoCtl() {
    return this.getStringAttribute('calico_ctl');
  }
  public set calicoCtl(value: string) {
    this._calicoCtl = value;
  }
  public resetCalicoCtl() {
    this._calicoCtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoCtlInput() {
    return this._calicoCtl;
  }

  // calico_flex_vol - computed: false, optional: true, required: false
  private _calicoFlexVol?: string; 
  public get calicoFlexVol() {
    return this.getStringAttribute('calico_flex_vol');
  }
  public set calicoFlexVol(value: string) {
    this._calicoFlexVol = value;
  }
  public resetCalicoFlexVol() {
    this._calicoFlexVol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoFlexVolInput() {
    return this._calicoFlexVol;
  }

  // calico_node - computed: false, optional: true, required: false
  private _calicoNode?: string; 
  public get calicoNode() {
    return this.getStringAttribute('calico_node');
  }
  public set calicoNode(value: string) {
    this._calicoNode = value;
  }
  public resetCalicoNode() {
    this._calicoNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoNodeInput() {
    return this._calicoNode;
  }

  // canal_cni - computed: false, optional: true, required: false
  private _canalCni?: string; 
  public get canalCni() {
    return this.getStringAttribute('canal_cni');
  }
  public set canalCni(value: string) {
    this._canalCni = value;
  }
  public resetCanalCni() {
    this._canalCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canalCniInput() {
    return this._canalCni;
  }

  // canal_flannel - computed: false, optional: true, required: false
  private _canalFlannel?: string; 
  public get canalFlannel() {
    return this.getStringAttribute('canal_flannel');
  }
  public set canalFlannel(value: string) {
    this._canalFlannel = value;
  }
  public resetCanalFlannel() {
    this._canalFlannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canalFlannelInput() {
    return this._canalFlannel;
  }

  // canal_flex_vol - computed: false, optional: true, required: false
  private _canalFlexVol?: string; 
  public get canalFlexVol() {
    return this.getStringAttribute('canal_flex_vol');
  }
  public set canalFlexVol(value: string) {
    this._canalFlexVol = value;
  }
  public resetCanalFlexVol() {
    this._canalFlexVol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canalFlexVolInput() {
    return this._canalFlexVol;
  }

  // canal_node - computed: false, optional: true, required: false
  private _canalNode?: string; 
  public get canalNode() {
    return this.getStringAttribute('canal_node');
  }
  public set canalNode(value: string) {
    this._canalNode = value;
  }
  public resetCanalNode() {
    this._canalNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canalNodeInput() {
    return this._canalNode;
  }

  // cert_downloader - computed: false, optional: true, required: false
  private _certDownloader?: string; 
  public get certDownloader() {
    return this.getStringAttribute('cert_downloader');
  }
  public set certDownloader(value: string) {
    this._certDownloader = value;
  }
  public resetCertDownloader() {
    this._certDownloader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDownloaderInput() {
    return this._certDownloader;
  }

  // coredns - computed: false, optional: true, required: false
  private _coredns?: string; 
  public get coredns() {
    return this.getStringAttribute('coredns');
  }
  public set coredns(value: string) {
    this._coredns = value;
  }
  public resetCoredns() {
    this._coredns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corednsInput() {
    return this._coredns;
  }

  // coredns_autoscaler - computed: false, optional: true, required: false
  private _corednsAutoscaler?: string; 
  public get corednsAutoscaler() {
    return this.getStringAttribute('coredns_autoscaler');
  }
  public set corednsAutoscaler(value: string) {
    this._corednsAutoscaler = value;
  }
  public resetCorednsAutoscaler() {
    this._corednsAutoscaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corednsAutoscalerInput() {
    return this._corednsAutoscaler;
  }

  // dnsmasq - computed: false, optional: true, required: false
  private _dnsmasq?: string; 
  public get dnsmasq() {
    return this.getStringAttribute('dnsmasq');
  }
  public set dnsmasq(value: string) {
    this._dnsmasq = value;
  }
  public resetDnsmasq() {
    this._dnsmasq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsmasqInput() {
    return this._dnsmasq;
  }

  // etcd - computed: false, optional: true, required: false
  private _etcd?: string; 
  public get etcd() {
    return this.getStringAttribute('etcd');
  }
  public set etcd(value: string) {
    this._etcd = value;
  }
  public resetEtcd() {
    this._etcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdInput() {
    return this._etcd;
  }

  // flannel - computed: false, optional: true, required: false
  private _flannel?: string; 
  public get flannel() {
    return this.getStringAttribute('flannel');
  }
  public set flannel(value: string) {
    this._flannel = value;
  }
  public resetFlannel() {
    this._flannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flannelInput() {
    return this._flannel;
  }

  // flannel_cni - computed: false, optional: true, required: false
  private _flannelCni?: string; 
  public get flannelCni() {
    return this.getStringAttribute('flannel_cni');
  }
  public set flannelCni(value: string) {
    this._flannelCni = value;
  }
  public resetFlannelCni() {
    this._flannelCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flannelCniInput() {
    return this._flannelCni;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: string; 
  public get ingress() {
    return this.getStringAttribute('ingress');
  }
  public set ingress(value: string) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // ingress_backend - computed: false, optional: true, required: false
  private _ingressBackend?: string; 
  public get ingressBackend() {
    return this.getStringAttribute('ingress_backend');
  }
  public set ingressBackend(value: string) {
    this._ingressBackend = value;
  }
  public resetIngressBackend() {
    this._ingressBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressBackendInput() {
    return this._ingressBackend;
  }

  // kube_dns - computed: false, optional: true, required: false
  private _kubeDns?: string; 
  public get kubeDns() {
    return this.getStringAttribute('kube_dns');
  }
  public set kubeDns(value: string) {
    this._kubeDns = value;
  }
  public resetKubeDns() {
    this._kubeDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeDnsInput() {
    return this._kubeDns;
  }

  // kube_dns_autoscaler - computed: false, optional: true, required: false
  private _kubeDnsAutoscaler?: string; 
  public get kubeDnsAutoscaler() {
    return this.getStringAttribute('kube_dns_autoscaler');
  }
  public set kubeDnsAutoscaler(value: string) {
    this._kubeDnsAutoscaler = value;
  }
  public resetKubeDnsAutoscaler() {
    this._kubeDnsAutoscaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeDnsAutoscalerInput() {
    return this._kubeDnsAutoscaler;
  }

  // kube_dns_sidecar - computed: false, optional: true, required: false
  private _kubeDnsSidecar?: string; 
  public get kubeDnsSidecar() {
    return this.getStringAttribute('kube_dns_sidecar');
  }
  public set kubeDnsSidecar(value: string) {
    this._kubeDnsSidecar = value;
  }
  public resetKubeDnsSidecar() {
    this._kubeDnsSidecar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeDnsSidecarInput() {
    return this._kubeDnsSidecar;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes?: string; 
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }
  public set kubernetes(value: string) {
    this._kubernetes = value;
  }
  public resetKubernetes() {
    this._kubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes;
  }

  // kubernetes_services_sidecar - computed: false, optional: true, required: false
  private _kubernetesServicesSidecar?: string; 
  public get kubernetesServicesSidecar() {
    return this.getStringAttribute('kubernetes_services_sidecar');
  }
  public set kubernetesServicesSidecar(value: string) {
    this._kubernetesServicesSidecar = value;
  }
  public resetKubernetesServicesSidecar() {
    this._kubernetesServicesSidecar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesServicesSidecarInput() {
    return this._kubernetesServicesSidecar;
  }

  // metrics_server - computed: false, optional: true, required: false
  private _metricsServer?: string; 
  public get metricsServer() {
    return this.getStringAttribute('metrics_server');
  }
  public set metricsServer(value: string) {
    this._metricsServer = value;
  }
  public resetMetricsServer() {
    this._metricsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsServerInput() {
    return this._metricsServer;
  }

  // nginx_proxy - computed: false, optional: true, required: false
  private _nginxProxy?: string; 
  public get nginxProxy() {
    return this.getStringAttribute('nginx_proxy');
  }
  public set nginxProxy(value: string) {
    this._nginxProxy = value;
  }
  public resetNginxProxy() {
    this._nginxProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxProxyInput() {
    return this._nginxProxy;
  }

  // nodelocal - computed: false, optional: true, required: false
  private _nodelocal?: string; 
  public get nodelocal() {
    return this.getStringAttribute('nodelocal');
  }
  public set nodelocal(value: string) {
    this._nodelocal = value;
  }
  public resetNodelocal() {
    this._nodelocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodelocalInput() {
    return this._nodelocal;
  }

  // pod_infra_container - computed: false, optional: true, required: false
  private _podInfraContainer?: string; 
  public get podInfraContainer() {
    return this.getStringAttribute('pod_infra_container');
  }
  public set podInfraContainer(value: string) {
    this._podInfraContainer = value;
  }
  public resetPodInfraContainer() {
    this._podInfraContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInfraContainerInput() {
    return this._podInfraContainer;
  }

  // weave_cni - computed: false, optional: true, required: false
  private _weaveCni?: string; 
  public get weaveCni() {
    return this.getStringAttribute('weave_cni');
  }
  public set weaveCni(value: string) {
    this._weaveCni = value;
  }
  public resetWeaveCni() {
    this._weaveCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaveCniInput() {
    return this._weaveCni;
  }

  // weave_node - computed: false, optional: true, required: false
  private _weaveNode?: string; 
  public get weaveNode() {
    return this.getStringAttribute('weave_node');
  }
  public set weaveNode(value: string) {
    this._weaveNode = value;
  }
  public resetWeaveNode() {
    this._weaveNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaveNodeInput() {
    return this._weaveNode;
  }

  // windows_pod_infra_container - computed: false, optional: true, required: false
  private _windowsPodInfraContainer?: string; 
  public get windowsPodInfraContainer() {
    return this.getStringAttribute('windows_pod_infra_container');
  }
  public set windowsPodInfraContainer(value: string) {
    this._windowsPodInfraContainer = value;
  }
  public resetWindowsPodInfraContainer() {
    this._windowsPodInfraContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsPodInfraContainerInput() {
    return this._windowsPodInfraContainer;
  }
}
export interface ClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#delete Cluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#update Cluster#update}
  */
  readonly update?: string;
}

export function clusterTimeoutsToTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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


export function clusterTimeoutsToHclTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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

export class ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface ClusterUpgradeStrategyDrainInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#delete_local_data Cluster#delete_local_data}
  */
  readonly deleteLocalData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#force Cluster#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#grace_period Cluster#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#ignore_daemon_sets Cluster#ignore_daemon_sets}
  */
  readonly ignoreDaemonSets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#timeout Cluster#timeout}
  */
  readonly timeout?: number;
}

export function clusterUpgradeStrategyDrainInputToTerraform(struct?: ClusterUpgradeStrategyDrainInputOutputReference | ClusterUpgradeStrategyDrainInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_local_data: cdktf.booleanToTerraform(struct!.deleteLocalData),
    force: cdktf.booleanToTerraform(struct!.force),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    ignore_daemon_sets: cdktf.booleanToTerraform(struct!.ignoreDaemonSets),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function clusterUpgradeStrategyDrainInputToHclTerraform(struct?: ClusterUpgradeStrategyDrainInputOutputReference | ClusterUpgradeStrategyDrainInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_local_data: {
      value: cdktf.booleanToHclTerraform(struct!.deleteLocalData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_daemon_sets: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDaemonSets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterUpgradeStrategyDrainInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterUpgradeStrategyDrainInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteLocalData !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteLocalData = this._deleteLocalData;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._ignoreDaemonSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDaemonSets = this._ignoreDaemonSets;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterUpgradeStrategyDrainInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteLocalData = undefined;
      this._force = undefined;
      this._gracePeriod = undefined;
      this._ignoreDaemonSets = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteLocalData = value.deleteLocalData;
      this._force = value.force;
      this._gracePeriod = value.gracePeriod;
      this._ignoreDaemonSets = value.ignoreDaemonSets;
      this._timeout = value.timeout;
    }
  }

  // delete_local_data - computed: true, optional: true, required: false
  private _deleteLocalData?: boolean | cdktf.IResolvable; 
  public get deleteLocalData() {
    return this.getBooleanAttribute('delete_local_data');
  }
  public set deleteLocalData(value: boolean | cdktf.IResolvable) {
    this._deleteLocalData = value;
  }
  public resetDeleteLocalData() {
    this._deleteLocalData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteLocalDataInput() {
    return this._deleteLocalData;
  }

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // ignore_daemon_sets - computed: true, optional: true, required: false
  private _ignoreDaemonSets?: boolean | cdktf.IResolvable; 
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }
  public set ignoreDaemonSets(value: boolean | cdktf.IResolvable) {
    this._ignoreDaemonSets = value;
  }
  public resetIgnoreDaemonSets() {
    this._ignoreDaemonSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDaemonSetsInput() {
    return this._ignoreDaemonSets;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ClusterUpgradeStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#drain Cluster#drain}
  */
  readonly drain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#max_unavailable_controlplane Cluster#max_unavailable_controlplane}
  */
  readonly maxUnavailableControlplane?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#max_unavailable_worker Cluster#max_unavailable_worker}
  */
  readonly maxUnavailableWorker?: string;
  /**
  * drain_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#drain_input Cluster#drain_input}
  */
  readonly drainInput?: ClusterUpgradeStrategyDrainInput;
}

export function clusterUpgradeStrategyToTerraform(struct?: ClusterUpgradeStrategyOutputReference | ClusterUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain: cdktf.booleanToTerraform(struct!.drain),
    max_unavailable_controlplane: cdktf.stringToTerraform(struct!.maxUnavailableControlplane),
    max_unavailable_worker: cdktf.stringToTerraform(struct!.maxUnavailableWorker),
    drain_input: clusterUpgradeStrategyDrainInputToTerraform(struct!.drainInput),
  }
}


export function clusterUpgradeStrategyToHclTerraform(struct?: ClusterUpgradeStrategyOutputReference | ClusterUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain: {
      value: cdktf.booleanToHclTerraform(struct!.drain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unavailable_controlplane: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailableControlplane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable_worker: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailableWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drain_input: {
      value: clusterUpgradeStrategyDrainInputToHclTerraform(struct!.drainInput),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterUpgradeStrategyDrainInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterUpgradeStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterUpgradeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drain !== undefined) {
      hasAnyValues = true;
      internalValueResult.drain = this._drain;
    }
    if (this._maxUnavailableControlplane !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableControlplane = this._maxUnavailableControlplane;
    }
    if (this._maxUnavailableWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableWorker = this._maxUnavailableWorker;
    }
    if (this._drainInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainInput = this._drainInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterUpgradeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drain = undefined;
      this._maxUnavailableControlplane = undefined;
      this._maxUnavailableWorker = undefined;
      this._drainInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drain = value.drain;
      this._maxUnavailableControlplane = value.maxUnavailableControlplane;
      this._maxUnavailableWorker = value.maxUnavailableWorker;
      this._drainInput.internalValue = value.drainInput;
    }
  }

  // drain - computed: true, optional: true, required: false
  private _drain?: boolean | cdktf.IResolvable; 
  public get drain() {
    return this.getBooleanAttribute('drain');
  }
  public set drain(value: boolean | cdktf.IResolvable) {
    this._drain = value;
  }
  public resetDrain() {
    this._drain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTfInput() {
    return this._drain;
  }

  // max_unavailable_controlplane - computed: true, optional: true, required: false
  private _maxUnavailableControlplane?: string; 
  public get maxUnavailableControlplane() {
    return this.getStringAttribute('max_unavailable_controlplane');
  }
  public set maxUnavailableControlplane(value: string) {
    this._maxUnavailableControlplane = value;
  }
  public resetMaxUnavailableControlplane() {
    this._maxUnavailableControlplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableControlplaneInput() {
    return this._maxUnavailableControlplane;
  }

  // max_unavailable_worker - computed: true, optional: true, required: false
  private _maxUnavailableWorker?: string; 
  public get maxUnavailableWorker() {
    return this.getStringAttribute('max_unavailable_worker');
  }
  public set maxUnavailableWorker(value: string) {
    this._maxUnavailableWorker = value;
  }
  public resetMaxUnavailableWorker() {
    this._maxUnavailableWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableWorkerInput() {
    return this._maxUnavailableWorker;
  }

  // drain_input - computed: false, optional: true, required: false
  private _drainInput = new ClusterUpgradeStrategyDrainInputOutputReference(this, "drain_input");
  public get drainInput() {
    return this._drainInput;
  }
  public putDrainInput(value: ClusterUpgradeStrategyDrainInput) {
    this._drainInput.internalValue = value;
  }
  public resetDrainInput() {
    this._drainInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainInputInput() {
    return this._drainInput.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster rke_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rke_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rke_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs/resources/cluster rke_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rke_cluster',
      terraformGeneratorMetadata: {
        providerName: 'rke',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addonJobTimeout = config.addonJobTimeout;
    this._addons = config.addons;
    this._addonsInclude = config.addonsInclude;
    this._certDir = config.certDir;
    this._clusterName = config.clusterName;
    this._clusterYaml = config.clusterYaml;
    this._customCerts = config.customCerts;
    this._delayOnCreation = config.delayOnCreation;
    this._dind = config.dind;
    this._dindDnsServer = config.dindDnsServer;
    this._dindStorageDriver = config.dindStorageDriver;
    this._disablePortCheck = config.disablePortCheck;
    this._enableCriDockerd = config.enableCriDockerd;
    this._id = config.id;
    this._ignoreDockerVersion = config.ignoreDockerVersion;
    this._kubernetesVersion = config.kubernetesVersion;
    this._nodesConf = config.nodesConf;
    this._prefixPath = config.prefixPath;
    this._sshAgentAuth = config.sshAgentAuth;
    this._sshCertPath = config.sshCertPath;
    this._sshKeyPath = config.sshKeyPath;
    this._updateOnly = config.updateOnly;
    this._authentication.internalValue = config.authentication;
    this._authorization.internalValue = config.authorization;
    this._bastionHost.internalValue = config.bastionHost;
    this._cloudProvider.internalValue = config.cloudProvider;
    this._dns.internalValue = config.dns;
    this._ingress.internalValue = config.ingress;
    this._monitoring.internalValue = config.monitoring;
    this._network.internalValue = config.network;
    this._nodes.internalValue = config.nodes;
    this._privateRegistries.internalValue = config.privateRegistries;
    this._restore.internalValue = config.restore;
    this._rotateCertificates.internalValue = config.rotateCertificates;
    this._services.internalValue = config.services;
    this._servicesEtcd.internalValue = config.servicesEtcd;
    this._servicesKubeApi.internalValue = config.servicesKubeApi;
    this._servicesKubeController.internalValue = config.servicesKubeController;
    this._servicesKubelet.internalValue = config.servicesKubelet;
    this._servicesKubeproxy.internalValue = config.servicesKubeproxy;
    this._servicesScheduler.internalValue = config.servicesScheduler;
    this._systemImages.internalValue = config.systemImages;
    this._timeouts.internalValue = config.timeouts;
    this._upgradeStrategy.internalValue = config.upgradeStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_job_timeout - computed: false, optional: true, required: false
  private _addonJobTimeout?: number; 
  public get addonJobTimeout() {
    return this.getNumberAttribute('addon_job_timeout');
  }
  public set addonJobTimeout(value: number) {
    this._addonJobTimeout = value;
  }
  public resetAddonJobTimeout() {
    this._addonJobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonJobTimeoutInput() {
    return this._addonJobTimeout;
  }

  // addons - computed: false, optional: true, required: false
  private _addons?: string; 
  public get addons() {
    return this.getStringAttribute('addons');
  }
  public set addons(value: string) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // addons_include - computed: false, optional: true, required: false
  private _addonsInclude?: string[]; 
  public get addonsInclude() {
    return this.getListAttribute('addons_include');
  }
  public set addonsInclude(value: string[]) {
    this._addonsInclude = value;
  }
  public resetAddonsInclude() {
    this._addonsInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsIncludeInput() {
    return this._addonsInclude;
  }

  // api_server_url - computed: true, optional: false, required: false
  public get apiServerUrl() {
    return this.getStringAttribute('api_server_url');
  }

  // ca_crt - computed: true, optional: false, required: false
  public get caCrt() {
    return this.getStringAttribute('ca_crt');
  }

  // cert_dir - computed: false, optional: true, required: false
  private _certDir?: string; 
  public get certDir() {
    return this.getStringAttribute('cert_dir');
  }
  public set certDir(value: string) {
    this._certDir = value;
  }
  public resetCertDir() {
    this._certDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDirInput() {
    return this._certDir;
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new ClusterCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // client_cert - computed: true, optional: false, required: false
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_cidr - computed: true, optional: false, required: false
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }

  // cluster_dns_server - computed: true, optional: false, required: false
  public get clusterDnsServer() {
    return this.getStringAttribute('cluster_dns_server');
  }

  // cluster_domain - computed: true, optional: false, required: false
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_yaml - computed: false, optional: true, required: false
  private _clusterYaml?: string; 
  public get clusterYaml() {
    return this.getStringAttribute('cluster_yaml');
  }
  public set clusterYaml(value: string) {
    this._clusterYaml = value;
  }
  public resetClusterYaml() {
    this._clusterYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterYamlInput() {
    return this._clusterYaml;
  }

  // control_plane_hosts - computed: true, optional: false, required: false
  private _controlPlaneHosts = new ClusterControlPlaneHostsList(this, "control_plane_hosts", false);
  public get controlPlaneHosts() {
    return this._controlPlaneHosts;
  }

  // custom_certs - computed: false, optional: true, required: false
  private _customCerts?: boolean | cdktf.IResolvable; 
  public get customCerts() {
    return this.getBooleanAttribute('custom_certs');
  }
  public set customCerts(value: boolean | cdktf.IResolvable) {
    this._customCerts = value;
  }
  public resetCustomCerts() {
    this._customCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertsInput() {
    return this._customCerts;
  }

  // delay_on_creation - computed: false, optional: true, required: false
  private _delayOnCreation?: number; 
  public get delayOnCreation() {
    return this.getNumberAttribute('delay_on_creation');
  }
  public set delayOnCreation(value: number) {
    this._delayOnCreation = value;
  }
  public resetDelayOnCreation() {
    this._delayOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayOnCreationInput() {
    return this._delayOnCreation;
  }

  // dind - computed: false, optional: true, required: false
  private _dind?: boolean | cdktf.IResolvable; 
  public get dind() {
    return this.getBooleanAttribute('dind');
  }
  public set dind(value: boolean | cdktf.IResolvable) {
    this._dind = value;
  }
  public resetDind() {
    this._dind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dindInput() {
    return this._dind;
  }

  // dind_dns_server - computed: false, optional: true, required: false
  private _dindDnsServer?: string; 
  public get dindDnsServer() {
    return this.getStringAttribute('dind_dns_server');
  }
  public set dindDnsServer(value: string) {
    this._dindDnsServer = value;
  }
  public resetDindDnsServer() {
    this._dindDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dindDnsServerInput() {
    return this._dindDnsServer;
  }

  // dind_storage_driver - computed: false, optional: true, required: false
  private _dindStorageDriver?: string; 
  public get dindStorageDriver() {
    return this.getStringAttribute('dind_storage_driver');
  }
  public set dindStorageDriver(value: string) {
    this._dindStorageDriver = value;
  }
  public resetDindStorageDriver() {
    this._dindStorageDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dindStorageDriverInput() {
    return this._dindStorageDriver;
  }

  // disable_port_check - computed: false, optional: true, required: false
  private _disablePortCheck?: boolean | cdktf.IResolvable; 
  public get disablePortCheck() {
    return this.getBooleanAttribute('disable_port_check');
  }
  public set disablePortCheck(value: boolean | cdktf.IResolvable) {
    this._disablePortCheck = value;
  }
  public resetDisablePortCheck() {
    this._disablePortCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePortCheckInput() {
    return this._disablePortCheck;
  }

  // enable_cri_dockerd - computed: false, optional: true, required: false
  private _enableCriDockerd?: boolean | cdktf.IResolvable; 
  public get enableCriDockerd() {
    return this.getBooleanAttribute('enable_cri_dockerd');
  }
  public set enableCriDockerd(value: boolean | cdktf.IResolvable) {
    this._enableCriDockerd = value;
  }
  public resetEnableCriDockerd() {
    this._enableCriDockerd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCriDockerdInput() {
    return this._enableCriDockerd;
  }

  // etcd_hosts - computed: true, optional: false, required: false
  private _etcdHosts = new ClusterEtcdHostsList(this, "etcd_hosts", false);
  public get etcdHosts() {
    return this._etcdHosts;
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

  // ignore_docker_version - computed: false, optional: true, required: false
  private _ignoreDockerVersion?: boolean | cdktf.IResolvable; 
  public get ignoreDockerVersion() {
    return this.getBooleanAttribute('ignore_docker_version');
  }
  public set ignoreDockerVersion(value: boolean | cdktf.IResolvable) {
    this._ignoreDockerVersion = value;
  }
  public resetIgnoreDockerVersion() {
    this._ignoreDockerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDockerVersionInput() {
    return this._ignoreDockerVersion;
  }

  // inactive_hosts - computed: true, optional: false, required: false
  private _inactiveHosts = new ClusterInactiveHostsList(this, "inactive_hosts", false);
  public get inactiveHosts() {
    return this._inactiveHosts;
  }

  // internal_kube_config_yaml - computed: true, optional: false, required: false
  public get internalKubeConfigYaml() {
    return this.getStringAttribute('internal_kube_config_yaml');
  }

  // kube_admin_user - computed: true, optional: false, required: false
  public get kubeAdminUser() {
    return this.getStringAttribute('kube_admin_user');
  }

  // kube_config_yaml - computed: true, optional: false, required: false
  public get kubeConfigYaml() {
    return this.getStringAttribute('kube_config_yaml');
  }

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // nodes_conf - computed: false, optional: true, required: false
  private _nodesConf?: string[]; 
  public get nodesConf() {
    return this.getListAttribute('nodes_conf');
  }
  public set nodesConf(value: string[]) {
    this._nodesConf = value;
  }
  public resetNodesConf() {
    this._nodesConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesConfInput() {
    return this._nodesConf;
  }

  // prefix_path - computed: false, optional: true, required: false
  private _prefixPath?: string; 
  public get prefixPath() {
    return this.getStringAttribute('prefix_path');
  }
  public set prefixPath(value: string) {
    this._prefixPath = value;
  }
  public resetPrefixPath() {
    this._prefixPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPathInput() {
    return this._prefixPath;
  }

  // rke_cluster_yaml - computed: true, optional: false, required: false
  public get rkeClusterYaml() {
    return this.getStringAttribute('rke_cluster_yaml');
  }

  // rke_state - computed: true, optional: false, required: false
  public get rkeState() {
    return this.getStringAttribute('rke_state');
  }

  // running_system_images - computed: true, optional: false, required: false
  private _runningSystemImages = new ClusterRunningSystemImagesList(this, "running_system_images", false);
  public get runningSystemImages() {
    return this._runningSystemImages;
  }

  // ssh_agent_auth - computed: true, optional: true, required: false
  private _sshAgentAuth?: boolean | cdktf.IResolvable; 
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }
  public set sshAgentAuth(value: boolean | cdktf.IResolvable) {
    this._sshAgentAuth = value;
  }
  public resetSshAgentAuth() {
    this._sshAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAgentAuthInput() {
    return this._sshAgentAuth;
  }

  // ssh_cert_path - computed: false, optional: true, required: false
  private _sshCertPath?: string; 
  public get sshCertPath() {
    return this.getStringAttribute('ssh_cert_path');
  }
  public set sshCertPath(value: string) {
    this._sshCertPath = value;
  }
  public resetSshCertPath() {
    this._sshCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertPathInput() {
    return this._sshCertPath;
  }

  // ssh_key_path - computed: false, optional: true, required: false
  private _sshKeyPath?: string; 
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }

  // update_only - computed: false, optional: true, required: false
  private _updateOnly?: boolean | cdktf.IResolvable; 
  public get updateOnly() {
    return this.getBooleanAttribute('update_only');
  }
  public set updateOnly(value: boolean | cdktf.IResolvable) {
    this._updateOnly = value;
  }
  public resetUpdateOnly() {
    this._updateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOnlyInput() {
    return this._updateOnly;
  }

  // worker_hosts - computed: true, optional: false, required: false
  private _workerHosts = new ClusterWorkerHostsList(this, "worker_hosts", false);
  public get workerHosts() {
    return this._workerHosts;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ClusterAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ClusterAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new ClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // bastion_host - computed: false, optional: true, required: false
  private _bastionHost = new ClusterBastionHostOutputReference(this, "bastion_host");
  public get bastionHost() {
    return this._bastionHost;
  }
  public putBastionHost(value: ClusterBastionHost) {
    this._bastionHost.internalValue = value;
  }
  public resetBastionHost() {
    this._bastionHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionHostInput() {
    return this._bastionHost.internalValue;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider = new ClusterCloudProviderOutputReference(this, "cloud_provider");
  public get cloudProvider() {
    return this._cloudProvider;
  }
  public putCloudProvider(value: ClusterCloudProvider) {
    this._cloudProvider.internalValue = value;
  }
  public resetCloudProvider() {
    this._cloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new ClusterDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: ClusterDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new ClusterIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: ClusterIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new ClusterMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: ClusterMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ClusterNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new ClusterNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: ClusterNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // private_registries - computed: false, optional: true, required: false
  private _privateRegistries = new ClusterPrivateRegistriesList(this, "private_registries", false);
  public get privateRegistries() {
    return this._privateRegistries;
  }
  public putPrivateRegistries(value: ClusterPrivateRegistries[] | cdktf.IResolvable) {
    this._privateRegistries.internalValue = value;
  }
  public resetPrivateRegistries() {
    this._privateRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistriesInput() {
    return this._privateRegistries.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new ClusterRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: ClusterRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // rotate_certificates - computed: false, optional: true, required: false
  private _rotateCertificates = new ClusterRotateCertificatesOutputReference(this, "rotate_certificates");
  public get rotateCertificates() {
    return this._rotateCertificates;
  }
  public putRotateCertificates(value: ClusterRotateCertificates) {
    this._rotateCertificates.internalValue = value;
  }
  public resetRotateCertificates() {
    this._rotateCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateCertificatesInput() {
    return this._rotateCertificates.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new ClusterServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: ClusterServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // services_etcd - computed: false, optional: true, required: false
  private _servicesEtcd = new ClusterServicesEtcdAOutputReference(this, "services_etcd");
  public get servicesEtcd() {
    return this._servicesEtcd;
  }
  public putServicesEtcd(value: ClusterServicesEtcdA) {
    this._servicesEtcd.internalValue = value;
  }
  public resetServicesEtcd() {
    this._servicesEtcd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesEtcdInput() {
    return this._servicesEtcd.internalValue;
  }

  // services_kube_api - computed: false, optional: true, required: false
  private _servicesKubeApi = new ClusterServicesKubeApiAOutputReference(this, "services_kube_api");
  public get servicesKubeApi() {
    return this._servicesKubeApi;
  }
  public putServicesKubeApi(value: ClusterServicesKubeApiA) {
    this._servicesKubeApi.internalValue = value;
  }
  public resetServicesKubeApi() {
    this._servicesKubeApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesKubeApiInput() {
    return this._servicesKubeApi.internalValue;
  }

  // services_kube_controller - computed: false, optional: true, required: false
  private _servicesKubeController = new ClusterServicesKubeControllerAOutputReference(this, "services_kube_controller");
  public get servicesKubeController() {
    return this._servicesKubeController;
  }
  public putServicesKubeController(value: ClusterServicesKubeControllerA) {
    this._servicesKubeController.internalValue = value;
  }
  public resetServicesKubeController() {
    this._servicesKubeController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesKubeControllerInput() {
    return this._servicesKubeController.internalValue;
  }

  // services_kubelet - computed: false, optional: true, required: false
  private _servicesKubelet = new ClusterServicesKubeletAOutputReference(this, "services_kubelet");
  public get servicesKubelet() {
    return this._servicesKubelet;
  }
  public putServicesKubelet(value: ClusterServicesKubeletA) {
    this._servicesKubelet.internalValue = value;
  }
  public resetServicesKubelet() {
    this._servicesKubelet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesKubeletInput() {
    return this._servicesKubelet.internalValue;
  }

  // services_kubeproxy - computed: false, optional: true, required: false
  private _servicesKubeproxy = new ClusterServicesKubeproxyAOutputReference(this, "services_kubeproxy");
  public get servicesKubeproxy() {
    return this._servicesKubeproxy;
  }
  public putServicesKubeproxy(value: ClusterServicesKubeproxyA) {
    this._servicesKubeproxy.internalValue = value;
  }
  public resetServicesKubeproxy() {
    this._servicesKubeproxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesKubeproxyInput() {
    return this._servicesKubeproxy.internalValue;
  }

  // services_scheduler - computed: false, optional: true, required: false
  private _servicesScheduler = new ClusterServicesSchedulerAOutputReference(this, "services_scheduler");
  public get servicesScheduler() {
    return this._servicesScheduler;
  }
  public putServicesScheduler(value: ClusterServicesSchedulerA) {
    this._servicesScheduler.internalValue = value;
  }
  public resetServicesScheduler() {
    this._servicesScheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesSchedulerInput() {
    return this._servicesScheduler.internalValue;
  }

  // system_images - computed: false, optional: true, required: false
  private _systemImages = new ClusterSystemImagesOutputReference(this, "system_images");
  public get systemImages() {
    return this._systemImages;
  }
  public putSystemImages(value: ClusterSystemImages) {
    this._systemImages.internalValue = value;
  }
  public resetSystemImages() {
    this._systemImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemImagesInput() {
    return this._systemImages.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_strategy - computed: false, optional: true, required: false
  private _upgradeStrategy = new ClusterUpgradeStrategyOutputReference(this, "upgrade_strategy");
  public get upgradeStrategy() {
    return this._upgradeStrategy;
  }
  public putUpgradeStrategy(value: ClusterUpgradeStrategy) {
    this._upgradeStrategy.internalValue = value;
  }
  public resetUpgradeStrategy() {
    this._upgradeStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStrategyInput() {
    return this._upgradeStrategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addon_job_timeout: cdktf.numberToTerraform(this._addonJobTimeout),
      addons: cdktf.stringToTerraform(this._addons),
      addons_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addonsInclude),
      cert_dir: cdktf.stringToTerraform(this._certDir),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_yaml: cdktf.stringToTerraform(this._clusterYaml),
      custom_certs: cdktf.booleanToTerraform(this._customCerts),
      delay_on_creation: cdktf.numberToTerraform(this._delayOnCreation),
      dind: cdktf.booleanToTerraform(this._dind),
      dind_dns_server: cdktf.stringToTerraform(this._dindDnsServer),
      dind_storage_driver: cdktf.stringToTerraform(this._dindStorageDriver),
      disable_port_check: cdktf.booleanToTerraform(this._disablePortCheck),
      enable_cri_dockerd: cdktf.booleanToTerraform(this._enableCriDockerd),
      id: cdktf.stringToTerraform(this._id),
      ignore_docker_version: cdktf.booleanToTerraform(this._ignoreDockerVersion),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      nodes_conf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodesConf),
      prefix_path: cdktf.stringToTerraform(this._prefixPath),
      ssh_agent_auth: cdktf.booleanToTerraform(this._sshAgentAuth),
      ssh_cert_path: cdktf.stringToTerraform(this._sshCertPath),
      ssh_key_path: cdktf.stringToTerraform(this._sshKeyPath),
      update_only: cdktf.booleanToTerraform(this._updateOnly),
      authentication: clusterAuthenticationToTerraform(this._authentication.internalValue),
      authorization: clusterAuthorizationToTerraform(this._authorization.internalValue),
      bastion_host: clusterBastionHostToTerraform(this._bastionHost.internalValue),
      cloud_provider: clusterCloudProviderToTerraform(this._cloudProvider.internalValue),
      dns: clusterDnsToTerraform(this._dns.internalValue),
      ingress: clusterIngressToTerraform(this._ingress.internalValue),
      monitoring: clusterMonitoringToTerraform(this._monitoring.internalValue),
      network: clusterNetworkToTerraform(this._network.internalValue),
      nodes: cdktf.listMapper(clusterNodesToTerraform, true)(this._nodes.internalValue),
      private_registries: cdktf.listMapper(clusterPrivateRegistriesToTerraform, true)(this._privateRegistries.internalValue),
      restore: clusterRestoreToTerraform(this._restore.internalValue),
      rotate_certificates: clusterRotateCertificatesToTerraform(this._rotateCertificates.internalValue),
      services: clusterServicesToTerraform(this._services.internalValue),
      services_etcd: clusterServicesEtcdAToTerraform(this._servicesEtcd.internalValue),
      services_kube_api: clusterServicesKubeApiAToTerraform(this._servicesKubeApi.internalValue),
      services_kube_controller: clusterServicesKubeControllerAToTerraform(this._servicesKubeController.internalValue),
      services_kubelet: clusterServicesKubeletAToTerraform(this._servicesKubelet.internalValue),
      services_kubeproxy: clusterServicesKubeproxyAToTerraform(this._servicesKubeproxy.internalValue),
      services_scheduler: clusterServicesSchedulerAToTerraform(this._servicesScheduler.internalValue),
      system_images: clusterSystemImagesToTerraform(this._systemImages.internalValue),
      timeouts: clusterTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_strategy: clusterUpgradeStrategyToTerraform(this._upgradeStrategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addon_job_timeout: {
        value: cdktf.numberToHclTerraform(this._addonJobTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      addons: {
        value: cdktf.stringToHclTerraform(this._addons),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addonsInclude),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cert_dir: {
        value: cdktf.stringToHclTerraform(this._certDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_yaml: {
        value: cdktf.stringToHclTerraform(this._clusterYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_certs: {
        value: cdktf.booleanToHclTerraform(this._customCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_on_creation: {
        value: cdktf.numberToHclTerraform(this._delayOnCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dind: {
        value: cdktf.booleanToHclTerraform(this._dind),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dind_dns_server: {
        value: cdktf.stringToHclTerraform(this._dindDnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dind_storage_driver: {
        value: cdktf.stringToHclTerraform(this._dindStorageDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_port_check: {
        value: cdktf.booleanToHclTerraform(this._disablePortCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_cri_dockerd: {
        value: cdktf.booleanToHclTerraform(this._enableCriDockerd),
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
      ignore_docker_version: {
        value: cdktf.booleanToHclTerraform(this._ignoreDockerVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes_conf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodesConf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      prefix_path: {
        value: cdktf.stringToHclTerraform(this._prefixPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_agent_auth: {
        value: cdktf.booleanToHclTerraform(this._sshAgentAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_cert_path: {
        value: cdktf.stringToHclTerraform(this._sshCertPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_path: {
        value: cdktf.stringToHclTerraform(this._sshKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_only: {
        value: cdktf.booleanToHclTerraform(this._updateOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication: {
        value: clusterAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterAuthenticationList",
      },
      authorization: {
        value: clusterAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterAuthorizationList",
      },
      bastion_host: {
        value: clusterBastionHostToHclTerraform(this._bastionHost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterBastionHostList",
      },
      cloud_provider: {
        value: clusterCloudProviderToHclTerraform(this._cloudProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCloudProviderList",
      },
      dns: {
        value: clusterDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterDnsList",
      },
      ingress: {
        value: clusterIngressToHclTerraform(this._ingress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterIngressList",
      },
      monitoring: {
        value: clusterMonitoringToHclTerraform(this._monitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMonitoringList",
      },
      network: {
        value: clusterNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterNetworkList",
      },
      nodes: {
        value: cdktf.listMapperHcl(clusterNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterNodesList",
      },
      private_registries: {
        value: cdktf.listMapperHcl(clusterPrivateRegistriesToHclTerraform, true)(this._privateRegistries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterPrivateRegistriesList",
      },
      restore: {
        value: clusterRestoreToHclTerraform(this._restore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterRestoreList",
      },
      rotate_certificates: {
        value: clusterRotateCertificatesToHclTerraform(this._rotateCertificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterRotateCertificatesList",
      },
      services: {
        value: clusterServicesToHclTerraform(this._services.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterServicesList",
      },
      services_etcd: {
        value: clusterServicesEtcdAToHclTerraform(this._servicesEtcd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterServicesEtcdAList",
      },
      services_kube_api: {
        value: clusterServicesKubeApiAToHclTerraform(this._servicesKubeApi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterServicesKubeApiAList",
      },
      services_kube_controller: {
        value: clusterServicesKubeControllerAToHclTerraform(this._servicesKubeController.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterServicesKubeControllerAList",
      },
      services_kubelet: {
        value: clusterServicesKubeletAToHclTerraform(this._servicesKubelet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterServicesKubeletAList",
      },
      services_kubeproxy: {
        value: clusterServicesKubeproxyAToHclTerraform(this._servicesKubeproxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterServicesKubeproxyAList",
      },
      services_scheduler: {
        value: clusterServicesSchedulerAToHclTerraform(this._servicesScheduler.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterServicesSchedulerAList",
      },
      system_images: {
        value: clusterSystemImagesToHclTerraform(this._systemImages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterSystemImagesList",
      },
      timeouts: {
        value: clusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTimeouts",
      },
      upgrade_strategy: {
        value: clusterUpgradeStrategyToHclTerraform(this._upgradeStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterUpgradeStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
