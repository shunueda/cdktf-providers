// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#metadata DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#spec DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpec;
}
export interface DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#annotations DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#labels DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#name DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#namespace DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#cpu DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#memory DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimitsToTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimitsToHclTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimits | cdktf.IResolvable): any {
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

export class DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimits | cdktf.IResolvable | undefined) {
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
export interface DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#cpu DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#memory DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequestsToTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequestsToHclTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequests | cdktf.IResolvable): any {
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

export class DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequests | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequests | cdktf.IResolvable | undefined) {
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
export interface DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#limits DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#limits}
  */
  readonly limits?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimits;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#requests DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#requests}
  */
  readonly requests?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequests;
}

export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsToTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimitsToTerraform(struct!.limits),
    requests: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequestsToTerraform(struct!.requests),
  }
}


export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsToHclTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimits",
    },
    requests: {
      value: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequests",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _limits = new DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsLimits) {
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
  private _requests = new DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsRequests) {
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
export interface DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpec {
  /**
  * Additional labels defined on the resource, which should be propagated to child resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#additional_labels DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#additional_labels}
  */
  readonly additionalLabels?: string[];
  /**
  * Name of the backup PVC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#backup_pvc DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#backup_pvc}
  */
  readonly backupPvc?: string;
  /**
  * (Deprecated) Namespace the PVC is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#backup_pvc_namespace DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#backup_pvc_namespace}
  */
  readonly backupPvcNamespace?: string;
  /**
  * Resource requirements for the management pod used to create a backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#backup_resource_requirements DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#backup_resource_requirements}
  */
  readonly backupResourceRequirements?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirements;
  /**
  * Storage class to use when creating PVC for backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#backup_storage_class DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#backup_storage_class}
  */
  readonly backupStorageClass?: string;
  /**
  * Storage requirements for backup PVC (may be similar to existing postgres PVC backing up from)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#backup_storage_requirements DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#backup_storage_requirements}
  */
  readonly backupStorageRequirements?: string;
  /**
  * Flag to indicate if backup should be deleted on PVC if AWXBackup object is deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#clean_backup_on_delete DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#clean_backup_on_delete}
  */
  readonly cleanBackupOnDelete?: boolean | cdktf.IResolvable;
  /**
  * nodeSelector for the Postgres pods to backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#db_management_pod_node_selector DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#db_management_pod_node_selector}
  */
  readonly dbManagementPodNodeSelector?: string;
  /**
  * Name of the deployment to be backed up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#deployment_name DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#deployment_name}
  */
  readonly deploymentName: string;
  /**
  * The image pull policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#image_pull_policy DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Configure no_log for no_log tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#no_log DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#no_log}
  */
  readonly noLog?: boolean | cdktf.IResolvable;
  /**
  * Additional parameters for the pg_dump command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#pg_dump_suffix DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#pg_dump_suffix}
  */
  readonly pgDumpSuffix?: string;
  /**
  * Registry path to the PostgreSQL container to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#postgres_image DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#postgres_image}
  */
  readonly postgresImage?: string;
  /**
  * PostgreSQL container image version to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#postgres_image_version DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#postgres_image_version}
  */
  readonly postgresImageVersion?: string;
  /**
  * Label selector used to identify postgres pod for backing up data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#postgres_label_selector DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#postgres_label_selector}
  */
  readonly postgresLabelSelector?: string;
  /**
  * Number of hours worth of events table partitions to precreate before backup to avoid pg_dump locks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#precreate_partition_hours DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#precreate_partition_hours}
  */
  readonly precreatePartitionHours?: number;
  /**
  * Maintain some of the recommended 'app.kubernetes.io/*' labels on the resource (self)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#set_self_labels DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest#set_self_labels}
  */
  readonly setSelfLabels?: boolean | cdktf.IResolvable;
}

export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecToTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalLabels),
    backup_pvc: cdktf.stringToTerraform(struct!.backupPvc),
    backup_pvc_namespace: cdktf.stringToTerraform(struct!.backupPvcNamespace),
    backup_resource_requirements: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsToTerraform(struct!.backupResourceRequirements),
    backup_storage_class: cdktf.stringToTerraform(struct!.backupStorageClass),
    backup_storage_requirements: cdktf.stringToTerraform(struct!.backupStorageRequirements),
    clean_backup_on_delete: cdktf.booleanToTerraform(struct!.cleanBackupOnDelete),
    db_management_pod_node_selector: cdktf.stringToTerraform(struct!.dbManagementPodNodeSelector),
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    no_log: cdktf.booleanToTerraform(struct!.noLog),
    pg_dump_suffix: cdktf.stringToTerraform(struct!.pgDumpSuffix),
    postgres_image: cdktf.stringToTerraform(struct!.postgresImage),
    postgres_image_version: cdktf.stringToTerraform(struct!.postgresImageVersion),
    postgres_label_selector: cdktf.stringToTerraform(struct!.postgresLabelSelector),
    precreate_partition_hours: cdktf.numberToTerraform(struct!.precreatePartitionHours),
    set_self_labels: cdktf.booleanToTerraform(struct!.setSelfLabels),
  }
}


