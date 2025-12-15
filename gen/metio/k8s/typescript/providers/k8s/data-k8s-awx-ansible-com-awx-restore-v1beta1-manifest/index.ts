// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#metadata DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#spec DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpec;
}
export interface DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#annotations DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#labels DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#name DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#namespace DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#cpu DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#memory DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimitsToTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimitsToHclTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
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
}
export interface DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#cpu DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#memory DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequestsToTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequestsToHclTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
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
}
export interface DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#limits DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#limits}
  */
  readonly limits?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimits;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#requests DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#requests}
  */
  readonly requests?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequests;
}

export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsToTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimitsToTerraform(struct!.limits),
    requests: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequestsToTerraform(struct!.requests),
  }
}


export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsToHclTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimits",
    },
    requests: {
      value: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequests",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpec {
  /**
  * Additional labels defined on the resource, which should be propagated to child resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#additional_labels DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#additional_labels}
  */
  readonly additionalLabels?: string[];
  /**
  * Backup directory name, set as a status found on the awxbackup object (backupDirectory)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#backup_dir DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#backup_dir}
  */
  readonly backupDir?: string;
  /**
  * AWXBackup object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#backup_name DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#backup_name}
  */
  readonly backupName?: string;
  /**
  * Name of the PVC to be restored from, set as a status found on the awxbackup object (backupClaim)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#backup_pvc DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#backup_pvc}
  */
  readonly backupPvc?: string;
  /**
  * (Deprecated) Namespace the PVC is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#backup_pvc_namespace DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#backup_pvc_namespace}
  */
  readonly backupPvcNamespace?: string;
  /**
  * Backup source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#backup_source DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#backup_source}
  */
  readonly backupSource?: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#cluster_name DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * nodeSelector for the Postgres pods to backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#db_management_pod_node_selector DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#db_management_pod_node_selector}
  */
  readonly dbManagementPodNodeSelector?: string;
  /**
  * Name of the restored deployment. This should be different from the original deployment name if the original deployment still exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#deployment_name DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#deployment_name}
  */
  readonly deploymentName: string;
  /**
  * Force drop the database before restoring. USE WITH CAUTION!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#force_drop_db DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#force_drop_db}
  */
  readonly forceDropDb?: boolean | cdktf.IResolvable;
  /**
  * The image pull policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#image_pull_policy DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Configure no_log for no_log tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#no_log DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#no_log}
  */
  readonly noLog?: boolean | cdktf.IResolvable;
  /**
  * Registry path to the PostgreSQL container to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#postgres_image DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#postgres_image}
  */
  readonly postgresImage?: string;
  /**
  * PostgreSQL container image version to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#postgres_image_version DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#postgres_image_version}
  */
  readonly postgresImageVersion?: string;
  /**
  * Label selector used to identify postgres pod for backing up data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#postgres_label_selector DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#postgres_label_selector}
  */
  readonly postgresLabelSelector?: string;
  /**
  * Resource requirements for the management pod that restores AWX from a backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#restore_resource_requirements DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#restore_resource_requirements}
  */
  readonly restoreResourceRequirements?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirements;
  /**
  * Maintain some of the recommended 'app.kubernetes.io/*' labels on the resource (self)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#set_self_labels DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#set_self_labels}
  */
  readonly setSelfLabels?: boolean | cdktf.IResolvable;
  /**
  * Overrides for the AWX spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#spec_overrides DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest#spec_overrides}
  */
  readonly specOverrides?: { [key: string]: string };
}

export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecToTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalLabels),
    backup_dir: cdktf.stringToTerraform(struct!.backupDir),
    backup_name: cdktf.stringToTerraform(struct!.backupName),
    backup_pvc: cdktf.stringToTerraform(struct!.backupPvc),
    backup_pvc_namespace: cdktf.stringToTerraform(struct!.backupPvcNamespace),
    backup_source: cdktf.stringToTerraform(struct!.backupSource),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    db_management_pod_node_selector: cdktf.stringToTerraform(struct!.dbManagementPodNodeSelector),
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    force_drop_db: cdktf.booleanToTerraform(struct!.forceDropDb),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    no_log: cdktf.booleanToTerraform(struct!.noLog),
    postgres_image: cdktf.stringToTerraform(struct!.postgresImage),
    postgres_image_version: cdktf.stringToTerraform(struct!.postgresImageVersion),
    postgres_label_selector: cdktf.stringToTerraform(struct!.postgresLabelSelector),
    restore_resource_requirements: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsToTerraform(struct!.restoreResourceRequirements),
    set_self_labels: cdktf.booleanToTerraform(struct!.setSelfLabels),
    spec_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.specOverrides),
  }
}


