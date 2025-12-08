// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadata;
  /**
  * TinkerbellMachineConfigSpec defines the desired state of TinkerbellMachineConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#boot_kernel_parameters DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#boot_kernel_parameters}
  */
  readonly bootKernelParameters?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBootToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_kernel_parameters: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.bootKernelParameters),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBootToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_kernel_parameters: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.bootKernelParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootKernelParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootKernelParameters = this._bootKernelParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootKernelParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootKernelParameters = value.bootKernelParameters;
    }
  }

  // boot_kernel_parameters - computed: false, optional: true, required: false
  private _bootKernelParameters?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get bootKernelParameters() {
    return this.interpolationForAttribute('boot_kernel_parameters');
  }
  public set bootKernelParameters(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._bootKernelParameters = value;
  }
  public resetBootKernelParameters() {
    this._bootKernelParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootKernelParametersInput() {
    return this._bootKernelParameters;
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernel {
  /**
  * SysctlSettings defines the kernel sysctl settings to set for bottlerocket nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#sysctl_settings DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#sysctl_settings}
  */
  readonly sysctlSettings?: { [key: string]: string };
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernelToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sysctl_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sysctlSettings),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernelToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sysctl_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sysctlSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sysctlSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctlSettings = this._sysctlSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sysctlSettings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sysctlSettings = value.sysctlSettings;
    }
  }

  // sysctl_settings - computed: false, optional: true, required: false
  private _sysctlSettings?: { [key: string]: string }; 
  public get sysctlSettings() {
    return this.getStringMapAttribute('sysctl_settings');
  }
  public set sysctlSettings(value: { [key: string]: string }) {
    this._sysctlSettings = value;
  }
  public resetSysctlSettings() {
    this._sysctlSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlSettingsInput() {
    return this._sysctlSettings;
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetes {
  /**
  * AllowedUnsafeSysctls defines the list of unsafe sysctls that can be set on a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#allowed_unsafe_sysctls DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * ClusterDNSIPs defines IP addresses of the DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#cluster_dnsi_ps DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#cluster_dnsi_ps}
  */
  readonly clusterDnsiPs?: string[];
  /**
  * ClusterDomain defines the DNS domain for the cluster, allowing all Kubernetes-run containers to search this domain before the host’s search domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#cluster_domain DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * ContainerLogMaxFiles specifies the maximum number of container log files that can be present for a container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#container_log_max_files DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * ContainerLogMaxSize is a quantity defining the maximum size of the container log file before it is rotated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#container_log_max_size DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * CPUCFSQuota enables CPU CFS quota enforcement for containers that specify CPU limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#cpu_cfs_quota DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * CPUManagerPolicy is the name of the policy to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#cpu_manager_policy DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * CPUManagerPolicyOptions is a set of key=value which allows to set extra options to fine tune the behaviour of the cpu manager policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#cpu_manager_policy_options DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#cpu_manager_policy_options}
  */
  readonly cpuManagerPolicyOptions?: { [key: string]: string };
  /**
  * CPUManagerReconcilePeriod is the reconciliation period for the CPU Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#cpu_manager_reconcile_period DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#cpu_manager_reconcile_period}
  */
  readonly cpuManagerReconcilePeriod?: string;
  /**
  * EventBurst is the maximum size of a burst of event creations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#event_burst DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#event_burst}
  */
  readonly eventBurst?: number;
  /**
  * EventRecordQPS is the maximum event creations per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#event_record_qps DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#event_record_qps}
  */
  readonly eventRecordQps?: number;
  /**
  * EvictionHard is a map of signal names to quantities that defines hard eviction thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#eviction_hard DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#eviction_hard}
  */
  readonly evictionHard?: { [key: string]: string };
  /**
  * EvictionMaxPodGracePeriod is the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#eviction_max_pod_grace_period DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#eviction_max_pod_grace_period}
  */
  readonly evictionMaxPodGracePeriod?: number;
  /**
  * EvictionSoft is a map of signal names to quantities that defines soft eviction thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#eviction_soft DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#eviction_soft}
  */
  readonly evictionSoft?: { [key: string]: string };
  /**
  * EvictionSoftGracePeriod is a map of signal names to quantities that defines grace periods for each soft eviction signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#eviction_soft_grace_period DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: { [key: string]: string };
  /**
  * ImageGCHighThresholdPercent is the percent of disk usage after which image garbage collection is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#image_gc_high_threshold_percent DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * ImageGCLowThresholdPercent is the percent of disk usage before which image garbage collection is never run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#image_gc_low_threshold_percent DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * KubeAPIBurst is the burst to allow while talking with kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#kube_api_burst DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#kube_api_burst}
  */
  readonly kubeApiBurst?: number;
  /**
  * KubeAPIQPS is the QPS to use while talking with kubernetes apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#kube_apiqps DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#kube_apiqps}
  */
  readonly kubeApiqps?: number;
  /**
  * KubeReserved is a set of ResourceName=ResourceQuantity pairs that describe resources reserved for kubernetes system components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#kube_reserved DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#kube_reserved}
  */
  readonly kubeReserved?: { [key: string]: string };
  /**
  * MaxPods defines the maximum number of pods that can run on a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#max_pods DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#max_pods}
  */
  readonly maxPods?: number;
  /**
  * MemoryManagerPolicy is the name of the policy to use by memory manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#memory_manager_policy DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#memory_manager_policy}
  */
  readonly memoryManagerPolicy?: string;
  /**
  * PodPidsLimit is the maximum number of PIDs in any pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#pod_pids_limit DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
  /**
  * ProviderID sets the unique ID of the instance that an external provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#provider_id DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * RegistryBurst is the maximum size of bursty pulls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#registry_burst DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#registry_burst}
  */
  readonly registryBurst?: number;
  /**
  * RegistryPullQPS is the limit of registry pulls per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#registry_pull_qps DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#registry_pull_qps}
  */
  readonly registryPullQps?: number;
  /**
  * ShutdownGracePeriod specifies the total duration that the node should delay the shutdown and total grace period for pod termination during a node shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#shutdown_grace_period DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#shutdown_grace_period}
  */
  readonly shutdownGracePeriod?: string;
  /**
  * ShutdownGracePeriodCriticalPods specifies the duration used to terminate critical pods during a node shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#shutdown_grace_period_critical_pods DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#shutdown_grace_period_critical_pods}
  */
  readonly shutdownGracePeriodCriticalPods?: string;
  /**
  * SystemReserved is a set of ResourceName=ResourceQuantity pairs that describe resources reserved for non-kubernetes components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#system_reserved DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#system_reserved}
  */
  readonly systemReserved?: { [key: string]: string };
  /**
  * TopologyManagerPolicy is the name of the topology manager policy to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#topology_manager_policy DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
  /**
  * TopologyManagerScope represents the scope of topology hint generation that topology manager requests and hint providers generate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#topology_manager_scope DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#topology_manager_scope}
  */
  readonly topologyManagerScope?: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    cluster_dnsi_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterDnsiPs),
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    container_log_max_files: cdktf.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktf.stringToTerraform(struct!.containerLogMaxSize),
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    cpu_manager_policy_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cpuManagerPolicyOptions),
    cpu_manager_reconcile_period: cdktf.stringToTerraform(struct!.cpuManagerReconcilePeriod),
    event_burst: cdktf.numberToTerraform(struct!.eventBurst),
    event_record_qps: cdktf.numberToTerraform(struct!.eventRecordQps),
    eviction_hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionHard),
    eviction_max_pod_grace_period: cdktf.numberToTerraform(struct!.evictionMaxPodGracePeriod),
    eviction_soft: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionSoft),
    eviction_soft_grace_period: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionSoftGracePeriod),
    image_gc_high_threshold_percent: cdktf.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktf.numberToTerraform(struct!.imageGcLowThresholdPercent),
    kube_api_burst: cdktf.numberToTerraform(struct!.kubeApiBurst),
    kube_apiqps: cdktf.numberToTerraform(struct!.kubeApiqps),
    kube_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeReserved),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    memory_manager_policy: cdktf.stringToTerraform(struct!.memoryManagerPolicy),
    pod_pids_limit: cdktf.numberToTerraform(struct!.podPidsLimit),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    registry_burst: cdktf.numberToTerraform(struct!.registryBurst),
    registry_pull_qps: cdktf.numberToTerraform(struct!.registryPullQps),
    shutdown_grace_period: cdktf.stringToTerraform(struct!.shutdownGracePeriod),
    shutdown_grace_period_critical_pods: cdktf.stringToTerraform(struct!.shutdownGracePeriodCriticalPods),
    system_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemReserved),
    topology_manager_policy: cdktf.stringToTerraform(struct!.topologyManagerPolicy),
    topology_manager_scope: cdktf.stringToTerraform(struct!.topologyManagerScope),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_dnsi_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterDnsiPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_log_max_files: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy_options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cpuManagerPolicyOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cpu_manager_reconcile_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerReconcilePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_burst: {
      value: cdktf.numberToHclTerraform(struct!.eventBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_record_qps: {
      value: cdktf.numberToHclTerraform(struct!.eventRecordQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eviction_hard: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionHard),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eviction_max_pod_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.evictionMaxPodGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eviction_soft: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionSoft),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eviction_soft_grace_period: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionSoftGracePeriod),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_gc_high_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_api_burst: {
      value: cdktf.numberToHclTerraform(struct!.kubeApiBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_apiqps: {
      value: cdktf.numberToHclTerraform(struct!.kubeApiqps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.memoryManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_pids_limit: {
      value: cdktf.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_burst: {
      value: cdktf.numberToHclTerraform(struct!.registryBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registry_pull_qps: {
      value: cdktf.numberToHclTerraform(struct!.registryPullQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.shutdownGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown_grace_period_critical_pods: {
      value: cdktf.stringToHclTerraform(struct!.shutdownGracePeriodCriticalPods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    topology_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.topologyManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_manager_scope: {
      value: cdktf.stringToHclTerraform(struct!.topologyManagerScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._clusterDnsiPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsiPs = this._clusterDnsiPs;
    }
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._cpuManagerPolicyOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicyOptions = this._cpuManagerPolicyOptions;
    }
    if (this._cpuManagerReconcilePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerReconcilePeriod = this._cpuManagerReconcilePeriod;
    }
    if (this._eventBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBurst = this._eventBurst;
    }
    if (this._eventRecordQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRecordQps = this._eventRecordQps;
    }
    if (this._evictionHard !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionHard = this._evictionHard;
    }
    if (this._evictionMaxPodGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMaxPodGracePeriod = this._evictionMaxPodGracePeriod;
    }
    if (this._evictionSoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoft = this._evictionSoft;
    }
    if (this._evictionSoftGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoftGracePeriod = this._evictionSoftGracePeriod;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._kubeApiBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiBurst = this._kubeApiBurst;
    }
    if (this._kubeApiqps !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiqps = this._kubeApiqps;
    }
    if (this._kubeReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeReserved = this._kubeReserved;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._memoryManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryManagerPolicy = this._memoryManagerPolicy;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._registryBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryBurst = this._registryBurst;
    }
    if (this._registryPullQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryPullQps = this._registryPullQps;
    }
    if (this._shutdownGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownGracePeriod = this._shutdownGracePeriod;
    }
    if (this._shutdownGracePeriodCriticalPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownGracePeriodCriticalPods = this._shutdownGracePeriodCriticalPods;
    }
    if (this._systemReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReserved = this._systemReserved;
    }
    if (this._topologyManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManagerPolicy = this._topologyManagerPolicy;
    }
    if (this._topologyManagerScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyManagerScope = this._topologyManagerScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedUnsafeSysctls = undefined;
      this._clusterDnsiPs = undefined;
      this._clusterDomain = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuManagerPolicy = undefined;
      this._cpuManagerPolicyOptions = undefined;
      this._cpuManagerReconcilePeriod = undefined;
      this._eventBurst = undefined;
      this._eventRecordQps = undefined;
      this._evictionHard = undefined;
      this._evictionMaxPodGracePeriod = undefined;
      this._evictionSoft = undefined;
      this._evictionSoftGracePeriod = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._kubeApiBurst = undefined;
      this._kubeApiqps = undefined;
      this._kubeReserved = undefined;
      this._maxPods = undefined;
      this._memoryManagerPolicy = undefined;
      this._podPidsLimit = undefined;
      this._providerId = undefined;
      this._registryBurst = undefined;
      this._registryPullQps = undefined;
      this._shutdownGracePeriod = undefined;
      this._shutdownGracePeriodCriticalPods = undefined;
      this._systemReserved = undefined;
      this._topologyManagerPolicy = undefined;
      this._topologyManagerScope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._clusterDnsiPs = value.clusterDnsiPs;
      this._clusterDomain = value.clusterDomain;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._cpuManagerPolicyOptions = value.cpuManagerPolicyOptions;
      this._cpuManagerReconcilePeriod = value.cpuManagerReconcilePeriod;
      this._eventBurst = value.eventBurst;
      this._eventRecordQps = value.eventRecordQps;
      this._evictionHard = value.evictionHard;
      this._evictionMaxPodGracePeriod = value.evictionMaxPodGracePeriod;
      this._evictionSoft = value.evictionSoft;
      this._evictionSoftGracePeriod = value.evictionSoftGracePeriod;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._kubeApiBurst = value.kubeApiBurst;
      this._kubeApiqps = value.kubeApiqps;
      this._kubeReserved = value.kubeReserved;
      this._maxPods = value.maxPods;
      this._memoryManagerPolicy = value.memoryManagerPolicy;
      this._podPidsLimit = value.podPidsLimit;
      this._providerId = value.providerId;
      this._registryBurst = value.registryBurst;
      this._registryPullQps = value.registryPullQps;
      this._shutdownGracePeriod = value.shutdownGracePeriod;
      this._shutdownGracePeriodCriticalPods = value.shutdownGracePeriodCriticalPods;
      this._systemReserved = value.systemReserved;
      this._topologyManagerPolicy = value.topologyManagerPolicy;
      this._topologyManagerScope = value.topologyManagerScope;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // cluster_dnsi_ps - computed: false, optional: true, required: false
  private _clusterDnsiPs?: string[]; 
  public get clusterDnsiPs() {
    return this.getListAttribute('cluster_dnsi_ps');
  }
  public set clusterDnsiPs(value: string[]) {
    this._clusterDnsiPs = value;
  }
  public resetClusterDnsiPs() {
    this._clusterDnsiPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsiPsInput() {
    return this._clusterDnsiPs;
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

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: string; 
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: string) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // cpu_manager_policy_options - computed: false, optional: true, required: false
  private _cpuManagerPolicyOptions?: { [key: string]: string }; 
  public get cpuManagerPolicyOptions() {
    return this.getStringMapAttribute('cpu_manager_policy_options');
  }
  public set cpuManagerPolicyOptions(value: { [key: string]: string }) {
    this._cpuManagerPolicyOptions = value;
  }
  public resetCpuManagerPolicyOptions() {
    this._cpuManagerPolicyOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyOptionsInput() {
    return this._cpuManagerPolicyOptions;
  }

  // cpu_manager_reconcile_period - computed: false, optional: true, required: false
  private _cpuManagerReconcilePeriod?: string; 
  public get cpuManagerReconcilePeriod() {
    return this.getStringAttribute('cpu_manager_reconcile_period');
  }
  public set cpuManagerReconcilePeriod(value: string) {
    this._cpuManagerReconcilePeriod = value;
  }
  public resetCpuManagerReconcilePeriod() {
    this._cpuManagerReconcilePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerReconcilePeriodInput() {
    return this._cpuManagerReconcilePeriod;
  }

  // event_burst - computed: false, optional: true, required: false
  private _eventBurst?: number; 
  public get eventBurst() {
    return this.getNumberAttribute('event_burst');
  }
  public set eventBurst(value: number) {
    this._eventBurst = value;
  }
  public resetEventBurst() {
    this._eventBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBurstInput() {
    return this._eventBurst;
  }

  // event_record_qps - computed: false, optional: true, required: false
  private _eventRecordQps?: number; 
  public get eventRecordQps() {
    return this.getNumberAttribute('event_record_qps');
  }
  public set eventRecordQps(value: number) {
    this._eventRecordQps = value;
  }
  public resetEventRecordQps() {
    this._eventRecordQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRecordQpsInput() {
    return this._eventRecordQps;
  }

  // eviction_hard - computed: false, optional: true, required: false
  private _evictionHard?: { [key: string]: string }; 
  public get evictionHard() {
    return this.getStringMapAttribute('eviction_hard');
  }
  public set evictionHard(value: { [key: string]: string }) {
    this._evictionHard = value;
  }
  public resetEvictionHard() {
    this._evictionHard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionHardInput() {
    return this._evictionHard;
  }

  // eviction_max_pod_grace_period - computed: false, optional: true, required: false
  private _evictionMaxPodGracePeriod?: number; 
  public get evictionMaxPodGracePeriod() {
    return this.getNumberAttribute('eviction_max_pod_grace_period');
  }
  public set evictionMaxPodGracePeriod(value: number) {
    this._evictionMaxPodGracePeriod = value;
  }
  public resetEvictionMaxPodGracePeriod() {
    this._evictionMaxPodGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMaxPodGracePeriodInput() {
    return this._evictionMaxPodGracePeriod;
  }

  // eviction_soft - computed: false, optional: true, required: false
  private _evictionSoft?: { [key: string]: string }; 
  public get evictionSoft() {
    return this.getStringMapAttribute('eviction_soft');
  }
  public set evictionSoft(value: { [key: string]: string }) {
    this._evictionSoft = value;
  }
  public resetEvictionSoft() {
    this._evictionSoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftInput() {
    return this._evictionSoft;
  }

  // eviction_soft_grace_period - computed: false, optional: true, required: false
  private _evictionSoftGracePeriod?: { [key: string]: string }; 
  public get evictionSoftGracePeriod() {
    return this.getStringMapAttribute('eviction_soft_grace_period');
  }
  public set evictionSoftGracePeriod(value: { [key: string]: string }) {
    this._evictionSoftGracePeriod = value;
  }
  public resetEvictionSoftGracePeriod() {
    this._evictionSoftGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftGracePeriodInput() {
    return this._evictionSoftGracePeriod;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // kube_api_burst - computed: false, optional: true, required: false
  private _kubeApiBurst?: number; 
  public get kubeApiBurst() {
    return this.getNumberAttribute('kube_api_burst');
  }
  public set kubeApiBurst(value: number) {
    this._kubeApiBurst = value;
  }
  public resetKubeApiBurst() {
    this._kubeApiBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiBurstInput() {
    return this._kubeApiBurst;
  }

  // kube_apiqps - computed: false, optional: true, required: false
  private _kubeApiqps?: number; 
  public get kubeApiqps() {
    return this.getNumberAttribute('kube_apiqps');
  }
  public set kubeApiqps(value: number) {
    this._kubeApiqps = value;
  }
  public resetKubeApiqps() {
    this._kubeApiqps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiqpsInput() {
    return this._kubeApiqps;
  }

  // kube_reserved - computed: false, optional: true, required: false
  private _kubeReserved?: { [key: string]: string }; 
  public get kubeReserved() {
    return this.getStringMapAttribute('kube_reserved');
  }
  public set kubeReserved(value: { [key: string]: string }) {
    this._kubeReserved = value;
  }
  public resetKubeReserved() {
    this._kubeReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeReservedInput() {
    return this._kubeReserved;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // memory_manager_policy - computed: false, optional: true, required: false
  private _memoryManagerPolicy?: string; 
  public get memoryManagerPolicy() {
    return this.getStringAttribute('memory_manager_policy');
  }
  public set memoryManagerPolicy(value: string) {
    this._memoryManagerPolicy = value;
  }
  public resetMemoryManagerPolicy() {
    this._memoryManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryManagerPolicyInput() {
    return this._memoryManagerPolicy;
  }

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // registry_burst - computed: false, optional: true, required: false
  private _registryBurst?: number; 
  public get registryBurst() {
    return this.getNumberAttribute('registry_burst');
  }
  public set registryBurst(value: number) {
    this._registryBurst = value;
  }
  public resetRegistryBurst() {
    this._registryBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryBurstInput() {
    return this._registryBurst;
  }

  // registry_pull_qps - computed: false, optional: true, required: false
  private _registryPullQps?: number; 
  public get registryPullQps() {
    return this.getNumberAttribute('registry_pull_qps');
  }
  public set registryPullQps(value: number) {
    this._registryPullQps = value;
  }
  public resetRegistryPullQps() {
    this._registryPullQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryPullQpsInput() {
    return this._registryPullQps;
  }

  // shutdown_grace_period - computed: false, optional: true, required: false
  private _shutdownGracePeriod?: string; 
  public get shutdownGracePeriod() {
    return this.getStringAttribute('shutdown_grace_period');
  }
  public set shutdownGracePeriod(value: string) {
    this._shutdownGracePeriod = value;
  }
  public resetShutdownGracePeriod() {
    this._shutdownGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownGracePeriodInput() {
    return this._shutdownGracePeriod;
  }

  // shutdown_grace_period_critical_pods - computed: false, optional: true, required: false
  private _shutdownGracePeriodCriticalPods?: string; 
  public get shutdownGracePeriodCriticalPods() {
    return this.getStringAttribute('shutdown_grace_period_critical_pods');
  }
  public set shutdownGracePeriodCriticalPods(value: string) {
    this._shutdownGracePeriodCriticalPods = value;
  }
  public resetShutdownGracePeriodCriticalPods() {
    this._shutdownGracePeriodCriticalPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownGracePeriodCriticalPodsInput() {
    return this._shutdownGracePeriodCriticalPods;
  }

  // system_reserved - computed: false, optional: true, required: false
  private _systemReserved?: { [key: string]: string }; 
  public get systemReserved() {
    return this.getStringMapAttribute('system_reserved');
  }
  public set systemReserved(value: { [key: string]: string }) {
    this._systemReserved = value;
  }
  public resetSystemReserved() {
    this._systemReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReservedInput() {
    return this._systemReserved;
  }

  // topology_manager_policy - computed: false, optional: true, required: false
  private _topologyManagerPolicy?: string; 
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }
  public set topologyManagerPolicy(value: string) {
    this._topologyManagerPolicy = value;
  }
  public resetTopologyManagerPolicy() {
    this._topologyManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerPolicyInput() {
    return this._topologyManagerPolicy;
  }

  // topology_manager_scope - computed: false, optional: true, required: false
  private _topologyManagerScope?: string; 
  public get topologyManagerScope() {
    return this.getStringAttribute('topology_manager_scope');
  }
  public set topologyManagerScope(value: string) {
    this._topologyManagerScope = value;
  }
  public resetTopologyManagerScope() {
    this._topologyManagerScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyManagerScopeInput() {
    return this._topologyManagerScope;
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfiguration {
  /**
  * Boot defines the boot settings for bottlerocket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#boot DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#boot}
  */
  readonly boot?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBoot;
  /**
  * Kernel defines the kernel settings for bottlerocket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#kernel DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#kernel}
  */
  readonly kernel?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernel;
  /**
  * Kubernetes defines the Kubernetes settings on the host OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#kubernetes DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetes;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBootToTerraform(struct!.boot),
    kernel: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernelToTerraform(struct!.kernel),
    kubernetes: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetesToTerraform(struct!.kubernetes),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot: {
      value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBootToHclTerraform(struct!.boot),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBoot",
    },
    kernel: {
      value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernelToHclTerraform(struct!.kernel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernel",
    },
    kubernetes: {
      value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boot = this._boot?.internalValue;
    }
    if (this._kernel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boot.internalValue = undefined;
      this._kernel.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boot.internalValue = value.boot;
      this._kernel.internalValue = value.kernel;
      this._kubernetes.internalValue = value.kubernetes;
    }
  }

  // boot - computed: false, optional: true, required: false
  private _boot = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBootOutputReference(this, "boot");
  public get boot() {
    return this._boot;
  }
  public putBoot(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationBoot) {
    this._boot.internalValue = value;
  }
  public resetBoot() {
    this._boot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootInput() {
    return this._boot.internalValue;
  }

  // kernel - computed: false, optional: true, required: false
  private _kernel = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernelOutputReference(this, "kernel");
  public get kernel() {
    return this._kernel;
  }
  public putKernel(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKernel) {
    this._kernel.internalValue = value;
  }
  public resetKernel() {
    this._kernel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundles {
  /**
  * Data defines the cert bundle data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#data DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#data}
  */
  readonly data: string;
  /**
  * Name defines the cert bundle name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._name = value.name;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesOutputReference {
    return new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfiguration {
  /**
  * Servers defines a list of NTP servers to be configured on the host OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#servers DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#servers}
  */
  readonly servers: string[];
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfigurationToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfigurationToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._servers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._servers = value.servers;
    }
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfiguration {
  /**
  * BottlerocketConfiguration defines the Bottlerocket configuration on the host OS. These settings only take effect when the 'osFamily' is bottlerocket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#bottlerocket_configuration DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#bottlerocket_configuration}
  */
  readonly bottlerocketConfiguration?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#cert_bundles DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#cert_bundles}
  */
  readonly certBundles?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundles[] | cdktf.IResolvable;
  /**
  * NTPConfiguration defines the NTP configuration on the host OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#ntp_configuration DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#ntp_configuration}
  */
  readonly ntpConfiguration?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfiguration;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottlerocket_configuration: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationToTerraform(struct!.bottlerocketConfiguration),
    cert_bundles: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesToTerraform, false)(struct!.certBundles),
    ntp_configuration: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfigurationToTerraform(struct!.ntpConfiguration),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bottlerocket_configuration: {
      value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationToHclTerraform(struct!.bottlerocketConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfiguration",
    },
    cert_bundles: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesToHclTerraform, false)(struct!.certBundles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesList",
    },
    ntp_configuration: {
      value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfigurationToHclTerraform(struct!.ntpConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottlerocketConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottlerocketConfiguration = this._bottlerocketConfiguration?.internalValue;
    }
    if (this._certBundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certBundles = this._certBundles?.internalValue;
    }
    if (this._ntpConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpConfiguration = this._ntpConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bottlerocketConfiguration.internalValue = undefined;
      this._certBundles.internalValue = undefined;
      this._ntpConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bottlerocketConfiguration.internalValue = value.bottlerocketConfiguration;
      this._certBundles.internalValue = value.certBundles;
      this._ntpConfiguration.internalValue = value.ntpConfiguration;
    }
  }

  // bottlerocket_configuration - computed: false, optional: true, required: false
  private _bottlerocketConfiguration = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfigurationOutputReference(this, "bottlerocket_configuration");
  public get bottlerocketConfiguration() {
    return this._bottlerocketConfiguration;
  }
  public putBottlerocketConfiguration(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationBottlerocketConfiguration) {
    this._bottlerocketConfiguration.internalValue = value;
  }
  public resetBottlerocketConfiguration() {
    this._bottlerocketConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottlerocketConfigurationInput() {
    return this._bottlerocketConfiguration.internalValue;
  }

  // cert_bundles - computed: false, optional: true, required: false
  private _certBundles = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundlesList(this, "cert_bundles", false);
  public get certBundles() {
    return this._certBundles;
  }
  public putCertBundles(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationCertBundles[] | cdktf.IResolvable) {
    this._certBundles.internalValue = value;
  }
  public resetCertBundles() {
    this._certBundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certBundlesInput() {
    return this._certBundles.internalValue;
  }

  // ntp_configuration - computed: false, optional: true, required: false
  private _ntpConfiguration = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfigurationOutputReference(this, "ntp_configuration");
  public get ntpConfiguration() {
    return this._ntpConfiguration;
  }
  public putNtpConfiguration(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationNtpConfiguration) {
    this._ntpConfiguration.internalValue = value;
  }
  public resetNtpConfiguration() {
    this._ntpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpConfigurationInput() {
    return this._ntpConfiguration.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#kind DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#ssh_authorized_keys DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys: string[];
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ssh_authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshAuthorizedKeys),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
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
    ssh_authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshAuthorizedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sshAuthorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthorizedKeys = this._sshAuthorizedKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sshAuthorizedKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sshAuthorizedKeys = value.sshAuthorizedKeys;
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

  // ssh_authorized_keys - computed: false, optional: false, required: true
  private _sshAuthorizedKeys?: string[]; 
  public get sshAuthorizedKeys() {
    return this.getListAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string[]) {
    this._sshAuthorizedKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
  }
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersOutputReference {
    return new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpec {
  /**
  * HardwareSelector models a simple key-value selector used in Tinkerbell provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#hardware_selector DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#hardware_selector}
  */
  readonly hardwareSelector: { [key: string]: string };
  /**
  * HostOSConfiguration defines the configuration settings on the host OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#host_os_configuration DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#host_os_configuration}
  */
  readonly hostOsConfiguration?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#os_family DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#os_family}
  */
  readonly osFamily: string;
  /**
  * OSImageURL can be used to override the default OS image path to pull from a local server. OSImageURL is a URL to the OS image used during provisioning. It must include the Kubernetes version(s). For example, a URL used for Kubernetes 1.27 could be http://localhost:8080/ubuntu-2204-1.27.tgz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#os_image_url DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#os_image_url}
  */
  readonly osImageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#template_ref DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#template_ref}
  */
  readonly templateRef?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#users DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest#users}
  */
  readonly users?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hardwareSelector),
    host_os_configuration: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationToTerraform(struct!.hostOsConfiguration),
    os_family: cdktf.stringToTerraform(struct!.osFamily),
    os_image_url: cdktf.stringToTerraform(struct!.osImageUrl),
    template_ref: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRefToTerraform(struct!.templateRef),
    users: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersToTerraform, false)(struct!.users),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hardwareSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host_os_configuration: {
      value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationToHclTerraform(struct!.hostOsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfiguration",
    },
    os_family: {
      value: cdktf.stringToHclTerraform(struct!.osFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_image_url: {
      value: cdktf.stringToHclTerraform(struct!.osImageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_ref: {
      value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRefToHclTerraform(struct!.templateRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRef",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareSelector = this._hardwareSelector;
    }
    if (this._hostOsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostOsConfiguration = this._hostOsConfiguration?.internalValue;
    }
    if (this._osFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.osFamily = this._osFamily;
    }
    if (this._osImageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.osImageUrl = this._osImageUrl;
    }
    if (this._templateRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardwareSelector = undefined;
      this._hostOsConfiguration.internalValue = undefined;
      this._osFamily = undefined;
      this._osImageUrl = undefined;
      this._templateRef.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardwareSelector = value.hardwareSelector;
      this._hostOsConfiguration.internalValue = value.hostOsConfiguration;
      this._osFamily = value.osFamily;
      this._osImageUrl = value.osImageUrl;
      this._templateRef.internalValue = value.templateRef;
      this._users.internalValue = value.users;
    }
  }

  // hardware_selector - computed: false, optional: false, required: true
  private _hardwareSelector?: { [key: string]: string }; 
  public get hardwareSelector() {
    return this.getStringMapAttribute('hardware_selector');
  }
  public set hardwareSelector(value: { [key: string]: string }) {
    this._hardwareSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareSelectorInput() {
    return this._hardwareSelector;
  }

  // host_os_configuration - computed: false, optional: true, required: false
  private _hostOsConfiguration = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfigurationOutputReference(this, "host_os_configuration");
  public get hostOsConfiguration() {
    return this._hostOsConfiguration;
  }
  public putHostOsConfiguration(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecHostOsConfiguration) {
    this._hostOsConfiguration.internalValue = value;
  }
  public resetHostOsConfiguration() {
    this._hostOsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOsConfigurationInput() {
    return this._hostOsConfiguration.internalValue;
  }

  // os_family - computed: false, optional: false, required: true
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // os_image_url - computed: false, optional: true, required: false
  private _osImageUrl?: string; 
  public get osImageUrl() {
    return this.getStringAttribute('os_image_url');
  }
  public set osImageUrl(value: string) {
    this._osImageUrl = value;
  }
  public resetOsImageUrl() {
    this._osImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageUrlInput() {
    return this._osImageUrl;
  }

  // template_ref - computed: false, optional: true, required: false
  private _templateRef = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRefOutputReference(this, "template_ref");
  public get templateRef() {
    return this._templateRef;
  }
  public putTemplateRef(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecTemplateRef) {
    this._templateRef.internalValue = value;
  }
  public resetTemplateRef() {
    this._templateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_tinkerbell_machine_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellMachineConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
