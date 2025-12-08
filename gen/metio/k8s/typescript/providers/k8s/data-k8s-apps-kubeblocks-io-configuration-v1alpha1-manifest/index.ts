// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#metadata DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadata;
  /**
  * ConfigurationSpec defines the desired state of a Configuration resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#spec DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpec;
}
export interface DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#annotations DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#labels DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#name DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParams {
  /**
  * Holds the configuration keys and values. This field is a workaround for issues found in kubebuilder and code-generator. Refer to https://github.com/kubernetes-sigs/kubebuilder/issues/528 and https://github.com/kubernetes/code-generator/issues/50 for more details. Represents the content of the configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#content DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Represents the updated parameters for a single configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#parameters DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParamsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
  }
}


export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParamsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._parameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._parameters = value.parameters;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpec {
  /**
  * Specifies the namespace of the referenced configuration template ConfigMap object. An empty namespace is equivalent to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Defines the strategy for merging externally imported templates into component templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#policy DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * Specifies the name of the referenced configuration template ConfigMap object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#template_ref DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#template_ref}
  */
  readonly templateRef: string;
}

export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpecToTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpec | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpec | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpec | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpec {
  /**
  * Specifies the containers to inject the ConfigMap parameters as environment variables. This is useful when application images accept parameters through environment variables and generate the final configuration file in the startup script based on these variables. This field allows users to specify a list of container names, and KubeBlocks will inject the environment variables converted from the ConfigMap into these designated containers. This provides a flexible way to pass the configuration items from the ConfigMap to the container without modifying the image. Deprecated: 'asEnvFrom' has been deprecated since 0.9.0 and will be removed in 0.10.0. Use 'injectEnvTo' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#as_env_from DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#as_env_from}
  */
  readonly asEnvFrom?: string[];
  /**
  * Whether to store the final rendered parameters as a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#as_secret DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#as_secret}
  */
  readonly asSecret?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the referenced configuration constraints object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#constraint_ref DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#constraint_ref}
  */
  readonly constraintRef?: string;
  /**
  * The operator attempts to set default file permissions for scripts (0555) and configurations (0444). However, certain database engines may require different file permissions. You can specify the desired file permissions here. Must be specified as an octal value between 0000 and 0777 (inclusive), or as a decimal value between 0 and 511 (inclusive). YAML supports both octal and decimal values for file permissions. Please note that this setting only affects the permissions of the files themselves. Directories within the specified path are not impacted by this setting. It's important to be aware that this setting might conflict with other options that influence the file mode, such as fsGroup. In such cases, the resulting file mode may have additional bits set. Refers to documents of k8s.ConfigMapVolumeSource.defaultMode for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#default_mode DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Specifies the containers to inject the ConfigMap parameters as environment variables. This is useful when application images accept parameters through environment variables and generate the final configuration file in the startup script based on these variables. This field allows users to specify a list of container names, and KubeBlocks will inject the environment variables converted from the ConfigMap into these designated containers. This provides a flexible way to pass the configuration items from the ConfigMap to the container without modifying the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#inject_env_to DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#inject_env_to}
  */
  readonly injectEnvTo?: string[];
  /**
  * Specifies the configuration files within the ConfigMap that support dynamic updates. A configuration template (provided in the form of a ConfigMap) may contain templates for multiple configuration files. Each configuration file corresponds to a key in the ConfigMap. Some of these configuration files may support dynamic modification and reloading without requiring a pod restart. If empty or omitted, all configuration files in the ConfigMap are assumed to support dynamic updates, and ConfigConstraint applies to all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#keys DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#keys}
  */
  readonly keys?: string[];
  /**
  * Specifies the secondary rendered config spec for pod-specific customization. The template is rendered inside the pod (by the 'config-manager' sidecar container) and merged with the main template's render result to generate the final configuration file. This field is intended to handle scenarios where different pods within the same Component have varying configurations. It allows for pod-specific customization of the configuration. Note: This field will be deprecated in future versions, and the functionality will be moved to 'cluster.spec.componentSpecs[*].instances[*]'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#legacy_rendered_config_spec DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#legacy_rendered_config_spec}
  */
  readonly legacyRenderedConfigSpec?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpec;
  /**
  * Specifies the name of the configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#name DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the namespace of the referenced configuration template ConfigMap object. An empty namespace is equivalent to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies whether the configuration needs to be re-rendered after v-scale or h-scale operations to reflect changes. In some scenarios, the configuration may need to be updated to reflect the changes in resource allocation or cluster topology. Examples: - Redis: adjust maxmemory after v-scale operation. - MySQL: increase max connections after v-scale operation. - Zookeeper: update zoo.cfg with new node addresses after h-scale operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#re_render_resource_types DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#re_render_resource_types}
  */
  readonly reRenderResourceTypes?: string[];
  /**
  * Specifies the name of the referenced configuration template ConfigMap object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#template_ref DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#template_ref}
  */
  readonly templateRef?: string;
  /**
  * Refers to the volume name of PodTemplate. The configuration file produced through the configuration template will be mounted to the corresponding volume. Must be a DNS_LABEL name. The volume name must be defined in podSpec.containers[*].volumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#volume_name DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecToTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_env_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.asEnvFrom),
    as_secret: cdktf.booleanToTerraform(struct!.asSecret),
    constraint_ref: cdktf.stringToTerraform(struct!.constraintRef),
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    inject_env_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.injectEnvTo),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    legacy_rendered_config_spec: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpecToTerraform(struct!.legacyRenderedConfigSpec),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    re_render_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reRenderResourceTypes),
    template_ref: cdktf.stringToTerraform(struct!.templateRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpec | cdktf.IResolvable): any {
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
    as_secret: {
      value: cdktf.booleanToHclTerraform(struct!.asSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpecToHclTerraform(struct!.legacyRenderedConfigSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpec",
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

export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asEnvFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.asEnvFrom = this._asEnvFrom;
    }
    if (this._asSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSecret = this._asSecret;
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

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asEnvFrom = undefined;
      this._asSecret = undefined;
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
      this._asSecret = value.asSecret;
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

  // as_secret - computed: false, optional: true, required: false
  private _asSecret?: boolean | cdktf.IResolvable; 
  public get asSecret() {
    return this.getBooleanAttribute('as_secret');
  }
  public set asSecret(value: boolean | cdktf.IResolvable) {
    this._asSecret = value;
  }
  public resetAsSecret() {
    this._asSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSecretInput() {
    return this._asSecret;
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
  private _legacyRenderedConfigSpec = new DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpecOutputReference(this, "legacy_rendered_config_spec");
  public get legacyRenderedConfigSpec() {
    return this._legacyRenderedConfigSpec;
  }
  public putLegacyRenderedConfigSpec(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecLegacyRenderedConfigSpec) {
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

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRef {
  /**
  * Specifies the namespace of the referenced configuration template ConfigMap object. An empty namespace is equivalent to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Defines the strategy for merging externally imported templates into component templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#policy DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * Specifies the name of the referenced configuration template ConfigMap object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#template_ref DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#template_ref}
  */
  readonly templateRef: string;
}

