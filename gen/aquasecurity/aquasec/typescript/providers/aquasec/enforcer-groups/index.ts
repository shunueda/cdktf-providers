// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnforcerGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Selecting this option will allow the KubeEnforcer to block the deployment of container images that have failed any of these Container Runtime Policy controls:\
  * 				* Block Non-Compliant Images\
  * 				* Block Non-Compliant Workloads\
  * 				* Block Unregistered Images\
  * 				This functionality can work only when the KubeEnforcer is deployed in Enforce mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#admission_control EnforcerGroups#admission_control}
  */
  readonly admissionControl?: boolean | cdktf.IResolvable;
  /**
  * Allow kube enforcer audit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#allow_kube_enforcer_audit EnforcerGroups#allow_kube_enforcer_audit}
  */
  readonly allowKubeEnforcerAudit?: boolean | cdktf.IResolvable;
  /**
  * List of application names to allow on the hosts. if provided, only containers of the listed applications will be allowed to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#allowed_applications EnforcerGroups#allowed_applications}
  */
  readonly allowedApplications?: string[];
  /**
  * List of label names to allow on the hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#allowed_labels EnforcerGroups#allowed_labels}
  */
  readonly allowedLabels?: string[];
  /**
  * List of registry names to allow on the hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#allowed_registries EnforcerGroups#allowed_registries}
  */
  readonly allowedRegistries?: string[];
  /**
  * This setting is available only when you have license for `Advanced Malware Protection`. Send true to make use of the license and enable the `Real-time Malware Protection` control in the Host Runtime policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#antivirus_protection EnforcerGroups#antivirus_protection}
  */
  readonly antivirusProtection?: boolean | cdktf.IResolvable;
  /**
  * Agent will send extra audit messages to the server for success operations from inside the container (runtime).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#audit_all EnforcerGroups#audit_all}
  */
  readonly auditAll?: boolean | cdktf.IResolvable;
  /**
  * This option is applicable only if `Enable Pod Enforcer injection` is selected. Select this option if you want Aqua Enterprise to copy the secrets defined above to the Pod Enforcer namespace and container. Otherwise, you can choose to copy these secrets by other means.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#auto_copy_secrets EnforcerGroups#auto_copy_secrets}
  */
  readonly autoCopySecrets?: boolean | cdktf.IResolvable;
  /**
  * This option is available only if `Enable workload discovery` is selected. If selected, the KubeEnforcer will add previously unknown image registries from the cluster to Aqua.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#auto_discover_configure_registries EnforcerGroups#auto_discover_configure_registries}
  */
  readonly autoDiscoverConfigureRegistries?: boolean | cdktf.IResolvable;
  /**
  * When this option is selected, the KubeEnforcer will discover workloads on its cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#auto_discovery_enabled EnforcerGroups#auto_discovery_enabled}
  */
  readonly autoDiscoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * This option is available only if `Enable workload discovery` is selected. If selected, the KubeEnforcer will automatically register images running as workloads (and scan the discovered images for security issues).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#auto_scan_discovered_images_running_containers EnforcerGroups#auto_scan_discovered_images_running_containers}
  */
  readonly autoScanDiscoveredImagesRunningContainers?: boolean | cdktf.IResolvable;
  /**
  * Select Enabled to detect suspicious activity in your containers and display potential security threats in the Incidents and Audit pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#behavioral_engine EnforcerGroups#behavioral_engine}
  */
  readonly behavioralEngine?: boolean | cdktf.IResolvable;
  /**
  * This applies only if both `Enable admission control` and Enforce mode are set. This additional option must be selected for admission control to work if the KubeEnforcer is not connected to any Gateway. If this option is not selected, admission control will be disabled; this will have no effect on containers already running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#block_admission_control EnforcerGroups#block_admission_control}
  */
  readonly blockAdmissionControl?: boolean | cdktf.IResolvable;
  /**
  * Set `True` to apply Container Runtime Policies, Image Profiles, and Firewall Policies to containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#container_activity_protection EnforcerGroups#container_activity_protection}
  */
  readonly containerActivityProtection?: boolean | cdktf.IResolvable;
  /**
  * This setting is available only when you have license for `Advanced Malware Protection`. Send true to make use of the license and enable the `Real-time Malware Protection` control in the Container Runtime policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#container_antivirus_protection EnforcerGroups#container_antivirus_protection}
  */
  readonly containerAntivirusProtection?: boolean | cdktf.IResolvable;
  /**
  * A description of the Aqua Enforcer group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#description EnforcerGroups#description}
  */
  readonly description?: string;
  /**
  * Whether to enable enforce mode on the Enforcers, defaults to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#enforce EnforcerGroups#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Select Enabled to send activity logs in your containers to the Aqua Server for forensics purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#forensics EnforcerGroups#forensics}
  */
  readonly forensics?: boolean | cdktf.IResolvable;
  /**
  * List of Aqua gateway IDs for the Enforcers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#gateways EnforcerGroups#gateways}
  */
  readonly gateways?: string[];
  /**
  * The ID of the Enforcer group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#group_id EnforcerGroups#group_id}
  */
  readonly groupId: string;
  /**
  * Set `True` to enable host scanning and respective Host Assurance controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#host_assurance EnforcerGroups#host_assurance}
  */
  readonly hostAssurance?: boolean | cdktf.IResolvable;
  /**
  * Set `True` to enable these Host Runtime Policy controls: `OS Users and Groups Allowed` and `OS Users and Groups Blocked`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#host_behavioral_engine EnforcerGroups#host_behavioral_engine}
  */
  readonly hostBehavioralEngine?: boolean | cdktf.IResolvable;
  /**
  * Select Enabled to send activity logs in your host to the Aqua Server for forensics purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#host_forensics_collection EnforcerGroups#host_forensics_collection}
  */
  readonly hostForensicsCollection?: boolean | cdktf.IResolvable;
  /**
  * Set `True` to apply Firewall Policies to hosts, and allow recording network maps for Aqua services. The Network Firewall setting must be disabled when deploying the Aqua Enforcer on a machine running Rocky Linux. See https://docs.aquasec.com/docs/platform-support-limitations-rocky-linux for further information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#host_network_protection EnforcerGroups#host_network_protection}
  */
  readonly hostNetworkProtection?: boolean | cdktf.IResolvable;
  /**
  * The OS type for the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#host_os EnforcerGroups#host_os}
  */
  readonly hostOs?: string;
  /**
  * Set `True` to enable all Host Runtime Policy controls except for `OS Users and Groups Allowed` and `OS Users and Groups Blocked`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#host_protection EnforcerGroups#host_protection}
  */
  readonly hostProtection?: boolean | cdktf.IResolvable;
  /**
  * Set `True` to enable these Host Runtime Policy controls: `OS Users and Groups Allowed` and `OS Users and Groups Blocked`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#host_user_protection EnforcerGroups#host_user_protection}
  */
  readonly hostUserProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#id EnforcerGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set `True` to enable selected controls: Container Runtime Policy (`Block Non-Compliant Images`, `Block Unregistered Images`, and `Registries Allowed`) and Default Image Assurance Policy (`Images Blocked`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#image_assurance EnforcerGroups#image_assurance}
  */
  readonly imageAssurance?: boolean | cdktf.IResolvable;
  /**
  * See https://docs.aquasec.com/docs/securing-kubernetes-applications#section-configuration-hardening, The KubeEnforcer can deploy the Aqua Security kube-bench open-source product to perform Kubernetes CIS benchmark testing of nodes.
  * 				This field specifies the path and file name of the kube-bench product image for the KubeEnforcer to deploy; it will be filled in automatically. You can optionally enter a different value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#kube_bench_image_name EnforcerGroups#kube_bench_image_name}
  */
  readonly kubeBenchImageName?: string;
  /**
  * Name for the batch install record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#logical_name EnforcerGroups#logical_name}
  */
  readonly logicalName?: string;
  /**
  * This option is applicable only if `Enable Pod Enforcer injection` is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#micro_enforcer_certs_secrets_name EnforcerGroups#micro_enforcer_certs_secrets_name}
  */
  readonly microEnforcerCertsSecretsName?: string;
  /**
  * This option is applicable only if `Enable Pod Enforcer injection` is selected. This field specifies the path and file name of the KubeEnforcer product image to be deployed; it will be filled in automatically. You can optionally enter a different value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#micro_enforcer_image_name EnforcerGroups#micro_enforcer_image_name}
  */
  readonly microEnforcerImageName?: string;
  /**
  * This applies only if both `Enable admission control` and Enforce mode are set. This additional option must be selected for admission control to work if the KubeEnforcer is not connected to any Gateway. If this option is not selected, admission control will be disabled; this will have no effect on containers already running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#micro_enforcer_injection EnforcerGroups#micro_enforcer_injection}
  */
  readonly microEnforcerInjection?: boolean | cdktf.IResolvable;
  /**
  * You can specify the name of the secret (in the Aqua namespace) that Aqua copies into the Pod Enforcer namespace and kube-bench, allowing them access to the Pod Enforcer and kube-bench product images, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#micro_enforcer_secrets_name EnforcerGroups#micro_enforcer_secrets_name}
  */
  readonly microEnforcerSecretsName?: string;
  /**
  * Send true to apply Firewall Policies to containers, and allow recording network maps for Aqua services. The Network Firewall setting must be disabled when deploying the Aqua Enforcer on a machine running Rocky Linux. See https://docs.aquasec.com/docs/platform-support-limitations-rocky-linux for further information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#network_protection EnforcerGroups#network_protection}
  */
  readonly networkProtection?: boolean | cdktf.IResolvable;
  /**
  * Permission Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#permission EnforcerGroups#permission}
  */
  readonly permission?: string;
  /**
  * Set `True` to allow Enforcers to be discovered in the Risk Explorer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#risk_explorer_auto_discovery EnforcerGroups#risk_explorer_auto_discovery}
  */
  readonly riskExplorerAutoDiscovery?: boolean | cdktf.IResolvable;
  /**
  * The container runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#runtime_type EnforcerGroups#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * Set `True` to configure Enforcers to discover local host images. Discovered images will be listed under Images > Host Images, as well as under Infrastructure (in the Images tab for applicable hosts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#sync_host_images EnforcerGroups#sync_host_images}
  */
  readonly syncHostImages?: boolean | cdktf.IResolvable;
  /**
  * Set `True` will allow profiling and monitoring system calls made by running containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#syscall_enabled EnforcerGroups#syscall_enabled}
  */
  readonly syscallEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enforcer Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#type EnforcerGroups#type}
  */
  readonly type: string;
  /**
  * Set `True` to apply User Access Control Policies to containers. Note that Aqua Enforcers must be deployed with the AQUA_RUNC_INTERCEPTION environment variable set to 0 in order to use User Access Control Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#user_access_control EnforcerGroups#user_access_control}
  */
  readonly userAccessControl?: boolean | cdktf.IResolvable;
  /**
  * orchestrator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#orchestrator EnforcerGroups#orchestrator}
  */
  readonly orchestrator: EnforcerGroupsOrchestrator[] | cdktf.IResolvable;
  /**
  * schedule_scan_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#schedule_scan_settings EnforcerGroups#schedule_scan_settings}
  */
  readonly scheduleScanSettings?: EnforcerGroupsScheduleScanSettings;
}
export interface EnforcerGroupsCommand {
}

