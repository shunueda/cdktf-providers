// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#metadata DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadata;
  /**
  * ClusterVersionSpec defines the desired state of ClusterVersion. Deprecated since v0.9. This struct is maintained for backward compatibility and its use is discouraged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#spec DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpec;
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#annotations DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#labels DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpec {
  /**
  * Specifies the namespace of the referenced configuration template ConfigMap object. An empty namespace is equivalent to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Defines the strategy for merging externally imported templates into component templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#policy DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * Specifies the name of the referenced configuration template ConfigMap object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#template_ref DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#template_ref}
  */
  readonly templateRef: string;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    policy: cdktf.stringToTerraform(struct!.policy),
    template_ref: cdktf.stringToTerraform(struct!.templateRef),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    template_ref: {
      value: cdktf.stringToHclTerraform(struct!.templateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._templateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._policy = undefined;
      this._templateRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._policy = value.policy;
      this._templateRef = value.templateRef;
    }
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

  // policy - computed: false, optional: true, required: false
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

  // template_ref - computed: false, optional: false, required: true
  private _templateRef?: string; 
  public get templateRef() {
    return this.getStringAttribute('template_ref');
  }
  public set templateRef(value: string) {
    this._templateRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef;
  }
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecs {
  /**
  * Specifies the containers to inject the ConfigMap parameters as environment variables. This is useful when application images accept parameters through environment variables and generate the final configuration file in the startup script based on these variables. This field allows users to specify a list of container names, and KubeBlocks will inject the environment variables converted from the ConfigMap into these designated containers. This provides a flexible way to pass the configuration items from the ConfigMap to the container without modifying the image. Deprecated: 'asEnvFrom' has been deprecated since 0.9.0 and will be removed in 0.10.0. Use 'injectEnvTo' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#as_env_from DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#as_env_from}
  */
  readonly asEnvFrom?: string[];
  /**
  * Specifies the name of the referenced configuration constraints object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#constraint_ref DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#constraint_ref}
  */
  readonly constraintRef?: string;
  /**
  * The operator attempts to set default file permissions for scripts (0555) and configurations (0444). However, certain database engines may require different file permissions. You can specify the desired file permissions here. Must be specified as an octal value between 0000 and 0777 (inclusive), or as a decimal value between 0 and 511 (inclusive). YAML supports both octal and decimal values for file permissions. Please note that this setting only affects the permissions of the files themselves. Directories within the specified path are not impacted by this setting. It's important to be aware that this setting might conflict with other options that influence the file mode, such as fsGroup. In such cases, the resulting file mode may have additional bits set. Refers to documents of k8s.ConfigMapVolumeSource.defaultMode for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#default_mode DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Specifies the containers to inject the ConfigMap parameters as environment variables. This is useful when application images accept parameters through environment variables and generate the final configuration file in the startup script based on these variables. This field allows users to specify a list of container names, and KubeBlocks will inject the environment variables converted from the ConfigMap into these designated containers. This provides a flexible way to pass the configuration items from the ConfigMap to the container without modifying the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#inject_env_to DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#inject_env_to}
  */
  readonly injectEnvTo?: string[];
  /**
  * Specifies the configuration files within the ConfigMap that support dynamic updates. A configuration template (provided in the form of a ConfigMap) may contain templates for multiple configuration files. Each configuration file corresponds to a key in the ConfigMap. Some of these configuration files may support dynamic modification and reloading without requiring a pod restart. If empty or omitted, all configuration files in the ConfigMap are assumed to support dynamic updates, and ConfigConstraint applies to all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#keys DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#keys}
  */
  readonly keys?: string[];
  /**
  * Specifies the secondary rendered config spec for pod-specific customization. The template is rendered inside the pod (by the 'config-manager' sidecar container) and merged with the main template's render result to generate the final configuration file. This field is intended to handle scenarios where different pods within the same Component have varying configurations. It allows for pod-specific customization of the configuration. Note: This field will be deprecated in future versions, and the functionality will be moved to 'cluster.spec.componentSpecs[*].instances[*]'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#legacy_rendered_config_spec DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#legacy_rendered_config_spec}
  */
  readonly legacyRenderedConfigSpec?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpec;
  /**
  * Specifies the name of the configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the namespace of the referenced configuration template ConfigMap object. An empty namespace is equivalent to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies whether the configuration needs to be re-rendered after v-scale or h-scale operations to reflect changes. In some scenarios, the configuration may need to be updated to reflect the changes in resource allocation or cluster topology. Examples: - Redis: adjust maxmemory after v-scale operation. - MySQL: increase max connections after v-scale operation. - Zookeeper: update zoo.cfg with new node addresses after h-scale operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#re_render_resource_types DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#re_render_resource_types}
  */
  readonly reRenderResourceTypes?: string[];
  /**
  * Specifies the name of the referenced configuration template ConfigMap object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#template_ref DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#template_ref}
  */
  readonly templateRef?: string;
  /**
  * Refers to the volume name of PodTemplate. The configuration file produced through the configuration template will be mounted to the corresponding volume. Must be a DNS_LABEL name. The volume name must be defined in podSpec.containers[*].volumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#volume_name DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#volume_name}
  */
  readonly volumeName: string;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_env_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.asEnvFrom),
    constraint_ref: cdktf.stringToTerraform(struct!.constraintRef),
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    inject_env_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.injectEnvTo),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    legacy_rendered_config_spec: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpecToTerraform(struct!.legacyRenderedConfigSpec),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    re_render_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reRenderResourceTypes),
    template_ref: cdktf.stringToTerraform(struct!.templateRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_env_from: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.asEnvFrom),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    constraint_ref: {
      value: cdktf.stringToHclTerraform(struct!.constraintRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inject_env_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.injectEnvTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    legacy_rendered_config_spec: {
      value: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpecToHclTerraform(struct!.legacyRenderedConfigSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpec",
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
    re_render_resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reRenderResourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    template_ref: {
      value: cdktf.stringToHclTerraform(struct!.templateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asEnvFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.asEnvFrom = this._asEnvFrom;
    }
    if (this._constraintRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintRef = this._constraintRef;
    }
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._injectEnvTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectEnvTo = this._injectEnvTo;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._legacyRenderedConfigSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyRenderedConfigSpec = this._legacyRenderedConfigSpec?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._reRenderResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.reRenderResourceTypes = this._reRenderResourceTypes;
    }
    if (this._templateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asEnvFrom = undefined;
      this._constraintRef = undefined;
      this._defaultMode = undefined;
      this._injectEnvTo = undefined;
      this._keys = undefined;
      this._legacyRenderedConfigSpec.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._reRenderResourceTypes = undefined;
      this._templateRef = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asEnvFrom = value.asEnvFrom;
      this._constraintRef = value.constraintRef;
      this._defaultMode = value.defaultMode;
      this._injectEnvTo = value.injectEnvTo;
      this._keys = value.keys;
      this._legacyRenderedConfigSpec.internalValue = value.legacyRenderedConfigSpec;
      this._name = value.name;
      this._namespace = value.namespace;
      this._reRenderResourceTypes = value.reRenderResourceTypes;
      this._templateRef = value.templateRef;
      this._volumeName = value.volumeName;
    }
  }

  // as_env_from - computed: false, optional: true, required: false
  private _asEnvFrom?: string[]; 
  public get asEnvFrom() {
    return this.getListAttribute('as_env_from');
  }
  public set asEnvFrom(value: string[]) {
    this._asEnvFrom = value;
  }
  public resetAsEnvFrom() {
    this._asEnvFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asEnvFromInput() {
    return this._asEnvFrom;
  }

  // constraint_ref - computed: false, optional: true, required: false
  private _constraintRef?: string; 
  public get constraintRef() {
    return this.getStringAttribute('constraint_ref');
  }
  public set constraintRef(value: string) {
    this._constraintRef = value;
  }
  public resetConstraintRef() {
    this._constraintRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintRefInput() {
    return this._constraintRef;
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // inject_env_to - computed: false, optional: true, required: false
  private _injectEnvTo?: string[]; 
  public get injectEnvTo() {
    return this.getListAttribute('inject_env_to');
  }
  public set injectEnvTo(value: string[]) {
    this._injectEnvTo = value;
  }
  public resetInjectEnvTo() {
    this._injectEnvTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectEnvToInput() {
    return this._injectEnvTo;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // legacy_rendered_config_spec - computed: false, optional: true, required: false
  private _legacyRenderedConfigSpec = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpecOutputReference(this, "legacy_rendered_config_spec");
  public get legacyRenderedConfigSpec() {
    return this._legacyRenderedConfigSpec;
  }
  public putLegacyRenderedConfigSpec(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsLegacyRenderedConfigSpec) {
    this._legacyRenderedConfigSpec.internalValue = value;
  }
  public resetLegacyRenderedConfigSpec() {
    this._legacyRenderedConfigSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyRenderedConfigSpecInput() {
    return this._legacyRenderedConfigSpec.internalValue;
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

  // re_render_resource_types - computed: false, optional: true, required: false
  private _reRenderResourceTypes?: string[]; 
  public get reRenderResourceTypes() {
    return this.getListAttribute('re_render_resource_types');
  }
  public set reRenderResourceTypes(value: string[]) {
    this._reRenderResourceTypes = value;
  }
  public resetReRenderResourceTypes() {
    this._reRenderResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reRenderResourceTypesInput() {
    return this._reRenderResourceTypes;
  }

  // template_ref - computed: false, optional: true, required: false
  private _templateRef?: string; 
  public get templateRef() {
    return this.getStringAttribute('template_ref');
  }
  public set templateRef(value: string) {
    this._templateRef = value;
  }
  public resetTemplateRef() {
    this._templateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfig {
  /**
  * A list of environment variables that will be injected into the command execution context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#env DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Specifies the image used to execute the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#image DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#image}
  */
  readonly image: string;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfigToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpec {
  /**
  * Represents the configuration for the command executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#cmd_executor_config DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#cmd_executor_config}
  */
  readonly cmdExecutorConfig: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfig;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd_executor_config: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfigToTerraform(struct!.cmdExecutorConfig),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd_executor_config: {
      value: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfigToHclTerraform(struct!.cmdExecutorConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmdExecutorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdExecutorConfig = this._cmdExecutorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmdExecutorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmdExecutorConfig.internalValue = value.cmdExecutorConfig;
    }
  }

  // cmd_executor_config - computed: false, optional: false, required: true
  private _cmdExecutorConfig = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfigOutputReference(this, "cmd_executor_config");
  public get cmdExecutorConfig() {
    return this._cmdExecutorConfig;
  }
  public putCmdExecutorConfig(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecCmdExecutorConfig) {
    this._cmdExecutorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdExecutorConfigInput() {
    return this._cmdExecutorConfig.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfig {
  /**
  * A list of environment variables that will be injected into the command execution context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#env DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Specifies the image used to execute the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#image DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#image}
  */
  readonly image: string;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfigToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpec {
  /**
  * Configures the method for obtaining the client SDK and executing statements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#cmd_executor_config DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#cmd_executor_config}
  */
  readonly cmdExecutorConfig: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfig;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd_executor_config: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfigToTerraform(struct!.cmdExecutorConfig),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd_executor_config: {
      value: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfigToHclTerraform(struct!.cmdExecutorConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmdExecutorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdExecutorConfig = this._cmdExecutorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmdExecutorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmdExecutorConfig.internalValue = value.cmdExecutorConfig;
    }
  }

  // cmd_executor_config - computed: false, optional: false, required: true
  private _cmdExecutorConfig = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfigOutputReference(this, "cmd_executor_config");
  public get cmdExecutorConfig() {
    return this._cmdExecutorConfig;
  }
  public putCmdExecutorConfig(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecCmdExecutorConfig) {
    this._cmdExecutorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdExecutorConfigInput() {
    return this._cmdExecutorConfig.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContext {
  /**
  * Provides override values for ClusterDefinition.spec.componentDefs.podSpec.containers. Typically used in scenarios such as updating application container images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#containers DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#containers}
  */
  readonly containers?: { [key: string]: string };
  /**
  * Provides override values for ClusterDefinition.spec.componentDefs.podSpec.initContainers. Typically used in scenarios such as updating application container images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#init_containers DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#init_containers}
  */
  readonly initContainers?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContextToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.containers),
    init_containers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.initContainers),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContextToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.containers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    init_containers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.initContainers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._initContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers = undefined;
      this._initContainers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers = value.containers;
      this._initContainers = value.initContainers;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: { [key: string]: string }; 
  public get containers() {
    return this.getStringMapAttribute('containers');
  }
  public set containers(value: { [key: string]: string }) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers?: { [key: string]: string }; 
  public get initContainers() {
    return this.getStringMapAttribute('init_containers');
  }
  public set initContainers(value: { [key: string]: string }) {
    this._initContainers = value;
  }
  public resetInitContainers() {
    this._initContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers;
  }
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersions {
  /**
  * Specifies a reference to one of the cluster component definition names in the ClusterDefinition API (spec.componentDefs.name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#component_def_ref DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#component_def_ref}
  */
  readonly componentDefRef: string;
  /**
  * Defines a configuration extension mechanism to handle configuration differences between versions. The configTemplateRefs field, in conjunction with the configTemplateRefs in the ClusterDefinition, determines the final configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#config_specs DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#config_specs}
  */
  readonly configSpecs?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecs[] | cdktf.IResolvable;
  /**
  * Defines the images for the component to perform a switchover. This overrides the image and env attributes defined in clusterDefinition.spec.componentDefs.SwitchoverSpec.CommandExecutorEnvItem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#switchover_spec DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#switchover_spec}
  */
  readonly switchoverSpec?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpec;
  /**
  * Defines the image for the component to connect to databases or engines. This overrides the 'image' and 'env' attributes defined in clusterDefinition.spec.componentDefs.systemAccountSpec.cmdExecutorConfig. To clear default environment settings, set systemAccountSpec.cmdExecutorConfig.env to an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#system_account_spec DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#system_account_spec}
  */
  readonly systemAccountSpec?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpec;
  /**
  * Defines the context for container images for component versions. This value replaces the values in clusterDefinition.spec.componentDefs.podSpec.[initContainers | containers].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#versions_context DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#versions_context}
  */
  readonly versionsContext: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContext;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_def_ref: cdktf.stringToTerraform(struct!.componentDefRef),
    config_specs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsToTerraform, false)(struct!.configSpecs),
    switchover_spec: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecToTerraform(struct!.switchoverSpec),
    system_account_spec: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecToTerraform(struct!.systemAccountSpec),
    versions_context: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContextToTerraform(struct!.versionsContext),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_def_ref: {
      value: cdktf.stringToHclTerraform(struct!.componentDefRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_specs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsToHclTerraform, false)(struct!.configSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsList",
    },
    switchover_spec: {
      value: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecToHclTerraform(struct!.switchoverSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpec",
    },
    system_account_spec: {
      value: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecToHclTerraform(struct!.systemAccountSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpec",
    },
    versions_context: {
      value: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContextToHclTerraform(struct!.versionsContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContext",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentDefRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDefRef = this._componentDefRef;
    }
    if (this._configSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSpecs = this._configSpecs?.internalValue;
    }
    if (this._switchoverSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchoverSpec = this._switchoverSpec?.internalValue;
    }
    if (this._systemAccountSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAccountSpec = this._systemAccountSpec?.internalValue;
    }
    if (this._versionsContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionsContext = this._versionsContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentDefRef = undefined;
      this._configSpecs.internalValue = undefined;
      this._switchoverSpec.internalValue = undefined;
      this._systemAccountSpec.internalValue = undefined;
      this._versionsContext.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentDefRef = value.componentDefRef;
      this._configSpecs.internalValue = value.configSpecs;
      this._switchoverSpec.internalValue = value.switchoverSpec;
      this._systemAccountSpec.internalValue = value.systemAccountSpec;
      this._versionsContext.internalValue = value.versionsContext;
    }
  }

  // component_def_ref - computed: false, optional: false, required: true
  private _componentDefRef?: string; 
  public get componentDefRef() {
    return this.getStringAttribute('component_def_ref');
  }
  public set componentDefRef(value: string) {
    this._componentDefRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefRefInput() {
    return this._componentDefRef;
  }

  // config_specs - computed: false, optional: true, required: false
  private _configSpecs = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecsList(this, "config_specs", false);
  public get configSpecs() {
    return this._configSpecs;
  }
  public putConfigSpecs(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsConfigSpecs[] | cdktf.IResolvable) {
    this._configSpecs.internalValue = value;
  }
  public resetConfigSpecs() {
    this._configSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSpecsInput() {
    return this._configSpecs.internalValue;
  }

  // switchover_spec - computed: false, optional: true, required: false
  private _switchoverSpec = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpecOutputReference(this, "switchover_spec");
  public get switchoverSpec() {
    return this._switchoverSpec;
  }
  public putSwitchoverSpec(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSwitchoverSpec) {
    this._switchoverSpec.internalValue = value;
  }
  public resetSwitchoverSpec() {
    this._switchoverSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchoverSpecInput() {
    return this._switchoverSpec.internalValue;
  }

  // system_account_spec - computed: false, optional: true, required: false
  private _systemAccountSpec = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpecOutputReference(this, "system_account_spec");
  public get systemAccountSpec() {
    return this._systemAccountSpec;
  }
  public putSystemAccountSpec(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsSystemAccountSpec) {
    this._systemAccountSpec.internalValue = value;
  }
  public resetSystemAccountSpec() {
    this._systemAccountSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAccountSpecInput() {
    return this._systemAccountSpec.internalValue;
  }

  // versions_context - computed: false, optional: false, required: true
  private _versionsContext = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContextOutputReference(this, "versions_context");
  public get versionsContext() {
    return this._versionsContext;
  }
  public putVersionsContext(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsVersionsContext) {
    this._versionsContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsContextInput() {
    return this._versionsContext.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpec {
  /**
  * Specifies a reference to the ClusterDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#cluster_definition_ref DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#cluster_definition_ref}
  */
  readonly clusterDefinitionRef: string;
  /**
  * Contains a list of versioning contexts for the components' containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#component_versions DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest#component_versions}
  */
  readonly componentVersions: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersions[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_definition_ref: cdktf.stringToTerraform(struct!.clusterDefinitionRef),
    component_versions: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsToTerraform, false)(struct!.componentVersions),
  }
}


export function dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_definition_ref: {
      value: cdktf.stringToHclTerraform(struct!.clusterDefinitionRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_versions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsToHclTerraform, false)(struct!.componentVersions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDefinitionRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDefinitionRef = this._clusterDefinitionRef;
    }
    if (this._componentVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentVersions = this._componentVersions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDefinitionRef = undefined;
      this._componentVersions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDefinitionRef = value.clusterDefinitionRef;
      this._componentVersions.internalValue = value.componentVersions;
    }
  }

  // cluster_definition_ref - computed: false, optional: false, required: true
  private _clusterDefinitionRef?: string; 
  public get clusterDefinitionRef() {
    return this.getStringAttribute('cluster_definition_ref');
  }
  public set clusterDefinitionRef(value: string) {
    this._clusterDefinitionRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDefinitionRefInput() {
    return this._clusterDefinitionRef;
  }

  // component_versions - computed: false, optional: false, required: true
  private _componentVersions = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersionsList(this, "component_versions", false);
  public get componentVersions() {
    return this._componentVersions;
  }
  public putComponentVersions(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecComponentVersions[] | cdktf.IResolvable) {
    this._componentVersions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionsInput() {
    return this._componentVersions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest k8s_apps_kubeblocks_io_cluster_version_v1alpha1_manifest}
*/
export class DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeblocks_io_cluster_version_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeblocksIoClusterVersionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeblocks_io_cluster_version_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apps_kubeblocks_io_cluster_version_v1alpha1_manifest k8s_apps_kubeblocks_io_cluster_version_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeblocks_io_cluster_version_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoClusterVersionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