export function dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backup_dir: {
      value: cdktf.stringToHclTerraform(struct!.backupDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_name: {
      value: cdktf.stringToHclTerraform(struct!.backupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_pvc: {
      value: cdktf.stringToHclTerraform(struct!.backupPvc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_pvc_namespace: {
      value: cdktf.stringToHclTerraform(struct!.backupPvcNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_source: {
      value: cdktf.stringToHclTerraform(struct!.backupSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_management_pod_node_selector: {
      value: cdktf.stringToHclTerraform(struct!.dbManagementPodNodeSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_drop_db: {
      value: cdktf.booleanToHclTerraform(struct!.forceDropDb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_log: {
      value: cdktf.booleanToHclTerraform(struct!.noLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    postgres_image: {
      value: cdktf.stringToHclTerraform(struct!.postgresImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres_image_version: {
      value: cdktf.stringToHclTerraform(struct!.postgresImageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres_label_selector: {
      value: cdktf.stringToHclTerraform(struct!.postgresLabelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_resource_requirements: {
      value: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsToHclTerraform(struct!.restoreResourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirements",
    },
    set_self_labels: {
      value: cdktf.booleanToHclTerraform(struct!.setSelfLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spec_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.specOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    if (this._backupDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDir = this._backupDir;
    }
    if (this._backupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupName = this._backupName;
    }
    if (this._backupPvc !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPvc = this._backupPvc;
    }
    if (this._backupPvcNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPvcNamespace = this._backupPvcNamespace;
    }
    if (this._backupSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSource = this._backupSource;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._dbManagementPodNodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbManagementPodNodeSelector = this._dbManagementPodNodeSelector;
    }
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._forceDropDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDropDb = this._forceDropDb;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._noLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLog = this._noLog;
    }
    if (this._postgresImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresImage = this._postgresImage;
    }
    if (this._postgresImageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresImageVersion = this._postgresImageVersion;
    }
    if (this._postgresLabelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresLabelSelector = this._postgresLabelSelector;
    }
    if (this._restoreResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreResourceRequirements = this._restoreResourceRequirements?.internalValue;
    }
    if (this._setSelfLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSelfLabels = this._setSelfLabels;
    }
    if (this._specOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.specOverrides = this._specOverrides;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalLabels = undefined;
      this._backupDir = undefined;
      this._backupName = undefined;
      this._backupPvc = undefined;
      this._backupPvcNamespace = undefined;
      this._backupSource = undefined;
      this._clusterName = undefined;
      this._dbManagementPodNodeSelector = undefined;
      this._deploymentName = undefined;
      this._forceDropDb = undefined;
      this._imagePullPolicy = undefined;
      this._noLog = undefined;
      this._postgresImage = undefined;
      this._postgresImageVersion = undefined;
      this._postgresLabelSelector = undefined;
      this._restoreResourceRequirements.internalValue = undefined;
      this._setSelfLabels = undefined;
      this._specOverrides = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalLabels = value.additionalLabels;
      this._backupDir = value.backupDir;
      this._backupName = value.backupName;
      this._backupPvc = value.backupPvc;
      this._backupPvcNamespace = value.backupPvcNamespace;
      this._backupSource = value.backupSource;
      this._clusterName = value.clusterName;
      this._dbManagementPodNodeSelector = value.dbManagementPodNodeSelector;
      this._deploymentName = value.deploymentName;
      this._forceDropDb = value.forceDropDb;
      this._imagePullPolicy = value.imagePullPolicy;
      this._noLog = value.noLog;
      this._postgresImage = value.postgresImage;
      this._postgresImageVersion = value.postgresImageVersion;
      this._postgresLabelSelector = value.postgresLabelSelector;
      this._restoreResourceRequirements.internalValue = value.restoreResourceRequirements;
      this._setSelfLabels = value.setSelfLabels;
      this._specOverrides = value.specOverrides;
    }
  }

  // additional_labels - computed: false, optional: true, required: false
  private _additionalLabels?: string[]; 
  public get additionalLabels() {
    return this.getListAttribute('additional_labels');
  }
  public set additionalLabels(value: string[]) {
    this._additionalLabels = value;
  }
  public resetAdditionalLabels() {
    this._additionalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLabelsInput() {
    return this._additionalLabels;
  }

  // backup_dir - computed: false, optional: true, required: false
  private _backupDir?: string; 
  public get backupDir() {
    return this.getStringAttribute('backup_dir');
  }
  public set backupDir(value: string) {
    this._backupDir = value;
  }
  public resetBackupDir() {
    this._backupDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDirInput() {
    return this._backupDir;
  }

  // backup_name - computed: false, optional: true, required: false
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  public resetBackupName() {
    this._backupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }

  // backup_pvc - computed: false, optional: true, required: false
  private _backupPvc?: string; 
  public get backupPvc() {
    return this.getStringAttribute('backup_pvc');
  }
  public set backupPvc(value: string) {
    this._backupPvc = value;
  }
  public resetBackupPvc() {
    this._backupPvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPvcInput() {
    return this._backupPvc;
  }

  // backup_pvc_namespace - computed: false, optional: true, required: false
  private _backupPvcNamespace?: string; 
  public get backupPvcNamespace() {
    return this.getStringAttribute('backup_pvc_namespace');
  }
  public set backupPvcNamespace(value: string) {
    this._backupPvcNamespace = value;
  }
  public resetBackupPvcNamespace() {
    this._backupPvcNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPvcNamespaceInput() {
    return this._backupPvcNamespace;
  }

  // backup_source - computed: false, optional: true, required: false
  private _backupSource?: string; 
  public get backupSource() {
    return this.getStringAttribute('backup_source');
  }
  public set backupSource(value: string) {
    this._backupSource = value;
  }
  public resetBackupSource() {
    this._backupSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSourceInput() {
    return this._backupSource;
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

  // db_management_pod_node_selector - computed: false, optional: true, required: false
  private _dbManagementPodNodeSelector?: string; 
  public get dbManagementPodNodeSelector() {
    return this.getStringAttribute('db_management_pod_node_selector');
  }
  public set dbManagementPodNodeSelector(value: string) {
    this._dbManagementPodNodeSelector = value;
  }
  public resetDbManagementPodNodeSelector() {
    this._dbManagementPodNodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbManagementPodNodeSelectorInput() {
    return this._dbManagementPodNodeSelector;
  }

  // deployment_name - computed: false, optional: false, required: true
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // force_drop_db - computed: false, optional: true, required: false
  private _forceDropDb?: boolean | cdktf.IResolvable; 
  public get forceDropDb() {
    return this.getBooleanAttribute('force_drop_db');
  }
  public set forceDropDb(value: boolean | cdktf.IResolvable) {
    this._forceDropDb = value;
  }
  public resetForceDropDb() {
    this._forceDropDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDropDbInput() {
    return this._forceDropDb;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // no_log - computed: false, optional: true, required: false
  private _noLog?: boolean | cdktf.IResolvable; 
  public get noLog() {
    return this.getBooleanAttribute('no_log');
  }
  public set noLog(value: boolean | cdktf.IResolvable) {
    this._noLog = value;
  }
  public resetNoLog() {
    this._noLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLogInput() {
    return this._noLog;
  }

  // postgres_image - computed: false, optional: true, required: false
  private _postgresImage?: string; 
  public get postgresImage() {
    return this.getStringAttribute('postgres_image');
  }
  public set postgresImage(value: string) {
    this._postgresImage = value;
  }
  public resetPostgresImage() {
    this._postgresImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresImageInput() {
    return this._postgresImage;
  }

  // postgres_image_version - computed: false, optional: true, required: false
  private _postgresImageVersion?: string; 
  public get postgresImageVersion() {
    return this.getStringAttribute('postgres_image_version');
  }
  public set postgresImageVersion(value: string) {
    this._postgresImageVersion = value;
  }
  public resetPostgresImageVersion() {
    this._postgresImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresImageVersionInput() {
    return this._postgresImageVersion;
  }

  // postgres_label_selector - computed: false, optional: true, required: false
  private _postgresLabelSelector?: string; 
  public get postgresLabelSelector() {
    return this.getStringAttribute('postgres_label_selector');
  }
  public set postgresLabelSelector(value: string) {
    this._postgresLabelSelector = value;
  }
  public resetPostgresLabelSelector() {
    this._postgresLabelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresLabelSelectorInput() {
    return this._postgresLabelSelector;
  }

  // restore_resource_requirements - computed: false, optional: true, required: false
  private _restoreResourceRequirements = new DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirementsOutputReference(this, "restore_resource_requirements");
  public get restoreResourceRequirements() {
    return this._restoreResourceRequirements;
  }
  public putRestoreResourceRequirements(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecRestoreResourceRequirements) {
    this._restoreResourceRequirements.internalValue = value;
  }
  public resetRestoreResourceRequirements() {
    this._restoreResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreResourceRequirementsInput() {
    return this._restoreResourceRequirements.internalValue;
  }

  // set_self_labels - computed: false, optional: true, required: false
  private _setSelfLabels?: boolean | cdktf.IResolvable; 
  public get setSelfLabels() {
    return this.getBooleanAttribute('set_self_labels');
  }
  public set setSelfLabels(value: boolean | cdktf.IResolvable) {
    this._setSelfLabels = value;
  }
  public resetSetSelfLabels() {
    this._setSelfLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSelfLabelsInput() {
    return this._setSelfLabels;
  }

  // spec_overrides - computed: false, optional: true, required: false
  private _specOverrides?: { [key: string]: string }; 
  public get specOverrides() {
    return this.getStringMapAttribute('spec_overrides');
  }
  public set specOverrides(value: { [key: string]: string }) {
    this._specOverrides = value;
  }
  public resetSpecOverrides() {
    this._specOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specOverridesInput() {
    return this._specOverrides;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest k8s_awx_ansible_com_awx_restore_v1beta1_manifest}
*/
export class DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_awx_ansible_com_awx_restore_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAwxAnsibleComAwxRestoreV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_awx_ansible_com_awx_restore_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/awx_ansible_com_awx_restore_v1beta1_manifest k8s_awx_ansible_com_awx_restore_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_awx_ansible_com_awx_restore_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpec) {
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
      metadata: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAwxAnsibleComAwxRestoreV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