export function enforcerGroupsCommandToTerraform(struct?: EnforcerGroupsCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function enforcerGroupsCommandToHclTerraform(struct?: EnforcerGroupsCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EnforcerGroupsCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcerGroupsCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcerGroupsCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // kubernetes - computed: true, optional: false, required: false
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }

  // swarm - computed: true, optional: false, required: false
  public get swarm() {
    return this.getStringAttribute('swarm');
  }

  // windows - computed: true, optional: false, required: false
  public get windows() {
    return this.getStringAttribute('windows');
  }
}

export class EnforcerGroupsCommandList extends cdktf.ComplexList {

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
  public get(index: number): EnforcerGroupsCommandOutputReference {
    return new EnforcerGroupsCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcerGroupsOrchestrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#master EnforcerGroups#master}
  */
  readonly master?: boolean | cdktf.IResolvable;
  /**
  * May be specified for these orchestrators: Kubernetes, Kubernetes GKE, VMware Tanzu Kubernetes Grid Integrated Edition (PKS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#namespace EnforcerGroups#namespace}
  */
  readonly namespace?: string;
  /**
  * May be specified for these orchestrators: Kubernetes, Kubernetes GKE, OpenShift, VMware Tanzu Kubernetes Grid Integrated Edition (PKS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#service_account EnforcerGroups#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#type EnforcerGroups#type}
  */
  readonly type?: string;
}

export function enforcerGroupsOrchestratorToTerraform(struct?: EnforcerGroupsOrchestrator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master: cdktf.booleanToTerraform(struct!.master),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function enforcerGroupsOrchestratorToHclTerraform(struct?: EnforcerGroupsOrchestrator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master: {
      value: cdktf.booleanToHclTerraform(struct!.master),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
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

export class EnforcerGroupsOrchestratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcerGroupsOrchestrator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._master !== undefined) {
      hasAnyValues = true;
      internalValueResult.master = this._master;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcerGroupsOrchestrator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._master = undefined;
      this._namespace = undefined;
      this._serviceAccount = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._master = value.master;
      this._namespace = value.namespace;
      this._serviceAccount = value.serviceAccount;
      this._type = value.type;
    }
  }

  // master - computed: false, optional: true, required: false
  private _master?: boolean | cdktf.IResolvable; 
  public get master() {
    return this.getBooleanAttribute('master');
  }
  public set master(value: boolean | cdktf.IResolvable) {
    this._master = value;
  }
  public resetMaster() {
    this._master = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // namespace - computed: false, optional: true, required: false
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EnforcerGroupsOrchestratorList extends cdktf.ComplexList {
  public internalValue? : EnforcerGroupsOrchestrator[] | cdktf.IResolvable

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
  public get(index: number): EnforcerGroupsOrchestratorOutputReference {
    return new EnforcerGroupsOrchestratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcerGroupsScheduleScanSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#days EnforcerGroups#days}
  */
  readonly days?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#disabled EnforcerGroups#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#is_custom EnforcerGroups#is_custom}
  */
  readonly isCustom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#time EnforcerGroups#time}
  */
  readonly time?: number[];
}

export function enforcerGroupsScheduleScanSettingsToTerraform(struct?: EnforcerGroupsScheduleScanSettingsOutputReference | EnforcerGroupsScheduleScanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    is_custom: cdktf.booleanToTerraform(struct!.isCustom),
    time: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.time),
  }
}


export function enforcerGroupsScheduleScanSettingsToHclTerraform(struct?: EnforcerGroupsScheduleScanSettingsOutputReference | EnforcerGroupsScheduleScanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_custom: {
      value: cdktf.booleanToHclTerraform(struct!.isCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.time),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcerGroupsScheduleScanSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnforcerGroupsScheduleScanSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._isCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustom = this._isCustom;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcerGroupsScheduleScanSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._disabled = undefined;
      this._isCustom = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._disabled = value.disabled;
      this._isCustom = value.isCustom;
      this._time = value.time;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return this.getNumberListAttribute('days');
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // disabled - computed: true, optional: true, required: false
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

  // is_custom - computed: true, optional: true, required: false
  private _isCustom?: boolean | cdktf.IResolvable; 
  public get isCustom() {
    return this.getBooleanAttribute('is_custom');
  }
  public set isCustom(value: boolean | cdktf.IResolvable) {
    this._isCustom = value;
  }
  public resetIsCustom() {
    this._isCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomInput() {
    return this._isCustom;
  }

  // time - computed: true, optional: true, required: false
  private _time?: number[]; 
  public get time() {
    return this.getNumberListAttribute('time');
  }
  public set time(value: number[]) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups aquasec_enforcer_groups}
*/
export class EnforcerGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_enforcer_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnforcerGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnforcerGroups to import
  * @param importFromId The id of the existing EnforcerGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnforcerGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_enforcer_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/enforcer_groups aquasec_enforcer_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnforcerGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: EnforcerGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_enforcer_groups',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admissionControl = config.admissionControl;
    this._allowKubeEnforcerAudit = config.allowKubeEnforcerAudit;
    this._allowedApplications = config.allowedApplications;
    this._allowedLabels = config.allowedLabels;
    this._allowedRegistries = config.allowedRegistries;
    this._antivirusProtection = config.antivirusProtection;
    this._auditAll = config.auditAll;
    this._autoCopySecrets = config.autoCopySecrets;
    this._autoDiscoverConfigureRegistries = config.autoDiscoverConfigureRegistries;
    this._autoDiscoveryEnabled = config.autoDiscoveryEnabled;
    this._autoScanDiscoveredImagesRunningContainers = config.autoScanDiscoveredImagesRunningContainers;
    this._behavioralEngine = config.behavioralEngine;
    this._blockAdmissionControl = config.blockAdmissionControl;
    this._containerActivityProtection = config.containerActivityProtection;
    this._containerAntivirusProtection = config.containerAntivirusProtection;
    this._description = config.description;
    this._enforce = config.enforce;
    this._forensics = config.forensics;
    this._gateways = config.gateways;
    this._groupId = config.groupId;
    this._hostAssurance = config.hostAssurance;
    this._hostBehavioralEngine = config.hostBehavioralEngine;
    this._hostForensicsCollection = config.hostForensicsCollection;
    this._hostNetworkProtection = config.hostNetworkProtection;
    this._hostOs = config.hostOs;
    this._hostProtection = config.hostProtection;
    this._hostUserProtection = config.hostUserProtection;
    this._id = config.id;
    this._imageAssurance = config.imageAssurance;
    this._kubeBenchImageName = config.kubeBenchImageName;
    this._logicalName = config.logicalName;
    this._microEnforcerCertsSecretsName = config.microEnforcerCertsSecretsName;
    this._microEnforcerImageName = config.microEnforcerImageName;
    this._microEnforcerInjection = config.microEnforcerInjection;
    this._microEnforcerSecretsName = config.microEnforcerSecretsName;
    this._networkProtection = config.networkProtection;
    this._permission = config.permission;
    this._riskExplorerAutoDiscovery = config.riskExplorerAutoDiscovery;
    this._runtimeType = config.runtimeType;
    this._syncHostImages = config.syncHostImages;
    this._syscallEnabled = config.syscallEnabled;
    this._type = config.type;
    this._userAccessControl = config.userAccessControl;
    this._orchestrator.internalValue = config.orchestrator;
    this._scheduleScanSettings.internalValue = config.scheduleScanSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admission_control - computed: false, optional: true, required: false
  private _admissionControl?: boolean | cdktf.IResolvable; 
  public get admissionControl() {
    return this.getBooleanAttribute('admission_control');
  }
  public set admissionControl(value: boolean | cdktf.IResolvable) {
    this._admissionControl = value;
  }
  public resetAdmissionControl() {
    this._admissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionControlInput() {
    return this._admissionControl;
  }

  // allow_kube_enforcer_audit - computed: false, optional: true, required: false
  private _allowKubeEnforcerAudit?: boolean | cdktf.IResolvable; 
  public get allowKubeEnforcerAudit() {
    return this.getBooleanAttribute('allow_kube_enforcer_audit');
  }
  public set allowKubeEnforcerAudit(value: boolean | cdktf.IResolvable) {
    this._allowKubeEnforcerAudit = value;
  }
  public resetAllowKubeEnforcerAudit() {
    this._allowKubeEnforcerAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowKubeEnforcerAuditInput() {
    return this._allowKubeEnforcerAudit;
  }

  // allowed_applications - computed: false, optional: true, required: false
  private _allowedApplications?: string[]; 
  public get allowedApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_applications'));
  }
  public set allowedApplications(value: string[]) {
    this._allowedApplications = value;
  }
  public resetAllowedApplications() {
    this._allowedApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedApplicationsInput() {
    return this._allowedApplications;
  }

  // allowed_labels - computed: false, optional: true, required: false
  private _allowedLabels?: string[]; 
  public get allowedLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_labels'));
  }
  public set allowedLabels(value: string[]) {
    this._allowedLabels = value;
  }
  public resetAllowedLabels() {
    this._allowedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedLabelsInput() {
    return this._allowedLabels;
  }

  // allowed_registries - computed: false, optional: true, required: false
  private _allowedRegistries?: string[]; 
  public get allowedRegistries() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_registries'));
  }
  public set allowedRegistries(value: string[]) {
    this._allowedRegistries = value;
  }
  public resetAllowedRegistries() {
    this._allowedRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesInput() {
    return this._allowedRegistries;
  }

  // antivirus_protection - computed: false, optional: true, required: false
  private _antivirusProtection?: boolean | cdktf.IResolvable; 
  public get antivirusProtection() {
    return this.getBooleanAttribute('antivirus_protection');
  }
  public set antivirusProtection(value: boolean | cdktf.IResolvable) {
    this._antivirusProtection = value;
  }
  public resetAntivirusProtection() {
    this._antivirusProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusProtectionInput() {
    return this._antivirusProtection;
  }

  // aqua_version - computed: true, optional: false, required: false
  public get aquaVersion() {
    return this.getStringAttribute('aqua_version');
  }

  // audit_all - computed: false, optional: true, required: false
  private _auditAll?: boolean | cdktf.IResolvable; 
  public get auditAll() {
    return this.getBooleanAttribute('audit_all');
  }
  public set auditAll(value: boolean | cdktf.IResolvable) {
    this._auditAll = value;
  }
  public resetAuditAll() {
    this._auditAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAllInput() {
    return this._auditAll;
  }

  // auto_copy_secrets - computed: true, optional: true, required: false
  private _autoCopySecrets?: boolean | cdktf.IResolvable; 
  public get autoCopySecrets() {
    return this.getBooleanAttribute('auto_copy_secrets');
  }
  public set autoCopySecrets(value: boolean | cdktf.IResolvable) {
    this._autoCopySecrets = value;
  }
  public resetAutoCopySecrets() {
    this._autoCopySecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCopySecretsInput() {
    return this._autoCopySecrets;
  }

  // auto_discover_configure_registries - computed: false, optional: true, required: false
  private _autoDiscoverConfigureRegistries?: boolean | cdktf.IResolvable; 
  public get autoDiscoverConfigureRegistries() {
    return this.getBooleanAttribute('auto_discover_configure_registries');
  }
  public set autoDiscoverConfigureRegistries(value: boolean | cdktf.IResolvable) {
    this._autoDiscoverConfigureRegistries = value;
  }
  public resetAutoDiscoverConfigureRegistries() {
    this._autoDiscoverConfigureRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoverConfigureRegistriesInput() {
    return this._autoDiscoverConfigureRegistries;
  }

  // auto_discovery_enabled - computed: false, optional: true, required: false
  private _autoDiscoveryEnabled?: boolean | cdktf.IResolvable; 
  public get autoDiscoveryEnabled() {
    return this.getBooleanAttribute('auto_discovery_enabled');
  }
  public set autoDiscoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._autoDiscoveryEnabled = value;
  }
  public resetAutoDiscoveryEnabled() {
    this._autoDiscoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryEnabledInput() {
    return this._autoDiscoveryEnabled;
  }

  // auto_scan_discovered_images_running_containers - computed: false, optional: true, required: false
  private _autoScanDiscoveredImagesRunningContainers?: boolean | cdktf.IResolvable; 
  public get autoScanDiscoveredImagesRunningContainers() {
    return this.getBooleanAttribute('auto_scan_discovered_images_running_containers');
  }
  public set autoScanDiscoveredImagesRunningContainers(value: boolean | cdktf.IResolvable) {
    this._autoScanDiscoveredImagesRunningContainers = value;
  }
  public resetAutoScanDiscoveredImagesRunningContainers() {
    this._autoScanDiscoveredImagesRunningContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScanDiscoveredImagesRunningContainersInput() {
    return this._autoScanDiscoveredImagesRunningContainers;
  }

  // behavioral_engine - computed: false, optional: true, required: false
  private _behavioralEngine?: boolean | cdktf.IResolvable; 
  public get behavioralEngine() {
    return this.getBooleanAttribute('behavioral_engine');
  }
  public set behavioralEngine(value: boolean | cdktf.IResolvable) {
    this._behavioralEngine = value;
  }
  public resetBehavioralEngine() {
    this._behavioralEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behavioralEngineInput() {
    return this._behavioralEngine;
  }

  // block_admission_control - computed: false, optional: true, required: false
  private _blockAdmissionControl?: boolean | cdktf.IResolvable; 
  public get blockAdmissionControl() {
    return this.getBooleanAttribute('block_admission_control');
  }
  public set blockAdmissionControl(value: boolean | cdktf.IResolvable) {
    this._blockAdmissionControl = value;
  }
  public resetBlockAdmissionControl() {
    this._blockAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAdmissionControlInput() {
    return this._blockAdmissionControl;
  }

  // command - computed: true, optional: false, required: false
  private _command = new EnforcerGroupsCommandList(this, "command", false);
  public get command() {
    return this._command;
  }

  // connected_count - computed: true, optional: false, required: false
  public get connectedCount() {
    return this.getNumberAttribute('connected_count');
  }

  // container_activity_protection - computed: false, optional: true, required: false
  private _containerActivityProtection?: boolean | cdktf.IResolvable; 
  public get containerActivityProtection() {
    return this.getBooleanAttribute('container_activity_protection');
  }
  public set containerActivityProtection(value: boolean | cdktf.IResolvable) {
    this._containerActivityProtection = value;
  }
  public resetContainerActivityProtection() {
    this._containerActivityProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerActivityProtectionInput() {
    return this._containerActivityProtection;
  }

  // container_antivirus_protection - computed: false, optional: true, required: false
  private _containerAntivirusProtection?: boolean | cdktf.IResolvable; 
  public get containerAntivirusProtection() {
    return this.getBooleanAttribute('container_antivirus_protection');
  }
  public set containerAntivirusProtection(value: boolean | cdktf.IResolvable) {
    this._containerAntivirusProtection = value;
  }
  public resetContainerAntivirusProtection() {
    this._containerAntivirusProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAntivirusProtectionInput() {
    return this._containerAntivirusProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disconnected_count - computed: true, optional: false, required: false
  public get disconnectedCount() {
    return this.getNumberAttribute('disconnected_count');
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // enforcer_image_name - computed: true, optional: false, required: false
  public get enforcerImageName() {
    return this.getStringAttribute('enforcer_image_name');
  }

  // forensics - computed: false, optional: true, required: false
  private _forensics?: boolean | cdktf.IResolvable; 
  public get forensics() {
    return this.getBooleanAttribute('forensics');
  }
  public set forensics(value: boolean | cdktf.IResolvable) {
    this._forensics = value;
  }
  public resetForensics() {
    this._forensics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forensicsInput() {
    return this._forensics;
  }

  // gateway_address - computed: true, optional: false, required: false
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }

  // gateway_name - computed: true, optional: false, required: false
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }

  // gateways - computed: true, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return this.getListAttribute('gateways');
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // high_vulns - computed: true, optional: false, required: false
  public get highVulns() {
    return this.getNumberAttribute('high_vulns');
  }

  // host_assurance - computed: false, optional: true, required: false
  private _hostAssurance?: boolean | cdktf.IResolvable; 
  public get hostAssurance() {
    return this.getBooleanAttribute('host_assurance');
  }
  public set hostAssurance(value: boolean | cdktf.IResolvable) {
    this._hostAssurance = value;
  }
  public resetHostAssurance() {
    this._hostAssurance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAssuranceInput() {
    return this._hostAssurance;
  }

  // host_behavioral_engine - computed: false, optional: true, required: false
  private _hostBehavioralEngine?: boolean | cdktf.IResolvable; 
  public get hostBehavioralEngine() {
    return this.getBooleanAttribute('host_behavioral_engine');
  }
  public set hostBehavioralEngine(value: boolean | cdktf.IResolvable) {
    this._hostBehavioralEngine = value;
  }
  public resetHostBehavioralEngine() {
    this._hostBehavioralEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostBehavioralEngineInput() {
    return this._hostBehavioralEngine;
  }

  // host_forensics_collection - computed: false, optional: true, required: false
  private _hostForensicsCollection?: boolean | cdktf.IResolvable; 
  public get hostForensicsCollection() {
    return this.getBooleanAttribute('host_forensics_collection');
  }
  public set hostForensicsCollection(value: boolean | cdktf.IResolvable) {
    this._hostForensicsCollection = value;
  }
  public resetHostForensicsCollection() {
    this._hostForensicsCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostForensicsCollectionInput() {
    return this._hostForensicsCollection;
  }

  // host_network_protection - computed: false, optional: true, required: false
  private _hostNetworkProtection?: boolean | cdktf.IResolvable; 
  public get hostNetworkProtection() {
    return this.getBooleanAttribute('host_network_protection');
  }
  public set hostNetworkProtection(value: boolean | cdktf.IResolvable) {
    this._hostNetworkProtection = value;
  }
  public resetHostNetworkProtection() {
    this._hostNetworkProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkProtectionInput() {
    return this._hostNetworkProtection;
  }

  // host_os - computed: true, optional: true, required: false
  private _hostOs?: string; 
  public get hostOs() {
    return this.getStringAttribute('host_os');
  }
  public set hostOs(value: string) {
    this._hostOs = value;
  }
  public resetHostOs() {
    this._hostOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOsInput() {
    return this._hostOs;
  }

  // host_protection - computed: false, optional: true, required: false
  private _hostProtection?: boolean | cdktf.IResolvable; 
  public get hostProtection() {
    return this.getBooleanAttribute('host_protection');
  }
  public set hostProtection(value: boolean | cdktf.IResolvable) {
    this._hostProtection = value;
  }
  public resetHostProtection() {
    this._hostProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProtectionInput() {
    return this._hostProtection;
  }

  // host_user_protection - computed: false, optional: true, required: false
  private _hostUserProtection?: boolean | cdktf.IResolvable; 
  public get hostUserProtection() {
    return this.getBooleanAttribute('host_user_protection');
  }
  public set hostUserProtection(value: boolean | cdktf.IResolvable) {
    this._hostUserProtection = value;
  }
  public resetHostUserProtection() {
    this._hostUserProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUserProtectionInput() {
    return this._hostUserProtection;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hosts_count - computed: true, optional: false, required: false
  public get hostsCount() {
    return this.getNumberAttribute('hosts_count');
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

  // image_assurance - computed: false, optional: true, required: false
  private _imageAssurance?: boolean | cdktf.IResolvable; 
  public get imageAssurance() {
    return this.getBooleanAttribute('image_assurance');
  }
  public set imageAssurance(value: boolean | cdktf.IResolvable) {
    this._imageAssurance = value;
  }
  public resetImageAssurance() {
    this._imageAssurance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAssuranceInput() {
    return this._imageAssurance;
  }

  // install_command - computed: true, optional: false, required: false
  public get installCommand() {
    return this.getStringAttribute('install_command');
  }

  // kube_bench_image_name - computed: true, optional: true, required: false
  private _kubeBenchImageName?: string; 
  public get kubeBenchImageName() {
    return this.getStringAttribute('kube_bench_image_name');
  }
  public set kubeBenchImageName(value: string) {
    this._kubeBenchImageName = value;
  }
  public resetKubeBenchImageName() {
    this._kubeBenchImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeBenchImageNameInput() {
    return this._kubeBenchImageName;
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getNumberAttribute('last_update');
  }

  // logical_name - computed: true, optional: true, required: false
  private _logicalName?: string; 
  public get logicalName() {
    return this.getStringAttribute('logical_name');
  }
  public set logicalName(value: string) {
    this._logicalName = value;
  }
  public resetLogicalName() {
    this._logicalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNameInput() {
    return this._logicalName;
  }

  // low_vulns - computed: true, optional: false, required: false
  public get lowVulns() {
    return this.getNumberAttribute('low_vulns');
  }

  // med_vulns - computed: true, optional: false, required: false
  public get medVulns() {
    return this.getNumberAttribute('med_vulns');
  }

  // micro_enforcer_certs_secrets_name - computed: false, optional: true, required: false
  private _microEnforcerCertsSecretsName?: string; 
  public get microEnforcerCertsSecretsName() {
    return this.getStringAttribute('micro_enforcer_certs_secrets_name');
  }
  public set microEnforcerCertsSecretsName(value: string) {
    this._microEnforcerCertsSecretsName = value;
  }
  public resetMicroEnforcerCertsSecretsName() {
    this._microEnforcerCertsSecretsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microEnforcerCertsSecretsNameInput() {
    return this._microEnforcerCertsSecretsName;
  }

  // micro_enforcer_image_name - computed: true, optional: true, required: false
  private _microEnforcerImageName?: string; 
  public get microEnforcerImageName() {
    return this.getStringAttribute('micro_enforcer_image_name');
  }
  public set microEnforcerImageName(value: string) {
    this._microEnforcerImageName = value;
  }
  public resetMicroEnforcerImageName() {
    this._microEnforcerImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microEnforcerImageNameInput() {
    return this._microEnforcerImageName;
  }

  // micro_enforcer_injection - computed: false, optional: true, required: false
  private _microEnforcerInjection?: boolean | cdktf.IResolvable; 
  public get microEnforcerInjection() {
    return this.getBooleanAttribute('micro_enforcer_injection');
  }
  public set microEnforcerInjection(value: boolean | cdktf.IResolvable) {
    this._microEnforcerInjection = value;
  }
  public resetMicroEnforcerInjection() {
    this._microEnforcerInjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microEnforcerInjectionInput() {
    return this._microEnforcerInjection;
  }

  // micro_enforcer_secrets_name - computed: true, optional: true, required: false
  private _microEnforcerSecretsName?: string; 
  public get microEnforcerSecretsName() {
    return this.getStringAttribute('micro_enforcer_secrets_name');
  }
  public set microEnforcerSecretsName(value: string) {
    this._microEnforcerSecretsName = value;
  }
  public resetMicroEnforcerSecretsName() {
    this._microEnforcerSecretsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microEnforcerSecretsNameInput() {
    return this._microEnforcerSecretsName;
  }

  // neg_vulns - computed: true, optional: false, required: false
  public get negVulns() {
    return this.getNumberAttribute('neg_vulns');
  }

  // network_protection - computed: false, optional: true, required: false
  private _networkProtection?: boolean | cdktf.IResolvable; 
  public get networkProtection() {
    return this.getBooleanAttribute('network_protection');
  }
  public set networkProtection(value: boolean | cdktf.IResolvable) {
    this._networkProtection = value;
  }
  public resetNetworkProtection() {
    this._networkProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtectionInput() {
    return this._networkProtection;
  }

  // pas_deployment_link - computed: true, optional: false, required: false
  public get pasDeploymentLink() {
    return this.getStringAttribute('pas_deployment_link');
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // risk_explorer_auto_discovery - computed: false, optional: true, required: false
  private _riskExplorerAutoDiscovery?: boolean | cdktf.IResolvable; 
  public get riskExplorerAutoDiscovery() {
    return this.getBooleanAttribute('risk_explorer_auto_discovery');
  }
  public set riskExplorerAutoDiscovery(value: boolean | cdktf.IResolvable) {
    this._riskExplorerAutoDiscovery = value;
  }
  public resetRiskExplorerAutoDiscovery() {
    this._riskExplorerAutoDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskExplorerAutoDiscoveryInput() {
    return this._riskExplorerAutoDiscovery;
  }

  // runtime_policy_name - computed: true, optional: false, required: false
  public get runtimePolicyName() {
    return this.getStringAttribute('runtime_policy_name');
  }

  // runtime_type - computed: true, optional: true, required: false
  private _runtimeType?: string; 
  public get runtimeType() {
    return this.getStringAttribute('runtime_type');
  }
  public set runtimeType(value: string) {
    this._runtimeType = value;
  }
  public resetRuntimeType() {
    this._runtimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeTypeInput() {
    return this._runtimeType;
  }

  // sync_host_images - computed: false, optional: true, required: false
  private _syncHostImages?: boolean | cdktf.IResolvable; 
  public get syncHostImages() {
    return this.getBooleanAttribute('sync_host_images');
  }
  public set syncHostImages(value: boolean | cdktf.IResolvable) {
    this._syncHostImages = value;
  }
  public resetSyncHostImages() {
    this._syncHostImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncHostImagesInput() {
    return this._syncHostImages;
  }

  // syscall_enabled - computed: false, optional: true, required: false
  private _syscallEnabled?: boolean | cdktf.IResolvable; 
  public get syscallEnabled() {
    return this.getBooleanAttribute('syscall_enabled');
  }
  public set syscallEnabled(value: boolean | cdktf.IResolvable) {
    this._syscallEnabled = value;
  }
  public resetSyscallEnabled() {
    this._syscallEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syscallEnabledInput() {
    return this._syscallEnabled;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
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

  // user_access_control - computed: false, optional: true, required: false
  private _userAccessControl?: boolean | cdktf.IResolvable; 
  public get userAccessControl() {
    return this.getBooleanAttribute('user_access_control');
  }
  public set userAccessControl(value: boolean | cdktf.IResolvable) {
    this._userAccessControl = value;
  }
  public resetUserAccessControl() {
    this._userAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessControlInput() {
    return this._userAccessControl;
  }

  // orchestrator - computed: false, optional: false, required: true
  private _orchestrator = new EnforcerGroupsOrchestratorList(this, "orchestrator", true);
  public get orchestrator() {
    return this._orchestrator;
  }
  public putOrchestrator(value: EnforcerGroupsOrchestrator[] | cdktf.IResolvable) {
    this._orchestrator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorInput() {
    return this._orchestrator.internalValue;
  }

  // schedule_scan_settings - computed: false, optional: true, required: false
  private _scheduleScanSettings = new EnforcerGroupsScheduleScanSettingsOutputReference(this, "schedule_scan_settings");
  public get scheduleScanSettings() {
    return this._scheduleScanSettings;
  }
  public putScheduleScanSettings(value: EnforcerGroupsScheduleScanSettings) {
    this._scheduleScanSettings.internalValue = value;
  }
  public resetScheduleScanSettings() {
    this._scheduleScanSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleScanSettingsInput() {
    return this._scheduleScanSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admission_control: cdktf.booleanToTerraform(this._admissionControl),
      allow_kube_enforcer_audit: cdktf.booleanToTerraform(this._allowKubeEnforcerAudit),
      allowed_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedApplications),
      allowed_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedLabels),
      allowed_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRegistries),
      antivirus_protection: cdktf.booleanToTerraform(this._antivirusProtection),
      audit_all: cdktf.booleanToTerraform(this._auditAll),
      auto_copy_secrets: cdktf.booleanToTerraform(this._autoCopySecrets),
      auto_discover_configure_registries: cdktf.booleanToTerraform(this._autoDiscoverConfigureRegistries),
      auto_discovery_enabled: cdktf.booleanToTerraform(this._autoDiscoveryEnabled),
      auto_scan_discovered_images_running_containers: cdktf.booleanToTerraform(this._autoScanDiscoveredImagesRunningContainers),
      behavioral_engine: cdktf.booleanToTerraform(this._behavioralEngine),
      block_admission_control: cdktf.booleanToTerraform(this._blockAdmissionControl),
      container_activity_protection: cdktf.booleanToTerraform(this._containerActivityProtection),
      container_antivirus_protection: cdktf.booleanToTerraform(this._containerAntivirusProtection),
      description: cdktf.stringToTerraform(this._description),
      enforce: cdktf.booleanToTerraform(this._enforce),
      forensics: cdktf.booleanToTerraform(this._forensics),
      gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateways),
      group_id: cdktf.stringToTerraform(this._groupId),
      host_assurance: cdktf.booleanToTerraform(this._hostAssurance),
      host_behavioral_engine: cdktf.booleanToTerraform(this._hostBehavioralEngine),
      host_forensics_collection: cdktf.booleanToTerraform(this._hostForensicsCollection),
      host_network_protection: cdktf.booleanToTerraform(this._hostNetworkProtection),
      host_os: cdktf.stringToTerraform(this._hostOs),
      host_protection: cdktf.booleanToTerraform(this._hostProtection),
      host_user_protection: cdktf.booleanToTerraform(this._hostUserProtection),
      id: cdktf.stringToTerraform(this._id),
      image_assurance: cdktf.booleanToTerraform(this._imageAssurance),
      kube_bench_image_name: cdktf.stringToTerraform(this._kubeBenchImageName),
      logical_name: cdktf.stringToTerraform(this._logicalName),
      micro_enforcer_certs_secrets_name: cdktf.stringToTerraform(this._microEnforcerCertsSecretsName),
      micro_enforcer_image_name: cdktf.stringToTerraform(this._microEnforcerImageName),
      micro_enforcer_injection: cdktf.booleanToTerraform(this._microEnforcerInjection),
      micro_enforcer_secrets_name: cdktf.stringToTerraform(this._microEnforcerSecretsName),
      network_protection: cdktf.booleanToTerraform(this._networkProtection),
      permission: cdktf.stringToTerraform(this._permission),
      risk_explorer_auto_discovery: cdktf.booleanToTerraform(this._riskExplorerAutoDiscovery),
      runtime_type: cdktf.stringToTerraform(this._runtimeType),
      sync_host_images: cdktf.booleanToTerraform(this._syncHostImages),
      syscall_enabled: cdktf.booleanToTerraform(this._syscallEnabled),
      type: cdktf.stringToTerraform(this._type),
      user_access_control: cdktf.booleanToTerraform(this._userAccessControl),
      orchestrator: cdktf.listMapper(enforcerGroupsOrchestratorToTerraform, true)(this._orchestrator.internalValue),
      schedule_scan_settings: enforcerGroupsScheduleScanSettingsToTerraform(this._scheduleScanSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admission_control: {
        value: cdktf.booleanToHclTerraform(this._admissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_kube_enforcer_audit: {
        value: cdktf.booleanToHclTerraform(this._allowKubeEnforcerAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedLabels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_registries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRegistries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      antivirus_protection: {
        value: cdktf.booleanToHclTerraform(this._antivirusProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_all: {
        value: cdktf.booleanToHclTerraform(this._auditAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_copy_secrets: {
        value: cdktf.booleanToHclTerraform(this._autoCopySecrets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_discover_configure_registries: {
        value: cdktf.booleanToHclTerraform(this._autoDiscoverConfigureRegistries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_discovery_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoDiscoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_scan_discovered_images_running_containers: {
        value: cdktf.booleanToHclTerraform(this._autoScanDiscoveredImagesRunningContainers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      behavioral_engine: {
        value: cdktf.booleanToHclTerraform(this._behavioralEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_admission_control: {
        value: cdktf.booleanToHclTerraform(this._blockAdmissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_activity_protection: {
        value: cdktf.booleanToHclTerraform(this._containerActivityProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_antivirus_protection: {
        value: cdktf.booleanToHclTerraform(this._containerAntivirusProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce: {
        value: cdktf.booleanToHclTerraform(this._enforce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forensics: {
        value: cdktf.booleanToHclTerraform(this._forensics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateways),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_assurance: {
        value: cdktf.booleanToHclTerraform(this._hostAssurance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_behavioral_engine: {
        value: cdktf.booleanToHclTerraform(this._hostBehavioralEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_forensics_collection: {
        value: cdktf.booleanToHclTerraform(this._hostForensicsCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_network_protection: {
        value: cdktf.booleanToHclTerraform(this._hostNetworkProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_os: {
        value: cdktf.stringToHclTerraform(this._hostOs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_protection: {
        value: cdktf.booleanToHclTerraform(this._hostProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_user_protection: {
        value: cdktf.booleanToHclTerraform(this._hostUserProtection),
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
      image_assurance: {
        value: cdktf.booleanToHclTerraform(this._imageAssurance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kube_bench_image_name: {
        value: cdktf.stringToHclTerraform(this._kubeBenchImageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_name: {
        value: cdktf.stringToHclTerraform(this._logicalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      micro_enforcer_certs_secrets_name: {
        value: cdktf.stringToHclTerraform(this._microEnforcerCertsSecretsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      micro_enforcer_image_name: {
        value: cdktf.stringToHclTerraform(this._microEnforcerImageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      micro_enforcer_injection: {
        value: cdktf.booleanToHclTerraform(this._microEnforcerInjection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      micro_enforcer_secrets_name: {
        value: cdktf.stringToHclTerraform(this._microEnforcerSecretsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_protection: {
        value: cdktf.booleanToHclTerraform(this._networkProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_explorer_auto_discovery: {
        value: cdktf.booleanToHclTerraform(this._riskExplorerAutoDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      runtime_type: {
        value: cdktf.stringToHclTerraform(this._runtimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_host_images: {
        value: cdktf.booleanToHclTerraform(this._syncHostImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syscall_enabled: {
        value: cdktf.booleanToHclTerraform(this._syscallEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_access_control: {
        value: cdktf.booleanToHclTerraform(this._userAccessControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      orchestrator: {
        value: cdktf.listMapperHcl(enforcerGroupsOrchestratorToHclTerraform, true)(this._orchestrator.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnforcerGroupsOrchestratorList",
      },
      schedule_scan_settings: {
        value: enforcerGroupsScheduleScanSettingsToHclTerraform(this._scheduleScanSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnforcerGroupsScheduleScanSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
