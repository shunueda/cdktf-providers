// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#metadata DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadata;
  /**
  * NodeHealthCheckSpec defines the desired state of NodeHealthCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#spec DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpec;
}
export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#annotations DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#labels DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#name DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplate {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#api_version DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#field_path DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#kind DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#name DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#namespace DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#resource_version DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#uid DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplateToTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplateToHclTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediations {
  /**
  * Order defines the order for this remediation. Remediations with lower order will be used before remediations with higher order. Remediations must not have the same order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#order DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#order}
  */
  readonly order: number;
  /**
  * RemediationTemplate is a reference to a remediation template provided by a remediation provider. If a node needs remediation the controller will create an object from this template and then it should be picked up by a remediation provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#remediation_template DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#remediation_template}
  */
  readonly remediationTemplate: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplate;
  /**
  * Timeout defines how long NHC will wait for the node getting healthy before the next remediation (if any) will be used. When the last remediation times out, the overall remediation is considered as failed. As a safeguard for preventing parallel remediations, a minimum of 60s is enforced. Expects a string of decimal numbers each with optional fraction and a unit suffix, eg '300ms', '1.5h' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#timeout DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#timeout}
  */
  readonly timeout: string;
}

export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsToTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    remediation_template: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplateToTerraform(struct!.remediationTemplate),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsToHclTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remediation_template: {
      value: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplateToHclTerraform(struct!.remediationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplate",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._remediationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTemplate = this._remediationTemplate?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._remediationTemplate.internalValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._remediationTemplate.internalValue = value.remediationTemplate;
      this._timeout = value.timeout;
    }
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // remediation_template - computed: false, optional: false, required: true
  private _remediationTemplate = new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplateOutputReference(this, "remediation_template");
  public get remediationTemplate() {
    return this._remediationTemplate;
  }
  public putRemediationTemplate(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsRemediationTemplate) {
    this._remediationTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateInput() {
    return this._remediationTemplate.internalValue;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsOutputReference {
    return new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplate {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#api_version DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#field_path DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#kind DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#name DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#namespace DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#resource_version DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#uid DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplateToTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplateToHclTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#key DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#operator DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#values DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: true, required: false
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

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#match_expressions DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#match_labels DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditions {
  /**
  * Duration of the condition specified when a node is considered unhealthy. Expects a string of decimal numbers each with optional fraction and a unit suffix, eg '300ms', '1.5h' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#duration DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#duration}
  */
  readonly duration: string;
  /**
  * The condition status in the node's status to watch for. Typically False, True or Unknown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#status DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#status}
  */
  readonly status: string;
  /**
  * The condition type in the node's status to watch for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#type DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsToTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsToHclTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditions | cdktf.IResolvable): any {
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsOutputReference {
    return new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpec {
  /**
  * EscalatingRemediations contain a list of ordered remediation templates with a timeout. The remediation templates will be used one after another, until the unhealthy node gets healthy within the timeout of the currently processed remediation. The order of remediation is defined by the 'order' field of each 'escalatingRemediation'. Mutually exclusive with RemediationTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#escalating_remediations DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#escalating_remediations}
  */
  readonly escalatingRemediations?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediations[] | cdktf.IResolvable;
  /**
  * Remediation is allowed if at least 'MinHealthy' nodes selected by 'selector' are healthy. Expects either a positive integer value or a percentage value. Percentage values must be positive whole numbers and are capped at 100%. 100% is valid and will block all remediation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#min_healthy DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#min_healthy}
  */
  readonly minHealthy?: string;
  /**
  * PauseRequests will prevent any new remediation to start, while in-flight remediations keep running. Each entry is free form, and ideally represents the requested party reason for this pausing - i.e: 'imaginary-cluster-upgrade-manager-operator'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#pause_requests DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#pause_requests}
  */
  readonly pauseRequests?: string[];
  /**
  * RemediationTemplate is a reference to a remediation template provided by an infrastructure provider. If a node needs remediation the controller will create an object from this template and then it should be picked up by a remediation provider. Mutually exclusive with EscalatingRemediations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#remediation_template DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#remediation_template}
  */
  readonly remediationTemplate?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplate;
  /**
  * Label selector to match nodes whose health will be exercised. Selecting both control-plane and worker nodes in one NHC CR is highly discouraged and can result in undesired behaviour. Note: mandatory now for above reason, but for backwards compatibility existing CRs will continue to work with an empty selector, which matches all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#selector DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelector;
  /**
  * UnhealthyConditions contains a list of the conditions that determine whether a node is considered unhealthy. The conditions are combined in a logical OR, i.e. if any of the conditions is met, the node is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#unhealthy_conditions DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest#unhealthy_conditions}
  */
  readonly unhealthyConditions?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditions[] | cdktf.IResolvable;
}

export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalating_remediations: cdktf.listMapper(dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsToTerraform, false)(struct!.escalatingRemediations),
    min_healthy: cdktf.stringToTerraform(struct!.minHealthy),
    pause_requests: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pauseRequests),
    remediation_template: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplateToTerraform(struct!.remediationTemplate),
    selector: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    unhealthy_conditions: cdktf.listMapper(dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsToTerraform, false)(struct!.unhealthyConditions),
  }
}


export function dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalating_remediations: {
      value: cdktf.listMapperHcl(dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsToHclTerraform, false)(struct!.escalatingRemediations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsList",
    },
    min_healthy: {
      value: cdktf.stringToHclTerraform(struct!.minHealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_requests: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pauseRequests),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remediation_template: {
      value: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplateToHclTerraform(struct!.remediationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplate",
    },
    selector: {
      value: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelector",
    },
    unhealthy_conditions: {
      value: cdktf.listMapperHcl(dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsToHclTerraform, false)(struct!.unhealthyConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalatingRemediations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalatingRemediations = this._escalatingRemediations?.internalValue;
    }
    if (this._minHealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthy = this._minHealthy;
    }
    if (this._pauseRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseRequests = this._pauseRequests;
    }
    if (this._remediationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTemplate = this._remediationTemplate?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._unhealthyConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyConditions = this._unhealthyConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escalatingRemediations.internalValue = undefined;
      this._minHealthy = undefined;
      this._pauseRequests = undefined;
      this._remediationTemplate.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._unhealthyConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escalatingRemediations.internalValue = value.escalatingRemediations;
      this._minHealthy = value.minHealthy;
      this._pauseRequests = value.pauseRequests;
      this._remediationTemplate.internalValue = value.remediationTemplate;
      this._selector.internalValue = value.selector;
      this._unhealthyConditions.internalValue = value.unhealthyConditions;
    }
  }

  // escalating_remediations - computed: false, optional: true, required: false
  private _escalatingRemediations = new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediationsList(this, "escalating_remediations", false);
  public get escalatingRemediations() {
    return this._escalatingRemediations;
  }
  public putEscalatingRemediations(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecEscalatingRemediations[] | cdktf.IResolvable) {
    this._escalatingRemediations.internalValue = value;
  }
  public resetEscalatingRemediations() {
    this._escalatingRemediations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalatingRemediationsInput() {
    return this._escalatingRemediations.internalValue;
  }

  // min_healthy - computed: false, optional: true, required: false
  private _minHealthy?: string; 
  public get minHealthy() {
    return this.getStringAttribute('min_healthy');
  }
  public set minHealthy(value: string) {
    this._minHealthy = value;
  }
  public resetMinHealthy() {
    this._minHealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthyInput() {
    return this._minHealthy;
  }

  // pause_requests - computed: false, optional: true, required: false
  private _pauseRequests?: string[]; 
  public get pauseRequests() {
    return this.getListAttribute('pause_requests');
  }
  public set pauseRequests(value: string[]) {
    this._pauseRequests = value;
  }
  public resetPauseRequests() {
    this._pauseRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseRequestsInput() {
    return this._pauseRequests;
  }

  // remediation_template - computed: false, optional: true, required: false
  private _remediationTemplate = new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplateOutputReference(this, "remediation_template");
  public get remediationTemplate() {
    return this._remediationTemplate;
  }
  public putRemediationTemplate(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecRemediationTemplate) {
    this._remediationTemplate.internalValue = value;
  }
  public resetRemediationTemplate() {
    this._remediationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateInput() {
    return this._remediationTemplate.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // unhealthy_conditions - computed: false, optional: true, required: false
  private _unhealthyConditions = new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditionsList(this, "unhealthy_conditions", false);
  public get unhealthyConditions() {
    return this._unhealthyConditions;
  }
  public putUnhealthyConditions(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecUnhealthyConditions[] | cdktf.IResolvable) {
    this._unhealthyConditions.internalValue = value;
  }
  public resetUnhealthyConditions() {
    this._unhealthyConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyConditionsInput() {
    return this._unhealthyConditions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest k8s_remediation_medik8s_io_node_health_check_v1alpha1_manifest}
*/
export class DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_remediation_medik8s_io_node_health_check_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_remediation_medik8s_io_node_health_check_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/remediation_medik8s_io_node_health_check_v1alpha1_manifest k8s_remediation_medik8s_io_node_health_check_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_remediation_medik8s_io_node_health_check_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRemediationMedik8SIoNodeHealthCheckV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