export function dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpec | cdktf.IResolvable): any {
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
    backup_resource_requirements: {
      value: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsToHclTerraform(struct!.backupResourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirements",
    },
    backup_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.backupStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_storage_requirements: {
      value: cdktf.stringToHclTerraform(struct!.backupStorageRequirements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clean_backup_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.cleanBackupOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    pg_dump_suffix: {
      value: cdktf.stringToHclTerraform(struct!.pgDumpSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    precreate_partition_hours: {
      value: cdktf.numberToHclTerraform(struct!.precreatePartitionHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_self_labels: {
      value: cdktf.booleanToHclTerraform(struct!.setSelfLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    if (this._backupPvc !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPvc = this._backupPvc;
    }
    if (this._backupPvcNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPvcNamespace = this._backupPvcNamespace;
    }
    if (this._backupResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupResourceRequirements = this._backupResourceRequirements?.internalValue;
    }
    if (this._backupStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageClass = this._backupStorageClass;
    }
    if (this._backupStorageRequirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageRequirements = this._backupStorageRequirements;
    }
    if (this._cleanBackupOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanBackupOnDelete = this._cleanBackupOnDelete;
    }
    if (this._dbManagementPodNodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbManagementPodNodeSelector = this._dbManagementPodNodeSelector;
    }
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._noLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLog = this._noLog;
    }
    if (this._pgDumpSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgDumpSuffix = this._pgDumpSuffix;
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
    if (this._precreatePartitionHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.precreatePartitionHours = this._precreatePartitionHours;
    }
    if (this._setSelfLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSelfLabels = this._setSelfLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalLabels = undefined;
      this._backupPvc = undefined;
      this._backupPvcNamespace = undefined;
      this._backupResourceRequirements.internalValue = undefined;
      this._backupStorageClass = undefined;
      this._backupStorageRequirements = undefined;
      this._cleanBackupOnDelete = undefined;
      this._dbManagementPodNodeSelector = undefined;
      this._deploymentName = undefined;
      this._imagePullPolicy = undefined;
      this._noLog = undefined;
      this._pgDumpSuffix = undefined;
      this._postgresImage = undefined;
      this._postgresImageVersion = undefined;
      this._postgresLabelSelector = undefined;
      this._precreatePartitionHours = undefined;
      this._setSelfLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalLabels = value.additionalLabels;
      this._backupPvc = value.backupPvc;
      this._backupPvcNamespace = value.backupPvcNamespace;
      this._backupResourceRequirements.internalValue = value.backupResourceRequirements;
      this._backupStorageClass = value.backupStorageClass;
      this._backupStorageRequirements = value.backupStorageRequirements;
      this._cleanBackupOnDelete = value.cleanBackupOnDelete;
      this._dbManagementPodNodeSelector = value.dbManagementPodNodeSelector;
      this._deploymentName = value.deploymentName;
      this._imagePullPolicy = value.imagePullPolicy;
      this._noLog = value.noLog;
      this._pgDumpSuffix = value.pgDumpSuffix;
      this._postgresImage = value.postgresImage;
      this._postgresImageVersion = value.postgresImageVersion;
      this._postgresLabelSelector = value.postgresLabelSelector;
      this._precreatePartitionHours = value.precreatePartitionHours;
      this._setSelfLabels = value.setSelfLabels;
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

  // backup_resource_requirements - computed: false, optional: true, required: false
  private _backupResourceRequirements = new DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirementsOutputReference(this, "backup_resource_requirements");
  public get backupResourceRequirements() {
    return this._backupResourceRequirements;
  }
  public putBackupResourceRequirements(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecBackupResourceRequirements) {
    this._backupResourceRequirements.internalValue = value;
  }
  public resetBackupResourceRequirements() {
    this._backupResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupResourceRequirementsInput() {
    return this._backupResourceRequirements.internalValue;
  }

  // backup_storage_class - computed: false, optional: true, required: false
  private _backupStorageClass?: string; 
  public get backupStorageClass() {
    return this.getStringAttribute('backup_storage_class');
  }
  public set backupStorageClass(value: string) {
    this._backupStorageClass = value;
  }
  public resetBackupStorageClass() {
    this._backupStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageClassInput() {
    return this._backupStorageClass;
  }

  // backup_storage_requirements - computed: false, optional: true, required: false
  private _backupStorageRequirements?: string; 
  public get backupStorageRequirements() {
    return this.getStringAttribute('backup_storage_requirements');
  }
  public set backupStorageRequirements(value: string) {
    this._backupStorageRequirements = value;
  }
  public resetBackupStorageRequirements() {
    this._backupStorageRequirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageRequirementsInput() {
    return this._backupStorageRequirements;
  }

  // clean_backup_on_delete - computed: false, optional: true, required: false
  private _cleanBackupOnDelete?: boolean | cdktf.IResolvable; 
  public get cleanBackupOnDelete() {
    return this.getBooleanAttribute('clean_backup_on_delete');
  }
  public set cleanBackupOnDelete(value: boolean | cdktf.IResolvable) {
    this._cleanBackupOnDelete = value;
  }
  public resetCleanBackupOnDelete() {
    this._cleanBackupOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanBackupOnDeleteInput() {
    return this._cleanBackupOnDelete;
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

  // pg_dump_suffix - computed: false, optional: true, required: false
  private _pgDumpSuffix?: string; 
  public get pgDumpSuffix() {
    return this.getStringAttribute('pg_dump_suffix');
  }
  public set pgDumpSuffix(value: string) {
    this._pgDumpSuffix = value;
  }
  public resetPgDumpSuffix() {
    this._pgDumpSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgDumpSuffixInput() {
    return this._pgDumpSuffix;
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

  // precreate_partition_hours - computed: false, optional: true, required: false
  private _precreatePartitionHours?: number; 
  public get precreatePartitionHours() {
    return this.getNumberAttribute('precreate_partition_hours');
  }
  public set precreatePartitionHours(value: number) {
    this._precreatePartitionHours = value;
  }
  public resetPrecreatePartitionHours() {
    this._precreatePartitionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precreatePartitionHoursInput() {
    return this._precreatePartitionHours;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest k8s_awx_ansible_com_awx_backup_v1beta1_manifest}
*/
export class DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_awx_ansible_com_awx_backup_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAwxAnsibleComAwxBackupV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_awx_ansible_com_awx_backup_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/awx_ansible_com_awx_backup_v1beta1_manifest k8s_awx_ansible_com_awx_backup_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_awx_ansible_com_awx_backup_v1beta1_manifest',
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
  private _metadata = new DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpec) {
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
      metadata: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAwxAnsibleComAwxBackupV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