export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRefToTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetails {
  /**
  * Specifies the user-defined configuration parameters. When provided, the parameter values in 'configFileParams' override the default configuration parameters. This allows users to override the default configuration according to their specific needs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#config_file_params DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#config_file_params}
  */
  readonly configFileParams?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParams;
  /**
  * Specifies the name of the configuration template (a ConfigMap), ConfigConstraint, and other miscellaneous options. The configuration template is a ConfigMap that contains multiple configuration files. Each configuration file is stored as a key-value pair within the ConfigMap. ConfigConstraint allows defining constraints and validation rules for configuration parameters. It ensures that the configuration adheres to certain requirements and limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#config_spec DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#config_spec}
  */
  readonly configSpec?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpec;
  /**
  * Specifies the user-defined configuration template. When provided, the 'importTemplateRef' overrides the default configuration template specified in 'configSpec.templateRef'. This allows users to customize the configuration template according to their specific requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#import_template_ref DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#import_template_ref}
  */
  readonly importTemplateRef?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRef;
  /**
  * Defines the unique identifier of the configuration template. It must be a string of maximum 63 characters, and can only include lowercase alphanumeric characters, hyphens, and periods. The name must start and end with an alphanumeric character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#name DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * External controllers can trigger a configuration rerender by modifying this field. Note: Currently, the 'payload' field is opaque and its content is not interpreted by the system. Modifying this field will cause a rerender, regardless of the specific content of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#payload DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#payload}
  */
  readonly payload?: { [key: string]: string };
  /**
  * Deprecated: No longer used. Please use 'Payload' instead. Previously represented the version of the configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#version DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsToTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file_params: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParamsToTerraform(struct!.configFileParams),
    config_spec: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecToTerraform(struct!.configSpec),
    import_template_ref: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRefToTerraform(struct!.importTemplateRef),
    name: cdktf.stringToTerraform(struct!.name),
    payload: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.payload),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file_params: {
      value: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParamsToHclTerraform(struct!.configFileParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParams",
    },
    config_spec: {
      value: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecToHclTerraform(struct!.configSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpec",
    },
    import_template_ref: {
      value: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRefToHclTerraform(struct!.importTemplateRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRef",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.payload),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFileParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFileParams = this._configFileParams?.internalValue;
    }
    if (this._configSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSpec = this._configSpec?.internalValue;
    }
    if (this._importTemplateRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importTemplateRef = this._importTemplateRef?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFileParams.internalValue = undefined;
      this._configSpec.internalValue = undefined;
      this._importTemplateRef.internalValue = undefined;
      this._name = undefined;
      this._payload = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configFileParams.internalValue = value.configFileParams;
      this._configSpec.internalValue = value.configSpec;
      this._importTemplateRef.internalValue = value.importTemplateRef;
      this._name = value.name;
      this._payload = value.payload;
      this._version = value.version;
    }
  }

  // config_file_params - computed: false, optional: true, required: false
  private _configFileParams = new DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParamsOutputReference(this, "config_file_params");
  public get configFileParams() {
    return this._configFileParams;
  }
  public putConfigFileParams(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigFileParams) {
    this._configFileParams.internalValue = value;
  }
  public resetConfigFileParams() {
    this._configFileParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileParamsInput() {
    return this._configFileParams.internalValue;
  }

  // config_spec - computed: false, optional: true, required: false
  private _configSpec = new DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpecOutputReference(this, "config_spec");
  public get configSpec() {
    return this._configSpec;
  }
  public putConfigSpec(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsConfigSpec) {
    this._configSpec.internalValue = value;
  }
  public resetConfigSpec() {
    this._configSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSpecInput() {
    return this._configSpec.internalValue;
  }

  // import_template_ref - computed: false, optional: true, required: false
  private _importTemplateRef = new DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRefOutputReference(this, "import_template_ref");
  public get importTemplateRef() {
    return this._importTemplateRef;
  }
  public putImportTemplateRef(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsImportTemplateRef) {
    this._importTemplateRef.internalValue = value;
  }
  public resetImportTemplateRef() {
    this._importTemplateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTemplateRefInput() {
    return this._importTemplateRef.internalValue;
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

  // payload - computed: false, optional: true, required: false
  private _payload?: { [key: string]: string }; 
  public get payload() {
    return this.getStringMapAttribute('payload');
  }
  public set payload(value: { [key: string]: string }) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
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

export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetails[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsOutputReference {
    return new DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpec {
  /**
  * Specifies the name of the Cluster that this configuration is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#cluster_ref DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#cluster_ref}
  */
  readonly clusterRef: string;
  /**
  * Represents the name of the Component that this configuration pertains to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#component_name DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#component_name}
  */
  readonly componentName: string;
  /**
  * ConfigItemDetails is an array of ConfigurationItemDetail objects. Each ConfigurationItemDetail corresponds to a configuration template, which is a ConfigMap that contains multiple configuration files. Each configuration file is stored as a key-value pair within the ConfigMap. The ConfigurationItemDetail includes information such as: - The configuration template (a ConfigMap) - The corresponding ConfigConstraint (constraints and validation rules for the configuration) - Volume mounts (for mounting the configuration files)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#config_item_details DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest#config_item_details}
  */
  readonly configItemDetails?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetails[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ref: cdktf.stringToTerraform(struct!.clusterRef),
    component_name: cdktf.stringToTerraform(struct!.componentName),
    config_item_details: cdktf.listMapper(dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsToTerraform, false)(struct!.configItemDetails),
  }
}


