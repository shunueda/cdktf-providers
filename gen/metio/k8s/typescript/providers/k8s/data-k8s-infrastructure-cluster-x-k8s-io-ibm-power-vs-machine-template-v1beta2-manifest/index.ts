// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadata;
  /**
  * IBMPowerVSMachineTemplateSpec defines the desired state of IBMPowerVSMachineTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#namespace DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImage {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRefToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRefToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetwork {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetworkToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetworkToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpec {
  /**
  * Image the reference to the image which is used to create the instance. supported image identifier in IBMPowerVSResourceReference are Name and ID and that can be obtained from IBM Cloud UI or IBM Cloud cli.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#image DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#image}
  */
  readonly image?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImage;
  /**
  * ImageRef is an optional reference to a provider-specific resource that holds the details for provisioning the Image for a Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#image_ref DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#image_ref}
  */
  readonly imageRef?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRef;
  /**
  * memoryGiB is the size of a virtual machine's memory, in GiB. maximum value for the MemoryGiB depends on the selected SystemType. when SystemType is set to e880 maximum MemoryGiB value is 7463 GiB. when SystemType is set to e980 maximum MemoryGiB value is 15307 GiB. when SystemType is set to s922 maximum MemoryGiB value is 942 GiB. The minimum memory is 2 GiB. When omitted, this means the user has no opinion and the platform is left to choose a reasonable default, which is subject to change over time. The current default is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#memory_gi_b DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#memory_gi_b}
  */
  readonly memoryGiB?: number;
  /**
  * Network is the reference to the Network to use for this instance. supported network identifier in IBMPowerVSResourceReference are Name, ID and RegEx and that can be obtained from IBM Cloud UI or IBM Cloud cli.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#network DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#network}
  */
  readonly network: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetwork;
  /**
  * processorType is the VM instance processor type. It must be set to one of the following values: Dedicated, Capped or Shared. Dedicated: resources are allocated for a specific client, The hypervisor makes a 1:1 binding of a partition’s processor to a physical processor core. Shared: Shared among other clients. Capped: Shared, but resources do not expand beyond those that are requested, the amount of CPU time is Capped to the value specified for the entitlement. if the processorType is selected as Dedicated, then processors value cannot be fractional. When omitted, this means that the user has no opinion and the platform is left to choose a reasonable default, which is subject to change over time. The current default is Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#processor_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#processor_type}
  */
  readonly processorType?: string;
  /**
  * processors is the number of virtual processors in a virtual machine. when the processorType is selected as Dedicated the processors value cannot be fractional. maximum value for the Processors depends on the selected SystemType. when SystemType is set to e880 or e980 maximum Processors value is 143. when SystemType is set to s922 maximum Processors value is 15. minimum value for Processors depends on the selected ProcessorType. when ProcessorType is set as Shared or Capped, The minimum processors is 0.25. when ProcessorType is set as Dedicated, The minimum processors is 1. When omitted, this means that the user has no opinion and the platform is left to choose a reasonable default, which is subject to change over time. The default is set based on the selected ProcessorType. when ProcessorType selected as Dedicated, the default is set to 1. when ProcessorType selected as Shared or Capped, the default is set to 0.25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#processors DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#processors}
  */
  readonly processors?: string;
  /**
  * ProviderID is the unique identifier as specified by the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#provider_id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * serviceInstance is the reference to the Power VS workspace on which the server instance(VM) will be created. Power VS workspace is a container for all Power VS instances at a specific geographic region. serviceInstance can be created via IBM Cloud catalog or CLI. supported serviceInstance identifier in PowerVSResource are Name and ID and that can be obtained from IBM Cloud UI or IBM Cloud cli. More detail about Power VS service instance. https://cloud.ibm.com/docs/power-iaas?topic=power-iaas-creating-power-virtual-server when omitted system will dynamically create the service instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#service_instance DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#service_instance}
  */
  readonly serviceInstance?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance;
  /**
  * ServiceInstanceID is the id of the power cloud instance where the vsi instance will get deployed. Deprecated: use ServiceInstance instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#service_instance_id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * SSHKey is the name of the SSH key pair provided to the vsi for authenticating users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#ssh_key DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * systemType is the System type used to host the instance. systemType determines the number of cores and memory that is available. Few of the supported SystemTypes are s922,e880,e980. e880 systemType available only in Dallas Datacenters. e980 systemType available in Datacenters except Dallas and Washington. When omitted, this means that the user has no opinion and the platform is left to choose a reasonable default, which is subject to change over time. The current default is s922 which is generally available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#system_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#system_type}
  */
  readonly systemType?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageToTerraform(struct!.image),
    image_ref: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRefToTerraform(struct!.imageRef),
    memory_gi_b: cdktf.numberToTerraform(struct!.memoryGiB),
    network: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetworkToTerraform(struct!.network),
    processor_type: cdktf.stringToTerraform(struct!.processorType),
    processors: cdktf.stringToTerraform(struct!.processors),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    service_instance: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceToTerraform(struct!.serviceInstance),
    service_instance_id: cdktf.stringToTerraform(struct!.serviceInstanceId),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    system_type: cdktf.stringToTerraform(struct!.systemType),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImage",
    },
    image_ref: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRefToHclTerraform(struct!.imageRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRef",
    },
    memory_gi_b: {
      value: cdktf.numberToHclTerraform(struct!.memoryGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetwork",
    },
    processor_type: {
      value: cdktf.stringToHclTerraform(struct!.processorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processors: {
      value: cdktf.stringToHclTerraform(struct!.processors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_instance: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceToHclTerraform(struct!.serviceInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance",
    },
    service_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstanceId),
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
    system_type: {
      value: cdktf.stringToHclTerraform(struct!.systemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._imageRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRef = this._imageRef?.internalValue;
    }
    if (this._memoryGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGiB = this._memoryGiB;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._processorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorType = this._processorType;
    }
    if (this._processors !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._serviceInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstance = this._serviceInstance?.internalValue;
    }
    if (this._serviceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceId = this._serviceInstanceId;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._systemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemType = this._systemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image.internalValue = undefined;
      this._imageRef.internalValue = undefined;
      this._memoryGiB = undefined;
      this._network.internalValue = undefined;
      this._processorType = undefined;
      this._processors = undefined;
      this._providerId = undefined;
      this._serviceInstance.internalValue = undefined;
      this._serviceInstanceId = undefined;
      this._sshKey = undefined;
      this._systemType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image.internalValue = value.image;
      this._imageRef.internalValue = value.imageRef;
      this._memoryGiB = value.memoryGiB;
      this._network.internalValue = value.network;
      this._processorType = value.processorType;
      this._processors = value.processors;
      this._providerId = value.providerId;
      this._serviceInstance.internalValue = value.serviceInstance;
      this._serviceInstanceId = value.serviceInstanceId;
      this._sshKey = value.sshKey;
      this._systemType = value.systemType;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // image_ref - computed: false, optional: true, required: false
  private _imageRef = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRefOutputReference(this, "image_ref");
  public get imageRef() {
    return this._imageRef;
  }
  public putImageRef(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecImageRef) {
    this._imageRef.internalValue = value;
  }
  public resetImageRef() {
    this._imageRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef.internalValue;
  }

  // memory_gi_b - computed: false, optional: true, required: false
  private _memoryGiB?: number; 
  public get memoryGiB() {
    return this.getNumberAttribute('memory_gi_b');
  }
  public set memoryGiB(value: number) {
    this._memoryGiB = value;
  }
  public resetMemoryGiB() {
    this._memoryGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGiBInput() {
    return this._memoryGiB;
  }

  // network - computed: false, optional: false, required: true
  private _network = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // processor_type - computed: false, optional: true, required: false
  private _processorType?: string; 
  public get processorType() {
    return this.getStringAttribute('processor_type');
  }
  public set processorType(value: string) {
    this._processorType = value;
  }
  public resetProcessorType() {
    this._processorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorTypeInput() {
    return this._processorType;
  }

  // processors - computed: false, optional: true, required: false
  private _processors?: string; 
  public get processors() {
    return this.getStringAttribute('processors');
  }
  public set processors(value: string) {
    this._processors = value;
  }
  public resetProcessors() {
    this._processors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors;
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

  // service_instance - computed: false, optional: true, required: false
  private _serviceInstance = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstanceOutputReference(this, "service_instance");
  public get serviceInstance() {
    return this._serviceInstance;
  }
  public putServiceInstance(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecServiceInstance) {
    this._serviceInstance.internalValue = value;
  }
  public resetServiceInstance() {
    this._serviceInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceInput() {
    return this._serviceInstance.internalValue;
  }

  // service_instance_id - computed: false, optional: false, required: true
  private _serviceInstanceId?: string; 
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }
  public set serviceInstanceId(value: string) {
    this._serviceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdInput() {
    return this._serviceInstanceId;
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

  // system_type - computed: false, optional: true, required: false
  private _systemType?: string; 
  public get systemType() {
    return this.getStringAttribute('system_type');
  }
  public set systemType(value: string) {
    this._systemType = value;
  }
  public resetSystemType() {
    this._systemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTypeInput() {
    return this._systemType;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplate {
  /**
  * IBMPowerVSMachineSpec defines the desired state of IBMPowerVSMachine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#spec}
  */
  readonly spec: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpec;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpec {
  /**
  * IBMPowerVSMachineTemplateResource holds the IBMPowerVSMachine spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#template DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest#template}
  */
  readonly template: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplate;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_template_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineTemplateV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
