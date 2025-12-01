// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadata;
  /**
  * IBMPowerVSMachineSpec defines the desired state of IBMPowerVSMachine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#namespace DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImage {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRefToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRefToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRef | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetwork {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Regular expression to match resource, In case of multiple resources matches the provided regular expression the first matched resource will be selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#regex DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetworkToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetwork | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetworkToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetwork | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetwork | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpec {
  /**
  * Image is the reference to the Image from which to create the machine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#image DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#image}
  */
  readonly image?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImage;
  /**
  * ImageRef is an optional reference to a provider-specific resource that holds the details for provisioning the Image for a Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#image_ref DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#image_ref}
  */
  readonly imageRef?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRef;
  /**
  * Memory is Amount of memory allocated (in GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#memory DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#memory}
  */
  readonly memory?: string;
  /**
  * Network is the reference to the Network to use for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#network DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#network}
  */
  readonly network: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetwork;
  /**
  * ProcType is the processor type, e.g: dedicated, shared, capped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#proc_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#proc_type}
  */
  readonly procType?: string;
  /**
  * Processors is Number of processors allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#processors DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#processors}
  */
  readonly processors?: string;
  /**
  * ProviderID is the unique identifier as specified by the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#provider_id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * ServiceInstanceID is the id of the power cloud instance where the vsi instance will get deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#service_instance_id DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * SSHKey is the name of the SSH key pair provided to the vsi for authenticating users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#ssh_key DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * SysType is the System type used to host the vsi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#sys_type DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest#sys_type}
  */
  readonly sysType?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageToTerraform(struct!.image),
    image_ref: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRefToTerraform(struct!.imageRef),
    memory: cdktf.stringToTerraform(struct!.memory),
    network: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetworkToTerraform(struct!.network),
    proc_type: cdktf.stringToTerraform(struct!.procType),
    processors: cdktf.stringToTerraform(struct!.processors),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    service_instance_id: cdktf.stringToTerraform(struct!.serviceInstanceId),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    sys_type: cdktf.stringToTerraform(struct!.sysType),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImage",
    },
    image_ref: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRefToHclTerraform(struct!.imageRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRef",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetwork",
    },
    proc_type: {
      value: cdktf.stringToHclTerraform(struct!.procType),
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
    sys_type: {
      value: cdktf.stringToHclTerraform(struct!.sysType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._procType !== undefined) {
      hasAnyValues = true;
      internalValueResult.procType = this._procType;
    }
    if (this._processors !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._serviceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceId = this._serviceInstanceId;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._sysType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysType = this._sysType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image.internalValue = undefined;
      this._imageRef.internalValue = undefined;
      this._memory = undefined;
      this._network.internalValue = undefined;
      this._procType = undefined;
      this._processors = undefined;
      this._providerId = undefined;
      this._serviceInstanceId = undefined;
      this._sshKey = undefined;
      this._sysType = undefined;
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
      this._memory = value.memory;
      this._network.internalValue = value.network;
      this._procType = value.procType;
      this._processors = value.processors;
      this._providerId = value.providerId;
      this._serviceInstanceId = value.serviceInstanceId;
      this._sshKey = value.sshKey;
      this._sysType = value.sysType;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImage) {
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
  private _imageRef = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRefOutputReference(this, "image_ref");
  public get imageRef() {
    return this._imageRef;
  }
  public putImageRef(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecImageRef) {
    this._imageRef.internalValue = value;
  }
  public resetImageRef() {
    this._imageRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // network - computed: false, optional: false, required: true
  private _network = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // proc_type - computed: false, optional: true, required: false
  private _procType?: string; 
  public get procType() {
    return this.getStringAttribute('proc_type');
  }
  public set procType(value: string) {
    this._procType = value;
  }
  public resetProcType() {
    this._procType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procTypeInput() {
    return this._procType;
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

  // sys_type - computed: false, optional: true, required: false
  private _sysType?: string; 
  public get sysType() {
    return this.getStringAttribute('sys_type');
  }
  public set sysType(value: string) {
    this._sysType = value;
  }
  public resetSysType() {
    this._sysType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTypeInput() {
    return this._sysType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_ibm_power_vs_machine_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmPowerVsMachineV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