export function dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ref: {
      value: cdktf.stringToHclTerraform(struct!.clusterRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_name: {
      value: cdktf.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_item_details: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsToHclTerraform, false)(struct!.configItemDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRef = this._clusterRef;
    }
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._configItemDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItemDetails = this._configItemDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRef = undefined;
      this._componentName = undefined;
      this._configItemDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRef = value.clusterRef;
      this._componentName = value.componentName;
      this._configItemDetails.internalValue = value.configItemDetails;
    }
  }

  // cluster_ref - computed: false, optional: false, required: true
  private _clusterRef?: string; 
  public get clusterRef() {
    return this.getStringAttribute('cluster_ref');
  }
  public set clusterRef(value: string) {
    this._clusterRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef;
  }

  // component_name - computed: false, optional: false, required: true
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // config_item_details - computed: false, optional: true, required: false
  private _configItemDetails = new DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetailsList(this, "config_item_details", false);
  public get configItemDetails() {
    return this._configItemDetails;
  }
  public putConfigItemDetails(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecConfigItemDetails[] | cdktf.IResolvable) {
    this._configItemDetails.internalValue = value;
  }
  public resetConfigItemDetails() {
    this._configItemDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemDetailsInput() {
    return this._configItemDetails.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest k8s_apps_kubeblocks_io_configuration_v1alpha1_manifest}
*/
export class DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeblocks_io_configuration_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeblocksIoConfigurationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeblocks_io_configuration_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_configuration_v1alpha1_manifest k8s_apps_kubeblocks_io_configuration_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeblocks_io_configuration_v1alpha1_manifest',
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
  private _metadata = new DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoConfigurationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
